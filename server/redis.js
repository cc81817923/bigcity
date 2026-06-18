/**
 * 共享 Redis 客户端
 * 统一连接配置，供 login.js / online.js 等路由复用
 */
const Redis = require("ioredis");

const redis = new Redis({
  host:     process.env.REDIS_HOST || "127.0.0.1",
  port:     Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASS || undefined,
  tls:      process.env.REDIS_TLS === "true" ? {} : undefined,
  lazyConnect: false,
});

redis.on("error", function (err) {
  console.error("[Redis] connection error:", err.message);
});

module.exports = redis;
