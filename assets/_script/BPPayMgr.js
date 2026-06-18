Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BPPayMgr = undefined;

// GCash deeplink route for green game recharge
var BP_GCASH_GLIFE_ROUTE = "006300121300";

// ============================================================
// BPPayMgr — 客户端侧 BP 对接（接口 6）
//
// 接口 1/2/3 由游戏服务器实现（BP 主动调用）
// 接口 7/8   由游戏服务器调用 BP /api（AES+SHA256 在服务器做）
// ============================================================
var exp_BPPayMgr = function () {
  function _ctor() {
    this.gameServerUrl = "";  // 游戏服务器地址, e.g. "https://your-server.com/"
    this.productId = "";      // 项目编号, e.g. "C66"
    this.appId = "";          // GCash 小程序 ID
    this.customerId = "";     // 当前登录用户 ID（仅由服务端 verify 响应写入，禁止从 URL 直接赋值）
    this.loginName = "";
    this.sessionToken = "";  // 服务端颁发的会话令牌，用于客户端接口鉴权      // 当前登录用户名
    this._isPaying = false;
    this._pendingCallback = null;
    this._pollTimer = null;
    this._pollCount = 0;
    this._currentOrderId = null;
  }

  _ctor.getInstance = function () {
    null == this._instance && (this._instance = new _ctor());
    return this._instance;
  };

  // 初始化配置
  // config: { gameServerUrl, productId, appId }
  _ctor.prototype.init = function (config) {
    this.gameServerUrl = config.gameServerUrl || "";
    this.productId = config.productId || "";
    this.appId = config.appId || "";
  };

  // 用户登录后设置身份信息（从 /getH5TokenByGlifeGreenGame 响应中获取）
  _ctor.prototype.setUserInfo = function (customerId, loginName) {
    this.customerId = customerId;
    this.loginName = loginName;
  };

  // 内部通用 POST（客户端→BP 网关小程序接口，无需签名）
  _ctor.prototype._post = function (url, body, callback) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 10000;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (4 !== xhr.readyState) { return; }
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          callback && callback(JSON.parse(xhr.responseText), null);
        } catch (e) {
          callback && callback(null, "parse error");
        }
      } else {
        callback && callback(null, "http " + xhr.status);
      }
    };
    xhr.ontimeout = function () { callback && callback(null, "timeout"); };
    xhr.onerror = function () { callback && callback(null, "network error"); };
    xhr.send(JSON.stringify(body));
  };

  // --------------------------------------------------------
  // 接口 6：游戏内充值 — 打开 GCash Deeplink
  // amount:      支付金额（数字，如 100）
  // goodsId:     商品 ID（来自 queryGoodsList 的 shopItems）
  // gameOrderId: 游戏方唯一订单号（建议：时间戳 + customerId）
  // callback(success: bool, data: any)
  //
  // 链路：deeplink → GCash 小程序收银台 → 支付成功
  //   → BP PD-API 回调加额 → 调游戏服务器 payCallback
  //   → 轮询游戏服务器确认
  // --------------------------------------------------------
  _ctor.prototype.doRecharge = function (amount, goodsId, gameOrderId, callback) {
    if (this._isPaying) {
      callback && callback(false, "Payment in progress");
      return;
    }
    this._isPaying = true;
    this._pendingCallback = callback;
    this._currentOrderId = gameOrderId;

    var query = encodeURIComponent(JSON.stringify({
      dataInfo: amount,
      goodsId: goodsId,
      gameOrderId: gameOrderId
    }));
    var deeplink = "gcash://com.mynt.gcash/app/" + BP_GCASH_GLIFE_ROUTE +
      "?appId=" + this.appId + "&query=" + query;

    // GCash 小程序环境
    if (typeof my !== "undefined" && my.ap && my.ap.navigateToAlipayPage) {
      my.ap.navigateToAlipayPage({ path: deeplink });
    } else if (typeof my !== "undefined" && my.navigateTo) {
      my.navigateTo({ url: deeplink });
    } else {
      window.location.href = deeplink;
    }

    this._startPollOrder();
  };

  // 开始轮询游戏服务器订单状态（每 5 秒，最多 5 分钟）
  _ctor.prototype._startPollOrder = function () {
    var self = this;
    self._pollCount = 0;
    self._pollTimer = setInterval(function () {
      self._pollCount++;
      if (self._pollCount > 60) {
        clearInterval(self._pollTimer);
        self._pollTimer = null;
        self._isPaying = false;
        self._pendingCallback && self._pendingCallback(false, "Payment timeout");
        self._pendingCallback = null;
        return;
      }
      self._checkOrder(self._currentOrderId, function (paid, data) {
        if (paid) {
          clearInterval(self._pollTimer);
          self._pollTimer = null;
          self._isPaying = false;
          self._pendingCallback && self._pendingCallback(true, data);
          self._pendingCallback = null;
        }
      });
    }, 5000);
  };

  // 查询游戏服务器订单是否已到账
  _ctor.prototype._checkOrder = function (gameOrderId, callback) {
    this._post(this.gameServerUrl + "game/recharge/queryOrder",
      { gameOrderId: gameOrderId, sessionToken: this.sessionToken || "" },
      function (resp) {
        if (resp && (resp.code === 200 || resp.code === 0) &&
            resp.data && resp.data.paid) {
          callback(true, resp.data);
        } else {
          callback(false, null);
        }
      }
    );
  };

  // 从 GCash 支付页返回小游戏时调用（立即触发一次订单检查，加速到账感知）
  _ctor.prototype.onAppResume = function () {
    if (!this._isPaying || !this._currentOrderId) { return; }
    var self = this;
    self._checkOrder(self._currentOrderId, function (paid, data) {
      if (paid) {
        clearInterval(self._pollTimer);
        self._pollTimer = null;
        self._isPaying = false;
        self._pendingCallback && self._pendingCallback(true, data);
        self._pendingCallback = null;
      }
    });
  };

  return _ctor;
}();

exports.BPPayMgr = exp_BPPayMgr;
