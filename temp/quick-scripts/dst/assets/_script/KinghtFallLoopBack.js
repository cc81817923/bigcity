
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallLoopBack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37922MnoMhFCpzULmRdQNKi', 'KinghtFallLoopBack');
// _script/KinghtFallLoopBack.js

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

var def_KinghtFallLoopBack = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t = this.node.getComponent(cc.Sprite);
    t.type = cc.Sprite.Type.TILED;
    var e = t.spriteFrame;
    this.node.setContentSize(cc.winSize.width + e.getOriginalSize().width, cc.winSize.height + e.getOriginalSize().height);
    cc.tween(this.node).set({
      position: cc.v3(-e.getOriginalSize().width / 2, -e.getOriginalSize().height / 2, 0)
    }).to(20, {
      position: cc.v3(cc.winSize.width / 2, cc.winSize.height / 2, 0)
    }).union().repeatForever().start();
  };

  return cc__decorate([ccp_ccclass, ccp_requireComponent(cc.Sprite), ccp_menu("KinghtFall/LoopBack")], _ctor);
}(cc.Component);

exports["default"] = def_KinghtFallLoopBack;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxMb29wQmFjay5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX21lbnUiLCJtZW51IiwiY2NwX3JlcXVpcmVDb21wb25lbnQiLCJyZXF1aXJlQ29tcG9uZW50IiwiZGVmX0tpbmdodEZhbGxMb29wQmFjayIsInQiLCJfY3RvciIsImFwcGx5IiwiYXJndW1lbnRzIiwicHJvdG90eXBlIiwic3RhcnQiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwidHlwZSIsIlR5cGUiLCJUSUxFRCIsImUiLCJzcHJpdGVGcmFtZSIsInNldENvbnRlbnRTaXplIiwid2luU2l6ZSIsIndpZHRoIiwiZ2V0T3JpZ2luYWxTaXplIiwiaGVpZ2h0IiwidHdlZW4iLCJzZXQiLCJwb3NpdGlvbiIsInYzIiwidG8iLCJ1bmlvbiIsInJlcGVhdEZvcmV2ZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBLElBQUlDLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcsR0FBR0gsYUFBYSxDQUFDSSxPQUFoQztBQUNBLElBQUlDLFFBQVEsR0FBR0wsYUFBYSxDQUFDTSxJQUE3QjtBQUNBLElBQUlDLG9CQUFvQixHQUFHUCxhQUFhLENBQUNRLGdCQUF6Qzs7QUFDQSxJQUFJQyxzQkFBc0IsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDeEMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLE9BQU8sU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFqRDtFQUNEOztFQUNEckIsV0FBVyxDQUFDbUIsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWTtJQUNsQyxJQUFJTCxDQUFDLEdBQUcsS0FBS00sSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsRUFBRSxDQUFDaUIsTUFBMUIsQ0FBUjtJQUNBUixDQUFDLENBQUNTLElBQUYsR0FBU2xCLEVBQUUsQ0FBQ2lCLE1BQUgsQ0FBVUUsSUFBVixDQUFlQyxLQUF4QjtJQUNBLElBQUlDLENBQUMsR0FBR1osQ0FBQyxDQUFDYSxXQUFWO0lBQ0EsS0FBS1AsSUFBTCxDQUFVUSxjQUFWLENBQXlCdkIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXQyxLQUFYLEdBQW1CSixDQUFDLENBQUNLLGVBQUYsR0FBb0JELEtBQWhFLEVBQXVFekIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXRyxNQUFYLEdBQW9CTixDQUFDLENBQUNLLGVBQUYsR0FBb0JDLE1BQS9HO0lBQ0EzQixFQUFFLENBQUM0QixLQUFILENBQVMsS0FBS2IsSUFBZCxFQUFvQmMsR0FBcEIsQ0FBd0I7TUFDdEJDLFFBQVEsRUFBRTlCLEVBQUUsQ0FBQytCLEVBQUgsQ0FBTSxDQUFDVixDQUFDLENBQUNLLGVBQUYsR0FBb0JELEtBQXJCLEdBQTZCLENBQW5DLEVBQXNDLENBQUNKLENBQUMsQ0FBQ0ssZUFBRixHQUFvQkMsTUFBckIsR0FBOEIsQ0FBcEUsRUFBdUUsQ0FBdkU7SUFEWSxDQUF4QixFQUVHSyxFQUZILENBRU0sRUFGTixFQUVVO01BQ1JGLFFBQVEsRUFBRTlCLEVBQUUsQ0FBQytCLEVBQUgsQ0FBTS9CLEVBQUUsQ0FBQ3dCLE9BQUgsQ0FBV0MsS0FBWCxHQUFtQixDQUF6QixFQUE0QnpCLEVBQUUsQ0FBQ3dCLE9BQUgsQ0FBV0csTUFBWCxHQUFvQixDQUFoRCxFQUFtRCxDQUFuRDtJQURGLENBRlYsRUFJR00sS0FKSCxHQUlXQyxhQUpYLEdBSTJCcEIsS0FKM0I7RUFLRCxDQVZEOztFQVdBLE9BQU9yQixZQUFZLENBQUMsQ0FBQ1MsV0FBRCxFQUFjSSxvQkFBb0IsQ0FBQ04sRUFBRSxDQUFDaUIsTUFBSixDQUFsQyxFQUErQ2IsUUFBUSxDQUFDLHFCQUFELENBQXZELENBQUQsRUFBa0ZNLEtBQWxGLENBQW5CO0FBQ0QsQ0FqQjRCLENBaUIzQlYsRUFBRSxDQUFDbUMsU0FqQndCLENBQTdCOztBQWtCQXRDLE9BQU8sV0FBUCxHQUFrQlcsc0JBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfbWVudSA9IGNjX19kZWNvcmF0b3IubWVudTtcbnZhciBjY3BfcmVxdWlyZUNvbXBvbmVudCA9IGNjX19kZWNvcmF0b3IucmVxdWlyZUNvbXBvbmVudDtcbnZhciBkZWZfS2luZ2h0RmFsbExvb3BCYWNrID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgcmV0dXJuIG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgdC50eXBlID0gY2MuU3ByaXRlLlR5cGUuVElMRUQ7XG4gICAgdmFyIGUgPSB0LnNwcml0ZUZyYW1lO1xuICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoICsgZS5nZXRPcmlnaW5hbFNpemUoKS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQgKyBlLmdldE9yaWdpbmFsU2l6ZSgpLmhlaWdodCk7XG4gICAgY2MudHdlZW4odGhpcy5ub2RlKS5zZXQoe1xuICAgICAgcG9zaXRpb246IGNjLnYzKC1lLmdldE9yaWdpbmFsU2l6ZSgpLndpZHRoIC8gMiwgLWUuZ2V0T3JpZ2luYWxTaXplKCkuaGVpZ2h0IC8gMiwgMClcbiAgICB9KS50bygyMCwge1xuICAgICAgcG9zaXRpb246IGNjLnYzKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIsIDApXG4gICAgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgfTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3MsIGNjcF9yZXF1aXJlQ29tcG9uZW50KGNjLlNwcml0ZSksIGNjcF9tZW51KFwiS2luZ2h0RmFsbC9Mb29wQmFja1wiKV0sIF9jdG9yKTtcbn0oY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsTG9vcEJhY2s7Il19