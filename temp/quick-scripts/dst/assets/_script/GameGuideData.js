
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GameGuideData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0284aK2rV1I8btCK3uenXmV', 'GameGuideData');
// _script/GameGuideData.js

"use strict";

var i;
var cc__extends = __extends;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GuideData = undefined;

var $z1BaseData = require("BaseData");

var $z1Config = require("Config");

var s = function s() {
  this.currentId = 1;
};

var exp_GuideData = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.aliseMap = {
      currentId: 1
    };
    e.protoId = 2;
    e.ecrypt = false;
    e.gameKey = $z1Config.GameConfig.AppCacheName + "guide";
    e.endId = 4;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.createData = function () {
    this.data = new s();
    return this.data;
  };

  _ctor.prototype.getCurrentId = function () {
    return this.data.currentId;
  };

  _ctor.prototype.addCurrentId = function (t) {
    undefined === t && (t = true);
    this.data.currentId += 1;
    t && this.saveData();
  };

  _ctor.prototype.getGuideEnd = function () {
    return this.data.currentId >= this.endId;
  };

  return _ctor;
}($z1BaseData.BaseData);

exports.GuideData = exp_GuideData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dhbWVHdWlkZURhdGEuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJHdWlkZURhdGEiLCJ1bmRlZmluZWQiLCIkejFCYXNlRGF0YSIsInJlcXVpcmUiLCIkejFDb25maWciLCJzIiwiY3VycmVudElkIiwiZXhwX0d1aWRlRGF0YSIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImFsaXNlTWFwIiwicHJvdG9JZCIsImVjcnlwdCIsImdhbWVLZXkiLCJHYW1lQ29uZmlnIiwiQXBwQ2FjaGVOYW1lIiwiZW5kSWQiLCJwcm90b3R5cGUiLCJjcmVhdGVEYXRhIiwiZGF0YSIsImdldEN1cnJlbnRJZCIsImFkZEN1cnJlbnRJZCIsInNhdmVEYXRhIiwiZ2V0R3VpZGVFbmQiLCJCYXNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxTQUFSLEdBQW9CQyxTQUFwQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXpCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBWTtFQUNsQixLQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0QsQ0FGRDs7QUFHQSxJQUFJQyxhQUFhLEdBQUcsVUFBVUMsQ0FBVixFQUFhO0VBQy9CLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixJQUFJQyxDQUFDLEdBQUcsU0FBU0YsQ0FBVCxJQUFjQSxDQUFDLENBQUNHLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFsRDtJQUNBRixDQUFDLENBQUNHLFFBQUYsR0FBYTtNQUNYUCxTQUFTLEVBQUU7SUFEQSxDQUFiO0lBR0FJLENBQUMsQ0FBQ0ksT0FBRixHQUFZLENBQVo7SUFDQUosQ0FBQyxDQUFDSyxNQUFGLEdBQVcsS0FBWDtJQUNBTCxDQUFDLENBQUNNLE9BQUYsR0FBWVosU0FBUyxDQUFDYSxVQUFWLENBQXFCQyxZQUFyQixHQUFvQyxPQUFoRDtJQUNBUixDQUFDLENBQUNTLEtBQUYsR0FBVSxDQUFWO0lBQ0EsT0FBT1QsQ0FBUDtFQUNEOztFQUNEaEIsV0FBVyxDQUFDZSxLQUFELEVBQVFELENBQVIsQ0FBWDs7RUFDQUMsS0FBSyxDQUFDVyxTQUFOLENBQWdCQyxVQUFoQixHQUE2QixZQUFZO0lBQ3ZDLEtBQUtDLElBQUwsR0FBWSxJQUFJakIsQ0FBSixFQUFaO0lBQ0EsT0FBTyxLQUFLaUIsSUFBWjtFQUNELENBSEQ7O0VBSUFiLEtBQUssQ0FBQ1csU0FBTixDQUFnQkcsWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxPQUFPLEtBQUtELElBQUwsQ0FBVWhCLFNBQWpCO0VBQ0QsQ0FGRDs7RUFHQUcsS0FBSyxDQUFDVyxTQUFOLENBQWdCSSxZQUFoQixHQUErQixVQUFVaEIsQ0FBVixFQUFhO0lBQzFDUCxTQUFTLEtBQUtPLENBQWQsS0FBb0JBLENBQUMsR0FBRyxJQUF4QjtJQUNBLEtBQUtjLElBQUwsQ0FBVWhCLFNBQVYsSUFBdUIsQ0FBdkI7SUFDQUUsQ0FBQyxJQUFJLEtBQUtpQixRQUFMLEVBQUw7RUFDRCxDQUpEOztFQUtBaEIsS0FBSyxDQUFDVyxTQUFOLENBQWdCTSxXQUFoQixHQUE4QixZQUFZO0lBQ3hDLE9BQU8sS0FBS0osSUFBTCxDQUFVaEIsU0FBVixJQUF1QixLQUFLYSxLQUFuQztFQUNELENBRkQ7O0VBR0EsT0FBT1YsS0FBUDtBQUNELENBN0JtQixDQTZCbEJQLFdBQVcsQ0FBQ3lCLFFBN0JNLENBQXBCOztBQThCQTdCLE9BQU8sQ0FBQ0UsU0FBUixHQUFvQk8sYUFBcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuR3VpZGVEYXRhID0gdW5kZWZpbmVkO1xudmFyICR6MUJhc2VEYXRhID0gcmVxdWlyZShcIkJhc2VEYXRhXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jdXJyZW50SWQgPSAxO1xufTtcbnZhciBleHBfR3VpZGVEYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUuYWxpc2VNYXAgPSB7XG4gICAgICBjdXJyZW50SWQ6IDFcbiAgICB9O1xuICAgIGUucHJvdG9JZCA9IDI7XG4gICAgZS5lY3J5cHQgPSBmYWxzZTtcbiAgICBlLmdhbWVLZXkgPSAkejFDb25maWcuR2FtZUNvbmZpZy5BcHBDYWNoZU5hbWUgKyBcImd1aWRlXCI7XG4gICAgZS5lbmRJZCA9IDQ7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEgPSBuZXcgcygpO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRDdXJyZW50SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJyZW50SWQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRDdXJyZW50SWQgPSBmdW5jdGlvbiAodCkge1xuICAgIHVuZGVmaW5lZCA9PT0gdCAmJiAodCA9IHRydWUpO1xuICAgIHRoaXMuZGF0YS5jdXJyZW50SWQgKz0gMTtcbiAgICB0ICYmIHRoaXMuc2F2ZURhdGEoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEd1aWRlRW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY3VycmVudElkID49IHRoaXMuZW5kSWQ7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oJHoxQmFzZURhdGEuQmFzZURhdGEpO1xuZXhwb3J0cy5HdWlkZURhdGEgPSBleHBfR3VpZGVEYXRhOyJdfQ==