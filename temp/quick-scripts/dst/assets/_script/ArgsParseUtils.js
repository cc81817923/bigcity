
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/ArgsParseUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14743rQ6f9BObX51QcWz3Un', 'ArgsParseUtils');
// _script/ArgsParseUtils.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgsParseUtils = undefined;

var exp_ArgsParseUtils = function () {
  function _ctor() {}

  _ctor._makeLoadResArgs = function () {
    if (arguments.length < 1 || "string" != typeof arguments[0]) {
      console.error("_makeLoadResArgs error " + arguments);
      return null;
    }

    var t = {
      bundle: arguments[0],
      path: arguments[1],
      type: arguments[2],
      callback: arguments[3],
      autoRelese: false,
      cacheTme: 10,
      saveKey: null
    };

    for (var e = 4; e < arguments.length; ++e) {
      4 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]);

      if (5 == e && "number" == typeof arguments[e]) {
        t.cacheTme = arguments[e];
      } else {
        e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
      }
    }

    return t;
  };

  _ctor._makeloadSpriteFrameResrgs = function () {
    if (arguments.length < 1 || "string" != typeof arguments[0]) {
      console.error("_makeloadSpriteFrameResrgs error " + arguments);
      return null;
    }

    var t = {
      bundle: arguments[0],
      path: arguments[1],
      callback: arguments[2],
      autoRelese: false,
      cacheTme: 10,
      saveKey: null
    };

    for (var e = 3; e < arguments.length; ++e) {
      3 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]);

      if (4 == e && "number" == typeof arguments[e]) {
        t.cacheTme = arguments[e];
      } else {
        e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
      }
    }

    return t;
  };

  return _ctor;
}();

exports.ArgsParseUtils = exp_ArgsParseUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0FyZ3NQYXJzZVV0aWxzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQXJnc1BhcnNlVXRpbHMiLCJ1bmRlZmluZWQiLCJleHBfQXJnc1BhcnNlVXRpbHMiLCJfY3RvciIsIl9tYWtlTG9hZFJlc0FyZ3MiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJ0IiwiYnVuZGxlIiwicGF0aCIsInR5cGUiLCJjYWxsYmFjayIsImF1dG9SZWxlc2UiLCJjYWNoZVRtZSIsInNhdmVLZXkiLCJlIiwiX21ha2Vsb2FkU3ByaXRlRnJhbWVSZXNyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLGNBQVIsR0FBeUJDLFNBQXpCOztBQUNBLElBQUlDLGtCQUFrQixHQUFHLFlBQVk7RUFDbkMsU0FBU0MsS0FBVCxHQUFpQixDQUFFOztFQUNuQkEsS0FBSyxDQUFDQyxnQkFBTixHQUF5QixZQUFZO0lBQ25DLElBQUlDLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUFuQixJQUF3QixZQUFZLE9BQU9ELFNBQVMsQ0FBQyxDQUFELENBQXhELEVBQTZEO01BQzNERSxPQUFPLENBQUNDLEtBQVIsQ0FBYyw0QkFBNEJILFNBQTFDO01BQ0EsT0FBTyxJQUFQO0lBQ0Q7O0lBQ0QsSUFBSUksQ0FBQyxHQUFHO01BQ05DLE1BQU0sRUFBRUwsU0FBUyxDQUFDLENBQUQsQ0FEWDtNQUVOTSxJQUFJLEVBQUVOLFNBQVMsQ0FBQyxDQUFELENBRlQ7TUFHTk8sSUFBSSxFQUFFUCxTQUFTLENBQUMsQ0FBRCxDQUhUO01BSU5RLFFBQVEsRUFBRVIsU0FBUyxDQUFDLENBQUQsQ0FKYjtNQUtOUyxVQUFVLEVBQUUsS0FMTjtNQU1OQyxRQUFRLEVBQUUsRUFOSjtNQU9OQyxPQUFPLEVBQUU7SUFQSCxDQUFSOztJQVNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osU0FBUyxDQUFDQyxNQUE5QixFQUFzQyxFQUFFVyxDQUF4QyxFQUEyQztNQUN6QyxLQUFLQSxDQUFMLElBQVUsYUFBYSxPQUFPWixTQUFTLENBQUNZLENBQUQsQ0FBdkMsS0FBK0NSLENBQUMsQ0FBQ0ssVUFBRixHQUFlVCxTQUFTLENBQUNZLENBQUQsQ0FBdkU7O01BQ0EsSUFBSSxLQUFLQSxDQUFMLElBQVUsWUFBWSxPQUFPWixTQUFTLENBQUNZLENBQUQsQ0FBMUMsRUFBK0M7UUFDN0NSLENBQUMsQ0FBQ00sUUFBRixHQUFhVixTQUFTLENBQUNZLENBQUQsQ0FBdEI7TUFDRCxDQUZELE1BRU87UUFDTEEsQ0FBQyxJQUFJWixTQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBeEIsSUFBNkIsWUFBWSxPQUFPRCxTQUFTLENBQUNZLENBQUQsQ0FBekQsS0FBaUVSLENBQUMsQ0FBQ08sT0FBRixHQUFZWCxTQUFTLENBQUNZLENBQUQsQ0FBdEY7TUFDRDtJQUNGOztJQUNELE9BQU9SLENBQVA7RUFDRCxDQXZCRDs7RUF3QkFOLEtBQUssQ0FBQ2UsMEJBQU4sR0FBbUMsWUFBWTtJQUM3QyxJQUFJYixTQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsWUFBWSxPQUFPRCxTQUFTLENBQUMsQ0FBRCxDQUF4RCxFQUE2RDtNQUMzREUsT0FBTyxDQUFDQyxLQUFSLENBQWMsc0NBQXNDSCxTQUFwRDtNQUNBLE9BQU8sSUFBUDtJQUNEOztJQUNELElBQUlJLENBQUMsR0FBRztNQUNOQyxNQUFNLEVBQUVMLFNBQVMsQ0FBQyxDQUFELENBRFg7TUFFTk0sSUFBSSxFQUFFTixTQUFTLENBQUMsQ0FBRCxDQUZUO01BR05RLFFBQVEsRUFBRVIsU0FBUyxDQUFDLENBQUQsQ0FIYjtNQUlOUyxVQUFVLEVBQUUsS0FKTjtNQUtOQyxRQUFRLEVBQUUsRUFMSjtNQU1OQyxPQUFPLEVBQUU7SUFOSCxDQUFSOztJQVFBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osU0FBUyxDQUFDQyxNQUE5QixFQUFzQyxFQUFFVyxDQUF4QyxFQUEyQztNQUN6QyxLQUFLQSxDQUFMLElBQVUsYUFBYSxPQUFPWixTQUFTLENBQUNZLENBQUQsQ0FBdkMsS0FBK0NSLENBQUMsQ0FBQ0ssVUFBRixHQUFlVCxTQUFTLENBQUNZLENBQUQsQ0FBdkU7O01BQ0EsSUFBSSxLQUFLQSxDQUFMLElBQVUsWUFBWSxPQUFPWixTQUFTLENBQUNZLENBQUQsQ0FBMUMsRUFBK0M7UUFDN0NSLENBQUMsQ0FBQ00sUUFBRixHQUFhVixTQUFTLENBQUNZLENBQUQsQ0FBdEI7TUFDRCxDQUZELE1BRU87UUFDTEEsQ0FBQyxJQUFJWixTQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBeEIsSUFBNkIsWUFBWSxPQUFPRCxTQUFTLENBQUNZLENBQUQsQ0FBekQsS0FBaUVSLENBQUMsQ0FBQ08sT0FBRixHQUFZWCxTQUFTLENBQUNZLENBQUQsQ0FBdEY7TUFDRDtJQUNGOztJQUNELE9BQU9SLENBQVA7RUFDRCxDQXRCRDs7RUF1QkEsT0FBT04sS0FBUDtBQUNELENBbER3QixFQUF6Qjs7QUFtREFMLE9BQU8sQ0FBQ0UsY0FBUixHQUF5QkUsa0JBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BcmdzUGFyc2VVdGlscyA9IHVuZGVmaW5lZDtcbnZhciBleHBfQXJnc1BhcnNlVXRpbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge31cbiAgX2N0b3IuX21ha2VMb2FkUmVzQXJncyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgXCJzdHJpbmdcIiAhPSB0eXBlb2YgYXJndW1lbnRzWzBdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiX21ha2VMb2FkUmVzQXJncyBlcnJvciBcIiArIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHQgPSB7XG4gICAgICBidW5kbGU6IGFyZ3VtZW50c1swXSxcbiAgICAgIHBhdGg6IGFyZ3VtZW50c1sxXSxcbiAgICAgIHR5cGU6IGFyZ3VtZW50c1syXSxcbiAgICAgIGNhbGxiYWNrOiBhcmd1bWVudHNbM10sXG4gICAgICBhdXRvUmVsZXNlOiBmYWxzZSxcbiAgICAgIGNhY2hlVG1lOiAxMCxcbiAgICAgIHNhdmVLZXk6IG51bGxcbiAgICB9O1xuICAgIGZvciAodmFyIGUgPSA0OyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgKytlKSB7XG4gICAgICA0ID09IGUgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSAmJiAodC5hdXRvUmVsZXNlID0gYXJndW1lbnRzW2VdKTtcbiAgICAgIGlmICg1ID09IGUgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgYXJndW1lbnRzW2VdKSB7XG4gICAgICAgIHQuY2FjaGVUbWUgPSBhcmd1bWVudHNbZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlID09IGFyZ3VtZW50cy5sZW5ndGggLSAxICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSAmJiAodC5zYXZlS2V5ID0gYXJndW1lbnRzW2VdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH07XG4gIF9jdG9yLl9tYWtlbG9hZFNwcml0ZUZyYW1lUmVzcmdzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiBhcmd1bWVudHNbMF0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJfbWFrZWxvYWRTcHJpdGVGcmFtZVJlc3JncyBlcnJvciBcIiArIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHQgPSB7XG4gICAgICBidW5kbGU6IGFyZ3VtZW50c1swXSxcbiAgICAgIHBhdGg6IGFyZ3VtZW50c1sxXSxcbiAgICAgIGNhbGxiYWNrOiBhcmd1bWVudHNbMl0sXG4gICAgICBhdXRvUmVsZXNlOiBmYWxzZSxcbiAgICAgIGNhY2hlVG1lOiAxMCxcbiAgICAgIHNhdmVLZXk6IG51bGxcbiAgICB9O1xuICAgIGZvciAodmFyIGUgPSAzOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgKytlKSB7XG4gICAgICAzID09IGUgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSAmJiAodC5hdXRvUmVsZXNlID0gYXJndW1lbnRzW2VdKTtcbiAgICAgIGlmICg0ID09IGUgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgYXJndW1lbnRzW2VdKSB7XG4gICAgICAgIHQuY2FjaGVUbWUgPSBhcmd1bWVudHNbZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlID09IGFyZ3VtZW50cy5sZW5ndGggLSAxICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSAmJiAodC5zYXZlS2V5ID0gYXJndW1lbnRzW2VdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuQXJnc1BhcnNlVXRpbHMgPSBleHBfQXJnc1BhcnNlVXRpbHM7Il19