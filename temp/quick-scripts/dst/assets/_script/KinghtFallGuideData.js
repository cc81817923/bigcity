
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallGuideData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a0c6l27ulPe7byu0e6pusU', 'KinghtFallGuideData');
// _script/KinghtFallGuideData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallGuideData = undefined;

var $z1BaseData = require("BaseData");

var $z1Config = require("Config");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var l = function l() {
  this.GroupId = 1;
  this.stepId = 0;
  this.tips = [];
  this.listTime = {};
};

var exp_KinghtFallGuideData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.aliseMap = {
      GroupId: "1",
      stepId: "2",
      tips: "3",
      listTime: "4"
    };
    e.protoId = 2;
    e.ecrypt = false;
    e.gameKey = $z1Config.GameConfig.AppCacheName + $z1KinghtFallConfig.KinghtFallParameter.AppCacheName + "GuideData";
    e.endId = 4;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new l();
    return this.data;
  };

  _ctor.prototype.initData = function () {
    this.data.stepId = 0;
  };

  _ctor.prototype.getGroupId = function () {
    return this.data.GroupId;
  };

  _ctor.prototype.setGroupId = function (t) {
    this.data.GroupId = t;
    this.saveData();
  };

  _ctor.prototype.getStepId = function () {
    return this.data.stepId;
  };

  _ctor.prototype.setStepId = function (t) {
    this.data.stepId = t;
    this.saveData();
  };

  _ctor.prototype.addCurrentId = function (t) {
    undefined === t && (t = true);
    this.data.GroupId += 1;
    t && this.saveData();
  };

  _ctor.prototype.getGuideEnd = function () {
    return this.data.GroupId >= this.endId;
  };

  _ctor.prototype.getGuideTips = function (t) {
    return this.data.tips[t] || 0;
  };

  _ctor.prototype.setGuideTips = function (t, e) {
    undefined === e && (e = 1);
    this.data.tips[t] = e;
    this.saveData();
  };

  _ctor.prototype.getTimeByKey = function (t) {
    this.data.listTime[t] || (this.data.listTime[t] = 0);
    return this.data.listTime[t];
  };

  _ctor.prototype.setTimeByKey = function (t, e) {
    this.data.listTime[t] = e;
    this.saveData();
  };

  _ctor.prototype.addTimeByKey = function (t) {
    this.data.listTime[t] || (this.data.listTime[t] = 0);
    this.data.listTime[t]++;
    this.saveData();
    return this.data.listTime[t];
  };

  return _ctor;
}($z1BaseData.BaseData);

exports.KinghtFallGuideData = exp_KinghtFallGuideData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxHdWlkZURhdGEuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJLaW5naHRGYWxsR3VpZGVEYXRhIiwidW5kZWZpbmVkIiwiJHoxQmFzZURhdGEiLCJyZXF1aXJlIiwiJHoxQ29uZmlnIiwiJHoxS2luZ2h0RmFsbENvbmZpZyIsImwiLCJHcm91cElkIiwic3RlcElkIiwidGlwcyIsImxpc3RUaW1lIiwiZXhwX0tpbmdodEZhbGxHdWlkZURhdGEiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhbGlzZU1hcCIsInByb3RvSWQiLCJlY3J5cHQiLCJnYW1lS2V5IiwiR2FtZUNvbmZpZyIsIkFwcENhY2hlTmFtZSIsIktpbmdodEZhbGxQYXJhbWV0ZXIiLCJlbmRJZCIsInByb3RvdHlwZSIsImNyZWF0ZURhdGEiLCJkYXRhIiwiaW5pdERhdGEiLCJnZXRHcm91cElkIiwic2V0R3JvdXBJZCIsInNhdmVEYXRhIiwiZ2V0U3RlcElkIiwic2V0U3RlcElkIiwiYWRkQ3VycmVudElkIiwiZ2V0R3VpZGVFbmQiLCJnZXRHdWlkZVRpcHMiLCJzZXRHdWlkZVRpcHMiLCJnZXRUaW1lQnlLZXkiLCJzZXRUaW1lQnlLZXkiLCJhZGRUaW1lQnlLZXkiLCJCYXNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxtQkFBUixHQUE4QkMsU0FBOUI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF6Qjs7QUFD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Q0QsQ0FMRDs7RUFNQSxPQUFPQyxLQUFQO0FBQ0QsQ0FwRTZCLENBb0U1QlgsV0FBVyxDQUFDdUMsUUFwRWdCLENBQTlCOztBQXFFQTNDLE9BQU8sQ0FBQ0UsbUJBQVIsR0FBOEJXLHVCQUE5QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5LaW5naHRGYWxsR3VpZGVEYXRhID0gdW5kZWZpbmVkO1xudmFyICR6MUJhc2VEYXRhID0gcmVxdWlyZShcIkJhc2VEYXRhXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyIGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuR3JvdXBJZCA9IDE7XG4gIHRoaXMuc3RlcElkID0gMDtcbiAgdGhpcy50aXBzID0gW107XG4gIHRoaXMubGlzdFRpbWUgPSB7fTtcbn07XG52YXIgZXhwX0tpbmdodEZhbGxHdWlkZURhdGEgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5hbGlzZU1hcCA9IHtcbiAgICAgIEdyb3VwSWQ6IFwiMVwiLFxuICAgICAgc3RlcElkOiBcIjJcIixcbiAgICAgIHRpcHM6IFwiM1wiLFxuICAgICAgbGlzdFRpbWU6IFwiNFwiXG4gICAgfTtcbiAgICBlLnByb3RvSWQgPSAyO1xuICAgIGUuZWNyeXB0ID0gZmFsc2U7XG4gICAgZS5nYW1lS2V5ID0gJHoxQ29uZmlnLkdhbWVDb25maWcuQXBwQ2FjaGVOYW1lICsgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLkFwcENhY2hlTmFtZSArIFwiR3VpZGVEYXRhXCI7XG4gICAgZS5lbmRJZCA9IDQ7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEgPSBuZXcgbCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEuc3RlcElkID0gMDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEdyb3VwSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5Hcm91cElkO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0R3JvdXBJZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5kYXRhLkdyb3VwSWQgPSB0O1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFN0ZXBJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN0ZXBJZDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFN0ZXBJZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5kYXRhLnN0ZXBJZCA9IHQ7XG4gICAgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkQ3VycmVudElkID0gZnVuY3Rpb24gKHQpIHtcbiAgICB1bmRlZmluZWQgPT09IHQgJiYgKHQgPSB0cnVlKTtcbiAgICB0aGlzLmRhdGEuR3JvdXBJZCArPSAxO1xuICAgIHQgJiYgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0R3VpZGVFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5Hcm91cElkID49IHRoaXMuZW5kSWQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRHdWlkZVRpcHMgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEudGlwc1t0XSB8fCAwO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0R3VpZGVUaXBzID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICB1bmRlZmluZWQgPT09IGUgJiYgKGUgPSAxKTtcbiAgICB0aGlzLmRhdGEudGlwc1t0XSA9IGU7XG4gICAgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0VGltZUJ5S2V5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmRhdGEubGlzdFRpbWVbdF0gfHwgKHRoaXMuZGF0YS5saXN0VGltZVt0XSA9IDApO1xuICAgIHJldHVybiB0aGlzLmRhdGEubGlzdFRpbWVbdF07XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRUaW1lQnlLZXkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHRoaXMuZGF0YS5saXN0VGltZVt0XSA9IGU7XG4gICAgdGhpcy5zYXZlRGF0YSgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkVGltZUJ5S2V5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmRhdGEubGlzdFRpbWVbdF0gfHwgKHRoaXMuZGF0YS5saXN0VGltZVt0XSA9IDApO1xuICAgIHRoaXMuZGF0YS5saXN0VGltZVt0XSsrO1xuICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxpc3RUaW1lW3RdO1xuICB9O1xuICByZXR1cm4gX2N0b3I7XG59KCR6MUJhc2VEYXRhLkJhc2VEYXRhKTtcbmV4cG9ydHMuS2luZ2h0RmFsbEd1aWRlRGF0YSA9IGV4cF9LaW5naHRGYWxsR3VpZGVEYXRhOyJdfQ==