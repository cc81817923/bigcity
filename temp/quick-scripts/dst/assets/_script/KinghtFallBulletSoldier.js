
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBulletSoldier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0845fuE2XVOMJ2zXiptk0W0', 'KinghtFallBulletSoldier');
// _script/KinghtFallBulletSoldier.js

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

var def_KinghtFallBulletSoldier = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ctrPar = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.setParent = function (t) {
    this.ctrPar = t;
  };

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
    if (t.x > e.x) {
      this._dir = cc.v2(-Math.cos(this.angle * Math.PI / 180), Math.sin(this.angle * Math.PI / 180));
    } else {
      this._dir = cc.v2(Math.cos(this.angle * Math.PI / 180), Math.sin(this.angle * Math.PI / 180));
    }

    this.tagNode = e;
    this.tagNode.getPosition(this.tagPos);
    this.bullet.active = true;
    var i = 180 * cc.Vec2.RIGHT.signAngle(this._dir) / Math.PI;
    this.node.angle = i;
    this.newAngSpeed = this.angleSpeed;
    this.state = 0;
    this.callAttack = n;
  };

  _ctor.prototype.freeNode = function (t) {
    undefined === t && (t = true);
    t && $z1KinghtFallUIGame["default"].instance.ctrGame.freeSoldierBullet(this);
    this.state = 2;
    this.ctrPar.freeBullet(this);
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBulletBase["default"]);

exports["default"] = def_KinghtFallBulletSoldier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWxsZXRTb2xkaWVyLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUtpbmdodEZhbGxVSUdhbWUiLCJyZXF1aXJlIiwiJHoxS2luZ2h0RmFsbEJ1bGxldEJhc2UiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbEJ1bGxldFNvbGRpZXIiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjdHJQYXIiLCJwcm90b3R5cGUiLCJzZXRQYXJlbnQiLCJzZXRUYWciLCJuIiwiX2RpciIsInYyIiwieCIsInkiLCJub3JtYWxpemVTZWxmIiwidGFnTm9kZSIsImdldFBvc2l0aW9uIiwidGFnUG9zIiwiYnVsbGV0IiwiYWN0aXZlIiwiVmVjMiIsIlJJR0hUIiwic2lnbkFuZ2xlIiwiTWF0aCIsIlBJIiwibm9kZSIsImFuZ2xlIiwibmV3QW5nU3BlZWQiLCJhbmdsZVNwZWVkIiwic3RhdGUiLCJjYWxsQXR0YWNrIiwic2V0TGVmdCIsImNvcyIsInNpbiIsImZyZWVOb2RlIiwidW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJjdHJHYW1lIiwiZnJlZVNvbGRpZXJCdWxsZXQiLCJmcmVlQnVsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFB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LEdBQXFCLElBQXJCO0lBQ0EsSUFBSXRDLENBQUMsR0FBRyxNQUFNYSxFQUFFLENBQUMwQixJQUFILENBQVFDLEtBQVIsQ0FBY0MsU0FBZCxDQUF3QixLQUFLWixJQUE3QixDQUFOLEdBQTJDYSxJQUFJLENBQUNDLEVBQXhEO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCN0MsQ0FBbEI7SUFDQSxLQUFLOEMsV0FBTCxHQUFtQixLQUFLQyxVQUF4QjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQnJCLENBQWxCO0VBQ0QsQ0FkRDs7RUFlQVIsS0FBSyxDQUFDSyxTQUFOLENBQWdCNEIsUUFBaEIsR0FBMkIsVUFBVWxDLENBQVYsRUFBYTtJQUN0Q21DLFNBQVMsS0FBS25DLENBQWQsS0FBb0JBLENBQUMsR0FBRyxJQUF4QjtJQUNBQSxDQUFDLElBQUlWLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q0MsaUJBQTdDLENBQStELElBQS9ELENBQUw7SUFDQSxLQUFLVCxLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUt4QixNQUFMLENBQVlrQyxVQUFaLENBQXVCLElBQXZCO0VBQ0QsQ0FMRDs7RUFNQSxPQUFPdkQsWUFBWSxDQUFDLENBQUNZLFdBQUQsQ0FBRCxFQUFnQkssS0FBaEIsQ0FBbkI7QUFDRCxDQTNDaUMsQ0EyQ2hDVCx1QkFBdUIsV0EzQ1MsQ0FBbEM7O0FBNENBSixPQUFPLFdBQVAsR0FBa0JXLDJCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxS2luZ2h0RmFsbFVJR2FtZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsVUlHYW1lXCIpO1xudmFyICR6MUtpbmdodEZhbGxCdWxsZXRCYXNlID0gcmVxdWlyZShcIktpbmdodEZhbGxCdWxsZXRCYXNlXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xuY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbEJ1bGxldFNvbGRpZXIgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5jdHJQYXIgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5jdHJQYXIgPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0VGFnID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICB0aGlzLl9kaXIgPSBjYy52MihlLnggLSB0LngsIGUueSAtIHQueSkubm9ybWFsaXplU2VsZigpO1xuICAgIHRoaXMudGFnTm9kZSA9IGU7XG4gICAgdGhpcy50YWdOb2RlLmdldFBvc2l0aW9uKHRoaXMudGFnUG9zKTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gMTgwICogY2MuVmVjMi5SSUdIVC5zaWduQW5nbGUodGhpcy5fZGlyKSAvIE1hdGguUEk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gaTtcbiAgICB0aGlzLm5ld0FuZ1NwZWVkID0gdGhpcy5hbmdsZVNwZWVkO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuY2FsbEF0dGFjayA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZWZ0ID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICBpZiAodC54ID4gZS54KSB7XG4gICAgICB0aGlzLl9kaXIgPSBjYy52MigtTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApLCBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXIgPSBjYy52MihNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCksIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgfVxuICAgIHRoaXMudGFnTm9kZSA9IGU7XG4gICAgdGhpcy50YWdOb2RlLmdldFBvc2l0aW9uKHRoaXMudGFnUG9zKTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gMTgwICogY2MuVmVjMi5SSUdIVC5zaWduQW5nbGUodGhpcy5fZGlyKSAvIE1hdGguUEk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gaTtcbiAgICB0aGlzLm5ld0FuZ1NwZWVkID0gdGhpcy5hbmdsZVNwZWVkO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuY2FsbEF0dGFjayA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5mcmVlTm9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdW5kZWZpbmVkID09PSB0ICYmICh0ID0gdHJ1ZSk7XG4gICAgdCAmJiAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5mcmVlU29sZGllckJ1bGxldCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0gMjtcbiAgICB0aGlzLmN0clBhci5mcmVlQnVsbGV0KHRoaXMpO1xuICB9O1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxS2luZ2h0RmFsbEJ1bGxldEJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbEJ1bGxldFNvbGRpZXI7Il19