# BP（BingoPlus）游戏接入 — 上线资料

## 一、游戏架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                        GCash App（WebView）                      │
│                                                                  │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │           游戏前端（Cocos Creator · web-mobile）           │  │
│   │                                                           │  │
│   │  启动时携带 token → GET /game/login/verify → 获取身份     │  │
│   │                                                           │  │
│   │  充值时 → GCash Deeplink ──────────────────────────────┐  │  │
│   │                                                        │  │  │
│   │  轮询 queryOrder（每5s，最多5min） ◄──── 发货完成       │  │  │
│   └──────────────────────────────────────────────────────┼─┘  │
└──────────────────────────────────────────────────────────┼─────┘
                                                           │
                                              GCash 收银台付款
                                                           │
                                                           ▼
┌─────────────────────────────┐        ┌─────────────────────────────┐
│       BP 后端平台            │        │      游戏服务器（Node.js）    │
│                             │        │                              │
│  1. 玩家进入前：             │───────►│  POST /game/login/token      │
│     生成登录 token           │◄───────│  返回 ticket URL             │
│                             │        │                              │
│  2. 查询商品列表：            │───────►│  POST /game/recharge/        │
│     钻石余额 + shopItems     │◄───────│       getGoodsList           │
│                             │        │                              │
│  3. 支付成功后回调发货：       │───────►│  POST /game/recharge/        │
│     orderId + itemId        │◄───────│       payCallback（幂等）     │
│                             │        │                              │
└─────────────────────────────┘        │  POST /game/recharge/        │
                                       │       queryOrder（客户端轮询）│
                                       │                              │
                                       └──────────────┬───────────────┘
                                                      │
                                                      ▼
                                          ┌───────────────────┐
                                          │   MySQL 数据库     │
                                          │                   │
                                          │  · users 表       │
                                          │    customer_id    │
                                          │    diamond（余额） │
                                          │                   │
                                          │  · orders 表      │
                                          │    order_id（PK） │
                                          │    game_order_id  │
                                          │    goods_id       │
                                          │    diamonds       │
                                          └───────────────────┘
```

---

## 二、服务器配置（3w+ DAU）

### 峰值估算

| 指标 | 数值 |
|------|------|
| 日活（DAU） | 30,000 |
| 峰值在线 | ~5,100（DAU × 17%，晚高峰 19:00-23:00） |
| 峰值 API 并发 | ~220 req/s |
| 日充值笔数（5% 转化） | ~1,500 笔 |
| 前端静态流量 | ~750 GB/月（首次 60MB/人，CDN 命中后极低） |

### 节点配置

| 节点 | 规格 | 数量 | 说明 |
|------|------|------|------|
| **CDN** | 按流量计费 | — | 必须，前端 60MB 资源走 CDN，约 750 GB/月 |
| **前端源站** | 2核4G · SSD 20G · 10Mbps | 1台 | Nginx 静态托管，绝大流量走 CDN |
| **负载均衡** | 云 SLB 或 Nginx（1核2G） | 1 | 分发 API 请求 |
| **Node.js 应用** | **4核8G · SSD 40G** | **3台** | PM2 cluster 模式，单台抗 ~200 req/s |
| **Redis** | **4核8G** | 1台 | Token 缓存（TTL 5min），建议用云 Redis |
| **MySQL 主库** | **8核16G · SSD 500G** | 1台 | 写操作：payCallback 发货、钻石更新 |
| **MySQL 从库** | **4核8G · SSD 300G** | 1台 | 高频读：queryOrder 轮询 |

**合计：8 个节点（含 CDN）**

### 软件环境

| 软件 | 版本 |
|------|------|
| Node.js | 16 LTS 及以上 |
| PM2 | 最新版 |
| Nginx | 1.18+ |
| MySQL | 5.7 / 8.0 |
| Redis | 6.0+ |
| SSL 证书 | Let's Encrypt 或商业证书，覆盖两个域名 |

### 上线前必做代码改造

| 项目 | 现状 | 改造内容 | 工作量 |
|------|------|---------|-------|
| Token 存储 | 内存 Map（单实例有效） | 替换为 Redis，TTL 5分钟 | **0.5天** |
| queryOrder 读库 | 走主库 | db.js 增加从库连接，queryOrder 路由切从库 | **0.5天** |

### 数据库初始化

```bash
mysql -u root -p < server/db_init.sql
```

---

## 三、接口清单

### 游戏服务器提供（BP 后端主动调用）

| 接口 | 地址 | 说明 |
|------|------|------|
| 接口1 | `POST /game/login/token` | BP 调用，生成玩家登录 ticket URL |
| 接口1-附 | `GET /game/login/verify?token=` | 前端换取 customerId + loginName |
| 接口2 | `POST /game/recharge/getGoodsList` | BP 调用，返回钻石余额 + 商品列表 |
| 接口3 | `POST /game/recharge/payCallback` | BP 支付成功回调，执行发货（幂等） |
| 附加 | `POST /game/recharge/queryOrder` | 前端轮询订单到账状态 |

### 游戏客户端发起（GCash Deeplink）

| 接口 | 说明 |
|------|------|
| 接口6 | GCash Deeplink 跳转收银台，携带 goodsId + gameOrderId |

### 安全机制

| 链路 | 方式 |
|------|------|
| BP → 游戏服务器 | IP 白名单 + SHA256 验签（`customerId + merchantId`） |
| 游戏服务器 → 客户端 | HTTPS |
| 客户端 → GCash | Deeplink，BP 小程序框架处理 |

---

## 四、商品列表

| goodsId | 价格（PHP） | 赠送钻石 | 说明 |
|---------|------------|---------|------|
| 1 | 1 | 60 | 基础包 |
| 2 | 20 | 300 | 新手礼包（仅限购一次） |
| 3 | 20 | 400 | |
| 4 | 50 | 1100 | |
| 5 | 80 | 1800 | |
| 6 | 100 | 2400 | |
| 7 | 200 | 5000 | |
| 8 | 500 | 13000 | |

---

## 五、双方资源交换

### 我方提供给 BP

| 项目 | 内容 |
|------|------|
| 游戏前端地址 | `https://game.yourcompany.com` |
| 游戏服务器回调域名 | `https://api.yourcompany.com` |
| 服务器出口 IP | 联系运维获取，用于 BP 侧 IP 白名单 |
| 商品列表确认 | 见上方第四节 |

### BP 提供给我方

| 项目 | 用途 | 填入位置 |
|------|------|---------|
| merchantId | 验签 | `server/config.js` |
| GCash mini-app appId | Deeplink 充值 | `Main.js → init.appId` |
| BP 服务器出口 IP | 游戏服务器防火墙白名单 | 运维配置 |

---

## 六、上线检查清单

- [ ] `server/config.js` 填入真实 `merchantId`
- [ ] `Main.js` 填入真实 `appId` 和 `gameServerUrl`
- [ ] MySQL `bp_game` 库已初始化（`db_init.sql`）
- [ ] Nginx HTTPS 配置完成（前端 + 后端）
- [ ] BP 服务器出口 IP 已加入防火墙白名单
- [ ] 我方服务器出口 IP 已提供给 BP
- [ ] PM2 启动服务并设置开机自启
- [ ] 健康检查接口可访问：`GET https://api.yourcompany.com/health`
- [ ] 联调：接口1 token 生成 → 接口2 商品列表 → 接口6 充值 → 接口3 发货 → 轮询到账