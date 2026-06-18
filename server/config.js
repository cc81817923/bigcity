// ── 启动时严格校验必要环境变量，缺失则立即退出（防止用默认值上线）──
var REQUIRED_ENV = ["BP_SIGN_KEY", "GAME_FRONTEND_URL"];
REQUIRED_ENV.forEach(function (key) {
  if (!process.env[key]) {
    console.error("[FATAL] Missing required environment variable: " + key);
    process.exit(1);
  }
});

module.exports = {
  port: process.env.PORT || 3000,

  // ── BP 平台配置（由 BP 分配，必须通过环境变量注入）────────
  bp: {
    signKey: process.env.BP_SIGN_KEY,
  },

  // ── 在线奖励档位（与客户端 GameJsonCfg.onLineRewardCfg 保持一致）
  // condition 单位：分钟；diamonds 为本档奖励钻石数
  onlineRewardCfg: [
    { id: 1, condition: 5,  diamonds: 10 },
    { id: 2, condition: 10, diamonds: 20 },
    { id: 3, condition: 15, diamonds: 30 },
    { id: 4, condition: 30, diamonds: 40 },
    { id: 5, condition: 45, diamonds: 50 },
    { id: 6, condition: 60, diamonds: 60 },
  ],

  // ── 欢乐豆商品表（与 BP 约定，对应 queryGoodsList 中的 shopItems）
  // price 单位：PHP（菲律宾比索）；diamonds 为游戏内钻石数量
  shopItems: [
    { goodsId: 1, price: 1,   diamonds: 60,    name: "Pack 1" },
    { goodsId: 2, price: 20,  diamonds: 300,   name: "Starter Pack" }, // 新手礼包，riskCorrection 控制是否可购
    { goodsId: 3, price: 20,  diamonds: 400,   name: "Pack 2" },
    { goodsId: 4, price: 50,  diamonds: 1100,  name: "Pack 3" },
    { goodsId: 5, price: 80,  diamonds: 1800,  name: "Pack 4" },
    { goodsId: 6, price: 100, diamonds: 2400,  name: "Pack 5" },
    { goodsId: 7, price: 200, diamonds: 5000,  name: "Pack 6" },
    { goodsId: 8, price: 500, diamonds: 13000, name: "Pack 7" },
  ],
};
