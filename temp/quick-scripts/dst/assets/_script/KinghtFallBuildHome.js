
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBuildHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2aad3bNc5PDKfEF0+JtNiz', 'KinghtFallBuildHome');
// _script/KinghtFallBuildHome.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1UIMgr = require("UIMgr");

var $z1Utils = require("Utils");

var $z1Config = require("Config");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallGameCtrlData = require("KinghtFallGameCtrlData");

var $z1KinghtFallBuildBase = require("KinghtFallBuildBase");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallBuildHome = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndAddCoin = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.hide = function () {
    t.prototype.hide.call(this);
    this.ndAddCoin && (this.ndAddCoin.active = false);
  };

  _ctor.prototype.startRoundGame = function () {
    t.prototype.startRoundGame.call(this);
    this.ndAddCoin && (this.ndAddCoin.active = false);
  };

  _ctor.prototype.setLevel = function (e) {
    t.prototype.setLevel.call(this, e);

    if (this.buildInfo.cfg) {
      if (!this.ndAddCoin) {
        this.ndAddCoin = cc.instantiate($z1KinghtFallUIGame["default"].instance.ctrUI.ndCoin), this.ndAddCoin.setParent(this.ndHp), this.ndAddCoin.setPosition(0, 20);
      }

      this.ndAddCoin.active = true;
      this.ndAddCoin.getComponentInChildren(cc.Label).string = "+" + this.getGetCoin();
    } else {
      this.ndAddCoin && (this.ndAddCoin.active = false);
    }
  };

  _ctor.prototype.onDead = function () {
    t.prototype.onDead.call(this);
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff20);
    e && ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.SoldierDamage2] = e.Pamer[0]);
    $z1KinghtFallUIGame["default"].instance.initView();
    $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1KinghtFallConfig.KinghtFallUIID.UIGame, $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.Game02), this.T(this.buildCfg.name)));
  };

  _ctor.prototype.getGetCoin = function () {
    if (!this.buildInfo || !this.buildInfo.cfg) {
      return 0;
    }

    var t = this.buildInfo.cfg.Data[0];
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff07);
    e && (t += e.Pamer[0]);
    var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff26);
    n && (t += n.Pamer[0]);
    return t;
  };

  _ctor.prototype.initBuffData = function () {
    t.prototype.initBuffData.call(this);
    this.ndAddCoin && (this.ndAddCoin.getComponentInChildren(cc.Label).string = "+" + this.getGetCoin());
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBuildBase["default"]);

exports["default"] = def_KinghtFallBuildHome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWlsZEhvbWUuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxVUlNZ3IiLCJyZXF1aXJlIiwiJHoxVXRpbHMiLCIkejFDb25maWciLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiJHoxS2luZ2h0RmFsbFRleHRDb25maWciLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxVSUdhbWUiLCIkejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhIiwiJHoxS2luZ2h0RmFsbEJ1aWxkQmFzZSIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsQnVpbGRIb21lIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibmRBZGRDb2luIiwicHJvdG90eXBlIiwiaGlkZSIsImNhbGwiLCJhY3RpdmUiLCJzdGFydFJvdW5kR2FtZSIsInNldExldmVsIiwiYnVpbGRJbmZvIiwiY2ZnIiwiaW5zdGFudGlhdGUiLCJpbnN0YW5jZSIsImN0clVJIiwibmRDb2luIiwic2V0UGFyZW50IiwibmRIcCIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIkxhYmVsIiwic3RyaW5nIiwiZ2V0R2V0Q29pbiIsIm9uRGVhZCIsImN0ckdhbWUiLCJnYW1lRGF0YSIsImdldEdhbWVCdWZmIiwiS2luZ2h0RmFsbEVudW1CdWZmQ2ZnIiwiQnVmZjIwIiwiYWRkVGltZSIsIktpbmdodEZhbGxUaW1lVHlwZSIsIlNvbGRpZXJEYW1hZ2UyIiwiUGFtZXIiLCJpbml0VmlldyIsIlVJTWdyIiwiZ2V0SW5zdGFuY2UiLCJvcGVuVUkiLCJVSUlEIiwiVUlUaXBzIiwiS2luZ2h0RmFsbFVJSUQiLCJVSUdhbWUiLCJVdGlscyIsIlN0cmluZ0Zvcm1hdCIsIlQiLCJLaW5naHRGYWxsVGV4dENvbmZpZyIsIkdhbWUwMiIsImJ1aWxkQ2ZnIiwibmFtZSIsIkRhdGEiLCJCdWZmMDciLCJuIiwiQnVmZjI2IiwiaW5pdEJ1ZmZEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF0Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxPQUFELENBQXRCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsbUJBQW1CLEdBQUdILE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJSSx1QkFBdUIsR0FBR0osT0FBTyxDQUFDLHNCQUFELENBQXJDOztBQUNBLElBQUlLLGlCQUFpQixHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FBL0I7O0FBQ0EsSUFBSU0sbUJBQW1CLEdBQUdOLE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJTyx5QkFBeUIsR0FBR1AsT0FBTyxDQUFDLHdCQUFELENBQXZDOztBQUNBLElBQUlRLHNCQUFzQixHQUFHUixPQUFPLENBQUMscUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSVMsYUFBYSxHQUFHQyxFQUFFLENBQUNDLFVBQXZCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHSCxhQUFhLENBQUNJLE9BQWhDO0FBQ0FKLGFBQWEsQ0FBQ0ssUUFBZDs7QUFDQSxJQUFJQyx1QkFBdUIsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDekMs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QThCLElBQTlCO0lBQ0EsS0FBS0gsU0FBTCxLQUFtQixLQUFLQSxTQUFMLENBQWVnQixzQkFBZixDQUFzQzNCLEVBQUUsQ0FBQzRCLEtBQXpDLEVBQWdEQyxNQUFoRCxHQUF5RCxNQUFNLEtBQUtDLFVBQUwsRUFBbEY7RUFDRCxDQUhEOztFQUlBLE9BQU8vQyxZQUFZLENBQUMsQ0FBQ21CLFdBQUQsQ0FBRCxFQUFnQkssS0FBaEIsQ0FBbkI7QUFDRCxDQWxENkIsQ0FrRDVCVCxzQkFBc0IsV0FsRE0sQ0FBOUI7O0FBbURBWCxPQUFPLFdBQVAsR0FBa0JrQix1QkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MVVJTWdyID0gcmVxdWlyZShcIlVJTWdyXCIpO1xudmFyICR6MVV0aWxzID0gcmVxdWlyZShcIlV0aWxzXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyICR6MUtpbmdodEZhbGxUZXh0Q29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxUZXh0Q29uZmlnXCIpO1xudmFyICR6MUtpbmdodEZhbGxFbnVtID0gcmVxdWlyZShcIktpbmdodEZhbGxFbnVtXCIpO1xudmFyICR6MUtpbmdodEZhbGxVSUdhbWUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFVJR2FtZVwiKTtcbnZhciAkejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhID0gcmVxdWlyZShcIktpbmdodEZhbGxHYW1lQ3RybERhdGFcIik7XG52YXIgJHoxS2luZ2h0RmFsbEJ1aWxkQmFzZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQnVpbGRCYXNlXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xuY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbEJ1aWxkSG9tZSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLm5kQWRkQ29pbiA9IG51bGw7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0LnByb3RvdHlwZS5oaWRlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5uZEFkZENvaW4gJiYgKHRoaXMubmRBZGRDb2luLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0Um91bmRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHQucHJvdG90eXBlLnN0YXJ0Um91bmRHYW1lLmNhbGwodGhpcyk7XG4gICAgdGhpcy5uZEFkZENvaW4gJiYgKHRoaXMubmRBZGRDb2luLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldExldmVsID0gZnVuY3Rpb24gKGUpIHtcbiAgICB0LnByb3RvdHlwZS5zZXRMZXZlbC5jYWxsKHRoaXMsIGUpO1xuICAgIGlmICh0aGlzLmJ1aWxkSW5mby5jZmcpIHtcbiAgICAgIGlmICghdGhpcy5uZEFkZENvaW4pIHtcbiAgICAgICAgdGhpcy5uZEFkZENvaW4gPSBjYy5pbnN0YW50aWF0ZSgkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyVUkubmRDb2luKSwgdGhpcy5uZEFkZENvaW4uc2V0UGFyZW50KHRoaXMubmRIcCksIHRoaXMubmRBZGRDb2luLnNldFBvc2l0aW9uKDAsIDIwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmRBZGRDb2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLm5kQWRkQ29pbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIHRoaXMuZ2V0R2V0Q29pbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5kQWRkQ29pbiAmJiAodGhpcy5uZEFkZENvaW4uYWN0aXZlID0gZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uRGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0LnByb3RvdHlwZS5vbkRlYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjApO1xuICAgIGUgJiYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmFkZFRpbWVbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsVGltZVR5cGUuU29sZGllckRhbWFnZTJdID0gZS5QYW1lclswXSk7XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmluaXRWaWV3KCk7XG4gICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlUaXBzLCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJR2FtZSwgJHoxVXRpbHMuVXRpbHMuU3RyaW5nRm9ybWF0KHRoaXMuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5HYW1lMDIpLCB0aGlzLlQodGhpcy5idWlsZENmZy5uYW1lKSkpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0R2V0Q29pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuYnVpbGRJbmZvIHx8ICF0aGlzLmJ1aWxkSW5mby5jZmcpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgdCA9IHRoaXMuYnVpbGRJbmZvLmNmZy5EYXRhWzBdO1xuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYwNyk7XG4gICAgZSAmJiAodCArPSBlLlBhbWVyWzBdKTtcbiAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjYpO1xuICAgIG4gJiYgKHQgKz0gbi5QYW1lclswXSk7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0QnVmZkRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdC5wcm90b3R5cGUuaW5pdEJ1ZmZEYXRhLmNhbGwodGhpcyk7XG4gICAgdGhpcy5uZEFkZENvaW4gJiYgKHRoaXMubmRBZGRDb2luLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgdGhpcy5nZXRHZXRDb2luKCkpO1xuICB9O1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxS2luZ2h0RmFsbEJ1aWxkQmFzZS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsQnVpbGRIb21lOyJdfQ==