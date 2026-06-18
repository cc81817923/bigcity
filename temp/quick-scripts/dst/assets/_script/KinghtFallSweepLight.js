
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallSweepLight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f1b52t+kdJUaTYo6ZK4C0q', 'KinghtFallSweepLight');
// _script/KinghtFallSweepLight.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_menu = cc__decorator.menu;
var ccp_requireComponent = cc__decorator.requireComponent;

var def_KinghtFallSweepLight = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t = this.node.getComponent(cc.Sprite).spriteFrame;
    cc.tween(this.node).set({
      position: cc.v3(-(t.getOriginalSize().width + cc.winSize.width) / 2)
    }).to(5, {
      position: cc.v3((t.getOriginalSize().width + cc.winSize.width) / 2)
    }).start();
  };

  return cc__decorate([ccp_ccclass, ccp_requireComponent(cc.Sprite), ccp_menu("KinghtFall/SweepLight")], _ctor);
}(cc.Component);

exports["default"] = def_KinghtFallSweepLight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxTd2VlcExpZ2h0LmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfbWVudSIsIm1lbnUiLCJjY3BfcmVxdWlyZUNvbXBvbmVudCIsInJlcXVpcmVDb21wb25lbnQiLCJkZWZfS2luZ2h0RmFsbFN3ZWVwTGlnaHQiLCJ0IiwiX2N0b3IiLCJhcHBseSIsImFyZ3VtZW50cyIsInByb3RvdHlwZSIsInN0YXJ0Iiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwidHdlZW4iLCJzZXQiLCJwb3NpdGlvbiIsInYzIiwiZ2V0T3JpZ2luYWxTaXplIiwid2lkdGgiLCJ3aW5TaXplIiwidG8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBLElBQUlDLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcsR0FBR0gsYUFBYSxDQUFDSSxPQUFoQztBQUNBLElBQUlDLFFBQVEsR0FBR0wsYUFBYSxDQUFDTSxJQUE3QjtBQUNBLElBQUlDLG9CQUFvQixHQUFHUCxhQUFhLENBQUNRLGdCQUF6Qzs7QUFDQSxJQUFJQyx3QkFBd0IsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDMUMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLE9BQU8sU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFqRDtFQUNEOztFQUNEckIsV0FBVyxDQUFDbUIsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWTtJQUNsQyxJQUFJTCxDQUFDLEdBQUcsS0FBS00sSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsRUFBRSxDQUFDaUIsTUFBMUIsRUFBa0NDLFdBQTFDO0lBQ0FsQixFQUFFLENBQUNtQixLQUFILENBQVMsS0FBS0osSUFBZCxFQUFvQkssR0FBcEIsQ0FBd0I7TUFDdEJDLFFBQVEsRUFBRXJCLEVBQUUsQ0FBQ3NCLEVBQUgsQ0FBTSxFQUFFYixDQUFDLENBQUNjLGVBQUYsR0FBb0JDLEtBQXBCLEdBQTRCeEIsRUFBRSxDQUFDeUIsT0FBSCxDQUFXRCxLQUF6QyxJQUFrRCxDQUF4RDtJQURZLENBQXhCLEVBRUdFLEVBRkgsQ0FFTSxDQUZOLEVBRVM7TUFDUEwsUUFBUSxFQUFFckIsRUFBRSxDQUFDc0IsRUFBSCxDQUFNLENBQUNiLENBQUMsQ0FBQ2MsZUFBRixHQUFvQkMsS0FBcEIsR0FBNEJ4QixFQUFFLENBQUN5QixPQUFILENBQVdELEtBQXhDLElBQWlELENBQXZEO0lBREgsQ0FGVCxFQUlHVixLQUpIO0VBS0QsQ0FQRDs7RUFRQSxPQUFPckIsWUFBWSxDQUFDLENBQUNTLFdBQUQsRUFBY0ksb0JBQW9CLENBQUNOLEVBQUUsQ0FBQ2lCLE1BQUosQ0FBbEMsRUFBK0NiLFFBQVEsQ0FBQyx1QkFBRCxDQUF2RCxDQUFELEVBQW9GTSxLQUFwRixDQUFuQjtBQUNELENBZDhCLENBYzdCVixFQUFFLENBQUMyQixTQWQwQixDQUEvQjs7QUFlQTlCLE9BQU8sV0FBUCxHQUFrQlcsd0JBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfbWVudSA9IGNjX19kZWNvcmF0b3IubWVudTtcbnZhciBjY3BfcmVxdWlyZUNvbXBvbmVudCA9IGNjX19kZWNvcmF0b3IucmVxdWlyZUNvbXBvbmVudDtcbnZhciBkZWZfS2luZ2h0RmFsbFN3ZWVwTGlnaHQgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICByZXR1cm4gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnNldCh7XG4gICAgICBwb3NpdGlvbjogY2MudjMoLSh0LmdldE9yaWdpbmFsU2l6ZSgpLndpZHRoICsgY2Mud2luU2l6ZS53aWR0aCkgLyAyKVxuICAgIH0pLnRvKDUsIHtcbiAgICAgIHBvc2l0aW9uOiBjYy52MygodC5nZXRPcmlnaW5hbFNpemUoKS53aWR0aCArIGNjLndpblNpemUud2lkdGgpIC8gMilcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzcywgY2NwX3JlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKSwgY2NwX21lbnUoXCJLaW5naHRGYWxsL1N3ZWVwTGlnaHRcIildLCBfY3Rvcik7XG59KGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbFN3ZWVwTGlnaHQ7Il19