
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUIVideoTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21e17f5Z+xOhol2UNXnlyMP', 'KinghtFallUIVideoTips');
// _script/KinghtFallUIVideoTips.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1DiamondApi = require("DiamondApi");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUIVideoTips = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.labTitle = null;
    e.sprIcon = null;
    e.sprfIconList = [];
    e.labInfo = null;
    e.btnClose = null;
    e.btnVideo = null;
    e.type = 0;
    e.callBack = null;
    e.typeInfo = [{
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Red Hare",
      info: "<b>Move speed <color=#43a926>+50%</color></b>"
    }, {
      name: "Sun Bow",
      info: "<b>Attack <color=#43a926>+50%</color>, attack speed <color=#43a926>+50%</color></b>"
    }, {
      name: "Silver sack",
      info: "<b>Gain <color=#43a926>6–12</color> silver</b>"
    }, {
      name: "Red Hare (true)",
      info: "<b>Move speed <color=#43a926>+100%</color></b>"
    }, {
      name: "Sun Chaser (true)",
      info: "<b>Attack <color=#43a926>+100%</color>, attack speed <color=#43a926>+100%</color></b>"
    }];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t, e) {
    this.type = t;
    this.callBack = e;
  };

  _ctor.prototype.start = function () {
    var t = this;
    this.labTitle.string = this.T(this.typeInfo[this.type - 1].name);
    this.sprIcon.spriteFrame = this.sprfIconList[this.type - 1];
    this.labInfo.string = this.T(this.typeInfo[this.type - 1].info) + "<br/><b><color=#e95cff>Cost: 60 gems</color></b>";
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.callBack(false);
      t.closeUI();
    }, this);
    this.btnVideo.on(cc.Node.EventType.TOUCH_END, function () {
      $z1DiamondApi.DiamondApi.consume(60, function () {
        t.callBack(true);
        t.closeUI();
      });
    }, this);
  };

  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labTitle", undefined);
  cc__decorate([ccp_property(cc.Sprite)], _ctor.prototype, "sprIcon", undefined);
  cc__decorate([ccp_property([cc.SpriteFrame])], _ctor.prototype, "sprfIconList", undefined);
  cc__decorate([ccp_property(cc.RichText)], _ctor.prototype, "labInfo", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnVideo", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIVideoTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSVZpZGVvVGlwcy5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFCYXNlVUkiLCJyZXF1aXJlIiwiJHoxRGlhbW9uZEFwaSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsVUlWaWRlb1RpcHMiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJsYWJUaXRsZSIsInNwckljb24iLCJzcHJmSWNvbkxpc3QiLCJsYWJJbmZvIiwiYnRuQ2xvc2UiLCJidG5WaWRlbyIsInR5cGUiLCJjYWxsQmFjayIsInR5cGVJbmZvIiwibmFtZSIsImluZm8iLCJwcm90b3R5cGUiLCJpbml0Iiwic3RhcnQiLCJzdHJpbmciLCJUIiwic3ByaXRlRnJhbWUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJjbG9zZVVJIiwiRGlhbW9uZEFwaSIsImNvbnN1bWUiLCJMYWJlbCIsInVuZGVmaW5lZCIsIlNwcml0ZSIsIlNwcml0ZUZyYW1lIiwiUmljaFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3Qzs7QUFHQSxJQUFJQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXZCOztBQUNBLElBQUlDLGFBQWEsR0FB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QUEwQnRCLEtBQUssQ0FBQ2UsU0FBaEMsRUFBMkMsVUFBM0MsRUFBdURjLFNBQXZELENBQVo7RUFDQSxPQUFPL0MsWUFBWSxDQUFDLENBQUNZLFdBQUQsQ0FBRCxFQUFnQk0sS0FBaEIsQ0FBbkI7QUFDRCxDQXJFK0IsQ0FxRTlCWixTQUFTLFdBckVxQixDQUFoQzs7QUFzRUFGLE9BQU8sV0FBUCxHQUFrQlkseUJBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFCYXNlVUkgPSByZXF1aXJlKFwiQmFzZVVJXCIpO1xudmFyICR6MURpYW1vbmRBcGkgPSByZXF1aXJlKFwiRGlhbW9uZEFwaVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9LaW5naHRGYWxsVUlWaWRlb1RpcHMgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5sYWJUaXRsZSA9IG51bGw7XG4gICAgZS5zcHJJY29uID0gbnVsbDtcbiAgICBlLnNwcmZJY29uTGlzdCA9IFtdO1xuICAgIGUubGFiSW5mbyA9IG51bGw7XG4gICAgZS5idG5DbG9zZSA9IG51bGw7XG4gICAgZS5idG5WaWRlbyA9IG51bGw7XG4gICAgZS50eXBlID0gMDtcbiAgICBlLmNhbGxCYWNrID0gbnVsbDtcbiAgICBlLnR5cGVJbmZvID0gW3tcbiAgICAgIG5hbWU6IFwiU29sZGllclwiLFxuICAgICAgaW5mbzogXCI8Yj5CYXJyYWNrcyB1bml0IGNhcCA8Y29sb3I9IzQzYTkyNj4rMTwvY29sb3I+PC9iPlwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJTb2xkaWVyXCIsXG4gICAgICBpbmZvOiBcIjxiPkJhcnJhY2tzIHVuaXQgY2FwIDxjb2xvcj0jNDNhOTI2PisxPC9jb2xvcj48L2I+XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIlNvbGRpZXJcIixcbiAgICAgIGluZm86IFwiPGI+QmFycmFja3MgdW5pdCBjYXAgPGNvbG9yPSM0M2E5MjY+KzE8L2NvbG9yPjwvYj5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiU29sZGllclwiLFxuICAgICAgaW5mbzogXCI8Yj5CYXJyYWNrcyB1bml0IGNhcCA8Y29sb3I9IzQzYTkyNj4rMTwvY29sb3I+PC9iPlwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJSZWQgSGFyZVwiLFxuICAgICAgaW5mbzogXCI8Yj5Nb3ZlIHNwZWVkIDxjb2xvcj0jNDNhOTI2Pis1MCU8L2NvbG9yPjwvYj5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiU3VuIEJvd1wiLFxuICAgICAgaW5mbzogXCI8Yj5BdHRhY2sgPGNvbG9yPSM0M2E5MjY+KzUwJTwvY29sb3I+LCBhdHRhY2sgc3BlZWQgPGNvbG9yPSM0M2E5MjY+KzUwJTwvY29sb3I+PC9iPlwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJTaWx2ZXIgc2Fja1wiLFxuICAgICAgaW5mbzogXCI8Yj5HYWluIDxjb2xvcj0jNDNhOTI2PjbigJMxMjwvY29sb3I+IHNpbHZlcjwvYj5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiUmVkIEhhcmUgKHRydWUpXCIsXG4gICAgICBpbmZvOiBcIjxiPk1vdmUgc3BlZWQgPGNvbG9yPSM0M2E5MjY+KzEwMCU8L2NvbG9yPjwvYj5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiU3VuIENoYXNlciAodHJ1ZSlcIixcbiAgICAgIGluZm86IFwiPGI+QXR0YWNrIDxjb2xvcj0jNDNhOTI2PisxMDAlPC9jb2xvcj4sIGF0dGFjayBzcGVlZCA8Y29sb3I9IzQzYTkyNj4rMTAwJTwvY29sb3I+PC9iPlwiXG4gICAgfV07XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdGhpcy50eXBlID0gdDtcbiAgICB0aGlzLmNhbGxCYWNrID0gZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmxhYlRpdGxlLnN0cmluZyA9IHRoaXMuVCh0aGlzLnR5cGVJbmZvW3RoaXMudHlwZSAtIDFdLm5hbWUpO1xuICAgIHRoaXMuc3BySWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByZkljb25MaXN0W3RoaXMudHlwZSAtIDFdO1xuICAgIHRoaXMubGFiSW5mby5zdHJpbmcgPSB0aGlzLlQodGhpcy50eXBlSW5mb1t0aGlzLnR5cGUgLSAxXS5pbmZvKSArIFwiPGJyLz48Yj48Y29sb3I9I2U5NWNmZj5Db3N0OiA2MCBnZW1zPC9jb2xvcj48L2I+XCI7XG4gICAgdGhpcy5idG5DbG9zZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuY2FsbEJhY2soZmFsc2UpO1xuICAgICAgdC5jbG9zZVVJKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5idG5WaWRlby5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR6MURpYW1vbmRBcGkuRGlhbW9uZEFwaS5jb25zdW1lKDYwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuY2FsbEJhY2sodHJ1ZSk7XG4gICAgICAgIHQuY2xvc2VVSSgpO1xuICAgICAgfSk7XG4gICAgfSwgdGhpcyk7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLkxhYmVsKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJsYWJUaXRsZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5TcHJpdGUpXSwgX2N0b3IucHJvdG90eXBlLCBcInNwckljb25cIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSldLCBfY3Rvci5wcm90b3R5cGUsIFwic3ByZkljb25MaXN0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLlJpY2hUZXh0KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJsYWJJbmZvXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0bkNsb3NlXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blZpZGVvXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFCYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbFVJVmlkZW9UaXBzOyJdfQ==