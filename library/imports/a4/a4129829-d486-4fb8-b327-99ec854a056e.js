"use strict";
cc._RF.push(module, 'a4129gp1IZPuLMnmeyFSgVu', 'LanguageMgr');
// _script/LanguageMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageMgr = undefined;

var $z1DataMgr = require("DataMgr");

var $z1Appcfg = require("Appcfg");

var exp_LanguageMgr = function () {
  function _ctor() {
    this.currentLan = $z1Appcfg.LanguageType.en;
  }

  _ctor.getInstance = function () {
    null == this.instance && (this.instance = new _ctor());
    return this.instance;
  };

  _ctor.prototype.setCurrentLanguage = function (t) {
    this.currentLan = t;
  };

  _ctor.prototype.getCurrentLanguage = function () {
    return this.currentLan;
  };

  _ctor.prototype.getImgstr = function (t) {
    var e = this.currentLan;

    if (e == $z1Appcfg.LanguageType.en) {
      return t + "-y";
    } else {
      if (e == $z1Appcfg.LanguageType.jp) {
        return t + "-r";
      } else {
        if (e == $z1Appcfg.LanguageType.zh_tw) {
          return t + "-f";
        } else {
          return t;
        }
      }
    }
  };

  _ctor.prototype.T = function (t) {
    return $z1DataMgr.DataMgr.getInstance().T(t, this.currentLan);
  };

  return _ctor;
}();

exports.LanguageMgr = exp_LanguageMgr;

cc._RF.pop();