const pool = require("../db");
const config = require("../config");

// ── 用户欢乐豆查询（接口2用）─────────────────────────────────
// 返回玩家当前钻石数，若用户不存在返回 0
async function getCoinBalance(customerId) {
  const [rows] = await pool.execute(
    "SELECT diamond FROM users WHERE customer_id = ?",
    [customerId]
  );
  return rows.length ? rows[0].diamond : 0;
}

// ── 新手礼包是否可购买（接口2用）────────────────────────────
// goodsId=2 是新手礼包，买过一次后返回 0
async function getRiskCorrection(customerId) {
  const [rows] = await pool.execute(
    "SELECT 1 FROM orders WHERE customer_id = ? AND goods_id = 2 LIMIT 1",
    [customerId]
  );
  return rows.length ? 0 : 1;
}

// ── 订单防重（payCallback 前检查）────────────────────────────
// 返回 true 表示已处理过，直接幂等返回成功
async function isOrderProcessed(orderId) {
  const [rows] = await pool.execute(
    "SELECT 1 FROM orders WHERE order_id = ? LIMIT 1",
    [orderId]
  );
  return rows.length > 0;
}

// ── 发货（payCallback 时调用）────────────────────────────────
// 1. 查商品表拿钻石数
// 2. upsert 用户钻石余额
// 3. 插入订单记录
// 4. 返回新手礼包最新购买状态
async function deliverGoods(customerId, orderId, itemId, gameOrderId) {
  const item = config.shopItems.find((i) => i.goodsId === itemId);
  if (!item) {
    throw new Error(`Unknown goodsId: ${itemId}`);
  }
  const diamonds = item.diamonds;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // upsert 用户：首次自动创建，钻石累加
    await conn.execute(
      `INSERT INTO users (customer_id, diamond)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE diamond = diamond + VALUES(diamond)`,
      [customerId, diamonds]
    );

    // 记录订单（order_id 是主键，重复插入直接报错，外层幂等已拦截）
    await conn.execute(
      `INSERT INTO orders (order_id, game_order_id, customer_id, goods_id, diamonds)
       VALUES (?, ?, ?, ?, ?)`,
      [orderId, gameOrderId || "", customerId, itemId, diamonds]
    );

    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }

  // 新手礼包购买状态
  const riskCorrection = itemId === 2 ? 0 : await getRiskCorrection(customerId);
  return { riskCorrection };
}

// ── 客户端轮询订单状态（queryOrder 用）──────────────────────
// gameOrderId 是客户端生成的订单号（时间戳_customerId）
// 返回 { paid: true, diamonds: N } 或 null
async function getOrderStatus(gameOrderId) {
  const [rows] = await pool.execute(
    "SELECT diamonds FROM orders WHERE game_order_id = ? LIMIT 1",
    [gameOrderId]
  );
  if (!rows.length) { return null; }
  return { paid: true, diamonds: rows[0].diamonds };
}

// ── 服务端扣钻石（原子操作）────────────────────────────────────
// 成功返回 { ok: true, balance: N }
// 余额不足返回 { ok: false, reason: "insufficient" }
async function consumeDiamond(customerId, amount) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [rows] = await conn.execute(
      "SELECT diamond FROM users WHERE customer_id = ? FOR UPDATE",
      [customerId]
    );
    if (!rows.length || rows[0].diamond < amount) {
      await conn.rollback();
      return { ok: false, reason: "insufficient", balance: rows.length ? rows[0].diamond : 0 };
    }
    await conn.execute(
      "UPDATE users SET diamond = diamond - ? WHERE customer_id = ?",
      [amount, customerId]
    );
    const [updated] = await conn.execute(
      "SELECT diamond FROM users WHERE customer_id = ?",
      [customerId]
    );
    await conn.commit();
    return { ok: true, balance: updated[0].diamond };
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

// ── 新用户首次登录：不存在则创建并送 200 钻石──────────────────
// 返回 { isNewUser: true/false }
async function getOrCreateUser(customerId) {
  const [rows] = await pool.execute(
    "SELECT 1 FROM users WHERE customer_id = ? LIMIT 1",
    [customerId]
  );
  if (rows.length) {
    return { isNewUser: false };
  }
  await pool.execute(
    "INSERT INTO users (customer_id, diamond) VALUES (?, 200)",
    [customerId]
  );
  return { isNewUser: true };
}

module.exports = {
  getCoinBalance,
  getRiskCorrection,
  isOrderProcessed,
  deliverGoods,
  getOrderStatus,
  getOrCreateUser,
  consumeDiamond,
};
