
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallGameCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d1fycAOxB0YFwIu5AvNIH', 'KinghtFallGameCtrl');
// _script/KinghtFallGameCtrl.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseCtrl = require("BaseCtrl");

var $z1PoolMgr = require("PoolMgr");

var $z1UIMgr = require("UIMgr");

var $z1Utils = require("Utils");

var $z1Config = require("Config");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallPathInfo = require("KinghtFallPathInfo");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallBulletBuild = require("KinghtFallBulletBuild");

var $z1KinghtFallBulletEnemy = require("KinghtFallBulletEnemy");

var $z1KinghtFallBulletPlay = require("KinghtFallBulletPlay");

var $z1KinghtFallBulletSoldier = require("KinghtFallBulletSoldier");

var $z1KinghtFallEnemyBase = require("KinghtFallEnemyBase");

var $z1KinghtFallGameCtrlData = require("KinghtFallGameCtrlData");

var $z1KinghtFallGamePlayCtrl = require("KinghtFallGamePlayCtrl");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var $z1KinghtFallSoldierBase = require("KinghtFallSoldierBase");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallGameCtrl = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.camera = null;
    e.ctrPlay = null;
    e.buildBullet = null;
    e.ndAggFlag = null;
    e.gameData = null;
    e.mapSize = cc.size(1500, 2668);
    e.moveSize = cc.size(1500, 2668);
    e.ndBg = null;
    e.ndDown = null;
    e.ndPath = null;
    e.ndTrack = null;
    e.ndMain = null;
    e.ndUI = null;
    e.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.Prepare;
    e.gameTag = [];
    e.moveDir = cc.v2(0, 0);
    e.vec2_1 = new cc.Vec2();
    e.vec2_2 = new cc.Vec2();
    e.isAgg = false;
    e.pathIndex = 0;
    e.ndPlayArr1 = [];
    e.ndPlayArr2 = [];
    e.ndEnemyArr = [];
    e.ndBuildArr1 = [];
    e.ndBuildArr2 = [];
    e.ndSoldArr = [];
    e.dropList = [];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.initData = function (t) {
    this.gameData = new $z1KinghtFallGameCtrlData["default"](this, t);
    this.ctrPlay.initData();
    this.buildBullet.node.active = false;
    this.ndAggFlag.active = false;
  };

  _ctor.prototype.initMap = function (t) {
    this.moveSize = t.getContentSize();
    this.ndBg = t.getChildByName("ndBg");
    this.mapSize = this.ndBg.getContentSize();
    this.ndDown = t.getChildByName("ndDown");
    this.ndPath = t.getChildByName("ndPath");
    this.ndTrack = t.getChildByName("ndTrack");
    this.ndMain = t.getChildByName("ndMain");
    this.ndUI = t.getChildByName("ndUI");
    this.ctrPlay.node.setParent(this.ndMain);
    this.ctrPlay.node.setPosition(this.ndPath.getChildByName("ndStar").position);
    this.ctrPlay.ndRange.setParent(this.ndUI);
    this.ndAggFlag.setParent(this.ndMain);
    this.gameData.initMap();
  };

  _ctor.prototype.onRestart = function (t) {
    t && (this.gameData.buffList = []);
    this.gameData.onRestart(t);
    this.cleanMap();
    this.moveDir = cc.v2(0, 0);
    this.ctrPlay.onRestart(t);
    this.ctrPlay.node.setPosition(this.ndPath.getChildByName("ndStar").position);
    this.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.Prepare;
    this.isAgg = false;
    this.ctrPlay.ndAgg.active = this.isAgg;
    this.ndAggFlag.active = false;
  };

  _ctor.prototype.moveFun = function (t) {
    if (t) {
      cc.Vec2.normalize(this.moveDir, t);
    } else {
      this.moveDir = cc.v2(0, 0);
    }
  };

  _ctor.prototype.onLateUpdate = function () {
    this.ctrPlay.node.getPosition(this.vec2_1);
    this.ctrPlay.node.getPosition(this.vec2_2);
    this.ctrPlay.node.zIndex = Math.floor(cc.winSize.height) - Math.floor(this.vec2_1.y);
    this.vec2_1.x = cc.misc.clampf(this.vec2_1.x, -this.moveSize.width / 2, this.moveSize.width / 2);
    this.vec2_1.y = cc.misc.clampf(this.vec2_1.y, -this.moveSize.height / 2, this.moveSize.height / 2);
    this.ctrPlay.node.setPosition(this.vec2_1);
    this.ctrPlay.ndRange.setPosition(this.vec2_1);
    this.vec2_2.x = cc.misc.clampf(this.vec2_2.x, -this.mapSize.width / 2 + cc.winSize.width / 2, this.mapSize.width / 2 - cc.winSize.width / 2);
    this.vec2_2.y = cc.misc.clampf(this.vec2_2.y, -this.mapSize.height / 2 + cc.winSize.height / 2, this.mapSize.height / 2 - cc.winSize.height / 2);
    this.camera.node.setPosition(this.vec2_2);
  };

  _ctor.prototype.onUpdate = function (t) {
    switch (this.gameStatus) {
      case $z1KinghtFallModle.KinghtFallGameStage.Prepare:
        var e = this.gameData.getBulidList();

        for (var n = 0; n < e.length; n++) {
          if (-1 != (l = e[n]).getSell()) {
            var i = l.getLockPoint();

            if (i) {
              var a = cc.Intersection.pointInPolygon(this.ctrPlay.getWpos(), i);

              if (a) {
                if (this.upBulid && l.uuid == this.upBulid.uuid) {
                  l.doUpgrade(t, false);
                } else {
                  l.doUpgrade(t, a);
                }
              } else {
                this.upBulid && l.uuid == this.upBulid.uuid && (this.upBulid = null);
                l.doUpgrade(t, a);
              }
            } else {
              l.doUpgrade(t, false);
            }
          } else {
            l.doUpgrade(t, false);
          }
        }

        this.onCommerce(t);
        break;

      case $z1KinghtFallModle.KinghtFallGameStage.Fight:
        this.gameData.onUpdata(t);
        this.ctrPlay.onUpdata(t);
        this.ndPlayArr2.forEach(function (e) {
          null == e || e.onUpdate(t);
        });
        this.ndEnemyArr.forEach(function (e) {
          null == e || e.onUpdate(t);
        });
        this.ndSoldArr.forEach(function (e) {
          null == e || e.onUpdate(t);
        });
        this.ndBuildArr2.forEach(function (e) {
          null == e || e.onUpdate(t);
        });
    }

    this.ctrPlay.doMove(this.moveDir, t);
    var o = this.gameData.getBulidList();

    for (n = 0; n < o.length; n++) {
      (l = o[n]).onUpdate(t);
    }

    var r = this.gameData.getSoldierList();

    for (var s = 0; s < r.length; s++) {
      (l = r[s]).onUpdate(t);
    }

    if (this.isAgg && (this.ctrPlay.node.getPosition(this.vec2_1), cc.Vec2.subtract(this.vec2_2, this.vec2_1, this.pathList[this.pathList.length - 1].pos), this.vec2_2.mag() > 20 && this.addPathNode(), this.pathList.length >= 1e3)) {
      e = this.gameData.getSoldierList();

      for (s = 0; s < e.length; s++) {
        var l;
        (l = e[s]).setPath(this.pathList, true);
      }

      this.pathList.slice(0, 500);
    }
  };

  _ctor.prototype.onCommerce = function (t) {
    var e = this;
    this.ctrPlay.node.getPosition(this.vec2_1);

    if (this.gameData.appearBusinessPoints && this.gameData.appearBusinessPoints.getInClick(this.vec2_1, t)) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, true);

      var n = function n(t) {
        e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);

        if (t) {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.map_coin);
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_map_coin_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
          e.gameData.appearBusinessPoints.node.active = false;
          e.gameData.coin += e.gameData.appearBusinessPoints.coinNum;
          $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, $z1Utils.Utils.StringFormat(e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.GameCom01), e.gameData.appearBusinessPoints.coinNum));
          $z1KinghtFallUIGame["default"].instance.initView();
          var n = $z1KinghtFallUIGame["default"].instance.ndCoin;
          var i = cc.v2(n.position.x + n.children[0].x, n.position.y + n.children[0].y);
          var a = e.gameData.appearBusinessPoints.node.convertToWorldSpaceAR(cc.v2(0, 0));
          var o = e.camera.getWorldToScreenPoint(a);
          var r = $z1KinghtFallUIGame["default"].instance.ctrUI.node.convertToNodeSpaceAR(o);

          var s = function s() {
            var t = cc.instantiate(n.children[0]);
            t.active = true;
            t.scale = .5;
            t.setParent($z1KinghtFallUIGame["default"].instance.ctrUI.node);
            var e = cc.v2();
            cc.Vec2.random(e, 40);
            cc.tween(t).set({
              position: cc.v3(r.x, r.y, 0)
            }).by(.2, {
              position: cc.v3(e.x, e.y, 0)
            }).to(1, {
              position: cc.v3(i.x, i.y, 0),
              scale: 1
            }).call(function () {
              t.destroy();
            }).start();
          };

          for (var l = 0; l < 10; l++) {
            s();
          }

          e.gameData.appearBusinessPoints = null;
        } else {
          e.gameData.appearBusinessPoints.init(1);
        }
      };

      (function (ud) {
        if (ud.getDiamondNum() < 50) {
          e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);
          $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
          n(false);
        } else {
          ud.subDiamondNum(50);
          n(true);
        }
      })($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData());
    }

    if (!this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagWeapon] && this.gameData.weaponBusinessPoints.getInClick(this.vec2_1, t)) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, true);

      var i = function i(t) {
        e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);

        if (t) {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.map_weapon);
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_map_weapon_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagWeapon] = 1;
          e.gameData.weaponBusinessPoints.node.active = false;
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Attack] = .5;
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.AttackSpeed] = .5;
          $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.GameCom02));
          e.ctrPlay.ctrPlayAni.setBus(1);
          e.saveGame();
        } else {
          e.gameData.weaponBusinessPoints.init(1);
        }
      };

      (function (ud) {
        if (ud.getDiamondNum() < 50) {
          e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);
          $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
          i(false);
        } else {
          ud.subDiamondNum(50);
          i(true);
        }
      })($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData());
    }

    if (1 == this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagWeapon] && $z1KinghtFallModle.KinghtFallSwitch.isMapShopSecondOpen() && this.gameData.weaponBusinessPoints.getInClick(this.vec2_1, t)) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, true);

      var a = function a(t) {
        e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);

        if (t) {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.arrow2);
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_arrow2_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagWeapon] = 2;
          e.gameData.weaponBusinessPoints.node.active = false;
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Attack] = 1;
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.AttackSpeed] = 1;
          $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.GameCom02));
          e.ctrPlay.ctrPlayAni.setBus(3);
          e.saveGame();
        } else {
          e.gameData.weaponBusinessPoints.init(2);
        }
      };

      (function (ud) {
        if (ud.getDiamondNum() < 50) {
          e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);
          $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
          a(false);
        } else {
          ud.subDiamondNum(50);
          a(true);
        }
      })($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData());
    }

    if (!this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagHorse] && this.gameData.horseBusinessPoints.getInClick(this.vec2_1, t)) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, true);

      var o = function o(t) {
        e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);

        if (t) {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.map_horse);
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_map_horse_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagHorse] = 1;
          e.gameData.horseBusinessPoints.node.active = false;
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Speed] = .5;
          $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.GameCom03));
          e.ctrPlay.ctrPlayAni.setBus(2);
          e.saveGame();
        } else {
          e.gameData.horseBusinessPoints.init(1);
        }
      };

      (function (ud) {
        if (ud.getDiamondNum() < 50) {
          e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);
          $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
          o(false);
        } else {
          ud.subDiamondNum(50);
          o(true);
        }
      })($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData());
    }

    if (1 == this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagHorse] && $z1KinghtFallModle.KinghtFallSwitch.isMapShopSecondOpen() && this.gameData.horseBusinessPoints.getInClick(this.vec2_1, t)) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, true);

      var r = function r(t) {
        e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);

        if (t) {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.horse2);
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_horse2_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagHorse] = 2;
          e.gameData.horseBusinessPoints.node.active = false;
          e.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Speed] = 1;
          $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1Config.UIID.UINONE, e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.GameCom03));
          e.ctrPlay.ctrPlayAni.setBus(4);
          e.saveGame();
        } else {
          e.gameData.horseBusinessPoints.init(2);
        }
      };

      (function (ud) {
        if (ud.getDiamondNum() < 50) {
          e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);
          $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
          r(false);
        } else {
          ud.subDiamondNum(50);
          r(true);
        }
      })($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData());
    }
  };

  _ctor.prototype.changeAge = function () {
    if (this.isAgg) {
      var t = this.gameData.getSoldierList();

      for (var e = 0; e < t.length; e++) {
        t[e].setPath(this.pathList, false);
      }
    }

    this.isAgg = !this.isAgg;

    if (this.isAgg) {
      this.ndAggFlag.Flag = 0;
      this.pathIndex = 0;
      this.pathList = [];
      this.addPathNode();
    }

    switch ($z1KinghtFallConfig.KinghtFallParameter.FollowMode) {
      case 1:
        if (this.ndAggFlag.Flag) {
          this.ndAggFlag.active = true;
          this.ndAggFlag.setPosition(this.pathList[0].pos);
          this.ndAggFlag.zIndex = Math.floor(cc.winSize.height) - Math.floor(this.pathList[0].pos.y);
          var n = this.ndAggFlag.getComponent(sp.Skeleton);
          n.setAnimation(0, "click", false);
          n.addAnimation(0, "idle", true);
        }

        break;

      case 2:
        this.ctrPlay.ndAgg.active = this.isAgg;
        this.ndAggFlag.active = false;
    }
  };

  _ctor.prototype.addPathNode = function () {
    this.ctrPlay.node.getPosition(this.vec2_1);
    this.pathList.push({
      index: this.pathIndex++,
      pos: this.vec2_1.clone()
    });
    var t = this.gameData.getSoldierList();

    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      n.node.getPosition(this.vec2_2);
      cc.Vec2.subtract(this.vec2_2, this.vec2_2, this.vec2_1);

      switch ($z1KinghtFallConfig.KinghtFallParameter.FollowMode) {
        case 1:
          n.startAgg(this.pathList[this.pathList.length - 1]) && this.ndAggFlag.Flag++;
          break;

        case 2:
          this.vec2_2.mag() < $z1KinghtFallConfig.KinghtFallParameter.FollowRange && n.startAgg(this.pathList[this.pathList.length - 1]);
      }
    }
  };

  _ctor.prototype.onPauseGame = function () {
    this.ctrPlay.setPause(true);
    var t = this.gameData.getEnemyList();

    for (var e = 0; e < t.length; e++) {
      t[e].setPause(true);
    }

    var n = this.gameData.getSoldierList();

    for (e = 0; e < n.length; e++) {
      n[e].setPause(true);
    }
  };

  _ctor.prototype.onResumeGame = function () {
    this.ctrPlay.setPause(false);
    var t = this.gameData.getEnemyList();

    for (var e = 0; e < t.length; e++) {
      t[e].setPause(false);
    }

    var n = this.gameData.getSoldierList();

    for (e = 0; e < n.length; e++) {
      n[e].setPause(false);
    }
  };

  _ctor.prototype.endRoundGame = function () {
    this.moveDir = cc.v2(0, 0);
    var t = this.gameData.endRoundGame();
    var e = $z1KinghtFallUIGame["default"].instance.ndCoin;
    var n = cc.v2(e.position.x + e.children[0].x, e.position.y + e.children[0].y);
    var i = t[0].node.convertToWorldSpaceAR(t[0].ndHp.getPosition());
    var a = this.camera.getWorldToScreenPoint(i);
    var o = $z1KinghtFallUIGame["default"].instance.ctrUI.node.convertToNodeSpaceAR(a);

    var r = function r() {
      var t = cc.instantiate(e.children[0]);
      t.active = true;
      t.scale = .5;
      t.setParent($z1KinghtFallUIGame["default"].instance.ctrUI.node);
      var i = cc.v2();
      cc.Vec2.random(i, 40);
      cc.tween(t).set({
        position: cc.v3(o.x, o.y, 0)
      }).by(.2, {
        position: cc.v3(i.x, i.y, 0)
      }).to(1, {
        position: cc.v3(n.x, n.y, 0),
        scale: 1
      }).call(function () {
        t.destroy();
      }).start();
    };

    for (var s = 0; s < 10; s++) {
      r();
    }

    var l = function l(i) {
      var a = t[i];
      var o = a.node.convertToWorldSpaceAR(a.ndHp.getPosition());
      var r = c.camera.getWorldToScreenPoint(o);
      var s = $z1KinghtFallUIGame["default"].instance.ctrUI.node.convertToNodeSpaceAR(r);
      var l = cc.instantiate(e.children[0]);
      l.active = true;
      l.scale = .5;
      l.setParent($z1KinghtFallUIGame["default"].instance.ctrUI.node);
      cc.tween(l).set({
        position: cc.v3(s.x, s.y, 0)
      }).to(1, {
        position: cc.v3(n.x, n.y, 0),
        scale: 1
      }).call(function () {
        l.destroy();
      }).start();
    };

    var c = this;

    for (s = 1; s < t.length; s++) {
      l(s);
    }

    this._unstuckPlayerFromRuins();

    this.cleanMap();
  };

  _ctor.prototype._unstuckPlayerFromRuins = function () {
    var playerPos = this.ctrPlay.getWpos();
    var buildList = this.gameData.getBulidList();

    for (var b = 0; b < buildList.length; b++) {
      var polys = buildList[b].getWposPhyCol();

      for (var p = 0; p < polys.length; p++) {
        if (cc.Intersection.pointInPolygon(playerPos, polys[p])) {
          this.ctrPlay.node.setPosition(this.ndPath.getChildByName("ndStar").position);
          return;
        }
      }
    }
  };

  _ctor.prototype.cleanMap = function () {
    for (var t = 0; t < this.ndPlayArr2.length; t++) {
      this.ndPlayArr2[t].node.active = false;
      this.ndPlayArr1.push(this.ndPlayArr2[t].node);
    }

    this.ndPlayArr2 = [];
    this.ndEnemyArr.forEach(function (t) {
      t.freeNode(false);
    });
    this.ndEnemyArr = [];
    this.ndSoldArr.forEach(function (t) {
      t.freeNode(false);
    });
    this.ndSoldArr = [];

    for (t = 0; t < this.ndBuildArr2.length; t++) {
      this.ndBuildArr2[t].node.active = false;
      this.ndBuildArr1.push(this.ndBuildArr2[t].node);
    }

    this.ndBuildArr2 = [];
  };

  _ctor.prototype.addEnemy = function (t, e) {
    var n = this;

    if (-1 != t) {
      var i = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSoldierCfgById(t);
      var a = $z1KinghtFallConfig.KinghtFallPoolName.Enemy + "_" + i.ID;

      var o = function o(i) {
        i.setParent(n.ndMain);
        i.active = true;
        var a = n.ndPath.getChildByName("ndEnemy" + e);
        i.setPosition(a.position);
        var o = i.getComponent($z1KinghtFallEnemyBase["default"]);
        o.initData(t, e);
        n.gameData.addEnemy(o);
      };

      var r = $z1PoolMgr.PoolMgr.getInstance().getNode(a);

      if (r) {
        o(r);
      } else {
        this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.Enemy, i.prefab, function (t) {
          r = cc.instantiate(t);
          $z1PoolMgr.PoolMgr.getInstance().creatrePool(a, cc.instantiate(t), 10);
          o(r);
        });
      }
    }
  };

  _ctor.prototype.addSoldier = function (t, e) {
    var n = this;
    var i = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSoldierCfgById(t);
    var a = $z1KinghtFallConfig.KinghtFallPoolName.Soldier + "_" + i.ID;

    var o = function o(i) {
      i.setParent(n.ndMain);
      i.active = true;
      var a = i.getComponent($z1KinghtFallSoldierBase["default"]);
      a.initData(t);
      n.gameData.addSoldier(a);
      e(a);
    };

    var r = $z1PoolMgr.PoolMgr.getInstance().getNode(a);

    if (r) {
      o(r);
    } else {
      this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.Enemy, "Play" + i.prefab, function (t) {
        r = cc.instantiate(t);
        $z1PoolMgr.PoolMgr.getInstance().creatrePool(a, cc.instantiate(t), 1);
        o(r);
      });
    }
  };

  _ctor.prototype.setPath = function (t) {
    var e;
    var n = {
      bornIndex: t,
      pathList: [],
      nodeIndex: 0
    };
    var i = [];
    var a = this.gameData.getBulidList();

    for (var o = 0; o < a.length; o++) {
      (l = a[o]).getIsLock() && i.push(l.ID);
    }

    var r = this.ndPath.getComponentsInChildren($z1KinghtFallPathInfo["default"]);
    var s = [];

    for (o = 0; o < r.length; o++) {
      var l;

      if ((l = r[o]).ndLockList.includes(t)) {
        if (0 == l.ndBuildList.length) {
          s.push(l.node);
        } else {
          for (var c = 0; c < i.length; c++) {
            if (l.ndBuildList.includes(i[c])) {
              s.push(l.node);
              break;
            }
          }
        }
      }
    }

    (e = n.pathList).push.apply(e, s[$z1Utils.Utils.randomRang(0, s.length)].children);
    return n;
  };

  _ctor.prototype.onPlayAttack = function (t) {
    var e = this;
    var n = this.ndPlayArr1.shift();
    n || (n = cc.instantiate(this.ctrPlay.ctrArr.node)).setParent(this.ndUI);
    n.setSiblingIndex(0);
    n.active = true;
    var i = this.ctrPlay.getAttWpos();
    var a = this.ndUI.convertToNodeSpaceAR(i);
    n.setPosition(a);
    var o = n.getComponent($z1KinghtFallBulletPlay["default"]);
    o.setSkin(this.ctrPlay.ctrPlayAni.arrName);
    this.ndPlayArr2.push(o);
    var r = this.ctrPlay.getAttack(t);
    var s = this.ctrPlay.crit >= Math.random();
    s && (r *= this.ctrPlay.critDam);
    o.setTag(a, t.node, function () {
      if (cc.isValid(t) && cc.isValid(t.node)) {
        if (!$z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGuideTips(2)) {
          $z1KinghtFallUIGame["default"].instance.ctrUI.setGuide(null);
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setGuideTips(2);
        }

        $z1KinghtFallUIGame["default"].instance.ctrEffect.showDamageNum(t.node.getPosition(), r, s);
        $z1KinghtFallUIGame["default"].instance.ctrEffect.onMonsterAttack(t.node.getPosition(), "jian_" + e.ctrPlay.ctrPlayAni.arrName);
        n.active = false;
        t.onAttacked(r);
        var i = e.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff08);
        i && t.isDead() && e.ctrPlay.addHpPro(i.Pamer[0]);
        var a = e.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff15);
        a && t.addBuff($z1KinghtFallInterface.KinghtFallEnemyBuffType.MoveSpeed, {
          subNum: a.Pamer[0],
          time: 1
        });
      }
    });
  };

  _ctor.prototype.freeBullet = function (t) {
    for (var e = 0; e < this.ndPlayArr2.length; e++) {
      if (this.ndPlayArr2[e].uuid == t.uuid) {
        this.ndPlayArr2.splice(e, 1);
        break;
      }
    }

    t.node.active = false;
    this.ndPlayArr1.push(t.node);
  };

  _ctor.prototype.onShotEnemy = function (t) {
    var e = t.getBullet();
    e.setParent(this.ndUI);
    e.setSiblingIndex(0);
    e.active = true;
    var n = t.getAttWpos();
    var i = this.ndUI.convertToNodeSpaceAR(n);
    e.setPosition(i);
    var a = e.getComponent($z1KinghtFallBulletEnemy["default"]);
    this.ndEnemyArr.push(a);
    return {
      ctr: a,
      pos: i
    };
  };

  _ctor.prototype.freeEnemyBullet = function (t) {
    for (var e = 0; e < this.ndEnemyArr.length; e++) {
      if (this.ndEnemyArr[e].uuid == t.uuid) {
        this.ndEnemyArr.splice(e, 1);
        break;
      }
    }
  };

  _ctor.prototype.onShotBuild = function (t, e) {
    var n = this.ndBuildArr1.shift();
    n || (n = cc.instantiate(this.buildBullet.node)).setParent(this.ndUI);
    n.setSiblingIndex(0);
    n.active = true;
    var i = t.getAttPos();
    n.setPosition(i);
    var a = n.getComponent($z1KinghtFallBulletBuild["default"]);
    this.ndBuildArr2.push(a);
    var o = t.getAttack();
    a.setTag(i, e.node, function () {
      if (cc.isValid(e) && cc.isValid(e.node)) {
        $z1KinghtFallUIGame["default"].instance.ctrEffect.showDamageNum(e.node.getPosition(), o);
        $z1KinghtFallUIGame["default"].instance.ctrEffect.onMonsterAttack(e.node.getPosition(), "jian_lv1");
        n.active = false;
        e.onAttacked(o);
      }
    });
  };

  _ctor.prototype.freeBuildBullet = function (t) {
    for (var e = 0; e < this.ndBuildArr2.length; e++) {
      if (this.ndBuildArr2[e].uuid == t.uuid) {
        this.ndBuildArr2.splice(e, 1);
        break;
      }
    }

    t.node.active = false;
    this.ndBuildArr1.push(t.node);
  };

  _ctor.prototype.onShotSoldier = function (t) {
    var e = t.getBullet();
    e.setParent(this.ndUI);
    e.setSiblingIndex(0);
    e.active = true;
    var n = t.getAttWpos();
    var i = this.ndUI.convertToNodeSpaceAR(n);
    e.setPosition(i);
    var a = e.getComponent($z1KinghtFallBulletSoldier["default"]);
    this.ndSoldArr.push(a);
    return {
      ctr: a,
      pos: i
    };
  };

  _ctor.prototype.freeSoldierBullet = function (t) {
    for (var e = 0; e < this.ndSoldArr.length; e++) {
      if (this.ndSoldArr[e].uuid == t.uuid) {
        this.ndSoldArr.splice(e, 1);
        break;
      }
    }
  };

  _ctor.prototype.onDropItem = function (t) {
    this.dropList.push({
      ndItem: null,
      type: t
    });
  };

  _ctor.prototype.onChangeSpeed = function () {
    this.ctrPlay.ctrPlayAni.onChangeSpeed();
    this.gameData.onChangeSpeed();
  };

  _ctor.prototype.loadGame = function () {
    var t = this;

    if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().hasSave(this.gameData.levelCfg.Level)) {
      this.gameData.setRound();
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().getBuffList().forEach(function (e) {
        t.gameData.addGameBuff(e);
      });
      var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().getBuildInfoList();
      var n = this.gameData.getBulidList();

      for (var i = 0; i < n.length; i++) {
        var a = n[i];

        for (var o = 0; o < e.length; o++) {
          var r = e[o];
          a.ID == r.point && a.setSave(r);
        }
      }

      this.gameData.businessAdd = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().getBusinessList();

      if (1 == this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagWeapon]) {
        this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Attack] = .5;
        this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.AttackSpeed] = .5;
        this.ctrPlay.ctrPlayAni.setBus(1);
      }

      if (2 == this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagWeapon] && $z1KinghtFallModle.KinghtFallSwitch.isMapShopSecondOpen()) {
        this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Attack] = 1;
        this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.AttackSpeed] = 1;
        this.ctrPlay.ctrPlayAni.setBus(3);
      }

      if (1 == this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagHorse]) {
        this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Speed] = .5;
        this.ctrPlay.ctrPlayAni.setBus(2);
      }

      if (2 == this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.FlagHorse] && $z1KinghtFallModle.KinghtFallSwitch.isMapShopSecondOpen()) {
        this.gameData.businessAdd[$z1KinghtFallGameCtrlData.KinghtFallCommerceKeyType.Speed] = 1;
        this.ctrPlay.ctrPlayAni.setBus(4);
      }

      var s = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().getTaskInfo();

      if (s) {
        this.gameData.taskInfo.index = s.index;
        this.gameData.taskInfo.list = s.list;
        this.gameData.taskInfo.stage = s.stage;
      }

      return true;
    }

    return false;
  };

  _ctor.prototype.saveGame = function () {
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setLevelInfo(this.gameData.levelCfg.Level, this.gameData.round, this.gameData.coin);
    var t = [];
    this.gameData.buffList.forEach(function (e) {
      t.push(e.id);
    });
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setBuffList(t);
    var e = [];
    this.gameData.getBulidList().forEach(function (t) {
      e.push(t.getSave());
    });
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setBuildInfoList(e);
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setBusinessList(this.gameData.businessAdd);
    var n = {
      index: this.gameData.taskInfo.index,
      list: this.gameData.taskInfo.list,
      stage: this.gameData.taskInfo.stage
    };
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setTaskInfo(n);
  };

  cc__decorate([ccp_property({
    type: cc.Camera,
    tooltip: "Camera"
  })], _ctor.prototype, "camera", undefined);
  cc__decorate([ccp_property({
    type: $z1KinghtFallGamePlayCtrl["default"],
    tooltip: "Player"
  })], _ctor.prototype, "ctrPlay", undefined);
  cc__decorate([ccp_property({
    type: $z1KinghtFallBulletBuild["default"],
    tooltip: "Build arrow"
  })], _ctor.prototype, "buildBullet", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Summon piece"
  })], _ctor.prototype, "ndAggFlag", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_KinghtFallGameCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxHYW1lQ3RybC5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFCYXNlQ3RybCIsInJlcXVpcmUiLCIkejFQb29sTWdyIiwiJHoxVUlNZ3IiLCIkejFVdGlscyIsIiR6MUNvbmZpZyIsIiR6MUdhbWVUcmFja0RhdGFFdmVudCIsIiR6MVBsYXllck1nciIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsVGV4dENvbmZpZyIsIiR6MUtpbmdodEZhbGxFbnVtIiwiJHoxS2luZ2h0RmFsbERhdGFNZ3IiLCIkejFLaW5naHRGYWxsUGxheWVyTWdyIiwiJHoxS2luZ2h0RmFsbE1vZGxlIiwiJHoxS2luZ2h0RmFsbFBhdGhJbmZvIiwiJHoxS2luZ2h0RmFsbFVJR2FtZSIsIiR6MUtpbmdodEZhbGxCdWxsZXRCdWlsZCIsIiR6MUtpbmdodEZhbGxCdWxsZXRFbmVteSIsIiR6MUtpbmdodEZhbGxCdWxsZXRQbGF5IiwiJHoxS2luZ2h0RmFsbEJ1bGxldFNvbGRpZXIiLCIkejFLaW5naHRGYWxsRW5lbXlCYXNlIiwiJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YSIsIiR6MUtpbmdodEZhbGxHYW1lUGxheUN0cmwiLCIkejFLaW5naHRGYWxsSW50ZXJmYWNlIiwiJHoxS2luZ2h0RmFsbFNvbGRpZXJCYXNlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxHYW1lQ3RybCIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImNhbWVyYSIsImN0clBsYXkiLCJidWlsZEJ1bGxldCIsIm5kQWdnRmxhZyIsImdhbWVEYXRhIiwibWFwU2l6ZSIsInNpemUiLCJtb3ZlU2l6ZSIsIm5kQmciLCJuZERvd24iLCJuZFBhdGgiLCJuZFRyYWNrIiwibmRNYWluIiwibmRVSSIsImdhbWVTdGF0dXMiLCJLaW5naHRGYWxsR2FtZVN0YWdlIiwiUHJlcGFyZSIsImdhbWVUYWciLCJtb3ZlRGlyIiwidjIiLCJ2ZWMyXzEiLCJWZWMyIiwidmVjMl8yIiwiaXNBZ2ciLCJwYXRoSW5kZXgiLCJuZFBsYXlBcnIxIiwibmRQbGF5QXJyMiIsIm5kRW5lbXlBcnIiLCJuZEJ1aWxkQXJyMSIsIm5kQnVpbGRBcnIyIiwibmRTb2xkQXJyIiwiZHJvcExpc3QiLCJwcm90b3R5cGUiLCJpbml0RGF0YSIsIm5vZGUiLCJhY3RpdmUiLCJpbml0TWFwIiwiZ2V0Q29udGVudFNpemUiLCJnZXRDaGlsZEJ5TmFtZSIsInNldFBhcmVudCIsInNldFBvc2l0aW9uIiwicG9zaXRpb24iLCJuZFJhbmdlIiwib25SZXN0YXJ0IiwiYnVmZkxpc3QiLCJjbGVhbk1hcCIsIm5kQWdnIiwibW92ZUZ1biIsIm5vcm1hbGl6ZSIsIm9uTGF0ZVVwZGF0ZSIsImdldFBvc2l0aW9uIiwiekluZGV4IiwiTWF0aCIsImZsb29yIiwid2luU2l6ZSIsImhlaWdodCIsInkiLCJ4IiwibWlzYyIsImNsYW1wZiIsIndpZHRoIiwib25VcGRhdGUiLCJnZXRCdWxpZExpc3QiLCJuIiwibGVuZ3RoIiwibCIsImdldFNlbGwiLCJnZXRMb2NrUG9pbnQiLCJhIiwiSW50ZXJzZWN0aW9uIiwicG9pbnRJblBvbHlnb24iLCJnZXRXcG9zIiwidXBCdWxpZCIsInV1aWQiLCJkb1VwZ3JhZGUiLCJvbkNvbW1lcmNlIiwiRmlnaHQiLCJvblVwZGF0YSIsImZvckVhY2giLCJkb01vdmUiLCJvIiwiciIsImdldFNvbGRpZXJMaXN0IiwicyIsInN1YnRyYWN0IiwicGF0aExpc3QiLCJwb3MiLCJtYWciLCJhZGRQYXRoTm9kZSIsInNldFBhdGgiLCJzbGljZSIsImFwcGVhckJ1c2luZXNzUG9pbnRzIiwiZ2V0SW5DbGljayIsInNlbmRFdmVudCIsIktpbmdodEZhbGxFdmVudE5hbWUiLCJHYW1lUGF1c2UiLCJQbGF5ZXJNZ3IiLCJnZXRJbnN0YW5jZSIsImdldFRyYWNrRGF0YSIsInlvdW1lbmdUcmFjayIsIlRyYWNrSWQiLCJtYXBfY29pbiIsInBheV9tYXBfY29pbl9ZIiwiS2luZ2h0RmFsbFBsYXllck1nciIsImdldFVzZXJEYXRhIiwiZ2V0TWF4U3RhZ2UiLCJjb2luIiwiY29pbk51bSIsIlVJTWdyIiwib3BlblVJIiwiVUlJRCIsIlVJVGlwcyIsIlVJTk9ORSIsIlV0aWxzIiwiU3RyaW5nRm9ybWF0IiwiVCIsIktpbmdodEZhbGxUZXh0Q29uZmlnIiwiR2FtZUNvbTAxIiwiaW5zdGFuY2UiLCJpbml0VmlldyIsIm5kQ29pbiIsImNoaWxkcmVuIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiZ2V0V29ybGRUb1NjcmVlblBvaW50IiwiY3RyVUkiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImluc3RhbnRpYXRlIiwic2NhbGUiLCJyYW5kb20iLCJ0d2VlbiIsInNldCIsInYzIiwiYnkiLCJ0byIsImNhbGwiLCJkZXN0cm95Iiwic3RhcnQiLCJpbml0IiwidWQiLCJnZXREaWFtb25kTnVtIiwiS2luZ2h0RmFsbFVJSUQiLCJVSUJQU2hvcCIsInN1YkRpYW1vbmROdW0iLCJidXNpbmVzc0FkZCIsIktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUiLCJGbGFnV2VhcG9uIiwid2VhcG9uQnVzaW5lc3NQb2ludHMiLCJtYXBfd2VhcG9uIiwicGF5X21hcF93ZWFwb25fWSIsIkF0dGFjayIsIkF0dGFja1NwZWVkIiwiR2FtZUNvbTAyIiwiY3RyUGxheUFuaSIsInNldEJ1cyIsInNhdmVHYW1lIiwiS2luZ2h0RmFsbFN3aXRjaCIsImlzTWFwU2hvcFNlY29uZE9wZW4iLCJhcnJvdzIiLCJwYXlfYXJyb3cyX1kiLCJGbGFnSG9yc2UiLCJob3JzZUJ1c2luZXNzUG9pbnRzIiwibWFwX2hvcnNlIiwicGF5X21hcF9ob3JzZV9ZIiwiU3BlZWQiLCJHYW1lQ29tMDMiLCJob3JzZTIiLCJwYXlfaG9yc2UyX1kiLCJjaGFuZ2VBZ2UiLCJGbGFnIiwiS2luZ2h0RmFsbFBhcmFtZXRlciIsIkZvbGxvd01vZGUiLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwiYWRkQW5pbWF0aW9uIiwicHVzaCIsImluZGV4IiwiY2xvbmUiLCJzdGFydEFnZyIsIkZvbGxvd1JhbmdlIiwib25QYXVzZUdhbWUiLCJzZXRQYXVzZSIsImdldEVuZW15TGlzdCIsIm9uUmVzdW1lR2FtZSIsImVuZFJvdW5kR2FtZSIsIm5kSHAiLCJjIiwiX3Vuc3R1Y2tQbGF5ZXJGcm9tUnVpbnMiLCJwbGF5ZXJQb3MiLCJidWlsZExpc3QiLCJiIiwicG9seXMiLCJnZXRXcG9zUGh5Q29sIiwicCIsImZyZWVOb2RlIiwiYWRkRW5lbXkiLCJLaW5naHRGYWxsRGF0YU1nciIsImdldFNvbGRpZXJDZmdCeUlkIiwiS2luZ2h0RmFsbFBvb2xOYW1lIiwiRW5lbXkiLCJJRCIsIlBvb2xNZ3IiLCJnZXROb2RlIiwibG9hZFByZWZhYiIsIktpbmdodEZhbGxCdW5kZWxOYW1lIiwicHJlZmFiIiwiY3JlYXRyZVBvb2wiLCJhZGRTb2xkaWVyIiwiU29sZGllciIsImJvcm5JbmRleCIsIm5vZGVJbmRleCIsImdldElzTG9jayIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwibmRMb2NrTGlzdCIsImluY2x1ZGVzIiwibmRCdWlsZExpc3QiLCJyYW5kb21SYW5nIiwib25QbGF5QXR0YWNrIiwic2hpZnQiLCJjdHJBcnIiLCJzZXRTaWJsaW5nSW5kZXgiLCJnZXRBdHRXcG9zIiwic2V0U2tpbiIsImFyck5hbWUiLCJnZXRBdHRhY2siLCJjcml0IiwiY3JpdERhbSIsInNldFRhZyIsImlzVmFsaWQiLCJnZXRHdWlkZURhdGEiLCJnZXRHdWlkZVRpcHMiLCJzZXRHdWlkZSIsInNldEd1aWRlVGlwcyIsImN0ckVmZmVjdCIsInNob3dEYW1hZ2VOdW0iLCJvbk1vbnN0ZXJBdHRhY2siLCJvbkF0dGFja2VkIiwiZ2V0R2FtZUJ1ZmYiLCJLaW5naHRGYWxsRW51bUJ1ZmZDZmciLCJCdWZmMDgiLCJpc0RlYWQiLCJhZGRIcFBybyIsIlBhbWVyIiwiQnVmZjE1IiwiYWRkQnVmZiIsIktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlIiwiTW92ZVNwZWVkIiwic3ViTnVtIiwidGltZSIsImZyZWVCdWxsZXQiLCJzcGxpY2UiLCJvblNob3RFbmVteSIsImdldEJ1bGxldCIsImN0ciIsImZyZWVFbmVteUJ1bGxldCIsIm9uU2hvdEJ1aWxkIiwiZ2V0QXR0UG9zIiwiZnJlZUJ1aWxkQnVsbGV0Iiwib25TaG90U29sZGllciIsImZyZWVTb2xkaWVyQnVsbGV0Iiwib25Ecm9wSXRlbSIsIm5kSXRlbSIsInR5cGUiLCJvbkNoYW5nZVNwZWVkIiwibG9hZEdhbWUiLCJnZXRHYW1lRGF0YSIsImhhc1NhdmUiLCJsZXZlbENmZyIsIkxldmVsIiwic2V0Um91bmQiLCJnZXRCdWZmTGlzdCIsImFkZEdhbWVCdWZmIiwiZ2V0QnVpbGRJbmZvTGlzdCIsInBvaW50Iiwic2V0U2F2ZSIsImdldEJ1c2luZXNzTGlzdCIsImdldFRhc2tJbmZvIiwidGFza0luZm8iLCJsaXN0Iiwic3RhZ2UiLCJzZXRMZXZlbEluZm8iLCJyb3VuZCIsImlkIiwic2V0QnVmZkxpc3QiLCJnZXRTYXZlIiwic2V0QnVpbGRJbmZvTGlzdCIsInNldEJ1c2luZXNzTGlzdCIsInNldFRhc2tJbmZvIiwiQ2FtZXJhIiwidG9vbHRpcCIsInVuZGVmaW5lZCIsIk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3Qzs7QUFHQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXpCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsT0FBRCxDQUF0Qjs7QUFDQSxJQUFJRyxRQUFRLEdBQUdILE9BQU8sQ0FBQyxPQUFELENBQXRCOztBQUNBLElBQUlJLFNBQVMsR0FBR0osT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUsscUJBQXFCLEdBQUdMLE9BQU8sQ0FBQyxvQkFBRCxDQUFuQzs7QUFDQSxJQUFJTSxZQUFZLEdBQUdOLE9BQU8sQ0FBQyxXQUFELENBQTFCOztBQUNBLElBQUlPLG1CQUFtQixHQUFHUCxPQUFPLENBQUMsa0JBQUQsQ0FBakM7O0FBQ0EsSUFBSVEsdUJBQXVCLEdBQUdSLE9BQU8sQ0FBQyxzQkFBRCxDQUFyQzs7QUFDQSxJQUFJUyxpQkFBaUIsR0FBR1QsT0FBTyxDQUFDLGdCQUFELENBQS9COztBQUNBLElBQUlVLG9CQUFvQixHQUFHVixPQUFPLENBQUMsbUJBQUQsQ0FBbEM7O0FBQ0EsSUFBSVcsc0JBQXNCLEdBQUdYLE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJWSxrQkFBa0IsR0FBR1osT0FBTyxDQUFDLGlCQUFELENBQWhDOztBQUNBLElBQUlhLHFCQUFxQixHQUFHYixPQUFPLENBQUMsb0JBQUQsQ0FBbkM7O0FBQ0EsSUFBSWMsbUJBQW1CLEdBQUdkLE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJZSx3QkFBd0IsR0FBR2YsT0FBTyxDQUFDLHVCQUFELENBQXRDOztBQUNBLElBQUlnQix3QkFBd0IsR0FBR2hCLE9BQU8sQ0FBQyx1QkFBRCxDQUF0Qzs7QUFDQSxJQUFJaUIsdUJBQXVCLEdBQUdqQixPQUFPLENBQUMsc0JBQUQsQ0FBckM7O0FBQ0EsSUFBSWtCLDBCQUEwQixHQUFHbEIsT0FBTyxDQUFDLHlCQUFELENBQXhDOztBQUNBLElBQUltQixzQkFBc0IsR0FBR25CLE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJb0IseUJBQXlCLEdBQUdwQixPQUFPLENBQUMsd0JBQUQsQ0FBdkM7O0FBQ0EsSUFBSXFCLHlCQUF5QixHQUFHckIsT0FBTyxDQUFDLHdCQUFELENBQXZDOztBQUNBLElBQUlzQixzQkFBc0IsR0FBR3RCLE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJdUIsd0JBQXdCLEdBQUd2QixPQUFPLENBQUMsdUJBQUQsQ0FBdEM7O0FBQ0EsSUFBSXdCLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcsR0FBR0gsYUFBYSxDQUFDSSxPQUFoQztBQUNBLElBQUlDLFlBQVksR0FBR0wsYUFBYSxDQUFDTSxRQUFqQzs7QUFDQSxJQUFJQyxzQkFBc0IsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDeEMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLElBQUlDLENBQUMsR0FBRyxTQUFTRixDQUFULElBQWNBLENBQUMsQ0FBQ0csS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFkLElBQTBDLElBQWxEO0lBQ0FGLENBQUMsQ0FBQ0csTUFBRixHQUFXLElBQVg7SUFDQUgsQ0FBQyxDQUFDSSxPQUFGLEdBQVksSUFBWjtJQUNBSixDQUFDLENBQUNLLFdBQUYsR0FBZ0IsSUFBaEI7SUFDQUwsQ0FBQyxDQUFDTSxTQUFGLEdBQWMsSUFBZDtJQUNBTixDQUFDLENBQUNPLFFBQUYsR0FBYSxJQUFiO0lBQ0FQLENBQUMsQ0FBQ1EsT0FBRixHQUFZakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRLElBQVIsRUFBYyxJQUFkLENBQVo7SUFDQVQsQ0FBQyxDQUFDVSxRQUFGLEdBQWFuQixFQUFFLENBQUNrQixJQUFILENBQVEsSUFBUixFQUFjLElBQWQsQ0FBYjtJQUNBVCxDQUFDLENBQUNXLElBQUYsR0FBUyxJQUFUO0lBQ0FYLENBQUMsQ0FBQ1ksTUFBRixHQUFXLElBQVg7SUFDQVosQ0FBQyxDQUFDYSxNQUFGLEdBQVcsSUFBWDtJQUNBYixDQUFDLENBQUNjLE9BQUYsR0FBWSxJQUFaO0lBQ0FkLENBQUMsQ0FBQ2UsTUFBRixHQUFXLElBQVg7SUFDQWYsQ0FBQyxDQUFDZ0IsSUFBRixHQUFTLElBQVQ7SUFDQWhCLENBQUMsQ0FBQ2lCLFVBQUYsR0FBZXZDLGtCQUFrQixDQUFDd0MsbUJBQW5CLENBQXVDQyxPQUF0RDtJQUNBbkIsQ0FBQyxDQUFDb0IsT0FBRixHQUFZLEVBQVo7SUFDQXBCLENBQUMsQ0FBQ3FCLE9BQUYsR0FBWTlCLEVBQUUsQ0FBQytCLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxDQUFaO0lBQ0F0QixDQUFDLENBQUN1QixNQUFGLEdBQVcsSUFBSWhDLEVBQUUsQ0FBQ2lDLElBQVAsRUFBWDtJQUNBeEIsQ0FBQyxDQUFDeUIsTUFBRixHQUFXLElBQUlsQyxFQUFFLENBQUNpQyxJQUFQLEVBQVg7SUFDQXhCLENBQUMsQ0FBQzBCLEtBQUYsR0FBVSxLQUFWO0lBQ0ExQixDQUFDLENBQUMyQixTQUFGLEdBQWMsQ0FBZDtJQUNBM0IsQ0FBQyxDQUFDNEIsVUFBRixHQUFlLEVBQWY7SUFDQTVCLENBQUMsQ0FBQzZCLFVBQUYsR0FBZSxFQUFmO0lBQ0E3QixDQUFDLENBQUM4QixVQUFGLEdBQWUsRUFBZjtJQUNBOUIsQ0FBQyxDQUFDK0IsV0FBRixHQUFnQixFQUFoQjtJQUNBL0IsQ0FBQyxDQUFDZ0MsV0FBRixHQUFnQixFQUFoQjtJQUNBaEMsQ0FBQyxDQUFDaUMsU0FBRixHQUFjLEVBQWQ7SUFDQWpDLENBQUMsQ0FBQ2tDLFFBQUYsR0FBYSxFQUFiO0lBQ0EsT0FBT2xDLENBQVA7RUFDRDs7RUFDRDNDLFdBQVcsQ0FBQzBDLEtBQUQsRUFBUUQsQ0FBUixDQUFYOztFQUNBQyxLQUFLLENBQUNvQyxTQUFOLENBQWdCQyxRQUFoQixHQUEyQixVQUFVdEMsQ0FBVixFQUFhO0lBQ3RDLEtBQUtTLFFBQUwsR0FBZ0IsSUFBSXJCLHlCQUF5QixXQUE3QixDQUFzQyxJQUF0QyxFQUE0Q1ksQ0FBNUMsQ0FBaEI7SUFDQSxLQUFLTSxPQUFMLENBQWFnQyxRQUFiO0lBQ0EsS0FBSy9CLFdBQUwsQ0FBaUJnQyxJQUFqQixDQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0I7SUFDQSxLQUFLaEMsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixLQUF4QjtFQUNELENBTEQ7O0VBTUF2QyxLQUFLLENBQUNvQyxTQUFOLENBQWdCSSxPQUFoQixHQUEwQixVQUFVekMsQ0FBVixFQUFhO0lBQ3JDLEtBQUtZLFFBQUwsR0FBZ0JaLENBQUMsQ0FBQzBDLGNBQUYsRUFBaEI7SUFDQSxLQUFLN0IsSUFBTCxHQUFZYixDQUFDLENBQUMyQyxjQUFGLENBQWlCLE1BQWpCLENBQVo7SUFDQSxLQUFLakMsT0FBTCxHQUFlLEtBQUtHLElBQUwsQ0FBVTZCLGNBQVYsRUFBZjtJQUNBLEtBQUs1QixNQUFMLEdBQWNkLENBQUMsQ0FBQzJDLGNBQUYsQ0FBaUIsUUFBakIsQ0FBZDtJQUNBLEtBQUs1QixNQUFMLEdBQWNmLENBQUMsQ0FBQzJDLGNBQUYsQ0FBaUIsUUFBakIsQ0FBZDtJQUNBLEtBQUszQixPQUFMLEdBQWVoQixDQUFDLENBQUMyQyxjQUFGLENBQWlCLFNBQWpCLENBQWY7SUFDQSxLQUFLMUIsTUFBTCxHQUFjakIsQ0FBQyxDQUFDMkMsY0FBRixDQUFpQixRQUFqQixDQUFkO0lBQ0EsS0FBS3pCLElBQUwsR0FBWWxCLENBQUMsQ0FBQzJDLGNBQUYsQ0FBaUIsTUFBakIsQ0FBWjtJQUNBLEtBQUtyQyxPQUFMLENBQWFpQyxJQUFiLENBQWtCSyxTQUFsQixDQUE0QixLQUFLM0IsTUFBakM7SUFDQSxLQUFLWCxPQUFMLENBQWFpQyxJQUFiLENBQWtCTSxXQUFsQixDQUE4QixLQUFLOUIsTUFBTCxDQUFZNEIsY0FBWixDQUEyQixRQUEzQixFQUFxQ0csUUFBbkU7SUFDQSxLQUFLeEMsT0FBTCxDQUFheUMsT0FBYixDQUFxQkgsU0FBckIsQ0FBK0IsS0FBSzFCLElBQXBDO0lBQ0EsS0FBS1YsU0FBTCxDQUFlb0MsU0FBZixDQUF5QixLQUFLM0IsTUFBOUI7SUFDQSxLQUFLUixRQUFMLENBQWNnQyxPQUFkO0VBQ0QsQ0FkRDs7RUFlQXhDLEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0JXLFNBQWhCLEdBQTRCLFVBQVVoRCxDQUFWLEVBQWE7SUFDdkNBLENBQUMsS0FBSyxLQUFLUyxRQUFMLENBQWN3QyxRQUFkLEdBQXlCLEVBQTlCLENBQUQ7SUFDQSxLQUFLeEMsUUFBTCxDQUFjdUMsU0FBZCxDQUF3QmhELENBQXhCO0lBQ0EsS0FBS2tELFFBQUw7SUFDQSxLQUFLM0IsT0FBTCxHQUFlOUIsRUFBRSxDQUFDK0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWY7SUFDQSxLQUFLbEIsT0FBTCxDQUFhMEMsU0FBYixDQUF1QmhELENBQXZCO0lBQ0EsS0FBS00sT0FBTCxDQUFhaUMsSUFBYixDQUFrQk0sV0FBbEIsQ0FBOEIsS0FBSzlCLE1BQUwsQ0FBWTRCLGNBQVosQ0FBMkIsUUFBM0IsRUFBcUNHLFFBQW5FO0lBQ0EsS0FBSzNCLFVBQUwsR0FBa0J2QyxrQkFBa0IsQ0FBQ3dDLG1CQUFuQixDQUF1Q0MsT0FBekQ7SUFDQSxLQUFLTyxLQUFMLEdBQWEsS0FBYjtJQUNBLEtBQUt0QixPQUFMLENBQWE2QyxLQUFiLENBQW1CWCxNQUFuQixHQUE0QixLQUFLWixLQUFqQztJQUNBLEtBQUtwQixTQUFMLENBQWVnQyxNQUFmLEdBQXdCLEtBQXhCO0VBQ0QsQ0FYRDs7RUFZQXZDLEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0JlLE9BQWhCLEdBQTBCLFVBQVVwRCxDQUFWLEVBQWE7SUFDckMsSUFBSUEsQ0FBSixFQUFPO01BQ0xQLEVBQUUsQ0FBQ2lDLElBQUgsQ0FBUTJCLFNBQVIsQ0FBa0IsS0FBSzlCLE9BQXZCLEVBQWdDdkIsQ0FBaEM7SUFDRCxDQUZELE1BRU87TUFDTCxLQUFLdUIsT0FBTCxHQUFlOUIsRUFBRSxDQUFDK0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWY7SUFDRDtFQUNGLENBTkQ7O0VBT0F2QixLQUFLLENBQUNvQyxTQUFOLENBQWdCaUIsWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxLQUFLaEQsT0FBTCxDQUFhaUMsSUFBYixDQUFrQmdCLFdBQWxCLENBQThCLEtBQUs5QixNQUFuQztJQUNBLEtBQUtuQixPQUFMLENBQWFpQyxJQUFiLENBQWtCZ0IsV0FBbEIsQ0FBOEIsS0FBSzVCLE1BQW5DO0lBQ0EsS0FBS3JCLE9BQUwsQ0FBYWlDLElBQWIsQ0FBa0JpQixNQUFsQixHQUEyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdqRSxFQUFFLENBQUNrRSxPQUFILENBQVdDLE1BQXRCLElBQWdDSCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLakMsTUFBTCxDQUFZb0MsQ0FBdkIsQ0FBM0Q7SUFDQSxLQUFLcEMsTUFBTCxDQUFZcUMsQ0FBWixHQUFnQnJFLEVBQUUsQ0FBQ3NFLElBQUgsQ0FBUUMsTUFBUixDQUFlLEtBQUt2QyxNQUFMLENBQVlxQyxDQUEzQixFQUE4QixDQUFDLEtBQUtsRCxRQUFMLENBQWNxRCxLQUFmLEdBQXVCLENBQXJELEVBQXdELEtBQUtyRCxRQUFMLENBQWNxRCxLQUFkLEdBQXNCLENBQTlFLENBQWhCO0lBQ0EsS0FBS3hDLE1BQUwsQ0FBWW9DLENBQVosR0FBZ0JwRSxFQUFFLENBQUNzRSxJQUFILENBQVFDLE1BQVIsQ0FBZSxLQUFLdkMsTUFBTCxDQUFZb0MsQ0FBM0IsRUFBOEIsQ0FBQyxLQUFLakQsUUFBTCxDQUFjZ0QsTUFBZixHQUF3QixDQUF0RCxFQUF5RCxLQUFLaEQsUUFBTCxDQUFjZ0QsTUFBZCxHQUF1QixDQUFoRixDQUFoQjtJQUNBLEtBQUt0RCxPQUFMLENBQWFpQyxJQUFiLENBQWtCTSxXQUFsQixDQUE4QixLQUFLcEIsTUFBbkM7SUFDQSxLQUFLbkIsT0FBTCxDQUFheUMsT0FBYixDQUFxQkYsV0FBckIsQ0FBaUMsS0FBS3BCLE1BQXRDO0lBQ0EsS0FBS0UsTUFBTCxDQUFZbUMsQ0FBWixHQUFnQnJFLEVBQUUsQ0FBQ3NFLElBQUgsQ0FBUUMsTUFBUixDQUFlLEtBQUtyQyxNQUFMLENBQVltQyxDQUEzQixFQUE4QixDQUFDLEtBQUtwRCxPQUFMLENBQWF1RCxLQUFkLEdBQXNCLENBQXRCLEdBQTBCeEUsRUFBRSxDQUFDa0UsT0FBSCxDQUFXTSxLQUFYLEdBQW1CLENBQTNFLEVBQThFLEtBQUt2RCxPQUFMLENBQWF1RCxLQUFiLEdBQXFCLENBQXJCLEdBQXlCeEUsRUFBRSxDQUFDa0UsT0FBSCxDQUFXTSxLQUFYLEdBQW1CLENBQTFILENBQWhCO0lBQ0EsS0FBS3RDLE1BQUwsQ0FBWWtDLENBQVosR0FBZ0JwRSxFQUFFLENBQUNzRSxJQUFILENBQVFDLE1BQVIsQ0FBZSxLQUFLckMsTUFBTCxDQUFZa0MsQ0FBM0IsRUFBOEIsQ0FBQyxLQUFLbkQsT0FBTCxDQUFha0QsTUFBZCxHQUF1QixDQUF2QixHQUEyQm5FLEVBQUUsQ0FBQ2tFLE9BQUgsQ0FBV0MsTUFBWCxHQUFvQixDQUE3RSxFQUFnRixLQUFLbEQsT0FBTCxDQUFha0QsTUFBYixHQUFzQixDQUF0QixHQUEwQm5FLEVBQUUsQ0FBQ2tFLE9BQUgsQ0FBV0MsTUFBWCxHQUFvQixDQUE5SCxDQUFoQjtJQUNBLEtBQUt2RCxNQUFMLENBQVlrQyxJQUFaLENBQWlCTSxXQUFqQixDQUE2QixLQUFLbEIsTUFBbEM7RUFDRCxDQVhEOztFQVlBMUIsS0FBSyxDQUFDb0MsU0FBTixDQUFnQjZCLFFBQWhCLEdBQTJCLFVBQVVsRSxDQUFWLEVBQWE7SUFDdEMsUUFBUSxLQUFLbUIsVUFBYjtNQUNFLEtBQUt2QyxrQkFBa0IsQ0FBQ3dDLG1CQUFuQixDQUF1Q0MsT0FBNUM7UUFDRSxJQUFJbkIsQ0FBQyxHQUFHLEtBQUtPLFFBQUwsQ0FBYzBELFlBQWQsRUFBUjs7UUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdsRSxDQUFDLENBQUNtRSxNQUF0QixFQUE4QkQsQ0FBQyxFQUEvQixFQUFtQztVQUNqQyxJQUFJLENBQUMsQ0FBRCxJQUFNLENBQUNFLENBQUMsR0FBR3BFLENBQUMsQ0FBQ2tFLENBQUQsQ0FBTixFQUFXRyxPQUFYLEVBQVYsRUFBZ0M7WUFDOUIsSUFBSWpILENBQUMsR0FBR2dILENBQUMsQ0FBQ0UsWUFBRixFQUFSOztZQUNBLElBQUlsSCxDQUFKLEVBQU87Y0FDTCxJQUFJbUgsQ0FBQyxHQUFHaEYsRUFBRSxDQUFDaUYsWUFBSCxDQUFnQkMsY0FBaEIsQ0FBK0IsS0FBS3JFLE9BQUwsQ0FBYXNFLE9BQWIsRUFBL0IsRUFBdUR0SCxDQUF2RCxDQUFSOztjQUNBLElBQUltSCxDQUFKLEVBQU87Z0JBQ0wsSUFBSSxLQUFLSSxPQUFMLElBQWdCUCxDQUFDLENBQUNRLElBQUYsSUFBVSxLQUFLRCxPQUFMLENBQWFDLElBQTNDLEVBQWlEO2tCQUMvQ1IsQ0FBQyxDQUFDUyxTQUFGLENBQVkvRSxDQUFaLEVBQWUsS0FBZjtnQkFDRCxDQUZELE1BRU87a0JBQ0xzRSxDQUFDLENBQUNTLFNBQUYsQ0FBWS9FLENBQVosRUFBZXlFLENBQWY7Z0JBQ0Q7Y0FDRixDQU5ELE1BTU87Z0JBQ0wsS0FBS0ksT0FBTCxJQUFnQlAsQ0FBQyxDQUFDUSxJQUFGLElBQVUsS0FBS0QsT0FBTCxDQUFhQyxJQUF2QyxLQUFnRCxLQUFLRCxPQUFMLEdBQWUsSUFBL0Q7Z0JBQ0FQLENBQUMsQ0FBQ1MsU0FBRixDQUFZL0UsQ0FBWixFQUFleUUsQ0FBZjtjQUNEO1lBQ0YsQ0FaRCxNQVlPO2NBQ0xILENBQUMsQ0FBQ1MsU0FBRixDQUFZL0UsQ0FBWixFQUFlLEtBQWY7WUFDRDtVQUNGLENBakJELE1BaUJPO1lBQ0xzRSxDQUFDLENBQUNTLFNBQUYsQ0FBWS9FLENBQVosRUFBZSxLQUFmO1VBQ0Q7UUFDRjs7UUFDRCxLQUFLZ0YsVUFBTCxDQUFnQmhGLENBQWhCO1FBQ0E7O01BQ0YsS0FBS3BCLGtCQUFrQixDQUFDd0MsbUJBQW5CLENBQXVDNkQsS0FBNUM7UUFDRSxLQUFLeEUsUUFBTCxDQUFjeUUsUUFBZCxDQUF1QmxGLENBQXZCO1FBQ0EsS0FBS00sT0FBTCxDQUFhNEUsUUFBYixDQUFzQmxGLENBQXRCO1FBQ0EsS0FBSytCLFVBQUwsQ0FBZ0JvRCxPQUFoQixDQUF3QixVQUFVakYsQ0FBVixFQUFhO1VBQ25DLFFBQVFBLENBQVIsSUFBYUEsQ0FBQyxDQUFDZ0UsUUFBRixDQUFXbEUsQ0FBWCxDQUFiO1FBQ0QsQ0FGRDtRQUdBLEtBQUtnQyxVQUFMLENBQWdCbUQsT0FBaEIsQ0FBd0IsVUFBVWpGLENBQVYsRUFBYTtVQUNuQyxRQUFRQSxDQUFSLElBQWFBLENBQUMsQ0FBQ2dFLFFBQUYsQ0FBV2xFLENBQVgsQ0FBYjtRQUNELENBRkQ7UUFHQSxLQUFLbUMsU0FBTCxDQUFlZ0QsT0FBZixDQUF1QixVQUFVakYsQ0FBVixFQUFhO1VBQ2xDLFFBQVFBLENBQVIsSUFBYUEsQ0FBQyxDQUFDZ0UsUUFBRixDQUFXbEUsQ0FBWCxDQUFiO1FBQ0QsQ0FGRDtRQUdBLEtBQUtrQyxXQUFMLENBQWlCaUQsT0FBakIsQ0FBeUIsVUFBVWpGLENBQVYsRUFBYTtVQUNwQyxRQUFRQSxDQUFSLElBQWFBLENBQUMsQ0FBQ2dFLFFBQUYsQ0FBV2xFLENBQVgsQ0FBYjtRQUNELENBRkQ7SUF2Q0o7O0lBMkNBLEtBQUtNLE9BQUwsQ0FBYThFLE1BQWIsQ0FBb0IsS0FBSzdELE9BQXpCLEVBQWtDdkIsQ0FBbEM7SUFDQSxJQUFJcUYsQ0FBQyxHQUFHLEtBQUs1RSxRQUFMLENBQWMwRCxZQUFkLEVBQVI7O0lBQ0EsS0FBS0MsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHaUIsQ0FBQyxDQUFDaEIsTUFBbEIsRUFBMEJELENBQUMsRUFBM0IsRUFBK0I7TUFDN0IsQ0FBQ0UsQ0FBQyxHQUFHZSxDQUFDLENBQUNqQixDQUFELENBQU4sRUFBV0YsUUFBWCxDQUFvQmxFLENBQXBCO0lBQ0Q7O0lBQ0QsSUFBSXNGLENBQUMsR0FBRyxLQUFLN0UsUUFBTCxDQUFjOEUsY0FBZCxFQUFSOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsQ0FBQyxDQUFDakIsTUFBdEIsRUFBOEJtQixDQUFDLEVBQS9CLEVBQW1DO01BQ2pDLENBQUNsQixDQUFDLEdBQUdnQixDQUFDLENBQUNFLENBQUQsQ0FBTixFQUFXdEIsUUFBWCxDQUFvQmxFLENBQXBCO0lBQ0Q7O0lBQ0QsSUFBSSxLQUFLNEIsS0FBTCxLQUFlLEtBQUt0QixPQUFMLENBQWFpQyxJQUFiLENBQWtCZ0IsV0FBbEIsQ0FBOEIsS0FBSzlCLE1BQW5DLEdBQTRDaEMsRUFBRSxDQUFDaUMsSUFBSCxDQUFRK0QsUUFBUixDQUFpQixLQUFLOUQsTUFBdEIsRUFBOEIsS0FBS0YsTUFBbkMsRUFBMkMsS0FBS2lFLFFBQUwsQ0FBYyxLQUFLQSxRQUFMLENBQWNyQixNQUFkLEdBQXVCLENBQXJDLEVBQXdDc0IsR0FBbkYsQ0FBNUMsRUFBcUksS0FBS2hFLE1BQUwsQ0FBWWlFLEdBQVosS0FBb0IsRUFBcEIsSUFBMEIsS0FBS0MsV0FBTCxFQUEvSixFQUFtTCxLQUFLSCxRQUFMLENBQWNyQixNQUFkLElBQXdCLEdBQTFOLENBQUosRUFBb087TUFDbE9uRSxDQUFDLEdBQUcsS0FBS08sUUFBTCxDQUFjOEUsY0FBZCxFQUFKOztNQUNBLEtBQUtDLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3RGLENBQUMsQ0FBQ21FLE1BQWxCLEVBQTBCbUIsQ0FBQyxFQUEzQixFQUErQjtRQUM3QixJQUFJbEIsQ0FBSjtRQUNBLENBQUNBLENBQUMsR0FBR3BFLENBQUMsQ0FBQ3NGLENBQUQsQ0FBTixFQUFXTSxPQUFYLENBQW1CLEtBQUtKLFFBQXhCLEVBQWtDLElBQWxDO01BQ0Q7O01BQ0QsS0FBS0EsUUFBTCxDQUFjSyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLEdBQXZCO0lBQ0Q7RUFDRixDQTdERDs7RUE4REE5RixLQUFLLENBQUNvQyxTQUFOLENBQWdCMkMsVUFBaEIsR0FBNkIsVUFBVWhGLENBQVYsRUFBYTtJQUN4QyxJQUFJRSxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtJLE9BQUwsQ0FBYWlDLElBQWIsQ0FBa0JnQixXQUFsQixDQUE4QixLQUFLOUIsTUFBbkM7O0lBQ0EsSUFBSSxLQUFLaEIsUUFBTCxDQUFjdUYsb0JBQWQsSUFBc0MsS0FBS3ZGLFFBQUwsQ0FBY3VGLG9CQUFkLENBQW1DQyxVQUFuQyxDQUE4QyxLQUFLeEUsTUFBbkQsRUFBMkR6QixDQUEzRCxDQUExQyxFQUF5RztNQUN2RyxLQUFLa0csU0FBTCxDQUFlM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXZELEVBQWtFLElBQWxFOztNQUNBLElBQUloQyxDQUFDLEdBQUcsV0FBVXBFLENBQVYsRUFBYTtRQUNuQkUsQ0FBQyxDQUFDZ0csU0FBRixDQUFZM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXBELEVBQStELEtBQS9EOztRQUNBLElBQUlwRyxDQUFKLEVBQU87VUFDTDFCLFlBQVksQ0FBQytILFNBQWIsQ0FBdUJDLFdBQXZCLEdBQXFDQyxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVuSSxxQkFBcUIsQ0FBQ29JLE9BQXRCLENBQThCQyxRQUEvRjtVQUNBcEksWUFBWSxDQUFDK0gsU0FBYixDQUF1QkMsV0FBdkIsR0FBcUNDLFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRW5JLHFCQUFxQixDQUFDb0ksT0FBdEIsQ0FBOEJFLGNBQS9GLEVBQStHaEksc0JBQXNCLENBQUNpSSxtQkFBdkIsQ0FBMkNOLFdBQTNDLEdBQXlETyxXQUF6RCxHQUF1RUMsV0FBdkUsRUFBL0c7VUFDQTVHLENBQUMsQ0FBQ08sUUFBRixDQUFXdUYsb0JBQVgsQ0FBZ0N6RCxJQUFoQyxDQUFxQ0MsTUFBckMsR0FBOEMsS0FBOUM7VUFDQXRDLENBQUMsQ0FBQ08sUUFBRixDQUFXc0csSUFBWCxJQUFtQjdHLENBQUMsQ0FBQ08sUUFBRixDQUFXdUYsb0JBQVgsQ0FBZ0NnQixPQUFuRDtVQUNBOUksUUFBUSxDQUFDK0ksS0FBVCxDQUFlWCxXQUFmLEdBQTZCWSxNQUE3QixDQUFvQzlJLFNBQVMsQ0FBQytJLElBQVYsQ0FBZUMsTUFBbkQsRUFBMkRoSixTQUFTLENBQUMrSSxJQUFWLENBQWVFLE1BQTFFLEVBQWtGbEosUUFBUSxDQUFDbUosS0FBVCxDQUFlQyxZQUFmLENBQTRCckgsQ0FBQyxDQUFDc0gsQ0FBRixDQUFJaEosdUJBQXVCLENBQUNpSixvQkFBeEIsQ0FBNkNDLFNBQWpELENBQTVCLEVBQXlGeEgsQ0FBQyxDQUFDTyxRQUFGLENBQVd1RixvQkFBWCxDQUFnQ2dCLE9BQXpILENBQWxGO1VBQ0FsSSxtQkFBbUIsV0FBbkIsQ0FBNEI2SSxRQUE1QixDQUFxQ0MsUUFBckM7VUFDQSxJQUFJeEQsQ0FBQyxHQUFHdEYsbUJBQW1CLFdBQW5CLENBQTRCNkksUUFBNUIsQ0FBcUNFLE1BQTdDO1VBQ0EsSUFBSXZLLENBQUMsR0FBR21DLEVBQUUsQ0FBQytCLEVBQUgsQ0FBTTRDLENBQUMsQ0FBQ3RCLFFBQUYsQ0FBV2dCLENBQVgsR0FBZU0sQ0FBQyxDQUFDMEQsUUFBRixDQUFXLENBQVgsRUFBY2hFLENBQW5DLEVBQXNDTSxDQUFDLENBQUN0QixRQUFGLENBQVdlLENBQVgsR0FBZU8sQ0FBQyxDQUFDMEQsUUFBRixDQUFXLENBQVgsRUFBY2pFLENBQW5FLENBQVI7VUFDQSxJQUFJWSxDQUFDLEdBQUd2RSxDQUFDLENBQUNPLFFBQUYsQ0FBV3VGLG9CQUFYLENBQWdDekQsSUFBaEMsQ0FBcUN3RixxQkFBckMsQ0FBMkR0SSxFQUFFLENBQUMrQixFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBM0QsQ0FBUjtVQUNBLElBQUk2RCxDQUFDLEdBQUduRixDQUFDLENBQUNHLE1BQUYsQ0FBUzJILHFCQUFULENBQStCdkQsQ0FBL0IsQ0FBUjtVQUNBLElBQUlhLENBQUMsR0FBR3hHLG1CQUFtQixXQUFuQixDQUE0QjZJLFFBQTVCLENBQXFDTSxLQUFyQyxDQUEyQzFGLElBQTNDLENBQWdEMkYsb0JBQWhELENBQXFFN0MsQ0FBckUsQ0FBUjs7VUFDQSxJQUFJRyxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxHQUFZO1lBQ2xCLElBQUl4RixDQUFDLEdBQUdQLEVBQUUsQ0FBQzBJLFdBQUgsQ0FBZS9ELENBQUMsQ0FBQzBELFFBQUYsQ0FBVyxDQUFYLENBQWYsQ0FBUjtZQUNBOUgsQ0FBQyxDQUFDd0MsTUFBRixHQUFXLElBQVg7WUFDQXhDLENBQUMsQ0FBQ29JLEtBQUYsR0FBVSxFQUFWO1lBQ0FwSSxDQUFDLENBQUM0QyxTQUFGLENBQVk5RCxtQkFBbUIsV0FBbkIsQ0FBNEI2SSxRQUE1QixDQUFxQ00sS0FBckMsQ0FBMkMxRixJQUF2RDtZQUNBLElBQUlyQyxDQUFDLEdBQUdULEVBQUUsQ0FBQytCLEVBQUgsRUFBUjtZQUNBL0IsRUFBRSxDQUFDaUMsSUFBSCxDQUFRMkcsTUFBUixDQUFlbkksQ0FBZixFQUFrQixFQUFsQjtZQUNBVCxFQUFFLENBQUM2SSxLQUFILENBQVN0SSxDQUFULEVBQVl1SSxHQUFaLENBQWdCO2NBQ2R6RixRQUFRLEVBQUVyRCxFQUFFLENBQUMrSSxFQUFILENBQU1sRCxDQUFDLENBQUN4QixDQUFSLEVBQVd3QixDQUFDLENBQUN6QixDQUFiLEVBQWdCLENBQWhCO1lBREksQ0FBaEIsRUFFRzRFLEVBRkgsQ0FFTSxFQUZOLEVBRVU7Y0FDUjNGLFFBQVEsRUFBRXJELEVBQUUsQ0FBQytJLEVBQUgsQ0FBTXRJLENBQUMsQ0FBQzRELENBQVIsRUFBVzVELENBQUMsQ0FBQzJELENBQWIsRUFBZ0IsQ0FBaEI7WUFERixDQUZWLEVBSUc2RSxFQUpILENBSU0sQ0FKTixFQUlTO2NBQ1A1RixRQUFRLEVBQUVyRCxFQUFFLENBQUMrSSxFQUFILENBQU1sTCxDQUFDLENBQUN3RyxDQUFSLEVBQVd4RyxDQUFDLENBQUN1RyxDQUFiLEVBQWdCLENBQWhCLENBREg7Y0FFUHVFLEtBQUssRUFBRTtZQUZBLENBSlQsRUFPR08sSUFQSCxDQU9RLFlBQVk7Y0FDbEIzSSxDQUFDLENBQUM0SSxPQUFGO1lBQ0QsQ0FURCxFQVNHQyxLQVRIO1VBVUQsQ0FqQkQ7O1VBa0JBLEtBQUssSUFBSXZFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7WUFDM0JrQixDQUFDO1VBQ0Y7O1VBQ0R0RixDQUFDLENBQUNPLFFBQUYsQ0FBV3VGLG9CQUFYLEdBQWtDLElBQWxDO1FBQ0QsQ0FsQ0QsTUFrQ087VUFDTDlGLENBQUMsQ0FBQ08sUUFBRixDQUFXdUYsb0JBQVgsQ0FBZ0M4QyxJQUFoQyxDQUFxQyxDQUFyQztRQUNEO01BQ0YsQ0F2Q0Q7O01Bd0NBLENBQUMsVUFBU0MsRUFBVCxFQUFhO1FBQ1osSUFBSUEsRUFBRSxDQUFDQyxhQUFILEtBQXFCLEVBQXpCLEVBQTZCO1VBQzNCOUksQ0FBQyxDQUFDZ0csU0FBRixDQUFZM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXBELEVBQStELEtBQS9EO1VBQ0FsSSxRQUFRLENBQUMrSSxLQUFULENBQWVYLFdBQWYsR0FBNkJZLE1BQTdCLENBQW9DM0ksbUJBQW1CLENBQUMwSyxjQUFwQixDQUFtQ0MsUUFBdkU7VUFDQTlFLENBQUMsQ0FBQyxLQUFELENBQUQ7UUFDRCxDQUpELE1BSU87VUFDTDJFLEVBQUUsQ0FBQ0ksYUFBSCxDQUFpQixFQUFqQjtVQUNBL0UsQ0FBQyxDQUFDLElBQUQsQ0FBRDtRQUNEO01BQ0YsQ0FURCxFQVNHekYsc0JBQXNCLENBQUNpSSxtQkFBdkIsQ0FBMkNOLFdBQTNDLEdBQXlETyxXQUF6RCxFQVRIO0lBVUQ7O0lBQ0QsSUFBSSxDQUFDLEtBQUtwRyxRQUFMLENBQWMySSxXQUFkLENBQTBCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RDLFVBQTlFLENBQUQsSUFBOEYsS0FBSzdJLFFBQUwsQ0FBYzhJLG9CQUFkLENBQW1DdEQsVUFBbkMsQ0FBOEMsS0FBS3hFLE1BQW5ELEVBQTJEekIsQ0FBM0QsQ0FBbEcsRUFBaUs7TUFDL0osS0FBS2tHLFNBQUwsQ0FBZTNILG1CQUFtQixDQUFDNEgsbUJBQXBCLENBQXdDQyxTQUF2RCxFQUFrRSxJQUFsRTs7TUFDQSxJQUFJOUksQ0FBQyxHQUFHLFNBQUpBLENBQUksQ0FBVTBDLENBQVYsRUFBYTtRQUNuQkUsQ0FBQyxDQUFDZ0csU0FBRixDQUFZM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXBELEVBQStELEtBQS9EOztRQUNBLElBQUlwRyxDQUFKLEVBQU87VUFDTDFCLFlBQVksQ0FBQytILFNBQWIsQ0FBdUJDLFdBQXZCLEdBQXFDQyxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVuSSxxQkFBcUIsQ0FBQ29JLE9BQXRCLENBQThCK0MsVUFBL0Y7VUFDQWxMLFlBQVksQ0FBQytILFNBQWIsQ0FBdUJDLFdBQXZCLEdBQXFDQyxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVuSSxxQkFBcUIsQ0FBQ29JLE9BQXRCLENBQThCZ0QsZ0JBQS9GLEVBQWlIOUssc0JBQXNCLENBQUNpSSxtQkFBdkIsQ0FBMkNOLFdBQTNDLEdBQXlETyxXQUF6RCxHQUF1RUMsV0FBdkUsRUFBakg7VUFDQTVHLENBQUMsQ0FBQ08sUUFBRixDQUFXMkksV0FBWCxDQUF1QmhLLHlCQUF5QixDQUFDaUsseUJBQTFCLENBQW9EQyxVQUEzRSxJQUF5RixDQUF6RjtVQUNBcEosQ0FBQyxDQUFDTyxRQUFGLENBQVc4SSxvQkFBWCxDQUFnQ2hILElBQWhDLENBQXFDQyxNQUFyQyxHQUE4QyxLQUE5QztVQUNBdEMsQ0FBQyxDQUFDTyxRQUFGLENBQVcySSxXQUFYLENBQXVCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RLLE1BQTNFLElBQXFGLEVBQXJGO1VBQ0F4SixDQUFDLENBQUNPLFFBQUYsQ0FBVzJJLFdBQVgsQ0FBdUJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRE0sV0FBM0UsSUFBMEYsRUFBMUY7VUFDQXpMLFFBQVEsQ0FBQytJLEtBQVQsQ0FBZVgsV0FBZixHQUE2QlksTUFBN0IsQ0FBb0M5SSxTQUFTLENBQUMrSSxJQUFWLENBQWVDLE1BQW5ELEVBQTJEaEosU0FBUyxDQUFDK0ksSUFBVixDQUFlRSxNQUExRSxFQUFrRm5ILENBQUMsQ0FBQ3NILENBQUYsQ0FBSWhKLHVCQUF1QixDQUFDaUosb0JBQXhCLENBQTZDbUMsU0FBakQsQ0FBbEY7VUFDQTFKLENBQUMsQ0FBQ0ksT0FBRixDQUFVdUosVUFBVixDQUFxQkMsTUFBckIsQ0FBNEIsQ0FBNUI7VUFDQTVKLENBQUMsQ0FBQzZKLFFBQUY7UUFDRCxDQVZELE1BVU87VUFDTDdKLENBQUMsQ0FBQ08sUUFBRixDQUFXOEksb0JBQVgsQ0FBZ0NULElBQWhDLENBQXFDLENBQXJDO1FBQ0Q7TUFDRixDQWZEOztNQWdCQSxDQUFDLFVBQVNDLEVBQVQsRUFBYTtRQUNaLElBQUlBLEVBQUUsQ0FBQ0MsYUFBSCxLQUFxQixFQUF6QixFQUE2QjtVQUMzQjlJLENBQUMsQ0FBQ2dHLFNBQUYsQ0FBWTNILG1CQUFtQixDQUFDNEgsbUJBQXBCLENBQXdDQyxTQUFwRCxFQUErRCxLQUEvRDtVQUNBbEksUUFBUSxDQUFDK0ksS0FBVCxDQUFlWCxXQUFmLEdBQTZCWSxNQUE3QixDQUFvQzNJLG1CQUFtQixDQUFDMEssY0FBcEIsQ0FBbUNDLFFBQXZFO1VBQ0E1TCxDQUFDLENBQUMsS0FBRCxDQUFEO1FBQ0QsQ0FKRCxNQUlPO1VBQ0x5TCxFQUFFLENBQUNJLGFBQUgsQ0FBaUIsRUFBakI7VUFDQTdMLENBQUMsQ0FBQyxJQUFELENBQUQ7UUFDRDtNQUNGLENBVEQsRUFTR3FCLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RE8sV0FBekQsRUFUSDtJQVVEOztJQUNELElBQUksS0FBSyxLQUFLcEcsUUFBTCxDQUFjMkksV0FBZCxDQUEwQmhLLHlCQUF5QixDQUFDaUsseUJBQTFCLENBQW9EQyxVQUE5RSxDQUFMLElBQWtHMUssa0JBQWtCLENBQUNvTCxnQkFBbkIsQ0FBb0NDLG1CQUFwQyxFQUFsRyxJQUErSixLQUFLeEosUUFBTCxDQUFjOEksb0JBQWQsQ0FBbUN0RCxVQUFuQyxDQUE4QyxLQUFLeEUsTUFBbkQsRUFBMkR6QixDQUEzRCxDQUFuSyxFQUFrTztNQUNoTyxLQUFLa0csU0FBTCxDQUFlM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXZELEVBQWtFLElBQWxFOztNQUNBLElBQUkzQixDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFVekUsQ0FBVixFQUFhO1FBQ25CRSxDQUFDLENBQUNnRyxTQUFGLENBQVkzSCxtQkFBbUIsQ0FBQzRILG1CQUFwQixDQUF3Q0MsU0FBcEQsRUFBK0QsS0FBL0Q7O1FBQ0EsSUFBSXBHLENBQUosRUFBTztVQUNMMUIsWUFBWSxDQUFDK0gsU0FBYixDQUF1QkMsV0FBdkIsR0FBcUNDLFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRW5JLHFCQUFxQixDQUFDb0ksT0FBdEIsQ0FBOEJ5RCxNQUEvRjtVQUNBNUwsWUFBWSxDQUFDK0gsU0FBYixDQUF1QkMsV0FBdkIsR0FBcUNDLFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRW5JLHFCQUFxQixDQUFDb0ksT0FBdEIsQ0FBOEIwRCxZQUEvRixFQUE2R3hMLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RE8sV0FBekQsR0FBdUVDLFdBQXZFLEVBQTdHO1VBQ0E1RyxDQUFDLENBQUNPLFFBQUYsQ0FBVzJJLFdBQVgsQ0FBdUJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvREMsVUFBM0UsSUFBeUYsQ0FBekY7VUFDQXBKLENBQUMsQ0FBQ08sUUFBRixDQUFXOEksb0JBQVgsQ0FBZ0NoSCxJQUFoQyxDQUFxQ0MsTUFBckMsR0FBOEMsS0FBOUM7VUFDQXRDLENBQUMsQ0FBQ08sUUFBRixDQUFXMkksV0FBWCxDQUF1QmhLLHlCQUF5QixDQUFDaUsseUJBQTFCLENBQW9ESyxNQUEzRSxJQUFxRixDQUFyRjtVQUNBeEosQ0FBQyxDQUFDTyxRQUFGLENBQVcySSxXQUFYLENBQXVCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RNLFdBQTNFLElBQTBGLENBQTFGO1VBQ0F6TCxRQUFRLENBQUMrSSxLQUFULENBQWVYLFdBQWYsR0FBNkJZLE1BQTdCLENBQW9DOUksU0FBUyxDQUFDK0ksSUFBVixDQUFlQyxNQUFuRCxFQUEyRGhKLFNBQVMsQ0FBQytJLElBQVYsQ0FBZUUsTUFBMUUsRUFBa0ZuSCxDQUFDLENBQUNzSCxDQUFGLENBQUloSix1QkFBdUIsQ0FBQ2lKLG9CQUF4QixDQUE2Q21DLFNBQWpELENBQWxGO1VBQ0ExSixDQUFDLENBQUNJLE9BQUYsQ0FBVXVKLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCLENBQTVCO1VBQ0E1SixDQUFDLENBQUM2SixRQUFGO1FBQ0QsQ0FWRCxNQVVPO1VBQ0w3SixDQUFDLENBQUNPLFFBQUYsQ0FBVzhJLG9CQUFYLENBQWdDVCxJQUFoQyxDQUFxQyxDQUFyQztRQUNEO01BQ0YsQ0FmRDs7TUFnQkEsQ0FBQyxVQUFTQyxFQUFULEVBQWE7UUFDWixJQUFJQSxFQUFFLENBQUNDLGFBQUgsS0FBcUIsRUFBekIsRUFBNkI7VUFDM0I5SSxDQUFDLENBQUNnRyxTQUFGLENBQVkzSCxtQkFBbUIsQ0FBQzRILG1CQUFwQixDQUF3Q0MsU0FBcEQsRUFBK0QsS0FBL0Q7VUFDQWxJLFFBQVEsQ0FBQytJLEtBQVQsQ0FBZVgsV0FBZixHQUE2QlksTUFBN0IsQ0FBb0MzSSxtQkFBbUIsQ0FBQzBLLGNBQXBCLENBQW1DQyxRQUF2RTtVQUNBekUsQ0FBQyxDQUFDLEtBQUQsQ0FBRDtRQUNELENBSkQsTUFJTztVQUNMc0UsRUFBRSxDQUFDSSxhQUFILENBQWlCLEVBQWpCO1VBQ0ExRSxDQUFDLENBQUMsSUFBRCxDQUFEO1FBQ0Q7TUFDRixDQVRELEVBU0c5RixzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeURPLFdBQXpELEVBVEg7SUFVRDs7SUFDRCxJQUFJLENBQUMsS0FBS3BHLFFBQUwsQ0FBYzJJLFdBQWQsQ0FBMEJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRGUsU0FBOUUsQ0FBRCxJQUE2RixLQUFLM0osUUFBTCxDQUFjNEosbUJBQWQsQ0FBa0NwRSxVQUFsQyxDQUE2QyxLQUFLeEUsTUFBbEQsRUFBMER6QixDQUExRCxDQUFqRyxFQUErSjtNQUM3SixLQUFLa0csU0FBTCxDQUFlM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXZELEVBQWtFLElBQWxFOztNQUNBLElBQUlmLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQVVyRixDQUFWLEVBQWE7UUFDbkJFLENBQUMsQ0FBQ2dHLFNBQUYsQ0FBWTNILG1CQUFtQixDQUFDNEgsbUJBQXBCLENBQXdDQyxTQUFwRCxFQUErRCxLQUEvRDs7UUFDQSxJQUFJcEcsQ0FBSixFQUFPO1VBQ0wxQixZQUFZLENBQUMrSCxTQUFiLENBQXVCQyxXQUF2QixHQUFxQ0MsWUFBckMsR0FBb0RDLFlBQXBELENBQWlFbkkscUJBQXFCLENBQUNvSSxPQUF0QixDQUE4QjZELFNBQS9GO1VBQ0FoTSxZQUFZLENBQUMrSCxTQUFiLENBQXVCQyxXQUF2QixHQUFxQ0MsWUFBckMsR0FBb0RDLFlBQXBELENBQWlFbkkscUJBQXFCLENBQUNvSSxPQUF0QixDQUE4QjhELGVBQS9GLEVBQWdINUwsc0JBQXNCLENBQUNpSSxtQkFBdkIsQ0FBMkNOLFdBQTNDLEdBQXlETyxXQUF6RCxHQUF1RUMsV0FBdkUsRUFBaEg7VUFDQTVHLENBQUMsQ0FBQ08sUUFBRixDQUFXMkksV0FBWCxDQUF1QmhLLHlCQUF5QixDQUFDaUsseUJBQTFCLENBQW9EZSxTQUEzRSxJQUF3RixDQUF4RjtVQUNBbEssQ0FBQyxDQUFDTyxRQUFGLENBQVc0SixtQkFBWCxDQUErQjlILElBQS9CLENBQW9DQyxNQUFwQyxHQUE2QyxLQUE3QztVQUNBdEMsQ0FBQyxDQUFDTyxRQUFGLENBQVcySSxXQUFYLENBQXVCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RtQixLQUEzRSxJQUFvRixFQUFwRjtVQUNBdE0sUUFBUSxDQUFDK0ksS0FBVCxDQUFlWCxXQUFmLEdBQTZCWSxNQUE3QixDQUFvQzlJLFNBQVMsQ0FBQytJLElBQVYsQ0FBZUMsTUFBbkQsRUFBMkRoSixTQUFTLENBQUMrSSxJQUFWLENBQWVFLE1BQTFFLEVBQWtGbkgsQ0FBQyxDQUFDc0gsQ0FBRixDQUFJaEosdUJBQXVCLENBQUNpSixvQkFBeEIsQ0FBNkNnRCxTQUFqRCxDQUFsRjtVQUNBdkssQ0FBQyxDQUFDSSxPQUFGLENBQVV1SixVQUFWLENBQXFCQyxNQUFyQixDQUE0QixDQUE1QjtVQUNBNUosQ0FBQyxDQUFDNkosUUFBRjtRQUNELENBVEQsTUFTTztVQUNMN0osQ0FBQyxDQUFDTyxRQUFGLENBQVc0SixtQkFBWCxDQUErQnZCLElBQS9CLENBQW9DLENBQXBDO1FBQ0Q7TUFDRixDQWREOztNQWVBLENBQUMsVUFBU0MsRUFBVCxFQUFhO1FBQ1osSUFBSUEsRUFBRSxDQUFDQyxhQUFILEtBQXFCLEVBQXpCLEVBQTZCO1VBQzNCOUksQ0FBQyxDQUFDZ0csU0FBRixDQUFZM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXBELEVBQStELEtBQS9EO1VBQ0FsSSxRQUFRLENBQUMrSSxLQUFULENBQWVYLFdBQWYsR0FBNkJZLE1BQTdCLENBQW9DM0ksbUJBQW1CLENBQUMwSyxjQUFwQixDQUFtQ0MsUUFBdkU7VUFDQTdELENBQUMsQ0FBQyxLQUFELENBQUQ7UUFDRCxDQUpELE1BSU87VUFDTDBELEVBQUUsQ0FBQ0ksYUFBSCxDQUFpQixFQUFqQjtVQUNBOUQsQ0FBQyxDQUFDLElBQUQsQ0FBRDtRQUNEO01BQ0YsQ0FURCxFQVNHMUcsc0JBQXNCLENBQUNpSSxtQkFBdkIsQ0FBMkNOLFdBQTNDLEdBQXlETyxXQUF6RCxFQVRIO0lBVUQ7O0lBQ0QsSUFBSSxLQUFLLEtBQUtwRyxRQUFMLENBQWMySSxXQUFkLENBQTBCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RlLFNBQTlFLENBQUwsSUFBaUd4TCxrQkFBa0IsQ0FBQ29MLGdCQUFuQixDQUFvQ0MsbUJBQXBDLEVBQWpHLElBQThKLEtBQUt4SixRQUFMLENBQWM0SixtQkFBZCxDQUFrQ3BFLFVBQWxDLENBQTZDLEtBQUt4RSxNQUFsRCxFQUEwRHpCLENBQTFELENBQWxLLEVBQWdPO01BQzlOLEtBQUtrRyxTQUFMLENBQWUzSCxtQkFBbUIsQ0FBQzRILG1CQUFwQixDQUF3Q0MsU0FBdkQsRUFBa0UsSUFBbEU7O01BQ0EsSUFBSWQsQ0FBQyxHQUFHLFNBQUpBLENBQUksQ0FBVXRGLENBQVYsRUFBYTtRQUNuQkUsQ0FBQyxDQUFDZ0csU0FBRixDQUFZM0gsbUJBQW1CLENBQUM0SCxtQkFBcEIsQ0FBd0NDLFNBQXBELEVBQStELEtBQS9EOztRQUNBLElBQUlwRyxDQUFKLEVBQU87VUFDTDFCLFlBQVksQ0FBQytILFNBQWIsQ0FBdUJDLFdBQXZCLEdBQXFDQyxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVuSSxxQkFBcUIsQ0FBQ29JLE9BQXRCLENBQThCaUUsTUFBL0Y7VUFDQXBNLFlBQVksQ0FBQytILFNBQWIsQ0FBdUJDLFdBQXZCLEdBQXFDQyxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVuSSxxQkFBcUIsQ0FBQ29JLE9BQXRCLENBQThCa0UsWUFBL0YsRUFBNkdoTSxzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeURPLFdBQXpELEdBQXVFQyxXQUF2RSxFQUE3RztVQUNBNUcsQ0FBQyxDQUFDTyxRQUFGLENBQVcySSxXQUFYLENBQXVCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RlLFNBQTNFLElBQXdGLENBQXhGO1VBQ0FsSyxDQUFDLENBQUNPLFFBQUYsQ0FBVzRKLG1CQUFYLENBQStCOUgsSUFBL0IsQ0FBb0NDLE1BQXBDLEdBQTZDLEtBQTdDO1VBQ0F0QyxDQUFDLENBQUNPLFFBQUYsQ0FBVzJJLFdBQVgsQ0FBdUJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRG1CLEtBQTNFLElBQW9GLENBQXBGO1VBQ0F0TSxRQUFRLENBQUMrSSxLQUFULENBQWVYLFdBQWYsR0FBNkJZLE1BQTdCLENBQW9DOUksU0FBUyxDQUFDK0ksSUFBVixDQUFlQyxNQUFuRCxFQUEyRGhKLFNBQVMsQ0FBQytJLElBQVYsQ0FBZUUsTUFBMUUsRUFBa0ZuSCxDQUFDLENBQUNzSCxDQUFGLENBQUloSix1QkFBdUIsQ0FBQ2lKLG9CQUF4QixDQUE2Q2dELFNBQWpELENBQWxGO1VBQ0F2SyxDQUFDLENBQUNJLE9BQUYsQ0FBVXVKLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCLENBQTVCO1VBQ0E1SixDQUFDLENBQUM2SixRQUFGO1FBQ0QsQ0FURCxNQVNPO1VBQ0w3SixDQUFDLENBQUNPLFFBQUYsQ0FBVzRKLG1CQUFYLENBQStCdkIsSUFBL0IsQ0FBb0MsQ0FBcEM7UUFDRDtNQUNGLENBZEQ7O01BZUEsQ0FBQyxVQUFTQyxFQUFULEVBQWE7UUFDWixJQUFJQSxFQUFFLENBQUNDLGFBQUgsS0FBcUIsRUFBekIsRUFBNkI7VUFDM0I5SSxDQUFDLENBQUNnRyxTQUFGLENBQVkzSCxtQkFBbUIsQ0FBQzRILG1CQUFwQixDQUF3Q0MsU0FBcEQsRUFBK0QsS0FBL0Q7VUFDQWxJLFFBQVEsQ0FBQytJLEtBQVQsQ0FBZVgsV0FBZixHQUE2QlksTUFBN0IsQ0FBb0MzSSxtQkFBbUIsQ0FBQzBLLGNBQXBCLENBQW1DQyxRQUF2RTtVQUNBNUQsQ0FBQyxDQUFDLEtBQUQsQ0FBRDtRQUNELENBSkQsTUFJTztVQUNMeUQsRUFBRSxDQUFDSSxhQUFILENBQWlCLEVBQWpCO1VBQ0E3RCxDQUFDLENBQUMsSUFBRCxDQUFEO1FBQ0Q7TUFDRixDQVRELEVBU0czRyxzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeURPLFdBQXpELEVBVEg7SUFVRDtFQUNGLENBMUtEOztFQTJLQTVHLEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0J1SSxTQUFoQixHQUE0QixZQUFZO0lBQ3RDLElBQUksS0FBS2hKLEtBQVQsRUFBZ0I7TUFDZCxJQUFJNUIsQ0FBQyxHQUFHLEtBQUtTLFFBQUwsQ0FBYzhFLGNBQWQsRUFBUjs7TUFDQSxLQUFLLElBQUlyRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixDQUFDLENBQUNxRSxNQUF0QixFQUE4Qm5FLENBQUMsRUFBL0IsRUFBbUM7UUFDakNGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUs0RixPQUFMLENBQWEsS0FBS0osUUFBbEIsRUFBNEIsS0FBNUI7TUFDRDtJQUNGOztJQUNELEtBQUs5RCxLQUFMLEdBQWEsQ0FBQyxLQUFLQSxLQUFuQjs7SUFDQSxJQUFJLEtBQUtBLEtBQVQsRUFBZ0I7TUFDZCxLQUFLcEIsU0FBTCxDQUFlcUssSUFBZixHQUFzQixDQUF0QjtNQUNBLEtBQUtoSixTQUFMLEdBQWlCLENBQWpCO01BQ0EsS0FBSzZELFFBQUwsR0FBZ0IsRUFBaEI7TUFDQSxLQUFLRyxXQUFMO0lBQ0Q7O0lBQ0QsUUFBUXRILG1CQUFtQixDQUFDdU0sbUJBQXBCLENBQXdDQyxVQUFoRDtNQUNFLEtBQUssQ0FBTDtRQUNFLElBQUksS0FBS3ZLLFNBQUwsQ0FBZXFLLElBQW5CLEVBQXlCO1VBQ3ZCLEtBQUtySyxTQUFMLENBQWVnQyxNQUFmLEdBQXdCLElBQXhCO1VBQ0EsS0FBS2hDLFNBQUwsQ0FBZXFDLFdBQWYsQ0FBMkIsS0FBSzZDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQyxHQUE1QztVQUNBLEtBQUtuRixTQUFMLENBQWVnRCxNQUFmLEdBQXdCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2pFLEVBQUUsQ0FBQ2tFLE9BQUgsQ0FBV0MsTUFBdEIsSUFBZ0NILElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtnQyxRQUFMLENBQWMsQ0FBZCxFQUFpQkMsR0FBakIsQ0FBcUI5QixDQUFoQyxDQUF4RDtVQUNBLElBQUlPLENBQUMsR0FBRyxLQUFLNUQsU0FBTCxDQUFld0ssWUFBZixDQUE0QkMsRUFBRSxDQUFDQyxRQUEvQixDQUFSO1VBQ0E5RyxDQUFDLENBQUMrRyxZQUFGLENBQWUsQ0FBZixFQUFrQixPQUFsQixFQUEyQixLQUEzQjtVQUNBL0csQ0FBQyxDQUFDZ0gsWUFBRixDQUFlLENBQWYsRUFBa0IsTUFBbEIsRUFBMEIsSUFBMUI7UUFDRDs7UUFDRDs7TUFDRixLQUFLLENBQUw7UUFDRSxLQUFLOUssT0FBTCxDQUFhNkMsS0FBYixDQUFtQlgsTUFBbkIsR0FBNEIsS0FBS1osS0FBakM7UUFDQSxLQUFLcEIsU0FBTCxDQUFlZ0MsTUFBZixHQUF3QixLQUF4QjtJQWJKO0VBZUQsQ0E3QkQ7O0VBOEJBdkMsS0FBSyxDQUFDb0MsU0FBTixDQUFnQndELFdBQWhCLEdBQThCLFlBQVk7SUFDeEMsS0FBS3ZGLE9BQUwsQ0FBYWlDLElBQWIsQ0FBa0JnQixXQUFsQixDQUE4QixLQUFLOUIsTUFBbkM7SUFDQSxLQUFLaUUsUUFBTCxDQUFjMkYsSUFBZCxDQUFtQjtNQUNqQkMsS0FBSyxFQUFFLEtBQUt6SixTQUFMLEVBRFU7TUFFakI4RCxHQUFHLEVBQUUsS0FBS2xFLE1BQUwsQ0FBWThKLEtBQVo7SUFGWSxDQUFuQjtJQUlBLElBQUl2TCxDQUFDLEdBQUcsS0FBS1MsUUFBTCxDQUFjOEUsY0FBZCxFQUFSOztJQUNBLEtBQUssSUFBSXJGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLENBQUMsQ0FBQ3FFLE1BQXRCLEVBQThCbkUsQ0FBQyxFQUEvQixFQUFtQztNQUNqQyxJQUFJa0UsQ0FBQyxHQUFHcEUsQ0FBQyxDQUFDRSxDQUFELENBQVQ7TUFDQWtFLENBQUMsQ0FBQzdCLElBQUYsQ0FBT2dCLFdBQVAsQ0FBbUIsS0FBSzVCLE1BQXhCO01BQ0FsQyxFQUFFLENBQUNpQyxJQUFILENBQVErRCxRQUFSLENBQWlCLEtBQUs5RCxNQUF0QixFQUE4QixLQUFLQSxNQUFuQyxFQUEyQyxLQUFLRixNQUFoRDs7TUFDQSxRQUFRbEQsbUJBQW1CLENBQUN1TSxtQkFBcEIsQ0FBd0NDLFVBQWhEO1FBQ0UsS0FBSyxDQUFMO1VBQ0UzRyxDQUFDLENBQUNvSCxRQUFGLENBQVcsS0FBSzlGLFFBQUwsQ0FBYyxLQUFLQSxRQUFMLENBQWNyQixNQUFkLEdBQXVCLENBQXJDLENBQVgsS0FBdUQsS0FBSzdELFNBQUwsQ0FBZXFLLElBQWYsRUFBdkQ7VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRSxLQUFLbEosTUFBTCxDQUFZaUUsR0FBWixLQUFvQnJILG1CQUFtQixDQUFDdU0sbUJBQXBCLENBQXdDVyxXQUE1RCxJQUEyRXJILENBQUMsQ0FBQ29ILFFBQUYsQ0FBVyxLQUFLOUYsUUFBTCxDQUFjLEtBQUtBLFFBQUwsQ0FBY3JCLE1BQWQsR0FBdUIsQ0FBckMsQ0FBWCxDQUEzRTtNQUxKO0lBT0Q7RUFDRixDQW5CRDs7RUFvQkFwRSxLQUFLLENBQUNvQyxTQUFOLENBQWdCcUosV0FBaEIsR0FBOEIsWUFBWTtJQUN4QyxLQUFLcEwsT0FBTCxDQUFhcUwsUUFBYixDQUFzQixJQUF0QjtJQUNBLElBQUkzTCxDQUFDLEdBQUcsS0FBS1MsUUFBTCxDQUFjbUwsWUFBZCxFQUFSOztJQUNBLEtBQUssSUFBSTFMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLENBQUMsQ0FBQ3FFLE1BQXRCLEVBQThCbkUsQ0FBQyxFQUEvQixFQUFtQztNQUNqQ0YsQ0FBQyxDQUFDRSxDQUFELENBQUQsQ0FBS3lMLFFBQUwsQ0FBYyxJQUFkO0lBQ0Q7O0lBQ0QsSUFBSXZILENBQUMsR0FBRyxLQUFLM0QsUUFBTCxDQUFjOEUsY0FBZCxFQUFSOztJQUNBLEtBQUtyRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdrRSxDQUFDLENBQUNDLE1BQWxCLEVBQTBCbkUsQ0FBQyxFQUEzQixFQUErQjtNQUM3QmtFLENBQUMsQ0FBQ2xFLENBQUQsQ0FBRCxDQUFLeUwsUUFBTCxDQUFjLElBQWQ7SUFDRDtFQUNGLENBVkQ7O0VBV0ExTCxLQUFLLENBQUNvQyxTQUFOLENBQWdCd0osWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxLQUFLdkwsT0FBTCxDQUFhcUwsUUFBYixDQUFzQixLQUF0QjtJQUNBLElBQUkzTCxDQUFDLEdBQUcsS0FBS1MsUUFBTCxDQUFjbUwsWUFBZCxFQUFSOztJQUNBLEtBQUssSUFBSTFMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLENBQUMsQ0FBQ3FFLE1BQXRCLEVBQThCbkUsQ0FBQyxFQUEvQixFQUFtQztNQUNqQ0YsQ0FBQyxDQUFDRSxDQUFELENBQUQsQ0FBS3lMLFFBQUwsQ0FBYyxLQUFkO0lBQ0Q7O0lBQ0QsSUFBSXZILENBQUMsR0FBRyxLQUFLM0QsUUFBTCxDQUFjOEUsY0FBZCxFQUFSOztJQUNBLEtBQUtyRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdrRSxDQUFDLENBQUNDLE1BQWxCLEVBQTBCbkUsQ0FBQyxFQUEzQixFQUErQjtNQUM3QmtFLENBQUMsQ0FBQ2xFLENBQUQsQ0FBRCxDQUFLeUwsUUFBTCxDQUFjLEtBQWQ7SUFDRDtFQUNGLENBVkQ7O0VBV0ExTCxLQUFLLENBQUNvQyxTQUFOLENBQWdCeUosWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxLQUFLdkssT0FBTCxHQUFlOUIsRUFBRSxDQUFDK0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWY7SUFDQSxJQUFJeEIsQ0FBQyxHQUFHLEtBQUtTLFFBQUwsQ0FBY3FMLFlBQWQsRUFBUjtJQUNBLElBQUk1TCxDQUFDLEdBQUdwQixtQkFBbUIsV0FBbkIsQ0FBNEI2SSxRQUE1QixDQUFxQ0UsTUFBN0M7SUFDQSxJQUFJekQsQ0FBQyxHQUFHM0UsRUFBRSxDQUFDK0IsRUFBSCxDQUFNdEIsQ0FBQyxDQUFDNEMsUUFBRixDQUFXZ0IsQ0FBWCxHQUFlNUQsQ0FBQyxDQUFDNEgsUUFBRixDQUFXLENBQVgsRUFBY2hFLENBQW5DLEVBQXNDNUQsQ0FBQyxDQUFDNEMsUUFBRixDQUFXZSxDQUFYLEdBQWUzRCxDQUFDLENBQUM0SCxRQUFGLENBQVcsQ0FBWCxFQUFjakUsQ0FBbkUsQ0FBUjtJQUNBLElBQUl2RyxDQUFDLEdBQUcwQyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUt1QyxJQUFMLENBQVV3RixxQkFBVixDQUFnQy9ILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSytMLElBQUwsQ0FBVXhJLFdBQVYsRUFBaEMsQ0FBUjtJQUNBLElBQUlrQixDQUFDLEdBQUcsS0FBS3BFLE1BQUwsQ0FBWTJILHFCQUFaLENBQWtDMUssQ0FBbEMsQ0FBUjtJQUNBLElBQUkrSCxDQUFDLEdBQUd2RyxtQkFBbUIsV0FBbkIsQ0FBNEI2SSxRQUE1QixDQUFxQ00sS0FBckMsQ0FBMkMxRixJQUEzQyxDQUFnRDJGLG9CQUFoRCxDQUFxRXpELENBQXJFLENBQVI7O0lBQ0EsSUFBSWEsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBWTtNQUNsQixJQUFJdEYsQ0FBQyxHQUFHUCxFQUFFLENBQUMwSSxXQUFILENBQWVqSSxDQUFDLENBQUM0SCxRQUFGLENBQVcsQ0FBWCxDQUFmLENBQVI7TUFDQTlILENBQUMsQ0FBQ3dDLE1BQUYsR0FBVyxJQUFYO01BQ0F4QyxDQUFDLENBQUNvSSxLQUFGLEdBQVUsRUFBVjtNQUNBcEksQ0FBQyxDQUFDNEMsU0FBRixDQUFZOUQsbUJBQW1CLFdBQW5CLENBQTRCNkksUUFBNUIsQ0FBcUNNLEtBQXJDLENBQTJDMUYsSUFBdkQ7TUFDQSxJQUFJakYsQ0FBQyxHQUFHbUMsRUFBRSxDQUFDK0IsRUFBSCxFQUFSO01BQ0EvQixFQUFFLENBQUNpQyxJQUFILENBQVEyRyxNQUFSLENBQWUvSyxDQUFmLEVBQWtCLEVBQWxCO01BQ0FtQyxFQUFFLENBQUM2SSxLQUFILENBQVN0SSxDQUFULEVBQVl1SSxHQUFaLENBQWdCO1FBQ2R6RixRQUFRLEVBQUVyRCxFQUFFLENBQUMrSSxFQUFILENBQU1uRCxDQUFDLENBQUN2QixDQUFSLEVBQVd1QixDQUFDLENBQUN4QixDQUFiLEVBQWdCLENBQWhCO01BREksQ0FBaEIsRUFFRzRFLEVBRkgsQ0FFTSxFQUZOLEVBRVU7UUFDUjNGLFFBQVEsRUFBRXJELEVBQUUsQ0FBQytJLEVBQUgsQ0FBTWxMLENBQUMsQ0FBQ3dHLENBQVIsRUFBV3hHLENBQUMsQ0FBQ3VHLENBQWIsRUFBZ0IsQ0FBaEI7TUFERixDQUZWLEVBSUc2RSxFQUpILENBSU0sQ0FKTixFQUlTO1FBQ1A1RixRQUFRLEVBQUVyRCxFQUFFLENBQUMrSSxFQUFILENBQU1wRSxDQUFDLENBQUNOLENBQVIsRUFBV00sQ0FBQyxDQUFDUCxDQUFiLEVBQWdCLENBQWhCLENBREg7UUFFUHVFLEtBQUssRUFBRTtNQUZBLENBSlQsRUFPR08sSUFQSCxDQU9RLFlBQVk7UUFDbEIzSSxDQUFDLENBQUM0SSxPQUFGO01BQ0QsQ0FURCxFQVNHQyxLQVRIO0lBVUQsQ0FqQkQ7O0lBa0JBLEtBQUssSUFBSXJELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7TUFDM0JGLENBQUM7SUFDRjs7SUFDRCxJQUFJaEIsQ0FBQyxHQUFHLFdBQVVoSCxDQUFWLEVBQWE7TUFDbkIsSUFBSW1ILENBQUMsR0FBR3pFLENBQUMsQ0FBQzFDLENBQUQsQ0FBVDtNQUNBLElBQUkrSCxDQUFDLEdBQUdaLENBQUMsQ0FBQ2xDLElBQUYsQ0FBT3dGLHFCQUFQLENBQTZCdEQsQ0FBQyxDQUFDc0gsSUFBRixDQUFPeEksV0FBUCxFQUE3QixDQUFSO01BQ0EsSUFBSStCLENBQUMsR0FBRzBHLENBQUMsQ0FBQzNMLE1BQUYsQ0FBUzJILHFCQUFULENBQStCM0MsQ0FBL0IsQ0FBUjtNQUNBLElBQUlHLENBQUMsR0FBRzFHLG1CQUFtQixXQUFuQixDQUE0QjZJLFFBQTVCLENBQXFDTSxLQUFyQyxDQUEyQzFGLElBQTNDLENBQWdEMkYsb0JBQWhELENBQXFFNUMsQ0FBckUsQ0FBUjtNQUNBLElBQUloQixDQUFDLEdBQUc3RSxFQUFFLENBQUMwSSxXQUFILENBQWVqSSxDQUFDLENBQUM0SCxRQUFGLENBQVcsQ0FBWCxDQUFmLENBQVI7TUFDQXhELENBQUMsQ0FBQzlCLE1BQUYsR0FBVyxJQUFYO01BQ0E4QixDQUFDLENBQUM4RCxLQUFGLEdBQVUsRUFBVjtNQUNBOUQsQ0FBQyxDQUFDMUIsU0FBRixDQUFZOUQsbUJBQW1CLFdBQW5CLENBQTRCNkksUUFBNUIsQ0FBcUNNLEtBQXJDLENBQTJDMUYsSUFBdkQ7TUFDQTlDLEVBQUUsQ0FBQzZJLEtBQUgsQ0FBU2hFLENBQVQsRUFBWWlFLEdBQVosQ0FBZ0I7UUFDZHpGLFFBQVEsRUFBRXJELEVBQUUsQ0FBQytJLEVBQUgsQ0FBTWhELENBQUMsQ0FBQzFCLENBQVIsRUFBVzBCLENBQUMsQ0FBQzNCLENBQWIsRUFBZ0IsQ0FBaEI7TUFESSxDQUFoQixFQUVHNkUsRUFGSCxDQUVNLENBRk4sRUFFUztRQUNQNUYsUUFBUSxFQUFFckQsRUFBRSxDQUFDK0ksRUFBSCxDQUFNcEUsQ0FBQyxDQUFDTixDQUFSLEVBQVdNLENBQUMsQ0FBQ1AsQ0FBYixFQUFnQixDQUFoQixDQURIO1FBRVB1RSxLQUFLLEVBQUU7TUFGQSxDQUZULEVBS0dPLElBTEgsQ0FLUSxZQUFZO1FBQ2xCckUsQ0FBQyxDQUFDc0UsT0FBRjtNQUNELENBUEQsRUFPR0MsS0FQSDtJQVFELENBakJEOztJQWtCQSxJQUFJbUQsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsS0FBS3hHLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3hGLENBQUMsQ0FBQ3FFLE1BQWxCLEVBQTBCbUIsQ0FBQyxFQUEzQixFQUErQjtNQUM3QmxCLENBQUMsQ0FBQ2tCLENBQUQsQ0FBRDtJQUNEOztJQUNELEtBQUt5Ryx1QkFBTDs7SUFDQSxLQUFLL0ksUUFBTDtFQUNELENBckREOztFQXNEQWpELEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0I0Six1QkFBaEIsR0FBMEMsWUFBWTtJQUNwRCxJQUFJQyxTQUFTLEdBQUcsS0FBSzVMLE9BQUwsQ0FBYXNFLE9BQWIsRUFBaEI7SUFDQSxJQUFJdUgsU0FBUyxHQUFHLEtBQUsxTCxRQUFMLENBQWMwRCxZQUFkLEVBQWhCOztJQUNBLEtBQUssSUFBSWlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQzlILE1BQTlCLEVBQXNDK0gsQ0FBQyxFQUF2QyxFQUEyQztNQUN6QyxJQUFJQyxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0MsQ0FBRCxDQUFULENBQWFFLGFBQWIsRUFBWjs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEtBQUssQ0FBQ2hJLE1BQTFCLEVBQWtDa0ksQ0FBQyxFQUFuQyxFQUF1QztRQUNyQyxJQUFJOU0sRUFBRSxDQUFDaUYsWUFBSCxDQUFnQkMsY0FBaEIsQ0FBK0J1SCxTQUEvQixFQUEwQ0csS0FBSyxDQUFDRSxDQUFELENBQS9DLENBQUosRUFBeUQ7VUFDdkQsS0FBS2pNLE9BQUwsQ0FBYWlDLElBQWIsQ0FBa0JNLFdBQWxCLENBQThCLEtBQUs5QixNQUFMLENBQVk0QixjQUFaLENBQTJCLFFBQTNCLEVBQXFDRyxRQUFuRTtVQUNBO1FBQ0Q7TUFDRjtJQUNGO0VBQ0YsQ0FaRDs7RUFhQTdDLEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0JhLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsS0FBSyxJQUFJbEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLK0IsVUFBTCxDQUFnQnNDLE1BQXBDLEVBQTRDckUsQ0FBQyxFQUE3QyxFQUFpRDtNQUMvQyxLQUFLK0IsVUFBTCxDQUFnQi9CLENBQWhCLEVBQW1CdUMsSUFBbkIsQ0FBd0JDLE1BQXhCLEdBQWlDLEtBQWpDO01BQ0EsS0FBS1YsVUFBTCxDQUFnQnVKLElBQWhCLENBQXFCLEtBQUt0SixVQUFMLENBQWdCL0IsQ0FBaEIsRUFBbUJ1QyxJQUF4QztJQUNEOztJQUNELEtBQUtSLFVBQUwsR0FBa0IsRUFBbEI7SUFDQSxLQUFLQyxVQUFMLENBQWdCbUQsT0FBaEIsQ0FBd0IsVUFBVW5GLENBQVYsRUFBYTtNQUNuQ0EsQ0FBQyxDQUFDd00sUUFBRixDQUFXLEtBQVg7SUFDRCxDQUZEO0lBR0EsS0FBS3hLLFVBQUwsR0FBa0IsRUFBbEI7SUFDQSxLQUFLRyxTQUFMLENBQWVnRCxPQUFmLENBQXVCLFVBQVVuRixDQUFWLEVBQWE7TUFDbENBLENBQUMsQ0FBQ3dNLFFBQUYsQ0FBVyxLQUFYO0lBQ0QsQ0FGRDtJQUdBLEtBQUtySyxTQUFMLEdBQWlCLEVBQWpCOztJQUNBLEtBQUtuQyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcsS0FBS2tDLFdBQUwsQ0FBaUJtQyxNQUFqQyxFQUF5Q3JFLENBQUMsRUFBMUMsRUFBOEM7TUFDNUMsS0FBS2tDLFdBQUwsQ0FBaUJsQyxDQUFqQixFQUFvQnVDLElBQXBCLENBQXlCQyxNQUF6QixHQUFrQyxLQUFsQztNQUNBLEtBQUtQLFdBQUwsQ0FBaUJvSixJQUFqQixDQUFzQixLQUFLbkosV0FBTCxDQUFpQmxDLENBQWpCLEVBQW9CdUMsSUFBMUM7SUFDRDs7SUFDRCxLQUFLTCxXQUFMLEdBQW1CLEVBQW5CO0VBQ0QsQ0FuQkQ7O0VBb0JBakMsS0FBSyxDQUFDb0MsU0FBTixDQUFnQm9LLFFBQWhCLEdBQTJCLFVBQVV6TSxDQUFWLEVBQWFFLENBQWIsRUFBZ0I7SUFDekMsSUFBSWtFLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksQ0FBQyxDQUFELElBQU1wRSxDQUFWLEVBQWE7TUFDWCxJQUFJMUMsQ0FBQyxHQUFHb0Isb0JBQW9CLENBQUNnTyxpQkFBckIsQ0FBdUNwRyxXQUF2QyxHQUFxRHFHLGlCQUFyRCxDQUF1RTNNLENBQXZFLENBQVI7TUFDQSxJQUFJeUUsQ0FBQyxHQUFHbEcsbUJBQW1CLENBQUNxTyxrQkFBcEIsQ0FBdUNDLEtBQXZDLEdBQStDLEdBQS9DLEdBQXFEdlAsQ0FBQyxDQUFDd1AsRUFBL0Q7O01BQ0EsSUFBSXpILENBQUMsR0FBRyxXQUFVL0gsQ0FBVixFQUFhO1FBQ25CQSxDQUFDLENBQUNzRixTQUFGLENBQVl3QixDQUFDLENBQUNuRCxNQUFkO1FBQ0EzRCxDQUFDLENBQUNrRixNQUFGLEdBQVcsSUFBWDtRQUNBLElBQUlpQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ3JELE1BQUYsQ0FBUzRCLGNBQVQsQ0FBd0IsWUFBWXpDLENBQXBDLENBQVI7UUFDQTVDLENBQUMsQ0FBQ3VGLFdBQUYsQ0FBYzRCLENBQUMsQ0FBQzNCLFFBQWhCO1FBQ0EsSUFBSXVDLENBQUMsR0FBRy9ILENBQUMsQ0FBQzBOLFlBQUYsQ0FBZTdMLHNCQUFzQixXQUFyQyxDQUFSO1FBQ0FrRyxDQUFDLENBQUMvQyxRQUFGLENBQVd0QyxDQUFYLEVBQWNFLENBQWQ7UUFDQWtFLENBQUMsQ0FBQzNELFFBQUYsQ0FBV2dNLFFBQVgsQ0FBb0JwSCxDQUFwQjtNQUNELENBUkQ7O01BU0EsSUFBSUMsQ0FBQyxHQUFHckgsVUFBVSxDQUFDOE8sT0FBWCxDQUFtQnpHLFdBQW5CLEdBQWlDMEcsT0FBakMsQ0FBeUN2SSxDQUF6QyxDQUFSOztNQUNBLElBQUlhLENBQUosRUFBTztRQUNMRCxDQUFDLENBQUNDLENBQUQsQ0FBRDtNQUNELENBRkQsTUFFTztRQUNMLEtBQUsySCxVQUFMLENBQWdCMU8sbUJBQW1CLENBQUMyTyxvQkFBcEIsQ0FBeUNMLEtBQXpELEVBQWdFdlAsQ0FBQyxDQUFDNlAsTUFBbEUsRUFBMEUsVUFBVW5OLENBQVYsRUFBYTtVQUNyRnNGLENBQUMsR0FBRzdGLEVBQUUsQ0FBQzBJLFdBQUgsQ0FBZW5JLENBQWYsQ0FBSjtVQUNBL0IsVUFBVSxDQUFDOE8sT0FBWCxDQUFtQnpHLFdBQW5CLEdBQWlDOEcsV0FBakMsQ0FBNkMzSSxDQUE3QyxFQUFnRGhGLEVBQUUsQ0FBQzBJLFdBQUgsQ0FBZW5JLENBQWYsQ0FBaEQsRUFBbUUsRUFBbkU7VUFDQXFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFEO1FBQ0QsQ0FKRDtNQUtEO0lBQ0Y7RUFDRixDQXpCRDs7RUEwQkFyRixLQUFLLENBQUNvQyxTQUFOLENBQWdCZ0wsVUFBaEIsR0FBNkIsVUFBVXJOLENBQVYsRUFBYUUsQ0FBYixFQUFnQjtJQUMzQyxJQUFJa0UsQ0FBQyxHQUFHLElBQVI7SUFDQSxJQUFJOUcsQ0FBQyxHQUFHb0Isb0JBQW9CLENBQUNnTyxpQkFBckIsQ0FBdUNwRyxXQUF2QyxHQUFxRHFHLGlCQUFyRCxDQUF1RTNNLENBQXZFLENBQVI7SUFDQSxJQUFJeUUsQ0FBQyxHQUFHbEcsbUJBQW1CLENBQUNxTyxrQkFBcEIsQ0FBdUNVLE9BQXZDLEdBQWlELEdBQWpELEdBQXVEaFEsQ0FBQyxDQUFDd1AsRUFBakU7O0lBQ0EsSUFBSXpILENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQVUvSCxDQUFWLEVBQWE7TUFDbkJBLENBQUMsQ0FBQ3NGLFNBQUYsQ0FBWXdCLENBQUMsQ0FBQ25ELE1BQWQ7TUFDQTNELENBQUMsQ0FBQ2tGLE1BQUYsR0FBVyxJQUFYO01BQ0EsSUFBSWlDLENBQUMsR0FBR25ILENBQUMsQ0FBQzBOLFlBQUYsQ0FBZXpMLHdCQUF3QixXQUF2QyxDQUFSO01BQ0FrRixDQUFDLENBQUNuQyxRQUFGLENBQVd0QyxDQUFYO01BQ0FvRSxDQUFDLENBQUMzRCxRQUFGLENBQVc0TSxVQUFYLENBQXNCNUksQ0FBdEI7TUFDQXZFLENBQUMsQ0FBQ3VFLENBQUQsQ0FBRDtJQUNELENBUEQ7O0lBUUEsSUFBSWEsQ0FBQyxHQUFHckgsVUFBVSxDQUFDOE8sT0FBWCxDQUFtQnpHLFdBQW5CLEdBQWlDMEcsT0FBakMsQ0FBeUN2SSxDQUF6QyxDQUFSOztJQUNBLElBQUlhLENBQUosRUFBTztNQUNMRCxDQUFDLENBQUNDLENBQUQsQ0FBRDtJQUNELENBRkQsTUFFTztNQUNMLEtBQUsySCxVQUFMLENBQWdCMU8sbUJBQW1CLENBQUMyTyxvQkFBcEIsQ0FBeUNMLEtBQXpELEVBQWdFLFNBQVN2UCxDQUFDLENBQUM2UCxNQUEzRSxFQUFtRixVQUFVbk4sQ0FBVixFQUFhO1FBQzlGc0YsQ0FBQyxHQUFHN0YsRUFBRSxDQUFDMEksV0FBSCxDQUFlbkksQ0FBZixDQUFKO1FBQ0EvQixVQUFVLENBQUM4TyxPQUFYLENBQW1CekcsV0FBbkIsR0FBaUM4RyxXQUFqQyxDQUE2QzNJLENBQTdDLEVBQWdEaEYsRUFBRSxDQUFDMEksV0FBSCxDQUFlbkksQ0FBZixDQUFoRCxFQUFtRSxDQUFuRTtRQUNBcUYsQ0FBQyxDQUFDQyxDQUFELENBQUQ7TUFDRCxDQUpEO0lBS0Q7RUFDRixDQXRCRDs7RUF1QkFyRixLQUFLLENBQUNvQyxTQUFOLENBQWdCeUQsT0FBaEIsR0FBMEIsVUFBVTlGLENBQVYsRUFBYTtJQUNyQyxJQUFJRSxDQUFKO0lBQ0EsSUFBSWtFLENBQUMsR0FBRztNQUNObUosU0FBUyxFQUFFdk4sQ0FETDtNQUVOMEYsUUFBUSxFQUFFLEVBRko7TUFHTjhILFNBQVMsRUFBRTtJQUhMLENBQVI7SUFLQSxJQUFJbFEsQ0FBQyxHQUFHLEVBQVI7SUFDQSxJQUFJbUgsQ0FBQyxHQUFHLEtBQUtoRSxRQUFMLENBQWMwRCxZQUFkLEVBQVI7O0lBQ0EsS0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osQ0FBQyxDQUFDSixNQUF0QixFQUE4QmdCLENBQUMsRUFBL0IsRUFBbUM7TUFDakMsQ0FBQ2YsQ0FBQyxHQUFHRyxDQUFDLENBQUNZLENBQUQsQ0FBTixFQUFXb0ksU0FBWCxNQUEwQm5RLENBQUMsQ0FBQytOLElBQUYsQ0FBTy9HLENBQUMsQ0FBQ3dJLEVBQVQsQ0FBMUI7SUFDRDs7SUFDRCxJQUFJeEgsQ0FBQyxHQUFHLEtBQUt2RSxNQUFMLENBQVkyTSx1QkFBWixDQUFvQzdPLHFCQUFxQixXQUF6RCxDQUFSO0lBQ0EsSUFBSTJHLENBQUMsR0FBRyxFQUFSOztJQUNBLEtBQUtILENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0MsQ0FBQyxDQUFDakIsTUFBbEIsRUFBMEJnQixDQUFDLEVBQTNCLEVBQStCO01BQzdCLElBQUlmLENBQUo7O01BQ0EsSUFBSSxDQUFDQSxDQUFDLEdBQUdnQixDQUFDLENBQUNELENBQUQsQ0FBTixFQUFXc0ksVUFBWCxDQUFzQkMsUUFBdEIsQ0FBK0I1TixDQUEvQixDQUFKLEVBQXVDO1FBQ3JDLElBQUksS0FBS3NFLENBQUMsQ0FBQ3VKLFdBQUYsQ0FBY3hKLE1BQXZCLEVBQStCO1VBQzdCbUIsQ0FBQyxDQUFDNkYsSUFBRixDQUFPL0csQ0FBQyxDQUFDL0IsSUFBVDtRQUNELENBRkQsTUFFTztVQUNMLEtBQUssSUFBSXlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcxTyxDQUFDLENBQUMrRyxNQUF0QixFQUE4QjJILENBQUMsRUFBL0IsRUFBbUM7WUFDakMsSUFBSTFILENBQUMsQ0FBQ3VKLFdBQUYsQ0FBY0QsUUFBZCxDQUF1QnRRLENBQUMsQ0FBQzBPLENBQUQsQ0FBeEIsQ0FBSixFQUFrQztjQUNoQ3hHLENBQUMsQ0FBQzZGLElBQUYsQ0FBTy9HLENBQUMsQ0FBQy9CLElBQVQ7Y0FDQTtZQUNEO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7O0lBQ0QsQ0FBQ3JDLENBQUMsR0FBR2tFLENBQUMsQ0FBQ3NCLFFBQVAsRUFBaUIyRixJQUFqQixDQUFzQmxMLEtBQXRCLENBQTRCRCxDQUE1QixFQUErQnNGLENBQUMsQ0FBQ3JILFFBQVEsQ0FBQ21KLEtBQVQsQ0FBZXdHLFVBQWYsQ0FBMEIsQ0FBMUIsRUFBNkJ0SSxDQUFDLENBQUNuQixNQUEvQixDQUFELENBQUQsQ0FBMEN5RCxRQUF6RTtJQUNBLE9BQU8xRCxDQUFQO0VBQ0QsQ0EvQkQ7O0VBZ0NBbkUsS0FBSyxDQUFDb0MsU0FBTixDQUFnQjBMLFlBQWhCLEdBQStCLFVBQVUvTixDQUFWLEVBQWE7SUFDMUMsSUFBSUUsQ0FBQyxHQUFHLElBQVI7SUFDQSxJQUFJa0UsQ0FBQyxHQUFHLEtBQUt0QyxVQUFMLENBQWdCa00sS0FBaEIsRUFBUjtJQUNBNUosQ0FBQyxJQUFJLENBQUNBLENBQUMsR0FBRzNFLEVBQUUsQ0FBQzBJLFdBQUgsQ0FBZSxLQUFLN0gsT0FBTCxDQUFhMk4sTUFBYixDQUFvQjFMLElBQW5DLENBQUwsRUFBK0NLLFNBQS9DLENBQXlELEtBQUsxQixJQUE5RCxDQUFMO0lBQ0FrRCxDQUFDLENBQUM4SixlQUFGLENBQWtCLENBQWxCO0lBQ0E5SixDQUFDLENBQUM1QixNQUFGLEdBQVcsSUFBWDtJQUNBLElBQUlsRixDQUFDLEdBQUcsS0FBS2dELE9BQUwsQ0FBYTZOLFVBQWIsRUFBUjtJQUNBLElBQUkxSixDQUFDLEdBQUcsS0FBS3ZELElBQUwsQ0FBVWdILG9CQUFWLENBQStCNUssQ0FBL0IsQ0FBUjtJQUNBOEcsQ0FBQyxDQUFDdkIsV0FBRixDQUFjNEIsQ0FBZDtJQUNBLElBQUlZLENBQUMsR0FBR2pCLENBQUMsQ0FBQzRHLFlBQUYsQ0FBZS9MLHVCQUF1QixXQUF0QyxDQUFSO0lBQ0FvRyxDQUFDLENBQUMrSSxPQUFGLENBQVUsS0FBSzlOLE9BQUwsQ0FBYXVKLFVBQWIsQ0FBd0J3RSxPQUFsQztJQUNBLEtBQUt0TSxVQUFMLENBQWdCc0osSUFBaEIsQ0FBcUJoRyxDQUFyQjtJQUNBLElBQUlDLENBQUMsR0FBRyxLQUFLaEYsT0FBTCxDQUFhZ08sU0FBYixDQUF1QnRPLENBQXZCLENBQVI7SUFDQSxJQUFJd0YsQ0FBQyxHQUFHLEtBQUtsRixPQUFMLENBQWFpTyxJQUFiLElBQXFCOUssSUFBSSxDQUFDNEUsTUFBTCxFQUE3QjtJQUNBN0MsQ0FBQyxLQUFLRixDQUFDLElBQUksS0FBS2hGLE9BQUwsQ0FBYWtPLE9BQXZCLENBQUQ7SUFDQW5KLENBQUMsQ0FBQ29KLE1BQUYsQ0FBU2hLLENBQVQsRUFBWXpFLENBQUMsQ0FBQ3VDLElBQWQsRUFBb0IsWUFBWTtNQUM5QixJQUFJOUMsRUFBRSxDQUFDaVAsT0FBSCxDQUFXMU8sQ0FBWCxLQUFpQlAsRUFBRSxDQUFDaVAsT0FBSCxDQUFXMU8sQ0FBQyxDQUFDdUMsSUFBYixDQUFyQixFQUF5QztRQUN2QyxJQUFJLENBQUM1RCxzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeURxSSxZQUF6RCxHQUF3RUMsWUFBeEUsQ0FBcUYsQ0FBckYsQ0FBTCxFQUE4RjtVQUM1RjlQLG1CQUFtQixXQUFuQixDQUE0QjZJLFFBQTVCLENBQXFDTSxLQUFyQyxDQUEyQzRHLFFBQTNDLENBQW9ELElBQXBEO1VBQ0FsUSxzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeURxSSxZQUF6RCxHQUF3RUcsWUFBeEUsQ0FBcUYsQ0FBckY7UUFDRDs7UUFDRGhRLG1CQUFtQixXQUFuQixDQUE0QjZJLFFBQTVCLENBQXFDb0gsU0FBckMsQ0FBK0NDLGFBQS9DLENBQTZEaFAsQ0FBQyxDQUFDdUMsSUFBRixDQUFPZ0IsV0FBUCxFQUE3RCxFQUFtRitCLENBQW5GLEVBQXNGRSxDQUF0RjtRQUNBMUcsbUJBQW1CLFdBQW5CLENBQTRCNkksUUFBNUIsQ0FBcUNvSCxTQUFyQyxDQUErQ0UsZUFBL0MsQ0FBK0RqUCxDQUFDLENBQUN1QyxJQUFGLENBQU9nQixXQUFQLEVBQS9ELEVBQXFGLFVBQVVyRCxDQUFDLENBQUNJLE9BQUYsQ0FBVXVKLFVBQVYsQ0FBcUJ3RSxPQUFwSDtRQUNBakssQ0FBQyxDQUFDNUIsTUFBRixHQUFXLEtBQVg7UUFDQXhDLENBQUMsQ0FBQ2tQLFVBQUYsQ0FBYTVKLENBQWI7UUFDQSxJQUFJaEksQ0FBQyxHQUFHNEMsQ0FBQyxDQUFDTyxRQUFGLENBQVcwTyxXQUFYLENBQXVCMVEsaUJBQWlCLENBQUMyUSxxQkFBbEIsQ0FBd0NDLE1BQS9ELENBQVI7UUFDQS9SLENBQUMsSUFBSTBDLENBQUMsQ0FBQ3NQLE1BQUYsRUFBTCxJQUFtQnBQLENBQUMsQ0FBQ0ksT0FBRixDQUFVaVAsUUFBVixDQUFtQmpTLENBQUMsQ0FBQ2tTLEtBQUYsQ0FBUSxDQUFSLENBQW5CLENBQW5CO1FBQ0EsSUFBSS9LLENBQUMsR0FBR3ZFLENBQUMsQ0FBQ08sUUFBRixDQUFXME8sV0FBWCxDQUF1QjFRLGlCQUFpQixDQUFDMlEscUJBQWxCLENBQXdDSyxNQUEvRCxDQUFSO1FBQ0FoTCxDQUFDLElBQUl6RSxDQUFDLENBQUMwUCxPQUFGLENBQVVwUSxzQkFBc0IsQ0FBQ3FRLHVCQUF2QixDQUErQ0MsU0FBekQsRUFBb0U7VUFDdkVDLE1BQU0sRUFBRXBMLENBQUMsQ0FBQytLLEtBQUYsQ0FBUSxDQUFSLENBRCtEO1VBRXZFTSxJQUFJLEVBQUU7UUFGaUUsQ0FBcEUsQ0FBTDtNQUlEO0lBQ0YsQ0FsQkQ7RUFtQkQsQ0FsQ0Q7O0VBbUNBN1AsS0FBSyxDQUFDb0MsU0FBTixDQUFnQjBOLFVBQWhCLEdBQTZCLFVBQVUvUCxDQUFWLEVBQWE7SUFDeEMsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs2QixVQUFMLENBQWdCc0MsTUFBcEMsRUFBNENuRSxDQUFDLEVBQTdDLEVBQWlEO01BQy9DLElBQUksS0FBSzZCLFVBQUwsQ0FBZ0I3QixDQUFoQixFQUFtQjRFLElBQW5CLElBQTJCOUUsQ0FBQyxDQUFDOEUsSUFBakMsRUFBdUM7UUFDckMsS0FBSy9DLFVBQUwsQ0FBZ0JpTyxNQUFoQixDQUF1QjlQLENBQXZCLEVBQTBCLENBQTFCO1FBQ0E7TUFDRDtJQUNGOztJQUNERixDQUFDLENBQUN1QyxJQUFGLENBQU9DLE1BQVAsR0FBZ0IsS0FBaEI7SUFDQSxLQUFLVixVQUFMLENBQWdCdUosSUFBaEIsQ0FBcUJyTCxDQUFDLENBQUN1QyxJQUF2QjtFQUNELENBVEQ7O0VBVUF0QyxLQUFLLENBQUNvQyxTQUFOLENBQWdCNE4sV0FBaEIsR0FBOEIsVUFBVWpRLENBQVYsRUFBYTtJQUN6QyxJQUFJRSxDQUFDLEdBQUdGLENBQUMsQ0FBQ2tRLFNBQUYsRUFBUjtJQUNBaFEsQ0FBQyxDQUFDMEMsU0FBRixDQUFZLEtBQUsxQixJQUFqQjtJQUNBaEIsQ0FBQyxDQUFDZ08sZUFBRixDQUFrQixDQUFsQjtJQUNBaE8sQ0FBQyxDQUFDc0MsTUFBRixHQUFXLElBQVg7SUFDQSxJQUFJNEIsQ0FBQyxHQUFHcEUsQ0FBQyxDQUFDbU8sVUFBRixFQUFSO0lBQ0EsSUFBSTdRLENBQUMsR0FBRyxLQUFLNEQsSUFBTCxDQUFVZ0gsb0JBQVYsQ0FBK0I5RCxDQUEvQixDQUFSO0lBQ0FsRSxDQUFDLENBQUMyQyxXQUFGLENBQWN2RixDQUFkO0lBQ0EsSUFBSW1ILENBQUMsR0FBR3ZFLENBQUMsQ0FBQzhLLFlBQUYsQ0FBZWhNLHdCQUF3QixXQUF2QyxDQUFSO0lBQ0EsS0FBS2dELFVBQUwsQ0FBZ0JxSixJQUFoQixDQUFxQjVHLENBQXJCO0lBQ0EsT0FBTztNQUNMMEwsR0FBRyxFQUFFMUwsQ0FEQTtNQUVMa0IsR0FBRyxFQUFFckk7SUFGQSxDQUFQO0VBSUQsQ0FkRDs7RUFlQTJDLEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0IrTixlQUFoQixHQUFrQyxVQUFVcFEsQ0FBVixFQUFhO0lBQzdDLEtBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLOEIsVUFBTCxDQUFnQnFDLE1BQXBDLEVBQTRDbkUsQ0FBQyxFQUE3QyxFQUFpRDtNQUMvQyxJQUFJLEtBQUs4QixVQUFMLENBQWdCOUIsQ0FBaEIsRUFBbUI0RSxJQUFuQixJQUEyQjlFLENBQUMsQ0FBQzhFLElBQWpDLEVBQXVDO1FBQ3JDLEtBQUs5QyxVQUFMLENBQWdCZ08sTUFBaEIsQ0FBdUI5UCxDQUF2QixFQUEwQixDQUExQjtRQUNBO01BQ0Q7SUFDRjtFQUNGLENBUEQ7O0VBUUFELEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0JnTyxXQUFoQixHQUE4QixVQUFVclEsQ0FBVixFQUFhRSxDQUFiLEVBQWdCO0lBQzVDLElBQUlrRSxDQUFDLEdBQUcsS0FBS25DLFdBQUwsQ0FBaUIrTCxLQUFqQixFQUFSO0lBQ0E1SixDQUFDLElBQUksQ0FBQ0EsQ0FBQyxHQUFHM0UsRUFBRSxDQUFDMEksV0FBSCxDQUFlLEtBQUs1SCxXQUFMLENBQWlCZ0MsSUFBaEMsQ0FBTCxFQUE0Q0ssU0FBNUMsQ0FBc0QsS0FBSzFCLElBQTNELENBQUw7SUFDQWtELENBQUMsQ0FBQzhKLGVBQUYsQ0FBa0IsQ0FBbEI7SUFDQTlKLENBQUMsQ0FBQzVCLE1BQUYsR0FBVyxJQUFYO0lBQ0EsSUFBSWxGLENBQUMsR0FBRzBDLENBQUMsQ0FBQ3NRLFNBQUYsRUFBUjtJQUNBbE0sQ0FBQyxDQUFDdkIsV0FBRixDQUFjdkYsQ0FBZDtJQUNBLElBQUltSCxDQUFDLEdBQUdMLENBQUMsQ0FBQzRHLFlBQUYsQ0FBZWpNLHdCQUF3QixXQUF2QyxDQUFSO0lBQ0EsS0FBS21ELFdBQUwsQ0FBaUJtSixJQUFqQixDQUFzQjVHLENBQXRCO0lBQ0EsSUFBSVksQ0FBQyxHQUFHckYsQ0FBQyxDQUFDc08sU0FBRixFQUFSO0lBQ0E3SixDQUFDLENBQUNnSyxNQUFGLENBQVNuUixDQUFULEVBQVk0QyxDQUFDLENBQUNxQyxJQUFkLEVBQW9CLFlBQVk7TUFDOUIsSUFBSTlDLEVBQUUsQ0FBQ2lQLE9BQUgsQ0FBV3hPLENBQVgsS0FBaUJULEVBQUUsQ0FBQ2lQLE9BQUgsQ0FBV3hPLENBQUMsQ0FBQ3FDLElBQWIsQ0FBckIsRUFBeUM7UUFDdkN6RCxtQkFBbUIsV0FBbkIsQ0FBNEI2SSxRQUE1QixDQUFxQ29ILFNBQXJDLENBQStDQyxhQUEvQyxDQUE2RDlPLENBQUMsQ0FBQ3FDLElBQUYsQ0FBT2dCLFdBQVAsRUFBN0QsRUFBbUY4QixDQUFuRjtRQUNBdkcsbUJBQW1CLFdBQW5CLENBQTRCNkksUUFBNUIsQ0FBcUNvSCxTQUFyQyxDQUErQ0UsZUFBL0MsQ0FBK0QvTyxDQUFDLENBQUNxQyxJQUFGLENBQU9nQixXQUFQLEVBQS9ELEVBQXFGLFVBQXJGO1FBQ0FhLENBQUMsQ0FBQzVCLE1BQUYsR0FBVyxLQUFYO1FBQ0F0QyxDQUFDLENBQUNnUCxVQUFGLENBQWE3SixDQUFiO01BQ0Q7SUFDRixDQVBEO0VBUUQsQ0FsQkQ7O0VBbUJBcEYsS0FBSyxDQUFDb0MsU0FBTixDQUFnQmtPLGVBQWhCLEdBQWtDLFVBQVV2USxDQUFWLEVBQWE7SUFDN0MsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtnQyxXQUFMLENBQWlCbUMsTUFBckMsRUFBNkNuRSxDQUFDLEVBQTlDLEVBQWtEO01BQ2hELElBQUksS0FBS2dDLFdBQUwsQ0FBaUJoQyxDQUFqQixFQUFvQjRFLElBQXBCLElBQTRCOUUsQ0FBQyxDQUFDOEUsSUFBbEMsRUFBd0M7UUFDdEMsS0FBSzVDLFdBQUwsQ0FBaUI4TixNQUFqQixDQUF3QjlQLENBQXhCLEVBQTJCLENBQTNCO1FBQ0E7TUFDRDtJQUNGOztJQUNERixDQUFDLENBQUN1QyxJQUFGLENBQU9DLE1BQVAsR0FBZ0IsS0FBaEI7SUFDQSxLQUFLUCxXQUFMLENBQWlCb0osSUFBakIsQ0FBc0JyTCxDQUFDLENBQUN1QyxJQUF4QjtFQUNELENBVEQ7O0VBVUF0QyxLQUFLLENBQUNvQyxTQUFOLENBQWdCbU8sYUFBaEIsR0FBZ0MsVUFBVXhRLENBQVYsRUFBYTtJQUMzQyxJQUFJRSxDQUFDLEdBQUdGLENBQUMsQ0FBQ2tRLFNBQUYsRUFBUjtJQUNBaFEsQ0FBQyxDQUFDMEMsU0FBRixDQUFZLEtBQUsxQixJQUFqQjtJQUNBaEIsQ0FBQyxDQUFDZ08sZUFBRixDQUFrQixDQUFsQjtJQUNBaE8sQ0FBQyxDQUFDc0MsTUFBRixHQUFXLElBQVg7SUFDQSxJQUFJNEIsQ0FBQyxHQUFHcEUsQ0FBQyxDQUFDbU8sVUFBRixFQUFSO0lBQ0EsSUFBSTdRLENBQUMsR0FBRyxLQUFLNEQsSUFBTCxDQUFVZ0gsb0JBQVYsQ0FBK0I5RCxDQUEvQixDQUFSO0lBQ0FsRSxDQUFDLENBQUMyQyxXQUFGLENBQWN2RixDQUFkO0lBQ0EsSUFBSW1ILENBQUMsR0FBR3ZFLENBQUMsQ0FBQzhLLFlBQUYsQ0FBZTlMLDBCQUEwQixXQUF6QyxDQUFSO0lBQ0EsS0FBS2lELFNBQUwsQ0FBZWtKLElBQWYsQ0FBb0I1RyxDQUFwQjtJQUNBLE9BQU87TUFDTDBMLEdBQUcsRUFBRTFMLENBREE7TUFFTGtCLEdBQUcsRUFBRXJJO0lBRkEsQ0FBUDtFQUlELENBZEQ7O0VBZUEyQyxLQUFLLENBQUNvQyxTQUFOLENBQWdCb08saUJBQWhCLEdBQW9DLFVBQVV6USxDQUFWLEVBQWE7SUFDL0MsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtpQyxTQUFMLENBQWVrQyxNQUFuQyxFQUEyQ25FLENBQUMsRUFBNUMsRUFBZ0Q7TUFDOUMsSUFBSSxLQUFLaUMsU0FBTCxDQUFlakMsQ0FBZixFQUFrQjRFLElBQWxCLElBQTBCOUUsQ0FBQyxDQUFDOEUsSUFBaEMsRUFBc0M7UUFDcEMsS0FBSzNDLFNBQUwsQ0FBZTZOLE1BQWYsQ0FBc0I5UCxDQUF0QixFQUF5QixDQUF6QjtRQUNBO01BQ0Q7SUFDRjtFQUNGLENBUEQ7O0VBUUFELEtBQUssQ0FBQ29DLFNBQU4sQ0FBZ0JxTyxVQUFoQixHQUE2QixVQUFVMVEsQ0FBVixFQUFhO0lBQ3hDLEtBQUtvQyxRQUFMLENBQWNpSixJQUFkLENBQW1CO01BQ2pCc0YsTUFBTSxFQUFFLElBRFM7TUFFakJDLElBQUksRUFBRTVRO0lBRlcsQ0FBbkI7RUFJRCxDQUxEOztFQU1BQyxLQUFLLENBQUNvQyxTQUFOLENBQWdCd08sYUFBaEIsR0FBZ0MsWUFBWTtJQUMxQyxLQUFLdlEsT0FBTCxDQUFhdUosVUFBYixDQUF3QmdILGFBQXhCO0lBQ0EsS0FBS3BRLFFBQUwsQ0FBY29RLGFBQWQ7RUFDRCxDQUhEOztFQUlBNVEsS0FBSyxDQUFDb0MsU0FBTixDQUFnQnlPLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsSUFBSTlRLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUlyQixzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeUR5SyxXQUF6RCxHQUF1RUMsT0FBdkUsQ0FBK0UsS0FBS3ZRLFFBQUwsQ0FBY3dRLFFBQWQsQ0FBdUJDLEtBQXRHLENBQUosRUFBa0g7TUFDaEgsS0FBS3pRLFFBQUwsQ0FBYzBRLFFBQWQ7TUFDQXhTLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFSyxXQUF2RSxHQUFxRmpNLE9BQXJGLENBQTZGLFVBQVVqRixDQUFWLEVBQWE7UUFDeEdGLENBQUMsQ0FBQ1MsUUFBRixDQUFXNFEsV0FBWCxDQUF1Qm5SLENBQXZCO01BQ0QsQ0FGRDtNQUdBLElBQUlBLENBQUMsR0FBR3ZCLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFTyxnQkFBdkUsRUFBUjtNQUNBLElBQUlsTixDQUFDLEdBQUcsS0FBSzNELFFBQUwsQ0FBYzBELFlBQWQsRUFBUjs7TUFDQSxLQUFLLElBQUk3RyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEcsQ0FBQyxDQUFDQyxNQUF0QixFQUE4Qi9HLENBQUMsRUFBL0IsRUFBbUM7UUFDakMsSUFBSW1ILENBQUMsR0FBR0wsQ0FBQyxDQUFDOUcsQ0FBRCxDQUFUOztRQUNBLEtBQUssSUFBSStILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUduRixDQUFDLENBQUNtRSxNQUF0QixFQUE4QmdCLENBQUMsRUFBL0IsRUFBbUM7VUFDakMsSUFBSUMsQ0FBQyxHQUFHcEYsQ0FBQyxDQUFDbUYsQ0FBRCxDQUFUO1VBQ0FaLENBQUMsQ0FBQ3FJLEVBQUYsSUFBUXhILENBQUMsQ0FBQ2lNLEtBQVYsSUFBbUI5TSxDQUFDLENBQUMrTSxPQUFGLENBQVVsTSxDQUFWLENBQW5CO1FBQ0Q7TUFDRjs7TUFDRCxLQUFLN0UsUUFBTCxDQUFjMkksV0FBZCxHQUE0QnpLLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFVSxlQUF2RSxFQUE1Qjs7TUFDQSxJQUFJLEtBQUssS0FBS2hSLFFBQUwsQ0FBYzJJLFdBQWQsQ0FBMEJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvREMsVUFBOUUsQ0FBVCxFQUFvRztRQUNsRyxLQUFLN0ksUUFBTCxDQUFjMkksV0FBZCxDQUEwQmhLLHlCQUF5QixDQUFDaUsseUJBQTFCLENBQW9ESyxNQUE5RSxJQUF3RixFQUF4RjtRQUNBLEtBQUtqSixRQUFMLENBQWMySSxXQUFkLENBQTBCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RNLFdBQTlFLElBQTZGLEVBQTdGO1FBQ0EsS0FBS3JKLE9BQUwsQ0FBYXVKLFVBQWIsQ0FBd0JDLE1BQXhCLENBQStCLENBQS9CO01BQ0Q7O01BQ0QsSUFBSSxLQUFLLEtBQUtySixRQUFMLENBQWMySSxXQUFkLENBQTBCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RDLFVBQTlFLENBQUwsSUFBa0cxSyxrQkFBa0IsQ0FBQ29MLGdCQUFuQixDQUFvQ0MsbUJBQXBDLEVBQXRHLEVBQWlLO1FBQy9KLEtBQUt4SixRQUFMLENBQWMySSxXQUFkLENBQTBCaEsseUJBQXlCLENBQUNpSyx5QkFBMUIsQ0FBb0RLLE1BQTlFLElBQXdGLENBQXhGO1FBQ0EsS0FBS2pKLFFBQUwsQ0FBYzJJLFdBQWQsQ0FBMEJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRE0sV0FBOUUsSUFBNkYsQ0FBN0Y7UUFDQSxLQUFLckosT0FBTCxDQUFhdUosVUFBYixDQUF3QkMsTUFBeEIsQ0FBK0IsQ0FBL0I7TUFDRDs7TUFDRCxJQUFJLEtBQUssS0FBS3JKLFFBQUwsQ0FBYzJJLFdBQWQsQ0FBMEJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRGUsU0FBOUUsQ0FBVCxFQUFtRztRQUNqRyxLQUFLM0osUUFBTCxDQUFjMkksV0FBZCxDQUEwQmhLLHlCQUF5QixDQUFDaUsseUJBQTFCLENBQW9EbUIsS0FBOUUsSUFBdUYsRUFBdkY7UUFDQSxLQUFLbEssT0FBTCxDQUFhdUosVUFBYixDQUF3QkMsTUFBeEIsQ0FBK0IsQ0FBL0I7TUFDRDs7TUFDRCxJQUFJLEtBQUssS0FBS3JKLFFBQUwsQ0FBYzJJLFdBQWQsQ0FBMEJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRGUsU0FBOUUsQ0FBTCxJQUFpR3hMLGtCQUFrQixDQUFDb0wsZ0JBQW5CLENBQW9DQyxtQkFBcEMsRUFBckcsRUFBZ0s7UUFDOUosS0FBS3hKLFFBQUwsQ0FBYzJJLFdBQWQsQ0FBMEJoSyx5QkFBeUIsQ0FBQ2lLLHlCQUExQixDQUFvRG1CLEtBQTlFLElBQXVGLENBQXZGO1FBQ0EsS0FBS2xLLE9BQUwsQ0FBYXVKLFVBQWIsQ0FBd0JDLE1BQXhCLENBQStCLENBQS9CO01BQ0Q7O01BQ0QsSUFBSXRFLENBQUMsR0FBRzdHLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFVyxXQUF2RSxFQUFSOztNQUNBLElBQUlsTSxDQUFKLEVBQU87UUFDTCxLQUFLL0UsUUFBTCxDQUFja1IsUUFBZCxDQUF1QnJHLEtBQXZCLEdBQStCOUYsQ0FBQyxDQUFDOEYsS0FBakM7UUFDQSxLQUFLN0ssUUFBTCxDQUFja1IsUUFBZCxDQUF1QkMsSUFBdkIsR0FBOEJwTSxDQUFDLENBQUNvTSxJQUFoQztRQUNBLEtBQUtuUixRQUFMLENBQWNrUixRQUFkLENBQXVCRSxLQUF2QixHQUErQnJNLENBQUMsQ0FBQ3FNLEtBQWpDO01BQ0Q7O01BQ0QsT0FBTyxJQUFQO0lBQ0Q7O0lBQ0QsT0FBTyxLQUFQO0VBQ0QsQ0E1Q0Q7O0VBNkNBNVIsS0FBSyxDQUFDb0MsU0FBTixDQUFnQjBILFFBQWhCLEdBQTJCLFlBQVk7SUFDckNwTCxzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeUR5SyxXQUF6RCxHQUF1RWUsWUFBdkUsQ0FBb0YsS0FBS3JSLFFBQUwsQ0FBY3dRLFFBQWQsQ0FBdUJDLEtBQTNHLEVBQWtILEtBQUt6USxRQUFMLENBQWNzUixLQUFoSSxFQUF1SSxLQUFLdFIsUUFBTCxDQUFjc0csSUFBcko7SUFDQSxJQUFJL0csQ0FBQyxHQUFHLEVBQVI7SUFDQSxLQUFLUyxRQUFMLENBQWN3QyxRQUFkLENBQXVCa0MsT0FBdkIsQ0FBK0IsVUFBVWpGLENBQVYsRUFBYTtNQUMxQ0YsQ0FBQyxDQUFDcUwsSUFBRixDQUFPbkwsQ0FBQyxDQUFDOFIsRUFBVDtJQUNELENBRkQ7SUFHQXJULHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFa0IsV0FBdkUsQ0FBbUZqUyxDQUFuRjtJQUNBLElBQUlFLENBQUMsR0FBRyxFQUFSO0lBQ0EsS0FBS08sUUFBTCxDQUFjMEQsWUFBZCxHQUE2QmdCLE9BQTdCLENBQXFDLFVBQVVuRixDQUFWLEVBQWE7TUFDaERFLENBQUMsQ0FBQ21MLElBQUYsQ0FBT3JMLENBQUMsQ0FBQ2tTLE9BQUYsRUFBUDtJQUNELENBRkQ7SUFHQXZULHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFb0IsZ0JBQXZFLENBQXdGalMsQ0FBeEY7SUFDQXZCLHNCQUFzQixDQUFDaUksbUJBQXZCLENBQTJDTixXQUEzQyxHQUF5RHlLLFdBQXpELEdBQXVFcUIsZUFBdkUsQ0FBdUYsS0FBSzNSLFFBQUwsQ0FBYzJJLFdBQXJHO0lBQ0EsSUFBSWhGLENBQUMsR0FBRztNQUNOa0gsS0FBSyxFQUFFLEtBQUs3SyxRQUFMLENBQWNrUixRQUFkLENBQXVCckcsS0FEeEI7TUFFTnNHLElBQUksRUFBRSxLQUFLblIsUUFBTCxDQUFja1IsUUFBZCxDQUF1QkMsSUFGdkI7TUFHTkMsS0FBSyxFQUFFLEtBQUtwUixRQUFMLENBQWNrUixRQUFkLENBQXVCRTtJQUh4QixDQUFSO0lBS0FsVCxzQkFBc0IsQ0FBQ2lJLG1CQUF2QixDQUEyQ04sV0FBM0MsR0FBeUR5SyxXQUF6RCxHQUF1RXNCLFdBQXZFLENBQW1Gak8sQ0FBbkY7RUFDRCxDQW5CRDs7RUFvQkEzRyxZQUFZLENBQUMsQ0FBQ29DLFlBQVksQ0FBQztJQUN6QitRLElBQUksRUFBRW5SLEVBQUUsQ0FBQzZTLE1BRGdCO0lBRXpCQyxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUHRTLEtBQUssQ0FBQ29DLFNBSEMsRUFHVSxRQUhWLEVBR29CbVEsU0FIcEIsQ0FBWjtFQUlBL1UsWUFBWSxDQUFDLENBQUNvQyxZQUFZLENBQUM7SUFDekIrUSxJQUFJLEVBQUV2Uix5QkFBeUIsV0FETjtJQUV6QmtULE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQdFMsS0FBSyxDQUFDb0MsU0FIQyxFQUdVLFNBSFYsRUFHcUJtUSxTQUhyQixDQUFaO0VBSUEvVSxZQUFZLENBQUMsQ0FBQ29DLFlBQVksQ0FBQztJQUN6QitRLElBQUksRUFBRTdSLHdCQUF3QixXQURMO0lBRXpCd1QsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1B0UyxLQUFLLENBQUNvQyxTQUhDLEVBR1UsYUFIVixFQUd5Qm1RLFNBSHpCLENBQVo7RUFJQS9VLFlBQVksQ0FBQyxDQUFDb0MsWUFBWSxDQUFDO0lBQ3pCK1EsSUFBSSxFQUFFblIsRUFBRSxDQUFDZ1QsSUFEZ0I7SUFFekJGLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQdFMsS0FBSyxDQUFDb0MsU0FIQyxFQUdVLFdBSFYsRUFHdUJtUSxTQUh2QixDQUFaO0VBSUEsT0FBTy9VLFlBQVksQ0FBQyxDQUFDa0MsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBbHdCNEIsQ0Frd0IzQmxDLFdBQVcsV0Fsd0JnQixDQUE3Qjs7QUFtd0JBRixPQUFPLFdBQVAsR0FBa0JrQyxzQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VDdHJsID0gcmVxdWlyZShcIkJhc2VDdHJsXCIpO1xudmFyICR6MVBvb2xNZ3IgPSByZXF1aXJlKFwiUG9vbE1nclwiKTtcbnZhciAkejFVSU1nciA9IHJlcXVpcmUoXCJVSU1nclwiKTtcbnZhciAkejFVdGlscyA9IHJlcXVpcmUoXCJVdGlsc1wiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xudmFyICR6MUdhbWVUcmFja0RhdGFFdmVudCA9IHJlcXVpcmUoXCJHYW1lVHJhY2tEYXRhRXZlbnRcIik7XG52YXIgJHoxUGxheWVyTWdyID0gcmVxdWlyZShcIlBsYXllck1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxNb2RsZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsTW9kbGVcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBhdGhJbmZvID0gcmVxdWlyZShcIktpbmdodEZhbGxQYXRoSW5mb1wiKTtcbnZhciAkejFLaW5naHRGYWxsVUlHYW1lID0gcmVxdWlyZShcIktpbmdodEZhbGxVSUdhbWVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEJ1bGxldEJ1aWxkID0gcmVxdWlyZShcIktpbmdodEZhbGxCdWxsZXRCdWlsZFwiKTtcbnZhciAkejFLaW5naHRGYWxsQnVsbGV0RW5lbXkgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEJ1bGxldEVuZW15XCIpO1xudmFyICR6MUtpbmdodEZhbGxCdWxsZXRQbGF5ID0gcmVxdWlyZShcIktpbmdodEZhbGxCdWxsZXRQbGF5XCIpO1xudmFyICR6MUtpbmdodEZhbGxCdWxsZXRTb2xkaWVyID0gcmVxdWlyZShcIktpbmdodEZhbGxCdWxsZXRTb2xkaWVyXCIpO1xudmFyICR6MUtpbmdodEZhbGxFbmVteUJhc2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVuZW15QmFzZVwiKTtcbnZhciAkejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhID0gcmVxdWlyZShcIktpbmdodEZhbGxHYW1lQ3RybERhdGFcIik7XG52YXIgJHoxS2luZ2h0RmFsbEdhbWVQbGF5Q3RybCA9IHJlcXVpcmUoXCJLaW5naHRGYWxsR2FtZVBsYXlDdHJsXCIpO1xudmFyICR6MUtpbmdodEZhbGxJbnRlcmZhY2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEludGVyZmFjZVwiKTtcbnZhciAkejFLaW5naHRGYWxsU29sZGllckJhc2UgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFNvbGRpZXJCYXNlXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxHYW1lQ3RybCA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmNhbWVyYSA9IG51bGw7XG4gICAgZS5jdHJQbGF5ID0gbnVsbDtcbiAgICBlLmJ1aWxkQnVsbGV0ID0gbnVsbDtcbiAgICBlLm5kQWdnRmxhZyA9IG51bGw7XG4gICAgZS5nYW1lRGF0YSA9IG51bGw7XG4gICAgZS5tYXBTaXplID0gY2Muc2l6ZSgxNTAwLCAyNjY4KTtcbiAgICBlLm1vdmVTaXplID0gY2Muc2l6ZSgxNTAwLCAyNjY4KTtcbiAgICBlLm5kQmcgPSBudWxsO1xuICAgIGUubmREb3duID0gbnVsbDtcbiAgICBlLm5kUGF0aCA9IG51bGw7XG4gICAgZS5uZFRyYWNrID0gbnVsbDtcbiAgICBlLm5kTWFpbiA9IG51bGw7XG4gICAgZS5uZFVJID0gbnVsbDtcbiAgICBlLmdhbWVTdGF0dXMgPSAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVTdGFnZS5QcmVwYXJlO1xuICAgIGUuZ2FtZVRhZyA9IFtdO1xuICAgIGUubW92ZURpciA9IGNjLnYyKDAsIDApO1xuICAgIGUudmVjMl8xID0gbmV3IGNjLlZlYzIoKTtcbiAgICBlLnZlYzJfMiA9IG5ldyBjYy5WZWMyKCk7XG4gICAgZS5pc0FnZyA9IGZhbHNlO1xuICAgIGUucGF0aEluZGV4ID0gMDtcbiAgICBlLm5kUGxheUFycjEgPSBbXTtcbiAgICBlLm5kUGxheUFycjIgPSBbXTtcbiAgICBlLm5kRW5lbXlBcnIgPSBbXTtcbiAgICBlLm5kQnVpbGRBcnIxID0gW107XG4gICAgZS5uZEJ1aWxkQXJyMiA9IFtdO1xuICAgIGUubmRTb2xkQXJyID0gW107XG4gICAgZS5kcm9wTGlzdCA9IFtdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmdhbWVEYXRhID0gbmV3ICR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuZGVmYXVsdCh0aGlzLCB0KTtcbiAgICB0aGlzLmN0clBsYXkuaW5pdERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkQnVsbGV0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5uZEFnZ0ZsYWcuYWN0aXZlID0gZmFsc2U7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0TWFwID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLm1vdmVTaXplID0gdC5nZXRDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMubmRCZyA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJuZEJnXCIpO1xuICAgIHRoaXMubWFwU2l6ZSA9IHRoaXMubmRCZy5nZXRDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMubmREb3duID0gdC5nZXRDaGlsZEJ5TmFtZShcIm5kRG93blwiKTtcbiAgICB0aGlzLm5kUGF0aCA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJuZFBhdGhcIik7XG4gICAgdGhpcy5uZFRyYWNrID0gdC5nZXRDaGlsZEJ5TmFtZShcIm5kVHJhY2tcIik7XG4gICAgdGhpcy5uZE1haW4gPSB0LmdldENoaWxkQnlOYW1lKFwibmRNYWluXCIpO1xuICAgIHRoaXMubmRVSSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJuZFVJXCIpO1xuICAgIHRoaXMuY3RyUGxheS5ub2RlLnNldFBhcmVudCh0aGlzLm5kTWFpbik7XG4gICAgdGhpcy5jdHJQbGF5Lm5vZGUuc2V0UG9zaXRpb24odGhpcy5uZFBhdGguZ2V0Q2hpbGRCeU5hbWUoXCJuZFN0YXJcIikucG9zaXRpb24pO1xuICAgIHRoaXMuY3RyUGxheS5uZFJhbmdlLnNldFBhcmVudCh0aGlzLm5kVUkpO1xuICAgIHRoaXMubmRBZ2dGbGFnLnNldFBhcmVudCh0aGlzLm5kTWFpbik7XG4gICAgdGhpcy5nYW1lRGF0YS5pbml0TWFwKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblJlc3RhcnQgPSBmdW5jdGlvbiAodCkge1xuICAgIHQgJiYgKHRoaXMuZ2FtZURhdGEuYnVmZkxpc3QgPSBbXSk7XG4gICAgdGhpcy5nYW1lRGF0YS5vblJlc3RhcnQodCk7XG4gICAgdGhpcy5jbGVhbk1hcCgpO1xuICAgIHRoaXMubW92ZURpciA9IGNjLnYyKDAsIDApO1xuICAgIHRoaXMuY3RyUGxheS5vblJlc3RhcnQodCk7XG4gICAgdGhpcy5jdHJQbGF5Lm5vZGUuc2V0UG9zaXRpb24odGhpcy5uZFBhdGguZ2V0Q2hpbGRCeU5hbWUoXCJuZFN0YXJcIikucG9zaXRpb24pO1xuICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsR2FtZVN0YWdlLlByZXBhcmU7XG4gICAgdGhpcy5pc0FnZyA9IGZhbHNlO1xuICAgIHRoaXMuY3RyUGxheS5uZEFnZy5hY3RpdmUgPSB0aGlzLmlzQWdnO1xuICAgIHRoaXMubmRBZ2dGbGFnLmFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUubW92ZUZ1biA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHQpIHtcbiAgICAgIGNjLlZlYzIubm9ybWFsaXplKHRoaXMubW92ZURpciwgdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZURpciA9IGNjLnYyKDAsIDApO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uTGF0ZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmN0clBsYXkubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgdGhpcy5jdHJQbGF5Lm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzIpO1xuICAgIHRoaXMuY3RyUGxheS5ub2RlLnpJbmRleCA9IE1hdGguZmxvb3IoY2Mud2luU2l6ZS5oZWlnaHQpIC0gTWF0aC5mbG9vcih0aGlzLnZlYzJfMS55KTtcbiAgICB0aGlzLnZlYzJfMS54ID0gY2MubWlzYy5jbGFtcGYodGhpcy52ZWMyXzEueCwgLXRoaXMubW92ZVNpemUud2lkdGggLyAyLCB0aGlzLm1vdmVTaXplLndpZHRoIC8gMik7XG4gICAgdGhpcy52ZWMyXzEueSA9IGNjLm1pc2MuY2xhbXBmKHRoaXMudmVjMl8xLnksIC10aGlzLm1vdmVTaXplLmhlaWdodCAvIDIsIHRoaXMubW92ZVNpemUuaGVpZ2h0IC8gMik7XG4gICAgdGhpcy5jdHJQbGF5Lm5vZGUuc2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHRoaXMuY3RyUGxheS5uZFJhbmdlLnNldFBvc2l0aW9uKHRoaXMudmVjMl8xKTtcbiAgICB0aGlzLnZlYzJfMi54ID0gY2MubWlzYy5jbGFtcGYodGhpcy52ZWMyXzIueCwgLXRoaXMubWFwU2l6ZS53aWR0aCAvIDIgKyBjYy53aW5TaXplLndpZHRoIC8gMiwgdGhpcy5tYXBTaXplLndpZHRoIC8gMiAtIGNjLndpblNpemUud2lkdGggLyAyKTtcbiAgICB0aGlzLnZlYzJfMi55ID0gY2MubWlzYy5jbGFtcGYodGhpcy52ZWMyXzIueSwgLXRoaXMubWFwU2l6ZS5oZWlnaHQgLyAyICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyLCB0aGlzLm1hcFNpemUuaGVpZ2h0IC8gMiAtIGNjLndpblNpemUuaGVpZ2h0IC8gMik7XG4gICAgdGhpcy5jYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLnZlYzJfMik7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0dXMpIHtcbiAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lU3RhZ2UuUHJlcGFyZTpcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdhbWVEYXRhLmdldEJ1bGlkTGlzdCgpO1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICBpZiAoLTEgIT0gKGwgPSBlW25dKS5nZXRTZWxsKCkpIHtcbiAgICAgICAgICAgIHZhciBpID0gbC5nZXRMb2NrUG9pbnQoKTtcbiAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHRoaXMuY3RyUGxheS5nZXRXcG9zKCksIGkpO1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwQnVsaWQgJiYgbC51dWlkID09IHRoaXMudXBCdWxpZC51dWlkKSB7XG4gICAgICAgICAgICAgICAgICBsLmRvVXBncmFkZSh0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGwuZG9VcGdyYWRlKHQsIGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwQnVsaWQgJiYgbC51dWlkID09IHRoaXMudXBCdWxpZC51dWlkICYmICh0aGlzLnVwQnVsaWQgPSBudWxsKTtcbiAgICAgICAgICAgICAgICBsLmRvVXBncmFkZSh0LCBhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbC5kb1VwZ3JhZGUodCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsLmRvVXBncmFkZSh0LCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Db21tZXJjZSh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsR2FtZVN0YWdlLkZpZ2h0OlxuICAgICAgICB0aGlzLmdhbWVEYXRhLm9uVXBkYXRhKHQpO1xuICAgICAgICB0aGlzLmN0clBsYXkub25VcGRhdGEodCk7XG4gICAgICAgIHRoaXMubmRQbGF5QXJyMi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbnVsbCA9PSBlIHx8IGUub25VcGRhdGUodCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5kRW5lbXlBcnIuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG51bGwgPT0gZSB8fCBlLm9uVXBkYXRlKHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uZFNvbGRBcnIuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG51bGwgPT0gZSB8fCBlLm9uVXBkYXRlKHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uZEJ1aWxkQXJyMi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbnVsbCA9PSBlIHx8IGUub25VcGRhdGUodCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmN0clBsYXkuZG9Nb3ZlKHRoaXMubW92ZURpciwgdCk7XG4gICAgdmFyIG8gPSB0aGlzLmdhbWVEYXRhLmdldEJ1bGlkTGlzdCgpO1xuICAgIGZvciAobiA9IDA7IG4gPCBvLmxlbmd0aDsgbisrKSB7XG4gICAgICAobCA9IG9bbl0pLm9uVXBkYXRlKHQpO1xuICAgIH1cbiAgICB2YXIgciA9IHRoaXMuZ2FtZURhdGEuZ2V0U29sZGllckxpc3QoKTtcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IHIubGVuZ3RoOyBzKyspIHtcbiAgICAgIChsID0gcltzXSkub25VcGRhdGUodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQWdnICYmICh0aGlzLmN0clBsYXkubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSksIGNjLlZlYzIuc3VidHJhY3QodGhpcy52ZWMyXzIsIHRoaXMudmVjMl8xLCB0aGlzLnBhdGhMaXN0W3RoaXMucGF0aExpc3QubGVuZ3RoIC0gMV0ucG9zKSwgdGhpcy52ZWMyXzIubWFnKCkgPiAyMCAmJiB0aGlzLmFkZFBhdGhOb2RlKCksIHRoaXMucGF0aExpc3QubGVuZ3RoID49IDFlMykpIHtcbiAgICAgIGUgPSB0aGlzLmdhbWVEYXRhLmdldFNvbGRpZXJMaXN0KCk7XG4gICAgICBmb3IgKHMgPSAwOyBzIDwgZS5sZW5ndGg7IHMrKykge1xuICAgICAgICB2YXIgbDtcbiAgICAgICAgKGwgPSBlW3NdKS5zZXRQYXRoKHRoaXMucGF0aExpc3QsIHRydWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXRoTGlzdC5zbGljZSgwLCA1MDApO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uQ29tbWVyY2UgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmN0clBsYXkubm9kZS5nZXRQb3NpdGlvbih0aGlzLnZlYzJfMSk7XG4gICAgaWYgKHRoaXMuZ2FtZURhdGEuYXBwZWFyQnVzaW5lc3NQb2ludHMgJiYgdGhpcy5nYW1lRGF0YS5hcHBlYXJCdXNpbmVzc1BvaW50cy5nZXRJbkNsaWNrKHRoaXMudmVjMl8xLCB0KSkge1xuICAgICAgdGhpcy5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVQYXVzZSwgdHJ1ZSk7XG4gICAgICB2YXIgbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5HYW1lUGF1c2UsIGZhbHNlKTtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLm1hcF9jb2luKTtcbiAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLnBheV9tYXBfY29pbl9ZLCAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCkpO1xuICAgICAgICAgIGUuZ2FtZURhdGEuYXBwZWFyQnVzaW5lc3NQb2ludHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBlLmdhbWVEYXRhLmNvaW4gKz0gZS5nYW1lRGF0YS5hcHBlYXJCdXNpbmVzc1BvaW50cy5jb2luTnVtO1xuICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJVGlwcywgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCAkejFVdGlscy5VdGlscy5TdHJpbmdGb3JtYXQoZS5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkdhbWVDb20wMSksIGUuZ2FtZURhdGEuYXBwZWFyQnVzaW5lc3NQb2ludHMuY29pbk51bSkpO1xuICAgICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5pbml0VmlldygpO1xuICAgICAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLm5kQ29pbjtcbiAgICAgICAgICB2YXIgaSA9IGNjLnYyKG4ucG9zaXRpb24ueCArIG4uY2hpbGRyZW5bMF0ueCwgbi5wb3NpdGlvbi55ICsgbi5jaGlsZHJlblswXS55KTtcbiAgICAgICAgICB2YXIgYSA9IGUuZ2FtZURhdGEuYXBwZWFyQnVzaW5lc3NQb2ludHMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgIHZhciBvID0gZS5jYW1lcmEuZ2V0V29ybGRUb1NjcmVlblBvaW50KGEpO1xuICAgICAgICAgIHZhciByID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0clVJLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobyk7XG4gICAgICAgICAgdmFyIHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNjLmluc3RhbnRpYXRlKG4uY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdC5zY2FsZSA9IC41O1xuICAgICAgICAgICAgdC5zZXRQYXJlbnQoJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0clVJLm5vZGUpO1xuICAgICAgICAgICAgdmFyIGUgPSBjYy52MigpO1xuICAgICAgICAgICAgY2MuVmVjMi5yYW5kb20oZSwgNDApO1xuICAgICAgICAgICAgY2MudHdlZW4odCkuc2V0KHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKHIueCwgci55LCAwKVxuICAgICAgICAgICAgfSkuYnkoLjIsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKGUueCwgZS55LCAwKVxuICAgICAgICAgICAgfSkudG8oMSwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjMoaS54LCBpLnksIDApLFxuICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgMTA7IGwrKykge1xuICAgICAgICAgICAgcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLmdhbWVEYXRhLmFwcGVhckJ1c2luZXNzUG9pbnRzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLmdhbWVEYXRhLmFwcGVhckJ1c2luZXNzUG9pbnRzLmluaXQoMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAoZnVuY3Rpb24odWQpIHtcbiAgICAgICAgaWYgKHVkLmdldERpYW1vbmROdW0oKSA8IDUwKSB7XG4gICAgICAgICAgZS5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVQYXVzZSwgZmFsc2UpO1xuICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlCUFNob3ApO1xuICAgICAgICAgIG4oZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVkLnN1YkRpYW1vbmROdW0oNTApO1xuICAgICAgICAgIG4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkZsYWdXZWFwb25dICYmIHRoaXMuZ2FtZURhdGEud2VhcG9uQnVzaW5lc3NQb2ludHMuZ2V0SW5DbGljayh0aGlzLnZlYzJfMSwgdCkpIHtcbiAgICAgIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5HYW1lUGF1c2UsIHRydWUpO1xuICAgICAgdmFyIGkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBlLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCBmYWxzZSk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5tYXBfd2VhcG9uKTtcbiAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLnBheV9tYXBfd2VhcG9uX1ksICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0TWF4U3RhZ2UoKSk7XG4gICAgICAgICAgZS5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuRmxhZ1dlYXBvbl0gPSAxO1xuICAgICAgICAgIGUuZ2FtZURhdGEud2VhcG9uQnVzaW5lc3NQb2ludHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBlLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5BdHRhY2tdID0gLjU7XG4gICAgICAgICAgZS5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuQXR0YWNrU3BlZWRdID0gLjU7XG4gICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlUaXBzLCAkejFDb25maWcuVUlJRC5VSU5PTkUsIGUuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5HYW1lQ29tMDIpKTtcbiAgICAgICAgICBlLmN0clBsYXkuY3RyUGxheUFuaS5zZXRCdXMoMSk7XG4gICAgICAgICAgZS5zYXZlR2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUuZ2FtZURhdGEud2VhcG9uQnVzaW5lc3NQb2ludHMuaW5pdCgxKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIChmdW5jdGlvbih1ZCkge1xuICAgICAgICBpZiAodWQuZ2V0RGlhbW9uZE51bSgpIDwgNTApIHtcbiAgICAgICAgICBlLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCBmYWxzZSk7XG4gICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUJQU2hvcCk7XG4gICAgICAgICAgaShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWQuc3ViRGlhbW9uZE51bSg1MCk7XG4gICAgICAgICAgaSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKSk7XG4gICAgfVxuICAgIGlmICgxID09IHRoaXMuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkZsYWdXZWFwb25dICYmICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsU3dpdGNoLmlzTWFwU2hvcFNlY29uZE9wZW4oKSAmJiB0aGlzLmdhbWVEYXRhLndlYXBvbkJ1c2luZXNzUG9pbnRzLmdldEluQ2xpY2sodGhpcy52ZWMyXzEsIHQpKSB7XG4gICAgICB0aGlzLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCB0cnVlKTtcbiAgICAgIHZhciBhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZS5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVQYXVzZSwgZmFsc2UpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuYXJyb3cyKTtcbiAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLnBheV9hcnJvdzJfWSwgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRNYXhTdGFnZSgpKTtcbiAgICAgICAgICBlLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5GbGFnV2VhcG9uXSA9IDI7XG4gICAgICAgICAgZS5nYW1lRGF0YS53ZWFwb25CdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGUuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkF0dGFja10gPSAxO1xuICAgICAgICAgIGUuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkF0dGFja1NwZWVkXSA9IDE7XG4gICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxQ29uZmlnLlVJSUQuVUlUaXBzLCAkejFDb25maWcuVUlJRC5VSU5PTkUsIGUuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5HYW1lQ29tMDIpKTtcbiAgICAgICAgICBlLmN0clBsYXkuY3RyUGxheUFuaS5zZXRCdXMoMyk7XG4gICAgICAgICAgZS5zYXZlR2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUuZ2FtZURhdGEud2VhcG9uQnVzaW5lc3NQb2ludHMuaW5pdCgyKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIChmdW5jdGlvbih1ZCkge1xuICAgICAgICBpZiAodWQuZ2V0RGlhbW9uZE51bSgpIDwgNTApIHtcbiAgICAgICAgICBlLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCBmYWxzZSk7XG4gICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUJQU2hvcCk7XG4gICAgICAgICAgYShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWQuc3ViRGlhbW9uZE51bSg1MCk7XG4gICAgICAgICAgYSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuRmxhZ0hvcnNlXSAmJiB0aGlzLmdhbWVEYXRhLmhvcnNlQnVzaW5lc3NQb2ludHMuZ2V0SW5DbGljayh0aGlzLnZlYzJfMSwgdCkpIHtcbiAgICAgIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5HYW1lUGF1c2UsIHRydWUpO1xuICAgICAgdmFyIG8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBlLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCBmYWxzZSk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5tYXBfaG9yc2UpO1xuICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQucGF5X21hcF9ob3JzZV9ZLCAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCkpO1xuICAgICAgICAgIGUuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkZsYWdIb3JzZV0gPSAxO1xuICAgICAgICAgIGUuZ2FtZURhdGEuaG9yc2VCdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGUuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLlNwZWVkXSA9IC41O1xuICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJVGlwcywgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCBlLlQoJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuR2FtZUNvbTAzKSk7XG4gICAgICAgICAgZS5jdHJQbGF5LmN0clBsYXlBbmkuc2V0QnVzKDIpO1xuICAgICAgICAgIGUuc2F2ZUdhbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLmdhbWVEYXRhLmhvcnNlQnVzaW5lc3NQb2ludHMuaW5pdCgxKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIChmdW5jdGlvbih1ZCkge1xuICAgICAgICBpZiAodWQuZ2V0RGlhbW9uZE51bSgpIDwgNTApIHtcbiAgICAgICAgICBlLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCBmYWxzZSk7XG4gICAgICAgICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUJQU2hvcCk7XG4gICAgICAgICAgbyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWQuc3ViRGlhbW9uZE51bSg1MCk7XG4gICAgICAgICAgbyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKSk7XG4gICAgfVxuICAgIGlmICgxID09IHRoaXMuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkZsYWdIb3JzZV0gJiYgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTd2l0Y2guaXNNYXBTaG9wU2Vjb25kT3BlbigpICYmIHRoaXMuZ2FtZURhdGEuaG9yc2VCdXNpbmVzc1BvaW50cy5nZXRJbkNsaWNrKHRoaXMudmVjMl8xLCB0KSkge1xuICAgICAgdGhpcy5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVQYXVzZSwgdHJ1ZSk7XG4gICAgICB2YXIgciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5HYW1lUGF1c2UsIGZhbHNlKTtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmhvcnNlMik7XG4gICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5wYXlfaG9yc2UyX1ksICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0TWF4U3RhZ2UoKSk7XG4gICAgICAgICAgZS5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuRmxhZ0hvcnNlXSA9IDI7XG4gICAgICAgICAgZS5nYW1lRGF0YS5ob3JzZUJ1c2luZXNzUG9pbnRzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgZS5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuU3BlZWRdID0gMTtcbiAgICAgICAgICAkejFVSU1nci5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSSgkejFDb25maWcuVUlJRC5VSVRpcHMsICR6MUNvbmZpZy5VSUlELlVJTk9ORSwgZS5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkdhbWVDb20wMykpO1xuICAgICAgICAgIGUuY3RyUGxheS5jdHJQbGF5QW5pLnNldEJ1cyg0KTtcbiAgICAgICAgICBlLnNhdmVHYW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5nYW1lRGF0YS5ob3JzZUJ1c2luZXNzUG9pbnRzLmluaXQoMik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAoZnVuY3Rpb24odWQpIHtcbiAgICAgICAgaWYgKHVkLmdldERpYW1vbmROdW0oKSA8IDUwKSB7XG4gICAgICAgICAgZS5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVQYXVzZSwgZmFsc2UpO1xuICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlCUFNob3ApO1xuICAgICAgICAgIHIoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVkLnN1YkRpYW1vbmROdW0oNTApO1xuICAgICAgICAgIHIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmNoYW5nZUFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0FnZykge1xuICAgICAgdmFyIHQgPSB0aGlzLmdhbWVEYXRhLmdldFNvbGRpZXJMaXN0KCk7XG4gICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHQubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgdFtlXS5zZXRQYXRoKHRoaXMucGF0aExpc3QsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pc0FnZyA9ICF0aGlzLmlzQWdnO1xuICAgIGlmICh0aGlzLmlzQWdnKSB7XG4gICAgICB0aGlzLm5kQWdnRmxhZy5GbGFnID0gMDtcbiAgICAgIHRoaXMucGF0aEluZGV4ID0gMDtcbiAgICAgIHRoaXMucGF0aExpc3QgPSBbXTtcbiAgICAgIHRoaXMuYWRkUGF0aE5vZGUoKTtcbiAgICB9XG4gICAgc3dpdGNoICgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQYXJhbWV0ZXIuRm9sbG93TW9kZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAodGhpcy5uZEFnZ0ZsYWcuRmxhZykge1xuICAgICAgICAgIHRoaXMubmRBZ2dGbGFnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5uZEFnZ0ZsYWcuc2V0UG9zaXRpb24odGhpcy5wYXRoTGlzdFswXS5wb3MpO1xuICAgICAgICAgIHRoaXMubmRBZ2dGbGFnLnpJbmRleCA9IE1hdGguZmxvb3IoY2Mud2luU2l6ZS5oZWlnaHQpIC0gTWF0aC5mbG9vcih0aGlzLnBhdGhMaXN0WzBdLnBvcy55KTtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMubmRBZ2dGbGFnLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgbi5zZXRBbmltYXRpb24oMCwgXCJjbGlja1wiLCBmYWxzZSk7XG4gICAgICAgICAgbi5hZGRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmN0clBsYXkubmRBZ2cuYWN0aXZlID0gdGhpcy5pc0FnZztcbiAgICAgICAgdGhpcy5uZEFnZ0ZsYWcuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYWRkUGF0aE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jdHJQbGF5Lm5vZGUuZ2V0UG9zaXRpb24odGhpcy52ZWMyXzEpO1xuICAgIHRoaXMucGF0aExpc3QucHVzaCh7XG4gICAgICBpbmRleDogdGhpcy5wYXRoSW5kZXgrKyxcbiAgICAgIHBvczogdGhpcy52ZWMyXzEuY2xvbmUoKVxuICAgIH0pO1xuICAgIHZhciB0ID0gdGhpcy5nYW1lRGF0YS5nZXRTb2xkaWVyTGlzdCgpO1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG4gPSB0W2VdO1xuICAgICAgbi5ub2RlLmdldFBvc2l0aW9uKHRoaXMudmVjMl8yKTtcbiAgICAgIGNjLlZlYzIuc3VidHJhY3QodGhpcy52ZWMyXzIsIHRoaXMudmVjMl8yLCB0aGlzLnZlYzJfMSk7XG4gICAgICBzd2l0Y2ggKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Gb2xsb3dNb2RlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBuLnN0YXJ0QWdnKHRoaXMucGF0aExpc3RbdGhpcy5wYXRoTGlzdC5sZW5ndGggLSAxXSkgJiYgdGhpcy5uZEFnZ0ZsYWcuRmxhZysrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy52ZWMyXzIubWFnKCkgPCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQYXJhbWV0ZXIuRm9sbG93UmFuZ2UgJiYgbi5zdGFydEFnZyh0aGlzLnBhdGhMaXN0W3RoaXMucGF0aExpc3QubGVuZ3RoIC0gMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uUGF1c2VHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3RyUGxheS5zZXRQYXVzZSh0cnVlKTtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZURhdGEuZ2V0RW5lbXlMaXN0KCk7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICB0W2VdLnNldFBhdXNlKHRydWUpO1xuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuZ2FtZURhdGEuZ2V0U29sZGllckxpc3QoKTtcbiAgICBmb3IgKGUgPSAwOyBlIDwgbi5sZW5ndGg7IGUrKykge1xuICAgICAgbltlXS5zZXRQYXVzZSh0cnVlKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblJlc3VtZUdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jdHJQbGF5LnNldFBhdXNlKGZhbHNlKTtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZURhdGEuZ2V0RW5lbXlMaXN0KCk7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICB0W2VdLnNldFBhdXNlKGZhbHNlKTtcbiAgICB9XG4gICAgdmFyIG4gPSB0aGlzLmdhbWVEYXRhLmdldFNvbGRpZXJMaXN0KCk7XG4gICAgZm9yIChlID0gMDsgZSA8IG4ubGVuZ3RoOyBlKyspIHtcbiAgICAgIG5bZV0uc2V0UGF1c2UoZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmVuZFJvdW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVEaXIgPSBjYy52MigwLCAwKTtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZURhdGEuZW5kUm91bmRHYW1lKCk7XG4gICAgdmFyIGUgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UubmRDb2luO1xuICAgIHZhciBuID0gY2MudjIoZS5wb3NpdGlvbi54ICsgZS5jaGlsZHJlblswXS54LCBlLnBvc2l0aW9uLnkgKyBlLmNoaWxkcmVuWzBdLnkpO1xuICAgIHZhciBpID0gdFswXS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0WzBdLm5kSHAuZ2V0UG9zaXRpb24oKSk7XG4gICAgdmFyIGEgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZFRvU2NyZWVuUG9pbnQoaSk7XG4gICAgdmFyIG8gPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyVUkubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihhKTtcbiAgICB2YXIgciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ID0gY2MuaW5zdGFudGlhdGUoZS5jaGlsZHJlblswXSk7XG4gICAgICB0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0LnNjYWxlID0gLjU7XG4gICAgICB0LnNldFBhcmVudCgkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyVUkubm9kZSk7XG4gICAgICB2YXIgaSA9IGNjLnYyKCk7XG4gICAgICBjYy5WZWMyLnJhbmRvbShpLCA0MCk7XG4gICAgICBjYy50d2Vlbih0KS5zZXQoe1xuICAgICAgICBwb3NpdGlvbjogY2MudjMoby54LCBvLnksIDApXG4gICAgICB9KS5ieSguMiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMoaS54LCBpLnksIDApXG4gICAgICB9KS50bygxLCB7XG4gICAgICAgIHBvc2l0aW9uOiBjYy52MyhuLngsIG4ueSwgMCksXG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5kZXN0cm95KCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH07XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCAxMDsgcysrKSB7XG4gICAgICByKCk7XG4gICAgfVxuICAgIHZhciBsID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgIHZhciBhID0gdFtpXTtcbiAgICAgIHZhciBvID0gYS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhLm5kSHAuZ2V0UG9zaXRpb24oKSk7XG4gICAgICB2YXIgciA9IGMuY2FtZXJhLmdldFdvcmxkVG9TY3JlZW5Qb2ludChvKTtcbiAgICAgIHZhciBzID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0clVJLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocik7XG4gICAgICB2YXIgbCA9IGNjLmluc3RhbnRpYXRlKGUuY2hpbGRyZW5bMF0pO1xuICAgICAgbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgbC5zY2FsZSA9IC41O1xuICAgICAgbC5zZXRQYXJlbnQoJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0clVJLm5vZGUpO1xuICAgICAgY2MudHdlZW4obCkuc2V0KHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKHMueCwgcy55LCAwKVxuICAgICAgfSkudG8oMSwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54LCBuLnksIDApLFxuICAgICAgICBzY2FsZTogMVxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGwuZGVzdHJveSgpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9O1xuICAgIHZhciBjID0gdGhpcztcbiAgICBmb3IgKHMgPSAxOyBzIDwgdC5sZW5ndGg7IHMrKykge1xuICAgICAgbChzKTtcbiAgICB9XG4gICAgdGhpcy5fdW5zdHVja1BsYXllckZyb21SdWlucygpO1xuICAgIHRoaXMuY2xlYW5NYXAoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl91bnN0dWNrUGxheWVyRnJvbVJ1aW5zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmN0clBsYXkuZ2V0V3BvcygpO1xuICAgIHZhciBidWlsZExpc3QgPSB0aGlzLmdhbWVEYXRhLmdldEJ1bGlkTGlzdCgpO1xuICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYnVpbGRMaXN0Lmxlbmd0aDsgYisrKSB7XG4gICAgICB2YXIgcG9seXMgPSBidWlsZExpc3RbYl0uZ2V0V3Bvc1BoeUNvbCgpO1xuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwb2x5cy5sZW5ndGg7IHArKykge1xuICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHBsYXllclBvcywgcG9seXNbcF0pKSB7XG4gICAgICAgICAgdGhpcy5jdHJQbGF5Lm5vZGUuc2V0UG9zaXRpb24odGhpcy5uZFBhdGguZ2V0Q2hpbGRCeU5hbWUoXCJuZFN0YXJcIikucG9zaXRpb24pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmNsZWFuTWFwID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5uZFBsYXlBcnIyLmxlbmd0aDsgdCsrKSB7XG4gICAgICB0aGlzLm5kUGxheUFycjJbdF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubmRQbGF5QXJyMS5wdXNoKHRoaXMubmRQbGF5QXJyMlt0XS5ub2RlKTtcbiAgICB9XG4gICAgdGhpcy5uZFBsYXlBcnIyID0gW107XG4gICAgdGhpcy5uZEVuZW15QXJyLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuZnJlZU5vZGUoZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMubmRFbmVteUFyciA9IFtdO1xuICAgIHRoaXMubmRTb2xkQXJyLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuZnJlZU5vZGUoZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMubmRTb2xkQXJyID0gW107XG4gICAgZm9yICh0ID0gMDsgdCA8IHRoaXMubmRCdWlsZEFycjIubGVuZ3RoOyB0KyspIHtcbiAgICAgIHRoaXMubmRCdWlsZEFycjJbdF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubmRCdWlsZEFycjEucHVzaCh0aGlzLm5kQnVpbGRBcnIyW3RdLm5vZGUpO1xuICAgIH1cbiAgICB0aGlzLm5kQnVpbGRBcnIyID0gW107XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRFbmVteSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmICgtMSAhPSB0KSB7XG4gICAgICB2YXIgaSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0U29sZGllckNmZ0J5SWQodCk7XG4gICAgICB2YXIgYSA9ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBvb2xOYW1lLkVuZW15ICsgXCJfXCIgKyBpLklEO1xuICAgICAgdmFyIG8gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICBpLnNldFBhcmVudChuLm5kTWFpbik7XG4gICAgICAgIGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFyIGEgPSBuLm5kUGF0aC5nZXRDaGlsZEJ5TmFtZShcIm5kRW5lbXlcIiArIGUpO1xuICAgICAgICBpLnNldFBvc2l0aW9uKGEucG9zaXRpb24pO1xuICAgICAgICB2YXIgbyA9IGkuZ2V0Q29tcG9uZW50KCR6MUtpbmdodEZhbGxFbmVteUJhc2UuZGVmYXVsdCk7XG4gICAgICAgIG8uaW5pdERhdGEodCwgZSk7XG4gICAgICAgIG4uZ2FtZURhdGEuYWRkRW5lbXkobyk7XG4gICAgICB9O1xuICAgICAgdmFyIHIgPSAkejFQb29sTWdyLlBvb2xNZ3IuZ2V0SW5zdGFuY2UoKS5nZXROb2RlKGEpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgbyhyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZFByZWZhYigkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkVuZW15LCBpLnByZWZhYiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICAgJHoxUG9vbE1nci5Qb29sTWdyLmdldEluc3RhbmNlKCkuY3JlYXRyZVBvb2woYSwgY2MuaW5zdGFudGlhdGUodCksIDEwKTtcbiAgICAgICAgICBvKHIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRTb2xkaWVyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgdmFyIGkgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFNvbGRpZXJDZmdCeUlkKHQpO1xuICAgIHZhciBhID0gJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUG9vbE5hbWUuU29sZGllciArIFwiX1wiICsgaS5JRDtcbiAgICB2YXIgbyA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICBpLnNldFBhcmVudChuLm5kTWFpbik7XG4gICAgICBpLmFjdGl2ZSA9IHRydWU7XG4gICAgICB2YXIgYSA9IGkuZ2V0Q29tcG9uZW50KCR6MUtpbmdodEZhbGxTb2xkaWVyQmFzZS5kZWZhdWx0KTtcbiAgICAgIGEuaW5pdERhdGEodCk7XG4gICAgICBuLmdhbWVEYXRhLmFkZFNvbGRpZXIoYSk7XG4gICAgICBlKGEpO1xuICAgIH07XG4gICAgdmFyIHIgPSAkejFQb29sTWdyLlBvb2xNZ3IuZ2V0SW5zdGFuY2UoKS5nZXROb2RlKGEpO1xuICAgIGlmIChyKSB7XG4gICAgICBvKHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRQcmVmYWIoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5FbmVteSwgXCJQbGF5XCIgKyBpLnByZWZhYiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgciA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAkejFQb29sTWdyLlBvb2xNZ3IuZ2V0SW5zdGFuY2UoKS5jcmVhdHJlUG9vbChhLCBjYy5pbnN0YW50aWF0ZSh0KSwgMSk7XG4gICAgICAgIG8ocik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRQYXRoID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZTtcbiAgICB2YXIgbiA9IHtcbiAgICAgIGJvcm5JbmRleDogdCxcbiAgICAgIHBhdGhMaXN0OiBbXSxcbiAgICAgIG5vZGVJbmRleDogMFxuICAgIH07XG4gICAgdmFyIGkgPSBbXTtcbiAgICB2YXIgYSA9IHRoaXMuZ2FtZURhdGEuZ2V0QnVsaWRMaXN0KCk7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCBhLmxlbmd0aDsgbysrKSB7XG4gICAgICAobCA9IGFbb10pLmdldElzTG9jaygpICYmIGkucHVzaChsLklEKTtcbiAgICB9XG4gICAgdmFyIHIgPSB0aGlzLm5kUGF0aC5nZXRDb21wb25lbnRzSW5DaGlsZHJlbigkejFLaW5naHRGYWxsUGF0aEluZm8uZGVmYXVsdCk7XG4gICAgdmFyIHMgPSBbXTtcbiAgICBmb3IgKG8gPSAwOyBvIDwgci5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIGw7XG4gICAgICBpZiAoKGwgPSByW29dKS5uZExvY2tMaXN0LmluY2x1ZGVzKHQpKSB7XG4gICAgICAgIGlmICgwID09IGwubmRCdWlsZExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgcy5wdXNoKGwubm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBpLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBpZiAobC5uZEJ1aWxkTGlzdC5pbmNsdWRlcyhpW2NdKSkge1xuICAgICAgICAgICAgICBzLnB1c2gobC5ub2RlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIChlID0gbi5wYXRoTGlzdCkucHVzaC5hcHBseShlLCBzWyR6MVV0aWxzLlV0aWxzLnJhbmRvbVJhbmcoMCwgcy5sZW5ndGgpXS5jaGlsZHJlbik7XG4gICAgcmV0dXJuIG47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblBsYXlBdHRhY2sgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB2YXIgbiA9IHRoaXMubmRQbGF5QXJyMS5zaGlmdCgpO1xuICAgIG4gfHwgKG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN0clBsYXkuY3RyQXJyLm5vZGUpKS5zZXRQYXJlbnQodGhpcy5uZFVJKTtcbiAgICBuLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICBuLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIGkgPSB0aGlzLmN0clBsYXkuZ2V0QXR0V3BvcygpO1xuICAgIHZhciBhID0gdGhpcy5uZFVJLmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgIG4uc2V0UG9zaXRpb24oYSk7XG4gICAgdmFyIG8gPSBuLmdldENvbXBvbmVudCgkejFLaW5naHRGYWxsQnVsbGV0UGxheS5kZWZhdWx0KTtcbiAgICBvLnNldFNraW4odGhpcy5jdHJQbGF5LmN0clBsYXlBbmkuYXJyTmFtZSk7XG4gICAgdGhpcy5uZFBsYXlBcnIyLnB1c2gobyk7XG4gICAgdmFyIHIgPSB0aGlzLmN0clBsYXkuZ2V0QXR0YWNrKHQpO1xuICAgIHZhciBzID0gdGhpcy5jdHJQbGF5LmNyaXQgPj0gTWF0aC5yYW5kb20oKTtcbiAgICBzICYmIChyICo9IHRoaXMuY3RyUGxheS5jcml0RGFtKTtcbiAgICBvLnNldFRhZyhhLCB0Lm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgICBpZiAoISR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLmdldEd1aWRlVGlwcygyKSkge1xuICAgICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJVSS5zZXRHdWlkZShudWxsKTtcbiAgICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5zZXRHdWlkZVRpcHMoMik7XG4gICAgICAgIH1cbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckVmZmVjdC5zaG93RGFtYWdlTnVtKHQubm9kZS5nZXRQb3NpdGlvbigpLCByLCBzKTtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckVmZmVjdC5vbk1vbnN0ZXJBdHRhY2sodC5ub2RlLmdldFBvc2l0aW9uKCksIFwiamlhbl9cIiArIGUuY3RyUGxheS5jdHJQbGF5QW5pLmFyck5hbWUpO1xuICAgICAgICBuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0Lm9uQXR0YWNrZWQocik7XG4gICAgICAgIHZhciBpID0gZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjA4KTtcbiAgICAgICAgaSAmJiB0LmlzRGVhZCgpICYmIGUuY3RyUGxheS5hZGRIcFBybyhpLlBhbWVyWzBdKTtcbiAgICAgICAgdmFyIGEgPSBlLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMTUpO1xuICAgICAgICBhICYmIHQuYWRkQnVmZigkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlLk1vdmVTcGVlZCwge1xuICAgICAgICAgIHN1Yk51bTogYS5QYW1lclswXSxcbiAgICAgICAgICB0aW1lOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZnJlZUJ1bGxldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLm5kUGxheUFycjIubGVuZ3RoOyBlKyspIHtcbiAgICAgIGlmICh0aGlzLm5kUGxheUFycjJbZV0udXVpZCA9PSB0LnV1aWQpIHtcbiAgICAgICAgdGhpcy5uZFBsYXlBcnIyLnNwbGljZShlLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5kUGxheUFycjEucHVzaCh0Lm5vZGUpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25TaG90RW5lbXkgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdC5nZXRCdWxsZXQoKTtcbiAgICBlLnNldFBhcmVudCh0aGlzLm5kVUkpO1xuICAgIGUuc2V0U2libGluZ0luZGV4KDApO1xuICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgbiA9IHQuZ2V0QXR0V3BvcygpO1xuICAgIHZhciBpID0gdGhpcy5uZFVJLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgIGUuc2V0UG9zaXRpb24oaSk7XG4gICAgdmFyIGEgPSBlLmdldENvbXBvbmVudCgkejFLaW5naHRGYWxsQnVsbGV0RW5lbXkuZGVmYXVsdCk7XG4gICAgdGhpcy5uZEVuZW15QXJyLnB1c2goYSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN0cjogYSxcbiAgICAgIHBvczogaVxuICAgIH07XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5mcmVlRW5lbXlCdWxsZXQgPSBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5uZEVuZW15QXJyLmxlbmd0aDsgZSsrKSB7XG4gICAgICBpZiAodGhpcy5uZEVuZW15QXJyW2VdLnV1aWQgPT0gdC51dWlkKSB7XG4gICAgICAgIHRoaXMubmRFbmVteUFyci5zcGxpY2UoZSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uU2hvdEJ1aWxkID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICB2YXIgbiA9IHRoaXMubmRCdWlsZEFycjEuc2hpZnQoKTtcbiAgICBuIHx8IChuID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWlsZEJ1bGxldC5ub2RlKSkuc2V0UGFyZW50KHRoaXMubmRVSSk7XG4gICAgbi5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgbi5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gdC5nZXRBdHRQb3MoKTtcbiAgICBuLnNldFBvc2l0aW9uKGkpO1xuICAgIHZhciBhID0gbi5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEJ1bGxldEJ1aWxkLmRlZmF1bHQpO1xuICAgIHRoaXMubmRCdWlsZEFycjIucHVzaChhKTtcbiAgICB2YXIgbyA9IHQuZ2V0QXR0YWNrKCk7XG4gICAgYS5zZXRUYWcoaSwgZS5ub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckVmZmVjdC5zaG93RGFtYWdlTnVtKGUubm9kZS5nZXRQb3NpdGlvbigpLCBvKTtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckVmZmVjdC5vbk1vbnN0ZXJBdHRhY2soZS5ub2RlLmdldFBvc2l0aW9uKCksIFwiamlhbl9sdjFcIik7XG4gICAgICAgIG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGUub25BdHRhY2tlZChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmZyZWVCdWlsZEJ1bGxldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLm5kQnVpbGRBcnIyLmxlbmd0aDsgZSsrKSB7XG4gICAgICBpZiAodGhpcy5uZEJ1aWxkQXJyMltlXS51dWlkID09IHQudXVpZCkge1xuICAgICAgICB0aGlzLm5kQnVpbGRBcnIyLnNwbGljZShlLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5kQnVpbGRBcnIxLnB1c2godC5ub2RlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uU2hvdFNvbGRpZXIgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdC5nZXRCdWxsZXQoKTtcbiAgICBlLnNldFBhcmVudCh0aGlzLm5kVUkpO1xuICAgIGUuc2V0U2libGluZ0luZGV4KDApO1xuICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgbiA9IHQuZ2V0QXR0V3BvcygpO1xuICAgIHZhciBpID0gdGhpcy5uZFVJLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgIGUuc2V0UG9zaXRpb24oaSk7XG4gICAgdmFyIGEgPSBlLmdldENvbXBvbmVudCgkejFLaW5naHRGYWxsQnVsbGV0U29sZGllci5kZWZhdWx0KTtcbiAgICB0aGlzLm5kU29sZEFyci5wdXNoKGEpO1xuICAgIHJldHVybiB7XG4gICAgICBjdHI6IGEsXG4gICAgICBwb3M6IGlcbiAgICB9O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZnJlZVNvbGRpZXJCdWxsZXQgPSBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5uZFNvbGRBcnIubGVuZ3RoOyBlKyspIHtcbiAgICAgIGlmICh0aGlzLm5kU29sZEFycltlXS51dWlkID09IHQudXVpZCkge1xuICAgICAgICB0aGlzLm5kU29sZEFyci5zcGxpY2UoZSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uRHJvcEl0ZW0gPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuZHJvcExpc3QucHVzaCh7XG4gICAgICBuZEl0ZW06IG51bGwsXG4gICAgICB0eXBlOiB0XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkNoYW5nZVNwZWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3RyUGxheS5jdHJQbGF5QW5pLm9uQ2hhbmdlU3BlZWQoKTtcbiAgICB0aGlzLmdhbWVEYXRhLm9uQ2hhbmdlU3BlZWQoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmxvYWRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGEoKS5oYXNTYXZlKHRoaXMuZ2FtZURhdGEubGV2ZWxDZmcuTGV2ZWwpKSB7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldFJvdW5kKCk7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YSgpLmdldEJ1ZmZMaXN0KCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB0LmdhbWVEYXRhLmFkZEdhbWVCdWZmKGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhKCkuZ2V0QnVpbGRJbmZvTGlzdCgpO1xuICAgICAgdmFyIG4gPSB0aGlzLmdhbWVEYXRhLmdldEJ1bGlkTGlzdCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhID0gbltpXTtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgdmFyIHIgPSBlW29dO1xuICAgICAgICAgIGEuSUQgPT0gci5wb2ludCAmJiBhLnNldFNhdmUocik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZ2FtZURhdGEuYnVzaW5lc3NBZGQgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YSgpLmdldEJ1c2luZXNzTGlzdCgpO1xuICAgICAgaWYgKDEgPT0gdGhpcy5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuRmxhZ1dlYXBvbl0pIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuQXR0YWNrXSA9IC41O1xuICAgICAgICB0aGlzLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5BdHRhY2tTcGVlZF0gPSAuNTtcbiAgICAgICAgdGhpcy5jdHJQbGF5LmN0clBsYXlBbmkuc2V0QnVzKDEpO1xuICAgICAgfVxuICAgICAgaWYgKDIgPT0gdGhpcy5nYW1lRGF0YS5idXNpbmVzc0FkZFskejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUuRmxhZ1dlYXBvbl0gJiYgJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTd2l0Y2guaXNNYXBTaG9wU2Vjb25kT3BlbigpKSB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLkF0dGFja10gPSAxO1xuICAgICAgICB0aGlzLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5BdHRhY2tTcGVlZF0gPSAxO1xuICAgICAgICB0aGlzLmN0clBsYXkuY3RyUGxheUFuaS5zZXRCdXMoMyk7XG4gICAgICB9XG4gICAgICBpZiAoMSA9PSB0aGlzLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5GbGFnSG9yc2VdKSB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEuYnVzaW5lc3NBZGRbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlLlNwZWVkXSA9IC41O1xuICAgICAgICB0aGlzLmN0clBsYXkuY3RyUGxheUFuaS5zZXRCdXMoMik7XG4gICAgICB9XG4gICAgICBpZiAoMiA9PSB0aGlzLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5GbGFnSG9yc2VdICYmICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsU3dpdGNoLmlzTWFwU2hvcFNlY29uZE9wZW4oKSkge1xuICAgICAgICB0aGlzLmdhbWVEYXRhLmJ1c2luZXNzQWRkWyR6MUtpbmdodEZhbGxHYW1lQ3RybERhdGEuS2luZ2h0RmFsbENvbW1lcmNlS2V5VHlwZS5TcGVlZF0gPSAxO1xuICAgICAgICB0aGlzLmN0clBsYXkuY3RyUGxheUFuaS5zZXRCdXMoNCk7XG4gICAgICB9XG4gICAgICB2YXIgcyA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhKCkuZ2V0VGFza0luZm8oKTtcbiAgICAgIGlmIChzKSB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEudGFza0luZm8uaW5kZXggPSBzLmluZGV4O1xuICAgICAgICB0aGlzLmdhbWVEYXRhLnRhc2tJbmZvLmxpc3QgPSBzLmxpc3Q7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEudGFza0luZm8uc3RhZ2UgPSBzLnN0YWdlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNhdmVHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhKCkuc2V0TGV2ZWxJbmZvKHRoaXMuZ2FtZURhdGEubGV2ZWxDZmcuTGV2ZWwsIHRoaXMuZ2FtZURhdGEucm91bmQsIHRoaXMuZ2FtZURhdGEuY29pbik7XG4gICAgdmFyIHQgPSBbXTtcbiAgICB0aGlzLmdhbWVEYXRhLmJ1ZmZMaXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHQucHVzaChlLmlkKTtcbiAgICB9KTtcbiAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YSgpLnNldEJ1ZmZMaXN0KHQpO1xuICAgIHZhciBlID0gW107XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRCdWxpZExpc3QoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBlLnB1c2godC5nZXRTYXZlKCkpO1xuICAgIH0pO1xuICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhKCkuc2V0QnVpbGRJbmZvTGlzdChlKTtcbiAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YSgpLnNldEJ1c2luZXNzTGlzdCh0aGlzLmdhbWVEYXRhLmJ1c2luZXNzQWRkKTtcbiAgICB2YXIgbiA9IHtcbiAgICAgIGluZGV4OiB0aGlzLmdhbWVEYXRhLnRhc2tJbmZvLmluZGV4LFxuICAgICAgbGlzdDogdGhpcy5nYW1lRGF0YS50YXNrSW5mby5saXN0LFxuICAgICAgc3RhZ2U6IHRoaXMuZ2FtZURhdGEudGFza0luZm8uc3RhZ2VcbiAgICB9O1xuICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhKCkuc2V0VGFza0luZm8obik7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5DYW1lcmEsXG4gICAgdG9vbHRpcDogXCJDYW1lcmFcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJjYW1lcmFcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6ICR6MUtpbmdodEZhbGxHYW1lUGxheUN0cmwuZGVmYXVsdCxcbiAgICB0b29sdGlwOiBcIlBsYXllclwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImN0clBsYXlcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6ICR6MUtpbmdodEZhbGxCdWxsZXRCdWlsZC5kZWZhdWx0LFxuICAgIHRvb2x0aXA6IFwiQnVpbGQgYXJyb3dcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidWlsZEJ1bGxldFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlN1bW1vbiBwaWVjZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kQWdnRmxhZ1wiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZUN0cmwuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbEdhbWVDdHJsOyJdfQ==