"use strict";
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