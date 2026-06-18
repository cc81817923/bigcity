"use strict";
cc._RF.push(module, 'ba999ADmnxHtrcm2w/ID10A', 'KinghtFallUISignIn');
// _script/KinghtFallUISignIn.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1SdkMgr = require("SdkMgr");

var $z1Utils = require("Utils");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUISignIn = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndDayList = [null];
    e.btnSign = null;
    e.btnVide = null;
    e.btnDouble = null;
    e.btnGet = null;
    e.btnClose = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    this.cfgList = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSignCfg();
    this.initView();
    this.initBtnListener();
  };

  _ctor.prototype.initData = function () {};

  _ctor.prototype.initBtnListener = function () {
    var t = this;

    var e = function e(_e, n) {
      var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getSignDay();
      var a = t.cfgList[i];
      var o = {
        id: a.Item[0],
        num: a.Item[1]
      };
      var r = t.ndDayList[i].convertToWorldSpaceAR(t.ndDayList[i].getChildByName("sprIcon").position);
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().sign(n);
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().addRewards([o], _e, r);
      t.initView();
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.UpdateRedPoint, 4);
    };

    this.btnSign.on(cc.Node.EventType.TOUCH_END, function () {
      e(1, 0);
    }, this);
    this.btnVide.on(cc.Node.EventType.TOUCH_END, function () {
      $z1SdkMgr.SdkMgr.getInstance().playVideo($z1SdkMgr.AdType.AdFreeTime, function () {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.day7_once);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_day7_once_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
        e(1, 1);
      });
    }, this);
    this.btnDouble.on(cc.Node.EventType.TOUCH_END, function () {
      $z1SdkMgr.SdkMgr.getInstance().playVideo($z1SdkMgr.AdType.AdFreeTime, function () {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.day7_double);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_day7_double_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
        e(2, 1);
      });
    }, this);
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeUI();
    }, this);
  };

  _ctor.prototype.initView = function () {
    var t = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getSignReward();

    switch (t) {
      case 0:
        this.btnSign.active = true;
        this.btnVide.active = false;
        this.btnDouble.active = true;
        this.btnGet.active = false;
        break;

      case 1:
        this.btnSign.active = false;
        this.btnVide.active = true;
        this.btnDouble.active = false;
        this.btnGet.active = false;
        break;

      default:
        this.btnSign.active = false;
        this.btnVide.active = false;
        this.btnDouble.active = false;
        this.btnGet.active = true;
    }

    var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getSignDay();

    var n = function n(_n) {
      var a = i.ndDayList[_n];
      var o = i.cfgList[_n];
      a.getChildByName("labDay").getComponent(cc.Label).string = $z1Utils.Utils.StringFormat(i.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeBattle11), _n + 1);
      var r = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(o.Item[0]);
      i.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, r.sprBg, function (t) {
        a.getChildByName("ndBg").getComponent(cc.Sprite).spriteFrame = t;
      });
      i.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, r.icon, function (t) {
        a.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = t;
      });
      a.getChildByName("labNum").getComponent(cc.Label).string = $z1KinghtFallModle["default"].getInstance().numberFomat(o.Item[1]);
      a.getChildByName("labName").getComponent(cc.Label).string = i.T(r.name);
      var s = false;

      if (_n < e) {
        s = true;
      } else {
        _n == e && t > 0 && (s = true);
      }

      a.getChildByName("ndFinish").active = s;
    };

    var i = this;

    for (var a = 0; a < this.ndDayList.length; a++) {
      n(a);
    }
  };

  cc__decorate([ccp_property({
    type: [cc.Node],
    tooltip: "Sign-in list"
  })], _ctor.prototype, "ndDayList", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Sign-in btn"
  })], _ctor.prototype, "btnSign", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Video sign-in"
  })], _ctor.prototype, "btnVide", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Double sign-in"
  })], _ctor.prototype, "btnDouble", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Checked in"
  })], _ctor.prototype, "btnGet", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Close"
  })], _ctor.prototype, "btnClose", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUISignIn;

cc._RF.pop();