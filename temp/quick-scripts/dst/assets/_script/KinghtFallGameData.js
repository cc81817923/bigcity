
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '266fdNlRXxFtLnjTS+BTN0p', 'KinghtFallGameData');
// _script/KinghtFallGameData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallGameData = undefined;

var $z1BaseData = require("BaseData");

var $z1Config = require("Config");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var l = function l() {
  this.levelNum = -1;
  this.buildingLevel = [];
  this.buffList = [];
  this.businessList = {};
};

var exp_KinghtFallGameData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.aliseMap = {};
    e.protoId = 1;
    e.ecrypt = false;
    e.gameKey = $z1Config.GameConfig.AppCacheName + $z1KinghtFallConfig.KinghtFallParameter.AppCacheName + "GameData";
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new l();
    return this.data;
  };

  _ctor.prototype.hasSave = function (t) {
    return this.data.levelNum == t;
  };

  _ctor.prototype.setNewGame = function () {
    this.data = new l();
    this.saveData();
  };

  _ctor.prototype.getRoundNum = function () {
    return this.data.roundNum;
  };

  _ctor.prototype.getCoin = function () {
    return this.data.coin;
  };

  _ctor.prototype.getBuildingLevel = function () {
    return this.data.buildingLevel;
  };

  _ctor.prototype.setLevelInfo = function (t, e, n) {
    this.data.levelNum = t;
    this.data.roundNum = e;
    this.data.coin = n;
  };

  _ctor.prototype.getBuffList = function () {
    return this.data.buffList;
  };

  _ctor.prototype.setBuffList = function (t) {
    this.data.buffList = t;
  };

  _ctor.prototype.getBuildInfoList = function () {
    return this.data.buildingLevel;
  };

  _ctor.prototype.setBuildInfoList = function (t) {
    this.data.buildingLevel = t;
    this.saveData();
  };

  _ctor.prototype.getBusinessList = function () {
    return this.data.businessList;
  };

  _ctor.prototype.setBusinessList = function (t) {
    this.data.businessList = t;
    this.saveData();
  };

  _ctor.prototype.getTaskInfo = function () {
    return this.data.taskList;
  };

  _ctor.prototype.setTaskInfo = function (t) {
    this.data.taskList = t;
    this.saveData();
  };

  return _ctor;
}($z1BaseData.BaseData);

exports.KinghtFallGameData = exp_KinghtFallGameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxHYW1lRGF0YS5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIktpbmdodEZhbGxHYW1lRGF0YSIsInVuZGVmaW5lZCIsIiR6MUJhc2VEYXRhIiwicmVxdWlyZSIsIiR6MUNvbmZpZyIsIiR6MUtpbmdodEZhbGxDb25maWciLCJsIiwibGV2ZWxOdW0iLCJidWlsZGluZ0xldmVsIiwiYnVmZkxpc3QiLCJidXNpbmVzc0xpc3QiLCJleHBfS2luZ2h0RmFsbEdhbWVEYXRhIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYWxpc2VNYXAiLCJwcm90b0lkIiwiZWNyeXB0IiwiZ2FtZUtleSIsIkdhbWVDb25maWciLCJBcHBDYWNoZU5hbWUiLCJLaW5naHRGYWxsUGFyYW1ldGVyIiwicHJvdG90eXBlIiwiY3JlYXRlRGF0YSIsImRhdGEiLCJoYXNTYXZlIiwic2V0TmV3R2FtZSIsInNhdmVEYXRhIiwiZ2V0Um91bmROdW0iLCJyb3VuZE51bSIsImdldENvaW4iLCJjb2luIiwiZ2V0QnVpbGRpbmdMZXZlbCIsInNldExldmVsSW5mbyIsIm4iLCJnZXRCdWZmTGlzdCIsInNldEJ1ZmZMaXN0IiwiZ2V0QnVpbGRJbmZvTGlzdCIsInNldEJ1aWxkSW5mb0xpc3QiLCJnZXRCdXNpbmVzc0xpc3QiLCJzZXRCdXNpbmVzc0xpc3QiLCJnZXRUYXNrSW5mbyIsInRhc2tMaXN0Iiwic2V0VGFza0luZm8iLCJCYXNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7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QUNELENBRkQ7O0VBR0FDLEtBQUssQ0FBQ1csU0FBTixDQUFnQmUsZ0JBQWhCLEdBQW1DLFlBQVk7SUFDN0MsT0FBTyxLQUFLYixJQUFMLENBQVVsQixhQUFqQjtFQUNELENBRkQ7O0VBR0FLLEtBQUssQ0FBQ1csU0FBTixDQUFnQmdCLGdCQUFoQixHQUFtQyxVQUFVNUIsQ0FBVixFQUFhO0lBQzlDLEtBQUtjLElBQUwsQ0FBVWxCLGFBQVYsR0FBMEJJLENBQTFCO0lBQ0EsS0FBS2lCLFFBQUw7RUFDRCxDQUhEOztFQUlBaEIsS0FBSyxDQUFDVyxTQUFOLENBQWdCaUIsZUFBaEIsR0FBa0MsWUFBWTtJQUM1QyxPQUFPLEtBQUtmLElBQUwsQ0FBVWhCLFlBQWpCO0VBQ0QsQ0FGRDs7RUFHQUcsS0FBSyxDQUFDVyxTQUFOLENBQWdCa0IsZUFBaEIsR0FBa0MsVUFBVTlCLENBQVYsRUFBYTtJQUM3QyxLQUFLYyxJQUFMLENBQVVoQixZQUFWLEdBQXlCRSxDQUF6QjtJQUNBLEtBQUtpQixRQUFMO0VBQ0QsQ0FIRDs7RUFJQWhCLEtBQUssQ0FBQ1csU0FBTixDQUFnQm1CLFdBQWhCLEdBQThCLFlBQVk7SUFDeEMsT0FBTyxLQUFLakIsSUFBTCxDQUFVa0IsUUFBakI7RUFDRCxDQUZEOztFQUdBL0IsS0FBSyxDQUFDVyxTQUFOLENBQWdCcUIsV0FBaEIsR0FBOEIsVUFBVWpDLENBQVYsRUFBYTtJQUN6QyxLQUFLYyxJQUFMLENBQVVrQixRQUFWLEdBQXFCaEMsQ0FBckI7SUFDQSxLQUFLaUIsUUFBTDtFQUNELENBSEQ7O0VBSUEsT0FBT2hCLEtBQVA7QUFDRCxDQS9ENEIsQ0ErRDNCWCxXQUFXLENBQUM0QyxRQS9EZSxDQUE3Qjs7QUFnRUFoRCxPQUFPLENBQUNFLGtCQUFSLEdBQTZCVyxzQkFBN0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuS2luZ2h0RmFsbEdhbWVEYXRhID0gdW5kZWZpbmVkO1xudmFyICR6MUJhc2VEYXRhID0gcmVxdWlyZShcIkJhc2VEYXRhXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyIGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGV2ZWxOdW0gPSAtMTtcbiAgdGhpcy5idWlsZGluZ0xldmVsID0gW107XG4gIHRoaXMuYnVmZkxpc3QgPSBbXTtcbiAgdGhpcy5idXNpbmVzc0xpc3QgPSB7fTtcbn07XG52YXIgZXhwX0tpbmdodEZhbGxHYW1lRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmFsaXNlTWFwID0ge307XG4gICAgZS5wcm90b0lkID0gMTtcbiAgICBlLmVjcnlwdCA9IGZhbHNlO1xuICAgIGUuZ2FtZUtleSA9ICR6MUNvbmZpZy5HYW1lQ29uZmlnLkFwcENhY2hlTmFtZSArICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5BcHBDYWNoZU5hbWUgKyBcIkdhbWVEYXRhXCI7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEgPSBuZXcgbCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5oYXNTYXZlID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxldmVsTnVtID09IHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXROZXdHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YSA9IG5ldyBsKCk7XG4gICAgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0Um91bmROdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5yb3VuZE51bTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldENvaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jb2luO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0QnVpbGRpbmdMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmJ1aWxkaW5nTGV2ZWw7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZXZlbEluZm8gPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgIHRoaXMuZGF0YS5sZXZlbE51bSA9IHQ7XG4gICAgdGhpcy5kYXRhLnJvdW5kTnVtID0gZTtcbiAgICB0aGlzLmRhdGEuY29pbiA9IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRCdWZmTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmJ1ZmZMaXN0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0QnVmZkxpc3QgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuZGF0YS5idWZmTGlzdCA9IHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRCdWlsZEluZm9MaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuYnVpbGRpbmdMZXZlbDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldEJ1aWxkSW5mb0xpc3QgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuZGF0YS5idWlsZGluZ0xldmVsID0gdDtcbiAgICB0aGlzLnNhdmVEYXRhKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRCdXNpbmVzc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5idXNpbmVzc0xpc3Q7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRCdXNpbmVzc0xpc3QgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuZGF0YS5idXNpbmVzc0xpc3QgPSB0O1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFRhc2tJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEudGFza0xpc3Q7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRUYXNrSW5mbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5kYXRhLnRhc2tMaXN0ID0gdDtcbiAgICB0aGlzLnNhdmVEYXRhKCk7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oJHoxQmFzZURhdGEuQmFzZURhdGEpO1xuZXhwb3J0cy5LaW5naHRGYWxsR2FtZURhdGEgPSBleHBfS2luZ2h0RmFsbEdhbWVEYXRhOyJdfQ==