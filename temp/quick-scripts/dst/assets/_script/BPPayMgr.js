
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/BPPayMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1c2dPkX2p7jJ0OHyo7TF1u', 'BPPayMgr');
// _script/BPPayMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BPPayMgr = undefined; // GCash deeplink route for green game recharge

var BP_GCASH_GLIFE_ROUTE = "006300121300"; // ============================================================
// BPPayMgr — 客户端侧 BP 对接（接口 6）
//
// 接口 1/2/3 由游戏服务器实现（BP 主动调用）
// 接口 7/8   由游戏服务器调用 BP /api（AES+SHA256 在服务器做）
// ============================================================

var exp_BPPayMgr = function () {
  function _ctor() {
    this.gameServerUrl = ""; // 游戏服务器地址, e.g. "https://your-server.com/"

    this.productId = ""; // 项目编号, e.g. "C66"

    this.appId = ""; // GCash 小程序 ID

    this.customerId = ""; // 当前登录用户 ID（仅由服务端 verify 响应写入，禁止从 URL 直接赋值）

    this.loginName = "";
    this.sessionToken = ""; // 服务端颁发的会话令牌，用于客户端接口鉴权      // 当前登录用户名

    this._isPaying = false;
    this._pendingCallback = null;
    this._pollTimer = null;
    this._pollCount = 0;
    this._currentOrderId = null;
  }

  _ctor.getInstance = function () {
    null == this._instance && (this._instance = new _ctor());
    return this._instance;
  }; // 初始化配置
  // config: { gameServerUrl, productId, appId }


  _ctor.prototype.init = function (config) {
    this.gameServerUrl = config.gameServerUrl || "";
    this.productId = config.productId || "";
    this.appId = config.appId || "";
  }; // 用户登录后设置身份信息（从 /getH5TokenByGlifeGreenGame 响应中获取）


  _ctor.prototype.setUserInfo = function (customerId, loginName) {
    this.customerId = customerId;
    this.loginName = loginName;
  }; // 内部通用 POST（客户端→BP 网关小程序接口，无需签名）


  _ctor.prototype._post = function (url, body, callback) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 10000;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (4 !== xhr.readyState) {
        return;
      }

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

    xhr.ontimeout = function () {
      callback && callback(null, "timeout");
    };

    xhr.onerror = function () {
      callback && callback(null, "network error");
    };

    xhr.send(JSON.stringify(body));
  }; // --------------------------------------------------------
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
    var deeplink = "gcash://com.mynt.gcash/app/" + BP_GCASH_GLIFE_ROUTE + "?appId=" + this.appId + "&query=" + query; // GCash 小程序环境

    if (typeof my !== "undefined" && my.ap && my.ap.navigateToAlipayPage) {
      my.ap.navigateToAlipayPage({
        path: deeplink
      });
    } else if (typeof my !== "undefined" && my.navigateTo) {
      my.navigateTo({
        url: deeplink
      });
    } else {
      window.location.href = deeplink;
    }

    this._startPollOrder();
  }; // 开始轮询游戏服务器订单状态（每 5 秒，最多 5 分钟）


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
  }; // 查询游戏服务器订单是否已到账


  _ctor.prototype._checkOrder = function (gameOrderId, callback) {
    this._post(this.gameServerUrl + "game/recharge/queryOrder", {
      gameOrderId: gameOrderId,
      sessionToken: this.sessionToken || ""
    }, function (resp) {
      if (resp && (resp.code === 200 || resp.code === 0) && resp.data && resp.data.paid) {
        callback(true, resp.data);
      } else {
        callback(false, null);
      }
    });
  }; // 从 GCash 支付页返回小游戏时调用（立即触发一次订单检查，加速到账感知）


  _ctor.prototype.onAppResume = function () {
    if (!this._isPaying || !this._currentOrderId) {
      return;
    }

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

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0JQUGF5TWdyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQlBQYXlNZ3IiLCJ1bmRlZmluZWQiLCJCUF9HQ0FTSF9HTElGRV9ST1VURSIsImV4cF9CUFBheU1nciIsIl9jdG9yIiwiZ2FtZVNlcnZlclVybCIsInByb2R1Y3RJZCIsImFwcElkIiwiY3VzdG9tZXJJZCIsImxvZ2luTmFtZSIsInNlc3Npb25Ub2tlbiIsIl9pc1BheWluZyIsIl9wZW5kaW5nQ2FsbGJhY2siLCJfcG9sbFRpbWVyIiwiX3BvbGxDb3VudCIsIl9jdXJyZW50T3JkZXJJZCIsImdldEluc3RhbmNlIiwiX2luc3RhbmNlIiwicHJvdG90eXBlIiwiaW5pdCIsImNvbmZpZyIsInNldFVzZXJJbmZvIiwiX3Bvc3QiLCJ1cmwiLCJib2R5IiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInRpbWVvdXQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzdHJpbmdpZnkiLCJkb1JlY2hhcmdlIiwiYW1vdW50IiwiZ29vZHNJZCIsImdhbWVPcmRlcklkIiwicXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhSW5mbyIsImRlZXBsaW5rIiwibXkiLCJhcCIsIm5hdmlnYXRlVG9BbGlwYXlQYWdlIiwicGF0aCIsIm5hdmlnYXRlVG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJfc3RhcnRQb2xsT3JkZXIiLCJzZWxmIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiX2NoZWNrT3JkZXIiLCJwYWlkIiwiZGF0YSIsInJlc3AiLCJjb2RlIiwib25BcHBSZXN1bWUiXSwibWFwcGlu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QTVINkIsQ0EwSTdCOzs7RUFDQXJCLEtBQUssQ0FBQ2MsU0FBTixDQUFnQmlELFdBQWhCLEdBQThCLFlBQVk7SUFDeEMsSUFBSSxDQUFDLEtBQUt4RCxTQUFOLElBQW1CLENBQUMsS0FBS0ksZUFBN0IsRUFBOEM7TUFBRTtJQUFTOztJQUN6RCxJQUFJNEMsSUFBSSxHQUFHLElBQVg7O0lBQ0FBLElBQUksQ0FBQ0csV0FBTCxDQUFpQkgsSUFBSSxDQUFDNUMsZUFBdEIsRUFBdUMsVUFBVWdELElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCO01BQzNELElBQUlELElBQUosRUFBVTtRQUNSRixhQUFhLENBQUNGLElBQUksQ0FBQzlDLFVBQU4sQ0FBYjtRQUNBOEMsSUFBSSxDQUFDOUMsVUFBTCxHQUFrQixJQUFsQjtRQUNBOEMsSUFBSSxDQUFDaEQsU0FBTCxHQUFpQixLQUFqQjtRQUNBZ0QsSUFBSSxDQUFDL0MsZ0JBQUwsSUFBeUIrQyxJQUFJLENBQUMvQyxnQkFBTCxDQUFzQixJQUF0QixFQUE0Qm9ELElBQTVCLENBQXpCO1FBQ0FMLElBQUksQ0FBQy9DLGdCQUFMLEdBQXdCLElBQXhCO01BQ0Q7SUFDRixDQVJEO0VBU0QsQ0FaRDs7RUFjQSxPQUFPUixLQUFQO0FBQ0QsQ0ExSmtCLEVBQW5COztBQTRKQU4sT0FBTyxDQUFDRSxRQUFSLEdBQW1CRyxZQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQlBQYXlNZ3IgPSB1bmRlZmluZWQ7XG5cbi8vIEdDYXNoIGRlZXBsaW5rIHJvdXRlIGZvciBncmVlbiBnYW1lIHJlY2hhcmdlXG52YXIgQlBfR0NBU0hfR0xJRkVfUk9VVEUgPSBcIjAwNjMwMDEyMTMwMFwiO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJQUGF5TWdyIOKAlCDlrqLmiLfnq6/kvqcgQlAg5a+55o6l77yI5o6l5Y+jIDbvvIlcbi8vXG4vLyDmjqXlj6MgMS8yLzMg55Sx5ri45oiP5pyN5Yqh5Zmo5a6e546w77yIQlAg5Li75Yqo6LCD55So77yJXG4vLyDmjqXlj6MgNy84ICAg55Sx5ri45oiP5pyN5Yqh5Zmo6LCD55SoIEJQIC9hcGnvvIhBRVMrU0hBMjU2IOWcqOacjeWKoeWZqOWBmu+8iVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgZXhwX0JQUGF5TWdyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB0aGlzLmdhbWVTZXJ2ZXJVcmwgPSBcIlwiOyAgLy8g5ri45oiP5pyN5Yqh5Zmo5Zyw5Z2ALCBlLmcuIFwiaHR0cHM6Ly95b3VyLXNlcnZlci5jb20vXCJcbiAgICB0aGlzLnByb2R1Y3RJZCA9IFwiXCI7ICAgICAgLy8g6aG555uu57yW5Y+3LCBlLmcuIFwiQzY2XCJcbiAgICB0aGlzLmFwcElkID0gXCJcIjsgICAgICAgICAgLy8gR0Nhc2gg5bCP56iL5bqPIElEXG4gICAgdGhpcy5jdXN0b21lcklkID0gXCJcIjsgICAgIC8vIOW9k+WJjeeZu+W9leeUqOaItyBJRO+8iOS7heeUseacjeWKoeerryB2ZXJpZnkg5ZON5bqU5YaZ5YWl77yM56aB5q2i5LuOIFVSTCDnm7TmjqXotYvlgLzvvIlcbiAgICB0aGlzLmxvZ2luTmFtZSA9IFwiXCI7XG4gICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBcIlwiOyAgLy8g5pyN5Yqh56uv6aKB5Y+R55qE5Lya6K+d5Luk54mM77yM55So5LqO5a6i5oi356uv5o6l5Y+j6Ym05p2DICAgICAgLy8g5b2T5YmN55m75b2V55So5oi35ZCNXG4gICAgdGhpcy5faXNQYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9wZW5kaW5nQ2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX3BvbGxUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fcG9sbENvdW50ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50T3JkZXJJZCA9IG51bGw7XG4gIH1cblxuICBfY3Rvci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBudWxsID09IHRoaXMuX2luc3RhbmNlICYmICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBfY3RvcigpKTtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH07XG5cbiAgLy8g5Yid5aeL5YyW6YWN572uXG4gIC8vIGNvbmZpZzogeyBnYW1lU2VydmVyVXJsLCBwcm9kdWN0SWQsIGFwcElkIH1cbiAgX2N0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdGhpcy5nYW1lU2VydmVyVXJsID0gY29uZmlnLmdhbWVTZXJ2ZXJVcmwgfHwgXCJcIjtcbiAgICB0aGlzLnByb2R1Y3RJZCA9IGNvbmZpZy5wcm9kdWN0SWQgfHwgXCJcIjtcbiAgICB0aGlzLmFwcElkID0gY29uZmlnLmFwcElkIHx8IFwiXCI7XG4gIH07XG5cbiAgLy8g55So5oi355m75b2V5ZCO6K6+572u6Lqr5Lu95L+h5oGv77yI5LuOIC9nZXRINVRva2VuQnlHbGlmZUdyZWVuR2FtZSDlk43lupTkuK3ojrflj5bvvIlcbiAgX2N0b3IucHJvdG90eXBlLnNldFVzZXJJbmZvID0gZnVuY3Rpb24gKGN1c3RvbWVySWQsIGxvZ2luTmFtZSkge1xuICAgIHRoaXMuY3VzdG9tZXJJZCA9IGN1c3RvbWVySWQ7XG4gICAgdGhpcy5sb2dpbk5hbWUgPSBsb2dpbk5hbWU7XG4gIH07XG5cbiAgLy8g5YaF6YOo6YCa55SoIFBPU1TvvIjlrqLmiLfnq6/ihpJCUCDnvZHlhbPlsI/nqIvluo/mjqXlj6PvvIzml6DpnIDnrb7lkI3vvIlcbiAgX2N0b3IucHJvdG90eXBlLl9wb3N0ID0gZnVuY3Rpb24gKHVybCwgYm9keSwgY2FsbGJhY2spIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICg0ICE9PSB4aHIucmVhZHlTdGF0ZSkgeyByZXR1cm47IH1cbiAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSwgbnVsbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsLCBcInBhcnNlIGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsLCBcImh0dHAgXCIgKyB4aHIuc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7IGNhbGxiYWNrICYmIGNhbGxiYWNrKG51bGwsIFwidGltZW91dFwiKTsgfTtcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgY2FsbGJhY2sgJiYgY2FsbGJhY2sobnVsbCwgXCJuZXR3b3JrIGVycm9yXCIpOyB9O1xuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDmjqXlj6MgNu+8mua4uOaIj+WGheWFheWAvCDigJQg5omT5byAIEdDYXNoIERlZXBsaW5rXG4gIC8vIGFtb3VudDogICAgICDmlK/ku5jph5Hpop3vvIjmlbDlrZfvvIzlpoIgMTAw77yJXG4gIC8vIGdvb2RzSWQ6ICAgICDllYblk4EgSUTvvIjmnaXoh6ogcXVlcnlHb29kc0xpc3Qg55qEIHNob3BJdGVtc++8iVxuICAvLyBnYW1lT3JkZXJJZDog5ri45oiP5pa55ZSv5LiA6K6i5Y2V5Y+377yI5bu66K6u77ya5pe26Ze05oizICsgY3VzdG9tZXJJZO+8iVxuICAvLyBjYWxsYmFjayhzdWNjZXNzOiBib29sLCBkYXRhOiBhbnkpXG4gIC8vXG4gIC8vIOmTvui3r++8mmRlZXBsaW5rIOKGkiBHQ2FzaCDlsI/nqIvluo/mlLbpk7blj7Ag4oaSIOaUr+S7mOaIkOWKn1xuICAvLyAgIOKGkiBCUCBQRC1BUEkg5Zue6LCD5Yqg6aKdIOKGkiDosIPmuLjmiI/mnI3liqHlmaggcGF5Q2FsbGJhY2tcbiAgLy8gICDihpIg6L2u6K+i5ri45oiP5pyN5Yqh5Zmo56Gu6K6kXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9jdG9yLnByb3RvdHlwZS5kb1JlY2hhcmdlID0gZnVuY3Rpb24gKGFtb3VudCwgZ29vZHNJZCwgZ2FtZU9yZGVySWQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX2lzUGF5aW5nKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSwgXCJQYXltZW50IGluIHByb2dyZXNzXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc1BheWluZyA9IHRydWU7XG4gICAgdGhpcy5fcGVuZGluZ0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fY3VycmVudE9yZGVySWQgPSBnYW1lT3JkZXJJZDtcblxuICAgIHZhciBxdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkYXRhSW5mbzogYW1vdW50LFxuICAgICAgZ29vZHNJZDogZ29vZHNJZCxcbiAgICAgIGdhbWVPcmRlcklkOiBnYW1lT3JkZXJJZFxuICAgIH0pKTtcbiAgICB2YXIgZGVlcGxpbmsgPSBcImdjYXNoOi8vY29tLm15bnQuZ2Nhc2gvYXBwL1wiICsgQlBfR0NBU0hfR0xJRkVfUk9VVEUgK1xuICAgICAgXCI/YXBwSWQ9XCIgKyB0aGlzLmFwcElkICsgXCImcXVlcnk9XCIgKyBxdWVyeTtcblxuICAgIC8vIEdDYXNoIOWwj+eoi+W6j+eOr+Wig1xuICAgIGlmICh0eXBlb2YgbXkgIT09IFwidW5kZWZpbmVkXCIgJiYgbXkuYXAgJiYgbXkuYXAubmF2aWdhdGVUb0FsaXBheVBhZ2UpIHtcbiAgICAgIG15LmFwLm5hdmlnYXRlVG9BbGlwYXlQYWdlKHsgcGF0aDogZGVlcGxpbmsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXkgIT09IFwidW5kZWZpbmVkXCIgJiYgbXkubmF2aWdhdGVUbykge1xuICAgICAgbXkubmF2aWdhdGVUbyh7IHVybDogZGVlcGxpbmsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVlcGxpbms7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRQb2xsT3JkZXIoKTtcbiAgfTtcblxuICAvLyDlvIDlp4vova7or6LmuLjmiI/mnI3liqHlmajorqLljZXnirbmgIHvvIjmr48gNSDnp5LvvIzmnIDlpJogNSDliIbpkp/vvIlcbiAgX2N0b3IucHJvdG90eXBlLl9zdGFydFBvbGxPcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5fcG9sbENvdW50ID0gMDtcbiAgICBzZWxmLl9wb2xsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wb2xsQ291bnQrKztcbiAgICAgIGlmIChzZWxmLl9wb2xsQ291bnQgPiA2MCkge1xuICAgICAgICBjbGVhckludGVydmFsKHNlbGYuX3BvbGxUaW1lcik7XG4gICAgICAgIHNlbGYuX3BvbGxUaW1lciA9IG51bGw7XG4gICAgICAgIHNlbGYuX2lzUGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHNlbGYuX3BlbmRpbmdDYWxsYmFjayAmJiBzZWxmLl9wZW5kaW5nQ2FsbGJhY2soZmFsc2UsIFwiUGF5bWVudCB0aW1lb3V0XCIpO1xuICAgICAgICBzZWxmLl9wZW5kaW5nQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLl9jaGVja09yZGVyKHNlbGYuX2N1cnJlbnRPcmRlcklkLCBmdW5jdGlvbiAocGFpZCwgZGF0YSkge1xuICAgICAgICBpZiAocGFpZCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5fcG9sbFRpbWVyKTtcbiAgICAgICAgICBzZWxmLl9wb2xsVGltZXIgPSBudWxsO1xuICAgICAgICAgIHNlbGYuX2lzUGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5fcGVuZGluZ0NhbGxiYWNrICYmIHNlbGYuX3BlbmRpbmdDYWxsYmFjayh0cnVlLCBkYXRhKTtcbiAgICAgICAgICBzZWxmLl9wZW5kaW5nQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTtcbiAgfTtcblxuICAvLyDmn6Xor6LmuLjmiI/mnI3liqHlmajorqLljZXmmK/lkKblt7LliLDotKZcbiAgX2N0b3IucHJvdG90eXBlLl9jaGVja09yZGVyID0gZnVuY3Rpb24gKGdhbWVPcmRlcklkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuX3Bvc3QodGhpcy5nYW1lU2VydmVyVXJsICsgXCJnYW1lL3JlY2hhcmdlL3F1ZXJ5T3JkZXJcIixcbiAgICAgIHsgZ2FtZU9yZGVySWQ6IGdhbWVPcmRlcklkLCBzZXNzaW9uVG9rZW46IHRoaXMuc2Vzc2lvblRva2VuIHx8IFwiXCIgfSxcbiAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGlmIChyZXNwICYmIChyZXNwLmNvZGUgPT09IDIwMCB8fCByZXNwLmNvZGUgPT09IDApICYmXG4gICAgICAgICAgICByZXNwLmRhdGEgJiYgcmVzcC5kYXRhLnBhaWQpIHtcbiAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXNwLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLy8g5LuOIEdDYXNoIOaUr+S7mOmhtei/lOWbnuWwj+a4uOaIj+aXtuiwg+eUqO+8iOeri+WNs+inpuWPkeS4gOasoeiuouWNleajgOafpe+8jOWKoOmAn+WIsOi0puaEn+efpe+8iVxuICBfY3Rvci5wcm90b3R5cGUub25BcHBSZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1BheWluZyB8fCAhdGhpcy5fY3VycmVudE9yZGVySWQpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuX2NoZWNrT3JkZXIoc2VsZi5fY3VycmVudE9yZGVySWQsIGZ1bmN0aW9uIChwYWlkLCBkYXRhKSB7XG4gICAgICBpZiAocGFpZCkge1xuICAgICAgICBjbGVhckludGVydmFsKHNlbGYuX3BvbGxUaW1lcik7XG4gICAgICAgIHNlbGYuX3BvbGxUaW1lciA9IG51bGw7XG4gICAgICAgIHNlbGYuX2lzUGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHNlbGYuX3BlbmRpbmdDYWxsYmFjayAmJiBzZWxmLl9wZW5kaW5nQ2FsbGJhY2sodHJ1ZSwgZGF0YSk7XG4gICAgICAgIHNlbGYuX3BlbmRpbmdDYWxsYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIF9jdG9yO1xufSgpO1xuXG5leHBvcnRzLkJQUGF5TWdyID0gZXhwX0JQUGF5TWdyO1xuIl19