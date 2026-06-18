/**
 * 在线奖励接口
 *
 * POST /game/online/claim
 *   客户端点击"领取"时调用，服务端独立验证在线时长后发货
 *
 * 安全保证：
 *   1. 在线时长由服务端根据 loginAt 时间戳计算，不信任客户端上报值
 *   2. 每用户每自然日每档位只能领取一次（Redis 幂等键）
 *   3. 钻石发放走数据库事务，与幂等键原子绑定
 */
const express = require("express");
const router = express.Router();
const redis = require("../redis");
const verifySession = require("../middleware/verifySession");
const config = require("../config");
const pool = require("../db");

// 菲律宾标准时间 UTC+8，用于自然日边界
const MANILA_OFFSET_MS = 8 * 60 * 60 * 1000;

function getManilaDateStr() {
  return new Date(Date.now() + MANILA_OFFSET_MS).toISOString().slice(0, 10);
}

// POST /game/online/claim
// Body: { sessionToken, rewardId }
router.post("/claim", verifySession, async (req, res) => {
  const customerId = req.customerId;
  const rid = Number(req.body.rewardId);

  const rewardCfg = config.onlineRewardCfg.find(function (r) { return r.id === rid; });
  if (!rewardCfg) {
    return res.status(400).json({ code: 400, message: "Invalid rewardId" });
  }

  // ── 1. 取服务端登录时间戳，计算实际在线分钟数 ──────────────
  const loginAtStr = await redis.get("loginAt:" + customerId);
  if (!loginAtStr) {
    return res.status(403).json({ code: 403, message: "Login record not found, please re-login" });
  }
  const onlineMinutes = Math.floor((Date.now() - Number(loginAtStr)) / 60000);
  if (onlineMinutes < rewardCfg.condition) {
    return res.status(403).json({
      code: 403,
      message: "Online time insufficient",
      data: { required: rewardCfg.condition, current: onlineMinutes },
    });
  }

  // ── 2. 幂等校验：每用户每自然日每档位只能领一次 ─────────────
  const today = getManilaDateStr();
  const claimKey = "online_claimed:" + customerId + ":" + today + ":" + rid;
  // SET NX 原子操作：只有不存在时才设置，返回 "OK" 表示抢占成功
  const acquired = await redis.set(claimKey, "1", "EX", 48 * 3600, "NX");
  if (!acquired) {
    return res.status(409).json({ code: 409, message: "Already claimed today" });
  }

  // ── 3. 数据库发货（事务保证原子性） ──────────────────────────
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    await conn.execute(
      "INSERT INTO users (customer_id, diamond) VALUES (?, ?) " +
      "ON DUPLICATE KEY UPDATE diamond = diamond + VALUES(diamond)",
      [customerId, rewardCfg.diamonds]
    );
    const [rows] = await conn.execute(
      "SELECT diamond FROM users WHERE customer_id = ?",
      [customerId]
    );
    await conn.commit();

    return res.json({
      code: 200,
      message: "success",
      data: { diamonds: rewardCfg.diamonds, balance: rows[0].diamond },
    });
  } catch (err) {
    await conn.rollback();
    // 数据库失败：回滚幂等键，让客户端可以重试
    await redis.del(claimKey);
    console.error("[online/claim] db error:", err);
    return res.status(500).json({ code: 500, message: "Internal server error" });
  } finally {
    conn.release();
  }
});

module.exports = router;
