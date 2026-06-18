"use strict";
cc._RF.push(module, 'a3d71eFHL9IW7ks0mgrQcIp', 'DataMgr');
// _script/DataMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataMgr = undefined;

var $z1Appcfg = require("Appcfg");

var $z1EventMgr = require("EventMgr");

var $z1ResourceMgr = require("ResourceMgr");

var $z1Config = require("Config");

var exp_DataMgr = function () {
  function _ctor() {
    this.readRemoteCfg = $z1Config.GameConfig.enableRcfg;
    this.bSheetNames = ["TextCfg"];
  }

  _ctor.getInstance = function () {
    null == this.instance && (this.instance = new _ctor());
    return this.instance;
  };

  _ctor.prototype.preload = function () {
    var t = this;

    var n = function n() {
      $z1EventMgr.EventMgr.getInstance().emit($z1Appcfg.BaseEventName.Loading, $z1Appcfg.LoadingProcess.ExcelCfg);
    };

    $z1ResourceMgr.ResourceMgr.getInstance().loadRes("configs", "GameJsonCfg", cc.JsonAsset, function (e) {
      t.data = e.json;
      e.decRef();

      if (t.data && t.data.TextCfg && t.data.TextCfg.length > 0) {
        n();
      } else {
        $z1ResourceMgr.ResourceMgr.getInstance().loadRes("configsB", "GameJsonCfg", cc.JsonAsset, function (e) {
          var i = e.json;
          i && i.TextCfg && (t.data.TextCfg = i.TextCfg);
          e.decRef();
          n();
        });
      }
    });
  };

  _ctor.prototype.reloadConfig = function (t, e) {
    var n = this;

    if ("A" != t && "C" != t) {
      if (this.bSheetNames.length <= 0) {
        e && e();
      } else {
        var i = "configsB";

        if ("D" == t) {
          i = "configsD";
          this.bSheetNames = ["TextCfg"];
        }

        $z1ResourceMgr.ResourceMgr.getInstance().loadRes(i, "GameJsonCfg", cc.JsonAsset, function (t) {
          var i = t.json;

          for (var a = 0; a < n.bSheetNames.length; a++) {
            var o = n.bSheetNames[a];
            n.data[o] = i[o];
          }

          t.decRef();
          e && e();
        });
      }
    } else {
      e && e();
    }
  };

  _ctor.prototype.getTextCfgs = function () {
    if (this.data && this.data.TextCfg) {
      return this.data.TextCfg;
    } else {
      return [];
    }
  };

  _ctor.prototype.getText = function (t) {
    var e = this.getTextCfgs();

    if (e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];

        if (i.zh == t) {
          return i;
        }
      }
    }

    return null;
  };

  _ctor.prototype.T = function (e, n) {
    if (n == $z1Appcfg.LanguageType.zh) {
      return e;
    }

    var a = _ctor.getInstance().getText(e);

    if (a && a[n]) {
      return a[n];
    } else {
      return e;
    }
  };

  return _ctor;
}();

exports.DataMgr = exp_DataMgr;

cc._RF.pop();