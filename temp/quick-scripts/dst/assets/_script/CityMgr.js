
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/CityMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b39c9FYOklMSYxKAdaKEyOo', 'CityMgr');
// _script/CityMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityMgr = undefined;

var exp_CityMgr = function () {
  function _ctor() {
    this.firstCity = CC_WECHATGAME ? ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"] : [];
    this.isget = false;
    this.isFirstCity = true;
  }

  _ctor.getInstance = function () {
    if (null == this.instance) {
      this.instance = new _ctor();
      this.instance.init();
    }

    return this.instance;
  };

  _ctor.prototype.init = function () {
    this.parseIp();
  };

  _ctor.prototype.parseIp = function () {};

  _ctor.prototype.getIsFirstCity = function () {
    this.isget || this.parseIp();
    return this.isFirstCity;
  };

  return _ctor;
}();

exports.CityMgr = exp_CityMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0NpdHlNZ3IuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJDaXR5TWdyIiwidW5kZWZpbmVkIiwiZXhwX0NpdHlNZ3IiLCJfY3RvciIsImZpcnN0Q2l0eSIsIkNDX1dFQ0hBVEdBTUUiLCJpc2dldCIsImlzRmlyc3RDaXR5IiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsImluaXQiLCJwcm90b3R5cGUiLCJwYXJzZUlwIiwiZ2V0SXNGaXJzdENpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxPQUFPLENBQUNFLE9BQVIsR0FBa0JDLFNBQWxCOztBQUNBLElBQUlDLFdBQVcsR0FBRyxZQUFZO0VBQzVCLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixLQUFLQyxTQUFMLEdBQWlCQyxhQUFhLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixXQUF4QixFQUFxQyxVQUFyQyxDQUFILEdBQXNELEVBQXBGO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEtBQWI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLElBQW5CO0VBQ0Q7O0VBQ0RKLEtBQUssQ0FBQ0ssV0FBTixHQUFvQixZQUFZO0lBQzlCLElBQUksUUFBUSxLQUFLQyxRQUFqQixFQUEyQjtNQUN6QixLQUFLQSxRQUFMLEdBQWdCLElBQUlOLEtBQUosRUFBaEI7TUFDQSxLQUFLTSxRQUFMLENBQWNDLElBQWQ7SUFDRDs7SUFDRCxPQUFPLEtBQUtELFFBQVo7RUFDRCxDQU5EOztFQU9BTixLQUFLLENBQUNRLFNBQU4sQ0FBZ0JELElBQWhCLEdBQXVCLFlBQVk7SUFDakMsS0FBS0UsT0FBTDtFQUNELENBRkQ7O0VBR0FULEtBQUssQ0FBQ1EsU0FBTixDQUFnQkMsT0FBaEIsR0FBMEIsWUFBWSxDQUFFLENBQXhDOztFQUNBVCxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JFLGNBQWhCLEdBQWlDLFlBQVk7SUFDM0MsS0FBS1AsS0FBTCxJQUFjLEtBQUtNLE9BQUwsRUFBZDtJQUNBLE9BQU8sS0FBS0wsV0FBWjtFQUNELENBSEQ7O0VBSUEsT0FBT0osS0FBUDtBQUNELENBdEJpQixFQUFsQjs7QUF1QkFMLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQkUsV0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNpdHlNZ3IgPSB1bmRlZmluZWQ7XG52YXIgZXhwX0NpdHlNZ3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHRoaXMuZmlyc3RDaXR5ID0gQ0NfV0VDSEFUR0FNRSA/IFtcIkJlaWppbmdcIiwgXCJTaGFuZ2hhaVwiLCBcIkd1YW5nemhvdVwiLCBcIlNoZW56aGVuXCJdIDogW107XG4gICAgdGhpcy5pc2dldCA9IGZhbHNlO1xuICAgIHRoaXMuaXNGaXJzdENpdHkgPSB0cnVlO1xuICB9XG4gIF9jdG9yLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChudWxsID09IHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgX2N0b3IoKTtcbiAgICAgIHRoaXMuaW5zdGFuY2UuaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wYXJzZUlwKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5wYXJzZUlwID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRJc0ZpcnN0Q2l0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzZ2V0IHx8IHRoaXMucGFyc2VJcCgpO1xuICAgIHJldHVybiB0aGlzLmlzRmlyc3RDaXR5O1xuICB9O1xuICByZXR1cm4gX2N0b3I7XG59KCk7XG5leHBvcnRzLkNpdHlNZ3IgPSBleHBfQ2l0eU1ncjsiXX0=