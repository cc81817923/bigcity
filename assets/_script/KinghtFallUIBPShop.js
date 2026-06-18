var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", { value: true });

var $z1BaseUI          = require("BaseUI");
var $z1BPPayMgr        = require("BPPayMgr");
var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");
var $z1KinghtFallConfig    = require("KinghtFallConfig");

var cc__decorator = cc._decorator;
var ccp_ccclass   = cc__decorator.ccclass;
var ccp_property  = cc__decorator.property;

// ── 调色板（全部用代码渲染，零图片依赖）─────────────────────────────
var C = {
  panelBg:        new cc.Color( 28,  20,  64, 245), // 深紫底色
  headerBg:       new cc.Color( 38,  28,  88, 255), // 略亮顶栏
  cardBg:         new cc.Color( 46,  32, 106, 255), // 卡片底色
  cardBorder:     new cc.Color( 74,  53, 128, 200), // 普通边框
  cardHighlight:  new cc.Color(255, 215,   0, 255), // 金色高亮边框
  cardPopular:    new cc.Color(220,  60,  60, 200), // 红色热门边框
  featuredBg:     new cc.Color( 60,  40, 120, 255), // 特色卡背景
  featuredBorder: new cc.Color(255, 200,  40, 255), // 特色卡金框
  btnBuy:         new cc.Color(240, 160,  20, 255), // 购买按钮
  btnBuyPress:    new cc.Color(200, 120,  10, 255), // 按下色
  btnBuyText:     new cc.Color( 60,  20,   0, 255), // 按钮文字
  badgeTrial:     new cc.Color( 60, 180,  80, 220), // Trial 绿
  badgeFirst:     new cc.Color(220, 130,  20, 220), // 1st Purchase 橙
  badgePopular:   new cc.Color(210,  50,  50, 220), // Popular 红
  badgeBonus:     new cc.Color( 50, 130, 220, 220), // Bonus 蓝
  badgeBest:      new cc.Color(200, 160,   0, 220), // Best Value 金
  soldBg:         new cc.Color(  0,   0,   0, 160), // SOLD 蒙层
  overlayBg:      new cc.Color(  0,   0,   0, 180), // 全屏遮罩
  white:          new cc.Color(255, 255, 255, 255),
  textDim:        new cc.Color(180, 160, 220, 255), // 次要文字
  balanceBar:     new cc.Color( 20,  14,  50, 200), // 余额区背景
};

// ── 各档位 UI 附加元数据（不影响服务端数据，仅控制展示）────────────
// baseRate = goodsId3 的单价 (20 d/PHP)，更大包按此算 bonus
var BASE_DIAMONDS_PER_PHP = 20;   // goodsId=3: 400/20
var PACK_META = {
  1: { badge: "Trial Pack",    badgeColor: [100, 200, 120], highlight: false, borderColor: null },
  2: { badge: "1st Purchase!", badgeColor: [220, 140,  20], highlight: true,  borderColor: C.cardHighlight },
  3: { badge: "",              badgeColor: [80,   80,  80], highlight: false, borderColor: null },
  4: { badge: "Popular",       badgeColor: [210,  60,  60], highlight: false, borderColor: C.cardPopular },
  5: { badge: "Popular",       badgeColor: [210,  60,  60], highlight: false, borderColor: C.cardPopular   },
  6: { badge: "+20% Bonus",    badgeColor: [ 60, 140, 220], highlight: false, borderColor: null            },
  7: { badge: "+25% Bonus",    badgeColor: [150,  70, 220], highlight: false, borderColor: null            },
  8: { badge: "Best Value",    badgeColor: [220, 170,   0], highlight: true,  borderColor: C.cardHighlight },
};

// ── 节点/Label 构建辅助（模块级，避免重复代码）──────────────────
function _mkNode(name, x, y, w, h, parent) {
  var n = new cc.Node(name);
  n.setContentSize(w || 0, h || 0);
  n.setPosition(x || 0, y || 0);
  if (parent) { n.setParent(parent); }
  return n;
}
function _mkLabel(name, text, fontSize, color, x, y, parent) {
  var n = new cc.Node(name);
  var lab = n.addComponent(cc.Label);
  lab.string        = text || "";
  lab.fontSize      = fontSize || 24;
  lab.lineHeight    = (fontSize || 24) + 4;
  lab.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
  lab.verticalAlign   = cc.Label.VerticalAlign.CENTER;
  n.color = color || cc.Color.WHITE;
  n.setPosition(x || 0, y || 0);
  if (parent) { n.setParent(parent); }
  return n;
}

// ── 支付状态轮播文案 ──────────────────────────────────────────────
var PAY_STATUS_TIPS = [
  "Waiting for payment...",
  "Verifying payment...",
  "Confirming order...",
  "Almost done...",
];

// ============================================================
// KinghtFallUIBPShop
//
// prefab: commer/KinghtFallUIBPShop
//
// 编辑器需绑定的节点（见本文末的"节点结构说明"注释）：
//   labDiamondBalance  — 顶部当前钻石余额
//   ndFeatured         — 特色大卡节点（最高价商品，可选）
//   ndItemRoot         — 商品格子容器（需 Layout 组件，2列）
//   ndItemTpl          — 商品模板节点（active=false）
//   btnClose           — 关闭按钮
//   ndLoading          — 加载遮罩
//   ndError            — 错误节点
//   btnRetry           — 错误页重试按钮
//   ndPaying           — 支付中全屏遮罩
//   labPayStatus       — 支付中状态文字
// ============================================================
var def_KinghtFallUIBPShop = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.labDiamondBalance = null; // cc.Label
    e.ndFeatured        = null; // cc.Node  （可不绑定）
    e.ndItemRoot        = null; // cc.Node
    e.ndItemTpl         = null; // cc.Node  （模板，active=false）
    e.btnClose          = null; // cc.Node
    e.ndLoading         = null; // cc.Node
    e.ndError           = null; // cc.Node
    e.btnRetry          = null; // cc.Node
    e.ndPaying          = null; // cc.Node
    e.labPayStatus      = null; // cc.Label
    // ── 内部状态 ─────────────────────────────────────────
    e._shopData  = null;
    e._buying    = false;
    e._tipTimer  = null;
    return e;
  }
  cc__extends(_ctor, t);

  // ──────────────────────────────────────────────────────────
  // 生命周期
  // ──────────────────────────────────────────────────────────
  _ctor.prototype.start = function () {
    var self = this;
    this._buildUI();   // 先建节点，再绑事件、加载数据
    if (this.btnClose) {
      this.btnClose.on(cc.Node.EventType.TOUCH_END, function () { self.closeUI(); }, this);
    }
    if (this.btnRetry) {
      this.btnRetry.on(cc.Node.EventType.TOUCH_END, function () { self._loadShop(); }, this);
    }
    this._loadShop();
  };

  // ── 全代码建 UI（prefab 只需根节点 + 脚本 + Widget）──────────
  _ctor.prototype._buildUI = function () {
    var SW = cc.winSize.width  || 640;
    var SH = cc.winSize.height || 960;
    var PW = Math.min(SW - 120, 500);  // 两侧各留 60px，避免遮住侧边 UI
    var PH = Math.min(SH - 60, 880);
    var TOP = PH / 2;
    var root = this.node;

    // ① 全屏暗色遮罩：独立子节点，zIndex 低于面板
    //    用独立节点而非 root 本身，避免 BlockInputEvents 误拦子节点触摸
    var overlay = _mkNode("bgOverlay", 0, 0, SW, SH, root);
    overlay.zIndex = 0;
    overlay.addComponent(cc.BlockInputEvents);
    var og = overlay.addComponent(cc.Graphics);
    og.fillColor = new cc.Color(0, 0, 0, 160);
    og.rect(-SW / 2, -SH / 2, SW, SH);
    og.fill();

    // 面板主体（zIndex 高于 overlay，正常接收触摸）
    var panel = _mkNode("panel", 0, 0, PW, PH, root);
    panel.zIndex = 1;
    this._drawRoundRect(panel, PW, PH, 24, C.panelBg, C.cardBorder, 2);

    // ── 顶部栏（header 行离面板顶 52px，避免被 Featured 卡遮住）──
    var HDR_Y = TOP - 52;
    _mkLabel("labTitle", "Diamond Store", 30, C.white, -(PW / 4), HDR_Y, panel);

    // 关闭按钮：右上角（Label 放子节点，避免 Label 组件覆盖 contentSize 导致触摸区丢失）
    var btnClose = _mkNode("btnClose", PW / 2 - 32, HDR_Y, 40, 40, panel);
    this._drawRoundRect(btnClose, 40, 40, 20, C.cardBorder, null);
    _mkLabel("labX", "✕", 24, C.white, 0, 0, btnClose);
    btnClose.zIndex = 999;
    this.btnClose = btnClose;

    // 余额栏：在关闭按钮左侧，两者之间留 8px 间隙
    // 关闭按钮左边缘 = PW/2-32-20 = PW/2-52；余额栏右边缘 = PW/2-52-8 = PW/2-60
    // 余额栏宽 110，中心 x = PW/2-60-55 = PW/2-115
    var balBar = _mkNode("ndBalanceBar", PW / 2 - 115, HDR_Y, 110, 36, panel);
    this._paintBalanceBar(balBar);
    this._loadDiamondIcon(_mkNode("sprDiamondIcon", -34, 0, 24, 24, balBar));
    var labBalNode = _mkNode("labDiamondBalance", 20, 0, 74, 32, balBar);
    this.labDiamondBalance = labBalNode.addComponent(cc.Label);
    this.labDiamondBalance.string = "0";
    this.labDiamondBalance.fontSize = 19;
    labBalNode.color = C.white;

    // ── Featured 大卡（顶部 = TOP-80，低于 header 底 TOP-72，不遮标题）──
    var FEAT_H = 160;
    var FEAT_Y = TOP - 160;   // 卡顶 = TOP-160+80 = TOP-80
    var feat = _mkNode("ndFeatured", 0, FEAT_Y, PW - 20, FEAT_H, panel);
    this._paintFeaturedCard(feat);
    _mkLabel("labName",     "", 15, C.textDim,  0,  58, feat);
    _mkLabel("labDiamonds", "", 44, C.white,    0,  12, feat);
    _mkLabel("labPrice",    "", 22, C.textDim,  0, -26, feat);
    var ndBF = _mkNode("ndBadge", -(PW / 2 - 86), 54, 120, 28, feat);
    _mkLabel("labBadge", "", 13, C.white, 0, 0, ndBF);
    var btnBF = _mkNode("btnBuy", PW / 2 - 100, -52, 140, 44, feat);
    _mkLabel("labBtnText", "Buy Now", 20, C.btnBuyText, 0, 0, btnBF);
    _mkNode("sprDiamondImg", -(PW / 2 - 66), 8, 40, 40, feat);
    this.ndFeatured = feat;

    // ── ③ 可滚动商品列表 ─────────────────────────────────────
    var FEAT_BOTTOM = FEAT_Y - FEAT_H / 2 - 10;
    var SV_BOTTOM   = -TOP + 16;
    var svH         = FEAT_BOTTOM - SV_BOTTOM;
    var svCY        = (FEAT_BOTTOM + SV_BOTTOM) / 2;

    var svNode = _mkNode("sv", 0, svCY, PW, svH, panel);
    var sv = svNode.addComponent(cc.ScrollView);
    sv.vertical          = true;
    sv.horizontal        = false;
    sv.inertia           = true;
    sv.brake             = 0.75;
    sv.elastic           = true;
    sv.bounceDuration    = 0.23;
    sv.cancelInnerEvents = false;  // ② 允许内部按钮接收点击

    var viewNode = _mkNode("view", 0, 0, PW, svH, svNode);
    viewNode.addComponent(cc.Mask);

    // content 锚点顶对齐，从上往下排
    var ndItemRoot = _mkNode("ndItemRoot", 0, svH / 2, PW, 0, viewNode);
    ndItemRoot.anchorY = 1;
    sv.content = ndItemRoot;
    this.ndItemRoot = ndItemRoot;

    // 模板卡
    var tpl = _mkNode("ndItemTpl", 0, 0, 210, 270, ndItemRoot);
    tpl.active = false;
    _mkNode("sprDiamondImg", 0, 95, 40, 40, tpl);
    _mkLabel("labDiamonds", "", 36, C.white,    0,  52, tpl);
    _mkLabel("labPrice",    "", 22, C.textDim,  0,   8, tpl);
    _mkLabel("labName",     "", 14, C.textDim,  0, -22, tpl);
    var ndBT = _mkNode("ndBadge", 0, 122, 110, 28, tpl);
    _mkLabel("labBadge", "", 13, C.white, 0, 0, ndBT);
    var btnBT = _mkNode("btnBuy", 0, -105, 160, 44, tpl);
    _mkLabel("labBtnText", "Buy Now", 20, C.btnBuyText, 0, 0, btnBT);
    _mkNode("ndSoldOut", 0, 0, 220, 280, tpl).active = false;
    this.ndItemTpl = tpl;

    // ── 遮罩层（都挂在 panel 上，覆盖面板区域）──────────────
    var ndL = _mkNode("ndLoading", 0, 0, PW, PH, panel);
    ndL.active = false; ndL.zIndex = 10;
    this._paintOverlay(ndL);
    _mkLabel("labLoading", "Loading...", 30, C.white, 0, 0, ndL);
    this.ndLoading = ndL;

    var ndE = _mkNode("ndError", 0, 0, PW, PH, panel);
    ndE.active = false; ndE.zIndex = 10;
    this._paintOverlay(ndE);
    _mkLabel("labErrMsg", "Failed to load shop", 26, C.white, 0, 60, ndE);
    var btnR = _mkNode("btnRetry", 0, -10, 200, 56, ndE);
    this._drawRoundRect(btnR, 200, 56, 28, C.btnBuy, null);
    _mkLabel("labRetry", "Retry", 26, C.btnBuyText, 0, 0, btnR);
    this.ndError  = ndE;
    this.btnRetry = btnR;

    var ndP = _mkNode("ndPaying", 0, 0, PW, PH, panel);
    ndP.active = false; ndP.zIndex = 10;
    this._paintOverlay(ndP);
    var labPSNode = _mkNode("labPayStatus", 0, 0, PW - 40, 48, ndP);
    this.labPayStatus = labPSNode.addComponent(cc.Label);
    this.labPayStatus.string = "";
    this.labPayStatus.fontSize = 26;
    labPSNode.color = C.white;
    this.ndPaying = ndP;
  };

  _ctor.prototype.onDestroy = function () {
    if (this._tipTimer) { clearInterval(this._tipTimer); this._tipTimer = null; }
  };

  // ──────────────────────────────────────────────────────────
  // 数据加载
  // ──────────────────────────────────────────────────────────
  _ctor.prototype._loadShop = function () {
    var self = this;
    this._setState("loading");
    var shopData = {
      coin: $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getDiamondNum(),
      riskCorrection: 1,
      shopItems: [
        { goodsId: 1, price: 1,   diamonds: 60,    name: "Starter" },
        { goodsId: 3, price: 20,  diamonds: 400,   name: "Pack 1"  },
        { goodsId: 4, price: 50,  diamonds: 1100,  name: "Pack 2"  },
        { goodsId: 6, price: 100, diamonds: 2400,  name: "Pack 3"  },
        { goodsId: 7, price: 200, diamonds: 5000,  name: "Pack 4"  },
        { goodsId: 8, price: 500, diamonds: 13000, name: "Pack 5"  },
      ],
    };
    self._shopData = shopData;
    self._renderAll(shopData);
    self._setState("idle");
  };

  // ──────────────────────────────────────────────────────────
  // 渲染
  // ──────────────────────────────────────────────────────────
  _ctor.prototype._renderAll = function (data) {
    this._syncBalance(data.coin);

    var items = data.shopItems || [];

    // 找出最高价商品作为特色卡
    var featuredItem = this._findFeaturedItem(items);

    // 渲染特色大卡（编辑器若未绑定 ndFeatured 则跳过）
    if (this.ndFeatured && featuredItem) {
      this._renderFeaturedCard(this.ndFeatured, featuredItem, data.riskCorrection);
    }

    // 渲染格子商品列表（手动 2 列定位，不依赖 Layout 组件）
    if (this.ndItemRoot && this.ndItemTpl) {
      var children = this.ndItemRoot.children.slice();
      for (var i = 0; i < children.length; i++) {
        if (children[i] !== this.ndItemTpl) { children[i].destroy(); }
      }
      var self   = this;
      var COLS   = 2;
      var CW     = 210, CH = 270;
      var GAPX   = 12,  GAPY = 14;
      var PADX   = 10;
      // 行列从左上角往下铺，原点在 ndItemRoot 锚点（0.5,0.5）
      // totalW = COLS*CW + (COLS-1)*GAPX + 2*PADX
      var totalW = COLS * CW + (COLS - 1) * GAPX + 2 * PADX;
      var startX = -totalW / 2 + PADX + CW / 2;
      var startY = -CH / 2 - PADX;          // 第一行顶部留 padding
      items.forEach(function (item, idx) {
        var col  = idx % COLS;
        var row  = Math.floor(idx / COLS);
        var node = cc.instantiate(self.ndItemTpl);
        node.active = true;
        node.setContentSize(CW, CH);
        node.setPosition(
          startX + col * (CW + GAPX),
          startY - row * (CH + GAPY)
        );
        node.setParent(self.ndItemRoot);
        self._renderItemCard(node, item, data.riskCorrection);
      });
      // 调整容器高度，方便 ScrollView 计算（若有）
      var rows = Math.ceil(items.length / COLS);
      var totalH = rows * CH + (rows - 1) * GAPY + 2 * PADX;
      this.ndItemRoot.setContentSize(totalW, totalH);
    }
  };

  _ctor.prototype._findFeaturedItem = function (items) {
    if (!items || !items.length) { return null; }
    var best = items[0];
    for (var i = 1; i < items.length; i++) {
      if (items[i].price > best.price) { best = items[i]; }
    }
    return best;
  };

  // 渲染特色大卡（单独展示区，样式由编辑器决定）
  _ctor.prototype._renderFeaturedCard = function (node, item, riskCorrection) {
    var self  = this;
    var meta  = PACK_META[item.goodsId] || { badge: "Best Value", badgeColor: [220, 170, 0] };
    var bonus = this._calcBonus(item);
    var badgeText = bonus > 0 ? ("+" + bonus + "% Bonus") : meta.badge;

    this._setLabel(node, "labDiamonds", this._formatNum(item.diamonds));
    this._setLabel(node, "labPrice",    "PHP " + item.price);
    this._setLabel(node, "labName",     item.name || "");

    // badge：labBadge 在 ndBadge 子层，_setLabel 只查直接子节点查不到，需手动两步访问
    var ndBadge = node.getChildByName("ndBadge");
    if (ndBadge) {
      ndBadge.active = badgeText.length > 0;
      if (badgeText.length > 0) {
        this._paintBadge(ndBadge, C.badgeBest);
        var bLab = ndBadge.getChildByName("labBadge");
        if (bLab) {
          var bLabComp = bLab.getComponent(cc.Label);
          if (bLabComp) { bLabComp.string = badgeText; }
          bLab.color = C.white;
        }
      }
    }

    // 购买按钮
    var btnBuy = node.getChildByName("btnBuy");
    if (btnBuy) {
      this._paintBtn(btnBuy, true);
      btnBuy.off(cc.Node.EventType.TOUCH_END);
      (function (capturedItem) {
        btnBuy.on(cc.Node.EventType.TOUCH_END, function () {
          self._onBuyItem(capturedItem, riskCorrection);
        }, self);
      })(item);
    }
  };

  // 渲染格子中单个商品卡片
  _ctor.prototype._renderItemCard = function (node, item, riskCorrection) {
    var self      = this;
    var meta      = PACK_META[item.goodsId] || { badge: "", badgeColor: [80, 80, 80], highlight: false, borderColor: null };
    var bonus     = this._calcBonus(item);
    var isSold    = (item.goodsId === 2 && riskCorrection === 0);
    var badgeText = bonus > 0 ? ("+" + bonus + "% Bonus") : meta.badge;

    // ── Graphics：卡片背景 + 彩色边框 ────────────────────────
    this._paintCard(node, meta, isSold);

    // 钻石数（最醒目）
    this._setLabel(node, "labDiamonds", this._formatNum(item.diamonds));
    // 价格
    this._setLabel(node, "labPrice", "PHP " + item.price);
    // 商品名（可选）
    this._setLabel(node, "labName", item.name || "");
    // 钻石图标（异步加载，首次慢但后续有缓存）
    this._loadDiamondIcon(node.getChildByName("sprDiamondImg"));

    // Badge（Graphics 画胶囊 + Label 文字）
    var ndBadge = node.getChildByName("ndBadge");
    if (ndBadge) {
      ndBadge.active = badgeText.length > 0;
      if (badgeText.length > 0) {
        var bColor = new cc.Color(meta.badgeColor[0], meta.badgeColor[1], meta.badgeColor[2], 220);
        this._paintBadge(ndBadge, bColor);
        var badgeLab = ndBadge.getChildByName("labBadge");
        if (badgeLab) {
          var lab = badgeLab.getComponent(cc.Label);
          if (lab) { lab.string = badgeText; badgeLab.color = C.white; }
        }
      }
    }

    // ndHighlight：有彩色边框时通过 _paintCard 的描边实现，此节点直接隐藏
    var ndHighlight = node.getChildByName("ndHighlight");
    if (ndHighlight) { ndHighlight.active = false; }

    // 已售（1st Purchase 已购）蒙层
    var ndSoldOut = node.getChildByName("ndSoldOut");
    if (ndSoldOut) {
      ndSoldOut.active = isSold;
      if (isSold) { this._drawRoundRect(ndSoldOut, ndSoldOut.width || 220, ndSoldOut.height || 280, 18, C.soldBg, null); }
    }

    // 购买按钮（Graphics 画金色圆角）
    var btnBuy = node.getChildByName("btnBuy");
    if (btnBuy) {
      btnBuy.active = !isSold;
      this._paintBtn(btnBuy, true);
      btnBuy.off(cc.Node.EventType.TOUCH_END);
      if (!isSold) {
        (function (capturedItem) {
          btnBuy.on(cc.Node.EventType.TOUCH_END, function () {
            self._onBuyItem(capturedItem, riskCorrection);
          }, self);
        })(item);
      }
    }

    node.opacity = isSold ? 100 : 255;
  };

  // ──────────────────────────────────────────────────────────
  // 购买流程
  // ──────────────────────────────────────────────────────────
  _ctor.prototype._onBuyItem = function (item, riskCorrection) {
    if (this._buying) { return; }
    if (item.goodsId === 2 && riskCorrection === 0) { return; }

    var mgr = $z1BPPayMgr.BPPayMgr.getInstance();
    if (!mgr.customerId) { return; }

    this._buying = true;
    this._setState("paying");
    this._startPayTips();

    var gameOrderId = Date.now() + "_" + mgr.customerId;
    var self = this;

    mgr.doRecharge(item.price, item.goodsId, gameOrderId, function (success, result) {
      self._buying = false;
      self._stopPayTips();
      self._setState("idle");
      if (success && result) {
        self._onPurchaseSuccess(result);
      }
      // 失败：doRecharge 内部已有 warn log，此处静默恢复
    });
  };

  _ctor.prototype._onPurchaseSuccess = function (result) {
    var userData = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData();
    if (result.diamonds != null) {
      userData.setDiamondNum(userData.getDiamondNum() + result.diamonds);
    }
    // 刷新商品页（更新钻石余额 + 1st Purchase 状态）
    this._loadShop();
  };

  // 轮播支付提示文案
  _ctor.prototype._startPayTips = function () {
    var self = this;
    var idx  = 0;
    this._setPayStatus(PAY_STATUS_TIPS[0]);
    this._tipTimer = setInterval(function () {
      if (!self._buying) { self._stopPayTips(); return; }
      idx = (idx + 1) % PAY_STATUS_TIPS.length;
      self._setPayStatus(PAY_STATUS_TIPS[idx]);
    }, 4000);
  };

  _ctor.prototype._stopPayTips = function () {
    if (this._tipTimer) { clearInterval(this._tipTimer); this._tipTimer = null; }
  };

  // ──────────────────────────────────────────────────────────
  // 工具
  // ──────────────────────────────────────────────────────────

  // 同步余额显示（优先用服务端值，否则读本地）
  _ctor.prototype._syncBalance = function (serverCoin) {
    if (!this.labDiamondBalance) { return; }
    var local = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getDiamondNum();
    this.labDiamondBalance.string = this._formatNum(serverCoin != null ? serverCoin : local);
  };

  // 统一状态切换：loading / error / paying / idle
  _ctor.prototype._setState = function (state) {
    if (this.ndLoading) { this.ndLoading.active = state === "loading"; }
    if (this.ndError)   { this.ndError.active   = state === "error";   }
    if (this.ndPaying)  { this.ndPaying.active  = state === "paying";  }
  };

  _ctor.prototype._setPayStatus = function (text) {
    if (this.labPayStatus) { this.labPayStatus.string = text; }
  };

  // 计算相对 goodsId=3 基准的 bonus 百分比（返回整数，0 表示不显示）
  _ctor.prototype._calcBonus = function (item) {
    if (!item.price || item.price <= 0) { return 0; }
    var rate  = item.diamonds / item.price;
    var bonus = Math.round((rate / BASE_DIAMONDS_PER_PHP - 1) * 100);
    return bonus > 0 ? bonus : 0;
  };

  // 千位数字格式化：1000 → "1,000"
  _ctor.prototype._formatNum = function (n) {
    return ("" + (n || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 在 parent 下查找 childName 节点并设置其 Label 文字
  _ctor.prototype._setLabel = function (parent, childName, text) {
    var child = parent.getChildByName(childName);
    if (!child) { return; }
    var lab = child.getComponent(cc.Label);
    if (lab) { lab.string = text; }
  };

  // ──────────────────────────────────────────────────────────
  // cc.Graphics 绘制工具（代替图片资源）
  // ──────────────────────────────────────────────────────────

  // 在 node 上用 Graphics 画圆角矩形（自动添加/复用 Graphics 组件）
  // fillColor/strokeColor 传 null 则跳过
  _ctor.prototype._drawRoundRect = function (node, w, h, r, fillColor, strokeColor, strokeWidth) {
    var g = node.getComponent(cc.Graphics) || node.addComponent(cc.Graphics);
    g.clear();
    var x = -w / 2, y = -h / 2;
    if (fillColor) {
      g.fillColor = fillColor;
      g.roundRect(x, y, w, h, r);
      g.fill();
    }
    if (strokeColor) {
      g.strokeColor = strokeColor;
      g.lineWidth   = strokeWidth || 3;
      g.roundRect(x, y, w, h, r);
      g.stroke();
    }
  };

  // 给商品卡片节点画背景 + 彩色边框（isSold 则灰色）
  _ctor.prototype._paintCard = function (node, meta, isSold) {
    var w = node.width  || 220;
    var h = node.height || 280;
    var borderColor = isSold ? new cc.Color(80, 80, 80, 120)
                     : (meta.borderColor || C.cardBorder);
    this._drawRoundRect(node, w, h, 18, C.cardBg, borderColor, isSold ? 2 : 4);
  };

  // 给按钮节点画金色圆角背景
  _ctor.prototype._paintBtn = function (btnNode, active) {
    var w = btnNode.width  || 160;
    var h = btnNode.height ||  52;
    var fill = active ? C.btnBuy : new cc.Color(80, 70, 100, 200);
    this._drawRoundRect(btnNode, w, h, h / 2, fill, null);
    // 让按钮文字颜色配合
    var lab = btnNode.getChildByName("labBtnText");
    if (lab) { lab.color = active ? C.btnBuyText : new cc.Color(140, 130, 160, 255); }
  };

  // 给 badge 节点画胶囊形背景
  _ctor.prototype._paintBadge = function (badgeNode, color) {
    var w = badgeNode.width  || 110;
    var h = badgeNode.height ||  32;
    this._drawRoundRect(badgeNode, w, h, h / 2, color, null);
  };

  // 给特色大卡画金色描边背景
  _ctor.prototype._paintFeaturedCard = function (node) {
    var w = node.width  || 540;
    var h = node.height || 190;
    this._drawRoundRect(node, w, h, 22, C.featuredBg, C.featuredBorder, 5);
  };

  // 给遮罩层画半透明黑色
  _ctor.prototype._paintOverlay = function (node) {
    if (!node) { return; }
    var w = node.width  || 640;
    var h = node.height || 960;
    this._drawRoundRect(node, w, h, 0, C.overlayBg, null);
  };

  // 给余额栏画深色胶囊
  _ctor.prototype._paintBalanceBar = function (node) {
    if (!node) { return; }
    var w = node.width  || 200;
    var h = node.height ||  48;
    this._drawRoundRect(node, w, h, h / 2, C.balanceBar, C.cardBorder, 1);
  };

  // 从 KinghtFallIconGood bundle 加载钻石图标到 Sprite 节点
  // iconName = "wg_ty_zs"（goodsCfg 中钻石的 icon 字段）
  _ctor.prototype._loadDiamondIcon = function (spriteNode) {
    if (!spriteNode) { return; }
    var bundleName = $z1KinghtFallConfig.KinghtFallBundelName
                   ? $z1KinghtFallConfig.KinghtFallBundelName.IconGood
                   : "KinghtFallIconGood";
    cc.assetManager.loadBundle(bundleName, function (err, bundle) {
      if (err || !bundle) { return; }
      bundle.load("wg_ty_zs/spriteFrame", cc.SpriteFrame, function (err2, sf) {
        if (err2 || !sf) { return; }
        var spr = spriteNode.getComponent(cc.Sprite) || spriteNode.addComponent(cc.Sprite);
        spr.spriteFrame = sf;
      });
    });
  };

  // 一次性初始化面板级 Graphics（在 start 调用）
  _ctor.prototype._initPanelGraphics = function () {
    var PW = 600, PH = 900;   // 面板尺寸，与 ndBg 一致
    var TOP_Y   =  PH / 2;    // 面板顶部 y（相对 root 中心）

    // ── 面板背景 ─────────────────────────────────────────────
    var ndBg = this.node.getChildByName("root") &&
               this.node.getChildByName("root").getChildByName("ndBg");
    if (ndBg) {
      ndBg.setPosition(0, 0);
      ndBg.setContentSize(PW, PH);
      this._drawRoundRect(ndBg, PW, PH, 24, C.panelBg, C.cardBorder, 2);
    }

    // ── 关闭按钮（右上角）────────────────────────────────────
    if (this.btnClose) {
      this.btnClose.setPosition(PW / 2 - 40, TOP_Y - 40);
      this._drawRoundRect(this.btnClose, 56, 56, 28, C.cardBorder, null);
      var labX = this.btnClose.getChildByName("labBtnText") ||
                 this.btnClose.addComponent && null;
      if (!this.btnClose.getComponent(cc.Label)) {
        var lc = this.btnClose.addComponent(cc.Label);
        lc.string = "✕"; lc.fontSize = 32; lc.lineHeight = 40;
        this.btnClose.color = C.white;
      }
    }

    // ── 余额栏（顶部）────────────────────────────────────────
    var ndHeader = this.node.getChildByName("ndHeader");
    var ndBalanceBar = ndHeader && ndHeader.getChildByName("ndBalanceBar");
    if (ndBalanceBar) {
      ndBalanceBar.setPosition(-PW / 2 + 120, TOP_Y - 48);
      ndBalanceBar.setContentSize(200, 48);
      this._paintBalanceBar(ndBalanceBar);
    }

    // ── ndFeatured 定位（面板上半区）─────────────────────────
    if (this.ndFeatured) {
      this.ndFeatured.setPosition(0, TOP_Y - 160);
      this.ndFeatured.setContentSize(540, 190);
      this._paintFeaturedCard(this.ndFeatured);
    }

    // ── ndItemRoot 定位（featured 下方）──────────────────────
    if (this.ndItemRoot) {
      this.ndItemRoot.setPosition(0, TOP_Y - 400);
    }

    // 遮罩层（加载中 / 支付中）
    if (this.ndLoading) {
      this.ndLoading.setPosition(0, 0);
      this.ndLoading.setContentSize(PW, PH);
    }
    this._paintOverlay(this.ndLoading);
    this._paintOverlay(this.ndPaying);

    // 钻石图标
    if (ndHeader) { this._loadDiamondIcon(ndHeader.getChildByName("sprDiamondIcon")); }
    if (this.ndFeatured) { this._loadDiamondIcon(this.ndFeatured.getChildByName("sprDiamondImg")); }
  };

  // ── @property 绑定 ────────────────────────────────────────
  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labDiamondBalance", undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "ndFeatured",        undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "ndItemRoot",        undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "ndItemTpl",         undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "btnClose",          undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "ndLoading",         undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "ndError",           undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "btnRetry",          undefined);
  cc__decorate([ccp_property(cc.Node)],  _ctor.prototype, "ndPaying",          undefined);
  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labPayStatus",      undefined);

  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI.default);

exports.default = def_KinghtFallUIBPShop;

// ============================================================
// 节点结构说明（Cocos Creator 编辑器搭建 prefab，★=空节点即可，无需图片）
//
// KinghtFallUIBPShop  [挂载本脚本]
//   ├── ndBg ★★            唯一需要美术出图的背景（1张，深色渐变面板）
//   │
//   ├── ndHeader
//   │   ├── labTitle          Label "Diamond Store"，字号 38，白色
//   │   ├── ndBalanceBar ★   空节点，脚本自动画深色胶囊背景
//   │   │   ├── sprDiamondIcon Sprite，脚本自动加载游戏内钻石图标
//   │   │   └── labDiamondBalance Label  ← 脚本绑定
//   │   └── btnClose ★       空节点，放"✕"Label 即可  ← 脚本绑定
//   │
//   ├── ndFeatured ★         空节点，脚本自动画金框大卡（可选）← 脚本绑定
//   │   ├── ndBadge ★        空节点，脚本自动画胶囊背景
//   │   │   └── labBadge      Label badge 文字
//   │   ├── sprDiamondImg     Sprite，脚本自动加载钻石图标
//   │   ├── labDiamonds       Label "x13,000"，字号 52
//   │   ├── labName           Label 包名
//   │   ├── labPrice          Label "PHP 500"
//   │   └── btnBuy ★         空节点，脚本自动画金色按钮
//   │       └── labBtnText    Label "Buy Now"
//   │
//   ├── ndScrollView          ScrollView 组件（vertical）
//   │   └── view
//   │       └── ndItemRoot    Layout（Grid，2列）← 脚本绑定
//   │           └── ndItemTpl active=false ← 脚本绑定（建议 220×280）
//   │               ├── ndBadge ★    空节点，脚本画彩色胶囊
//   │               │   └── labBadge Label
//   │               ├── sprDiamondImg Sprite，脚本自动加载
//   │               ├── labDiamonds  Label 钻石数（大字，字号 40）
//   │               ├── labName      Label 包名（可省略）
//   │               ├── labPrice     Label "PHP 100"（字号 26）
//   │               ├── btnBuy ★     空节点，脚本画金色按钮
//   │               │   └── labBtnText  Label "Buy Now"
//   │               └── ndSoldOut ★  空节点，active=false，脚本画半透明蒙层
//   │
//   ├── ndLoading ★          空节点 active=false，脚本画黑色遮罩 ← 脚本绑定
//   │   └── labLoading        Label "Loading..."
//   │
//   ├── ndError ★            空节点 active=false ← 脚本绑定
//   │   ├── labErrMsg         Label "Failed to load shop"
//   │   └── btnRetry          重试按钮 ← 脚本绑定
//   │       └── labRetry      Label "Retry"
//   │
//   └── ndPaying              全屏遮罩 active=false ← 脚本绑定
//       ├── ndSpinner         旋转动画节点（可用帧动画）
//       └── labPayStatus      Label 状态文字 ← 脚本绑定
//
// ── Badge 逻辑 ───────────────────────────────────────────────
// goodsId  Badge 文字         颜色
//   1      "Trial Pack"       绿色  #64C878
//   2      "1st Purchase!"    橙色  #DC8C14  （已购后灰显，ndSoldOut 激活）
//   3      (无)               —
//   4/5    "Popular"          红色  #D23C3C
//   6      "+20% Bonus"       蓝色  #3C8CDC
//   7      "+25% Bonus"       紫色  #9646DC
//   8      "Best Value"       金色  #DCAA00  （ndHighlight 激活，高亮描边）
//
// ── ndItemRoot Layout 推荐设置 ──────────────────────────────
//   Type: Grid  · Start Axis: Horizontal  · Constraint: Fixed Column Count 2
//   Cell Size: (220, 280)  · Spacing X: 12  · Spacing Y: 16
//   Padding: Top 12, Bottom 12, Left 12, Right 12
//   Resize Mode: Container
// ============================================================
