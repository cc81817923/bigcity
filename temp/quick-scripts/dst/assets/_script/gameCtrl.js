
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/gameCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9aebfl4gbVDpqjw4SehZptj', 'gameCtrl');
// _script/gameCtrl.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseCtrl = require("BaseCtrl");

var $z1AudioMgr = require("AudioMgr");

var $z1UIMgr = require("UIMgr");

var $z1Config = require("Config");

var $z1commonConfig = require("commonConfig");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_gameCtrl = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.initMap = new Map();
    e._exitCall = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.enterSubModel = function (t, e, n) {
    var i = this;
    this._exitCall = n;
    this.initProperty(t);
    this.addTouchEvent();
    i.initMap[t] = true;
    $z1UIMgr.UIMgr.getInstance().openUIOfCallback(i.gameConf.gameUIID.UIGameExist, $z1Config.UIID.UINONE, function () {
      e && e();
      i.removeTouchEvent();
    });
  };

  _ctor.prototype.initProperty = function (t) {
    this.gameConf = $z1commonConfig.game.getGameConfig(t);

    if (!this.initMap[t]) {
      $z1UIMgr.UIMgr.getInstance().addUICnf(this.gameConf.gameUICF);
      $z1AudioMgr.AudioMgr.getInstance().addAdConf(this.gameConf.gameAudioCF);
    }
  };

  _ctor.prototype.exitSubModel = function () {};

  _ctor.prototype.addTouchEvent = function () {
    var t = new cc.Node();
    t.setContentSize(cc.winSize.width, cc.winSize.height);
    t.addComponent(cc.BlockInputEvents).enabled = true;
    t.zIndex = 9999;
    t.name = "block_touch_event";
    t.parent = cc.Canvas.instance.node;
  };

  _ctor.prototype.removeTouchEvent = function () {
    var t = cc.Canvas.instance.node.getChildByName("block_touch_event");
    t && t.destroy();
  };

  _ctor.prototype.onLoad = function () {};

  _ctor.prototype.start = function () {};

  _ctor.prototype.update = function () {};

  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_gameCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L2dhbWVDdHJsLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VDdHJsIiwicmVxdWlyZSIsIiR6MUF1ZGlvTWdyIiwiJHoxVUlNZ3IiLCIkejFDb25maWciLCIkejFjb21tb25Db25maWciLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJkZWZfZ2FtZUN0cmwiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpbml0TWFwIiwiTWFwIiwiX2V4aXRDYWxsIiwicHJvdG90eXBlIiwiZW50ZXJTdWJNb2RlbCIsIm4iLCJpbml0UHJvcGVydHkiLCJhZGRUb3VjaEV2ZW50IiwiVUlNZ3IiLCJnZXRJbnN0YW5jZSIsIm9wZW5VSU9mQ2FsbGJhY2siLCJnYW1lQ29uZiIsImdhbWVVSUlEIiwiVUlHYW1lRXhpc3QiLCJVSUlEIiwiVUlOT05FIiwicmVtb3ZlVG91Y2hFdmVudCIsImdhbWUiLCJnZXRHYW1lQ29uZmlnIiwiYWRkVUlDbmYiLCJnYW1lVUlDRiIsIkF1ZGlvTWdyIiwiYWRkQWRDb25mIiwiZ2FtZUF1ZGlvQ0YiLCJleGl0U3ViTW9kZWwiLCJOb2RlIiwic2V0Q29udGVudFNpemUiLCJ3aW5TaXplIiwid2lkdGgiLCJoZWlnaHQiLCJhZGRDb21wb25lbnQiLCJCbG9ja0lucHV0RXZlbnRzIiwiZW5hYmxlZCIsInpJbmRleCIsIm5hbWUiLCJwYXJlbnQiLCJDYW52YXMiLCJpbnN0YW5jZSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImRlc3Ryb3kiLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJ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Q3NDLE9BQUgsQ0FBV0UsTUFBOUM7SUFDQWxDLENBQUMsQ0FBQ21DLFlBQUYsQ0FBZXpDLEVBQUUsQ0FBQzBDLGdCQUFsQixFQUFvQ0MsT0FBcEMsR0FBOEMsSUFBOUM7SUFDQXJDLENBQUMsQ0FBQ3NDLE1BQUYsR0FBVyxJQUFYO0lBQ0F0QyxDQUFDLENBQUN1QyxJQUFGLEdBQVMsbUJBQVQ7SUFDQXZDLENBQUMsQ0FBQ3dDLE1BQUYsR0FBVzlDLEVBQUUsQ0FBQytDLE1BQUgsQ0FBVUMsUUFBVixDQUFtQkMsSUFBOUI7RUFDRCxDQVBEOztFQVFBMUMsS0FBSyxDQUFDTyxTQUFOLENBQWdCYSxnQkFBaEIsR0FBbUMsWUFBWTtJQUM3QyxJQUFJckIsQ0FBQyxHQUFHTixFQUFFLENBQUMrQyxNQUFILENBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLENBQXdCQyxjQUF4QixDQUF1QyxtQkFBdkMsQ0FBUjtJQUNBNUMsQ0FBQyxJQUFJQSxDQUFDLENBQUM2QyxPQUFGLEVBQUw7RUFDRCxDQUhEOztFQUlBNUMsS0FBSyxDQUFDTyxTQUFOLENBQWdCc0MsTUFBaEIsR0FBeUIsWUFBWSxDQUFFLENBQXZDOztFQUNBN0MsS0FBSyxDQUFDTyxTQUFOLENBQWdCdUMsS0FBaEIsR0FBd0IsWUFBWSxDQUFFLENBQXRDOztFQUNBOUMsS0FBSyxDQUFDTyxTQUFOLENBQWdCd0MsTUFBaEIsR0FBeUIsWUFBWSxDQUFFLENBQXZDOztFQUNBLE9BQU9uRSxZQUFZLENBQUMsQ0FBQ2UsV0FBRCxDQUFELEVBQWdCSyxLQUFoQixDQUFuQjtBQUNELENBM0NrQixDQTJDakJkLFdBQVcsV0EzQ00sQ0FBbkI7O0FBNENBRixPQUFPLFdBQVAsR0FBa0JjLFlBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFCYXNlQ3RybCA9IHJlcXVpcmUoXCJCYXNlQ3RybFwiKTtcbnZhciAkejFBdWRpb01nciA9IHJlcXVpcmUoXCJBdWRpb01nclwiKTtcbnZhciAkejFVSU1nciA9IHJlcXVpcmUoXCJVSU1nclwiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xudmFyICR6MWNvbW1vbkNvbmZpZyA9IHJlcXVpcmUoXCJjb21tb25Db25maWdcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG5jY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9nYW1lQ3RybCA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmluaXRNYXAgPSBuZXcgTWFwKCk7XG4gICAgZS5fZXhpdENhbGwgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLmVudGVyU3ViTW9kZWwgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgIHZhciBpID0gdGhpcztcbiAgICB0aGlzLl9leGl0Q2FsbCA9IG47XG4gICAgdGhpcy5pbml0UHJvcGVydHkodCk7XG4gICAgdGhpcy5hZGRUb3VjaEV2ZW50KCk7XG4gICAgaS5pbml0TWFwW3RdID0gdHJ1ZTtcbiAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSU9mQ2FsbGJhY2soaS5nYW1lQ29uZi5nYW1lVUlJRC5VSUdhbWVFeGlzdCwgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlICYmIGUoKTtcbiAgICAgIGkucmVtb3ZlVG91Y2hFdmVudCgpO1xuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdFByb3BlcnR5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmdhbWVDb25mID0gJHoxY29tbW9uQ29uZmlnLmdhbWUuZ2V0R2FtZUNvbmZpZyh0KTtcbiAgICBpZiAoIXRoaXMuaW5pdE1hcFt0XSkge1xuICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRVSUNuZih0aGlzLmdhbWVDb25mLmdhbWVVSUNGKTtcbiAgICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkuYWRkQWRDb25mKHRoaXMuZ2FtZUNvbmYuZ2FtZUF1ZGlvQ0YpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmV4aXRTdWJNb2RlbCA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkVG91Y2hFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdC5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XG4gICAgdC5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cykuZW5hYmxlZCA9IHRydWU7XG4gICAgdC56SW5kZXggPSA5OTk5O1xuICAgIHQubmFtZSA9IFwiYmxvY2tfdG91Y2hfZXZlbnRcIjtcbiAgICB0LnBhcmVudCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVtb3ZlVG91Y2hFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmxvY2tfdG91Y2hfZXZlbnRcIik7XG4gICAgdCAmJiB0LmRlc3Ryb3koKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZUN0cmwuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfZ2FtZUN0cmw7Il19