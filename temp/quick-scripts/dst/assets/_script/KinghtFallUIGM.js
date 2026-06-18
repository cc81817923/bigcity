
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUIGM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27e31iNHLBAUp2mCDkONTPJ', 'KinghtFallUIGM');
// _script/KinghtFallUIGM.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUIGM = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.btnClose = null;
    e.btnLock = null;
    e.btnCoin = null;
    e.btnDiamond = null;
    e.tagClick = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t = this;
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeUI();
    }, this);
    this.btnLock.on(cc.Node.EventType.TOUCH_END, function () {
      var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getLevelCfgList();
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setMaxStage(e.length);
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setGroupId(e.length);
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.UpBattView);
    }, this);
    this.btnCoin.on(cc.Node.EventType.TOUCH_END, function () {
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().addGoldNum(1e6);
    }, this);
    this.btnDiamond.on(cc.Node.EventType.TOUCH_END, function () {
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().addDiamondNum(1e4);
    }, this);
    this.tagClick.isChecked = 30 == $z1KinghtFallConfig.KinghtFallParameter.InitGold;
    this.tagClick.node.on("toggle", function (t) {
      $z1KinghtFallConfig.KinghtFallParameter.InitGold = t.isChecked ? 30 : 0;
    }, this);
  };

  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Unlock stage"
  })], _ctor.prototype, "btnLock", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Unlock stage"
  })], _ctor.prototype, "btnCoin", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Unlock stage"
  })], _ctor.prototype, "btnDiamond", undefined);
  cc__decorate([ccp_property({
    type: cc.Toggle,
    tooltip: "Unlock stage"
  })], _ctor.prototype, "tagClick", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIGM;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSUdNLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VVSSIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiJHoxS2luZ2h0RmFsbERhdGFNZ3IiLCIkejFLaW5naHRGYWxsUGxheWVyTWdyIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxVSUdNIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnRuQ2xvc2UiLCJidG5Mb2NrIiwiYnRuQ29pbiIsImJ0bkRpYW1vbmQiLCJ0YWdDbGljayIsInByb3RvdHlwZSIsInN0YXJ0Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiY2xvc2VVSSIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRMZXZlbENmZ0xpc3QiLCJLaW5naHRGYWxsUGxheWVyTWdyIiwiZ2V0VXNlckRhdGEiLCJzZXRNYXhTdGFnZSIsImxlbmd0aCIsImdldEd1aWRlRGF0YSIsInNldEdyb3VwSWQiLCJzZW5kRXZlbnQiLCJLaW5naHRGYWxsRXZlbnROYW1lIiwiVXBCYXR0VmlldyIsImFkZEdvbGROdW0iLCJhZGREaWFtb25kTnVtIiwiaXNDaGVja2VkIiwiS2luZ2h0RmFsbFBhcmFtZXRlciIsIkluaXRHb2xkIiwibm9kZSIsInVuZGVmaW5lZCIsInR5cGUiLCJ0b29sdGlwIiwiVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNB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WSxDQUFDLENBQUNnQixZQUFZLENBQUM7SUFDekJ1QyxJQUFJLEVBQUUzQyxFQUFFLENBQUM2QyxNQURnQjtJQUV6QkQsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1BwQyxLQUFLLENBQUNTLFNBSEMsRUFHVSxVQUhWLEVBR3NCeUIsU0FIdEIsQ0FBWjtFQUlBLE9BQU90RCxZQUFZLENBQUMsQ0FBQ2MsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBbkR3QixDQW1EdkJkLFNBQVMsV0FuRGMsQ0FBekI7O0FBb0RBRixPQUFPLFdBQVAsR0FBa0JjLGtCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxQmFzZVVJID0gcmVxdWlyZShcIkJhc2VVSVwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxVSUdNID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuYnRuQ2xvc2UgPSBudWxsO1xuICAgIGUuYnRuTG9jayA9IG51bGw7XG4gICAgZS5idG5Db2luID0gbnVsbDtcbiAgICBlLmJ0bkRpYW1vbmQgPSBudWxsO1xuICAgIGUudGFnQ2xpY2sgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmJ0bkNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5jbG9zZVVJKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5idG5Mb2NrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldExldmVsQ2ZnTGlzdCgpO1xuICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5zZXRNYXhTdGFnZShlLmxlbmd0aCk7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5zZXRHcm91cElkKGUubGVuZ3RoKTtcbiAgICAgIHQuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5VcEJhdHRWaWV3KTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0bkNvaW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmFkZEdvbGROdW0oMWU2KTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0bkRpYW1vbmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmFkZERpYW1vbmROdW0oMWU0KTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnRhZ0NsaWNrLmlzQ2hlY2tlZCA9IDMwID09ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Jbml0R29sZDtcbiAgICB0aGlzLnRhZ0NsaWNrLm5vZGUub24oXCJ0b2dnbGVcIiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Jbml0R29sZCA9IHQuaXNDaGVja2VkID8gMzAgOiAwO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5DbG9zZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlVubG9jayBzdGFnZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0bkxvY2tcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJVbmxvY2sgc3RhZ2VcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5Db2luXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiVW5sb2NrIHN0YWdlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuRGlhbW9uZFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuVG9nZ2xlLFxuICAgIHRvb2x0aXA6IFwiVW5sb2NrIHN0YWdlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwidGFnQ2xpY2tcIiwgdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KCR6MUJhc2VVSS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsVUlHTTsiXX0=