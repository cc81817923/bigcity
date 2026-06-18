/**
 * 充值相关接口
 *
 * 接口 2：POST /game/recharge/getGoodsList
 *   BP 后端调用，返回欢乐豆余额 + 商品列表
 *
 * 接口 3：POST /game/recharge/payCallback
 *   BP 支付到账后回调，发货给玩家
 *
 * 附加：POST /game/recharge/queryOrder
 *   游戏客户端轮询订单状态（非文档接口，内部使用）
 */
const express = require("express");
const router = express.Router();
const verifyBP = require("../middleware/verifyBP");
const verifySession = require("../middleware/verifySession");
const userService = require("../game/userService");
const config = require("../config");

// ── 接口 2：查询商品列表 ───────────────────────────────────────
// 请求：{ customerId, sign }
// 响应：{ code:200, data:{ coin, riskCorrection, shopItems[] } }
router.post("/getGoodsList", verifyBP(), async (req, res) => {
  try {
    const { customerId } = req;
    const [coin, riskCorrection] = await Promise.all([
      userService.getCoinBalance(customerId),
      userService.getRiskCorrection(customerId),
    ]);

    const shopItems = config.shopItems.map(({ goodsId, price, diamonds, name }) => ({ goodsId, price, diamonds, name }));

    res.json({
      code: 200,
      message: "success",
      data: { coin, riskCorrection, shopItems },
    });
  } catch (err) {
    console.error("[recharge/getGoodsList]", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
});

// ── 接口 3：支付成功回调（发货）──────────────────────────────
// 请求：{ customerId, orderId, itemId, sign }
// 响应：{ code:200, data:{ riskCorrection } }
router.post("/payCallback", verifyBP(["orderId", "itemId"]), async (req, res) => {
  try {
    const { customerId } = req;
    const { orderId, itemId, gameOrderId } = req.body;

    if (!orderId || itemId == null) {
      return res.status(400).json({ code: 400, message: "Missing orderId or itemId" });
    }

    // 幂等校验：已发货则直接返回成功
    const alreadyProcessed = await userService.isOrderProcessed(orderId);
    if (alreadyProcessed) {
      return res.json({ code: 200, message: "success", data: { riskCorrection: 1 } });
    }

    const result = await userService.deliverGoods(customerId, orderId, Number(itemId), gameOrderId || "");

    res.json({ code: 200, message: "success", data: result });
  } catch (err) {
    console.error("[recharge/payCallback]", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
});

// ── 附加：客户端轮询订单状态 ──────────────────────────────────
// 请求：{ gameOrderId }  （游戏客户端 BPPayMgr._checkOrder 调用）
// 响应：{ code:200, data:{ paid:bool, coins:number } }
router.post("/queryOrder", verifySession, async (req, res) => {
  try {
    const { gameOrderId } = req.body;
    if (!gameOrderId) {
      return res.status(400).json({ code: 400, message: "Missing gameOrderId" });
    }

    const status = await userService.getOrderStatus(gameOrderId);
    if (status && status.paid) {
      res.json({ code: 200, data: { paid: true, diamonds: status.diamonds } });
    } else {
      res.json({ code: 200, data: { paid: false } });
    }
  } catch (err) {
    console.error("[recharge/queryOrder]", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
});

module.exports = router;
