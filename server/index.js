/**
 * BP 游戏服务器入口
 *
 * 路由：
 *   POST /game/login/token           接口 1 — 生成登录校验码
 *   GET  /game/login/verify          接口 1-附 — token 换取身份
 *   POST /game/recharge/getGoodsList 接口 2 — 查询商品列表
 *   POST /game/recharge/payCallback  接口 3 — 支付回调发货
 *   POST /game/recharge/queryOrder   附加   — 客户端轮询订单
 */
const express = require("express");
const config = require("./config");
const loginRouter = require("./routes/login");
const rechargeRouter = require("./routes/recharge");
const diamondRouter = require("./routes/diamond");
const onlineRouter = require("./routes/online");

const app = express();

// 解析 JSON body
app.use(express.json());

// 仅允许 HTTPS（生产环境通过 Nginx/负载均衡器在外层处理，此处仅校验 header）
app.use((req, res, next) => {
  const proto = req.headers["x-forwarded-proto"];
  if (proto && proto !== "https") {
    return res.status(403).json({ code: 403, message: "HTTPS required" });
  }
  next();
});

// 路由挂载
app.use("/game/login", loginRouter);
app.use("/game/recharge", rechargeRouter);
app.use("/game/diamond", diamondRouter);
app.use("/game/online", onlineRouter);

// 健康检查
app.get("/health", (req, res) => res.json({ status: "ok" }));

// 统一错误处理
app.use((err, req, res, next) => {
  console.error("[UnhandledError]", err);
  res.status(500).json({ code: 500, message: "Internal server error" });
});

app.listen(config.port, () => {
  console.log(`BP Game Server running on port ${config.port}`);
});

module.exports = app;
