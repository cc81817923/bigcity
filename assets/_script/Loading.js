var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var $z1KinghtFallModle = require("KinghtFallModle");
var $z1Appcfg = require("Appcfg");
var $z1PlatformSetting = require("PlatformSetting");
var $z1AudioMgr = require("AudioMgr");
var $z1EventMgr = require("EventMgr");
var $z1PlatformManager = require("PlatformManager");
var $z1ResCacheMgr = require("ResCacheMgr");
var $z1ResourceMgr = require("ResourceMgr");
var $z1SdkMgr = require("SdkMgr");
var $z1UIMgr = require("UIMgr");
var $z1ServerDataMgr = require("ServerDataMgr");
var $z1Config = require("Config");
var $z1GameTrackDataEvent = require("GameTrackDataEvent");
var $z1DataMgr = require("DataMgr");
var $z1PlayerMgr = require("PlayerMgr");
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;
var def_Loading = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiRoot = null;
    e.progressBar = null;
    e.labPro = null;
    e.logo = null;
    e.soft = null;
    e.process = 0;
    e.sceneName = "Main";
    return e;
  }
  cc__extends(_ctor, t);
  _ctor.prototype.applyLoadingDisclaimerEnglish = function () {
    if (!this.uiRoot) {
      return;
    }
    var t = this.uiRoot.getChildByName("UILoading");
    if (!t) {
      return;
    }
    var e = t.getChildByName("ndInfo");
    if (!e || e.children.length < 2) {
      return;
    }
    var n = e.children[0].getComponent(cc.Label);
    var i = e.children[1].getComponent(cc.Label);
    if (n) {
      n.string = "Healthy Gaming Advisory";
    }
    if (i) {
      i.string = "\nResist harmful games and refuse pirated games. Protect yourself and stay alert to fraud.\nModerate play benefits the mind; excessive play harms your health. Manage your time wisely and enjoy a healthy life.";
    }
  };
  _ctor.prototype.onLoad = function () {
    cc.director.preloadScene(this.sceneName);
    this.loadLogo();
    this.applyLoadingDisclaimerEnglish();
  };
  _ctor.prototype.start = function () {
    var t = this;
    cc.game.addPersistRootNode(this.uiRoot);
    this.progressBar.fillRange = 0;
    this.labPro.string = "0%";
    this.applyLoadingDisclaimerEnglish();
    $z1PlatformManager.PlatformManager.getInstance().init();
    $z1ResCacheMgr.ResCacheMgr.getInstance().init();
    $z1UIMgr.UIMgr.getInstance().addUICnf($z1Config.UICF);
    $z1UIMgr.UIMgr.getInstance().Init(this.uiRoot);
    $z1AudioMgr.AudioMgr.getInstance().init($z1Config.AudioCF);
    $z1EventMgr.EventMgr.getInstance().on($z1Appcfg.BaseEventName.Loading, this, this.setProcessLoad);
    // TODO: 临时清档，上线前删除
    localStorage.clear();

    $z1SdkMgr.SdkMgr.getInstance().requestCheckVersion(function () {
      $z1ServerDataMgr.ServerdataMgr.init(function () {
        t.setProcessLoad($z1Appcfg.LoadingProcess.StartLoading);
      });
    });
    this.preloadUI();
    console.log("current app", $z1PlatformSetting.PlatformSetting.currentApp);
    console.log("current channel", $z1PlatformSetting.PlatformSetting.currentPlatform);
  };
  _ctor.prototype.setProcessLoad = function (t) {
    this.process = t / 100;
    this.labPro.string = t + "%";
    this.progressBar.fillRange = this.process;
    switch (t) {
      case $z1Appcfg.LoadingProcess.StartLoading:
        $z1DataMgr.DataMgr.getInstance().preload();
        break;
      case $z1Appcfg.LoadingProcess.ExcelCfg:
        $z1PlayerMgr.PlayerMgr.getInstance().preload();
        break;
      case $z1Appcfg.LoadingProcess.PlayerCfg:
        $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.dau);
        $z1KinghtFallModle.default.getInstance().preload(null);
        break;
      case $z1Appcfg.LoadingProcess.ResCfg:
      case $z1Appcfg.LoadingProcess.OtherCfg:
        break;
      case $z1Appcfg.LoadingProcess.EndLoading:
        cc.director.loadScene(this.sceneName);
    }
  };
  _ctor.prototype.preloadUI = function () {};
  _ctor.prototype.loadLogo = function () {
    var t = this;
    var e = "wg_jz_logo";
    switch ($z1PlatformSetting.PlatformSetting.currentApp) {
      case $z1PlatformSetting.AppName.Main:
        e = "wg_jz_logo";
        this.soft.string = "";
        break;
      case $z1PlatformSetting.AppName.MRDYX:
        e = "wg_jz_logo1";
        this.soft.string = "";
        break;
      case $z1PlatformSetting.AppName.ZSSWZ:
        e = "wg_jz_logo2";
        this.soft.string = "";
        break;
      default:
        e = "";
        this.soft.string = "";
    }
    $z1ResourceMgr.ResourceMgr.getInstance().loadSpriteframe("load", e, function (e) {
      e && cc.isValid(t.logo) && (t.logo.spriteFrame = e);
    });
  };
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "uiRoot", undefined);
  cc__decorate([ccp_property(cc.Sprite)], _ctor.prototype, "progressBar", undefined);
  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labPro", undefined);
  cc__decorate([ccp_property(cc.Sprite)], _ctor.prototype, "logo", undefined);
  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "soft", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);
exports.default = def_Loading;