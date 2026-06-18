var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var $z1LanguageMgr = require("LanguageMgr");
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
cc__decorator.property;
var ccp_menu = cc__decorator.menu;
var def_TranstaLabel = function (t) {
  function _ctor() {
    return null !== t && t.apply(this, arguments) || this;
  }
  cc__extends(_ctor, t);
  _ctor.prototype.onLoad = function () {
    var t = this.node.getComponent(cc.Label);
    if (t) {
      t.string = $z1LanguageMgr.LanguageMgr.getInstance().T(t.string);
    } else {
      var e = this.node.getComponent(cc.RichText);
      e && (e.string = $z1LanguageMgr.LanguageMgr.getInstance().T(e.string));
    }
  };
  _ctor.prototype.refresh = function () {
    var t = this.node.getComponent(cc.Label);
    if (t) {
      t.string = $z1LanguageMgr.LanguageMgr.getInstance().T(t.string);
    } else {
      var e = this.node.getComponent(cc.RichText);
      e && (e.string = $z1LanguageMgr.LanguageMgr.getInstance().T(e.string));
    }
  };
  return cc__decorate([ccp_ccclass, ccp_menu("I18N/TranstLabel")], _ctor);
}(cc.Component);
exports.default = def_TranstaLabel;