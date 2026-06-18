
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_UserData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ea96Vb+SVBGLEhXAWEhwWt', 'GAD_UserData');
// _script/GAD_UserData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseData = require("BaseData");

var $z1Config = require("Config");

var s = function s() {
  this.level = 1;
};

var def_GAD_UserData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.protoId = 1;
    e.ecrypt = false;
    e.aliseMap = {
      level: "1"
    };
    e.gameKey = $z1Config.GameConfig.AppCacheName + "gad_udata";
    e.isNewUser = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new s();
    return this.data;
  };

  _ctor.prototype.initData = function (t) {
    t && (this.isNewUser = true);
    this.saveData();
  };

  _ctor.prototype.getLevel = function () {
    return this.data.level || 1;
  };

  _ctor.prototype.addLevel = function () {
    this.data.level = this.data.level || 1;
    this.data.level++;
    this.saveData();
  };

  return _ctor;
}($z1BaseData.BaseData);

exports["default"] = def_GAD_UserData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9Vc2VyRGF0YS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VEYXRhIiwicmVxdWlyZSIsIiR6MUNvbmZpZyIsInMiLCJsZXZlbCIsImRlZl9HQURfVXNlckRhdGEiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwcm90b0lkIiwiZWNyeXB0IiwiYWxpc2VNYXAiLCJnYW1lS2V5IiwiR2FtZUNvbmZpZyIsIkFwcENhY2hlTmFtZSIsImlzTmV3VXNlciIsInByb3RvdHlwZSIsImNyZWF0ZURhdGEiLCJkYXRhIiwiaW5pdERhdGEiLCJzYXZlRGF0YSIsImdldExldmVsIiwiYWRkTGV2ZWwiLCJCYXNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF6Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXZCOztBQUNBLElBQUlFLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQVk7RUFDbEIsS0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDRCxDQUZEOztBQUdBLElBQUlDLGdCQUFnQixHQUFHLFVBQVVDLENBQVYsRUFBYTtFQUNsQyxTQUFTQyxLQUFULEdBQWlCO0lBQ2YsSUFBSUMsQ0FBQyxHQUFHLFNBQVNGLENBQVQsSUFBY0EsQ0FBQyxDQUFDRyxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWQsSUFBMEMsSUFBbEQ7SUFDQUYsQ0FBQyxDQUFDRyxPQUFGLEdBQVksQ0FBWjtJQUNBSCxDQUFDLENBQUNJLE1BQUYsR0FBVyxLQUFYO0lBQ0FKLENBQUMsQ0FBQ0ssUUFBRixHQUFhO01BQ1hULEtBQUssRUFBRTtJQURJLENBQWI7SUFHQUksQ0FBQyxDQUFDTSxPQUFGLEdBQVlaLFNBQVMsQ0FBQ2EsVUFBVixDQUFxQkMsWUFBckIsR0FBb0MsV0FBaEQ7SUFDQVIsQ0FBQyxDQUFDUyxTQUFGLEdBQWMsS0FBZDtJQUNBLE9BQU9ULENBQVA7RUFDRDs7RUFDRGQsV0FBVyxDQUFDYSxLQUFELEVBQVFELENBQVIsQ0FBWDs7RUFDQUMsS0FBSyxDQUFDVyxTQUFOLENBQWdCQyxVQUFoQixHQUE2QixZQUFZO0lBQ3ZDLEtBQUtDLElBQUwsR0FBWSxJQUFJakIsQ0FBSixFQUFaO0lBQ0EsT0FBTyxLQUFLaUIsSUFBWjtFQUNELENBSEQ7O0VBSUFiLEtBQUssQ0FBQ1csU0FBTixDQUFnQkcsUUFBaEIsR0FBMkIsVUFBVWYsQ0FBVixFQUFhO0lBQ3RDQSxDQUFDLEtBQUssS0FBS1csU0FBTCxHQUFpQixJQUF0QixDQUFEO0lBQ0EsS0FBS0ssUUFBTDtFQUNELENBSEQ7O0VBSUFmLEtBQUssQ0FBQ1csU0FBTixDQUFnQkssUUFBaEIsR0FBMkIsWUFBWTtJQUNyQyxPQUFPLEtBQUtILElBQUwsQ0FBVWhCLEtBQVYsSUFBbUIsQ0FBMUI7RUFDRCxDQUZEOztFQUdBRyxLQUFLLENBQUNXLFNBQU4sQ0FBZ0JNLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsS0FBS0osSUFBTCxDQUFVaEIsS0FBVixHQUFrQixLQUFLZ0IsSUFBTCxDQUFVaEIsS0FBVixJQUFtQixDQUFyQztJQUNBLEtBQUtnQixJQUFMLENBQVVoQixLQUFWO0lBQ0EsS0FBS2tCLFFBQUw7RUFDRCxDQUpEOztFQUtBLE9BQU9mLEtBQVA7QUFDRCxDQTlCc0IsQ0E4QnJCUCxXQUFXLENBQUN5QixRQTlCUyxDQUF2Qjs7QUErQkEzQixPQUFPLFdBQVAsR0FBa0JPLGdCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VEYXRhID0gcmVxdWlyZShcIkJhc2VEYXRhXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZXZlbCA9IDE7XG59O1xudmFyIGRlZl9HQURfVXNlckRhdGEgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5wcm90b0lkID0gMTtcbiAgICBlLmVjcnlwdCA9IGZhbHNlO1xuICAgIGUuYWxpc2VNYXAgPSB7XG4gICAgICBsZXZlbDogXCIxXCJcbiAgICB9O1xuICAgIGUuZ2FtZUtleSA9ICR6MUNvbmZpZy5HYW1lQ29uZmlnLkFwcENhY2hlTmFtZSArIFwiZ2FkX3VkYXRhXCI7XG4gICAgZS5pc05ld1VzZXIgPSBmYWxzZTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YSA9IG5ldyBzKCk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0ICYmICh0aGlzLmlzTmV3VXNlciA9IHRydWUpO1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGV2ZWwgfHwgMTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmFkZExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YS5sZXZlbCA9IHRoaXMuZGF0YS5sZXZlbCB8fCAxO1xuICAgIHRoaXMuZGF0YS5sZXZlbCsrO1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgcmV0dXJuIF9jdG9yO1xufSgkejFCYXNlRGF0YS5CYXNlRGF0YSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfR0FEX1VzZXJEYXRhOyJdfQ==