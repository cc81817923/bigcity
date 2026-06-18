
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallHomeTreasureCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fdbdz2M/RJeIud3APotpRT', 'KinghtFallHomeTreasureCtrl');
// _script/KinghtFallHomeTreasureCtrl.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseCtrl = require("BaseCtrl");

var $z1Appcfg = require("Appcfg");

var $z1AudioMgr = require("AudioMgr");

var $z1LogMgr = require("LogMgr");

var $z1SdkMgr = require("SdkMgr");

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

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallHomeTreasureCtrl = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.labNum = null;
    e.ndParent = null;
    e.ndItem = null;
    e.labBox = null;
    e.labTime = null;
    e.btnOne = null;
    e.btnVideo = null;
    e.btnTen = null;
    e.cfgBox = null;
    e.ndInfo = [];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    var t = this;
    this.ndItem.active = false;
    this.initEventListener();
    this.initData();
    this.initView();
    this.cfgBox = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBoxCfgById($z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure);
    this.labBox.string = this.T(this.cfgBox.Name);
    this.initBtnListener();
    var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(this.cfgBox.Cost[0]);
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, e.icon, function (e) {
      t.btnOne.getChildByName("Layout").getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = e;
    });
    this.btnOne.getChildByName("Layout").getChildByName("labNum").getComponent(cc.Label).string = $z1KinghtFallModle["default"].getInstance().numberFomat(this.cfgBox.Cost[1]);
    var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(this.cfgBox.Cost10[0]);
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, n.icon, function (e) {
      t.btnTen.getChildByName("Layout").getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = e;
    });
    this.btnTen.getChildByName("Layout").getChildByName("labNum").getComponent(cc.Label).string = $z1KinghtFallModle["default"].getInstance().numberFomat(this.cfgBox.Cost10[1]);
    this.upView();
    this.btnVideo.active = false;
    this.btnOne.setPosition(-145, this.btnOne.y);
    this.btnTen.setPosition(145, this.btnTen.y);
    this.scheduleOnce(function () {
      t.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 5, t.btnOne, function () {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.box_draw1);
        t.getReward(1, 1);
      });
    }, .5);
  };

  _ctor.prototype.initEventListener = function () {
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.TreasureUpdate, this.initView);
    this.addEvent($z1KinghtFallConfig.KinghtFallEventName.TreasureUpdate2, this.upView);
    this.addEvent($z1Appcfg.BaseEventName.CloseUI, this.onCloseUI);
  };

  _ctor.prototype.initData = function () {
    var t = this;
    var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfg();

    var n = function n(_n) {
      var a = e[_n];
      var o = cc.instantiate(i.ndItem);
      o.parent = i.ndParent;
      o.active = true;
      o.on(cc.Node.EventType.TOUCH_END, function () {
        t.onClick(a);
      }, i);
      var r = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(a.goodID);
      i.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, r.sprBg, function (t) {
        o.getChildByName("sprBg").getComponent(cc.Sprite).spriteFrame = t;
      });
      i.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, r.icon, function (t) {
        o.getChildByName("sprIcon").getComponent(cc.Sprite).spriteFrame = t;
      });
      o.name = "treasure_" + a.ID;
      cc.tween(o.getChildByName("ndArr")).set({
        y: 40
      }).to(.2, {
        y: 45
      }).to(.4, {
        y: 35
      }).to(.2, {
        y: 40
      }).union().repeatForever().start();
      i.ndInfo.push({
        cfg: a,
        node: o,
        info: $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTreasureLevel(a.ID)
      });
    };

    var i = this;

    for (var a = 0; a < e.length; a++) {
      n(a);
    }
  };

  _ctor.prototype.initView = function () {
    var t = 0;

    for (var e = 0; e < this.ndInfo.length; e++) {
      (i = this.ndInfo[e]).info = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTreasureLevel(i.cfg.ID);
      i.info && t++;
    }

    this.ndInfo.sort(function (t, e) {
      if (t.info && e.info) {
        if (t.cfg.Quality == e.cfg.Quality) {
          return t.cfg.ID - e.cfg.ID;
        } else {
          return t.cfg.Quality - e.cfg.Quality;
        }
      } else {
        if (t.info) {
          return -1;
        } else {
          if (e.info) {
            return 1;
          } else {
            if (t.cfg.Quality == e.cfg.Quality) {
              return t.cfg.ID - e.cfg.ID;
            } else {
              return t.cfg.Quality - e.cfg.Quality;
            }
          }
        }
      }
    });
    var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getGoldNum();

    for (e = 0; e < this.ndInfo.length; e++) {
      var i;
      (i = this.ndInfo[e]).node.zIndex = e;

      if (i.info) {
        i.node.getChildByName("labNum").getComponent(cc.Label).string = $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTrea02), i.info.level);
        i.node.getChildByName("ndMask").active = false;
        var a = false;
        i.info.level < i.cfg.levelInfo.length && i.cfg.levelInfo[i.info.level - 1].GoldCost <= n && i.cfg.levelInfo[i.info.level - 1].PieceCost <= i.info.frame && (a = true);
        i.node.getChildByName("ndArr").active = a;
        var o = i.node.getChildByName("ndPro");

        if (i.info.level >= i.cfg.levelInfo.length) {
          var maxCost = i.cfg.levelInfo[i.cfg.levelInfo.length - 1].PieceCost;
          o.active = true;
          o.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = i.info.frame / maxCost;
          o.getChildByName("labPro").getComponent(cc.Label).string = i.info.frame + "/" + maxCost;
        } else {
          o.active = true;
          o.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = i.info.frame / i.cfg.levelInfo[i.info.level - 1].PieceCost;
          o.getChildByName("labPro").getComponent(cc.Label).string = i.info.frame + "/" + i.cfg.levelInfo[i.info.level - 1].PieceCost;
        }
      } else {
        i.node.getChildByName("labNum").getComponent(cc.Label).string = this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTrea01);
        i.node.getChildByName("ndMask").active = true;
        i.node.getChildByName("ndArr").active = false;
        i.node.getChildByName("ndPro").active = false;
      }
    }

    this.labNum.string = t + "/" + this.ndInfo.length;
  };

  _ctor.prototype.onClick = function (t) {
    $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UITreasureInfo, $z1Config.UIID.UINONE, t);
  };

  _ctor.prototype.initBtnListener = function () {
    var t = this;
    this.btnOne.on(cc.Node.EventType.TOUCH_END, function () {
      var e = {
        id: t.cfgBox.Cost[0],
        num: t.cfgBox.Cost[1]
      };

      if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().trySub([e], true)) {
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().SubGood([e]);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.box_draw1);
        t.getReward(1, 1);
      }
    }, this);
    this.btnTen.on(cc.Node.EventType.TOUCH_END, function () {
      var e = {
        id: t.cfgBox.Cost10[0],
        num: t.cfgBox.Cost10[1]
      };

      if ($z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().trySub([e], true)) {
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().SubGood([e]);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.box_draw10);
        t.getReward(10, 2);
      }
    }, this);
    this.btnVideo.on(cc.Node.EventType.TOUCH_END, function () {
      $z1SdkMgr.SdkMgr.getInstance().playVideo($z1SdkMgr.AdType.AdFreeTime, function () {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.box_1);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_box_1_Y, $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage());
        var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getShopInfo($z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure);
        e || (e = {
          id: $z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure,
          time: 0,
          video: 0
        });
        e.video++;

        if (e.video >= t.cfgBox.VedioCount) {
          e.video -= t.cfgBox.VedioCount;
          t.getReward(1, 3);
        } else {
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setShopInfo(e);
          t.upView();
        }
      });
    }, this);
  };

  _ctor.prototype.getReward = function (t, e) {
    $z1AudioMgr.AudioMgr.getInstance().playEffect($z1KinghtFallConfig.KinghtFallAudioId.box_treasure);
    var n = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getShopInfo($z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure);
    n || (n = {
      id: $z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure,
      time: 0,
      video: 0
    });
    var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().getTaskInfo();

    if (i.type == $z1KinghtFallEnum.KinghtFallEnumTaskEnum.TreasureCount) {
      i.num += t;
      $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().setTaskInfo(i);
    }

    var a = [];

    var o = function o(t) {
      var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTreasureLevel(t);
      var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfgById(t);
      var i = 0;

      for (var o = e ? e.level : 1; o <= n.levelInfo.length; o++) {
        i += n.levelInfo[o - 1].PieceCost;
      }

      if (e) {
        if (e.frame >= i) {
          a.push({
            item: {
              id: n.Conversion[0],
              num: n.Conversion[1]
            },
            isNew: false
          });
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().addRewards([{
            id: n.Conversion[0],
            num: n.Conversion[1]
          }]);
        } else {
          e.frame++;
          a.push({
            item: {
              id: n.goodID,
              num: 1
            },
            isNew: false
          });
          $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setTreasureLevel(e);
        }
      } else {
        e = {
          id: t,
          level: 1,
          frame: 0
        };
        a.push({
          item: {
            id: n.goodID,
            num: 1
          },
          isNew: true
        });
        $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setTreasureLevel(e);
      }
    };

    var r = function r() {
      var t;
      var e = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTreasureLevel($z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SignOfMultiplication);

      if (e) {
        var n = null === (t = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfgById($z1KinghtFallEnum.KinghtFallEnumTreasureEnum.SignOfMultiplication).levelInfo[e.level - 1]) || undefined === t ? undefined : t.param;

        if (n && Math.random() <= n[0]) {
          $z1LogMgr.LogMgr.getInstance().info("***Talisman of Multiplication");
          return true;
        }
      }

      return false;
    };

    for (var s = 0; s < t; s++) {
      var h = undefined;
      n.time++;

      if (n.time >= this.cfgBox.GuarantNumber) {
        n.time -= this.cfgBox.GuarantNumber;
        h = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBannerCfg(this.cfgBox.GuarantBanner);
      } else {
        h = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBannerCfg(this.cfgBox.Banner);
      }

      var p = [];

      for (var f = 0; f < h.length; f++) {
        var y = h[f];
        p.push({
          id: y.RewardID,
          weight: y.Weight
        });
      }

      var b = $z1Utils.Utils.weight_rand(p);
      $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfgById(b.id).Quality <= 2 && (n.time = 0);
      o(b.id);
      r() && o(b.id);
    }

    $z1UIMgr.UIMgr.getInstance().openUI($z1KinghtFallConfig.KinghtFallUIID.UITreasureReward, $z1Config.UIID.UINONE, a, e);
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setShopInfo(n);
    this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.UpdateRedPoint, 8);
    this.initView();
    this.upView();
  };

  _ctor.prototype.upView = function () {
    var t = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getShopInfo($z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure);
    t || (t = {
      id: $z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure,
      time: 0,
      video: 0
    });
    this.labTime.string = $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTrea03), this.cfgBox.GuarantNumber - t.time);
    this.btnVideo.getChildByName("Layout").getChildByName("labNum").getComponent(cc.Label).string = "x" + $z1SdkMgr.AdVideoCost + " " + t.video + "/" + this.cfgBox.VedioCount;
  };

  _ctor.prototype.onCloseUI = function (t) {
    t == $z1KinghtFallConfig.KinghtFallUIID.UITreasureReward && this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.NewbieGuide, 5, this.ndInfo[0].node);
  };

  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Box"
  })], _ctor.prototype, "labNum", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Node info"
  })], _ctor.prototype, "ndParent", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Node info"
  })], _ctor.prototype, "ndItem", undefined);
  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Box"
  })], _ctor.prototype, "labBox", undefined);
  cc__decorate([ccp_property({
    type: cc.RichText,
    tooltip: "Pity count"
  })], _ctor.prototype, "labTime", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Draw once"
  })], _ctor.prototype, "btnOne", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Draw once"
  })], _ctor.prototype, "btnVideo", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Draw once"
  })], _ctor.prototype, "btnTen", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_KinghtFallHomeTreasureCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxIb21lVHJlYXN1cmVDdHJsLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VDdHJsIiwicmVxdWlyZSIsIiR6MUFwcGNmZyIsIiR6MUF1ZGlvTWdyIiwiJHoxTG9nTWdyIiwiJHoxU2RrTWdyIiwiJHoxVUlNZ3IiLCIkejFVdGlscyIsIiR6MUNvbmZpZyIsIiR6MUdhbWVUcmFja0RhdGFFdmVudCIsIiR6MVBsYXllck1nciIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsVGV4dENvbmZpZyIsIiR6MUtpbmdodEZhbGxFbnVtIiwiJHoxS2luZ2h0RmFsbERhdGFNZ3IiLCIkejFLaW5naHRGYWxsUGxheWVyTWdyIiwiJHoxS2luZ2h0RmFsbE1vZGxlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxIb21lVHJlYXN1cmVDdHJsIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibGFiTnVtIiwibmRQYXJlbnQiLCJuZEl0ZW0iLCJsYWJCb3giLCJsYWJUaW1lIiwiYnRuT25lIiwiYnRuVmlkZW8iLCJidG5UZW4iLCJjZmdCb3giLCJuZEluZm8iLCJwcm90b3R5cGUiLCJzdGFydCIsImFjdGl2ZSIsImluaXRFdmVudExpc3RlbmVyIiwiaW5pdERhdGEiLCJpbml0VmlldyIsIktpbmdodEZhbGxEYXRhTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRCb3hDZmdCeUlkIiwiS2luZ2h0RmFsbEVudW1TaG9wRW51bSIsIlRyZWFzdXJlIiwic3RyaW5nIiwiVCIsIk5hbWUiLCJpbml0QnRuTGlzdGVuZXIiLCJnZXRHb29kc0NmZ0J5SWQiLCJDb3N0IiwibG9hZFNwcml0ZUZyYW1lIiwiS2luZ2h0RmFsbEJ1bmRlbE5hbWUiLCJJY29uR29vZCIsImljb24iLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiTGFiZWwiLCJudW1iZXJGb21hdCIsIm4iLCJDb3N0MTAiLCJ1cFZpZXciLCJzZXRQb3NpdGlvbiIsInkiLCJzY2hlZHVsZU9uY2UiLCJzZW5kRXZlbnQiLCJLaW5naHRGYWxsRXZlbnROYW1lIiwiTmV3YmllR3VpZGUiLCJQbGF5ZXJNZ3IiLCJnZXRUcmFja0RhdGEiLCJ5b3VtZW5nVHJhY2siLCJUcmFja0lkIiwiYm94X2RyYXcxIiwiZ2V0UmV3YXJkIiwiYWRkRXZlbnQiLCJUcmVhc3VyZVVwZGF0ZSIsIlRyZWFzdXJlVXBkYXRlMiIsIkJhc2VFdmVudE5hbWUiLCJDbG9zZVVJIiwib25DbG9zZVVJIiwiZ2V0VHJlYXN1cmVDZmciLCJhIiwibyIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib25DbGljayIsInIiLCJnb29kSUQiLCJzcHJCZyIsIm5hbWUiLCJJRCIsInR3ZWVuIiwic2V0IiwidG8iLCJ1bmlvbiIsInJlcGVhdEZvcmV2ZXIiLCJwdXNoIiwiY2ZnIiwibm9kZSIsImluZm8iLCJLaW5naHRGYWxsUGxheWVyTWdyIiwiZ2V0VXNlckRhdGEiLCJnZXRUcmVhc3VyZUxldmVsIiwibGVuZ3RoIiwic29ydCIsIlF1YWxpdHkiLCJnZXRHb2xkTnVtIiwiekluZGV4IiwiVXRpbHMiLCJTdHJpbmdGb3JtYXQiLCJLaW5naHRGYWxsVGV4dENvbmZpZyIsIkhvbWVUcmVhMDIiLCJsZXZlbCIsImxldmVsSW5mbyIsIkdvbGRDb3N0IiwiUGllY2VDb3N0IiwiZnJhbWUiLCJtYXhDb3N0IiwiZmlsbFJhbmdlIiwiSG9tZVRyZWEwMSIsIlVJTWdyIiwib3BlblVJIiwiS2luZ2h0RmFsbFVJSUQiLCJVSVRyZWFzdXJlSW5mbyIsIlVJSUQiLCJVSU5PTkUiLCJpZCIsIm51bSIsInRyeVN1YiIsIlN1Ykdvb2QiLCJib3hfZHJhdzEwIiwiU2RrTWdyIiwicGxheVZpZGVvIiwiQWRUeXBlIiwiQWRGcmVlVGltZSIsImJveF8xIiwicGF5X2JveF8xX1kiLCJnZXRNYXhTdGFnZSIsImdldFNob3BJbmZvIiwidGltZSIsInZpZGVvIiwiVmVkaW9Db3VudCIsInNldFNob3BJbmZvIiwiQXVkaW9NZ3IiLCJwbGF5RWZmZWN0IiwiS2luZ2h0RmFsbEF1ZGlvSWQiLCJib3hfdHJlYXN1cmUiLCJnZXRNaXNzaW9uRGF0YSIsImdldFRhc2tJbmZvIiwidHlwZSIsIktpbmdodEZhbGxFbnVtVGFza0VudW0iLCJUcmVhc3VyZUNvdW50Iiwic2V0VGFza0luZm8iLCJnZXRUcmVhc3VyZUNmZ0J5SWQiLCJpdGVtIiwiQ29udmVyc2lvbiIsImlzTmV3IiwiYWRkUmV3YXJkcyIsInNldFRyZWFzdXJlTGV2ZWwiLCJLaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bSIsIlNpZ25PZk11bHRpcGxpY2F0aW9uIiwidW5kZWZpbmVkIiwicGFyYW0iLCJNYXRoIiwicmFuZG9tIiwiTG9nTWdyIiwicyIsImgiLCJHdWFyYW50TnVtYmVyIiwiZ2V0QmFubmVyQ2ZnIiwiR3VhcmFudEJhbm5lciIsIkJhbm5lciIsInAiLCJmIiwiUmV3YXJkSUQiLCJ3ZWlnaHQiLCJXZWlnaHQiLCJiIiwid2VpZ2h0X3JhbmQiLCJVSVRyZWFzdXJlUmV3YXJkIiwiVXBkYXRlUmVkUG9pbnQiLCJIb21lVHJlYTAzIiwiQWRWaWRlb0Nvc3QiLCJ0b29sdGlwIiwiUmljaFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0Is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WSxDQUFDLENBQUMwQixXQUFELENBQUQsRUFBZ0JNLEtBQWhCLENBQW5CO0FBQ0QsQ0F4Vm9DLENBd1ZuQzFCLFdBQVcsV0F4VndCLENBQXJDOztBQXlWQUYsT0FBTyxXQUFQLEdBQWtCMEIsOEJBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciAkejFCYXNlQ3RybCA9IHJlcXVpcmUoXCJCYXNlQ3RybFwiKTtcbnZhciAkejFBcHBjZmcgPSByZXF1aXJlKFwiQXBwY2ZnXCIpO1xudmFyICR6MUF1ZGlvTWdyID0gcmVxdWlyZShcIkF1ZGlvTWdyXCIpO1xudmFyICR6MUxvZ01nciA9IHJlcXVpcmUoXCJMb2dNZ3JcIik7XG52YXIgJHoxU2RrTWdyID0gcmVxdWlyZShcIlNka01nclwiKTtcbnZhciAkejFVSU1nciA9IHJlcXVpcmUoXCJVSU1nclwiKTtcbnZhciAkejFVdGlscyA9IHJlcXVpcmUoXCJVdGlsc1wiKTtcbnZhciAkejFDb25maWcgPSByZXF1aXJlKFwiQ29uZmlnXCIpO1xudmFyICR6MUdhbWVUcmFja0RhdGFFdmVudCA9IHJlcXVpcmUoXCJHYW1lVHJhY2tEYXRhRXZlbnRcIik7XG52YXIgJHoxUGxheWVyTWdyID0gcmVxdWlyZShcIlBsYXllck1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxNb2RsZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsTW9kbGVcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbEhvbWVUcmVhc3VyZUN0cmwgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5sYWJOdW0gPSBudWxsO1xuICAgIGUubmRQYXJlbnQgPSBudWxsO1xuICAgIGUubmRJdGVtID0gbnVsbDtcbiAgICBlLmxhYkJveCA9IG51bGw7XG4gICAgZS5sYWJUaW1lID0gbnVsbDtcbiAgICBlLmJ0bk9uZSA9IG51bGw7XG4gICAgZS5idG5WaWRlbyA9IG51bGw7XG4gICAgZS5idG5UZW4gPSBudWxsO1xuICAgIGUuY2ZnQm94ID0gbnVsbDtcbiAgICBlLm5kSW5mbyA9IFtdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLm5kSXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVyKCk7XG4gICAgdGhpcy5pbml0RGF0YSgpO1xuICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB0aGlzLmNmZ0JveCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0Qm94Q2ZnQnlJZCgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVNob3BFbnVtLlRyZWFzdXJlKTtcbiAgICB0aGlzLmxhYkJveC5zdHJpbmcgPSB0aGlzLlQodGhpcy5jZmdCb3guTmFtZSk7XG4gICAgdGhpcy5pbml0QnRuTGlzdGVuZXIoKTtcbiAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0R29vZHNDZmdCeUlkKHRoaXMuY2ZnQm94LkNvc3RbMF0pO1xuICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuSWNvbkdvb2QsIGUuaWNvbiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHQuYnRuT25lLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwic3BySWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGU7XG4gICAgfSk7XG4gICAgdGhpcy5idG5PbmUuZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkejFLaW5naHRGYWxsTW9kbGUuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLm51bWJlckZvbWF0KHRoaXMuY2ZnQm94LkNvc3RbMV0pO1xuICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHb29kc0NmZ0J5SWQodGhpcy5jZmdCb3guQ29zdDEwWzBdKTtcbiAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCBuLmljb24sIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0LmJ0blRlbi5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcInNwckljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBlO1xuICAgIH0pO1xuICAgIHRoaXMuYnRuVGVuLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5udW1iZXJGb21hdCh0aGlzLmNmZ0JveC5Db3N0MTBbMV0pO1xuICAgIHRoaXMudXBWaWV3KCk7XG4gICAgdGhpcy5idG5WaWRlby5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bk9uZS5zZXRQb3NpdGlvbigtMTQ1LCB0aGlzLmJ0bk9uZS55KTtcbiAgICB0aGlzLmJ0blRlbi5zZXRQb3NpdGlvbigxNDUsIHRoaXMuYnRuVGVuLnkpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5OZXdiaWVHdWlkZSwgNSwgdC5idG5PbmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ib3hfZHJhdzEpO1xuICAgICAgICB0LmdldFJld2FyZCgxLCAxKTtcbiAgICAgIH0pO1xuICAgIH0sIC41KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlRyZWFzdXJlVXBkYXRlLCB0aGlzLmluaXRWaWV3KTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5UcmVhc3VyZVVwZGF0ZTIsIHRoaXMudXBWaWV3KTtcbiAgICB0aGlzLmFkZEV2ZW50KCR6MUFwcGNmZy5CYXNlRXZlbnROYW1lLkNsb3NlVUksIHRoaXMub25DbG9zZVVJKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJlYXN1cmVDZmcoKTtcbiAgICB2YXIgbiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICB2YXIgYSA9IGVbbl07XG4gICAgICB2YXIgbyA9IGNjLmluc3RhbnRpYXRlKGkubmRJdGVtKTtcbiAgICAgIG8ucGFyZW50ID0gaS5uZFBhcmVudDtcbiAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25DbGljayhhKTtcbiAgICAgIH0sIGkpO1xuICAgICAgdmFyIHIgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEdvb2RzQ2ZnQnlJZChhLmdvb2RJRCk7XG4gICAgICBpLmxvYWRTcHJpdGVGcmFtZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCByLnNwckJnLCBmdW5jdGlvbiAodCkge1xuICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwic3ByQmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0O1xuICAgICAgfSk7XG4gICAgICBpLmxvYWRTcHJpdGVGcmFtZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCByLmljb24sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJzcHJJY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdDtcbiAgICAgIH0pO1xuICAgICAgby5uYW1lID0gXCJ0cmVhc3VyZV9cIiArIGEuSUQ7XG4gICAgICBjYy50d2VlbihvLmdldENoaWxkQnlOYW1lKFwibmRBcnJcIikpLnNldCh7XG4gICAgICAgIHk6IDQwXG4gICAgICB9KS50byguMiwge1xuICAgICAgICB5OiA0NVxuICAgICAgfSkudG8oLjQsIHtcbiAgICAgICAgeTogMzVcbiAgICAgIH0pLnRvKC4yLCB7XG4gICAgICAgIHk6IDQwXG4gICAgICB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgaS5uZEluZm8ucHVzaCh7XG4gICAgICAgIGNmZzogYSxcbiAgICAgICAgbm9kZTogbyxcbiAgICAgICAgaW5mbzogJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRUcmVhc3VyZUxldmVsKGEuSUQpXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBpID0gdGhpcztcbiAgICBmb3IgKHZhciBhID0gMDsgYSA8IGUubGVuZ3RoOyBhKyspIHtcbiAgICAgIG4oYSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAwO1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5uZEluZm8ubGVuZ3RoOyBlKyspIHtcbiAgICAgIChpID0gdGhpcy5uZEluZm9bZV0pLmluZm8gPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFRyZWFzdXJlTGV2ZWwoaS5jZmcuSUQpO1xuICAgICAgaS5pbmZvICYmIHQrKztcbiAgICB9XG4gICAgdGhpcy5uZEluZm8uc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgaWYgKHQuaW5mbyAmJiBlLmluZm8pIHtcbiAgICAgICAgaWYgKHQuY2ZnLlF1YWxpdHkgPT0gZS5jZmcuUXVhbGl0eSkge1xuICAgICAgICAgIHJldHVybiB0LmNmZy5JRCAtIGUuY2ZnLklEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0LmNmZy5RdWFsaXR5IC0gZS5jZmcuUXVhbGl0eTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHQuaW5mbykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZS5pbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHQuY2ZnLlF1YWxpdHkgPT0gZS5jZmcuUXVhbGl0eSkge1xuICAgICAgICAgICAgICByZXR1cm4gdC5jZmcuSUQgLSBlLmNmZy5JRDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB0LmNmZy5RdWFsaXR5IC0gZS5jZmcuUXVhbGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0R29sZE51bSgpO1xuICAgIGZvciAoZSA9IDA7IGUgPCB0aGlzLm5kSW5mby5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIGk7XG4gICAgICAoaSA9IHRoaXMubmRJbmZvW2VdKS5ub2RlLnpJbmRleCA9IGU7XG4gICAgICBpZiAoaS5pbmZvKSB7XG4gICAgICAgIGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICR6MVV0aWxzLlV0aWxzLlN0cmluZ0Zvcm1hdCh0aGlzLlQoJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuSG9tZVRyZWEwMiksIGkuaW5mby5sZXZlbCk7XG4gICAgICAgIGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5kTWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGEgPSBmYWxzZTtcbiAgICAgICAgaS5pbmZvLmxldmVsIDwgaS5jZmcubGV2ZWxJbmZvLmxlbmd0aCAmJiBpLmNmZy5sZXZlbEluZm9baS5pbmZvLmxldmVsIC0gMV0uR29sZENvc3QgPD0gbiAmJiBpLmNmZy5sZXZlbEluZm9baS5pbmZvLmxldmVsIC0gMV0uUGllY2VDb3N0IDw9IGkuaW5mby5mcmFtZSAmJiAoYSA9IHRydWUpO1xuICAgICAgICBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuZEFyclwiKS5hY3RpdmUgPSBhO1xuICAgICAgICB2YXIgbyA9IGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5kUHJvXCIpO1xuICAgICAgICBpZiAoaS5pbmZvLmxldmVsID49IGkuY2ZnLmxldmVsSW5mby5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgbWF4Q29zdCA9IGkuY2ZnLmxldmVsSW5mb1tpLmNmZy5sZXZlbEluZm8ubGVuZ3RoIC0gMV0uUGllY2VDb3N0O1xuICAgICAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwic3ByUHJvXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IGkuaW5mby5mcmFtZSAvIG1heENvc3Q7XG4gICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImxhYlByb1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkuaW5mby5mcmFtZSArIFwiL1wiICsgbWF4Q29zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcInNwclByb1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSBpLmluZm8uZnJhbWUgLyBpLmNmZy5sZXZlbEluZm9baS5pbmZvLmxldmVsIC0gMV0uUGllY2VDb3N0O1xuICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJsYWJQcm9cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpLmluZm8uZnJhbWUgKyBcIi9cIiArIGkuY2ZnLmxldmVsSW5mb1tpLmluZm8ubGV2ZWwgLSAxXS5QaWVjZUNvc3Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuVCgkejFLaW5naHRGYWxsVGV4dENvbmZpZy5LaW5naHRGYWxsVGV4dENvbmZpZy5Ib21lVHJlYTAxKTtcbiAgICAgICAgaS5ub2RlLmdldENoaWxkQnlOYW1lKFwibmRNYXNrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5kQXJyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuZFByb1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYWJOdW0uc3RyaW5nID0gdCArIFwiL1wiICsgdGhpcy5uZEluZm8ubGVuZ3RoO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgJHoxVUlNZ3IuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSVRyZWFzdXJlSW5mbywgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCB0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmluaXRCdG5MaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5idG5PbmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IHtcbiAgICAgICAgaWQ6IHQuY2ZnQm94LkNvc3RbMF0sXG4gICAgICAgIG51bTogdC5jZmdCb3guQ29zdFsxXVxuICAgICAgfTtcbiAgICAgIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS50cnlTdWIoW2VdLCB0cnVlKSkge1xuICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5TdWJHb29kKFtlXSk7XG4gICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuYm94X2RyYXcxKTtcbiAgICAgICAgdC5nZXRSZXdhcmQoMSwgMSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5idG5UZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IHtcbiAgICAgICAgaWQ6IHQuY2ZnQm94LkNvc3QxMFswXSxcbiAgICAgICAgbnVtOiB0LmNmZ0JveC5Db3N0MTBbMV1cbiAgICAgIH07XG4gICAgICBpZiAoJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkudHJ5U3ViKFtlXSwgdHJ1ZSkpIHtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuU3ViR29vZChbZV0pO1xuICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLmJveF9kcmF3MTApO1xuICAgICAgICB0LmdldFJld2FyZCgxMCwgMik7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5idG5WaWRlby5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR6MVNka01nci5TZGtNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW8oJHoxU2RrTWdyLkFkVHlwZS5BZEZyZWVUaW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuYm94XzEpO1xuICAgICAgICAkejFQbGF5ZXJNZ3IuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKCR6MUdhbWVUcmFja0RhdGFFdmVudC5UcmFja0lkLnBheV9ib3hfMV9ZLCAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldE1heFN0YWdlKCkpO1xuICAgICAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0U2hvcEluZm8oJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1TaG9wRW51bS5UcmVhc3VyZSk7XG4gICAgICAgIGUgfHwgKGUgPSB7XG4gICAgICAgICAgaWQ6ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtU2hvcEVudW0uVHJlYXN1cmUsXG4gICAgICAgICAgdGltZTogMCxcbiAgICAgICAgICB2aWRlbzogMFxuICAgICAgICB9KTtcbiAgICAgICAgZS52aWRlbysrO1xuICAgICAgICBpZiAoZS52aWRlbyA+PSB0LmNmZ0JveC5WZWRpb0NvdW50KSB7XG4gICAgICAgICAgZS52aWRlbyAtPSB0LmNmZ0JveC5WZWRpb0NvdW50O1xuICAgICAgICAgIHQuZ2V0UmV3YXJkKDEsIDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuc2V0U2hvcEluZm8oZSk7XG4gICAgICAgICAgdC51cFZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgdGhpcyk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRSZXdhcmQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICR6MUF1ZGlvTWdyLkF1ZGlvTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLmJveF90cmVhc3VyZSk7XG4gICAgdmFyIG4gPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFNob3BJbmZvKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtU2hvcEVudW0uVHJlYXN1cmUpO1xuICAgIG4gfHwgKG4gPSB7XG4gICAgICBpZDogJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1TaG9wRW51bS5UcmVhc3VyZSxcbiAgICAgIHRpbWU6IDAsXG4gICAgICB2aWRlbzogMFxuICAgIH0pO1xuICAgIHZhciBpID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5nZXRUYXNrSW5mbygpO1xuICAgIGlmIChpLnR5cGUgPT0gJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UYXNrRW51bS5UcmVhc3VyZUNvdW50KSB7XG4gICAgICBpLm51bSArPSB0O1xuICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbkRhdGEoKS5zZXRUYXNrSW5mbyhpKTtcbiAgICB9XG4gICAgdmFyIGEgPSBbXTtcbiAgICB2YXIgbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0VHJlYXN1cmVMZXZlbCh0KTtcbiAgICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmVhc3VyZUNmZ0J5SWQodCk7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBmb3IgKHZhciBvID0gZSA/IGUubGV2ZWwgOiAxOyBvIDw9IG4ubGV2ZWxJbmZvLmxlbmd0aDsgbysrKSB7XG4gICAgICAgIGkgKz0gbi5sZXZlbEluZm9bbyAtIDFdLlBpZWNlQ29zdDtcbiAgICAgIH1cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGlmIChlLmZyYW1lID49IGkpIHtcbiAgICAgICAgICBhLnB1c2goe1xuICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICBpZDogbi5Db252ZXJzaW9uWzBdLFxuICAgICAgICAgICAgICBudW06IG4uQ29udmVyc2lvblsxXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTmV3OiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmFkZFJld2FyZHMoW3tcbiAgICAgICAgICAgIGlkOiBuLkNvbnZlcnNpb25bMF0sXG4gICAgICAgICAgICBudW06IG4uQ29udmVyc2lvblsxXVxuICAgICAgICAgIH1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLmZyYW1lKys7XG4gICAgICAgICAgYS5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgICAgaWQ6IG4uZ29vZElELFxuICAgICAgICAgICAgICBudW06IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc05ldzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldFRyZWFzdXJlTGV2ZWwoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSB7XG4gICAgICAgICAgaWQ6IHQsXG4gICAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgICAgZnJhbWU6IDBcbiAgICAgICAgfTtcbiAgICAgICAgYS5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBpZDogbi5nb29kSUQsXG4gICAgICAgICAgICBudW06IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzTmV3OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldFRyZWFzdXJlTGV2ZWwoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdmFyIGUgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFRyZWFzdXJlTGV2ZWwoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1UcmVhc3VyZUVudW0uU2lnbk9mTXVsdGlwbGljYXRpb24pO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIG4gPSBudWxsID09PSAodCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJlYXN1cmVDZmdCeUlkKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlNpZ25PZk11bHRpcGxpY2F0aW9uKS5sZXZlbEluZm9bZS5sZXZlbCAtIDFdKSB8fCB1bmRlZmluZWQgPT09IHQgPyB1bmRlZmluZWQgOiB0LnBhcmFtO1xuICAgICAgICBpZiAobiAmJiBNYXRoLnJhbmRvbSgpIDw9IG5bMF0pIHtcbiAgICAgICAgICAkejFMb2dNZ3IuTG9nTWdyLmdldEluc3RhbmNlKCkuaW5mbyhcIioqKlRhbGlzbWFuIG9mIE11bHRpcGxpY2F0aW9uXCIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IHQ7IHMrKykge1xuICAgICAgdmFyIGggPSB1bmRlZmluZWQ7XG4gICAgICBuLnRpbWUrKztcbiAgICAgIGlmIChuLnRpbWUgPj0gdGhpcy5jZmdCb3guR3VhcmFudE51bWJlcikge1xuICAgICAgICBuLnRpbWUgLT0gdGhpcy5jZmdCb3guR3VhcmFudE51bWJlcjtcbiAgICAgICAgaCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0QmFubmVyQ2ZnKHRoaXMuY2ZnQm94Lkd1YXJhbnRCYW5uZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaCA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0QmFubmVyQ2ZnKHRoaXMuY2ZnQm94LkJhbm5lcik7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IFtdO1xuICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCBoLmxlbmd0aDsgZisrKSB7XG4gICAgICAgIHZhciB5ID0gaFtmXTtcbiAgICAgICAgcC5wdXNoKHtcbiAgICAgICAgICBpZDogeS5SZXdhcmRJRCxcbiAgICAgICAgICB3ZWlnaHQ6IHkuV2VpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIGIgPSAkejFVdGlscy5VdGlscy53ZWlnaHRfcmFuZChwKTtcbiAgICAgICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJlYXN1cmVDZmdCeUlkKGIuaWQpLlF1YWxpdHkgPD0gMiAmJiAobi50aW1lID0gMCk7XG4gICAgICBvKGIuaWQpO1xuICAgICAgcigpICYmIG8oYi5pZCk7XG4gICAgfVxuICAgICR6MVVJTWdyLlVJTWdyLmdldEluc3RhbmNlKCkub3BlblVJKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFVJSUQuVUlUcmVhc3VyZVJld2FyZCwgJHoxQ29uZmlnLlVJSUQuVUlOT05FLCBhLCBlKTtcbiAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldFNob3BJbmZvKG4pO1xuICAgIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5VcGRhdGVSZWRQb2ludCwgOCk7XG4gICAgdGhpcy5pbml0VmlldygpO1xuICAgIHRoaXMudXBWaWV3KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS51cFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFNob3BJbmZvKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtU2hvcEVudW0uVHJlYXN1cmUpO1xuICAgIHQgfHwgKHQgPSB7XG4gICAgICBpZDogJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1TaG9wRW51bS5UcmVhc3VyZSxcbiAgICAgIHRpbWU6IDAsXG4gICAgICB2aWRlbzogMFxuICAgIH0pO1xuICAgIHRoaXMubGFiVGltZS5zdHJpbmcgPSAkejFVdGlscy5VdGlscy5TdHJpbmdGb3JtYXQodGhpcy5UKCR6MUtpbmdodEZhbGxUZXh0Q29uZmlnLktpbmdodEZhbGxUZXh0Q29uZmlnLkhvbWVUcmVhMDMpLCB0aGlzLmNmZ0JveC5HdWFyYW50TnVtYmVyIC0gdC50aW1lKTtcbiAgICB0aGlzLmJ0blZpZGVvLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJ4XCIgKyAkejFTZGtNZ3IuQWRWaWRlb0Nvc3QgKyBcIiBcIiArIHQudmlkZW8gKyBcIi9cIiArIHRoaXMuY2ZnQm94LlZlZGlvQ291bnQ7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkNsb3NlVUkgPSBmdW5jdGlvbiAodCkge1xuICAgIHQgPT0gJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsVUlJRC5VSVRyZWFzdXJlUmV3YXJkICYmIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5OZXdiaWVHdWlkZSwgNSwgdGhpcy5uZEluZm9bMF0ubm9kZSk7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICB0b29sdGlwOiBcIkJveFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImxhYk51bVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIk5vZGUgaW5mb1wiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcIm5kUGFyZW50XCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiTm9kZSBpbmZvXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRJdGVtXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICB0b29sdGlwOiBcIkJveFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImxhYkJveFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuUmljaFRleHQsXG4gICAgdG9vbHRpcDogXCJQaXR5IGNvdW50XCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibGFiVGltZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkRyYXcgb25jZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0bk9uZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkRyYXcgb25jZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blZpZGVvXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiRHJhdyBvbmNlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuVGVuXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzXSwgX2N0b3IpO1xufSgkejFCYXNlQ3RybC5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9LaW5naHRGYWxsSG9tZVRyZWFzdXJlQ3RybDsiXX0=