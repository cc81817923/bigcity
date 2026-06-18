
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUIHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7579ljm/FFjKMoISpmDA53', 'KinghtFallUIHome');
// _script/KinghtFallUIHome.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
var cc__spreadArrays = __spreadArrays;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BasePlatform = require("BasePlatform");

var $z1BaseUI = require("BaseUI");

var $z1Appcfg = require("Appcfg");

var $z1PlatformSetting = require("PlatformSetting");

var $z1AudioMgr = require("AudioMgr");

var $z1FeedCardMgr = require("FeedCardMgr");

var $z1PoolMgr = require("PoolMgr");

var $z1Utils = require("Utils");

var $z1Config = require("Config");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1UIGuide = require("UIGuide");

var $z1Main = require("Main");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallHomeBattleCtrl = require("KinghtFallHomeBattleCtrl");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUIHome = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.togCon = null;
    e.ndMain = null;
    e.preWeap = null;
    e.preTalent = null;
    e.preBattle = null;
    e.preTreasure = null;
    e.preShop = null;
    e.canGuide = true;
    e.tag = "";
    e.tagNode = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onEnable = function () {
    $z1Main["default"].instance.uiTop.active = true;
    $z1AudioMgr.AudioMgr.getInstance().playMusic($z1KinghtFallConfig.KinghtFallAudioId.menu_bgm, $z1KinghtFallConfig.KinghtFallParameter.BGMusic);
    $z1PoolMgr.PoolMgr.getInstance().clearPool();
    this.initViewTogg();
    this.showRed(31);
  };

  _ctor.prototype.onDisable = function () {
    $z1Main["default"].instance.uiTop.active = false;
  };

  _ctor.prototype.start = function () {
    this.initEventListener();
    this.initBtnListener();

    for (var t = 0; t < this.togCon.toggleItems.length; t++) {
      var e = this.togCon.toggleItems[t];
      $z1KinghtFallModle["default"].getInstance().twBreatheRedPoint(e.node.getChildByName("Background").getChildByName("ndRed"));
      $z1KinghtFallModle["default"].getInstance().twBreatheRedPoint(e.node.getChildByName("checkmark").getChildByName("ndRed"));
    }

    this.tag1 = this.togCon.toggleItems[2];
    this.tag1.isChecked = true;
    this.showView(this.tag1);
    var n = true;

    if ($z1FeedCardMgr.FeedCardMgr.instance.getLaunchFromFeedcard()) {
      var i = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getCodeJoin(1);

      if (i) {
        var a = "gift_" + i.gift_num.toLocaleLowerCase();

        if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getTimeByKey(a) < i.exchange_time) {
          this.openUI($z1KinghtFallConfig.KinghtFallUIID.UIExchangeCode, i.gift_num);
          n = false;
        }
      }
    }

    n && this.startGuide();
  };

  _ctor.prototype.initEventListener = function () {
    var t = this;
    this.addEvent($z1Appcfg.BaseEventName.CloseUI, this.onCloseUI);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, this.startGuide);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.UpdateRedPoint, this.showRed);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.RefreshGold, function () {
      t.showRed(11);
    });
  };

  _ctor.prototype.initViewTogg = function () {
    var t = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.ButtonUnlock);
    this.lockList = t.split(";").map(function (t) {
      return t.split(",").map(Number);
    });
    var e = [];

    for (var n = 0; n < this.togCon.toggleItems.length; n++) {
      var i = this.togCon.toggleItems[n];
      var a = this.isLock(n);

      if (!(a || -1 == this.lockList[n][0] || $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getFunctionUnlockInfo(n))) {
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setFunctionUnlockInfo(n);
        e.push(n);
      }

      i.node.getChildByName("ndLock").active = a;
    }

    if (e.length > 0) {
      this.canGuide = false;
      this.openUI($z1KinghtFallConfig.KinghtFallUIID.UINewModular, e);
    }
  };

  _ctor.prototype.isLock = function (t) {
    if (-1 == this.lockList[t][0]) {
      return false;
    }

    var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage();

    if (this.lockList[t][0] < e) {
      return false;
    }

    if (this.lockList[t][0] > e) {
      return true;
    }

    var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxOrder();
    return this.lockList[t][1] > n;
  };

  _ctor.prototype.initBtnListener = function () {
    for (var t = 0; t < this.togCon.toggleItems.length; t++) {
      this.togCon.toggleItems[t].node.on("toggle", this.showView, this);
    }
  };

  _ctor.prototype.showView = function (t) {
    $z1AudioMgr.AudioMgr.getInstance().playAudioButtonClicked();

    if (t.isChecked && this.tag != t.node.name) {
      var e = null;

      switch (t.node.name) {
        case "Toggle1":
          if (this.isLock(0)) {
            this.openUI($z1Config.UIID.UITips, $z1Utils.Utils.StringFormat.apply($z1Utils.Utils, cc__spreadArrays([this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTips06)], this.lockList[0])));
          } else {
            e = this.preWeap;
          }

          break;

        case "Toggle2":
          if (this.isLock(1)) {
            this.openUI($z1Config.UIID.UITips, $z1Utils.Utils.StringFormat.apply($z1Utils.Utils, cc__spreadArrays([this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTips06)], this.lockList[1])));
          } else {
            e = this.preTalent;
          }

          break;

        case "Toggle3":
          if (this.isLock(2)) {
            this.openUI($z1Config.UIID.UITips, $z1Utils.Utils.StringFormat.apply($z1Utils.Utils, cc__spreadArrays([this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTips06)], this.lockList[2])));
          } else {
            e = this.preBattle;
          }

          break;

        case "Toggle4":
          if (this.isLock(3)) {
            this.openUI($z1Config.UIID.UITips, $z1Utils.Utils.StringFormat.apply($z1Utils.Utils, cc__spreadArrays([this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTips06)], this.lockList[3])));
          } else {
            e = this.preTreasure;
          }

          break;

        case "Toggle5":
          if (this.isLock(4)) {
            this.openUI($z1Config.UIID.UITips, this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTips07));
          } else {
            e = this.preShop;
          }

      }

      if (e) {
        this.tagNode && this.tagNode.destroy();
        this.tagNode = cc.instantiate(e);
        this.tagNode.parent = this.ndMain;
        this.showTag(this.tag1, false);
        this.showTag(t, true);
        this.tag = t.node.name;
        this.tag1 = t;
      } else {
        this.tag1.isChecked = true;
      }

      this.tagNode.active = true;
    }
  };

  _ctor.prototype.showTag = function (t, e) {
    if (e) {
      var n = t.node.getChildByName("checkmark");
      cc.Tween.stopAllByTarget(n);
      cc.tween(n).set({
        y: -n.height
      }).to(.5, {
        y: 0
      }, {
        easing: "backOut"
      }).start();
    }
  };

  _ctor.prototype.showRed = function (t) {
    if (1 & t) {
      var e = !this.isLock(0) && $z1KinghtFallModle["default"].getInstance().showRedPerson();
      this.togCon.node.getChildByName("Toggle1").getChildByName("Background").getChildByName("ndRed").active = e;
      this.togCon.node.getChildByName("Toggle1").getChildByName("checkmark").getChildByName("ndRed").active = e;
    }

    if (2 & t) {
      e = !this.isLock(1) && $z1KinghtFallModle["default"].getInstance().showRedTanlent();
      this.togCon.node.getChildByName("Toggle2").getChildByName("Background").getChildByName("ndRed").active = e;
      this.togCon.node.getChildByName("Toggle2").getChildByName("checkmark").getChildByName("ndRed").active = e;
    }

    if (4 & t) {
      e = !this.isLock(2) && $z1KinghtFallModle["default"].getInstance().showRedFight();
      this.togCon.node.getChildByName("Toggle3").getChildByName("Background").getChildByName("ndRed").active = e;
      this.togCon.node.getChildByName("Toggle3").getChildByName("checkmark").getChildByName("ndRed").active = e;
    }

    if (8 & t) {
      e = !this.isLock(3) && $z1KinghtFallModle["default"].getInstance().showRedTreasure();
      this.togCon.node.getChildByName("Toggle4").getChildByName("Background").getChildByName("ndRed").active = e;
      this.togCon.node.getChildByName("Toggle4").getChildByName("checkmark").getChildByName("ndRed").active = e;
    }

    if (16 & t) {
      e = false;
      this.togCon.node.getChildByName("Toggle5").getChildByName("Background").getChildByName("ndRed").active = e;
      this.togCon.node.getChildByName("Toggle5").getChildByName("checkmark").getChildByName("ndRed").active = e;
    }
  };

  _ctor.prototype.onCloseUI = function (t) {
    var e = this;

    if (t == $z1Config.UIID.UIGuide) {
      var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGroupId();

      if (5 == n && !this.isLock(2)) {
        return void (0 == $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getStepId() && this.scheduleOnce(function () {
          e.startGuide();
        }));
      }

      if (1 != n) {
        return;
      }

      this.scheduleOnce(function () {
        e.startGuide();
      });
    }

    if (t == $z1KinghtFallConfig.KinghtFallUIID.UINewModular) {
      this.canGuide = true;
      this.scheduleOnce(function () {
        e.startGuide();
      });
    }

    if (t == $z1KinghtFallConfig.KinghtFallUIID.UIExchangeCode) {
      this.canGuide = true;
      this.startGuide();
    }
  };

  _ctor.prototype.startGuide = function (t, e, n) {
    var i = this;

    if ($z1PlatformSetting.PlatformSetting.currentPlatform != $z1BasePlatform.Platform.WEB_LINK && this.canGuide) {
      var a = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGroupId();

      if (!t || a == t) {
        var o = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGuideCfgById(a);

        if (!(o.length <= 0)) {
          var r;
          var l = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getStepId();
          var g = o[l];

          switch (a) {
            case 1:
              (r = new $z1UIGuide.GuildCfg()).isWeek = !!g.Close;
              r.showHand = g.Finger;
              r.hideMask = !g.Mask;
              r.tipstring = g.Describe;
              r.showAni = !!g.ShowKing;

              switch (l) {
                case 0:
                  r.deviationTipsAll = cc.v2(0, g.Offset || 0);
                  $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide2);
                  break;

                case 1:
                  var u = this.tagNode.getComponent($z1KinghtFallHomeBattleCtrl["default"]);
                  r.lightType = 1;
                  r.addSize = new cc.Size(0, 0);
                  r.distNode = u.btnBattle;
                  r.deviationTipsAll = cc.v2(0, g.Offset || 0);
              }

              break;

            case 4:
              if (this.isLock(0)) {
                return;
              }

              (r = new $z1UIGuide.GuildCfg()).isWeek = !!g.Close;
              r.showHand = g.Finger;
              r.hideMask = !g.Mask;
              r.tipstring = g.Describe;
              r.showAni = !!g.ShowKing;

              switch (l) {
                case 0:
                  r.lightType = 1;
                  r.addSize = new cc.Size(0, 0);
                  r.distNode = this.togCon.toggleItems[0].node;
                  r.deviationTipsAll = cc.v2(0, g.Offset || 0);

                  r.callBack = function () {
                    i.togCon.toggleItems[0].isChecked = true;
                    i.showView(i.togCon.toggleItems[0]);
                  };

                  $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide18);
                  break;

                case 1:
                  if (e) {
                    r.lightType = 1;
                    r.addSize = new cc.Size(0, 0);
                    r.distNode = e;
                    r.deviationTipsAll = cc.v2(0, g.Offset || 0);
                    $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide19);
                  } else {
                    r = null;
                  }

              }

              break;

            case 5:
              if (this.isLock(3)) {
                return;
              }

              (r = new $z1UIGuide.GuildCfg()).isWeek = !!g.Close;
              r.showHand = g.Finger;
              r.hideMask = !g.Mask;
              r.tipstring = g.Describe;
              r.showAni = !!g.ShowKing;

              switch (l) {
                case 0:
                  r.lightType = 1;
                  r.addSize = new cc.Size(0, 0);
                  r.distNode = this.togCon.toggleItems[3].node;
                  r.deviationTipsAll = cc.v2(0, g.Offset || 0);

                  r.callBack = function () {
                    i.togCon.toggleItems[3].isChecked = true;
                    i.showView(i.togCon.toggleItems[3]);
                  };

                  $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide20);
                  break;

                case 1:
                case 2:
                  if (e) {
                    r.lightType = 1;
                    r.addSize = new cc.Size(0, 0);
                    r.distNode = e;
                    r.deviationTipsAll = cc.v2(0, g.Offset || 0);
                    n && (r.callBack = n);
                    $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide22);
                    $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide21);
                  } else {
                    r = null;
                  }

              }

              break;

            case 6:
              if (this.isLock(1)) {
                return;
              }

              (r = new $z1UIGuide.GuildCfg()).isWeek = !!g.Close;
              r.showHand = g.Finger;
              r.hideMask = !g.Mask;
              r.tipstring = g.Describe;
              r.showAni = !!g.ShowKing;

              switch (l) {
                case 0:
                  r.lightType = 1;
                  r.addSize = new cc.Size(0, 0);
                  r.distNode = this.togCon.toggleItems[1].node;
                  r.deviationTipsAll = cc.v2(0, g.Offset || 0);

                  r.callBack = function () {
                    i.togCon.toggleItems[1].isChecked = true;
                    i.showView(i.togCon.toggleItems[1]);
                  };

                  $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide15);
                  break;

                case 1:
                case 2:
                  if (e) {
                    r.lightType = 1;
                    r.addSize = new cc.Size(0, 0);
                    r.distNode = e;
                    r.deviationTipsAll = cc.v2(0, g.Offset || 0);
                    n && (r.callBack = n);
                    $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide16);
                  } else {
                    r = null;
                  }

              }

          }

          if (r) {
            this.openUICallBack($z1Config.UIID.UIGuide, function () {
              if (o[l + 1]) {
                $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setStepId(l + 1);
              } else {
                $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setGroupId(a + 1);
                $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setStepId(0);
              }
            }, r);
          } else {
            this.sendEvent($z1Appcfg.BaseEventName.blocktouch, true);
          }
        }
      }
    }
  };

  cc__decorate([ccp_property({
    type: cc.ToggleContainer,
    tooltip: "Toggle group"
  })], _ctor.prototype, "togCon", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Main view"
  })], _ctor.prototype, "ndMain", undefined);
  cc__decorate([ccp_property({
    type: cc.Prefab,
    tooltip: "Gear"
  })], _ctor.prototype, "preWeap", undefined);
  cc__decorate([ccp_property({
    type: cc.Prefab,
    tooltip: "Talents"
  })], _ctor.prototype, "preTalent", undefined);
  cc__decorate([ccp_property({
    type: cc.Prefab,
    tooltip: "Battle tab"
  })], _ctor.prototype, "preBattle", undefined);
  cc__decorate([ccp_property({
    type: cc.Prefab,
    tooltip: "Relics"
  })], _ctor.prototype, "preTreasure", undefined);
  cc__decorate([ccp_property({
    type: cc.Prefab,
    tooltip: "Shop"
  })], _ctor.prototype, "preShop", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIHome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSUhvbWUuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsImNjX19zcHJlYWRBcnJheXMiLCJfX3NwcmVhZEFycmF5cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxQmFzZVBsYXRmb3JtIiwicmVxdWlyZSIsIiR6MUJhc2VVSSIsIiR6MUFwcGNmZyIsIiR6MVBsYXRmb3JtU2V0dGluZyIsIiR6MUF1ZGlvTWdyIiwiJHoxRmVlZENhcmRNZ3IiLCIkejFQb29sTWdyIiwiJHoxVXRpbHMiLCIkejFDb25maWciLCIkejFHYW1lVHJhY2tEYXRhRXZlbnQiLCIkejFQbGF5ZXJNZ3IiLCIkejFVSUd1aWRlIiwiJHoxTWFpbiIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsVGV4dENvbmZpZyIsIiR6MUtpbmdodEZhbGxFbnVtIiwiJHoxS2luZ2h0RmFsbERhdGFNZ3IiLCIkejFLaW5naHRGYWxsUGxheWVyTWdyIiwiJHoxS2luZ2h0RmFsbE1vZGxlIiwiJHoxS2luZ2h0RmFsbEhvbWVCYXR0bGVDdHJsIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxVSUhvbWUiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0b2dDb24iLCJuZE1haW4iLCJwcmVXZWFwIiwicHJlVGFsZW50IiwicHJlQmF0dGxlIiwicHJlVHJlYXN1cmUiLCJwcmVTaG9wIiwiY2FuR3VpZGUiLCJ0YWciLCJ0YWdOb2RlIiwicHJvdG90eXBlIiwib25FbmFibGUiLCJpbnN0YW5jZSIsInVpVG9wIiwiYWN0aXZlIiwiQXVkaW9NZ3IiLCJnZXRJbnN0YW5jZSIsInBsYXlNdXNpYyIsIktpbmdodEZhbGxBdWRpb0lkIiwibWVudV9iZ20iLCJLaW5naHRGYWxsUGFyYW1ldGVyIiwiQkdNdXNpYyIsIlBvb2xNZ3IiLCJjbGVhclBvb2wiLCJpbml0Vmlld1RvZ2ciLCJzaG93UmVkIiwib25EaXNhYmxlIiwic3RhcnQiLCJpbml0RXZlbnRMaXN0ZW5lciIsImluaXRCdG5MaXN0ZW5lciIsInRvZ2dsZUl0ZW1zIiwibGVuZ3RoIiwidHdCcmVhdGhlUmVkUG9pbnQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJ0YWcxIiwiaXNDaGVja2VkIiwic2hvd1ZpZXciLCJuIiwiRmVlZENhcmRNZ3IiLCJnZXRMYXVuY2hGcm9tRmVlZGNhcmQiLCJLaW5naHRGYWxsRGF0YU1nciIsImdldENvZGVKb2luIiwiYSIsImdpZnRfbnVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJLaW5naHRGYWxsUGxheWVyTWdyIiwiZ2V0R3VpZGVEYXRhIiwiZ2V0VGltZUJ5S2V5IiwiZXhjaGFuZ2VfdGltZSIsIm9wZW5VSSIsIktpbmdodEZhbGxVSUlEIiwiVUlFeGNoYW5nZUNvZGUiLCJzdGFydEd1aWRlIiwiYWRkRXZlbnQiLCJCYXNlRXZlbnROYW1lIiwiQ2xvc2VVSSIsIm9uQ2xvc2VVSSIsIktpbmdodEZhbGxFdmVudE5hbWUiLCJOZXdiaWVHdWlkZSIsIlVwZGF0ZVJlZFBvaW50IiwiUmVmcmVzaEdvbGQiLCJnZXRQYXJhbXNDZmdCeUlkIiwiS2luZ2h0RmFsbEVudW1QYXJhbWV0ZXJDZmciLCJCdXR0b25VbmxvY2siLCJsb2NrTGlzdCIsInNwbGl0IiwibWFwIiwiTnVtYmVyIiwiaXNMb2NrIiwiZ2V0VXNlckRhdGEiLCJnZXRGdW5jdGlvblVubG9ja0luZm8iLCJzZXRGdW5jdGlvblVubG9ja0luZm8iLCJwdXNoIiwiVUlOZXdNb2R1bGFyIiwiZ2V0TWF4U3RhZ2UiLCJnZXRNYXhPcmRlciIsIm9uIiwicGxheUF1ZGlvQnV0dG9uQ2xpY2tlZCIsIm5hbWUiLCJVSUlEIiwiVUlUaXBzIiwiVXRpbHMiLCJTdHJpbmdGb3JtYXQiLCJUIiwiS2luZ2h0RmFsbFRleHRDb25maWciLCJIb21lVGlwczA2IiwiSG9tZVRpcHMwNyIsImRlc3Ryb3kiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsInNob3dUYWciLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsInR3ZWVuIiwic2V0IiwieSIsImhlaWdodCIsInRvIiwiZWFzaW5nIiwic2hvd1JlZFBlcnNvbiIsInNob3dSZWRUYW5sZW50Iiwic2hvd1JlZEZpZ2h0Iiwic2hvd1JlZFRyZWFzdXJlIiwiVUlHdWlkZSIsImdldEdyb3VwSWQiLCJnZXRTdGVwSWQiLCJzY2hlZHVsZU9uY2UiLCJQbGF0Zm9ybVNldHRpbmciLCJjdXJyZW50UGxhdGZvcm0iLCJQbGF0Zm9ybSIsIldFQl9MSU5LIiwibyIsImdldEd1aWRlQ2ZnQnlJZCIsInIiLCJsIiwiZyIsIkd1aWxkQ2ZnIiwiaXNXZWVrIiwiQ2xvc2UiLCJzaG93SGFuZCIsIkZpbmdlciIsImhpZGVNYXNrIiwiTWFzayIsInRpcHN0cmluZyIsIkRlc2NyaWJlIiwic2hvd0FuaSIsIlNob3dLaW5nIiwiZGV2aWF0aW9uVGlwc0FsbCIsInYyIiwiT2Zmc2V0IiwiUGxheWVyTWdyIiwiZ2V0VHJhY2tEYXRhIiwieW91bWVuZ1RyYWNrIiwiVHJhY2tJZCIsImd1aWRlMiIsInUiLCJnZXRDb21wb25lbnQiLCJsaWdodFR5cGUiLCJhZGRTaXplIiwiU2l6ZSIsImRpc3ROb2RlIiwiYnRuQmF0dGxlIiwiY2FsbEJhY2siLCJndWlkZTE4IiwiZ3VpZGUxOSIsImd1aWRlMjAiLCJndWlkZTIyIiwiZ3VpZGUyMSIsImd1aWRlMTUiLCJndWlkZTE2Iiwib3BlblVJQ2FsbEJhY2siLCJzZXRTdGVwSWQiLCJzZXRHcm91cElkIiwic2VuZEV2ZW50IiwiYmxvY2t0b3VjaCIsInR5cGUiLCJUb2dnbGVDb250YWluZXIiLCJ0b29sdGlwIiwidW5kZWZpbmVkIiwiTm9kZSIsIlByZWZhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QyxFQUdVLFNBSFYsRUFHcUJxSixTQUhyQixDQUFaO0VBSUF6TSxZQUFZLENBQUMsQ0FBQ2tDLFlBQVksQ0FBQztJQUN6Qm9LLElBQUksRUFBRXhLLEVBQUUsQ0FBQzZLLE1BRGdCO0lBRXpCSCxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUGxLLEtBQUssQ0FBQ2MsU0FIQyxFQUdVLFdBSFYsRUFHdUJxSixTQUh2QixDQUFaO0VBSUF6TSxZQUFZLENBQUMsQ0FBQ2tDLFlBQVksQ0FBQztJQUN6Qm9LLElBQUksRUFBRXhLLEVBQUUsQ0FBQzZLLE1BRGdCO0lBRXpCSCxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUGxLLEtBQUssQ0FBQ2MsU0FIQyxFQUdVLFdBSFYsRUFHdUJxSixTQUh2QixDQUFaO0VBSUF6TSxZQUFZLENBQUMsQ0FBQ2tDLFlBQVksQ0FBQztJQUN6Qm9LLElBQUksRUFBRXhLLEVBQUUsQ0FBQzZLLE1BRGdCO0lBRXpCSCxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUGxLLEtBQUssQ0FBQ2MsU0FIQyxFQUdVLGFBSFYsRUFHeUJxSixTQUh6QixDQUFaO0VBSUF6TSxZQUFZLENBQUMsQ0FBQ2tDLFlBQVksQ0FBQztJQUN6Qm9LLElBQUksRUFBRXhLLEVBQUUsQ0FBQzZLLE1BRGdCO0lBRXpCSCxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUGxLLEtBQUssQ0FBQ2MsU0FIQyxFQUdVLFNBSFYsRUFHcUJxSixTQUhyQixDQUFaO0VBSUEsT0FBT3pNLFlBQVksQ0FBQyxDQUFDZ0MsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBOVkwQixDQThZekI1QixTQUFTLFdBOVlnQixDQUEzQjs7QUErWUFKLE9BQU8sV0FBUCxHQUFrQjhCLG9CQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbnZhciBjY19fc3ByZWFkQXJyYXlzID0gX19zcHJlYWRBcnJheXM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VQbGF0Zm9ybSA9IHJlcXVpcmUoXCJCYXNlUGxhdGZvcm1cIik7XG52YXIgJHoxQmFzZVVJID0gcmVxdWlyZShcIkJhc2VVSVwiKTtcbnZhciAkejFBcHBjZmcgPSByZXF1aXJlKFwiQXBwY2ZnXCIpO1xudmFyICR6MVBsYXRmb3JtU2V0dGluZyA9IHJlcXVpcmUoXCJQbGF0Zm9ybVNldHRpbmdcIik7XG52YXIgJHoxQXVkaW9NZ3IgPSByZXF1aXJlKFwiQXVkaW9NZ3JcIik7XG52YXIgJHoxRmVlZENhcmRNZ3IgPSByZXF1aXJlKFwiRmVlZENhcmRNZ3JcIik7XG52YXIgJHoxUG9vbE1nciA9IHJlcXVpcmUoXCJQb29sTWdyXCIpO1xudmFyICR6MVV0aWxzID0gcmVxdWlyZShcIlV0aWxzXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgJHoxR2FtZVRyYWNrRGF0YUV2ZW50ID0gcmVxdWlyZShcIkdhbWVUcmFja0RhdGFFdmVudFwiKTtcbnZhciAkejFQbGF5ZXJNZ3IgPSByZXF1aXJlKFwiUGxheWVyTWdyXCIpO1xudmFyICR6MVVJR3VpZGUgPSByZXF1aXJlKFwiVUlHdWlkZVwiKTtcbnZhciAkejFNYWluID0gcmVxdWlyZShcIk1haW5cIik7XG52YXIgJHoxS2luZ2h0RmFsbENvbmZpZyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29uZmlnXCIpO1xudmFyICR6MUtpbmdodEZhbGxUZXh0Q29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxUZXh0Q29uZmlnXCIpO1xudmFyICR6MUtpbmdodEZhbGxFbnVtID0gcmVxdWlyZShcIktpbmdodEZhbGxFbnVtXCIpO1xudmFyICR6MUtpbmdodEZhbGxEYXRhTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxEYXRhTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFBsYXllck1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsTW9kbGUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbE1vZGxlXCIpO1xudmFyICR6MUtpbmdodEZhbGxIb21lQmF0dGxlQ3RybCA9IHJlcXVpcmUoXCJLaW5naHRGYWxsSG9tZUJhdHRsZUN0cmxcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbFVJSG9tZSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLnRvZ0NvbiA9IG51bGw7XG4gICAgZS5uZE1haW4gPSBudWxsO1xuICAgIGUucHJlV2VhcCA9IG51bGw7XG4gICAgZS5wcmVUYWxlbnQgPSBudWxsO1xuICAgIGUucHJlQmF0dGxlID0gbnVsbDtcbiAgICBlLnByZVRyZWFzdXJlID0gbnVsbDtcbiAgICBlLnByZVNob3AgPSBudWxsO1xuICAgIGUuY2FuR3VpZGUgPSB0cnVlO1xuICAgIGUudGFnID0gXCJcIjtcbiAgICBlLnRhZ05vZGUgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICR6MU1haW4uZGVmYXVsdC5pbnN0YW5jZS51aVRvcC5hY3RpdmUgPSB0cnVlO1xuICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheU11c2ljKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEF1ZGlvSWQubWVudV9iZ20sICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5CR011c2ljKTtcbiAgICAkejFQb29sTWdyLlBvb2xNZ3IuZ2V0SW5zdGFuY2UoKS5jbGVhclBvb2woKTtcbiAgICB0aGlzLmluaXRWaWV3VG9nZygpO1xuICAgIHRoaXMuc2hvd1JlZCgzMSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHoxTWFpbi5kZWZhdWx0Lmluc3RhbmNlLnVpVG9wLmFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcigpO1xuICAgIHRoaXMuaW5pdEJ0bkxpc3RlbmVyKCk7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLnRvZ0Nvbi50b2dnbGVJdGVtcy5sZW5ndGg7IHQrKykge1xuICAgICAgdmFyIGUgPSB0aGlzLnRvZ0Nvbi50b2dnbGVJdGVtc1t0XTtcbiAgICAgICR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkudHdCcmVhdGhlUmVkUG9pbnQoZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpKTtcbiAgICAgICR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkudHdCcmVhdGhlUmVkUG9pbnQoZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hlY2ttYXJrXCIpLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikpO1xuICAgIH1cbiAgICB0aGlzLnRhZzEgPSB0aGlzLnRvZ0Nvbi50b2dnbGVJdGVtc1syXTtcbiAgICB0aGlzLnRhZzEuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dWaWV3KHRoaXMudGFnMSk7XG4gICAgdmFyIG4gPSB0cnVlO1xuICAgIGlmICgkejFGZWVkQ2FyZE1nci5GZWVkQ2FyZE1nci5pbnN0YW5jZS5nZXRMYXVuY2hGcm9tRmVlZGNhcmQoKSkge1xuICAgICAgdmFyIGkgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldENvZGVKb2luKDEpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdmFyIGEgPSBcImdpZnRfXCIgKyBpLmdpZnRfbnVtLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5nZXRUaW1lQnlLZXkoYSkgPCBpLmV4Y2hhbmdlX3RpbWUpIHtcbiAgICAgICAgICB0aGlzLm9wZW5VSSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJRXhjaGFuZ2VDb2RlLCBpLmdpZnRfbnVtKTtcbiAgICAgICAgICBuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbiAmJiB0aGlzLnN0YXJ0R3VpZGUoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUFwcGNmZy5CYXNlRXZlbnROYW1lLkNsb3NlVUksIHRoaXMub25DbG9zZVVJKTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5OZXdiaWVHdWlkZSwgdGhpcy5zdGFydEd1aWRlKTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5VcGRhdGVSZWRQb2ludCwgdGhpcy5zaG93UmVkKTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5SZWZyZXNoR29sZCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5zaG93UmVkKDExKTtcbiAgICB9KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRWaWV3VG9nZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0UGFyYW1zQ2ZnQnlJZCgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVBhcmFtZXRlckNmZy5CdXR0b25VbmxvY2spO1xuICAgIHRoaXMubG9ja0xpc3QgPSB0LnNwbGl0KFwiO1wiKS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICB9KTtcbiAgICB2YXIgZSA9IFtdO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy50b2dDb24udG9nZ2xlSXRlbXMubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gdGhpcy50b2dDb24udG9nZ2xlSXRlbXNbbl07XG4gICAgICB2YXIgYSA9IHRoaXMuaXNMb2NrKG4pO1xuICAgICAgaWYgKCEoYSB8fCAtMSA9PSB0aGlzLmxvY2tMaXN0W25dWzBdIHx8ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0RnVuY3Rpb25VbmxvY2tJbmZvKG4pKSkge1xuICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldEZ1bmN0aW9uVW5sb2NrSW5mbyhuKTtcbiAgICAgICAgZS5wdXNoKG4pO1xuICAgICAgfVxuICAgICAgaS5ub2RlLmdldENoaWxkQnlOYW1lKFwibmRMb2NrXCIpLmFjdGl2ZSA9IGE7XG4gICAgfVxuICAgIGlmIChlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2FuR3VpZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlOZXdNb2R1bGFyLCBlKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pc0xvY2sgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICgtMSA9PSB0aGlzLmxvY2tMaXN0W3RdWzBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRNYXhTdGFnZSgpO1xuICAgIGlmICh0aGlzLmxvY2tMaXN0W3RdWzBdIDwgZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2NrTGlzdFt0XVswXSA+IGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0TWF4T3JkZXIoKTtcbiAgICByZXR1cm4gdGhpcy5sb2NrTGlzdFt0XVsxXSA+IG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0QnRuTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLnRvZ0Nvbi50b2dnbGVJdGVtcy5sZW5ndGg7IHQrKykge1xuICAgICAgdGhpcy50b2dDb24udG9nZ2xlSXRlbXNbdF0ubm9kZS5vbihcInRvZ2dsZVwiLCB0aGlzLnNob3dWaWV3LCB0aGlzKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zaG93VmlldyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5QXVkaW9CdXR0b25DbGlja2VkKCk7XG4gICAgaWYgKHQuaXNDaGVja2VkICYmIHRoaXMudGFnICE9IHQubm9kZS5uYW1lKSB7XG4gICAgICB2YXIgZSA9IG51bGw7XG4gICAgICBzd2l0Y2ggKHQubm9kZS5uYW1lKSB7XG4gICAgICAgIGNhc2UgXCJUb2dnbGUxXCI6XG4gICAgICAgICAgaWYgKHRoaXMuaXNMb2NrKDApKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5VSSgkejFDb25maWcuVUlJRC5VSVRpcHMsICR6MVV0aWxzLlV0aWxzLlN0cmluZ0Zvcm1hdC5hcHBseSgkejFVdGlscy5VdGlscywgY2NfX3NwcmVhZEFycmF5cyhbdGhpcy5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkhvbWVUaXBzMDYpXSwgdGhpcy5sb2NrTGlzdFswXSkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSA9IHRoaXMucHJlV2VhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJUb2dnbGUyXCI6XG4gICAgICAgICAgaWYgKHRoaXMuaXNMb2NrKDEpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5VSSgkejFDb25maWcuVUlJRC5VSVRpcHMsICR6MVV0aWxzLlV0aWxzLlN0cmluZ0Zvcm1hdC5hcHBseSgkejFVdGlscy5VdGlscywgY2NfX3NwcmVhZEFycmF5cyhbdGhpcy5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkhvbWVUaXBzMDYpXSwgdGhpcy5sb2NrTGlzdFsxXSkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSA9IHRoaXMucHJlVGFsZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRvZ2dsZTNcIjpcbiAgICAgICAgICBpZiAodGhpcy5pc0xvY2soMikpIHtcbiAgICAgICAgICAgIHRoaXMub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJVGlwcywgJHoxVXRpbHMuVXRpbHMuU3RyaW5nRm9ybWF0LmFwcGx5KCR6MVV0aWxzLlV0aWxzLCBjY19fc3ByZWFkQXJyYXlzKFt0aGlzLlQoJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuSG9tZVRpcHMwNildLCB0aGlzLmxvY2tMaXN0WzJdKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlID0gdGhpcy5wcmVCYXR0bGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiVG9nZ2xlNFwiOlxuICAgICAgICAgIGlmICh0aGlzLmlzTG9jaygzKSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlUaXBzLCAkejFVdGlscy5VdGlscy5TdHJpbmdGb3JtYXQuYXBwbHkoJHoxVXRpbHMuVXRpbHMsIGNjX19zcHJlYWRBcnJheXMoW3RoaXMuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5Ib21lVGlwczA2KV0sIHRoaXMubG9ja0xpc3RbM10pKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUgPSB0aGlzLnByZVRyZWFzdXJlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRvZ2dsZTVcIjpcbiAgICAgICAgICBpZiAodGhpcy5pc0xvY2soNCkpIHtcbiAgICAgICAgICAgIHRoaXMub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJVGlwcywgdGhpcy5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkhvbWVUaXBzMDcpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSA9IHRoaXMucHJlU2hvcDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0aGlzLnRhZ05vZGUgJiYgdGhpcy50YWdOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy50YWdOb2RlID0gY2MuaW5zdGFudGlhdGUoZSk7XG4gICAgICAgIHRoaXMudGFnTm9kZS5wYXJlbnQgPSB0aGlzLm5kTWFpbjtcbiAgICAgICAgdGhpcy5zaG93VGFnKHRoaXMudGFnMSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3dUYWcodCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGFnID0gdC5ub2RlLm5hbWU7XG4gICAgICAgIHRoaXMudGFnMSA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhZzEuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFnTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dUYWcgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgbiA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNoZWNrbWFya1wiKTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChuKTtcbiAgICAgIGNjLnR3ZWVuKG4pLnNldCh7XG4gICAgICAgIHk6IC1uLmhlaWdodFxuICAgICAgfSkudG8oLjUsIHtcbiAgICAgICAgeTogMFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dSZWQgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICgxICYgdCkge1xuICAgICAgdmFyIGUgPSAhdGhpcy5pc0xvY2soMCkgJiYgJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5zaG93UmVkUGVyc29uKCk7XG4gICAgICB0aGlzLnRvZ0Nvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9nZ2xlMVwiKS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSBlO1xuICAgICAgdGhpcy50b2dDb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRvZ2dsZTFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjaGVja21hcmtcIikuZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSBlO1xuICAgIH1cbiAgICBpZiAoMiAmIHQpIHtcbiAgICAgIGUgPSAhdGhpcy5pc0xvY2soMSkgJiYgJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5zaG93UmVkVGFubGVudCgpO1xuICAgICAgdGhpcy50b2dDb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRvZ2dsZTJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikuYWN0aXZlID0gZTtcbiAgICAgIHRoaXMudG9nQ29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUb2dnbGUyXCIpLmdldENoaWxkQnlOYW1lKFwiY2hlY2ttYXJrXCIpLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikuYWN0aXZlID0gZTtcbiAgICB9XG4gICAgaWYgKDQgJiB0KSB7XG4gICAgICBlID0gIXRoaXMuaXNMb2NrKDIpICYmICR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkuc2hvd1JlZEZpZ2h0KCk7XG4gICAgICB0aGlzLnRvZ0Nvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9nZ2xlM1wiKS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSBlO1xuICAgICAgdGhpcy50b2dDb24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRvZ2dsZTNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjaGVja21hcmtcIikuZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSBlO1xuICAgIH1cbiAgICBpZiAoOCAmIHQpIHtcbiAgICAgIGUgPSAhdGhpcy5pc0xvY2soMykgJiYgJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5zaG93UmVkVHJlYXN1cmUoKTtcbiAgICAgIHRoaXMudG9nQ29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUb2dnbGU0XCIpLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpLmFjdGl2ZSA9IGU7XG4gICAgICB0aGlzLnRvZ0Nvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9nZ2xlNFwiKS5nZXRDaGlsZEJ5TmFtZShcImNoZWNrbWFya1wiKS5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpLmFjdGl2ZSA9IGU7XG4gICAgfVxuICAgIGlmICgxNiAmIHQpIHtcbiAgICAgIGUgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9nQ29uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUb2dnbGU1XCIpLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpLmFjdGl2ZSA9IGU7XG4gICAgICB0aGlzLnRvZ0Nvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9nZ2xlNVwiKS5nZXRDaGlsZEJ5TmFtZShcImNoZWNrbWFya1wiKS5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpLmFjdGl2ZSA9IGU7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25DbG9zZVVJID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHQgPT0gJHoxQ29uZmlnLlVJSUQuVUlHdWlkZSkge1xuICAgICAgdmFyIG4gPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5nZXRHcm91cElkKCk7XG4gICAgICBpZiAoNSA9PSBuICYmICF0aGlzLmlzTG9jaygyKSkge1xuICAgICAgICByZXR1cm4gdm9pZCAoMCA9PSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5nZXRTdGVwSWQoKSAmJiB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZS5zdGFydEd1aWRlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIGlmICgxICE9IG4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnN0YXJ0R3VpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodCA9PSAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJTmV3TW9kdWxhcikge1xuICAgICAgdGhpcy5jYW5HdWlkZSA9IHRydWU7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuc3RhcnRHdWlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0ID09ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlFeGNoYW5nZUNvZGUpIHtcbiAgICAgIHRoaXMuY2FuR3VpZGUgPSB0cnVlO1xuICAgICAgdGhpcy5zdGFydEd1aWRlKCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnRHdWlkZSA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIGlmICgkejFQbGF0Zm9ybVNldHRpbmcuUGxhdGZvcm1TZXR0aW5nLmN1cnJlbnRQbGF0Zm9ybSAhPSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uV0VCX0xJTksgJiYgdGhpcy5jYW5HdWlkZSkge1xuICAgICAgdmFyIGEgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5nZXRHcm91cElkKCk7XG4gICAgICBpZiAoIXQgfHwgYSA9PSB0KSB7XG4gICAgICAgIHZhciBvID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZUNmZ0J5SWQoYSk7XG4gICAgICAgIGlmICghKG8ubGVuZ3RoIDw9IDApKSB7XG4gICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgdmFyIGwgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5nZXRTdGVwSWQoKTtcbiAgICAgICAgICB2YXIgZyA9IG9bbF07XG4gICAgICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIChyID0gbmV3ICR6MVVJR3VpZGUuR3VpbGRDZmcoKSkuaXNXZWVrID0gISFnLkNsb3NlO1xuICAgICAgICAgICAgICByLnNob3dIYW5kID0gZy5GaW5nZXI7XG4gICAgICAgICAgICAgIHIuaGlkZU1hc2sgPSAhZy5NYXNrO1xuICAgICAgICAgICAgICByLnRpcHN0cmluZyA9IGcuRGVzY3JpYmU7XG4gICAgICAgICAgICAgIHIuc2hvd0FuaSA9ICEhZy5TaG93S2luZztcbiAgICAgICAgICAgICAgc3dpdGNoIChsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgci5kZXZpYXRpb25UaXBzQWxsID0gY2MudjIoMCwgZy5PZmZzZXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlMik7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICB2YXIgdSA9IHRoaXMudGFnTm9kZS5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEhvbWVCYXR0bGVDdHJsLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgci5saWdodFR5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgci5hZGRTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gICAgICAgICAgICAgICAgICByLmRpc3ROb2RlID0gdS5idG5CYXR0bGU7XG4gICAgICAgICAgICAgICAgICByLmRldmlhdGlvblRpcHNBbGwgPSBjYy52MigwLCBnLk9mZnNldCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2NrKDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIChyID0gbmV3ICR6MVVJR3VpZGUuR3VpbGRDZmcoKSkuaXNXZWVrID0gISFnLkNsb3NlO1xuICAgICAgICAgICAgICByLnNob3dIYW5kID0gZy5GaW5nZXI7XG4gICAgICAgICAgICAgIHIuaGlkZU1hc2sgPSAhZy5NYXNrO1xuICAgICAgICAgICAgICByLnRpcHN0cmluZyA9IGcuRGVzY3JpYmU7XG4gICAgICAgICAgICAgIHIuc2hvd0FuaSA9ICEhZy5TaG93S2luZztcbiAgICAgICAgICAgICAgc3dpdGNoIChsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgci5saWdodFR5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgci5hZGRTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gICAgICAgICAgICAgICAgICByLmRpc3ROb2RlID0gdGhpcy50b2dDb24udG9nZ2xlSXRlbXNbMF0ubm9kZTtcbiAgICAgICAgICAgICAgICAgIHIuZGV2aWF0aW9uVGlwc0FsbCA9IGNjLnYyKDAsIGcuT2Zmc2V0IHx8IDApO1xuICAgICAgICAgICAgICAgICAgci5jYWxsQmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS50b2dDb24udG9nZ2xlSXRlbXNbMF0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaS5zaG93VmlldyhpLnRvZ0Nvbi50b2dnbGVJdGVtc1swXSk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ndWlkZTE4KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHIubGlnaHRUeXBlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgci5hZGRTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHIuZGlzdE5vZGUgPSBlO1xuICAgICAgICAgICAgICAgICAgICByLmRldmlhdGlvblRpcHNBbGwgPSBjYy52MigwLCBnLk9mZnNldCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ndWlkZTE5KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvY2soMykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKHIgPSBuZXcgJHoxVUlHdWlkZS5HdWlsZENmZygpKS5pc1dlZWsgPSAhIWcuQ2xvc2U7XG4gICAgICAgICAgICAgIHIuc2hvd0hhbmQgPSBnLkZpbmdlcjtcbiAgICAgICAgICAgICAgci5oaWRlTWFzayA9ICFnLk1hc2s7XG4gICAgICAgICAgICAgIHIudGlwc3RyaW5nID0gZy5EZXNjcmliZTtcbiAgICAgICAgICAgICAgci5zaG93QW5pID0gISFnLlNob3dLaW5nO1xuICAgICAgICAgICAgICBzd2l0Y2ggKGwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICByLmxpZ2h0VHlwZSA9IDE7XG4gICAgICAgICAgICAgICAgICByLmFkZFNpemUgPSBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgICAgICAgICAgICAgICAgIHIuZGlzdE5vZGUgPSB0aGlzLnRvZ0Nvbi50b2dnbGVJdGVtc1szXS5ub2RlO1xuICAgICAgICAgICAgICAgICAgci5kZXZpYXRpb25UaXBzQWxsID0gY2MudjIoMCwgZy5PZmZzZXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICByLmNhbGxCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpLnRvZ0Nvbi50b2dnbGVJdGVtc1szXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpLnNob3dWaWV3KGkudG9nQ29uLnRvZ2dsZUl0ZW1zWzNdKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlMjApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHIubGlnaHRUeXBlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgci5hZGRTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHIuZGlzdE5vZGUgPSBlO1xuICAgICAgICAgICAgICAgICAgICByLmRldmlhdGlvblRpcHNBbGwgPSBjYy52MigwLCBnLk9mZnNldCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgbiAmJiAoci5jYWxsQmFjayA9IG4pO1xuICAgICAgICAgICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlMjIpO1xuICAgICAgICAgICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlMjEpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGlmICh0aGlzLmlzTG9jaygxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAociA9IG5ldyAkejFVSUd1aWRlLkd1aWxkQ2ZnKCkpLmlzV2VlayA9ICEhZy5DbG9zZTtcbiAgICAgICAgICAgICAgci5zaG93SGFuZCA9IGcuRmluZ2VyO1xuICAgICAgICAgICAgICByLmhpZGVNYXNrID0gIWcuTWFzaztcbiAgICAgICAgICAgICAgci50aXBzdHJpbmcgPSBnLkRlc2NyaWJlO1xuICAgICAgICAgICAgICByLnNob3dBbmkgPSAhIWcuU2hvd0tpbmc7XG4gICAgICAgICAgICAgIHN3aXRjaCAobCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHIubGlnaHRUeXBlID0gMTtcbiAgICAgICAgICAgICAgICAgIHIuYWRkU2l6ZSA9IG5ldyBjYy5TaXplKDAsIDApO1xuICAgICAgICAgICAgICAgICAgci5kaXN0Tm9kZSA9IHRoaXMudG9nQ29uLnRvZ2dsZUl0ZW1zWzFdLm5vZGU7XG4gICAgICAgICAgICAgICAgICByLmRldmlhdGlvblRpcHNBbGwgPSBjYy52MigwLCBnLk9mZnNldCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgIHIuY2FsbEJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGkudG9nQ29uLnRvZ2dsZUl0ZW1zWzFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGkuc2hvd1ZpZXcoaS50b2dDb24udG9nZ2xlSXRlbXNbMV0pO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZ3VpZGUxNSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgci5saWdodFR5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICByLmFkZFNpemUgPSBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgci5kaXN0Tm9kZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgIHIuZGV2aWF0aW9uVGlwc0FsbCA9IGNjLnYyKDAsIGcuT2Zmc2V0IHx8IDApO1xuICAgICAgICAgICAgICAgICAgICBuICYmIChyLmNhbGxCYWNrID0gbik7XG4gICAgICAgICAgICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZ3VpZGUxNik7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgdGhpcy5vcGVuVUlDYWxsQmFjaygkejFDb25maWcuVUlJRC5VSUd1aWRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChvW2wgKyAxXSkge1xuICAgICAgICAgICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLnNldFN0ZXBJZChsICsgMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuc2V0R3JvdXBJZChhICsgMSk7XG4gICAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuc2V0U3RlcElkKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kRXZlbnQoJHoxQXBwY2ZnLkJhc2VFdmVudE5hbWUuYmxvY2t0b3VjaCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuVG9nZ2xlQ29udGFpbmVyLFxuICAgIHRvb2x0aXA6IFwiVG9nZ2xlIGdyb3VwXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwidG9nQ29uXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiTWFpbiB2aWV3XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRNYWluXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgdG9vbHRpcDogXCJHZWFyXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwicHJlV2VhcFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuUHJlZmFiLFxuICAgIHRvb2x0aXA6IFwiVGFsZW50c1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInByZVRhbGVudFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuUHJlZmFiLFxuICAgIHRvb2x0aXA6IFwiQmF0dGxlIHRhYlwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInByZUJhdHRsZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuUHJlZmFiLFxuICAgIHRvb2x0aXA6IFwiUmVsaWNzXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwicHJlVHJlYXN1cmVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICB0b29sdGlwOiBcIlNob3BcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJwcmVTaG9wXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFCYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbFVJSG9tZTsiXX0=