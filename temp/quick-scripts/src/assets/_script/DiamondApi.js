"use strict";
cc._RF.push(module, '446a05IUlhPuLLm4D+FP+M+', 'DiamondApi');
// _script/DiamondApi.js

"use strict";

/**
 * DiamondApi — 钻石服务端消费工具
 *
 * 用法：
 *   DiamondApi.consume(60,
 *     function() { /* 扣除成功，执行后续逻辑 *\/ },
 *     function() { /* 余额不足，已自动弹出充值界面 *\/ }
 *   );
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BPPayMgr = require("BPPayMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1UIMgr = require("UIMgr");

var DiamondApi = {
  /**
   * 服务端原子扣除 amount 颗钻石。
   * - 成功：本地同步余额 → onSuccess()
   * - 余额不足：打开充值弹窗 → onFail()（可选）
   * - 网络超时/异常：降级为纯本地扣除（保证游戏可玩性）
   */
  consume: function consume(amount, onSuccess, onFail) {
    var mgr = $z1BPPayMgr.BPPayMgr.getInstance();
    var sessionToken = mgr.sessionToken;
    var gameServerUrl = mgr.gameServerUrl;
    var userData = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData(); // 前置本地余额检查，快速拦截明显不足的情况

    if (userData.getDiamondNum() < amount) {
      DiamondApi._openShop();

      onFail && onFail();
      return;
    } // 无 sessionToken 时降级为本地扣除（开发/离线模式）


    if (!sessionToken || !gameServerUrl) {
      if (userData.subDiamondNum(amount)) {
        onSuccess && onSuccess();
      } else {
        DiamondApi._openShop();

        onFail && onFail();
      }

      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.timeout = 6000;
    xhr.open("POST", gameServerUrl + "game/diamond/consume", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    function handleError() {
      // 网络/解析异常：降级本地扣除
      if (userData.subDiamondNum(amount)) {
        onSuccess && onSuccess();
      } else {
        DiamondApi._openShop();

        onFail && onFail();
      }
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }

      try {
        var resp = JSON.parse(xhr.responseText);

        if (resp && resp.code === 200) {
          userData.setDiamondNum(resp.data.balance);
          onSuccess && onSuccess();
        } else if (resp && resp.code === 402) {
          if (resp.data && typeof resp.data.balance === "number") {
            userData.setDiamondNum(resp.data.balance);
          }

          DiamondApi._openShop();

          onFail && onFail();
        } else {
          handleError();
        }
      } catch (e) {
        handleError();
      }
    };

    xhr.ontimeout = handleError;
    xhr.send(JSON.stringify({
      sessionToken: sessionToken,
      amount: amount
    }));
  },

  /**
   * 后台服务端扣除核验（SubGood 用）
   * 本地已先行扣除，此处通知服务端；若服务端判断余额不足（说明客户端被篡改），
   * 用服务端余额覆盖本地并弹出充值界面。
   * onCorrect(serverBalance) 在服务端确认后（无论成功/失败）回调。
   */
  serverSync: function serverSync(amount, onCorrect) {
    var mgr = $z1BPPayMgr.BPPayMgr.getInstance();
    var sessionToken = mgr.sessionToken;
    var gameServerUrl = mgr.gameServerUrl;

    if (!sessionToken || !gameServerUrl) {
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.timeout = 6000;
    xhr.open("POST", gameServerUrl + "game/diamond/consume", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }

      try {
        var resp = JSON.parse(xhr.responseText);

        if (resp && resp.code === 200) {
          onCorrect && onCorrect(resp.data.balance);
        } else if (resp && resp.code === 402) {
          // 服务端拒绝：客户端余额被篡改，强制覆盖并弹充值
          if (resp.data && typeof resp.data.balance === "number") {
            onCorrect && onCorrect(resp.data.balance);
          }

          DiamondApi._openShop();
        }
      } catch (e) {
        /* 网络异常，忽略，不影响游戏 */
      }
    };

    xhr.send(JSON.stringify({
      sessionToken: sessionToken,
      amount: amount
    }));
  },
  _openShop: function _openShop() {
    $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop, $z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
  }
};
exports.DiamondApi = DiamondApi;

cc._RF.pop();