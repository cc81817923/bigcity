
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallEnemyAuxiliary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd874dHl2ctAKJmG9IMLBvr3', 'KinghtFallEnemyAuxiliary');
// _script/KinghtFallEnemyAuxiliary.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;

var $z1KinghtFallEnemyBase = require("KinghtFallEnemyBase");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallEnemyAuxiliary = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onUpdate = function (t) {
    this.node.getPosition(this.vec2_1);
    this.node.zIndex = Math.floor(cc.winSize.height) - Math.floor(this.vec2_1.y);

    for (var e = 0; e < this.debuffInfo.length; e++) {
      var n = this.debuffInfo[e];

      if (-1 != n.time) {
        n.time += t;

        if (n.time >= n.timeMax) {
          this.delBuffIdx(e), e--;
        }
      }
    }

    -1 != this.time[r.Attack] && (this.time[r.Attack] += t * this.getAttSpeed());
    this.time[r.Attack] >= 1 && this.doAttackStart();

    switch (this.state) {
      case $z1KinghtFallEnemyBase.KinghtFallEnemyStatus.Idle:
      case $z1KinghtFallEnemyBase.KinghtFallEnemyStatus.Move:
        if (this.bornInfo.nodeIndex > this.bornInfo.pathList.length) {
          this.doWait();
        } else if (this.bornInfo.nodeIndex == this.bornInfo.pathList.length) {
          this.doWait();
          this.bornInfo.nodeIndex++;
        } else {
          this.bornInfo.pathList[this.bornInfo.nodeIndex].getPosition(this.vec2_2);
          cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
          this.setLeft(this.vec2_2.x < 0);
          this.vec2_2.len() <= 15 && this.bornInfo.nodeIndex++;
          cc.Vec2.normalize(this.vec2_2, this.vec2_2);
          cc.Vec2.scaleAndAdd(this.vec2_1, this.vec2_1, this.vec2_2, this.getSpeed() * t);
          this.node.setPosition(this.vec2_1);
        }

    }
  };

  _ctor.prototype.doAttackFinish = function () {
    this.doMove();
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallEnemyBase["default"]);

exports["default"] = def_KinghtFallEnemyAuxiliary;

(function (t) {
  t.Attack = "Attack";
})(r || (r = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxFbmVteUF1eGlsaWFyeS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyIiwiJHoxS2luZ2h0RmFsbEVuZW15QmFzZSIsInJlcXVpcmUiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbEVuZW15QXV4aWxpYXJ5IiwidCIsIl9jdG9yIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwcm90b3R5cGUiLCJvblVwZGF0ZSIsIm5vZGUiLCJnZXRQb3NpdGlvbiIsInZlYzJfMSIsInpJbmRleCIsIk1hdGgiLCJmbG9vciIsIndpblNpemUiLCJoZWlnaHQiLCJ5IiwiZSIsImRlYnVmZkluZm8iLCJsZW5ndGgiLCJuIiwidGltZSIsInRpbWVNYXgiLCJkZWxCdWZmSWR4IiwiQXR0YWNrIiwiZ2V0QXR0U3BlZWQiLCJkb0F0dGFja1N0YXJ0Iiwic3RhdGUiLCJLaW5naHRGYWxsRW5lbXlTdGF0dXMiLCJJZGxlIiwiTW92ZSIsImJvcm5JbmZvIiwibm9kZUluZGV4IiwicGF0aExpc3QiLCJkb1dhaXQiLCJ2ZWMyXzIiLCJWZWMyIiwic3VidHJhY3QiLCJzZXRMZWZ0IiwieCIsImxlbiIsIm5vcm1hbGl6ZSIsInNjYWxlQW5kQWRkIiwiZ2V0U3BlZWQiLCJzZXRQb3NpdGlvbiIsImRvQXR0YWNrRmluaXNoIiwiZG9Nb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRC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QixDQUE3QjtVQUNBLEtBQUtKLE1BQUwsQ0FBWUssR0FBWixNQUFxQixFQUFyQixJQUEyQixLQUFLVCxRQUFMLENBQWNDLFNBQWQsRUFBM0I7VUFDQXBDLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUUssU0FBUixDQUFrQixLQUFLTixNQUF2QixFQUErQixLQUFLQSxNQUFwQztVQUNBdkMsRUFBRSxDQUFDd0MsSUFBSCxDQUFRTSxXQUFSLENBQW9CLEtBQUtoQyxNQUF6QixFQUFpQyxLQUFLQSxNQUF0QyxFQUE4QyxLQUFLeUIsTUFBbkQsRUFBMkQsS0FBS1EsUUFBTCxLQUFrQnpDLENBQTdFO1VBQ0EsS0FBS00sSUFBTCxDQUFVb0MsV0FBVixDQUFzQixLQUFLbEMsTUFBM0I7UUFDRDs7SUFoQkw7RUFrQkQsQ0FoQ0Q7O0VBaUNBUCxLQUFLLENBQUNHLFNBQU4sQ0FBZ0J1QyxjQUFoQixHQUFpQyxZQUFZO0lBQzNDLEtBQUtDLE1BQUw7RUFDRCxDQUZEOztFQUdBLE9BQU81RCxZQUFZLENBQUMsQ0FBQ1ksV0FBRCxDQUFELEVBQWdCSyxLQUFoQixDQUFuQjtBQUNELENBMUNrQyxDQTBDakNWLHNCQUFzQixXQTFDVyxDQUFuQzs7QUEyQ0FILE9BQU8sV0FBUCxHQUFrQlcsNEJBQWxCOztBQUNBLENBQUMsVUFBVUMsQ0FBVixFQUFhO0VBQ1pBLENBQUMsQ0FBQ3NCLE1BQUYsR0FBVyxRQUFYO0FBQ0QsQ0FGRCxFQUVHaEMsQ0FBQyxLQUFLQSxDQUFDLEdBQUcsRUFBVCxDQUZKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciByO1xudmFyICR6MUtpbmdodEZhbGxFbmVteUJhc2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVuZW15QmFzZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbmNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxFbmVteUF1eGlsaWFyeSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHJldHVybiBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHRoaXMubm9kZS56SW5kZXggPSBNYXRoLmZsb29yKGNjLndpblNpemUuaGVpZ2h0KSAtIE1hdGguZmxvb3IodGhpcy52ZWMyXzEueSk7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmRlYnVmZkluZm8ubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciBuID0gdGhpcy5kZWJ1ZmZJbmZvW2VdO1xuICAgICAgaWYgKC0xICE9IG4udGltZSkge1xuICAgICAgICBuLnRpbWUgKz0gdDtcbiAgICAgICAgaWYgKG4udGltZSA+PSBuLnRpbWVNYXgpIHtcbiAgICAgICAgICB0aGlzLmRlbEJ1ZmZJZHgoZSksIGUtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAtMSAhPSB0aGlzLnRpbWVbci5BdHRhY2tdICYmICh0aGlzLnRpbWVbci5BdHRhY2tdICs9IHQgKiB0aGlzLmdldEF0dFNwZWVkKCkpO1xuICAgIHRoaXMudGltZVtyLkF0dGFja10gPj0gMSAmJiB0aGlzLmRvQXR0YWNrU3RhcnQoKTtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVuZW15QmFzZS5LaW5naHRGYWxsRW5lbXlTdGF0dXMuSWRsZTpcbiAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVuZW15QmFzZS5LaW5naHRGYWxsRW5lbXlTdGF0dXMuTW92ZTpcbiAgICAgICAgaWYgKHRoaXMuYm9ybkluZm8ubm9kZUluZGV4ID4gdGhpcy5ib3JuSW5mby5wYXRoTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmRvV2FpdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9ybkluZm8ubm9kZUluZGV4ID09IHRoaXMuYm9ybkluZm8ucGF0aExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5kb1dhaXQoKTtcbiAgICAgICAgICB0aGlzLmJvcm5JbmZvLm5vZGVJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYm9ybkluZm8ucGF0aExpc3RbdGhpcy5ib3JuSW5mby5ub2RlSW5kZXhdLmdldFBvc2l0aW9uKHRoaXMudmVjMl8yKTtcbiAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHRoaXMudmVjMl8yLCB0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzEpO1xuICAgICAgICAgIHRoaXMuc2V0TGVmdCh0aGlzLnZlYzJfMi54IDwgMCk7XG4gICAgICAgICAgdGhpcy52ZWMyXzIubGVuKCkgPD0gMTUgJiYgdGhpcy5ib3JuSW5mby5ub2RlSW5kZXgrKztcbiAgICAgICAgICBjYy5WZWMyLm5vcm1hbGl6ZSh0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzIpO1xuICAgICAgICAgIGNjLlZlYzIuc2NhbGVBbmRBZGQodGhpcy52ZWMyXzEsIHRoaXMudmVjMl8xLCB0aGlzLnZlYzJfMiwgdGhpcy5nZXRTcGVlZCgpICogdCk7XG4gICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvQXR0YWNrRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZG9Nb3ZlKCk7XG4gIH07XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFLaW5naHRGYWxsRW5lbXlCYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxFbmVteUF1eGlsaWFyeTtcbihmdW5jdGlvbiAodCkge1xuICB0LkF0dGFjayA9IFwiQXR0YWNrXCI7XG59KShyIHx8IChyID0ge30pKTsiXX0=