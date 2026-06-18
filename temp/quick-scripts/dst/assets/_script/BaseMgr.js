
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/BaseMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b26fp4xRlDqIrlgM98Byc9', 'BaseMgr');
// _script/BaseMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1EventMgr = require("EventMgr");

var def_BaseMgr = function () {
  function _ctor() {
    this.resArray = [];
    this.eventList = [];
    this.isDestroy = false;
  }

  _ctor.prototype.addEvent = function (t, e) {
    $z1EventMgr.EventMgr.getInstance().on(t, this, e);
    var n = new Map();
    n.set(t, e);
    this.eventList.push(n);
  };

  _ctor.prototype.sendEvent = function (t, e, n, a, o, r) {
    $z1EventMgr.EventMgr.getInstance().emit(t, e, n, a, o, r);
  };

  _ctor.prototype.addRes = function () {};

  _ctor.prototype.release = function () {};

  _ctor.prototype.setListenerUI = function () {};

  _ctor.prototype.offEvents = function () {
    var t = this;

    if (this.eventList && this.eventList.length > 0) {
      for (var e = 0; e < this.eventList.length; e++) {
        this.eventList[e].forEach(function (e, n) {
          $z1EventMgr.EventMgr.getInstance().off(n, t, e);
        });
      }

      this.eventList = null;
    }
  };

  _ctor.prototype.onDestroy = function () {
    this.isDestroy = true;
    this.release();
  };

  return _ctor;
}();

exports["default"] = def_BaseMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0Jhc2VNZ3IuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFFdmVudE1nciIsInJlcXVpcmUiLCJkZWZfQmFzZU1nciIsIl9jdG9yIiwicmVzQXJyYXkiLCJldmVudExpc3QiLCJpc0Rlc3Ryb3kiLCJwcm90b3R5cGUiLCJhZGRFdmVudCIsInQiLCJlIiwiRXZlbnRNZ3IiLCJnZXRJbnN0YW5jZSIsIm9uIiwibiIsIk1hcCIsInNldCIsInB1c2giLCJzZW5kRXZlbnQiLCJhIiwibyIsInIiLCJlbWl0IiwiYWRkUmVzIiwicmVsZWFzZSIsInNldExpc3RlbmVyVUkiLCJvZmZFdmVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwib2ZmIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF6Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsWUFBWTtFQUM1QixTQUFTQyxLQUFULEdBQWlCO0lBQ2YsS0FBS0MsUUFBTCxHQUFnQixFQUFoQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsRUFBakI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0VBQ0Q7O0VBQ0RILEtBQUssQ0FBQ0ksU0FBTixDQUFnQkMsUUFBaEIsR0FBMkIsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3pDVixXQUFXLENBQUNXLFFBQVosQ0FBcUJDLFdBQXJCLEdBQW1DQyxFQUFuQyxDQUFzQ0osQ0FBdEMsRUFBeUMsSUFBekMsRUFBK0NDLENBQS9DO0lBQ0EsSUFBSUksQ0FBQyxHQUFHLElBQUlDLEdBQUosRUFBUjtJQUNBRCxDQUFDLENBQUNFLEdBQUYsQ0FBTVAsQ0FBTixFQUFTQyxDQUFUO0lBQ0EsS0FBS0wsU0FBTCxDQUFlWSxJQUFmLENBQW9CSCxDQUFwQjtFQUNELENBTEQ7O0VBTUFYLEtBQUssQ0FBQ0ksU0FBTixDQUFnQlcsU0FBaEIsR0FBNEIsVUFBVVQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCSSxDQUFoQixFQUFtQkssQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QjtJQUN0RHJCLFdBQVcsQ0FBQ1csUUFBWixDQUFxQkMsV0FBckIsR0FBbUNVLElBQW5DLENBQXdDYixDQUF4QyxFQUEyQ0MsQ0FBM0MsRUFBOENJLENBQTlDLEVBQWlESyxDQUFqRCxFQUFvREMsQ0FBcEQsRUFBdURDLENBQXZEO0VBQ0QsQ0FGRDs7RUFHQWxCLEtBQUssQ0FBQ0ksU0FBTixDQUFnQmdCLE1BQWhCLEdBQXlCLFlBQVksQ0FBRSxDQUF2Qzs7RUFDQXBCLEtBQUssQ0FBQ0ksU0FBTixDQUFnQmlCLE9BQWhCLEdBQTBCLFlBQVksQ0FBRSxDQUF4Qzs7RUFDQXJCLEtBQUssQ0FBQ0ksU0FBTixDQUFnQmtCLGFBQWhCLEdBQWdDLFlBQVksQ0FBRSxDQUE5Qzs7RUFDQXRCLEtBQUssQ0FBQ0ksU0FBTixDQUFnQm1CLFNBQWhCLEdBQTRCLFlBQVk7SUFDdEMsSUFBSWpCLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBS0osU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWVzQixNQUFmLEdBQXdCLENBQTlDLEVBQWlEO01BQy9DLEtBQUssSUFBSWpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0wsU0FBTCxDQUFlc0IsTUFBbkMsRUFBMkNqQixDQUFDLEVBQTVDLEVBQWdEO1FBQzlDLEtBQUtMLFNBQUwsQ0FBZUssQ0FBZixFQUFrQmtCLE9BQWxCLENBQTBCLFVBQVVsQixDQUFWLEVBQWFJLENBQWIsRUFBZ0I7VUFDeENkLFdBQVcsQ0FBQ1csUUFBWixDQUFxQkMsV0FBckIsR0FBbUNpQixHQUFuQyxDQUF1Q2YsQ0FBdkMsRUFBMENMLENBQTFDLEVBQTZDQyxDQUE3QztRQUNELENBRkQ7TUFHRDs7TUFDRCxLQUFLTCxTQUFMLEdBQWlCLElBQWpCO0lBQ0Q7RUFDRixDQVZEOztFQVdBRixLQUFLLENBQUNJLFNBQU4sQ0FBZ0J1QixTQUFoQixHQUE0QixZQUFZO0lBQ3RDLEtBQUt4QixTQUFMLEdBQWlCLElBQWpCO0lBQ0EsS0FBS2tCLE9BQUw7RUFDRCxDQUhEOztFQUlBLE9BQU9yQixLQUFQO0FBQ0QsQ0FsQ2lCLEVBQWxCOztBQW1DQUwsT0FBTyxXQUFQLEdBQWtCSSxXQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFFdmVudE1nciA9IHJlcXVpcmUoXCJFdmVudE1nclwiKTtcbnZhciBkZWZfQmFzZU1nciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdGhpcy5yZXNBcnJheSA9IFtdO1xuICAgIHRoaXMuZXZlbnRMaXN0ID0gW107XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgfVxuICBfY3Rvci5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICR6MUV2ZW50TWdyLkV2ZW50TWdyLmdldEluc3RhbmNlKCkub24odCwgdGhpcywgZSk7XG4gICAgdmFyIG4gPSBuZXcgTWFwKCk7XG4gICAgbi5zZXQodCwgZSk7XG4gICAgdGhpcy5ldmVudExpc3QucHVzaChuKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNlbmRFdmVudCA9IGZ1bmN0aW9uICh0LCBlLCBuLCBhLCBvLCByKSB7XG4gICAgJHoxRXZlbnRNZ3IuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KHQsIGUsIG4sIGEsIG8sIHIpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkUmVzID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMaXN0ZW5lclVJID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5vZmZFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmV2ZW50TGlzdCAmJiB0aGlzLmV2ZW50TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuZXZlbnRMaXN0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0W2VdLmZvckVhY2goZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAkejFFdmVudE1nci5FdmVudE1nci5nZXRJbnN0YW5jZSgpLm9mZihuLCB0LCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmV2ZW50TGlzdCA9IG51bGw7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgfTtcbiAgcmV0dXJuIF9jdG9yO1xufSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0Jhc2VNZ3I7Il19