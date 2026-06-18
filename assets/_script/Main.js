var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var $z1KinghtFallConfig = require("KinghtFallConfig");
var $z1KinghtFallEnum = require("KinghtFallEnum");
var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");
var $z1EventMgr = require("EventMgr");
var $z1SdkMgr = require("SdkMgr");
var $z1BPPayMgr = require("BPPayMgr");
var $z1UIMgr = require("UIMgr");
var $z1UIUtils = require("UIUtils");
var $z1Config = require("Config");
var $z1GameTrackData = require("GameTrackData");
var $z1GameTrackDataEvent = require("GameTrackDataEvent");
var $z1GameUserData = require("GameUserData");
var $z1PlayerMgr = require("PlayerMgr");
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;
var def_Main = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.root = null;
    e.cameraNode = null;
    e.temp = null;
    e.btnChangle = null;
    e.childTouch = false;
    e.mainCam = null;
    e.isFitHeight = false;
    e.isFitWidth = false;
    return e;
  }
  var n;
  cc__extends(_ctor, t);
  n = _ctor;
  _ctor.prototype.onLoad = function () {
    n.instance = this;

    // ── 生产环境静默所有 console.log/warn，防止敏感信息泄露至 DevTools ──
    // CC_DEBUG 在 Cocos Creator release 构建时为 false
    if (typeof CC_DEBUG === "undefined" || !CC_DEBUG) {
      var _noop = function () {};
      console.log  = _noop;
      console.warn = _noop;
      console.info = _noop;
      // console.error 保留，用于捕获真实运行时错误
    }

    $z1UIMgr.UIMgr.getInstance().getChildByName("UILoading").zIndex = 9999;
    this.adapt();
    this.preloadRes();
    var mgr = $z1BPPayMgr.BPPayMgr.getInstance();
    mgr.init({
      productId: "C660001",
      appId: "2170020271082263",
      gameServerUrl: "https://api.superarchitect.top"
    });
    this._verifyBPToken(mgr);

    // 玩家从 GCash 收银台返回游戏时立即检查订单，缩短到账感知延迟
    if (typeof my !== "undefined" && my.onShow) {
      my.onShow(function () {
        $z1BPPayMgr.BPPayMgr.getInstance().onAppResume();
      });
    }
  };

  // 从 URL 读取 token，换取 customerId 并注入到 BPPayMgr
  // 安全规则：customerId 只能来自服务端 verify 响应，绝不信任 URL 中的 customerId 参数
  _ctor.prototype._verifyBPToken = function (mgr) {
    try {
      var search = (typeof window !== "undefined" && window.location && window.location.search) || "";
      var params = {};
      search.replace(/^\?/, "").split("&").forEach(function (pair) {
        var kv = pair.split("=");
        if (kv[0]) { params[kv[0]] = decodeURIComponent(kv[1] || ""); }
      });

      // 安全防护：检测到 URL 中直接传入 customerId 但无 token，拒绝初始化并告警
      if (params["customerId"] && !params["token"]) {
        console.error("[Security] IDOR attempt detected: customerId in URL without token, rejected.");
        return;
      }

      var token = params["token"];
      if (!token) { return; }
      var gameServerUrl = mgr.gameServerUrl;
      var xhr = new XMLHttpRequest();
      xhr.timeout = 8000;
      xhr.open("GET", gameServerUrl + "game/login/verify?token=" + encodeURIComponent(token), true);
      xhr.onreadystatechange = function () {
        if (4 !== xhr.readyState) { return; }
        try {
          var resp = JSON.parse(xhr.responseText);
          if (resp && resp.code === 200 && resp.data && resp.data.customerId) {
            mgr.setUserInfo(resp.data.customerId, resp.data.loginName || resp.data.customerId);
            // 存储 session token，用于后续钻石消费服务端鉴权
            if (resp.data.sessionToken) {
              mgr.sessionToken = resp.data.sessionToken;
            }
            // 用服务端余额覆盖本地 localStorage（防篡改）
            if (typeof resp.data.diamond === "number") {
              try {
                var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");
                $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().setDiamondNum(resp.data.diamond);
              } catch (ex) { /* 数据层尚未初始化，忽略 */ }
            }
          }
        } catch (e) {
          console.error("[Main] BP token verify parse error", e);
        }
      };
      xhr.send();
    } catch (e) {
      console.error("[Main] _verifyBPToken error", e);
    }
  };
  _ctor.prototype.hideLoading = function () {
    $z1UIMgr.UIMgr.getInstance().getChildByName("UILoading").destroy();
  };
  _ctor.prototype.start = function () {
    var t = this;
    this.mainCam = cc.Camera.main;
    $z1UIMgr.UIMgr.getInstance().openUI($z1Config.UIID.UITouch, $z1Config.UIID.UINONE);
    $z1UIMgr.UIMgr.getInstance().openUIOfCallback($z1KinghtFallConfig.KinghtFallUIID.UITop, $z1Config.UIID.UINONE, function (e) {
      t.uiTop = e;
      $z1UIMgr.UIMgr.getInstance().openUIOfCallback($z1Config.UIID.UIReportTop, $z1Config.UIID.UINONE, function () {
        $z1UIMgr.UIMgr.getInstance().openUIOfCallback($z1KinghtFallConfig.KinghtFallUIID.UIHome, $z1Config.UIID.UINONE, function () {
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.guide1);
          t.hideLoading();
        });
      });
    });
    this.scheduleOnce(function () {
      $z1EventMgr.EventMgr.getInstance().emit("WCNGameEnd", "As a minor you can only play for one hour.");
    }, 3);
    $z1UIUtils.UIUtils.schedule(this.addTime, this, 1);
    var e = $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().getCrunetDay();
    $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.dau_day_X, e);
  };
  _ctor.prototype.onPlayVideo = function (t) {
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getMissionData().addAchNum($z1KinghtFallEnum.KinghtFallEnumAchiEnum.AdsWatch, t);
  };
  _ctor.prototype.addTime = function () {
    if ($z1PlayerMgr.PlayerMgr.getInstance().getTrackData().getTimeByKey($z1GameTrackData.TimeByKey.ONLINE_TIME) <= 18e3) {
      switch ($z1PlayerMgr.PlayerMgr.getInstance().getTrackData().addTimeByKey($z1GameTrackData.TimeByKey.ONLINE_TIME)) {
        case 60:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_1);
          break;
        case 180:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_3);
          break;
        case 300:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_5);
          break;
        case 420:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_7);
          break;
        case 600:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_10);
          break;
        case 900:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_15);
          break;
        case 1200:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_20);
          break;
        case 1800:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_30);
          break;
        case 3600:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_1h);
          break;
        case 10800:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_3h);
          break;
        case 18e3:
          $z1PlayerMgr.PlayerMgr.getInstance().getTrackData().youmengTrack($z1GameTrackDataEvent.TrackId.time_5h);
      }
    }
    $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getDailyData().addOnlineTime();
    $z1EventMgr.EventMgr.getInstance().emit($z1KinghtFallConfig.KinghtFallEventName.TimeUpdate);
  };
  _ctor.prototype.checkUserInfo = function (t) {
    var e = $z1PlayerMgr.PlayerMgr.getInstance().getUserData();
    if (e.getPlayerName()) {
      t && t();
    } else {
      $z1SdkMgr.SdkMgr.getInstance().getUserInfo(function (n, i) {
        var a = new $z1GameUserData.ThirdUserInfo();
        if (n) {
          e.setPlayerName(n);
          a.userName = n;
        }
        i && (a.imgUrl = i);
        if (n || i) {
          e.setThirdInfo(a);
        } else {
          e.setPlayerName("Me");
        }
        t && t();
      });
    }
  };
  _ctor.prototype.preloadRes = function () {};
  _ctor.prototype.adapt = function () {
    var t = cc.winSize.width / cc.winSize.height;
    var e = cc.Canvas.instance.designResolution.width / cc.Canvas.instance.designResolution.height;
    if (t <= 1 && t <= e) {
      this.setFitWidth();
    } else {
      this.setFitHeight();
    }
  };
  _ctor.prototype.setFitHeight = function () {
    cc.Canvas.instance.fitHeight = true;
    cc.Canvas.instance.fitWidth = false;
    this.isFitHeight = true;
  };
  _ctor.prototype.setFitWidth = function () {
    cc.Canvas.instance.fitHeight = false;
    cc.Canvas.instance.fitWidth = true;
    this.isFitWidth = true;
  };
  _ctor.prototype.getFitHeight = function () {
    return this.isFitHeight;
  };
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "root", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "cameraNode", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "temp", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnChangle", undefined);
  return n = cc__decorate([ccp_ccclass], _ctor);
}(cc.Component);
exports.default = def_Main;