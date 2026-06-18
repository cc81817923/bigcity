"use strict";
cc._RF.push(module, '21e17f5Z+xOhol2UNXnlyMP', 'KinghtFallUIVideoTips');
// _script/KinghtFallUIVideoTips.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1DiamondApi = require("DiamondApi");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallUIVideoTips = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.labTitle = null;
    e.sprIcon = null;
    e.sprfIconList = [];
    e.labInfo = null;
    e.btnClose = null;
    e.btnVideo = null;
    e.type = 0;
    e.callBack = null;
    e.typeInfo = [{
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Soldier",
      info: "<b>Barracks unit cap <color=#43a926>+1</color></b>"
    }, {
      name: "Red Hare",
      info: "<b>Move speed <color=#43a926>+50%</color></b>"
    }, {
      name: "Sun Bow",
      info: "<b>Attack <color=#43a926>+50%</color>, attack speed <color=#43a926>+50%</color></b>"
    }, {
      name: "Silver sack",
      info: "<b>Gain <color=#43a926>6–12</color> silver</b>"
    }, {
      name: "Red Hare (true)",
      info: "<b>Move speed <color=#43a926>+100%</color></b>"
    }, {
      name: "Sun Chaser (true)",
      info: "<b>Attack <color=#43a926>+100%</color>, attack speed <color=#43a926>+100%</color></b>"
    }];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t, e) {
    this.type = t;
    this.callBack = e;
  };

  _ctor.prototype.start = function () {
    var t = this;
    this.labTitle.string = this.T(this.typeInfo[this.type - 1].name);
    this.sprIcon.spriteFrame = this.sprfIconList[this.type - 1];
    this.labInfo.string = this.T(this.typeInfo[this.type - 1].info) + "<br/><b><color=#e95cff>Cost: 60 gems</color></b>";
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.callBack(false);
      t.closeUI();
    }, this);
    this.btnVideo.on(cc.Node.EventType.TOUCH_END, function () {
      $z1DiamondApi.DiamondApi.consume(60, function () {
        t.callBack(true);
        t.closeUI();
      });
    }, this);
  };

  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labTitle", undefined);
  cc__decorate([ccp_property(cc.Sprite)], _ctor.prototype, "sprIcon", undefined);
  cc__decorate([ccp_property([cc.SpriteFrame])], _ctor.prototype, "sprfIconList", undefined);
  cc__decorate([ccp_property(cc.RichText)], _ctor.prototype, "labInfo", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnVideo", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIVideoTips;

cc._RF.pop();