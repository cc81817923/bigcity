
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUINewGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '503c91+B3JORYC800b1JmTJ', 'KinghtFallUINewGame');
// _script/KinghtFallUINewGame.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUINewGame = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnBreak = null;
    e.btnContinue = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this.call = t;
  };

  _ctor.prototype.start = function () {
    var t = this;
    this.btnBreak.on(cc.Node.EventType.TOUCH_END, function () {
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setNewGame();
      t.call();
      t.closeUI();
    }, this);
    this.btnContinue.on(cc.Node.EventType.TOUCH_END, function () {
      t.call();
      t.closeUI();
    }, this);
  };

  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnBreak", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnContinue", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUINewGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSU5ld0dhbWUuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxQmFzZVVJIiwicmVxdWlyZSIsIiR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbFVJTmV3R2FtZSIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ0bkJyZWFrIiwiYnRuQ29udGludWUiLCJwcm90b3R5cGUiLCJpbml0IiwiY2FsbCIsInN0YXJ0Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiS2luZ2h0RmFsbFBsYXllck1nciIsImdldEluc3RhbmNlIiwiZ2V0R2FtZURhdGEiLCJzZXROZXdHYW1lIiwiY2xvc2VVSSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUdELE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJRSxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ00sUUFBakM7O0FBQ0EsSUFBSUMsdUJBQXVCLEdBQUcsVUFBVUMsQ0FBVixFQUFhO0VBQ3pDLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixJQUFJQyxDQUFDLEdBQUcsU0FBU0YsQ0FBVCxJQUFjQSxDQUFDLENBQUNHLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFsRDtJQUNBRixDQUFDLENBQUNHLFFBQUYsR0FBYSxJQUFiO0lBQ0FILENBQUMsQ0FBQ0ksV0FBRixHQUFnQixJQUFoQjtJQUNBLE9BQU9KLENBQVA7RUFDRDs7RUFDRHJCLFdBQVcsQ0FBQ29CLEtBQUQsRUFBUUQsQ0FBUixDQUFYOztFQUNBQyxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JDLElBQWhCLEdBQXVCLFVBQVVSLENBQVYsRUFBYTtJQUNsQyxLQUFLUyxJQUFMLEdBQVlULENBQVo7RUFDRCxDQUZEOztFQUdBQyxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JHLEtBQWhCLEdBQXdCLFlBQVk7SUFDbEMsSUFBSVYsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLSyxRQUFMLENBQWNNLEVBQWQsQ0FBaUJsQixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQW5DLEVBQThDLFlBQVk7TUFDeER2QixzQkFBc0IsQ0FBQ3dCLG1CQUF2QixDQUEyQ0MsV0FBM0MsR0FBeURDLFdBQXpELEdBQXVFQyxVQUF2RTtNQUNBbEIsQ0FBQyxDQUFDUyxJQUFGO01BQ0FULENBQUMsQ0FBQ21CLE9BQUY7SUFDRCxDQUpELEVBSUcsSUFKSDtJQUtBLEtBQUtiLFdBQUwsQ0FBaUJLLEVBQWpCLENBQW9CbEIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUF0QyxFQUFpRCxZQUFZO01BQzNEZCxDQUFDLENBQUNTLElBQUY7TUFDQVQsQ0FBQyxDQUFDbUIsT0FBRjtJQUNELENBSEQsRUFHRyxJQUhIO0VBSUQsQ0FYRDs7RUFZQXBDLFlBQVksQ0FBQyxDQUFDYyxZQUFZLENBQUNKLEVBQUUsQ0FBQ21CLElBQUosQ0FBYixDQUFELEVBQTBCWCxLQUFLLENBQUNNLFNBQWhDLEVBQTJDLFVBQTNDLEVBQXVEYSxTQUF2RCxDQUFaO0VBQ0FyQyxZQUFZLENBQUMsQ0FBQ2MsWUFBWSxDQUFDSixFQUFFLENBQUNtQixJQUFKLENBQWIsQ0FBRCxFQUEwQlgsS0FBSyxDQUFDTSxTQUFoQyxFQUEyQyxhQUEzQyxFQUEwRGEsU0FBMUQsQ0FBWjtFQUNBLE9BQU9yQyxZQUFZLENBQUMsQ0FBQ1ksV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBMUI2QixDQTBCNUJaLFNBQVMsV0ExQm1CLENBQTlCOztBQTJCQUYsT0FBTyxXQUFQLEdBQWtCWSx1QkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VVSSA9IHJlcXVpcmUoXCJCYXNlVUlcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxVSU5ld0dhbWUgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5idG5CcmVhayA9IG51bGw7XG4gICAgZS5idG5Db250aW51ZSA9IG51bGw7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5jYWxsID0gdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmJ0bkJyZWFrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGEoKS5zZXROZXdHYW1lKCk7XG4gICAgICB0LmNhbGwoKTtcbiAgICAgIHQuY2xvc2VVSSgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuYnRuQ29udGludWUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LmNhbGwoKTtcbiAgICAgIHQuY2xvc2VVSSgpO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5CcmVha1wiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5Db250aW51ZVwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxVSU5ld0dhbWU7Il19