# BP（BingoPlus）游戏对接文档

## 一、总体架构

```
GCash App (WebView)
    └── 加载 game.yourcompany.com  ← Cocos Creator web-mobile 构建产物
            │
            │  启动时：GET /game/login/verify?token=xxx → 获取 customerId
            │
            ├── [接口6] doRecharge ──────────→ GCash Deeplink（收银台）
            │                                       │
            │                           支付成功 ←─┘
            │                                       │
            │                  BP 回调 ────────────→ api.yourcompany.com
            │                                [接口3] payCallback（发货）
            │                                       │
            └── 轮询 queryOrder ←──── 发货完成 ─────┘
```

### 安全通信要求

| 链路 | IP白名单 | HTTPS | 加密验签 |
|------|---------|-------|---------|
| BP 后端 → 游戏服务器 | ✅ | ✅ | ✅ SHA256 验签 |
| 游戏客户端 → 游戏服务器 | — | ✅ | token 换取身份 |

---

## 二、接口列表（共5个）

### A. 游戏服务器提供（BP 后端主动调用）

#### 接口1：生成登录校验码
- **地址**：`POST /game/login/token`
- **说明**：BP 在玩家进入游戏前调用，生成前端登录所需 ticket URL
- **请求参数**：

| 参数 | 类型 | 说明 | 必传 |
|------|------|------|------|
| customerId | string | 用户ID | 是 |
| sign | string | 签名 | 是 |

- **响应示例**：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "url": "https://game.yourcompany.com/verify?token=abc123"
  }
}
```

> token 有效期 5 分钟，生产环境建议改用 Redis 存储

---

#### 接口1-附：Token 换取身份（前端调用）
- **地址**：`GET /game/login/verify?token={token}`
- **说明**：游戏客户端启动时从 URL 读取 token，调此接口换取 `customerId` 和 `loginName`，随后注入 BPPayMgr
- **响应示例**：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "customerId": "1023507444",
    "loginName": "1023507444"
  }
}
```

> 客户端由 `Main.js` 的 `_verifyBPToken()` 自动调用，无需手动处理

---

#### 接口2：查询商品列表
- **地址**：`POST /game/recharge/getGoodsList`
- **说明**：BP 调用，返回玩家欢乐豆余额和可购商品列表
- **请求参数**：

| 参数 | 类型 | 说明 | 必传 |
|------|------|------|------|
| customerId | string | 用户ID | 是 |
| sign | string | 签名 | 是 |

- **响应示例**：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "coin": 10000,
    "riskCorrection": 1,
    "shopItems": [
      { "goodsId": 1, "price": 1 },
      { "goodsId": 2, "price": 20 },
      { "goodsId": 3, "price": 20 },
      { "goodsId": 4, "price": 50 },
      { "goodsId": 5, "price": 80 },
      { "goodsId": 6, "price": 100 },
      { "goodsId": 7, "price": 200 },
      { "goodsId": 8, "price": 500 }
    ]
  }
}
```

> `riskCorrection`：新手礼包是否可购买，0=不可购，1=可购

---

#### 接口3：支付成功回调（发货）
- **地址**：`POST /game/recharge/payCallback`
- **说明**：BP 支付到账后回调，游戏服务器执行发货（仅支付成功时触发）
- **请求参数**：

| 参数 | 类型 | 说明 | 必传 |
|------|------|------|------|
| customerId | string | 用户ID | 是 |
| orderId | string | 订单号 | 是 |
| itemId | int | 商品编号 | 是 |
| sign | string | 签名 | 是 |

- **响应示例**：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "riskCorrection": 1
  }
}
```

> 此接口需做**幂等处理**，相同 orderId 重复回调只发货一次

---

### B. 游戏客户端调用 GCash Deeplink

#### 接口6：游戏内充值（GCash Deeplink）
- **格式**：
```
gcash://com.mynt.gcash/app/006300121300?appId={appId}&query={queryStr}
```
- **queryStr 参数（JSON，需 encodeURIComponent）**：

| 参数 | 说明 |
|------|------|
| dataInfo | 支付金额（数字，如 100） |
| goodsId | 商品ID（来自 shopItems） |
| gameOrderId | 游戏方订单号（`时间戳_customerId`） |

- **充值链路**：
  1. 游戏通过 deeplink 跳转到 GCash 收银台
  2. 用户支付成功后，BP 内部 PD-API 处理加额
  3. BP 调用游戏服务器 `/game/recharge/payCallback` 发货
  4. 游戏客户端每 5 秒轮询 `/game/recharge/queryOrder`，最多等待 5 分钟

---

## 三、服务端目录结构

```
server/
├── index.js                  # Express 入口
├── config.js                 # 配置（merchantId / shopItems）
├── utils/
│   └── sign.js               # SHA256 验签
├── middleware/
│   └── verifyBP.js           # 验证 BP 来源请求签名
├── game/
│   └── userService.js        # 业务层（对接数据库的 TODO 函数）
└── routes/
    ├── login.js              # 接口1 + GET /verify
    └── recharge.js           # 接口2/3 + 订单轮询
```

### 客户端目录（Cocos 脚本）

```
assets/_script/
├── BPPayMgr.js               # 客户端 BP 管理器（接口6）
├── KinghtFallUIBPShop.js     # BP 充值商城 UI（NEW）
├── KinghtFallConfig.js       # 注册了 UIBPShop
├── KinghtFallUITop.js        # 金币点击 → 自动判断开 UIBPShop 或广告补币
└── Main.js                   # init + _verifyBPToken 自动登录
```

### 接入只需改两处

**① `server/config.js`**：填入 BP 分配的真实值
```js
bp: {
  merchantId: "660005",          // BP 分配的商户号
}
```

**② `server/game/userService.js`**：4个函数接入数据库

| 函数 | 对应 DB 操作 |
|------|------------|
| `getCoinBalance(customerId)` | 查询用户欢乐豆余额 |
| `getRiskCorrection(customerId)` | 查询新手礼包是否可购 |
| `isOrderProcessed(orderId)` | 订单幂等检查 |
| `deliverGoods(customerId, orderId, itemId)` | 加币 + 记录订单 |

---

## 四、部署步骤

### 1. 客户端（Cocos Creator → web-mobile）

```bash
# Cocos Creator 菜单：项目 → 构建发布 → Web Mobile → 构建
# 产物目录：build/web-mobile/

# 上传到 Nginx 静态服务器
scp -r build/web-mobile/ user@your-server:/var/www/game/

# Nginx 配置
server {
    listen 443 ssl;
    server_name game.yourcompany.com;

    ssl_certificate     /etc/ssl/game.crt;
    ssl_certificate_key /etc/ssl/game.key;

    root /var/www/game;
    index index.html;
}
```

### 2. 服务端（Node.js）

```bash
# 上传服务端代码
scp -r server/ user@your-server:/app/bp-server/

# 服务器上安装依赖
cd /app/bp-server
npm install --production

# 填写配置
vi config.js

# PM2 启动并设置开机自启
npm install -g pm2
pm2 start index.js --name bp-game-server
pm2 save && pm2 startup
```

**Nginx 反向代理 + HTTPS**：
```nginx
server {
    listen 443 ssl;
    server_name api.yourcompany.com;

    ssl_certificate     /etc/ssl/api.crt;
    ssl_certificate_key /etc/ssl/api.key;

    location /game/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 3. 客户端配置（Main.js）

```js
// init 填入真实值（onLoad 中自动调用）
$z1BPPayMgr.BPPayMgr.getInstance().init({
  appId: "YOUR_GCASH_MINI_APP_ID",       // BP 分配
  gameServerUrl: "https://api.yourcompany.com/"
});
// 启动时自动读取 URL ?token= 换取 customerId，无需手动调用
```

### 4. Cocos 编辑器：创建 UIBPShop Prefab

在编辑器中创建 `resources/KinghtFallPrefabs/commer/KinghtFallUIBPShop` prefab，挂载 `KinghtFallUIBPShop` 脚本，并绑定以下属性：

| 属性 | 类型 | 说明 |
|------|------|------|
| `labCoinBalance` | cc.Label | 显示欢乐豆余额 |
| `ndItemRoot` | cc.Node | 商品列表容器 |
| `ndItemTpl` | cc.Node | 商品模板（active=false，运行时克隆） |
| `btnClose` | cc.Node | 关闭按钮 |
| `ndLoading` | cc.Node | 加载中遮罩 |
| `ndError` | cc.Node | 加载失败提示 |

商品模板子节点命名规范：

| 子节点名 | 说明 |
|---------|------|
| `labPrice` | 价格 Label，显示 `PHP {price}` |
| `labGoodsId` | 商品名 Label，显示 `Pack {goodsId}` |
| `btnBuy` | 购买按钮 |

---

## 五、双方配置信息交换

### 提供给 BP 的信息

| 项目 | 值 |
|------|---|
| 游戏前端地址 | `https://game.yourcompany.com` |
| 游戏服务器回调地址 | `https://api.yourcompany.com` |
| 服务器出口 IP | 用于 BP 侧 IP 白名单 |

### BP 提供给我方的信息

| 项目 | 填入位置 |
|------|---------|
| merchantId | `server/config.js` |
| GCash mini-app appId | `Main.js` → `appId` |
| BP 服务器出口 IP | 游戏服务器防火墙白名单 |

---

## 六、本地开发测试

```bash
# 启动服务端
cd server
npm run dev   # nodemon 热重载

# 测试接口1（生成 token）
curl -X POST http://localhost:3000/game/login/token \
  -H "Content-Type: application/json" \
  -d '{"customerId":"1023507444","sign":"your_sign_here"}'

# 测试接口1-附（token 换身份）
curl "http://localhost:3000/game/login/verify?token=从上面拿到的token"

# 测试接口2
curl -X POST http://localhost:3000/game/recharge/getGoodsList \
  -H "Content-Type: application/json" \
  -d '{"customerId":"1023507444","sign":"your_sign_here"}'

# 测试订单轮询
curl -X POST http://localhost:3000/game/recharge/queryOrder \
  -H "Content-Type: application/json" \
  -d '{"gameOrderId":"test_order_001"}'

# 健康检查
curl http://localhost:3000/health
```
