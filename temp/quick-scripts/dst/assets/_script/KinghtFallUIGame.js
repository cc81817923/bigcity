
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUIGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8205pepyBKZpKmbcRwFBhB', 'KinghtFallUIGame');
// _script/KinghtFallUIGame.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BasePlatform = require("BasePlatform");

var $z1BaseUI = require("BaseUI");

var $z1Appcfg = require("Appcfg");

var $z1PlatformSetting = require("PlatformSetting");

var $z1AudioMgr = require("AudioMgr");

var $z1SdkMgr = require("SdkMgr");

var $z1UIMgr = require("UIMgr");

var $z1Config = require("Config");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1UIGuide = require("UIGuide");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallGameCtrl = require("KinghtFallGameCtrl");

var $z1KinghtFallGameCtrlData = require("KinghtFallGameCtrlData");

var $z1KinghtFallGameEffect = require("KinghtFallGameEffect");

var $z1KinghtFallGameUICtrl = require("KinghtFallGameUICtrl");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUIGame = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndCtrGame = null;
    e.ctrEffect = null;
    e.ctrUI = null;
    e.ndEnemyIcon = null;
    e.ndCoin = null;
    e.ndBuildCoin = null;
    e.ndLevelInfo = null;
    e.btnStartFight = null;
    e.btnAddCoin = null;
    e.btnAgg = null;
    e.btnSuspend = null;
    e.btnRevive = null;
    e.btnReviveBreak = null;
    e.btnBuildInfo = null;
    e.ndTask = null;
    e.btnTest = null;
    e.speed = 1;
    e.ctrGame = null;
    e.levelId = 1;
    e.isGet = false;
    e.canStart = true;
    e.canBreak = true;
    e.spIdx = 0;
    e.isPauset = true;
    e.enemyIconInfo = {};
    return e;
  }

  var n;
  cc__extends(_ctor, t);
  n = _ctor;

  _ctor.prototype.init = function (t) {
    this.levelId = t;
  };

  _ctor.prototype.onLoad = function () {
    n.instance = this;
    this.ndEnemyIcon.active = false;
    this.ndBuildCoin.active = false;
    this.btnStartFight.active = false;
    this.btnAgg.active = false;
    this.btnBuildInfo.active = true;
    this.ndTask.getChildByName("ndAni").active = false;
  };

  _ctor.prototype.start = function () {
    var t = this;
    $z1AudioMgr.AudioMgr.getInstance().playMusic($z1KinghtFallConfig.KinghtFallAudioId.ready_bgm, $z1KinghtFallConfig.KinghtFallParameter.BGMusic);
    this.initBtnEvent();
    this.initEvent(); // btnBuildInfo 的 labNum 在 prefab 中居中，左边缘超出屏幕，右移修正

    var buildInfoLabel = this.btnBuildInfo && this.btnBuildInfo.getChildByName("labNum");

    if (buildInfoLabel) {
      buildInfoLabel.setPosition(24, buildInfoLabel.y);
    }

    this.btnAgg.getChildByName("ndTag1").active = true;
    this.btnAgg.getChildByName("ndTag2").active = false;

    switch ($z1KinghtFallConfig.KinghtFallParameter.FollowMode) {
      case 1:
        this.btnAgg.getChildByName("labNum").getComponent(cc.Label).string = this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.Game04);
        break;

      case 2:
        this.btnAgg.getChildByName("labNum").getComponent(cc.Label).string = this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.Game05);
    }

    this.ctrGame = this.ndCtrGame.getComponent($z1KinghtFallGameCtrl["default"]);
    this.ctrGame.initData(this.levelId);
    this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.IconMap, this.ctrGame.gameData.levelCfg.prefab, function (e) {
      var n = cc.instantiate(e);
      n.setParent(t.ndCtrGame);
      t.ctrGame.initMap(n);
      t.ctrEffect.initData(t.ctrGame.ndUI);
      t.ctrGame.gameData.upMap();
      t.ctrGame.onLateUpdate(0);
      t.sendEvent($z1Appcfg.BaseEventName.ShowTransition, false, function () {
        t.isPauset = false;
        t.startGuide();
      });
      t.initBtnView();
      t.ctrUI.ndGuide.setParent(t.ctrGame.ndPath);
      t.ctrGame.loadGame() && t.onRestart(false);
      t.ctrGame.gameData.initCom();
      t.checkCurrentTaskAlreadyDone(); // 钻石余额显示：克隆硬币节点并排放在右侧，换成钻石图标

      if (!t._ndDiamondDisplay) {
        var ndDia = cc.instantiate(t.ndCoin);
        ndDia.setParent(t.ndCoin.parent);
        var cp = t.ndCoin.getPosition();
        ndDia.anchorX = 0;
        ndDia.setPosition(cp.x - t.ndCoin.width / 2, cp.y + t.ndCoin.height);
        var iconNode = ndDia.getChildByName("wg_zd_yb");

        if (iconNode) {
          t.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, "wg_ty_zs", function (sf) {
            if (iconNode && iconNode.isValid) {
              var spr = iconNode.getComponent(cc.Sprite);
              spr.spriteFrame = sf;
              spr.sizeMode = cc.Sprite.SizeMode.CUSTOM;
              iconNode.setContentSize(47, 50);
            }
          });
        }

        t._ndDiamondDisplay = ndDia;
        t.refreshDiamondDisplay();
      }
    });
    this.initView();
  };

  _ctor.prototype.initBtnEvent = function () {
    var t = this;
    this.ctrUI.setMoveFunc(this.moveFun.bind(this));
    this.btnStartFight.on(cc.Node.EventType.TOUCH_END, function () {
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.PlayVideoSucc, false);
      $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide8);

      if (t.canStart && (t.startRoundGame(), !$z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGuideTips(2))) {
        for (var e in t.enemyIconInfo) {
          if (Object.prototype.hasOwnProperty.call(t.enemyIconInfo, e)) {
            var i = t.enemyIconInfo[e];

            if (i.ndItem && i.ndItem.active) {
              n.instance.ctrUI.setGuide(i.tagNode);
              break;
            }
          }
        }
      }
    }); // 钻石显示区域：点击打开充值界面

    this.btnAddCoin.on(cc.Node.EventType.TOUCH_END, function () {
      t.openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
    });
    this.btnAgg.on(cc.Node.EventType.TOUCH_END, function () {
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.PlayVideoSucc, false);
      $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.set_of);
      t.ctrGame.changeAge();

      switch ($z1KinghtFallConfig.KinghtFallParameter.FollowMode) {
        case 1:
          t.scheduleOnce(function () {
            t.ctrGame.changeAge();
          });
          t.btnAgg.getChildByName("ndTag1").active = true;
          t.btnAgg.getChildByName("ndTag2").active = false;
          break;

        case 2:
          t.btnAgg.getChildByName("ndTag1").active = !t.ctrGame.isAgg;
          t.btnAgg.getChildByName("ndTag2").active = t.ctrGame.isAgg;
      }
    });
    this.btnSuspend.on(cc.Node.EventType.TOUCH_END, function () {
      if (t.canBreak) {
        t.onPauseGame(true);
        t.openUI($z1KinghtFallConfig.KinghtFallUIID.UISuspend, function () {
          t.onRestart(true);
        }, function () {
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGameData().setNewGame();
          t.closeUI();
        });
      }
    });
    this.btnReviveBreak.on(cc.Node.EventType.TOUCH_END, function () {
      t.btnReviveBreak.active = false;
      t.btnRevive.active = false;
    });
    this.btnBuildInfo.on(cc.Node.EventType.TOUCH_END, function () {
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.PlayVideoSucc, false);
      t.openUI($z1KinghtFallConfig.KinghtFallUIID.UIBuildAtlas);
    });
    this.ndTask.on(cc.Node.EventType.TOUCH_END, function () {
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.PlayVideoSucc, false);
      t.getTask();
    });
    this.btnRevive.on(cc.Node.EventType.TOUCH_END, function () {
      t.onPauseGame(true);
      $z1SdkMgr.SdkMgr.getInstance().playVideo($z1SdkMgr.AdType.AdFreeTime, function () {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.hero_revive);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_hero_revive_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
        t.onReviveShow(0);
        t.ctrGame.ctrPlay.onReborn();
        t.onPauseGame(false);
      }, function () {
        t.onPauseGame(false);
      });
    });

    if (this.btnTest) {
      this.btnTest.active = false;
    }
  };

  _ctor.prototype.onClose = function () {
    $z1UIMgr.UIMgr.getInstance().getUIById($z1KinghtFallConfig.KinghtFallUIID.UIHome).node.active = true;
  };

  _ctor.prototype.onRestart = function (t) {
    this.btnBuildInfo.active = true;
    this.canBreak = true;
    this.onPauseGame(false);
    this.ctrGame.onRestart(t);
    this.ctrUI.setRevive(0);
    this.initView();
    this.initBtnView();
    this.btnAgg.active = false;
    this.btnAgg.getChildByName("ndTag1").active = true;
    this.btnAgg.getChildByName("ndTag2").active = false;
    var e = this.ctrGame.gameData.getBulidList();

    for (var n = 0; n < e.length; n++) {
      var i = e[n];

      if (i.buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks && i.getLevel() >= 1) {
        this.btnAgg.active = true;
        break;
      }
    }

    this.ctrGame.gameData.setLight(false);
    this.ctrUI.ndLight.active = false;
    this.ctrGame.ndBg.children.forEach(function (t) {
      t.color = cc.Color.WHITE;
    });
    this.ctrGame.gameData.obstacles.forEach(function (t) {
      t.node.color = cc.Color.WHITE;
    });
  };

  _ctor.prototype.initEvent = function () {
    var t = this;
    this.addEvent($z1Appcfg.BaseEventName.CloseUI, this.onCloseUI);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.RefreshDiamond, this.onRefreshDiamond);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, this.startGuide);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.GamePause, this.onPauseGame);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.RoundEnd, this.endRoundGame);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.GameOver, this.onGameOver);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.GameRestart, this.onRestart);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.ReviveShow, this.onReviveShow);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.BuildingLevelUp, function () {
      t.ctrGame.gameData.upMap();
      t.initBtnView();

      if (t.ctrGame.gameData.baseBuild.getLevel() >= 1) {
        n.instance.ctrUI.setGuide(null);
        t.scheduleOnce(function () {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide6);
          t.startGuide();
        }, 1);
      }
    });
  };

  _ctor.prototype.setChangeSpeed = function (t) {
    this.speed = t;
    this.ctrGame.onChangeSpeed();
  };

  _ctor.prototype.initBtnView = function () {
    this.btnStartFight.active = this.ctrGame.gameData.baseBuild.getLevel() >= 1;

    if (1 == this.ctrGame.gameData.levelCfg.Level && this.ctrGame.gameData.round <= 3) {
      var t = true;
      var e = this.ctrGame.gameData.getBulidList();

      for (var n = 0; n < e.length; n++) {
        if (-1 != (a = e[n].getSell()) && a <= this.ctrGame.gameData.coin) {
          t = false;
          break;
        }
      }

      this.btnStartFight.getChildByName("ndHead").active = t;
    } else {
      this.btnStartFight.getChildByName("ndHead").active = false;
    }

    this.btnAddCoin.active = false;

    if (this.ctrGame.gameData.levelCfg.WaveCfg[this.ctrGame.gameData.round]) {
      this.btnStartFight.getChildByName("labNum").getComponent(cc.Label).string = "+" + this.ctrGame.gameData.levelCfg.WaveCfg[this.ctrGame.gameData.round].StartSliver;
    } else {
      this.btnStartFight.children[1].x = 0;
      this.btnStartFight.children[2].active = false;
      this.btnStartFight.children[3].active = false;
    }

    var i = this.ctrGame.gameData.getBulidList();
    this.btnAgg.active = false;

    for (n = 0; n < i.length; n++) {
      var a;

      if ((a = i[n]).buildCfg.enumValue == $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Barracks && a.getLevel() >= 1) {
        this.btnAgg.active = true;
        break;
      }
    }
  };

  _ctor.prototype.onPauseGame = function (t) {
    var e = this;
    this.isPauset = t;
    this.scheduleOnce(function () {
      if (t) {
        e.ctrGame.onPauseGame();
        e.sendEvent($z1KinghtFallConfig.KinghtFallEventName.PlayVideoSucc, false);
      } else {
        e.ctrGame.onResumeGame();
      }
    });
  };

  _ctor.prototype.onGameOver = function (t) {
    var e = this;
    this.ctrGame.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.End;
    this.ctrGame.moveFun(null);
    this.ctrGame.onPauseGame();
    this.canBreak = false;
    this.ctrUI.setRevive(0);
    this.scheduleOnce(function () {
      if (t) {
        e.openUI($z1KinghtFallConfig.KinghtFallUIID.UIGameEnd, t);
      } else {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.fail_X_Y, e.ctrGame.gameData.levelCfg.Level + "_" + e.ctrGame.gameData.round);
        e.openUI($z1KinghtFallConfig.KinghtFallUIID.UIGameBack, function (n) {
          if (n) {
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.game_revive);
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_game_revive_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
            e.ctrGame.gameData.coin += n;
            $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.GetSliver, n);
            e.onRestart(false);
          } else {
            e.openUI($z1KinghtFallConfig.KinghtFallUIID.UIGameEnd, t);
          }
        });
      }
    }, 1);
  };

  _ctor.prototype.onReviveShow = function (t) {
    this.ctrGame.gameStatus != $z1KinghtFallModle.KinghtFallGameStage.End && this.ctrUI.setRevive(t);
  };

  _ctor.prototype.moveFun = function (t) {
    this.ctrGame.gameStatus != $z1KinghtFallModle.KinghtFallGameStage.End && this.ctrGame.moveFun(t);
  };

  _ctor.prototype.startRoundGame = function () {
    var t = this;
    this.btnBuildInfo.active = false;
    this.btnStartFight.active = false;
    this.btnAddCoin.active = false;
    this.ctrUI.ndLight.active = true;
    this.isGet = false;
    this.ctrGame.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.Transition;
    $z1AudioMgr.AudioMgr.getInstance().playMusic($z1KinghtFallConfig.KinghtFallAudioId.fight_bgm, $z1KinghtFallConfig.KinghtFallParameter.BGMusic);
    cc.tween(this.ctrUI.ndLight).set({
      opacity: 0
    }).to(.5, {
      opacity: 255
    }, {
      onUpdate: function onUpdate(e, n) {
        var i = Math.floor(255 - 99 * n);
        t.ctrGame.ndBg.children.forEach(function (t) {
          t.color = new cc.Color(i, i, i);
        });
        t.ctrGame.gameData.obstacles.forEach(function (t) {
          t.node.color = new cc.Color(i, i, i);
        });
      }
    }).call(function () {
      t.ctrGame.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.Fight;
      t.initView();
    }).start();
    this.ctrGame.ctrPlay.ndRange.active = true;
    this.ctrGame.gameData.getBulidList().forEach(function (t) {
      t.buildInfo && t.startRoundGame();
    });
    this.ctrGame.gameData.startRoundGame();
  };

  _ctor.prototype.endRoundGame = function () {
    var t = this;
    this.btnBuildInfo.active = true;
    this.canBreak = false;
    $z1AudioMgr.AudioMgr.getInstance().playMusic($z1KinghtFallConfig.KinghtFallAudioId.ready_bgm, $z1KinghtFallConfig.KinghtFallParameter.BGMusic);
    this.ctrGame.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.Transition;
    this.scheduleOnce(function () {
      t.ctrGame.gameStatus = $z1KinghtFallModle.KinghtFallGameStage.Prepare;
      t.onPauseGame(true);
      t.ctrGame.ctrPlay.endRoundGame();
      t.openUICallBack($z1KinghtFallConfig.KinghtFallUIID.UIBuff, function () {
        t.ctrGame.ctrPlay.ndRange.active = false;
        t.ctrGame.gameData.setLight(false);
        cc.tween(t.ctrUI.ndLight).set({
          opacity: 255
        }).to(.5, {
          opacity: 0
        }, {
          onUpdate: function onUpdate(e, n) {
            var i = Math.floor(156 + 99 * n);
            t.ctrGame.ndBg.children.forEach(function (t) {
              t.color = new cc.Color(i, i, i);
            });
            t.ctrGame.gameData.obstacles.forEach(function (t) {
              t.node.color = new cc.Color(i, i, i);
            });
          }
        }).call(function () {
          t.ctrUI.ndLight.active = false;
        }).start();
      }, function (e) {
        t.onPauseGame(false);
        t.canBreak = true;
        t.ctrGame.ctrPlay.ctrPlayAni.setLevelUp();

        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          t.ctrGame.gameData.addGameBuff(i);
        }

        t.ctrGame.endRoundGame();
        var a = 0;
        a += t.ctrGame.gameData.addTime[$z1KinghtFallGameCtrlData.KinghtFallTimeType.KillSoldier2];
        var o = t.ctrGame.gameData.getGameBuff($z1KinghtFallEnum.KinghtFallEnumBuffCfg.Buff04);
        o && (a += o.Pamer[0]);

        if (a > 0) {
          t.ctrGame.gameData.coin += a;
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.GetSliver, a);
        }

        t.initView();
        t.ctrGame.gameData.upMap();
        t.initBtnView();
        t.ctrGame.saveGame();
      });
    }, 1);
  }; // 刷新游戏内钻石余额显示


  _ctor.prototype.refreshDiamondDisplay = function () {
    var diamond = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getDiamondNum();

    if (this._ndDiamondDisplay) {
      var lab = this._ndDiamondDisplay.getChildByName("labNum");

      if (lab) {
        lab.getComponent(cc.Label).string = "" + diamond;
      }
    }
  }; // RefreshDiamond 事件：更新显示，扣费时显示浮动文字


  _ctor.prototype.onRefreshDiamond = function (amount, isAdd) {
    this.refreshDiamondDisplay();

    if (!isAdd && amount > 0 && this.btnAddCoin && this.btnAddCoin.active) {
      var t = this;
      var label = new cc.Node("_diamondDeduct");
      var comp = label.addComponent(cc.Label);
      comp.string = "-" + amount;
      comp.fontSize = 40;
      comp.enableBold = true;
      label.color = new cc.Color(255, 80, 80, 255);
      label.setParent(this.ctrUI.node);
      var worldPos = t.btnAddCoin.convertToWorldSpaceAR(cc.Vec2.ZERO);
      var localPos = t.ctrUI.node.convertToNodeSpaceAR(worldPos);
      label.setPosition(localPos.x, localPos.y);
      cc.tween(label).to(0.9, {
        position: cc.v3(localPos.x, localPos.y + 90, 0),
        opacity: 0
      }).call(function () {
        label.destroy();
      }).start();
    }
  };

  _ctor.prototype.initView = function () {
    var t;

    if (this.ctrGame.gameStatus == $z1KinghtFallModle.KinghtFallGameStage.Fight) {
      var e = this.ctrGame.gameData.getBulidList();
      var n = (null === (t = this.ctrGame.gameData.levelCfg.WaveCfg[this.ctrGame.gameData.round]) || undefined === t ? undefined : t.StartSliver) || 0;

      for (var i = 0; i < e.length; i++) {
        var a = e[i];

        switch (a.buildCfg.enumValue) {
          case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.Mill:
            a.getIsWork() && (n += a.getGetCoin());
            break;

          case $z1KinghtFallEnum.KinghtFallEnumBuildEnum.PrivateHouse:
            a.getIsWork() && (n += a.getGetCoin());
        }
      }

      this.ndCoin.getChildByName("labNum").getComponent(cc.Label).string = this.ctrGame.gameData.coin + "(+" + n + ")";
    } else {
      this.ndCoin.getChildByName("labNum").getComponent(cc.Label).string = "" + this.ctrGame.gameData.coin;
    }

    this.ndLevelInfo.getChildByName("labName").getComponent(cc.Label).string = this.T(this.ctrGame.gameData.levelCfg.Name);
    var labOrderNode = this.ndLevelInfo.getChildByName("labOrder");
    labOrderNode.active = false; // 宽度仅 8px，显示为细竖线，隐藏

    if (this.ctrGame.gameData.taskInfo.index >= this.ctrGame.gameData.taskInfo.list.length) {
      this.ndTask.active = false;
    } else {
      var o = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGameTaskEnem(this.ctrGame.gameData.taskInfo.list[this.ctrGame.gameData.taskInfo.index]);
      this.ndTask.active = true;
      var labNameNode = this.ndTask.getChildByName("labName");
      labNameNode.setContentSize(220, labNameNode.height);
      var labNameComp = labNameNode.getComponent(cc.Label);
      labNameComp.overflow = cc.Label.Overflow.SHRINK;
      labNameComp.string = this.T(o.Name);
      var isFinished = 1 == this.ctrGame.gameData.taskInfo.stage;
      this.ndTask.getChildByName("labGet").active = isFinished;
      var labNoFinish = this.ndTask.getChildByName("labNoFinish");
      labNoFinish.active = !isFinished;
      var rewardNode = this.ndTask.getChildByName("ndAni");
      var rewardIdx = this.ctrGame.gameData.taskInfo.index;
      var reward = this.ctrGame.gameData.taskInfo.reward && this.ctrGame.gameData.taskInfo.reward[rewardIdx];

      if (rewardNode && reward) {
        var self = this;
        var goodsCfg = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(reward.id);
        self.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, goodsCfg.icon, function (sf) {
          rewardNode.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = sf;
        });
        rewardNode.getChildByName("labNum").getComponent(cc.Label).string = "+" + reward.num * this.ctrGame.gameData.levelCfg.InGameCoefficient;
        rewardNode.y = 0;
        rewardNode.active = true; // labGet / labNoFinish 与 ndAni 在 prefab 里 x 坐标重叠，在此分开：
        // ndAni 靠右，状态标签移到 ndAni 左侧（anchor x=1，右边缘贴 ndAni 左边缘）

        var ndAniX = rewardNode.x;
        var ndAniHalfW = rewardNode.width * rewardNode.scaleX / 2;
        var statusX = ndAniX - ndAniHalfW - 8;

        if (isFinished) {
          var labGet = this.ndTask.getChildByName("labGet");

          if (labGet) {
            labGet.setPosition(statusX, labGet.y);
          }
        } else {
          labNoFinish.setPosition(statusX, labNoFinish.y);
        }
      }
    }
  };

  _ctor.prototype.lateUpdate = function (t) {
    this.isPauset || this.ctrGame.onLateUpdate(t);
  };

  _ctor.prototype.update = function (t) {
    if (!this.isPauset) {
      t = Math.min(t, .1);
      this.ctrUI.upGuide();
      this.ctrGame.onUpdate(t * this.speed);

      for (var e in this.enemyIconInfo) {
        Object.prototype.hasOwnProperty.call(this.enemyIconInfo, e) && ((o = this.enemyIconInfo[e]).tag = false);
      }

      var n = this.ctrGame.gameData.enemyQueue;

      if (this.ctrGame.gameData.baseBuild.getLevel() >= 1) {
        var i = function i(t) {
          if (Object.prototype.hasOwnProperty.call(n, t)) {
            var e = n[t];

            if (!a.enemyIconInfo[t]) {
              a.enemyIconInfo[t] = {
                id: 0,
                tagNode: a.ctrGame.ndPath.getChildByName("ndEnemy" + t),
                ndItem: cc.instantiate(a.ndEnemyIcon),
                tag: true
              };
              a.enemyIconInfo[t].ndItem.setParent(a.ctrUI.node);
              a.enemyIconInfo[t].ndItem.setSiblingIndex(0);
            }

            var i = a.enemyIconInfo[t];

            if (e[0]) {
              var o = e[0];
              -1 == o.id && (o = e[1]);

              if (-1 == o.id) {
                i.tag = false;
              } else {
                if (i.id != o.id) {
                  i.id = o.id;
                  var r = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getSoldierCfgById(o.id);
                  a.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.Enemy, "icon/" + r.loadIcon, function (t) {
                    i.ndItem.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = t;
                  });
                }

                i.ndItem.getChildByName("labNum").getComponent(cc.Label).string = "" + o.num;
                var s = a.ctrGame.ndPath.convertToWorldSpaceAR(i.tagNode.getPosition());
                var l = cc.Camera.main.getWorldToScreenPoint(s);
                var c = a.ctrUI.node.convertToNodeSpaceAR(l);
                var h = c.clone();
                c.x = cc.misc.clampf(c.x, -246, 246); // 左边留更多空间，防止 label 超出屏幕左边缘

                c.y = cc.misc.clampf(c.y, -442, 442);
                i.ndItem.setPosition(c);

                if (c.equals(h)) {
                  i.ndItem.getChildByName("ndArr").active = false;
                } else {
                  var g = cc.v2();
                  cc.Vec2.subtract(g, cc.v2(h.x, h.y), cc.v2(c.x, c.y));
                  var u = 180 * Math.atan2(g.y, g.x) / Math.PI;
                  i.ndItem.getChildByName("ndArr").angle = u - 90;
                }

                i.tag = true;
              }
            }
          }
        };

        var a = this;

        for (var e in n) {
          i(e);
        }
      }

      for (var e in this.enemyIconInfo) {
        var o;
        Object.prototype.hasOwnProperty.call(this.enemyIconInfo, e) && ((o = this.enemyIconInfo[e]).ndItem.active = o.tag);
      }
    }
  };

  _ctor.prototype.onCloseUI = function (t) {
    var e = this;

    if (t == $z1Config.UIID.UIGuide) {
      this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.PlayVideoSucc, false);
      var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGroupId();
      var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getStepId();
      var a = [2];
      var o = [2];

      for (var r = 0; r < a.length; r++) {
        if (n == a[r] && i == o[r]) {
          return;
        }
      }

      this.scheduleOnce(function () {
        e.startGuide();
      });
    }
  };

  _ctor.prototype.startGuide = function (t) {
    var e = this;

    if ($z1PlatformSetting.PlatformSetting.currentPlatform != $z1BasePlatform.Platform.WEB_LINK) {
      if (t) {
        if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGuideTips(t)) {
          return;
        }

        var i = new $z1UIGuide.GuildCfg();
        var a = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGuideCfgById(t)[0];
        i.isWeek = !!a.Close;
        i.showHand = a.Finger;
        i.hideMask = !a.Mask;
        i.tipstring = a.Describe;
        i.showAni = !!a.ShowKing;
        i.deviationTipsAll = cc.v2(0, a.Offset || 0);
        11 == t && (i.distNode = this.btnAgg);

        switch (t) {
          case 7:
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide12);
            break;

          case 8:
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide10);
            break;

          case 9:
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide11);
            break;

          case 10:
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide13);
            break;

          case 11:
            $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide14);
        }

        this.openUICallBack($z1Config.UIID.UIGuide, function () {
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setGuideTips(t);
        }, i);
      }

      var o = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getGroupId();
      var s = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGuideCfgById(o);

      if (!(s.length <= 0)) {
        var h;
        var g = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().getStepId();
        var u = s[g];

        switch (o) {
          case 2:
            this.isPauset = true;
            (h = new $z1UIGuide.GuildCfg()).isWeek = !!u.Close;
            h.showHand = u.Finger;
            h.hideMask = !u.Mask;
            h.tipstring = u.Describe;
            h.showAni = !!u.ShowKing;

            switch (g) {
              case 0:
                h.distNode = this.ndCoin;
                h.addSize = new cc.Size(40, 0);
                h.deviationTipsAll = cc.v2(0, u.Offset || 0);
                h.lightType = 1;
                $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide4);
                break;

              case 1:
                h.distNode = this.ctrGame.gameData.baseBuild.ndLockList[this.ctrGame.gameData.baseBuild.getLevel()];
                h.distCamera = this.ctrGame.camera;
                h.deviationTipsAll = cc.v2(0, u.Offset || 0);

                h.callBack = function () {
                  n.instance.ctrUI.setGuide(e.ctrGame.gameData.baseBuild.ndLockList[e.ctrGame.gameData.baseBuild.getLevel()]);
                };

                this.isPauset = false;
                $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide5);
                break;

              case 2:
                for (var d in this.enemyIconInfo) {
                  if (Object.prototype.hasOwnProperty.call(this.enemyIconInfo, d)) {
                    var v = this.enemyIconInfo[d];

                    if (v.ndItem && v.ndItem.active) {
                      h.distNode = v.ndItem;
                      break;
                    }
                  }
                }

                h.deviationTipsAll = cc.v2(0, u.Offset || 0);
                $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide7);
                break;

              case 3:
                h.lightType = 1;
                h.distNode = this.btnStartFight;
                h.deviationTipsAll = cc.v2(0, u.Offset || 0);
                this.isPauset = false;
            }

        }

        if (h) {
          this.openUICallBack($z1Config.UIID.UIGuide, function () {
            if (s[g + 1]) {
              $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setStepId(g + 1);
            } else {
              $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setGroupId(o + 1);
              $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getGuideData().setStepId(0);
            }
          }, h);
        } else {
          this.sendEvent($z1Appcfg.BaseEventName.blocktouch, true);
        }
      }
    }
  };

  _ctor.prototype.aniBtnAddCoin = function () {
    if (!this.isGet) {
      var t = this.btnAddCoin.getComponent(cc.Animation);
      t.play(t.defaultClip.name);
    }
  };

  _ctor.prototype.getTask = function () {
    if (1 == this.ctrGame.gameData.taskInfo.stage) {
      var t = this.ctrGame.gameData.taskInfo.reward[this.ctrGame.gameData.taskInfo.index];

      switch (t.id) {
        case $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.SilverCoin:
          this.ctrGame.gameData.coin += t.num;
          var e = this.ndCoin;
          var n = cc.v2(e.position.x + e.children[0].x, e.position.y + e.children[0].y);
          var i = this.ndTask.convertToWorldSpaceAR(cc.v2(0, 0));
          var a = this.ctrUI.node.convertToNodeSpaceAR(i);

          var o = function o() {
            var t = cc.instantiate(e.children[0]);
            t.active = true;
            t.scale = .5;
            t.setParent(r.ctrUI.node);
            var i = cc.v2();
            cc.Vec2.random(i, 40);
            cc.tween(t).set({
              position: cc.v3(a.x, a.y, 0)
            }).by(.2, {
              position: cc.v3(i.x, i.y, 0)
            }).to(1, {
              position: cc.v3(n.x, n.y, 0),
              scale: 1
            }).call(function () {
              t.destroy();
            }).start();
          };

          var r = this;

          for (var s = 0; s < 10; s++) {
            o();
          }

          break;

        default:
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().addRewards([t], this.ctrGame.gameData.levelCfg.InGameCoefficient);
      }

      var l = this.ndTask.getChildByName("ndAni");
      var c = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(t.id);
      this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, c.icon, function (t) {
        l.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = t;
      });
      l.getChildByName("labNum").getComponent(cc.Label).string = "+" + t.num * this.ctrGame.gameData.levelCfg.InGameCoefficient;
      cc.Tween.stopAllByTarget(l);
      l.active = true;
      cc.tween(l).set({
        y: 40
      }).to(.5, {
        y: 80
      }).call(function () {
        l.active = false;
      }).start();
      this.ctrGame.gameData.taskInfo.index++;
      this.ctrGame.gameData.taskInfo.stage = 0;
      this.ctrGame.saveGame();
      this.initView();
      this.checkCurrentTaskAlreadyDone();
    }
  };

  _ctor.prototype.checkCurrentTaskAlreadyDone = function () {
    var taskInfo = this.ctrGame.gameData.taskInfo;
    if (taskInfo.stage === 1 || taskInfo.index >= taskInfo.list.length) return;
    var taskType = taskInfo.list[taskInfo.index];
    var E = $z1KinghtFallEnum.KinghtFallEnumInGameTaskEnum;
    var B = $z1KinghtFallEnum.KinghtFallEnumBuildEnum;
    var needBuildType = -1;
    var needLevel = 1;

    switch (taskType) {
      case E.BuildHome:
        needBuildType = B.PrivateHouse;
        needLevel = 1;
        break;

      case E.BuildTower:
        needBuildType = B.ArrowTower;
        needLevel = 1;
        break;

      case E.BuildWall:
        needBuildType = B.Wall;
        needLevel = 1;
        break;

      case E.BuildMill:
        needBuildType = B.Mill;
        needLevel = 1;
        break;

      case E.BuildBarracks:
        needBuildType = B.Barracks;
        needLevel = 1;
        break;

      case E.UpgradeHome:
        needBuildType = B.PrivateHouse;
        needLevel = 2;
        break;

      case E.UpgradeTower:
        needBuildType = B.ArrowTower;
        needLevel = 2;
        break;

      case E.UpgradeWall:
        needBuildType = B.Wall;
        needLevel = 2;
        break;

      case E.UpgradeMill:
        needBuildType = B.Mill;
        needLevel = 2;
        break;

      case E.UpgradeBarracks:
        needBuildType = B.Barracks;
        needLevel = 2;
        break;

      case E.UpgradeCastle:
        needBuildType = B.CastleCenter;
        needLevel = 2;
        break;

      default:
        return;
    }

    var map = this.ctrGame.gameData.bulidPointMap;

    for (var id in map) {
      if (!Object.prototype.hasOwnProperty.call(map, id)) continue;
      var b = map[id];

      if (b.buildCfg.enumValue === needBuildType && b.getLevel() >= needLevel) {
        this.addTask(taskType);
        return;
      }
    }
  };

  _ctor.prototype.addTask = function (t) {
    this.ctrGame.gameData.taskInfo.index >= this.ctrGame.gameData.taskInfo.list.length || this.ctrGame.gameData.taskInfo.list[this.ctrGame.gameData.taskInfo.index] == t && (this.ctrGame.gameData.taskInfo.stage = 1, this.initView(), this.ctrGame.saveGame());
  };

  _ctor.prototype.changeFollowMode = function (t) {
    var e = this;

    var n = function n() {
      $z1KinghtFallConfig.KinghtFallParameter.FollowMode = t;
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setFollowMode();

      switch ($z1KinghtFallConfig.KinghtFallParameter.FollowMode) {
        case 1:
          e.btnAgg.getChildByName("ndTag1").active = true;
          e.btnAgg.getChildByName("ndTag2").active = false;
          e.btnAgg.getChildByName("labNum").getComponent(cc.Label).string = e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.Game04);
          break;

        case 2:
          e.btnAgg.getChildByName("ndTag1").active = !e.ctrGame.isAgg;
          e.btnAgg.getChildByName("ndTag2").active = e.ctrGame.isAgg;
          e.btnAgg.getChildByName("labNum").getComponent(cc.Label).string = e.T($z1KinghtFallTextConfig.KinghtFallTextConfig.Game05);
      }
    };

    if (this.ctrGame.isAgg) {
      this.ctrGame.changeAge();
      n();
    } else {
      n();
    }
  };

  _ctor.instance = null;
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Entry"
  })], _ctor.prototype, "ndCtrGame", undefined);
  cc__decorate([ccp_property({
    type: $z1KinghtFallGameEffect["default"],
    tooltip: "Player"
  })], _ctor.prototype, "ctrEffect", undefined);
  cc__decorate([ccp_property({
    type: $z1KinghtFallGameUICtrl["default"],
    tooltip: "HUD"
  })], _ctor.prototype, "ctrUI", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Entry"
  })], _ctor.prototype, "ndEnemyIcon", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Currency"
  })], _ctor.prototype, "ndCoin", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Currency"
  })], _ctor.prototype, "ndBuildCoin", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Stage"
  })], _ctor.prototype, "ndLevelInfo", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Start battle"
  })], _ctor.prototype, "btnStartFight", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Add gold"
  })], _ctor.prototype, "btnAddCoin", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Rally"
  })], _ctor.prototype, "btnAgg", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Pause"
  })], _ctor.prototype, "btnSuspend", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Revive"
  })], _ctor.prototype, "btnRevive", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Revive"
  })], _ctor.prototype, "btnReviveBreak", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Pause"
  })], _ctor.prototype, "btnBuildInfo", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Task"
  })], _ctor.prototype, "ndTask", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Pause"
  })], _ctor.prototype, "btnTest", undefined);
  return n = cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSUdhbWUuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiJHoxQmFzZVBsYXRmb3JtIiwicmVxdWlyZSIsIiR6MUJhc2VVSSIsIiR6MUFwcGNmZyIsIiR6MVBsYXRmb3JtU2V0dGluZyIsIiR6MUF1ZGlvTWdyIiwiJHoxU2RrTWdyIiwiJHoxVUlNZ3IiLCIkejFDb25maWciLCIkejFHYW1lVHJhY2tEYXRhRXZlbnQiLCIkejFQbGF5ZXJNZ3IiLCIkejFVSUd1aWRlIiwiJHoxS2luZ2h0RmFsbENvbmZpZyIsIiR6MUtpbmdodEZhbGxUZXh0Q29uZmlnIiwiJHoxS2luZ2h0RmFsbEVudW0iLCIkejFLaW5naHRGYWxsRGF0YU1nciIsIiR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IiLCIkejFLaW5naHRGYWxsTW9kbGUiLCIkejFLaW5naHRGYWxsR2FtZUN0cmwiLCIkejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhIiwiJHoxS2luZ2h0RmFsbEdhbWVFZmZlY3QiLCIkejFLaW5naHRGYWxsR2FtZVVJQ3RybCIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImRlZl9LaW5naHRGYWxsVUlHYW1lIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibmRDdHJHYW1lIiwiY3RyRWZmZWN0IiwiY3RyVUkiLCJuZEVuZW15SWNvbiIsIm5kQ29pbiIsIm5kQnVpbGRDb2luIiwibmRMZXZlbEluZm8iLCJidG5TdGFydEZpZ2h0IiwiYnRuQWRkQ29pbiIsImJ0bkFnZyIsImJ0blN1c3BlbmQiLCJidG5SZXZpdmUiLCJidG5SZXZpdmVCcmVhayIsImJ0bkJ1aWxkSW5mbyIsIm5kVGFzayIsImJ0blRlc3QiLCJzcGVlZCIsImN0ckdhbWUiLCJsZXZlbElkIiwiaXNHZXQiLCJjYW5TdGFydCIsImNhbkJyZWFrIiwic3BJZHgiLCJpc1BhdXNldCIsImVuZW15SWNvbkluZm8iLCJuIiwicHJvdG90eXBlIiwiaW5pdCIsIm9uTG9hZCIsImluc3RhbmNlIiwiYWN0aXZlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzdGFydCIsIkF1ZGlvTWdyIiwiZ2V0SW5zdGFuY2UiLCJwbGF5TXVzaWMiLCJLaW5naHRGYWxsQXVkaW9JZCIsInJlYWR5X2JnbSIsIktpbmdodEZhbGxQYXJhbWV0ZXIiLCJCR011c2ljIiwiaW5pdEJ0bkV2ZW50IiwiaW5pdEV2ZW50IiwiYnVpbGRJbmZvTGFiZWwiLCJzZXRQb3NpdGlvbiIsInkiLCJGb2xsb3dNb2RlIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJUIiwiS2luZ2h0RmFsbFRleHRDb25maWciLCJHYW1lMDQiLCJHYW1lMDUiLCJpbml0RGF0YSIsImxvYWRQcmVmYWIiLCJLaW5naHRGYWxsQnVuZGVsTmFtZSIsIkljb25NYXAiLCJnYW1lRGF0YSIsImxldmVsQ2ZnIiwicHJlZmFiIiwiaW5zdGFudGlhdGUiLCJzZXRQYXJlbnQiLCJpbml0TWFwIiwibmRVSSIsInVwTWFwIiwib25MYXRlVXBkYXRlIiwic2VuZEV2ZW50IiwiQmFzZUV2ZW50TmFtZSIsIlNob3dUcmFuc2l0aW9uIiwic3RhcnRHdWlkZSIsImluaXRCdG5WaWV3IiwibmRHdWlkZSIsIm5kUGF0aCIsImxvYWRHYW1lIiwib25SZXN0YXJ0IiwiaW5pdENvbSIsImNoZWNrQ3VycmVudFRhc2tBbHJlYWR5RG9uZSIsIl9uZERpYW1vbmREaXNwbGF5IiwibmREaWEiLCJwYXJlbnQiLCJjcCIsImdldFBvc2l0aW9uIiwiYW5jaG9yWCIsIngiLCJ3aWR0aCIsImhlaWdodCIsImljb25Ob2RlIiwibG9hZFNwcml0ZUZyYW1lIiwiSWNvbkdvb2QiLCJzZiIsImlzVmFsaWQiLCJzcHIiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsInNpemVNb2RlIiwiU2l6ZU1vZGUiLCJDVVNUT00iLCJzZXRDb250ZW50U2l6ZSIsInJlZnJlc2hEaWFtb25kRGlzcGxheSIsImluaXRWaWV3Iiwic2V0TW92ZUZ1bmMiLCJtb3ZlRnVuIiwiYmluZCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIktpbmdodEZhbGxFdmVudE5hbWUiLCJQbGF5VmlkZW9TdWNjIiwiUGxheWVyTWdyIiwiZ2V0VHJhY2tEYXRhIiwieW91bWVuZ1RyYWNrIiwiVHJhY2tJZCIsImd1aWRlOCIsInN0YXJ0Um91bmRHYW1lIiwiS2luZ2h0RmFsbFBsYXllck1nciIsImdldEd1aWRlRGF0YSIsImdldEd1aWRlVGlwcyIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5kSXRlbSIsInNldEd1aWRlIiwidGFnTm9kZSIsIm9wZW5VSSIsIktpbmdodEZhbGxVSUlEIiwiVUlCUFNob3AiLCJwbGF5RWZmZWN0RnJlZSIsInNldF9vZiIsImNoYW5nZUFnZSIsInNjaGVkdWxlT25jZSIsImlzQWdnIiwib25QYXVzZUdhbWUiLCJVSVN1c3BlbmQiLCJnZXRHYW1lRGF0YSIsInNldE5ld0dhbWUiLCJjbG9zZVVJIiwiVUlCdWlsZEF0bGFzIiwiZ2V0VGFzayIsIlNka01nciIsInBsYXlWaWRlbyIsIkFkVHlwZSIsIkFkRnJlZVRpbWUiLCJoZXJvX3Jldml2ZSIsInBheV9oZXJvX3Jldml2ZV9ZIiwiZ2V0VXNlckRhdGEiLCJnZXRNYXhTdGFnZSIsIm9uUmV2aXZlU2hvdyIsImN0clBsYXkiLCJvblJlYm9ybiIsIm9uQ2xvc2UiLCJVSU1nciIsImdldFVJQnlJZCIsIlVJSG9tZSIsIm5vZGUiLCJzZXRSZXZpdmUiLCJnZXRCdWxpZExpc3QiLCJsZW5ndGgiLCJidWlsZENmZyIsImVudW1WYWx1ZSIsIktpbmdodEZhbGxFbnVtQnVpbGRFbnVtIiwiQmFycmFja3MiLCJnZXRMZXZlbCIsInNldExpZ2h0IiwibmRMaWdodCIsIm5kQmciLCJjaGlsZHJlbiIsImZvckVhY2giLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJvYnN0YWNsZXMiLCJhZGRFdmVudCIsIkNsb3NlVUkiLCJvbkNsb3NlVUkiLCJSZWZyZXNoRGlhbW9uZCIsIm9uUmVmcmVzaERpYW1vbmQiLCJOZXdiaWVHdWlkZSIsIkdhbWVQYXVzZSIsIlJvdW5kRW5kIiwiZW5kUm91bmRHYW1lIiwiR2FtZU92ZXIiLCJvbkdhbWVPdmVyIiwiR2FtZVJlc3RhcnQiLCJSZXZpdmVTaG93IiwiQnVpbGRpbmdMZXZlbFVwIiwiYmFzZUJ1aWxkIiwiZ3VpZGU2Iiwic2V0Q2hhbmdlU3BlZWQiLCJvbkNoYW5nZVNwZWVkIiwiTGV2ZWwiLCJyb3VuZCIsImEiLCJnZXRTZWxsIiwiY29pbiIsIldhdmVDZmciLCJTdGFydFNsaXZlciIsIm9uUmVzdW1lR2FtZSIsImdhbWVTdGF0dXMiLCJLaW5naHRGYWxsR2FtZVN0YWdlIiwiRW5kIiwiVUlHYW1lRW5kIiwiZmFpbF9YX1kiLCJVSUdhbWVCYWNrIiwiZ2FtZV9yZXZpdmUiLCJwYXlfZ2FtZV9yZXZpdmVfWSIsImdldE1pc3Npb25EYXRhIiwiYWRkQWNoTnVtIiwiS2luZ2h0RmFsbEVudW1BY2hpRW51bSIsIkdldFNsaXZlciIsIlRyYW5zaXRpb24iLCJmaWdodF9iZ20iLCJ0d2VlbiIsInNldCIsIm9wYWNpdHkiLCJ0byIsIm9uVXBkYXRlIiwiTWF0aCIsImZsb29yIiwiRmlnaHQiLCJuZFJhbmdlIiwiYnVpbGRJbmZvIiwiUHJlcGFyZSIsIm9wZW5VSUNhbGxCYWNrIiwiVUlCdWZmIiwiY3RyUGxheUFuaSIsInNldExldmVsVXAiLCJhZGRHYW1lQnVmZiIsImFkZFRpbWUiLCJLaW5naHRGYWxsVGltZVR5cGUiLCJLaWxsU29sZGllcjIiLCJvIiwiZ2V0R2FtZUJ1ZmYiLCJLaW5naHRGYWxsRW51bUJ1ZmZDZmciLCJCdWZmMDQiLCJQYW1lciIsInNhdmVHYW1lIiwiZGlhbW9uZCIsImdldERpYW1vbmROdW0iLCJsYWIiLCJhbW91bnQiLCJpc0FkZCIsImxhYmVsIiwiY29tcCIsImFkZENvbXBvbmVudCIsImZvbnRTaXplIiwiZW5hYmxlQm9sZCIsIndvcmxkUG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiVmVjMiIsIlpFUk8iLCJsb2NhbFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicG9zaXRpb24iLCJ2MyIsImRlc3Ryb3kiLCJ1bmRlZmluZWQiLCJNaWxsIiwiZ2V0SXNXb3JrIiwiZ2V0R2V0Q29pbiIsIlByaXZhdGVIb3VzZSIsIk5hbWUiLCJsYWJPcmRlck5vZGUiLCJ0YXNrSW5mbyIsImluZGV4IiwibGlzdCIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0R2FtZVRhc2tFbmVtIiwibGFiTmFtZU5vZGUiLCJsYWJOYW1lQ29tcCIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJTSFJJTksiLCJpc0ZpbmlzaGVkIiwic3RhZ2UiLCJsYWJOb0ZpbmlzaCIsInJld2FyZE5vZGUiLCJyZXdhcmRJZHgiLCJyZXdhcmQiLCJzZWxmIiwiZ29vZHNDZmciLCJnZXRHb29kc0NmZ0J5SWQiLCJpZCIsImljb24iLCJudW0iLCJJbkdhbWVDb2VmZmljaWVudCIsIm5kQW5pWCIsIm5kQW5pSGFsZlciLCJzY2FsZVgiLCJzdGF0dXNYIiwibGFiR2V0IiwibGF0ZVVwZGF0ZSIsInVwZGF0ZSIsIm1pbiIsInVwR3VpZGUiLCJ0YWciLCJlbmVteVF1ZXVlIiwic2V0U2libGluZ0luZGV4IiwiciIsImdldFNvbGRpZXJDZmdCeUlkIiwiRW5lbXkiLCJsb2FkSWNvbiIsInMiLCJsIiwiQ2FtZXJhIiwibWFpbiIsImdldFdvcmxkVG9TY3JlZW5Qb2ludCIsImMiLCJoIiwiY2xvbmUiLCJtaXNjIiwiY2xhbXBmIiwiZXF1YWxzIiwiZyIsInYyIiwic3VidHJhY3QiLCJ1IiwiYXRhbjIiLCJQSSIsImFuZ2xlIiwiVUlJRCIsIlVJR3VpZGUiLCJnZXRHcm91cElkIiwiZ2V0U3RlcElkIiwiUGxhdGZvcm1TZXR0aW5nIiwiY3VycmVudFBsYXRmb3JtIiwiUGxhdGZvcm0iLCJXRUJfTElOSyIsIkd1aWxkQ2ZnIiwiZ2V0R3VpZGVDZmdCeUlkIiwiaXNXZWVrIiwiQ2xvc2UiLCJzaG93SGFuZCIsIkZpbmdlciIsImhpZGVNYXNrIiwiTWFzayIsInRpcHN0cmluZyIsIkRlc2NyaWJlIiwic2hvd0FuaSIsIlNob3dLaW5nIiwiZGV2aWF0aW9uVGlwc0FsbCIsIk9mZnNldCIsImRpc3ROb2RlIiwiZ3VpZGUxMiIsImd1aWRlMTAiLCJndWlkZTExIiwiZ3VpZGUxMyIsImd1aWRlMTQiLCJzZXRHdWlkZVRpcHMiLCJhZGRTaXplIiwiU2l6ZSIsImxpZ2h0VHlwZSIsImd1aWRlNCIsIm5kTG9ja0xpc3QiLCJkaXN0Q2FtZXJhIiwiY2FtZXJhIiwiY2FsbEJhY2siLCJndWlkZTUiLCJkIiwidiIsImd1aWRlNyIsInNldFN0ZXBJZCIsInNldEdyb3VwSWQiLCJibG9ja3RvdWNoIiwiYW5pQnRuQWRkQ29pbiIsIkFuaW1hdGlvbiIsInBsYXkiLCJkZWZhdWx0Q2xpcCIsIm5hbWUiLCJLaW5naHRGYWxsRW51bUdvb2RzQ2ZnIiwiU2lsdmVyQ29pbiIsInNjYWxlIiwicmFuZG9tIiwiYnkiLCJhZGRSZXdhcmRzIiwiVHdlZW4iLCJzdG9wQWxsQnlUYXJnZXQiLCJ0YXNrVHlwZSIsIkUiLCJLaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtIiwiQiIsIm5lZWRCdWlsZFR5cGUiLCJuZWVkTGV2ZWwiLCJCdWlsZEhvbWUiLCJCdWlsZFRvd2VyIiwiQXJyb3dUb3dlciIsIkJ1aWxkV2FsbCIsIldhbGwiLCJCdWlsZE1pbGwiLCJCdWlsZEJhcnJhY2tzIiwiVXBncmFkZUhvbWUiLCJVcGdyYWRlVG93ZXIiLCJVcGdyYWRlV2FsbCIsIlVwZ3JhZGVNaWxsIiwiVXBncmFkZUJhcnJhY2tzIiwiVXBncmFkZUNhc3RsZSIsIkNhc3RsZUNlbnRlciIsIm1hcCIsImJ1bGlkUG9pbnRNYXAiLCJiIiwiYWRkVGFzayIsImNoYW5nZUZvbGxvd01vZGUiLCJzZXRGb2xsb3dNb2Rl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QkFIVixFQUc0QnFPLFNBSDVCLENBQVo7RUFJQXhTLFlBQVksQ0FBQyxDQUFDaUMsWUFBWSxDQUFDO0lBQ3pCMFosSUFBSSxFQUFFOVosRUFBRSxDQUFDb0gsSUFEZ0I7SUFFekIyUyxPQUFPLEVBQUU7RUFGZ0IsQ0FBRCxDQUFiLENBQUQsRUFHUHZaLEtBQUssQ0FBQzhCLFNBSEMsRUFHVSxjQUhWLEVBRzBCcU8sU0FIMUIsQ0FBWjtFQUlBeFMsWUFBWSxDQUFDLENBQUNpQyxZQUFZLENBQUM7SUFDekIwWixJQUFJLEVBQUU5WixFQUFFLENBQUNvSCxJQURnQjtJQUV6QjJTLE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQdlosS0FBSyxDQUFDOEIsU0FIQyxFQUdVLFFBSFYsRUFHb0JxTyxTQUhwQixDQUFaO0VBSUF4UyxZQUFZLENBQUMsQ0FBQ2lDLFlBQVksQ0FBQztJQUN6QjBaLElBQUksRUFBRTlaLEVBQUUsQ0FBQ29ILElBRGdCO0lBRXpCMlMsT0FBTyxFQUFFO0VBRmdCLENBQUQsQ0FBYixDQUFELEVBR1B2WixLQUFLLENBQUM4QixTQUhDLEVBR1UsU0FIVixFQUdxQnFPLFNBSHJCLENBQVo7RUFJQSxPQUFPdE8sQ0FBQyxHQUFHbEUsWUFBWSxDQUFDLENBQUMrQixXQUFELENBQUQsRUFBZ0JNLEtBQWhCLENBQXZCO0FBQ0QsQ0ExMkIwQixDQTAyQnpCN0IsU0FBUyxXQTEyQmdCLENBQTNCOztBQTIyQkFKLE9BQU8sV0FBUCxHQUFrQitCLG9CQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxQmFzZVBsYXRmb3JtID0gcmVxdWlyZShcIkJhc2VQbGF0Zm9ybVwiKTtcbnZhciAkejFCYXNlVUkgPSByZXF1aXJlKFwiQmFzZVVJXCIpO1xudmFyICR6MUFwcGNmZyA9IHJlcXVpcmUoXCJBcHBjZmdcIik7XG52YXIgJHoxUGxhdGZvcm1TZXR0aW5nID0gcmVxdWlyZShcIlBsYXRmb3JtU2V0dGluZ1wiKTtcbnZhciAkejFBdWRpb01nciA9IHJlcXVpcmUoXCJBdWRpb01nclwiKTtcbnZhciAkejFTZGtNZ3IgPSByZXF1aXJlKFwiU2RrTWdyXCIpO1xudmFyICR6MVVJTWdyID0gcmVxdWlyZShcIlVJTWdyXCIpO1xudmFyICR6MUNvbmZpZyA9IHJlcXVpcmUoXCJDb25maWdcIik7XG52YXIgJHoxR2FtZVRyYWNrRGF0YUV2ZW50ID0gcmVxdWlyZShcIkdhbWVUcmFja0RhdGFFdmVudFwiKTtcbnZhciAkejFQbGF5ZXJNZ3IgPSByZXF1aXJlKFwiUGxheWVyTWdyXCIpO1xudmFyICR6MVVJR3VpZGUgPSByZXF1aXJlKFwiVUlHdWlkZVwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxNb2RsZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsTW9kbGVcIik7XG52YXIgJHoxS2luZ2h0RmFsbEdhbWVDdHJsID0gcmVxdWlyZShcIktpbmdodEZhbGxHYW1lQ3RybFwiKTtcbnZhciAkejFLaW5naHRGYWxsR2FtZUN0cmxEYXRhID0gcmVxdWlyZShcIktpbmdodEZhbGxHYW1lQ3RybERhdGFcIik7XG52YXIgJHoxS2luZ2h0RmFsbEdhbWVFZmZlY3QgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEdhbWVFZmZlY3RcIik7XG52YXIgJHoxS2luZ2h0RmFsbEdhbWVVSUN0cmwgPSByZXF1aXJlKFwiS2luZ2h0RmFsbEdhbWVVSUN0cmxcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbFVJR2FtZSA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLm5kQ3RyR2FtZSA9IG51bGw7XG4gICAgZS5jdHJFZmZlY3QgPSBudWxsO1xuICAgIGUuY3RyVUkgPSBudWxsO1xuICAgIGUubmRFbmVteUljb24gPSBudWxsO1xuICAgIGUubmRDb2luID0gbnVsbDtcbiAgICBlLm5kQnVpbGRDb2luID0gbnVsbDtcbiAgICBlLm5kTGV2ZWxJbmZvID0gbnVsbDtcbiAgICBlLmJ0blN0YXJ0RmlnaHQgPSBudWxsO1xuICAgIGUuYnRuQWRkQ29pbiA9IG51bGw7XG4gICAgZS5idG5BZ2cgPSBudWxsO1xuICAgIGUuYnRuU3VzcGVuZCA9IG51bGw7XG4gICAgZS5idG5SZXZpdmUgPSBudWxsO1xuICAgIGUuYnRuUmV2aXZlQnJlYWsgPSBudWxsO1xuICAgIGUuYnRuQnVpbGRJbmZvID0gbnVsbDtcbiAgICBlLm5kVGFzayA9IG51bGw7XG4gICAgZS5idG5UZXN0ID0gbnVsbDtcbiAgICBlLnNwZWVkID0gMTtcbiAgICBlLmN0ckdhbWUgPSBudWxsO1xuICAgIGUubGV2ZWxJZCA9IDE7XG4gICAgZS5pc0dldCA9IGZhbHNlO1xuICAgIGUuY2FuU3RhcnQgPSB0cnVlO1xuICAgIGUuY2FuQnJlYWsgPSB0cnVlO1xuICAgIGUuc3BJZHggPSAwO1xuICAgIGUuaXNQYXVzZXQgPSB0cnVlO1xuICAgIGUuZW5lbXlJY29uSW5mbyA9IHt9O1xuICAgIHJldHVybiBlO1xuICB9XG4gIHZhciBuO1xuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIG4gPSBfY3RvcjtcbiAgX2N0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMubGV2ZWxJZCA9IHQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5uZEVuZW15SWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5kQnVpbGRDb2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYnRuU3RhcnRGaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bkFnZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bkJ1aWxkSW5mby5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubmRUYXNrLmdldENoaWxkQnlOYW1lKFwibmRBbmlcIikuYWN0aXZlID0gZmFsc2U7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5TXVzaWMoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQXVkaW9JZC5yZWFkeV9iZ20sICR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5CR011c2ljKTtcbiAgICB0aGlzLmluaXRCdG5FdmVudCgpO1xuICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gICAgLy8gYnRuQnVpbGRJbmZvIOeahCBsYWJOdW0g5ZyoIHByZWZhYiDkuK3lsYXkuK3vvIzlt6bovrnnvJjotoXlh7rlsY/luZXvvIzlj7Pnp7vkv67mraNcbiAgICB2YXIgYnVpbGRJbmZvTGFiZWwgPSB0aGlzLmJ0bkJ1aWxkSW5mbyAmJiB0aGlzLmJ0bkJ1aWxkSW5mby5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKTtcbiAgICBpZiAoYnVpbGRJbmZvTGFiZWwpIHsgYnVpbGRJbmZvTGFiZWwuc2V0UG9zaXRpb24oMjQsIGJ1aWxkSW5mb0xhYmVsLnkpOyB9XG4gICAgdGhpcy5idG5BZ2cuZ2V0Q2hpbGRCeU5hbWUoXCJuZFRhZzFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ0bkFnZy5nZXRDaGlsZEJ5TmFtZShcIm5kVGFnMlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBhcmFtZXRlci5Gb2xsb3dNb2RlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuYnRuQWdnLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkdhbWUwNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmJ0bkFnZy5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5HYW1lMDUpO1xuICAgIH1cbiAgICB0aGlzLmN0ckdhbWUgPSB0aGlzLm5kQ3RyR2FtZS5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEdhbWVDdHJsLmRlZmF1bHQpO1xuICAgIHRoaXMuY3RyR2FtZS5pbml0RGF0YSh0aGlzLmxldmVsSWQpO1xuICAgIHRoaXMubG9hZFByZWZhYigkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25NYXAsIHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5sZXZlbENmZy5wcmVmYWIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbiA9IGNjLmluc3RhbnRpYXRlKGUpO1xuICAgICAgbi5zZXRQYXJlbnQodC5uZEN0ckdhbWUpO1xuICAgICAgdC5jdHJHYW1lLmluaXRNYXAobik7XG4gICAgICB0LmN0ckVmZmVjdC5pbml0RGF0YSh0LmN0ckdhbWUubmRVSSk7XG4gICAgICB0LmN0ckdhbWUuZ2FtZURhdGEudXBNYXAoKTtcbiAgICAgIHQuY3RyR2FtZS5vbkxhdGVVcGRhdGUoMCk7XG4gICAgICB0LnNlbmRFdmVudCgkejFBcHBjZmcuQmFzZUV2ZW50TmFtZS5TaG93VHJhbnNpdGlvbiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5pc1BhdXNldCA9IGZhbHNlO1xuICAgICAgICB0LnN0YXJ0R3VpZGUoKTtcbiAgICAgIH0pO1xuICAgICAgdC5pbml0QnRuVmlldygpO1xuICAgICAgdC5jdHJVSS5uZEd1aWRlLnNldFBhcmVudCh0LmN0ckdhbWUubmRQYXRoKTtcbiAgICAgIHQuY3RyR2FtZS5sb2FkR2FtZSgpICYmIHQub25SZXN0YXJ0KGZhbHNlKTtcbiAgICAgIHQuY3RyR2FtZS5nYW1lRGF0YS5pbml0Q29tKCk7XG4gICAgICB0LmNoZWNrQ3VycmVudFRhc2tBbHJlYWR5RG9uZSgpO1xuICAgICAgLy8g6ZK755+z5L2Z6aKd5pi+56S677ya5YWL6ZqG56Gs5biB6IqC54K55bm25o6S5pS+5Zyo5Y+z5L6n77yM5o2i5oiQ6ZK755+z5Zu+5qCHXG4gICAgICBpZiAoIXQuX25kRGlhbW9uZERpc3BsYXkpIHtcbiAgICAgICAgdmFyIG5kRGlhID0gY2MuaW5zdGFudGlhdGUodC5uZENvaW4pO1xuICAgICAgICBuZERpYS5zZXRQYXJlbnQodC5uZENvaW4ucGFyZW50KTtcbiAgICAgICAgdmFyIGNwID0gdC5uZENvaW4uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbmREaWEuYW5jaG9yWCA9IDA7XG4gICAgICAgIG5kRGlhLnNldFBvc2l0aW9uKGNwLnggLSB0Lm5kQ29pbi53aWR0aCAvIDIsIGNwLnkgKyB0Lm5kQ29pbi5oZWlnaHQpO1xuICAgICAgICB2YXIgaWNvbk5vZGUgPSBuZERpYS5nZXRDaGlsZEJ5TmFtZShcIndnX3pkX3liXCIpO1xuICAgICAgICBpZiAoaWNvbk5vZGUpIHtcbiAgICAgICAgICB0LmxvYWRTcHJpdGVGcmFtZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCBcIndnX3R5X3pzXCIsIGZ1bmN0aW9uIChzZikge1xuICAgICAgICAgICAgaWYgKGljb25Ob2RlICYmIGljb25Ob2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdmFyIHNwciA9IGljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICBzcHIuc3ByaXRlRnJhbWUgPSBzZjtcbiAgICAgICAgICAgICAgc3ByLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUoNDcsIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0Ll9uZERpYW1vbmREaXNwbGF5ID0gbmREaWE7XG4gICAgICAgIHQucmVmcmVzaERpYW1vbmREaXNwbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbml0VmlldygpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdEJ0bkV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmN0clVJLnNldE1vdmVGdW5jKHRoaXMubW92ZUZ1bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmJ0blN0YXJ0RmlnaHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuUGxheVZpZGVvU3VjYywgZmFsc2UpO1xuICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ndWlkZTgpO1xuICAgICAgaWYgKHQuY2FuU3RhcnQgJiYgKHQuc3RhcnRSb3VuZEdhbWUoKSwgISR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLmdldEd1aWRlVGlwcygyKSkpIHtcbiAgICAgICAgZm9yICh2YXIgZSBpbiB0LmVuZW15SWNvbkluZm8pIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQuZW5lbXlJY29uSW5mbywgZSkpIHtcbiAgICAgICAgICAgIHZhciBpID0gdC5lbmVteUljb25JbmZvW2VdO1xuICAgICAgICAgICAgaWYgKGkubmRJdGVtICYmIGkubmRJdGVtLmFjdGl2ZSkge1xuICAgICAgICAgICAgICBuLmluc3RhbmNlLmN0clVJLnNldEd1aWRlKGkudGFnTm9kZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOmSu+efs+aYvuekuuWMuuWfn++8mueCueWHu+aJk+W8gOWFheWAvOeVjOmdolxuICAgIHRoaXMuYnRuQWRkQ29pbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlCUFNob3ApO1xuICAgIH0pO1xuICAgIHRoaXMuYnRuQWdnLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlBsYXlWaWRlb1N1Y2MsIGZhbHNlKTtcbiAgICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdEZyZWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQXVkaW9JZC5zZXRfb2YpO1xuICAgICAgdC5jdHJHYW1lLmNoYW5nZUFnZSgpO1xuICAgICAgc3dpdGNoICgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQYXJhbWV0ZXIuRm9sbG93TW9kZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdC5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5jdHJHYW1lLmNoYW5nZUFnZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHQuYnRuQWdnLmdldENoaWxkQnlOYW1lKFwibmRUYWcxXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdC5idG5BZ2cuZ2V0Q2hpbGRCeU5hbWUoXCJuZFRhZzJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0LmJ0bkFnZy5nZXRDaGlsZEJ5TmFtZShcIm5kVGFnMVwiKS5hY3RpdmUgPSAhdC5jdHJHYW1lLmlzQWdnO1xuICAgICAgICAgIHQuYnRuQWdnLmdldENoaWxkQnlOYW1lKFwibmRUYWcyXCIpLmFjdGl2ZSA9IHQuY3RyR2FtZS5pc0FnZztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmJ0blN1c3BlbmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodC5jYW5CcmVhaykge1xuICAgICAgICB0Lm9uUGF1c2VHYW1lKHRydWUpO1xuICAgICAgICB0Lm9wZW5VSSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJU3VzcGVuZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQub25SZXN0YXJ0KHRydWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGEoKS5zZXROZXdHYW1lKCk7XG4gICAgICAgICAgdC5jbG9zZVVJKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYnRuUmV2aXZlQnJlYWsub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LmJ0blJldml2ZUJyZWFrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdC5idG5SZXZpdmUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5idG5CdWlsZEluZm8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuUGxheVZpZGVvU3VjYywgZmFsc2UpO1xuICAgICAgdC5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUJ1aWxkQXRsYXMpO1xuICAgIH0pO1xuICAgIHRoaXMubmRUYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlBsYXlWaWRlb1N1Y2MsIGZhbHNlKTtcbiAgICAgIHQuZ2V0VGFzaygpO1xuICAgIH0pO1xuICAgIHRoaXMuYnRuUmV2aXZlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5vblBhdXNlR2FtZSh0cnVlKTtcbiAgICAgICR6MVNka01nci5TZGtNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW8oJHoxU2RrTWdyLkFkVHlwZS5BZEZyZWVUaW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuaGVyb19yZXZpdmUpO1xuICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLnBheV9oZXJvX3Jldml2ZV9ZLCAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCkpO1xuICAgICAgICB0Lm9uUmV2aXZlU2hvdygwKTtcbiAgICAgICAgdC5jdHJHYW1lLmN0clBsYXkub25SZWJvcm4oKTtcbiAgICAgICAgdC5vblBhdXNlR2FtZShmYWxzZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25QYXVzZUdhbWUoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYnRuVGVzdCkgeyB0aGlzLmJ0blRlc3QuYWN0aXZlID0gZmFsc2U7IH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVSUJ5SWQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUhvbWUpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uUmVzdGFydCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5idG5CdWlsZEluZm8uYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmNhbkJyZWFrID0gdHJ1ZTtcbiAgICB0aGlzLm9uUGF1c2VHYW1lKGZhbHNlKTtcbiAgICB0aGlzLmN0ckdhbWUub25SZXN0YXJ0KHQpO1xuICAgIHRoaXMuY3RyVUkuc2V0UmV2aXZlKDApO1xuICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB0aGlzLmluaXRCdG5WaWV3KCk7XG4gICAgdGhpcy5idG5BZ2cuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5idG5BZ2cuZ2V0Q2hpbGRCeU5hbWUoXCJuZFRhZzFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ0bkFnZy5nZXRDaGlsZEJ5TmFtZShcIm5kVGFnMlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgZSA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5nZXRCdWxpZExpc3QoKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gZVtuXTtcbiAgICAgIGlmIChpLmJ1aWxkQ2ZnLmVudW1WYWx1ZSA9PSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5CYXJyYWNrcyAmJiBpLmdldExldmVsKCkgPj0gMSkge1xuICAgICAgICB0aGlzLmJ0bkFnZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHJHYW1lLmdhbWVEYXRhLnNldExpZ2h0KGZhbHNlKTtcbiAgICB0aGlzLmN0clVJLm5kTGlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jdHJHYW1lLm5kQmcuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgIH0pO1xuICAgIHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5vYnN0YWNsZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0RXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYWRkRXZlbnQoJHoxQXBwY2ZnLkJhc2VFdmVudE5hbWUuQ2xvc2VVSSwgdGhpcy5vbkNsb3NlVUkpO1xuICAgIHRoaXMuYWRkRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlJlZnJlc2hEaWFtb25kLCB0aGlzLm9uUmVmcmVzaERpYW1vbmQpO1xuICAgIHRoaXMuYWRkRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLk5ld2JpZUd1aWRlLCB0aGlzLnN0YXJ0R3VpZGUpO1xuICAgIHRoaXMuYWRkRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLkdhbWVQYXVzZSwgdGhpcy5vblBhdXNlR2FtZSk7XG4gICAgdGhpcy5hZGRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuUm91bmRFbmQsIHRoaXMuZW5kUm91bmRHYW1lKTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5HYW1lT3ZlciwgdGhpcy5vbkdhbWVPdmVyKTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5HYW1lUmVzdGFydCwgdGhpcy5vblJlc3RhcnQpO1xuICAgIHRoaXMuYWRkRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlJldml2ZVNob3csIHRoaXMub25SZXZpdmVTaG93KTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5CdWlsZGluZ0xldmVsVXAsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuY3RyR2FtZS5nYW1lRGF0YS51cE1hcCgpO1xuICAgICAgdC5pbml0QnRuVmlldygpO1xuICAgICAgaWYgKHQuY3RyR2FtZS5nYW1lRGF0YS5iYXNlQnVpbGQuZ2V0TGV2ZWwoKSA+PSAxKSB7XG4gICAgICAgIG4uaW5zdGFuY2UuY3RyVUkuc2V0R3VpZGUobnVsbCk7XG4gICAgICAgIHQuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlNik7XG4gICAgICAgICAgdC5zdGFydEd1aWRlKCk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0Q2hhbmdlU3BlZWQgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuc3BlZWQgPSB0O1xuICAgIHRoaXMuY3RyR2FtZS5vbkNoYW5nZVNwZWVkKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0QnRuVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0blN0YXJ0RmlnaHQuYWN0aXZlID0gdGhpcy5jdHJHYW1lLmdhbWVEYXRhLmJhc2VCdWlsZC5nZXRMZXZlbCgpID49IDE7XG4gICAgaWYgKDEgPT0gdGhpcy5jdHJHYW1lLmdhbWVEYXRhLmxldmVsQ2ZnLkxldmVsICYmIHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5yb3VuZCA8PSAzKSB7XG4gICAgICB2YXIgdCA9IHRydWU7XG4gICAgICB2YXIgZSA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5nZXRCdWxpZExpc3QoKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgICBpZiAoLTEgIT0gKGEgPSBlW25dLmdldFNlbGwoKSkgJiYgYSA8PSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEuY29pbikge1xuICAgICAgICAgIHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5idG5TdGFydEZpZ2h0LmdldENoaWxkQnlOYW1lKFwibmRIZWFkXCIpLmFjdGl2ZSA9IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnRuU3RhcnRGaWdodC5nZXRDaGlsZEJ5TmFtZShcIm5kSGVhZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5idG5BZGRDb2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmN0ckdhbWUuZ2FtZURhdGEubGV2ZWxDZmcuV2F2ZUNmZ1t0aGlzLmN0ckdhbWUuZ2FtZURhdGEucm91bmRdKSB7XG4gICAgICB0aGlzLmJ0blN0YXJ0RmlnaHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5sZXZlbENmZy5XYXZlQ2ZnW3RoaXMuY3RyR2FtZS5nYW1lRGF0YS5yb3VuZF0uU3RhcnRTbGl2ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnRuU3RhcnRGaWdodC5jaGlsZHJlblsxXS54ID0gMDtcbiAgICAgIHRoaXMuYnRuU3RhcnRGaWdodC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYnRuU3RhcnRGaWdodC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEuZ2V0QnVsaWRMaXN0KCk7XG4gICAgdGhpcy5idG5BZ2cuYWN0aXZlID0gZmFsc2U7XG4gICAgZm9yIChuID0gMDsgbiA8IGkubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBhO1xuICAgICAgaWYgKChhID0gaVtuXSkuYnVpbGRDZmcuZW51bVZhbHVlID09ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLkJhcnJhY2tzICYmIGEuZ2V0TGV2ZWwoKSA+PSAxKSB7XG4gICAgICAgIHRoaXMuYnRuQWdnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uUGF1c2VHYW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5pc1BhdXNldCA9IHQ7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgZS5jdHJHYW1lLm9uUGF1c2VHYW1lKCk7XG4gICAgICAgIGUuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5QbGF5VmlkZW9TdWNjLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLmN0ckdhbWUub25SZXN1bWVHYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkdhbWVPdmVyID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5jdHJHYW1lLmdhbWVTdGF0dXMgPSAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVTdGFnZS5FbmQ7XG4gICAgdGhpcy5jdHJHYW1lLm1vdmVGdW4obnVsbCk7XG4gICAgdGhpcy5jdHJHYW1lLm9uUGF1c2VHYW1lKCk7XG4gICAgdGhpcy5jYW5CcmVhayA9IGZhbHNlO1xuICAgIHRoaXMuY3RyVUkuc2V0UmV2aXZlKDApO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIGUub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlHYW1lRW5kLCB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZmFpbF9YX1ksIGUuY3RyR2FtZS5nYW1lRGF0YS5sZXZlbENmZy5MZXZlbCArIFwiX1wiICsgZS5jdHJHYW1lLmdhbWVEYXRhLnJvdW5kKTtcbiAgICAgICAgZS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUdhbWVCYWNrLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmdhbWVfcmV2aXZlKTtcbiAgICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQucGF5X2dhbWVfcmV2aXZlX1ksICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0TWF4U3RhZ2UoKSk7XG4gICAgICAgICAgICBlLmN0ckdhbWUuZ2FtZURhdGEuY29pbiArPSBuO1xuICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5hZGRBY2hOdW0oJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1BY2hpRW51bS5HZXRTbGl2ZXIsIG4pO1xuICAgICAgICAgICAgZS5vblJlc3RhcnQoZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLm9wZW5VSSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxVSUlELlVJR2FtZUVuZCwgdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLm9uUmV2aXZlU2hvdyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5jdHJHYW1lLmdhbWVTdGF0dXMgIT0gJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lU3RhZ2UuRW5kICYmIHRoaXMuY3RyVUkuc2V0UmV2aXZlKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUubW92ZUZ1biA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdGhpcy5jdHJHYW1lLmdhbWVTdGF0dXMgIT0gJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lU3RhZ2UuRW5kICYmIHRoaXMuY3RyR2FtZS5tb3ZlRnVuKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnRSb3VuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYnRuQnVpbGRJbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYnRuU3RhcnRGaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bkFkZENvaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jdHJVSS5uZExpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5pc0dldCA9IGZhbHNlO1xuICAgIHRoaXMuY3RyR2FtZS5nYW1lU3RhdHVzID0gJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lU3RhZ2UuVHJhbnNpdGlvbjtcbiAgICAkejFBdWRpb01nci5BdWRpb01nci5nZXRJbnN0YW5jZSgpLnBsYXlNdXNpYygkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLmZpZ2h0X2JnbSwgJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLkJHTXVzaWMpO1xuICAgIGNjLnR3ZWVuKHRoaXMuY3RyVUkubmRMaWdodCkuc2V0KHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS50byguNSwge1xuICAgICAgb3BhY2l0eTogMjU1XG4gICAgfSwge1xuICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICAgIHZhciBpID0gTWF0aC5mbG9vcigyNTUgLSA5OSAqIG4pO1xuICAgICAgICB0LmN0ckdhbWUubmRCZy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdC5jb2xvciA9IG5ldyBjYy5Db2xvcihpLCBpLCBpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHQuY3RyR2FtZS5nYW1lRGF0YS5vYnN0YWNsZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHQubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcihpLCBpLCBpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB0LmN0ckdhbWUuZ2FtZVN0YXR1cyA9ICR6MUtpbmdodEZhbGxNb2RsZS5LaW5naHRGYWxsR2FtZVN0YWdlLkZpZ2h0O1xuICAgICAgdC5pbml0VmlldygpO1xuICAgIH0pLnN0YXJ0KCk7XG4gICAgdGhpcy5jdHJHYW1lLmN0clBsYXkubmRSYW5nZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5nZXRCdWxpZExpc3QoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB0LmJ1aWxkSW5mbyAmJiB0LnN0YXJ0Um91bmRHYW1lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jdHJHYW1lLmdhbWVEYXRhLnN0YXJ0Um91bmRHYW1lKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5lbmRSb3VuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYnRuQnVpbGRJbmZvLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jYW5CcmVhayA9IGZhbHNlO1xuICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheU11c2ljKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEF1ZGlvSWQucmVhZHlfYmdtLCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQYXJhbWV0ZXIuQkdNdXNpYyk7XG4gICAgdGhpcy5jdHJHYW1lLmdhbWVTdGF0dXMgPSAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVTdGFnZS5UcmFuc2l0aW9uO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuY3RyR2FtZS5nYW1lU3RhdHVzID0gJHoxS2luZ2h0RmFsbE1vZGxlLktpbmdodEZhbGxHYW1lU3RhZ2UuUHJlcGFyZTtcbiAgICAgIHQub25QYXVzZUdhbWUodHJ1ZSk7XG4gICAgICB0LmN0ckdhbWUuY3RyUGxheS5lbmRSb3VuZEdhbWUoKTtcbiAgICAgIHQub3BlblVJQ2FsbEJhY2soJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSUJ1ZmYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5jdHJHYW1lLmN0clBsYXkubmRSYW5nZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdC5jdHJHYW1lLmdhbWVEYXRhLnNldExpZ2h0KGZhbHNlKTtcbiAgICAgICAgY2MudHdlZW4odC5jdHJVSS5uZExpZ2h0KS5zZXQoe1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9KS50byguNSwge1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoZSwgbikge1xuICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKDE1NiArIDk5ICogbik7XG4gICAgICAgICAgICB0LmN0ckdhbWUubmRCZy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHQuY29sb3IgPSBuZXcgY2MuQ29sb3IoaSwgaSwgaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHQuY3RyR2FtZS5nYW1lRGF0YS5vYnN0YWNsZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICB0Lm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoaSwgaSwgaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQuY3RyVUkubmRMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHQub25QYXVzZUdhbWUoZmFsc2UpO1xuICAgICAgICB0LmNhbkJyZWFrID0gdHJ1ZTtcbiAgICAgICAgdC5jdHJHYW1lLmN0clBsYXkuY3RyUGxheUFuaS5zZXRMZXZlbFVwKCk7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgIHZhciBpID0gZVtuXTtcbiAgICAgICAgICB0LmN0ckdhbWUuZ2FtZURhdGEuYWRkR2FtZUJ1ZmYoaSk7XG4gICAgICAgIH1cbiAgICAgICAgdC5jdHJHYW1lLmVuZFJvdW5kR2FtZSgpO1xuICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgIGEgKz0gdC5jdHJHYW1lLmdhbWVEYXRhLmFkZFRpbWVbJHoxS2luZ2h0RmFsbEdhbWVDdHJsRGF0YS5LaW5naHRGYWxsVGltZVR5cGUuS2lsbFNvbGRpZXIyXTtcbiAgICAgICAgdmFyIG8gPSB0LmN0ckdhbWUuZ2FtZURhdGEuZ2V0R2FtZUJ1ZmYoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWZmQ2ZnLkJ1ZmYwNCk7XG4gICAgICAgIG8gJiYgKGEgKz0gby5QYW1lclswXSk7XG4gICAgICAgIGlmIChhID4gMCkge1xuICAgICAgICAgIHQuY3RyR2FtZS5nYW1lRGF0YS5jb2luICs9IGE7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5hZGRBY2hOdW0oJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1BY2hpRW51bS5HZXRTbGl2ZXIsIGEpO1xuICAgICAgICB9XG4gICAgICAgIHQuaW5pdFZpZXcoKTtcbiAgICAgICAgdC5jdHJHYW1lLmdhbWVEYXRhLnVwTWFwKCk7XG4gICAgICAgIHQuaW5pdEJ0blZpZXcoKTtcbiAgICAgICAgdC5jdHJHYW1lLnNhdmVHYW1lKCk7XG4gICAgICB9KTtcbiAgICB9LCAxKTtcbiAgfTtcbiAgLy8g5Yi35paw5ri45oiP5YaF6ZK755+z5L2Z6aKd5pi+56S6XG4gIF9jdG9yLnByb3RvdHlwZS5yZWZyZXNoRGlhbW9uZERpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpYW1vbmQgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldERpYW1vbmROdW0oKTtcbiAgICBpZiAodGhpcy5fbmREaWFtb25kRGlzcGxheSkge1xuICAgICAgdmFyIGxhYiA9IHRoaXMuX25kRGlhbW9uZERpc3BsYXkuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIik7XG4gICAgICBpZiAobGFiKSB7IGxhYi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBkaWFtb25kOyB9XG4gICAgfVxuICB9O1xuICAvLyBSZWZyZXNoRGlhbW9uZCDkuovku7bvvJrmm7TmlrDmmL7npLrvvIzmiaPotLnml7bmmL7npLrmta7liqjmloflrZdcbiAgX2N0b3IucHJvdG90eXBlLm9uUmVmcmVzaERpYW1vbmQgPSBmdW5jdGlvbiAoYW1vdW50LCBpc0FkZCkge1xuICAgIHRoaXMucmVmcmVzaERpYW1vbmREaXNwbGF5KCk7XG4gICAgaWYgKCFpc0FkZCAmJiBhbW91bnQgPiAwICYmIHRoaXMuYnRuQWRkQ29pbiAmJiB0aGlzLmJ0bkFkZENvaW4uYWN0aXZlKSB7XG4gICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICB2YXIgbGFiZWwgPSBuZXcgY2MuTm9kZShcIl9kaWFtb25kRGVkdWN0XCIpO1xuICAgICAgdmFyIGNvbXAgPSBsYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgY29tcC5zdHJpbmcgPSBcIi1cIiArIGFtb3VudDtcbiAgICAgIGNvbXAuZm9udFNpemUgPSA0MDtcbiAgICAgIGNvbXAuZW5hYmxlQm9sZCA9IHRydWU7XG4gICAgICBsYWJlbC5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDgwLCA4MCwgMjU1KTtcbiAgICAgIGxhYmVsLnNldFBhcmVudCh0aGlzLmN0clVJLm5vZGUpO1xuICAgICAgdmFyIHdvcmxkUG9zID0gdC5idG5BZGRDb2luLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgdmFyIGxvY2FsUG9zID0gdC5jdHJVSS5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgIGxhYmVsLnNldFBvc2l0aW9uKGxvY2FsUG9zLngsIGxvY2FsUG9zLnkpO1xuICAgICAgY2MudHdlZW4obGFiZWwpXG4gICAgICAgIC50bygwLjksIHsgcG9zaXRpb246IGNjLnYzKGxvY2FsUG9zLngsIGxvY2FsUG9zLnkgKyA5MCwgMCksIG9wYWNpdHk6IDAgfSlcbiAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkgeyBsYWJlbC5kZXN0cm95KCk7IH0pXG4gICAgICAgIC5zdGFydCgpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIGlmICh0aGlzLmN0ckdhbWUuZ2FtZVN0YXR1cyA9PSAkejFLaW5naHRGYWxsTW9kbGUuS2luZ2h0RmFsbEdhbWVTdGFnZS5GaWdodCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEuZ2V0QnVsaWRMaXN0KCk7XG4gICAgICB2YXIgbiA9IChudWxsID09PSAodCA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5sZXZlbENmZy5XYXZlQ2ZnW3RoaXMuY3RyR2FtZS5nYW1lRGF0YS5yb3VuZF0pIHx8IHVuZGVmaW5lZCA9PT0gdCA/IHVuZGVmaW5lZCA6IHQuU3RhcnRTbGl2ZXIpIHx8IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGEgPSBlW2ldO1xuICAgICAgICBzd2l0Y2ggKGEuYnVpbGRDZmcuZW51bVZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUJ1aWxkRW51bS5NaWxsOlxuICAgICAgICAgICAgYS5nZXRJc1dvcmsoKSAmJiAobiArPSBhLmdldEdldENvaW4oKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtQnVpbGRFbnVtLlByaXZhdGVIb3VzZTpcbiAgICAgICAgICAgIGEuZ2V0SXNXb3JrKCkgJiYgKG4gKz0gYS5nZXRHZXRDb2luKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5kQ29pbi5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5jb2luICsgXCIoK1wiICsgbiArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5kQ29pbi5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLmN0ckdhbWUuZ2FtZURhdGEuY29pbjtcbiAgICB9XG4gICAgdGhpcy5uZExldmVsSW5mby5nZXRDaGlsZEJ5TmFtZShcImxhYk5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLlQodGhpcy5jdHJHYW1lLmdhbWVEYXRhLmxldmVsQ2ZnLk5hbWUpO1xuICAgIHZhciBsYWJPcmRlck5vZGUgPSB0aGlzLm5kTGV2ZWxJbmZvLmdldENoaWxkQnlOYW1lKFwibGFiT3JkZXJcIik7XG4gICAgbGFiT3JkZXJOb2RlLmFjdGl2ZSA9IGZhbHNlOyAvLyDlrr3luqbku4UgOHB477yM5pi+56S65Li657uG56uW57q/77yM6ZqQ6JePXG4gICAgaWYgKHRoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5pbmRleCA+PSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEudGFza0luZm8ubGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubmRUYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbyA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0R2FtZVRhc2tFbmVtKHRoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5saXN0W3RoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5pbmRleF0pO1xuICAgICAgdGhpcy5uZFRhc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHZhciBsYWJOYW1lTm9kZSA9IHRoaXMubmRUYXNrLmdldENoaWxkQnlOYW1lKFwibGFiTmFtZVwiKTtcbiAgICAgIGxhYk5hbWVOb2RlLnNldENvbnRlbnRTaXplKDIyMCwgbGFiTmFtZU5vZGUuaGVpZ2h0KTtcbiAgICAgIHZhciBsYWJOYW1lQ29tcCA9IGxhYk5hbWVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBsYWJOYW1lQ29tcC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSztcbiAgICAgIGxhYk5hbWVDb21wLnN0cmluZyA9IHRoaXMuVChvLk5hbWUpO1xuICAgICAgdmFyIGlzRmluaXNoZWQgPSAxID09IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5zdGFnZTtcbiAgICAgIHRoaXMubmRUYXNrLmdldENoaWxkQnlOYW1lKFwibGFiR2V0XCIpLmFjdGl2ZSA9IGlzRmluaXNoZWQ7XG4gICAgICB2YXIgbGFiTm9GaW5pc2ggPSB0aGlzLm5kVGFzay5nZXRDaGlsZEJ5TmFtZShcImxhYk5vRmluaXNoXCIpO1xuICAgICAgbGFiTm9GaW5pc2guYWN0aXZlID0gIWlzRmluaXNoZWQ7XG4gICAgICB2YXIgcmV3YXJkTm9kZSA9IHRoaXMubmRUYXNrLmdldENoaWxkQnlOYW1lKFwibmRBbmlcIik7XG4gICAgICB2YXIgcmV3YXJkSWR4ID0gdGhpcy5jdHJHYW1lLmdhbWVEYXRhLnRhc2tJbmZvLmluZGV4O1xuICAgICAgdmFyIHJld2FyZCA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5yZXdhcmQgJiYgdGhpcy5jdHJHYW1lLmdhbWVEYXRhLnRhc2tJbmZvLnJld2FyZFtyZXdhcmRJZHhdO1xuICAgICAgaWYgKHJld2FyZE5vZGUgJiYgcmV3YXJkKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGdvb2RzQ2ZnID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHb29kc0NmZ0J5SWQocmV3YXJkLmlkKTtcbiAgICAgICAgc2VsZi5sb2FkU3ByaXRlRnJhbWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5JY29uR29vZCwgZ29vZHNDZmcuaWNvbiwgZnVuY3Rpb24gKHNmKSB7XG4gICAgICAgICAgcmV3YXJkTm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwckljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJld2FyZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIHJld2FyZC5udW0gKiB0aGlzLmN0ckdhbWUuZ2FtZURhdGEubGV2ZWxDZmcuSW5HYW1lQ29lZmZpY2llbnQ7XG4gICAgICAgIHJld2FyZE5vZGUueSA9IDA7XG4gICAgICAgIHJld2FyZE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gbGFiR2V0IC8gbGFiTm9GaW5pc2gg5LiOIG5kQW5pIOWcqCBwcmVmYWIg6YeMIHgg5Z2Q5qCH6YeN5Y+g77yM5Zyo5q2k5YiG5byA77yaXG4gICAgICAgIC8vIG5kQW5pIOmdoOWPs++8jOeKtuaAgeagh+etvuenu+WIsCBuZEFuaSDlt6bkvqfvvIhhbmNob3IgeD0x77yM5Y+z6L6557yY6LS0IG5kQW5pIOW3pui+uee8mO+8iVxuICAgICAgICB2YXIgbmRBbmlYICAgID0gcmV3YXJkTm9kZS54O1xuICAgICAgICB2YXIgbmRBbmlIYWxmVyA9IChyZXdhcmROb2RlLndpZHRoICogcmV3YXJkTm9kZS5zY2FsZVgpIC8gMjtcbiAgICAgICAgdmFyIHN0YXR1c1ggICA9IG5kQW5pWCAtIG5kQW5pSGFsZlcgLSA4O1xuICAgICAgICBpZiAoaXNGaW5pc2hlZCkge1xuICAgICAgICAgIHZhciBsYWJHZXQgPSB0aGlzLm5kVGFzay5nZXRDaGlsZEJ5TmFtZShcImxhYkdldFwiKTtcbiAgICAgICAgICBpZiAobGFiR2V0KSB7IGxhYkdldC5zZXRQb3NpdGlvbihzdGF0dXNYLCBsYWJHZXQueSk7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJOb0ZpbmlzaC5zZXRQb3NpdGlvbihzdGF0dXNYLCBsYWJOb0ZpbmlzaC55KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmxhdGVVcGRhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgIHRoaXMuaXNQYXVzZXQgfHwgdGhpcy5jdHJHYW1lLm9uTGF0ZVVwZGF0ZSh0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKCF0aGlzLmlzUGF1c2V0KSB7XG4gICAgICB0ID0gTWF0aC5taW4odCwgLjEpO1xuICAgICAgdGhpcy5jdHJVSS51cEd1aWRlKCk7XG4gICAgICB0aGlzLmN0ckdhbWUub25VcGRhdGUodCAqIHRoaXMuc3BlZWQpO1xuICAgICAgZm9yICh2YXIgZSBpbiB0aGlzLmVuZW15SWNvbkluZm8pIHtcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZW5lbXlJY29uSW5mbywgZSkgJiYgKChvID0gdGhpcy5lbmVteUljb25JbmZvW2VdKS50YWcgPSBmYWxzZSk7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5lbmVteVF1ZXVlO1xuICAgICAgaWYgKHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5iYXNlQnVpbGQuZ2V0TGV2ZWwoKSA+PSAxKSB7XG4gICAgICAgIHZhciBpID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sIHQpKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG5bdF07XG4gICAgICAgICAgICBpZiAoIWEuZW5lbXlJY29uSW5mb1t0XSkge1xuICAgICAgICAgICAgICBhLmVuZW15SWNvbkluZm9bdF0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgdGFnTm9kZTogYS5jdHJHYW1lLm5kUGF0aC5nZXRDaGlsZEJ5TmFtZShcIm5kRW5lbXlcIiArIHQpLFxuICAgICAgICAgICAgICAgIG5kSXRlbTogY2MuaW5zdGFudGlhdGUoYS5uZEVuZW15SWNvbiksXG4gICAgICAgICAgICAgICAgdGFnOiB0cnVlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGEuZW5lbXlJY29uSW5mb1t0XS5uZEl0ZW0uc2V0UGFyZW50KGEuY3RyVUkubm9kZSk7XG4gICAgICAgICAgICAgIGEuZW5lbXlJY29uSW5mb1t0XS5uZEl0ZW0uc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGkgPSBhLmVuZW15SWNvbkluZm9bdF07XG4gICAgICAgICAgICBpZiAoZVswXSkge1xuICAgICAgICAgICAgICB2YXIgbyA9IGVbMF07XG4gICAgICAgICAgICAgIC0xID09IG8uaWQgJiYgKG8gPSBlWzFdKTtcbiAgICAgICAgICAgICAgaWYgKC0xID09IG8uaWQpIHtcbiAgICAgICAgICAgICAgICBpLnRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpLmlkICE9IG8uaWQpIHtcbiAgICAgICAgICAgICAgICAgIGkuaWQgPSBvLmlkO1xuICAgICAgICAgICAgICAgICAgdmFyIHIgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFNvbGRpZXJDZmdCeUlkKG8uaWQpO1xuICAgICAgICAgICAgICAgICAgYS5sb2FkU3ByaXRlRnJhbWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5FbmVteSwgXCJpY29uL1wiICsgci5sb2FkSWNvbiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5uZEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJzcHJJY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdDtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpLm5kSXRlbS5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBvLm51bTtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IGEuY3RyR2FtZS5uZFBhdGguY29udmVydFRvV29ybGRTcGFjZUFSKGkudGFnTm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGNjLkNhbWVyYS5tYWluLmdldFdvcmxkVG9TY3JlZW5Qb2ludChzKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGEuY3RyVUkubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGMuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBjLnggPSBjYy5taXNjLmNsYW1wZihjLngsIC0yNDYsIDI0Nik7IC8vIOW3pui+ueeVmeabtOWkmuepuumXtO+8jOmYsuatoiBsYWJlbCDotoXlh7rlsY/luZXlt6bovrnnvJhcbiAgICAgICAgICAgICAgICBjLnkgPSBjYy5taXNjLmNsYW1wZihjLnksIC00NDIsIDQ0Mik7XG4gICAgICAgICAgICAgICAgaS5uZEl0ZW0uc2V0UG9zaXRpb24oYyk7XG4gICAgICAgICAgICAgICAgaWYgKGMuZXF1YWxzKGgpKSB7XG4gICAgICAgICAgICAgICAgICBpLm5kSXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5kQXJyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZyA9IGNjLnYyKCk7XG4gICAgICAgICAgICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KGcsIGNjLnYyKGgueCwgaC55KSwgY2MudjIoYy54LCBjLnkpKTtcbiAgICAgICAgICAgICAgICAgIHZhciB1ID0gMTgwICogTWF0aC5hdGFuMihnLnksIGcueCkgLyBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgaS5uZEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuZEFyclwiKS5hbmdsZSA9IHUgLSA5MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaS50YWcgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYSA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGUgaW4gbikge1xuICAgICAgICAgIGkoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGUgaW4gdGhpcy5lbmVteUljb25JbmZvKSB7XG4gICAgICAgIHZhciBvO1xuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5lbmVteUljb25JbmZvLCBlKSAmJiAoKG8gPSB0aGlzLmVuZW15SWNvbkluZm9bZV0pLm5kSXRlbS5hY3RpdmUgPSBvLnRhZyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25DbG9zZVVJID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHQgPT0gJHoxQ29uZmlnLlVJSUQuVUlHdWlkZSkge1xuICAgICAgdGhpcy5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlBsYXlWaWRlb1N1Y2MsIGZhbHNlKTtcbiAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuZ2V0R3JvdXBJZCgpO1xuICAgICAgdmFyIGkgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5nZXRTdGVwSWQoKTtcbiAgICAgIHZhciBhID0gWzJdO1xuICAgICAgdmFyIG8gPSBbMl07XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IGEubGVuZ3RoOyByKyspIHtcbiAgICAgICAgaWYgKG4gPT0gYVtyXSAmJiBpID09IG9bcl0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5zdGFydEd1aWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydEd1aWRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKCR6MVBsYXRmb3JtU2V0dGluZy5QbGF0Zm9ybVNldHRpbmcuY3VycmVudFBsYXRmb3JtICE9ICR6MUJhc2VQbGF0Zm9ybS5QbGF0Zm9ybS5XRUJfTElOSykge1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgaWYgKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLmdldEd1aWRlVGlwcyh0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IG5ldyAkejFVSUd1aWRlLkd1aWxkQ2ZnKCk7XG4gICAgICAgIHZhciBhID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZUNmZ0J5SWQodClbMF07XG4gICAgICAgIGkuaXNXZWVrID0gISFhLkNsb3NlO1xuICAgICAgICBpLnNob3dIYW5kID0gYS5GaW5nZXI7XG4gICAgICAgIGkuaGlkZU1hc2sgPSAhYS5NYXNrO1xuICAgICAgICBpLnRpcHN0cmluZyA9IGEuRGVzY3JpYmU7XG4gICAgICAgIGkuc2hvd0FuaSA9ICEhYS5TaG93S2luZztcbiAgICAgICAgaS5kZXZpYXRpb25UaXBzQWxsID0gY2MudjIoMCwgYS5PZmZzZXQgfHwgMCk7XG4gICAgICAgIDExID09IHQgJiYgKGkuZGlzdE5vZGUgPSB0aGlzLmJ0bkFnZyk7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZ3VpZGUxMik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlMTApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ndWlkZTExKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmd1aWRlMTMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZ3VpZGUxNCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuVUlDYWxsQmFjaygkejFDb25maWcuVUlJRC5VSUd1aWRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuc2V0R3VpZGVUaXBzKHQpO1xuICAgICAgICB9LCBpKTtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuZ2V0R3JvdXBJZCgpO1xuICAgICAgdmFyIHMgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlQ2ZnQnlJZChvKTtcbiAgICAgIGlmICghKHMubGVuZ3RoIDw9IDApKSB7XG4gICAgICAgIHZhciBoO1xuICAgICAgICB2YXIgZyA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLmdldFN0ZXBJZCgpO1xuICAgICAgICB2YXIgdSA9IHNbZ107XG4gICAgICAgIHN3aXRjaCAobykge1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgKGggPSBuZXcgJHoxVUlHdWlkZS5HdWlsZENmZygpKS5pc1dlZWsgPSAhIXUuQ2xvc2U7XG4gICAgICAgICAgICBoLnNob3dIYW5kID0gdS5GaW5nZXI7XG4gICAgICAgICAgICBoLmhpZGVNYXNrID0gIXUuTWFzaztcbiAgICAgICAgICAgIGgudGlwc3RyaW5nID0gdS5EZXNjcmliZTtcbiAgICAgICAgICAgIGguc2hvd0FuaSA9ICEhdS5TaG93S2luZztcbiAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaC5kaXN0Tm9kZSA9IHRoaXMubmRDb2luO1xuICAgICAgICAgICAgICAgIGguYWRkU2l6ZSA9IG5ldyBjYy5TaXplKDQwLCAwKTtcbiAgICAgICAgICAgICAgICBoLmRldmlhdGlvblRpcHNBbGwgPSBjYy52MigwLCB1Lk9mZnNldCB8fCAwKTtcbiAgICAgICAgICAgICAgICBoLmxpZ2h0VHlwZSA9IDE7XG4gICAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ndWlkZTQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaC5kaXN0Tm9kZSA9IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5iYXNlQnVpbGQubmRMb2NrTGlzdFt0aGlzLmN0ckdhbWUuZ2FtZURhdGEuYmFzZUJ1aWxkLmdldExldmVsKCldO1xuICAgICAgICAgICAgICAgIGguZGlzdENhbWVyYSA9IHRoaXMuY3RyR2FtZS5jYW1lcmE7XG4gICAgICAgICAgICAgICAgaC5kZXZpYXRpb25UaXBzQWxsID0gY2MudjIoMCwgdS5PZmZzZXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgaC5jYWxsQmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG4uaW5zdGFuY2UuY3RyVUkuc2V0R3VpZGUoZS5jdHJHYW1lLmdhbWVEYXRhLmJhc2VCdWlsZC5uZExvY2tMaXN0W2UuY3RyR2FtZS5nYW1lRGF0YS5iYXNlQnVpbGQuZ2V0TGV2ZWwoKV0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuZ3VpZGU1KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGQgaW4gdGhpcy5lbmVteUljb25JbmZvKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZW5lbXlJY29uSW5mbywgZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmVuZW15SWNvbkluZm9bZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2Lm5kSXRlbSAmJiB2Lm5kSXRlbS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBoLmRpc3ROb2RlID0gdi5uZEl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaC5kZXZpYXRpb25UaXBzQWxsID0gY2MudjIoMCwgdS5PZmZzZXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ndWlkZTcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaC5saWdodFR5cGUgPSAxO1xuICAgICAgICAgICAgICAgIGguZGlzdE5vZGUgPSB0aGlzLmJ0blN0YXJ0RmlnaHQ7XG4gICAgICAgICAgICAgICAgaC5kZXZpYXRpb25UaXBzQWxsID0gY2MudjIoMCwgdS5PZmZzZXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgdGhpcy5vcGVuVUlDYWxsQmFjaygkejFDb25maWcuVUlJRC5VSUd1aWRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc1tnICsgMV0pIHtcbiAgICAgICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0R3VpZGVEYXRhKCkuc2V0U3RlcElkKGcgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEd1aWRlRGF0YSgpLnNldEdyb3VwSWQobyArIDEpO1xuICAgICAgICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHdWlkZURhdGEoKS5zZXRTdGVwSWQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZW5kRXZlbnQoJHoxQXBwY2ZnLkJhc2VFdmVudE5hbWUuYmxvY2t0b3VjaCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hbmlCdG5BZGRDb2luID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0dldCkge1xuICAgICAgdmFyIHQgPSB0aGlzLmJ0bkFkZENvaW4uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICB0LnBsYXkodC5kZWZhdWx0Q2xpcC5uYW1lKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgxID09IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5zdGFnZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEudGFza0luZm8ucmV3YXJkW3RoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5pbmRleF07XG4gICAgICBzd2l0Y2ggKHQuaWQpIHtcbiAgICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUdvb2RzQ2ZnLlNpbHZlckNvaW46XG4gICAgICAgICAgdGhpcy5jdHJHYW1lLmdhbWVEYXRhLmNvaW4gKz0gdC5udW07XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLm5kQ29pbjtcbiAgICAgICAgICB2YXIgbiA9IGNjLnYyKGUucG9zaXRpb24ueCArIGUuY2hpbGRyZW5bMF0ueCwgZS5wb3NpdGlvbi55ICsgZS5jaGlsZHJlblswXS55KTtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMubmRUYXNrLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgICAgdmFyIGEgPSB0aGlzLmN0clVJLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgICAgdmFyIG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNjLmluc3RhbnRpYXRlKGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdC5zY2FsZSA9IC41O1xuICAgICAgICAgICAgdC5zZXRQYXJlbnQoci5jdHJVSS5ub2RlKTtcbiAgICAgICAgICAgIHZhciBpID0gY2MudjIoKTtcbiAgICAgICAgICAgIGNjLlZlYzIucmFuZG9tKGksIDQwKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHQpLnNldCh7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MyhhLngsIGEueSwgMClcbiAgICAgICAgICAgIH0pLmJ5KC4yLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MyhpLngsIGkueSwgMClcbiAgICAgICAgICAgIH0pLnRvKDEsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKG4ueCwgbi55LCAwKSxcbiAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgciA9IHRoaXM7XG4gICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCAxMDsgcysrKSB7XG4gICAgICAgICAgICBvKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmFkZFJld2FyZHMoW3RdLCB0aGlzLmN0ckdhbWUuZ2FtZURhdGEubGV2ZWxDZmcuSW5HYW1lQ29lZmZpY2llbnQpO1xuICAgICAgfVxuICAgICAgdmFyIGwgPSB0aGlzLm5kVGFzay5nZXRDaGlsZEJ5TmFtZShcIm5kQW5pXCIpO1xuICAgICAgdmFyIGMgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEdvb2RzQ2ZnQnlJZCh0LmlkKTtcbiAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuSWNvbkdvb2QsIGMuaWNvbiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgbC5nZXRDaGlsZEJ5TmFtZShcInNwckljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0O1xuICAgICAgfSk7XG4gICAgICBsLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyB0Lm51bSAqIHRoaXMuY3RyR2FtZS5nYW1lRGF0YS5sZXZlbENmZy5JbkdhbWVDb2VmZmljaWVudDtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChsKTtcbiAgICAgIGwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGNjLnR3ZWVuKGwpLnNldCh7XG4gICAgICAgIHk6IDQwXG4gICAgICB9KS50byguNSwge1xuICAgICAgICB5OiA4MFxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGwuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdGhpcy5jdHJHYW1lLmdhbWVEYXRhLnRhc2tJbmZvLmluZGV4Kys7XG4gICAgICB0aGlzLmN0ckdhbWUuZ2FtZURhdGEudGFza0luZm8uc3RhZ2UgPSAwO1xuICAgICAgdGhpcy5jdHJHYW1lLnNhdmVHYW1lKCk7XG4gICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgICB0aGlzLmNoZWNrQ3VycmVudFRhc2tBbHJlYWR5RG9uZSgpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmNoZWNrQ3VycmVudFRhc2tBbHJlYWR5RG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFza0luZm8gPSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEudGFza0luZm87XG4gICAgaWYgKHRhc2tJbmZvLnN0YWdlID09PSAxIHx8IHRhc2tJbmZvLmluZGV4ID49IHRhc2tJbmZvLmxpc3QubGVuZ3RoKSByZXR1cm47XG4gICAgdmFyIHRhc2tUeXBlID0gdGFza0luZm8ubGlzdFt0YXNrSW5mby5pbmRleF07XG4gICAgdmFyIEUgPSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUluR2FtZVRhc2tFbnVtO1xuICAgIHZhciBCID0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1CdWlsZEVudW07XG4gICAgdmFyIG5lZWRCdWlsZFR5cGUgPSAtMTtcbiAgICB2YXIgbmVlZExldmVsID0gMTtcbiAgICBzd2l0Y2ggKHRhc2tUeXBlKSB7XG4gICAgICBjYXNlIEUuQnVpbGRIb21lOiAgICAgICBuZWVkQnVpbGRUeXBlID0gQi5Qcml2YXRlSG91c2U7IG5lZWRMZXZlbCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSBFLkJ1aWxkVG93ZXI6ICAgICAgbmVlZEJ1aWxkVHlwZSA9IEIuQXJyb3dUb3dlcjsgICBuZWVkTGV2ZWwgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgRS5CdWlsZFdhbGw6ICAgICAgIG5lZWRCdWlsZFR5cGUgPSBCLldhbGw7ICAgICAgICAgIG5lZWRMZXZlbCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSBFLkJ1aWxkTWlsbDogICAgICAgbmVlZEJ1aWxkVHlwZSA9IEIuTWlsbDsgICAgICAgICAgbmVlZExldmVsID0gMTsgYnJlYWs7XG4gICAgICBjYXNlIEUuQnVpbGRCYXJyYWNrczogICBuZWVkQnVpbGRUeXBlID0gQi5CYXJyYWNrczsgICAgICBuZWVkTGV2ZWwgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgRS5VcGdyYWRlSG9tZTogICAgIG5lZWRCdWlsZFR5cGUgPSBCLlByaXZhdGVIb3VzZTsgbmVlZExldmVsID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIEUuVXBncmFkZVRvd2VyOiAgICBuZWVkQnVpbGRUeXBlID0gQi5BcnJvd1Rvd2VyOyAgIG5lZWRMZXZlbCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSBFLlVwZ3JhZGVXYWxsOiAgICAgbmVlZEJ1aWxkVHlwZSA9IEIuV2FsbDsgICAgICAgICAgbmVlZExldmVsID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIEUuVXBncmFkZU1pbGw6ICAgICBuZWVkQnVpbGRUeXBlID0gQi5NaWxsOyAgICAgICAgICBuZWVkTGV2ZWwgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgRS5VcGdyYWRlQmFycmFja3M6IG5lZWRCdWlsZFR5cGUgPSBCLkJhcnJhY2tzOyAgICAgIG5lZWRMZXZlbCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSBFLlVwZ3JhZGVDYXN0bGU6ICAgbmVlZEJ1aWxkVHlwZSA9IEIuQ2FzdGxlQ2VudGVyOyAgbmVlZExldmVsID0gMjsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiByZXR1cm47XG4gICAgfVxuICAgIHZhciBtYXAgPSB0aGlzLmN0ckdhbWUuZ2FtZURhdGEuYnVsaWRQb2ludE1hcDtcbiAgICBmb3IgKHZhciBpZCBpbiBtYXApIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgaWQpKSBjb250aW51ZTtcbiAgICAgIHZhciBiID0gbWFwW2lkXTtcbiAgICAgIGlmIChiLmJ1aWxkQ2ZnLmVudW1WYWx1ZSA9PT0gbmVlZEJ1aWxkVHlwZSAmJiBiLmdldExldmVsKCkgPj0gbmVlZExldmVsKSB7XG4gICAgICAgIHRoaXMuYWRkVGFzayh0YXNrVHlwZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmN0ckdhbWUuZ2FtZURhdGEudGFza0luZm8uaW5kZXggPj0gdGhpcy5jdHJHYW1lLmdhbWVEYXRhLnRhc2tJbmZvLmxpc3QubGVuZ3RoIHx8IHRoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5saXN0W3RoaXMuY3RyR2FtZS5nYW1lRGF0YS50YXNrSW5mby5pbmRleF0gPT0gdCAmJiAodGhpcy5jdHJHYW1lLmdhbWVEYXRhLnRhc2tJbmZvLnN0YWdlID0gMSwgdGhpcy5pbml0VmlldygpLCB0aGlzLmN0ckdhbWUuc2F2ZUdhbWUoKSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5jaGFuZ2VGb2xsb3dNb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdmFyIG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQYXJhbWV0ZXIuRm9sbG93TW9kZSA9IHQ7XG4gICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldEZvbGxvd01vZGUoKTtcbiAgICAgIHN3aXRjaCAoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsUGFyYW1ldGVyLkZvbGxvd01vZGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGUuYnRuQWdnLmdldENoaWxkQnlOYW1lKFwibmRUYWcxXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgZS5idG5BZ2cuZ2V0Q2hpbGRCeU5hbWUoXCJuZFRhZzJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgZS5idG5BZ2cuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBlLlQoJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuR2FtZTA0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGUuYnRuQWdnLmdldENoaWxkQnlOYW1lKFwibmRUYWcxXCIpLmFjdGl2ZSA9ICFlLmN0ckdhbWUuaXNBZ2c7XG4gICAgICAgICAgZS5idG5BZ2cuZ2V0Q2hpbGRCeU5hbWUoXCJuZFRhZzJcIikuYWN0aXZlID0gZS5jdHJHYW1lLmlzQWdnO1xuICAgICAgICAgIGUuYnRuQWdnLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZS5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkdhbWUwNSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5jdHJHYW1lLmlzQWdnKSB7XG4gICAgICB0aGlzLmN0ckdhbWUuY2hhbmdlQWdlKCk7XG4gICAgICBuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4oKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLmluc3RhbmNlID0gbnVsbDtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJFbnRyeVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kQ3RyR2FtZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogJHoxS2luZ2h0RmFsbEdhbWVFZmZlY3QuZGVmYXVsdCxcbiAgICB0b29sdGlwOiBcIlBsYXllclwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImN0ckVmZmVjdFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogJHoxS2luZ2h0RmFsbEdhbWVVSUN0cmwuZGVmYXVsdCxcbiAgICB0b29sdGlwOiBcIkhVRFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImN0clVJXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiRW50cnlcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEVuZW15SWNvblwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkN1cnJlbmN5XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRDb2luXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiQ3VycmVuY3lcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJuZEJ1aWxkQ29pblwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlN0YWdlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRMZXZlbEluZm9cIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJTdGFydCBiYXR0bGVcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5TdGFydEZpZ2h0XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiQWRkIGdvbGRcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5BZGRDb2luXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiUmFsbHlcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5BZ2dcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJQYXVzZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blN1c3BlbmRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJSZXZpdmVcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5SZXZpdmVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJSZXZpdmVcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5SZXZpdmVCcmVha1wiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlBhdXNlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuQnVpbGRJbmZvXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiVGFza1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kVGFza1wiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIlBhdXNlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuVGVzdFwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gbiA9IGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3NdLCBfY3Rvcik7XG59KCR6MUJhc2VVSS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsVUlHYW1lOyJdfQ==