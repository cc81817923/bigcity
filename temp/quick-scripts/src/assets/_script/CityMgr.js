"use strict";
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