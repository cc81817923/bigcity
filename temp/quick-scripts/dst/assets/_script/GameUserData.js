
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GameUserData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22154alMEtAGoLXMFlsRGCT', 'GameUserData');
// _script/GameUserData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserData = exports.ThirdUserInfo = undefined;

var $z1BaseData = require("BaseData");

var $z1EventMgr = require("EventMgr");

var $z1LanguageMgr = require("LanguageMgr");

var $z1Config = require("Config");

exports.ThirdUserInfo = function () {};

var c = function c() {
  this.goldNum = 0;
};

var exp_UserData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.aliseMap = {
      goldNum: "1",
      playerName: "2",
      thridUserInfo: "3",
      imgUrl: "4",
      userName: "5"
    };
    e.protoId = 1;
    e.ecrypt = false;
    e.gameKey = $z1Config.GameConfig.AppCacheName + "udata";
    e.isNewUser = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new c();
    return this.data;
  };

  _ctor.prototype.initData = function (t) {
    t && (this.isNewUser = true);
    this.saveData();
  };

  _ctor.prototype.getIsNewUser = function () {
    return this.isNewUser;
  };

  _ctor.prototype.getGoldNum = function () {
    return this.data.goldNum;
  };

  _ctor.prototype.addGoldNum = function (t, e) {
    this.data.goldNum += t;
    this.saveData();
    $z1EventMgr.EventMgr.getInstance().emit($z1Config.EventName.RefreshGold, t, true, e);
  };

  _ctor.prototype.subGoldNum = function (t) {
    return !(this.data.goldNum < t || (this.data.goldNum -= t, $z1EventMgr.EventMgr.getInstance().emit($z1Config.EventName.RefreshGold, t, false), this.saveData(), 0));
  };

  _ctor.prototype.getPlayerName = function () {
    return $z1LanguageMgr.LanguageMgr.getInstance().T(this.data.playerName);
  };

  _ctor.prototype.setPlayerName = function (t) {
    this.data.playerName = t;
    this.saveData();
  };

  _ctor.prototype.getThirdInfo = function () {
    return this.data.thridUserInfo;
  };

  _ctor.prototype.setThirdInfo = function (t) {
    this.data.thridUserInfo = t;
    this.saveData();
  };

  return _ctor;
}($z1BaseData.BaseData);

exports.UserData = exp_UserData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dhbWVVc2VyRGF0YS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlVzZXJEYXRhIiwiVGhpcmRVc2VySW5mbyIsInVuZGVmaW5lZCIsIiR6MUJhc2VEYXRhIiwicmVxdWlyZSIsIiR6MUV2ZW50TWdyIiwiJHoxTGFuZ3VhZ2VNZ3IiLCIkejFDb25maWciLCJjIiwiZ29sZE51bSIsImV4cF9Vc2VyRGF0YSIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImFsaXNlTWFwIiwicGxheWVyTmFtZSIsInRocmlkVXNlckluZm8iLCJpbWdVcmwiLCJ1c2VyTmFtZSIsInByb3RvSWQiLCJlY3J5cHQiLCJnYW1lS2V5IiwiR2FtZUNvbmZpZyIsIkFwcENhY2hlTmFtZSIsImlzTmV3VXNlciIsInByb3RvdHlwZSIsImNyZWF0ZURhdGEiLCJkYXRhIiwiaW5pdERhdGEiLCJzYXZlRGF0YSIsImdldElzTmV3VXNlciIsImdldEdvbGROdW0iLCJhZGRHb2xkTnVtIiwiRXZlbnRNZ3IiLCJnZXRJbnN0YW5jZSIsImVtaXQiLCJFdmVudE5hbWUiLCJSZWZyZXNoR29sZCIsInN1YkdvbGROdW0iLCJnZXRQbGF5ZXJOYW1lIiwiTGFuZ3VhZ2VNZ3IiLCJUIiwic2V0UGxheWVyTmFtZSIsImdldFRoaXJkSW5mbyIsInNldFRoaXJkSW5mbyIsIkJhc2VEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLFFBQVIsR0FBbUJGLE9BQU8sQ0FBQ0csYUFBUixH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S29CLFFBQUwsRUFBNUcsRUFBNkgsQ0FBdkosQ0FBRixDQUFQO0VBQ0QsQ0FGRDs7RUFHQW5CLEtBQUssQ0FBQ2UsU0FBTixDQUFnQmMsYUFBaEIsR0FBZ0MsWUFBWTtJQUMxQyxPQUFPbkMsY0FBYyxDQUFDb0MsV0FBZixDQUEyQk4sV0FBM0IsR0FBeUNPLENBQXpDLENBQTJDLEtBQUtkLElBQUwsQ0FBVVosVUFBckQsQ0FBUDtFQUNELENBRkQ7O0VBR0FMLEtBQUssQ0FBQ2UsU0FBTixDQUFnQmlCLGFBQWhCLEdBQWdDLFVBQVVqQyxDQUFWLEVBQWE7SUFDM0MsS0FBS2tCLElBQUwsQ0FBVVosVUFBVixHQUF1Qk4sQ0FBdkI7SUFDQSxLQUFLb0IsUUFBTDtFQUNELENBSEQ7O0VBSUFuQixLQUFLLENBQUNlLFNBQU4sQ0FBZ0JrQixZQUFoQixHQUErQixZQUFZO0lBQ3pDLE9BQU8sS0FBS2hCLElBQUwsQ0FBVVgsYUFBakI7RUFDRCxDQUZEOztFQUdBTixLQUFLLENBQUNlLFNBQU4sQ0FBZ0JtQixZQUFoQixHQUErQixVQUFVbkMsQ0FBVixFQUFhO0lBQzFDLEtBQUtrQixJQUFMLENBQVVYLGFBQVYsR0FBMEJQLENBQTFCO0lBQ0EsS0FBS29CLFFBQUw7RUFDRCxDQUhEOztFQUlBLE9BQU9uQixLQUFQO0FBQ0QsQ0F0RGtCLENBc0RqQlQsV0FBVyxDQUFDNEMsUUF0REssQ0FBbkI7O0FBdURBakQsT0FBTyxDQUFDRSxRQUFSLEdBQW1CVSxZQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Vc2VyRGF0YSA9IGV4cG9ydHMuVGhpcmRVc2VySW5mbyA9IHVuZGVmaW5lZDtcbnZhciAkejFCYXNlRGF0YSA9IHJlcXVpcmUoXCJCYXNlRGF0YVwiKTtcbnZhciAkejFFdmVudE1nciA9IHJlcXVpcmUoXCJFdmVudE1nclwiKTtcbnZhciAkejFMYW5ndWFnZU1nciA9IHJlcXVpcmUoXCJMYW5ndWFnZU1nclwiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xuZXhwb3J0cy5UaGlyZFVzZXJJbmZvID0gZnVuY3Rpb24gKCkge307XG52YXIgYyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5nb2xkTnVtID0gMDtcbn07XG52YXIgZXhwX1VzZXJEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuYWxpc2VNYXAgPSB7XG4gICAgICBnb2xkTnVtOiBcIjFcIixcbiAgICAgIHBsYXllck5hbWU6IFwiMlwiLFxuICAgICAgdGhyaWRVc2VySW5mbzogXCIzXCIsXG4gICAgICBpbWdVcmw6IFwiNFwiLFxuICAgICAgdXNlck5hbWU6IFwiNVwiXG4gICAgfTtcbiAgICBlLnByb3RvSWQgPSAxO1xuICAgIGUuZWNyeXB0ID0gZmFsc2U7XG4gICAgZS5nYW1lS2V5ID0gJHoxQ29uZmlnLkdhbWVDb25maWcuQXBwQ2FjaGVOYW1lICsgXCJ1ZGF0YVwiO1xuICAgIGUuaXNOZXdVc2VyID0gZmFsc2U7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEgPSBuZXcgYygpO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdCAmJiAodGhpcy5pc05ld1VzZXIgPSB0cnVlKTtcbiAgICB0aGlzLnNhdmVEYXRhKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRJc05ld1VzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNOZXdVc2VyO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0R29sZE51bSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmdvbGROdW07XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRHb2xkTnVtID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICB0aGlzLmRhdGEuZ29sZE51bSArPSB0O1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgICAkejFFdmVudE1nci5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQoJHoxQ29uZmlnLkV2ZW50TmFtZS5SZWZyZXNoR29sZCwgdCwgdHJ1ZSwgZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdWJHb2xkTnVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gISh0aGlzLmRhdGEuZ29sZE51bSA8IHQgfHwgKHRoaXMuZGF0YS5nb2xkTnVtIC09IHQsICR6MUV2ZW50TWdyLkV2ZW50TWdyLmdldEluc3RhbmNlKCkuZW1pdCgkejFDb25maWcuRXZlbnROYW1lLlJlZnJlc2hHb2xkLCB0LCBmYWxzZSksIHRoaXMuc2F2ZURhdGEoKSwgMCkpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0UGxheWVyTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJHoxTGFuZ3VhZ2VNZ3IuTGFuZ3VhZ2VNZ3IuZ2V0SW5zdGFuY2UoKS5UKHRoaXMuZGF0YS5wbGF5ZXJOYW1lKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFBsYXllck5hbWUgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJOYW1lID0gdDtcbiAgICB0aGlzLnNhdmVEYXRhKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRUaGlyZEluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS50aHJpZFVzZXJJbmZvO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0VGhpcmRJbmZvID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmRhdGEudGhyaWRVc2VySW5mbyA9IHQ7XG4gICAgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICByZXR1cm4gX2N0b3I7XG59KCR6MUJhc2VEYXRhLkJhc2VEYXRhKTtcbmV4cG9ydHMuVXNlckRhdGEgPSBleHBfVXNlckRhdGE7Il19