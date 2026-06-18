
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GameTestSegData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1cbapTTbtHf7Y/Vw2qfdX7', 'GameTestSegData');
// _script/GameTestSegData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestData = undefined;

var $z1SegBaseData = require("SegBaseData");

var $z1Config = require("Config");

var s = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.goldNum = 0;
    e.test = [];
    return e;
  }

  cc__extends(e, t);
  return e;
}($z1SegBaseData.SegData);

var exp_TestData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.aliseMap = {
      goldNum: "1",
      test: "2",
      maxNum: "3"
    };
    e.ListName = "test";
    e.len = 30;
    e.gameKey = $z1Config.GameConfig.AppCacheName + "test";
    e.ecrypt = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new s();
    return this.data;
  };

  _ctor.prototype.initData = function () {};

  _ctor.prototype.setTestdata = function () {
    this.data.test.push({
      test: 1
    });
    this.saveData(-1);
  };

  _ctor.prototype.delTestdata = function () {
    this.data.test.splice(this.data.test.length - 1, 1);
    this.saveData(-1);
  };

  _ctor.prototype.changleTestData = function () {
    this.data.test[0] = {
      test: 0
    };
    this.saveData(-1);
  };

  _ctor.prototype.changleTestData2 = function () {
    var t = -1;
    var e = null;

    for (var n = 0; n < this.data.test.length; n++) {
      if (0 == n) {
        t = n;
        e = this.data.test[n];
        break;
      }
    }

    e.test = 5;
    -1 != t && this.saveData(-1);
  };

  _ctor.prototype.getTestData = function () {
    return this.data.test;
  };

  return _ctor;
}($z1SegBaseData.SegBaseData);

exports.TestData = exp_TestData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dhbWVUZXN0U2VnRGF0YS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlRlc3REYXRhIiwidW5kZWZpbmVkIiwiJHoxU2VnQmFzZURhdGEiLCJyZXF1aXJlIiwiJHoxQ29uZmlnIiwicyIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnb2xkTnVtIiwidGVzdCIsIlNlZ0RhdGEiLCJleHBfVGVzdERhdGEiLCJfY3RvciIsImFsaXNlTWFwIiwibWF4TnVtIiwiTGlzdE5hbWUiLCJsZW4iLCJnYW1lS2V5IiwiR2FtZUNvbmZpZyIsIkFwcENhY2hlTmFtZSIsImVjcnlwdCIsInByb3RvdHlwZSIsImNyZWF0ZURhdGEiLCJkYXRhIiwiaW5pdERhdGEiLCJzZXRUZXN0ZGF0YSIsInB1c2giLCJzYXZlRGF0YSIsImRlbFRlc3RkYXRhIiwic3BsaWNlIiwibGVuZ3RoIiwiY2hhbmdsZVRlc3REYXRhIiwiY2hhbmdsZVRlc3REYXRhMiIsIm4iLCJnZXRUZXN0RGF0YSIsIlNlZ0Jhc2VEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLFFBQVIsR0FBbUJDLFNBQW5COztBQUNBLElBQUlDLGNBQWMsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBNUI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJRSxDQUFDLEdBQUcsVUFBVUMsQ0FBVixFQUFhO0VBQ25CLFNBQVNDLENBQVQsR0FBYTtJQUNYLElBQUlBLENB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QSxDQUFDLENBQUQsSUFBTUwsQ0FBTixJQUFXLEtBQUt1QixRQUFMLENBQWMsQ0FBQyxDQUFmLENBQVg7RUFDRCxDQVpEOztFQWFBZixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JhLFdBQWhCLEdBQThCLFlBQVk7SUFDeEMsT0FBTyxLQUFLWCxJQUFMLENBQVVkLElBQWpCO0VBQ0QsQ0FGRDs7RUFHQSxPQUFPRyxLQUFQO0FBQ0QsQ0FyRGtCLENBcURqQlosY0FBYyxDQUFDbUMsV0FyREUsQ0FBbkI7O0FBc0RBdkMsT0FBTyxDQUFDRSxRQUFSLEdBQW1CYSxZQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UZXN0RGF0YSA9IHVuZGVmaW5lZDtcbnZhciAkejFTZWdCYXNlRGF0YSA9IHJlcXVpcmUoXCJTZWdCYXNlRGF0YVwiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xudmFyIHMgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBlKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmdvbGROdW0gPSAwO1xuICAgIGUudGVzdCA9IFtdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKGUsIHQpO1xuICByZXR1cm4gZTtcbn0oJHoxU2VnQmFzZURhdGEuU2VnRGF0YSk7XG52YXIgZXhwX1Rlc3REYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuYWxpc2VNYXAgPSB7XG4gICAgICBnb2xkTnVtOiBcIjFcIixcbiAgICAgIHRlc3Q6IFwiMlwiLFxuICAgICAgbWF4TnVtOiBcIjNcIlxuICAgIH07XG4gICAgZS5MaXN0TmFtZSA9IFwidGVzdFwiO1xuICAgIGUubGVuID0gMzA7XG4gICAgZS5nYW1lS2V5ID0gJHoxQ29uZmlnLkdhbWVDb25maWcuQXBwQ2FjaGVOYW1lICsgXCJ0ZXN0XCI7XG4gICAgZS5lY3J5cHQgPSBmYWxzZTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YSA9IG5ldyBzKCk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRUZXN0ZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEudGVzdC5wdXNoKHtcbiAgICAgIHRlc3Q6IDFcbiAgICB9KTtcbiAgICB0aGlzLnNhdmVEYXRhKC0xKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRlbFRlc3RkYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YS50ZXN0LnNwbGljZSh0aGlzLmRhdGEudGVzdC5sZW5ndGggLSAxLCAxKTtcbiAgICB0aGlzLnNhdmVEYXRhKC0xKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmNoYW5nbGVUZXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEudGVzdFswXSA9IHtcbiAgICAgIHRlc3Q6IDBcbiAgICB9O1xuICAgIHRoaXMuc2F2ZURhdGEoLTEpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuY2hhbmdsZVRlc3REYXRhMiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IC0xO1xuICAgIHZhciBlID0gbnVsbDtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRoaXMuZGF0YS50ZXN0Lmxlbmd0aDsgbisrKSB7XG4gICAgICBpZiAoMCA9PSBuKSB7XG4gICAgICAgIHQgPSBuO1xuICAgICAgICBlID0gdGhpcy5kYXRhLnRlc3Rbbl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBlLnRlc3QgPSA1O1xuICAgIC0xICE9IHQgJiYgdGhpcy5zYXZlRGF0YSgtMSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRUZXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnRlc3Q7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oJHoxU2VnQmFzZURhdGEuU2VnQmFzZURhdGEpO1xuZXhwb3J0cy5UZXN0RGF0YSA9IGV4cF9UZXN0RGF0YTsiXX0=