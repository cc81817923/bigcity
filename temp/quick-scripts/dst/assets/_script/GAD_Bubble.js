
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_Bubble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '426c43AwctCzZPD41BC1vTx', 'GAD_Bubble');
// _script/GAD_Bubble.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1GAD_Base = require("GAD_Base");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_Bubble = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.text = null;
    e.icon = null;
    e._cardID = 0;
    e._cfg = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.setCardID = function (t) {
    this._cardID = t;
  };

  _ctor.prototype.getCardID = function () {
    return this._cardID;
  };

  _ctor.prototype.start = function () {
    this.node.active = true;
  };

  _ctor.prototype.init = function (t, e) {
    this.initTagID();
    this._cfg = t;
    this._cardID = e;
  };

  _ctor.prototype.getCfg = function () {
    return this._cfg;
  };

  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "text", undefined);
  cc__decorate([ccp_property(cc.Sprite)], _ctor.prototype, "icon", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1GAD_Base["default"]);

exports["default"] = def_GAD_Bubble;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9CdWJibGUuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxR0FEX0Jhc2UiLCJyZXF1aXJlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0dBRF9CdWJibGUiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0ZXh0IiwiaWNvbiIsIl9jYXJkSUQiLCJfY2ZnIiwicHJvdG90eXBlIiwic2V0Q2FyZElEIiwiZ2V0Q2FyZElEIiwic3RhcnQiLCJub2RlIiwiYWN0aXZlIiwiaW5pdCIsImluaXRUYWdJRCIsImdldENmZyIsIkxhYmVsIiwidW5kZWZpbmVkIiwiU3ByaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF6Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ00sUUFBakM7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHLFVBQVVDLENBQVYsRUFBYTtFQUNoQyxTQUFTQyxLQUFULEdBQWlCO0lBQ2YsSUFBSUMsQ0FBQyxHQUFHLFNBQVNGLENBQVQsSUFBY0EsQ0FBQyxDQUFDRyxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWQsSUFBMEMsSUFBbEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBSCxDQUFDLENBQUNJLElBQUYsR0FBUyxJQUFUO0lBQ0FKLENBQUMsQ0FBQ0ssT0FBRixHQUFZLENBQVo7SUFDQUwsQ0FBQyxDQUFDTSxJQUFGLEdBQVMsSUFBVDtJQUNBLE9BQU9OLENBQVA7RUFDRDs7RUFDRHBCLFdBQVcsQ0FBQ21CLEtBQUQsRUFBUUQsQ0FBUixDQUFYOztFQUNBQyxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JDLFNBQWhCLEdBQTRCLFVBQVVWLENBQVYsRUFBYTtJQUN2QyxLQUFLTyxPQUFMLEdBQWVQLENBQWY7RUFDRCxDQUZEOztFQUdBQyxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JFLFNBQWhCLEdBQTRCLFlBQVk7SUFDdEMsT0FBTyxLQUFLSixPQUFaO0VBQ0QsQ0FGRDs7RUFHQU4sS0FBSyxDQUFDUSxTQUFOLENBQWdCRyxLQUFoQixHQUF3QixZQUFZO0lBQ2xDLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjtFQUNELENBRkQ7O0VBR0FiLEtBQUssQ0FBQ1EsU0FBTixDQUFnQk0sSUFBaEIsR0FBdUIsVUFBVWYsQ0FBVixFQUFhRSxDQUFiLEVBQWdCO0lBQ3JDLEtBQUtjLFNBQUw7SUFDQSxLQUFLUixJQUFMLEdBQVlSLENBQVo7SUFDQSxLQUFLTyxPQUFMLEdBQWVMLENBQWY7RUFDRCxDQUpEOztFQUtBRCxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JRLE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsT0FBTyxLQUFLVCxJQUFaO0VBQ0QsQ0FGRDs7RUFHQXhCLFlBQVksQ0FBQyxDQUFDYSxZQUFZLENBQUNKLEVBQUUsQ0FBQ3lCLEtBQUosQ0FBYixDQUFELEVBQTJCakIsS0FBSyxDQUFDUSxTQUFqQyxFQUE0QyxNQUE1QyxFQUFvRFUsU0FBcEQsQ0FBWjtFQUNBbkMsWUFBWSxDQUFDLENBQUNhLFlBQVksQ0FBQ0osRUFBRSxDQUFDMkIsTUFBSixDQUFiLENBQUQsRUFBNEJuQixLQUFLLENBQUNRLFNBQWxDLEVBQTZDLE1BQTdDLEVBQXFEVSxTQUFyRCxDQUFaO0VBQ0EsT0FBT25DLFlBQVksQ0FBQyxDQUFDVyxXQUFELENBQUQsRUFBZ0JNLEtBQWhCLENBQW5CO0FBQ0QsQ0E5Qm9CLENBOEJuQlgsV0FBVyxXQTlCUSxDQUFyQjs7QUErQkFGLE9BQU8sV0FBUCxHQUFrQlcsY0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUdBRF9CYXNlID0gcmVxdWlyZShcIkdBRF9CYXNlXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0dBRF9CdWJibGUgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS50ZXh0ID0gbnVsbDtcbiAgICBlLmljb24gPSBudWxsO1xuICAgIGUuX2NhcmRJRCA9IDA7XG4gICAgZS5fY2ZnID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRDYXJkSUQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuX2NhcmRJRCA9IHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRDYXJkSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRJRDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdGhpcy5pbml0VGFnSUQoKTtcbiAgICB0aGlzLl9jZmcgPSB0O1xuICAgIHRoaXMuX2NhcmRJRCA9IGU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRDZmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NmZztcbiAgfTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTGFiZWwpXSwgX2N0b3IucHJvdG90eXBlLCBcInRleHRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuU3ByaXRlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJpY29uXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFHQURfQmFzZS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9HQURfQnViYmxlOyJdfQ==