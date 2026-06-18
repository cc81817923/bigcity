
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBuildObstacle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18fdaVPwQRBIrhl5kY8QMeg', 'KinghtFallBuildObstacle');
// _script/KinghtFallBuildObstacle.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallBuildObstacle = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndMove = [];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t;
    var e = this;
    null === (t = this.ndMove) || undefined === t || t.forEach(function (t, n) {
      t.active = false;
      t.name = e.node.name + "_" + n;
    });
  };

  _ctor.prototype.getWposPhyCol = function () {
    var t = [];
    var e = this.node.getComponents(cc.PhysicsPolygonCollider);

    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      var a = [];

      for (var o = 0; o < i.points.length; o++) {
        var r = i.points[o];
        a.push(this.node.convertToWorldSpaceAR(r));
      }

      t.push(a);
    }

    return t;
  };

  _ctor.prototype.getMoveToPos = function (t, e) {
    if (!this.ndMove || 0 == this.ndMove.length) {
      return null;
    }

    var n = -1;
    var i = null;
    var a = null;

    for (var o = 0; o < this.ndMove.length; o++) {
      var r = this.ndMove[o];

      if (r) {
        var s = false;

        for (var l = 0; l < e.length; l++) {
          if (e[l].uuid == r.uuid) {
            s = true;
            break;
          }
        }

        if (!s) {
          var c = this.node.convertToWorldSpaceAR(r.getPosition());
          var h = cc.Vec2.distance(t, c);

          if (-1 == n || h < n) {
            n = h;
            a = c;
            i = r;
          }
        }
      }
    }

    if (i) {
      return {
        node: i,
        pos: a
      };
    } else {
      return null;
    }
  };

  cc__decorate([ccp_property({
    type: [cc.Node],
    tooltip: "Hit-move pt"
  })], _ctor.prototype, "ndMove", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);

exports["default"] = def_KinghtFallBuildObstacle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWlsZE9ic3RhY2xlLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsQnVpbGRPYnN0YWNsZSIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm5kTW92ZSIsInByb3RvdHlwZSIsInN0YXJ0IiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsIm4iLCJhY3RpdmUiLCJuYW1lIiwibm9kZSIsImdldFdwb3NQaHlDb2wiLCJnZXRDb21wb25lbnRzIiwiUGh5c2ljc1BvbHlnb25Db2xsaWRlciIsImxlbmd0aCIsImEiLCJvIiwicG9pbnRzIiwiciIsInB1c2giLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJnZXRNb3ZlVG9Qb3MiLCJzIiwibCIsInV1aWQiLCJjIiwiZ2V0UG9zaXRpb24iLCJoIiwiVmVjMiIsImRpc3RhbmNlIiwicG9zIiwidHlwZSIsIk5vZGUiLCJ0b29sdGlwIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQSxJQUFJQyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ00sUUFBakM7O0FBQ0EsSUFBSUMsMkJBQTJCLEdBQUcsVUFBVUMsQ0FBVixFQUFhO0VBQzdDLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixJQUFJQyxDQUFDLEdBQUcsU0FBU0YsQ0FBVCxJQUFjQSxDQUFDLENBQUNHLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFsRDtJQUNBRixDQUFDLENBQUNHLE1BQUYsR0FBVyxFQUFYO0lBQ0EsT0FBT0gsQ0FBUDtFQUNEOztFQUNEbEIsV0FBVyxDQUFDaUIsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ0ssU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWTtJQUNsQyxJQUFJUCxDQUFKO0lBQ0EsSUFBSUUsQ0FBQyxHQUFHLElBQVI7SUFDQSxVQUFVRixDQUFDLEdBQUcsS0FBS0ssTUFBbkIsS0FBOEJHLFNBQVMsS0FBS1IsQ0FBNUMsSUFBaURBLENBQUMsQ0FBQ1MsT0FBRixDQUFVLFVBQVVULENBQVYsRUFBYVUsQ0FBYixFQUFnQjtNQUN6RVYsQ0FBQyxDQUFDVyxNQUFGLEdBQVcsS0FBWDtNQUNBWCxDQUFDLENBQUNZLElBQUYsR0FBU1YsQ0FBQyxDQUFDVyxJQUFGLENBQU9ELElBQVAsR0FBYyxHQUFkLEdBQW9CRixDQUE3QjtJQUNELENBSGdELENBQWpEO0VBSUQsQ0FQRDs7RUFRQVQsS0FBSyxDQUFDSyxTQUFOLENBQWdCUSxhQUFoQixHQUFnQyxZQUFZO0lBQzFDLElBQUlkLENBQUMsR0FBRyxFQUFSO0lBQ0EsSUFBSUUsQ0FBQyxHQUFHLEtBQUtXLElBQUwsQ0FBVUUsYUFBVixDQUF3QnRCLEVBQUUsQ0FBQ3VCLHNCQUEzQixDQUFSOztJQUNBLEtBQUssSUFBSU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsQ0FBQyxDQUFDZSxNQUF0QixFQUE4QlAsQ0FBQyxFQUEvQixFQUFtQztNQUNqQyxJQUFJM0IsQ0FBQyxHQUFHbUIsQ0FBQyxDQUFDUSxDQUFELENBQVQ7TUFDQSxJQUFJUSxDQUFDLEdBQUcsRUFBUjs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQyxDQUFDLENBQUNxQyxNQUFGLENBQVNILE1BQTdCLEVBQXFDRSxDQUFDLEVBQXRDLEVBQTBDO1FBQ3hDLElBQUlFLENBQUMsR0FBR3RDLENBQUMsQ0FBQ3FDLE1BQUYsQ0FBU0QsQ0FBVCxDQUFSO1FBQ0FELENBQUMsQ0FBQ0ksSUFBRixDQUFPLEtBQUtULElBQUwsQ0FBVVUscUJBQVYsQ0FBZ0NGLENBQWhDLENBQVA7TUFDRDs7TUFDRHJCLENBQUMsQ0FBQ3NCLElBQUYsQ0FBT0osQ0FBUDtJQUNEOztJQUNELE9BQU9sQixDQUFQO0VBQ0QsQ0FiRDs7RUFjQUMsS0FBSyxDQUFDSyxTQUFOLENBQWdCa0IsWUFBaEIsR0FBK0IsVUFBVXhCLENBQVYsRUFBYUUsQ0FBYixFQUFnQjtJQUM3QyxJQUFJLENBQUMsS0FBS0csTUFBTixJQUFnQixLQUFLLEtBQUtBLE1BQUwsQ0FBWVksTUFBckMsRUFBNkM7TUFDM0MsT0FBTyxJQUFQO0lBQ0Q7O0lBQ0QsSUFBSVAsQ0FBQyxHQUFHLENBQUMsQ0FBVDtJQUNBLElBQUkzQixDQUFDLEdBQUcsSUFBUjtJQUNBLElBQUltQyxDQUFDLEdBQUcsSUFBUjs7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2QsTUFBTCxDQUFZWSxNQUFoQyxFQUF3Q0UsQ0FBQyxFQUF6QyxFQUE2QztNQUMzQyxJQUFJRSxDQUFDLEdBQUcsS0FBS2hCLE1BQUwsQ0FBWWMsQ0FBWixDQUFSOztNQUNBLElBQUlFLENBQUosRUFBTztRQUNMLElBQUlJLENBQUMsR0FBRyxLQUFSOztRQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3hCLENBQUMsQ0FBQ2UsTUFBdEIsRUFBOEJTLENBQUMsRUFBL0IsRUFBbUM7VUFDakMsSUFBSXhCLENBQUMsQ0FBQ3dCLENBQUQsQ0FBRCxDQUFLQyxJQUFMLElBQWFOLENBQUMsQ0FBQ00sSUFBbkIsRUFBeUI7WUFDdkJGLENBQUMsR0FBRyxJQUFKO1lBQ0E7VUFDRDtRQUNGOztRQUNELElBQUksQ0FBQ0EsQ0FBTCxFQUFRO1VBQ04sSUFBSUcsQ0FBQyxHQUFHLEtBQUtmLElBQUwsQ0FBVVUscUJBQVYsQ0FBZ0NGLENBQUMsQ0FBQ1EsV0FBRixFQUFoQyxDQUFSO1VBQ0EsSUFBSUMsQ0FBQyxHQUFHckMsRUFBRSxDQUFDc0MsSUFBSCxDQUFRQyxRQUFSLENBQWlCaEMsQ0FBakIsRUFBb0I0QixDQUFwQixDQUFSOztVQUNBLElBQUksQ0FBQyxDQUFELElBQU1sQixDQUFOLElBQVdvQixDQUFDLEdBQUdwQixDQUFuQixFQUFzQjtZQUNwQkEsQ0FBQyxHQUFHb0IsQ0FBSjtZQUNBWixDQUFDLEdBQUdVLENBQUo7WUFDQTdDLENBQUMsR0FBR3NDLENBQUo7VUFDRDtRQUNGO01BQ0Y7SUFDRjs7SUFDRCxJQUFJdEMsQ0FBSixFQUFPO01BQ0wsT0FBTztRQUNMOEIsSUFBSSxFQUFFOUIsQ0FERDtRQUVMa0QsR0FBRyxFQUFFZjtNQUZBLENBQVA7SUFJRCxDQUxELE1BS087TUFDTCxPQUFPLElBQVA7SUFDRDtFQUNGLENBcENEOztFQXFDQWhDLFlBQVksQ0FBQyxDQUFDVyxZQUFZLENBQUM7SUFDekJxQyxJQUFJLEVBQUUsQ0FBQ3pDLEVBQUUsQ0FBQzBDLElBQUosQ0FEbUI7SUFFekJDLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQbkMsS0FBSyxDQUFDSyxTQUhDLEVBR1UsUUFIVixFQUdvQkUsU0FIcEIsQ0FBWjtFQUlBLE9BQU90QixZQUFZLENBQUMsQ0FBQ1MsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBdkVpQyxDQXVFaENSLEVBQUUsQ0FBQzRDLFNBdkU2QixDQUFsQzs7QUF3RUEvQyxPQUFPLFdBQVAsR0FBa0JTLDJCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbEJ1aWxkT2JzdGFjbGUgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5uZE1vdmUgPSBbXTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLm5kTW92ZSkgfHwgdW5kZWZpbmVkID09PSB0IHx8IHQuZm9yRWFjaChmdW5jdGlvbiAodCwgbikge1xuICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHQubmFtZSA9IGUubm9kZS5uYW1lICsgXCJfXCIgKyBuO1xuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0V3Bvc1BoeUNvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IFtdO1xuICAgIHZhciBlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IGVbbl07XG4gICAgICB2YXIgYSA9IFtdO1xuICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBpLnBvaW50cy5sZW5ndGg7IG8rKykge1xuICAgICAgICB2YXIgciA9IGkucG9pbnRzW29dO1xuICAgICAgICBhLnB1c2godGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihyKSk7XG4gICAgICB9XG4gICAgICB0LnB1c2goYSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0TW92ZVRvUG9zID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBpZiAoIXRoaXMubmRNb3ZlIHx8IDAgPT0gdGhpcy5uZE1vdmUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG4gPSAtMTtcbiAgICB2YXIgaSA9IG51bGw7XG4gICAgdmFyIGEgPSBudWxsO1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5uZE1vdmUubGVuZ3RoOyBvKyspIHtcbiAgICAgIHZhciByID0gdGhpcy5uZE1vdmVbb107XG4gICAgICBpZiAocikge1xuICAgICAgICB2YXIgcyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IGUubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICBpZiAoZVtsXS51dWlkID09IHIudXVpZCkge1xuICAgICAgICAgICAgcyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzKSB7XG4gICAgICAgICAgdmFyIGMgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgdmFyIGggPSBjYy5WZWMyLmRpc3RhbmNlKHQsIGMpO1xuICAgICAgICAgIGlmICgtMSA9PSBuIHx8IGggPCBuKSB7XG4gICAgICAgICAgICBuID0gaDtcbiAgICAgICAgICAgIGEgPSBjO1xuICAgICAgICAgICAgaSA9IHI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiBpLFxuICAgICAgICBwb3M6IGFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IFtjYy5Ob2RlXSxcbiAgICB0b29sdGlwOiBcIkhpdC1tb3ZlIHB0XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRNb3ZlXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxCdWlsZE9ic3RhY2xlOyJdfQ==