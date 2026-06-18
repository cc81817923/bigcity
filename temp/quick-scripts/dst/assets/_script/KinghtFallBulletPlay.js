
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBulletPlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '417d5/J2X1NHqiXYVyzBQix', 'KinghtFallBulletPlay');
// _script/KinghtFallBulletPlay.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallBulletBase = require("KinghtFallBulletBase");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallBulletPlay = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.setTag = function (t, e, n) {
    this._dir = cc.v2(e.x - t.x, e.y - t.y).normalizeSelf();
    this.tagNode = e;
    this.tagNode.getPosition(this.tagPos);
    this.bullet.active = true;
    var i = 180 * cc.Vec2.RIGHT.signAngle(this._dir) / Math.PI;
    this.node.angle = i;
    this.newAngSpeed = this.angleSpeed;
    this.state = 0;
    this.callAttack = n;
  };

  _ctor.prototype.setLeft = function (t, e, n) {
    this._dir = t ? cc.v2(-Math.cos(this.angle * Math.PI / 180), Math.sin(this.angle * Math.PI / 180)) : cc.v2(Math.cos(this.angle * Math.PI / 180), Math.sin(this.angle * Math.PI / 180));
    this.tagNode = e;
    this.tagNode.getPosition(this.tagPos);
    this.bullet.active = true;
    var i = 180 * cc.Vec2.RIGHT.signAngle(this._dir) / Math.PI;
    this.node.angle = i;
    this.newAngSpeed = this.angleSpeed;
    this.state = 0;
    this.callAttack = n;
  };

  _ctor.prototype.setSkin = function (t) {
    this.bullet.getComponent(sp.Skeleton).setSkin(t);
  };

  _ctor.prototype.freeNode = function () {
    this.state = 2;
    $z1KinghtFallUIGame["default"].instance.ctrGame.freeBullet(this);
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBulletBase["default"]);

exports["default"] = def_KinghtFallBulletPlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWxsZXRQbGF5LmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUtpbmdodEZhbGxVSUdhbWUiLCJyZXF1aXJlIiwiJHoxS2luZ2h0RmFsbEJ1bGxldEJhc2UiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbEJ1bGxldFBsYXkiLCJ0IiwiX2N0b3IiLCJhcHBseSIsImFyZ3VtZW50cyIsInByb3RvdHlwZSIsInNldFRhZyIsImUiLCJuIiwiX2RpciIsInYyIiwieCIsInkiLCJub3JtYWxpemVTZWxmIiwidGFnTm9kZSIsImdldFBvc2l0aW9uIiwidGFnUG9zIiwiYnVsbGV0IiwiYWN0aXZlIiwiVmVjMiIsIlJJR0hUIiwic2lnbkFuZ2xlIiwiTWF0aCIsIlBJIiwibm9kZSIsImFuZ2xlIiwibmV3QW5nU3BlZWQiLCJhbmdsZVNwZWVkIiwic3RhdGUiLCJjYWxsQXR0YWNrIiwic2V0TGVmdCIsImNvcyIsInNpbiIsInNldFNraW4iLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwiZnJlZU5vZGUiLCJpbnN0YW5jZSIsImN0ckdhbWUiLCJmcmVlQnVsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsbUJBQW1CLEdBQUdDLE9B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bEI7RUFDRCxDQVZEOztFQVdBTixLQUFLLENBQUNHLFNBQU4sQ0FBZ0I0QixPQUFoQixHQUEwQixVQUFVaEMsQ0FBVixFQUFhO0lBQ3JDLEtBQUtnQixNQUFMLENBQVlpQixZQUFaLENBQXlCQyxFQUFFLENBQUNDLFFBQTVCLEVBQXNDSCxPQUF0QyxDQUE4Q2hDLENBQTlDO0VBQ0QsQ0FGRDs7RUFHQUMsS0FBSyxDQUFDRyxTQUFOLENBQWdCZ0MsUUFBaEIsR0FBMkIsWUFBWTtJQUNyQyxLQUFLVCxLQUFMLEdBQWEsQ0FBYjtJQUNBckMsbUJBQW1CLFdBQW5CLENBQTRCK0MsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxVQUE3QyxDQUF3RCxJQUF4RDtFQUNELENBSEQ7O0VBSUEsT0FBT3ZELFlBQVksQ0FBQyxDQUFDWSxXQUFELENBQUQsRUFBZ0JLLEtBQWhCLENBQW5CO0FBQ0QsQ0FuQzhCLENBbUM3QlQsdUJBQXVCLFdBbkNNLENBQS9COztBQW9DQUosT0FBTyxXQUFQLEdBQWtCVyx3QkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUtpbmdodEZhbGxVSUdhbWUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFVJR2FtZVwiKTtcbnZhciAkejFLaW5naHRGYWxsQnVsbGV0QmFzZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQnVsbGV0QmFzZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbmNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxCdWxsZXRQbGF5ID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgcmV0dXJuIG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuc2V0VGFnID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICB0aGlzLl9kaXIgPSBjYy52MihlLnggLSB0LngsIGUueSAtIHQueSkubm9ybWFsaXplU2VsZigpO1xuICAgIHRoaXMudGFnTm9kZSA9IGU7XG4gICAgdGhpcy50YWdOb2RlLmdldFBvc2l0aW9uKHRoaXMudGFnUG9zKTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gMTgwICogY2MuVmVjMi5SSUdIVC5zaWduQW5nbGUodGhpcy5fZGlyKSAvIE1hdGguUEk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gaTtcbiAgICB0aGlzLm5ld0FuZ1NwZWVkID0gdGhpcy5hbmdsZVNwZWVkO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuY2FsbEF0dGFjayA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZWZ0ID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICB0aGlzLl9kaXIgPSB0ID8gY2MudjIoLU1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSwgTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKSA6IGNjLnYyKE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSwgTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICB0aGlzLnRhZ05vZGUgPSBlO1xuICAgIHRoaXMudGFnTm9kZS5nZXRQb3NpdGlvbih0aGlzLnRhZ1Bvcyk7XG4gICAgdGhpcy5idWxsZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgaSA9IDE4MCAqIGNjLlZlYzIuUklHSFQuc2lnbkFuZ2xlKHRoaXMuX2RpcikgLyBNYXRoLlBJO1xuICAgIHRoaXMubm9kZS5hbmdsZSA9IGk7XG4gICAgdGhpcy5uZXdBbmdTcGVlZCA9IHRoaXMuYW5nbGVTcGVlZDtcbiAgICB0aGlzLnN0YXRlID0gMDtcbiAgICB0aGlzLmNhbGxBdHRhY2sgPSBuO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0U2tpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5idWxsZXQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRTa2luKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZnJlZU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IDI7XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZnJlZUJ1bGxldCh0aGlzKTtcbiAgfTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KCR6MUtpbmdodEZhbGxCdWxsZXRCYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxCdWxsZXRQbGF5OyJdfQ==