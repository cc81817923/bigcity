
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/UITips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8ba3ngR21FuYdxTm0/H8bV', 'UITips');
// _script/UITips.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_UITips = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.tipsNode = null;
    e.tips = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this.str = this.T(t);
  };

  _ctor.prototype.refreshUI = function (t, e, n, i) {
    this.str = this.T(i);
    this.tweenAction.stop();
    this.tipsNode.setPosition(0, 200);
    this.tipsNode.scaleY = 0;
    this.tips.string = i;
    this.tweenAction.start();
  };

  _ctor.prototype.onLoad = function () {
    var t = this;
    this.tweenAction = cc.tween(this.tipsNode).to(.2, {
      scaleY: 1
    }).delay(1).by(2, {
      position: new cc.Vec3(0, 100)
    }).call(function () {
      t.closeUI();
    });
  };

  _ctor.prototype.start = function () {
    this.tipsNode.opacity = 255;
    this.tweenAction.stop();
    this.tipsNode.setPosition(0, 200);
    this.tipsNode.scaleY = 0;
    this.tips.string = this.str;
    this.tweenAction.start();
  };

  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Layout node"
  })], _ctor.prototype, "tipsNode", undefined);
  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Text"
  })], _ctor.prototype, "tips", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_UITips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1VJVGlwcy5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFCYXNlVUkiLCJyZXF1aXJlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX1VJVGlwcyIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInRpcHNOb2RlIiwidGlwcyIsInByb3RvdHlwZSIsImluaXQiLCJzdHIiLCJUIiwicmVmcmVzaFVJIiwibiIsInR3ZWVuQWN0aW9uIiwic3RvcCIsInNldFBvc2l0aW9uIiwic2NhbGVZIiwic3RyaW5nIiwic3RhcnQiLCJvbkxvYWQiLCJ0d2VlbiIsInRvIiwiZGVsYXkiLCJieSIsInBvc2l0aW9uIiwiVmVjMyIsImNhbGwiLCJjbG9zZVVJIiwib3BhY2l0eSIsInR5cGUiLCJOb2RlIiwidG9vbHRpcCIsInVuZGVmaW5lZCIsIkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsU0FBUyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLGFBQWEs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QUFnQk0sS0FBaEIsQ0FBbkI7QUFDRCxDQTlDZ0IsQ0E4Q2ZYLFNBQVMsV0E5Q00sQ0FBakI7O0FBK0NBRixPQUFPLFdBQVAsR0FBa0JXLFVBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFCYXNlVUkgPSByZXF1aXJlKFwiQmFzZVVJXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX1VJVGlwcyA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLnRpcHNOb2RlID0gbnVsbDtcbiAgICBlLnRpcHMgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuc3RyID0gdGhpcy5UKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVmcmVzaFVJID0gZnVuY3Rpb24gKHQsIGUsIG4sIGkpIHtcbiAgICB0aGlzLnN0ciA9IHRoaXMuVChpKTtcbiAgICB0aGlzLnR3ZWVuQWN0aW9uLnN0b3AoKTtcbiAgICB0aGlzLnRpcHNOb2RlLnNldFBvc2l0aW9uKDAsIDIwMCk7XG4gICAgdGhpcy50aXBzTm9kZS5zY2FsZVkgPSAwO1xuICAgIHRoaXMudGlwcy5zdHJpbmcgPSBpO1xuICAgIHRoaXMudHdlZW5BY3Rpb24uc3RhcnQoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy50d2VlbkFjdGlvbiA9IGNjLnR3ZWVuKHRoaXMudGlwc05vZGUpLnRvKC4yLCB7XG4gICAgICBzY2FsZVk6IDFcbiAgICB9KS5kZWxheSgxKS5ieSgyLCB7XG4gICAgICBwb3NpdGlvbjogbmV3IGNjLlZlYzMoMCwgMTAwKVxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5jbG9zZVVJKCk7XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRpcHNOb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy50d2VlbkFjdGlvbi5zdG9wKCk7XG4gICAgdGhpcy50aXBzTm9kZS5zZXRQb3NpdGlvbigwLCAyMDApO1xuICAgIHRoaXMudGlwc05vZGUuc2NhbGVZID0gMDtcbiAgICB0aGlzLnRpcHMuc3RyaW5nID0gdGhpcy5zdHI7XG4gICAgdGhpcy50d2VlbkFjdGlvbi5zdGFydCgpO1xuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkxheW91dCBub2RlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwidGlwc05vZGVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgIHRvb2x0aXA6IFwiVGV4dFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInRpcHNcIiwgdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KCR6MUJhc2VVSS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9VSVRpcHM7Il19