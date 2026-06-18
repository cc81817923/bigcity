
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_CardItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b92IcY/lA34PU/T5mUpAa', 'GAD_CardItem');
// _script/GAD_CardItem.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1GAD_Configs = require("GAD_Configs");

var $z1GAD_Base = require("GAD_Base");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_CardItem = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndHead1 = null;
    e.addBuffAnimation = null;
    e._cfg = null;
    e._atkDamage = 0;
    e._lv = 1;
    e.OFF_Y = 30;
    e.SPEED = 500;
    e._isAni = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this.initTagID();
    this._cfg = t;
    this.initView();
    this._lv = 1;
    this._atkDamage = this._cfg.basicATK;
    this.addEvent($z1GAD_Configs.emGADEventName.GAD_BuffAnimation, this.showBuffAnimation);
    this.updateLv();
  };

  _ctor.prototype.showBuffAnimation = function () {
    this.addBuffAnimation.setAnimation(0, "emission", false);
  };

  _ctor.prototype.hideView = function () {
    this.node.active = false;
  };

  _ctor.prototype.getCardCfg = function () {
    return this._cfg;
  };

  _ctor.prototype.initView = function () {};

  _ctor.prototype.refreshHpBar = function () {};

  _ctor.prototype.playAttack = function (t, e, n) {
    if (this.node.active && !this._isAni) {
      this._isAni = true;
      Math.max(.05, .1 * e);
    }

    this.sendEvent($z1GAD_Configs.emGADEventName.GAD_Shoot_Bullet, t, n || this.node.convertToWorldSpaceAR(cc.v2(0, .35 * this.node.height)), this);
  };

  _ctor.prototype.start = function () {};

  _ctor.prototype.updateLv = function () {};

  _ctor.prototype.addLev = function (t) {
    if (this._lv >= this._cfg.cardLevel) {
      return false;
    }

    this._lv += t;
    this._atkDamage += this._cfg.cardATK;
    this.updateLv();
  };

  _ctor.prototype.getAtkDamage = function (t) {
    var e = t + this._atkDamage;

    if (e < 0) {
      return 0;
    } else {
      return e;
    }
  };

  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndHead1", undefined);
  cc__decorate([ccp_property(sp.Skeleton)], _ctor.prototype, "addBuffAnimation", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1GAD_Base["default"]);

exports["default"] = def_GAD_CardItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9DYXJkSXRlbS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFHQURfQ29uZmlncyIsInJlcXVpcmUiLCIkejFHQURfQmFzZSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9HQURfQ2FyZEl0ZW0iLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZEhlYWQxIiwiYWRkQnVmZkFuaW1hdGlvbiIsIl9jZmciLCJfYXRrRGFtYWdlIiwiX2x2IiwiT0ZGX1kiLCJTUEVFRCIsIl9pc0FuaSIsInByb3RvdHlwZSIsImluaXQiLCJpbml0VGFnSUQiLCJpbml0VmlldyIsImJhc2ljQVRLIiwiYWRkRXZlbnQiLCJlbUdBREV2ZW50TmFtZSIsIkdBRF9CdWZmQW5pbWF0aW9uIiwic2hvd0J1ZmZBbmltYXRpb24iLCJ1cGRhdGVMdiIsInNldEFuaW1hdGlvbiIsImhpZGVWaWV3Iiwibm9kZSIsImFjdGl2ZSIsImdldENhcmRDZmciLCJyZWZyZXNoSHBCYXIiLCJwbGF5QXR0YWNrIiwibiIsIk1hdGgiLCJtYXgiLCJzZW5kRXZlbnQiLCJHQURfU2hvb3RfQnVsbGV0IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJoZWlnaHQiLCJzdGFydCIsImFkZExldiIsImNhcmRMZXZlbCIsImNhcmRBVEsiLCJnZXRBdGtEYW1hZ2UiLCJOb2RlIiwidW5kZWZpbmVkIiwic3AiLCJTa2VsZXRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElB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QXBDLEVBQStDLGtCQUEvQyxFQUFtRStCLFNBQW5FLENBQVo7RUFDQSxPQUFPN0QsWUFBWSxDQUFDLENBQUNZLFdBQUQsQ0FBRCxFQUFnQk0sS0FBaEIsQ0FBbkI7QUFDRCxDQTlEc0IsQ0E4RHJCVixXQUFXLFdBOURVLENBQXZCOztBQStEQUosT0FBTyxXQUFQLEdBQWtCWSxnQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUdBRF9Db25maWdzID0gcmVxdWlyZShcIkdBRF9Db25maWdzXCIpO1xudmFyICR6MUdBRF9CYXNlID0gcmVxdWlyZShcIkdBRF9CYXNlXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0dBRF9DYXJkSXRlbSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLm5kSGVhZDEgPSBudWxsO1xuICAgIGUuYWRkQnVmZkFuaW1hdGlvbiA9IG51bGw7XG4gICAgZS5fY2ZnID0gbnVsbDtcbiAgICBlLl9hdGtEYW1hZ2UgPSAwO1xuICAgIGUuX2x2ID0gMTtcbiAgICBlLk9GRl9ZID0gMzA7XG4gICAgZS5TUEVFRCA9IDUwMDtcbiAgICBlLl9pc0FuaSA9IGZhbHNlO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuaW5pdFRhZ0lEKCk7XG4gICAgdGhpcy5fY2ZnID0gdDtcbiAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgdGhpcy5fbHYgPSAxO1xuICAgIHRoaXMuX2F0a0RhbWFnZSA9IHRoaXMuX2NmZy5iYXNpY0FUSztcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUdBRF9Db25maWdzLmVtR0FERXZlbnROYW1lLkdBRF9CdWZmQW5pbWF0aW9uLCB0aGlzLnNob3dCdWZmQW5pbWF0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZUx2KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zaG93QnVmZkFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZEJ1ZmZBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsIFwiZW1pc3Npb25cIiwgZmFsc2UpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaGlkZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0Q2FyZENmZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2ZnO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLnJlZnJlc2hIcEJhciA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUucGxheUF0dGFjayA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgJiYgIXRoaXMuX2lzQW5pKSB7XG4gICAgICB0aGlzLl9pc0FuaSA9IHRydWU7XG4gICAgICBNYXRoLm1heCguMDUsIC4xICogZSk7XG4gICAgfVxuICAgIHRoaXMuc2VuZEV2ZW50KCR6MUdBRF9Db25maWdzLmVtR0FERXZlbnROYW1lLkdBRF9TaG9vdF9CdWxsZXQsIHQsIG4gfHwgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAuMzUgKiB0aGlzLm5vZGUuaGVpZ2h0KSksIHRoaXMpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLnVwZGF0ZUx2ID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRMZXYgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICh0aGlzLl9sdiA+PSB0aGlzLl9jZmcuY2FyZExldmVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2x2ICs9IHQ7XG4gICAgdGhpcy5fYXRrRGFtYWdlICs9IHRoaXMuX2NmZy5jYXJkQVRLO1xuICAgIHRoaXMudXBkYXRlTHYoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEF0a0RhbWFnZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0ICsgdGhpcy5fYXRrRGFtYWdlO1xuICAgIGlmIChlIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRIZWFkMVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShzcC5Ta2VsZXRvbildLCBfY3Rvci5wcm90b3R5cGUsIFwiYWRkQnVmZkFuaW1hdGlvblwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxR0FEX0Jhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfR0FEX0NhcmRJdGVtOyJdfQ==