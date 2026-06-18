
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallEnemyItem06.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afbe35QwcNOZ6a+Md2gY5tB', 'KinghtFallEnemyItem06');
// _script/KinghtFallEnemyItem06.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var $z1KinghtFallEnemyAuxiliary = require("KinghtFallEnemyAuxiliary");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallEnemyItem06 = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.tagUse = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.initData = function (e, n) {
    t.prototype.initData.call(this, e, n);
    this.node.getComponent(cc.CircleCollider).radius = this.cfg.Data[2];
  };

  _ctor.prototype.doAttack = function () {
    this.time[r.Attack] = 0;
    var t = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getEnemyList();
    this.node.getPosition(this.vec2_1);
    var e = [];

    for (var n = 0; n < t.length; n++) {
      if ((i = t[n]).uuid != this.uuid) {
        i.node.getPosition(this.vec2_2);
        cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);
        this.vec2_2.mag() < this.cfg.Data[2] && e.push({
          len: this.vec2_2.mag(),
          enemy: i
        });
      }
    }

    e.sort(function (t, e) {
      return t.len - e.len;
    });

    for (n = 0; n < this.cfg.Data[3]; n++) {
      var i;

      if (!(i = e[n])) {
        break;
      }

      i.enemy.addBuff($z1KinghtFallInterface.KinghtFallEnemyBuffType.AttackSpeed, {
        addSpeed: this.cfg.Data[0],
        time: this.cfg.Data[1]
      });
    }

    this.tagUse = e.length > 0;
  };

  _ctor.prototype.doAttackFinish = function () {
    if (this.tagUse) {
      this.doWait();
    } else {
      this.doMove();
    }
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallEnemyAuxiliary["default"]);

exports["default"] = def_KinghtFallEnemyItem06;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxFbmVteUl0ZW0wNi5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyIiwiJHoxS2luZ2h0RmFsbFVJR2FtZSIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsSW50ZXJmYWNlIiwiJHoxS2luZ2h0RmFsbEVuZW15QXV4aWxpYXJ5IiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxFbmVteUl0ZW0wNiIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInRhZ1VzZSIsInByb3RvdHlwZSIsImluaXREYXRhIiwibiIsImNhbGwiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQ2lyY2xlQ29sbGlkZXIiLCJyYWRpdXMiLCJjZmciLCJEYXRhIiwiZG9BdHRhY2siLCJ0aW1lIiwiQXR0YWNrIiwiaW5zdGFuY2UiLCJjdHJHYW1lIiwiZ2FtZURhdGEiLCJnZXRFbmVteUxpc3QiLCJnZXRQb3NpdGlvbiIsInZlYzJfMSIsImxlbmd0aCIsInV1aWQiLCJ2ZWMyXzIiLCJWZWMyIiwic3VidHJhY3QiLCJtYWciLCJwdXNoIiwibGVuIiwiZW5lbXkiLCJzb3J0IiwiYWRkQnVmZiIsIktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlIiwiQXR0YWNrU3BlZWQiLCJhZGRTcGVlZCIsImRvQXR0YWNrRmluaXNoIiwiZG9XYWl0IiwiZG9Nb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAs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LENBQVNDLElBQVQsQ0FBYyxDQUFkLENBQWhCLEVBQWtDUCxDQUFDLEVBQW5DLEVBQXVDO01BQ3JDLElBQUk3QixDQUFKOztNQUNBLElBQUksRUFBRUEsQ0FBQyxHQUFHdUIsQ0FBQyxDQUFDTSxDQUFELENBQVAsQ0FBSixFQUFpQjtRQUNmO01BQ0Q7O01BQ0Q3QixDQUFDLENBQUNzRCxLQUFGLENBQVFFLE9BQVIsQ0FBZ0I1QyxzQkFBc0IsQ0FBQzZDLHVCQUF2QixDQUErQ0MsV0FBL0QsRUFBNEU7UUFDMUVDLFFBQVEsRUFBRSxLQUFLeEIsR0FBTCxDQUFTQyxJQUFULENBQWMsQ0FBZCxDQURnRTtRQUUxRUUsSUFBSSxFQUFFLEtBQUtILEdBQUwsQ0FBU0MsSUFBVCxDQUFjLENBQWQ7TUFGb0UsQ0FBNUU7SUFJRDs7SUFDRCxLQUFLVixNQUFMLEdBQWNILENBQUMsQ0FBQ3VCLE1BQUYsR0FBVyxDQUF6QjtFQUNELENBN0JEOztFQThCQXhCLEtBQUssQ0FBQ0ssU0FBTixDQUFnQmlDLGNBQWhCLEdBQWlDLFlBQVk7SUFDM0MsSUFBSSxLQUFLbEMsTUFBVCxFQUFpQjtNQUNmLEtBQUttQyxNQUFMO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsS0FBS0MsTUFBTDtJQUNEO0VBQ0YsQ0FORDs7RUFPQSxPQUFPM0QsWUFBWSxDQUFDLENBQUNjLFdBQUQsQ0FBRCxFQUFnQkssS0FBaEIsQ0FBbkI7QUFDRCxDQWpEK0IsQ0FpRDlCVCwyQkFBMkIsV0FqREcsQ0FBaEM7O0FBa0RBTixPQUFPLFdBQVAsR0FBa0JhLHlCQUFsQjs7QUFDQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtFQUNaQSxDQUFDLENBQUNrQixNQUFGLEdBQVcsUUFBWDtBQUNELENBRkQsRUFFRzlCLENBQUMsS0FBS0EsQ0FBQyxHQUFHLEVBQVQsQ0FGSiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcjtcbnZhciAkejFLaW5naHRGYWxsVUlHYW1lID0gcmVxdWlyZShcIktpbmdodEZhbGxVSUdhbWVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEludGVyZmFjZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsSW50ZXJmYWNlXCIpO1xudmFyICR6MUtpbmdodEZhbGxFbmVteUF1eGlsaWFyeSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRW5lbXlBdXhpbGlhcnlcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG5jY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsRW5lbXlJdGVtMDYgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS50YWdVc2UgPSBmYWxzZTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgdC5wcm90b3R5cGUuaW5pdERhdGEuY2FsbCh0aGlzLCBlLCBuKTtcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSB0aGlzLmNmZy5EYXRhWzJdO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50aW1lW3IuQXR0YWNrXSA9IDA7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRFbmVteUxpc3QoKTtcbiAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHZhciBlID0gW107XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICBpZiAoKGkgPSB0W25dKS51dWlkICE9IHRoaXMudXVpZCkge1xuICAgICAgICBpLm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzIpO1xuICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHRoaXMudmVjMl8yLCB0aGlzLnZlYzJfMiwgdGhpcy52ZWMyXzEpO1xuICAgICAgICB0aGlzLnZlYzJfMi5tYWcoKSA8IHRoaXMuY2ZnLkRhdGFbMl0gJiYgZS5wdXNoKHtcbiAgICAgICAgICBsZW46IHRoaXMudmVjMl8yLm1hZygpLFxuICAgICAgICAgIGVuZW15OiBpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIHJldHVybiB0LmxlbiAtIGUubGVuO1xuICAgIH0pO1xuICAgIGZvciAobiA9IDA7IG4gPCB0aGlzLmNmZy5EYXRhWzNdOyBuKyspIHtcbiAgICAgIHZhciBpO1xuICAgICAgaWYgKCEoaSA9IGVbbl0pKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaS5lbmVteS5hZGRCdWZmKCR6MUtpbmdodEZhbGxJbnRlcmZhY2UuS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUuQXR0YWNrU3BlZWQsIHtcbiAgICAgICAgYWRkU3BlZWQ6IHRoaXMuY2ZnLkRhdGFbMF0sXG4gICAgICAgIHRpbWU6IHRoaXMuY2ZnLkRhdGFbMV1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRhZ1VzZSA9IGUubGVuZ3RoID4gMDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRvQXR0YWNrRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnRhZ1VzZSkge1xuICAgICAgdGhpcy5kb1dhaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb01vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFLaW5naHRGYWxsRW5lbXlBdXhpbGlhcnkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbEVuZW15SXRlbTA2O1xuKGZ1bmN0aW9uICh0KSB7XG4gIHQuQXR0YWNrID0gXCJBdHRhY2tcIjtcbn0pKHIgfHwgKHIgPSB7fSkpOyJdfQ==