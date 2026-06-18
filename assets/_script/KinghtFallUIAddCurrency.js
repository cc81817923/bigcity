var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var $z1BaseUI = require("BaseUI");
var $z1AudioMgr = require("AudioMgr");
var $z1Utils = require("Utils");
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
var def_KinghtFallUIAddCurrency = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.labTitle1 = null;
    e.sprIcon = null;
    e.sprFrames = [];
    e.labNum = null;
    e.btnClose = null;
    e.btnReward = null;
    e.goldNum = 0;
    return e;
  }
  cc__extends(_ctor, t);
  _ctor.prototype.init = function (t, e, n) {
    this.goodId = t;
    this.call = e;
    this.callFail = n;
  };
  _ctor.prototype.start = function () {
    var t = this;
    var e = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(this.goodId);
    this.labTitle1.string = $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.CommerName01), this.T(e.name));
    switch (this.goodId) {
      case $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.Coin:
        var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.GoldSupply);
        var i = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getMaxStage();
        var a = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getLevelCfgById2(i);
        this.goldNum = Math.round(parseInt(n) * a.GoldSupplyCoefficient);
        this.sprIcon.spriteFrame = this.sprFrames[0];
        break;
      case $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.Diamond:
        var o = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.DiamondSupply);
        this.goldNum = parseInt(o);
        this.sprIcon.spriteFrame = this.sprFrames[1];
    }
    this.labNum.string = $z1KinghtFallModle.default.getInstance().numberFomat(this.goldNum);
    // 金币补给按钮：将文案改为钻石消耗数量
    if (this.goodId === $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.Coin) {
      var labBtnNode = cc.find("Layout/LabNum", this.btnReward);
      var labBtn = labBtnNode && labBtnNode.getComponent(cc.Label);
      if (labBtn) { labBtn.string = "50"; }
    }
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.callFail && t.callFail();
      t.closeUI();
    }, this);
    this.btnReward.on(cc.Node.EventType.TOUCH_END, function () {
      if (t.goodId === $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.Diamond) {
        t._openDiamondShop();
        return;
      }
      // Coin：消耗 50 钻石换金币
      var GOLD_DIAMOND_COST = 50;
      var playerMgr = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance();
      if (!playerMgr.trySub([{ id: $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.Diamond, num: GOLD_DIAMOND_COST }], true)) {
        return;
      }
      playerMgr.SubGood([{ id: $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.Diamond, num: GOLD_DIAMOND_COST }]);
      $z1AudioMgr.AudioMgr.getInstance().playEffect($z1KinghtFallConfig.KinghtFallAudioId.gold_reward);
      if (t.call) {
        t.call(t.goldNum);
      } else {
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.gold);
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.pay_gold_Y, playerMgr.getUserData().getMaxStage());
        playerMgr.addRewards([{ id: e.enumValue, num: t.goldNum }], 1, t.sprIcon.node.convertToWorldSpaceAR(cc.Vec2.ZERO));
      }
      t.closeUI();
    }, this);
  };
  // 钻石充值入口：直接打开 BPShop prefab
  _ctor.prototype._openDiamondShop = function () {
    var self = this;
    self.closeUI();
    self.openUI($z1KinghtFallConfig.KinghtFallUIID.UIBPShop);
  };

  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labTitle1", undefined);
  cc__decorate([ccp_property(cc.Sprite)], _ctor.prototype, "sprIcon", undefined);
  cc__decorate([ccp_property([cc.SpriteFrame])], _ctor.prototype, "sprFrames", undefined);
  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labNum", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnReward", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI.default);
exports.default = def_KinghtFallUIAddCurrency;