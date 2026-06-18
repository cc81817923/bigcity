var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var $z1BaseUI = require("BaseUI");
var $z1Utils = require("Utils");
var $z1DiamondApi = require("DiamondApi");
var $z1KinghtFallTextConfig = require("KinghtFallTextConfig");
var $z1KinghtFallEnum = require("KinghtFallEnum");
var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");
var $z1KinghtFallItemGood = require("KinghtFallItemGood");
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;
var def_KinghtFallUIGameBack = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemGood = null;
    e.labInfo = null;
    e.btnBreak = null;
    e.btnNewGame = null;
    e.breakCall = null;
    e.addCoin = 10;
    return e;
  }
  cc__extends(_ctor, t);
  _ctor.prototype.init = function (t) {
    this.breakCall = t;
  };
  _ctor.prototype.start = function () {
    this.addCoin = parseInt($z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getParamsCfgById($z1KinghtFallEnum.KinghtFallEnumParameterCfg.BackToReady));
    this.itemGood.initView({
      id: $z1KinghtFallEnum.KinghtFallEnumGoodsCfg.SilverCoin,
      num: this.addCoin
    });
    this.labInfo.string = $z1Utils.Utils.StringFormat(this.T($z1KinghtFallTextConfig.KinghtFallTextConfig.GameEnd01), this.addCoin);
    this.initBtnEvent();
    var gemNode = this.btnNewGame.getChildByName("wg_zy_sp");
    if (gemNode) {
      var labCost = new cc.Node("labCost");
      var lbl = labCost.addComponent(cc.Label);
      lbl.string = "50";
      lbl.fontSize = 20;
      lbl.bold = true;
      lbl.overflow = cc.Label.Overflow.NONE;
      lbl.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      lbl.verticalAlign = cc.Label.VerticalAlign.CENTER;
      labCost.color = new cc.Color(255, 255, 255, 255);
      var outline = labCost.addComponent(cc.LabelOutline);
      outline.color = new cc.Color(0, 0, 0, 255);
      outline.width = 3;
      labCost.setPosition(32, 0);
      labCost.setParent(gemNode);
    }
  };
  _ctor.prototype.initBtnEvent = function () {
    var t = this;
    this.btnBreak.on(cc.Node.EventType.TOUCH_END, function () {
      t.breakCall(0);
      t.closeUI();
    }, this);
    this.btnNewGame.on(cc.Node.EventType.TOUCH_END, function () {
      $z1DiamondApi.DiamondApi.consume(60, function () {
        t.breakCall(t.addCoin);
        t.closeUI();
      });
    }, this);
  };
  cc__decorate([ccp_property({
    type: $z1KinghtFallItemGood.default,
    tooltip: "Give up"
  })], _ctor.prototype, "itemGood", undefined);
  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Give up"
  })], _ctor.prototype, "labInfo", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Give up"
  })], _ctor.prototype, "btnBreak", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Rewind"
  })], _ctor.prototype, "btnNewGame", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI.default);
exports.default = def_KinghtFallUIGameBack;