
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/DiamondApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0RpYW1vbmRBcGkuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFCUFBheU1nciIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsUGxheWVyTWdyIiwiJHoxS2luZ2h0RmFsbENvbmZpZyIsIiR6MVVJTWdyIiwiRGlhbW9uZEFwaSIsImNvbnN1bWUiLCJhbW91bnQiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJtZ3IiLCJCUFBheU1nciIsImdldEluc3RhbmNlIiwic2Vzc2lvblRva2VuIiwiZ2FtZVNlcnZlclVybCIsInVzZXJEYXRhIiwiS2luZ2h0RmFsbFBsYXllck1nciIsImdldFVzZXJEYXRhIiwiZ2V0RGlhbW9uZE51bSIsIl9vcGVuU2hvcCIsInN1YkRpYW1vbmROdW0iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInRpbWVvdXQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsImhhbmRsZUVycm9yIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInJlc3AiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb2RlIiwic2V0RGlhbW9uZE51bSIsImRhdGEiLCJiYWxhbmNlIiwiZSIsIm9udGltZW91dCIsInNlbmQiLCJzdHJpbmdpZnkiLCJzZXJ2ZXJTeW5jIiwib25Db3JyZWN0IiwiVUlNZ3IiLCJvcGVuVUkiLCJLaW5naHRGYWxsVUlJRCIsIlVJQlBTaG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUVDLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUVBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUdELE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJRSxtQkFBbUIsR0FBR0YsT0FBTyxDQUFDLGtCQUFELENBQWpDOztBQUNBLElBQUlHLFFBQVEsR0FBR0gsT0FBTyxDQUFDLE9BQUQsQ0FBdEI7O0FBRUEsSUFBSUksVUFBVSxHQUFHO0VBQ2Y7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VDLE9BQU8sRUFBRSxpQkFBVUMsTUFBVixFQUFrQkMsU0FBbEIsRUFBNkJDLE1BQTdCLEVBQXFDO0lBQzVDLElBQUlDLEdBQUcsR0FBR1YsV0FBVyxDQUFDVyxRQUFaLENBQXFCQyxXQUFyQixFQUFWO0lBQ0EsSUFBSUMsWUFBWSxHQUFHSCxHQUFHLENBQUNHLFlBQXZCO0lBQ0EsSUFBSUMsYUFBYSxHQUFHSixHQUFHLENBQUNJLGFBQXhCO0lBQ0EsSUFBSUMsUUFBUSxHQUFHYixzQkFBc0IsQ0FBQ2MsbUJBQXZCLENBQTJDSixXQUEzQyxHQUF5REssV0FBekQsRUFBZixDQUo0QyxDQU01Qzs7SUFDQSxJQUFJRixRQUFRLENBQUNHLGFBQVQsS0FBMkJYLE1BQS9CLEVBQXVDO01BQ3JDRixVQUFVLENBQUNjLFNBQVg7O01BQ0FWLE1BQU0sSUFBSUEsTUFBTSxFQUFoQjtNQUNBO0lBQ0QsQ0FYMkMsQ0FhNUM7OztJQUNBLElBQUksQ0FBQ0ksWUFBRCxJQUFpQixDQUFDQyxhQUF0QixFQUFxQztNQUNuQyxJQUFJQyxRQUFRLENBQUNLLGFBQVQsQ0FBdUJiLE1BQXZCLENBQUosRUFBb0M7UUFDbENDLFNBQVMsSUFBSUEsU0FBUyxFQUF0QjtNQUNELENBRkQsTUFFTztRQUNMSCxVQUFVLENBQUNjLFNBQVg7O1FBQ0FWLE1BQU0sSUFBSUEsTUFBTSxFQUFoQjtNQUNEOztNQUNEO0lBQ0Q7O0lBRUQsSUFBSVksR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtJQUNBRCxHQUFHLENBQUNFLE9BQUosR0FBYyxJQUFkO0lBQ0FGLEdBQUcsQ0FBQ0csSUFBSixDQUFTLE1BQVQsRUFBaUJWLGFBQWEsR0FBRyxzQkFBakMsRUFBeUQsSUFBekQ7SUFDQU8sR0FBRyxDQUFDSSxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxrQkFBckM7O0lBRUEsU0FBU0MsV0FBVCxHQUF1QjtNQUNyQjtNQUNBLElBQUlYLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QmIsTUFBdkIsQ0FBSixFQUFvQztRQUNsQ0MsU0FBUyxJQUFJQSxTQUFTLEVBQXRCO01BQ0QsQ0FGRCxNQUVPO1FBQ0xILFVBQVUsQ0FBQ2MsU0FBWDs7UUFDQVYsTUFBTSxJQUFJQSxNQUFNLEVBQWhCO01BQ0Q7SUFDRjs7SUFFRFksR0FBRyxDQUFDTSxrQkFBSixHQUF5QixZQUFZO01BQ25DLElBQUlOLEdBQUcsQ0FBQ08sVUFBSixLQUFtQixDQUF2QixFQUEwQjtRQUFFO01BQVM7O01BQ3JDLElBQUk7UUFDRixJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixHQUFHLENBQUNXLFlBQWYsQ0FBWDs7UUFDQSxJQUFJSCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxLQUFjLEdBQTFCLEVBQStCO1VBQzdCbEIsUUFBUSxDQUFDbUIsYUFBVCxDQUF1QkwsSUFBSSxDQUFDTSxJQUFMLENBQVVDLE9BQWpDO1VBQ0E1QixTQUFTLElBQUlBLFNBQVMsRUFBdEI7UUFDRCxDQUhELE1BR08sSUFBSXFCLElBQUksSUFBSUEsSUFBSSxDQUFDSSxJQUFMLEtBQWMsR0FBMUIsRUFBK0I7VUFDcEMsSUFBSUosSUFBSSxDQUFDTSxJQUFMLElBQWEsT0FBT04sSUFBSSxDQUFDTSxJQUFMLENBQVVDLE9BQWpCLEtBQTZCLFFBQTlDLEVBQXdEO1lBQ3REckIsUUFBUSxDQUFDbUIsYUFBVCxDQUF1QkwsSUFBSSxDQUFDTSxJQUFMLENBQVVDLE9BQWpDO1VBQ0Q7O1VBQ0QvQixVQUFVLENBQUNjLFNBQVg7O1VBQ0FWLE1BQU0sSUFBSUEsTUFBTSxFQUFoQjtRQUNELENBTk0sTUFNQTtVQUNMaUIsV0FBVztRQUNaO01BQ0YsQ0FkRCxDQWNFLE9BQU9XLENBQVAsRUFBVTtRQUNWWCxXQUFXO01BQ1o7SUFDRixDQW5CRDs7SUFvQkFMLEdBQUcsQ0FBQ2lCLFNBQUosR0FBZ0JaLFdBQWhCO0lBQ0FMLEdBQUcsQ0FBQ2tCLElBQUosQ0FBU1QsSUFBSSxDQUFDVSxTQUFMLENBQWU7TUFBRTNCLFlBQVksRUFBRUEsWUFBaEI7TUFBOEJOLE1BQU0sRUFBRUE7SUFBdEMsQ0FBZixDQUFUO0VBQ0QsQ0FwRWM7O0VBc0VmO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFa0MsVUFBVSxFQUFFLG9CQUFVbEMsTUFBVixFQUFrQm1DLFNBQWxCLEVBQTZCO0lBQ3ZDLElBQUloQyxHQUFHLEdBQUdWLFdBQVcsQ0FBQ1csUUFBWixDQUFxQkMsV0FBckIsRUFBVjtJQUNBLElBQUlDLFlBQVksR0FBR0gsR0FBRyxDQUFDRyxZQUF2QjtJQUNBLElBQUlDLGFBQWEsR0FBR0osR0FBRyxDQUFDSSxhQUF4Qjs7SUFDQSxJQUFJLENBQUNELFlBQUQsSUFBaUIsQ0FBQ0MsYUFBdEIsRUFBcUM7TUFBRTtJQUFTOztJQUVoRCxJQUFJTyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0lBQ0FELEdBQUcsQ0FBQ0UsT0FBSixHQUFjLElBQWQ7SUFDQUYsR0FBRyxDQUFDRyxJQUFKLENBQVMsTUFBVCxFQUFpQlYsYUFBYSxHQUFHLHNCQUFqQyxFQUF5RCxJQUF6RDtJQUNBTyxHQUFHLENBQUNJLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQzs7SUFDQUosR0FBRyxDQUFDTSxrQkFBSixHQUF5QixZQUFZO01BQ25DLElBQUlOLEdBQUcsQ0FBQ08sVUFBSixLQUFtQixDQUF2QixFQUEwQjtRQUFFO01BQVM7O01BQ3JDLElBQUk7UUFDRixJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixHQUFHLENBQUNXLFlBQWYsQ0FBWDs7UUFDQSxJQUFJSCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksSUFBTCxLQUFjLEdBQTFCLEVBQStCO1VBQzdCUyxTQUFTLElBQUlBLFNBQVMsQ0FBQ2IsSUFBSSxDQUFDTSxJQUFMLENBQVVDLE9BQVgsQ0FBdEI7UUFDRCxDQUZELE1BRU8sSUFBSVAsSUFBSSxJQUFJQSxJQUFJLENBQUNJLElBQUwsS0FBYyxHQUExQixFQUErQjtVQUNwQztVQUNBLElBQUlKLElBQUksQ0FBQ00sSUFBTCxJQUFhLE9BQU9OLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxPQUFqQixLQUE2QixRQUE5QyxFQUF3RDtZQUN0RE0sU0FBUyxJQUFJQSxTQUFTLENBQUNiLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxPQUFYLENBQXRCO1VBQ0Q7O1VBQ0QvQixVQUFVLENBQUNjLFNBQVg7UUFDRDtNQUNGLENBWEQsQ0FXRSxPQUFPa0IsQ0FBUCxFQUFVO1FBQUU7TUFBcUI7SUFDcEMsQ0FkRDs7SUFlQWhCLEdBQUcsQ0FBQ2tCLElBQUosQ0FBU1QsSUFBSSxDQUFDVSxTQUFMLENBQWU7TUFBRTNCLFlBQVksRUFBRUEsWUFBaEI7TUFBOEJOLE1BQU0sRUFBRUE7SUFBdEMsQ0FBZixDQUFUO0VBQ0QsQ0F0R2M7RUF3R2ZZLFNBQVMsRUFBRSxxQkFBWTtJQUNyQmYsUUFBUSxDQUFDdUMsS0FBVCxDQUFlL0IsV0FBZixHQUE2QmdDLE1BQTdCLENBQ0V6QyxtQkFBbUIsQ0FBQzBDLGNBQXBCLENBQW1DQyxRQURyQyxFQUVFM0MsbUJBQW1CLENBQUMwQyxjQUFwQixDQUFtQ0MsUUFGckM7RUFJRDtBQTdHYyxDQUFqQjtBQWdIQWhELE9BQU8sQ0FBQ08sVUFBUixHQUFxQkEsVUFBckIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGlhbW9uZEFwaSDigJQg6ZK755+z5pyN5Yqh56uv5raI6LS55bel5YW3XG4gKlxuICog55So5rOV77yaXG4gKiAgIERpYW1vbmRBcGkuY29uc3VtZSg2MCxcbiAqICAgICBmdW5jdGlvbigpIHsgLyog5omj6Zmk5oiQ5Yqf77yM5omn6KGM5ZCO57ut6YC76L6RICpcXC8gfSxcbiAqICAgICBmdW5jdGlvbigpIHsgLyog5L2Z6aKd5LiN6Laz77yM5bey6Ieq5Yqo5by55Ye65YWF5YC855WM6Z2iICpcXC8gfVxuICogICApO1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciAkejFCUFBheU1nciA9IHJlcXVpcmUoXCJCUFBheU1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsUGxheWVyTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxQbGF5ZXJNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyICR6MVVJTWdyID0gcmVxdWlyZShcIlVJTWdyXCIpO1xuXG52YXIgRGlhbW9uZEFwaSA9IHtcbiAgLyoqXG4gICAqIOacjeWKoeerr+WOn+WtkOaJo+mZpCBhbW91bnQg6aKX6ZK755+z44CCXG4gICAqIC0g5oiQ5Yqf77ya5pys5Zyw5ZCM5q2l5L2Z6aKdIOKGkiBvblN1Y2Nlc3MoKVxuICAgKiAtIOS9memineS4jei2s++8muaJk+W8gOWFheWAvOW8ueeqlyDihpIgb25GYWlsKCnvvIjlj6/pgInvvIlcbiAgICogLSDnvZHnu5zotoXml7Yv5byC5bi477ya6ZmN57qn5Li657qv5pys5Zyw5omj6Zmk77yI5L+d6K+B5ri45oiP5Y+v546p5oCn77yJXG4gICAqL1xuICBjb25zdW1lOiBmdW5jdGlvbiAoYW1vdW50LCBvblN1Y2Nlc3MsIG9uRmFpbCkge1xuICAgIHZhciBtZ3IgPSAkejFCUFBheU1nci5CUFBheU1nci5nZXRJbnN0YW5jZSgpO1xuICAgIHZhciBzZXNzaW9uVG9rZW4gPSBtZ3Iuc2Vzc2lvblRva2VuO1xuICAgIHZhciBnYW1lU2VydmVyVXJsID0gbWdyLmdhbWVTZXJ2ZXJVcmw7XG4gICAgdmFyIHVzZXJEYXRhID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKTtcblxuICAgIC8vIOWJjee9ruacrOWcsOS9memineajgOafpe+8jOW/q+mAn+aLpuaIquaYjuaYvuS4jei2s+eahOaDheWGtVxuICAgIGlmICh1c2VyRGF0YS5nZXREaWFtb25kTnVtKCkgPCBhbW91bnQpIHtcbiAgICAgIERpYW1vbmRBcGkuX29wZW5TaG9wKCk7XG4gICAgICBvbkZhaWwgJiYgb25GYWlsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5pegIHNlc3Npb25Ub2tlbiDml7bpmY3nuqfkuLrmnKzlnLDmiaPpmaTvvIjlvIDlj5Ev56a757q/5qih5byP77yJXG4gICAgaWYgKCFzZXNzaW9uVG9rZW4gfHwgIWdhbWVTZXJ2ZXJVcmwpIHtcbiAgICAgIGlmICh1c2VyRGF0YS5zdWJEaWFtb25kTnVtKGFtb3VudCkpIHtcbiAgICAgICAgb25TdWNjZXNzICYmIG9uU3VjY2VzcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRGlhbW9uZEFwaS5fb3BlblNob3AoKTtcbiAgICAgICAgb25GYWlsICYmIG9uRmFpbCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIudGltZW91dCA9IDYwMDA7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIGdhbWVTZXJ2ZXJVcmwgKyBcImdhbWUvZGlhbW9uZC9jb25zdW1lXCIsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8g572R57ucL+ino+aekOW8guW4uO+8mumZjee6p+acrOWcsOaJo+mZpFxuICAgICAgaWYgKHVzZXJEYXRhLnN1YkRpYW1vbmROdW0oYW1vdW50KSkge1xuICAgICAgICBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEaWFtb25kQXBpLl9vcGVuU2hvcCgpO1xuICAgICAgICBvbkZhaWwgJiYgb25GYWlsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCkgeyByZXR1cm47IH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXNwID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICB1c2VyRGF0YS5zZXREaWFtb25kTnVtKHJlc3AuZGF0YS5iYWxhbmNlKTtcbiAgICAgICAgICBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcCAmJiByZXNwLmNvZGUgPT09IDQwMikge1xuICAgICAgICAgIGlmIChyZXNwLmRhdGEgJiYgdHlwZW9mIHJlc3AuZGF0YS5iYWxhbmNlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB1c2VyRGF0YS5zZXREaWFtb25kTnVtKHJlc3AuZGF0YS5iYWxhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgRGlhbW9uZEFwaS5fb3BlblNob3AoKTtcbiAgICAgICAgICBvbkZhaWwgJiYgb25GYWlsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgeGhyLm9udGltZW91dCA9IGhhbmRsZUVycm9yO1xuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHsgc2Vzc2lvblRva2VuOiBzZXNzaW9uVG9rZW4sIGFtb3VudDogYW1vdW50IH0pKTtcbiAgfSxcblxuICAvKipcbiAgICog5ZCO5Y+w5pyN5Yqh56uv5omj6Zmk5qC46aqM77yIU3ViR29vZCDnlKjvvIlcbiAgICog5pys5Zyw5bey5YWI6KGM5omj6Zmk77yM5q2k5aSE6YCa55+l5pyN5Yqh56uv77yb6Iul5pyN5Yqh56uv5Yik5pat5L2Z6aKd5LiN6Laz77yI6K+05piO5a6i5oi356uv6KKr56+h5pS577yJ77yMXG4gICAqIOeUqOacjeWKoeerr+S9memineimhuebluacrOWcsOW5tuW8ueWHuuWFheWAvOeVjOmdouOAglxuICAgKiBvbkNvcnJlY3Qoc2VydmVyQmFsYW5jZSkg5Zyo5pyN5Yqh56uv56Gu6K6k5ZCO77yI5peg6K665oiQ5YqfL+Wksei0pe+8ieWbnuiwg+OAglxuICAgKi9cbiAgc2VydmVyU3luYzogZnVuY3Rpb24gKGFtb3VudCwgb25Db3JyZWN0KSB7XG4gICAgdmFyIG1nciA9ICR6MUJQUGF5TWdyLkJQUGF5TWdyLmdldEluc3RhbmNlKCk7XG4gICAgdmFyIHNlc3Npb25Ub2tlbiA9IG1nci5zZXNzaW9uVG9rZW47XG4gICAgdmFyIGdhbWVTZXJ2ZXJVcmwgPSBtZ3IuZ2FtZVNlcnZlclVybDtcbiAgICBpZiAoIXNlc3Npb25Ub2tlbiB8fCAhZ2FtZVNlcnZlclVybCkgeyByZXR1cm47IH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIudGltZW91dCA9IDYwMDA7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIGdhbWVTZXJ2ZXJVcmwgKyBcImdhbWUvZGlhbW9uZC9jb25zdW1lXCIsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KSB7IHJldHVybjsgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3AgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAocmVzcCAmJiByZXNwLmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIG9uQ29ycmVjdCAmJiBvbkNvcnJlY3QocmVzcC5kYXRhLmJhbGFuY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3AgJiYgcmVzcC5jb2RlID09PSA0MDIpIHtcbiAgICAgICAgICAvLyDmnI3liqHnq6/mi5Lnu53vvJrlrqLmiLfnq6/kvZnpop3ooqvnr6HmlLnvvIzlvLrliLbopobnm5blubblvLnlhYXlgLxcbiAgICAgICAgICBpZiAocmVzcC5kYXRhICYmIHR5cGVvZiByZXNwLmRhdGEuYmFsYW5jZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgb25Db3JyZWN0ICYmIG9uQ29ycmVjdChyZXNwLmRhdGEuYmFsYW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIERpYW1vbmRBcGkuX29wZW5TaG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyog572R57uc5byC5bi477yM5b+955Wl77yM5LiN5b2x5ZON5ri45oiPICovIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHsgc2Vzc2lvblRva2VuOiBzZXNzaW9uVG9rZW4sIGFtb3VudDogYW1vdW50IH0pKTtcbiAgfSxcblxuICBfb3BlblNob3A6IGZ1bmN0aW9uICgpIHtcbiAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSShcbiAgICAgICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlCUFNob3AsXG4gICAgICAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJQlBTaG9wXG4gICAgKTtcbiAgfSxcbn07XG5cbmV4cG9ydHMuRGlhbW9uZEFwaSA9IERpYW1vbmRBcGk7Il19