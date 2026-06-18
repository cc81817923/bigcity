
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUITreasureReward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd78b6pZT9FP87HbhClRTP/O', 'KinghtFallUITreasureReward');
// _script/KinghtFallUITreasureReward.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1AudioMgr = require("AudioMgr");

var $z1LogMgr = require("LogMgr");

var $z1PoolMgr = require("PoolMgr");

var $z1SdkMgr = require("SdkMgr");

var $z1Utils = require("Utils");

var $z1GameTrackDataEvent = require("GameTrackDataEvent");

var $z1PlayerMgr = require("PlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");

var $z1KinghtFallEnum = require("KinghtFallEnum");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var $z1KinghtFallUtilLayout = require("KinghtFallUtilLayout");

var $z1KinghtFallItemGood = require("KinghtFallItemGood");

var $z1KinghtFallItemTreasure = require("KinghtFallItemTreasure");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUITreasureReward = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ndCtr = null;
    e.labTime = null;
    e.spAni = null;
    e.ndLight = null;
    e.btnClose = null;
    e.btnOne = null;
    e.btnVideo = null;
    e.btnTen = null;
    e.bgOpacity = 230;
    e.getSkillList = [];
    e.type = 0;
    e.cfgBox = null;
    e.index = 0;
    e.canAni = false;
    e.time = 0;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (e, n) {
    t.prototype.init.call(this);
    this.getSkillList = e;
    this.type = n;
  };

  _ctor.prototype.onLoad = function () {
    var t = this;
    this.spAni.setCompleteListener(function () {
      "start" == t.spAni.animation && (t.canAni = true);
    });
  };

  _ctor.prototype.start = function () {
    var t = this;
    this.ndCtr.init(this.getSkillList.length);
    this.ndLight.x = this.ndLight.width + cc.winSize.width;
    this.stareAni();
    this.cfgBox = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBoxCfgById($z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure);
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
  };

  _ctor.prototype.initBtnListener = function () {
    var t = this;
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeUI();
    }, this);
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

  _ctor.prototype.upView = function () {
    var t = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getShopInfo($z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure);
    t || (t = {
      id: $z1KinghtFallEnum.KinghtFallEnumShopEnum.Treasure,
      time: 0,
      video: 0
    });
    this.labTime.string = $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.HomeTrea05), this.cfgBox.GuarantNumber - t.time);
    this.btnVideo.getChildByName("Layout").getChildByName("labNum").getComponent(cc.Label).string = "x" + $z1SdkMgr.AdVideoCost + " " + t.video + "/" + this.cfgBox.VedioCount;
    this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.TreasureUpdate2);
  };

  _ctor.prototype.update = function (t) {
    var e = this;

    if (this.canAni && (this.time -= t, this.time <= 0)) {
      if (this.index == this.getSkillList.length) {
        this.canAni = false;
        this.btnClose.active = true;
        this.btnOne.active = 1 == this.type;
        this.btnTen.active = 2 == this.type;
        this.btnVideo.active = 3 == this.type;
        return void (this.labTime.node.active = true);
      }

      this.time = this.aniNormal(this.index);
      this.index++;

      if (this.index == this.getSkillList.length) {
        this.time = 1;
        this.ndLight.active = true;
        cc.tween(this.ndLight).set({
          position: cc.v3((this.ndLight.width + cc.winSize.width) / 2)
        }).to(1, {
          position: cc.v3(-(this.ndLight.width + cc.winSize.width) / 2)
        }).call(function () {
          e.canAni = false;
          e.ndLight.active = false;
        }).start();
      }
    }
  };

  _ctor.prototype.aniNormal = function (t) {
    switch ($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(this.getSkillList[this.index].item.id).type) {
      case $z1KinghtFallEnum.KinghtFallEnumGoodType.Type01:
        return this.aniNormal1(t);

      case $z1KinghtFallEnum.KinghtFallEnumGoodType.Type02:
        return this.aniNormal2(t);
    }
  };

  _ctor.prototype.aniNormal1 = function (t) {
    var e = this;

    var n = function n(_n) {
      _n.setParent(e.ndCtr.node);

      var i = e.ndCtr.getPos(t);

      _n.setPosition(i);

      _n.active = true;

      _n.setScale(1.5);

      _n.getComponent($z1KinghtFallItemGood["default"]).initView(e.getSkillList[t].item);

      cc.tween(_n).set({
        opacity: 0
      }).to(.3, {
        opacity: 255
      }).start();
    };

    var i = $z1PoolMgr.PoolMgr.getInstance().getNode($z1KinghtFallConfig.KinghtFallPoolName.ItemGood);

    if (i) {
      n(i);
    } else {
      this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.IconGood, $z1KinghtFallConfig.KinghtFallPrefabName.ItemGood, function (t) {
        i = cc.instantiate(t);
        $z1PoolMgr.PoolMgr.getInstance().creatrePool($z1KinghtFallConfig.KinghtFallPoolName.ItemGood, cc.instantiate(t), 10);
        n(i);
      });
    }

    return .1;
  };

  _ctor.prototype.aniNormal2 = function (t) {
    var e = this;

    var n = function n(_n2) {
      _n2.setParent(e.ndCtr.node);

      var i = e.ndCtr.getPos(t);

      _n2.setPosition(i);

      _n2.active = true;

      _n2.setScale(1);

      _n2.getComponent($z1KinghtFallItemTreasure["default"]).initView(e.getSkillList[t].item);

      _n2.getComponent($z1KinghtFallItemTreasure["default"]).setNew(e.getSkillList[t].isNew);

      cc.tween(_n2).set({
        opacity: 0
      }).to(.3, {
        opacity: 255
      }).start();
    };

    this.loadPrefab($z1KinghtFallConfig.KinghtFallBundelName.IconGood, $z1KinghtFallConfig.KinghtFallPrefabName.ItemTreasure, function (t) {
      n(cc.instantiate(t));
    });
    return .1;
  };

  _ctor.prototype.getReward = function (t) {
    var e = this;
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
      var c = undefined;
      n.time++;

      if (n.time >= this.cfgBox.GuarantNumber) {
        n.time -= this.cfgBox.GuarantNumber;
        c = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBannerCfg(this.cfgBox.GuarantBanner);
      } else {
        c = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getBannerCfg(this.cfgBox.Banner);
      }

      var h = [];

      for (var u = 0; u < c.length; u++) {
        var d = c[u];
        h.push({
          id: d.RewardID,
          weight: d.Weight
        });
      }

      var f = $z1Utils.Utils.weight_rand(h);
      $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfgById(f.id).Quality <= 2 && (n.time = 0);
      o(f.id);
      r() && o(f.id);
    }

    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setShopInfo(n);
    this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.UpdateRedPoint, 8);
    this.sendEvent($z1KinghtFallConfig.KinghtFallEventName.TreasureUpdate);
    this.upView();
    this.getSkillList = a;
    this.ndCtr.init(this.getSkillList.length);
    this.ndCtr.node.removeAllChildren();
    this.scheduleOnce(function () {
      e.stareAni();
    });
  };

  _ctor.prototype.stareAni = function () {
    this.spAni.setAnimation(0, "start", false);
    this.spAni.addAnimation(0, "idle", true);
    $z1AudioMgr.AudioMgr.getInstance().playEffectFree($z1KinghtFallConfig.KinghtFallAudioId.item_reward);
    this.index = 0;
    this.ndCtr.node.y = 0;
    this.btnClose.active = false;
    this.btnOne.active = false;
    this.btnVideo.active = false;
    this.btnTen.active = false;
    this.labTime.node.active = false;
  };

  cc__decorate([ccp_property($z1KinghtFallUtilLayout.KinghtFallUtilLayout)], _ctor.prototype, "ndCtr", undefined);
  cc__decorate([ccp_property({
    type: cc.RichText,
    tooltip: "Pity count"
  })], _ctor.prototype, "labTime", undefined);
  cc__decorate([ccp_property({
    type: sp.Skeleton,
    tooltip: "Close"
  })], _ctor.prototype, "spAni", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Close"
  })], _ctor.prototype, "ndLight", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Close"
  })], _ctor.prototype, "btnClose", undefined);
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
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUITreasureReward;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSVRyZWFzdXJlUmV3YXJkLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VVSSIsInJlcXVpcmUiLCIkejFBdWRpb01nciIsIiR6MUxvZ01nciIsIiR6MVBvb2xNZ3IiLCIkejFTZGtNZ3IiLCIkejFVdGlscyIsIiR6MUdhbWVUcmFja0RhdGFFdmVudCIsIiR6MVBsYXllck1nciIsIiR6MUtpbmdodEZhbGxDb25maWciLCIkejFLaW5naHRGYWxsVGV4dENvbmZpZyIsIiR6MUtpbmdodEZhbGxFbnVtIiwiJHoxS2luZ2h0RmFsbERhdGFNZ3IiLCIkejFLaW5naHRGYWxsUGxheWVyTWdyIiwiJHoxS2luZ2h0RmFsbE1vZGxlIiwiJHoxS2luZ2h0RmFsbFV0aWxMYXlvdXQiLCIkejFLaW5naHRGYWxsSXRlbUdvb2QiLCIkejFLaW5naHRGYWxsSXRlbVRyZWFzdXJlIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiZGVmX0tpbmdodEZhbGxVSVRyZWFzdXJlUmV3YXJkIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibmRDdHIiLCJsYWJUaW1lIiwic3BBbmkiLCJuZExpZ2h0IiwiYnRuQ2xvc2UiLCJidG5PbmUiLCJidG5WaWRlbyIsImJ0blRlbiIsImJnT3BhY2l0eSIsImdldFNraWxsTGlzdCIsInR5cGUiLCJjZmdCb3giLCJpbmRleCIsImNhbkFuaSIsInRpbWUiLCJwcm90b3R5cGUiLCJpbml0IiwibiIsImNhbGwiLCJvbkxvYWQiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwiYW5pbWF0aW9uIiwic3RhcnQiLCJsZW5ndGgiLCJ4Iiwid2lkdGgiLCJ3aW5TaXplIiwic3RhcmVBbmkiLCJLaW5naHRGYWxsRGF0YU1nciIsImdldEluc3RhbmNlIiwiZ2V0Qm94Q2ZnQnlJZCIsIktpbmdodEZhbGxFbnVtU2hvcEVudW0iLCJUcmVhc3VyZSIsImluaXRCdG5MaXN0ZW5lciIsImdldEdvb2RzQ2ZnQnlJZCIsIkNvc3QiLCJsb2FkU3ByaXRlRnJhbWUiLCJLaW5naHRGYWxsQnVuZGVsTmFtZSIsIkljb25Hb29kIiwiaWNvbiIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJMYWJlbCIsInN0cmluZyIsIm51bWJlckZvbWF0IiwiQ29zdDEwIiwidXBWaWV3Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiY2xvc2VVSSIsImlkIiwibnVtIiwiS2luZ2h0RmFsbFBsYXllck1nciIsInRyeVN1YiIsIlN1Ykdvb2QiLCJQbGF5ZXJNZ3IiLCJnZXRUcmFja0RhdGEiLCJ5b3VtZW5nVHJhY2siLCJUcmFja0lkIiwiYm94X2RyYXcxIiwiZ2V0UmV3YXJkIiwiYm94X2RyYXcxMCIsIlNka01nciIsInBsYXlWaWRlbyIsIkFkVHlwZSIsIkFkRnJlZVRpbWUiLCJib3hfMSIsInBheV9ib3hfMV9ZIiwiZ2V0VXNlckRhdGEiLCJnZXRNYXhTdGFnZSIsImdldFNob3BJbmZvIiwidmlkZW8iLCJWZWRpb0NvdW50Iiwic2V0U2hvcEluZm8iLCJVdGlscyIsIlN0cmluZ0Zvcm1hdCIsIlQiLCJLaW5naHRGYWxsVGV4dENvbmZpZyIsIkhvbWVUcmVhMDUiLCJHdWFyYW50TnVtYmVyIiwiQWRWaWRlb0Nvc3QiLCJzZW5kRXZlbnQiLCJLaW5naHRGYWxsRXZlbnROYW1lIiwiVHJlYXN1cmVVcGRhdGUyIiwidXBkYXRlIiwiYWN0aXZlIiwibm9kZSIsImFuaU5vcm1hbCIsInR3ZWVuIiwic2V0IiwicG9zaXRpb24iLCJ2MyIsInRvIiwiaXRlbSIsIktpbmdodEZhbGxFbnVtR29vZFR5cGUiLCJUeXBlMDEiLCJhbmlOb3JtYWwxIiwiVHlwZTAyIiwiYW5pTm9ybWFsMiIsInNldFBhcmVudCIsImdldFBvcyIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJpbml0VmlldyIsIm9wYWNpdHkiLCJQb29sTWdyIiwiZ2V0Tm9kZSIsIktpbmdodEZhbGxQb29sTmFtZSIsIkl0ZW1Hb29kIiwibG9hZFByZWZhYiIsIktpbmdodEZhbGxQcmVmYWJOYW1lIiwiaW5zdGFudGlhdGUiLCJjcmVhdHJlUG9vbCIsInNldE5ldyIsImlzTmV3IiwiSXRlbVRyZWFzdXJlIiwiZ2V0TWlzc2lvbkRhdGEiLCJnZXRUYXNrSW5mbyIsIktpbmdodEZhbGxFbnVtVGFza0VudW0iLCJUcmVhc3VyZUNvdW50Iiwic2V0VGFza0luZm8iLCJhIiwibyIsImdldFRyZWFzdXJlTGV2ZWwiLCJnZXRUcmVhc3VyZUNmZ0J5SWQiLCJsZXZlbCIsImxldmVsSW5mbyIsIlBpZWNlQ29zdCIsImZyYW1lIiwicHVzaCIsIkNvbnZlcnNpb24iLCJhZGRSZXdhcmRzIiwiZ29vZElEIiwic2V0VHJlYXN1cmVMZXZlbCIsInIiLCJLaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bSIsIlNpZ25PZk11bHRpcGxpY2F0aW9uIiwidW5kZWZpbmVkIiwicGFyYW0iLCJNYXRoIiwicmFuZG9tIiwiTG9nTWdyIiwiaW5mbyIsInMiLCJjIiwiZ2V0QmFubmVyQ2ZnIiwiR3VhcmFudEJhbm5lciIsIkJhbm5lciIsImgiLCJ1IiwiZCIsIlJld2FyZElEIiwid2VpZ2h0IiwiV2VpZ2h0IiwiZiIsIndlaWdodF9yYW5kIiwiUXVhbGl0eSIsIlVwZGF0ZVJlZFBvaW50IiwiVHJlYXN1cmVVcGRhdGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsInNjaGVkdWxlT25jZSIsInNldEFuaW1hdGlvbiIsImFkZEFuaW1hdGlvbiIsIkF1ZGlvTWdyIiwicGxheUVmZmVjdEZyZWUiLCJLaW5naHRGYWxsQXVkaW9JZCIsIml0ZW1fcmV3YXJkIiwieSIsIktpbmdo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RCxJQURnQjtJQUV6QjRILE9BQU8sRUFBRTtFQUZnQixDQUFELENBQWIsQ0FBRCxFQUdQbEwsS0FBSyxDQUFDbUIsU0FIQyxFQUdVLFFBSFYsRUFHb0I4SCxTQUhwQixDQUFaO0VBSUEsT0FBT2xMLFlBQVksQ0FBQyxDQUFDMkIsV0FBRCxDQUFELEVBQWdCTSxLQUFoQixDQUFuQjtBQUNELENBclZvQyxDQXFWbkMzQixTQUFTLFdBclYwQixDQUFyQzs7QUFzVkFGLE9BQU8sV0FBUCxHQUFrQjJCLDhCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxQmFzZVVJID0gcmVxdWlyZShcIkJhc2VVSVwiKTtcbnZhciAkejFBdWRpb01nciA9IHJlcXVpcmUoXCJBdWRpb01nclwiKTtcbnZhciAkejFMb2dNZ3IgPSByZXF1aXJlKFwiTG9nTWdyXCIpO1xudmFyICR6MVBvb2xNZ3IgPSByZXF1aXJlKFwiUG9vbE1nclwiKTtcbnZhciAkejFTZGtNZ3IgPSByZXF1aXJlKFwiU2RrTWdyXCIpO1xudmFyICR6MVV0aWxzID0gcmVxdWlyZShcIlV0aWxzXCIpO1xudmFyICR6MUdhbWVUcmFja0RhdGFFdmVudCA9IHJlcXVpcmUoXCJHYW1lVHJhY2tEYXRhRXZlbnRcIik7XG52YXIgJHoxUGxheWVyTWdyID0gcmVxdWlyZShcIlBsYXllck1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsQ29uZmlnID0gcmVxdWlyZShcIktpbmdodEZhbGxDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbFRleHRDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFRleHRDb25maWdcIik7XG52YXIgJHoxS2luZ2h0RmFsbEVudW0gPSByZXF1aXJlKFwiS2luZ2h0RmFsbEVudW1cIik7XG52YXIgJHoxS2luZ2h0RmFsbERhdGFNZ3IgPSByZXF1aXJlKFwiS2luZ2h0RmFsbERhdGFNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxNb2RsZSA9IHJlcXVpcmUoXCJLaW5naHRGYWxsTW9kbGVcIik7XG52YXIgJHoxS2luZ2h0RmFsbFV0aWxMYXlvdXQgPSByZXF1aXJlKFwiS2luZ2h0RmFsbFV0aWxMYXlvdXRcIik7XG52YXIgJHoxS2luZ2h0RmFsbEl0ZW1Hb29kID0gcmVxdWlyZShcIktpbmdodEZhbGxJdGVtR29vZFwiKTtcbnZhciAkejFLaW5naHRGYWxsSXRlbVRyZWFzdXJlID0gcmVxdWlyZShcIktpbmdodEZhbGxJdGVtVHJlYXN1cmVcIik7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBkZWZfS2luZ2h0RmFsbFVJVHJlYXN1cmVSZXdhcmQgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5uZEN0ciA9IG51bGw7XG4gICAgZS5sYWJUaW1lID0gbnVsbDtcbiAgICBlLnNwQW5pID0gbnVsbDtcbiAgICBlLm5kTGlnaHQgPSBudWxsO1xuICAgIGUuYnRuQ2xvc2UgPSBudWxsO1xuICAgIGUuYnRuT25lID0gbnVsbDtcbiAgICBlLmJ0blZpZGVvID0gbnVsbDtcbiAgICBlLmJ0blRlbiA9IG51bGw7XG4gICAgZS5iZ09wYWNpdHkgPSAyMzA7XG4gICAgZS5nZXRTa2lsbExpc3QgPSBbXTtcbiAgICBlLnR5cGUgPSAwO1xuICAgIGUuY2ZnQm94ID0gbnVsbDtcbiAgICBlLmluZGV4ID0gMDtcbiAgICBlLmNhbkFuaSA9IGZhbHNlO1xuICAgIGUudGltZSA9IDA7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgdC5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuZ2V0U2tpbGxMaXN0ID0gZTtcbiAgICB0aGlzLnR5cGUgPSBuO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnNwQW5pLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgXCJzdGFydFwiID09IHQuc3BBbmkuYW5pbWF0aW9uICYmICh0LmNhbkFuaSA9IHRydWUpO1xuICAgIH0pO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubmRDdHIuaW5pdCh0aGlzLmdldFNraWxsTGlzdC5sZW5ndGgpO1xuICAgIHRoaXMubmRMaWdodC54ID0gdGhpcy5uZExpZ2h0LndpZHRoICsgY2Mud2luU2l6ZS53aWR0aDtcbiAgICB0aGlzLnN0YXJlQW5pKCk7XG4gICAgdGhpcy5jZmdCb3ggPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEJveENmZ0J5SWQoJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1TaG9wRW51bS5UcmVhc3VyZSk7XG4gICAgdGhpcy5pbml0QnRuTGlzdGVuZXIoKTtcbiAgICB2YXIgZSA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0R29vZHNDZmdCeUlkKHRoaXMuY2ZnQm94LkNvc3RbMF0pO1xuICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuSWNvbkdvb2QsIGUuaWNvbiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHQuYnRuT25lLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwic3BySWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGU7XG4gICAgfSk7XG4gICAgdGhpcy5idG5PbmUuZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkejFLaW5naHRGYWxsTW9kbGUuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLm51bWJlckZvbWF0KHRoaXMuY2ZnQm94LkNvc3RbMV0pO1xuICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHb29kc0NmZ0J5SWQodGhpcy5jZmdCb3guQ29zdDEwWzBdKTtcbiAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCBuLmljb24sIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0LmJ0blRlbi5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcInNwckljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBlO1xuICAgIH0pO1xuICAgIHRoaXMuYnRuVGVuLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwibGFiTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5udW1iZXJGb21hdCh0aGlzLmNmZ0JveC5Db3N0MTBbMV0pO1xuICAgIHRoaXMudXBWaWV3KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0QnRuTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYnRuQ2xvc2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LmNsb3NlVUkoKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0bk9uZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0ge1xuICAgICAgICBpZDogdC5jZmdCb3guQ29zdFswXSxcbiAgICAgICAgbnVtOiB0LmNmZ0JveC5Db3N0WzFdXG4gICAgICB9O1xuICAgICAgaWYgKCR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLnRyeVN1YihbZV0sIHRydWUpKSB7XG4gICAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLlN1Ykdvb2QoW2VdKTtcbiAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ib3hfZHJhdzEpO1xuICAgICAgICB0LmdldFJld2FyZCgxLCAxKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0blRlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0ge1xuICAgICAgICBpZDogdC5jZmdCb3guQ29zdDEwWzBdLFxuICAgICAgICBudW06IHQuY2ZnQm94LkNvc3QxMFsxXVxuICAgICAgfTtcbiAgICAgIGlmICgkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS50cnlTdWIoW2VdLCB0cnVlKSkge1xuICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5TdWJHb29kKFtlXSk7XG4gICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQuYm94X2RyYXcxMCk7XG4gICAgICAgIHQuZ2V0UmV3YXJkKDEwLCAyKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLmJ0blZpZGVvLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgJHoxU2RrTWdyLlNka01nci5nZXRJbnN0YW5jZSgpLnBsYXlWaWRlbygkejFTZGtNZ3IuQWRUeXBlLkFkRnJlZVRpbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHoxUGxheWVyTWdyLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjaygkejFHYW1lVHJhY2tEYXRhRXZlbnQuVHJhY2tJZC5ib3hfMSk7XG4gICAgICAgICR6MVBsYXllck1nci5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soJHoxR2FtZVRyYWNrRGF0YUV2ZW50LlRyYWNrSWQucGF5X2JveF8xX1ksICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0TWF4U3RhZ2UoKSk7XG4gICAgICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRTaG9wSW5mbygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVNob3BFbnVtLlRyZWFzdXJlKTtcbiAgICAgICAgZSB8fCAoZSA9IHtcbiAgICAgICAgICBpZDogJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1TaG9wRW51bS5UcmVhc3VyZSxcbiAgICAgICAgICB0aW1lOiAwLFxuICAgICAgICAgIHZpZGVvOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBlLnZpZGVvKys7XG4gICAgICAgIGlmIChlLnZpZGVvID49IHQuY2ZnQm94LlZlZGlvQ291bnQpIHtcbiAgICAgICAgICBlLnZpZGVvIC09IHQuY2ZnQm94LlZlZGlvQ291bnQ7XG4gICAgICAgICAgdC5nZXRSZXdhcmQoMSwgMyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5zZXRTaG9wSW5mbyhlKTtcbiAgICAgICAgICB0LnVwVmlldygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB0aGlzKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnVwVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFVzZXJEYXRhKCkuZ2V0U2hvcEluZm8oJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1TaG9wRW51bS5UcmVhc3VyZSk7XG4gICAgdCB8fCAodCA9IHtcbiAgICAgIGlkOiAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVNob3BFbnVtLlRyZWFzdXJlLFxuICAgICAgdGltZTogMCxcbiAgICAgIHZpZGVvOiAwXG4gICAgfSk7XG4gICAgdGhpcy5sYWJUaW1lLnN0cmluZyA9ICR6MVV0aWxzLlV0aWxzLlN0cmluZ0Zvcm1hdCh0aGlzLlQoJHoxS2luZ2h0RmFsbFRleHRDb25maWcuS2luZ2h0RmFsbFRleHRDb25maWcuSG9tZVRyZWEwNSksIHRoaXMuY2ZnQm94Lkd1YXJhbnROdW1iZXIgLSB0LnRpbWUpO1xuICAgIHRoaXMuYnRuVmlkZW8uZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInhcIiArICR6MVNka01nci5BZFZpZGVvQ29zdCArIFwiIFwiICsgdC52aWRlbyArIFwiL1wiICsgdGhpcy5jZmdCb3guVmVkaW9Db3VudDtcbiAgICB0aGlzLnNlbmRFdmVudCgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxFdmVudE5hbWUuVHJlYXN1cmVVcGRhdGUyKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLmNhbkFuaSAmJiAodGhpcy50aW1lIC09IHQsIHRoaXMudGltZSA8PSAwKSkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggPT0gdGhpcy5nZXRTa2lsbExpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY2FuQW5pID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idG5PbmUuYWN0aXZlID0gMSA9PSB0aGlzLnR5cGU7XG4gICAgICAgIHRoaXMuYnRuVGVuLmFjdGl2ZSA9IDIgPT0gdGhpcy50eXBlO1xuICAgICAgICB0aGlzLmJ0blZpZGVvLmFjdGl2ZSA9IDMgPT0gdGhpcy50eXBlO1xuICAgICAgICByZXR1cm4gdm9pZCAodGhpcy5sYWJUaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRpbWUgPSB0aGlzLmFuaU5vcm1hbCh0aGlzLmluZGV4KTtcbiAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgIGlmICh0aGlzLmluZGV4ID09IHRoaXMuZ2V0U2tpbGxMaXN0Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnRpbWUgPSAxO1xuICAgICAgICB0aGlzLm5kTGlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5uZExpZ2h0KS5zZXQoe1xuICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygodGhpcy5uZExpZ2h0LndpZHRoICsgY2Mud2luU2l6ZS53aWR0aCkgLyAyKVxuICAgICAgICB9KS50bygxLCB7XG4gICAgICAgICAgcG9zaXRpb246IGNjLnYzKC0odGhpcy5uZExpZ2h0LndpZHRoICsgY2Mud2luU2l6ZS53aWR0aCkgLyAyKVxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlLmNhbkFuaSA9IGZhbHNlO1xuICAgICAgICAgIGUubmRMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hbmlOb3JtYWwgPSBmdW5jdGlvbiAodCkge1xuICAgIHN3aXRjaCAoJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHb29kc0NmZ0J5SWQodGhpcy5nZXRTa2lsbExpc3RbdGhpcy5pbmRleF0uaXRlbS5pZCkudHlwZSkge1xuICAgICAgY2FzZSAkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bUdvb2RUeXBlLlR5cGUwMTpcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pTm9ybWFsMSh0KTtcbiAgICAgIGNhc2UgJHoxS2luZ2h0RmFsbEVudW0uS2luZ2h0RmFsbEVudW1Hb29kVHlwZS5UeXBlMDI6XG4gICAgICAgIHJldHVybiB0aGlzLmFuaU5vcm1hbDIodCk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuYW5pTm9ybWFsMSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHZhciBuID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgIG4uc2V0UGFyZW50KGUubmRDdHIubm9kZSk7XG4gICAgICB2YXIgaSA9IGUubmRDdHIuZ2V0UG9zKHQpO1xuICAgICAgbi5zZXRQb3NpdGlvbihpKTtcbiAgICAgIG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG4uc2V0U2NhbGUoMS41KTtcbiAgICAgIG4uZ2V0Q29tcG9uZW50KCR6MUtpbmdodEZhbGxJdGVtR29vZC5kZWZhdWx0KS5pbml0VmlldyhlLmdldFNraWxsTGlzdFt0XS5pdGVtKTtcbiAgICAgIGNjLnR3ZWVuKG4pLnNldCh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLnRvKC4zLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9O1xuICAgIHZhciBpID0gJHoxUG9vbE1nci5Qb29sTWdyLmdldEluc3RhbmNlKCkuZ2V0Tm9kZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQb29sTmFtZS5JdGVtR29vZCk7XG4gICAgaWYgKGkpIHtcbiAgICAgIG4oaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZFByZWZhYigkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQcmVmYWJOYW1lLkl0ZW1Hb29kLCBmdW5jdGlvbiAodCkge1xuICAgICAgICBpID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICR6MVBvb2xNZ3IuUG9vbE1nci5nZXRJbnN0YW5jZSgpLmNyZWF0cmVQb29sKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbFBvb2xOYW1lLkl0ZW1Hb29kLCBjYy5pbnN0YW50aWF0ZSh0KSwgMTApO1xuICAgICAgICBuKGkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAuMTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmFuaU5vcm1hbDIgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB2YXIgbiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICBuLnNldFBhcmVudChlLm5kQ3RyLm5vZGUpO1xuICAgICAgdmFyIGkgPSBlLm5kQ3RyLmdldFBvcyh0KTtcbiAgICAgIG4uc2V0UG9zaXRpb24oaSk7XG4gICAgICBuLmFjdGl2ZSA9IHRydWU7XG4gICAgICBuLnNldFNjYWxlKDEpO1xuICAgICAgbi5nZXRDb21wb25lbnQoJHoxS2luZ2h0RmFsbEl0ZW1UcmVhc3VyZS5kZWZhdWx0KS5pbml0VmlldyhlLmdldFNraWxsTGlzdFt0XS5pdGVtKTtcbiAgICAgIG4uZ2V0Q29tcG9uZW50KCR6MUtpbmdodEZhbGxJdGVtVHJlYXN1cmUuZGVmYXVsdCkuc2V0TmV3KGUuZ2V0U2tpbGxMaXN0W3RdLmlzTmV3KTtcbiAgICAgIGNjLnR3ZWVuKG4pLnNldCh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLnRvKC4zLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9O1xuICAgIHRoaXMubG9hZFByZWZhYigkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxCdW5kZWxOYW1lLkljb25Hb29kLCAkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxQcmVmYWJOYW1lLkl0ZW1UcmVhc3VyZSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgIG4oY2MuaW5zdGFudGlhdGUodCkpO1xuICAgIH0pO1xuICAgIHJldHVybiAuMTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmdldFJld2FyZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRTaG9wSW5mbygkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVNob3BFbnVtLlRyZWFzdXJlKTtcbiAgICBuIHx8IChuID0ge1xuICAgICAgaWQ6ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtU2hvcEVudW0uVHJlYXN1cmUsXG4gICAgICB0aW1lOiAwLFxuICAgICAgdmlkZW86IDBcbiAgICB9KTtcbiAgICB2YXIgaSA9ICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuZ2V0VGFza0luZm8oKTtcbiAgICBpZiAoaS50eXBlID09ICR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVGFza0VudW0uVHJlYXN1cmVDb3VudCkge1xuICAgICAgaS5udW0gKz0gdDtcbiAgICAgICR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IuS2luZ2h0RmFsbFBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb25EYXRhKCkuc2V0VGFza0luZm8oaSk7XG4gICAgfVxuICAgIHZhciBhID0gW107XG4gICAgdmFyIG8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIGUgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldFRyZWFzdXJlTGV2ZWwodCk7XG4gICAgICB2YXIgbiA9ICR6MUtpbmdodEZhbGxEYXRhTWdyLktpbmdodEZhbGxEYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJlYXN1cmVDZmdCeUlkKHQpO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgZm9yICh2YXIgbyA9IGUgPyBlLmxldmVsIDogMTsgbyA8PSBuLmxldmVsSW5mby5sZW5ndGg7IG8rKykge1xuICAgICAgICBpICs9IG4ubGV2ZWxJbmZvW28gLSAxXS5QaWVjZUNvc3Q7XG4gICAgICB9XG4gICAgICBpZiAoZSkge1xuICAgICAgICBpZiAoZS5mcmFtZSA+PSBpKSB7XG4gICAgICAgICAgYS5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgICAgaWQ6IG4uQ29udmVyc2lvblswXSxcbiAgICAgICAgICAgICAgbnVtOiBuLkNvbnZlcnNpb25bMV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc05ldzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRSZXdhcmRzKFt7XG4gICAgICAgICAgICBpZDogbi5Db252ZXJzaW9uWzBdLFxuICAgICAgICAgICAgbnVtOiBuLkNvbnZlcnNpb25bMV1cbiAgICAgICAgICB9XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5mcmFtZSsrO1xuICAgICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgIGlkOiBuLmdvb2RJRCxcbiAgICAgICAgICAgICAgbnVtOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNOZXc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5zZXRUcmVhc3VyZUxldmVsKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGlkOiB0LFxuICAgICAgICAgIGxldmVsOiAxLFxuICAgICAgICAgIGZyYW1lOiAwXG4gICAgICAgIH07XG4gICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgaWQ6IG4uZ29vZElELFxuICAgICAgICAgICAgbnVtOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc05ldzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5zZXRUcmVhc3VyZUxldmVsKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHZhciBlID0gJHoxS2luZ2h0RmFsbFBsYXllck1nci5LaW5naHRGYWxsUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VXNlckRhdGEoKS5nZXRUcmVhc3VyZUxldmVsKCR6MUtpbmdodEZhbGxFbnVtLktpbmdodEZhbGxFbnVtVHJlYXN1cmVFbnVtLlNpZ25PZk11bHRpcGxpY2F0aW9uKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciBuID0gbnVsbCA9PT0gKHQgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFRyZWFzdXJlQ2ZnQnlJZCgkejFLaW5naHRGYWxsRW51bS5LaW5naHRGYWxsRW51bVRyZWFzdXJlRW51bS5TaWduT2ZNdWx0aXBsaWNhdGlvbikubGV2ZWxJbmZvW2UubGV2ZWwgLSAxXSkgfHwgdW5kZWZpbmVkID09PSB0ID8gdW5kZWZpbmVkIDogdC5wYXJhbTtcbiAgICAgICAgaWYgKG4gJiYgTWF0aC5yYW5kb20oKSA8PSBuWzBdKSB7XG4gICAgICAgICAgJHoxTG9nTWdyLkxvZ01nci5nZXRJbnN0YW5jZSgpLmluZm8oXCIqKipUYWxpc21hbiBvZiBNdWx0aXBsaWNhdGlvblwiKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCB0OyBzKyspIHtcbiAgICAgIHZhciBjID0gdW5kZWZpbmVkO1xuICAgICAgbi50aW1lKys7XG4gICAgICBpZiAobi50aW1lID49IHRoaXMuY2ZnQm94Lkd1YXJhbnROdW1iZXIpIHtcbiAgICAgICAgbi50aW1lIC09IHRoaXMuY2ZnQm94Lkd1YXJhbnROdW1iZXI7XG4gICAgICAgIGMgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEJhbm5lckNmZyh0aGlzLmNmZ0JveC5HdWFyYW50QmFubmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMgPSAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEJhbm5lckNmZyh0aGlzLmNmZ0JveC5CYW5uZXIpO1xuICAgICAgfVxuICAgICAgdmFyIGggPSBbXTtcbiAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYy5sZW5ndGg7IHUrKykge1xuICAgICAgICB2YXIgZCA9IGNbdV07XG4gICAgICAgIGgucHVzaCh7XG4gICAgICAgICAgaWQ6IGQuUmV3YXJkSUQsXG4gICAgICAgICAgd2VpZ2h0OiBkLldlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBmID0gJHoxVXRpbHMuVXRpbHMud2VpZ2h0X3JhbmQoaCk7XG4gICAgICAkejFLaW5naHRGYWxsRGF0YU1nci5LaW5naHRGYWxsRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFRyZWFzdXJlQ2ZnQnlJZChmLmlkKS5RdWFsaXR5IDw9IDIgJiYgKG4udGltZSA9IDApO1xuICAgICAgbyhmLmlkKTtcbiAgICAgIHIoKSAmJiBvKGYuaWQpO1xuICAgIH1cbiAgICAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLnNldFNob3BJbmZvKG4pO1xuICAgIHRoaXMuc2VuZEV2ZW50KCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEV2ZW50TmFtZS5VcGRhdGVSZWRQb2ludCwgOCk7XG4gICAgdGhpcy5zZW5kRXZlbnQoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsRXZlbnROYW1lLlRyZWFzdXJlVXBkYXRlKTtcbiAgICB0aGlzLnVwVmlldygpO1xuICAgIHRoaXMuZ2V0U2tpbGxMaXN0ID0gYTtcbiAgICB0aGlzLm5kQ3RyLmluaXQodGhpcy5nZXRTa2lsbExpc3QubGVuZ3RoKTtcbiAgICB0aGlzLm5kQ3RyLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLnN0YXJlQW5pKCk7XG4gICAgfSk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFyZUFuaSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNwQW5pLnNldEFuaW1hdGlvbigwLCBcInN0YXJ0XCIsIGZhbHNlKTtcbiAgICB0aGlzLnNwQW5pLmFkZEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgJHoxQXVkaW9NZ3IuQXVkaW9NZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0RnJlZSgkejFLaW5naHRGYWxsQ29uZmlnLktpbmdodEZhbGxBdWRpb0lkLml0ZW1fcmV3YXJkKTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLm5kQ3RyLm5vZGUueSA9IDA7XG4gICAgdGhpcy5idG5DbG9zZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bk9uZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0blZpZGVvLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYnRuVGVuLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubGFiVGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSgkejFLaW5naHRGYWxsVXRpbExheW91dC5LaW5naHRGYWxsVXRpbExheW91dCldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRDdHJcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLlJpY2hUZXh0LFxuICAgIHRvb2x0aXA6IFwiUGl0eSBjb3VudFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImxhYlRpbWVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IHNwLlNrZWxldG9uLFxuICAgIHRvb2x0aXA6IFwiQ2xvc2VcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcEFuaVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkNsb3NlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwibmRMaWdodFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkNsb3NlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiYnRuQ2xvc2VcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJEcmF3IG9uY2VcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5PbmVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJEcmF3IG9uY2VcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidG5WaWRlb1wiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkRyYXcgb25jZVwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImJ0blRlblwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0tpbmdodEZhbGxVSVRyZWFzdXJlUmV3YXJkOyJdfQ==