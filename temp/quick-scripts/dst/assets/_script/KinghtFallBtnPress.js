
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBtnPress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '043f6FxcAVHqoZnos1BXyqC', 'KinghtFallBtnPress');
// _script/KinghtFallBtnPress.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;

var $z1AudioMgr = require("AudioMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;
var ccp_requireComponent = cc__decorator.requireComponent;

var def_KinghtFallBtnPress = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.sprNormal = null;
    e.sprPressed = null;
    e.numDev = 0;
    e.callBack = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t = this;
    this.node.children.forEach(function (t) {
      var e;
      t.attr(((e = {})[r.ChilidPos] = t.getPosition().clone(), e));
    });
    this.node.on(cc.Node.EventType.TOUCH_START, function () {
      $z1AudioMgr.AudioMgr.getInstance().playAudioButtonClicked();
      t.node.getComponent(cc.Sprite).spriteFrame = t.sprPressed;
      t.node.children.forEach(function (e) {
        var n = e[r.ChilidPos];
        e.setPosition(n.x, n.y + t.numDev);
      });
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
      t.node.getComponent(cc.Sprite).spriteFrame = t.sprNormal;
      t.node.children.forEach(function (t) {
        var e = t[r.ChilidPos];
        t.setPosition(e);
      });
      t.callBack && t.callBack(false);
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      t.node.getComponent(cc.Sprite).spriteFrame = t.sprNormal;
      t.node.children.forEach(function (t) {
        var e = t[r.ChilidPos];
        t.setPosition(e);
      });
      t.callBack && t.callBack(true);
    }, this);
  };

  _ctor.prototype.init = function (t) {
    this.callBack = t;
  };

  cc__decorate([ccp_property(cc.SpriteFrame)], _ctor.prototype, "sprNormal", undefined);
  cc__decorate([ccp_property(cc.SpriteFrame)], _ctor.prototype, "sprPressed", undefined);
  cc__decorate([ccp_property(Number)], _ctor.prototype, "numDev", undefined);
  return cc__decorate([ccp_ccclass, ccp_requireComponent(cc.Sprite)], _ctor);
}(cc.Component);

exports["default"] = def_KinghtFallBtnPress;

(function (t) {
  t.ChilidPos = "ChilidPos";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdG5QcmVzcy5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyIiwiJHoxQXVkaW9NZ3IiLCJyZXF1aXJlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiY2NwX3JlcXVpcmVDb21wb25lbnQiLCJyZXF1aXJlQ29tcG9uZW50IiwiZGVmX0tpbmdodEZhbGxCdG5QcmVzcyIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNwck5vcm1hbCIsInNwclByZXNzZWQiLCJudW1EZXYiLCJjYWxsQmFjayIsInByb3RvdHlwZSIsInN0YXJ0Iiwibm9kZSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImF0dHIiLCJDaGlsaWRQb3MiLCJnZXRQb3NpdGlvbiIsImNsb25lIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJBdWRpb01nciIsImdldEluc3RhbmNlIiwicGxheUF1ZGlvQnV0dG9uQ2xpY2tlZCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwibiIsInNldFBvc2l0aW9uIiwieCIsInkiLCJUT1VDSF9DQU5DRUwiLCJUT1VDSF9FTkQiLCJpbml0IiwiU3ByaXRlRnJhbWUiLCJ1bmRlZmluZWQiLCJOdW1iZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0Is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RUFDQSxPQUFPdkQsWUFBWSxDQUFDLENBQUNZLFdBQUQsRUFBY0ksb0JBQW9CLENBQUNOLEVBQUUsQ0FBQ21DLE1BQUosQ0FBbEMsQ0FBRCxFQUFpRHpCLEtBQWpELENBQW5CO0FBQ0QsQ0FoRDRCLENBZ0QzQlYsRUFBRSxDQUFDK0MsU0FoRHdCLENBQTdCOztBQWlEQXJELE9BQU8sV0FBUCxHQUFrQmMsc0JBQWxCOztBQUNBLENBQUMsVUFBVUMsQ0FBVixFQUFhO0VBQ1pBLENBQUMsQ0FBQ2UsU0FBRixHQUFjLFdBQWQ7QUFDRCxDQUZELEVBRUc1QixDQUFDLEtBQUtBLENBQUMsR0FBRyxFQUFULENBRkoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHI7XG52YXIgJHoxQXVkaW9NZ3IgPSByZXF1aXJlKFwiQXVkaW9NZ3JcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBjY3BfcmVxdWlyZUNvbXBvbmVudCA9IGNjX19kZWNvcmF0b3IucmVxdWlyZUNvbXBvbmVudDtcbnZhciBkZWZfS2luZ2h0RmFsbEJ0blByZXNzID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuc3ByTm9ybWFsID0gbnVsbDtcbiAgICBlLnNwclByZXNzZWQgPSBudWxsO1xuICAgIGUubnVtRGV2ID0gMDtcbiAgICBlLmNhbGxCYWNrID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBlO1xuICAgICAgdC5hdHRyKCgoZSA9IHt9KVtyLkNoaWxpZFBvc10gPSB0LmdldFBvc2l0aW9uKCkuY2xvbmUoKSwgZSkpO1xuICAgIH0pO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKCkge1xuICAgICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5QXVkaW9CdXR0b25DbGlja2VkKCk7XG4gICAgICB0Lm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0LnNwclByZXNzZWQ7XG4gICAgICB0Lm5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbiA9IGVbci5DaGlsaWRQb3NdO1xuICAgICAgICBlLnNldFBvc2l0aW9uKG4ueCwgbi55ICsgdC5udW1EZXYpO1xuICAgICAgfSk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdC5zcHJOb3JtYWw7XG4gICAgICB0Lm5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRbci5DaGlsaWRQb3NdO1xuICAgICAgICB0LnNldFBvc2l0aW9uKGUpO1xuICAgICAgfSk7XG4gICAgICB0LmNhbGxCYWNrICYmIHQuY2FsbEJhY2soZmFsc2UpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHQuc3ByTm9ybWFsO1xuICAgICAgdC5ub2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0W3IuQ2hpbGlkUG9zXTtcbiAgICAgICAgdC5zZXRQb3NpdGlvbihlKTtcbiAgICAgIH0pO1xuICAgICAgdC5jYWxsQmFjayAmJiB0LmNhbGxCYWNrKHRydWUpO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5jYWxsQmFjayA9IHQ7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLlNwcml0ZUZyYW1lKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcHJOb3JtYWxcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXSwgX2N0b3IucHJvdG90eXBlLCBcInNwclByZXNzZWRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoTnVtYmVyKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJudW1EZXZcIiwgdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3MsIGNjcF9yZXF1aXJlQ29tcG9uZW50KGNjLlNwcml0ZSldLCBfY3Rvcik7XG59KGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbEJ0blByZXNzO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHQuQ2hpbGlkUG9zID0gXCJDaGlsaWRQb3NcIjtcbn0pKHIgfHwgKHIgPSB7fSkpOyJdfQ==