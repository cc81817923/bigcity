
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallBuildBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ab08wNgihH+4EAmVVeV0yF', 'KinghtFallBuildBase');
// _script/KinghtFallBuildBase.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KinghtFallBuildAniName = undefined;
var r;

var $z1AudioMgr = require("AudioMgr");

var $z1EventMgr = require("EventMgr");

var $z1UIMgr = require("UIMgr");

var $z1Config = require("Config");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallItemHp = require("KinghtFallItemHp");

var $z1KinghtFallUIGame = require("KinghtFallUIGame");

var $z1KinghtFallInterface = require("KinghtFallInterface");

var $z1KinghtFallBuildInfo = require("KinghtFallBuildInfo");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallBuildBase = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ID = 0;
    e.ndMove = [];
    e.ndHp = null;
    e.ndLockList = [null];
    e.ndAniMain = null;
    e.ndAniDown = null;
    e.ndAniOther = [];
    e.isBig = true;
    e.canLock = false;
    e.buildInfo = null;
    e.isDestroyed = false;
    e.ctrHp = null;
    e.ndCoin = null;
    e.colPoint = {};
    e.standTimeMax = 1.5;
    e.showAni = false;
    e.vec2_1 = new cc.Vec2();
    e.vec2_2 = new cc.Vec2();
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.onLoad = function () {
    var t = this;
    this.node.getComponents(cc.PhysicsPolygonCollider).forEach(function (e) {
      var n = [];
      e.points.forEach(function (t) {
        n.push(t.clone());
      });
      t.colPoint[e.uuid] = n;
    });
    this.ndAniOther.forEach(function (e) {
      e.getComponents(cc.PhysicsPolygonCollider).forEach(function (e) {
        var n = [];
        e.points.forEach(function (t) {
          n.push(t.clone());
        });
        t.colPoint[e.uuid] = n;
      });
    });
  };

  _ctor.prototype.start = function () {
    var t;
    var e = this;
    null === (t = this.ndMove) || undefined === t || t.forEach(function (t, n) {
      t.active = false;
      t.name = e.node.name + "_" + n;
    });
  };

  _ctor.prototype.initData = function (t) {
    var e = this;
    1 == this.ID && (t = $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter);
    this.buildCfg = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBuildCfgById(t);

    if (this.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None) {
      return this.hide(), false;
    } else {
      return this.index = 0, this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.IconMap, $z1KinghtFallConfig.KinghtFallPrefabName.ItemHp, function (t) {
        var n = cc.instantiate(t);
        n.parent = $z1KinghtFallUIGame["default"].instance.ctrGame.ndUI;
        var i = e.node.convertToWorldSpaceAR(e.ndHp.position);
        var a = $z1KinghtFallUIGame["default"].instance.ctrGame.ndUI.convertToNodeSpaceAR(i);
        n.setPosition(a);
        n.setScale(e.ndHp.scale);
        n.active = true;
        e.ctrHp = n.getComponent($z1KinghtFallItemHp["default"]);
        e.ctrHp.setType($z1KinghtFallModle.KinghtFallGameArmy.Friend);
        e.upHpView();
      }), this.ndCoin = cc.instantiate($z1KinghtFallUIGame["default"].instance.ndBuildCoin), true;
    }
  };

  _ctor.prototype.upData = function () {
    if (this.buildCfg.enumValue != $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None) {
      this.canLock = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.canLock(this.ID);

      if (this.canLock) {
        $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAddTime[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.CovenantOfPatriarchs] == this.ID && 0 == this.getLevel() && (this.index = 1), this.setLevel(this.index);
      } else {
        this.hide();
      }

      this.upHpView();
    }
  };

  _ctor.prototype.hide = function () {
    this.ndLockList.forEach(function (t) {
      t.active = false;
      t.getChildByName("sprPro") && (t.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = 0);
    });
    this.node.getComponents(cc.PhysicsPolygonCollider).forEach(function (t) {
      t.enabled = false;
    });
    this.ndAniMain.node.active = false;
    this.ndAniDown && (this.ndAniDown.node.active = false);
    this.ndAniOther.forEach(function (t) {
      t.node.active = false;
      t.getComponents(cc.PhysicsPolygonCollider).forEach(function (t) {
        t.enabled = false;
      });
    });
  };

  _ctor.prototype.getLevel = function () {
    if (this.buildInfo && this.buildInfo.cfg) {
      return this.buildInfo.cfg.level;
    } else {
      return 0;
    }
  };

  _ctor.prototype.setLevel = function (t) {
    var e;
    var n = this;
    this.index = t;
    this.buildInfo = new $z1KinghtFallBuildInfo.KinghtFallBuildInfo(this.buildCfg.enumValue, this.buildCfg.levelList[this.index - 1]);

    if (0 == this.index) {
      this.hide();
    } else {
      this.ndAniMain.node.active = true;
      this.ndAniMain.setSkin(this.buildInfo.cfg.Skin);
      this.node.getComponents(cc.PhysicsPolygonCollider).forEach(function (t) {
        t.enabled = t.tag == n.index;
        t.enabled && (e = t);
      });

      if (e) {
        cc.Tween.stopAllByTarget(e), cc.tween(e).to(.2, {}, {
          onUpdate: function onUpdate(t, i) {
            var a = [];

            for (var o = 0; o < n.colPoint[e.uuid].length; o++) {
              a.push(cc.v2(n.colPoint[e.uuid][o].x * i, n.colPoint[e.uuid][o].y * i));
            }

            t.points = a;
            t.apply();
          }
        }).start();
      }

      if (this.ndAniDown) {
        this.ndAniDown.node.active = true, this.ndAniDown.setSkin(this.buildInfo.cfg.Skin);
      }

      this.ndAniOther.forEach(function (t) {
        var e;
        t.node.active = true;
        t.setSkin(n.buildInfo.cfg.Skin);
        t.getComponents(cc.PhysicsPolygonCollider).forEach(function (t) {
          t.enabled = t.tag == n.index;
          t.enabled && (e = t);

          if (e) {
            cc.Tween.stopAllByTarget(e);
            cc.tween(e).to(.2, {}, {
              onUpdate: function onUpdate(t, i) {
                var a = [];

                for (var o = 0; o < n.colPoint[e.uuid].length; o++) {
                  a.push(cc.v2(n.colPoint[e.uuid][o].x * i, n.colPoint[e.uuid][o].y * i));
                }

                t.points = a;
                t.apply();
              }
            }).start();
          }
        });
      });
    }

    this.ndCoin.active = false;
    this.ndCoin.getChildByName("labNum").getComponent(cc.Label).string = "" + this.getSell();
    this.ndLockList.forEach(function (t, e) {
      var i;
      t.getChildByName("sprPro") && (t.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = 0);

      if (e == ((null === (i = n.buildInfo) || undefined === i ? undefined : i.cfg) ? n.buildInfo.cfg.level : 0) && n.buildInfo.canUpgrade) {
        t.active = true;

        if (!(t.show || n.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter)) {
          t.show = true, cc.tween(t).set({
            scale: .01
          }).to(.2, {
            scale: 1.2
          }).to(.05, {
            scale: 1
          }).start();
        }

        n.ndCoin.scaleX = t.parent.scaleX;
        n.ndCoin.setParent(t);
        n.ndCoin.setPosition(cc.Vec2.ZERO);
        n.ndCoin.active = true;
      } else {
        t.show = false;
        t.active = false;
      }
    });
  };

  _ctor.prototype.doUpgreadAni = function () {
    var t = this;

    if (1 == this.index) {
      this.ndAniMain.setAnimation(0, r.create, false);
      this.ndAniMain.addAnimation(0, r.idle, true);
      this.node.getComponents(cc.PhysicsPolygonCollider).forEach(function (e) {
        e.enabled = e.tag == t.index;
      });

      if (this.ndAniDown) {
        this.ndAniDown.setAnimation(0, r.create, false), this.ndAniDown.addAnimation(0, r.idle, true);
      }

      this.ndAniOther.forEach(function (e) {
        e.node.active = true;
        e.setAnimation(0, r.create, false);
        e.addAnimation(0, r.idle, true);
        e.getComponents(cc.PhysicsPolygonCollider).forEach(function (e) {
          e.enabled = e.tag == t.index;
        });
      });
    } else {
      this.ndAniMain.setAnimation(0, r.upgrade, false);
      this.ndAniMain.addAnimation(0, r.idle, true);

      if (this.ndAniDown) {
        this.ndAniDown.setAnimation(0, r.upgrade, false), this.ndAniDown.addAnimation(0, r.idle, true);
      }

      this.ndAniOther.forEach(function (e) {
        e.node.active = true;
        e.setAnimation(0, r.upgrade, false);
        e.addAnimation(0, r.idle, true);
        e.getComponents(cc.PhysicsPolygonCollider).forEach(function (e) {
          e.enabled = e.tag == t.index;
        });
      });
    }
  };

  _ctor.prototype.getWposPhyCol = function () {
    if (this.isDestroyed) {
      return [];
    }

    var t = [];
    var e = this.node.getComponents(cc.PhysicsPolygonCollider);

    for (var n = 0; n < e.length; n++) {
      if ((s = e[n]).tag == this.index) {
        var i = [];

        for (var a = 0; a < s.points.length; a++) {
          var o = s.points[a];
          i.push(this.node.convertToWorldSpaceAR(o));
        }

        t.push(i);
      }
    }

    for (var r = 0; r < this.ndAniOther.length; r++) {
      var s;
      e = (s = this.ndAniOther[r].node).getComponents(cc.PhysicsPolygonCollider);

      for (n = 0; n < e.length; n++) {
        var l = e[n];

        if (l.tag == this.index) {
          i = [];

          for (a = 0; a < l.points.length; a++) {
            o = l.points[a];
            i.push(s.convertToWorldSpaceAR(o));
          }

          t.push(i);
        }
      }
    }

    return t;
  };

  _ctor.prototype.getWposPhyCol2 = function () {
    if (this.isDestroyed) {
      return [];
    }

    var t = [];
    var e = this.node.getComponents(cc.PhysicsPolygonCollider);

    for (var n = 0; n < e.length; n++) {
      if ((s = e[n]).tag == this.index) {
        var i = [];

        for (var a = 0; a < s.points.length; a++) {
          var o = s.points[a];
          i.push(this.node.convertToWorldSpaceAR(o));
        }

        t.push({
          tagNode: this.node,
          points: i
        });
      }
    }

    for (var r = 0; r < this.ndAniOther.length; r++) {
      var s;
      e = (s = this.ndAniOther[r].node).getComponents(cc.PhysicsPolygonCollider);

      for (n = 0; n < e.length; n++) {
        var l = e[n];

        if (l.tag == this.index) {
          i = [];

          for (a = 0; a < l.points.length; a++) {
            o = l.points[a];
            i.push(s.convertToWorldSpaceAR(o));
          }

          t.push({
            tagNode: s,
            points: i
          });
        }
      }
    }

    return t;
  };

  _ctor.prototype.setLight = function (t) {
    var e = this;

    if (this.buildCfg.enumValue != $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None) {
      this.ndLockList.forEach(function (n, i) {
        var a;
        n.active = !t && i == ((null === (a = e.buildInfo) || undefined === a ? undefined : a.cfg) ? e.buildInfo.cfg.level : 0) && e.canLock && e.buildInfo.canUpgrade;
        n.getChildByName("sprPro") && (n.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = 0);
      });

      if (this.canLock && 0 != this.index) {
        if (this.isDestroyed) {
          this.doUpgreadAni();
        } else if (t) {
          this.ndAniMain.setAnimation(0, r.fade_in, false), this.ndAniMain.addAnimation(0, r.idle_night, true), this.ndAniDown && (this.ndAniDown.setAnimation(0, r.fade_in, false), this.ndAniDown.addAnimation(0, r.idle_night, true)), this.ndAniOther.forEach(function (t) {
            t.setAnimation(0, r.fade_in, false);
            t.addAnimation(0, r.idle_night, true);
          });
        } else {
          this.ndAniMain.setAnimation(0, r.idle, true), this.ndAniDown && this.ndAniDown.setAnimation(0, r.idle, true), this.ndAniOther.forEach(function (t) {
            t.setAnimation(0, r.idle, true);
          });
        }
      }
    }
  };

  _ctor.prototype.getLockPoint = function () {
    if (this.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None) {
      return null;
    }

    if (!this.isDestroyed && this.canLock && this.buildInfo.canUpgrade) {
      var t = this.ndLockList[this.getLevel()];
      var e = t.getComponent(cc.PolygonCollider);
      e || console.error("### lock point not found", this.ID, this.ndLockList, this.index);
      var n = [];

      for (var i = 0; i < e.points.length; i++) {
        n.push(t.convertToWorldSpaceAR(cc.v2(e.points[i].x / t.scaleX, e.points[i].y / t.scaleY)));
      }

      return n;
    }

    return null;
  };

  _ctor.prototype.startRoundGame = function () {
    this.buildInfo.initBuffData();
  };

  _ctor.prototype.doUpgrade = function (t, e) {
    var n;
    var i = this;

    if (this.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None || !this.buildInfo) {
      return false;
    }

    if (e) {
      this.buildInfo.standTime += t;

      if (this.buildInfo.standTime >= this.standTimeMax) {
        this.buildInfo.standTime = this.standTimeMax;
        $z1KinghtFallUIGame["default"].instance.ctrGame.upBulid = this;

        var a = function a(t) {
          $z1KinghtFallUIGame["default"].instance.initView();
          i.index = t;
          i.buildInfo = new $z1KinghtFallBuildInfo.KinghtFallBuildInfo(i.buildCfg.enumValue, i.buildCfg.levelList[i.index - 1]);
          $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.BuildingLevelUp);
          i.doUpgreadAni();
          i.scheduleOnce(function () {
            $z1KinghtFallUIGame["default"].instance.canStart = true;
          }, .5);
          $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.buliding);
          var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskInfo();

          if (e.type == $z1KinghtFallEnum.KinghtFallEnumTaskEnum.BuildLevel) {
            e.num = Math.max(e.num, i.buildInfo.cfg.level);
            $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().setTaskInfo(e);
          }

          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.lv_building_X_Y, $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.levelCfg.Level + "_" + i.buildCfg.enumValue);
          $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.GamePause, false);

          if (1 == i.getLevel()) {
            switch (i.buildCfg.enumValue) {
              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse:
                i.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 7);
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.BuildHome);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower:
                i.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 8);
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.BuildTower);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Wall:
                i.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 9);
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.BuildWall);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Mill:
                i.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 10);
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.BuildMill);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks:
                i.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 11);
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.BuildBarracks);
            }
          } else {
            switch (i.buildCfg.enumValue) {
              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse:
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.UpgradeHome);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower:
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.UpgradeTower);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Wall:
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.UpgradeWall);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Mill:
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.UpgradeMill);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks:
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.UpgradeBarracks);
                break;

              case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter:
                $z1KinghtFallUIGame["default"].instance.addTask($z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum.UpgradeCastle);
            }
          }

          switch (i.buildCfg.enumValue) {
            case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse:
              $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.building_X, "house");
              break;

            case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.ArrowTower:
              $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.building_X, "arrwo");
              break;

            case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Wall:
              $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.building_X, "wall");
              break;

            case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Mill:
              $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.building_X, "mill");
              break;

            case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks:
              $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.building_X, "camp");
              break;

            case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.CastleCenter:
              $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.building_X, "home");
          }
        };

        if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.coin >= this.getSell()) {
          $z1KinghtFallUIGame["default"].instance.canStart = false;
          $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.GamePause, true);
          $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.coin -= this.getSell();

          if (this.buildInfo.cfg && this.buildInfo.cfg.BranchBuild.length > 1) {
            $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UIBuildSel, $z1KinghtFallConfig.KinghtFallUIID.UIGame, this, a);
          } else {
            a(this.buildInfo.cfg ? this.buildInfo.cfg.BranchBuild[0] : 1);
          }
        } else {
          this.buildInfo.standTime = 0;
          $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.cuo);
          $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITips, $z1KinghtFallConfig.KinghtFallUIID.UIGame, $z1KinghtFallTextConfig.KinghtFallTextConfig.Game03);
          $z1KinghtFallUIGame["default"].instance.aniBtnAddCoin();
        }
      }
    } else {
      if (0 == this.buildInfo.standTime) {
        return;
      }

      this.buildInfo.standTime -= t;
      this.buildInfo.standTime < 0 && (this.buildInfo.standTime = 0);
    }

    var o = this.ndLockList[this.getLevel()];
    o.getChildByName("sprPro") && (o.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = this.buildInfo.standTime / this.standTimeMax);
    var r = null === (n = o.getChildByName("spAni")) || undefined === n ? undefined : n.getComponent(sp.Skeleton);

    if (r) {
      if (this.showAni) {
        if (!e) {
          this.showAni = false, r.node.active = false;
        }
      } else if (e) {
        this.showAni = true, r.node.active = true, r.setAnimation(0, r.defaultAnimation, false), r.setCompleteListener(function () {
          r.setCompleteListener(null);
          r.node.active = false;
        });
      }
    }
  };

  _ctor.prototype.upSellView = function () {
    if (this.buildCfg.enumValue != $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None && this.buildInfo) {
      var t = this.ndLockList[this.getLevel()];

      if ($z1KinghtFallUIGame["default"].instance.ctrGame.gameData.coin < this.getSell()) {
        t.color = new cc.Color().fromHEX("#db0000");
      } else {
        t.color = cc.Color.WHITE;
      }
    }
  };

  _ctor.prototype.onBuffUpgrade = function () {
    var t;

    if (!(this.buildInfo.cfg && !this.buildInfo.cfg.BranchBuild)) {
      t = this.buildInfo.cfg ? this.buildInfo.cfg.BranchBuild[0] : 1;
      this.index = t;
      $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.BuildingLevelUp);
      this.doUpgreadAni();
      $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.buliding);
    }
  };

  _ctor.prototype.getSell = function () {
    if (this.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None || !this.canLock) {
      return -1;
    }

    if (!this.buildInfo || !this.buildInfo.canUpgrade) {
      return -1;
    }

    var t = this.buildInfo.cfg ? this.buildInfo.cfg.BuildSliverCost : this.buildCfg.lockCose;
    var e = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff09);
    e && (t -= e.Pamer[0]);
    var n = $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff47);

    if (n) {
      switch (this.buildCfg.enumValue) {
        case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse:
          t -= n.Pamer[0];
          break;

        case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks:
          t += n.Pamer[1];
      }
    }

    $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SaveToken] && $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.round < $z1KinghtFallUIGame["default"].instance.ctrGame.gameData.treasureAdd[$z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SaveToken][0] && t--;
    return Math.max(t, 0);
  };

  _ctor.prototype.upHpView = function () {
    if (this.ctrHp) {
      if (this.canLock && this.buildInfo.cfg) {
        this.ctrHp.setHp(this.buildInfo.hp, this.buildInfo.hpMax);
      } else {
        this.ctrHp.setHp(0, 1);
      }
    }
  };

  _ctor.prototype.getIsLock = function () {
    return this.buildCfg.enumValue != $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None && 0 != this.index;
  };

  _ctor.prototype.getIsWork = function () {
    return this.buildCfg.enumValue != $z1KinghtFallEnum.KinghtFallEnumBuildEnum.None && 0 != this.index && !this.isDestroyed;
  };

  _ctor.prototype.onAttacked = function (t) {
    if (!this.isDestroyed) {
      this.buildInfo.hp -= t;
      this.buildInfo.hp <= 0 && this.onDead();
      this.ctrHp.setHp(this.buildInfo.hp, this.buildInfo.hpMax);
      return t;
    }
  };

  _ctor.prototype.onDead = function () {
    $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.destory);
    this.delAllBuff();
    this.isDestroyed = true;
    this.ndAniMain.setAnimation(0, r.destroy, false);
    this.node.getComponents(cc.PhysicsPolygonCollider).forEach(function (t) {
      t.enabled = false;
    });
    this.ndAniDown && this.ndAniDown.setAnimation(0, r.destroy, false);
    this.ndAniOther.forEach(function (t) {
      t.node.active = true;
      t.setAnimation(0, r.destroy, false);
      t.getComponents(cc.PhysicsPolygonCollider).forEach(function (t) {
        t.enabled = false;
      });
    });
    this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.MapUpdate);
  };

  _ctor.prototype.onUpdate = function (t) {
    if (this.getIsWork()) {
      for (var e = 0; e < this.debuffInfo.length; e++) {
        var n = this.debuffInfo[e];

        if (-1 != n.time) {
          n.time += t;

          if (n.time >= n.timeMax) {
            this.delBuffIdx(e), e--;
          }
        }
      }

      this.doTime(t);
    }
  };

  _ctor.prototype.doTime = function () {};

  _ctor.prototype.getAttPos = function () {
    return this.node.getPosition();
  };

  _ctor.prototype.getAttack = function () {
    return 0;
  };

  _ctor.prototype.reset = function (t) {
    if (t) {
      this.index = 0;
      this.setLevel(this.index);
    }

    this.isDestroyed = false;
    this.delAllBuff();
  };

  _ctor.prototype.initBuffData = function () {
    this.ndCoin.getChildByName("labNum").getComponent(cc.Label).string = "" + this.getSell();
  };

  _ctor.prototype.onChangeSpeed = function () {
    var t = $z1KinghtFallUIGame["default"].instance.speed;
    this.ndAniMain.timeScale = t;
    this.ndAniDown && (this.ndAniDown.timeScale = t);
    this.ndAniOther.forEach(function (e) {
      e.timeScale = t;
    });
  };

  _ctor.prototype.endRoundGame = function () {
    this.isDestroyed = false;
  };

  _ctor.prototype.getSave = function () {
    return {
      point: this.ID,
      level: this.index
    };
  };

  _ctor.prototype.setSave = function (t) {
    this.setLevel(t.level);
  };

  _ctor.prototype.getMoveToPos = function (t, e) {
    if (!this.ndMove || 0 == this.ndMove.length) {
      return null;
    }

    var n = -1;
    var i = null;
    var a = null;

    for (var o = 0; o < this.ndMove.length; o++) {
      var r = this.ndMove[o];

      if (r) {
        var s = false;

        for (var l = 0; l < e.length; l++) {
          if (e[l].uuid == r.uuid) {
            s = true;
            break;
          }
        }

        if (!s) {
          var c = this.node.convertToWorldSpaceAR(r.getPosition());
          var h = cc.Vec2.distance(t, c);

          if (-1 == n || h < n) {
            n = h;
            a = c;
            i = r;
          }
        }
      }
    }

    if (i) {
      return {
        node: i,
        pos: a
      };
    } else {
      return null;
    }
  };

  cc__decorate([ccp_property({
    type: cc.Integer,
    tooltip: "Point id"
  })], _ctor.prototype, "ID", undefined);
  cc__decorate([ccp_property({
    type: [cc.Node],
    tooltip: "Hit-move pt"
  })], _ctor.prototype, "ndMove", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "HP bar"
  })], _ctor.prototype, "ndHp", undefined);
  cc__decorate([ccp_property({
    type: [cc.Node],
    tooltip: "Unlock/upgrade"
  })], _ctor.prototype, "ndLockList", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Building body"
  })], _ctor.prototype, "ndAniMain", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Building floor"
  })], _ctor.prototype, "ndAniDown", undefined);
  cc__decorate([ccp_property({
    type: [sp.Skeleton],
    tooltip: "Building extras"
  })], _ctor.prototype, "ndAniOther", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1KinghtFallInterface.KinghtFallInterface);

exports["default"] = def_KinghtFallBuildBase;

(function (t) {
  t.create = "create";
  t.destroy = "destroy";
  t.idle = "idle";
  t.idle_night = "idle_night";
  t.fade_in = "Fade_in";
  t.upgrade = "upgrade";
  t.open = "open";
  t.open_night = "open_night";
  t.shut = "shut";
  t.shut_night = "shut_night";
})(r = exports.KinghtFallBuildAniName || (exports.KinghtFallBuildAniName = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxCdWlsZEJhc2UuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiS2luZ2h0RmFsbEJ1aWxkQW5pTmFtZSIsInVuZGVmaW5lZCIsInIiLCIkejFBdWRpb01nciIsInJlcXVpcmUiLCIkejFFdmVudE1nciIsIiR6MVVJTWdyIiwiJHoxQ29uZmlnIiwiJHoxR2FtZVRyYWNrRGF0YUV2ZW50IiwiJHoxUGxheWVyTWdyIiwiJHoxS2luZ2h0RmFsbENvbmZpZyIsIiR6MUtpbmdodEZhbGxUZXh0Q29uZmlnIiwiJHoxS2luZ2h0RmFsbEVudW0iLCIkejFLaW5naHRGYWxsRGF0YU1nciIsIiR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IiLCIkejFLaW5naHRGYWxsTW9kbGUiLCIkejFLaW5naHRGYWxsSXRlbUhwIiwiJHoxS2luZ2h0RmFsbFVJR2FtZSIsIiR6MUtpbmdodEZhbGxJbnRlcmZhY2UiLCIkejFLaW5naHRGYWxsQnVpbGRJbmZvIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxCdWlsZEJhc2UiLCJ0IiwiX2N0b3IiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJJRCIsIm5kTW92ZSIsIm5kSHAiLCJuZExvY2tMaXN0IiwibmRBbmlNYWluIiwibmRBbmlEb3duIiwibmRBbmlPdGhlciIsImlzQmlnIiwiY2FuTG9jayIsImJ1aWxkSW5mbyIsImlzRGVzdHJveWVkIiwiY3RySHAiLCJuZENvaW4iLCJjb2xQb2ludCIsInN0YW5kVGltZU1heCIsInNob3dBbmkiLCJ2ZWMyXzEiLCJWZWMyIiwidmVjMl8yIiwicHJvdG90eXBlIiwib25Mb2FkIiwibm9kZSIsImdldENvbXBvbmVudHMiLCJQaHlzaWNzUG9seWdvbkNvbGxpZGVyIiwiZm9yRWFjaCIsIm4iLCJwb2ludHMiLCJwdXNoIiwiY2xvbmUiLCJ1dWlkIiwic3RhcnQiLCJhY3RpdmUiLCJuYW1lIiwiaW5pdERhdGEiLCJLaW5naHRGYWxsRW51bUJ1aWxkRW51bSIsIkNhc3RsZUNlbnRlciIsImJ1aWxkQ2ZnIiwiS2luZ2h0RmFsbERhdGFNZ3IiLCJnZXRJbnN0YW5jZSIsImdldEJ1aWxkQ2ZnQnlJZCIsImVudW1WYWx1ZSIsIk5vbmUiLCJoaWRlIiwiaW5kZXgiLCJsb2FkUHJlZmFiIiwiS2luZ2h0RmFsbEJ1bmRlbE5hbWUiLCJJY29uTWFwIiwiS2luZ2h0RmFsbFByZWZhYk5hbWUiLCJJdGVtSHAiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsImluc3RhbmNlIiwiY3RyR2FtZSIsIm5kVUkiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3NpdGlvbiIsImEiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJzY2FsZSIsImdldENvbXBvbmVudCIsInNldFR5cGUiLCJLaW5naHRGYWxsR2FtZUFybXkiLCJGcmllbmQiLCJ1cEhwVmlldyIsIm5kQnVpbGRDb2luIiwidXBEYXRhIiwiZ2FtZURhdGEiLCJ0cmVhc3VyZUFkZFRpbWUiLCJLaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bSIsIkNvdmVuYW50T2ZQYXRyaWFyY2hzIiwiZ2V0TGV2ZWwiLCJzZXRMZXZlbCIsImdldENoaWxkQnlOYW1lIiwiU3ByaXRlIiwiZmlsbFJhbmdlIiwiZW5hYmxlZCIsImNmZyIsImxldmVsIiwiS2luZ2h0RmFsbEJ1aWxkSW5mbyIsImxldmVsTGlzdCIsInNldFNraW4iLCJTa2luIiwidGFnIiwiVHdlZW4iLCJzdG9wQWxsQnlUYXJnZXQiLCJ0d2VlbiIsInRvIiwib25VcGRhdGUiLCJvIiwibGVuZ3RoIiwidjIiLCJ4IiwieSIsIkxhYmVsIiwic3RyaW5nIiwiZ2V0U2VsbCIsImNhblVwZ3JhZGUiLCJzaG93Iiwic2V0Iiwic2NhbGVYIiwic2V0UGFyZW50IiwiWkVSTyIsImRvVXBncmVhZEFuaSIsInNldEFuaW1hdGlvbiIsImNyZWF0ZSIsImFkZEFuaW1hdGlvbiIsImlkbGUiLCJ1cGdyYWRlIiwiZ2V0V3Bvc1BoeUNvbCIsInMiLCJsIiwiZ2V0V3Bvc1BoeUNvbDIiLCJ0YWdOb2RlIiwic2V0TGlnaHQiLCJmYWRlX2luIiwiaWRsZV9uaWdodCIsImdldExvY2tQb2ludCIsIlBvbHlnb25Db2xsaWRlciIsImNvbnNvbGUiLCJlcnJvciIsInNjYWxlWSIsInN0YXJ0Um91bmRHYW1lIiwiaW5pdEJ1ZmZEYXRhIiwiZG9VcGdyYWRlIiwic3RhbmRUaW1lIiwidXBCdWxpZCIsImluaXRWaWV3IiwiRXZlbnRNZ3IiLCJlbWl0IiwiS2luZ2h0RmFsbEV2ZW50TmFtZSIsIkJ1aWxkaW5nTGV2ZWxVcCIsInNjaGVkdWxlT25jZSIsImNhblN0YXJ0IiwiQXVkaW9NZ3IiLCJwbGF5RWZmZWN0RnJlZSIsIktpbmdodEZhbGxBdWRpb0lkIiwiYnVsaWRpbmciLCJLaW5naHRGYWxsUGxheWVyTWdyIiwiZ2V0TWlzc2lvbkRhdGEiLCJnZXRUYXNrSW5mbyIsInR5cGUiLCJLaW5naHRGYWxsRW51bVRhc2tFbnVtIiwiQnVpbGRMZXZlbCIsIm51bSIsIk1hdGgiLCJtYXgiLCJzZXRUYXNrSW5mbyIsIlBsYXllck1nciIsImdldFRyYWNrRGF0YSIsInlvdW1lbmdUcmFjayIsIlRyYWNrSWQiLCJsdl9idWlsZGluZ19YX1kiLCJsZXZlbENmZyIsIkxldmVsIiwiR2FtZVBhdXNlIiwiUHJpdmF0ZUhvdXNlIiwic2VuZEV2ZW50IiwiTmV3YmllR3VpZGUiLCJhZGRUYXNrIiwiS2luZ2h0RmFsbEVudW1JbkdhbWVUYXNrRW51bSIsIkJ1aWxkSG9tZSIsIkFycm93VG93ZXIiLCJCdWlsZFRvd2VyIiwiV2FsbCIsIkJ1aWxkV2FsbCIsIk1pbGwiLCJCdWlsZE1pbGwiLCJCYXJyYWNrcyIsIkJ1aWxkQmFycmFja3MiLCJVcGdyYWRlSG9tZSIsIlVwZ3JhZGVUb3dlciIsIlVwZ3JhZGVXYWxsIiwiVXBncmFkZU1pbGwiLCJVcGdyYWRlQmFycmFja3MiLCJVcGdyYWRlQ2FzdGxlIiwiYnVpbGRpbmdfWCIsImNvaW4iLCJCcmFuY2hCdWlsZCIsIlVJTWdyIiwib3BlblVJIiwiS2luZ2h0RmFsbFVJSUQiLCJVSUJ1aWxkU2VsIiwiVUlHYW1lIiwiY3VvIiwiVUlJRCIsIlVJVGlwcyIsIktpbmdodEZhbGxUZXh0Q29uZmlnIiwiR2FtZTAzIiwiYW5pQnRuQWRkQ29pbiIsInNwIiwiU2tlbGV0b24iLCJkZWZhdWx0QW5pbWF0aW9uIiwic2V0Q29tcGxldGVMaXN0ZW5lciIsInVwU2VsbFZpZXciLCJjb2xvciIsIkNvbG9yIiwiZnJvbUhFWCIsIldISVRFIiwib25CdWZmVXBncmFkZSIsIkJ1aWxkU2xpdmVyQ29zdCIsImxvY2tDb3NlIiwiZ2V0R2FtZUJ1ZmYiLCJLaW5naHRGYWxsRW51bUJ1ZmZDZmciLCJCdWZmMDkiLCJQYW1lciIsIkJ1ZmY0NyIsInRyZWFzdXJlQWRkIiwiU2F2ZVRva2VuIiwicm91bmQiLCJzZXRIcCIsImhwIiwiaHBNYXgiLCJnZXRJc0xvY2siLCJnZXRJc1dvcmsiLCJvbkF0dGFja2VkIiwib25EZWFkIiwiZGVzdG9yeSIsImRlbEFsbEJ1ZmYiLCJkZXN0cm95IiwiTWFwVXBkYXRlIiwiZGVidWZmSW5mbyIsInRpbWUiLCJ0aW1lTWF4IiwiZGVsQnVmZklkeCIsImRvVGltZSIsImdldEF0dFBvcyIsImdldFBvc2l0aW9uIiwiZ2V0QXR0YWNrIiwicmVzZXQiLCJvbkNoYW5nZVNwZWVkIiwic3BlZWQiLCJ0aW1lU2NhbGUiLCJlbmRSb3VuZEdhbWUiLCJnZXRTYXZlIiwicG9pbnQiLCJzZXRTYXZlIiwiZ2V0TW92ZVRvUG9zIiwiYyIsImgiLCJkaXN0YW5jZSIsInBvcyIsIkludGVnZXIiLCJ0b29sdGlwIiwiTm9kZSIsIktpbmdodEZhbGxJbnRlcmZhY2UiLCJvcGVuIiwib3Blbl9uaWdodCIsInNodXQiLCJzaHV0X25pZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxzQkFBUixHQUFpQ0MsU0FBakM7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxPQUFELENBQXRCOztBQUNBLElBQUlHLFNBQVMsR0FBR0gsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUkscUJBQXFCLEdBQUdKLE9BQU8sQ0FBQyxvQkFBRCxDQUFuQzs7QUFDQSxJQUFJSyxZQUFZLEdBQUdMLE9BQU8sQ0FBQyxXQUFELENBQTFCOztBQUNBLElBQUlNLG1CQUFtQixHQUFHTixPQUFPLENBQUMsa0JBQUQsQ0FBakM7O0FBQ0EsSUFBSU8sdUJBQXVCLEdBQUdQLE9BQU8sQ0FBQyxzQkFBRCxDQUFyQzs7QUFDQSxJQUFJUSxpQkFBaUIsR0FBR1IsT0FBTyxDQUFDLGdCQUFELENBQS9COztBQUNBLElBQUlTLG9CQUFvQixHQUFHVCxPQUFPLENBQUMsbUJBQUQsQ0FBbEM7O0FBQ0EsSUFBSVUsc0JBQXNCLEdBQUdWLE9BQU8sQ0FBQyxxQkFBRCxDQUFwQzs7QUFDQSxJQUFJVyxrQkFBa0IsR0FBR1gsT0FBTyxDQUFDLGlCQUFELENBQWhDOztBQUNBLElBQUlZLG1CQUFtQixHQUFHWixPQUFPLENBQUMsa0JBQUQsQ0FBakM7O0FBQ0EsSUFBSWEsbUJBQW1CLEdBQUdiLE9BQU8sQ0FBQyxrQkFBRCxDQUFqQzs7QUFDQSxJQUFJYyxzQkFBc0IsR0FBR2QsT0FBTyxDQUFDLHFCQUFELENBQXBDOztBQUNBLElBQUllLHNCQUFzQixHQUFHZixPQUFPLENBQUMscUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSWdCLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcsR0FBR0gsYUFBYSxDQUFDSSxPQUFoQztBQUNBLElBQUlDLFlBQVksR0FBR0wsYUFBYSxDQUFDTSxRQUFqQzs7QUFDQSxJQUFJQyx1QkFBdUIsR0FBRyxVQUFVQyxDQUFWLEVBQWE7RUFDekMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLElBQUlDLENBQUMsR0FBRyxTQUFTRixDQUFULElBQWNBLENBQUMsQ0FBQ0csS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFkLElBQTBDLElBQWxEO0lBQ0FGLENBQUMsQ0FBQ0csRUFBRixHQUFPLENBQVA7SUFDQUgsQ0FBQyxDQUFDSSxNQUFGLEdBQVcsRUFBWDtJQUNBSixDQUFDLENBQUNLLElBQUYsR0FBUyxJQUFUO0lBQ0FMLENBQUMsQ0FBQ00sVUFBRixHQUFlLENBQUMsSUFBRCxDQUFmO0lBQ0FOLENBQUMsQ0FBQ08sU0FBRixHQUFjLElBQWQ7SUFDQVAsQ0FBQyxDQUFDUSxTQUFGLEdBQWMsSUFBZDtJQUNBUixDQUFDLENBQUNTLFVBQUYsR0FBZSxFQUFmO0lBQ0FULENBQUMsQ0FBQ1UsS0FBRixHQUFVLElBQVY7SUFDQVYsQ0FBQyxDQUFDVyxPQUFGLEdBQVksS0FBWjtJQUNBWCxDQUFDLENBQUNZLFNBQUYsR0FBYyxJQUFkO0lBQ0FaLENBQUMsQ0FBQ2EsV0FBRixHQUFnQixLQUFoQjtJQUNBYixDQUFDLENBQUNjLEtBQUYsR0FBVSxJQUFWO0lBQ0FkLENBQUMsQ0FBQ2UsTUFBRixHQUFXLElBQVg7SUFDQWYsQ0FBQyxDQUFDZ0IsUUFBRixHQUFhLEVBQWI7SUFDQWhCLENBQUMsQ0FBQ2lCLFlBQUYsR0FBaUIsR0FBakI7SUFDQWpCLENBQUMsQ0FBQ2tCLE9BQUYsR0FBWSxLQUFaO0lBQ0FsQixDQUFDLENBQUNtQixNQUFGLEdBQVcsSUFBSTVCLEVBQUUsQ0FBQzZCLElBQVAsRUFBWDtJQUNBcEIsQ0FBQyxDQUFDcUIsTUFBRixHQUFXLElBQUk5QixFQUFFLENBQUM2QixJQUFQLEVBQVg7SUFDQSxPQUFPcEIsQ0FBUDtFQUNEOztFQUNEdEMsV0FBVyxDQUFDcUMsS0FBRCxFQUFRRCxDQUFSLENBQVg7O0VBQ0FDLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JDLE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsSUFBSXpCLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBSzBCLElBQUwsQ0FBVUMsYUFBVixDQUF3QmxDLEVBQUUsQ0FBQ21DLHNCQUEzQixFQUFtREMsT0FBbkQsQ0FBMkQsVUFBVTNCLENBQVYsRUFBYTtNQUN0RSxJQUFJNEIsQ0FBQyxHQUFHLEVBQVI7TUFDQTVCLENBQUMsQ0FBQzZCLE1BQUYsQ0FBU0YsT0FBVCxDQUFpQixVQUFVN0IsQ0FBVixFQUFhO1FBQzVCOEIsQ0FBQyxDQUFDRSxJQUFGLENBQU9oQyxDQUFDLENBQUNpQyxLQUFGLEVBQVA7TUFDRCxDQUZEO01BR0FqQyxDQUFDLENBQUNrQixRQUFGLENBQVdoQixDQUFDLENBQUNnQyxJQUFiLElBQXFCSixDQUFyQjtJQUNELENBTkQ7SUFPQSxLQUFLbkIsVUFBTCxDQUFnQmtCLE9BQWhCLENBQXdCLFVBQVUzQixDQUFWLEVBQWE7TUFDbkNBLENBQUMsQ0FBQ3lCLGFBQUYsQ0FBZ0JsQyxFQUFFLENBQUNtQyxzQkFBbkIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQVUzQixDQUFWLEVBQWE7UUFDOUQsSUFBSTRCLENBQUMsR0FBRyxFQUFSO1FBQ0E1QixDQUFDLENBQUM2QixNQUFGLENBQVNGLE9BQVQsQ0FBaUIsVUFBVTdCLENBQVYsRUFBYTtVQUM1QjhCLENBQUMsQ0FBQ0UsSUFBRixDQUFPaEMsQ0FBQyxDQUFDaUMsS0FBRixFQUFQO1FBQ0QsQ0FGRDtRQUdBakMsQ0FBQyxDQUFDa0IsUUFBRixDQUFXaEIsQ0FBQyxDQUFDZ0MsSUFBYixJQUFxQkosQ0FBckI7TUFDRCxDQU5EO0lBT0QsQ0FSRDtFQVNELENBbEJEOztFQW1CQTdCLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JXLEtBQWhCLEdBQXdCLFlBQVk7SUFDbEMsSUFBSW5DLENBQUo7SUFDQSxJQUFJRSxDQUFDLEdBQUcsSUFBUjtJQUNBLFVBQVVGLENBQUMsR0FBRyxLQUFLTSxNQUFuQixLQUE4QmpDLFNBQVMsS0FBSzJCLENBQTVDLElBQWlEQSxDQUFDLENBQUM2QixPQUFGLENBQVUsVUFBVTdCLENBQVYsRUFBYThCLENBQWIsRUFBZ0I7TUFDekU5QixDQUFDLENBQUNvQyxNQUFGLEdBQVcsS0FBWDtNQUNBcEMsQ0FBQyxDQUFDcUMsSUFBRixHQUFTbkMsQ0FBQyxDQUFDd0IsSUFBRixDQUFPVyxJQUFQLEdBQWMsR0FBZCxHQUFvQlAsQ0FBN0I7SUFDRCxDQUhnRCxDQUFqRDtFQUlELENBUEQ7O0VBUUE3QixLQUFLLENBQUN1QixTQUFOLENBQWdCYyxRQUFoQixHQUEyQixVQUFVdEMsQ0FBVixFQUFhO0lBQ3RDLElBQUlFLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBSyxLQUFLRyxFQUFWLEtBQWlCTCxDQUFDLEdBQUdoQixpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQ0MsWUFBL0Q7SUFDQSxLQUFLQyxRQUFMLEdBQWdCeEQsb0JBQW9CLENBQUN5RCxpQkFBckIsQ0FBdUNDLFdBQXZDLEdBQXFEQyxlQUFyRCxDQUFxRTVDLENBQXJFLENBQWhCOztJQUNBLElBQUksS0FBS3lDLFFBQUwsQ0FBY0ksU0FBZCxJQUEyQjdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDTyxJQUF6RSxFQUErRTtNQUM3RSxPQUFPLEtBQUtDLElBQUwsSUFBYSxLQUFwQjtJQUNELENBRkQsTUFFTztNQUNMLE9BQU8sS0FBS0MsS0FBTCxHQUFhLENBQWIsRUFBZ0IsS0FBS0MsVUFBTCxDQUFnQm5FLG1CQUFtQixDQUFDb0Usb0JBQXBCLENBQXlDQyxPQUF6RCxFQUFrRXJFLG1CQUFtQixDQUFDc0Usb0JBQXBCLENBQXlDQyxNQUEzRyxFQUFtSCxVQUFVckQsQ0FBVixFQUFhO1FBQ3JKLElBQUk4QixDQUFDLEdBQUdyQyxFQUFFLENBQUM2RCxXQUFILENBQWV0RCxDQUFmLENBQVI7UUFDQThCLENBQUMsQ0FBQ3lCLE1BQUYsR0FBV2xFLG1CQUFtQixXQUFuQixDQUE0Qm1FLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q0MsSUFBeEQ7UUFDQSxJQUFJL0YsQ0FBQyxHQUFHdUMsQ0FBQyxDQUFDd0IsSUFBRixDQUFPaUMscUJBQVAsQ0FBNkJ6RCxDQUFDLENBQUNLLElBQUYsQ0FBT3FELFFBQXBDLENBQVI7UUFDQSxJQUFJQyxDQUFDLEdBQUd4RSxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNDLElBQTdDLENBQWtESSxvQkFBbEQsQ0FBdUVuRyxDQUF2RSxDQUFSO1FBQ0FtRSxDQUFDLENBQUNpQyxXQUFGLENBQWNGLENBQWQ7UUFDQS9CLENBQUMsQ0FBQ2tDLFFBQUYsQ0FBVzlELENBQUMsQ0FBQ0ssSUFBRixDQUFPMEQsS0FBbEI7UUFDQW5DLENBQUMsQ0FBQ00sTUFBRixHQUFXLElBQVg7UUFDQWxDLENBQUMsQ0FBQ2MsS0FBRixHQUFVYyxDQUFDLENBQUNvQyxZQUFGLENBQWU5RSxtQkFBbUIsV0FBbEMsQ0FBVjtRQUNBYyxDQUFDLENBQUNjLEtBQUYsQ0FBUW1ELE9BQVIsQ0FBZ0JoRixrQkFBa0IsQ0FBQ2lGLGtCQUFuQixDQUFzQ0MsTUFBdEQ7UUFDQW5FLENBQUMsQ0FBQ29FLFFBQUY7TUFDRCxDQVhzQixDQUFoQixFQVdILEtBQUtyRCxNQUFMLEdBQWN4QixFQUFFLENBQUM2RCxXQUFILENBQWVqRSxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ2UsV0FBcEQsQ0FYWCxFQVc2RSxJQVhwRjtJQVlEO0VBQ0YsQ0FwQkQ7O0VBcUJBdEUsS0FBSyxDQUFDdUIsU0FBTixDQUFnQmdELE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsSUFBSSxLQUFLL0IsUUFBTCxDQUFjSSxTQUFkLElBQTJCN0QsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENPLElBQXpFLEVBQStFO01BQzdFLEtBQUtqQyxPQUFMLEdBQWV4QixtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNnQixRQUE3QyxDQUFzRDVELE9BQXRELENBQThELEtBQUtSLEVBQW5FLENBQWY7O01BQ0EsSUFBSSxLQUFLUSxPQUFULEVBQWtCO1FBQ2hCeEIsbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDZ0IsUUFBN0MsQ0FBc0RDLGVBQXRELENBQXNFMUYsaUJBQWlCLENBQUMyRiwwQkFBbEIsQ0FBNkNDLG9CQUFuSCxLQUE0SSxLQUFLdkUsRUFBakosSUFBdUosS0FBSyxLQUFLd0UsUUFBTCxFQUE1SixLQUFnTCxLQUFLN0IsS0FBTCxHQUFhLENBQTdMLEdBQWlNLEtBQUs4QixRQUFMLENBQWMsS0FBSzlCLEtBQW5CLENBQWpNO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsS0FBS0QsSUFBTDtNQUNEOztNQUNELEtBQUt1QixRQUFMO0lBQ0Q7RUFDRixDQVZEOztFQVdBckUsS0FBSyxDQUFDdUIsU0FBTixDQUFnQnVCLElBQWhCLEdBQXVCLFlBQVk7SUFDakMsS0FBS3ZDLFVBQUwsQ0FBZ0JxQixPQUFoQixDQUF3QixVQUFVN0IsQ0FBVixFQUFhO01BQ25DQSxDQUFDLENBQUNvQyxNQUFGLEdBQVcsS0FBWDtNQUNBcEMsQ0FBQyxDQUFDK0UsY0FBRixDQUFpQixRQUFqQixNQUErQi9FLENBQUMsQ0FBQytFLGNBQUYsQ0FBaUIsUUFBakIsRUFBMkJiLFlBQTNCLENBQXdDekUsRUFBRSxDQUFDdUYsTUFBM0MsRUFBbURDLFNBQW5ELEdBQStELENBQTlGO0lBQ0QsQ0FIRDtJQUlBLEtBQUt2RCxJQUFMLENBQVVDLGFBQVYsQ0FBd0JsQyxFQUFFLENBQUNtQyxzQkFBM0IsRUFBbURDLE9BQW5ELENBQTJELFVBQVU3QixDQUFWLEVBQWE7TUFDdEVBLENBQUMsQ0FBQ2tGLE9BQUYsR0FBWSxLQUFaO0lBQ0QsQ0FGRDtJQUdBLEtBQUt6RSxTQUFMLENBQWVpQixJQUFmLENBQW9CVSxNQUFwQixHQUE2QixLQUE3QjtJQUNBLEtBQUsxQixTQUFMLEtBQW1CLEtBQUtBLFNBQUwsQ0FBZWdCLElBQWYsQ0FBb0JVLE1BQXBCLEdBQTZCLEtBQWhEO0lBQ0EsS0FBS3pCLFVBQUwsQ0FBZ0JrQixPQUFoQixDQUF3QixVQUFVN0IsQ0FBVixFQUFhO01BQ25DQSxDQUFDLENBQUMwQixJQUFGLENBQU9VLE1BQVAsR0FBZ0IsS0FBaEI7TUFDQXBDLENBQUMsQ0FBQzJCLGFBQUYsQ0FBZ0JsQyxFQUFFLENBQUNtQyxzQkFBbkIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQVU3QixDQUFWLEVBQWE7UUFDOURBLENBQUMsQ0FBQ2tGLE9BQUYsR0FBWSxLQUFaO01BQ0QsQ0FGRDtJQUdELENBTEQ7RUFNRCxDQWhCRDs7RUFpQkFqRixLQUFLLENBQUN1QixTQUFOLENBQWdCcUQsUUFBaEIsR0FBMkIsWUFBWTtJQUNyQyxJQUFJLEtBQUsvRCxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZXFFLEdBQXJDLEVBQTBDO01BQ3hDLE9BQU8sS0FBS3JFLFNBQUwsQ0FBZXFFLEdBQWYsQ0FBbUJDLEtBQTFCO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsT0FBTyxDQUFQO0lBQ0Q7RUFDRixDQU5EOztFQU9BbkYsS0FBSyxDQUFDdUIsU0FBTixDQUFnQnNELFFBQWhCLEdBQTJCLFVBQVU5RSxDQUFWLEVBQWE7SUFDdEMsSUFBSUUsQ0FBSjtJQUNBLElBQUk0QixDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtrQixLQUFMLEdBQWFoRCxDQUFiO0lBQ0EsS0FBS2MsU0FBTCxHQUFpQixJQUFJdkIsc0JBQXNCLENBQUM4RixtQkFBM0IsQ0FBK0MsS0FBSzVDLFFBQUwsQ0FBY0ksU0FBN0QsRUFBd0UsS0FBS0osUUFBTCxDQUFjNkMsU0FBZCxDQUF3QixLQUFLdEMsS0FBTCxHQUFhLENBQXJDLENBQXhFLENBQWpCOztJQUNBLElBQUksS0FBSyxLQUFLQSxLQUFkLEVBQXFCO01BQ25CLEtBQUtELElBQUw7SUFDRCxDQUZELE1BRU87TUFDTCxLQUFLdEMsU0FBTCxDQUFlaUIsSUFBZixDQUFvQlUsTUFBcEIsR0FBNkIsSUFBN0I7TUFDQSxLQUFLM0IsU0FBTCxDQUFlOEUsT0FBZixDQUF1QixLQUFLekUsU0FBTCxDQUFlcUUsR0FBZixDQUFtQkssSUFBMUM7TUFDQSxLQUFLOUQsSUFBTCxDQUFVQyxhQUFWLENBQXdCbEMsRUFBRSxDQUFDbUMsc0JBQTNCLEVBQW1EQyxPQUFuRCxDQUEyRCxVQUFVN0IsQ0FBVixFQUFhO1FBQ3RFQSxDQUFDLENBQUNrRixPQUFGLEdBQVlsRixDQUFDLENBQUN5RixHQUFGLElBQVMzRCxDQUFDLENBQUNrQixLQUF2QjtRQUNBaEQsQ0FBQyxDQUFDa0YsT0FBRixLQUFjaEYsQ0FBQyxHQUFHRixDQUFsQjtNQUNELENBSEQ7O01BSUEsSUFBSUUsQ0FBSixFQUFPO1FBQ0xULEVBQUUsQ0FBQ2lHLEtBQUgsQ0FBU0MsZUFBVCxDQUF5QnpGLENBQXpCLEdBQTZCVCxFQUFFLENBQUNtRyxLQUFILENBQVMxRixDQUFULEVBQVkyRixFQUFaLENBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QjtVQUNsREMsUUFBUSxFQUFFLGtCQUFVOUYsQ0FBVixFQUFhckMsQ0FBYixFQUFnQjtZQUN4QixJQUFJa0csQ0FBQyxHQUFHLEVBQVI7O1lBQ0EsS0FBSyxJQUFJa0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2pFLENBQUMsQ0FBQ1osUUFBRixDQUFXaEIsQ0FBQyxDQUFDZ0MsSUFBYixFQUFtQjhELE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO2NBQ2xEbEMsQ0FBQyxDQUFDN0IsSUFBRixDQUFPdkMsRUFBRSxDQUFDd0csRUFBSCxDQUFNbkUsQ0FBQyxDQUFDWixRQUFGLENBQVdoQixDQUFDLENBQUNnQyxJQUFiLEVBQW1CNkQsQ0FBbkIsRUFBc0JHLENBQXRCLEdBQTBCdkksQ0FBaEMsRUFBbUNtRSxDQUFDLENBQUNaLFFBQUYsQ0FBV2hCLENBQUMsQ0FBQ2dDLElBQWIsRUFBbUI2RCxDQUFuQixFQUFzQkksQ0FBdEIsR0FBMEJ4SSxDQUE3RCxDQUFQO1lBQ0Q7O1lBQ0RxQyxDQUFDLENBQUMrQixNQUFGLEdBQVc4QixDQUFYO1lBQ0E3RCxDQUFDLENBQUNHLEtBQUY7VUFDRDtRQVJpRCxDQUF2QixFQVMxQmdDLEtBVDBCLEVBQTdCO01BVUQ7O01BQ0QsSUFBSSxLQUFLekIsU0FBVCxFQUFvQjtRQUNsQixLQUFLQSxTQUFMLENBQWVnQixJQUFmLENBQW9CVSxNQUFwQixHQUE2QixJQUE3QixFQUFtQyxLQUFLMUIsU0FBTCxDQUFlNkUsT0FBZixDQUF1QixLQUFLekUsU0FBTCxDQUFlcUUsR0FBZixDQUFtQkssSUFBMUMsQ0FBbkM7TUFDRDs7TUFDRCxLQUFLN0UsVUFBTCxDQUFnQmtCLE9BQWhCLENBQXdCLFVBQVU3QixDQUFWLEVBQWE7UUFDbkMsSUFBSUUsQ0FBSjtRQUNBRixDQUFDLENBQUMwQixJQUFGLENBQU9VLE1BQVAsR0FBZ0IsSUFBaEI7UUFDQXBDLENBQUMsQ0FBQ3VGLE9BQUYsQ0FBVXpELENBQUMsQ0FBQ2hCLFNBQUYsQ0FBWXFFLEdBQVosQ0FBZ0JLLElBQTFCO1FBQ0F4RixDQUFDLENBQUMyQixhQUFGLENBQWdCbEMsRUFBRSxDQUFDbUMsc0JBQW5CLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFVN0IsQ0FBVixFQUFhO1VBQzlEQSxDQUFDLENBQUNrRixPQUFGLEdBQVlsRixDQUFDLENBQUN5RixHQUFGLElBQVMzRCxDQUFDLENBQUNrQixLQUF2QjtVQUNBaEQsQ0FBQyxDQUFDa0YsT0FBRixLQUFjaEYsQ0FBQyxHQUFHRixDQUFsQjs7VUFDQSxJQUFJRSxDQUFKLEVBQU87WUFDTFQsRUFBRSxDQUFDaUcsS0FBSCxDQUFTQyxlQUFULENBQXlCekYsQ0FBekI7WUFDQVQsRUFBRSxDQUFDbUcsS0FBSCxDQUFTMUYsQ0FBVCxFQUFZMkYsRUFBWixDQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUI7Y0FDckJDLFFBQVEsRUFBRSxrQkFBVTlGLENBQVYsRUFBYXJDLENBQWIsRUFBZ0I7Z0JBQ3hCLElBQUlrRyxDQUFDLEdBQUcsRUFBUjs7Z0JBQ0EsS0FBSyxJQUFJa0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2pFLENBQUMsQ0FBQ1osUUFBRixDQUFXaEIsQ0FBQyxDQUFDZ0MsSUFBYixFQUFtQjhELE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO2tCQUNsRGxDLENBQUMsQ0FBQzdCLElBQUYsQ0FBT3ZDLEVBQUUsQ0FBQ3dHLEVBQUgsQ0FBTW5FLENBQUMsQ0FBQ1osUUFBRixDQUFXaEIsQ0FBQyxDQUFDZ0MsSUFBYixFQUFtQjZELENBQW5CLEVBQXNCRyxDQUF0QixHQUEwQnZJLENBQWhDLEVBQW1DbUUsQ0FBQyxDQUFDWixRQUFGLENBQVdoQixDQUFDLENBQUNnQyxJQUFiLEVBQW1CNkQsQ0FBbkIsRUFBc0JJLENBQXRCLEdBQTBCeEksQ0FBN0QsQ0FBUDtnQkFDRDs7Z0JBQ0RxQyxDQUFDLENBQUMrQixNQUFGLEdBQVc4QixDQUFYO2dCQUNBN0QsQ0FBQyxDQUFDRyxLQUFGO2NBQ0Q7WUFSb0IsQ0FBdkIsRUFTR2dDLEtBVEg7VUFVRDtRQUNGLENBaEJEO01BaUJELENBckJEO0lBc0JEOztJQUNELEtBQUtsQixNQUFMLENBQVltQixNQUFaLEdBQXFCLEtBQXJCO0lBQ0EsS0FBS25CLE1BQUwsQ0FBWThELGNBQVosQ0FBMkIsUUFBM0IsRUFBcUNiLFlBQXJDLENBQWtEekUsRUFBRSxDQUFDMkcsS0FBckQsRUFBNERDLE1BQTVELEdBQXFFLEtBQUssS0FBS0MsT0FBTCxFQUExRTtJQUNBLEtBQUs5RixVQUFMLENBQWdCcUIsT0FBaEIsQ0FBd0IsVUFBVTdCLENBQVYsRUFBYUUsQ0FBYixFQUFnQjtNQUN0QyxJQUFJdkMsQ0FBSjtNQUNBcUMsQ0FBQyxDQUFDK0UsY0FBRixDQUFpQixRQUFqQixNQUErQi9FLENBQUMsQ0FBQytFLGNBQUYsQ0FBaUIsUUFBakIsRUFBMkJiLFlBQTNCLENBQXdDekUsRUFBRSxDQUFDdUYsTUFBM0MsRUFBbURDLFNBQW5ELEdBQStELENBQTlGOztNQUNBLElBQUkvRSxDQUFDLEtBQUssQ0FBQyxVQUFVdkMsQ0FBQyxHQUFHbUUsQ0FBQyxDQUFDaEIsU0FBaEIsS0FBOEJ6QyxTQUFTLEtBQUtWLENBQTVDLEdBQWdEVSxTQUFoRCxHQUE0RFYsQ0FBQyxDQUFDd0gsR0FBL0QsSUFBc0VyRCxDQUFDLENBQUNoQixTQUFGLENBQVlxRSxHQUFaLENBQWdCQyxLQUF0RixHQUE4RixDQUFuRyxDQUFELElBQTBHdEQsQ0FBQyxDQUFDaEIsU0FBRixDQUFZeUYsVUFBMUgsRUFBc0k7UUFDcEl2RyxDQUFDLENBQUNvQyxNQUFGLEdBQVcsSUFBWDs7UUFDQSxJQUFJLEVBQUVwQyxDQUFDLENBQUN3RyxJQUFGLElBQVUxRSxDQUFDLENBQUNXLFFBQUYsQ0FBV0ksU0FBWCxJQUF3QjdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDQyxZQUE5RSxDQUFKLEVBQWlHO1VBQy9GeEMsQ0FBQyxDQUFDd0csSUFBRixHQUFTLElBQVQsRUFBZS9HLEVBQUUsQ0FBQ21HLEtBQUgsQ0FBUzVGLENBQVQsRUFBWXlHLEdBQVosQ0FBZ0I7WUFDN0J4QyxLQUFLLEVBQUU7VUFEc0IsQ0FBaEIsRUFFWjRCLEVBRlksQ0FFVCxFQUZTLEVBRUw7WUFDUjVCLEtBQUssRUFBRTtVQURDLENBRkssRUFJWjRCLEVBSlksQ0FJVCxHQUpTLEVBSUo7WUFDVDVCLEtBQUssRUFBRTtVQURFLENBSkksRUFNWjlCLEtBTlksRUFBZjtRQU9EOztRQUNETCxDQUFDLENBQUNiLE1BQUYsQ0FBU3lGLE1BQVQsR0FBa0IxRyxDQUFDLENBQUN1RCxNQUFGLENBQVNtRCxNQUEzQjtRQUNBNUUsQ0FBQyxDQUFDYixNQUFGLENBQVMwRixTQUFULENBQW1CM0csQ0FBbkI7UUFDQThCLENBQUMsQ0FBQ2IsTUFBRixDQUFTOEMsV0FBVCxDQUFxQnRFLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUXNGLElBQTdCO1FBQ0E5RSxDQUFDLENBQUNiLE1BQUYsQ0FBU21CLE1BQVQsR0FBa0IsSUFBbEI7TUFDRCxDQWZELE1BZU87UUFDTHBDLENBQUMsQ0FBQ3dHLElBQUYsR0FBUyxLQUFUO1FBQ0F4RyxDQUFDLENBQUNvQyxNQUFGLEdBQVcsS0FBWDtNQUNEO0lBQ0YsQ0F0QkQ7RUF1QkQsQ0E3RUQ7O0VBOEVBbkMsS0FBSyxDQUFDdUIsU0FBTixDQUFnQnFGLFlBQWhCLEdBQStCLFlBQVk7SUFDekMsSUFBSTdHLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBSyxLQUFLZ0QsS0FBZCxFQUFxQjtNQUNuQixLQUFLdkMsU0FBTCxDQUFlcUcsWUFBZixDQUE0QixDQUE1QixFQUErQnhJLENBQUMsQ0FBQ3lJLE1BQWpDLEVBQXlDLEtBQXpDO01BQ0EsS0FBS3RHLFNBQUwsQ0FBZXVHLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0IxSSxDQUFDLENBQUMySSxJQUFqQyxFQUF1QyxJQUF2QztNQUNBLEtBQUt2RixJQUFMLENBQVVDLGFBQVYsQ0FBd0JsQyxFQUFFLENBQUNtQyxzQkFBM0IsRUFBbURDLE9BQW5ELENBQTJELFVBQVUzQixDQUFWLEVBQWE7UUFDdEVBLENBQUMsQ0FBQ2dGLE9BQUYsR0FBWWhGLENBQUMsQ0FBQ3VGLEdBQUYsSUFBU3pGLENBQUMsQ0FBQ2dELEtBQXZCO01BQ0QsQ0FGRDs7TUFHQSxJQUFJLEtBQUt0QyxTQUFULEVBQW9CO1FBQ2xCLEtBQUtBLFNBQUwsQ0FBZW9HLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0J4SSxDQUFDLENBQUN5SSxNQUFqQyxFQUF5QyxLQUF6QyxHQUFpRCxLQUFLckcsU0FBTCxDQUFlc0csWUFBZixDQUE0QixDQUE1QixFQUErQjFJLENBQUMsQ0FBQzJJLElBQWpDLEVBQXVDLElBQXZDLENBQWpEO01BQ0Q7O01BQ0QsS0FBS3RHLFVBQUwsQ0FBZ0JrQixPQUFoQixDQUF3QixVQUFVM0IsQ0FBVixFQUFhO1FBQ25DQSxDQUFDLENBQUN3QixJQUFGLENBQU9VLE1BQVAsR0FBZ0IsSUFBaEI7UUFDQWxDLENBQUMsQ0FBQzRHLFlBQUYsQ0FBZSxDQUFmLEVBQWtCeEksQ0FBQyxDQUFDeUksTUFBcEIsRUFBNEIsS0FBNUI7UUFDQTdHLENBQUMsQ0FBQzhHLFlBQUYsQ0FBZSxDQUFmLEVBQWtCMUksQ0FBQyxDQUFDMkksSUFBcEIsRUFBMEIsSUFBMUI7UUFDQS9HLENBQUMsQ0FBQ3lCLGFBQUYsQ0FBZ0JsQyxFQUFFLENBQUNtQyxzQkFBbkIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQVUzQixDQUFWLEVBQWE7VUFDOURBLENBQUMsQ0FBQ2dGLE9BQUYsR0FBWWhGLENBQUMsQ0FBQ3VGLEdBQUYsSUFBU3pGLENBQUMsQ0FBQ2dELEtBQXZCO1FBQ0QsQ0FGRDtNQUdELENBUEQ7SUFRRCxDQWpCRCxNQWlCTztNQUNMLEtBQUt2QyxTQUFMLENBQWVxRyxZQUFmLENBQTRCLENBQTVCLEVBQStCeEksQ0FBQyxDQUFDNEksT0FBakMsRUFBMEMsS0FBMUM7TUFDQSxLQUFLekcsU0FBTCxDQUFldUcsWUFBZixDQUE0QixDQUE1QixFQUErQjFJLENBQUMsQ0FBQzJJLElBQWpDLEVBQXVDLElBQXZDOztNQUNBLElBQUksS0FBS3ZHLFNBQVQsRUFBb0I7UUFDbEIsS0FBS0EsU0FBTCxDQUFlb0csWUFBZixDQUE0QixDQUE1QixFQUErQnhJLENBQUMsQ0FBQzRJLE9BQWpDLEVBQTBDLEtBQTFDLEdBQWtELEtBQUt4RyxTQUFMLENBQWVzRyxZQUFmLENBQTRCLENBQTVCLEVBQStCMUksQ0FBQyxDQUFDMkksSUFBakMsRUFBdUMsSUFBdkMsQ0FBbEQ7TUFDRDs7TUFDRCxLQUFLdEcsVUFBTCxDQUFnQmtCLE9BQWhCLENBQXdCLFVBQVUzQixDQUFWLEVBQWE7UUFDbkNBLENBQUMsQ0FBQ3dCLElBQUYsQ0FBT1UsTUFBUCxHQUFnQixJQUFoQjtRQUNBbEMsQ0FBQyxDQUFDNEcsWUFBRixDQUFlLENBQWYsRUFBa0J4SSxDQUFDLENBQUM0SSxPQUFwQixFQUE2QixLQUE3QjtRQUNBaEgsQ0FBQyxDQUFDOEcsWUFBRixDQUFlLENBQWYsRUFBa0IxSSxDQUFDLENBQUMySSxJQUFwQixFQUEwQixJQUExQjtRQUNBL0csQ0FBQyxDQUFDeUIsYUFBRixDQUFnQmxDLEVBQUUsQ0FBQ21DLHNCQUFuQixFQUEyQ0MsT0FBM0MsQ0FBbUQsVUFBVTNCLENBQVYsRUFBYTtVQUM5REEsQ0FBQyxDQUFDZ0YsT0FBRixHQUFZaEYsQ0FBQyxDQUFDdUYsR0FBRixJQUFTekYsQ0FBQyxDQUFDZ0QsS0FBdkI7UUFDRCxDQUZEO01BR0QsQ0FQRDtJQVFEO0VBQ0YsQ0FsQ0Q7O0VBbUNBL0MsS0FBSyxDQUFDdUIsU0FBTixDQUFnQjJGLGFBQWhCLEdBQWdDLFlBQVk7SUFDMUMsSUFBSSxLQUFLcEcsV0FBVCxFQUFzQjtNQUNwQixPQUFPLEVBQVA7SUFDRDs7SUFDRCxJQUFJZixDQUFDLEdBQUcsRUFBUjtJQUNBLElBQUlFLENBQUMsR0FBRyxLQUFLd0IsSUFBTCxDQUFVQyxhQUFWLENBQXdCbEMsRUFBRSxDQUFDbUMsc0JBQTNCLENBQVI7O0lBQ0EsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNUIsQ0FBQyxDQUFDOEYsTUFBdEIsRUFBOEJsRSxDQUFDLEVBQS9CLEVBQW1DO01BQ2pDLElBQUksQ0FBQ3NGLENBQUMsR0FBR2xILENBQUMsQ0FBQzRCLENBQUQsQ0FBTixFQUFXMkQsR0FBWCxJQUFrQixLQUFLekMsS0FBM0IsRUFBa0M7UUFDaEMsSUFBSXJGLENBQUMsR0FBRyxFQUFSOztRQUNBLEtBQUssSUFBSWtHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1RCxDQUFDLENBQUNyRixNQUFGLENBQVNpRSxNQUE3QixFQUFxQ25DLENBQUMsRUFBdEMsRUFBMEM7VUFDeEMsSUFBSWtDLENBQUMsR0FBR3FCLENBQUMsQ0FBQ3JGLE1BQUYsQ0FBUzhCLENBQVQsQ0FBUjtVQUNBbEcsQ0FBQyxDQUFDcUUsSUFBRixDQUFPLEtBQUtOLElBQUwsQ0FBVWlDLHFCQUFWLENBQWdDb0MsQ0FBaEMsQ0FBUDtRQUNEOztRQUNEL0YsQ0FBQyxDQUFDZ0MsSUFBRixDQUFPckUsQ0FBUDtNQUNEO0lBQ0Y7O0lBQ0QsS0FBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtxQyxVQUFMLENBQWdCcUYsTUFBcEMsRUFBNEMxSCxDQUFDLEVBQTdDLEVBQWlEO01BQy9DLElBQUk4SSxDQUFKO01BQ0FsSCxDQUFDLEdBQUcsQ0FBQ2tILENBQUMsR0FBRyxLQUFLekcsVUFBTCxDQUFnQnJDLENBQWhCLEVBQW1Cb0QsSUFBeEIsRUFBOEJDLGFBQTlCLENBQTRDbEMsRUFBRSxDQUFDbUMsc0JBQS9DLENBQUo7O01BQ0EsS0FBS0UsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHNUIsQ0FBQyxDQUFDOEYsTUFBbEIsRUFBMEJsRSxDQUFDLEVBQTNCLEVBQStCO1FBQzdCLElBQUl1RixDQUFDLEdBQUduSCxDQUFDLENBQUM0QixDQUFELENBQVQ7O1FBQ0EsSUFBSXVGLENBQUMsQ0FBQzVCLEdBQUYsSUFBUyxLQUFLekMsS0FBbEIsRUFBeUI7VUFDdkJyRixDQUFDLEdBQUcsRUFBSjs7VUFDQSxLQUFLa0csQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHd0QsQ0FBQyxDQUFDdEYsTUFBRixDQUFTaUUsTUFBekIsRUFBaUNuQyxDQUFDLEVBQWxDLEVBQXNDO1lBQ3BDa0MsQ0FBQyxHQUFHc0IsQ0FBQyxDQUFDdEYsTUFBRixDQUFTOEIsQ0FBVCxDQUFKO1lBQ0FsRyxDQUFDLENBQUNxRSxJQUFGLENBQU9vRixDQUFDLENBQUN6RCxxQkFBRixDQUF3Qm9DLENBQXhCLENBQVA7VUFDRDs7VUFDRC9GLENBQUMsQ0FBQ2dDLElBQUYsQ0FBT3JFLENBQVA7UUFDRDtNQUNGO0lBQ0Y7O0lBQ0QsT0FBT3FDLENBQVA7RUFDRCxDQWhDRDs7RUFpQ0FDLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0I4RixjQUFoQixHQUFpQyxZQUFZO0lBQzNDLElBQUksS0FBS3ZHLFdBQVQsRUFBc0I7TUFDcEIsT0FBTyxFQUFQO0lBQ0Q7O0lBQ0QsSUFBSWYsQ0FBQyxHQUFHLEVBQVI7SUFDQSxJQUFJRSxDQUFDLEdBQUcsS0FBS3dCLElBQUwsQ0FBVUMsYUFBVixDQUF3QmxDLEVBQUUsQ0FBQ21DLHNCQUEzQixDQUFSOztJQUNBLEtBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzVCLENBQUMsQ0FBQzhGLE1BQXRCLEVBQThCbEUsQ0FBQyxFQUEvQixFQUFtQztNQUNqQyxJQUFJLENBQUNzRixDQUFDLEdBQUdsSCxDQUFDLENBQUM0QixDQUFELENBQU4sRUFBVzJELEdBQVgsSUFBa0IsS0FBS3pDLEtBQTNCLEVBQWtDO1FBQ2hDLElBQUlyRixDQUFDLEdBQUcsRUFBUjs7UUFDQSxLQUFLLElBQUlrRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUQsQ0FBQyxDQUFDckYsTUFBRixDQUFTaUUsTUFBN0IsRUFBcUNuQyxDQUFDLEVBQXRDLEVBQTBDO1VBQ3hDLElBQUlrQyxDQUFDLEdBQUdxQixDQUFDLENBQUNyRixNQUFGLENBQVM4QixDQUFULENBQVI7VUFDQWxHLENBQUMsQ0FBQ3FFLElBQUYsQ0FBTyxLQUFLTixJQUFMLENBQVVpQyxxQkFBVixDQUFnQ29DLENBQWhDLENBQVA7UUFDRDs7UUFDRC9GLENBQUMsQ0FBQ2dDLElBQUYsQ0FBTztVQUNMdUYsT0FBTyxFQUFFLEtBQUs3RixJQURUO1VBRUxLLE1BQU0sRUFBRXBFO1FBRkgsQ0FBUDtNQUlEO0lBQ0Y7O0lBQ0QsS0FBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtxQyxVQUFMLENBQWdCcUYsTUFBcEMsRUFBNEMxSCxDQUFDLEVBQTdDLEVBQWlEO01BQy9DLElBQUk4SSxDQUFKO01BQ0FsSCxDQUFDLEdBQUcsQ0FBQ2tILENBQUMsR0FBRyxLQUFLekcsVUFBTCxDQUFnQnJDLENBQWhCLEVBQW1Cb0QsSUFBeEIsRUFBOEJDLGFBQTlCLENBQTRDbEMsRUFBRSxDQUFDbUMsc0JBQS9DLENBQUo7O01BQ0EsS0FBS0UsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHNUIsQ0FBQyxDQUFDOEYsTUFBbEIsRUFBMEJsRSxDQUFDLEVBQTNCLEVBQStCO1FBQzdCLElBQUl1RixDQUFDLEdBQUduSCxDQUFDLENBQUM0QixDQUFELENBQVQ7O1FBQ0EsSUFBSXVGLENBQUMsQ0FBQzVCLEdBQUYsSUFBUyxLQUFLekMsS0FBbEIsRUFBeUI7VUFDdkJyRixDQUFDLEdBQUcsRUFBSjs7VUFDQSxLQUFLa0csQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHd0QsQ0FBQyxDQUFDdEYsTUFBRixDQUFTaUUsTUFBekIsRUFBaUNuQyxDQUFDLEVBQWxDLEVBQXNDO1lBQ3BDa0MsQ0FBQyxHQUFHc0IsQ0FBQyxDQUFDdEYsTUFBRixDQUFTOEIsQ0FBVCxDQUFKO1lBQ0FsRyxDQUFDLENBQUNxRSxJQUFGLENBQU9vRixDQUFDLENBQUN6RCxxQkFBRixDQUF3Qm9DLENBQXhCLENBQVA7VUFDRDs7VUFDRC9GLENBQUMsQ0FBQ2dDLElBQUYsQ0FBTztZQUNMdUYsT0FBTyxFQUFFSCxDQURKO1lBRUxyRixNQUFNLEVBQUVwRTtVQUZILENBQVA7UUFJRDtNQUNGO0lBQ0Y7O0lBQ0QsT0FBT3FDLENBQVA7RUFDRCxDQXRDRDs7RUF1Q0FDLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JnRyxRQUFoQixHQUEyQixVQUFVeEgsQ0FBVixFQUFhO0lBQ3RDLElBQUlFLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBS3VDLFFBQUwsQ0FBY0ksU0FBZCxJQUEyQjdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDTyxJQUF6RSxFQUErRTtNQUM3RSxLQUFLdEMsVUFBTCxDQUFnQnFCLE9BQWhCLENBQXdCLFVBQVVDLENBQVYsRUFBYW5FLENBQWIsRUFBZ0I7UUFDdEMsSUFBSWtHLENBQUo7UUFDQS9CLENBQUMsQ0FBQ00sTUFBRixHQUFXLENBQUNwQyxDQUFELElBQU1yQyxDQUFDLEtBQUssQ0FBQyxVQUFVa0csQ0FBQyxHQUFHM0QsQ0FBQyxDQUFDWSxTQUFoQixLQUE4QnpDLFNBQVMsS0FBS3dGLENBQTVDLEdBQWdEeEYsU0FBaEQsR0FBNER3RixDQUFDLENBQUNzQixHQUEvRCxJQUFzRWpGLENBQUMsQ0FBQ1ksU0FBRixDQUFZcUUsR0FBWixDQUFnQkMsS0FBdEYsR0FBOEYsQ0FBbkcsQ0FBUCxJQUFnSGxGLENBQUMsQ0FBQ1csT0FBbEgsSUFBNkhYLENBQUMsQ0FBQ1ksU0FBRixDQUFZeUYsVUFBcEo7UUFDQXpFLENBQUMsQ0FBQ2lELGNBQUYsQ0FBaUIsUUFBakIsTUFBK0JqRCxDQUFDLENBQUNpRCxjQUFGLENBQWlCLFFBQWpCLEVBQTJCYixZQUEzQixDQUF3Q3pFLEVBQUUsQ0FBQ3VGLE1BQTNDLEVBQW1EQyxTQUFuRCxHQUErRCxDQUE5RjtNQUNELENBSkQ7O01BS0EsSUFBSSxLQUFLcEUsT0FBTCxJQUFnQixLQUFLLEtBQUttQyxLQUE5QixFQUFxQztRQUNuQyxJQUFJLEtBQUtqQyxXQUFULEVBQXNCO1VBQ3BCLEtBQUs4RixZQUFMO1FBQ0QsQ0FGRCxNQUVPLElBQUk3RyxDQUFKLEVBQU87VUFDWixLQUFLUyxTQUFMLENBQWVxRyxZQUFmLENBQTRCLENBQTVCLEVBQStCeEksQ0FBQyxDQUFDbUosT0FBakMsRUFBMEMsS0FBMUMsR0FBa0QsS0FBS2hILFNBQUwsQ0FBZXVHLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0IxSSxDQUFDLENBQUNvSixVQUFqQyxFQUE2QyxJQUE3QyxDQUFsRCxFQUFzRyxLQUFLaEgsU0FBTCxLQUFtQixLQUFLQSxTQUFMLENBQWVvRyxZQUFmLENBQTRCLENBQTVCLEVBQStCeEksQ0FBQyxDQUFDbUosT0FBakMsRUFBMEMsS0FBMUMsR0FBa0QsS0FBSy9HLFNBQUwsQ0FBZXNHLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0IxSSxDQUFDLENBQUNvSixVQUFqQyxFQUE2QyxJQUE3QyxDQUFyRSxDQUF0RyxFQUFnTyxLQUFLL0csVUFBTCxDQUFnQmtCLE9BQWhCLENBQXdCLFVBQVU3QixDQUFWLEVBQWE7WUFDblFBLENBQUMsQ0FBQzhHLFlBQUYsQ0FBZSxDQUFmLEVBQWtCeEksQ0FBQyxDQUFDbUosT0FBcEIsRUFBNkIsS0FBN0I7WUFDQXpILENBQUMsQ0FBQ2dILFlBQUYsQ0FBZSxDQUFmLEVBQWtCMUksQ0FBQyxDQUFDb0osVUFBcEIsRUFBZ0MsSUFBaEM7VUFDRCxDQUgrTixDQUFoTztRQUlELENBTE0sTUFLQTtVQUNMLEtBQUtqSCxTQUFMLENBQWVxRyxZQUFmLENBQTRCLENBQTVCLEVBQStCeEksQ0FBQyxDQUFDMkksSUFBakMsRUFBdUMsSUFBdkMsR0FBOEMsS0FBS3ZHLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlb0csWUFBZixDQUE0QixDQUE1QixFQUErQnhJLENBQUMsQ0FBQzJJLElBQWpDLEVBQXVDLElBQXZDLENBQWhFLEVBQThHLEtBQUt0RyxVQUFMLENBQWdCa0IsT0FBaEIsQ0FBd0IsVUFBVTdCLENBQVYsRUFBYTtZQUNqSkEsQ0FBQyxDQUFDOEcsWUFBRixDQUFlLENBQWYsRUFBa0J4SSxDQUFDLENBQUMySSxJQUFwQixFQUEwQixJQUExQjtVQUNELENBRjZHLENBQTlHO1FBR0Q7TUFDRjtJQUNGO0VBQ0YsQ0F2QkQ7O0VBd0JBaEgsS0FBSyxDQUFDdUIsU0FBTixDQUFnQm1HLFlBQWhCLEdBQStCLFlBQVk7SUFDekMsSUFBSSxLQUFLbEYsUUFBTCxDQUFjSSxTQUFkLElBQTJCN0QsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENPLElBQXpFLEVBQStFO01BQzdFLE9BQU8sSUFBUDtJQUNEOztJQUNELElBQUksQ0FBQyxLQUFLL0IsV0FBTixJQUFxQixLQUFLRixPQUExQixJQUFxQyxLQUFLQyxTQUFMLENBQWV5RixVQUF4RCxFQUFvRTtNQUNsRSxJQUFJdkcsQ0FBQyxHQUFHLEtBQUtRLFVBQUwsQ0FBZ0IsS0FBS3FFLFFBQUwsRUFBaEIsQ0FBUjtNQUNBLElBQUkzRSxDQUFDLEdBQUdGLENBQUMsQ0FBQ2tFLFlBQUYsQ0FBZXpFLEVBQUUsQ0FBQ21JLGVBQWxCLENBQVI7TUFDQTFILENBQUMsSUFBSTJILE9BQU8sQ0FBQ0MsS0FBUixDQUFjLDBCQUFkLEVBQTBDLEtBQUt6SCxFQUEvQyxFQUFtRCxLQUFLRyxVQUF4RCxFQUFvRSxLQUFLd0MsS0FBekUsQ0FBTDtNQUNBLElBQUlsQixDQUFDLEdBQUcsRUFBUjs7TUFDQSxLQUFLLElBQUluRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUMsQ0FBQyxDQUFDNkIsTUFBRixDQUFTaUUsTUFBN0IsRUFBcUNySSxDQUFDLEVBQXRDLEVBQTBDO1FBQ3hDbUUsQ0FBQyxDQUFDRSxJQUFGLENBQU9oQyxDQUFDLENBQUMyRCxxQkFBRixDQUF3QmxFLEVBQUUsQ0FBQ3dHLEVBQUgsQ0FBTS9GLENBQUMsQ0FBQzZCLE1BQUYsQ0FBU3BFLENBQVQsRUFBWXVJLENBQVosR0FBZ0JsRyxDQUFDLENBQUMwRyxNQUF4QixFQUFnQ3hHLENBQUMsQ0FBQzZCLE1BQUYsQ0FBU3BFLENBQVQsRUFBWXdJLENBQVosR0FBZ0JuRyxDQUFDLENBQUMrSCxNQUFsRCxDQUF4QixDQUFQO01BQ0Q7O01BQ0QsT0FBT2pHLENBQVA7SUFDRDs7SUFDRCxPQUFPLElBQVA7RUFDRCxDQWZEOztFQWdCQTdCLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0J3RyxjQUFoQixHQUFpQyxZQUFZO0lBQzNDLEtBQUtsSCxTQUFMLENBQWVtSCxZQUFmO0VBQ0QsQ0FGRDs7RUFHQWhJLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0IwRyxTQUFoQixHQUE0QixVQUFVbEksQ0FBVixFQUFhRSxDQUFiLEVBQWdCO0lBQzFDLElBQUk0QixDQUFKO0lBQ0EsSUFBSW5FLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBSzhFLFFBQUwsQ0FBY0ksU0FBZCxJQUEyQjdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDTyxJQUFyRSxJQUE2RSxDQUFDLEtBQUtoQyxTQUF2RixFQUFrRztNQUNoRyxPQUFPLEtBQVA7SUFDRDs7SUFDRCxJQUFJWixDQUFKLEVBQU87TUFDTCxLQUFLWSxTQUFMLENBQWVxSCxTQUFmLElBQTRCbkksQ0FBNUI7O01BQ0EsSUFBSSxLQUFLYyxTQUFMLENBQWVxSCxTQUFmLElBQTRCLEtBQUtoSCxZQUFyQyxFQUFtRDtRQUNqRCxLQUFLTCxTQUFMLENBQWVxSCxTQUFmLEdBQTJCLEtBQUtoSCxZQUFoQztRQUNBOUIsbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDMkUsT0FBN0MsR0FBdUQsSUFBdkQ7O1FBQ0EsSUFBSXZFLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQVU3RCxDQUFWLEVBQWE7VUFDbkJYLG1CQUFtQixXQUFuQixDQUE0Qm1FLFFBQTVCLENBQXFDNkUsUUFBckM7VUFDQTFLLENBQUMsQ0FBQ3FGLEtBQUYsR0FBVWhELENBQVY7VUFDQXJDLENBQUMsQ0FBQ21ELFNBQUYsR0FBYyxJQUFJdkIsc0JBQXNCLENBQUM4RixtQkFBM0IsQ0FBK0MxSCxDQUFDLENBQUM4RSxRQUFGLENBQVdJLFNBQTFELEVBQXFFbEYsQ0FBQyxDQUFDOEUsUUFBRixDQUFXNkMsU0FBWCxDQUFxQjNILENBQUMsQ0FBQ3FGLEtBQUYsR0FBVSxDQUEvQixDQUFyRSxDQUFkO1VBQ0F2RSxXQUFXLENBQUM2SixRQUFaLENBQXFCM0YsV0FBckIsR0FBbUM0RixJQUFuQyxDQUF3Q3pKLG1CQUFtQixDQUFDMEosbUJBQXBCLENBQXdDQyxlQUFoRjtVQUNBOUssQ0FBQyxDQUFDa0osWUFBRjtVQUNBbEosQ0FBQyxDQUFDK0ssWUFBRixDQUFlLFlBQVk7WUFDekJySixtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ21GLFFBQXJDLEdBQWdELElBQWhEO1VBQ0QsQ0FGRCxFQUVHLEVBRkg7VUFHQXBLLFdBQVcsQ0FBQ3FLLFFBQVosQ0FBcUJqRyxXQUFyQixHQUFtQ2tHLGNBQW5DLENBQWtEL0osbUJBQW1CLENBQUNnSyxpQkFBcEIsQ0FBc0NDLFFBQXhGO1VBQ0EsSUFBSTdJLENBQUMsR0FBR2hCLHNCQUFzQixDQUFDOEosbUJBQXZCLENBQTJDckcsV0FBM0MsR0FBeURzRyxjQUF6RCxHQUEwRUMsV0FBMUUsRUFBUjs7VUFDQSxJQUFJaEosQ0FBQyxDQUFDaUosSUFBRixJQUFVbkssaUJBQWlCLENBQUNvSyxzQkFBbEIsQ0FBeUNDLFVBQXZELEVBQW1FO1lBQ2pFbkosQ0FBQyxDQUFDb0osR0FBRixHQUFRQyxJQUFJLENBQUNDLEdBQUwsQ0FBU3RKLENBQUMsQ0FBQ29KLEdBQVgsRUFBZ0IzTCxDQUFDLENBQUNtRCxTQUFGLENBQVlxRSxHQUFaLENBQWdCQyxLQUFoQyxDQUFSO1lBQ0FsRyxzQkFBc0IsQ0FBQzhKLG1CQUF2QixDQUEyQ3JHLFdBQTNDLEdBQXlEc0csY0FBekQsR0FBMEVRLFdBQTFFLENBQXNGdkosQ0FBdEY7VUFDRDs7VUFDRHJCLFlBQVksQ0FBQzZLLFNBQWIsQ0FBdUIvRyxXQUF2QixHQUFxQ2dILFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRWhMLHFCQUFxQixDQUFDaUwsT0FBdEIsQ0FBOEJDLGVBQS9GLEVBQWdIekssbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDZ0IsUUFBN0MsQ0FBc0RzRixRQUF0RCxDQUErREMsS0FBL0QsR0FBdUUsR0FBdkUsR0FBNkVyTSxDQUFDLENBQUM4RSxRQUFGLENBQVdJLFNBQXhNO1VBQ0FwRSxXQUFXLENBQUM2SixRQUFaLENBQXFCM0YsV0FBckIsR0FBbUM0RixJQUFuQyxDQUF3Q3pKLG1CQUFtQixDQUFDMEosbUJBQXBCLENBQXdDeUIsU0FBaEYsRUFBMkYsS0FBM0Y7O1VBQ0EsSUFBSSxLQUFLdE0sQ0FBQyxDQUFDa0gsUUFBRixFQUFULEVBQXVCO1lBQ3JCLFFBQVFsSCxDQUFDLENBQUM4RSxRQUFGLENBQVdJLFNBQW5CO2NBQ0UsS0FBSzdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDMkgsWUFBL0M7Z0JBQ0V2TSxDQUFDLENBQUN3TSxTQUFGLENBQVlyTCxtQkFBbUIsQ0FBQzBKLG1CQUFwQixDQUF3QzRCLFdBQXBELEVBQWlFLENBQWpFO2dCQUNBL0ssbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUM2RyxPQUFyQyxDQUE2Q3JMLGlCQUFpQixDQUFDc0wsNEJBQWxCLENBQStDQyxTQUE1RjtnQkFDQTs7Y0FDRixLQUFLdkwsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENpSSxVQUEvQztnQkFDRTdNLENBQUMsQ0FBQ3dNLFNBQUYsQ0FBWXJMLG1CQUFtQixDQUFDMEosbUJBQXBCLENBQXdDNEIsV0FBcEQsRUFBaUUsQ0FBakU7Z0JBQ0EvSyxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQzZHLE9BQXJDLENBQTZDckwsaUJBQWlCLENBQUNzTCw0QkFBbEIsQ0FBK0NHLFVBQTVGO2dCQUNBOztjQUNGLEtBQUt6TCxpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQ21JLElBQS9DO2dCQUNFL00sQ0FBQyxDQUFDd00sU0FBRixDQUFZckwsbUJBQW1CLENBQUMwSixtQkFBcEIsQ0FBd0M0QixXQUFwRCxFQUFpRSxDQUFqRTtnQkFDQS9LLG1CQUFtQixXQUFuQixDQUE0Qm1FLFFBQTVCLENBQXFDNkcsT0FBckMsQ0FBNkNyTCxpQkFBaUIsQ0FBQ3NMLDRCQUFsQixDQUErQ0ssU0FBNUY7Z0JBQ0E7O2NBQ0YsS0FBSzNMLGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDcUksSUFBL0M7Z0JBQ0VqTixDQUFDLENBQUN3TSxTQUFGLENBQVlyTCxtQkFBbUIsQ0FBQzBKLG1CQUFwQixDQUF3QzRCLFdBQXBELEVBQWlFLEVBQWpFO2dCQUNBL0ssbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUM2RyxPQUFyQyxDQUE2Q3JMLGlCQUFpQixDQUFDc0wsNEJBQWxCLENBQStDTyxTQUE1RjtnQkFDQTs7Y0FDRixLQUFLN0wsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMEN1SSxRQUEvQztnQkFDRW5OLENBQUMsQ0FBQ3dNLFNBQUYsQ0FBWXJMLG1CQUFtQixDQUFDMEosbUJBQXBCLENBQXdDNEIsV0FBcEQsRUFBaUUsRUFBakU7Z0JBQ0EvSyxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQzZHLE9BQXJDLENBQTZDckwsaUJBQWlCLENBQUNzTCw0QkFBbEIsQ0FBK0NTLGFBQTVGO1lBbkJKO1VBcUJELENBdEJELE1Bc0JPO1lBQ0wsUUFBUXBOLENBQUMsQ0FBQzhFLFFBQUYsQ0FBV0ksU0FBbkI7Y0FDRSxLQUFLN0QsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMEMySCxZQUEvQztnQkFDRTdLLG1CQUFtQixXQUFuQixDQUE0Qm1FLFFBQTVCLENBQXFDNkcsT0FBckMsQ0FBNkNyTCxpQkFBaUIsQ0FBQ3NMLDRCQUFsQixDQUErQ1UsV0FBNUY7Z0JBQ0E7O2NBQ0YsS0FBS2hNLGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDaUksVUFBL0M7Z0JBQ0VuTCxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQzZHLE9BQXJDLENBQTZDckwsaUJBQWlCLENBQUNzTCw0QkFBbEIsQ0FBK0NXLFlBQTVGO2dCQUNBOztjQUNGLEtBQUtqTSxpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQ21JLElBQS9DO2dCQUNFckwsbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUM2RyxPQUFyQyxDQUE2Q3JMLGlCQUFpQixDQUFDc0wsNEJBQWxCLENBQStDWSxXQUE1RjtnQkFDQTs7Y0FDRixLQUFLbE0saUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENxSSxJQUEvQztnQkFDRXZMLG1CQUFtQixXQUFuQixDQUE0Qm1FLFFBQTVCLENBQXFDNkcsT0FBckMsQ0FBNkNyTCxpQkFBaUIsQ0FBQ3NMLDRCQUFsQixDQUErQ2EsV0FBNUY7Z0JBQ0E7O2NBQ0YsS0FBS25NLGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDdUksUUFBL0M7Z0JBQ0V6TCxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQzZHLE9BQXJDLENBQTZDckwsaUJBQWlCLENBQUNzTCw0QkFBbEIsQ0FBK0NjLGVBQTVGO2dCQUNBOztjQUNGLEtBQUtwTSxpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQ0MsWUFBL0M7Z0JBQ0VuRCxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQzZHLE9BQXJDLENBQTZDckwsaUJBQWlCLENBQUNzTCw0QkFBbEIsQ0FBK0NlLGFBQTVGO1lBakJKO1VBbUJEOztVQUNELFFBQVExTixDQUFDLENBQUM4RSxRQUFGLENBQVdJLFNBQW5CO1lBQ0UsS0FBSzdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDMkgsWUFBL0M7Y0FDRXJMLFlBQVksQ0FBQzZLLFNBQWIsQ0FBdUIvRyxXQUF2QixHQUFxQ2dILFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRWhMLHFCQUFxQixDQUFDaUwsT0FBdEIsQ0FBOEJ5QixVQUEvRixFQUEyRyxPQUEzRztjQUNBOztZQUNGLEtBQUt0TSxpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQ2lJLFVBQS9DO2NBQ0UzTCxZQUFZLENBQUM2SyxTQUFiLENBQXVCL0csV0FBdkIsR0FBcUNnSCxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVoTCxxQkFBcUIsQ0FBQ2lMLE9BQXRCLENBQThCeUIsVUFBL0YsRUFBMkcsT0FBM0c7Y0FDQTs7WUFDRixLQUFLdE0saUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENtSSxJQUEvQztjQUNFN0wsWUFBWSxDQUFDNkssU0FBYixDQUF1Qi9HLFdBQXZCLEdBQXFDZ0gsWUFBckMsR0FBb0RDLFlBQXBELENBQWlFaEwscUJBQXFCLENBQUNpTCxPQUF0QixDQUE4QnlCLFVBQS9GLEVBQTJHLE1BQTNHO2NBQ0E7O1lBQ0YsS0FBS3RNLGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDcUksSUFBL0M7Y0FDRS9MLFlBQVksQ0FBQzZLLFNBQWIsQ0FBdUIvRyxXQUF2QixHQUFxQ2dILFlBQXJDLEdBQW9EQyxZQUFwRCxDQUFpRWhMLHFCQUFxQixDQUFDaUwsT0FBdEIsQ0FBOEJ5QixVQUEvRixFQUEyRyxNQUEzRztjQUNBOztZQUNGLEtBQUt0TSxpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQ3VJLFFBQS9DO2NBQ0VqTSxZQUFZLENBQUM2SyxTQUFiLENBQXVCL0csV0FBdkIsR0FBcUNnSCxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVoTCxxQkFBcUIsQ0FBQ2lMLE9BQXRCLENBQThCeUIsVUFBL0YsRUFBMkcsTUFBM0c7Y0FDQTs7WUFDRixLQUFLdE0saUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENDLFlBQS9DO2NBQ0UzRCxZQUFZLENBQUM2SyxTQUFiLENBQXVCL0csV0FBdkIsR0FBcUNnSCxZQUFyQyxHQUFvREMsWUFBcEQsQ0FBaUVoTCxxQkFBcUIsQ0FBQ2lMLE9BQXRCLENBQThCeUIsVUFBL0YsRUFBMkcsTUFBM0c7VUFqQko7UUFtQkQsQ0EvRUQ7O1FBZ0ZBLElBQUlqTSxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNnQixRQUE3QyxDQUFzRDhHLElBQXRELElBQThELEtBQUtqRixPQUFMLEVBQWxFLEVBQWtGO1VBQ2hGakgsbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNtRixRQUFyQyxHQUFnRCxLQUFoRDtVQUNBbEssV0FBVyxDQUFDNkosUUFBWixDQUFxQjNGLFdBQXJCLEdBQW1DNEYsSUFBbkMsQ0FBd0N6SixtQkFBbUIsQ0FBQzBKLG1CQUFwQixDQUF3Q3lCLFNBQWhGLEVBQTJGLElBQTNGO1VBQ0E1SyxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNnQixRQUE3QyxDQUFzRDhHLElBQXRELElBQThELEtBQUtqRixPQUFMLEVBQTlEOztVQUNBLElBQUksS0FBS3hGLFNBQUwsQ0FBZXFFLEdBQWYsSUFBc0IsS0FBS3JFLFNBQUwsQ0FBZXFFLEdBQWYsQ0FBbUJxRyxXQUFuQixDQUErQnhGLE1BQS9CLEdBQXdDLENBQWxFLEVBQXFFO1lBQ25FdEgsUUFBUSxDQUFDK00sS0FBVCxDQUFlOUksV0FBZixHQUE2QitJLE1BQTdCLENBQW9DNU0sbUJBQW1CLENBQUM2TSxjQUFwQixDQUFtQ0MsVUFBdkUsRUFBbUY5TSxtQkFBbUIsQ0FBQzZNLGNBQXBCLENBQW1DRSxNQUF0SCxFQUE4SCxJQUE5SCxFQUFvSWhJLENBQXBJO1VBQ0QsQ0FGRCxNQUVPO1lBQ0xBLENBQUMsQ0FBQyxLQUFLL0MsU0FBTCxDQUFlcUUsR0FBZixHQUFxQixLQUFLckUsU0FBTCxDQUFlcUUsR0FBZixDQUFtQnFHLFdBQW5CLENBQStCLENBQS9CLENBQXJCLEdBQXlELENBQTFELENBQUQ7VUFDRDtRQUNGLENBVEQsTUFTTztVQUNMLEtBQUsxSyxTQUFMLENBQWVxSCxTQUFmLEdBQTJCLENBQTNCO1VBQ0E1SixXQUFXLENBQUNxSyxRQUFaLENBQXFCakcsV0FBckIsR0FBbUNrRyxjQUFuQyxDQUFrRC9KLG1CQUFtQixDQUFDZ0ssaUJBQXBCLENBQXNDZ0QsR0FBeEY7VUFDQXBOLFFBQVEsQ0FBQytNLEtBQVQsQ0FBZTlJLFdBQWYsR0FBNkIrSSxNQUE3QixDQUFvQy9NLFNBQVMsQ0FBQ29OLElBQVYsQ0FBZUMsTUFBbkQsRUFBMkRsTixtQkFBbUIsQ0FBQzZNLGNBQXBCLENBQW1DRSxNQUE5RixFQUFzRzlNLHVCQUF1QixDQUFDa04sb0JBQXhCLENBQTZDQyxNQUFuSjtVQUNBN00sbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUMySSxhQUFyQztRQUNEO01BQ0Y7SUFDRixDQXJHRCxNQXFHTztNQUNMLElBQUksS0FBSyxLQUFLckwsU0FBTCxDQUFlcUgsU0FBeEIsRUFBbUM7UUFDakM7TUFDRDs7TUFDRCxLQUFLckgsU0FBTCxDQUFlcUgsU0FBZixJQUE0Qm5JLENBQTVCO01BQ0EsS0FBS2MsU0FBTCxDQUFlcUgsU0FBZixHQUEyQixDQUEzQixLQUFpQyxLQUFLckgsU0FBTCxDQUFlcUgsU0FBZixHQUEyQixDQUE1RDtJQUNEOztJQUNELElBQUlwQyxDQUFDLEdBQUcsS0FBS3ZGLFVBQUwsQ0FBZ0IsS0FBS3FFLFFBQUwsRUFBaEIsQ0FBUjtJQUNBa0IsQ0FBQyxDQUFDaEIsY0FBRixDQUFpQixRQUFqQixNQUErQmdCLENBQUMsQ0FBQ2hCLGNBQUYsQ0FBaUIsUUFBakIsRUFBMkJiLFlBQTNCLENBQXdDekUsRUFBRSxDQUFDdUYsTUFBM0MsRUFBbURDLFNBQW5ELEdBQStELEtBQUtuRSxTQUFMLENBQWVxSCxTQUFmLEdBQTJCLEtBQUtoSCxZQUE5SDtJQUNBLElBQUk3QyxDQUFDLEdBQUcsVUFBVXdELENBQUMsR0FBR2lFLENBQUMsQ0FBQ2hCLGNBQUYsQ0FBaUIsT0FBakIsQ0FBZCxLQUE0QzFHLFNBQVMsS0FBS3lELENBQTFELEdBQThEekQsU0FBOUQsR0FBMEV5RCxDQUFDLENBQUNvQyxZQUFGLENBQWVrSSxFQUFFLENBQUNDLFFBQWxCLENBQWxGOztJQUNBLElBQUkvTixDQUFKLEVBQU87TUFDTCxJQUFJLEtBQUs4QyxPQUFULEVBQWtCO1FBQ2hCLElBQUksQ0FBQ2xCLENBQUwsRUFBUTtVQUNOLEtBQUtrQixPQUFMLEdBQWUsS0FBZixFQUFzQjlDLENBQUMsQ0FBQ29ELElBQUYsQ0FBT1UsTUFBUCxHQUFnQixLQUF0QztRQUNEO01BQ0YsQ0FKRCxNQUlPLElBQUlsQyxDQUFKLEVBQU87UUFDWixLQUFLa0IsT0FBTCxHQUFlLElBQWYsRUFBcUI5QyxDQUFDLENBQUNvRCxJQUFGLENBQU9VLE1BQVAsR0FBZ0IsSUFBckMsRUFBMkM5RCxDQUFDLENBQUN3SSxZQUFGLENBQWUsQ0FBZixFQUFrQnhJLENBQUMsQ0FBQ2dPLGdCQUFwQixFQUFzQyxLQUF0QyxDQUEzQyxFQUF5RmhPLENBQUMsQ0FBQ2lPLG1CQUFGLENBQXNCLFlBQVk7VUFDekhqTyxDQUFDLENBQUNpTyxtQkFBRixDQUFzQixJQUF0QjtVQUNBak8sQ0FBQyxDQUFDb0QsSUFBRixDQUFPVSxNQUFQLEdBQWdCLEtBQWhCO1FBQ0QsQ0FId0YsQ0FBekY7TUFJRDtJQUNGO0VBQ0YsQ0FqSUQ7O0VBa0lBbkMsS0FBSyxDQUFDdUIsU0FBTixDQUFnQmdMLFVBQWhCLEdBQTZCLFlBQVk7SUFDdkMsSUFBSSxLQUFLL0osUUFBTCxDQUFjSSxTQUFkLElBQTJCN0QsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENPLElBQXJFLElBQTZFLEtBQUtoQyxTQUF0RixFQUFpRztNQUMvRixJQUFJZCxDQUFDLEdBQUcsS0FBS1EsVUFBTCxDQUFnQixLQUFLcUUsUUFBTCxFQUFoQixDQUFSOztNQUNBLElBQUl4RixtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNnQixRQUE3QyxDQUFzRDhHLElBQXRELEdBQTZELEtBQUtqRixPQUFMLEVBQWpFLEVBQWlGO1FBQy9FdEcsQ0FBQyxDQUFDeU0sS0FBRixHQUFVLElBQUloTixFQUFFLENBQUNpTixLQUFQLEdBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBVjtNQUNELENBRkQsTUFFTztRQUNMM00sQ0FBQyxDQUFDeU0sS0FBRixHQUFVaE4sRUFBRSxDQUFDaU4sS0FBSCxDQUFTRSxLQUFuQjtNQUNEO0lBQ0Y7RUFDRixDQVREOztFQVVBM00sS0FBSyxDQUFDdUIsU0FBTixDQUFnQnFMLGFBQWhCLEdBQWdDLFlBQVk7SUFDMUMsSUFBSTdNLENBQUo7O0lBQ0EsSUFBSSxFQUFFLEtBQUtjLFNBQUwsQ0FBZXFFLEdBQWYsSUFBc0IsQ0FBQyxLQUFLckUsU0FBTCxDQUFlcUUsR0FBZixDQUFtQnFHLFdBQTVDLENBQUosRUFBOEQ7TUFDNUR4TCxDQUFDLEdBQUcsS0FBS2MsU0FBTCxDQUFlcUUsR0FBZixHQUFxQixLQUFLckUsU0FBTCxDQUFlcUUsR0FBZixDQUFtQnFHLFdBQW5CLENBQStCLENBQS9CLENBQXJCLEdBQXlELENBQTdEO01BQ0EsS0FBS3hJLEtBQUwsR0FBYWhELENBQWI7TUFDQXZCLFdBQVcsQ0FBQzZKLFFBQVosQ0FBcUIzRixXQUFyQixHQUFtQzRGLElBQW5DLENBQXdDekosbUJBQW1CLENBQUMwSixtQkFBcEIsQ0FBd0NDLGVBQWhGO01BQ0EsS0FBSzVCLFlBQUw7TUFDQXRJLFdBQVcsQ0FBQ3FLLFFBQVosQ0FBcUJqRyxXQUFyQixHQUFtQ2tHLGNBQW5DLENBQWtEL0osbUJBQW1CLENBQUNnSyxpQkFBcEIsQ0FBc0NDLFFBQXhGO0lBQ0Q7RUFDRixDQVREOztFQVVBOUksS0FBSyxDQUFDdUIsU0FBTixDQUFnQjhFLE9BQWhCLEdBQTBCLFlBQVk7SUFDcEMsSUFBSSxLQUFLN0QsUUFBTCxDQUFjSSxTQUFkLElBQTJCN0QsaUJBQWlCLENBQUN1RCx1QkFBbEIsQ0FBMENPLElBQXJFLElBQTZFLENBQUMsS0FBS2pDLE9BQXZGLEVBQWdHO01BQzlGLE9BQU8sQ0FBQyxDQUFSO0lBQ0Q7O0lBQ0QsSUFBSSxDQUFDLEtBQUtDLFNBQU4sSUFBbUIsQ0FBQyxLQUFLQSxTQUFMLENBQWV5RixVQUF2QyxFQUFtRDtNQUNqRCxPQUFPLENBQUMsQ0FBUjtJQUNEOztJQUNELElBQUl2RyxDQUFDLEdBQUcsS0FBS2MsU0FBTCxDQUFlcUUsR0FBZixHQUFxQixLQUFLckUsU0FBTCxDQUFlcUUsR0FBZixDQUFtQjJILGVBQXhDLEdBQTBELEtBQUtySyxRQUFMLENBQWNzSyxRQUFoRjtJQUNBLElBQUk3TSxDQUFDLEdBQUdiLG1CQUFtQixXQUFuQixDQUE0Qm1FLFFBQTVCLENBQXFDQyxPQUFyQyxDQUE2Q2dCLFFBQTdDLENBQXNEdUksV0FBdEQsQ0FBa0VoTyxpQkFBaUIsQ0FBQ2lPLHFCQUFsQixDQUF3Q0MsTUFBMUcsQ0FBUjtJQUNBaE4sQ0FBQyxLQUFLRixDQUFDLElBQUlFLENBQUMsQ0FBQ2lOLEtBQUYsQ0FBUSxDQUFSLENBQVYsQ0FBRDtJQUNBLElBQUlyTCxDQUFDLEdBQUd6QyxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNnQixRQUE3QyxDQUFzRHVJLFdBQXRELENBQWtFaE8saUJBQWlCLENBQUNpTyxxQkFBbEIsQ0FBd0NHLE1BQTFHLENBQVI7O0lBQ0EsSUFBSXRMLENBQUosRUFBTztNQUNMLFFBQVEsS0FBS1csUUFBTCxDQUFjSSxTQUF0QjtRQUNFLEtBQUs3RCxpQkFBaUIsQ0FBQ3VELHVCQUFsQixDQUEwQzJILFlBQS9DO1VBQ0VsSyxDQUFDLElBQUk4QixDQUFDLENBQUNxTCxLQUFGLENBQVEsQ0FBUixDQUFMO1VBQ0E7O1FBQ0YsS0FBS25PLGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDdUksUUFBL0M7VUFDRTlLLENBQUMsSUFBSThCLENBQUMsQ0FBQ3FMLEtBQUYsQ0FBUSxDQUFSLENBQUw7TUFMSjtJQU9EOztJQUNEOU4sbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDZ0IsUUFBN0MsQ0FBc0Q0SSxXQUF0RCxDQUFrRXJPLGlCQUFpQixDQUFDMkYsMEJBQWxCLENBQTZDMkksU0FBL0csS0FBNkhqTyxtQkFBbUIsV0FBbkIsQ0FBNEJtRSxRQUE1QixDQUFxQ0MsT0FBckMsQ0FBNkNnQixRQUE3QyxDQUFzRDhJLEtBQXRELEdBQThEbE8sbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNDLE9BQXJDLENBQTZDZ0IsUUFBN0MsQ0FBc0Q0SSxXQUF0RCxDQUFrRXJPLGlCQUFpQixDQUFDMkYsMEJBQWxCLENBQTZDMkksU0FBL0csRUFBMEgsQ0FBMUgsQ0FBM0wsSUFBMlR0TixDQUFDLEVBQTVUO0lBQ0EsT0FBT3VKLElBQUksQ0FBQ0MsR0FBTCxDQUFTeEosQ0FBVCxFQUFZLENBQVosQ0FBUDtFQUNELENBdEJEOztFQXVCQUMsS0FBSyxDQUFDdUIsU0FBTixDQUFnQjhDLFFBQWhCLEdBQTJCLFlBQVk7SUFDckMsSUFBSSxLQUFLdEQsS0FBVCxFQUFnQjtNQUNkLElBQUksS0FBS0gsT0FBTCxJQUFnQixLQUFLQyxTQUFMLENBQWVxRSxHQUFuQyxFQUF3QztRQUN0QyxLQUFLbkUsS0FBTCxDQUFXd00sS0FBWCxDQUFpQixLQUFLMU0sU0FBTCxDQUFlMk0sRUFBaEMsRUFBb0MsS0FBSzNNLFNBQUwsQ0FBZTRNLEtBQW5EO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsS0FBSzFNLEtBQUwsQ0FBV3dNLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7TUFDRDtJQUNGO0VBQ0YsQ0FSRDs7RUFTQXZOLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JtTSxTQUFoQixHQUE0QixZQUFZO0lBQ3RDLE9BQU8sS0FBS2xMLFFBQUwsQ0FBY0ksU0FBZCxJQUEyQjdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDTyxJQUFyRSxJQUE2RSxLQUFLLEtBQUtFLEtBQTlGO0VBQ0QsQ0FGRDs7RUFHQS9DLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JvTSxTQUFoQixHQUE0QixZQUFZO0lBQ3RDLE9BQU8sS0FBS25MLFFBQUwsQ0FBY0ksU0FBZCxJQUEyQjdELGlCQUFpQixDQUFDdUQsdUJBQWxCLENBQTBDTyxJQUFyRSxJQUE2RSxLQUFLLEtBQUtFLEtBQXZGLElBQWdHLENBQUMsS0FBS2pDLFdBQTdHO0VBQ0QsQ0FGRDs7RUFHQWQsS0FBSyxDQUFDdUIsU0FBTixDQUFnQnFNLFVBQWhCLEdBQTZCLFVBQVU3TixDQUFWLEVBQWE7SUFDeEMsSUFBSSxDQUFDLEtBQUtlLFdBQVYsRUFBdUI7TUFDckIsS0FBS0QsU0FBTCxDQUFlMk0sRUFBZixJQUFxQnpOLENBQXJCO01BQ0EsS0FBS2MsU0FBTCxDQUFlMk0sRUFBZixJQUFxQixDQUFyQixJQUEwQixLQUFLSyxNQUFMLEVBQTFCO01BQ0EsS0FBSzlNLEtBQUwsQ0FBV3dNLEtBQVgsQ0FBaUIsS0FBSzFNLFNBQUwsQ0FBZTJNLEVBQWhDLEVBQW9DLEtBQUszTSxTQUFMLENBQWU0TSxLQUFuRDtNQUNBLE9BQU8xTixDQUFQO0lBQ0Q7RUFDRixDQVBEOztFQVFBQyxLQUFLLENBQUN1QixTQUFOLENBQWdCc00sTUFBaEIsR0FBeUIsWUFBWTtJQUNuQ3ZQLFdBQVcsQ0FBQ3FLLFFBQVosQ0FBcUJqRyxXQUFyQixHQUFtQ2tHLGNBQW5DLENBQWtEL0osbUJBQW1CLENBQUNnSyxpQkFBcEIsQ0FBc0NpRixPQUF4RjtJQUNBLEtBQUtDLFVBQUw7SUFDQSxLQUFLak4sV0FBTCxHQUFtQixJQUFuQjtJQUNBLEtBQUtOLFNBQUwsQ0FBZXFHLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0J4SSxDQUFDLENBQUMyUCxPQUFqQyxFQUEwQyxLQUExQztJQUNBLEtBQUt2TSxJQUFMLENBQVVDLGFBQVYsQ0FBd0JsQyxFQUFFLENBQUNtQyxzQkFBM0IsRUFBbURDLE9BQW5ELENBQTJELFVBQVU3QixDQUFWLEVBQWE7TUFDdEVBLENBQUMsQ0FBQ2tGLE9BQUYsR0FBWSxLQUFaO0lBQ0QsQ0FGRDtJQUdBLEtBQUt4RSxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZW9HLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0J4SSxDQUFDLENBQUMyUCxPQUFqQyxFQUEwQyxLQUExQyxDQUFsQjtJQUNBLEtBQUt0TixVQUFMLENBQWdCa0IsT0FBaEIsQ0FBd0IsVUFBVTdCLENBQVYsRUFBYTtNQUNuQ0EsQ0FBQyxDQUFDMEIsSUFBRixDQUFPVSxNQUFQLEdBQWdCLElBQWhCO01BQ0FwQyxDQUFDLENBQUM4RyxZQUFGLENBQWUsQ0FBZixFQUFrQnhJLENBQUMsQ0FBQzJQLE9BQXBCLEVBQTZCLEtBQTdCO01BQ0FqTyxDQUFDLENBQUMyQixhQUFGLENBQWdCbEMsRUFBRSxDQUFDbUMsc0JBQW5CLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFVN0IsQ0FBVixFQUFhO1FBQzlEQSxDQUFDLENBQUNrRixPQUFGLEdBQVksS0FBWjtNQUNELENBRkQ7SUFHRCxDQU5EO0lBT0EsS0FBS2lGLFNBQUwsQ0FBZXJMLG1CQUFtQixDQUFDMEosbUJBQXBCLENBQXdDMEYsU0FBdkQ7RUFDRCxDQWpCRDs7RUFrQkFqTyxLQUFLLENBQUN1QixTQUFOLENBQWdCc0UsUUFBaEIsR0FBMkIsVUFBVTlGLENBQVYsRUFBYTtJQUN0QyxJQUFJLEtBQUs0TixTQUFMLEVBQUosRUFBc0I7TUFDcEIsS0FBSyxJQUFJMU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLaU8sVUFBTCxDQUFnQm5JLE1BQXBDLEVBQTRDOUYsQ0FBQyxFQUE3QyxFQUFpRDtRQUMvQyxJQUFJNEIsQ0FBQyxHQUFHLEtBQUtxTSxVQUFMLENBQWdCak8sQ0FBaEIsQ0FBUjs7UUFDQSxJQUFJLENBQUMsQ0FBRCxJQUFNNEIsQ0FBQyxDQUFDc00sSUFBWixFQUFrQjtVQUNoQnRNLENBQUMsQ0FBQ3NNLElBQUYsSUFBVXBPLENBQVY7O1VBQ0EsSUFBSThCLENBQUMsQ0FBQ3NNLElBQUYsSUFBVXRNLENBQUMsQ0FBQ3VNLE9BQWhCLEVBQXlCO1lBQ3ZCLEtBQUtDLFVBQUwsQ0FBZ0JwTyxDQUFoQixHQUFvQkEsQ0FBQyxFQUFyQjtVQUNEO1FBQ0Y7TUFDRjs7TUFDRCxLQUFLcU8sTUFBTCxDQUFZdk8sQ0FBWjtJQUNEO0VBQ0YsQ0FiRDs7RUFjQUMsS0FBSyxDQUFDdUIsU0FBTixDQUFnQitNLE1BQWhCLEdBQXlCLFlBQVksQ0FBRSxDQUF2Qzs7RUFDQXRPLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JnTixTQUFoQixHQUE0QixZQUFZO0lBQ3RDLE9BQU8sS0FBSzlNLElBQUwsQ0FBVStNLFdBQVYsRUFBUDtFQUNELENBRkQ7O0VBR0F4TyxLQUFLLENBQUN1QixTQUFOLENBQWdCa04sU0FBaEIsR0FBNEIsWUFBWTtJQUN0QyxPQUFPLENBQVA7RUFDRCxDQUZEOztFQUdBek8sS0FBSyxDQUFDdUIsU0FBTixDQUFnQm1OLEtBQWhCLEdBQXdCLFVBQVUzTyxDQUFWLEVBQWE7SUFDbkMsSUFBSUEsQ0FBSixFQUFPO01BQ0wsS0FBS2dELEtBQUwsR0FBYSxDQUFiO01BQ0EsS0FBSzhCLFFBQUwsQ0FBYyxLQUFLOUIsS0FBbkI7SUFDRDs7SUFDRCxLQUFLakMsV0FBTCxHQUFtQixLQUFuQjtJQUNBLEtBQUtpTixVQUFMO0VBQ0QsQ0FQRDs7RUFRQS9OLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0J5RyxZQUFoQixHQUErQixZQUFZO0lBQ3pDLEtBQUtoSCxNQUFMLENBQVk4RCxjQUFaLENBQTJCLFFBQTNCLEVBQXFDYixZQUFyQyxDQUFrRHpFLEVBQUUsQ0FBQzJHLEtBQXJELEVBQTREQyxNQUE1RCxHQUFxRSxLQUFLLEtBQUtDLE9BQUwsRUFBMUU7RUFDRCxDQUZEOztFQUdBckcsS0FBSyxDQUFDdUIsU0FBTixDQUFnQm9OLGFBQWhCLEdBQWdDLFlBQVk7SUFDMUMsSUFBSTVPLENBQUMsR0FBR1gsbUJBQW1CLFdBQW5CLENBQTRCbUUsUUFBNUIsQ0FBcUNxTCxLQUE3QztJQUNBLEtBQUtwTyxTQUFMLENBQWVxTyxTQUFmLEdBQTJCOU8sQ0FBM0I7SUFDQSxLQUFLVSxTQUFMLEtBQW1CLEtBQUtBLFNBQUwsQ0FBZW9PLFNBQWYsR0FBMkI5TyxDQUE5QztJQUNBLEtBQUtXLFVBQUwsQ0FBZ0JrQixPQUFoQixDQUF3QixVQUFVM0IsQ0FBVixFQUFhO01BQ25DQSxDQUFDLENBQUM0TyxTQUFGLEdBQWM5TyxDQUFkO0lBQ0QsQ0FGRDtFQUdELENBUEQ7O0VBUUFDLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0J1TixZQUFoQixHQUErQixZQUFZO0lBQ3pDLEtBQUtoTyxXQUFMLEdBQW1CLEtBQW5CO0VBQ0QsQ0FGRDs7RUFHQWQsS0FBSyxDQUFDdUIsU0FBTixDQUFnQndOLE9BQWhCLEdBQTBCLFlBQVk7SUFDcEMsT0FBTztNQUNMQyxLQUFLLEVBQUUsS0FBSzVPLEVBRFA7TUFFTCtFLEtBQUssRUFBRSxLQUFLcEM7SUFGUCxDQUFQO0VBSUQsQ0FMRDs7RUFNQS9DLEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0IwTixPQUFoQixHQUEwQixVQUFVbFAsQ0FBVixFQUFhO0lBQ3JDLEtBQUs4RSxRQUFMLENBQWM5RSxDQUFDLENBQUNvRixLQUFoQjtFQUNELENBRkQ7O0VBR0FuRixLQUFLLENBQUN1QixTQUFOLENBQWdCMk4sWUFBaEIsR0FBK0IsVUFBVW5QLENBQVYsRUFBYUUsQ0FBYixFQUFnQjtJQUM3QyxJQUFJLENBQUMsS0FBS0ksTUFBTixJQUFnQixLQUFLLEtBQUtBLE1BQUwsQ0FBWTBGLE1BQXJDLEVBQTZDO01BQzNDLE9BQU8sSUFBUDtJQUNEOztJQUNELElBQUlsRSxDQUFDLEdBQUcsQ0FBQyxDQUFUO0lBQ0EsSUFBSW5FLENBQUMsR0FBRyxJQUFSO0lBQ0EsSUFBSWtHLENBQUMsR0FBRyxJQUFSOztJQUNBLEtBQUssSUFBSWtDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3pGLE1BQUwsQ0FBWTBGLE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO01BQzNDLElBQUl6SCxDQUFDLEdBQUcsS0FBS2dDLE1BQUwsQ0FBWXlGLENBQVosQ0FBUjs7TUFDQSxJQUFJekgsQ0FBSixFQUFPO1FBQ0wsSUFBSThJLENBQUMsR0FBRyxLQUFSOztRQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25ILENBQUMsQ0FBQzhGLE1BQXRCLEVBQThCcUIsQ0FBQyxFQUEvQixFQUFtQztVQUNqQyxJQUFJbkgsQ0FBQyxDQUFDbUgsQ0FBRCxDQUFELENBQUtuRixJQUFMLElBQWE1RCxDQUFDLENBQUM0RCxJQUFuQixFQUF5QjtZQUN2QmtGLENBQUMsR0FBRyxJQUFKO1lBQ0E7VUFDRDtRQUNGOztRQUNELElBQUksQ0FBQ0EsQ0FBTCxFQUFRO1VBQ04sSUFBSWdJLENBQUMsR0FBRyxLQUFLMU4sSUFBTCxDQUFVaUMscUJBQVYsQ0FBZ0NyRixDQUFDLENBQUNtUSxXQUFGLEVBQWhDLENBQVI7VUFDQSxJQUFJWSxDQUFDLEdBQUc1UCxFQUFFLENBQUM2QixJQUFILENBQVFnTyxRQUFSLENBQWlCdFAsQ0FBakIsRUFBb0JvUCxDQUFwQixDQUFSOztVQUNBLElBQUksQ0FBQyxDQUFELElBQU10TixDQUFOLElBQVd1TixDQUFDLEdBQUd2TixDQUFuQixFQUFzQjtZQUNwQkEsQ0FBQyxHQUFHdU4sQ0FBSjtZQUNBeEwsQ0FBQyxHQUFHdUwsQ0FBSjtZQUNBelIsQ0FBQyxHQUFHVyxDQUFKO1VBQ0Q7UUFDRjtNQUNGO0lBQ0Y7O0lBQ0QsSUFBSVgsQ0FBSixFQUFPO01BQ0wsT0FBTztRQUNMK0QsSUFBSSxFQUFFL0QsQ0FERDtRQUVMNFIsR0FBRyxFQUFFMUw7TUFGQSxDQUFQO0lBSUQsQ0FMRCxNQUtPO01BQ0wsT0FBTyxJQUFQO0lBQ0Q7RUFDRixDQXBDRDs7RUFxQ0EvRixZQUFZLENBQUMsQ0FBQytCLFlBQVksQ0FBQztJQUN6QnNKLElBQUksRUFBRTFKLEVBQUUsQ0FBQytQLE9BRGdCO0lBRXpCQyxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUHhQLEtBQUssQ0FBQ3VCLFNBSEMsRUFHVSxJQUhWLEVBR2dCbkQsU0FIaEIsQ0FBWjtFQUlBUCxZQUFZLENBQUMsQ0FBQytCLFlBQVksQ0FBQztJQUN6QnNKLElBQUksRUFBRSxDQUFDMUosRUFBRSxDQUFDaVEsSUFBSixDQURtQjtJQUV6QkQsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1B4UCxLQUFLLENBQUN1QixTQUhDLEVBR1UsUUFIVixFQUdvQm5ELFNBSHBCLENBQVo7RUFJQVAsWUFBWSxDQUFDLENBQUMrQixZQUFZLENBQUM7SUFDekJzSixJQUFJLEVBQUUxSixFQUFFLENBQUNpUSxJQURnQjtJQUV6QkQsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1B4UCxLQUFLLENBQUN1QixTQUhDLEVBR1UsTUFIVixFQUdrQm5ELFNBSGxCLENBQVo7RUFJQVAsWUFBWSxDQUFDLENBQUMrQixZQUFZLENBQUM7SUFDekJzSixJQUFJLEVBQUUsQ0FBQzFKLEVBQUUsQ0FBQ2lRLElBQUosQ0FEbUI7SUFFekJELE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQeFAsS0FBSyxDQUFDdUIsU0FIQyxFQUdVLFlBSFYsRUFHd0JuRCxTQUh4QixDQUFaO0VBSUFQLFlBQVksQ0FBQyxDQUFDK0IsWUFBWSxDQUFDO0lBQ3pCc0osSUFBSSxFQUFFaUQsRUFBRSxDQUFDQyxRQURnQjtJQUV6Qm9ELE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQeFAsS0FBSyxDQUFDdUIsU0FIQyxFQUdVLFdBSFYsRUFHdUJuRCxTQUh2QixDQUFaO0VBSUFQLFlBQVksQ0FBQyxDQUFDK0IsWUFBWSxDQUFDO0lBQ3pCc0osSUFBSSxFQUFFaUQsRUFBRSxDQUFDQyxRQURnQjtJQUV6Qm9ELE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQeFAsS0FBSyxDQUFDdUIsU0FIQyxFQUdVLFdBSFYsRUFHdUJuRCxTQUh2QixDQUFaO0VBSUFQLFlBQVksQ0FBQyxDQUFDK0IsWUFBWSxDQUFDO0lBQ3pCc0osSUFBSSxFQUFFLENBQUNpRCxFQUFFLENBQUNDLFFBQUosQ0FEbUI7SUFFekJvRCxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUHhQLEtBQUssQ0FBQ3VCLFNBSEMsRUFHVSxZQUhWLEVBR3dCbkQsU0FIeEIsQ0FBWjtFQUlBLE9BQU9QLFlBQVksQ0FBQyxDQUFDNkIsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBM3BCNkIsQ0EycEI1Qlgsc0JBQXNCLENBQUNxUSxtQkEzcEJLLENBQTlCOztBQTRwQkF6UixPQUFPLFdBQVAsR0FBa0I2Qix1QkFBbEI7O0FBQ0EsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7RUFDWkEsQ0FBQyxDQUFDK0csTUFBRixHQUFXLFFBQVg7RUFDQS9HLENBQUMsQ0FBQ2lPLE9BQUYsR0FBWSxTQUFaO0VBQ0FqTyxDQUFDLENBQUNpSCxJQUFGLEdBQVMsTUFBVDtFQUNBakgsQ0FBQyxDQUFDMEgsVUFBRixHQUFlLFlBQWY7RUFDQTFILENBQUMsQ0FBQ3lILE9BQUYsR0FBWSxTQUFaO0VBQ0F6SCxDQUFDLENBQUNrSCxPQUFGLEdBQVksU0FBWjtFQUNBbEgsQ0FBQyxDQUFDNFAsSUFBRixHQUFTLE1BQVQ7RUFDQTVQLENBQUMsQ0FBQzZQLFVBQUYsR0FBZSxZQUFmO0VBQ0E3UCxDQUFDLENBQUM4UCxJQUFGLEdBQVMsTUFBVDtFQUNBOVAsQ0FBQyxDQUFDK1AsVUFBRixHQUFlLFlBQWY7QUFDRCxDQVhELEVBV0d6UixDQUFDLEdBQUdKLE9BQU8sQ0FBQ0Usc0JBQVIsS0FBbUNGLE9BQU8sQ0FBQ0Usc0JBQVIsR0FBaUMsRUFBcEUsQ0FYUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLktpbmdodEZhbGxCdWlsZEFuaU5hbWUgPSB1bmRlZmluZWQ7XG52YXIgcjtcbnZhciAkejFBdWRpb01nciA9IHJlcXVpcmUoXCJBdWRpb01nclwiKTtcbnZhciAkejFFdmVudE1nciA9IHJlcXVpcmUoXCJFdmVudE1nclwiKTtcbnZhciAkejFVSU1nciA9IHJlcXVpcmUoXCJVSU1nclwiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xudmFyICR6MUdhbWVUcmFja0RhdGFFdmVudCA9IHJlcXVpcmUoXCJHYW1lVHJhY2tEYXRhRXZlbnRcIik7XG52YXIgJHoxUGxheWVyTWdyID0gcmVxdWlyZShcIlBsYXllck1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxNb2RsZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsTW9kbGVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEl0ZW1IcCA9IHJlcXVpcmUoXCJLaW5naHRGYWxsSXRlbUhwXCIpO1xudmFyICR6MUtpbmdodEZhbGxVSUdhbWUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFVJR2FtZVwiKTtcbnZhciAkejFLaW5naHRGYWxsSW50ZXJmYWNlID0gcmVxdWlyZShcIktpbmdodEZhbGxJbnRlcmZhY2VcIik7XG52YXIgJHoxS2luZ2h0RmFsbEJ1aWxkSW5mbyA9IHJlcXVpcmUoXCJLaW5naHRGYWxsQnVpbGRJbmZvXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxCdWlsZEJhc2UgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5JRCA9IDA7XG4gICAgZS5uZE1vdmUgPSBbXTtcbiAgICBlLm5kSHAgPSBudWxsO1xuICAgIGUubmRMb2NrTGlzdCA9IFtudWxsXTtcbiAgICBlLm5kQW5pTWFpbiA9IG51bGw7XG4gICAgZS5uZEFuaURvd24gPSBudWxsO1xuICAgIGUubmRBbmlPdGhlciA9IFtdO1xuICAgIGUuaXNCaWcgPSB0cnVlO1xuICAgIGUuY2FuTG9jayA9IGZhbHNlO1xuICAgIGUuYnVpbGRJbmZvID0gbnVsbDtcbiAgICBlLmlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgZS5jdHJIcCA9IG51bGw7XG4gICAgZS5uZENvaW4gPSBudWxsO1xuICAgIGUuY29sUG9pbnQgPSB7fTtcbiAgICBlLnN0YW5kVGltZU1heCA9IDEuNTtcbiAgICBlLnNob3dBbmkgPSBmYWxzZTtcbiAgICBlLnZlYzJfMSA9IG5ldyBjYy5WZWMyKCk7XG4gICAgZS52ZWMyXzIgPSBuZXcgY2MuVmVjMigpO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG4gPSBbXTtcbiAgICAgIGUucG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgbi5wdXNoKHQuY2xvbmUoKSk7XG4gICAgICB9KTtcbiAgICAgIHQuY29sUG9pbnRbZS51dWlkXSA9IG47XG4gICAgfSk7XG4gICAgdGhpcy5uZEFuaU90aGVyLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIGUucG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBuLnB1c2godC5jbG9uZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHQuY29sUG9pbnRbZS51dWlkXSA9IG47XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlID0gdGhpcztcbiAgICBudWxsID09PSAodCA9IHRoaXMubmRNb3ZlKSB8fCB1bmRlZmluZWQgPT09IHQgfHwgdC5mb3JFYWNoKGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdC5uYW1lID0gZS5ub2RlLm5hbWUgKyBcIl9cIiArIG47XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIDEgPT0gdGhpcy5JRCAmJiAodCA9ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkNhc3RsZUNlbnRlcik7XG4gICAgdGhpcy5idWlsZENmZyA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0QnVpbGRDZmdCeUlkKHQpO1xuICAgIGlmICh0aGlzLmJ1aWxkQ2ZnLmVudW1WYWx1ZSA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Ob25lKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCksIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleCA9IDAsIHRoaXMubG9hZFByZWZhYigkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25NYXAsICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFByZWZhYk5hbWUuSXRlbUhwLCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbiA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICBuLnBhcmVudCA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLm5kVUk7XG4gICAgICAgIHZhciBpID0gZS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlLm5kSHAucG9zaXRpb24pO1xuICAgICAgICB2YXIgYSA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLm5kVUkuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgIG4uc2V0UG9zaXRpb24oYSk7XG4gICAgICAgIG4uc2V0U2NhbGUoZS5uZEhwLnNjYWxlKTtcbiAgICAgICAgbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBlLmN0ckhwID0gbi5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEl0ZW1IcC5kZWZhdWx0KTtcbiAgICAgICAgZS5jdHJIcC5zZXRUeXBlKCR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsR2FtZUFybXkuRnJpZW5kKTtcbiAgICAgICAgZS51cEhwVmlldygpO1xuICAgICAgfSksIHRoaXMubmRDb2luID0gY2MuaW5zdGFudGlhdGUoJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLm5kQnVpbGRDb2luKSwgdHJ1ZTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS51cERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuYnVpbGRDZmcuZW51bVZhbHVlICE9ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLk5vbmUpIHtcbiAgICAgIHRoaXMuY2FuTG9jayA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmNhbkxvY2sodGhpcy5JRCk7XG4gICAgICBpZiAodGhpcy5jYW5Mb2NrKSB7XG4gICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkVGltZVskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5Db3ZlbmFudE9mUGF0cmlhcmNoc10gPT0gdGhpcy5JRCAmJiAwID09IHRoaXMuZ2V0TGV2ZWwoKSAmJiAodGhpcy5pbmRleCA9IDEpLCB0aGlzLnNldExldmVsKHRoaXMuaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwSHBWaWV3KCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5kTG9ja0xpc3QuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJQcm9cIikgJiYgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJQcm9cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gMCk7XG4gICAgfSk7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5lbmFibGVkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5uZEFuaU1haW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5kQW5pRG93biAmJiAodGhpcy5uZEFuaURvd24ubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5uZEFuaU90aGVyLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idWlsZEluZm8gJiYgdGhpcy5idWlsZEluZm8uY2ZnKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZEluZm8uY2ZnLmxldmVsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zZXRMZXZlbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGU7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIHRoaXMuaW5kZXggPSB0O1xuICAgIHRoaXMuYnVpbGRJbmZvID0gbmV3ICR6MUtpbmdodEZhbGxCdWlsZEluZm8uS2luZ2h0RmFsbEJ1aWxkSW5mbyh0aGlzLmJ1aWxkQ2ZnLmVudW1WYWx1ZSwgdGhpcy5idWlsZENmZy5sZXZlbExpc3RbdGhpcy5pbmRleCAtIDFdKTtcbiAgICBpZiAoMCA9PSB0aGlzLmluZGV4KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZEFuaU1haW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5uZEFuaU1haW4uc2V0U2tpbih0aGlzLmJ1aWxkSW5mby5jZmcuU2tpbik7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQuZW5hYmxlZCA9IHQudGFnID09IG4uaW5kZXg7XG4gICAgICAgIHQuZW5hYmxlZCAmJiAoZSA9IHQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZSksIGNjLnR3ZWVuKGUpLnRvKC4yLCB7fSwge1xuICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAodCwgaSkge1xuICAgICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5jb2xQb2ludFtlLnV1aWRdLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgIGEucHVzaChjYy52MihuLmNvbFBvaW50W2UudXVpZF1bb10ueCAqIGksIG4uY29sUG9pbnRbZS51dWlkXVtvXS55ICogaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdC5wb2ludHMgPSBhO1xuICAgICAgICAgICAgdC5hcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5kQW5pRG93bikge1xuICAgICAgICB0aGlzLm5kQW5pRG93bi5ub2RlLmFjdGl2ZSA9IHRydWUsIHRoaXMubmRBbmlEb3duLnNldFNraW4odGhpcy5idWlsZEluZm8uY2ZnLlNraW4pO1xuICAgICAgfVxuICAgICAgdGhpcy5uZEFuaU90aGVyLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0LnNldFNraW4obi5idWlsZEluZm8uY2ZnLlNraW4pO1xuICAgICAgICB0LmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHQuZW5hYmxlZCA9IHQudGFnID09IG4uaW5kZXg7XG4gICAgICAgICAgdC5lbmFibGVkICYmIChlID0gdCk7XG4gICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGUpLnRvKC4yLCB7fSwge1xuICAgICAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5jb2xQb2ludFtlLnV1aWRdLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgICBhLnB1c2goY2MudjIobi5jb2xQb2ludFtlLnV1aWRdW29dLnggKiBpLCBuLmNvbFBvaW50W2UudXVpZF1bb10ueSAqIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5wb2ludHMgPSBhO1xuICAgICAgICAgICAgICAgIHQuYXBwbHkoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubmRDb2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmRDb2luLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHRoaXMuZ2V0U2VsbCgpO1xuICAgIHRoaXMubmRMb2NrTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJQcm9cIikgJiYgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJQcm9cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gMCk7XG4gICAgICBpZiAoZSA9PSAoKG51bGwgPT09IChpID0gbi5idWlsZEluZm8pIHx8IHVuZGVmaW5lZCA9PT0gaSA/IHVuZGVmaW5lZCA6IGkuY2ZnKSA/IG4uYnVpbGRJbmZvLmNmZy5sZXZlbCA6IDApICYmIG4uYnVpbGRJbmZvLmNhblVwZ3JhZGUpIHtcbiAgICAgICAgdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoISh0LnNob3cgfHwgbi5idWlsZENmZy5lbnVtVmFsdWUgPT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQ2FzdGxlQ2VudGVyKSkge1xuICAgICAgICAgIHQuc2hvdyA9IHRydWUsIGNjLnR3ZWVuKHQpLnNldCh7XG4gICAgICAgICAgICBzY2FsZTogLjAxXG4gICAgICAgICAgfSkudG8oLjIsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxLjJcbiAgICAgICAgICB9KS50byguMDUsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBuLm5kQ29pbi5zY2FsZVggPSB0LnBhcmVudC5zY2FsZVg7XG4gICAgICAgIG4ubmRDb2luLnNldFBhcmVudCh0KTtcbiAgICAgICAgbi5uZENvaW4uc2V0UG9zaXRpb24oY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgbi5uZENvaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQuc2hvdyA9IGZhbHNlO1xuICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9VcGdyZWFkQW5pID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoMSA9PSB0aGlzLmluZGV4KSB7XG4gICAgICB0aGlzLm5kQW5pTWFpbi5zZXRBbmltYXRpb24oMCwgci5jcmVhdGUsIGZhbHNlKTtcbiAgICAgIHRoaXMubmRBbmlNYWluLmFkZEFuaW1hdGlvbigwLCByLmlkbGUsIHRydWUpO1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLmVuYWJsZWQgPSBlLnRhZyA9PSB0LmluZGV4O1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5uZEFuaURvd24pIHtcbiAgICAgICAgdGhpcy5uZEFuaURvd24uc2V0QW5pbWF0aW9uKDAsIHIuY3JlYXRlLCBmYWxzZSksIHRoaXMubmRBbmlEb3duLmFkZEFuaW1hdGlvbigwLCByLmlkbGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5uZEFuaU90aGVyLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGUuc2V0QW5pbWF0aW9uKDAsIHIuY3JlYXRlLCBmYWxzZSk7XG4gICAgICAgIGUuYWRkQW5pbWF0aW9uKDAsIHIuaWRsZSwgdHJ1ZSk7XG4gICAgICAgIGUuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5lbmFibGVkID0gZS50YWcgPT0gdC5pbmRleDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZEFuaU1haW4uc2V0QW5pbWF0aW9uKDAsIHIudXBncmFkZSwgZmFsc2UpO1xuICAgICAgdGhpcy5uZEFuaU1haW4uYWRkQW5pbWF0aW9uKDAsIHIuaWRsZSwgdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5uZEFuaURvd24pIHtcbiAgICAgICAgdGhpcy5uZEFuaURvd24uc2V0QW5pbWF0aW9uKDAsIHIudXBncmFkZSwgZmFsc2UpLCB0aGlzLm5kQW5pRG93bi5hZGRBbmltYXRpb24oMCwgci5pZGxlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmRBbmlPdGhlci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBlLnNldEFuaW1hdGlvbigwLCByLnVwZ3JhZGUsIGZhbHNlKTtcbiAgICAgICAgZS5hZGRBbmltYXRpb24oMCwgci5pZGxlLCB0cnVlKTtcbiAgICAgICAgZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLmVuYWJsZWQgPSBlLnRhZyA9PSB0LmluZGV4O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFdwb3NQaHlDb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIHQgPSBbXTtcbiAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgaWYgKChzID0gZVtuXSkudGFnID09IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBzLnBvaW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgIHZhciBvID0gcy5wb2ludHNbYV07XG4gICAgICAgICAgaS5wdXNoKHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobykpO1xuICAgICAgICB9XG4gICAgICAgIHQucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLm5kQW5pT3RoZXIubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBzO1xuICAgICAgZSA9IChzID0gdGhpcy5uZEFuaU90aGVyW3JdLm5vZGUpLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XG4gICAgICBmb3IgKG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgbCA9IGVbbl07XG4gICAgICAgIGlmIChsLnRhZyA9PSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgaSA9IFtdO1xuICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBsLnBvaW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgbyA9IGwucG9pbnRzW2FdO1xuICAgICAgICAgICAgaS5wdXNoKHMuY29udmVydFRvV29ybGRTcGFjZUFSKG8pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0V3Bvc1BoeUNvbDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIHQgPSBbXTtcbiAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgaWYgKChzID0gZVtuXSkudGFnID09IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBzLnBvaW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgIHZhciBvID0gcy5wb2ludHNbYV07XG4gICAgICAgICAgaS5wdXNoKHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobykpO1xuICAgICAgICB9XG4gICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgdGFnTm9kZTogdGhpcy5ub2RlLFxuICAgICAgICAgIHBvaW50czogaVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLm5kQW5pT3RoZXIubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBzO1xuICAgICAgZSA9IChzID0gdGhpcy5uZEFuaU90aGVyW3JdLm5vZGUpLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XG4gICAgICBmb3IgKG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgbCA9IGVbbl07XG4gICAgICAgIGlmIChsLnRhZyA9PSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgaSA9IFtdO1xuICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBsLnBvaW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgbyA9IGwucG9pbnRzW2FdO1xuICAgICAgICAgICAgaS5wdXNoKHMuY29udmVydFRvV29ybGRTcGFjZUFSKG8pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdC5wdXNoKHtcbiAgICAgICAgICAgIHRhZ05vZGU6IHMsXG4gICAgICAgICAgICBwb2ludHM6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldExpZ2h0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuYnVpbGRDZmcuZW51bVZhbHVlICE9ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLk5vbmUpIHtcbiAgICAgIHRoaXMubmRMb2NrTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgIHZhciBhO1xuICAgICAgICBuLmFjdGl2ZSA9ICF0ICYmIGkgPT0gKChudWxsID09PSAoYSA9IGUuYnVpbGRJbmZvKSB8fCB1bmRlZmluZWQgPT09IGEgPyB1bmRlZmluZWQgOiBhLmNmZykgPyBlLmJ1aWxkSW5mby5jZmcubGV2ZWwgOiAwKSAmJiBlLmNhbkxvY2sgJiYgZS5idWlsZEluZm8uY2FuVXBncmFkZTtcbiAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcInNwclByb1wiKSAmJiAobi5nZXRDaGlsZEJ5TmFtZShcInNwclByb1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSAwKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuY2FuTG9jayAmJiAwICE9IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICB0aGlzLmRvVXBncmVhZEFuaSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHQpIHtcbiAgICAgICAgICB0aGlzLm5kQW5pTWFpbi5zZXRBbmltYXRpb24oMCwgci5mYWRlX2luLCBmYWxzZSksIHRoaXMubmRBbmlNYWluLmFkZEFuaW1hdGlvbigwLCByLmlkbGVfbmlnaHQsIHRydWUpLCB0aGlzLm5kQW5pRG93biAmJiAodGhpcy5uZEFuaURvd24uc2V0QW5pbWF0aW9uKDAsIHIuZmFkZV9pbiwgZmFsc2UpLCB0aGlzLm5kQW5pRG93bi5hZGRBbmltYXRpb24oMCwgci5pZGxlX25pZ2h0LCB0cnVlKSksIHRoaXMubmRBbmlPdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LnNldEFuaW1hdGlvbigwLCByLmZhZGVfaW4sIGZhbHNlKTtcbiAgICAgICAgICAgIHQuYWRkQW5pbWF0aW9uKDAsIHIuaWRsZV9uaWdodCwgdHJ1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5uZEFuaU1haW4uc2V0QW5pbWF0aW9uKDAsIHIuaWRsZSwgdHJ1ZSksIHRoaXMubmRBbmlEb3duICYmIHRoaXMubmRBbmlEb3duLnNldEFuaW1hdGlvbigwLCByLmlkbGUsIHRydWUpLCB0aGlzLm5kQW5pT3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdC5zZXRBbmltYXRpb24oMCwgci5pZGxlLCB0cnVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldExvY2tQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idWlsZENmZy5lbnVtVmFsdWUgPT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uTm9uZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0Rlc3Ryb3llZCAmJiB0aGlzLmNhbkxvY2sgJiYgdGhpcy5idWlsZEluZm8uY2FuVXBncmFkZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLm5kTG9ja0xpc3RbdGhpcy5nZXRMZXZlbCgpXTtcbiAgICAgIHZhciBlID0gdC5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcbiAgICAgIGUgfHwgY29uc29sZS5lcnJvcihcIiMjIyBsb2NrIHBvaW50IG5vdCBmb3VuZFwiLCB0aGlzLklELCB0aGlzLm5kTG9ja0xpc3QsIHRoaXMuaW5kZXgpO1xuICAgICAgdmFyIG4gPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbi5wdXNoKHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGUucG9pbnRzW2ldLnggLyB0LnNjYWxlWCwgZS5wb2ludHNbaV0ueSAvIHQuc2NhbGVZKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnRSb3VuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idWlsZEluZm8uaW5pdEJ1ZmZEYXRhKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5kb1VwZ3JhZGUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHZhciBuO1xuICAgIHZhciBpID0gdGhpcztcbiAgICBpZiAodGhpcy5idWlsZENmZy5lbnVtVmFsdWUgPT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uTm9uZSB8fCAhdGhpcy5idWlsZEluZm8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuYnVpbGRJbmZvLnN0YW5kVGltZSArPSB0O1xuICAgICAgaWYgKHRoaXMuYnVpbGRJbmZvLnN0YW5kVGltZSA+PSB0aGlzLnN0YW5kVGltZU1heCkge1xuICAgICAgICB0aGlzLmJ1aWxkSW5mby5zdGFuZFRpbWUgPSB0aGlzLnN0YW5kVGltZU1heDtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUudXBCdWxpZCA9IHRoaXM7XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuaW5pdFZpZXcoKTtcbiAgICAgICAgICBpLmluZGV4ID0gdDtcbiAgICAgICAgICBpLmJ1aWxkSW5mbyA9IG5ldyAkejFLaW5naHRGYWxsQnVpbGRJbmZvLktpbmdodEZhbGxCdWlsZEluZm8oaS5idWlsZENmZy5lbnVtVmFsdWUsIGkuYnVpbGRDZmcubGV2ZWxMaXN0W2kuaW5kZXggLSAxXSk7XG4gICAgICAgICAgJHoxRXZlbnRNZ3IuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5CdWlsZGluZ0xldmVsVXApO1xuICAgICAgICAgIGkuZG9VcGdyZWFkQW5pKCk7XG4gICAgICAgICAgaS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmNhblN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9LCAuNSk7XG4gICAgICAgICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0RnJlZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLmJ1bGlkaW5nKTtcbiAgICAgICAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuZ2V0VGFza0luZm8oKTtcbiAgICAgICAgICBpZiAoZS50eXBlID09ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFza0VudW0uQnVpbGRMZXZlbCkge1xuICAgICAgICAgICAgZS5udW0gPSBNYXRoLm1heChlLm51bSwgaS5idWlsZEluZm8uY2ZnLmxldmVsKTtcbiAgICAgICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuc2V0VGFza0luZm8oZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQubHZfYnVpbGRpbmdfWF9ZLCAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5sZXZlbENmZy5MZXZlbCArIFwiX1wiICsgaS5idWlsZENmZy5lbnVtVmFsdWUpO1xuICAgICAgICAgICR6MUV2ZW50TWdyLkV2ZW50TWdyLmdldEluc3RhbmNlKCkuZW1pdCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKDEgPT0gaS5nZXRMZXZlbCgpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGkuYnVpbGRDZmcuZW51bVZhbHVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uUHJpdmF0ZUhvdXNlOlxuICAgICAgICAgICAgICAgIGkuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5OZXdiaWVHdWlkZSwgNyk7XG4gICAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmFkZFRhc2soJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1JbkdhbWVUYXNrRW51bS5CdWlsZEhvbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkFycm93VG93ZXI6XG4gICAgICAgICAgICAgICAgaS5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLk5ld2JpZUd1aWRlLCA4KTtcbiAgICAgICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuYWRkVGFzaygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtLkJ1aWxkVG93ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLldhbGw6XG4gICAgICAgICAgICAgICAgaS5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLk5ld2JpZUd1aWRlLCA5KTtcbiAgICAgICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuYWRkVGFzaygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtLkJ1aWxkV2FsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uTWlsbDpcbiAgICAgICAgICAgICAgICBpLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuTmV3YmllR3VpZGUsIDEwKTtcbiAgICAgICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuYWRkVGFzaygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtLkJ1aWxkTWlsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQmFycmFja3M6XG4gICAgICAgICAgICAgICAgaS5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLk5ld2JpZUd1aWRlLCAxMSk7XG4gICAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmFkZFRhc2soJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1JbkdhbWVUYXNrRW51bS5CdWlsZEJhcnJhY2tzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChpLmJ1aWxkQ2ZnLmVudW1WYWx1ZSkge1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLlByaXZhdGVIb3VzZTpcbiAgICAgICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuYWRkVGFzaygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtLlVwZ3JhZGVIb21lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5BcnJvd1Rvd2VyOlxuICAgICAgICAgICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5hZGRUYXNrKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtSW5HYW1lVGFza0VudW0uVXBncmFkZVRvd2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5XYWxsOlxuICAgICAgICAgICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5hZGRUYXNrKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtSW5HYW1lVGFza0VudW0uVXBncmFkZVdhbGwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLk1pbGw6XG4gICAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmFkZFRhc2soJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1JbkdhbWVUYXNrRW51bS5VcGdyYWRlTWlsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQmFycmFja3M6XG4gICAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmFkZFRhc2soJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1JbkdhbWVUYXNrRW51bS5VcGdyYWRlQmFycmFja3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkNhc3RsZUNlbnRlcjpcbiAgICAgICAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuYWRkVGFzaygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtLlVwZ3JhZGVDYXN0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2ggKGkuYnVpbGRDZmcuZW51bVZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLlByaXZhdGVIb3VzZTpcbiAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5idWlsZGluZ19YLCBcImhvdXNlXCIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uQXJyb3dUb3dlcjpcbiAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5idWlsZGluZ19YLCBcImFycndvXCIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uV2FsbDpcbiAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5idWlsZGluZ19YLCBcIndhbGxcIik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5NaWxsOlxuICAgICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmJ1aWxkaW5nX1gsIFwibWlsbFwiKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkJhcnJhY2tzOlxuICAgICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmJ1aWxkaW5nX1gsIFwiY2FtcFwiKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkNhc3RsZUNlbnRlcjpcbiAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5idWlsZGluZ19YLCBcImhvbWVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuY29pbiA+PSB0aGlzLmdldFNlbGwoKSkge1xuICAgICAgICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jYW5TdGFydCA9IGZhbHNlO1xuICAgICAgICAgICR6MUV2ZW50TWdyLkV2ZW50TWdyLmdldEluc3RhbmNlKCkuZW1pdCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuR2FtZVBhdXNlLCB0cnVlKTtcbiAgICAgICAgICAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS5jb2luIC09IHRoaXMuZ2V0U2VsbCgpO1xuICAgICAgICAgIGlmICh0aGlzLmJ1aWxkSW5mby5jZmcgJiYgdGhpcy5idWlsZEluZm8uY2ZnLkJyYW5jaEJ1aWxkLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlCdWlsZFNlbCwgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUdhbWUsIHRoaXMsIGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhKHRoaXMuYnVpbGRJbmZvLmNmZyA/IHRoaXMuYnVpbGRJbmZvLmNmZy5CcmFuY2hCdWlsZFswXSA6IDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJ1aWxkSW5mby5zdGFuZFRpbWUgPSAwO1xuICAgICAgICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdEZyZWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQXVkaW9JZC5jdW8pO1xuICAgICAgICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUNvbmZpZy5VSUlELlVJVGlwcywgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUdhbWUsICR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkdhbWUwMyk7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmFuaUJ0bkFkZENvaW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoMCA9PSB0aGlzLmJ1aWxkSW5mby5zdGFuZFRpbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5idWlsZEluZm8uc3RhbmRUaW1lIC09IHQ7XG4gICAgICB0aGlzLmJ1aWxkSW5mby5zdGFuZFRpbWUgPCAwICYmICh0aGlzLmJ1aWxkSW5mby5zdGFuZFRpbWUgPSAwKTtcbiAgICB9XG4gICAgdmFyIG8gPSB0aGlzLm5kTG9ja0xpc3RbdGhpcy5nZXRMZXZlbCgpXTtcbiAgICBvLmdldENoaWxkQnlOYW1lKFwic3ByUHJvXCIpICYmIChvLmdldENoaWxkQnlOYW1lKFwic3ByUHJvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHRoaXMuYnVpbGRJbmZvLnN0YW5kVGltZSAvIHRoaXMuc3RhbmRUaW1lTWF4KTtcbiAgICB2YXIgciA9IG51bGwgPT09IChuID0gby5nZXRDaGlsZEJ5TmFtZShcInNwQW5pXCIpKSB8fCB1bmRlZmluZWQgPT09IG4gPyB1bmRlZmluZWQgOiBuLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgaWYgKHIpIHtcbiAgICAgIGlmICh0aGlzLnNob3dBbmkpIHtcbiAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgdGhpcy5zaG93QW5pID0gZmFsc2UsIHIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlKSB7XG4gICAgICAgIHRoaXMuc2hvd0FuaSA9IHRydWUsIHIubm9kZS5hY3RpdmUgPSB0cnVlLCByLnNldEFuaW1hdGlvbigwLCByLmRlZmF1bHRBbmltYXRpb24sIGZhbHNlKSwgci5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS51cFNlbGxWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmJ1aWxkQ2ZnLmVudW1WYWx1ZSAhPSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Ob25lICYmIHRoaXMuYnVpbGRJbmZvKSB7XG4gICAgICB2YXIgdCA9IHRoaXMubmRMb2NrTGlzdFt0aGlzLmdldExldmVsKCldO1xuICAgICAgaWYgKCR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmNvaW4gPCB0aGlzLmdldFNlbGwoKSkge1xuICAgICAgICB0LmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNkYjAwMDBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0LmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25CdWZmVXBncmFkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAoISh0aGlzLmJ1aWxkSW5mby5jZmcgJiYgIXRoaXMuYnVpbGRJbmZvLmNmZy5CcmFuY2hCdWlsZCkpIHtcbiAgICAgIHQgPSB0aGlzLmJ1aWxkSW5mby5jZmcgPyB0aGlzLmJ1aWxkSW5mby5jZmcuQnJhbmNoQnVpbGRbMF0gOiAxO1xuICAgICAgdGhpcy5pbmRleCA9IHQ7XG4gICAgICAkejFFdmVudE1nci5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkJ1aWxkaW5nTGV2ZWxVcCk7XG4gICAgICB0aGlzLmRvVXBncmVhZEFuaSgpO1xuICAgICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0RnJlZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLmJ1bGlkaW5nKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRTZWxsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmJ1aWxkQ2ZnLmVudW1WYWx1ZSA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Ob25lIHx8ICF0aGlzLmNhbkxvY2spIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJ1aWxkSW5mbyB8fCAhdGhpcy5idWlsZEluZm8uY2FuVXBncmFkZSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICB2YXIgdCA9IHRoaXMuYnVpbGRJbmZvLmNmZyA/IHRoaXMuYnVpbGRJbmZvLmNmZy5CdWlsZFNsaXZlckNvc3QgOiB0aGlzLmJ1aWxkQ2ZnLmxvY2tDb3NlO1xuICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYwOSk7XG4gICAgZSAmJiAodCAtPSBlLlBhbWVyWzBdKTtcbiAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLmdldEdhbWVCdWZmKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVmZkNmZy5CdWZmNDcpO1xuICAgIGlmIChuKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuYnVpbGRDZmcuZW51bVZhbHVlKSB7XG4gICAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW0uUHJpdmF0ZUhvdXNlOlxuICAgICAgICAgIHQgLT0gbi5QYW1lclswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5CYXJyYWNrczpcbiAgICAgICAgICB0ICs9IG4uUGFtZXJbMV07XG4gICAgICB9XG4gICAgfVxuICAgICR6MUtpbmdodEZhbGxVSUdhbWUuZGVmYXVsdC5pbnN0YW5jZS5jdHJHYW1lLmdhbWVEYXRhLnRyZWFzdXJlQWRkWyR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlNhdmVUb2tlbl0gJiYgJHoxS2luZ2h0RmFsbFVJR2FtZS5kZWZhdWx0Lmluc3RhbmNlLmN0ckdhbWUuZ2FtZURhdGEucm91bmQgPCAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2UuY3RyR2FtZS5nYW1lRGF0YS50cmVhc3VyZUFkZFskejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5TYXZlVG9rZW5dWzBdICYmIHQtLTtcbiAgICByZXR1cm4gTWF0aC5tYXgodCwgMCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS51cEhwVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jdHJIcCkge1xuICAgICAgaWYgKHRoaXMuY2FuTG9jayAmJiB0aGlzLmJ1aWxkSW5mby5jZmcpIHtcbiAgICAgICAgdGhpcy5jdHJIcC5zZXRIcCh0aGlzLmJ1aWxkSW5mby5ocCwgdGhpcy5idWlsZEluZm8uaHBNYXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHJIcC5zZXRIcCgwLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRJc0xvY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDZmcuZW51bVZhbHVlICE9ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLk5vbmUgJiYgMCAhPSB0aGlzLmluZGV4O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0SXNXb3JrID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkQ2ZnLmVudW1WYWx1ZSAhPSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5Ob25lICYmIDAgIT0gdGhpcy5pbmRleCAmJiAhdGhpcy5pc0Rlc3Ryb3llZDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uQXR0YWNrZWQgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICghdGhpcy5pc0Rlc3Ryb3llZCkge1xuICAgICAgdGhpcy5idWlsZEluZm8uaHAgLT0gdDtcbiAgICAgIHRoaXMuYnVpbGRJbmZvLmhwIDw9IDAgJiYgdGhpcy5vbkRlYWQoKTtcbiAgICAgIHRoaXMuY3RySHAuc2V0SHAodGhpcy5idWlsZEluZm8uaHAsIHRoaXMuYnVpbGRJbmZvLmhwTWF4KTtcbiAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uRGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3RGcmVlKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEF1ZGlvSWQuZGVzdG9yeSk7XG4gICAgdGhpcy5kZWxBbGxCdWZmKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5uZEFuaU1haW4uc2V0QW5pbWF0aW9uKDAsIHIuZGVzdHJveSwgZmFsc2UpO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMubmRBbmlEb3duICYmIHRoaXMubmRBbmlEb3duLnNldEFuaW1hdGlvbigwLCByLmRlc3Ryb3ksIGZhbHNlKTtcbiAgICB0aGlzLm5kQW5pT3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0LnNldEFuaW1hdGlvbigwLCByLmRlc3Ryb3ksIGZhbHNlKTtcbiAgICAgIHQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLk1hcFVwZGF0ZSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHRoaXMuZ2V0SXNXb3JrKCkpIHtcbiAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5kZWJ1ZmZJbmZvLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5kZWJ1ZmZJbmZvW2VdO1xuICAgICAgICBpZiAoLTEgIT0gbi50aW1lKSB7XG4gICAgICAgICAgbi50aW1lICs9IHQ7XG4gICAgICAgICAgaWYgKG4udGltZSA+PSBuLnRpbWVNYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsQnVmZklkeChlKSwgZS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kb1RpbWUodCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZG9UaW1lID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRBdHRQb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0QXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAwO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIHRoaXMuc2V0TGV2ZWwodGhpcy5pbmRleCk7XG4gICAgfVxuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlbEFsbEJ1ZmYoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRCdWZmRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5kQ29pbi5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLmdldFNlbGwoKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uQ2hhbmdlU3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsVUlHYW1lLmRlZmF1bHQuaW5zdGFuY2Uuc3BlZWQ7XG4gICAgdGhpcy5uZEFuaU1haW4udGltZVNjYWxlID0gdDtcbiAgICB0aGlzLm5kQW5pRG93biAmJiAodGhpcy5uZEFuaURvd24udGltZVNjYWxlID0gdCk7XG4gICAgdGhpcy5uZEFuaU90aGVyLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUudGltZVNjYWxlID0gdDtcbiAgICB9KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmVuZFJvdW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRTYXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb2ludDogdGhpcy5JRCxcbiAgICAgIGxldmVsOiB0aGlzLmluZGV4XG4gICAgfTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFNhdmUgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuc2V0TGV2ZWwodC5sZXZlbCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRNb3ZlVG9Qb3MgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGlmICghdGhpcy5uZE1vdmUgfHwgMCA9PSB0aGlzLm5kTW92ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbiA9IC0xO1xuICAgIHZhciBpID0gbnVsbDtcbiAgICB2YXIgYSA9IG51bGw7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLm5kTW92ZS5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIHIgPSB0aGlzLm5kTW92ZVtvXTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBzID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgZS5sZW5ndGg7IGwrKykge1xuICAgICAgICAgIGlmIChlW2xdLnV1aWQgPT0gci51dWlkKSB7XG4gICAgICAgICAgICBzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXMpIHtcbiAgICAgICAgICB2YXIgYyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICB2YXIgaCA9IGNjLlZlYzIuZGlzdGFuY2UodCwgYyk7XG4gICAgICAgICAgaWYgKC0xID09IG4gfHwgaCA8IG4pIHtcbiAgICAgICAgICAgIG4gPSBoO1xuICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICBpID0gcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IGksXG4gICAgICAgIHBvczogYVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICB0b29sdGlwOiBcIlBvaW50IGlkXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiSURcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IFtjYy5Ob2RlXSxcbiAgICB0b29sdGlwOiBcIkhpdC1tb3ZlIHB0XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRNb3ZlXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiSFAgYmFyXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRIcFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogW2NjLk5vZGVdLFxuICAgIHRvb2x0aXA6IFwiVW5sb2NrL3VwZ3JhZGVcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZExvY2tMaXN0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBzcC5Ta2VsZXRvbixcbiAgICB0b29sdGlwOiBcIkJ1aWxkaW5nIGJvZHlcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEFuaU1haW5cIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgIHRvb2x0aXA6IFwiQnVpbGRpbmcgZmxvb3JcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEFuaURvd25cIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IFtzcC5Ta2VsZXRvbl0sXG4gICAgdG9vbHRpcDogXCJCdWlsZGluZyBleHRyYXNcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEFuaU90aGVyXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFLaW5naHRGYWxsSW50ZXJmYWNlLktpbmdodEZhbGxJbnRlcmZhY2UpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxCdWlsZEJhc2U7XG4oZnVuY3Rpb24gKHQpIHtcbiAgdC5jcmVhdGUgPSBcImNyZWF0ZVwiO1xuICB0LmRlc3Ryb3kgPSBcImRlc3Ryb3lcIjtcbiAgdC5pZGxlID0gXCJpZGxlXCI7XG4gIHQuaWRsZV9uaWdodCA9IFwiaWRsZV9uaWdodFwiO1xuICB0LmZhZGVfaW4gPSBcIkZhZGVfaW5cIjtcbiAgdC51cGdyYWRlID0gXCJ1cGdyYWRlXCI7XG4gIHQub3BlbiA9IFwib3BlblwiO1xuICB0Lm9wZW5fbmlnaHQgPSBcIm9wZW5fbmlnaHRcIjtcbiAgdC5zaHV0ID0gXCJzaHV0XCI7XG4gIHQuc2h1dF9uaWdodCA9IFwic2h1dF9uaWdodFwiO1xufSkociA9IGV4cG9ydHMuS2luZ2h0RmFsbEJ1aWxkQW5pTmFtZSB8fCAoZXhwb3J0cy5LaW5naHRGYWxsQnVpbGRBbmlOYW1lID0ge30pKTsiXX0=