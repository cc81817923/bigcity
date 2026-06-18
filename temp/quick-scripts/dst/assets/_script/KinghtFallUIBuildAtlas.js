
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUIBuildAtlas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '075a3jYkbFMUK+clke6hvh3', 'KinghtFallUIBuildAtlas');
// _script/KinghtFallUIBuildAtlas.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUIBuildAtlas = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndItem = null;
    e.ndParent = null;
    e.btnClose = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t = this;
    this.ndItem.active = false;
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeUI();
    }, this);

    var e = function e(_e) {
      var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBuildCfgById(_e).levelList[0];
      var i = cc.instantiate(t.ndItem);
      i.parent = t.ndParent;
      i.active = true;
      i.x = 0;
      t.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconBuild, n.Icon, function (t) {
        var e = i.getChildByName("sprIcon");
        e.getComponent(cc.Sprite).spriteFrame = t;
        e.scale = n.Zoom;
        e.setPosition(n.Excursion ? cc.v2(n.Excursion[0] || 0, n.Excursion[1] || 0) : cc.v2(0, 0));
      });
      i.getChildByName("labName").getComponent(cc.Label).string = t.T(n.Name);
      i.getChildByName("labInfo").getComponent(cc.RichText).string = "<b><outline color=#000000 width=4>" + t.T(n.LevelUpDescribe) + "</outline></b>";
    };

    e($z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter);
    e($z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower);
    e($z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks);
    e($z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse);
    e($z1KinghtFallEnum.KinghtFallEnumBuildEnum.Mill);
    e($z1KinghtFallEnum.KinghtFallEnumBuildEnum.Wall);
  };

  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndItem", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndParent", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIBuildAtlas;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSUJ1aWxkQXRsYXMuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxQmFzZVVJIiwicmVxdWlyZSIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxEYXRhTWdyIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxVSUJ1aWxkQXRsYXMiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZEl0ZW0iLCJuZFBhcmVudCIsImJ0bkNsb3NlIiwicHJvdG90eXBlIiwic3RhcnQiLCJhY3RpdmUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJjbG9zZVVJIiwibiIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRCdWlsZENmZ0J5SWQiLCJsZXZlbExpc3QiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsIngiLCJsb2FkU3ByaXRlRnJhbWUiLCJLaW5naHRGYWxsQnVuZGVsTmFtZSIsIkljb25CdWlsZCIsIkljb24iLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwic2NhbGUiLCJab29tIiwic2V0UG9zaXRpb24iLCJFeGN1cnNpb24iLCJ2MiIsIkxhYmVsIiwic3RyaW5nIiwiVCIsIk5hbWUiLCJSaWNoVGV4dCIsIkxldmVsVXBEZXNjcmliZSIsIktpbmdodEZhbGxFbnVtQnVpbGRFbnVtIiwiQ2FzdGxlQ2VudGVyIiwiQXJyb3dUb3dlciIsIkJhcnJhY2tzIiwi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QWhDLEVBQTJDLFFBQTNDLEVBQXFEMEMsU0FBckQsQ0FBWjtFQUNBckUsWUFBWSxDQUFDLENBQUNnQixZQUFZLENBQUNKLEVBQUUsQ0FBQ21CLElBQUosQ0FBYixDQUFELEVBQTBCWCxLQUFLLENBQUNPLFNBQWhDLEVBQTJDLFVBQTNDLEVBQXVEMEMsU0FBdkQsQ0FBWjtFQUNBckUsWUFBWSxDQUFDLENBQUNnQixZQUFZLENBQUNKLEVBQUUsQ0FBQ21CLElBQUosQ0FBYixDQUFELEVBQTBCWCxLQUFLLENBQUNPLFNBQWhDLEVBQTJDLFVBQTNDLEVBQXVEMEMsU0FBdkQsQ0FBWjtFQUNBLE9BQU9yRSxZQUFZLENBQUMsQ0FBQ2MsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBekNnQyxDQXlDL0JkLFNBQVMsV0F6Q3NCLENBQWpDOztBQTBDQUYsT0FBTyxXQUFQLEdBQWtCYywwQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VVSSA9IHJlcXVpcmUoXCJCYXNlVUlcIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyICR6MUtpbmdodEZhbGxFbnVtID0gcmVxdWlyZShcIktpbmdodEZhbGxFbnVtXCIpO1xudmFyICR6MUtpbmdodEZhbGxEYXRhTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxEYXRhTWdyXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxVSUJ1aWxkQXRsYXMgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5uZEl0ZW0gPSBudWxsO1xuICAgIGUubmRQYXJlbnQgPSBudWxsO1xuICAgIGUuYnRuQ2xvc2UgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLm5kSXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bkNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5jbG9zZVVJKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgdmFyIGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG4gPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEJ1aWxkQ2ZnQnlJZChlKS5sZXZlbExpc3RbMF07XG4gICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKHQubmRJdGVtKTtcbiAgICAgIGkucGFyZW50ID0gdC5uZFBhcmVudDtcbiAgICAgIGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGkueCA9IDA7XG4gICAgICB0LmxvYWRTcHJpdGVGcmFtZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25CdWlsZCwgbi5JY29uLCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJJY29uXCIpO1xuICAgICAgICBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdDtcbiAgICAgICAgZS5zY2FsZSA9IG4uWm9vbTtcbiAgICAgICAgZS5zZXRQb3NpdGlvbihuLkV4Y3Vyc2lvbiA/IGNjLnYyKG4uRXhjdXJzaW9uWzBdIHx8IDAsIG4uRXhjdXJzaW9uWzFdIHx8IDApIDogY2MudjIoMCwgMCkpO1xuICAgICAgfSk7XG4gICAgICBpLmdldENoaWxkQnlOYW1lKFwibGFiTmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQuVChuLk5hbWUpO1xuICAgICAgaS5nZXRDaGlsZEJ5TmFtZShcImxhYkluZm9cIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBcIjxiPjxvdXRsaW5lIGNvbG9yPSMwMDAwMDAgd2lkdGg9ND5cIiArIHQuVChuLkxldmVsVXBEZXNjcmliZSkgKyBcIjwvb3V0bGluZT48L2I+XCI7XG4gICAgfTtcbiAgICBlKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkNhc3RsZUNlbnRlcik7XG4gICAgZSgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5BcnJvd1Rvd2VyKTtcbiAgICBlKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkJhcnJhY2tzKTtcbiAgICBlKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLlByaXZhdGVIb3VzZSk7XG4gICAgZSgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5NaWxsKTtcbiAgICBlKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLldhbGwpO1xuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEl0ZW1cIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRQYXJlbnRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuQ2xvc2VcIiwgdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KCR6MUJhc2VVSS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsVUlCdWlsZEF0bGFzOyJdfQ==