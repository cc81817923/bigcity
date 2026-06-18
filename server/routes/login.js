/**
 * 接口 1：POST /game/login/token
 *
 * BP 后端在玩家进入游戏前调用，生成绿色站前端登录所需的校验码（ticket URL）
 *
 * 请求参数：{ customerId, sign }
 * 响应：{ code:200, message:"success", data:{ url:"https://...?token=xxx" } }
 *
 * 附加：GET /game/login/verify?token=xxx
 * 游戏前端启动时用 token 换取 customerId + loginName
 */
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const verifyBP = require("../middleware/verifyBP");
const { getOrCreateUser, getCoinBalance } = require("../game/userService");

const redis = require("../redis");

const TOKEN_TTL_S   = 5 * 60;       // 5分钟
const SESSION_TTL_S = 4 * 60 * 60;  // 4小时

async function generateSessionToken(customerId) {
  const sessionToken = crypto.randomBytes(32).toString("hex");
  await redis.set(`session:${sessionToken}`, customerId, "EX", SESSION_TTL_S);
  return sessionToken;
}

async function verifySessionToken(sessionToken) {
  const customerId = await redis.get(`session:${sessionToken}`);
  if (!customerId) { return null; }
  return { customerId };
}

async function generateToken(customerId, loginName) {
  const token = crypto.randomBytes(24).toString("hex");
  await redis.set(
    `login:${token}`,
    JSON.stringify({ customerId, loginName: loginName || customerId }),
    "EX",
    TOKEN_TTL_S
  );
  return token;
}

async function verifyToken(token) {
  const raw = await redis.get(`login:${token}`);
  return raw ? JSON.parse(raw) : null;
}

// 接口 1：BP 后端调用，生成登录 URL
router.post("/token", verifyBP(), async (req, res) => {
  try {
    const { customerId } = req;
    const token = await generateToken(customerId);
    const url = `${process.env.GAME_FRONTEND_URL}/verify?token=${token}`;
    res.json({ code: 200, message: "success", data: { url } });
  } catch (err) {
    console.error("[login/token]", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
});

// GET /game/login/verify?token=xxx
// 游戏前端启动时携带 token 调用此接口换取 customerId + loginName
// 首次登录自动创建用户并送 200 钻石，响应中带 isNewUser 标记
router.get("/verify", async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ code: 400, message: "Missing token" });
  }
  const entry = await verifyToken(token);
  if (!entry) {
    return res.status(401).json({ code: 401, message: "Invalid or expired token" });
  }
  try {
    const { isNewUser } = await getOrCreateUser(entry.customerId);
    const diamond = await getCoinBalance(entry.customerId);
    const sessionToken = await generateSessionToken(entry.customerId);
    // 记录本次登录时间戳，供在线奖励服务端计时使用（TTL 36小时，跨自然日安全）
    await redis.set(`loginAt:${entry.customerId}`, Date.now().toString(), "EX", 36 * 3600);
    res.json({
      code: 200,
      message: "success",
      data: {
        customerId: entry.customerId,
        loginName: entry.loginName,
        isNewUser,
        sessionToken,
        diamond,
      },
    });
  } catch (err) {
    console.error("[login/verify]", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
});

module.exports = router;
module.exports.verifyToken = verifyToken;
module.exports.verifySessionToken = verifySessionToken;
