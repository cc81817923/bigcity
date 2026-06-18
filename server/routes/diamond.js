/**
 * POST /game/diamond/consume
 *
 * 客户端钻石消费（服务端原子扣除）
 *
 * 请求：{ sessionToken, amount }
 * 响应：{ code:200, data:{ balance:N } }
 *       { code:402, message:"Insufficient diamonds" }
 *       { code:401, message:"Invalid session" }
 */
const express = require("express");
const router = express.Router();
const { verifySessionToken } = require("./login");
const { consumeDiamond } = require("../game/userService");

router.post("/consume", async (req, res) => {
  const { sessionToken, amount } = req.body || {};
  if (!sessionToken || !amount || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ code: 400, message: "Invalid params" });
  }

  const session = verifySessionToken(sessionToken);
  if (!session) {
    return res.status(401).json({ code: 401, message: "Invalid or expired session" });
  }

  try {
    const result = await consumeDiamond(session.customerId, amount);
    if (!result.ok) {
      return res.status(402).json({ code: 402, message: "Insufficient diamonds", data: { balance: result.balance } });
    }
    res.json({ code: 200, message: "success", data: { balance: result.balance } });
  } catch (err) {
    console.error("[diamond/consume]", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
});

module.exports = router;