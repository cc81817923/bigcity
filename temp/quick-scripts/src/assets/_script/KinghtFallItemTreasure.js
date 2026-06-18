"use strict";
cc._RF.push(module, '1dd6fj7X4hLP5VPfK6Nk3zG', 'KinghtFallItemTreasure');
// _script/KinghtFallItemTreasure.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseCtrl = require("BaseCtrl");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallItemTreasure = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.sprBg = null;
    e.sprIcon = null;
    e.ndPro = null;
    e.ndNew = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.initView = function (t) {
    var e = this;
    var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(t.id);
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, n.sprBg, function (t) {
      e.sprBg.spriteFrame = t;
    });
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, n.icon, function (t) {
      e.sprIcon.spriteFrame = t;
    });
    var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getTreasureLevel(n.itemID);
    var a = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getTreasureCfgById(n.itemID);

    if (!i) {
      this.ndPro.active = false;
    } else if (i.level >= a.levelInfo.length) {
      var maxCost = a.levelInfo[a.levelInfo.length - 1].PieceCost;
      this.ndPro.active = true;
      this.ndPro.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = i.frame / maxCost;
      this.ndPro.getChildByName("labPro").getComponent(cc.Label).string = i.frame + "/" + maxCost;
    } else {
      this.ndPro.active = true;
      this.ndPro.getChildByName("sprPro").getComponent(cc.Sprite).fillRange = i.frame / a.levelInfo[i.level - 1].PieceCost;
      this.ndPro.getChildByName("labPro").getComponent(cc.Label).string = i.frame + "/" + a.levelInfo[i.level - 1].PieceCost;
    }
  };

  _ctor.prototype.setNew = function (t) {
    this.ndNew.active = t;
    t && (this.ndPro.active = false);

    if (t) {
      var sprite = this.ndNew.getComponent(cc.Sprite);

      if (sprite) {
        sprite.enabled = false;
      }

      if (!this.ndNew.getChildByName("labNewEn")) {
        var labelNode = new cc.Node("labNewEn");
        this.ndNew.addChild(labelNode);
        labelNode.setPosition(0, 0);
        labelNode.setContentSize(85, 38);
        var lbl = labelNode.addComponent(cc.Label);
        lbl.string = "NEW!";
        lbl.fontSize = 26;
        lbl.lineHeight = 28;
        lbl.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        lbl.overflow = cc.Label.Overflow.SHRINK;
        labelNode.color = new cc.Color(255, 230, 0, 255);
      }
    }
  };

  cc__decorate([ccp_property({
    type: cc.Sprite,
    tooltip: "Background"
  })], _ctor.prototype, "sprBg", undefined);
  cc__decorate([ccp_property({
    type: cc.Sprite,
    tooltip: "Icon"
  })], _ctor.prototype, "sprIcon", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Close"
  })], _ctor.prototype, "ndPro", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Close"
  })], _ctor.prototype, "ndNew", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_KinghtFallItemTreasure;

cc._RF.pop();