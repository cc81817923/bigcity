
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/PlatformSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '886fbSFAJxJmpi/wnGoX4n0', 'PlatformSetting');
// _script/PlatformSetting.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformSetting = exports.SwitchID = exports.AppName = undefined;
var i;

var $z1BasePlatform = require("BasePlatform");

(function (t) {
  t.Main = "Main";
  t.MRDYX = "MRDYX";
  t.ZSSWZ = "ZSSWZ";
  t.XDQB = "XDQB";
  t.XXSCD = "XXSCD";
  t.Bili1 = "Bili1";
  t.Bili2 = "Bili2";
})(i = exports.AppName || (exports.AppName = {}));

(function (t) {
  t[t.ShenHe = 0] = "ShenHe";
  t[t.ShenHe_ABD = 1] = "ShenHe_ABD";
  t[t.ShenHe2 = 2] = "ShenHe2";
})(exports.SwitchID || (exports.SwitchID = {}));

var exp_PlatformSetting = function () {
  function _ctor() {}

  _ctor.currentApp = i.Main;
  _ctor.currentPlatform = $z1BasePlatform.Platform.ANDROID_4399;
  return _ctor;
}();

exports.PlatformSetting = exp_PlatformSetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1BsYXRmb3JtU2V0dGluZy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlBsYXRmb3JtU2V0dGluZyIsIlN3aXRjaElEIiwiQXBwTmFtZSIsInVuZGVmaW5lZCIsImkiLCIkejFCYXNlUGxhdGZvcm0iLCJyZXF1aXJlIiwidCIsIk1haW4iLCJNUkRZWCIsIlpTU1daIiwiWERRQiIsIlhYU0NEIiwiQmlsaTEiLCJCaWxpMiIsIlNoZW5IZSIsIlNoZW5IZV9BQkQiLCJTaGVuSGUyIiwiZXhwX1BsYXRmb3JtU2V0dGluZyIsIl9jdG9yIiwiY3VycmVudEFwcCIsImN1cnJlbnRQbGF0Zm9ybSIsIlBsYXRmb3JtIiwiQU5EUk9JRF80Mzk5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxlQUFSLEdBQTBCRixPQUFPLENBQUNHLFFBQVIsR0FBbUJILE9BQU8sQ0FBQ0ksT0FBUixHQUFrQkMsU0FBL0Q7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLGVBQWUsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBN0I7O0FBQ0EsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7RUFDWkEsQ0FBQyxDQUFDQyxJQUFGLEdBQVMsTUFBVDtFQUNBRCxDQUFDLENBQUNFLEtBQUYsR0FBVSxPQUFWO0VBQ0FGLENBQUMsQ0FBQ0csS0FBRixHQUFVLE9BQVY7RUFDQUgsQ0FBQyxDQUFDSSxJQUFGLEdBQVMsTUFBVDtFQUNBSixDQUFDLENBQUNLLEtBQUYsR0FBVSxPQUFWO0VBQ0FMLENBQUMsQ0FBQ00sS0FBRixHQUFVLE9BQVY7RUFDQU4sQ0FBQyxDQUFDTyxLQUFGLEdBQVUsT0FBVjtBQUNELENBUkQsRUFRR1YsQ0FBQyxHQUFHTixPQUFPLENBQUNJLE9BQVIsS0FBb0JKLE9BQU8sQ0FBQ0ksT0FBUixHQUFrQixFQUF0QyxDQVJQOztBQVNBLENBQUMsVUFBVUssQ0FBVixFQUFhO0VBQ1pBLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDUSxNQUFGLEdBQVcsQ0FBWixDQUFELEdBQWtCLFFBQWxCO0VBQ0FSLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDUyxVQUFGLEdBQWUsQ0FBaEIsQ0FBRCxHQUFzQixZQUF0QjtFQUNBVCxDQUFDLENBQUNBLENBQUMsQ0FBQ1UsT0FBRixHQUFZLENBQWIsQ0FBRCxHQUFtQixTQUFuQjtBQUNELENBSkQsRUFJR25CLE9BQU8sQ0FBQ0csUUFBUixLQUFxQkgsT0FBTyxDQUFDRyxRQUFSLEdBQW1CLEVBQXhDLENBSkg7O0FBS0EsSUFBSWlCLG1CQUFtQixHQUFHLFlBQVk7RUFDcEMsU0FBU0MsS0FBVCxHQUFpQixDQUFFOztFQUNuQkEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CaEIsQ0FBQyxDQUFDSSxJQUFyQjtFQUNBVyxLQUFLLENBQUNFLGVBQU4sR0FBd0JoQixlQUFlLENBQUNpQixRQUFoQixDQUF5QkMsWUFBakQ7RUFDQSxPQUFPSixLQUFQO0FBQ0QsQ0FMeUIsRUFBMUI7O0FBTUFyQixPQUFPLENBQUNFLGVBQVIsR0FBMEJrQixtQkFBMUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBsYXRmb3JtU2V0dGluZyA9IGV4cG9ydHMuU3dpdGNoSUQgPSBleHBvcnRzLkFwcE5hbWUgPSB1bmRlZmluZWQ7XG52YXIgaTtcbnZhciAkejFCYXNlUGxhdGZvcm0gPSByZXF1aXJlKFwiQmFzZVBsYXRmb3JtXCIpO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHQuTWFpbiA9IFwiTWFpblwiO1xuICB0Lk1SRFlYID0gXCJNUkRZWFwiO1xuICB0LlpTU1daID0gXCJaU1NXWlwiO1xuICB0LlhEUUIgPSBcIlhEUUJcIjtcbiAgdC5YWFNDRCA9IFwiWFhTQ0RcIjtcbiAgdC5CaWxpMSA9IFwiQmlsaTFcIjtcbiAgdC5CaWxpMiA9IFwiQmlsaTJcIjtcbn0pKGkgPSBleHBvcnRzLkFwcE5hbWUgfHwgKGV4cG9ydHMuQXBwTmFtZSA9IHt9KSk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdFt0LlNoZW5IZSA9IDBdID0gXCJTaGVuSGVcIjtcbiAgdFt0LlNoZW5IZV9BQkQgPSAxXSA9IFwiU2hlbkhlX0FCRFwiO1xuICB0W3QuU2hlbkhlMiA9IDJdID0gXCJTaGVuSGUyXCI7XG59KShleHBvcnRzLlN3aXRjaElEIHx8IChleHBvcnRzLlN3aXRjaElEID0ge30pKTtcbnZhciBleHBfUGxhdGZvcm1TZXR0aW5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHt9XG4gIF9jdG9yLmN1cnJlbnRBcHAgPSBpLk1haW47XG4gIF9jdG9yLmN1cnJlbnRQbGF0Zm9ybSA9ICR6MUJhc2VQbGF0Zm9ybS5QbGF0Zm9ybS5BTkRST0lEXzQzOTk7XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuUGxhdGZvcm1TZXR0aW5nID0gZXhwX1BsYXRmb3JtU2V0dGluZzsiXX0=