
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBuildInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c133yspbxCkbe/WlKJFCYO', 'KinghtFallBuildInfo');
// _script/KinghtFallBuildInfo.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallBuildInfo = undefined;

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var exp_KinghtFallBuildInfo = function () {
  function _ctor(t, e) {
    this.canUpgrade = false;
    this.standTime = 0;
    this.hp = 0;
    this.hpMax = 0;
    this.BuildID = t;
    this.standTime = 0;
    this.cfg = e;

    if (e) {
      if (e.BranchBuild && e.BranchBuild.length > 0) {
        if (t == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter) {
          this.canUpgrade = true;
        } else {
          var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getBaseLevel();
          this.canUpgrade = n > e.level;
        }
      } else {
        this.canUpgrade = false;
      }

      this.initBuffData();
    } else {
      this.canUpgrade = true;
    }
  }

  _ctor.prototype.initBuffData = function () {
    if (this.cfg) {
      var t = 1;

      if (this.BuildID == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower) {
        var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff39);
        e && (t += e.Pamer[0]);
        var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff55);
        n && (t += n.Pamer[0]);
      }

      var o = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff46);
      o && (t -= o.Pamer[1]);
      var r = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff48);

      if (r) {
        switch (this.BuildID) {
          case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Wall:
            t += r.Pamer[0];
            break;

          case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter:
            t -= r.Pamer[1];
        }
      }

      var s = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.talentAdd[$z1KinghtFallEnum.KinghtFallEnumTalentCfg.TalenType09];

      if (s) {
        for (var l = 0; l < s.length; l++) {
          t += s[l][0];
        }
      }

      this.BuildID == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Wall && $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.FortDurableStone] && (t += $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.FortDurableStone][0]);
      this.hpMax = this.cfg.Hp * t;
      this.hp = this.hpMax;
    }
  };

  return _ctor;
}();

exports.KinghtFallBuildInfo = exp_KinghtFallBuildInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWlsZEluZm8uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJLaW5naHRGYWxsQnVpbGRJbmZvIiwidW5kZWZpbmVkIiwiJHoxS2luZ2h0RmFsbEVudW0iLCJyZXF1aXJlIiwiJHoxS2luZ2h0RmFsbFVJR2FtZSIsImV4cF9LaW5naHRGYWxsQnVpbGRJbmZvIiwiX2N0b3IiLCJ0IiwiZSIsImNhblVwZ3JhZGUiLCJzdGFuZFRpbWUiLCJocCIsImhwTWF4IiwiQnVpbGRJRCIsImNmZyIsIkJyYW5jaEJ1aWxkIiwibGVuZ3RoIiwiS2luZ2h0RmFsbEVudW1CdWlsZEVudW0iLCJDYXN0bGVDZW50ZXIiLCJuIiwiaW5zdGFuY2UiLCJjdHJHYW1lIiwiZ2FtZURhdGEiLCJnZXRCYXNlTGV2ZWwiLCJsZXZlbCIsImluaXRCdWZmRGF0YSIsInByb3RvdHlwZSIsIkFycm93VG93ZXIiLCJnZXRHYW1lQnVmZiIsIktpbmdodEZhbGxFbnVtQnVmZkNmZyIsIkJ1ZmYzOSIsIlBhbWVyIiwiQnVmZjU1IiwibyIsIkJ1ZmY0NiIsInIiLCJCdWZmNDgiLCJXYWxsIiwicyIsInRhbGVudEFkZCIsIktpbmdodEZhbGxFbnVtVGFsZW50Q2ZnIiwiVGFsZW5UeXBlMDkiLCJsIiwidHJlYXN1cmVBZGQiLCJLaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bSIsIkZvcnREdXJhYmxlU3RvbmUiLCJIcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0FELE9BQU8sQ0FBQ0UsbUJBQVIsR0FBOEJDLFNBQTlCOztBQUNBLElBQUlDLGlCQUFpQixHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBL0I7O0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUdELE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJRSx1QkFBdUIsR0FBRyxZQUFZO0VBQ3hDLFNBQVNDLEtBQVQsQ0FBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI7SUFDbkIsS0FBS0MsVUFBTCxHQUFrQixLQUFsQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBakI7SUFDQSxLQUFLQyxFQUFMLEdBQVUsQ0FBVjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsT0FBTCxHQUFlTixDQUFmO0lBQ0EsS0FBS0csU0FBTCxHQUFpQixDQUFqQjtJQUNBLEtBQUtJLEdBQUwsR0FBV04sQ0FBWDs7SUFDQSxJQUFJQSxDQUFKLEVBQU87TUFDTCxJQUFJQSxDQUFDLENBQUNPLFdBQUYsSUFBaUJQLENBQUMsQ0FBQ08sV0FBRixDQUFjQyxNQUFkLEdBQXVCLENBQTVDLEVBQStDO1FBQzdDLElBQUlULENBQUMsSUFBSUwsaUJBQWlCLENBQUNlLHVCQUFsQixDQUEwQ0MsWUFBbkQsRUFBaUU7VUFDL0QsS0FBS1QsVUFBTCxHQUFrQixJQUFsQjtRQUNELENBRkQsTUFFTztVQUNMLElBQUlVLENBQUMsR0FBR2YsbUJBQW1CLFdBQW5CLENBQTRCZ0IsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxRQUE3QyxDQUFzREMsWUFBdEQsRUFBUjtVQUNBLEtBQUtkLFVBQUwsR0FBa0JVLENBQUMsR0FBR1gsQ0FBQyxDQUFDZ0IsS0FBeEI7UUFDRDtNQUNGLENBUEQsTUFPTztRQUNMLEtBQUtmLFVBQUwsR0FBa0IsS0FBbEI7TUFDRDs7TUFDRCxLQUFLZ0IsWUFBTDtJQUNELENBWkQsTUFZTztNQUNMLEtBQUtoQixVQUFMLEdBQWtCLElBQWxCO0lBQ0Q7RUFDRjs7RUFDREgsS0FBSyxDQUFDb0IsU0FBTixDQUFnQkQsWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxJQUFJLEtBQUtYLEdBQVQsRUFBYztNQUNaLElBQUlQLENBQUMsR0FBRyxDQUFSOztNQUNBLElBQUksS0FBS00sT0FBTCxJQUFnQlgsaUJBQWlCLENBQUNlLHVCQUFsQixDQUEwQ1UsVUFBOUQsRUFBMEU7UUFDeEUsSUFBSW5CLENBQUMsR0FBR0osbUJBQW1CLFdBQW5CLENBQTRCZ0IsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxRQUE3QyxDQUFzRE0sV0FBdEQsQ0FBa0UxQixpQkFBaUIsQ0FBQzJCLHFCQUFsQixDQUF3Q0MsTUFBMUcsQ0FBUjtRQUNBdEIsQ0FBQyxLQUFLRCxDQUFDLElBQUlDLENBQUMsQ0FBQ3VCLEtBQUYsQ0FBUSxDQUFSLENBQVYsQ0FBRDtRQUNBLElBQUlaLENBQUMsR0FBR2YsbUJBQW1CLFdBQW5CLENBQTRCZ0IsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxRQUE3QyxDQUFzRE0sV0FBdEQsQ0FBa0UxQixpQkFBaUIsQ0FBQzJCLHFCQUFsQixDQUF3Q0csTUFBMUcsQ0FBUjtRQUNBYixDQUFDLEtBQUtaLENBQUMsSUFBSVksQ0FBQyxDQUFDWSxLQUFGLENBQVEsQ0FBUixDQUFWLENBQUQ7TUFDRDs7TUFDRCxJQUFJRSxDQUFDLEdBQUc3QixtQkFBbUIsV0FBbkIsQ0FBNEJnQixRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNDLFFBQTdDLENBQXNETSxXQUF0RCxDQUFrRTFCLGlCQUFpQixDQUFDMkIscUJBQWxCLENBQXdDSyxNQUExRyxDQUFSO01BQ0FELENBQUMsS0FBSzFCLENBQUMsSUFBSTBCLENBQUMsQ0FBQ0YsS0FBRixDQUFRLENBQVIsQ0FBVixDQUFEO01BQ0EsSUFBSUksQ0FBQyxHQUFHL0IsbUJBQW1CLFdBQW5CLENBQTRCZ0IsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxRQUE3QyxDQUFzRE0sV0FBdEQsQ0FBa0UxQixpQkFBaUIsQ0FBQzJCLHFCQUFsQixDQUF3Q08sTUFBMUcsQ0FBUjs7TUFDQSxJQUFJRCxDQUFKLEVBQU87UUFDTCxRQUFRLEtBQUt0QixPQUFiO1VBQ0UsS0FBS1gsaUJBQWlCLENBQUNlLHVCQUFsQixDQUEwQ29CLElBQS9DO1lBQ0U5QixDQUFDLElBQUk0QixDQUFDLENBQUNKLEtBQUYsQ0FBUSxDQUFSLENBQUw7WUFDQTs7VUFDRixLQUFLN0IsaUJBQWlCLENBQUNlLHVCQUFsQixDQUEwQ0MsWUFBL0M7WUFDRVgsQ0FBQyxJQUFJNEIsQ0FBQyxDQUFDSixLQUFGLENBQVEsQ0FBUixDQUFMO1FBTEo7TUFPRDs7TUFDRCxJQUFJTyxDQUFDLEdBQUdsQyxtQkFBbUIsV0FBbkIsQ0FBNEJnQixRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNDLFFBQTdDLENBQXNEaUIsU0FBdEQsQ0FBZ0VyQyxpQkFBaUIsQ0FBQ3NDLHVCQUFsQixDQUEwQ0MsV0FBMUcsQ0FBUjs7TUFDQSxJQUFJSCxDQUFKLEVBQU87UUFDTCxLQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLENBQUMsQ0FBQ3RCLE1BQXRCLEVBQThCMEIsQ0FBQyxFQUEvQixFQUFtQztVQUNqQ25DLENBQUMsSUFBSStCLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELENBQUssQ0FBTCxDQUFMO1FBQ0Q7TUFDRjs7TUFDRCxLQUFLN0IsT0FBTCxJQUFnQlgsaUJBQWlCLENBQUNlLHVCQUFsQixDQUEwQ29CLElBQTFELElBQWtFakMsbUJBQW1CLFdBQW5CLENBQTRCZ0IsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxRQUE3QyxDQUFzRHFCLFdBQXRELENBQWtFekMsaUJBQWlCLENBQUMwQywwQkFBbEIsQ0FBNkNDLGdCQUEvRyxDQUFsRSxLQUF1TXRDLENBQUMsSUFBSUgsbUJBQW1CLFdBQW5CLENBQTRCZ0IsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDQyxRQUE3QyxDQUFzRHFCLFdBQXRELENBQWtFekMsaUJBQWlCLENBQUMwQywwQkFBbEIsQ0FBNkNDLGdCQUEvRyxFQUFpSSxDQUFqSSxDQUE1TTtNQUNBLEtBQUtqQyxLQUFMLEdBQWEsS0FBS0UsR0FBTCxDQUFTZ0MsRUFBVCxHQUFjdkMsQ0FBM0I7TUFDQSxLQUFLSSxFQUFMLEdBQVUsS0FBS0MsS0FBZjtJQUNEO0VBQ0YsQ0EvQkQ7O0VBZ0NBLE9BQU9OLEtBQVA7QUFDRCxDQTFENkIsRUFBOUI7O0FBMkRBUixPQUFPLENBQUNFLG1CQUFSLEdBQThCSyx1QkFBOUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLktpbmdodEZhbGxCdWlsZEluZm8gPSB1bmRlZmluZWQ7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbFVJR2FtZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsVUlHYW1lXCIpO1xudmFyIGV4cF9LaW5naHRGYWxsQnVpbGRJbmZvID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3Rvcih0LCBlKSB7XG4gICAgdGhpcy5jYW5VcGdyYWRlID0gZmFsc2U7XG4gICAgdGhpcy5zdGFuZFRpbWUgPSAwO1xuICAgIHRoaXMuaHAgPSAwO1xuICAgIHRoaXMuaHBNYXggPSAwO1xuICAgIHRoaXMuQnVpbGRJRCA9IHQ7XG4gICAgdGhpcy5zdGFuZFRpbWUgPSAwO1xuICAgIHRoaXMuY2ZnID0gZTtcbiAgICBpZiAoZSkge1xuICAgICAgaWYgKGUuQnJhbmNoQnVpbGQgJiYgZS5CcmFuY2hCdWlsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0ID09ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkNhc3RsZUNlbnRlcikge1xuICAgICAgICAgIHRoaXMuY2FuVXBncmFkZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG4gPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRCYXNlTGV2ZWwoKTtcbiAgICAgICAgICB0aGlzLmNhblVwZ3JhZGUgPSBuID4gZS5sZXZlbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW5VcGdyYWRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRCdWZmRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhblVwZ3JhZGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBfY3Rvci5wcm90b3R5cGUuaW5pdEJ1ZmZEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNmZykge1xuICAgICAgdmFyIHQgPSAxO1xuICAgICAgaWYgKHRoaXMuQnVpbGRJRCA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5BcnJvd1Rvd2VyKSB7XG4gICAgICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYzOSk7XG4gICAgICAgIGUgJiYgKHQgKz0gZS5QYW1lclswXSk7XG4gICAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY1NSk7XG4gICAgICAgIG4gJiYgKHQgKz0gbi5QYW1lclswXSk7XG4gICAgICB9XG4gICAgICB2YXIgbyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDYpO1xuICAgICAgbyAmJiAodCAtPSBvLlBhbWVyWzFdKTtcbiAgICAgIHZhciByID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY0OCk7XG4gICAgICBpZiAocikge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuQnVpbGRJRCkge1xuICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uV2FsbDpcbiAgICAgICAgICAgIHQgKz0gci5QYW1lclswXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQ2FzdGxlQ2VudGVyOlxuICAgICAgICAgICAgdCAtPSByLlBhbWVyWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgcyA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRhbGVudEFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRhbGVudENmZy5UYWxlblR5cGUwOV07XG4gICAgICBpZiAocykge1xuICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICB0ICs9IHNbbF1bMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuQnVpbGRJRCA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5XYWxsICYmICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLkZvcnREdXJhYmxlU3RvbmVdICYmICh0ICs9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLkZvcnREdXJhYmxlU3RvbmVdWzBdKTtcbiAgICAgIHRoaXMuaHBNYXggPSB0aGlzLmNmZy5IcCAqIHQ7XG4gICAgICB0aGlzLmhwID0gdGhpcy5ocE1heDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuS2luZ2h0RmFsbEJ1aWxkSW5mbyA9IGV4cF9LaW5naHRGYWxsQnVpbGRJbmZvOyJdfQ==