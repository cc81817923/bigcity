
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallItemHp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02b8btphmxNmbLwrJa31qvT', 'KinghtFallItemHp');
// _script/KinghtFallItemHp.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1KinghtFallModle = require("KinghtFallModle");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallItemHp = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.sprPro1 = null;
    e.sprPro2 = null;
    e.labPro = null;
    e.spAni = null;
    e.sprPro = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onLoad = function () {
    var t = this;

    if (this.spAni) {
      this.spAni.node.active = false;
      this.spAni.setCompleteListener(function () {
        t.spAni.node.active = false;
      });
    }

    this.labPro && (this.labPro.node.active = false);
  };

  _ctor.prototype.setType = function (t) {
    switch (t) {
      case $z1KinghtFallModle.KinghtFallGameArmy.None:
        this.sprPro = null;
        this.sprPro1 && (this.sprPro1.node.active = false);
        this.sprPro2 && (this.sprPro2.node.active = false);
        break;

      case $z1KinghtFallModle.KinghtFallGameArmy.Friend:
        this.sprPro = this.sprPro1;
        this.sprPro1 && (this.sprPro1.node.active = true);
        this.sprPro2 && (this.sprPro2.node.active = false);
        break;

      case $z1KinghtFallModle.KinghtFallGameArmy.Enemy:
        this.sprPro = this.sprPro2;
        this.sprPro1 && (this.sprPro1.node.active = false);
        this.sprPro2 && (this.sprPro2.node.active = true);
    }
  };

  _ctor.prototype.setProgress = function (t) {
    if (this.sprPro) {
      if (t >= 1 || t <= 0) {
        this.node.active = false;
      } else {
        this.node.active = true;
        this.sprPro.fillRange = t;
      }
    }
  };

  _ctor.prototype.setHp = function (t, e) {
    if (this.sprPro) {
      if (t >= e || t <= 0) {
        this.node.active = false;
      } else {
        this.node.active = true;
        this.sprPro.fillRange = t / e;
        this.labPro && (this.labPro.string = t.toFixed(2) + "/" + e.toFixed(2));
      }
    }
  };

  _ctor.prototype.showAni = function () {
    if (this.spAni) {
      this.spAni.node.active = true;
      this.spAni.setAnimation(0, this.spAni.defaultAnimation, false);
    }
  };

  cc__decorate([ccp_property({
    type: cc.Sprite,
    tooltip: "Ally HP"
  })], _ctor.prototype, "sprPro1", undefined);
  cc__decorate([ccp_property({
    type: cc.Sprite,
    tooltip: "Enemy HP"
  })], _ctor.prototype, "sprPro2", undefined);
  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Enemy HP"
  })], _ctor.prototype, "labPro", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Enemy HP"
  })], _ctor.prototype, "spAni", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);

exports["default"] = def_KinghtFallItemHp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxJdGVtSHAuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxS2luZ2h0RmFsbE1vZGxlIiwicmVxdWlyZSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsSXRlbUhwIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3ByUHJvMSIsInNwclBybzIiLCJsYWJQcm8iLCJzcEFuaSIsInNwclBybyIsInByb3RvdHlwZSIsIm9uTG9hZCIsIm5vZGUiLCJhY3RpdmUiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwic2V0VHlwZSIsIktpbmdodEZhbGxHYW1lQXJteSIsIk5vbmUiLCJGcmllbmQiLCJFbmVteSIsInNldFByb2dyZXNzIiwiZmlsbFJhbmdlIiwic2V0SHAiLCJzdHJpbmciLCJ0b0ZpeGVkIiwic2hvd0FuaSIsInNldEFuaW1hdGlvbiIsImRlZmF1bHRBbmltYXRpb24iLCJ0eXBlIiwiU3ByaXRlIiwidG9vbHRpcCIsInVuZGVmaW5lZCIsIkxhYmVsIiwic3AiLCJTa2VsZXRvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLGtCQUFrQixHQUFHQyxPQUFPLENBQUMsaUJB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U0FIQyxFQUdVLFNBSFYsRUFHcUJxQixTQUhyQixDQUFaO0VBSUEvQyxZQUFZLENBQUMsQ0FBQ2EsWUFBWSxDQUFDO0lBQ3pCK0IsSUFBSSxFQUFFbkMsRUFBRSxDQUFDb0MsTUFEZ0I7SUFFekJDLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQN0IsS0FBSyxDQUFDUyxTQUhDLEVBR1UsU0FIVixFQUdxQnFCLFNBSHJCLENBQVo7RUFJQS9DLFlBQVksQ0FBQyxDQUFDYSxZQUFZLENBQUM7SUFDekIrQixJQUFJLEVBQUVuQyxFQUFFLENBQUN1QyxLQURnQjtJQUV6QkYsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1A3QixLQUFLLENBQUNTLFNBSEMsRUFHVSxRQUhWLEVBR29CcUIsU0FIcEIsQ0FBWjtFQUlBL0MsWUFBWSxDQUFDLENBQUNhLFlBQVksQ0FBQztJQUN6QitCLElBQUksRUFBRUssRUFBRSxDQUFDQyxRQURnQjtJQUV6QkosT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1A3QixLQUFLLENBQUNTLFNBSEMsRUFHVSxPQUhWLEVBR21CcUIsU0FIbkIsQ0FBWjtFQUlBLE9BQU8vQyxZQUFZLENBQUMsQ0FBQ1csV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBbkYwQixDQW1GekJSLEVBQUUsQ0FBQzBDLFNBbkZzQixDQUEzQjs7QUFvRkEvQyxPQUFPLFdBQVAsR0FBa0JXLG9CQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxS2luZ2h0RmFsbE1vZGxlID0gcmVxdWlyZShcIktpbmdodEZhbGxNb2RsZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsSXRlbUhwID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuc3ByUHJvMSA9IG51bGw7XG4gICAgZS5zcHJQcm8yID0gbnVsbDtcbiAgICBlLmxhYlBybyA9IG51bGw7XG4gICAgZS5zcEFuaSA9IG51bGw7XG4gICAgZS5zcHJQcm8gPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3BBbmkpIHtcbiAgICAgIHRoaXMuc3BBbmkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3BBbmkuc2V0Q29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuc3BBbmkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxhYlBybyAmJiAodGhpcy5sYWJQcm8ubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24gKHQpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lQXJteS5Ob25lOlxuICAgICAgICB0aGlzLnNwclBybyA9IG51bGw7XG4gICAgICAgIHRoaXMuc3ByUHJvMSAmJiAodGhpcy5zcHJQcm8xLm5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICB0aGlzLnNwclBybzIgJiYgKHRoaXMuc3ByUHJvMi5ub2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsR2FtZUFybXkuRnJpZW5kOlxuICAgICAgICB0aGlzLnNwclBybyA9IHRoaXMuc3ByUHJvMTtcbiAgICAgICAgdGhpcy5zcHJQcm8xICYmICh0aGlzLnNwclBybzEubm9kZS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgICAgdGhpcy5zcHJQcm8yICYmICh0aGlzLnNwclBybzIubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVBcm15LkVuZW15OlxuICAgICAgICB0aGlzLnNwclBybyA9IHRoaXMuc3ByUHJvMjtcbiAgICAgICAgdGhpcy5zcHJQcm8xICYmICh0aGlzLnNwclBybzEubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3ByUHJvMiAmJiAodGhpcy5zcHJQcm8yLm5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICh0aGlzLnNwclBybykge1xuICAgICAgaWYgKHQgPj0gMSB8fCB0IDw9IDApIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3ByUHJvLmZpbGxSYW5nZSA9IHQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0SHAgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGlmICh0aGlzLnNwclBybykge1xuICAgICAgaWYgKHQgPj0gZSB8fCB0IDw9IDApIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3ByUHJvLmZpbGxSYW5nZSA9IHQgLyBlO1xuICAgICAgICB0aGlzLmxhYlBybyAmJiAodGhpcy5sYWJQcm8uc3RyaW5nID0gdC50b0ZpeGVkKDIpICsgXCIvXCIgKyBlLnRvRml4ZWQoMikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dBbmkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3BBbmkpIHtcbiAgICAgIHRoaXMuc3BBbmkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zcEFuaS5zZXRBbmltYXRpb24oMCwgdGhpcy5zcEFuaS5kZWZhdWx0QW5pbWF0aW9uLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuU3ByaXRlLFxuICAgIHRvb2x0aXA6IFwiQWxseSBIUFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInNwclBybzFcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLlNwcml0ZSxcbiAgICB0b29sdGlwOiBcIkVuZW15IEhQXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwic3ByUHJvMlwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTGFiZWwsXG4gICAgdG9vbHRpcDogXCJFbmVteSBIUFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImxhYlByb1wiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogc3AuU2tlbGV0b24sXG4gICAgdG9vbHRpcDogXCJFbmVteSBIUFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInNwQW5pXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxJdGVtSHA7Il19