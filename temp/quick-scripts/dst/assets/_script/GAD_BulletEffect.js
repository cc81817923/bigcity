
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_BulletEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7192744fWNEvKUOudo6hxGH', 'GAD_BulletEffect');
// _script/GAD_BulletEffect.js

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

var def_GAD_BulletEffect = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndBullet = null;
    e.ndMotionList = [null];
    e.ndParticleList = [null];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    this.ndBullet.active = true;
    this.ndMotionList.forEach(function (t) {
      t.node.active = true;
    });
    this.ndParticleList.forEach(function (t) {
      t.node.active = true;
      t.resetSystem();
    });
  };

  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Class Slug"
  })], _ctor.prototype, "ndBullet", undefined);
  cc__decorate([ccp_property({
    type: [cc.MotionStreak],
    tooltip: "coating smear"
  })], _ctor.prototype, "ndMotionList", undefined);
  cc__decorate([ccp_property({
    type: [cc.ParticleSystem],
    tooltip: "Particles"
  })], _ctor.prototype, "ndParticleList", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);

exports["default"] = def_GAD_BulletEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9CdWxsZXRFZmZlY3QuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0dBRF9CdWxsZXRFZmZlY3QiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZEJ1bGxldCIsIm5kTW90aW9uTGlzdCIsIm5kUGFydGljbGVMaXN0IiwicHJvdG90eXBlIiwic3RhcnQiLCJhY3RpdmUiLCJmb3JFYWNoIiwibm9kZSIsInJlc2V0U3lzdGVtIiwidHlwZSIsIk5vZGUiLCJ0b29sdGlwIiwidW5kZWZpbmVkIiwiTW90aW9uU3RyZWFrIiwiUGFydGljbGVTeXN0ZW0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBLElBQUlDLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcsR0FBR0gsYUFBYSxDQUFDSSxPQUFoQztBQUNBLElBQUlDLFlBQVksR0FBR0wsYUFBYSxDQUFDTSxRQUFqQzs7QUFDQSxJQUFJQyxvQkFBb0IsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDdEMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLElBQUlDLENBQUMsR0FBRyxTQUFTRixDQUFULElBQWNBLENBQUMsQ0FBQ0csS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFkLElBQTBDLElBQWxEO0lBQ0FGLENBQUMsQ0FBQ0csUUFBRixHQUFhLElBQWI7SUFDQUgsQ0FBQyxDQUFDSSxZQUFGLEdBQWlCLENBQUMsSUFBRCxDQUFqQjtJQUNBSixDQUFDLENBQUNLLGNBQUYsR0FBbUIsQ0FBQyxJQUFELENBQW5CO0lBQ0EsT0FBT0wsQ0FBUDtFQUNEOztFQUNEbEIsV0FBVyxDQUFDaUIsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWTtJQUNsQyxLQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUIsSUFBdkI7SUFDQSxLQUFLSixZQUFMLENBQWtCSyxPQUFsQixDQUEwQixVQUFVWCxDQUFWLEVBQWE7TUFDckNBLENBQUMsQ0FBQ1ksSUFBRixDQUFPRixNQUFQLEdBQWdCLElBQWhCO0lBQ0QsQ0FGRDtJQUdBLEtBQUtILGNBQUwsQ0FBb0JJLE9BQXBCLENBQTRCLFVBQVVYLENBQVYsRUFBYTtNQUN2Q0EsQ0FBQyxDQUFDWSxJQUFGLENBQU9GLE1BQVAsR0FBZ0IsSUFBaEI7TUFDQVYsQ0FBQyxDQUFDYSxXQUFGO0lBQ0QsQ0FIRDtFQUlELENBVEQ7O0VBVUEzQixZQUFZLENBQUMsQ0FBQ1csWUFBWSxDQUFDO0lBQ3pCaUIsSUFBSSxFQUFFckIsRUFBRSxDQUFDc0IsSUFEZ0I7SUFFekJDLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQZixLQUFLLENBQUNPLFNBSEMsRUFHVSxVQUhWLEVBR3NCUyxTQUh0QixDQUFaO0VBSUEvQixZQUFZLENBQUMsQ0FBQ1csWUFBWSxDQUFDO0lBQ3pCaUIsSUFBSSxFQUFFLENBQUNyQixFQUFFLENBQUN5QixZQUFKLENBRG1CO0lBRXpCRixPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUGYsS0FBSyxDQUFDTyxTQUhDLEVBR1UsY0FIVixFQUcwQlMsU0FIMUIsQ0FBWjtFQUlBL0IsWUFBWSxDQUFDLENBQUNXLFlBQVksQ0FBQztJQUN6QmlCLElBQUksRUFBRSxDQUFDckIsRUFBRSxDQUFDMEIsY0FBSixDQURtQjtJQUV6QkgsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1BmLEtBQUssQ0FBQ08sU0FIQyxFQUdVLGdCQUhWLEVBRzRCUyxTQUg1QixDQUFaO0VBSUEsT0FBTy9CLFlBQVksQ0FBQyxDQUFDUyxXQUFELENBQUQsRUFBZ0JNLEtBQWhCLENBQW5CO0FBQ0QsQ0FoQzBCLENBZ0N6QlIsRUFBRSxDQUFDMkIsU0FoQ3NCLENBQTNCOztBQWlDQTlCLE9BQU8sV0FBUCxHQUFrQlMsb0JBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9HQURfQnVsbGV0RWZmZWN0ID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUubmRCdWxsZXQgPSBudWxsO1xuICAgIGUubmRNb3Rpb25MaXN0ID0gW251bGxdO1xuICAgIGUubmRQYXJ0aWNsZUxpc3QgPSBbbnVsbF07XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5uZEJ1bGxldC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubmRNb3Rpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMubmRQYXJ0aWNsZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0LnJlc2V0U3lzdGVtKCk7XG4gICAgfSk7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiQ2xhc3MgU2x1Z1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kQnVsbGV0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBbY2MuTW90aW9uU3RyZWFrXSxcbiAgICB0b29sdGlwOiBcImNvYXRpbmcgc21lYXJcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZE1vdGlvbkxpc3RcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IFtjYy5QYXJ0aWNsZVN5c3RlbV0sXG4gICAgdG9vbHRpcDogXCJQYXJ0aWNsZXNcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZFBhcnRpY2xlTGlzdFwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9HQURfQnVsbGV0RWZmZWN0OyJdfQ==