
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallGameCtrlData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e8f791TuVG3Jd2vmuucEwl', 'KinghtFallGameCtrlData');
// _script/KinghtFallGameCtrlData.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallCommerceKeyType = exports.KinghtFallTimeType = undefined;
var i;
var a;

var $z1PlatformSetting = require("PlatformSetting");

var $z1EventMgr = require("EventMgr");

var $z1LogMgr = require("LogMgr");

var $z1SdkMgr = require("SdkMgr");

var $z1Utils = require("Utils");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallBuildBase = require("KinghtFallBuildBase");

var $z1KinghtFallBuildObstacle = require("KinghtFallBuildObstacle");

var $z1KinghtFallCommerce = require("KinghtFallCommerce");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var def_KinghtFallGameCtrlData = function () {
  function _ctor(t, e) {
    this.bulidPointMap = {};
    this.obstacles = [];
    this.talentAdd = {};
    this.treasureAdd = {};
    this.treasureAddTime = {};
    this.businessPoints = [];
    this.businessAdd = {};
    this.coin = 0;
    this.round = 0;
    this.canNew = true;
    this.packInterval = .5;
    this.time = {};
    this.enemyList = [];
    this.soldierList = [];
    this.buffList = [];
    this.addTime = {};
    this.ctrPar = t;
    this.levelCfg = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getLevelCfgById(e);
    this.initData();
  }

  _ctor.prototype.initData = function () {
    var t;
    this.buildings = [];
    var e = this.levelCfg.HomeLevel1Unlock;
    var n = {
      level: 1,
      bulidPoint: [],
      bulidId: []
    };

    for (var a = 0; a < e.length; a++) {
      var o = e[a];
      n.bulidId.push(o[0]);
      n.bulidPoint.push(o[1]);
    }

    this.buildings.push(n);
    e = this.levelCfg.HomeLevel2Unlock;
    n = {
      level: 2,
      bulidPoint: [],
      bulidId: []
    };

    for (a = 0; a < e.length; a++) {
      o = e[a];
      n.bulidId.push(o[0]);
      n.bulidPoint.push(o[1]);
    }

    this.buildings.push(n);
    e = this.levelCfg.HomeLevel3Unlock;
    n = {
      level: 3,
      bulidPoint: [],
      bulidId: []
    };

    for (a = 0; a < e.length; a++) {
      o = e[a];
      n.bulidId.push(o[0]);
      n.bulidPoint.push(o[1]);
    }

    this.buildings.push(n);
    var r;
    var l = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGameTask(1 == this.levelCfg.Level ? 1 : 2);
    var h = l.MissionID;
    r = 2 == l.MissionType ? $z1KinghtFallModle["default"].getInstance().randomArray(h, l.MissionNumber) : h;
    var g = [];

    for (a = 0; a < l.Award.length; a++) {
      g.push({
        id: l.Award[a][0],
        num: l.Award[a][1]
      });
    }

    this.taskInfo = {
      index: 0,
      list: r,
      reward: g,
      stage: 0
    };
    var y = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfg();

    for (a = 0; a < y.length; a++) {
      o = y[a];
      n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTreasureLevel(o.ID);

      if (n) {
        this.treasureAdd[o.ID] = null === (t = o.levelInfo[n.level - 1]) || undefined === t ? undefined : t.param;
      }
    }

    if (this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CovenantOfPatriarchs] && Math.random() < this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CovenantOfPatriarchs][0]) {
      h = [];

      for (var v = 0; v < this.buildings[0].bulidId.length; v++) {
        this.buildings[0].bulidId[v] == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse && h.push(this.buildings[0].bulidPoint[v]);
      }

      this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CovenantOfPatriarchs] = h[$z1Utils.Utils.randomRang(0, h.length)];
      $z1LogMgr.LogMgr.getInstance().info("***Ancestor's Contract", h, this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CovenantOfPatriarchs]);
    }

    this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract] && (this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract] = 0);
    this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag] && (this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag] = 0);
    this.round = 0;
    this.coin = $z1KinghtFallConfig.KinghtFallParameter.InitGold;
    this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SilverCoinBag] && (this.coin += this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SilverCoinBag][0]);
    this.time = {};
    this.time[i.MonsterGenerate] = 0;
    this.packInterval = Number($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.RefreshInterval));

    var _ = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTalent();

    for (a = 0; a < _.length; a++) {
      if ((o = _[a]).isLock) {
        var I = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTalentLevelCfgById(o.id);
        this.talentAdd[I.kindID] || (this.talentAdd[I.kindID] = []);
        this.talentAdd[I.kindID].push(I.EffectNumber);
      }
    }

    this.loadMonster();
  };

  _ctor.prototype.setRound = function () {
    this.round = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().getRoundNum();
    var t = this.levelCfg.WaveCfg[this.round - 1];
    this.videoCoin = t.CommerceSliver;
    this.enemyQueue = {};

    for (var e = 0; e < t.RefreshSoldierKind.length; e++) {
      var n = t.RefreshSoldierKind[e];

      if (n) {
        var i = n.split("#");
        var a = parseInt(i[0]);
        this.enemyQueue[a] = [];
        var o = i[1].split(";");

        for (var r = 0; r < o.length; r++) {
          var s = o[r].split(",");
          this.enemyQueue[a].push({
            id: parseInt(s[0]),
            num: parseInt(s[1])
          });
        }
      }
    }

    this.coin = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().getCoin();
  };

  _ctor.prototype.loadMonster = function () {
    this.round++;
    var t = this.levelCfg.WaveCfg[this.round - 1];
    this.coin += t.StartSliver;
    this.videoCoin = t.CommerceSliver;
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.GetSliver, t.StartSliver);
    this.enemyQueue = {};

    for (var e = 0; e < t.RefreshSoldierKind.length; e++) {
      var n = t.RefreshSoldierKind[e];

      if (n) {
        var i = n.split("#");
        var a = parseInt(i[0]);
        this.enemyQueue[a] = [];
        var o = i[1].split(";");

        for (var r = 0; r < o.length; r++) {
          var s = o[r].split(",");
          this.enemyQueue[a].push({
            id: parseInt(s[0]),
            num: parseInt(s[1])
          });
        }
      }
    }
  };

  _ctor.prototype.onRestart = function (t) {
    var e = this.getBulidList();

    for (var n = 0; n < e.length; n++) {
      e[n].reset(t);
    }

    if (t) {
      this.round = 0;
      this.coin = $z1KinghtFallConfig.KinghtFallParameter.InitGold;
      this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SilverCoinBag] && (this.coin += this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SilverCoinBag][0]);

      for (var a = 0; a < this.soldierList.length; a++) {
        this.soldierList[a].node.destroy();
      }

      this.soldierList = [];
      this.businessAdd = {};
    } else {
      var o = this.levelCfg.WaveCfg[this.round - 1];
      this.coin -= o.StartSliver;
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.GetSliver, -o.StartSliver);
      this.round--;
    }

    this.time[i.MonsterGenerate] = 0;
    this.loadMonster();
    this.upMap();

    for (a = 0; a < this.enemyList.length; a++) {
      this.enemyList[a].node.destroy();
    }

    this.enemyList = [];
    this.canNew = true;
    this.initCom();
  };

  _ctor.prototype.initCom = function () {
    if (this.canNew) {
      if (this.appearBusinessPoints) {
        this.appearBusinessPoints.node.active = false, this.appearBusinessPoints = null;
      }

      if (!this.appearBusinessPoints) {
        this.canNew = false, this.appearBusinessPoints = this.businessPoints[$z1Utils.Utils.randomRang(0, this.businessPoints.length)];
      }
    }

    if ($z1SdkMgr.SdkMgr.getInstance().getCheckVersion($z1PlatformSetting.SwitchID.ShenHe)) {
      this.appearBusinessPoints && (this.appearBusinessPoints.node.active = false);
      this.weaponBusinessPoints.node.active = false;
      this.horseBusinessPoints.node.active = false;
    } else {
      if (this.appearBusinessPoints) {
        this.appearBusinessPoints.init(1);
        this.appearBusinessPoints.node.active = true;
      }

      switch (this.businessAdd[a.FlagWeapon]) {
        default:
          this.weaponBusinessPoints.node.active = true;
          this.weaponBusinessPoints.init(1);
          break;

        case 1:
          if ($z1KinghtFallModle.KinghtFallSwitch.isMapShopSecondOpen()) {
            this.weaponBusinessPoints.node.active = true;
            this.weaponBusinessPoints.init(2);
          } else {
            this.weaponBusinessPoints.node.active = false;
          }

          break;

        case 2:
          this.weaponBusinessPoints.node.active = false;
      }

      switch (this.businessAdd[a.FlagHorse]) {
        default:
          this.horseBusinessPoints.node.active = true;
          this.horseBusinessPoints.init(1);
          break;

        case 1:
          if ($z1KinghtFallModle.KinghtFallSwitch.isMapShopSecondOpen()) {
            this.horseBusinessPoints.node.active = true;
            this.horseBusinessPoints.init(2);
          } else {
            this.horseBusinessPoints.node.active = false;
          }

          break;

        case 2:
          this.horseBusinessPoints.node.active = false;
      }
    }
  };

  _ctor.prototype.endRoundGame = function () {
    this.loadMonster();
    var t = [this.baseBuild];
    var e = 0;

    for (var n in this.bulidPointMap) {
      if (Object.prototype.hasOwnProperty.call(this.bulidPointMap, n)) {
        var i = this.bulidPointMap[n];

        switch (i.buildCfg.enumValue) {
          case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Mill:
            if (i.getIsWork()) {
              e += i.getGetCoin();
              t.push(i);

              if (this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.MillOfAbundance] && Math.random() < this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.MillOfAbundance][0]) {
                e++, $z1LogMgr.LogMgr.getInstance().info("***Mill of Fertility");
              }
            }

            break;

          case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse:
            if (i.getIsWork()) {
              e += i.getGetCoin();
              t.push(i);

              if (this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SilverCoinHouse] && Math.random() < this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SilverCoinHouse][0]) {
                e++, $z1LogMgr.LogMgr.getInstance().info("***silver Yield Increase House");
              }
            }

        }

        i.endRoundGame();
      }
    }

    if (e > 0) {
      if (this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract]) {
        this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract] += e, this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract] >= 10 && (this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract] -= 10, e += this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract][0], $z1LogMgr.LogMgr.getInstance().info("***tax covenant", this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.TaxContract][0]));
      }

      this.coin += e;
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.GetSliver, e);
    }

    this.soldierList.forEach(function (t) {
      t.delAllBuff();
    });
    this.canNew = true;
    this.initCom();
    return t;
  };

  _ctor.prototype.getHpAdd = function (t) {
    var e = this.levelCfg.WaveCfg[this.round - 1].HealthCoefficient;

    if (1 == $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSoldierCfgById(t).AttackType) {
      var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff25);
      n && (e -= n.Pamer[0]);
      var i = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff38);
      i && (e -= i.Pamer[0]);
    }

    return e;
  };

  _ctor.prototype.getAttAdd = function () {
    return this.levelCfg.WaveCfg[this.round - 1].AttackCoefficient;
  };

  _ctor.prototype.initMap = function () {
    for (var t = 0; t < this.ctrPar.ndMain.children.length; t++) {
      var e = this.ctrPar.ndMain.children[t];
      e.zIndex = Math.floor(cc.winSize.height) - Math.floor(e.y);
      var n = e.getComponent($z1KinghtFallBuildBase["default"]);

      if (n) {
        var i = $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None;

        for (var a = 0; a < this.buildings.length; a++) {
          var o = this.buildings[a];

          if (o.bulidPoint.includes(n.ID)) {
            i = o.bulidId[o.bulidPoint.indexOf(n.ID)];
            break;
          }
        }

        n.initData(i) && (this.bulidPointMap[n.ID] = n);
      } else {
        var r = e.getComponent($z1KinghtFallBuildObstacle["default"]);

        if (r) {
          this.obstacles.push(r);
        } else {
          var s = e.getComponent($z1KinghtFallCommerce["default"]);

          if (s) {
            switch (s.ndType) {
              case $z1KinghtFallCommerce.KinghtFallCommerceType.Silver:
                this.businessPoints.push(s);
                break;

              case $z1KinghtFallCommerce.KinghtFallCommerceType.Weapon:
                this.weaponBusinessPoints = s;
                break;

              case $z1KinghtFallCommerce.KinghtFallCommerceType.Horse:
                this.horseBusinessPoints = s;
            }

            s.node.active = false;
          }
        }
      }
    }

    this.baseBuild = this.bulidPointMap[1];
  };

  _ctor.prototype.upMap = function () {
    for (var t in this.bulidPointMap) {
      Object.prototype.hasOwnProperty.call(this.bulidPointMap, t) && this.bulidPointMap[t].upData();
    }
  };

  _ctor.prototype.setLight = function (t) {
    for (var e in this.bulidPointMap) {
      Object.prototype.hasOwnProperty.call(this.bulidPointMap, e) && this.bulidPointMap[e].setLight(t);
    }
  };

  _ctor.prototype.canLock = function (t) {
    if (1 == t) {
      return true;
    }

    for (var e = this.baseBuild.getLevel(); e > 0; e--) {
      if (this.buildings[e - 1].bulidPoint.includes(t)) {
        return true;
      }
    }

    return false;
  };

  _ctor.prototype.getBulidList = function () {
    var t = [];

    for (var e in this.bulidPointMap) {
      if (Object.prototype.hasOwnProperty.call(this.bulidPointMap, e)) {
        var n = this.bulidPointMap[e];
        t.push(n);
      }
    }

    return t;
  };

  _ctor.prototype.getBaseLevel = function () {
    return this.baseBuild.getLevel();
  };

  _ctor.prototype.isBlocked = function (t) {
    for (var e = 0; e < this.obstacles.length; e++) {
      var n = (o = this.obstacles[e]).getWposPhyCol();

      for (var i = 0; i < n.length; i++) {
        var a = n[i];

        if (cc.Intersection.rectPolygon(t, a)) {
          return true;
        }
      }
    }

    n = this.baseBuild.getWposPhyCol();

    for (i = 0; i < n.length; i++) {
      a = n[i];

      if (cc.Intersection.rectPolygon(t, a)) {
        return true;
      }
    }

    for (e = this.baseBuild.getLevel(); e > 0; e--) {
      var o = this.buildings[e - 1];

      for (var r = 0; r < o.bulidPoint.length; r++) {
        n = this.bulidPointMap[o.bulidPoint[r]].getWposPhyCol();

        for (i = 0; i < n.length; i++) {
          a = n[i];

          if (cc.Intersection.rectPolygon(t, a)) {
            return true;
          }
        }
      }
    }

    return false;
  };

  _ctor.prototype.onUpdata = function (t) {
    this.time[i.MonsterGenerate] += t;

    if (this.time[i.MonsterGenerate] > this.packInterval) {
      this.time[i.MonsterGenerate] = 0;

      for (var e in this.enemyQueue) {
        if (Object.prototype.hasOwnProperty.call(this.enemyQueue, e)) {
          var n = this.enemyQueue[e];

          if (n && n.length > 0) {
            var a = n[0];
            this.ctrPar.addEnemy(a.id, parseInt(e));
            a.num--;
            a.num <= 0 && n.shift();
          }
        }
      }
    }

    for (var o = 0; o < this.enemyList.length; o++) {
      (a = this.enemyList[o]).onUpdate(t);
    }

    if (this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag] && (this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag] += t, this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag] >= 5)) {
      this.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag] -= 5;

      for (var r = 0; r < this.soldierList.length; r++) {
        (a = this.soldierList[r]).addBuff($z1KinghtFallInterface.KinghtFallEnemyBuffType.DamageAdd, {
          addNum: this.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.WavesFlag][0],
          time: -1
        });
      }
    }
  };

  _ctor.prototype.getEnemyList = function () {
    return this.enemyList;
  };

  _ctor.prototype.addEnemy = function (t) {
    this.enemyList.push(t);
  };

  _ctor.prototype.delEnemy = function (t) {
    for (var e = 0; e < this.enemyList.length; e++) {
      if (this.enemyList[e].uuid == t.uuid) {
        this.enemyList.splice(e, 1);
        break;
      }
    }

    var n = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff03);

    if (n) {
      this.addTime[i.KillSoldier1]++;

      if (this.addTime[i.KillSoldier1] >= n.Pamer[0]) {
        this.addTime[i.KillSoldier1] = 0, this.addTime[i.KillSoldier2] += n.Pamer[1], this.addTime[i.KillSoldier2] > 10 && (this.addTime[i.KillSoldier2] = 10);
      }
    }

    this.tryEndGame();
  };

  _ctor.prototype.getSoldierList = function () {
    return this.soldierList;
  };

  _ctor.prototype.addSoldier = function (t) {
    this.soldierList.push(t);
  };

  _ctor.prototype.delSoldier = function (t) {
    for (var e = 0; e < this.soldierList.length; e++) {
      var n = this.soldierList[e];

      if (n.uuid == t.uuid) {
        n.node.destroy();
        this.soldierList.splice(e, 1);
        break;
      }
    }
  };

  _ctor.prototype.tryEndGame = function () {
    var t = 0;

    for (var e in this.enemyQueue) {
      Object.prototype.hasOwnProperty.call(this.enemyQueue, e) && (t += this.enemyQueue[e].length);
    }

    if (this.enemyList.length <= 0 && t <= 0) {
      $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.start_X_Y, this.levelCfg.Level + "_" + this.round);
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().passOrder(this.levelCfg.Level, this.round);

      if (this.round < this.levelCfg.WaveCfg.length) {
        $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.RoundEnd);
      } else {
        $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.GameOver, true);
      }
    }
  };

  _ctor.prototype.addGameBuff = function (t) {
    var e;
    var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBuffCfgById(t);
    this.buffList.push({
      id: t,
      pamer: n.Pamer,
      cfg: n
    });

    switch (t) {
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff01:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff14:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff21:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff22:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff36:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff37:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff40:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff41:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff42:
        $z1KinghtFallUIGame["default"].instance.ctrGame.ctrPlay.initBuffData();
        break;

      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff02:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff57:
        this.addTime[i.SoldierMaxHp] = (this.addTime[i.SoldierMaxHp] || 0) + n.Pamer[0];
        this.addTime[i.SoldierDamage] = (this.addTime[i.SoldierDamage] || 0) + n.Pamer[1];

      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff07:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff09:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff23:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff26:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff32:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff43:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff47:
        for (var a in this.bulidPointMap) {
          Object.prototype.hasOwnProperty.call(this.bulidPointMap, a) && (r = this.bulidPointMap[a]).initBuffData();
        }

        break;

      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff10:
      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff29:
        $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.coin += n.Pamer[0];
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.GetSliver, n.Pamer[0]);
        $z1KinghtFallUIGame["default"].instance.initView();
        break;

      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff11:
        var o = [];

        for (var a in this.bulidPointMap) {
          Object.prototype.hasOwnProperty.call(this.bulidPointMap, a) && (r = this.bulidPointMap[a]).buildCfg.enumValue != $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter && r.getIsLock() && r.buildInfo.cfg && (null === (e = r.buildInfo.cfg.BranchBuild) || undefined === e ? undefined : e.length) > 1 && r.getLevel() < this.baseBuild.getLevel() && o.push(r);
        }

        o.length > 0 && o[$z1Utils.Utils.randomRang(0, o.length)].onBuffUpgrade();
        break;

      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff12:
        o = [];

        for (var a in this.bulidPointMap) {
          Object.prototype.hasOwnProperty.call(this.bulidPointMap, a) && (r = this.bulidPointMap[a]).buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower && this.canLockBuild(a) && 0 == r.index && o.push(r);
        }

        o.length > 0 && o[$z1Utils.Utils.randomRang(0, o.length)].onBuffUpgrade();
        break;

      case $z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff24:
        for (var a in this.bulidPointMap) {
          var r;
          Object.prototype.hasOwnProperty.call(this.bulidPointMap, a) && (r = this.bulidPointMap[a]).buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower && this.canLockBuild(a) && r.getLevel() < this.baseBuild.getLevel() && r.onBuffUpgrade();
        }

        $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.coin = 0;
        $z1KinghtFallUIGame["default"].instance.initView();
    }
  };

  _ctor.prototype.canLockBuild = function (t) {
    var e = this.bulidPointMap[t];

    if (e.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None) {
      return false;
    }

    for (var n = 0; n < this.baseBuild.getLevel(); n++) {
      if (this.buildings[n].bulidPoint.includes(e.ID)) {
        return true;
      }
    }

    return false;
  };

  _ctor.prototype.getGameBuff = function (t) {
    for (var e = 0; e < this.buffList.length; e++) {
      var n = this.buffList[e];

      if (n.id == t) {
        return n.cfg;
      }
    }

    return null;
  };

  _ctor.prototype.startRoundGame = function () {
    this.setLight(true);
    this.addTime[i.KillSoldier1] = 0;
    this.addTime[i.KillSoldier2] = 0;
    this.addTime[i.SoldierDamage2] = 0;
    var t = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff17);

    if (t && this.coin >= 10) {
      this.addTime[i.SoldierDamage1] = t.Pamer[0];
    } else {
      this.addTime[i.SoldierDamage1] = 0;
    }

    var e = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff19);

    if (e && 0 == this.coin) {
      this.addTime[i.PlayerDamage] = e.Pamer[0];
    } else {
      this.addTime[i.PlayerDamage] = 0;
    }

    var n = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff27);
    n && (this.addTime[i.PlayerDamage] += n.Pamer[0]);
    var a = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff49);
    a && (this.addTime[i.PlayerDamage] += a.Pamer[0]);
    this.addTime[i.PlayerAttackSpeed] = 0;
    var o = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff28);
    o && (this.addTime[i.PlayerAttackSpeed] += o.Pamer[0]);
    var r = this.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff50);
    r && (this.addTime[i.PlayerAttackSpeed] += r.Pamer[0]);
    this.businessPoints.forEach(function (t) {
      t.node.active = false;
    });
    this.weaponBusinessPoints.node.active = false;
    this.horseBusinessPoints.node.active = false;
  };

  _ctor.prototype.onChangeSpeed = function () {
    for (var t = 0; t < this.enemyList.length; t++) {
      this.enemyList[t].onChangeSpeed();
    }

    for (t = 0; t < this.soldierList.length; t++) {
      this.soldierList[t].onChangeSpeed();
    }

    for (var e in this.bulidPointMap) {
      Object.prototype.hasOwnProperty.call(this.bulidPointMap, e) && this.bulidPointMap[e].onChangeSpeed();
    }
  };

  return _ctor;
}();

exports["default"] = def_KinghtFallGameCtrlData;

(function (t) {
  t.MonsterGenerate = "MonsterGenerate";
  t.PlayerDamage = "PlayerDamage";
  t.PlayerAttackSpeed = "PlayerAttackSpeed";
  t.SoldierMaxHp = "SoldierMaxHp";
  t.SoldierDamage = "SoldierDamage";
  t.SoldierDamage1 = "SoldierDamage1";
  t.SoldierDamage2 = "SoldierDamage2";
  t.KillSoldier1 = "KillSoldier1";
  t.KillSoldier2 = "KillSoldier2";
})(i = exports.KinghtFallTimeType || (exports.KinghtFallTimeType = {}));

(function (t) {
  t.FlagWeapon = "CommerceFlagWeapon";
  t.FlagHorse = "CommerceFlagHorse";
  t.Attack = "CommerceAttack";
  t.AttackSpeed = "CommerceAttackSpeed";
  t.Speed = "CommerceSpeed";
  t.Energy1 = "CommerceEnergy1";
  t.Energy2 = "CommerceEnergy2";
})(a = exports.KinghtFallCommerceKeyType || (exports.KinghtFallCommerceKeyType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxHYW1lQ3RybERhdGEuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJLaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlIiwiS2luZ2h0RmFsbFRpbWVUeXBlIiwidW5kZWZpbmVkIiwiaSIsImEiLCIkejFQbGF0Zm9ybVNldHRpbmciLCJyZXF1aXJlIiwiJHoxRXZlbnRNZ3IiLCIkejFMb2dNZ3IiLCIkejFTZGtNZ3IiLCIkejFVdGlscyIsIiR6MUdhbWVUcmFja0RhdGFFdmVudCIsIiR6MVBsYXllck1nciIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsRW51bSIsIiR6MUtpbmdodEZhbGxEYXRhTWdyIiwiJHoxS2luZ2h0RmFsbFBsYXllck1nciIsIiR6MUtpbmdodEZhbGxNb2RsZSIsIiR6MUtpbmdodEZhbGxVSUdhbWUiLCIkejFLaW5naHRGYWxsQnVpbGRCYXNlIiwiJHoxS2luZ2h0RmFsbEJ1aWxkT2JzdGFjbGUiLCIkejFLaW5naHRGYWxsQ29tbWVyY2UiLCIkejFLaW5naHRGYWxsSW50ZXJmYWNlIiwiZGVmX0tpbmdodEZhbGxHYW1lQ3RybERhdGEiLCJfY3RvciIsInQiLCJlIiwiYnVsaWRQb2ludE1hcCIsIm9ic3RhY2xlcyIsInRhbGVudEFkZCIsInRyZWFzdXJlQWRkIiwidHJlYXN1cmVBZGRUaW1lIiwiYnVzaW5lc3NQb2ludHMiLCJidXNpbmVzc0FkZCIsImNvaW4iLCJyb3VuZCIsImNhbk5ldyIsInBhY2tJbnRlcnZhbCIsInRpbWUiLCJlbmVteUxpc3QiLCJzb2xkaWVyTGlzdCIsImJ1ZmZMaXN0IiwiYWRkVGltZSIsImN0clBhciIsImxldmVsQ2ZnIiwiS2luZ2h0RmFsbERhdGFNZ3IiLCJnZXRJbnN0YW5jZSIsImdldExldmVsQ2ZnQnlJZCIsImluaXREYXRhIiwicHJvdG90eXBlIiwiYnVpbGRpbmdzIiwiSG9tZUxldmVsMVVubG9jayIsIm4iLCJsZXZlbCIsImJ1bGlkUG9pbnQiLCJidWxpZElkIiwibGVuZ3RoIiwibyIsInB1c2giLCJIb21lTGV2ZWwyVW5sb2NrIiwiSG9tZUxldmVsM1VubG9jayIsInIiLCJsIiwiZ2V0R2FtZVRhc2siLCJMZXZlbCIsImgiLCJNaXNzaW9uSUQiLCJNaXNzaW9uVHlwZSIsInJhbmRvbUFycmF5IiwiTWlzc2lvbk51bWJlciIsImciLCJBd2FyZCIsImlkIiwibnVtIiwidGFza0luZm8iLCJpbmRleCIsImxpc3QiLCJyZXdhcmQiLCJzdGFnZSIsInkiLCJnZXRUcmVhc3VyZUNmZyIsIktpbmdodEZhbGxQbGF5ZXJNZ3IiLCJnZXRVc2VyRGF0YSIsImdldFRyZWFzdXJlTGV2ZWwiLCJJRCIsImxldmVsSW5mbyIsInBhcmFtIiwiS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0iLCJDb3ZlbmFudE9mUGF0cmlhcmNocyIsIk1hdGgiLCJyYW5kb20iLCJ2IiwiS2luZ2h0RmFsbEVudW1CdWlsZEVudW0iLCJQcml2YXRlSG91c2UiLCJVdGlscyIsInJhbmRvbVJhbmciLCJMb2dNZ3IiLCJpbmZvIiwiVGF4Q29udHJhY3QiLCJXYXZlc0ZsYWciLCJLaW5naHRGYWxsUGFyYW1ldGVyIiwiSW5pdEdvbGQiLCJTaWx2ZXJDb2luQmFnIiwiTW9uc3RlckdlbmVyYXRlIiwiTnVtYmVyIiwiZ2V0UGFyYW1zQ2ZnQnlJZCIsIktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnIiwiUmVmcmVzaEludGVydmFsIiwiXyIsImdldFRhbGVudCIsImlzTG9jayIsIkkiLCJnZXRUYWxlbnRMZXZlbENmZ0J5SWQiLCJraW5kSUQiLCJFZmZlY3ROdW1iZXIiLCJsb2FkTW9uc3RlciIsInNldFJvdW5kIiwiZ2V0R2FtZURhdGEiLCJnZXRSb3VuZE51bSIsIldhdmVDZmciLCJ2aWRlb0NvaW4iLCJDb21tZXJjZVNsaXZlciIsImVuZW15UXVldWUiLCJSZWZyZXNoU29sZGllcktpbmQiLCJzcGxpdCIsInBhcnNlSW50IiwicyIsImdldENvaW4iLCJTdGFydFNsaXZlciIsImdldE1pc3Npb25EYXRhIiwiYWRkQWNoTnVtIiwiS2luZ2h0RmFsbEVudW1BY2hpRW51bSIsIkdldFNsaXZlciIsIm9uUmVzdGFydCIsImdldEJ1bGlkTGlzdCIsInJlc2V0Iiwibm9kZSIsImRlc3Ryb3kiLCJ1cE1hcCIsImluaXRDb20iLCJhcHBlYXJCdXNpbmVzc1BvaW50cyIsImFjdGl2ZSIsIlNka01nciIsImdldENoZWNrVmVyc2lvbiIsIlN3aXRjaElEIiwiU2hlbkhlIiwid2VhcG9uQnVzaW5lc3NQb2ludHMiLCJob3JzZUJ1c2luZXNzUG9pbnRzIiwiaW5pdCIsIkZsYWdXZWFwb24iLCJLaW5naHRGYWxsU3dpdGNoIiwiaXNNYXBTaG9wU2Vjb25kT3BlbiIsIkZsYWdIb3JzZSIsImVuZFJvdW5kR2FtZSIsImJhc2VCdWlsZCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImJ1aWxkQ2ZnIiwiZW51bVZhbHVlIiwiTWlsbCIsImdldElzV29yayIsImdldEdldENvaW4iLCJNaWxsT2ZBYnVuZGFuY2UiLCJTaWx2ZXJDb2luSG91c2UiLCJmb3JFYWNoIiwiZGVsQWxsQnVmZiIsImdldEhwQWRkIiwiSGVhbHRoQ29lZmZpY2llbnQiLCJnZXRTb2xkaWVyQ2ZnQnlJZCIsIkF0dGFja1R5cGUiLCJpbnN0YW5jZSIsImN0ckdhbWUiLCJnYW1lRGF0YSIsImdldEdhbWVCdWZmIiwiS2luZ2h0RmFsbEVudW1CdWZmQ2ZnIiwiQnVmZjI1IiwiUGFtZXIiLCJCdWZmMzgiLCJnZXRBdHRBZGQiLCJBdHRhY2tDb2VmZmljaWVudCIsImluaXRNYXAiLCJuZE1haW4iLCJjaGlsZHJlbiIsInpJbmRleCIsImZsb29yIiwiY2MiLCJ3aW5TaXplIiwiaGVpZ2h0IiwiZ2V0Q29tcG9uZW50IiwiTm9uZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsIm5kVHlwZSIsIktpbmdodEZhbGxDb21tZXJjZVR5cGUiLCJTaWx2ZXIiLCJXZWFwb24iLCJIb3JzZSIsInVwRGF0YSIsInNldExpZ2h0IiwiY2FuTG9jayIsImdldExldmVsIiwiZ2V0QmFzZUxldmVsIiwiaXNCbG9ja2VkIiwiZ2V0V3Bvc1BoeUNvbCIsIkludGVyc2VjdGlvbiIsInJlY3RQb2x5Z29uIiwib25VcGRhdGEiLCJhZGRFbmVteSIsInNoaWZ0Iiwib25VcGRhdGUiLCJhZGRCdWZmIiwiS2luZ2h0RmFsbEVuZW15QnVmZlR5cGUiLCJEYW1hZ2VBZGQiLCJhZGROdW0iLCJnZXRFbmVteUxpc3QiLCJkZWxFbmVteSIsInV1aWQiLCJzcGxpY2UiLCJCdWZmMDMiLCJLaWxsU29sZGllcjEiLCJLaWxsU29sZGllcjIiLCJ0cnlFbmRHYW1lIiwiZ2V0U29sZGllckxpc3QiLCJhZGRTb2xkaWVyIiwiZGVsU29sZGllciIsIlBsYXllck1nciIsImdldFRyYWNrRGF0YSIsInlvdW1lbmdUcmFjayIsIlRyYWNrSWQiLCJzdGFydF9YX1kiLCJwYXNzT3JkZXIiLCJFdmVudE1nciIsImVtaXQiLCJLaW5naHRGYWxsRXZlbnROYW1lIiwiUm91bmRFbmQiLCJHYW1lT3ZlciIsImFkZEdhbWVCdWZmIiwiZ2V0QnVmZkNmZ0J5SWQiLCJwYW1lciIsImNmZyIsIkJ1ZmYwMSIsIkJ1ZmYxNCIsIkJ1ZmYyMSIsIkJ1ZmYyMiIsIkJ1ZmYzNiIsIkJ1ZmYzNyIsIkJ1ZmY0MCIsIkJ1ZmY0MSIsIkJ1ZmY0MiIsImN0clBsYXkiLCJpbml0QnVmZkRhdGEiLCJCdWZmMDIiLCJCdWZmNTciLCJTb2xkaWVyTWF4SHAiLCJTb2xkaWVyRGFtYWdlIiwiQnVmZjA3IiwiQnVmZjA5IiwiQnVmZjIzIiwiQnVmZjI2IiwiQnVmZjMyIiwiQnVmZjQzIiwiQnVmZjQ3IiwiQnVmZjEwIiwiQnVmZjI5IiwiaW5pdFZpZXciLCJCdWZmMTEiLCJDYXN0bGVDZW50ZXIiLCJnZXRJc0xvY2siLCJidWlsZEluZm8iLCJCcmFuY2hCdWlsZCIsIm9uQnVmZlVwZ3JhZGUiLCJCdWZmMTIiLCJBcnJvd1Rvd2VyIiwiY2FuTG9ja0J1aWxkIiwiQnVmZjI0Iiwic3RhcnRSb3VuZEdhbWUiLCJTb2xkaWVyRGFtYWdlMiIsIkJ1ZmYxNyIsIlNvbGRpZXJEYW1hZ2UxIiwiQnVmZjE5IiwiUGxheWVyRGFtYWdlIiwiQnVmZjI3IiwiQnVmZjQ5IiwiUGxheWVyQXR0YWNrU3BlZWQiLCJCdWZmMjgiLCJCdWZmNTAiLCJvbkNoYW5nZVNwZWVkIiwiQXR0YWNrIiwiQXR0YWNrU3BlZWQiLCJTcGVlZCIsIkVuZXJneTEiLCJFbmVyZ3kyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSx5QkFBUixHQUFvQ0YsT0FBTyxDQUFDRyxrQkFBUixHQUE2QkMsU0FBakU7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjs7QUFDQSxJQUFJQyxrQkFBa0IsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQWhDOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJRyxTQUFTLEdBQUdILE9BQU8sQ0FBQyxRQUFELENBQXZCOztBQUNBLElBQUlJLFFBQVEsR0FBR0osT0FBTyxDQUFDLE9BQUQsQ0FBdEI7O0FBQ0EsSUFBSUsscUJBQXFCLEdBQUdMLE9BQU8sQ0FBQyxvQkFBRCxDQUFuQzs7QUFDQSxJQUFJTSxZQUFZLEdBQUdOLE9BQU8sQ0FBQyxXQUFELENBQTFCOztBQUNBLElBQUlPLG1CQUFtQixHQUFHUCxPQUFPLENBQUMsa0JBQUQsQ0FBakM7O0FBQ0EsSUFBSVEsaUJBQWlCLEdBQUdSLE9BQU8sQ0FBQyxnQkFBRCxDQUEvQjs7QUFDQSxJQUFJUyxvQkFBb0IsR0FBR1QsT0FBTyxDQUFDLG1CQUFELENBQWxDOztBQUNBLElBQUlVLHNCQUFzQixHQUFHVixPQUFPLENBQUMscUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSVcsa0JBQWtCLEdBQUdYLE9BQU8sQ0FBQyxpQkFBRCxDQUFoQzs7QUFDQSxJQUFJWSxtQkFBbUIsR0FBR1osT0FBTyxDQUFDLGtCQUFELENBQWpDOztBQUNBLElBQUlhLHNCQUFzQixHQUFHYixPQUFPLENBQUMscUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSWMsMEJBQTBCLEdBQUdkLE9BQU8sQ0FBQyx5QkFBRCxDQUF4Qzs7QUFDQSxJQUFJZSxxQkFBcUIsR0FBR2YsT0FBTyxDQUFDLG9CQUFELENBQW5DOztBQUNBLElBQUlnQixzQkFBc0IsR0FBR2hCLE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJaUIsMEJBQTBCLEdBQUcsWUFBWTtFQUMzQyxTQUFTQyxLQUFULENBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0lBQ25CLEtBQUtDLGFBQUwsR0FBcUIsRUFBckI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixFQUFqQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsRUFBbkI7SUFDQSxLQUFLQyxlQUFMLEdBQXVCLEVBQXZCO0lBQ0EsS0FBS0MsY0FBTCxHQUFzQixFQUF0QjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsRUFBbkI7SUFDQSxLQUFLQyxJQUFMLEdBQVksQ0FBWjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLEVBQVo7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0lBQ0EsS0FBS0MsV0FBTCxHQUFtQixFQUFuQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsRUFBZjtJQUNBLEtBQUtDLE1BQUwsR0FBY2xCLENBQWQ7SUFDQSxLQUFLbUIsUUFBTCxHQUFnQjdCLG9CQUFvQixDQUFDOEIsaUJBQXJCLENBQXVDQyxXQUF2QyxHQUFxREMsZUFBckQsQ0FBcUVyQixDQUFyRSxDQUFoQjtJQUNBLEtBQUtzQixRQUFMO0VBQ0Q7O0VBQ0R4QixLQUFLLENBQUN5QixTQUFOLENBQWdCRCxRQUFoQixHQUEyQixZQUFZO0lBQ3JDLElBQUl2QixDQUFKO0lBQ0EsS0FBS3lCLFNBQUwsR0FBaUIsRUFBakI7SUFDQSxJQUFJeEIsQ0FBQyxHQUFHLEtBQUtrQixRQUFMLENBQWNPLGdCQUF0QjtJQUNBLElBQUlDLENBQUMsR0FBRztNQUNOQyxLQUFLLEVBQUUsQ0FERDtNQUVOQyxVQUFVLEVBQUUsRUFGTjtNQUdOQyxPQUFPLEVBQUU7SUFISCxDQUFSOztJQUtBLEtBQUssSUFBSW5ELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzQixDQUFDLENBQUM4QixNQUF0QixFQUE4QnBELENBQUMsRUFBL0IsRUFBbUM7TUFDakMsSUFBSXFELENBQUMsR0FBRy9CLENBQUMsQ0FBQ3RCLENBQUQsQ0FBVDtNQUNBZ0QsQ0FBQyxDQUFDRyxPQUFGLENBQVVHLElBQVYsQ0FBZUQsQ0FBQyxDQUFDLENBQUQsQ0FBaEI7TUFDQUwsQ0FBQyxDQUFDRSxVQUFGLENBQWFJLElBQWIsQ0FBa0JELENBQUMsQ0FBQyxDQUFELENBQW5CO0lBQ0Q7O0lBQ0QsS0FBS1AsU0FBTCxDQUFlUSxJQUFmLENBQW9CTixDQUFwQjtJQUNBMUIsQ0FBQyxHQUFHLEtBQUtrQixRQUFMLENBQWNlLGdCQUFsQjtJQUNBUCxDQUFDLEdBQUc7TUFDRkMsS0FBSyxFQUFFLENBREw7TUFFRkMsVUFBVSxFQUFFLEVBRlY7TUFHRkMsT0FBTyxFQUFFO0lBSFAsQ0FBSjs7SUFLQSxLQUFLbkQsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHc0IsQ0FBQyxDQUFDOEIsTUFBbEIsRUFBMEJwRCxDQUFDLEVBQTNCLEVBQStCO01BQzdCcUQsQ0FBQyxHQUFHL0IsQ0FBQyxDQUFDdEIsQ0FBRCxDQUFMO01BQ0FnRCxDQUFDLENBQUNHLE9BQUYsQ0FBVUcsSUFBVixDQUFlRCxDQUFDLENBQUMsQ0FBRCxDQUFoQjtNQUNBTCxDQUFDLENBQUNFLFVBQUYsQ0FBYUksSUFBYixDQUFrQkQsQ0FBQyxDQUFDLENBQUQsQ0FBbkI7SUFDRDs7SUFDRCxLQUFLUCxTQUFMLENBQWVRLElBQWYsQ0FBb0JOLENBQXBCO0lBQ0ExQixDQUFDLEdBQUcsS0FBS2tCLFFBQUwsQ0FBY2dCLGdCQUFsQjtJQUNBUixDQUFDLEdBQUc7TUFDRkMsS0FBSyxFQUFFLENBREw7TUFFRkMsVUFBVSxFQUFFLEVBRlY7TUFHRkMsT0FBTyxFQUFFO0lBSFAsQ0FBSjs7SUFLQSxLQUFLbkQsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHc0IsQ0FBQyxDQUFDOEIsTUFBbEIsRUFBMEJwRCxDQUFDLEVBQTNCLEVBQStCO01BQzdCcUQsQ0FBQyxHQUFHL0IsQ0FBQyxDQUFDdEIsQ0FBRCxDQUFMO01BQ0FnRCxDQUFDLENBQUNHLE9BQUYsQ0FBVUcsSUFBVixDQUFlRCxDQUFDLENBQUMsQ0FBRCxDQUFoQjtNQUNBTCxDQUFDLENBQUNFLFVBQUYsQ0FBYUksSUFBYixDQUFrQkQsQ0FBQyxDQUFDLENBQUQsQ0FBbkI7SUFDRDs7SUFDRCxLQUFLUCxTQUFMLENBQWVRLElBQWYsQ0FBb0JOLENBQXBCO0lBQ0EsSUFBSVMsQ0FBSjtJQUNBLElBQUlDLENBQUMsR0FBRy9DLG9CQUFvQixDQUFDOEIsaUJBQXJCLENBQXVDQyxXQUF2QyxHQUFxRGlCLFdBQXJELENBQWlFLEtBQUssS0FBS25CLFFBQUwsQ0FBY29CLEtBQW5CLEdBQTJCLENBQTNCLEdBQStCLENBQWhHLENBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksU0FBVjtJQUNBTCxDQUFDLEdBQUcsS0FBS0MsQ0FBQyxDQUFDSyxXQUFQLEdBQXFCbEQsa0JBQWtCLFdBQWxCLENBQTJCNkIsV0FBM0IsR0FBeUNzQixXQUF6QyxDQUFxREgsQ0FBckQsRUFBd0RILENBQUMsQ0FBQ08sYUFBMUQsQ0FBckIsR0FBZ0dKLENBQXBHO0lBQ0EsSUFBSUssQ0FBQyxHQUFHLEVBQVI7O0lBQ0EsS0FBS2xFLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzBELENBQUMsQ0FBQ1MsS0FBRixDQUFRZixNQUF4QixFQUFnQ3BELENBQUMsRUFBakMsRUFBcUM7TUFDbkNrRSxDQUFDLENBQUNaLElBQUYsQ0FBTztRQUNMYyxFQUFFLEVBQUVWLENBQUMsQ0FBQ1MsS0FBRixDQUFRbkUsQ0FBUixFQUFXLENBQVgsQ0FEQztRQUVMcUUsR0FBRyxFQUFFWCxDQUFDLENBQUNTLEtBQUYsQ0FBUW5FLENBQVIsRUFBVyxDQUFYO01BRkEsQ0FBUDtJQUlEOztJQUNELEtBQUtzRSxRQUFMLEdBQWdCO01BQ2RDLEtBQUssRUFBRSxDQURPO01BRWRDLElBQUksRUFBRWYsQ0FGUTtNQUdkZ0IsTUFBTSxFQUFFUCxDQUhNO01BSWRRLEtBQUssRUFBRTtJQUpPLENBQWhCO0lBTUEsSUFBSUMsQ0FBQyxHQUFHaEUsb0JBQW9CLENBQUM4QixpQkFBckIsQ0FBdUNDLFdBQXZDLEdBQXFEa0MsY0FBckQsRUFBUjs7SUFDQSxLQUFLNUUsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHMkUsQ0FBQyxDQUFDdkIsTUFBbEIsRUFBMEJwRCxDQUFDLEVBQTNCLEVBQStCO01BQzdCcUQsQ0FBQyxHQUFHc0IsQ0FBQyxDQUFDM0UsQ0FBRCxDQUFMO01BQ0FnRCxDQUFDLEdBQUdwQyxzQkFBc0IsQ0FBQ2lFLG1CQUF2QixDQUEyQ25DLFdBQTNDLEdBQXlEb0MsV0FBekQsR0FBdUVDLGdCQUF2RSxDQUF3RjFCLENBQUMsQ0FBQzJCLEVBQTFGLENBQUo7O01BQ0EsSUFBSWhDLENBQUosRUFBTztRQUNMLEtBQUt0QixXQUFMLENBQWlCMkIsQ0FBQyxDQUFDMkIsRUFBbkIsSUFBeUIsVUFBVTNELENBQUMsR0FBR2dDLENBQUMsQ0FBQzRCLFNBQUYsQ0FBWWpDLENBQUMsQ0FBQ0MsS0FBRixHQUFVLENBQXRCLENBQWQsS0FBMkNuRCxTQUFTLEtBQUt1QixDQUF6RCxHQUE2RHZCLFNBQTdELEdBQXlFdUIsQ0FBQyxDQUFDNkQsS0FBcEc7TUFDRDtJQUNGOztJQUNELElBQUksS0FBS3hELFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q0Msb0JBQTlELEtBQXVGQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBSzVELFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q0Msb0JBQTlELEVBQW9GLENBQXBGLENBQTNHLEVBQW1NO01BQ2pNdkIsQ0FBQyxHQUFHLEVBQUo7O01BQ0EsS0FBSyxJQUFJMEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLekMsU0FBTCxDQUFlLENBQWYsRUFBa0JLLE9BQWxCLENBQTBCQyxNQUE5QyxFQUFzRG1DLENBQUMsRUFBdkQsRUFBMkQ7UUFDekQsS0FBS3pDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSyxPQUFsQixDQUEwQm9DLENBQTFCLEtBQWdDN0UsaUJBQWlCLENBQUM4RSx1QkFBbEIsQ0FBMENDLFlBQTFFLElBQTBGNUIsQ0FBQyxDQUFDUCxJQUFGLENBQU8sS0FBS1IsU0FBTCxDQUFlLENBQWYsRUFBa0JJLFVBQWxCLENBQTZCcUMsQ0FBN0IsQ0FBUCxDQUExRjtNQUNEOztNQUNELEtBQUs1RCxlQUFMLENBQXFCakIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNDLG9CQUFsRSxJQUEwRnZCLENBQUMsQ0FBQ3ZELFFBQVEsQ0FBQ29GLEtBQVQsQ0FBZUMsVUFBZixDQUEwQixDQUExQixFQUE2QjlCLENBQUMsQ0FBQ1QsTUFBL0IsQ0FBRCxDQUEzRjtNQUNBaEQsU0FBUyxDQUFDd0YsTUFBVixDQUFpQmxELFdBQWpCLEdBQStCbUQsSUFBL0IsQ0FBb0Msd0JBQXBDLEVBQThEaEMsQ0FBOUQsRUFBaUUsS0FBS2xDLGVBQUwsQ0FBcUJqQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q0Msb0JBQWxFLENBQWpFO0lBQ0Q7O0lBQ0QsS0FBSzFELFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1csV0FBOUQsTUFBK0UsS0FBS25FLGVBQUwsQ0FBcUJqQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1csV0FBbEUsSUFBaUYsQ0FBaEs7SUFDQSxLQUFLcEUsV0FBTCxDQUFpQmhCLGlCQUFpQixDQUFDeUUsMEJBQWxCLENBQTZDWSxTQUE5RCxNQUE2RSxLQUFLcEUsZUFBTCxDQUFxQmpCLGlCQUFpQixDQUFDeUUsMEJBQWxCLENBQTZDWSxTQUFsRSxJQUErRSxDQUE1SjtJQUNBLEtBQUtoRSxLQUFMLEdBQWEsQ0FBYjtJQUNBLEtBQUtELElBQUwsR0FBWXJCLG1CQUFtQixDQUFDdUYsbUJBQXBCLENBQXdDQyxRQUFwRDtJQUNBLEtBQUt2RSxXQUFMLENBQWlCaEIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNlLGFBQTlELE1BQWlGLEtBQUtwRSxJQUFMLElBQWEsS0FBS0osV0FBTCxDQUFpQmhCLGlCQUFpQixDQUFDeUUsMEJBQWxCLENBQTZDZSxhQUE5RCxFQUE2RSxDQUE3RSxDQUE5RjtJQUNBLEtBQUtoRSxJQUFMLEdBQVksRUFBWjtJQUNBLEtBQUtBLElBQUwsQ0FBVW5DLENBQUMsQ0FBQ29HLGVBQVosSUFBK0IsQ0FBL0I7SUFDQSxLQUFLbEUsWUFBTCxHQUFvQm1FLE1BQU0sQ0FBQ3pGLG9CQUFvQixDQUFDOEIsaUJBQXJCLENBQXVDQyxXQUF2QyxHQUFxRDJELGdCQUFyRCxDQUFzRTNGLGlCQUFpQixDQUFDNEYsMEJBQWxCLENBQTZDQyxlQUFuSCxDQUFELENBQTFCOztJQUNBLElBQUlDLENBQUMsR0FBRzVGLHNCQUFzQixDQUFDaUUsbUJBQXZCLENBQTJDbkMsV0FBM0MsR0FBeURvQyxXQUF6RCxHQUF1RTJCLFNBQXZFLEVBQVI7O0lBQ0EsS0FBS3pHLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3dHLENBQUMsQ0FBQ3BELE1BQWxCLEVBQTBCcEQsQ0FBQyxFQUEzQixFQUErQjtNQUM3QixJQUFJLENBQUNxRCxDQUFDLEdBQUdtRCxDQUFDLENBQUN4RyxDQUFELENBQU4sRUFBVzBHLE1BQWYsRUFBdUI7UUFDckIsSUFBSUMsQ0FBQyxHQUFHaEcsb0JBQW9CLENBQUM4QixpQkFBckIsQ0FBdUNDLFdBQXZDLEdBQXFEa0UscUJBQXJELENBQTJFdkQsQ0FBQyxDQUFDZSxFQUE3RSxDQUFSO1FBQ0EsS0FBSzNDLFNBQUwsQ0FBZWtGLENBQUMsQ0FBQ0UsTUFBakIsTUFBNkIsS0FBS3BGLFNBQUwsQ0FBZWtGLENBQUMsQ0FBQ0UsTUFBakIsSUFBMkIsRUFBeEQ7UUFDQSxLQUFLcEYsU0FBTCxDQUFla0YsQ0FBQyxDQUFDRSxNQUFqQixFQUF5QnZELElBQXpCLENBQThCcUQsQ0FBQyxDQUFDRyxZQUFoQztNQUNEO0lBQ0Y7O0lBQ0QsS0FBS0MsV0FBTDtFQUNELENBekZEOztFQTBGQTNGLEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0JtRSxRQUFoQixHQUEyQixZQUFZO0lBQ3JDLEtBQUtqRixLQUFMLEdBQWFuQixzQkFBc0IsQ0FBQ2lFLG1CQUF2QixDQUEyQ25DLFdBQTNDLEdBQXlEdUUsV0FBekQsR0FBdUVDLFdBQXZFLEVBQWI7SUFDQSxJQUFJN0YsQ0FBQyxHQUFHLEtBQUttQixRQUFMLENBQWMyRSxPQUFkLENBQXNCLEtBQUtwRixLQUFMLEdBQWEsQ0FBbkMsQ0FBUjtJQUNBLEtBQUtxRixTQUFMLEdBQWlCL0YsQ0FBQyxDQUFDZ0csY0FBbkI7SUFDQSxLQUFLQyxVQUFMLEdBQWtCLEVBQWxCOztJQUNBLEtBQUssSUFBSWhHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELENBQUMsQ0FBQ2tHLGtCQUFGLENBQXFCbkUsTUFBekMsRUFBaUQ5QixDQUFDLEVBQWxELEVBQXNEO01BQ3BELElBQUkwQixDQUFDLEdBQUczQixDQUFDLENBQUNrRyxrQkFBRixDQUFxQmpHLENBQXJCLENBQVI7O01BQ0EsSUFBSTBCLENBQUosRUFBTztRQUNMLElBQUlqRCxDQUFDLEdBQUdpRCxDQUFDLENBQUN3RSxLQUFGLENBQVEsR0FBUixDQUFSO1FBQ0EsSUFBSXhILENBQUMsR0FBR3lILFFBQVEsQ0FBQzFILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBaEI7UUFDQSxLQUFLdUgsVUFBTCxDQUFnQnRILENBQWhCLElBQXFCLEVBQXJCO1FBQ0EsSUFBSXFELENBQUMsR0FBR3RELENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3lILEtBQUwsQ0FBVyxHQUFYLENBQVI7O1FBQ0EsS0FBSyxJQUFJL0QsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osQ0FBQyxDQUFDRCxNQUF0QixFQUE4QkssQ0FBQyxFQUEvQixFQUFtQztVQUNqQyxJQUFJaUUsQ0FBQyxHQUFHckUsQ0FBQyxDQUFDSSxDQUFELENBQUQsQ0FBSytELEtBQUwsQ0FBVyxHQUFYLENBQVI7VUFDQSxLQUFLRixVQUFMLENBQWdCdEgsQ0FBaEIsRUFBbUJzRCxJQUFuQixDQUF3QjtZQUN0QmMsRUFBRSxFQUFFcUQsUUFBUSxDQUFDQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBRFU7WUFFdEJyRCxHQUFHLEVBQUVvRCxRQUFRLENBQUNDLENBQUMsQ0FBQyxDQUFELENBQUY7VUFGUyxDQUF4QjtRQUlEO01BQ0Y7SUFDRjs7SUFDRCxLQUFLNUYsSUFBTCxHQUFZbEIsc0JBQXNCLENBQUNpRSxtQkFBdkIsQ0FBMkNuQyxXQUEzQyxHQUF5RHVFLFdBQXpELEdBQXVFVSxPQUF2RSxFQUFaO0VBQ0QsQ0F0QkQ7O0VBdUJBdkcsS0FBSyxDQUFDeUIsU0FBTixDQUFnQmtFLFdBQWhCLEdBQThCLFlBQVk7SUFDeEMsS0FBS2hGLEtBQUw7SUFDQSxJQUFJVixDQUFDLEdBQUcsS0FBS21CLFFBQUwsQ0FBYzJFLE9BQWQsQ0FBc0IsS0FBS3BGLEtBQUwsR0FBYSxDQUFuQyxDQUFSO0lBQ0EsS0FBS0QsSUFBTCxJQUFhVCxDQUFDLENBQUN1RyxXQUFmO0lBQ0EsS0FBS1IsU0FBTCxHQUFpQi9GLENBQUMsQ0FBQ2dHLGNBQW5CO0lBQ0F6RyxzQkFBc0IsQ0FBQ2lFLG1CQUF2QixDQUEyQ25DLFdBQTNDLEdBQXlEbUYsY0FBekQsR0FBMEVDLFNBQTFFLENBQW9GcEgsaUJBQWlCLENBQUNxSCxzQkFBbEIsQ0FBeUNDLFNBQTdILEVBQXdJM0csQ0FBQyxDQUFDdUcsV0FBMUk7SUFDQSxLQUFLTixVQUFMLEdBQWtCLEVBQWxCOztJQUNBLEtBQUssSUFBSWhHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELENBQUMsQ0FBQ2tHLGtCQUFGLENBQXFCbkUsTUFBekMsRUFBaUQ5QixDQUFDLEVBQWxELEVBQXNEO01BQ3BELElBQUkwQixDQUFDLEdBQUczQixDQUFDLENBQUNrRyxrQkFBRixDQUFxQmpHLENBQXJCLENBQVI7O01BQ0EsSUFBSTBCLENBQUosRUFBTztRQUNMLElBQUlqRCxDQUFDLEdBQUdpRCxDQUFDLENBQUN3RSxLQUFGLENBQVEsR0FBUixDQUFSO1FBQ0EsSUFBSXhILENBQUMsR0FBR3lILFFBQVEsQ0FBQzFILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBaEI7UUFDQSxLQUFLdUgsVUFBTCxDQUFnQnRILENBQWhCLElBQXFCLEVBQXJCO1FBQ0EsSUFBSXFELENBQUMsR0FBR3RELENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3lILEtBQUwsQ0FBVyxHQUFYLENBQVI7O1FBQ0EsS0FBSyxJQUFJL0QsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osQ0FBQyxDQUFDRCxNQUF0QixFQUE4QkssQ0FBQyxFQUEvQixFQUFtQztVQUNqQyxJQUFJaUUsQ0FBQyxHQUFHckUsQ0FBQyxDQUFDSSxDQUFELENBQUQsQ0FBSytELEtBQUwsQ0FBVyxHQUFYLENBQVI7VUFDQSxLQUFLRixVQUFMLENBQWdCdEgsQ0FBaEIsRUFBbUJzRCxJQUFuQixDQUF3QjtZQUN0QmMsRUFBRSxFQUFFcUQsUUFBUSxDQUFDQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBRFU7WUFFdEJyRCxHQUFHLEVBQUVvRCxRQUFRLENBQUNDLENBQUMsQ0FBQyxDQUFELENBQUY7VUFGUyxDQUF4QjtRQUlEO01BQ0Y7SUFDRjtFQUNGLENBdkJEOztFQXdCQXRHLEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0JvRixTQUFoQixHQUE0QixVQUFVNUcsQ0FBVixFQUFhO0lBQ3ZDLElBQUlDLENBQUMsR0FBRyxLQUFLNEcsWUFBTCxFQUFSOztJQUNBLEtBQUssSUFBSWxGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcxQixDQUFDLENBQUM4QixNQUF0QixFQUE4QkosQ0FBQyxFQUEvQixFQUFtQztNQUNqQzFCLENBQUMsQ0FBQzBCLENBQUQsQ0FBRCxDQUFLbUYsS0FBTCxDQUFXOUcsQ0FBWDtJQUNEOztJQUNELElBQUlBLENBQUosRUFBTztNQUNMLEtBQUtVLEtBQUwsR0FBYSxDQUFiO01BQ0EsS0FBS0QsSUFBTCxHQUFZckIsbUJBQW1CLENBQUN1RixtQkFBcEIsQ0FBd0NDLFFBQXBEO01BQ0EsS0FBS3ZFLFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q2UsYUFBOUQsTUFBaUYsS0FBS3BFLElBQUwsSUFBYSxLQUFLSixXQUFMLENBQWlCaEIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNlLGFBQTlELEVBQTZFLENBQTdFLENBQTlGOztNQUNBLEtBQUssSUFBSWxHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS29DLFdBQUwsQ0FBaUJnQixNQUFyQyxFQUE2Q3BELENBQUMsRUFBOUMsRUFBa0Q7UUFDaEQsS0FBS29DLFdBQUwsQ0FBaUJwQyxDQUFqQixFQUFvQm9JLElBQXBCLENBQXlCQyxPQUF6QjtNQUNEOztNQUNELEtBQUtqRyxXQUFMLEdBQW1CLEVBQW5CO01BQ0EsS0FBS1AsV0FBTCxHQUFtQixFQUFuQjtJQUNELENBVEQsTUFTTztNQUNMLElBQUl3QixDQUFDLEdBQUcsS0FBS2IsUUFBTCxDQUFjMkUsT0FBZCxDQUFzQixLQUFLcEYsS0FBTCxHQUFhLENBQW5DLENBQVI7TUFDQSxLQUFLRCxJQUFMLElBQWF1QixDQUFDLENBQUN1RSxXQUFmO01BQ0FoSCxzQkFBc0IsQ0FBQ2lFLG1CQUF2QixDQUEyQ25DLFdBQTNDLEdBQXlEbUYsY0FBekQsR0FBMEVDLFNBQTFFLENBQW9GcEgsaUJBQWlCLENBQUNxSCxzQkFBbEIsQ0FBeUNDLFNBQTdILEVBQXdJLENBQUMzRSxDQUFDLENBQUN1RSxXQUEzSTtNQUNBLEtBQUs3RixLQUFMO0lBQ0Q7O0lBQ0QsS0FBS0csSUFBTCxDQUFVbkMsQ0FBQyxDQUFDb0csZUFBWixJQUErQixDQUEvQjtJQUNBLEtBQUtZLFdBQUw7SUFDQSxLQUFLdUIsS0FBTDs7SUFDQSxLQUFLdEksQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLEtBQUttQyxTQUFMLENBQWVpQixNQUEvQixFQUF1Q3BELENBQUMsRUFBeEMsRUFBNEM7TUFDMUMsS0FBS21DLFNBQUwsQ0FBZW5DLENBQWYsRUFBa0JvSSxJQUFsQixDQUF1QkMsT0FBdkI7SUFDRDs7SUFDRCxLQUFLbEcsU0FBTCxHQUFpQixFQUFqQjtJQUNBLEtBQUtILE1BQUwsR0FBYyxJQUFkO0lBQ0EsS0FBS3VHLE9BQUw7RUFDRCxDQTdCRDs7RUE4QkFuSCxLQUFLLENBQUN5QixTQUFOLENBQWdCMEYsT0FBaEIsR0FBMEIsWUFBWTtJQUNwQyxJQUFJLEtBQUt2RyxNQUFULEVBQWlCO01BQ2YsSUFBSSxLQUFLd0csb0JBQVQsRUFBK0I7UUFDN0IsS0FBS0Esb0JBQUwsQ0FBMEJKLElBQTFCLENBQStCSyxNQUEvQixHQUF3QyxLQUF4QyxFQUErQyxLQUFLRCxvQkFBTCxHQUE0QixJQUEzRTtNQUNEOztNQUNELElBQUksQ0FBQyxLQUFLQSxvQkFBVixFQUFnQztRQUM5QixLQUFLeEcsTUFBTCxHQUFjLEtBQWQsRUFBcUIsS0FBS3dHLG9CQUFMLEdBQTRCLEtBQUs1RyxjQUFMLENBQW9CdEIsUUFBUSxDQUFDb0YsS0FBVCxDQUFlQyxVQUFmLENBQTBCLENBQTFCLEVBQTZCLEtBQUsvRCxjQUFMLENBQW9Cd0IsTUFBakQsQ0FBcEIsQ0FBakQ7TUFDRDtJQUNGOztJQUNELElBQUkvQyxTQUFTLENBQUNxSSxNQUFWLENBQWlCaEcsV0FBakIsR0FBK0JpRyxlQUEvQixDQUErQzFJLGtCQUFrQixDQUFDMkksUUFBbkIsQ0FBNEJDLE1BQTNFLENBQUosRUFBd0Y7TUFDdEYsS0FBS0wsb0JBQUwsS0FBOEIsS0FBS0Esb0JBQUwsQ0FBMEJKLElBQTFCLENBQStCSyxNQUEvQixHQUF3QyxLQUF0RTtNQUNBLEtBQUtLLG9CQUFMLENBQTBCVixJQUExQixDQUErQkssTUFBL0IsR0FBd0MsS0FBeEM7TUFDQSxLQUFLTSxtQkFBTCxDQUF5QlgsSUFBekIsQ0FBOEJLLE1BQTlCLEdBQXVDLEtBQXZDO0lBQ0QsQ0FKRCxNQUlPO01BQ0wsSUFBSSxLQUFLRCxvQkFBVCxFQUErQjtRQUM3QixLQUFLQSxvQkFBTCxDQUEwQlEsSUFBMUIsQ0FBK0IsQ0FBL0I7UUFDQSxLQUFLUixvQkFBTCxDQUEwQkosSUFBMUIsQ0FBK0JLLE1BQS9CLEdBQXdDLElBQXhDO01BQ0Q7O01BQ0QsUUFBUSxLQUFLNUcsV0FBTCxDQUFpQjdCLENBQUMsQ0FBQ2lKLFVBQW5CLENBQVI7UUFDRTtVQUNFLEtBQUtILG9CQUFMLENBQTBCVixJQUExQixDQUErQkssTUFBL0IsR0FBd0MsSUFBeEM7VUFDQSxLQUFLSyxvQkFBTCxDQUEwQkUsSUFBMUIsQ0FBK0IsQ0FBL0I7VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRSxJQUFJbkksa0JBQWtCLENBQUNxSSxnQkFBbkIsQ0FBb0NDLG1CQUFwQyxFQUFKLEVBQStEO1lBQzdELEtBQUtMLG9CQUFMLENBQTBCVixJQUExQixDQUErQkssTUFBL0IsR0FBd0MsSUFBeEM7WUFDQSxLQUFLSyxvQkFBTCxDQUEwQkUsSUFBMUIsQ0FBK0IsQ0FBL0I7VUFDRCxDQUhELE1BR087WUFDTCxLQUFLRixvQkFBTCxDQUEwQlYsSUFBMUIsQ0FBK0JLLE1BQS9CLEdBQXdDLEtBQXhDO1VBQ0Q7O1VBQ0Q7O1FBQ0YsS0FBSyxDQUFMO1VBQ0UsS0FBS0ssb0JBQUwsQ0FBMEJWLElBQTFCLENBQStCSyxNQUEvQixHQUF3QyxLQUF4QztNQWRKOztNQWdCQSxRQUFRLEtBQUs1RyxXQUFMLENBQWlCN0IsQ0FBQyxDQUFDb0osU0FBbkIsQ0FBUjtRQUNFO1VBQ0UsS0FBS0wsbUJBQUwsQ0FBeUJYLElBQXpCLENBQThCSyxNQUE5QixHQUF1QyxJQUF2QztVQUNBLEtBQUtNLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixDQUE5QjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFLElBQUluSSxrQkFBa0IsQ0FBQ3FJLGdCQUFuQixDQUFvQ0MsbUJBQXBDLEVBQUosRUFBK0Q7WUFDN0QsS0FBS0osbUJBQUwsQ0FBeUJYLElBQXpCLENBQThCSyxNQUE5QixHQUF1QyxJQUF2QztZQUNBLEtBQUtNLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixDQUE5QjtVQUNELENBSEQsTUFHTztZQUNMLEtBQUtELG1CQUFMLENBQXlCWCxJQUF6QixDQUE4QkssTUFBOUIsR0FBdUMsS0FBdkM7VUFDRDs7VUFDRDs7UUFDRixLQUFLLENBQUw7VUFDRSxLQUFLTSxtQkFBTCxDQUF5QlgsSUFBekIsQ0FBOEJLLE1BQTlCLEdBQXVDLEtBQXZDO01BZEo7SUFnQkQ7RUFDRixDQW5ERDs7RUFvREFySCxLQUFLLENBQUN5QixTQUFOLENBQWdCd0csWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxLQUFLdEMsV0FBTDtJQUNBLElBQUkxRixDQUFDLEdBQUcsQ0FBQyxLQUFLaUksU0FBTixDQUFSO0lBQ0EsSUFBSWhJLENBQUMsR0FBRyxDQUFSOztJQUNBLEtBQUssSUFBSTBCLENBQVQsSUFBYyxLQUFLekIsYUFBbkIsRUFBa0M7TUFDaEMsSUFBSS9CLE1BQU0sQ0FBQ3FELFNBQVAsQ0FBaUIwRyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBS2pJLGFBQTFDLEVBQXlEeUIsQ0FBekQsQ0FBSixFQUFpRTtRQUMvRCxJQUFJakQsQ0FBQyxHQUFHLEtBQUt3QixhQUFMLENBQW1CeUIsQ0FBbkIsQ0FBUjs7UUFDQSxRQUFRakQsQ0FBQyxDQUFDMEosUUFBRixDQUFXQyxTQUFuQjtVQUNFLEtBQUtoSixpQkFBaUIsQ0FBQzhFLHVCQUFsQixDQUEwQ21FLElBQS9DO1lBQ0UsSUFBSTVKLENBQUMsQ0FBQzZKLFNBQUYsRUFBSixFQUFtQjtjQUNqQnRJLENBQUMsSUFBSXZCLENBQUMsQ0FBQzhKLFVBQUYsRUFBTDtjQUNBeEksQ0FBQyxDQUFDaUMsSUFBRixDQUFPdkQsQ0FBUDs7Y0FDQSxJQUFJLEtBQUsyQixXQUFMLENBQWlCaEIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkMyRSxlQUE5RCxLQUFrRnpFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFLNUQsV0FBTCxDQUFpQmhCLGlCQUFpQixDQUFDeUUsMEJBQWxCLENBQTZDMkUsZUFBOUQsRUFBK0UsQ0FBL0UsQ0FBdEcsRUFBeUw7Z0JBQ3ZMeEksQ0FBQyxJQUFJbEIsU0FBUyxDQUFDd0YsTUFBVixDQUFpQmxELFdBQWpCLEdBQStCbUQsSUFBL0IsQ0FBb0Msc0JBQXBDLENBQUw7Y0FDRDtZQUNGOztZQUNEOztVQUNGLEtBQUtuRixpQkFBaUIsQ0FBQzhFLHVCQUFsQixDQUEwQ0MsWUFBL0M7WUFDRSxJQUFJMUYsQ0FBQyxDQUFDNkosU0FBRixFQUFKLEVBQW1CO2NBQ2pCdEksQ0FBQyxJQUFJdkIsQ0FBQyxDQUFDOEosVUFBRixFQUFMO2NBQ0F4SSxDQUFDLENBQUNpQyxJQUFGLENBQU92RCxDQUFQOztjQUNBLElBQUksS0FBSzJCLFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2QzRFLGVBQTlELEtBQWtGMUUsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUs1RCxXQUFMLENBQWlCaEIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkM0RSxlQUE5RCxFQUErRSxDQUEvRSxDQUF0RyxFQUF5TDtnQkFDdkx6SSxDQUFDLElBQUlsQixTQUFTLENBQUN3RixNQUFWLENBQWlCbEQsV0FBakIsR0FBK0JtRCxJQUEvQixDQUFvQyxnQ0FBcEMsQ0FBTDtjQUNEO1lBQ0Y7O1FBakJMOztRQW1CQTlGLENBQUMsQ0FBQ3NKLFlBQUY7TUFDRDtJQUNGOztJQUNELElBQUkvSCxDQUFDLEdBQUcsQ0FBUixFQUFXO01BQ1QsSUFBSSxLQUFLSSxXQUFMLENBQWlCaEIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNXLFdBQTlELENBQUosRUFBZ0Y7UUFDOUUsS0FBS25FLGVBQUwsQ0FBcUJqQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1csV0FBbEUsS0FBa0Z4RSxDQUFsRixFQUFxRixLQUFLSyxlQUFMLENBQXFCakIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNXLFdBQWxFLEtBQWtGLEVBQWxGLEtBQXlGLEtBQUtuRSxlQUFMLENBQXFCakIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNXLFdBQWxFLEtBQWtGLEVBQWxGLEVBQXNGeEUsQ0FBQyxJQUFJLEtBQUtJLFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1csV0FBOUQsRUFBMkUsQ0FBM0UsQ0FBM0YsRUFBMEsxRixTQUFTLENBQUN3RixNQUFWLENBQWlCbEQsV0FBakIsR0FBK0JtRCxJQUEvQixDQUFvQyxpQkFBcEMsRUFBdUQsS0FBS25FLFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1csV0FBOUQsRUFBMkUsQ0FBM0UsQ0FBdkQsQ0FBblEsQ0FBckY7TUFDRDs7TUFDRCxLQUFLaEUsSUFBTCxJQUFhUixDQUFiO01BQ0FWLHNCQUFzQixDQUFDaUUsbUJBQXZCLENBQTJDbkMsV0FBM0MsR0FBeURtRixjQUF6RCxHQUEwRUMsU0FBMUUsQ0FBb0ZwSCxpQkFBaUIsQ0FBQ3FILHNCQUFsQixDQUF5Q0MsU0FBN0gsRUFBd0kxRyxDQUF4STtJQUNEOztJQUNELEtBQUtjLFdBQUwsQ0FBaUI0SCxPQUFqQixDQUF5QixVQUFVM0ksQ0FBVixFQUFhO01BQ3BDQSxDQUFDLENBQUM0SSxVQUFGO0lBQ0QsQ0FGRDtJQUdBLEtBQUtqSSxNQUFMLEdBQWMsSUFBZDtJQUNBLEtBQUt1RyxPQUFMO0lBQ0EsT0FBT2xILENBQVA7RUFDRCxDQTFDRDs7RUEyQ0FELEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0JxSCxRQUFoQixHQUEyQixVQUFVN0ksQ0FBVixFQUFhO0lBQ3RDLElBQUlDLENBQUMsR0FBRyxLQUFLa0IsUUFBTCxDQUFjMkUsT0FBZCxDQUFzQixLQUFLcEYsS0FBTCxHQUFhLENBQW5DLEVBQXNDb0ksaUJBQTlDOztJQUNBLElBQUksS0FBS3hKLG9CQUFvQixDQUFDOEIsaUJBQXJCLENBQXVDQyxXQUF2QyxHQUFxRDBILGlCQUFyRCxDQUF1RS9JLENBQXZFLEVBQTBFZ0osVUFBbkYsRUFBK0Y7TUFDN0YsSUFBSXJILENBQUMsR0FBR2xDLG1CQUFtQixXQUFuQixDQUE0QndKLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q0MsUUFBN0MsQ0FBc0RDLFdBQXRELENBQWtFL0osaUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0NDLE1BQTFHLENBQVI7TUFDQTNILENBQUMsS0FBSzFCLENBQUMsSUFBSTBCLENBQUMsQ0FBQzRILEtBQUYsQ0FBUSxDQUFSLENBQVYsQ0FBRDtNQUNBLElBQUk3SyxDQUFDLEdBQUdlLG1CQUFtQixXQUFuQixDQUE0QndKLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q0MsUUFBN0MsQ0FBc0RDLFdBQXRELENBQWtFL0osaUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0NHLE1BQTFHLENBQVI7TUFDQTlLLENBQUMsS0FBS3VCLENBQUMsSUFBSXZCLENBQUMsQ0FBQzZLLEtBQUYsQ0FBUSxDQUFSLENBQVYsQ0FBRDtJQUNEOztJQUNELE9BQU90SixDQUFQO0VBQ0QsQ0FURDs7RUFVQUYsS0FBSyxDQUFDeUIsU0FBTixDQUFnQmlJLFNBQWhCLEdBQTRCLFlBQVk7SUFDdEMsT0FBTyxLQUFLdEksUUFBTCxDQUFjMkUsT0FBZCxDQUFzQixLQUFLcEYsS0FBTCxHQUFhLENBQW5DLEVBQXNDZ0osaUJBQTdDO0VBQ0QsQ0FGRDs7RUFHQTNKLEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0JtSSxPQUFoQixHQUEwQixZQUFZO0lBQ3BDLEtBQUssSUFBSTNKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2tCLE1BQUwsQ0FBWTBJLE1BQVosQ0FBbUJDLFFBQW5CLENBQTRCOUgsTUFBaEQsRUFBd0QvQixDQUFDLEVBQXpELEVBQTZEO01BQzNELElBQUlDLENBQUMsR0FBRyxLQUFLaUIsTUFBTCxDQUFZMEksTUFBWixDQUFtQkMsUUFBbkIsQ0FBNEI3SixDQUE1QixDQUFSO01BQ0FDLENBQUMsQ0FBQzZKLE1BQUYsR0FBVzlGLElBQUksQ0FBQytGLEtBQUwsQ0FBV0MsRUFBRSxDQUFDQyxPQUFILENBQVdDLE1BQXRCLElBQWdDbEcsSUFBSSxDQUFDK0YsS0FBTCxDQUFXOUosQ0FBQyxDQUFDcUQsQ0FBYixDQUEzQztNQUNBLElBQUkzQixDQUFDLEdBQUcxQixDQUFDLENBQUNrSyxZQUFGLENBQWV6SyxzQkFBc0IsV0FBckMsQ0FBUjs7TUFDQSxJQUFJaUMsQ0FBSixFQUFPO1FBQ0wsSUFBSWpELENBQUMsR0FBR1csaUJBQWlCLENBQUM4RSx1QkFBbEIsQ0FBMENpRyxJQUFsRDs7UUFDQSxLQUFLLElBQUl6TCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs4QyxTQUFMLENBQWVNLE1BQW5DLEVBQTJDcEQsQ0FBQyxFQUE1QyxFQUFnRDtVQUM5QyxJQUFJcUQsQ0FBQyxHQUFHLEtBQUtQLFNBQUwsQ0FBZTlDLENBQWYsQ0FBUjs7VUFDQSxJQUFJcUQsQ0FBQyxDQUFDSCxVQUFGLENBQWF3SSxRQUFiLENBQXNCMUksQ0FBQyxDQUFDZ0MsRUFBeEIsQ0FBSixFQUFpQztZQUMvQmpGLENBQUMsR0FBR3NELENBQUMsQ0FBQ0YsT0FBRixDQUFVRSxDQUFDLENBQUNILFVBQUYsQ0FBYXlJLE9BQWIsQ0FBcUIzSSxDQUFDLENBQUNnQyxFQUF2QixDQUFWLENBQUo7WUFDQTtVQUNEO1FBQ0Y7O1FBQ0RoQyxDQUFDLENBQUNKLFFBQUYsQ0FBVzdDLENBQVgsTUFBa0IsS0FBS3dCLGFBQUwsQ0FBbUJ5QixDQUFDLENBQUNnQyxFQUFyQixJQUEyQmhDLENBQTdDO01BQ0QsQ0FWRCxNQVVPO1FBQ0wsSUFBSVMsQ0FBQyxHQUFHbkMsQ0FBQyxDQUFDa0ssWUFBRixDQUFleEssMEJBQTBCLFdBQXpDLENBQVI7O1FBQ0EsSUFBSXlDLENBQUosRUFBTztVQUNMLEtBQUtqQyxTQUFMLENBQWU4QixJQUFmLENBQW9CRyxDQUFwQjtRQUNELENBRkQsTUFFTztVQUNMLElBQUlpRSxDQUFDLEdBQUdwRyxDQUFDLENBQUNrSyxZQUFGLENBQWV2SyxxQkFBcUIsV0FBcEMsQ0FBUjs7VUFDQSxJQUFJeUcsQ0FBSixFQUFPO1lBQ0wsUUFBUUEsQ0FBQyxDQUFDa0UsTUFBVjtjQUNFLEtBQUszSyxxQkFBcUIsQ0FBQzRLLHNCQUF0QixDQUE2Q0MsTUFBbEQ7Z0JBQ0UsS0FBS2xLLGNBQUwsQ0FBb0IwQixJQUFwQixDQUF5Qm9FLENBQXpCO2dCQUNBOztjQUNGLEtBQUt6RyxxQkFBcUIsQ0FBQzRLLHNCQUF0QixDQUE2Q0UsTUFBbEQ7Z0JBQ0UsS0FBS2pELG9CQUFMLEdBQTRCcEIsQ0FBNUI7Z0JBQ0E7O2NBQ0YsS0FBS3pHLHFCQUFxQixDQUFDNEssc0JBQXRCLENBQTZDRyxLQUFsRDtnQkFDRSxLQUFLakQsbUJBQUwsR0FBMkJyQixDQUEzQjtZQVJKOztZQVVBQSxDQUFDLENBQUNVLElBQUYsQ0FBT0ssTUFBUCxHQUFnQixLQUFoQjtVQUNEO1FBQ0Y7TUFDRjtJQUNGOztJQUNELEtBQUthLFNBQUwsR0FBaUIsS0FBSy9ILGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBakI7RUFDRCxDQXRDRDs7RUF1Q0FILEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0J5RixLQUFoQixHQUF3QixZQUFZO0lBQ2xDLEtBQUssSUFBSWpILENBQVQsSUFBYyxLQUFLRSxhQUFuQixFQUFrQztNQUNoQy9CLE1BQU0sQ0FBQ3FELFNBQVAsQ0FBaUIwRyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBS2pJLGFBQTFDLEVBQXlERixDQUF6RCxLQUErRCxLQUFLRSxhQUFMLENBQW1CRixDQUFuQixFQUFzQjRLLE1BQXRCLEVBQS9EO0lBQ0Q7RUFDRixDQUpEOztFQUtBN0ssS0FBSyxDQUFDeUIsU0FBTixDQUFnQnFKLFFBQWhCLEdBQTJCLFVBQVU3SyxDQUFWLEVBQWE7SUFDdEMsS0FBSyxJQUFJQyxDQUFULElBQWMsS0FBS0MsYUFBbkIsRUFBa0M7TUFDaEMvQixNQUFNLENBQUNxRCxTQUFQLENBQWlCMEcsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDLEtBQUtqSSxhQUExQyxFQUF5REQsQ0FBekQsS0FBK0QsS0FBS0MsYUFBTCxDQUFtQkQsQ0FBbkIsRUFBc0I0SyxRQUF0QixDQUErQjdLLENBQS9CLENBQS9EO0lBQ0Q7RUFDRixDQUpEOztFQUtBRCxLQUFLLENBQUN5QixTQUFOLENBQWdCc0osT0FBaEIsR0FBMEIsVUFBVTlLLENBQVYsRUFBYTtJQUNyQyxJQUFJLEtBQUtBLENBQVQsRUFBWTtNQUNWLE9BQU8sSUFBUDtJQUNEOztJQUNELEtBQUssSUFBSUMsQ0FBQyxHQUFHLEtBQUtnSSxTQUFMLENBQWU4QyxRQUFmLEVBQWIsRUFBd0M5SyxDQUFDLEdBQUcsQ0FBNUMsRUFBK0NBLENBQUMsRUFBaEQsRUFBb0Q7TUFDbEQsSUFBSSxLQUFLd0IsU0FBTCxDQUFleEIsQ0FBQyxHQUFHLENBQW5CLEVBQXNCNEIsVUFBdEIsQ0FBaUN3SSxRQUFqQyxDQUEwQ3JLLENBQTFDLENBQUosRUFBa0Q7UUFDaEQsT0FBTyxJQUFQO01BQ0Q7SUFDRjs7SUFDRCxPQUFPLEtBQVA7RUFDRCxDQVZEOztFQVdBRCxLQUFLLENBQUN5QixTQUFOLENBQWdCcUYsWUFBaEIsR0FBK0IsWUFBWTtJQUN6QyxJQUFJN0csQ0FBQyxHQUFHLEVBQVI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFULElBQWMsS0FBS0MsYUFBbkIsRUFBa0M7TUFDaEMsSUFBSS9CLE1BQU0sQ0FBQ3FELFNBQVAsQ0FBaUIwRyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBS2pJLGFBQTFDLEVBQXlERCxDQUF6RCxDQUFKLEVBQWlFO1FBQy9ELElBQUkwQixDQUFDLEdBQUcsS0FBS3pCLGFBQUwsQ0FBbUJELENBQW5CLENBQVI7UUFDQUQsQ0FBQyxDQUFDaUMsSUFBRixDQUFPTixDQUFQO01BQ0Q7SUFDRjs7SUFDRCxPQUFPM0IsQ0FBUDtFQUNELENBVEQ7O0VBVUFELEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0J3SixZQUFoQixHQUErQixZQUFZO0lBQ3pDLE9BQU8sS0FBSy9DLFNBQUwsQ0FBZThDLFFBQWYsRUFBUDtFQUNELENBRkQ7O0VBR0FoTCxLQUFLLENBQUN5QixTQUFOLENBQWdCeUosU0FBaEIsR0FBNEIsVUFBVWpMLENBQVYsRUFBYTtJQUN2QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0UsU0FBTCxDQUFlNEIsTUFBbkMsRUFBMkM5QixDQUFDLEVBQTVDLEVBQWdEO01BQzlDLElBQUkwQixDQUFDLEdBQUcsQ0FBQ0ssQ0FBQyxHQUFHLEtBQUs3QixTQUFMLENBQWVGLENBQWYsQ0FBTCxFQUF3QmlMLGFBQXhCLEVBQVI7O01BQ0EsS0FBSyxJQUFJeE0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lELENBQUMsQ0FBQ0ksTUFBdEIsRUFBOEJyRCxDQUFDLEVBQS9CLEVBQW1DO1FBQ2pDLElBQUlDLENBQUMsR0FBR2dELENBQUMsQ0FBQ2pELENBQUQsQ0FBVDs7UUFDQSxJQUFJc0wsRUFBRSxDQUFDbUIsWUFBSCxDQUFnQkMsV0FBaEIsQ0FBNEJwTCxDQUE1QixFQUErQnJCLENBQS9CLENBQUosRUFBdUM7VUFDckMsT0FBTyxJQUFQO1FBQ0Q7TUFDRjtJQUNGOztJQUNEZ0QsQ0FBQyxHQUFHLEtBQUtzRyxTQUFMLENBQWVpRCxhQUFmLEVBQUo7O0lBQ0EsS0FBS3hNLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lELENBQUMsQ0FBQ0ksTUFBbEIsRUFBMEJyRCxDQUFDLEVBQTNCLEVBQStCO01BQzdCQyxDQUFDLEdBQUdnRCxDQUFDLENBQUNqRCxDQUFELENBQUw7O01BQ0EsSUFBSXNMLEVBQUUsQ0FBQ21CLFlBQUgsQ0FBZ0JDLFdBQWhCLENBQTRCcEwsQ0FBNUIsRUFBK0JyQixDQUEvQixDQUFKLEVBQXVDO1FBQ3JDLE9BQU8sSUFBUDtNQUNEO0lBQ0Y7O0lBQ0QsS0FBS3NCLENBQUMsR0FBRyxLQUFLZ0ksU0FBTCxDQUFlOEMsUUFBZixFQUFULEVBQW9DOUssQ0FBQyxHQUFHLENBQXhDLEVBQTJDQSxDQUFDLEVBQTVDLEVBQWdEO01BQzlDLElBQUkrQixDQUFDLEdBQUcsS0FBS1AsU0FBTCxDQUFleEIsQ0FBQyxHQUFHLENBQW5CLENBQVI7O01BQ0EsS0FBSyxJQUFJbUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osQ0FBQyxDQUFDSCxVQUFGLENBQWFFLE1BQWpDLEVBQXlDSyxDQUFDLEVBQTFDLEVBQThDO1FBQzVDVCxDQUFDLEdBQUcsS0FBS3pCLGFBQUwsQ0FBbUI4QixDQUFDLENBQUNILFVBQUYsQ0FBYU8sQ0FBYixDQUFuQixFQUFvQzhJLGFBQXBDLEVBQUo7O1FBQ0EsS0FBS3hNLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lELENBQUMsQ0FBQ0ksTUFBbEIsRUFBMEJyRCxDQUFDLEVBQTNCLEVBQStCO1VBQzdCQyxDQUFDLEdBQUdnRCxDQUFDLENBQUNqRCxDQUFELENBQUw7O1VBQ0EsSUFBSXNMLEVBQUUsQ0FBQ21CLFlBQUgsQ0FBZ0JDLFdBQWhCLENBQTRCcEwsQ0FBNUIsRUFBK0JyQixDQUEvQixDQUFKLEVBQXVDO1lBQ3JDLE9BQU8sSUFBUDtVQUNEO1FBQ0Y7TUFDRjtJQUNGOztJQUNELE9BQU8sS0FBUDtFQUNELENBOUJEOztFQStCQW9CLEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0I2SixRQUFoQixHQUEyQixVQUFVckwsQ0FBVixFQUFhO0lBQ3RDLEtBQUthLElBQUwsQ0FBVW5DLENBQUMsQ0FBQ29HLGVBQVosS0FBZ0M5RSxDQUFoQzs7SUFDQSxJQUFJLEtBQUthLElBQUwsQ0FBVW5DLENBQUMsQ0FBQ29HLGVBQVosSUFBK0IsS0FBS2xFLFlBQXhDLEVBQXNEO01BQ3BELEtBQUtDLElBQUwsQ0FBVW5DLENBQUMsQ0FBQ29HLGVBQVosSUFBK0IsQ0FBL0I7O01BQ0EsS0FBSyxJQUFJN0UsQ0FBVCxJQUFjLEtBQUtnRyxVQUFuQixFQUErQjtRQUM3QixJQUFJOUgsTUFBTSxDQUFDcUQsU0FBUCxDQUFpQjBHLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQyxLQUFLbEMsVUFBMUMsRUFBc0RoRyxDQUF0RCxDQUFKLEVBQThEO1VBQzVELElBQUkwQixDQUFDLEdBQUcsS0FBS3NFLFVBQUwsQ0FBZ0JoRyxDQUFoQixDQUFSOztVQUNBLElBQUkwQixDQUFDLElBQUlBLENBQUMsQ0FBQ0ksTUFBRixHQUFXLENBQXBCLEVBQXVCO1lBQ3JCLElBQUlwRCxDQUFDLEdBQUdnRCxDQUFDLENBQUMsQ0FBRCxDQUFUO1lBQ0EsS0FBS1QsTUFBTCxDQUFZb0ssUUFBWixDQUFxQjNNLENBQUMsQ0FBQ29FLEVBQXZCLEVBQTJCcUQsUUFBUSxDQUFDbkcsQ0FBRCxDQUFuQztZQUNBdEIsQ0FBQyxDQUFDcUUsR0FBRjtZQUNBckUsQ0FBQyxDQUFDcUUsR0FBRixJQUFTLENBQVQsSUFBY3JCLENBQUMsQ0FBQzRKLEtBQUYsRUFBZDtVQUNEO1FBQ0Y7TUFDRjtJQUNGOztJQUNELEtBQUssSUFBSXZKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2xCLFNBQUwsQ0FBZWlCLE1BQW5DLEVBQTJDQyxDQUFDLEVBQTVDLEVBQWdEO01BQzlDLENBQUNyRCxDQUFDLEdBQUcsS0FBS21DLFNBQUwsQ0FBZWtCLENBQWYsQ0FBTCxFQUF3QndKLFFBQXhCLENBQWlDeEwsQ0FBakM7SUFDRDs7SUFDRCxJQUFJLEtBQUtLLFdBQUwsQ0FBaUJoQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1ksU0FBOUQsTUFBNkUsS0FBS3BFLGVBQUwsQ0FBcUJqQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1ksU0FBbEUsS0FBZ0YxRSxDQUFoRixFQUFtRixLQUFLTSxlQUFMLENBQXFCakIsaUJBQWlCLENBQUN5RSwwQkFBbEIsQ0FBNkNZLFNBQWxFLEtBQWdGLENBQWhQLENBQUosRUFBd1A7TUFDdFAsS0FBS3BFLGVBQUwsQ0FBcUJqQixpQkFBaUIsQ0FBQ3lFLDBCQUFsQixDQUE2Q1ksU0FBbEUsS0FBZ0YsQ0FBaEY7O01BQ0EsS0FBSyxJQUFJdEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLckIsV0FBTCxDQUFpQmdCLE1BQXJDLEVBQTZDSyxDQUFDLEVBQTlDLEVBQWtEO1FBQ2hELENBQUN6RCxDQUFDLEdBQUcsS0FBS29DLFdBQUwsQ0FBaUJxQixDQUFqQixDQUFMLEVBQTBCcUosT0FBMUIsQ0FBa0M1TCxzQkFBc0IsQ0FBQzZMLHVCQUF2QixDQUErQ0MsU0FBakYsRUFBNEY7VUFDMUZDLE1BQU0sRUFBRSxLQUFLdkwsV0FBTCxDQUFpQmhCLGlCQUFpQixDQUFDeUUsMEJBQWxCLENBQTZDWSxTQUE5RCxFQUF5RSxDQUF6RSxDQURrRjtVQUUxRjdELElBQUksRUFBRSxDQUFDO1FBRm1GLENBQTVGO01BSUQ7SUFDRjtFQUNGLENBNUJEOztFQTZCQWQsS0FBSyxDQUFDeUIsU0FBTixDQUFnQnFLLFlBQWhCLEdBQStCLFlBQVk7SUFDekMsT0FBTyxLQUFLL0ssU0FBWjtFQUNELENBRkQ7O0VBR0FmLEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0I4SixRQUFoQixHQUEyQixVQUFVdEwsQ0FBVixFQUFhO0lBQ3RDLEtBQUtjLFNBQUwsQ0FBZW1CLElBQWYsQ0FBb0JqQyxDQUFwQjtFQUNELENBRkQ7O0VBR0FELEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0JzSyxRQUFoQixHQUEyQixVQUFVOUwsQ0FBVixFQUFhO0lBQ3RDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLYSxTQUFMLENBQWVpQixNQUFuQyxFQUEyQzlCLENBQUMsRUFBNUMsRUFBZ0Q7TUFDOUMsSUFBSSxLQUFLYSxTQUFMLENBQWViLENBQWYsRUFBa0I4TCxJQUFsQixJQUEwQi9MLENBQUMsQ0FBQytMLElBQWhDLEVBQXNDO1FBQ3BDLEtBQUtqTCxTQUFMLENBQWVrTCxNQUFmLENBQXNCL0wsQ0FBdEIsRUFBeUIsQ0FBekI7UUFDQTtNQUNEO0lBQ0Y7O0lBQ0QsSUFBSTBCLENBQUMsR0FBRyxLQUFLeUgsV0FBTCxDQUFpQi9KLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDNEMsTUFBekQsQ0FBUjs7SUFDQSxJQUFJdEssQ0FBSixFQUFPO01BQ0wsS0FBS1YsT0FBTCxDQUFhdkMsQ0FBQyxDQUFDd04sWUFBZjs7TUFDQSxJQUFJLEtBQUtqTCxPQUFMLENBQWF2QyxDQUFDLENBQUN3TixZQUFmLEtBQWdDdkssQ0FBQyxDQUFDNEgsS0FBRixDQUFRLENBQVIsQ0FBcEMsRUFBZ0Q7UUFDOUMsS0FBS3RJLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQ3dOLFlBQWYsSUFBK0IsQ0FBL0IsRUFBa0MsS0FBS2pMLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQ3lOLFlBQWYsS0FBZ0N4SyxDQUFDLENBQUM0SCxLQUFGLENBQVEsQ0FBUixDQUFsRSxFQUE4RSxLQUFLdEksT0FBTCxDQUFhdkMsQ0FBQyxDQUFDeU4sWUFBZixJQUErQixFQUEvQixLQUFzQyxLQUFLbEwsT0FBTCxDQUFhdkMsQ0FBQyxDQUFDeU4sWUFBZixJQUErQixFQUFyRSxDQUE5RTtNQUNEO0lBQ0Y7O0lBQ0QsS0FBS0MsVUFBTDtFQUNELENBZkQ7O0VBZ0JBck0sS0FBSyxDQUFDeUIsU0FBTixDQUFnQjZLLGNBQWhCLEdBQWlDLFlBQVk7SUFDM0MsT0FBTyxLQUFLdEwsV0FBWjtFQUNELENBRkQ7O0VBR0FoQixLQUFLLENBQUN5QixTQUFOLENBQWdCOEssVUFBaEIsR0FBNkIsVUFBVXRNLENBQVYsRUFBYTtJQUN4QyxLQUFLZSxXQUFMLENBQWlCa0IsSUFBakIsQ0FBc0JqQyxDQUF0QjtFQUNELENBRkQ7O0VBR0FELEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0IrSyxVQUFoQixHQUE2QixVQUFVdk0sQ0FBVixFQUFhO0lBQ3hDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLYyxXQUFMLENBQWlCZ0IsTUFBckMsRUFBNkM5QixDQUFDLEVBQTlDLEVBQWtEO01BQ2hELElBQUkwQixDQUFDLEdBQUcsS0FBS1osV0FBTCxDQUFpQmQsQ0FBakIsQ0FBUjs7TUFDQSxJQUFJMEIsQ0FBQyxDQUFDb0ssSUFBRixJQUFVL0wsQ0FBQyxDQUFDK0wsSUFBaEIsRUFBc0I7UUFDcEJwSyxDQUFDLENBQUNvRixJQUFGLENBQU9DLE9BQVA7UUFDQSxLQUFLakcsV0FBTCxDQUFpQmlMLE1BQWpCLENBQXdCL0wsQ0FBeEIsRUFBMkIsQ0FBM0I7UUFDQTtNQUNEO0lBQ0Y7RUFDRixDQVREOztFQVVBRixLQUFLLENBQUN5QixTQUFOLENBQWdCNEssVUFBaEIsR0FBNkIsWUFBWTtJQUN2QyxJQUFJcE0sQ0FBQyxHQUFHLENBQVI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFULElBQWMsS0FBS2dHLFVBQW5CLEVBQStCO01BQzdCOUgsTUFBTSxDQUFDcUQsU0FBUCxDQUFpQjBHLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQyxLQUFLbEMsVUFBMUMsRUFBc0RoRyxDQUF0RCxNQUE2REQsQ0FBQyxJQUFJLEtBQUtpRyxVQUFMLENBQWdCaEcsQ0FBaEIsRUFBbUI4QixNQUFyRjtJQUNEOztJQUNELElBQUksS0FBS2pCLFNBQUwsQ0FBZWlCLE1BQWYsSUFBeUIsQ0FBekIsSUFBOEIvQixDQUFDLElBQUksQ0FBdkMsRUFBMEM7TUFDeENiLFlBQVksQ0FBQ3FOLFNBQWIsQ0FBdUJuTCxXQUF2QixHQUFxQ29MLFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRXhOLHFCQUFxQixDQUFDeU4sT0FBdEIsQ0FBOEJDLFNBQS9GLEVBQTBHLEtBQUt6TCxRQUFMLENBQWNvQixLQUFkLEdBQXNCLEdBQXRCLEdBQTRCLEtBQUs3QixLQUEzSTtNQUNBbkIsc0JBQXNCLENBQUNpRSxtQkFBdkIsQ0FBMkNuQyxXQUEzQyxHQUF5RG9DLFdBQXpELEdBQXVFb0osU0FBdkUsQ0FBaUYsS0FBSzFMLFFBQUwsQ0FBY29CLEtBQS9GLEVBQXNHLEtBQUs3QixLQUEzRzs7TUFDQSxJQUFJLEtBQUtBLEtBQUwsR0FBYSxLQUFLUyxRQUFMLENBQWMyRSxPQUFkLENBQXNCL0QsTUFBdkMsRUFBK0M7UUFDN0NqRCxXQUFXLENBQUNnTyxRQUFaLENBQXFCekwsV0FBckIsR0FBbUMwTCxJQUFuQyxDQUF3QzNOLG1CQUFtQixDQUFDNE4sbUJBQXBCLENBQXdDQyxRQUFoRjtNQUNELENBRkQsTUFFTztRQUNMbk8sV0FBVyxDQUFDZ08sUUFBWixDQUFxQnpMLFdBQXJCLEdBQW1DMEwsSUFBbkMsQ0FBd0MzTixtQkFBbUIsQ0FBQzROLG1CQUFwQixDQUF3Q0UsUUFBaEYsRUFBMEYsSUFBMUY7TUFDRDtJQUNGO0VBQ0YsQ0FkRDs7RUFlQW5OLEtBQUssQ0FBQ3lCLFNBQU4sQ0FBZ0IyTCxXQUFoQixHQUE4QixVQUFVbk4sQ0FBVixFQUFhO0lBQ3pDLElBQUlDLENBQUo7SUFDQSxJQUFJMEIsQ0FBQyxHQUFHckMsb0JBQW9CLENBQUM4QixpQkFBckIsQ0FBdUNDLFdBQXZDLEdBQXFEK0wsY0FBckQsQ0FBb0VwTixDQUFwRSxDQUFSO0lBQ0EsS0FBS2dCLFFBQUwsQ0FBY2lCLElBQWQsQ0FBbUI7TUFDakJjLEVBQUUsRUFBRS9DLENBRGE7TUFFakJxTixLQUFLLEVBQUUxTCxDQUFDLENBQUM0SCxLQUZRO01BR2pCK0QsR0FBRyxFQUFFM0w7SUFIWSxDQUFuQjs7SUFLQSxRQUFRM0IsQ0FBUjtNQUNFLEtBQUtYLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDa0UsTUFBN0M7TUFDQSxLQUFLbE8saUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0NtRSxNQUE3QztNQUNBLEtBQUtuTyxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q29FLE1BQTdDO01BQ0EsS0FBS3BPLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDcUUsTUFBN0M7TUFDQSxLQUFLck8saUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0NzRSxNQUE3QztNQUNBLEtBQUt0TyxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q3VFLE1BQTdDO01BQ0EsS0FBS3ZPLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDd0UsTUFBN0M7TUFDQSxLQUFLeE8saUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0N5RSxNQUE3QztNQUNBLEtBQUt6TyxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3QzBFLE1BQTdDO1FBQ0V0TyxtQkFBbUIsV0FBbkIsQ0FBNEJ3SixRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkM4RSxPQUE3QyxDQUFxREMsWUFBckQ7UUFDQTs7TUFDRixLQUFLNU8saUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0M2RSxNQUE3QztNQUNBLEtBQUs3TyxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3QzhFLE1BQTdDO1FBQ0UsS0FBS2xOLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQzBQLFlBQWYsSUFBK0IsQ0FBQyxLQUFLbk4sT0FBTCxDQUFhdkMsQ0FBQyxDQUFDMFAsWUFBZixLQUFnQyxDQUFqQyxJQUFzQ3pNLENBQUMsQ0FBQzRILEtBQUYsQ0FBUSxDQUFSLENBQXJFO1FBQ0EsS0FBS3RJLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQzJQLGFBQWYsSUFBZ0MsQ0FBQyxLQUFLcE4sT0FBTCxDQUFhdkMsQ0FBQyxDQUFDMlAsYUFBZixLQUFpQyxDQUFsQyxJQUF1QzFNLENBQUMsQ0FBQzRILEtBQUYsQ0FBUSxDQUFSLENBQXZFOztNQUNGLEtBQUtsSyxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q2lGLE1BQTdDO01BQ0EsS0FBS2pQLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDa0YsTUFBN0M7TUFDQSxLQUFLbFAsaUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0NtRixNQUE3QztNQUNBLEtBQUtuUCxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q29GLE1BQTdDO01BQ0EsS0FBS3BQLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDcUYsTUFBN0M7TUFDQSxLQUFLclAsaUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0NzRixNQUE3QztNQUNBLEtBQUt0UCxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q3VGLE1BQTdDO1FBQ0UsS0FBSyxJQUFJalEsQ0FBVCxJQUFjLEtBQUt1QixhQUFuQixFQUFrQztVQUNoQy9CLE1BQU0sQ0FBQ3FELFNBQVAsQ0FBaUIwRyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBS2pJLGFBQTFDLEVBQXlEdkIsQ0FBekQsS0FBK0QsQ0FBQ3lELENBQUMsR0FBRyxLQUFLbEMsYUFBTCxDQUFtQnZCLENBQW5CLENBQUwsRUFBNEJzUCxZQUE1QixFQUEvRDtRQUNEOztRQUNEOztNQUNGLEtBQUs1TyxpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q3dGLE1BQTdDO01BQ0EsS0FBS3hQLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDeUYsTUFBN0M7UUFDRXJQLG1CQUFtQixXQUFuQixDQUE0QndKLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q0MsUUFBN0MsQ0FBc0QxSSxJQUF0RCxJQUE4RGtCLENBQUMsQ0FBQzRILEtBQUYsQ0FBUSxDQUFSLENBQTlEO1FBQ0FoSyxzQkFBc0IsQ0FBQ2lFLG1CQUF2QixDQUEyQ25DLFdBQTNDLEdBQXlEbUYsY0FBekQsR0FBMEVDLFNBQTFFLENBQW9GcEgsaUJBQWlCLENBQUNxSCxzQkFBbEIsQ0FBeUNDLFNBQTdILEVBQXdJaEYsQ0FBQyxDQUFDNEgsS0FBRixDQUFRLENBQVIsQ0FBeEk7UUFDQTlKLG1CQUFtQixXQUFuQixDQUE0QndKLFFBQTVCLENBQXFDOEYsUUFBckM7UUFDQTs7TUFDRixLQUFLMVAsaUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0MyRixNQUE3QztRQUNFLElBQUloTixDQUFDLEdBQUcsRUFBUjs7UUFDQSxLQUFLLElBQUlyRCxDQUFULElBQWMsS0FBS3VCLGFBQW5CLEVBQWtDO1VBQ2hDL0IsTUFBTSxDQUFDcUQsU0FBUCxDQUFpQjBHLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQyxLQUFLakksYUFBMUMsRUFBeUR2QixDQUF6RCxLQUErRCxDQUFDeUQsQ0FBQyxHQUFHLEtBQUtsQyxhQUFMLENBQW1CdkIsQ0FBbkIsQ0FBTCxFQUE0QnlKLFFBQTVCLENBQXFDQyxTQUFyQyxJQUFrRGhKLGlCQUFpQixDQUFDOEUsdUJBQWxCLENBQTBDOEssWUFBM0osSUFBMks3TSxDQUFDLENBQUM4TSxTQUFGLEVBQTNLLElBQTRMOU0sQ0FBQyxDQUFDK00sU0FBRixDQUFZN0IsR0FBeE0sSUFBK00sQ0FBQyxVQUFVck4sQ0FBQyxHQUFHbUMsQ0FBQyxDQUFDK00sU0FBRixDQUFZN0IsR0FBWixDQUFnQjhCLFdBQTlCLEtBQThDM1EsU0FBUyxLQUFLd0IsQ0FBNUQsR0FBZ0V4QixTQUFoRSxHQUE0RXdCLENBQUMsQ0FBQzhCLE1BQS9FLElBQXlGLENBQXhTLElBQTZTSyxDQUFDLENBQUMySSxRQUFGLEtBQWUsS0FBSzlDLFNBQUwsQ0FBZThDLFFBQWYsRUFBNVQsSUFBeVYvSSxDQUFDLENBQUNDLElBQUYsQ0FBT0csQ0FBUCxDQUF6VjtRQUNEOztRQUNESixDQUFDLENBQUNELE1BQUYsR0FBVyxDQUFYLElBQWdCQyxDQUFDLENBQUMvQyxRQUFRLENBQUNvRixLQUFULENBQWVDLFVBQWYsQ0FBMEIsQ0FBMUIsRUFBNkJ0QyxDQUFDLENBQUNELE1BQS9CLENBQUQsQ0FBRCxDQUEwQ3NOLGFBQTFDLEVBQWhCO1FBQ0E7O01BQ0YsS0FBS2hRLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDaUcsTUFBN0M7UUFDRXROLENBQUMsR0FBRyxFQUFKOztRQUNBLEtBQUssSUFBSXJELENBQVQsSUFBYyxLQUFLdUIsYUFBbkIsRUFBa0M7VUFDaEMvQixNQUFNLENBQUNxRCxTQUFQLENBQWlCMEcsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDLEtBQUtqSSxhQUExQyxFQUF5RHZCLENBQXpELEtBQStELENBQUN5RCxDQUFDLEdBQUcsS0FBS2xDLGFBQUwsQ0FBbUJ2QixDQUFuQixDQUFMLEVBQTRCeUosUUFBNUIsQ0FBcUNDLFNBQXJDLElBQWtEaEosaUJBQWlCLENBQUM4RSx1QkFBbEIsQ0FBMENvTCxVQUEzSixJQUF5SyxLQUFLQyxZQUFMLENBQWtCN1EsQ0FBbEIsQ0FBekssSUFBaU0sS0FBS3lELENBQUMsQ0FBQ2MsS0FBeE0sSUFBaU5sQixDQUFDLENBQUNDLElBQUYsQ0FBT0csQ0FBUCxDQUFqTjtRQUNEOztRQUNESixDQUFDLENBQUNELE1BQUYsR0FBVyxDQUFYLElBQWdCQyxDQUFDLENBQUMvQyxRQUFRLENBQUNvRixLQUFULENBQWVDLFVBQWYsQ0FBMEIsQ0FBMUIsRUFBNkJ0QyxDQUFDLENBQUNELE1BQS9CLENBQUQsQ0FBRCxDQUEwQ3NOLGFBQTFDLEVBQWhCO1FBQ0E7O01BQ0YsS0FBS2hRLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDb0csTUFBN0M7UUFDRSxLQUFLLElBQUk5USxDQUFULElBQWMsS0FBS3VCLGFBQW5CLEVBQWtDO1VBQ2hDLElBQUlrQyxDQUFKO1VBQ0FqRSxNQUFNLENBQUNxRCxTQUFQLENBQWlCMEcsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDLEtBQUtqSSxhQUExQyxFQUF5RHZCLENBQXpELEtBQStELENBQUN5RCxDQUFDLEdBQUcsS0FBS2xDLGFBQUwsQ0FBbUJ2QixDQUFuQixDQUFMLEVBQTRCeUosUUFBNUIsQ0FBcUNDLFNBQXJDLElBQWtEaEosaUJBQWlCLENBQUM4RSx1QkFBbEIsQ0FBMENvTCxVQUEzSixJQUF5SyxLQUFLQyxZQUFMLENBQWtCN1EsQ0FBbEIsQ0FBekssSUFBaU15RCxDQUFDLENBQUMySSxRQUFGLEtBQWUsS0FBSzlDLFNBQUwsQ0FBZThDLFFBQWYsRUFBaE4sSUFBNk8zSSxDQUFDLENBQUNpTixhQUFGLEVBQTdPO1FBQ0Q7O1FBQ0Q1UCxtQkFBbUIsV0FBbkIsQ0FBNEJ3SixRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNDLFFBQTdDLENBQXNEMUksSUFBdEQsR0FBNkQsQ0FBN0Q7UUFDQWhCLG1CQUFtQixXQUFuQixDQUE0QndKLFFBQTVCLENBQXFDOEYsUUFBckM7SUFyREo7RUF1REQsQ0EvREQ7O0VBZ0VBaFAsS0FBSyxDQUFDeUIsU0FBTixDQUFnQmdPLFlBQWhCLEdBQStCLFVBQVV4UCxDQUFWLEVBQWE7SUFDMUMsSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJGLENBQW5CLENBQVI7O0lBQ0EsSUFBSUMsQ0FBQyxDQUFDbUksUUFBRixDQUFXQyxTQUFYLElBQXdCaEosaUJBQWlCLENBQUM4RSx1QkFBbEIsQ0FBMENpRyxJQUF0RSxFQUE0RTtNQUMxRSxPQUFPLEtBQVA7SUFDRDs7SUFDRCxLQUFLLElBQUl6SSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtzRyxTQUFMLENBQWU4QyxRQUFmLEVBQXBCLEVBQStDcEosQ0FBQyxFQUFoRCxFQUFvRDtNQUNsRCxJQUFJLEtBQUtGLFNBQUwsQ0FBZUUsQ0FBZixFQUFrQkUsVUFBbEIsQ0FBNkJ3SSxRQUE3QixDQUFzQ3BLLENBQUMsQ0FBQzBELEVBQXhDLENBQUosRUFBaUQ7UUFDL0MsT0FBTyxJQUFQO01BQ0Q7SUFDRjs7SUFDRCxPQUFPLEtBQVA7RUFDRCxDQVhEOztFQVlBNUQsS0FBSyxDQUFDeUIsU0FBTixDQUFnQjRILFdBQWhCLEdBQThCLFVBQVVwSixDQUFWLEVBQWE7SUFDekMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtlLFFBQUwsQ0FBY2UsTUFBbEMsRUFBMEM5QixDQUFDLEVBQTNDLEVBQStDO01BQzdDLElBQUkwQixDQUFDLEdBQUcsS0FBS1gsUUFBTCxDQUFjZixDQUFkLENBQVI7O01BQ0EsSUFBSTBCLENBQUMsQ0FBQ29CLEVBQUYsSUFBUS9DLENBQVosRUFBZTtRQUNiLE9BQU8yQixDQUFDLENBQUMyTCxHQUFUO01BQ0Q7SUFDRjs7SUFDRCxPQUFPLElBQVA7RUFDRCxDQVJEOztFQVNBdk4sS0FBSyxDQUFDeUIsU0FBTixDQUFnQmtPLGNBQWhCLEdBQWlDLFlBQVk7SUFDM0MsS0FBSzdFLFFBQUwsQ0FBYyxJQUFkO0lBQ0EsS0FBSzVKLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQ3dOLFlBQWYsSUFBK0IsQ0FBL0I7SUFDQSxLQUFLakwsT0FBTCxDQUFhdkMsQ0FBQyxDQUFDeU4sWUFBZixJQUErQixDQUEvQjtJQUNBLEtBQUtsTCxPQUFMLENBQWF2QyxDQUFDLENBQUNpUixjQUFmLElBQWlDLENBQWpDO0lBQ0EsSUFBSTNQLENBQUMsR0FBRyxLQUFLb0osV0FBTCxDQUFpQi9KLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDdUcsTUFBekQsQ0FBUjs7SUFDQSxJQUFJNVAsQ0FBQyxJQUFJLEtBQUtTLElBQUwsSUFBYSxFQUF0QixFQUEwQjtNQUN4QixLQUFLUSxPQUFMLENBQWF2QyxDQUFDLENBQUNtUixjQUFmLElBQWlDN1AsQ0FBQyxDQUFDdUosS0FBRixDQUFRLENBQVIsQ0FBakM7SUFDRCxDQUZELE1BRU87TUFDTCxLQUFLdEksT0FBTCxDQUFhdkMsQ0FBQyxDQUFDbVIsY0FBZixJQUFpQyxDQUFqQztJQUNEOztJQUNELElBQUk1UCxDQUFDLEdBQUcsS0FBS21KLFdBQUwsQ0FBaUIvSixpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3Q3lHLE1BQXpELENBQVI7O0lBQ0EsSUFBSTdQLENBQUMsSUFBSSxLQUFLLEtBQUtRLElBQW5CLEVBQXlCO01BQ3ZCLEtBQUtRLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQ3FSLFlBQWYsSUFBK0I5UCxDQUFDLENBQUNzSixLQUFGLENBQVEsQ0FBUixDQUEvQjtJQUNELENBRkQsTUFFTztNQUNMLEtBQUt0SSxPQUFMLENBQWF2QyxDQUFDLENBQUNxUixZQUFmLElBQStCLENBQS9CO0lBQ0Q7O0lBQ0QsSUFBSXBPLENBQUMsR0FBRyxLQUFLeUgsV0FBTCxDQUFpQi9KLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDMkcsTUFBekQsQ0FBUjtJQUNBck8sQ0FBQyxLQUFLLEtBQUtWLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQ3FSLFlBQWYsS0FBZ0NwTyxDQUFDLENBQUM0SCxLQUFGLENBQVEsQ0FBUixDQUFyQyxDQUFEO0lBQ0EsSUFBSTVLLENBQUMsR0FBRyxLQUFLeUssV0FBTCxDQUFpQi9KLGlCQUFpQixDQUFDZ0sscUJBQWxCLENBQXdDNEcsTUFBekQsQ0FBUjtJQUNBdFIsQ0FBQyxLQUFLLEtBQUtzQyxPQUFMLENBQWF2QyxDQUFDLENBQUNxUixZQUFmLEtBQWdDcFIsQ0FBQyxDQUFDNEssS0FBRixDQUFRLENBQVIsQ0FBckMsQ0FBRDtJQUNBLEtBQUt0SSxPQUFMLENBQWF2QyxDQUFDLENBQUN3UixpQkFBZixJQUFvQyxDQUFwQztJQUNBLElBQUlsTyxDQUFDLEdBQUcsS0FBS29ILFdBQUwsQ0FBaUIvSixpQkFBaUIsQ0FBQ2dLLHFCQUFsQixDQUF3QzhHLE1BQXpELENBQVI7SUFDQW5PLENBQUMsS0FBSyxLQUFLZixPQUFMLENBQWF2QyxDQUFDLENBQUN3UixpQkFBZixLQUFxQ2xPLENBQUMsQ0FBQ3VILEtBQUYsQ0FBUSxDQUFSLENBQTFDLENBQUQ7SUFDQSxJQUFJbkgsQ0FBQyxHQUFHLEtBQUtnSCxXQUFMLENBQWlCL0osaUJBQWlCLENBQUNnSyxxQkFBbEIsQ0FBd0MrRyxNQUF6RCxDQUFSO0lBQ0FoTyxDQUFDLEtBQUssS0FBS25CLE9BQUwsQ0FBYXZDLENBQUMsQ0FBQ3dSLGlCQUFmLEtBQXFDOU4sQ0FBQyxDQUFDbUgsS0FBRixDQUFRLENBQVIsQ0FBMUMsQ0FBRDtJQUNBLEtBQUtoSixjQUFMLENBQW9Cb0ksT0FBcEIsQ0FBNEIsVUFBVTNJLENBQVYsRUFBYTtNQUN2Q0EsQ0FBQyxDQUFDK0csSUFBRixDQUFPSyxNQUFQLEdBQWdCLEtBQWhCO0lBQ0QsQ0FGRDtJQUdBLEtBQUtLLG9CQUFMLENBQTBCVixJQUExQixDQUErQkssTUFBL0IsR0FBd0MsS0FBeEM7SUFDQSxLQUFLTSxtQkFBTCxDQUF5QlgsSUFBekIsQ0FBOEJLLE1BQTlCLEdBQXVDLEtBQXZDO0VBQ0QsQ0EvQkQ7O0VBZ0NBckgsS0FBSyxDQUFDeUIsU0FBTixDQUFnQjZPLGFBQWhCLEdBQWdDLFlBQVk7SUFDMUMsS0FBSyxJQUFJclEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLYyxTQUFMLENBQWVpQixNQUFuQyxFQUEyQy9CLENBQUMsRUFBNUMsRUFBZ0Q7TUFDOUMsS0FBS2MsU0FBTCxDQUFlZCxDQUFmLEVBQWtCcVEsYUFBbEI7SUFDRDs7SUFDRCxLQUFLclEsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLEtBQUtlLFdBQUwsQ0FBaUJnQixNQUFqQyxFQUF5Qy9CLENBQUMsRUFBMUMsRUFBOEM7TUFDNUMsS0FBS2UsV0FBTCxDQUFpQmYsQ0FBakIsRUFBb0JxUSxhQUFwQjtJQUNEOztJQUNELEtBQUssSUFBSXBRLENBQVQsSUFBYyxLQUFLQyxhQUFuQixFQUFrQztNQUNoQy9CLE1BQU0sQ0FBQ3FELFNBQVAsQ0FBaUIwRyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBS2pJLGFBQTFDLEVBQXlERCxDQUF6RCxLQUErRCxLQUFLQyxhQUFMLENBQW1CRCxDQUFuQixFQUFzQm9RLGFBQXRCLEVBQS9EO0lBQ0Q7RUFDRixDQVZEOztFQVdBLE9BQU90USxLQUFQO0FBQ0QsQ0FwbUJnQyxFQUFqQzs7QUFxbUJBMUIsT0FBTyxXQUFQLEdBQWtCeUIsMEJBQWxCOztBQUNBLENBQUMsVUFBVUUsQ0FBVixFQUFhO0VBQ1pBLENBQUMsQ0FBQzhFLGVBQUYsR0FBb0IsaUJBQXBCO0VBQ0E5RSxDQUFDLENBQUMrUCxZQUFGLEdBQWlCLGNBQWpCO0VBQ0EvUCxDQUFDLENBQUNrUSxpQkFBRixHQUFzQixtQkFBdEI7RUFDQWxRLENBQUMsQ0FBQ29PLFlBQUYsR0FBaUIsY0FBakI7RUFDQXBPLENBQUMsQ0FBQ3FPLGFBQUYsR0FBa0IsZUFBbEI7RUFDQXJPLENBQUMsQ0FBQzZQLGNBQUYsR0FBbUIsZ0JBQW5CO0VBQ0E3UCxDQUFDLENBQUMyUCxjQUFGLEdBQW1CLGdCQUFuQjtFQUNBM1AsQ0FBQyxDQUFDa00sWUFBRixHQUFpQixjQUFqQjtFQUNBbE0sQ0FBQyxDQUFDbU0sWUFBRixHQUFpQixjQUFqQjtBQUNELENBVkQsRUFVR3pOLENBQUMsR0FBR0wsT0FBTyxDQUFDRyxrQkFBUixLQUErQkgsT0FBTyxDQUFDRyxrQkFBUixHQUE2QixFQUE1RCxDQVZQOztBQVdBLENBQUMsVUFBVXdCLENBQVYsRUFBYTtFQUNaQSxDQUFDLENBQUM0SCxVQUFGLEdBQWUsb0JBQWY7RUFDQTVILENBQUMsQ0FBQytILFNBQUYsR0FBYyxtQkFBZDtFQUNBL0gsQ0FBQyxDQUFDc1EsTUFBRixHQUFXLGdCQUFYO0VBQ0F0USxDQUFDLENBQUN1USxXQUFGLEdBQWdCLHFCQUFoQjtFQUNBdlEsQ0FBQyxDQUFDd1EsS0FBRixHQUFVLGVBQVY7RUFDQXhRLENBQUMsQ0FBQ3lRLE9BQUYsR0FBWSxpQkFBWjtFQUNBelEsQ0FBQyxDQUFDMFEsT0FBRixHQUFZLGlCQUFaO0FBQ0QsQ0FSRCxFQVFHL1IsQ0FBQyxHQUFHTixPQUFPLENBQUNFLHlCQUFSLEtBQXNDRixPQUFPLENBQUNFLHlCQUFSLEdBQW9DLEVBQTFFLENBUlAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUgPSBleHBvcnRzLktpbmdodEZhbGxUaW1lVHlwZSA9IHVuZGVmaW5lZDtcbnZhciBpO1xudmFyIGE7XG52YXIgJHoxUGxhdGZvcm1TZXR0aW5nID0gcmVxdWlyZShcIlBsYXRmb3JtU2V0dGluZ1wiKTtcbnZhciAkejFFdmVudE1nciA9IHJlcXVpcmUoXCJFdmVudE1nclwiKTtcbnZhciAkejFMb2dNZ3IgPSByZXF1aXJlKFwiTG9nTWdyXCIpO1xudmFyICR6MVNka01nciA9IHJlcXVpcmUoXCJTZGtNZ3JcIik7XG52YXIgJHoxVXRpbHMgPSByZXF1aXJlKFwiVXRpbHNcIik7XG52YXIgJHoxR2FtZVRyYWNrRGF0YUV2ZW50ID0gcmVxdWlyZShcIkdhbWVUcmFja0RhdGFFdmVudFwiKTtcbnZhciAkejFQbGF5ZXJNZ3IgPSByZXF1aXJlKFwiUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbENvbmZpZ1wiKTtcbnZhciAkejFLaW5naHRGYWxsRW51bSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRW51bVwiKTtcbnZhciAkejFLaW5naHRGYWxsRGF0YU1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRGF0YU1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsUGxheWVyTWdyID0gcmVxdWlyZShcIktpbmdodEZhbGxQbGF5ZXJNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbE1vZGxlID0gcmVxdWlyZShcIktpbmdodEZhbGxNb2RsZVwiKTtcbnZhciAkejFLaW5naHRGYWxsVUlHYW1lID0gcmVxdWlyZShcIktpbmdodEZhbGxVSUdhbWVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEJ1aWxkQmFzZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQnVpbGRCYXNlXCIpO1xudmFyICR6MUtpbmdodEZhbGxCdWlsZE9ic3RhY2xlID0gcmVxdWlyZShcIktpbmdodEZhbGxCdWlsZE9ic3RhY2xlXCIpO1xudmFyICR6MUtpbmdodEZhbGxDb21tZXJjZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQ29tbWVyY2VcIik7XG52YXIgJHoxS2luZ2h0RmFsbEludGVyZmFjZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsSW50ZXJmYWNlXCIpO1xudmFyIGRlZl9LaW5naHRGYWxsR2FtZUN0cmxEYXRhID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfY3Rvcih0LCBlKSB7XG4gICAgdGhpcy5idWxpZFBvaW50TWFwID0ge307XG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcbiAgICB0aGlzLnRhbGVudEFkZCA9IHt9O1xuICAgIHRoaXMudHJlYXN1cmVBZGQgPSB7fTtcbiAgICB0aGlzLnRyZWFzdXJlQWRkVGltZSA9IHt9O1xuICAgIHRoaXMuYnVzaW5lc3NQb2ludHMgPSBbXTtcbiAgICB0aGlzLmJ1c2luZXNzQWRkID0ge307XG4gICAgdGhpcy5jb2luID0gMDtcbiAgICB0aGlzLnJvdW5kID0gMDtcbiAgICB0aGlzLmNhbk5ldyA9IHRydWU7XG4gICAgdGhpcy5wYWNrSW50ZXJ2YWwgPSAuNTtcbiAgICB0aGlzLnRpbWUgPSB7fTtcbiAgICB0aGlzLmVuZW15TGlzdCA9IFtdO1xuICAgIHRoaXMuc29sZGllckxpc3QgPSBbXTtcbiAgICB0aGlzLmJ1ZmZMaXN0ID0gW107XG4gICAgdGhpcy5hZGRUaW1lID0ge307XG4gICAgdGhpcy5jdHJQYXIgPSB0O1xuICAgIHRoaXMubGV2ZWxDZmcgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldExldmVsQ2ZnQnlJZChlKTtcbiAgICB0aGlzLmluaXREYXRhKCk7XG4gIH1cbiAgX2N0b3IucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIHRoaXMuYnVpbGRpbmdzID0gW107XG4gICAgdmFyIGUgPSB0aGlzLmxldmVsQ2ZnLkhvbWVMZXZlbDFVbmxvY2s7XG4gICAgdmFyIG4gPSB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIGJ1bGlkUG9pbnQ6IFtdLFxuICAgICAgYnVsaWRJZDogW11cbiAgICB9O1xuICAgIGZvciAodmFyIGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykge1xuICAgICAgdmFyIG8gPSBlW2FdO1xuICAgICAgbi5idWxpZElkLnB1c2gob1swXSk7XG4gICAgICBuLmJ1bGlkUG9pbnQucHVzaChvWzFdKTtcbiAgICB9XG4gICAgdGhpcy5idWlsZGluZ3MucHVzaChuKTtcbiAgICBlID0gdGhpcy5sZXZlbENmZy5Ib21lTGV2ZWwyVW5sb2NrO1xuICAgIG4gPSB7XG4gICAgICBsZXZlbDogMixcbiAgICAgIGJ1bGlkUG9pbnQ6IFtdLFxuICAgICAgYnVsaWRJZDogW11cbiAgICB9O1xuICAgIGZvciAoYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSB7XG4gICAgICBvID0gZVthXTtcbiAgICAgIG4uYnVsaWRJZC5wdXNoKG9bMF0pO1xuICAgICAgbi5idWxpZFBvaW50LnB1c2gob1sxXSk7XG4gICAgfVxuICAgIHRoaXMuYnVpbGRpbmdzLnB1c2gobik7XG4gICAgZSA9IHRoaXMubGV2ZWxDZmcuSG9tZUxldmVsM1VubG9jaztcbiAgICBuID0ge1xuICAgICAgbGV2ZWw6IDMsXG4gICAgICBidWxpZFBvaW50OiBbXSxcbiAgICAgIGJ1bGlkSWQ6IFtdXG4gICAgfTtcbiAgICBmb3IgKGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykge1xuICAgICAgbyA9IGVbYV07XG4gICAgICBuLmJ1bGlkSWQucHVzaChvWzBdKTtcbiAgICAgIG4uYnVsaWRQb2ludC5wdXNoKG9bMV0pO1xuICAgIH1cbiAgICB0aGlzLmJ1aWxkaW5ncy5wdXNoKG4pO1xuICAgIHZhciByO1xuICAgIHZhciBsID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lVGFzaygxID09IHRoaXMubGV2ZWxDZmcuTGV2ZWwgPyAxIDogMik7XG4gICAgdmFyIGggPSBsLk1pc3Npb25JRDtcbiAgICByID0gMiA9PSBsLk1pc3Npb25UeXBlID8gJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5yYW5kb21BcnJheShoLCBsLk1pc3Npb25OdW1iZXIpIDogaDtcbiAgICB2YXIgZyA9IFtdO1xuICAgIGZvciAoYSA9IDA7IGEgPCBsLkF3YXJkLmxlbmd0aDsgYSsrKSB7XG4gICAgICBnLnB1c2goe1xuICAgICAgICBpZDogbC5Bd2FyZFthXVswXSxcbiAgICAgICAgbnVtOiBsLkF3YXJkW2FdWzFdXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50YXNrSW5mbyA9IHtcbiAgICAgIGluZGV4OiAwLFxuICAgICAgbGlzdDogcixcbiAgICAgIHJld2FyZDogZyxcbiAgICAgIHN0YWdlOiAwXG4gICAgfTtcbiAgICB2YXIgeSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJlYXN1cmVDZmcoKTtcbiAgICBmb3IgKGEgPSAwOyBhIDwgeS5sZW5ndGg7IGErKykge1xuICAgICAgbyA9IHlbYV07XG4gICAgICBuID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRUcmVhc3VyZUxldmVsKG8uSUQpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdGhpcy50cmVhc3VyZUFkZFtvLklEXSA9IG51bGwgPT09ICh0ID0gby5sZXZlbEluZm9bbi5sZXZlbCAtIDFdKSB8fCB1bmRlZmluZWQgPT09IHQgPyB1bmRlZmluZWQgOiB0LnBhcmFtO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5Db3ZlbmFudE9mUGF0cmlhcmNoc10gJiYgTWF0aC5yYW5kb20oKSA8IHRoaXMudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uQ292ZW5hbnRPZlBhdHJpYXJjaHNdWzBdKSB7XG4gICAgICBoID0gW107XG4gICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHRoaXMuYnVpbGRpbmdzWzBdLmJ1bGlkSWQubGVuZ3RoOyB2KyspIHtcbiAgICAgICAgdGhpcy5idWlsZGluZ3NbMF0uYnVsaWRJZFt2XSA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Qcml2YXRlSG91c2UgJiYgaC5wdXNoKHRoaXMuYnVpbGRpbmdzWzBdLmJ1bGlkUG9pbnRbdl0pO1xuICAgICAgfVxuICAgICAgdGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uQ292ZW5hbnRPZlBhdHJpYXJjaHNdID0gaFskejFVdGlscy5VdGlscy5yYW5kb21SYW5nKDAsIGgubGVuZ3RoKV07XG4gICAgICAkejFMb2dNZ3IuTG9nTWdyLmdldEluc3RhbmNlKCkuaW5mbyhcIioqKkFuY2VzdG9yJ3MgQ29udHJhY3RcIiwgaCwgdGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uQ292ZW5hbnRPZlBhdHJpYXJjaHNdKTtcbiAgICB9XG4gICAgdGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5UYXhDb250cmFjdF0gJiYgKHRoaXMudHJlYXN1cmVBZGRUaW1lWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlRheENvbnRyYWN0XSA9IDApO1xuICAgIHRoaXMudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uV2F2ZXNGbGFnXSAmJiAodGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uV2F2ZXNGbGFnXSA9IDApO1xuICAgIHRoaXMucm91bmQgPSAwO1xuICAgIHRoaXMuY29pbiA9ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Jbml0R29sZDtcbiAgICB0aGlzLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlNpbHZlckNvaW5CYWddICYmICh0aGlzLmNvaW4gKz0gdGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5TaWx2ZXJDb2luQmFnXVswXSk7XG4gICAgdGhpcy50aW1lID0ge307XG4gICAgdGhpcy50aW1lW2kuTW9uc3RlckdlbmVyYXRlXSA9IDA7XG4gICAgdGhpcy5wYWNrSW50ZXJ2YWwgPSBOdW1iZXIoJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtUGFyYW1ldGVyQ2ZnLlJlZnJlc2hJbnRlcnZhbCkpO1xuICAgIHZhciBfID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRUYWxlbnQoKTtcbiAgICBmb3IgKGEgPSAwOyBhIDwgXy5sZW5ndGg7IGErKykge1xuICAgICAgaWYgKChvID0gX1thXSkuaXNMb2NrKSB7XG4gICAgICAgIHZhciBJID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUYWxlbnRMZXZlbENmZ0J5SWQoby5pZCk7XG4gICAgICAgIHRoaXMudGFsZW50QWRkW0kua2luZElEXSB8fCAodGhpcy50YWxlbnRBZGRbSS5raW5kSURdID0gW10pO1xuICAgICAgICB0aGlzLnRhbGVudEFkZFtJLmtpbmRJRF0ucHVzaChJLkVmZmVjdE51bWJlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9hZE1vbnN0ZXIoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFJvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucm91bmQgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YSgpLmdldFJvdW5kTnVtKCk7XG4gICAgdmFyIHQgPSB0aGlzLmxldmVsQ2ZnLldhdmVDZmdbdGhpcy5yb3VuZCAtIDFdO1xuICAgIHRoaXMudmlkZW9Db2luID0gdC5Db21tZXJjZVNsaXZlcjtcbiAgICB0aGlzLmVuZW15UXVldWUgPSB7fTtcbiAgICBmb3IgKHZhciBlID0gMDsgZSA8IHQuUmVmcmVzaFNvbGRpZXJLaW5kLmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgbiA9IHQuUmVmcmVzaFNvbGRpZXJLaW5kW2VdO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGkgPSBuLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgdmFyIGEgPSBwYXJzZUludChpWzBdKTtcbiAgICAgICAgdGhpcy5lbmVteVF1ZXVlW2FdID0gW107XG4gICAgICAgIHZhciBvID0gaVsxXS5zcGxpdChcIjtcIik7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgby5sZW5ndGg7IHIrKykge1xuICAgICAgICAgIHZhciBzID0gb1tyXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgdGhpcy5lbmVteVF1ZXVlW2FdLnB1c2goe1xuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHNbMF0pLFxuICAgICAgICAgICAgbnVtOiBwYXJzZUludChzWzFdKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29pbiA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhKCkuZ2V0Q29pbigpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUubG9hZE1vbnN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yb3VuZCsrO1xuICAgIHZhciB0ID0gdGhpcy5sZXZlbENmZy5XYXZlQ2ZnW3RoaXMucm91bmQgLSAxXTtcbiAgICB0aGlzLmNvaW4gKz0gdC5TdGFydFNsaXZlcjtcbiAgICB0aGlzLnZpZGVvQ29pbiA9IHQuQ29tbWVyY2VTbGl2ZXI7XG4gICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5hZGRBY2hOdW0oJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1BY2hpRW51bS5HZXRTbGl2ZXIsIHQuU3RhcnRTbGl2ZXIpO1xuICAgIHRoaXMuZW5lbXlRdWV1ZSA9IHt9O1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5SZWZyZXNoU29sZGllcktpbmQubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciBuID0gdC5SZWZyZXNoU29sZGllcktpbmRbZV07XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgaSA9IG4uc3BsaXQoXCIjXCIpO1xuICAgICAgICB2YXIgYSA9IHBhcnNlSW50KGlbMF0pO1xuICAgICAgICB0aGlzLmVuZW15UXVldWVbYV0gPSBbXTtcbiAgICAgICAgdmFyIG8gPSBpWzFdLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBvLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgdmFyIHMgPSBvW3JdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICB0aGlzLmVuZW15UXVldWVbYV0ucHVzaCh7XG4gICAgICAgICAgICBpZDogcGFyc2VJbnQoc1swXSksXG4gICAgICAgICAgICBudW06IHBhcnNlSW50KHNbMV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblJlc3RhcnQgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRCdWxpZExpc3QoKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgIGVbbl0ucmVzZXQodCk7XG4gICAgfVxuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLnJvdW5kID0gMDtcbiAgICAgIHRoaXMuY29pbiA9ICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Jbml0R29sZDtcbiAgICAgIHRoaXMudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uU2lsdmVyQ29pbkJhZ10gJiYgKHRoaXMuY29pbiArPSB0aGlzLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlNpbHZlckNvaW5CYWddWzBdKTtcbiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5zb2xkaWVyTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICB0aGlzLnNvbGRpZXJMaXN0W2FdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zb2xkaWVyTGlzdCA9IFtdO1xuICAgICAgdGhpcy5idXNpbmVzc0FkZCA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbyA9IHRoaXMubGV2ZWxDZmcuV2F2ZUNmZ1t0aGlzLnJvdW5kIC0gMV07XG4gICAgICB0aGlzLmNvaW4gLT0gby5TdGFydFNsaXZlcjtcbiAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuYWRkQWNoTnVtKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQWNoaUVudW0uR2V0U2xpdmVyLCAtby5TdGFydFNsaXZlcik7XG4gICAgICB0aGlzLnJvdW5kLS07XG4gICAgfVxuICAgIHRoaXMudGltZVtpLk1vbnN0ZXJHZW5lcmF0ZV0gPSAwO1xuICAgIHRoaXMubG9hZE1vbnN0ZXIoKTtcbiAgICB0aGlzLnVwTWFwKCk7XG4gICAgZm9yIChhID0gMDsgYSA8IHRoaXMuZW5lbXlMaXN0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICB0aGlzLmVuZW15TGlzdFthXS5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5lbmVteUxpc3QgPSBbXTtcbiAgICB0aGlzLmNhbk5ldyA9IHRydWU7XG4gICAgdGhpcy5pbml0Q29tKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0Q29tID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNhbk5ldykge1xuICAgICAgaWYgKHRoaXMuYXBwZWFyQnVzaW5lc3NQb2ludHMpIHtcbiAgICAgICAgdGhpcy5hcHBlYXJCdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlLCB0aGlzLmFwcGVhckJ1c2luZXNzUG9pbnRzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5hcHBlYXJCdXNpbmVzc1BvaW50cykge1xuICAgICAgICB0aGlzLmNhbk5ldyA9IGZhbHNlLCB0aGlzLmFwcGVhckJ1c2luZXNzUG9pbnRzID0gdGhpcy5idXNpbmVzc1BvaW50c1skejFVdGlscy5VdGlscy5yYW5kb21SYW5nKDAsIHRoaXMuYnVzaW5lc3NQb2ludHMubGVuZ3RoKV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgkejFTZGtNZ3IuU2RrTWdyLmdldEluc3RhbmNlKCkuZ2V0Q2hlY2tWZXJzaW9uKCR6MVBsYXRmb3JtU2V0dGluZy5Td2l0Y2hJRC5TaGVuSGUpKSB7XG4gICAgICB0aGlzLmFwcGVhckJ1c2luZXNzUG9pbnRzICYmICh0aGlzLmFwcGVhckJ1c2luZXNzUG9pbnRzLm5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgdGhpcy53ZWFwb25CdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ob3JzZUJ1c2luZXNzUG9pbnRzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFwcGVhckJ1c2luZXNzUG9pbnRzKSB7XG4gICAgICAgIHRoaXMuYXBwZWFyQnVzaW5lc3NQb2ludHMuaW5pdCgxKTtcbiAgICAgICAgdGhpcy5hcHBlYXJCdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHRoaXMuYnVzaW5lc3NBZGRbYS5GbGFnV2VhcG9uXSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMud2VhcG9uQnVzaW5lc3NQb2ludHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMud2VhcG9uQnVzaW5lc3NQb2ludHMuaW5pdCgxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICgkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbFN3aXRjaC5pc01hcFNob3BTZWNvbmRPcGVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uQnVzaW5lc3NQb2ludHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53ZWFwb25CdXNpbmVzc1BvaW50cy5pbml0KDIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbkJ1c2luZXNzUG9pbnRzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy53ZWFwb25CdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0aGlzLmJ1c2luZXNzQWRkW2EuRmxhZ0hvcnNlXSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuaG9yc2VCdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5ob3JzZUJ1c2luZXNzUG9pbnRzLmluaXQoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxTd2l0Y2guaXNNYXBTaG9wU2Vjb25kT3BlbigpKSB7XG4gICAgICAgICAgICB0aGlzLmhvcnNlQnVzaW5lc3NQb2ludHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ob3JzZUJ1c2luZXNzUG9pbnRzLmluaXQoMik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaG9yc2VCdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuaG9yc2VCdXNpbmVzc1BvaW50cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmVuZFJvdW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxvYWRNb25zdGVyKCk7XG4gICAgdmFyIHQgPSBbdGhpcy5iYXNlQnVpbGRdO1xuICAgIHZhciBlID0gMDtcbiAgICBmb3IgKHZhciBuIGluIHRoaXMuYnVsaWRQb2ludE1hcCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJ1bGlkUG9pbnRNYXAsIG4pKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5idWxpZFBvaW50TWFwW25dO1xuICAgICAgICBzd2l0Y2ggKGkuYnVpbGRDZmcuZW51bVZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5NaWxsOlxuICAgICAgICAgICAgaWYgKGkuZ2V0SXNXb3JrKCkpIHtcbiAgICAgICAgICAgICAgZSArPSBpLmdldEdldENvaW4oKTtcbiAgICAgICAgICAgICAgdC5wdXNoKGkpO1xuICAgICAgICAgICAgICBpZiAodGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5NaWxsT2ZBYnVuZGFuY2VdICYmIE1hdGgucmFuZG9tKCkgPCB0aGlzLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLk1pbGxPZkFidW5kYW5jZV1bMF0pIHtcbiAgICAgICAgICAgICAgICBlKyssICR6MUxvZ01nci5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5pbmZvKFwiKioqTWlsbCBvZiBGZXJ0aWxpdHlcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uUHJpdmF0ZUhvdXNlOlxuICAgICAgICAgICAgaWYgKGkuZ2V0SXNXb3JrKCkpIHtcbiAgICAgICAgICAgICAgZSArPSBpLmdldEdldENvaW4oKTtcbiAgICAgICAgICAgICAgdC5wdXNoKGkpO1xuICAgICAgICAgICAgICBpZiAodGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5TaWx2ZXJDb2luSG91c2VdICYmIE1hdGgucmFuZG9tKCkgPCB0aGlzLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlNpbHZlckNvaW5Ib3VzZV1bMF0pIHtcbiAgICAgICAgICAgICAgICBlKyssICR6MUxvZ01nci5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5pbmZvKFwiKioqc2lsdmVyIFlpZWxkIEluY3JlYXNlIEhvdXNlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaS5lbmRSb3VuZEdhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUgPiAwKSB7XG4gICAgICBpZiAodGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5UYXhDb250cmFjdF0pIHtcbiAgICAgICAgdGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uVGF4Q29udHJhY3RdICs9IGUsIHRoaXMudHJlYXN1cmVBZGRUaW1lWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlRheENvbnRyYWN0XSA+PSAxMCAmJiAodGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uVGF4Q29udHJhY3RdIC09IDEwLCBlICs9IHRoaXMudHJlYXN1cmVBZGRbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uVGF4Q29udHJhY3RdWzBdLCAkejFMb2dNZ3IuTG9nTWdyLmdldEluc3RhbmNlKCkuaW5mbyhcIioqKnRheCBjb3ZlbmFudFwiLCB0aGlzLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlRheENvbnRyYWN0XVswXSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2luICs9IGU7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uRGF0YSgpLmFkZEFjaE51bSgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUFjaGlFbnVtLkdldFNsaXZlciwgZSk7XG4gICAgfVxuICAgIHRoaXMuc29sZGllckxpc3QuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5kZWxBbGxCdWZmKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jYW5OZXcgPSB0cnVlO1xuICAgIHRoaXMuaW5pdENvbSgpO1xuICAgIHJldHVybiB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0SHBBZGQgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcy5sZXZlbENmZy5XYXZlQ2ZnW3RoaXMucm91bmQgLSAxXS5IZWFsdGhDb2VmZmljaWVudDtcbiAgICBpZiAoMSA9PSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFNvbGRpZXJDZmdCeUlkKHQpLkF0dGFja1R5cGUpIHtcbiAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYyNSk7XG4gICAgICBuICYmIChlIC09IG4uUGFtZXJbMF0pO1xuICAgICAgdmFyIGkgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjM4KTtcbiAgICAgIGkgJiYgKGUgLT0gaS5QYW1lclswXSk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0QXR0QWRkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsQ2ZnLldhdmVDZmdbdGhpcy5yb3VuZCAtIDFdLkF0dGFja0NvZWZmaWNpZW50O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuY3RyUGFyLm5kTWFpbi5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgdmFyIGUgPSB0aGlzLmN0clBhci5uZE1haW4uY2hpbGRyZW5bdF07XG4gICAgICBlLnpJbmRleCA9IE1hdGguZmxvb3IoY2Mud2luU2l6ZS5oZWlnaHQpIC0gTWF0aC5mbG9vcihlLnkpO1xuICAgICAgdmFyIG4gPSBlLmdldENvbXBvbmVudCgkejFLaW5naHRGYWxsQnVpbGRCYXNlLmRlZmF1bHQpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGkgPSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Ob25lO1xuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuYnVpbGRpbmdzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLmJ1aWxkaW5nc1thXTtcbiAgICAgICAgICBpZiAoby5idWxpZFBvaW50LmluY2x1ZGVzKG4uSUQpKSB7XG4gICAgICAgICAgICBpID0gby5idWxpZElkW28uYnVsaWRQb2ludC5pbmRleE9mKG4uSUQpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuLmluaXREYXRhKGkpICYmICh0aGlzLmJ1bGlkUG9pbnRNYXBbbi5JRF0gPSBuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByID0gZS5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEJ1aWxkT2JzdGFjbGUuZGVmYXVsdCk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgdGhpcy5vYnN0YWNsZXMucHVzaChyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcyA9IGUuZ2V0Q29tcG9uZW50KCR6MUtpbmdodEZhbGxDb21tZXJjZS5kZWZhdWx0KTtcbiAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgc3dpdGNoIChzLm5kVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxDb21tZXJjZS5LaW5naHRGYWxsQ29tbWVyY2VUeXBlLlNpbHZlcjpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1c2luZXNzUG9pbnRzLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbENvbW1lcmNlLktpbmdodEZhbGxDb21tZXJjZVR5cGUuV2VhcG9uOlxuICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uQnVzaW5lc3NQb2ludHMgPSBzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxDb21tZXJjZS5LaW5naHRGYWxsQ29tbWVyY2VUeXBlLkhvcnNlOlxuICAgICAgICAgICAgICAgIHRoaXMuaG9yc2VCdXNpbmVzc1BvaW50cyA9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmFzZUJ1aWxkID0gdGhpcy5idWxpZFBvaW50TWFwWzFdO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUudXBNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgdCBpbiB0aGlzLmJ1bGlkUG9pbnRNYXApIHtcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJ1bGlkUG9pbnRNYXAsIHQpICYmIHRoaXMuYnVsaWRQb2ludE1hcFt0XS51cERhdGEoKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMaWdodCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgZSBpbiB0aGlzLmJ1bGlkUG9pbnRNYXApIHtcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJ1bGlkUG9pbnRNYXAsIGUpICYmIHRoaXMuYnVsaWRQb2ludE1hcFtlXS5zZXRMaWdodCh0KTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5jYW5Mb2NrID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAoMSA9PSB0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgZSA9IHRoaXMuYmFzZUJ1aWxkLmdldExldmVsKCk7IGUgPiAwOyBlLS0pIHtcbiAgICAgIGlmICh0aGlzLmJ1aWxkaW5nc1tlIC0gMV0uYnVsaWRQb2ludC5pbmNsdWRlcyh0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0QnVsaWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gW107XG4gICAgZm9yICh2YXIgZSBpbiB0aGlzLmJ1bGlkUG9pbnRNYXApIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5idWxpZFBvaW50TWFwLCBlKSkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuYnVsaWRQb2ludE1hcFtlXTtcbiAgICAgICAgdC5wdXNoKG4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEJhc2VMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlQnVpbGQuZ2V0TGV2ZWwoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmlzQmxvY2tlZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLm9ic3RhY2xlcy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG4gPSAobyA9IHRoaXMub2JzdGFjbGVzW2VdKS5nZXRXcG9zUGh5Q29sKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGEgPSBuW2ldO1xuICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnJlY3RQb2x5Z29uKHQsIGEpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbiA9IHRoaXMuYmFzZUJ1aWxkLmdldFdwb3NQaHlDb2woKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKykge1xuICAgICAgYSA9IG5baV07XG4gICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnJlY3RQb2x5Z29uKHQsIGEpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGUgPSB0aGlzLmJhc2VCdWlsZC5nZXRMZXZlbCgpOyBlID4gMDsgZS0tKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuYnVpbGRpbmdzW2UgLSAxXTtcbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgby5idWxpZFBvaW50Lmxlbmd0aDsgcisrKSB7XG4gICAgICAgIG4gPSB0aGlzLmJ1bGlkUG9pbnRNYXBbby5idWxpZFBvaW50W3JdXS5nZXRXcG9zUGh5Q29sKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYSA9IG5baV07XG4gICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5yZWN0UG9seWdvbih0LCBhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uVXBkYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLnRpbWVbaS5Nb25zdGVyR2VuZXJhdGVdICs9IHQ7XG4gICAgaWYgKHRoaXMudGltZVtpLk1vbnN0ZXJHZW5lcmF0ZV0gPiB0aGlzLnBhY2tJbnRlcnZhbCkge1xuICAgICAgdGhpcy50aW1lW2kuTW9uc3RlckdlbmVyYXRlXSA9IDA7XG4gICAgICBmb3IgKHZhciBlIGluIHRoaXMuZW5lbXlRdWV1ZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZW5lbXlRdWV1ZSwgZSkpIHtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMuZW5lbXlRdWV1ZVtlXTtcbiAgICAgICAgICBpZiAobiAmJiBuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBhID0gblswXTtcbiAgICAgICAgICAgIHRoaXMuY3RyUGFyLmFkZEVuZW15KGEuaWQsIHBhcnNlSW50KGUpKTtcbiAgICAgICAgICAgIGEubnVtLS07XG4gICAgICAgICAgICBhLm51bSA8PSAwICYmIG4uc2hpZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLmVuZW15TGlzdC5sZW5ndGg7IG8rKykge1xuICAgICAgKGEgPSB0aGlzLmVuZW15TGlzdFtvXSkub25VcGRhdGUodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLldhdmVzRmxhZ10gJiYgKHRoaXMudHJlYXN1cmVBZGRUaW1lWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLldhdmVzRmxhZ10gKz0gdCwgdGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uV2F2ZXNGbGFnXSA+PSA1KSkge1xuICAgICAgdGhpcy50cmVhc3VyZUFkZFRpbWVbJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uV2F2ZXNGbGFnXSAtPSA1O1xuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLnNvbGRpZXJMaXN0Lmxlbmd0aDsgcisrKSB7XG4gICAgICAgIChhID0gdGhpcy5zb2xkaWVyTGlzdFtyXSkuYWRkQnVmZigkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxFbmVteUJ1ZmZUeXBlLkRhbWFnZUFkZCwge1xuICAgICAgICAgIGFkZE51bTogdGhpcy50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5XYXZlc0ZsYWddWzBdLFxuICAgICAgICAgIHRpbWU6IC0xXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldEVuZW15TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmVteUxpc3Q7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRFbmVteSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5lbmVteUxpc3QucHVzaCh0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRlbEVuZW15ID0gZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuZW5lbXlMaXN0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICBpZiAodGhpcy5lbmVteUxpc3RbZV0udXVpZCA9PSB0LnV1aWQpIHtcbiAgICAgICAgdGhpcy5lbmVteUxpc3Quc3BsaWNlKGUsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG4gPSB0aGlzLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMDMpO1xuICAgIGlmIChuKSB7XG4gICAgICB0aGlzLmFkZFRpbWVbaS5LaWxsU29sZGllcjFdKys7XG4gICAgICBpZiAodGhpcy5hZGRUaW1lW2kuS2lsbFNvbGRpZXIxXSA+PSBuLlBhbWVyWzBdKSB7XG4gICAgICAgIHRoaXMuYWRkVGltZVtpLktpbGxTb2xkaWVyMV0gPSAwLCB0aGlzLmFkZFRpbWVbaS5LaWxsU29sZGllcjJdICs9IG4uUGFtZXJbMV0sIHRoaXMuYWRkVGltZVtpLktpbGxTb2xkaWVyMl0gPiAxMCAmJiAodGhpcy5hZGRUaW1lW2kuS2lsbFNvbGRpZXIyXSA9IDEwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50cnlFbmRHYW1lKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRTb2xkaWVyTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5zb2xkaWVyTGlzdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmFkZFNvbGRpZXIgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuc29sZGllckxpc3QucHVzaCh0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmRlbFNvbGRpZXIgPSBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5zb2xkaWVyTGlzdC5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG4gPSB0aGlzLnNvbGRpZXJMaXN0W2VdO1xuICAgICAgaWYgKG4udXVpZCA9PSB0LnV1aWQpIHtcbiAgICAgICAgbi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zb2xkaWVyTGlzdC5zcGxpY2UoZSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnRyeUVuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAwO1xuICAgIGZvciAodmFyIGUgaW4gdGhpcy5lbmVteVF1ZXVlKSB7XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5lbmVteVF1ZXVlLCBlKSAmJiAodCArPSB0aGlzLmVuZW15UXVldWVbZV0ubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5lbXlMaXN0Lmxlbmd0aCA8PSAwICYmIHQgPD0gMCkge1xuICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5zdGFydF9YX1ksIHRoaXMubGV2ZWxDZmcuTGV2ZWwgKyBcIl9cIiArIHRoaXMucm91bmQpO1xuICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5wYXNzT3JkZXIodGhpcy5sZXZlbENmZy5MZXZlbCwgdGhpcy5yb3VuZCk7XG4gICAgICBpZiAodGhpcy5yb3VuZCA8IHRoaXMubGV2ZWxDZmcuV2F2ZUNmZy5sZW5ndGgpIHtcbiAgICAgICAgJHoxRXZlbnRNZ3IuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5Sb3VuZEVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkejFFdmVudE1nci5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVPdmVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRHYW1lQnVmZiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGU7XG4gICAgdmFyIG4gPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEJ1ZmZDZmdCeUlkKHQpO1xuICAgIHRoaXMuYnVmZkxpc3QucHVzaCh7XG4gICAgICBpZDogdCxcbiAgICAgIHBhbWVyOiBuLlBhbWVyLFxuICAgICAgY2ZnOiBuXG4gICAgfSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMDE6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMTQ6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjE6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjI6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMzY6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMzc6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDA6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDE6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDI6XG4gICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmN0clBsYXkuaW5pdEJ1ZmZEYXRhKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjAyOlxuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjU3OlxuICAgICAgICB0aGlzLmFkZFRpbWVbaS5Tb2xkaWVyTWF4SHBdID0gKHRoaXMuYWRkVGltZVtpLlNvbGRpZXJNYXhIcF0gfHwgMCkgKyBuLlBhbWVyWzBdO1xuICAgICAgICB0aGlzLmFkZFRpbWVbaS5Tb2xkaWVyRGFtYWdlXSA9ICh0aGlzLmFkZFRpbWVbaS5Tb2xkaWVyRGFtYWdlXSB8fCAwKSArIG4uUGFtZXJbMV07XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMDc6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMDk6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjM6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMjY6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmMzI6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDM6XG4gICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDc6XG4gICAgICAgIGZvciAodmFyIGEgaW4gdGhpcy5idWxpZFBvaW50TWFwKSB7XG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuYnVsaWRQb2ludE1hcCwgYSkgJiYgKHIgPSB0aGlzLmJ1bGlkUG9pbnRNYXBbYV0pLmluaXRCdWZmRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjEwOlxuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjI5OlxuICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5jb2luICs9IG4uUGFtZXJbMF07XG4gICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuYWRkQWNoTnVtKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQWNoaUVudW0uR2V0U2xpdmVyLCBuLlBhbWVyWzBdKTtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmluaXRWaWV3KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjExOlxuICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBhIGluIHRoaXMuYnVsaWRQb2ludE1hcCkge1xuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJ1bGlkUG9pbnRNYXAsIGEpICYmIChyID0gdGhpcy5idWxpZFBvaW50TWFwW2FdKS5idWlsZENmZy5lbnVtVmFsdWUgIT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQ2FzdGxlQ2VudGVyICYmIHIuZ2V0SXNMb2NrKCkgJiYgci5idWlsZEluZm8uY2ZnICYmIChudWxsID09PSAoZSA9IHIuYnVpbGRJbmZvLmNmZy5CcmFuY2hCdWlsZCkgfHwgdW5kZWZpbmVkID09PSBlID8gdW5kZWZpbmVkIDogZS5sZW5ndGgpID4gMSAmJiByLmdldExldmVsKCkgPCB0aGlzLmJhc2VCdWlsZC5nZXRMZXZlbCgpICYmIG8ucHVzaChyKTtcbiAgICAgICAgfVxuICAgICAgICBvLmxlbmd0aCA+IDAgJiYgb1skejFVdGlscy5VdGlscy5yYW5kb21SYW5nKDAsIG8ubGVuZ3RoKV0ub25CdWZmVXBncmFkZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYxMjpcbiAgICAgICAgbyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBhIGluIHRoaXMuYnVsaWRQb2ludE1hcCkge1xuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJ1bGlkUG9pbnRNYXAsIGEpICYmIChyID0gdGhpcy5idWxpZFBvaW50TWFwW2FdKS5idWlsZENmZy5lbnVtVmFsdWUgPT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQXJyb3dUb3dlciAmJiB0aGlzLmNhbkxvY2tCdWlsZChhKSAmJiAwID09IHIuaW5kZXggJiYgby5wdXNoKHIpO1xuICAgICAgICB9XG4gICAgICAgIG8ubGVuZ3RoID4gMCAmJiBvWyR6MVV0aWxzLlV0aWxzLnJhbmRvbVJhbmcoMCwgby5sZW5ndGgpXS5vbkJ1ZmZVcGdyYWRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjI0OlxuICAgICAgICBmb3IgKHZhciBhIGluIHRoaXMuYnVsaWRQb2ludE1hcCkge1xuICAgICAgICAgIHZhciByO1xuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmJ1bGlkUG9pbnRNYXAsIGEpICYmIChyID0gdGhpcy5idWxpZFBvaW50TWFwW2FdKS5idWlsZENmZy5lbnVtVmFsdWUgPT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQXJyb3dUb3dlciAmJiB0aGlzLmNhbkxvY2tCdWlsZChhKSAmJiByLmdldExldmVsKCkgPCB0aGlzLmJhc2VCdWlsZC5nZXRMZXZlbCgpICYmIHIub25CdWZmVXBncmFkZSgpO1xuICAgICAgICB9XG4gICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmNvaW4gPSAwO1xuICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuaW5pdFZpZXcoKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5jYW5Mb2NrQnVpbGQgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcy5idWxpZFBvaW50TWFwW3RdO1xuICAgIGlmIChlLmJ1aWxkQ2ZnLmVudW1WYWx1ZSA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Ob25lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy5iYXNlQnVpbGQuZ2V0TGV2ZWwoKTsgbisrKSB7XG4gICAgICBpZiAodGhpcy5idWlsZGluZ3Nbbl0uYnVsaWRQb2ludC5pbmNsdWRlcyhlLklEKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0R2FtZUJ1ZmYgPSBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5idWZmTGlzdC5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG4gPSB0aGlzLmJ1ZmZMaXN0W2VdO1xuICAgICAgaWYgKG4uaWQgPT0gdCkge1xuICAgICAgICByZXR1cm4gbi5jZmc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnRSb3VuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRMaWdodCh0cnVlKTtcbiAgICB0aGlzLmFkZFRpbWVbaS5LaWxsU29sZGllcjFdID0gMDtcbiAgICB0aGlzLmFkZFRpbWVbaS5LaWxsU29sZGllcjJdID0gMDtcbiAgICB0aGlzLmFkZFRpbWVbaS5Tb2xkaWVyRGFtYWdlMl0gPSAwO1xuICAgIHZhciB0ID0gdGhpcy5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjE3KTtcbiAgICBpZiAodCAmJiB0aGlzLmNvaW4gPj0gMTApIHtcbiAgICAgIHRoaXMuYWRkVGltZVtpLlNvbGRpZXJEYW1hZ2UxXSA9IHQuUGFtZXJbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkVGltZVtpLlNvbGRpZXJEYW1hZ2UxXSA9IDA7XG4gICAgfVxuICAgIHZhciBlID0gdGhpcy5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjE5KTtcbiAgICBpZiAoZSAmJiAwID09IHRoaXMuY29pbikge1xuICAgICAgdGhpcy5hZGRUaW1lW2kuUGxheWVyRGFtYWdlXSA9IGUuUGFtZXJbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkVGltZVtpLlBsYXllckRhbWFnZV0gPSAwO1xuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYyNyk7XG4gICAgbiAmJiAodGhpcy5hZGRUaW1lW2kuUGxheWVyRGFtYWdlXSArPSBuLlBhbWVyWzBdKTtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmY0OSk7XG4gICAgYSAmJiAodGhpcy5hZGRUaW1lW2kuUGxheWVyRGFtYWdlXSArPSBhLlBhbWVyWzBdKTtcbiAgICB0aGlzLmFkZFRpbWVbaS5QbGF5ZXJBdHRhY2tTcGVlZF0gPSAwO1xuICAgIHZhciBvID0gdGhpcy5nZXRHYW1lQnVmZigkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1ZmZDZmcuQnVmZjI4KTtcbiAgICBvICYmICh0aGlzLmFkZFRpbWVbaS5QbGF5ZXJBdHRhY2tTcGVlZF0gKz0gby5QYW1lclswXSk7XG4gICAgdmFyIHIgPSB0aGlzLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNTApO1xuICAgIHIgJiYgKHRoaXMuYWRkVGltZVtpLlBsYXllckF0dGFja1NwZWVkXSArPSByLlBhbWVyWzBdKTtcbiAgICB0aGlzLmJ1c2luZXNzUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLndlYXBvbkJ1c2luZXNzUG9pbnRzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5ob3JzZUJ1c2luZXNzUG9pbnRzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkNoYW5nZVNwZWVkID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5lbmVteUxpc3QubGVuZ3RoOyB0KyspIHtcbiAgICAgIHRoaXMuZW5lbXlMaXN0W3RdLm9uQ2hhbmdlU3BlZWQoKTtcbiAgICB9XG4gICAgZm9yICh0ID0gMDsgdCA8IHRoaXMuc29sZGllckxpc3QubGVuZ3RoOyB0KyspIHtcbiAgICAgIHRoaXMuc29sZGllckxpc3RbdF0ub25DaGFuZ2VTcGVlZCgpO1xuICAgIH1cbiAgICBmb3IgKHZhciBlIGluIHRoaXMuYnVsaWRQb2ludE1hcCkge1xuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuYnVsaWRQb2ludE1hcCwgZSkgJiYgdGhpcy5idWxpZFBvaW50TWFwW2VdLm9uQ2hhbmdlU3BlZWQoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfY3Rvcjtcbn0oKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsR2FtZUN0cmxEYXRhO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHQuTW9uc3RlckdlbmVyYXRlID0gXCJNb25zdGVyR2VuZXJhdGVcIjtcbiAgdC5QbGF5ZXJEYW1hZ2UgPSBcIlBsYXllckRhbWFnZVwiO1xuICB0LlBsYXllckF0dGFja1NwZWVkID0gXCJQbGF5ZXJBdHRhY2tTcGVlZFwiO1xuICB0LlNvbGRpZXJNYXhIcCA9IFwiU29sZGllck1heEhwXCI7XG4gIHQuU29sZGllckRhbWFnZSA9IFwiU29sZGllckRhbWFnZVwiO1xuICB0LlNvbGRpZXJEYW1hZ2UxID0gXCJTb2xkaWVyRGFtYWdlMVwiO1xuICB0LlNvbGRpZXJEYW1hZ2UyID0gXCJTb2xkaWVyRGFtYWdlMlwiO1xuICB0LktpbGxTb2xkaWVyMSA9IFwiS2lsbFNvbGRpZXIxXCI7XG4gIHQuS2lsbFNvbGRpZXIyID0gXCJLaWxsU29sZGllcjJcIjtcbn0pKGkgPSBleHBvcnRzLktpbmdodEZhbGxUaW1lVHlwZSB8fCAoZXhwb3J0cy5LaW5naHRGYWxsVGltZVR5cGUgPSB7fSkpO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHQuRmxhZ1dlYXBvbiA9IFwiQ29tbWVyY2VGbGFnV2VhcG9uXCI7XG4gIHQuRmxhZ0hvcnNlID0gXCJDb21tZXJjZUZsYWdIb3JzZVwiO1xuICB0LkF0dGFjayA9IFwiQ29tbWVyY2VBdHRhY2tcIjtcbiAgdC5BdHRhY2tTcGVlZCA9IFwiQ29tbWVyY2VBdHRhY2tTcGVlZFwiO1xuICB0LlNwZWVkID0gXCJDb21tZXJjZVNwZWVkXCI7XG4gIHQuRW5lcmd5MSA9IFwiQ29tbWVyY2VFbmVyZ3kxXCI7XG4gIHQuRW5lcmd5MiA9IFwiQ29tbWVyY2VFbmVyZ3kyXCI7XG59KShhID0gZXhwb3J0cy5LaW5naHRGYWxsQ29tbWVyY2VLZXlUeXBlIHx8IChleHBvcnRzLktpbmdodEZhbGxDb21tZXJjZUtleVR5cGUgPSB7fSkpOyJdfQ==