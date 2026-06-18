
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/LabelPlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80a9cOuqOFHQLCOKoZabFcU', 'LabelPlus');
// _script/LabelPlus.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;

var def_LabelPlus = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {};

  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Label);

exports["default"] = def_LabelPlus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0xhYmVsUGx1cy5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJkZWZfTGFiZWxQbHVzIiwidCIsIl9jdG9yIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwcm90b3R5cGUiLCJzdGFydCIsIkxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQSxJQUFJQyxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBdkI7QUFDQSxJQUFJQyxXQUFXLEdBQUdILGFBQWEsQ0FBQ0ksT0FBaEM7QUFDQUosYUFBYSxDQUFDSyxRQUFkOztBQUNBLElBQUlDLGFBQWEsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDL0IsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLE9BQU8sU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZCxJQUEwQyxJQUFqRDtFQUNEOztFQUNEbEIsV0FBVyxDQUFDZ0IsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWSxDQUFFLENBQXRDOztFQUNBLE9BQU9sQixZQUFZLENBQUMsQ0FBQ1MsV0FBRCxDQUFELEVBQWdCSyxLQUFoQixDQUFuQjtBQUNELENBUG1CLENBT2xCUCxFQUFFLENBQUNZLEtBUGUsQ0FBcEI7O0FBUUFmLE9BQU8sV0FBUCxHQUFrQlEsYUFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xuY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfTGFiZWxQbHVzID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgcmV0dXJuIG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KGNjLkxhYmVsKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9MYWJlbFBsdXM7Il19