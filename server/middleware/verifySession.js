/**
 * verifySession 中间件
 *
 * 验证客户端请求中携带的 sessionToken（由 /game/login/verify 颁发）
 * 验证通过后将 customerId 注入 req.customerId，供后续路由使用。
 *
 * 用法：router.post("/xxx", verifySession, handler)
 */
const { verifySessionToken } = require("../routes/login");

async function verifySession(req, res, next) {
  const { sessionToken } = req.body || {};
  if (!sessionToken) {
    return res.status(401).json({ code: 401, message: "Missing sessionToken" });
  }
  const session = await verifySessionToken(sessionToken);
  if (!session) {
    return res.status(401).json({ code: 401, message: "Invalid or expired session" });
  }
  req.customerId = session.customerId;
  next();
}

module.exports = verifySession;