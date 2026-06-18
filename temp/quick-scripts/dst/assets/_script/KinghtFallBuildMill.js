
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBuildMill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39149tY4UpGi5NbppEIigh6', 'KinghtFallBuildMill');
// _script/KinghtFallBuildMill.js

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

var $z1KinghtFallBuildBase = require("KinghtFallBuildBase");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_KinghtFallBuildMill = function (t) {
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
    $z1KinghtFallUIGame["default"].instance.initView();
    $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1KinghtFallConfig.KinghtFallUIID.UIGame, $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.Game02), this.T(this.buildCfg.name)));
  };

  _ctor.prototype.getGetCoin = function () {
    if (!this.buildInfo || !this.buildInfo.cfg) {
      return 0;
    }

    var t = this.buildInfo.cfg.Data[0];
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff26);
    e && (t += e.Pamer[0]);
    return t;
  };

  _ctor.prototype.initBuffData = function () {
    t.prototype.initBuffData.call(this);
    this.ndAddCoin && (this.ndAddCoin.getComponentInChildren(cc.Label).string = "+" + this.getGetCoin());
  };

  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallBuildBase["default"]);

exports["default"] = def_KinghtFallBuildMill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWlsZE1pbGwuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxVUlNZ3IiLCJyZXF1aXJlIiwiJHoxVXRpbHMiLCIkejFDb25maWciLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiJHoxS2luZ2h0RmFsbFRleHRDb25maWciLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxVSUdhbWUiLCIkejFLaW5naHRGYWxsQnVpbGRCYXNlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxCdWlsZE1pbGwiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZEFkZENvaW4iLCJwcm90b3R5cGUiLCJoaWRlIiwiY2FsbCIsImFjdGl2ZSIsInN0YXJ0Um91bmRHYW1lIiwic2V0TGV2ZWwiLCJidWlsZEluZm8iLCJjZmciLCJpbnN0YW50aWF0ZSIsImluc3RhbmNlIiwiY3RyVUkiLCJuZENvaW4iLCJzZXRQYXJlbnQiLCJuZEhwIiwic2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRHZXRDb2luIiwib25EZWFkIiwiaW5pdFZpZXciLCJVSU1nciIsImdldEluc3RhbmNlIiwib3BlblVJIiwiVUlJRCIsIlVJVGlwcyIsIktpbmdodEZhbGxVSUlEIiwiVUlHYW1lIiwiVXRpbHMiLCJTdHJpbmdGb3JtYXQiLCJUIiwiS2luZ2h0RmFsbFRleHRDb25maWciLCJHYW1lMDIiLCJidWlsZENmZyIsIm5hbWUiLCJEYXRhIiwiY3RyR2FtZSIsImdhbWVEYXRhIiwiZ2V0R2FtZUJ1ZmYi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RCxDQUFrRXRELGlCQUFpQixDQUFDdUQscUJBQWxCLENBQXdDQyxNQUExRyxDQUFSO0lBQ0E1QyxDQUFDLEtBQUtGLENBQUMsSUFBSUUsQ0FBQyxDQUFDNkMsS0FBRixDQUFRLENBQVIsQ0FBVixDQUFEO0lBQ0EsT0FBTy9DLENBQVA7RUFDRCxDQVJEOztFQVNBQyxLQUFLLENBQUNLLFNBQU4sQ0FBZ0IwQyxZQUFoQixHQUErQixZQUFZO0lBQ3pDaEQsQ0FBQyxDQUFDTSxTQUFGLENBQVkwQyxZQUFaLENBQXlCeEMsSUFBekIsQ0FBOEIsSUFBOUI7SUFDQSxLQUFLSCxTQUFMLEtBQW1CLEtBQUtBLFNBQUwsQ0FBZWdCLHNCQUFmLENBQXNDM0IsRUFBRSxDQUFDNEIsS0FBekMsRUFBZ0RDLE1BQWhELEdBQXlELE1BQU0sS0FBS0MsVUFBTCxFQUFsRjtFQUNELENBSEQ7O0VBSUEsT0FBTzlDLFlBQVksQ0FBQyxDQUFDa0IsV0FBRCxDQUFELEVBQWdCSyxLQUFoQixDQUFuQjtBQUNELENBOUM2QixDQThDNUJULHNCQUFzQixXQTlDTSxDQUE5Qjs7QUErQ0FWLE9BQU8sV0FBUCxHQUFrQmlCLHVCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxVUlNZ3IgPSByZXF1aXJlKFwiVUlNZ3JcIik7XG52YXIgJHoxVXRpbHMgPSByZXF1aXJlKFwiVXRpbHNcIik7XG52YXIgJHoxQ29uZmlnID0gcmVxdWlyZShcIkNvbmZpZ1wiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbFVJR2FtZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsVUlHYW1lXCIpO1xudmFyICR6MUtpbmdodEZhbGxCdWlsZEJhc2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEJ1aWxkQmFzZVwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbmNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxCdWlsZE1pbGwgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5uZEFkZENvaW4gPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdC5wcm90b3R5cGUuaGlkZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMubmRBZGRDb2luICYmICh0aGlzLm5kQWRkQ29pbi5hY3RpdmUgPSBmYWxzZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydFJvdW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0LnByb3RvdHlwZS5zdGFydFJvdW5kR2FtZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMubmRBZGRDb2luICYmICh0aGlzLm5kQWRkQ29pbi5hY3RpdmUgPSBmYWxzZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZXZlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdC5wcm90b3R5cGUuc2V0TGV2ZWwuY2FsbCh0aGlzLCBlKTtcbiAgICBpZiAodGhpcy5idWlsZEluZm8uY2ZnKSB7XG4gICAgICBpZiAoIXRoaXMubmRBZGRDb2luKSB7XG4gICAgICAgIHRoaXMubmRBZGRDb2luID0gY2MuaW5zdGFudGlhdGUoJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0clVJLm5kQ29pbiksIHRoaXMubmRBZGRDb2luLnNldFBhcmVudCh0aGlzLm5kSHApLCB0aGlzLm5kQWRkQ29pbi5zZXRQb3NpdGlvbigwLCAyMCk7XG4gICAgICB9XG4gICAgICB0aGlzLm5kQWRkQ29pbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5uZEFkZENvaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyB0aGlzLmdldEdldENvaW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZEFkZENvaW4gJiYgKHRoaXMubmRBZGRDb2luLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkRlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdC5wcm90b3R5cGUub25EZWFkLmNhbGwodGhpcyk7XG4gICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmluaXRWaWV3KCk7XG4gICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlUaXBzLCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJR2FtZSwgJHoxVXRpbHMuVXRpbHMuU3RyaW5nRm9ybWF0KHRoaXMuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5HYW1lMDIpLCB0aGlzLlQodGhpcy5idWlsZENmZy5uYW1lKSkpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0R2V0Q29pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuYnVpbGRJbmZvIHx8ICF0aGlzLmJ1aWxkSW5mby5jZmcpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgdCA9IHRoaXMuYnVpbGRJbmZvLmNmZy5EYXRhWzBdO1xuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYyNik7XG4gICAgZSAmJiAodCArPSBlLlBhbWVyWzBdKTtcbiAgICByZXR1cm4gdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRCdWZmRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0LnByb3RvdHlwZS5pbml0QnVmZkRhdGEuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm5kQWRkQ29pbiAmJiAodGhpcy5uZEFkZENvaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyB0aGlzLmdldEdldENvaW4oKSk7XG4gIH07XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFLaW5naHRGYWxsQnVpbGRCYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxCdWlsZE1pbGw7Il19