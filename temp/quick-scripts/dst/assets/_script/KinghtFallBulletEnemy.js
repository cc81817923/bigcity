
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBulletEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e42fcBF56FIQ7fX4nEHBNi9', 'KinghtFallBulletEnemy');
// _script/KinghtFallBulletEnemy.js

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

var def_KinghtFallBulletEnemy = function (t) {
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
    t && $z1KinghtFallUIGame["default"].instance.ctrGame.freeEnemyBullet(this);
    this.state = 2;
    this.ctrPar.freeBullet(this);
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBulletBase["default"]);

exports["default"] = def_KinghtFallBulletEnemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWxsZXRFbmVteS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFLaW5naHRGYWxsVUlHYW1lIiwicmVxdWlyZSIsIiR6MUtpbmdodEZhbGxCdWxsZXRCYXNlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxCdWxsZXRFbmVteSIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImN0clBhciIsInByb3RvdHlwZSIsInNldFBhcmVudCIsInNldFRhZyIsIm4iLCJfZGlyIiwidjIiLCJ4IiwieSIsIm5vcm1hbGl6ZVNlbGYiLCJ0YWdOb2RlIiwiZ2V0UG9zaXRpb24iLCJ0YWdQb3MiLCJidWxsZXQiLCJhY3RpdmUiLCJWZWMyIiwiUklHSFQiLCJzaWduQW5nbGUiLCJNYXRoIiwiUEkiLCJub2RlIiwiYW5nbGUiLCJuZXdBbmdTcGVlZCIsImFuZ2xlU3BlZWQiLCJzdGF0ZSIsImNhbGxBdHRhY2siLCJzZXRMZWZ0IiwiY29zIiwic2luIiwiZnJlZU5vZGUiLCJ1bmRlZmluZWQiLCJpbnN0YW5jZSIsImN0ckdhbWUiLCJmcmVlRW5lbXlCdWxsZXQiLCJmcmVlQnVsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsbUJB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LElBQXJCO0lBQ0EsSUFBSXRDLENBQUMsR0FBRyxNQUFNYSxFQUFFLENBQUMwQixJQUFILENBQVFDLEtBQVIsQ0FBY0MsU0FBZCxDQUF3QixLQUFLWixJQUE3QixDQUFOLEdBQTJDYSxJQUFJLENBQUNDLEVBQXhEO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCN0MsQ0FBbEI7SUFDQSxLQUFLOEMsV0FBTCxHQUFtQixLQUFLQyxVQUF4QjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQnJCLENBQWxCO0VBQ0QsQ0FkRDs7RUFlQVIsS0FBSyxDQUFDSyxTQUFOLENBQWdCNEIsUUFBaEIsR0FBMkIsVUFBVWxDLENBQVYsRUFBYTtJQUN0Q21DLFNBQVMsS0FBS25DLENBQWQsS0FBb0JBLENBQUMsR0FBRyxJQUF4QjtJQUNBQSxDQUFDLElBQUlWLG1CQUFtQixXQUFuQixDQUE0QjhDLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q0MsZUFBN0MsQ0FBNkQsSUFBN0QsQ0FBTDtJQUNBLEtBQUtULEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS3hCLE1BQUwsQ0FBWWtDLFVBQVosQ0FBdUIsSUFBdkI7RUFDRCxDQUxEOztFQU1BLE9BQU92RCxZQUFZLENBQUMsQ0FBQ1ksV0FBRCxDQUFELEVBQWdCSyxLQUFoQixDQUFuQjtBQUNELENBM0MrQixDQTJDOUJULHVCQUF1QixXQTNDTyxDQUFoQzs7QUE0Q0FKLE9BQU8sV0FBUCxHQUFrQlcseUJBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFLaW5naHRGYWxsVUlHYW1lID0gcmVxdWlyZShcIktpbmdodEZhbGxVSUdhbWVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEJ1bGxldEJhc2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEJ1bGxldEJhc2VcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG5jY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsQnVsbGV0RW5lbXkgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5jdHJQYXIgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5jdHJQYXIgPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0VGFnID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICB0aGlzLl9kaXIgPSBjYy52MihlLnggLSB0LngsIGUueSAtIHQueSkubm9ybWFsaXplU2VsZigpO1xuICAgIHRoaXMudGFnTm9kZSA9IGU7XG4gICAgdGhpcy50YWdOb2RlLmdldFBvc2l0aW9uKHRoaXMudGFnUG9zKTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gMTgwICogY2MuVmVjMi5SSUdIVC5zaWduQW5nbGUodGhpcy5fZGlyKSAvIE1hdGguUEk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gaTtcbiAgICB0aGlzLm5ld0FuZ1NwZWVkID0gdGhpcy5hbmdsZVNwZWVkO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuY2FsbEF0dGFjayA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZWZ0ID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICBpZiAodC54ID4gZS54KSB7XG4gICAgICB0aGlzLl9kaXIgPSBjYy52MigtTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApLCBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXIgPSBjYy52MihNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCksIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgfVxuICAgIHRoaXMudGFnTm9kZSA9IGU7XG4gICAgdGhpcy50YWdOb2RlLmdldFBvc2l0aW9uKHRoaXMudGFnUG9zKTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gMTgwICogY2MuVmVjMi5SSUdIVC5zaWduQW5nbGUodGhpcy5fZGlyKSAvIE1hdGguUEk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gaTtcbiAgICB0aGlzLm5ld0FuZ1NwZWVkID0gdGhpcy5hbmdsZVNwZWVkO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuY2FsbEF0dGFjayA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5mcmVlTm9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdW5kZWZpbmVkID09PSB0ICYmICh0ID0gdHJ1ZSk7XG4gICAgdCAmJiAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5mcmVlRW5lbXlCdWxsZXQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IDI7XG4gICAgdGhpcy5jdHJQYXIuZnJlZUJ1bGxldCh0aGlzKTtcbiAgfTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KCR6MUtpbmdodEZhbGxCdWxsZXRCYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxCdWxsZXRFbmVteTsiXX0=