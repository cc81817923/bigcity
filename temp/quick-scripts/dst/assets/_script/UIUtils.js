
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/UIUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02b4f3KsDZMT7SinMRf3crw', 'UIUtils');
// _script/UIUtils.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIUtils = undefined;

var exp_UIUtils = function () {
  function _ctor() {}

  _ctor.rollNumLabelAtlas = function (t, e, n, i, a, o) {
    undefined === o && (o = 6);
    var r = n;
    var s = 10 * o;
    var l = 0;
    var c = r / s + 1;

    if (r <= s) {
      s = r;
      c = 1;
    } else {
      s += 1;
    }

    var h = function h() {
      if (t) {
        if (l != r) {
          if ((l += c) > r) {
            c -= l - r;
            l = r;
          }

          var n = Number(e.string);
          var a = Math.floor(n + c).toFixed(0) + "";
          e.string = a;
        }
      } else if (l != r && ((l += c) > r && (c = 0, l = r), (n = Number(e.string)) > i)) {
        a = Math.floor(n - c).toFixed(0) + "";
        e.string = a;
      }
    };

    if (s > 0) {
      cc.tween(e.node).call(function () {
        h();
      }).delay(.05).union().repeat(s).call(function () {
        a();
      }).start();
    } else {
      a();
    }
  };

  _ctor.scheduleOnce = function (t, e, n) {
    cc.director.getScheduler().enableForTarget(e);
    cc.director.getScheduler().schedule(t, e, 1, 0, n, false);
  };

  _ctor.schedule = function (t, e, n) {
    cc.director.getScheduler().enableForTarget(e);
    cc.director.getScheduler().schedule(t, e, n, cc.macro.REPEAT_FOREVER, 0, false);
  };

  _ctor.unSchedule = function (t, e) {
    cc.director.getScheduler().enableForTarget(e);
    cc.director.getScheduler().isScheduled(t, e) && cc.director.getScheduler().unschedule(t, e);
  };

  return _ctor;
}();

exports.UIUtils = exp_UIUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1VJVXRpbHMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJVSVV0aWxzIiwidW5kZWZpbmVkIiwiZXhwX1VJVXRpbHMiLCJfY3RvciIsInJvbGxOdW1MYWJlbEF0bGFzIiwidCIsImUiLCJuIiwiaSIsImEiLCJvIiwiciIsInMiLCJsIiwiYyIsImgiLCJOdW1iZXIiLCJzdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJ0b0ZpeGVkIiwiY2MiLCJ0d2VlbiIsIm5vZGUiLCJjYWxsIiwiZGVsYXkiLCJ1bmlvbiIsInJlcGVhdCIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwiZGlyZWN0b3IiLCJnZXRTY2hlZHVsZXIiLCJlbmFibGVGb3JUYXJnZXQiLCJzY2hlZHVsZSIsIm1hY3JvIiwiUkVQRUFUX0ZPUkVWRVIiLCJ1blNjaGVkdWxlIiwiaXNTY2hlZHVsZWQiLCJ1bnNjaGVkdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxPQUFSLEdBQWtCQyxTQUFsQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsWUFBWTtFQUM1QixTQUFTQyxLQUFULEdBQWlCLENBQUU7O0VBQ25CQSxLQUFLLENBQUNDLGlCQUFOLEdBQTBCLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEI7SUFDcERULFNBQVMsS0FBS1MsQ0FBZCxLQUFvQkEsQ0FBQyxHQUFHLENBQXhCO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHSixDQUFSO0lBQ0EsSUFBSUssQ0FBQyxHQUFHLEtBQUtGLENBQWI7SUFDQSxJQUFJRyxDQUFDLEdBQUcsQ0FBUjtJQUNB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QUFFLENBQUNTLFFBQUgsQ0FBWUMsWUFBWixHQUEyQkMsZUFBM0IsQ0FBMkMxQixDQUEzQztJQUNBZSxFQUFFLENBQUNTLFFBQUgsQ0FBWUMsWUFBWixHQUEyQk0sV0FBM0IsQ0FBdUNoQyxDQUF2QyxFQUEwQ0MsQ0FBMUMsS0FBZ0RlLEVBQUUsQ0FBQ1MsUUFBSCxDQUFZQyxZQUFaLEdBQTJCTyxVQUEzQixDQUFzQ2pDLENBQXRDLEVBQXlDQyxDQUF6QyxDQUFoRDtFQUNELENBSEQ7O0VBSUEsT0FBT0gsS0FBUDtBQUNELENBckRpQixFQUFsQjs7QUFzREFMLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQkUsV0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVJVXRpbHMgPSB1bmRlZmluZWQ7XG52YXIgZXhwX1VJVXRpbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge31cbiAgX2N0b3Iucm9sbE51bUxhYmVsQXRsYXMgPSBmdW5jdGlvbiAodCwgZSwgbiwgaSwgYSwgbykge1xuICAgIHVuZGVmaW5lZCA9PT0gbyAmJiAobyA9IDYpO1xuICAgIHZhciByID0gbjtcbiAgICB2YXIgcyA9IDEwICogbztcbiAgICB2YXIgbCA9IDA7XG4gICAgdmFyIGMgPSByIC8gcyArIDE7XG4gICAgaWYgKHIgPD0gcykge1xuICAgICAgcyA9IHI7XG4gICAgICBjID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcyArPSAxO1xuICAgIH1cbiAgICB2YXIgaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIGlmIChsICE9IHIpIHtcbiAgICAgICAgICBpZiAoKGwgKz0gYykgPiByKSB7XG4gICAgICAgICAgICBjIC09IGwgLSByO1xuICAgICAgICAgICAgbCA9IHI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBuID0gTnVtYmVyKGUuc3RyaW5nKTtcbiAgICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IobiArIGMpLnRvRml4ZWQoMCkgKyBcIlwiO1xuICAgICAgICAgIGUuc3RyaW5nID0gYTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsICE9IHIgJiYgKChsICs9IGMpID4gciAmJiAoYyA9IDAsIGwgPSByKSwgKG4gPSBOdW1iZXIoZS5zdHJpbmcpKSA+IGkpKSB7XG4gICAgICAgIGEgPSBNYXRoLmZsb29yKG4gLSBjKS50b0ZpeGVkKDApICsgXCJcIjtcbiAgICAgICAgZS5zdHJpbmcgPSBhO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHMgPiAwKSB7XG4gICAgICBjYy50d2VlbihlLm5vZGUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBoKCk7XG4gICAgICB9KS5kZWxheSguMDUpLnVuaW9uKCkucmVwZWF0KHMpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBhKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhKCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5zY2hlZHVsZU9uY2UgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmVuYWJsZUZvclRhcmdldChlKTtcbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZSh0LCBlLCAxLCAwLCBuLCBmYWxzZSk7XG4gIH07XG4gIF9jdG9yLnNjaGVkdWxlID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5lbmFibGVGb3JUYXJnZXQoZSk7XG4gICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2NoZWR1bGUodCwgZSwgbiwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDAsIGZhbHNlKTtcbiAgfTtcbiAgX2N0b3IudW5TY2hlZHVsZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZW5hYmxlRm9yVGFyZ2V0KGUpO1xuICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmlzU2NoZWR1bGVkKHQsIGUpICYmIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnVuc2NoZWR1bGUodCwgZSk7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuVUlVdGlscyA9IGV4cF9VSVV0aWxzOyJdfQ==