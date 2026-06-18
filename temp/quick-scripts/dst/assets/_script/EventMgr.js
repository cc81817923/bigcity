
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1679c2ub2tJ4L/kArQZViBz', 'EventMgr');
// _script/EventMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventMgr = exports.Listener = undefined;

var exp_Listener = function () {
  function _ctor(t, e) {
    this.mListener = e;
    this.mtarget = t;
  }

  Object.defineProperty(_ctor.prototype, "listener", {
    get: function get() {
      return this.mListener;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(_ctor.prototype, "target", {
    get: function get() {
      return this.mtarget;
    },
    enumerable: false,
    configurable: true
  });
  return _ctor;
}();

exports.Listener = exp_Listener;

var exp_EventMgr = function () {
  function t() {
    this.global_event_list = new Array();
  }

  t.getInstance = function () {
    null == this.instance && (this.instance = new t());
    return this.instance;
  };

  t.prototype.getEventNum = function (t) {
    if (this.global_event_list[t]) {
      return this.global_event_list[t].length;
    } else {
      return 0;
    }
  };

  t.prototype.on = function (t, e, n, a) {
    undefined === a && (a = false);

    if (null != t && null != n) {
      null == this.global_event_list[t] && (this.global_event_list[t] = new Array());

      if (!a && this.global_event_list[t]) {
        for (var o = 0; o < this.global_event_list[t].length; o++) {
          if (this.global_event_list[t][o].listener == n && this.global_event_list[t][o].target == e) {
            return;
          }
        }
      }

      var r = new exp_Listener(e, n);
      this.global_event_list[t].push(r);
    } else {
      console.error("RegistEvent Error");
    }
  };

  t.prototype.off = function (t, e, n) {
    if (null != t && null != n && null != this.global_event_list[t]) {
      for (var i = 0; i < this.global_event_list[t].length; i++) {
        this.global_event_list[t][i].listener == n && this.global_event_list[t][i].target == e && this.global_event_list[t].splice(i, 1);
      }
    }
  };

  t.prototype.removeAll = function () {
    this.global_event_list = new Array();
  };

  t.prototype.emit = function (t, e, n, i, a, o, r) {
    if (null != t) {
      if (null != this.global_event_list[t]) {
        for (var s = 0; s < this.global_event_list[t].length; s++) {
          var l = this.global_event_list[t][s];
          l && l.listener.call(l.target, e, n, i, a, o, r);
        }
      }
    } else {
      console.error("FireEvent Error");
    }
  };

  t.instance = null;
  return t;
}();

exports.EventMgr = exp_EventMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0V2ZW50TWdyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiRXZlbnRNZ3IiLCJMaXN0ZW5lciIsInVuZGVmaW5lZCIsImV4cF9MaXN0ZW5lciIsIl9jdG9yIiwidCIsImUiLCJtTGlzdGVuZXIiLCJtdGFyZ2V0IiwicHJvdG90eXBlIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImV4cF9FdmVudE1nciIsImdsb2JhbF9ldmVudF9saXN0IiwiQXJyYXkiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiZ2V0RXZlbnROdW0iLCJsZW5ndGgiLCJvbiIsIm4iLCJhIiwibyIsImxpc3RlbmVyIiwidGFyZ2V0IiwiciIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJvZmYiLCJpIiwic3BsaWNlIiwicmVtb3ZlQWxsIiwiZW1pdCIsInMiLCJsIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDO0FBR0FELE9BQU8sQ0FBQ0UsUUFBUixHQUFtQkYsT0FBTyxDQUFDRyxRQUFSLEdBQW1CQyxTQUF0Qzs7QUFDQSxJQUFJQyxZQUFZLEdBQUcsWUFBWTtFQUM3QixTQUFTQyxLQUFULENBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0lBQ25CLEtBQUtDLFNBQUwsR0FBaUJELENBQWpCO0lBQ0EsS0FBS0UsT0FBTCxHQUFlSCxDQUFmO0VBQ0Q7O0VBQ0RULE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQk8sS0FBSyxDQUFDSyxTQUE1QixFQUF1QyxVQUF2QyxFQUFtRDtJQUNqREMsR0FBRyxFQUFFLGVBQVk7TUFDZixPQUFPLEtBQUtILFNBQVo7SUFDRCxDQUhnRDtJQUlqREksVUFBVSxFQUFFLEtBSnFDO0lBS2pEQyxZQUFZLEVBQUU7RUFMbUMsQ0FBbkQ7RUFPQWhCLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQk8sS0FBSyxDQUFDSyxTQUE1QixFQUF1QyxRQUF2QyxFQUFpRDtJQUMvQ0MsR0FBRyxFQUFFLGVBQVk7TUFDZixPQUFPLEtBQUtGLE9BQVo7SUFDRCxDQUg4QztJQUkvQ0csVUFBVSxFQUFFLEtBSm1DO0lBSy9DQyxZQUFZLEVBQUU7RUFMaUMsQ0FBakQ7RUFPQSxPQUFPUixLQUFQO0FBQ0QsQ0FwQmtCLEVBQW5COztBQXFCQU4sT0FBTyxDQUFDRyxRQUFSLEdBQW1CRSxZQUFuQjs7QUFDQSxJQUFJVSxZQUFZLEdBQUcsWUFBWTtFQUM3QixTQUFTUixDQUFULEdBQWE7SUFDWCxLQUFLUyxpQkFBTCxHQUF5QixJQUFJQyxLQUFKLEVBQXpCO0VBQ0Q7O0VBQ0RWLENBQUMsQ0FBQ1csV0FBRixHQUFnQixZQUFZO0lBQzFCLFFBQVEsS0FBS0MsUUFBYixLQUEwQixLQUFLQSxRQUFMLEdBQWdCLElBQUlaLENBQUosRUFBMUM7SUFDQSxPQUFPLEtBQUtZLFFBQVo7RUFDRCxDQUhEOztFQUlBWixDQUFDLENBQUNJLFNBQUYsQ0FBWVMsV0FBWixHQUEwQixVQUFVYixDQUFWLEVBQWE7SUFDckMsSUFBSSxLQUFLUyxpQkFBTCxDQUF1QlQsQ0FBdkIsQ0FBSixFQUErQjtNQUM3QixPQUFPLEtBQUtTLGlCQUFMLENBQXVCVCxDQUF2QixFQUEwQmMsTUFBakM7SUFDRCxDQUZELE1BRU87TUFDTCxPQUFPLENBQVA7SUFDRDtFQUNGLENBTkQ7O0VBT0FkLENBQUMsQ0FBQ0ksU0FBRixDQUFZVyxFQUFaLEdBQWlCLFVBQVVmLENBQVYsRUFBYUMsQ0FBYixFQUFnQmUsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0lBQ3JDcEIsU0FBUyxLQUFLb0IsQ0FBZCxLQUFvQkEsQ0FBQyxHQUFHLEtBQXhCOztJQUNBLElBQUksUUFBUWpCLENBQVIsSUFBYSxRQUFRZ0IsQ0FBekIsRUFBNEI7TUFDMUIsUUFBUSxLQUFLUCxpQkFBTCxDQUF1QlQsQ0FBdkIsQ0FBUixLQUFzQyxLQUFLUyxpQkFBTCxDQUF1QlQsQ0FBdkIsSUFBNEIsSUFBSVUsS0FBSixFQUFsRTs7TUFDQSxJQUFJLENBQUNPLENBQUQsSUFBTSxLQUFLUixpQkFBTCxDQUF1QlQsQ0FBdkIsQ0FBVixFQUFxQztRQUNuQyxLQUFLLElBQUlrQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtULGlCQUFMLENBQXVCVCxDQUF2QixFQUEwQmMsTUFBOUMsRUFBc0RJLENBQUMsRUFBdkQsRUFBMkQ7VUFDekQsSUFBSSxLQUFLVCxpQkFBTCxDQUF1QlQsQ0FBdkIsRUFBMEJrQixDQUExQixFQUE2QkMsUUFBN0IsSUFBeUNILENBQXpDLElBQThDLEtBQUtQLGlCQUFMLENBQXVCVCxDQUF2QixFQUEwQmtCLENBQTFCLEVBQTZCRSxNQUE3QixJQUF1Q25CLENBQXpGLEVBQTRGO1lBQzFGO1VBQ0Q7UUFDRjtNQUNGOztNQUNELElBQUlvQixDQUFDLEdBQUcsSUFBSXZCLFlBQUosQ0FBaUJHLENBQWpCLEVBQW9CZSxDQUFwQixDQUFSO01BQ0EsS0FBS1AsaUJBQUwsQ0FBdUJULENBQXZCLEVBQTBCc0IsSUFBMUIsQ0FBK0JELENBQS9CO0lBQ0QsQ0FYRCxNQVdPO01BQ0xFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLG1CQUFkO0lBQ0Q7RUFDRixDQWhCRDs7RUFpQkF4QixDQUFDLENBQUNJLFNBQUYsQ0FBWXFCLEdBQVosR0FBa0IsVUFBVXpCLENBQVYsRUFBYUMsQ0FBYixFQUFnQmUsQ0FBaEIsRUFBbUI7SUFDbkMsSUFBSSxRQUFRaEIsQ0FBUixJQUFhLFFBQVFnQixDQUFyQixJQUEwQixRQUFRLEtBQUtQLGlCQUFMLENBQXVCVCxDQUF2QixDQUF0QyxFQUFpRTtNQUMvRCxLQUFLLElBQUkwQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtqQixpQkFBTCxDQUF1QlQsQ0FBdkIsRUFBMEJjLE1BQTlDLEVBQXNEWSxDQUFDLEVBQXZELEVBQTJEO1FBQ3pELEtBQUtqQixpQkFBTCxDQUF1QlQsQ0FBdkIsRUFBMEIwQixDQUExQixFQUE2QlAsUUFBN0IsSUFBeUNILENBQXpDLElBQThDLEtBQUtQLGlCQUFMLENBQXVCVCxDQUF2QixFQUEwQjBCLENBQTFCLEVBQTZCTixNQUE3QixJQUF1Q25CLENBQXJGLElBQTBGLEtBQUtRLGlCQUFMLENBQXVCVCxDQUF2QixFQUEwQjJCLE1BQTFCLENBQWlDRCxDQUFqQyxFQUFvQyxDQUFwQyxDQUExRjtNQUNEO0lBQ0Y7RUFDRixDQU5EOztFQU9BMUIsQ0FBQyxDQUFDSSxTQUFGLENBQVl3QixTQUFaLEdBQXdCLFlBQVk7SUFDbEMsS0FBS25CLGlCQUFMLEdBQXlCLElBQUlDLEtBQUosRUFBekI7RUFDRCxDQUZEOztFQUdBVixDQUFDLENBQUNJLFNBQUYsQ0FBWXlCLElBQVosR0FBbUIsVUFBVTdCLENBQVYsRUFBYUMsQ0FBYixFQUFnQmUsQ0FBaEIsRUFBbUJVLENBQW5CLEVBQXNCVCxDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEJHLENBQTVCLEVBQStCO0lBQ2hELElBQUksUUFBUXJCLENBQVosRUFBZTtNQUNiLElBQUksUUFBUSxLQUFLUyxpQkFBTCxDQUF1QlQsQ0FBdkIsQ0FBWixFQUF1QztRQUNyQyxLQUFLLElBQUk4QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtyQixpQkFBTCxDQUF1QlQsQ0FBdkIsRUFBMEJjLE1BQTlDLEVBQXNEZ0IsQ0FBQyxFQUF2RCxFQUEyRDtVQUN6RCxJQUFJQyxDQUFDLEdBQUcsS0FBS3RCLGlCQUFMLENBQXVCVCxDQUF2QixFQUEwQjhCLENBQTFCLENBQVI7VUFDQUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNaLFFBQUYsQ0FBV2EsSUFBWCxDQUFnQkQsQ0FBQyxDQUFDWCxNQUFsQixFQUEwQm5CLENBQTFCLEVBQTZCZSxDQUE3QixFQUFnQ1UsQ0FBaEMsRUFBbUNULENBQW5DLEVBQXNDQyxDQUF0QyxFQUF5Q0csQ0FBekMsQ0FBTDtRQUNEO01BQ0Y7SUFDRixDQVBELE1BT087TUFDTEUsT0FBTyxDQUFDQyxLQUFSLENBQWMsaUJBQWQ7SUFDRDtFQUNGLENBWEQ7O0VBWUF4QixDQUFDLENBQUNZLFFBQUYsR0FBYSxJQUFiO0VBQ0EsT0FBT1osQ0FBUDtBQUNELENBeERrQixFQUFuQjs7QUF5REFQLE9BQU8sQ0FBQ0UsUUFBUixHQUFtQmEsWUFBbkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkV2ZW50TWdyID0gZXhwb3J0cy5MaXN0ZW5lciA9IHVuZGVmaW5lZDtcbnZhciBleHBfTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKHQsIGUpIHtcbiAgICB0aGlzLm1MaXN0ZW5lciA9IGU7XG4gICAgdGhpcy5tdGFyZ2V0ID0gdDtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2N0b3IucHJvdG90eXBlLCBcImxpc3RlbmVyXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1MaXN0ZW5lcjtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9jdG9yLnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubXRhcmdldDtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIF9jdG9yO1xufSgpO1xuZXhwb3J0cy5MaXN0ZW5lciA9IGV4cF9MaXN0ZW5lcjtcbnZhciBleHBfRXZlbnRNZ3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHQoKSB7XG4gICAgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdCA9IG5ldyBBcnJheSgpO1xuICB9XG4gIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQoKSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH07XG4gIHQucHJvdG90eXBlLmdldEV2ZW50TnVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF0ubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH07XG4gIHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHQsIGUsIG4sIGEpIHtcbiAgICB1bmRlZmluZWQgPT09IGEgJiYgKGEgPSBmYWxzZSk7XG4gICAgaWYgKG51bGwgIT0gdCAmJiBudWxsICE9IG4pIHtcbiAgICAgIG51bGwgPT0gdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSAmJiAodGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSA9IG5ldyBBcnJheSgpKTtcbiAgICAgIGlmICghYSAmJiB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdKSB7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgIGlmICh0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdW29dLmxpc3RlbmVyID09IG4gJiYgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XVtvXS50YXJnZXQgPT0gZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHIgPSBuZXcgZXhwX0xpc3RlbmVyKGUsIG4pO1xuICAgICAgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XS5wdXNoKHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVnaXN0RXZlbnQgRXJyb3JcIik7XG4gICAgfVxuICB9O1xuICB0LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgIGlmIChudWxsICE9IHQgJiYgbnVsbCAhPSBuICYmIG51bGwgIT0gdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF1baV0ubGlzdGVuZXIgPT0gbiAmJiB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdW2ldLnRhcmdldCA9PSBlICYmIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF0uc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgdC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3QgPSBuZXcgQXJyYXkoKTtcbiAgfTtcbiAgdC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0LCBlLCBuLCBpLCBhLCBvLCByKSB7XG4gICAgaWYgKG51bGwgIT0gdCkge1xuICAgICAgaWYgKG51bGwgIT0gdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSkge1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF0ubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgbCA9IHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF1bc107XG4gICAgICAgICAgbCAmJiBsLmxpc3RlbmVyLmNhbGwobC50YXJnZXQsIGUsIG4sIGksIGEsIG8sIHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlRXZlbnQgRXJyb3JcIik7XG4gICAgfVxuICB9O1xuICB0Lmluc3RhbmNlID0gbnVsbDtcbiAgcmV0dXJuIHQ7XG59KCk7XG5leHBvcnRzLkV2ZW50TWdyID0gZXhwX0V2ZW50TWdyOyJdfQ==