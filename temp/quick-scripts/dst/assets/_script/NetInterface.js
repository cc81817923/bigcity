
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/NetInterface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9f8b+CV69FyKwnUdCjOtad', 'NetInterface');
// _script/NetInterface.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefStringProtocol = undefined;

var exp_DefStringProtocol = function () {
  function _ctor() {}

  _ctor.prototype.getHeadlen = function () {
    return 0;
  };

  _ctor.prototype.getHearbeat = function () {
    return "";
  };

  _ctor.prototype.getPackageLen = function (t) {
    return t.toString().length;
  };

  _ctor.prototype.checkPackage = function () {
    return true;
  };

  _ctor.prototype.getPackageId = function () {
    return 0;
  };

  return _ctor;
}();

exports.DefStringProtocol = exp_DefStringProtocol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L05ldEludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkRlZlN0cmluZ1Byb3RvY29sIiwidW5kZWZpbmVkIiwiZXhwX0RlZlN0cmluZ1Byb3RvY29sIiwiX2N0b3IiLCJwcm90b3R5cGUiLCJnZXRIZWFkbGVuIiwiZ2V0SGVhcmJlYXQiLCJnZXRQYWNrYWdlTGVuIiwidCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiY2hlY2tQYWNrYWdlIiwiZ2V0UGFja2FnZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxpQkFBUixHQUE0QkMsU0FBNUI7O0FBQ0EsSUFBSUMscUJBQXFCLEdBQUcsWUFBWTtFQUN0QyxTQUFTQyxLQUFULEdBQWlCLENBQUU7O0VBQ25CQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLFVBQWhCLEdBQTZCLFlBQVk7SUFDdkMsT0FBTyxDQUFQO0VBQ0QsQ0FGRDs7RUFHQUYsS0FBSyxDQUFDQyxTQUFOLENBQWdCRSxXQUFoQixHQUE4QixZQUFZO0lBQ3hDLE9BQU8sRUFBUDtFQUNELENBRkQ7O0VBR0FILEtBQUssQ0FBQ0MsU0FBTixDQUFnQkcsYUFBaEIsR0FBZ0MsVUFBVUMsQ0FBVixFQUFhO0lBQzNDLE9BQU9BLENBQUMsQ0FBQ0MsUUFBRixHQUFhQyxNQUFwQjtFQUNELENBRkQ7O0VBR0FQLEtBQUssQ0FBQ0MsU0FBTixDQUFnQk8sWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxPQUFPLElBQVA7RUFDRCxDQUZEOztFQUdBUixLQUFLLENBQUNDLFNBQU4sQ0FBZ0JRLFlBQWhCLEdBQStCLFlBQVk7SUFDekMsT0FBTyxDQUFQO0VBQ0QsQ0FGRDs7RUFHQSxPQUFPVCxLQUFQO0FBQ0QsQ0FsQjJCLEVBQTVCOztBQW1CQUwsT0FBTyxDQUFDRSxpQkFBUixHQUE0QkUscUJBQTVCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EZWZTdHJpbmdQcm90b2NvbCA9IHVuZGVmaW5lZDtcbnZhciBleHBfRGVmU3RyaW5nUHJvdG9jb2wgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge31cbiAgX2N0b3IucHJvdG90eXBlLmdldEhlYWRsZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRIZWFyYmVhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFBhY2thZ2VMZW4gPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LnRvU3RyaW5nKCkubGVuZ3RoO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuY2hlY2tQYWNrYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0UGFja2FnZUlkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAwO1xuICB9O1xuICByZXR1cm4gX2N0b3I7XG59KCk7XG5leHBvcnRzLkRlZlN0cmluZ1Byb3RvY29sID0gZXhwX0RlZlN0cmluZ1Byb3RvY29sOyJdfQ==