"use strict";
cc._RF.push(module, 'b8ba3ngR21FuYdxTm0/H8bV', 'UITips');
// _script/UITips.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_UITips = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.tipsNode = null;
    e.tips = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this.str = this.T(t);
  };

  _ctor.prototype.refreshUI = function (t, e, n, i) {
    this.str = this.T(i);
    this.tweenAction.stop();
    this.tipsNode.setPosition(0, 200);
    this.tipsNode.scaleY = 0;
    this.tips.string = i;
    this.tweenAction.start();
  };

  _ctor.prototype.onLoad = function () {
    var t = this;
    this.tweenAction = cc.tween(this.tipsNode).to(.2, {
      scaleY: 1
    }).delay(1).by(2, {
      position: new cc.Vec3(0, 100)
    }).call(function () {
      t.closeUI();
    });
  };

  _ctor.prototype.start = function () {
    this.tipsNode.opacity = 255;
    this.tweenAction.stop();
    this.tipsNode.setPosition(0, 200);
    this.tipsNode.scaleY = 0;
    this.tips.string = this.str;
    this.tweenAction.start();
  };

  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Layout node"
  })], _ctor.prototype, "tipsNode", undefined);
  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Text"
  })], _ctor.prototype, "tips", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_UITips;

cc._RF.pop();