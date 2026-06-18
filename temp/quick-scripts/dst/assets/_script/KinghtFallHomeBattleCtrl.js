
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallHomeBattleCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2edc0LT561NYq6/nEH94D+P', 'KinghtFallHomeBattleCtrl');
// _script/KinghtFallHomeBattleCtrl.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
var cc__spreadArrays = __spreadArrays;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1GAD_App = require("GAD_App");

var $z1BaseCtrl = require("BaseCtrl");

var $z1BasePlatform = require("BasePlatform");

var $z1Appcfg = require("Appcfg");

var $z1PlatformSetting = require("PlatformSetting");

var $z1AudioMgr = require("AudioMgr");

var $z1PlatformManager = require("PlatformManager");

var $z1PoolMgr = require("PoolMgr");

var $z1ResourceMgr = require("ResourceMgr");

var $z1SdkMgr = require("SdkMgr");

var $z1UIMgr = require("UIMgr");

var $z1Utils = require("Utils");

var $z1Config = require("Config");

var $z1TextConfig = require("TextConfig");

var $z1GameTrackData = require("GameTrackData");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallMissionData = require("KinghtFallMissionData");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallItemGood = require("KinghtFallItemGood");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallHomeBattleCtrl = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndLevelInfo = null;
    e.btnLeft = null;
    e.btnRight = null;
    e.ndBoxShow = null;
    e.btnBattle = null;
    e.ndTaskInfo = null;
    e.ndBtnLeft = null;
    e.btnAchieve = null;
    e.btnPassport = null;
    e.btnOnline = null;
    e.btnSign = null;
    e.btnSetting = null;
    e.btnAddDesktop = null;
    e.btnSideBoard = null;
    e.btnSubEnter = null;
    e.btnSubBg = null;
    e.costEnergy = 50;
    e.isLeftUp = true;
    e.isEnter = false;
    e.haveArrow = false;
    e.subPlayTime = [];
    e.subPlayStage = [];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onLoad = function () {
    this.cfgList = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getLevelCfgList();
    this.costEnergy = parseInt($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.StaminaCost));
    this.btnBattle.getChildByName("Layout").getChildByName("labNum").getComponent(cc.Label).string = "" + this.costEnergy;
  };

  _ctor.prototype.onEnable = function () {
    var t = this;
    this.newSel();
    this.onUpdateTask();
    this.scheduleOnce(function () {
      if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGuideEnd()) {
        t.sendEvent($z1Appcfg.BaseEventName.RefreshReport, false);
      } else {
        t.sendEvent($z1Appcfg.BaseEventName.RefreshReport, true, t.btnReport.convertToWorldSpaceAR(cc.Vec2.ZERO));
      }
    }, .1);
  };

  _ctor.prototype.start = function () {
    this.initEventListener();
    this.initBtnListener();
    this.initSubView();
    this.showRed();
    $z1KinghtFallModle["default"].getInstance().twBreatheRedPoint(this.btnAchieve.getChildByName("ndRed"));
    $z1KinghtFallModle["default"].getInstance().twBreatheRedPoint(this.btnPassport.getChildByName("ndRed"));
    $z1KinghtFallModle["default"].getInstance().twBreatheRedPoint(this.btnOnline.getChildByName("ndRed"));
    $z1KinghtFallModle["default"].getInstance().twBreatheRedPoint(this.btnSign.getChildByName("ndRed"));
  };

  _ctor.prototype.initEventListener = function () {
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.TimeUpdate, this.showRed);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.UpBattView, this.newSel);
  };

  _ctor.prototype.initBtnListener = function () {
    var t = this;
    this.ndLevelInfo.getChildByName("ndAniClick").on(cc.Node.EventType.TOUCH_END, function () {
      var e = t.ndLevelInfo.getChildByName("spAni").getComponent(sp.Skeleton);

      if (e.skeletonData && "idle" == e.animation) {
        e.setAnimation(0, "attack", false);
        e.addAnimation(0, "idle", true);
      }
    }, this);
    this.btnLeft.on(cc.Node.EventType.TOUCH_END, function () {
      $z1AudioMgr.AudioMgr.getInstance().playEffect($z1KinghtFallConfig.KinghtFallAudioId.Scroll_down);
      t.selectStage--;
      t.initMapView();
      t.initBtnView();
    }, this);
    this.btnRight.on(cc.Node.EventType.TOUCH_END, function () {
      $z1AudioMgr.AudioMgr.getInstance().playEffect($z1KinghtFallConfig.KinghtFallAudioId.Scroll_down);
      t.selectStage++;
      t.initMapView();
      t.initBtnView();
    }, this);

    var e = function e(_e) {
      n.ndBoxShow.getChildByName("ndTag" + (_e + 1)).on(cc.Node.EventType.TOUCH_END, function () {
        t.onBoxClick(_e);
      }, n);
    };

    var n = this;

    for (var i = 0; i < 3; i++) {
      e(i);
    }

    this.ndTaskInfo.on(cc.Node.EventType.TOUCH_END, this.onTaskClick, this);
    this.initMorePlay();
    this.ndBtnLeft.getChildByName("btnMove").on(cc.Node.EventType.TOUCH_END, function (e) {
      e.stopPropagation();
      t.isLeftUp = !t.isLeftUp;
      t.initMorePlay();
    }, this);
    this.btnAchieve.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIAchievement, $z1Config.UIID.UIHome);
    }, this);
    this.btnPassport.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIPassport, $z1Config.UIID.UIHome);
    }, this);
    this.btnOnline.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIOnlineReward, $z1Config.UIID.UIHome);
    }, this);
    this.btnSign.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UISignIn, $z1Config.UIID.UIHome);
    }, this);
    this.btnSetting.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UISetting, $z1Config.UIID.UIHome);
    }, this);
    var a = $z1PlatformSetting.PlatformSetting.currentPlatform == $z1BasePlatform.Platform.BYTEDANCE || $z1PlatformSetting.PlatformSetting.currentPlatform == $z1BasePlatform.Platform.KuaiShou || $z1PlatformSetting.PlatformSetting.currentPlatform == $z1BasePlatform.Platform.EDITOR;
    this.btnSideBoard.active = a;
    this.btnAddDesktop.active = a;
    this.btnAddDesktop.on(cc.Node.EventType.TOUCH_END, function () {
      t.onClickShortCut();
    }, this);
    this.btnSideBoard.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UISideBoard, $z1Config.UIID.UIHome);
    }, this);
    this.btnReport.active = !$z1SdkMgr.SdkMgr.getInstance().getCheckVersion($z1PlatformSetting.SwitchID.ShenHe) && ($z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.WECHAT || $z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.BYTEDANCE || $z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.EDITOR || $z1PlatformManager.PlatformManager.currentPlatform == $z1BasePlatform.Platform.KuaiShou);
    this.btnReport.on(cc.Node.EventType.TOUCH_END, function () {
      $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UIReport, $z1Config.UIID.UIHome);
    });

    if ($z1PlatformSetting.PlatformSetting.currentPlatform == $z1BasePlatform.Platform.VIVO) {
      this.scheduleOnce(function () {
        t.btnBattle.on(cc.Node.EventType.TOUCH_END, t.onStartGame, t);
      }, 1);
    } else {
      this.btnBattle.on(cc.Node.EventType.TOUCH_END, this.onStartGame, this);
    }
  };

  _ctor.prototype.newSel = function () {
    this.selectStage = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getStage();
    this.selectStage > this.cfgList.length && (this.selectStage = this.cfgList.length);
    this.initMapView();
    this.initBtnView();
  };

  _ctor.prototype.initMapView = function () {
    var t = this;
    var e = this.cfgList[this.selectStage - 1];
    var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage();
    this.ndLevelInfo.getChildByName("labName").getComponent(cc.Label).string = this.T(e.Name);
    this.ndLevelInfo.getChildByName("labOrder").getComponent(cc.Label).string = $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeBattle01), e.Level < n ? e.WaveCfg.length : $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxOrder(), e.WaveCfg.length);
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconMap, e.Map, function (e) {
      t.ndLevelInfo.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = e;
    });
    $z1ResourceMgr.ResourceMgr.getInstance().loadRes($z1KinghtFallConfig.KinghtFallBundelName.EnemyAni, e.EnemyAni + "/" + e.EnemyAni, sp.SkeletonData, function (e) {
      var n = t.ndLevelInfo.getChildByName("spAni").getComponent(sp.Skeleton);
      n.skeletonData = e;
      n.setSkin("hong");
      n.setAnimation(0, "idle", true);
    });
    this.ndBoxShow.getChildByName("ndTips").active = false;
    this.ndBoxShow.getChildByName("ndTips").attr({
      tagUUID: null
    });
    var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getStageInfo(this.selectStage);

    for (var a = 0; a < e.Challenge.length; a++) {
      var o = this.ndBoxShow.getChildByName("ndTag" + (a + 1));
      var r = o.getChildByName("spAni").getComponent(sp.Skeleton);

      if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getStageReward(this.selectStage, a + 1)) {
        "open" != r.animation && r.setAnimation(0, "open_idle", true);
        o.getChildByName("ndRed").active = false;
      } else {
        var s = (i & 1 << e.Challenge[a] - 1) > 0;
        o.getChildByName("ndRed").active = false;

        if (s) {
          r.setAnimation(0, "idle", true);
        } else {
          r.setAnimation(0, "static", true);
        }
      }

      var l = undefined;

      switch (e.Challenge[a]) {
        case $z1KinghtFallEnum.KinghtFallEnumLevelChalType.Pass:
          l = $z1KinghtFallTextConfig.KinghtFallTextConfig.HomeBattle05;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumLevelChalType.NoDie:
          l = $z1KinghtFallTextConfig.KinghtFallTextConfig.HomeBattle06;
          break;

        case $z1KinghtFallEnum.KinghtFallEnumLevelChalType.NoAttack:
          l = $z1KinghtFallTextConfig.KinghtFallTextConfig.HomeBattle07;
      }

      o.getChildByName("labName").getComponent(cc.Label).string = this.T(l);
    }
  };

  _ctor.prototype.initBtnView = function () {
    var t = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage();
    t = Math.min(t, this.cfgList.length);
    this.btnLeft.active = this.selectStage > 1;
    this.btnRight.active = this.selectStage < this.cfgList.length && this.selectStage < t;
    var e = false;
    var n = false;

    for (var i = this.selectStage - 1; i > 0; i--) {
      if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().hasGetLevelReward(i)) {
        e = true;
        break;
      }
    }

    for (i = this.selectStage + 1; i <= t; i++) {
      if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().hasGetLevelReward(i)) {
        n = true;
        break;
      }
    }

    this.btnLeft.getChildByName("ndRed").active = e;
    this.btnRight.getChildByName("ndRed").active = n;
  };

  _ctor.prototype.showRed = function () {
    var t = false;
    var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getAchievementCfg();

    for (var n = 0; n < e.length; n++) {
      var i = e[n];

      if (r = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getAchInfoByType(i.Type)) {
        if (r.reward.includes(i.ID)) {
          ;
        } else if (r.num >= i.Argument) {
          t = true;
          break;
        }
      }
    }

    this.btnAchieve.getChildByName("ndRed").active = t;
    t = false;
    e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getPassCfg();
    var a = 0;

    for (var o = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getAchPoint(); o >= e[a].LevelCost && (o -= e[a].LevelCost, e[++a]);) {
      ;
    }

    for (n = 0; n < e.length; n++) {
      i = e[n];
      var r = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getAchReward(i.ID);

      if (a >= i.ID && !((1 & r) > 0)) {
        t = true;
        break;
      }
    }

    this.btnPassport.getChildByName("ndRed").active = t;
    t = false;
    e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getOnlineRewardCfg();
    var s = Math.floor($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getOnlineTime() / 60);

    for (n = 0; n < e.length; n++) {
      if (s >= e[n].condition && !$z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getOnlineTimeReward(e[n].id)) {
        t = true;
        break;
      }
    }

    this.btnOnline.getChildByName("ndRed").active = t;
    t = false;

    switch ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getSignReward()) {
      case 0:
        t = true;
    }

    this.btnSign.getChildByName("ndRed").active = t;
    this.refreshSubView();
  };

  _ctor.prototype.onUpdateTask = function () {
    var t = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskInfo();

    if (2 != t.stage) {
      var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTaskCfgById(t.id);
      var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(e.Award[0]);
      var i = this.ndTaskInfo.getChildByName("ndItem");
      this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, n.icon, function (t) {
        i.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = t;
      });
      i.getChildByName("labNum").getComponent(cc.Label).string = $z1KinghtFallModle["default"].getInstance().numberFomat(e.Award[1]);
      var a = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage();
      a = Math.min(a, this.cfgList.length);
      var o = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxOrder();
      var s = 0;
      var l = 1;

      switch (e.MissionType) {
        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.LevelComplete:
          a > e.Argument[0] && (t.stage = 1);
          s = a - 1;
          l = e.Argument[0];
          break;

        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.LevelWaveComplete:
          if (a > e.Argument[0] || a == e.Argument[0] && o >= e.Argument[1]) {
            s = 1;
            t.stage = 1;
          }

          break;

        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.EquipUpCount:
          t.num = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskNum($z1KinghtFallMissionData.KinghtFallTaskCountName.EquipUp);
          t.num >= e.Argument[0] && (t.stage = 1);
          s = t.num;
          l = e.Argument[0];
          break;

        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.EquipLevel:
          var c = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getEquipCfgList();

          for (var h = 0; h < c.length; h++) {
            var g = c[h];
            var u = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getPersonLevel(g.id);
            s = Math.max(s, u);
          }

          s >= e.Argument[0] && (t.stage = 1);
          l = e.Argument[0];
          break;

        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.UnlockTalentCount:
          t.num = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskNum($z1KinghtFallMissionData.KinghtFallTaskCountName.TalentUp);
          t.num >= e.Argument[0] && (t.stage = 1);
          s = t.num;
          l = e.Argument[0];
          break;

        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.UnlockBuffTalent:
          var d = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBuffCfgList();

          var p = function p(t) {
            var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTalent();

            for (var n = 0; n < e.length; n++) {
              var i = e[n];

              if (i.isLock && $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTalentLevelCfgById(i.id).kindID == t) {
                return true;
              }
            }

            return false;
          };

          for (h = 0; h < d.length; h++) {
            d[h].Unlock && p(d[h].Unlock) && s++;
          }

          s >= e.Argument[0] && (t.stage = 1);
          l = e.Argument[0];
          break;

        case $z1KinghtFallEnum.KinghtFallEnumTaskEnum.TreasureLevel:
          t.num = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskNum($z1KinghtFallMissionData.KinghtFallTaskCountName.TreasureUp);
          t.num >= e.Argument[0] && (t.stage = 1);
          s = t.num;
          l = e.Argument[0];
          break;

        default:
          s = t.num;
          t.num >= e.Argument[0] && (t.stage = 1);
          l = e.Argument[0];
      }

      this.ndTaskInfo.getChildByName("ndFinish").active = 1 == t.stage;
      this.ndTaskInfo.getChildByName("labName").getComponent(cc.Label).string = $z1Utils.Utils.StringFormat.apply($z1Utils.Utils, cc__spreadArrays([this.T(e.MissionDescribe)], e.Argument));
      var f = this.ndTaskInfo.getChildByName("ndPro");
      f.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = s / l;
      f.getChildByName("labPro").getComponent(cc.Label).string = s + "/" + l;
    } else {
      this.ndTaskInfo.active = false;
    }
  };

  _ctor.prototype.onBoxClick = function (t) {
    var e = this.ndBoxShow.getChildByName("ndTag" + (t + 1));
    var n = ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getStageInfo(this.selectStage) & 1 << t) > 0;
    var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getStageReward(this.selectStage, t + 1);

    if (n) {
      if (i) {
        $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, $z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTips04);
      } else {
        var a = e.getChildByName("spAni").getComponent(sp.Skeleton);
        a.setAnimation(0, "open", false);
        a.addAnimation(0, "open_idle", false);
        var o = this.cfgList[this.selectStage - 1].ChallengeReward[t];
        var r = [];

        for (var s = 0; s < o.length; s++) {
          var l = o[s];
          r.push({
            id: l[0],
            num: l[1]
          });
        }

        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().addRewards(r, 1, e.convertToWorldSpaceAR(cc.v2(0, 0)));
        $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIGoldReward, $z1KinghtFallConfig.KinghtFallUIID.UIHome, r);
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setStageReward(this.selectStage, t + 1);
        this.initMapView();
      }
    } else {
      this.showBoxReward(t);
    }
  };

  _ctor.prototype.showBoxReward = function (t) {
    var e = this.ndBoxShow.getChildByName("ndTag" + (t + 1));
    var n = this.cfgList[this.selectStage - 1].ChallengeReward[t];
    var i = this.ndBoxShow.getChildByName("ndTips");
    cc.Tween.stopAllByTarget(i);

    if (i.active && i.tagUUID == e.uuid) {
      i.active = false;
    } else {
      i.active = true;
      i.x = e.x;
      i.attr({
        tagUUID: e.uuid
      });
      cc.tween(i).set({
        scale: 0
      }).to(.2, {
        scale: 1
      }, {
        easing: "quintOut"
      }).start();
      var a = i.getChildByName("ndLayout");
      var o = Math.max(n.length, a.childrenCount);

      var r = function r(t) {
        if (n[t]) {
          var e = a.children[t];
          var i = {
            id: n[t][0],
            num: n[t][1]
          };

          if (e) {
            e.active = true;
            e.getComponent($z1KinghtFallItemGood["default"]).initView(i);
          } else {
            var o = function o(t) {
              t.setParent(a);
              t.active = true;
              t.setScale(.8);
              t.getComponent($z1KinghtFallItemGood["default"]).initView(i);
            };

            var r = $z1PoolMgr.PoolMgr.getInstance().getNode($z1KinghtFallConfig.KinghtFallPoolName.ItemGood);

            if (r) {
              o(r);
            } else {
              s.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.IconGood, $z1KinghtFallConfig.KinghtFallPrefabName.ItemGood, function (t) {
                r = cc.instantiate(t);
                $z1PoolMgr.PoolMgr.getInstance().creatrePool($z1KinghtFallConfig.KinghtFallPoolName.ItemGood, cc.instantiate(t), 10);
                o(r);
              });
            }
          }
        } else {
          a.children[t] && (a.children[t].active = false);
        }
      };

      var s = this;

      for (var l = 0; l < o; l++) {
        r(l);
      }

      a.getComponent(cc.Layout).updateLayout();
      var c = i.convertToWorldSpaceAR(cc.v2(-a.width / 2, 0));

      if (c.x < 50) {
        a.x = 50 - c.x;
      } else {
        var h = i.convertToWorldSpaceAR(cc.v2(a.width / 2, 0));

        if (h.x > cc.winSize.width - 50) {
          a.x = cc.winSize.width - 50 - h.x;
        } else {
          a.x = 0;
        }
      }
    }
  };

  _ctor.prototype.onTaskClick = function () {
    var t = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskInfo();

    if (1 == t.stage) {
      var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTaskCfgById(t.id);
      var n = {
        id: e.Award[0],
        num: e.Award[1]
      };
      t.stage = 2;
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().addRewards([n], 1, this.ndTaskInfo.convertToWorldSpaceAR(this.ndTaskInfo.getChildByName("ndItem").position));
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().setTaskInfo(t);
      this.onUpdateTask();
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.UpdateRedPoint, 4);
    }
  };

  _ctor.prototype.initMorePlay = function () {
    var t = this;
    this.ndBtnLeft.getChildByName("btnMove").scaleY = this.isLeftUp ? 1 : -1;
    var e = this.ndBtnLeft.getChildByName("Layout");
    e.children.forEach(function (e, n) {
      e.active = t.isLeftUp || n < 2;
    });
    e.getComponent(cc.Layout).updateLayout();
    this.ndBtnLeft.height = e.height + 50;
    this.ndBtnLeft.getChildByName("btnMove").getComponent(cc.Widget).updateAlignment();
  };

  _ctor.prototype.onClickShortCut = function () {
    $z1PlatformManager.PlatformManager.getInstance().addShortcut(null, function (t) {
      if (("Desktop shortcut added" == t || "Shortcut added" == t) && ($z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, "Shortcut added."), $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.add_desktop), 0 == $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getTimeByKey($z1GameTrackData.TimeByKey.ADD_DESKTOP))) {
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setTimeByKey($z1GameTrackData.TimeByKey.ADD_DESKTOP, 1);
        var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.AddDesktop).split(",");
        var n = {
          id: parseInt(e[0]),
          num: parseInt(e[1])
        };
        var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().addRewards([n]);
        $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIGoldReward, $z1Config.UIID.UINONE, i);
      }
    });
  };

  _ctor.prototype.onStartGame = function () {
    var t = this;

    if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().hasSave(this.selectStage)) {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UINewGame, $z1Config.UIID.UINONE, function () {
        t.sendEvent($z1Appcfg.BaseEventName.ShowTransition, true, function () {
          $z1UIMgr.UIMgr.getInstance().openUIOfCallback($z1KinghtFallConfig.KinghtFallUIID.UIGame, $z1Config.UIID.UINONE, function () {
            $z1UIMgr.UIMgr.getInstance().getUIById($z1KinghtFallConfig.KinghtFallUIID.UIHome).node.active = false;
          }, t.selectStage);
        });
      });
    } else if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().subPowerNum(this.costEnergy)) {
      $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide3);
      $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.set_of);
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setStage(this.selectStage);
      this.sendEvent($z1Appcfg.BaseEventName.ShowTransition, true, function () {
        $z1UIMgr.UIMgr.getInstance().openUIOfCallback($z1KinghtFallConfig.KinghtFallUIID.UIGame, $z1Config.UIID.UINONE, function () {
          $z1UIMgr.UIMgr.getInstance().getUIById($z1KinghtFallConfig.KinghtFallUIID.UIHome).node.active = false;
        }, t.selectStage);
      });
    } else {
      $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIAddStrength, $z1Config.UIID.UINONE);
    }
  };

  _ctor.prototype.initSubView = function () {
    var t = this;
    this.btnSubEnter.active = this.haveArrow;
    this.initSubTime();
    this.initSubStage();
    this.refreshSubView();

    if (this.haveArrow) {
      this.updateEnter(false);
      this.isEnter = false;
      this.btnSubEnter.scaleY *= -1;
      this.btnSubEnter.on(cc.Node.EventType.TOUCH_END, function () {
        if (t.isEnter) {
          t.updateEnter(false);
        } else {
          t.updateEnter(true);
        }
      });
    } else {
      var e = this.btnSubBg.children.length;
      var n = this.btnSubBg.children;

      for (var i = 0; i < e; i++) {
        if (this.checkISHideInSdk(i) || this.checkISHideInWebLink(i)) {
          n[i].active = false;
        } else {
          n[i].active = true;
        }
      }
    }

    this.initSubButton();
  };

  _ctor.prototype.initSubButton = function () {
    var t = this;

    var e = function e(_e2) {
      var i = n.btnSubBg.children[_e2];
      var a = Number(_e2);
      i.on(cc.Node.EventType.TOUCH_END, function () {
        t.EnterSubPlay(a);
      });
    };

    var n = this;

    for (var i in this.btnSubBg.children) {
      e(i);
    }
  };

  _ctor.prototype.initSubTime = function () {
    this.subPlayTime = [];
    var t = Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.cdTimeDefense));
    this.subPlayTime.push(t);
  };

  _ctor.prototype.initSubStage = function () {
    this.subPlayStage = [];
    var t = Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.unlockDefense));
    this.subPlayStage.push(t);
  };

  _ctor.prototype.updateEnter = function (t) {
    var e = this.btnSubBg.children.length;
    var n = this.btnSubBg.children;
    var i = -1;

    for (var a = e - 1; a >= 0; a--) {
      this.checkISHideInSdk(a) || this.checkISHideInWebLink(a) || -1 != i || (i = a);

      if (this.checkISHideInSdk(a) || this.checkISHideInWebLink(a)) {
        n[a].active = false;
      } else {
        n[a].active = true;
      }
    }

    t || (n[i].active = true);
    this.btnSubBg.getComponent(cc.Layout).updateLayout();
    this.btnSubEnter.y = this.btnSubBg.height - 100;
    this.btnSubEnter.scaleY *= -1;
    this.isEnter = !this.isEnter;
  };

  _ctor.prototype.checkISHideInSdk = function (t) {
    return !!$z1SdkMgr.SdkMgr.getInstance().getCheckVersion($z1PlatformSetting.SwitchID.ShenHe) && -1 != [].indexOf(t);
  };

  _ctor.prototype.checkISHideInWebLink = function (t) {
    return $z1PlatformSetting.PlatformSetting.currentPlatform == $z1BasePlatform.Platform.WEB_LINK && -1 != [].indexOf(t);
  };

  _ctor.prototype.getYoumengTrack = function (t) {
    if (0 == t) {
      return $z1GameTrackDataEvent.TrackId.defend_wall;
    }
  };

  _ctor.prototype.EnterSubPlay = function (t) {
    var e = this;

    if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage() <= this.subPlayStage[t]) {
      $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, $z1Utils.Utils.StringFormat(this.T($z1TextConfig.TextConfig.Tips19), this.subPlayStage[t] + 1));
    } else {
      var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getSubTimeByIndex(t);
      var i = (Date.now() - n) / 1e3;

      if (0 == t) {
        var a = function a() {
          $z1GAD_App["default"].instance.enter_App(function () {
            $z1UIMgr.UIMgr.getInstance().getUIById($z1KinghtFallConfig.KinghtFallUIID.UIHome).node.active = false;
          }, function () {
            $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().setSubTimeByIndex(t, Date.now());
            $z1UIMgr.UIMgr.getInstance().getUIById($z1KinghtFallConfig.KinghtFallUIID.UIHome).node.active = true;
            e.refreshSubView();
          });
        };

        if (i < this.subPlayTime[t]) {
          $z1SdkMgr.SdkMgr.getInstance().playVideo($z1SdkMgr.AdType.AdFreeTime, function () {
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack(e.getYoumengTrack(t));
            a();
          });
        } else {
          a();
        }
      }
    }
  };

  _ctor.prototype.refreshSubView = function () {
    var t = Date.now();
    var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage();

    for (var n in this.btnSubBg.children) {
      var i = Number(n);
      var a = this.btnSubBg.children[n];
      var o = this.subPlayStage[i];
      var r = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().getSubTimeByIndex(i);
      var s = this.subPlayTime[i];
      this.onSubView(a, e, o, t, r, s);
    }
  };

  _ctor.prototype.onSubView = function (t, e, n, i, a, o) {
    if (e > n) {
      var r = Math.floor((i - a) / 1e3);
      t.getChildByName("ndMask").active = r < o;
      t.getChildByName("Layout").active = r < o;
      t.getChildByName("labInfo").active = false;
      r < o && (t.getChildByName("Layout").getChildByName("labTime").getComponent(cc.Label).string = o - r + "s");
    } else {
      t.getChildByName("ndMask").active = true;
      t.getChildByName("Layout").active = false;
      t.getChildByName("labInfo").active = true;
    }
  };

  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Stage info panel"
  })], _ctor.prototype, "ndLevelInfo", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Left-side buttons"
  })], _ctor.prototype, "btnLeft", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Right-side buttons"
  })], _ctor.prototype, "btnRight", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Challenge chest display"
  })], _ctor.prototype, "ndBoxShow", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Battle button"
  })], _ctor.prototype, "btnBattle", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Mission / task info"
  })], _ctor.prototype, "ndTaskInfo", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Slide panel (expand / collapse)"
  })], _ctor.prototype, "ndBtnLeft", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Achievements button"
  })], _ctor.prototype, "btnAchieve", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Battle Pass button"
  })], _ctor.prototype, "btnPassport", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Online rewards button"
  })], _ctor.prototype, "btnOnline", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Sign-in button"
  })], _ctor.prototype, "btnSign", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Settings button"
  })], _ctor.prototype, "btnSetting", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Add to home screen / desktop shortcut"
  })], _ctor.prototype, "btnAddDesktop", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Sidebar button (channel)"
  })], _ctor.prototype, "btnSideBoard", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Feedback / report"
  })], _ctor.prototype, "btnReport", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Mini-game / side mode entry"
  })], _ctor.prototype, "btnSubEnter", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Mini-game background plate"
  })], _ctor.prototype, "btnSubBg", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_KinghtFallHomeBattleCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxIb21lQmF0dGxlQ3RybC5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiY2NfX3NwcmVhZEFycmF5cyIsIl9fc3ByZWFkQXJyYXlzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFHQURfQXBwIiwicmVxdWlyZSIsIiR6MUJhc2VDdHJsIiwiJHoxQmFzZVBsYXRmb3JtIiwiJHoxQXBwY2ZnIiwiJHoxUGxhdGZvcm1TZXR0aW5nIiwiJHoxQXVkaW9NZ3IiLCIkejFQbGF0Zm9ybU1hbmFnZXIiLCIkejFQb29sTWdyIiwiJHoxUmVzb3VyY2VNZ3IiLCIkejFTZGtNZ3IiLCIkejFVSU1nciIsIiR6MVV0aWxzIiwiJHoxQ29uZmlnIiwiJHoxVGV4dENvbmZpZyIsIiR6MUdhbWVUcmFja0RhdGEiLCIkejFHYW1lVHJhY2tEYXRhRXZlbnQiLCIkejFQbGF5ZXJNZ3IiLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiJHoxS2luZ2h0RmFsbFRleHRDb25maWciLCIkejFLaW5naHRGYWxsTWlzc2lvbkRhdGEiLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxEYXRhTWdyIiwiJHoxS2luZ2h0RmFsbFBsYXllck1nciIsIiR6MUtpbmdodEZhbGxNb2RsZSIsIiR6MUtpbmdodEZhbGxJdGVtR29vZCIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsSG9tZUJhdHRsZUN0cmwiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJuZExldmVsSW5mbyIsImJ0bkxlZnQiLCJidG5SaWdodCIsIm5kQm94U2hvdyIsImJ0bkJhdHRsZSIsIm5kVGFza0luZm8iLCJuZEJ0bkxlZnQiLCJidG5BY2hpZXZlIiwiYnRuUGFzc3BvcnQiLCJidG5PbmxpbmUiLCJidG5TaWduIiwiYnRuU2V0dGluZyIsImJ0bkFkZERlc2t0b3AiLCJidG5TaWRlQm9hcmQiLCJidG5TdWJFbnRlciIsImJ0blN1YkJnIiwiY29zdEVuZXJneSIsImlzTGVmdFVwIiwiaXNFbnRlciIsImhhdmVBcnJvdyIsInN1YlBsYXlUaW1lIiwic3ViUGxheVN0YWdlIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2ZnTGlzdCIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRMZXZlbENmZ0xpc3QiLCJwYXJzZUludCIsImdldFBhcmFtc0NmZ0J5SWQiLCJLaW5naHRGYWxsRW51bVBhcmFtZXRlckNmZyIsIlN0YW1pbmFDb3N0IiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIm9uRW5hYmxlIiwibmV3U2VsIiwib25VcGRhdGVUYXNrIiwic2NoZWR1bGVPbmNlIiwiS2luZ2h0RmFsbFBsYXllck1nciIsImdldEd1aWRlRGF0YSIsImdldEd1aWRlRW5kIiwic2VuZEV2ZW50IiwiQmFzZUV2ZW50TmFtZSIsIlJlZnJlc2hSZXBvcnQiLCJidG5SZXBvcnQiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMyIiwiWkVSTyIsInN0YXJ0IiwiaW5pdEV2ZW50TGlzdGVuZXIiLCJpbml0QnRuTGlzdGVuZXIiLCJpbml0U3ViVmlldyIsInNob3dSZWQiLCJ0d0JyZWF0aGVSZWRQb2ludCIsImFkZEV2ZW50IiwiS2luZ2h0RmFsbEV2ZW50TmFtZSIsIlRpbWVVcGRhdGUiLCJVcEJhdHRWaWV3Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwic3AiLCJTa2VsZXRvbiIsInNrZWxldG9uRGF0YSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsImFkZEFuaW1hdGlvbiIsIkF1ZGlvTWdyIiwicGxheUVmZmVjdCIsIktpbmdodEZhbGxBdWRpb0lkIiwiU2Nyb2xsX2Rvd24iLCJzZWxlY3RTdGFnZSIsImluaXRNYXBWaWV3IiwiaW5pdEJ0blZpZXciLCJuIiwib25Cb3hDbGljayIsIm9uVGFza0NsaWNrIiwiaW5pdE1vcmVQbGF5Iiwic3RvcFByb3BhZ2F0aW9uIiwiVUlNZ3IiLCJvcGVuVUkiLCJLaW5naHRGYWxsVUlJRCIsIlVJQWNoaWV2ZW1lbnQiLCJVSUlEIiwiVUlIb21lIiwiVUlQYXNzcG9ydCIsIlVJT25saW5lUmV3YXJkIiwiVUlTaWduSW4iLCJVSVNldHRpbmciLCJhIiwiUGxhdGZvcm1TZXR0aW5nIiwiY3VycmVudFBsYXRmb3JtIiwiUGxhdGZvcm0iLCJCWVRFREFOQ0UiLCJLdWFpU2hvdSIsIkVESVRPUiIsImFjdGl2ZSIsIm9uQ2xpY2tTaG9ydEN1dCIsIlVJU2lkZUJvYXJkIiwiU2RrTWdyIiwiZ2V0Q2hlY2tWZXJzaW9uIiwiU3dpdGNoSUQiLCJTaGVuSGUiLCJQbGF0Zm9ybU1hbmFnZXIiLCJXRUNIQVQiLCJVSVJlcG9ydCIsIlZJVk8iLCJvblN0YXJ0R2FtZSIsImdldFVzZXJEYXRhIiwiZ2V0U3RhZ2UiLCJsZW5ndGgiLCJnZXRNYXhTdGFnZSIsIlQiLCJOYW1lIiwiVXRpbHMiLCJTdHJpbmdGb3JtYXQiLCJLaW5naHRGYWxsVGV4dENvbmZpZyIsIkhvbWVCYXR0bGUwMSIsIkxldmVsIiwiV2F2ZUNmZyIsImdldE1heE9yZGVyIiwibG9hZFNwcml0ZUZyYW1lIiwiS2luZ2h0RmFsbEJ1bmRlbE5hbWUiLCJJY29uTWFwIiwiTWFwIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJSZXNvdXJjZU1nciIsImxvYWRSZXMiLCJFbmVteUFuaSIsIlNrZWxldG9uRGF0YSIsInNldFNraW4iLCJhdHRyIiwidGFnVVVJRCIsImdldFN0YWdlSW5mbyIsIkNoYWxsZW5nZSIsIm8iLCJyIiwiZ2V0U3RhZ2VSZXdhcmQiLCJzIiwibCIsInVuZGVmaW5lZCIsIktpbmdodEZhbGxFbnVtTGV2ZWxDaGFsVHlwZSIsIlBhc3MiLCJIb21lQmF0dGxlMDUiLCJOb0RpZSIsIkhvbWVCYXR0bGUwNiIsIk5vQXR0YWNrIiwiSG9tZUJhdHRsZTA3IiwiTWF0aCIsIm1pbiIsImhhc0dldExldmVsUmV3YXJkIiwiZ2V0QWNoaWV2ZW1lbnRDZmciLCJnZXRNaXNzaW9uRGF0YSIsImdldEFjaEluZm9CeVR5cGUiLCJUeXBlIiwicmV3YXJkIiwiaW5jbHVkZXMiLCJJRCIsIm51bSIsIkFyZ3VtZW50IiwiZ2V0UGFzc0NmZyIsImdldEFjaFBvaW50IiwiTGV2ZWxDb3N0IiwiZ2V0QWNoUmV3YXJkIiwiZ2V0T25saW5lUmV3YXJkQ2ZnIiwiZmxvb3IiLCJnZXREYWlseURhdGEiLCJnZXRPbmxpbmVUaW1lIiwiY29uZGl0aW9uIiwiZ2V0T25saW5lVGltZVJld2FyZCIsImlkIiwiZ2V0U2lnblJld2FyZCIsInJlZnJlc2hTdWJWaWV3IiwiZ2V0VGFza0luZm8iLCJzdGFnZSIsImdldFRhc2tDZmdCeUlkIiwiZ2V0R29vZHNDZmdCeUlkIiwiQXdhcmQiLCJJY29uR29vZCIsImljb24iLCJudW1iZXJGb21hdCIsIk1pc3Npb25UeXBlIiwiS2luZ2h0RmFsbEVudW1UYXNrRW51bSIsIkxldmVsQ29tcGxldGUiLCJMZXZlbFdhdmVDb21wbGV0ZSIsIkVxdWlwVXBDb3VudCIsImdldFRhc2tOdW0iLCJLaW5naHRGYWxsVGFza0NvdW50TmFtZSIsIkVxdWlwVXAiLCJFcXVpcExldmVsIiwiYyIsImdldEVxdWlwQ2ZnTGlzdCIsImgiLCJnIiwidSIsImdldFBlcnNvbkxldmVsIiwibWF4IiwiVW5sb2NrVGFsZW50Q291bnQiLCJUYWxlbnRVcCIsIlVubG9ja0J1ZmZUYWxlbnQiLCJkIiwiZ2V0QnVmZkNmZ0xpc3QiLCJwIiwiZ2V0VGFsZW50IiwiaXNMb2NrIiwiZ2V0VGFsZW50TGV2ZWxDZmdCeUlkIiwia2luZElEIiwiVW5sb2NrIiwiVHJlYXN1cmVMZXZlbCIsIlRyZWFzdXJlVXAiLCJNaXNzaW9uRGVzY3JpYmUiLCJmIiwiZmlsbFJhbmdlIiwiVUlUaXBzIiwiVUlOT05FIiwiSG9tZVRpcHMwNCIsIkNoYWxsZW5nZVJld2FyZCIsInB1c2giLCJhZGRSZXdhcmRzIiwidjIiLCJVSUdvbGRSZXdhcmQiLCJzZXRTdGFnZVJld2FyZCIsInNob3dCb3hSZXdhcmQiLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsInV1aWQiLCJ4IiwidHdlZW4iLCJzZXQiLCJzY2FsZSIsInRvIiwiZWFzaW5nIiwiY2hpbGRyZW5Db3VudCIsImNoaWxkcmVuIiwiaW5pdFZpZXciLCJzZXRQYXJlbnQiLCJzZXRTY2FsZSIsIlBvb2xNZ3IiLCJnZXROb2RlIiwiS2luZ2h0RmFsbFBvb2xOYW1lIiwiSXRlbUdvb2QiLCJsb2FkUHJlZmFiIiwiS2luZ2h0RmFsbFByZWZhYk5hbWUiLCJpbnN0YW50aWF0ZSIsImNyZWF0cmVQb29sIiwiTGF5b3V0IiwidXBkYXRlTGF5b3V0Iiwid2lkdGgiLCJ3aW5TaXplIiwicG9zaXRpb24iLCJzZXRUYXNrSW5mbyIsIlVwZGF0ZVJlZFBvaW50Iiwic2NhbGVZIiwiZm9yRWFjaCIsImhlaWdodCIsIldpZGdldCIsInVwZGF0ZUFsaWdubWVudCIsImFkZFNob3J0Y3V0IiwiUGxheWVyTWdyIiwiZ2V0VHJhY2tEYXRhIiwieW91bWVuZ1RyYWNrIiwiVHJhY2tJZCIsImFkZF9kZXNrdG9wIiwiZ2V0VGltZUJ5S2V5IiwiVGltZUJ5S2V5IiwiQUREX0RFU0tUT1AiLCJzZXRUaW1lQnlLZXkiLCJBZGREZXNrdG9wIiwic3BsaXQiLCJnZXRHYW1lRGF0YSIsImhhc1NhdmUiLCJVSU5ld0dhbWUiLCJTaG93VHJhbnNpdGlvbiIsIm9wZW5VSU9mQ2FsbGJhY2siLCJVSUdhbWUiLCJnZXRVSUJ5SWQiLCJub2RlIiwic3ViUG93ZXJOdW0iLCJndWlkZTMiLCJwbGF5RWZmZWN0RnJlZSIsInNldF9vZiIsInNldFN0YWdlIiwiVUlBZGRTdHJlbmd0aCIsImluaXRTdWJUaW1lIiwiaW5pdFN1YlN0YWdlIiwidXBkYXRlRW50ZXIiLCJjaGVja0lTSGlkZUluU2RrIiwiY2hlY2tJU0hpZGVJbldlYkxpbmsiLCJpbml0U3ViQnV0dG9uIiwiTnVtYmVyIiwiRW50ZXJTdWJQbGF5IiwiY2RUaW1lRGVmZW5zZSIsInVubG9ja0RlZmVuc2UiLCJ5IiwiaW5kZXhPZiIsIldFQl9MSU5LIiwiZ2V0WW91bWVuZ1RyYWNrIiwiZGVmZW5kX3dhbGwiLCJUZXh0Q29uZmlnIiwiVGlwczE5IiwiZ2V0U3ViVGltZUJ5SW5kZXgiLCJEYXRlIiwibm93IiwiaW5zdGFuY2UiLCJlbnRlcl9BcHAiLCJzZXRTdWJUaW1lQnlJbmRleCIsInBsYXlWaWRlbyIsIkFkVHlwZSIsIkFkRnJlZVRpbWUiLCJvblN1YlZpZXciLCJ0eXBlIiwidG9vbHRpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBR0MsY0FBdkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxlQUFlLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBQTdCOztBQUNBLElBQUlHLFNBQVMsR0FBR0gsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUksa0JBQWtCLEdBQUdKLE9BQU8sQ0FBQyxpQkFBRCxDQUFoQzs7QUFDQSxJQUFJSyxXQUFXLEdBQUdMLE9BQU8sQ0FBQyxVQUFELENBQXpCOztBQUNBLElBQUlNLGtCQUFrQixHQUFHTixPQUFPLENBQUMsaUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSU8sVUFBVSxHQUFHUCxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJUSxjQUFjLEdB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QUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUC9ULEtBQUssQ0FBQzBCLFNBSEMsRUFHVSxjQUhWLEVBRzBCMEgsU0FIMUIsQ0FBWjtFQUlBL0wsWUFBWSxDQUFDLENBQUN1QyxZQUFZLENBQUM7SUFDekJrVSxJQUFJLEVBQUV0VSxFQUFFLENBQUN5RSxJQURnQjtJQUV6QjhQLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQL1QsS0FBSyxDQUFDMEIsU0FIQyxFQUdVLFdBSFYsRUFHdUIwSCxTQUh2QixDQUFaO0VBSUEvTCxZQUFZLENBQUMsQ0FBQ3VDLFlBQVksQ0FBQztJQUN6QmtVLElBQUksRUFBRXRVLEVBQUUsQ0FBQ3lFLElBRGdCO0lBRXpCOFAsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1AvVCxLQUFLLENBQUMwQixTQUhDLEVBR1UsYUFIVixFQUd5QjBILFNBSHpCLENBQVo7RUFJQS9MLFlBQVksQ0FBQyxDQUFDdUMsWUFBWSxDQUFDO0lBQ3pCa1UsSUFBSSxFQUFFdFUsRUFBRSxDQUFDeUUsSUFEZ0I7SUFFekI4UCxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUC9ULEtBQUssQ0FBQzBCLFNBSEMsRUFHVSxVQUhWLEVBR3NCMEgsU0FIdEIsQ0FBWjtFQUlBLE9BQU8vTCxZQUFZLENBQUMsQ0FBQ3FDLFdBQUQsQ0FBRCxFQUFnQk0sS0FBaEIsQ0FBbkI7QUFDRCxDQXpzQmtDLENBeXNCakNqQyxXQUFXLFdBenNCc0IsQ0FBbkM7O0FBMHNCQUosT0FBTyxXQUFQLEdBQWtCbUMsNEJBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xudmFyIGNjX19zcHJlYWRBcnJheXMgPSBfX3NwcmVhZEFycmF5cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxR0FEX0FwcCA9IHJlcXVpcmUoXCJHQURfQXBwXCIpO1xudmFyICR6MUJhc2VDdHJsID0gcmVxdWlyZShcIkJhc2VDdHJsXCIpO1xudmFyICR6MUJhc2VQbGF0Zm9ybSA9IHJlcXVpcmUoXCJCYXNlUGxhdGZvcm1cIik7XG52YXIgJHoxQXBwY2ZnID0gcmVxdWlyZShcIkFwcGNmZ1wiKTtcbnZhciAkejFQbGF0Zm9ybVNldHRpbmcgPSByZXF1aXJlKFwiUGxhdGZvcm1TZXR0aW5nXCIpO1xudmFyICR6MUF1ZGlvTWdyID0gcmVxdWlyZShcIkF1ZGlvTWdyXCIpO1xudmFyICR6MVBsYXRmb3JtTWFuYWdlciA9IHJlcXVpcmUoXCJQbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHoxUG9vbE1nciA9IHJlcXVpcmUoXCJQb29sTWdyXCIpO1xudmFyICR6MVJlc291cmNlTWdyID0gcmVxdWlyZShcIlJlc291cmNlTWdyXCIpO1xudmFyICR6MVNka01nciA9IHJlcXVpcmUoXCJTZGtNZ3JcIik7XG52YXIgJHoxVUlNZ3IgPSByZXF1aXJlKFwiVUlNZ3JcIik7XG52YXIgJHoxVXRpbHMgPSByZXF1aXJlKFwiVXRpbHNcIik7XG52YXIgJHoxQ29uZmlnID0gcmVxdWlyZShcIkNvbmZpZ1wiKTtcbnZhciAkejFUZXh0Q29uZmlnID0gcmVxdWlyZShcIlRleHRDb25maWdcIik7XG52YXIgJHoxR2FtZVRyYWNrRGF0YSA9IHJlcXVpcmUoXCJHYW1lVHJhY2tEYXRhXCIpO1xudmFyICR6MUdhbWVUcmFja0RhdGFFdmVudCA9IHJlcXVpcmUoXCJHYW1lVHJhY2tEYXRhRXZlbnRcIik7XG52YXIgJHoxUGxheWVyTWdyID0gcmVxdWlyZShcIlBsYXllck1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbE1pc3Npb25EYXRhID0gcmVxdWlyZShcIktpbmdodEZhbGxNaXNzaW9uRGF0YVwiKTtcbnZhciAkejFLaW5naHRGYWxsRW51bSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRW51bVwiKTtcbnZhciAkejFLaW5naHRGYWxsRGF0YU1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRGF0YU1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsUGxheWVyTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxQbGF5ZXJNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbE1vZGxlID0gcmVxdWlyZShcIktpbmdodEZhbGxNb2RsZVwiKTtcbnZhciAkejFLaW5naHRGYWxsSXRlbUdvb2QgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEl0ZW1Hb29kXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxIb21lQmF0dGxlQ3RybCA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLm5kTGV2ZWxJbmZvID0gbnVsbDtcbiAgICBlLmJ0bkxlZnQgPSBudWxsO1xuICAgIGUuYnRuUmlnaHQgPSBudWxsO1xuICAgIGUubmRCb3hTaG93ID0gbnVsbDtcbiAgICBlLmJ0bkJhdHRsZSA9IG51bGw7XG4gICAgZS5uZFRhc2tJbmZvID0gbnVsbDtcbiAgICBlLm5kQnRuTGVmdCA9IG51bGw7XG4gICAgZS5idG5BY2hpZXZlID0gbnVsbDtcbiAgICBlLmJ0blBhc3Nwb3J0ID0gbnVsbDtcbiAgICBlLmJ0bk9ubGluZSA9IG51bGw7XG4gICAgZS5idG5TaWduID0gbnVsbDtcbiAgICBlLmJ0blNldHRpbmcgPSBudWxsO1xuICAgIGUuYnRuQWRkRGVza3RvcCA9IG51bGw7XG4gICAgZS5idG5TaWRlQm9hcmQgPSBudWxsO1xuICAgIGUuYnRuU3ViRW50ZXIgPSBudWxsO1xuICAgIGUuYnRuU3ViQmcgPSBudWxsO1xuICAgIGUuY29zdEVuZXJneSA9IDUwO1xuICAgIGUuaXNMZWZ0VXAgPSB0cnVlO1xuICAgIGUuaXNFbnRlciA9IGZhbHNlO1xuICAgIGUuaGF2ZUFycm93ID0gZmFsc2U7XG4gICAgZS5zdWJQbGF5VGltZSA9IFtdO1xuICAgIGUuc3ViUGxheVN0YWdlID0gW107XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2ZnTGlzdCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxDZmdMaXN0KCk7XG4gICAgdGhpcy5jb3N0RW5lcmd5ID0gcGFyc2VJbnQoJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnLlN0YW1pbmFDb3N0KSk7XG4gICAgdGhpcy5idG5CYXR0bGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdGhpcy5jb3N0RW5lcmd5O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubmV3U2VsKCk7XG4gICAgdGhpcy5vblVwZGF0ZVRhc2soKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuZ2V0R3VpZGVFbmQoKSkge1xuICAgICAgICB0LnNlbmRFdmVudCgkejFBcHBjZmcuQmFzZUV2ZW50TmFtZS5SZWZyZXNoUmVwb3J0LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0LnNlbmRFdmVudCgkejFBcHBjZmcuQmFzZUV2ZW50TmFtZS5SZWZyZXNoUmVwb3J0LCB0cnVlLCB0LmJ0blJlcG9ydC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSk7XG4gICAgICB9XG4gICAgfSwgLjEpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcigpO1xuICAgIHRoaXMuaW5pdEJ0bkxpc3RlbmVyKCk7XG4gICAgdGhpcy5pbml0U3ViVmlldygpO1xuICAgIHRoaXMuc2hvd1JlZCgpO1xuICAgICR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkudHdCcmVhdGhlUmVkUG9pbnQodGhpcy5idG5BY2hpZXZlLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikpO1xuICAgICR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkudHdCcmVhdGhlUmVkUG9pbnQodGhpcy5idG5QYXNzcG9ydC5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpKTtcbiAgICAkejFLaW5naHRGYWxsTW9kbGUuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLnR3QnJlYXRoZVJlZFBvaW50KHRoaXMuYnRuT25saW5lLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikpO1xuICAgICR6MUtpbmdodEZhbGxNb2RsZS5kZWZhdWx0LmdldEluc3RhbmNlKCkudHdCcmVhdGhlUmVkUG9pbnQodGhpcy5idG5TaWduLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hZGRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuVGltZVVwZGF0ZSwgdGhpcy5zaG93UmVkKTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5VcEJhdHRWaWV3LCB0aGlzLm5ld1NlbCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0QnRuTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubmRMZXZlbEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJuZEFuaUNsaWNrXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSB0Lm5kTGV2ZWxJbmZvLmdldENoaWxkQnlOYW1lKFwic3BBbmlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgIGlmIChlLnNrZWxldG9uRGF0YSAmJiBcImlkbGVcIiA9PSBlLmFuaW1hdGlvbikge1xuICAgICAgICBlLnNldEFuaW1hdGlvbigwLCBcImF0dGFja1wiLCBmYWxzZSk7XG4gICAgICAgIGUuYWRkQW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0bkxlZnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQXVkaW9JZC5TY3JvbGxfZG93bik7XG4gICAgICB0LnNlbGVjdFN0YWdlLS07XG4gICAgICB0LmluaXRNYXBWaWV3KCk7XG4gICAgICB0LmluaXRCdG5WaWV3KCk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5idG5SaWdodC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLlNjcm9sbF9kb3duKTtcbiAgICAgIHQuc2VsZWN0U3RhZ2UrKztcbiAgICAgIHQuaW5pdE1hcFZpZXcoKTtcbiAgICAgIHQuaW5pdEJ0blZpZXcoKTtcbiAgICB9LCB0aGlzKTtcbiAgICB2YXIgZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBuLm5kQm94U2hvdy5nZXRDaGlsZEJ5TmFtZShcIm5kVGFnXCIgKyAoZSArIDEpKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5vbkJveENsaWNrKGUpO1xuICAgICAgfSwgbik7XG4gICAgfTtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGUoaSk7XG4gICAgfVxuICAgIHRoaXMubmRUYXNrSW5mby5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25UYXNrQ2xpY2ssIHRoaXMpO1xuICAgIHRoaXMuaW5pdE1vcmVQbGF5KCk7XG4gICAgdGhpcy5uZEJ0bkxlZnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Nb3ZlXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0LmlzTGVmdFVwID0gIXQuaXNMZWZ0VXA7XG4gICAgICB0LmluaXRNb3JlUGxheSgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuYnRuQWNoaWV2ZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlBY2hpZXZlbWVudCwgJHoxQ29uZmlnLlVJSUQuVUlIb21lKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0blBhc3Nwb3J0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSVBhc3Nwb3J0LCAkejFDb25maWcuVUlJRC5VSUhvbWUpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuYnRuT25saW5lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSU9ubGluZVJld2FyZCwgJHoxQ29uZmlnLlVJSUQuVUlIb21lKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0blNpZ24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJU2lnbkluLCAkejFDb25maWcuVUlJRC5VSUhvbWUpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuYnRuU2V0dGluZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlTZXR0aW5nLCAkejFDb25maWcuVUlJRC5VSUhvbWUpO1xuICAgIH0sIHRoaXMpO1xuICAgIHZhciBhID0gJHoxUGxhdGZvcm1TZXR0aW5nLlBsYXRmb3JtU2V0dGluZy5jdXJyZW50UGxhdGZvcm0gPT0gJHoxQmFzZVBsYXRmb3JtLlBsYXRmb3JtLkJZVEVEQU5DRSB8fCAkejFQbGF0Zm9ybVNldHRpbmcuUGxhdGZvcm1TZXR0aW5nLmN1cnJlbnRQbGF0Zm9ybSA9PSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uS3VhaVNob3UgfHwgJHoxUGxhdGZvcm1TZXR0aW5nLlBsYXRmb3JtU2V0dGluZy5jdXJyZW50UGxhdGZvcm0gPT0gJHoxQmFzZVBsYXRmb3JtLlBsYXRmb3JtLkVESVRPUjtcbiAgICB0aGlzLmJ0blNpZGVCb2FyZC5hY3RpdmUgPSBhO1xuICAgIHRoaXMuYnRuQWRkRGVza3RvcC5hY3RpdmUgPSBhO1xuICAgIHRoaXMuYnRuQWRkRGVza3RvcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQub25DbGlja1Nob3J0Q3V0KCk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5idG5TaWRlQm9hcmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJU2lkZUJvYXJkLCAkejFDb25maWcuVUlJRC5VSUhvbWUpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuYnRuUmVwb3J0LmFjdGl2ZSA9ICEkejFTZGtNZ3IuU2RrTWdyLmdldEluc3RhbmNlKCkuZ2V0Q2hlY2tWZXJzaW9uKCR6MVBsYXRmb3JtU2V0dGluZy5Td2l0Y2hJRC5TaGVuSGUpICYmICgkejFQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm1NYW5hZ2VyLmN1cnJlbnRQbGF0Zm9ybSA9PSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uV0VDSEFUIHx8ICR6MVBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybU1hbmFnZXIuY3VycmVudFBsYXRmb3JtID09ICR6MUJhc2VQbGF0Zm9ybS5QbGF0Zm9ybS5CWVRFREFOQ0UgfHwgJHoxUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtTWFuYWdlci5jdXJyZW50UGxhdGZvcm0gPT0gJHoxQmFzZVBsYXRmb3JtLlBsYXRmb3JtLkVESVRPUiB8fCAkejFQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm1NYW5hZ2VyLmN1cnJlbnRQbGF0Zm9ybSA9PSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uS3VhaVNob3UpO1xuICAgIHRoaXMuYnRuUmVwb3J0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlSZXBvcnQsICR6MUNvbmZpZy5VSUlELlVJSG9tZSk7XG4gICAgfSk7XG4gICAgaWYgKCR6MVBsYXRmb3JtU2V0dGluZy5QbGF0Zm9ybVNldHRpbmcuY3VycmVudFBsYXRmb3JtID09ICR6MUJhc2VQbGF0Zm9ybS5QbGF0Zm9ybS5WSVZPKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuYnRuQmF0dGxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdC5vblN0YXJ0R2FtZSwgdCk7XG4gICAgICB9LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idG5CYXR0bGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU3RhcnRHYW1lLCB0aGlzKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5uZXdTZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RTdGFnZSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0U3RhZ2UoKTtcbiAgICB0aGlzLnNlbGVjdFN0YWdlID4gdGhpcy5jZmdMaXN0Lmxlbmd0aCAmJiAodGhpcy5zZWxlY3RTdGFnZSA9IHRoaXMuY2ZnTGlzdC5sZW5ndGgpO1xuICAgIHRoaXMuaW5pdE1hcFZpZXcoKTtcbiAgICB0aGlzLmluaXRCdG5WaWV3KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0TWFwVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdmFyIGUgPSB0aGlzLmNmZ0xpc3RbdGhpcy5zZWxlY3RTdGFnZSAtIDFdO1xuICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRNYXhTdGFnZSgpO1xuICAgIHRoaXMubmRMZXZlbEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5UKGUuTmFtZSk7XG4gICAgdGhpcy5uZExldmVsSW5mby5nZXRDaGlsZEJ5TmFtZShcImxhYk9yZGVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJHoxVXRpbHMuVXRpbHMuU3RyaW5nRm9ybWF0KHRoaXMuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5Ib21lQmF0dGxlMDEpLCBlLkxldmVsIDwgbiA/IGUuV2F2ZUNmZy5sZW5ndGggOiAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heE9yZGVyKCksIGUuV2F2ZUNmZy5sZW5ndGgpO1xuICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuSWNvbk1hcCwgZS5NYXAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0Lm5kTGV2ZWxJbmZvLmdldENoaWxkQnlOYW1lKFwic3BySWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGU7XG4gICAgfSk7XG4gICAgJHoxUmVzb3VyY2VNZ3IuUmVzb3VyY2VNZ3IuZ2V0SW5zdGFuY2UoKS5sb2FkUmVzKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuRW5lbXlBbmksIGUuRW5lbXlBbmkgKyBcIi9cIiArIGUuRW5lbXlBbmksIHNwLlNrZWxldG9uRGF0YSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBuID0gdC5uZExldmVsSW5mby5nZXRDaGlsZEJ5TmFtZShcInNwQW5pXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICBuLnNrZWxldG9uRGF0YSA9IGU7XG4gICAgICBuLnNldFNraW4oXCJob25nXCIpO1xuICAgICAgbi5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMubmRCb3hTaG93LmdldENoaWxkQnlOYW1lKFwibmRUaXBzXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmRCb3hTaG93LmdldENoaWxkQnlOYW1lKFwibmRUaXBzXCIpLmF0dHIoe1xuICAgICAgdGFnVVVJRDogbnVsbFxuICAgIH0pO1xuICAgIHZhciBpID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRTdGFnZUluZm8odGhpcy5zZWxlY3RTdGFnZSk7XG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlLkNoYWxsZW5nZS5sZW5ndGg7IGErKykge1xuICAgICAgdmFyIG8gPSB0aGlzLm5kQm94U2hvdy5nZXRDaGlsZEJ5TmFtZShcIm5kVGFnXCIgKyAoYSArIDEpKTtcbiAgICAgIHZhciByID0gby5nZXRDaGlsZEJ5TmFtZShcInNwQW5pXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICBpZiAoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRTdGFnZVJld2FyZCh0aGlzLnNlbGVjdFN0YWdlLCBhICsgMSkpIHtcbiAgICAgICAgXCJvcGVuXCIgIT0gci5hbmltYXRpb24gJiYgci5zZXRBbmltYXRpb24oMCwgXCJvcGVuX2lkbGVcIiwgdHJ1ZSk7XG4gICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzID0gKGkgJiAxIDw8IGUuQ2hhbGxlbmdlW2FdIC0gMSkgPiAwO1xuICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgci5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHIuc2V0QW5pbWF0aW9uKDAsIFwic3RhdGljXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbCA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAoZS5DaGFsbGVuZ2VbYV0pIHtcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUxldmVsQ2hhbFR5cGUuUGFzczpcbiAgICAgICAgICBsID0gJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuSG9tZUJhdHRsZTA1O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtTGV2ZWxDaGFsVHlwZS5Ob0RpZTpcbiAgICAgICAgICBsID0gJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuSG9tZUJhdHRsZTA2O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtTGV2ZWxDaGFsVHlwZS5Ob0F0dGFjazpcbiAgICAgICAgICBsID0gJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuSG9tZUJhdHRsZTA3O1xuICAgICAgfVxuICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImxhYk5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLlQobCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdEJ0blZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCk7XG4gICAgdCA9IE1hdGgubWluKHQsIHRoaXMuY2ZnTGlzdC5sZW5ndGgpO1xuICAgIHRoaXMuYnRuTGVmdC5hY3RpdmUgPSB0aGlzLnNlbGVjdFN0YWdlID4gMTtcbiAgICB0aGlzLmJ0blJpZ2h0LmFjdGl2ZSA9IHRoaXMuc2VsZWN0U3RhZ2UgPCB0aGlzLmNmZ0xpc3QubGVuZ3RoICYmIHRoaXMuc2VsZWN0U3RhZ2UgPCB0O1xuICAgIHZhciBlID0gZmFsc2U7XG4gICAgdmFyIG4gPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5zZWxlY3RTdGFnZSAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5oYXNHZXRMZXZlbFJld2FyZChpKSkge1xuICAgICAgICBlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IHRoaXMuc2VsZWN0U3RhZ2UgKyAxOyBpIDw9IHQ7IGkrKykge1xuICAgICAgaWYgKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmhhc0dldExldmVsUmV3YXJkKGkpKSB7XG4gICAgICAgIG4gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5idG5MZWZ0LmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikuYWN0aXZlID0gZTtcbiAgICB0aGlzLmJ0blJpZ2h0LmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikuYWN0aXZlID0gbjtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3dSZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBmYWxzZTtcbiAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0QWNoaWV2ZW1lbnRDZmcoKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gZVtuXTtcbiAgICAgIGlmIChyID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5nZXRBY2hJbmZvQnlUeXBlKGkuVHlwZSkpIHtcbiAgICAgICAgaWYgKHIucmV3YXJkLmluY2x1ZGVzKGkuSUQpKSB7XG4gICAgICAgICAgO1xuICAgICAgICB9IGVsc2UgaWYgKHIubnVtID49IGkuQXJndW1lbnQpIHtcbiAgICAgICAgICB0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJ0bkFjaGlldmUuZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSB0O1xuICAgIHQgPSBmYWxzZTtcbiAgICBlID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXNzQ2ZnKCk7XG4gICAgdmFyIGEgPSAwO1xuICAgIGZvciAodmFyIG8gPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uRGF0YSgpLmdldEFjaFBvaW50KCk7IG8gPj0gZVthXS5MZXZlbENvc3QgJiYgKG8gLT0gZVthXS5MZXZlbENvc3QsIGVbKythXSk7KSB7XG4gICAgICA7XG4gICAgfVxuICAgIGZvciAobiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICBpID0gZVtuXTtcbiAgICAgIHZhciByID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5nZXRBY2hSZXdhcmQoaS5JRCk7XG4gICAgICBpZiAoYSA+PSBpLklEICYmICEoKDEgJiByKSA+IDApKSB7XG4gICAgICAgIHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5idG5QYXNzcG9ydC5nZXRDaGlsZEJ5TmFtZShcIm5kUmVkXCIpLmFjdGl2ZSA9IHQ7XG4gICAgdCA9IGZhbHNlO1xuICAgIGUgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldE9ubGluZVJld2FyZENmZygpO1xuICAgIHZhciBzID0gTWF0aC5mbG9vcigkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXREYWlseURhdGEoKS5nZXRPbmxpbmVUaW1lKCkgLyA2MCk7XG4gICAgZm9yIChuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgIGlmIChzID49IGVbbl0uY29uZGl0aW9uICYmICEkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXREYWlseURhdGEoKS5nZXRPbmxpbmVUaW1lUmV3YXJkKGVbbl0uaWQpKSB7XG4gICAgICAgIHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5idG5PbmxpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJuZFJlZFwiKS5hY3RpdmUgPSB0O1xuICAgIHQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldERhaWx5RGF0YSgpLmdldFNpZ25SZXdhcmQoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5idG5TaWduLmdldENoaWxkQnlOYW1lKFwibmRSZWRcIikuYWN0aXZlID0gdDtcbiAgICB0aGlzLnJlZnJlc2hTdWJWaWV3KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblVwZGF0ZVRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uRGF0YSgpLmdldFRhc2tJbmZvKCk7XG4gICAgaWYgKDIgIT0gdC5zdGFnZSkge1xuICAgICAgdmFyIGUgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFRhc2tDZmdCeUlkKHQuaWQpO1xuICAgICAgdmFyIG4gPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEdvb2RzQ2ZnQnlJZChlLkF3YXJkWzBdKTtcbiAgICAgIHZhciBpID0gdGhpcy5uZFRhc2tJbmZvLmdldENoaWxkQnlOYW1lKFwibmRJdGVtXCIpO1xuICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5JY29uR29vZCwgbi5pY29uLCBmdW5jdGlvbiAodCkge1xuICAgICAgICBpLmdldENoaWxkQnlOYW1lKFwic3BySWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHQ7XG4gICAgICB9KTtcbiAgICAgIGkuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkejFLaW5naHRGYWxsTW9kbGUuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLm51bWJlckZvbWF0KGUuQXdhcmRbMV0pO1xuICAgICAgdmFyIGEgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCk7XG4gICAgICBhID0gTWF0aC5taW4oYSwgdGhpcy5jZmdMaXN0Lmxlbmd0aCk7XG4gICAgICB2YXIgbyA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0TWF4T3JkZXIoKTtcbiAgICAgIHZhciBzID0gMDtcbiAgICAgIHZhciBsID0gMTtcbiAgICAgIHN3aXRjaCAoZS5NaXNzaW9uVHlwZSkge1xuICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFza0VudW0uTGV2ZWxDb21wbGV0ZTpcbiAgICAgICAgICBhID4gZS5Bcmd1bWVudFswXSAmJiAodC5zdGFnZSA9IDEpO1xuICAgICAgICAgIHMgPSBhIC0gMTtcbiAgICAgICAgICBsID0gZS5Bcmd1bWVudFswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRhc2tFbnVtLkxldmVsV2F2ZUNvbXBsZXRlOlxuICAgICAgICAgIGlmIChhID4gZS5Bcmd1bWVudFswXSB8fCBhID09IGUuQXJndW1lbnRbMF0gJiYgbyA+PSBlLkFyZ3VtZW50WzFdKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgICAgIHQuc3RhZ2UgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRhc2tFbnVtLkVxdWlwVXBDb3VudDpcbiAgICAgICAgICB0Lm51bSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuZ2V0VGFza051bSgkejFLaW5naHRGYWxsTWlzc2lvbkRhdGEuS2luZ2h0RmFsbFRhc2tDb3VudE5hbWUuRXF1aXBVcCk7XG4gICAgICAgICAgdC5udW0gPj0gZS5Bcmd1bWVudFswXSAmJiAodC5zdGFnZSA9IDEpO1xuICAgICAgICAgIHMgPSB0Lm51bTtcbiAgICAgICAgICBsID0gZS5Bcmd1bWVudFswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRhc2tFbnVtLkVxdWlwTGV2ZWw6XG4gICAgICAgICAgdmFyIGMgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEVxdWlwQ2ZnTGlzdCgpO1xuICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgYy5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgdmFyIGcgPSBjW2hdO1xuICAgICAgICAgICAgdmFyIHUgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFBlcnNvbkxldmVsKGcuaWQpO1xuICAgICAgICAgICAgcyA9IE1hdGgubWF4KHMsIHUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzID49IGUuQXJndW1lbnRbMF0gJiYgKHQuc3RhZ2UgPSAxKTtcbiAgICAgICAgICBsID0gZS5Bcmd1bWVudFswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRhc2tFbnVtLlVubG9ja1RhbGVudENvdW50OlxuICAgICAgICAgIHQubnVtID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5nZXRUYXNrTnVtKCR6MUtpbmdodEZhbGxNaXNzaW9uRGF0YS5LaW5naHRGYWxsVGFza0NvdW50TmFtZS5UYWxlbnRVcCk7XG4gICAgICAgICAgdC5udW0gPj0gZS5Bcmd1bWVudFswXSAmJiAodC5zdGFnZSA9IDEpO1xuICAgICAgICAgIHMgPSB0Lm51bTtcbiAgICAgICAgICBsID0gZS5Bcmd1bWVudFswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRhc2tFbnVtLlVubG9ja0J1ZmZUYWxlbnQ6XG4gICAgICAgICAgdmFyIGQgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEJ1ZmZDZmdMaXN0KCk7XG4gICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFRhbGVudCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gZVtuXTtcbiAgICAgICAgICAgICAgaWYgKGkuaXNMb2NrICYmICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VGFsZW50TGV2ZWxDZmdCeUlkKGkuaWQpLmtpbmRJRCA9PSB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZvciAoaCA9IDA7IGggPCBkLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICBkW2hdLlVubG9jayAmJiBwKGRbaF0uVW5sb2NrKSAmJiBzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHMgPj0gZS5Bcmd1bWVudFswXSAmJiAodC5zdGFnZSA9IDEpO1xuICAgICAgICAgIGwgPSBlLkFyZ3VtZW50WzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFza0VudW0uVHJlYXN1cmVMZXZlbDpcbiAgICAgICAgICB0Lm51bSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuZ2V0VGFza051bSgkejFLaW5naHRGYWxsTWlzc2lvbkRhdGEuS2luZ2h0RmFsbFRhc2tDb3VudE5hbWUuVHJlYXN1cmVVcCk7XG4gICAgICAgICAgdC5udW0gPj0gZS5Bcmd1bWVudFswXSAmJiAodC5zdGFnZSA9IDEpO1xuICAgICAgICAgIHMgPSB0Lm51bTtcbiAgICAgICAgICBsID0gZS5Bcmd1bWVudFswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzID0gdC5udW07XG4gICAgICAgICAgdC5udW0gPj0gZS5Bcmd1bWVudFswXSAmJiAodC5zdGFnZSA9IDEpO1xuICAgICAgICAgIGwgPSBlLkFyZ3VtZW50WzBdO1xuICAgICAgfVxuICAgICAgdGhpcy5uZFRhc2tJbmZvLmdldENoaWxkQnlOYW1lKFwibmRGaW5pc2hcIikuYWN0aXZlID0gMSA9PSB0LnN0YWdlO1xuICAgICAgdGhpcy5uZFRhc2tJbmZvLmdldENoaWxkQnlOYW1lKFwibGFiTmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICR6MVV0aWxzLlV0aWxzLlN0cmluZ0Zvcm1hdC5hcHBseSgkejFVdGlscy5VdGlscywgY2NfX3NwcmVhZEFycmF5cyhbdGhpcy5UKGUuTWlzc2lvbkRlc2NyaWJlKV0sIGUuQXJndW1lbnQpKTtcbiAgICAgIHZhciBmID0gdGhpcy5uZFRhc2tJbmZvLmdldENoaWxkQnlOYW1lKFwibmRQcm9cIik7XG4gICAgICBmLmdldENoaWxkQnlOYW1lKFwic3ByUHJvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHMgLyBsO1xuICAgICAgZi5nZXRDaGlsZEJ5TmFtZShcImxhYlByb1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHMgKyBcIi9cIiArIGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmRUYXNrSW5mby5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkJveENsaWNrID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMubmRCb3hTaG93LmdldENoaWxkQnlOYW1lKFwibmRUYWdcIiArICh0ICsgMSkpO1xuICAgIHZhciBuID0gKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0U3RhZ2VJbmZvKHRoaXMuc2VsZWN0U3RhZ2UpICYgMSA8PCB0KSA+IDA7XG4gICAgdmFyIGkgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFN0YWdlUmV3YXJkKHRoaXMuc2VsZWN0U3RhZ2UsIHQgKyAxKTtcbiAgICBpZiAobikge1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlUaXBzLCAkejFDb25maWcuVUlJRC5VSU5PTkUsICR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkhvbWVUaXBzMDQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGEgPSBlLmdldENoaWxkQnlOYW1lKFwic3BBbmlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgYS5zZXRBbmltYXRpb24oMCwgXCJvcGVuXCIsIGZhbHNlKTtcbiAgICAgICAgYS5hZGRBbmltYXRpb24oMCwgXCJvcGVuX2lkbGVcIiwgZmFsc2UpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuY2ZnTGlzdFt0aGlzLnNlbGVjdFN0YWdlIC0gMV0uQ2hhbGxlbmdlUmV3YXJkW3RdO1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgbCA9IG9bc107XG4gICAgICAgICAgci5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBsWzBdLFxuICAgICAgICAgICAgbnVtOiBsWzFdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuYWRkUmV3YXJkcyhyLCAxLCBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xuICAgICAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJR29sZFJld2FyZCwgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUhvbWUsIHIpO1xuICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldFN0YWdlUmV3YXJkKHRoaXMuc2VsZWN0U3RhZ2UsIHQgKyAxKTtcbiAgICAgICAgdGhpcy5pbml0TWFwVmlldygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dCb3hSZXdhcmQodCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2hvd0JveFJld2FyZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLm5kQm94U2hvdy5nZXRDaGlsZEJ5TmFtZShcIm5kVGFnXCIgKyAodCArIDEpKTtcbiAgICB2YXIgbiA9IHRoaXMuY2ZnTGlzdFt0aGlzLnNlbGVjdFN0YWdlIC0gMV0uQ2hhbGxlbmdlUmV3YXJkW3RdO1xuICAgIHZhciBpID0gdGhpcy5uZEJveFNob3cuZ2V0Q2hpbGRCeU5hbWUoXCJuZFRpcHNcIik7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGkpO1xuICAgIGlmIChpLmFjdGl2ZSAmJiBpLnRhZ1VVSUQgPT0gZS51dWlkKSB7XG4gICAgICBpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpLmFjdGl2ZSA9IHRydWU7XG4gICAgICBpLnggPSBlLng7XG4gICAgICBpLmF0dHIoe1xuICAgICAgICB0YWdVVUlEOiBlLnV1aWRcbiAgICAgIH0pO1xuICAgICAgY2MudHdlZW4oaSkuc2V0KHtcbiAgICAgICAgc2NhbGU6IDBcbiAgICAgIH0pLnRvKC4yLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWludE91dFwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdmFyIGEgPSBpLmdldENoaWxkQnlOYW1lKFwibmRMYXlvdXRcIik7XG4gICAgICB2YXIgbyA9IE1hdGgubWF4KG4ubGVuZ3RoLCBhLmNoaWxkcmVuQ291bnQpO1xuICAgICAgdmFyIHIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoblt0XSkge1xuICAgICAgICAgIHZhciBlID0gYS5jaGlsZHJlblt0XTtcbiAgICAgICAgICB2YXIgaSA9IHtcbiAgICAgICAgICAgIGlkOiBuW3RdWzBdLFxuICAgICAgICAgICAgbnVtOiBuW3RdWzFdXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEl0ZW1Hb29kLmRlZmF1bHQpLmluaXRWaWV3KGkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHQuc2V0UGFyZW50KGEpO1xuICAgICAgICAgICAgICB0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHQuc2V0U2NhbGUoLjgpO1xuICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkejFLaW5naHRGYWxsSXRlbUdvb2QuZGVmYXVsdCkuaW5pdFZpZXcoaSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHIgPSAkejFQb29sTWdyLlBvb2xNZ3IuZ2V0SW5zdGFuY2UoKS5nZXROb2RlKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBvb2xOYW1lLkl0ZW1Hb29kKTtcbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgIG8ocik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzLmxvYWRQcmVmYWIoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5JY29uR29vZCwgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUHJlZmFiTmFtZS5JdGVtR29vZCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICAgICAgICAgJHoxUG9vbE1nci5Qb29sTWdyLmdldEluc3RhbmNlKCkuY3JlYXRyZVBvb2woJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUG9vbE5hbWUuSXRlbUdvb2QsIGNjLmluc3RhbnRpYXRlKHQpLCAxMCk7XG4gICAgICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGEuY2hpbGRyZW5bdF0gJiYgKGEuY2hpbGRyZW5bdF0uYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIHMgPSB0aGlzO1xuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBvOyBsKyspIHtcbiAgICAgICAgcihsKTtcbiAgICAgIH1cbiAgICAgIGEuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XG4gICAgICB2YXIgYyA9IGkuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC1hLndpZHRoIC8gMiwgMCkpO1xuICAgICAgaWYgKGMueCA8IDUwKSB7XG4gICAgICAgIGEueCA9IDUwIC0gYy54O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGggPSBpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihhLndpZHRoIC8gMiwgMCkpO1xuICAgICAgICBpZiAoaC54ID4gY2Mud2luU2l6ZS53aWR0aCAtIDUwKSB7XG4gICAgICAgICAgYS54ID0gY2Mud2luU2l6ZS53aWR0aCAtIDUwIC0gaC54O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGEueCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblRhc2tDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuZ2V0VGFza0luZm8oKTtcbiAgICBpZiAoMSA9PSB0LnN0YWdlKSB7XG4gICAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VGFza0NmZ0J5SWQodC5pZCk7XG4gICAgICB2YXIgbiA9IHtcbiAgICAgICAgaWQ6IGUuQXdhcmRbMF0sXG4gICAgICAgIG51bTogZS5Bd2FyZFsxXVxuICAgICAgfTtcbiAgICAgIHQuc3RhZ2UgPSAyO1xuICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuYWRkUmV3YXJkcyhbbl0sIDEsIHRoaXMubmRUYXNrSW5mby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5uZFRhc2tJbmZvLmdldENoaWxkQnlOYW1lKFwibmRJdGVtXCIpLnBvc2l0aW9uKSk7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uRGF0YSgpLnNldFRhc2tJbmZvKHQpO1xuICAgICAgdGhpcy5vblVwZGF0ZVRhc2soKTtcbiAgICAgIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5VcGRhdGVSZWRQb2ludCwgNCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdE1vcmVQbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLm5kQnRuTGVmdC5nZXRDaGlsZEJ5TmFtZShcImJ0bk1vdmVcIikuc2NhbGVZID0gdGhpcy5pc0xlZnRVcCA/IDEgOiAtMTtcbiAgICB2YXIgZSA9IHRoaXMubmRCdG5MZWZ0LmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpO1xuICAgIGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZSwgbikge1xuICAgICAgZS5hY3RpdmUgPSB0LmlzTGVmdFVwIHx8IG4gPCAyO1xuICAgIH0pO1xuICAgIGUuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5uZEJ0bkxlZnQuaGVpZ2h0ID0gZS5oZWlnaHQgKyA1MDtcbiAgICB0aGlzLm5kQnRuTGVmdC5nZXRDaGlsZEJ5TmFtZShcImJ0bk1vdmVcIikuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkNsaWNrU2hvcnRDdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHoxUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtTWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZFNob3J0Y3V0KG51bGwsIGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoKFwiRGVza3RvcCBzaG9ydGN1dCBhZGRlZFwiID09IHQgfHwgXCJTaG9ydGN1dCBhZGRlZFwiID09IHQpICYmICgkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSSgkejFDb25maWcuVUlJRC5VSVRpcHMsICR6MUNvbmZpZy5VSUlELlVJTk9ORSwgXCJTaG9ydGN1dCBhZGRlZC5cIiksICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuYWRkX2Rlc2t0b3ApLCAwID09ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLmdldFRpbWVCeUtleSgkejFHYW1lVHJhY2tEYXRhLlRpbWVCeUtleS5BRERfREVTS1RPUCkpKSB7XG4gICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLnNldFRpbWVCeUtleSgkejFHYW1lVHJhY2tEYXRhLlRpbWVCeUtleS5BRERfREVTS1RPUCwgMSk7XG4gICAgICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnLkFkZERlc2t0b3ApLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdmFyIG4gPSB7XG4gICAgICAgICAgaWQ6IHBhcnNlSW50KGVbMF0pLFxuICAgICAgICAgIG51bTogcGFyc2VJbnQoZVsxXSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRSZXdhcmRzKFtuXSk7XG4gICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlHb2xkUmV3YXJkLCAkejFDb25maWcuVUlJRC5VSU5PTkUsIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25TdGFydEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YSgpLmhhc1NhdmUodGhpcy5zZWxlY3RTdGFnZSkpIHtcbiAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlOZXdHYW1lLCAkejFDb25maWcuVUlJRC5VSU5PTkUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5zZW5kRXZlbnQoJHoxQXBwY2ZnLkJhc2VFdmVudE5hbWUuU2hvd1RyYW5zaXRpb24sIHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSU9mQ2FsbGJhY2soJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUdhbWUsICR6MUNvbmZpZy5VSUlELlVJTk9ORSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVSUJ5SWQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUhvbWUpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfSwgdC5zZWxlY3RTdGFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnN1YlBvd2VyTnVtKHRoaXMuY29zdEVuZXJneSkpIHtcbiAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZ3VpZGUzKTtcbiAgICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdEZyZWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQXVkaW9JZC5zZXRfb2YpO1xuICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5zZXRTdGFnZSh0aGlzLnNlbGVjdFN0YWdlKTtcbiAgICAgIHRoaXMuc2VuZEV2ZW50KCR6MUFwcGNmZy5CYXNlRXZlbnROYW1lLlNob3dUcmFuc2l0aW9uLCB0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJT2ZDYWxsYmFjaygkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJR2FtZSwgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVSUJ5SWQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUhvbWUpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIHQuc2VsZWN0U3RhZ2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlBZGRTdHJlbmd0aCwgJHoxQ29uZmlnLlVJSUQuVUlOT05FKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0U3ViVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5idG5TdWJFbnRlci5hY3RpdmUgPSB0aGlzLmhhdmVBcnJvdztcbiAgICB0aGlzLmluaXRTdWJUaW1lKCk7XG4gICAgdGhpcy5pbml0U3ViU3RhZ2UoKTtcbiAgICB0aGlzLnJlZnJlc2hTdWJWaWV3KCk7XG4gICAgaWYgKHRoaXMuaGF2ZUFycm93KSB7XG4gICAgICB0aGlzLnVwZGF0ZUVudGVyKGZhbHNlKTtcbiAgICAgIHRoaXMuaXNFbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5idG5TdWJFbnRlci5zY2FsZVkgKj0gLTE7XG4gICAgICB0aGlzLmJ0blN1YkVudGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodC5pc0VudGVyKSB7XG4gICAgICAgICAgdC51cGRhdGVFbnRlcihmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC51cGRhdGVFbnRlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlID0gdGhpcy5idG5TdWJCZy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICB2YXIgbiA9IHRoaXMuYnRuU3ViQmcuY2hpbGRyZW47XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGU7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0lTSGlkZUluU2RrKGkpIHx8IHRoaXMuY2hlY2tJU0hpZGVJbldlYkxpbmsoaSkpIHtcbiAgICAgICAgICBuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluaXRTdWJCdXR0b24oKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRTdWJCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHZhciBlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBpID0gbi5idG5TdWJCZy5jaGlsZHJlbltlXTtcbiAgICAgIHZhciBhID0gTnVtYmVyKGUpO1xuICAgICAgaS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5FbnRlclN1YlBsYXkoYSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBuID0gdGhpcztcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuYnRuU3ViQmcuY2hpbGRyZW4pIHtcbiAgICAgIGUoaSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdFN1YlRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdWJQbGF5VGltZSA9IFtdO1xuICAgIHZhciB0ID0gTnVtYmVyKCR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0UGFyYW1zQ2ZnQnlJZCgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVBhcmFtZXRlckNmZy5jZFRpbWVEZWZlbnNlKSk7XG4gICAgdGhpcy5zdWJQbGF5VGltZS5wdXNoKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdFN1YlN0YWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3ViUGxheVN0YWdlID0gW107XG4gICAgdmFyIHQgPSBOdW1iZXIoJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnLnVubG9ja0RlZmVuc2UpKTtcbiAgICB0aGlzLnN1YlBsYXlTdGFnZS5wdXNoKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUudXBkYXRlRW50ZXIgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcy5idG5TdWJCZy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIG4gPSB0aGlzLmJ0blN1YkJnLmNoaWxkcmVuO1xuICAgIHZhciBpID0gLTE7XG4gICAgZm9yICh2YXIgYSA9IGUgLSAxOyBhID49IDA7IGEtLSkge1xuICAgICAgdGhpcy5jaGVja0lTSGlkZUluU2RrKGEpIHx8IHRoaXMuY2hlY2tJU0hpZGVJbldlYkxpbmsoYSkgfHwgLTEgIT0gaSB8fCAoaSA9IGEpO1xuICAgICAgaWYgKHRoaXMuY2hlY2tJU0hpZGVJblNkayhhKSB8fCB0aGlzLmNoZWNrSVNIaWRlSW5XZWJMaW5rKGEpKSB7XG4gICAgICAgIG5bYV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuW2FdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHQgfHwgKG5baV0uYWN0aXZlID0gdHJ1ZSk7XG4gICAgdGhpcy5idG5TdWJCZy5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcbiAgICB0aGlzLmJ0blN1YkVudGVyLnkgPSB0aGlzLmJ0blN1YkJnLmhlaWdodCAtIDEwMDtcbiAgICB0aGlzLmJ0blN1YkVudGVyLnNjYWxlWSAqPSAtMTtcbiAgICB0aGlzLmlzRW50ZXIgPSAhdGhpcy5pc0VudGVyO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuY2hlY2tJU0hpZGVJblNkayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuICEhJHoxU2RrTWdyLlNka01nci5nZXRJbnN0YW5jZSgpLmdldENoZWNrVmVyc2lvbigkejFQbGF0Zm9ybVNldHRpbmcuU3dpdGNoSUQuU2hlbkhlKSAmJiAtMSAhPSBbXS5pbmRleE9mKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuY2hlY2tJU0hpZGVJbldlYkxpbmsgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiAkejFQbGF0Zm9ybVNldHRpbmcuUGxhdGZvcm1TZXR0aW5nLmN1cnJlbnRQbGF0Zm9ybSA9PSAkejFCYXNlUGxhdGZvcm0uUGxhdGZvcm0uV0VCX0xJTksgJiYgLTEgIT0gW10uaW5kZXhPZih0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFlvdW1lbmdUcmFjayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKDAgPT0gdCkge1xuICAgICAgcmV0dXJuICR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmRlZmVuZF93YWxsO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLkVudGVyU3ViUGxheSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCkgPD0gdGhpcy5zdWJQbGF5U3RhZ2VbdF0pIHtcbiAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJVGlwcywgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCAkejFVdGlscy5VdGlscy5TdHJpbmdGb3JtYXQodGhpcy5UKCR6MVRleHRDb25maWcuVGV4dENvbmZpZy5UaXBzMTkpLCB0aGlzLnN1YlBsYXlTdGFnZVt0XSArIDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG4gPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXREYWlseURhdGEoKS5nZXRTdWJUaW1lQnlJbmRleCh0KTtcbiAgICAgIHZhciBpID0gKERhdGUubm93KCkgLSBuKSAvIDFlMztcbiAgICAgIGlmICgwID09IHQpIHtcbiAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJHoxR0FEX0FwcC5kZWZhdWx0Lmluc3RhbmNlLmVudGVyX0FwcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLmdldFVJQnlJZCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJSG9tZSkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXREYWlseURhdGEoKS5zZXRTdWJUaW1lQnlJbmRleCh0LCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkuZ2V0VUlCeUlkKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlIb21lKS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBlLnJlZnJlc2hTdWJWaWV3KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpIDwgdGhpcy5zdWJQbGF5VGltZVt0XSkge1xuICAgICAgICAgICR6MVNka01nci5TZGtNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW8oJHoxU2RrTWdyLkFkVHlwZS5BZEZyZWVUaW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKGUuZ2V0WW91bWVuZ1RyYWNrKHQpKTtcbiAgICAgICAgICAgIGEoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5yZWZyZXNoU3ViVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IERhdGUubm93KCk7XG4gICAgdmFyIGUgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCk7XG4gICAgZm9yICh2YXIgbiBpbiB0aGlzLmJ0blN1YkJnLmNoaWxkcmVuKSB7XG4gICAgICB2YXIgaSA9IE51bWJlcihuKTtcbiAgICAgIHZhciBhID0gdGhpcy5idG5TdWJCZy5jaGlsZHJlbltuXTtcbiAgICAgIHZhciBvID0gdGhpcy5zdWJQbGF5U3RhZ2VbaV07XG4gICAgICB2YXIgciA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldERhaWx5RGF0YSgpLmdldFN1YlRpbWVCeUluZGV4KGkpO1xuICAgICAgdmFyIHMgPSB0aGlzLnN1YlBsYXlUaW1lW2ldO1xuICAgICAgdGhpcy5vblN1YlZpZXcoYSwgZSwgbywgdCwgciwgcyk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25TdWJWaWV3ID0gZnVuY3Rpb24gKHQsIGUsIG4sIGksIGEsIG8pIHtcbiAgICBpZiAoZSA+IG4pIHtcbiAgICAgIHZhciByID0gTWF0aC5mbG9vcigoaSAtIGEpIC8gMWUzKTtcbiAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJuZE1hc2tcIikuYWN0aXZlID0gciA8IG87XG4gICAgICB0LmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpLmFjdGl2ZSA9IHIgPCBvO1xuICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImxhYkluZm9cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICByIDwgbyAmJiAodC5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcImxhYlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvIC0gciArIFwic1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcIm5kTWFza1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJJbmZvXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlN0YWdlIGluZm8gcGFuZWxcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZExldmVsSW5mb1wiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkxlZnQtc2lkZSBidXR0b25zXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuTGVmdFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlJpZ2h0LXNpZGUgYnV0dG9uc1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blJpZ2h0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiQ2hhbGxlbmdlIGNoZXN0IGRpc3BsYXlcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEJveFNob3dcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJCYXR0bGUgYnV0dG9uXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuQmF0dGxlXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiTWlzc2lvbiAvIHRhc2sgaW5mb1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kVGFza0luZm9cIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJTbGlkZSBwYW5lbCAoZXhwYW5kIC8gY29sbGFwc2UpXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRCdG5MZWZ0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiQWNoaWV2ZW1lbnRzIGJ1dHRvblwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0bkFjaGlldmVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJCYXR0bGUgUGFzcyBidXR0b25cIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5QYXNzcG9ydFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIk9ubGluZSByZXdhcmRzIGJ1dHRvblwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0bk9ubGluZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlNpZ24taW4gYnV0dG9uXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuU2lnblwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlNldHRpbmdzIGJ1dHRvblwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blNldHRpbmdcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJBZGQgdG8gaG9tZSBzY3JlZW4gLyBkZXNrdG9wIHNob3J0Y3V0XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuQWRkRGVza3RvcFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlNpZGViYXIgYnV0dG9uIChjaGFubmVsKVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blNpZGVCb2FyZFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkZlZWRiYWNrIC8gcmVwb3J0XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuUmVwb3J0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiTWluaS1nYW1lIC8gc2lkZSBtb2RlIGVudHJ5XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuU3ViRW50ZXJcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJNaW5pLWdhbWUgYmFja2dyb3VuZCBwbGF0ZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blN1YkJnXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFCYXNlQ3RybC5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsSG9tZUJhdHRsZUN0cmw7Il19