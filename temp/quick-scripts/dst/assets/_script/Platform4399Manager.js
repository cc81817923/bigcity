
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/Platform4399Manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1c6e3mmnlJtZRsw6E8k+G2', 'Platform4399Manager');
// _script/Platform4399Manager.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Platform4399Manager = undefined;

var exp_Platform4399Manager = function () {
  function _ctor() {}

  _ctor.prototype.checkShortcut = function () {};

  _ctor.prototype.addShortcut = function () {};

  _ctor.prototype.setCharts = function () {};

  _ctor.prototype.getCharts = function () {};

  _ctor.prototype.getLaunchOptionsSync = function () {};

  _ctor.prototype.canShare = function () {
    return false;
  };

  _ctor.prototype.pauseRecord = function () {};

  _ctor.prototype.resumeRecord = function () {};

  _ctor.prototype.hasVerify = function () {
    return false;
  };

  _ctor.prototype.verifyKey = function () {};

  _ctor.prototype.getCode = function () {
    return "";
  };

  _ctor.prototype.toAppStore = function () {};

  _ctor.prototype.openNotify = function () {};

  _ctor.prototype.shareImg = function () {};

  _ctor.prototype.getUserInfo = function () {};

  _ctor.prototype.hdieBlockAd = function () {};

  _ctor.prototype.androidAdCallBack = function () {};

  _ctor.prototype.initNativeAd = function () {};

  _ctor.prototype.showNativeAd = function () {};

  _ctor.prototype.getTouchModeVersion = function () {};

  _ctor.prototype.hasShare = function () {
    return false;
  };

  _ctor.prototype.showGamePortalAd = function () {};

  _ctor.prototype.showBlockAd = function () {};

  _ctor.prototype.hideBlockAd = function () {};

  _ctor.prototype.versionName = function () {
    return "1.1.221";
  };

  _ctor.prototype.initSdk = function (t, e) {
    e && e();
  };

  _ctor.prototype.login = function (t, e) {
    e && e();
  };

  _ctor.prototype.pay = function (t, e) {
    e && e();
  };

  _ctor.prototype.share = function (t, e) {
    e && e();
  };

  _ctor.prototype.showBanner = function (t, e) {
    e && e();
  };

  _ctor.prototype.hideBanner = function (t, e) {
    e && e();
  };

  _ctor.prototype.showInsertAd = function (t, e) {
    e && e();
  };

  _ctor.prototype.showVideoAd = function (t, e, n) {
    if ("h5api" in window) {
      h5api.playAd(function (t) {
        if (!(1e4 === t.code)) {
          if (10001 === t.code) {
            e && e();
          } else {
            n && n();
          }
        }
      });
    } else {
      console.log("4399 HTML5 API not found");
      n && n();
    }
  };

  _ctor.prototype.otherFun = function (t, e) {
    e && e();
  };

  _ctor.prototype.shark = function (t, e) {
    e && e();
  };

  _ctor.prototype.recordVideo = function (t, e) {
    e && e();
  };

  _ctor.prototype.shareVideo = function (t, e) {
    e && e();
  };

  _ctor.prototype.stopRecorderManager = function (t, e) {
    e && e();
  };

  _ctor.prototype.setLanguage = function (t, e) {
    e && e();
    return "zh";
  };

  _ctor.prototype.youmengTrack = function () {};

  return _ctor;
}();

exports.Platform4399Manager = exp_Platform4399Manager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1BsYXRmb3JtNDM5OU1hbmFnZXIuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJQbGF0Zm9ybTQzOTlNYW5hZ2VyIiwidW5kZWZpbmVkIiwiZXhwX1BsYXRmb3JtNDM5OU1hbmFnZXIiLCJfY3RvciIsInByb3RvdHlwZSIsImNoZWNrU2hvcnRjdXQiLCJhZGRTaG9ydGN1dCIsInNldENoYXJ0cyIsImdldENoYXJ0cyIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiY2FuU2hhcmUiLCJwYXVzZVJlY29yZCIsInJlc3VtZVJlY29yZCIsImhhc1ZlcmlmeSIsInZlcmlmeUtleSIsImdldENvZGUiLCJ0b0FwcFN0b3JlIiwib3Blbk5vdGlmeSIsInNoYXJlSW1nIiwiZ2V0VXNlckluZm8iLCJoZGllQmxvY2tBZCIsImFuZHJvaWRBZENhbGxCYWNrIiwiaW5pdE5hdGl2ZUFkIiwic2hvd05hdGl2ZUFkIiwiZ2V0VG91Y2hNb2RlVmVyc2lvbiIsImhhc1NoYXJlIiwic2hvd0dhbWVQb3J0YWxBZCIsInNob3dCbG9ja0FkIiwiaGlkZUJsb2NrQWQiLCJ2ZXJzaW9uTmFtZSIsImluaXRTZGsiLCJ0IiwiZSIsImxvZ2luIiwicGF5Iiwic2hhcmUiLCJzaG93QmFubmVyIiwiaGlkZUJhbm5lciIsInNob3dJbnNlcnRBZCIsInNob3dWaWRlb0FkIiwibiIsIndpbmRvdyIsImg1YXBpIiwicGxheUFkIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJvdGhlckZ1biIsInNoYXJrIiwicmVjb3JkVmlkZW8iLCJzaGFyZVZpZGVvIiwic3RvcFJlY29yZGVyTWFuYWdlciIsInNldExhbmd1YWdlIiwieW91bWVuZ1RyYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVB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Q0EsT0FBT2xELEtBQVA7QUFDRCxDQS9GNkIsRUFBOUI7O0FBZ0dBTCxPQUFPLENBQUNFLG1CQUFSLEdBQThCRSx1QkFBOUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBsYXRmb3JtNDM5OU1hbmFnZXIgPSB1bmRlZmluZWQ7XG52YXIgZXhwX1BsYXRmb3JtNDM5OU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge31cbiAgX2N0b3IucHJvdG90eXBlLmNoZWNrU2hvcnRjdXQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmFkZFNob3J0Y3V0ID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRDaGFydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmdldENoYXJ0cyA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0TGF1bmNoT3B0aW9uc1N5bmMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmNhblNoYXJlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnBhdXNlUmVjb3JkID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5yZXN1bWVSZWNvcmQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmhhc1ZlcmlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS52ZXJpZnlLZXkgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmdldENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS50b0FwcFN0b3JlID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5vcGVuTm90aWZ5ID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5zaGFyZUltZyA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0VXNlckluZm8gPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmhkaWVCbG9ja0FkID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5hbmRyb2lkQWRDYWxsQmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdE5hdGl2ZUFkID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5zaG93TmF0aXZlQWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFRvdWNoTW9kZVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmhhc1NoYXJlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dHYW1lUG9ydGFsQWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dCbG9ja0FkID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5oaWRlQmxvY2tBZCA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUudmVyc2lvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiMS4xLjIyMVwiO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdFNkayA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgZSAmJiBlKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgZSAmJiBlKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5wYXkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGUgJiYgZSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2hhcmUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGUgJiYgZSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2hvd0Jhbm5lciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgZSAmJiBlKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5oaWRlQmFubmVyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBlICYmIGUoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dJbnNlcnRBZCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgZSAmJiBlKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zaG93VmlkZW9BZCA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgaWYgKFwiaDVhcGlcIiBpbiB3aW5kb3cpIHtcbiAgICAgIGg1YXBpLnBsYXlBZChmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoISgxZTQgPT09IHQuY29kZSkpIHtcbiAgICAgICAgICBpZiAoMTAwMDEgPT09IHQuY29kZSkge1xuICAgICAgICAgICAgZSAmJiBlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG4gJiYgbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiNDM5OSBIVE1MNSBBUEkgbm90IGZvdW5kXCIpO1xuICAgICAgbiAmJiBuKCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub3RoZXJGdW4gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGUgJiYgZSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2hhcmsgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGUgJiYgZSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVjb3JkVmlkZW8gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGUgJiYgZSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2hhcmVWaWRlbyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgZSAmJiBlKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdG9wUmVjb3JkZXJNYW5hZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBlICYmIGUoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBlICYmIGUoKTtcbiAgICByZXR1cm4gXCJ6aFwiO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUueW91bWVuZ1RyYWNrID0gZnVuY3Rpb24gKCkge307XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuUGxhdGZvcm00Mzk5TWFuYWdlciA9IGV4cF9QbGF0Zm9ybTQzOTlNYW5hZ2VyOyJdfQ==