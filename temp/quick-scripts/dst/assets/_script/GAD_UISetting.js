
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_UISetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '824736iBYlIOohKv1jIImbA', 'GAD_UISetting');
// _script/GAD_UISetting.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1AudioMgr = require("AudioMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_UISetting = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.musicSlider = null;
    e.effectSlider = null;
    e.btnClose = null;
    e.btnBackHome = null;
    e.btnPlay = null;
    e._musicBg2 = null;
    e._effectBg2 = null;
    e._callFunc = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this._callFunc = t;
  };

  _ctor.prototype.onEnable = function () {
    this.musicSlider.progress = $z1AudioMgr.AudioMgr.getInstance().getMusicVolume();
    this.effectSlider.progress = $z1AudioMgr.AudioMgr.getInstance().getEffectVolume();
  };

  _ctor.prototype.start = function () {
    var t;
    var e;
    this._musicBg2 = null === (t = this.musicSlider.node.getChildByName("Background2")) || undefined === t ? undefined : t.getComponent(cc.Sprite);
    this._effectBg2 = null === (e = this.effectSlider.node.getChildByName("Background2")) || undefined === e ? undefined : e.getComponent(cc.Sprite);
    this._musicBg2 && (this._musicBg2.fillRange = this.musicSlider.progress);
    this._effectBg2 && (this._effectBg2.fillRange = this.effectSlider.progress);
    this.bindEvent();
  };

  _ctor.prototype.bindEvent = function () {
    var t = this;
    this.musicSlider.node.on("slide", function (e) {
      t._musicBg2 && (t._musicBg2.fillRange = e.progress);
      $z1AudioMgr.AudioMgr.getInstance().setMusicVolume(e.progress);
    }, this);
    this.effectSlider.node.on("slide", function (e) {
      t._effectBg2 && (t._effectBg2.fillRange = e.progress);
      $z1AudioMgr.AudioMgr.getInstance().setEffectVolume(e.progress);
    }, this);
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t._callFunc && t._callFunc(true);
      t.closeUI();
    }, this);
    this.btnBackHome.on(cc.Node.EventType.TOUCH_END, function () {
      t._callFunc && t._callFunc(false);
      t.closeUI();
    });
    this.btnPlay.on(cc.Node.EventType.TOUCH_END, function () {
      t._callFunc && t._callFunc(true);
      t.closeUI();
    });
  };

  cc__decorate([ccp_property(cc.Slider)], _ctor.prototype, "musicSlider", undefined);
  cc__decorate([ccp_property(cc.Slider)], _ctor.prototype, "effectSlider", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnBackHome", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnPlay", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_GAD_UISetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9VSVNldHRpbmcuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxQmFzZVVJIiwicmVxdWlyZSIsIiR6MUF1ZGlvTWdyIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0dBRF9VSVNldHRpbmciLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJtdXNpY1NsaWRlciIsImVmZmVjdFNsaWRlciIsImJ0bkNsb3NlIiwiYnRuQmFja0hvbWUiLCJidG5QbGF5IiwiX211c2ljQmcyIiwiX2VmZmVjdEJnMiIsIl9jYWxsRnVuYyIsInByb3RvdHlwZSIsImluaXQiLCJvbkVuYWJsZSIsInByb2dyZXNzIiwiQXVkaW9NZ3IiLCJnZXRJbnN0YW5jZSIsImdldE11c2ljVm9sdW1lIiwiZ2V0RWZmZWN0Vm9sdW1lIiwic3RhcnQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJ1bmRlZmluZWQiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJmaWxsUmFuZ2UiLCJiaW5kRXZlbnQiLCJvbiIsInNldE11c2ljVm9sdW1lIiwic2V0RWZmZWN0Vm9sdW1lIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsImNsb3NlVUkiLCJTbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFB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dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxQmFzZVVJID0gcmVxdWlyZShcIkJhc2VVSVwiKTtcbnZhciAkejFBdWRpb01nciA9IHJlcXVpcmUoXCJBdWRpb01nclwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9HQURfVUlTZXR0aW5nID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUubXVzaWNTbGlkZXIgPSBudWxsO1xuICAgIGUuZWZmZWN0U2xpZGVyID0gbnVsbDtcbiAgICBlLmJ0bkNsb3NlID0gbnVsbDtcbiAgICBlLmJ0bkJhY2tIb21lID0gbnVsbDtcbiAgICBlLmJ0blBsYXkgPSBudWxsO1xuICAgIGUuX211c2ljQmcyID0gbnVsbDtcbiAgICBlLl9lZmZlY3RCZzIgPSBudWxsO1xuICAgIGUuX2NhbGxGdW5jID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLl9jYWxsRnVuYyA9IHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm11c2ljU2xpZGVyLnByb2dyZXNzID0gJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNdXNpY1ZvbHVtZSgpO1xuICAgIHRoaXMuZWZmZWN0U2xpZGVyLnByb2dyZXNzID0gJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5nZXRFZmZlY3RWb2x1bWUoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlO1xuICAgIHRoaXMuX211c2ljQmcyID0gbnVsbCA9PT0gKHQgPSB0aGlzLm11c2ljU2xpZGVyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kMlwiKSkgfHwgdW5kZWZpbmVkID09PSB0ID8gdW5kZWZpbmVkIDogdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLl9lZmZlY3RCZzIgPSBudWxsID09PSAoZSA9IHRoaXMuZWZmZWN0U2xpZGVyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kMlwiKSkgfHwgdW5kZWZpbmVkID09PSBlID8gdW5kZWZpbmVkIDogZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLl9tdXNpY0JnMiAmJiAodGhpcy5fbXVzaWNCZzIuZmlsbFJhbmdlID0gdGhpcy5tdXNpY1NsaWRlci5wcm9ncmVzcyk7XG4gICAgdGhpcy5fZWZmZWN0QmcyICYmICh0aGlzLl9lZmZlY3RCZzIuZmlsbFJhbmdlID0gdGhpcy5lZmZlY3RTbGlkZXIucHJvZ3Jlc3MpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubXVzaWNTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0Ll9tdXNpY0JnMiAmJiAodC5fbXVzaWNCZzIuZmlsbFJhbmdlID0gZS5wcm9ncmVzcyk7XG4gICAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnNldE11c2ljVm9sdW1lKGUucHJvZ3Jlc3MpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuZWZmZWN0U2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdC5fZWZmZWN0QmcyICYmICh0Ll9lZmZlY3RCZzIuZmlsbFJhbmdlID0gZS5wcm9ncmVzcyk7XG4gICAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnNldEVmZmVjdFZvbHVtZShlLnByb2dyZXNzKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0bkNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5fY2FsbEZ1bmMgJiYgdC5fY2FsbEZ1bmModHJ1ZSk7XG4gICAgICB0LmNsb3NlVUkoKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0bkJhY2tIb21lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5fY2FsbEZ1bmMgJiYgdC5fY2FsbEZ1bmMoZmFsc2UpO1xuICAgICAgdC5jbG9zZVVJKCk7XG4gICAgfSk7XG4gICAgdGhpcy5idG5QbGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5fY2FsbEZ1bmMgJiYgdC5fY2FsbEZ1bmModHJ1ZSk7XG4gICAgICB0LmNsb3NlVUkoKTtcbiAgICB9KTtcbiAgfTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuU2xpZGVyKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJtdXNpY1NsaWRlclwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5TbGlkZXIpXSwgX2N0b3IucHJvdG90eXBlLCBcImVmZmVjdFNsaWRlclwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5DbG9zZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5CYWNrSG9tZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5QbGF5XCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFCYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfR0FEX1VJU2V0dGluZzsiXX0=