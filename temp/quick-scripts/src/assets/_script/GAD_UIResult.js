"use strict";
cc._RF.push(module, '2569fdHfc5Fe62fUea89kAT', 'GAD_UIResult');
// _script/GAD_UIResult.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1AudioMgr = require("AudioMgr");

var $z1GAD_Configs = require("GAD_Configs");

var $z1GAD_App = require("GAD_App");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_UIResult = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isWin = false;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.init = function (t) {
    this.isWin = t;
  };

  _ctor.prototype.start = function () {
    var t = this;

    if (this.isWin) {
      this.resultSp.setAnimation(0, "victory_appear", false);
      this.resultSp.setCompleteListener(function () {
        t.resultSp.setAnimation(0, "victory_idle", false);
      });
    } else {
      this.resultSp.setAnimation(0, "fail_appear", false);
      this.resultSp.setCompleteListener(function () {
        t.resultSp.setAnimation(0, "fail_idle", false);
      });
    }

    $z1AudioMgr.AudioMgr.getInstance().stopMusic($z1GAD_Configs.GADConfig.BgMusic);
    $z1AudioMgr.AudioMgr.getInstance().playEffectFree(this.isWin ? $z1GAD_Configs.GAD_AudioId.victory : $z1GAD_Configs.GAD_AudioId.fail);
    this.btnExit.on(cc.Node.EventType.TOUCH_END, function () {
      $z1GAD_App["default"].instance.exit_App(0);
    });

    this._addResultLabel(this.isWin ? "VICTORY!" : "DEFEAT!"); // 每帧隐藏 Spine 中文插槽，防止动画帧重置


    this.schedule(function () {
      var sk = t.resultSp && t.resultSp._skeleton;

      if (!sk) {
        return;
      }

      ["shengli", "shengli_1", "shibai_1", "shibai_2"].forEach(function (name) {
        var slot = sk.findSlot(name);

        if (slot) {
          slot.color.a = 0;
        }
      });
    }, 0);
  };

  _ctor.prototype._addResultLabel = function (text) {
    var root = this.resultSp.node.parent;

    if (!root) {
      return;
    }

    var node = new cc.Node("resultLabelEn");
    node.setParent(root);
    node.setPosition(0, 200);
    node.setContentSize(520, 110);
    node.zIndex = 100;
    var lbl = node.addComponent(cc.Label);
    lbl.string = text;
    lbl.fontSize = 100;
    lbl.lineHeight = 100;
    lbl.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    lbl.overflow = cc.Label.Overflow.SHRINK;
    var outline = node.addComponent(cc.LabelOutline);
    outline.color = new cc.Color(0, 0, 0, 255);
    outline.width = 4;
  };

  cc__decorate([ccp_property(sp.Skeleton)], _ctor.prototype, "resultSp", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnExit", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_GAD_UIResult;

cc._RF.pop();