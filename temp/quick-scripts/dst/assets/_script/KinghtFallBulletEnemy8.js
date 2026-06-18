
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBulletEnemy8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fc0fuMxJBH7pAziTmOozrw', 'KinghtFallBulletEnemy8');
// _script/KinghtFallBulletEnemy8.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallBulletEnemy = require("KinghtFallBulletEnemy");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallBulletEnemy8 = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ctrPar = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.setParent = function (t) {
    this.ctrPar = t;
    this.spAni = this.node.getComponentInChildren(sp.Skeleton);
    this.spAni.setAnimation(0, "hit", true);
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

  _ctor.prototype.onUpdate = function () {
    switch (this.state) {
      case 0:
        this.tagNode && cc.isValid(this.tagNode) && this.tagNode.getPosition(this.tagPos);

        if (!this.node || !cc.isValid(this.node)) {
          $z1KinghtFallUIGame["default"].instance.ctrGame.freeEnemyBullet(this);
          return void this.destroy();
        }

        this.node.getPosition(this.vec2_1);
        cc.Vec2.subtract(this.vec2_2, this.tagPos, this.vec2_1);

        if (this.vec2_2.len() < 25) {
          return void this.onDie();
        }

        cc.Vec2.normalize(this._dir, this.vec2_2);
        var t = 180 * cc.Vec2.RIGHT.signAngle(this._dir) / Math.PI;
        this.node.angle = t;
        cc.Vec2.multiplyScalar(this.vec2_2, this._dir, .01 * this.speed);
        cc.Vec2.add(this.vec2_1, this.vec2_1, this.vec2_2);
        this.node.setPosition(this.vec2_1);
        break;

      case 1:
        this.time -= .01;
        this.time <= 0 && this.freeNode();
    }
  };

  _ctor.prototype.onDie = function () {
    this.state = 1;
    this.bullet.active = false;
    this.time = 2;
    this.callAttack && this.callAttack();
    this.spAni.setAnimation(0, "blast", false);
  };

  _ctor.prototype.freeNode = function (t) {
    undefined === t && (t = true);
    t && $z1KinghtFallUIGame["default"].instance.ctrGame.freeEnemyBullet(this);
    this.state = 2;
    this.ctrPar.freeBullet(this);
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBulletEnemy["default"]);

exports["default"] = def_KinghtFallBulletEnemy8;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWxsZXRFbmVteTguanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxS2luZ2h0RmFsbFVJR2FtZSIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsQnVsbGV0RW5lbXkiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbEJ1bGxldEVuZW15OCIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImN0clBhciIsInByb3RvdHlwZSIsInNldFBhcmVudCIsInNwQW5pIiwibm9kZSIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwic2V0VGFnIiwibiIsIl9kaXIiLCJ2MiIsIngiLCJ5Iiwibm9ybWFsaXplU2VsZiIsInRhZ05vZGUiLCJnZXRQb3NpdGlvbiIsInRhZ1BvcyIsImJ1bGxldCIsImFjdGl2ZSIsIlZlYzIiLCJSSUdIVCIsInNpZ25BbmdsZSIsIk1hdGgiLCJQSSIsImFuZ2xlIiwibmV3QW5nU3BlZWQiLCJhbmdsZVNwZWVkIiwic3RhdGUiLCJjYWxsQXR0YWNrIiwib25VcGRhdGUiLCJpc1ZhbGlkIiwiaW5zdGFuY2UiLCJjdHJHYW1lIiwiZnJlZUVuZW15QnVsbGV0IiwiZGVzdHJveSIsInZlYzJfMSIsInN1YnRyYWN0IiwidmVjMl8yIiwibGVuIiwib25EaWUiLCJub3JtYWxpemUiLCJtdWx0aXBseVNjYWxhciIsInNwZWVkIiwiYWRkIiwic2V0UG9zaXRpb24iLCJ0aW1lIiwiZnJlZU5vZGUiLCJ1bmRlZmluZWQiLCJmcmVlQnVsbGV0Il0sIm1hcHBpbmdzIjoiOzs7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LFlBQVk7SUFDbEMsS0FBS1osS0FBTCxHQUFhLENBQWI7SUFDQSxLQUFLVixNQUFMLENBQVlDLE1BQVosR0FBcUIsS0FBckI7SUFDQSxLQUFLMkIsSUFBTCxHQUFZLENBQVo7SUFDQSxLQUFLakIsVUFBTCxJQUFtQixLQUFLQSxVQUFMLEVBQW5CO0lBQ0EsS0FBSzNCLEtBQUwsQ0FBV0ssWUFBWCxDQUF3QixDQUF4QixFQUEyQixPQUEzQixFQUFvQyxLQUFwQztFQUNELENBTkQ7O0VBT0FaLEtBQUssQ0FBQ0ssU0FBTixDQUFnQitDLFFBQWhCLEdBQTJCLFVBQVVyRCxDQUFWLEVBQWE7SUFDdENzRCxTQUFTLEtBQUt0RCxDQUFkLEtBQW9CQSxDQUFDLEdBQUcsSUFBeEI7SUFDQUEsQ0FBQyxJQUFJVixtQkFBbUIsV0FBbkIsQ0FBNEJnRCxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNDLGVBQTdDLENBQTZELElBQTdELENBQUw7SUFDQSxLQUFLTixLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUs3QixNQUFMLENBQVlrRCxVQUFaLENBQXVCLElBQXZCO0VBQ0QsQ0FMRDs7RUFNQSxPQUFPdkUsWUFBWSxDQUFDLENBQUNZLFdBQUQsQ0FBRCxFQUFnQkssS0FBaEIsQ0FBbkI7QUFDRCxDQTlEZ0MsQ0E4RC9CVCx3QkFBd0IsV0E5RE8sQ0FBakM7O0FBK0RBSixPQUFPLFdBQVAsR0FBa0JXLDBCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxS2luZ2h0RmFsbFVJR2FtZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsVUlHYW1lXCIpO1xudmFyICR6MUtpbmdodEZhbGxCdWxsZXRFbmVteSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQnVsbGV0RW5lbXlcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG5jY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsQnVsbGV0RW5lbXk4ID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuY3RyUGFyID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuY3RyUGFyID0gdDtcbiAgICB0aGlzLnNwQW5pID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwiaGl0XCIsIHRydWUpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0VGFnID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICB0aGlzLl9kaXIgPSBjYy52MihlLnggLSB0LngsIGUueSAtIHQueSkubm9ybWFsaXplU2VsZigpO1xuICAgIHRoaXMudGFnTm9kZSA9IGU7XG4gICAgdGhpcy50YWdOb2RlLmdldFBvc2l0aW9uKHRoaXMudGFnUG9zKTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gMTgwICogY2MuVmVjMi5SSUdIVC5zaWduQW5nbGUodGhpcy5fZGlyKSAvIE1hdGguUEk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlID0gaTtcbiAgICB0aGlzLm5ld0FuZ1NwZWVkID0gdGhpcy5hbmdsZVNwZWVkO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuY2FsbEF0dGFjayA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy50YWdOb2RlICYmIGNjLmlzVmFsaWQodGhpcy50YWdOb2RlKSAmJiB0aGlzLnRhZ05vZGUuZ2V0UG9zaXRpb24odGhpcy50YWdQb3MpO1xuICAgICAgICBpZiAoIXRoaXMubm9kZSB8fCAhY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZnJlZUVuZW15QnVsbGV0KHRoaXMpO1xuICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgICAgIGNjLlZlYzIuc3VidHJhY3QodGhpcy52ZWMyXzIsIHRoaXMudGFnUG9zLCB0aGlzLnZlYzJfMSk7XG4gICAgICAgIGlmICh0aGlzLnZlYzJfMi5sZW4oKSA8IDI1KSB7XG4gICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5vbkRpZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLlZlYzIubm9ybWFsaXplKHRoaXMuX2RpciwgdGhpcy52ZWMyXzIpO1xuICAgICAgICB2YXIgdCA9IDE4MCAqIGNjLlZlYzIuUklHSFQuc2lnbkFuZ2xlKHRoaXMuX2RpcikgLyBNYXRoLlBJO1xuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSB0O1xuICAgICAgICBjYy5WZWMyLm11bHRpcGx5U2NhbGFyKHRoaXMudmVjMl8yLCB0aGlzLl9kaXIsIC4wMSAqIHRoaXMuc3BlZWQpO1xuICAgICAgICBjYy5WZWMyLmFkZCh0aGlzLnZlYzJfMSwgdGhpcy52ZWMyXzEsIHRoaXMudmVjMl8yKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMudGltZSAtPSAuMDE7XG4gICAgICAgIHRoaXMudGltZSA8PSAwICYmIHRoaXMuZnJlZU5vZGUoKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0YXRlID0gMTtcbiAgICB0aGlzLmJ1bGxldC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWUgPSAyO1xuICAgIHRoaXMuY2FsbEF0dGFjayAmJiB0aGlzLmNhbGxBdHRhY2soKTtcbiAgICB0aGlzLnNwQW5pLnNldEFuaW1hdGlvbigwLCBcImJsYXN0XCIsIGZhbHNlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmZyZWVOb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB1bmRlZmluZWQgPT09IHQgJiYgKHQgPSB0cnVlKTtcbiAgICB0ICYmICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmZyZWVFbmVteUJ1bGxldCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0gMjtcbiAgICB0aGlzLmN0clBhci5mcmVlQnVsbGV0KHRoaXMpO1xuICB9O1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxS2luZ2h0RmFsbEJ1bGxldEVuZW15LmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxCdWxsZXRFbmVteTg7Il19