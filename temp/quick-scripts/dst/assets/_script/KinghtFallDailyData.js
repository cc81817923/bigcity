
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallDailyData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0eb5c+FWKVPnZZmlmVumw7Y', 'KinghtFallDailyData');
// _script/KinghtFallDailyData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallDailyData = undefined;

var $z1BaseData = require("BaseData");

var $z1Config = require("Config");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var c = function c() {
  this.time = 0;
  this.signDay = 0;
  this.signReward = 0;
  this.onlineTime = 0;
  this.onlineTimeReward = [];
  this.subGameTime = [];
  this.vesion = 1;
};

var exp_KinghtFallDailyData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ecrypt = true;
    e.aliseMap = {
      time: "1",
      signDay: "2",
      signReward: "3",
      onlineTime: "4",
      onlineTimeReward: "5",
      subGameTime: "6"
    };
    e.gameKey = $z1Config.GameConfig.AppCacheName + $z1KinghtFallConfig.KinghtFallParameter.AppCacheName + "DailyData";
    e.vesion = 2;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new c();
    return this.data;
  };

  _ctor.prototype.initData = function () {
    var t = false;

    if (this.data.vesion < this.vesion) {
      switch (this.data.vesion) {
        case 1:
          this.data.subGameTime = [];
      }

      this.data.vesion = this.vesion;
      t = true;
    }

    if (this.data.signDay < 0 || this.data.signDay >= 7) {
      this.data.signDay = 0;
      t = true;
    }

    if (this.data.time > Date.now()) {
      this.data.time = Date.now();
      t = true;
    }

    if (!$z1KinghtFallModle["default"].getInstance().compareIsToday(this.data.time)) {
      this.initDailyData();
      t = true;
    }

    t && this.saveData();
  };

  _ctor.prototype.initDailyData = function () {
    this.data.time = Date.now();

    if (this.data.signReward > 0) {
      this.data.signDay++;
      this.data.signReward = 0;
    }

    this.data.onlineTime = 0;
    this.data.onlineTimeReward = [];
  };

  _ctor.prototype.getSignDay = function () {
    return this.data.signDay;
  };

  _ctor.prototype.getSignReward = function () {
    return this.data.signReward;
  };

  _ctor.prototype.sign = function (t) {
    var e = 1 << t;
    this.data.signReward += e;
    this.saveData();
  };

  _ctor.prototype.getOnlineTime = function () {
    return this.data.onlineTime;
  };

  _ctor.prototype.addOnlineTime = function (t) {
    undefined === t && (t = 1);
    this.data.onlineTime += t;
    this.saveData();
    return this.data.onlineTime;
  };

  _ctor.prototype.getOnlineTimeReward = function (t) {
    return this.data.onlineTimeReward[t - 1];
  };

  _ctor.prototype.setOnlineTimeReward = function (t) {
    this.data.onlineTimeReward[t - 1] = 1;
    this.saveData();
  };

  _ctor.prototype.setSubTimeByIndex = function (t, e) {
    this.data.subGameTime || (this.data.subGameTime = []);

    if (this.data.subGameTime.length < t + 1) {
      this.data.subGameTime.push(e);
    } else {
      this.data.subGameTime[t] = e;
    }

    this.saveData();
  };

  _ctor.prototype.getSubTimeByIndex = function (t) {
    if (this.data.subGameTime) {
      if (this.data.subGameTime.length < t) {
        return -1;
      } else {
        return this.data.subGameTime[t];
      }
    } else {
      return -1;
    }
  };

  return _ctor;
}($z1BaseData.BaseData);

exports.KinghtFallDailyData = exp_KinghtFallDailyData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxEYWlseURhdGEuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJLaW5naHRGYWxsRGFpbHlEYXRhIiwidW5kZWZpbmVkIiwiJHoxQmFzZURhdGEiLCJyZXF1aXJlIiwiJHoxQ29uZmlnIiwiJHoxS2luZ2h0RmFsbE1vZGxlIiwiJHoxS2luZ2h0RmFsbENvbmZpZyIsImMiLCJ0aW1lIiwic2lnbkRheSIsInNpZ25SZXdhcmQiLCJvbmxpbmVUaW1lIiwib25saW5lVGltZVJld2FyZCIsInN1YkdhbWVUaW1lIiwidmVzaW9uIiwiZXhwX0tpbmdodEZhbGxEYWlseURhdGEiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlY3J5cHQiLCJhbGlzZU1hcCIsImdhbWVLZXkiLCJHYW1lQ29uZmlnIiwiQXBwQ2FjaGVOYW1lIiwiS2luZ2h0RmFsbFBhcmFtZXRlciIsInByb3RvdHlwZSIsImNyZWF0ZURhdGEiLCJkYXRhIiwiaW5pdERhdGEiLCJEYXRlIiwibm93IiwiZ2V0SW5zdGFuY2UiLCJjb21wYXJlSXNUb2RheSIsImluaXREYWlseURhdGEiLCJzYXZlRGF0YSIsImdldFNpZ25EYXkiLCJnZXRTaWduUmV3YXJkIiwic2lnbiIsImdldE9ubGluZVRpbWUiLCJhZGRPbmxpbmVUaW1lIiwiZ2V0T25saW5lVGltZVJld2FyZCIsInNldE9ubGluZVRpbWVSZXdhcmQiLCJzZXRTdWJUaW1lQnlJbmRleCIsImxlbmd0aCIsInB1c2giLCJnZXRTdWJUaW1lQnlJbmRleCIsIkJhc2VEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0Is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a0IsUUFBTDtFQUNELENBUkQ7O0VBU0FuQixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JvQixpQkFBaEIsR0FBb0MsVUFBVS9CLENBQVYsRUFBYTtJQUMvQyxJQUFJLEtBQUthLElBQUwsQ0FBVWhCLFdBQWQsRUFBMkI7TUFDekIsSUFBSSxLQUFLZ0IsSUFBTCxDQUFVaEIsV0FBVixDQUFzQmdDLE1BQXRCLEdBQStCN0IsQ0FBbkMsRUFBc0M7UUFDcEMsT0FBTyxDQUFDLENBQVI7TUFDRCxDQUZELE1BRU87UUFDTCxPQUFPLEtBQUthLElBQUwsQ0FBVWhCLFdBQVYsQ0FBc0JHLENBQXRCLENBQVA7TUFDRDtJQUNGLENBTkQsTUFNTztNQUNMLE9BQU8sQ0FBQyxDQUFSO0lBQ0Q7RUFDRixDQVZEOztFQVdBLE9BQU9DLEtBQVA7QUFDRCxDQXRHNkIsQ0FzRzVCZixXQUFXLENBQUM4QyxRQXRHZ0IsQ0FBOUI7O0FBdUdBbEQsT0FBTyxDQUFDRSxtQkFBUixHQUE4QmUsdUJBQTlCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLktpbmdodEZhbGxEYWlseURhdGEgPSB1bmRlZmluZWQ7XG52YXIgJHoxQmFzZURhdGEgPSByZXF1aXJlKFwiQmFzZURhdGFcIik7XG52YXIgJHoxQ29uZmlnID0gcmVxdWlyZShcIkNvbmZpZ1wiKTtcbnZhciAkejFLaW5naHRGYWxsTW9kbGUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbE1vZGxlXCIpO1xudmFyICR6MUtpbmdodEZhbGxDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbENvbmZpZ1wiKTtcbnZhciBjID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRpbWUgPSAwO1xuICB0aGlzLnNpZ25EYXkgPSAwO1xuICB0aGlzLnNpZ25SZXdhcmQgPSAwO1xuICB0aGlzLm9ubGluZVRpbWUgPSAwO1xuICB0aGlzLm9ubGluZVRpbWVSZXdhcmQgPSBbXTtcbiAgdGhpcy5zdWJHYW1lVGltZSA9IFtdO1xuICB0aGlzLnZlc2lvbiA9IDE7XG59O1xudmFyIGV4cF9LaW5naHRGYWxsRGFpbHlEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuZWNyeXB0ID0gdHJ1ZTtcbiAgICBlLmFsaXNlTWFwID0ge1xuICAgICAgdGltZTogXCIxXCIsXG4gICAgICBzaWduRGF5OiBcIjJcIixcbiAgICAgIHNpZ25SZXdhcmQ6IFwiM1wiLFxuICAgICAgb25saW5lVGltZTogXCI0XCIsXG4gICAgICBvbmxpbmVUaW1lUmV3YXJkOiBcIjVcIixcbiAgICAgIHN1YkdhbWVUaW1lOiBcIjZcIlxuICAgIH07XG4gICAgZS5nYW1lS2V5ID0gJHoxQ29uZmlnLkdhbWVDb25maWcuQXBwQ2FjaGVOYW1lICsgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLkFwcENhY2hlTmFtZSArIFwiRGFpbHlEYXRhXCI7XG4gICAgZS52ZXNpb24gPSAyO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLmNyZWF0ZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kYXRhID0gbmV3IGMoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5kYXRhLnZlc2lvbiA8IHRoaXMudmVzaW9uKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuZGF0YS52ZXNpb24pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGF0YS5zdWJHYW1lVGltZSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhLnZlc2lvbiA9IHRoaXMudmVzaW9uO1xuICAgICAgdCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuc2lnbkRheSA8IDAgfHwgdGhpcy5kYXRhLnNpZ25EYXkgPj0gNykge1xuICAgICAgdGhpcy5kYXRhLnNpZ25EYXkgPSAwO1xuICAgICAgdCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEudGltZSA+IERhdGUubm93KCkpIHtcbiAgICAgIHRoaXMuZGF0YS50aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoISR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkuY29tcGFyZUlzVG9kYXkodGhpcy5kYXRhLnRpbWUpKSB7XG4gICAgICB0aGlzLmluaXREYWlseURhdGEoKTtcbiAgICAgIHQgPSB0cnVlO1xuICAgIH1cbiAgICB0ICYmIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXREYWlseURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kYXRhLnRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICh0aGlzLmRhdGEuc2lnblJld2FyZCA+IDApIHtcbiAgICAgIHRoaXMuZGF0YS5zaWduRGF5Kys7XG4gICAgICB0aGlzLmRhdGEuc2lnblJld2FyZCA9IDA7XG4gICAgfVxuICAgIHRoaXMuZGF0YS5vbmxpbmVUaW1lID0gMDtcbiAgICB0aGlzLmRhdGEub25saW5lVGltZVJld2FyZCA9IFtdO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0U2lnbkRheSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNpZ25EYXk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRTaWduUmV3YXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc2lnblJld2FyZDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNpZ24gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gMSA8PCB0O1xuICAgIHRoaXMuZGF0YS5zaWduUmV3YXJkICs9IGU7XG4gICAgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0T25saW5lVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9ubGluZVRpbWU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRPbmxpbmVUaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICB1bmRlZmluZWQgPT09IHQgJiYgKHQgPSAxKTtcbiAgICB0aGlzLmRhdGEub25saW5lVGltZSArPSB0O1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9ubGluZVRpbWU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRPbmxpbmVUaW1lUmV3YXJkID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9ubGluZVRpbWVSZXdhcmRbdCAtIDFdO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0T25saW5lVGltZVJld2FyZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5kYXRhLm9ubGluZVRpbWVSZXdhcmRbdCAtIDFdID0gMTtcbiAgICB0aGlzLnNhdmVEYXRhKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRTdWJUaW1lQnlJbmRleCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdGhpcy5kYXRhLnN1YkdhbWVUaW1lIHx8ICh0aGlzLmRhdGEuc3ViR2FtZVRpbWUgPSBbXSk7XG4gICAgaWYgKHRoaXMuZGF0YS5zdWJHYW1lVGltZS5sZW5ndGggPCB0ICsgMSkge1xuICAgICAgdGhpcy5kYXRhLnN1YkdhbWVUaW1lLnB1c2goZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5zdWJHYW1lVGltZVt0XSA9IGU7XG4gICAgfVxuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFN1YlRpbWVCeUluZGV4ID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodGhpcy5kYXRhLnN1YkdhbWVUaW1lKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLnN1YkdhbWVUaW1lLmxlbmd0aCA8IHQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zdWJHYW1lVGltZVt0XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9jdG9yO1xufSgkejFCYXNlRGF0YS5CYXNlRGF0YSk7XG5leHBvcnRzLktpbmdodEZhbGxEYWlseURhdGEgPSBleHBfS2luZ2h0RmFsbERhaWx5RGF0YTsiXX0=