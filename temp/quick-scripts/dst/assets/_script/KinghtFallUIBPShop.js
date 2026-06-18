
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallUIBPShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2d3eT1anuMnQ4fKjtMXW5/', 'KinghtFallUIBPShop');
// _script/KinghtFallUIBPShop.js

"use strict";

var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseUI = require("BaseUI");

var $z1BPPayMgr = require("BPPayMgr");

var $z1KinghtFallPlayerMgr = require("KinghtFallPlayerMgr");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property; // ── 调色板（全部用代码渲染，零图片依赖）─────────────────────────────

var C = {
  panelBg: new cc.Color(28, 20, 64, 245),
  // 深紫底色
  headerBg: new cc.Color(38, 28, 88, 255),
  // 略亮顶栏
  cardBg: new cc.Color(46, 32, 106, 255),
  // 卡片底色
  cardBorder: new cc.Color(74, 53, 128, 200),
  // 普通边框
  cardHighlight: new cc.Color(255, 215, 0, 255),
  // 金色高亮边框
  cardPopular: new cc.Color(220, 60, 60, 200),
  // 红色热门边框
  featuredBg: new cc.Color(60, 40, 120, 255),
  // 特色卡背景
  featuredBorder: new cc.Color(255, 200, 40, 255),
  // 特色卡金框
  btnBuy: new cc.Color(240, 160, 20, 255),
  // 购买按钮
  btnBuyPress: new cc.Color(200, 120, 10, 255),
  // 按下色
  btnBuyText: new cc.Color(60, 20, 0, 255),
  // 按钮文字
  badgeTrial: new cc.Color(60, 180, 80, 220),
  // Trial 绿
  badgeFirst: new cc.Color(220, 130, 20, 220),
  // 1st Purchase 橙
  badgePopular: new cc.Color(210, 50, 50, 220),
  // Popular 红
  badgeBonus: new cc.Color(50, 130, 220, 220),
  // Bonus 蓝
  badgeBest: new cc.Color(200, 160, 0, 220),
  // Best Value 金
  soldBg: new cc.Color(0, 0, 0, 160),
  // SOLD 蒙层
  overlayBg: new cc.Color(0, 0, 0, 180),
  // 全屏遮罩
  white: new cc.Color(255, 255, 255, 255),
  textDim: new cc.Color(180, 160, 220, 255),
  // 次要文字
  balanceBar: new cc.Color(20, 14, 50, 200) // 余额区背景

}; // ── 各档位 UI 附加元数据（不影响服务端数据，仅控制展示）────────────
// baseRate = goodsId3 的单价 (20 d/PHP)，更大包按此算 bonus

var BASE_DIAMONDS_PER_PHP = 20; // goodsId=3: 400/20

var PACK_META = {
  1: {
    badge: "Trial Pack",
    badgeColor: [100, 200, 120],
    highlight: false,
    borderColor: null
  },
  2: {
    badge: "1st Purchase!",
    badgeColor: [220, 140, 20],
    highlight: true,
    borderColor: C.cardHighlight
  },
  3: {
    badge: "",
    badgeColor: [80, 80, 80],
    highlight: false,
    borderColor: null
  },
  4: {
    badge: "Popular",
    badgeColor: [210, 60, 60],
    highlight: false,
    borderColor: C.cardPopular
  },
  5: {
    badge: "Popular",
    badgeColor: [210, 60, 60],
    highlight: false,
    borderColor: C.cardPopular
  },
  6: {
    badge: "+20% Bonus",
    badgeColor: [60, 140, 220],
    highlight: false,
    borderColor: null
  },
  7: {
    badge: "+25% Bonus",
    badgeColor: [150, 70, 220],
    highlight: false,
    borderColor: null
  },
  8: {
    badge: "Best Value",
    badgeColor: [220, 170, 0],
    highlight: true,
    borderColor: C.cardHighlight
  }
}; // ── 节点/Label 构建辅助（模块级，避免重复代码）──────────────────

function _mkNode(name, x, y, w, h, parent) {
  var n = new cc.Node(name);
  n.setContentSize(w || 0, h || 0);
  n.setPosition(x || 0, y || 0);

  if (parent) {
    n.setParent(parent);
  }

  return n;
}

function _mkLabel(name, text, fontSize, color, x, y, parent) {
  var n = new cc.Node(name);
  var lab = n.addComponent(cc.Label);
  lab.string = text || "";
  lab.fontSize = fontSize || 24;
  lab.lineHeight = (fontSize || 24) + 4;
  lab.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
  lab.verticalAlign = cc.Label.VerticalAlign.CENTER;
  n.color = color || cc.Color.WHITE;
  n.setPosition(x || 0, y || 0);

  if (parent) {
    n.setParent(parent);
  }

  return n;
} // ── 支付状态轮播文案 ──────────────────────────────────────────────


var PAY_STATUS_TIPS = ["Waiting for payment...", "Verifying payment...", "Confirming order...", "Almost done..."]; // ============================================================
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

    e.ndFeatured = null; // cc.Node  （可不绑定）

    e.ndItemRoot = null; // cc.Node

    e.ndItemTpl = null; // cc.Node  （模板，active=false）

    e.btnClose = null; // cc.Node

    e.ndLoading = null; // cc.Node

    e.ndError = null; // cc.Node

    e.btnRetry = null; // cc.Node

    e.ndPaying = null; // cc.Node

    e.labPayStatus = null; // cc.Label
    // ── 内部状态 ─────────────────────────────────────────

    e._shopData = null;
    e._buying = false;
    e._tipTimer = null;
    return e;
  }

  cc__extends(_ctor, t); // ──────────────────────────────────────────────────────────
  // 生命周期
  // ──────────────────────────────────────────────────────────

  _ctor.prototype.start = function () {
    var self = this;

    this._buildUI(); // 先建节点，再绑事件、加载数据


    if (this.btnClose) {
      this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
        self.closeUI();
      }, this);
    }

    if (this.btnRetry) {
      this.btnRetry.on(cc.Node.EventType.TOUCH_END, function () {
        self._loadShop();
      }, this);
    }

    this._loadShop();
  }; // ── 全代码建 UI（prefab 只需根节点 + 脚本 + Widget）──────────


  _ctor.prototype._buildUI = function () {
    var SW = cc.winSize.width || 640;
    var SH = cc.winSize.height || 960;
    var PW = Math.min(SW - 120, 500); // 两侧各留 60px，避免遮住侧边 UI

    var PH = Math.min(SH - 60, 880);
    var TOP = PH / 2;
    var root = this.node; // ① 全屏暗色遮罩：独立子节点，zIndex 低于面板
    //    用独立节点而非 root 本身，避免 BlockInputEvents 误拦子节点触摸

    var overlay = _mkNode("bgOverlay", 0, 0, SW, SH, root);

    overlay.zIndex = 0;
    overlay.addComponent(cc.BlockInputEvents);
    var og = overlay.addComponent(cc.Graphics);
    og.fillColor = new cc.Color(0, 0, 0, 160);
    og.rect(-SW / 2, -SH / 2, SW, SH);
    og.fill(); // 面板主体（zIndex 高于 overlay，正常接收触摸）

    var panel = _mkNode("panel", 0, 0, PW, PH, root);

    panel.zIndex = 1;

    this._drawRoundRect(panel, PW, PH, 24, C.panelBg, C.cardBorder, 2); // ── 顶部栏（header 行离面板顶 52px，避免被 Featured 卡遮住）──


    var HDR_Y = TOP - 52;

    _mkLabel("labTitle", "Diamond Store", 30, C.white, -(PW / 4), HDR_Y, panel); // 关闭按钮：右上角（Label 放子节点，避免 Label 组件覆盖 contentSize 导致触摸区丢失）


    var btnClose = _mkNode("btnClose", PW / 2 - 32, HDR_Y, 40, 40, panel);

    this._drawRoundRect(btnClose, 40, 40, 20, C.cardBorder, null);

    _mkLabel("labX", "✕", 24, C.white, 0, 0, btnClose);

    btnClose.zIndex = 999;
    this.btnClose = btnClose; // 余额栏：在关闭按钮左侧，两者之间留 8px 间隙
    // 关闭按钮左边缘 = PW/2-32-20 = PW/2-52；余额栏右边缘 = PW/2-52-8 = PW/2-60
    // 余额栏宽 110，中心 x = PW/2-60-55 = PW/2-115

    var balBar = _mkNode("ndBalanceBar", PW / 2 - 115, HDR_Y, 110, 36, panel);

    this._paintBalanceBar(balBar);

    this._loadDiamondIcon(_mkNode("sprDiamondIcon", -34, 0, 24, 24, balBar));

    var labBalNode = _mkNode("labDiamondBalance", 20, 0, 74, 32, balBar);

    this.labDiamondBalance = labBalNode.addComponent(cc.Label);
    this.labDiamondBalance.string = "0";
    this.labDiamondBalance.fontSize = 19;
    labBalNode.color = C.white; // ── Featured 大卡（顶部 = TOP-80，低于 header 底 TOP-72，不遮标题）──

    var FEAT_H = 160;
    var FEAT_Y = TOP - 160; // 卡顶 = TOP-160+80 = TOP-80

    var feat = _mkNode("ndFeatured", 0, FEAT_Y, PW - 20, FEAT_H, panel);

    this._paintFeaturedCard(feat);

    _mkLabel("labName", "", 15, C.textDim, 0, 58, feat);

    _mkLabel("labDiamonds", "", 44, C.white, 0, 12, feat);

    _mkLabel("labPrice", "", 22, C.textDim, 0, -26, feat);

    var ndBF = _mkNode("ndBadge", -(PW / 2 - 86), 54, 120, 28, feat);

    _mkLabel("labBadge", "", 13, C.white, 0, 0, ndBF);

    var btnBF = _mkNode("btnBuy", PW / 2 - 100, -52, 140, 44, feat);

    _mkLabel("labBtnText", "Buy Now", 20, C.btnBuyText, 0, 0, btnBF);

    _mkNode("sprDiamondImg", -(PW / 2 - 66), 8, 40, 40, feat);

    this.ndFeatured = feat; // ── ③ 可滚动商品列表 ─────────────────────────────────────

    var FEAT_BOTTOM = FEAT_Y - FEAT_H / 2 - 10;
    var SV_BOTTOM = -TOP + 16;
    var svH = FEAT_BOTTOM - SV_BOTTOM;
    var svCY = (FEAT_BOTTOM + SV_BOTTOM) / 2;

    var svNode = _mkNode("sv", 0, svCY, PW, svH, panel);

    var sv = svNode.addComponent(cc.ScrollView);
    sv.vertical = true;
    sv.horizontal = false;
    sv.inertia = true;
    sv.brake = 0.75;
    sv.elastic = true;
    sv.bounceDuration = 0.23;
    sv.cancelInnerEvents = false; // ② 允许内部按钮接收点击

    var viewNode = _mkNode("view", 0, 0, PW, svH, svNode);

    viewNode.addComponent(cc.Mask); // content 锚点顶对齐，从上往下排

    var ndItemRoot = _mkNode("ndItemRoot", 0, svH / 2, PW, 0, viewNode);

    ndItemRoot.anchorY = 1;
    sv.content = ndItemRoot;
    this.ndItemRoot = ndItemRoot; // 模板卡

    var tpl = _mkNode("ndItemTpl", 0, 0, 210, 270, ndItemRoot);

    tpl.active = false;

    _mkNode("sprDiamondImg", 0, 95, 40, 40, tpl);

    _mkLabel("labDiamonds", "", 36, C.white, 0, 52, tpl);

    _mkLabel("labPrice", "", 22, C.textDim, 0, 8, tpl);

    _mkLabel("labName", "", 14, C.textDim, 0, -22, tpl);

    var ndBT = _mkNode("ndBadge", 0, 122, 110, 28, tpl);

    _mkLabel("labBadge", "", 13, C.white, 0, 0, ndBT);

    var btnBT = _mkNode("btnBuy", 0, -105, 160, 44, tpl);

    _mkLabel("labBtnText", "Buy Now", 20, C.btnBuyText, 0, 0, btnBT);

    _mkNode("ndSoldOut", 0, 0, 220, 280, tpl).active = false;
    this.ndItemTpl = tpl; // ── 遮罩层（都挂在 panel 上，覆盖面板区域）──────────────

    var ndL = _mkNode("ndLoading", 0, 0, PW, PH, panel);

    ndL.active = false;
    ndL.zIndex = 10;

    this._paintOverlay(ndL);

    _mkLabel("labLoading", "Loading...", 30, C.white, 0, 0, ndL);

    this.ndLoading = ndL;

    var ndE = _mkNode("ndError", 0, 0, PW, PH, panel);

    ndE.active = false;
    ndE.zIndex = 10;

    this._paintOverlay(ndE);

    _mkLabel("labErrMsg", "Failed to load shop", 26, C.white, 0, 60, ndE);

    var btnR = _mkNode("btnRetry", 0, -10, 200, 56, ndE);

    this._drawRoundRect(btnR, 200, 56, 28, C.btnBuy, null);

    _mkLabel("labRetry", "Retry", 26, C.btnBuyText, 0, 0, btnR);

    this.ndError = ndE;
    this.btnRetry = btnR;

    var ndP = _mkNode("ndPaying", 0, 0, PW, PH, panel);

    ndP.active = false;
    ndP.zIndex = 10;

    this._paintOverlay(ndP);

    var labPSNode = _mkNode("labPayStatus", 0, 0, PW - 40, 48, ndP);

    this.labPayStatus = labPSNode.addComponent(cc.Label);
    this.labPayStatus.string = "";
    this.labPayStatus.fontSize = 26;
    labPSNode.color = C.white;
    this.ndPaying = ndP;
  };

  _ctor.prototype.onDestroy = function () {
    if (this._tipTimer) {
      clearInterval(this._tipTimer);
      this._tipTimer = null;
    }
  }; // ──────────────────────────────────────────────────────────
  // 数据加载
  // ──────────────────────────────────────────────────────────


  _ctor.prototype._loadShop = function () {
    var self = this;

    this._setState("loading");

    var shopData = {
      coin: $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getDiamondNum(),
      riskCorrection: 1,
      shopItems: [{
        goodsId: 1,
        price: 1,
        diamonds: 60,
        name: "Starter"
      }, {
        goodsId: 3,
        price: 20,
        diamonds: 400,
        name: "Pack 1"
      }, {
        goodsId: 4,
        price: 50,
        diamonds: 1100,
        name: "Pack 2"
      }, {
        goodsId: 6,
        price: 100,
        diamonds: 2400,
        name: "Pack 3"
      }, {
        goodsId: 7,
        price: 200,
        diamonds: 5000,
        name: "Pack 4"
      }, {
        goodsId: 8,
        price: 500,
        diamonds: 13000,
        name: "Pack 5"
      }]
    };
    self._shopData = shopData;

    self._renderAll(shopData);

    self._setState("idle");
  }; // ──────────────────────────────────────────────────────────
  // 渲染
  // ──────────────────────────────────────────────────────────


  _ctor.prototype._renderAll = function (data) {
    this._syncBalance(data.coin);

    var items = data.shopItems || []; // 找出最高价商品作为特色卡

    var featuredItem = this._findFeaturedItem(items); // 渲染特色大卡（编辑器若未绑定 ndFeatured 则跳过）


    if (this.ndFeatured && featuredItem) {
      this._renderFeaturedCard(this.ndFeatured, featuredItem, data.riskCorrection);
    } // 渲染格子商品列表（手动 2 列定位，不依赖 Layout 组件）


    if (this.ndItemRoot && this.ndItemTpl) {
      var children = this.ndItemRoot.children.slice();

      for (var i = 0; i < children.length; i++) {
        if (children[i] !== this.ndItemTpl) {
          children[i].destroy();
        }
      }

      var self = this;
      var COLS = 2;
      var CW = 210,
          CH = 270;
      var GAPX = 12,
          GAPY = 14;
      var PADX = 10; // 行列从左上角往下铺，原点在 ndItemRoot 锚点（0.5,0.5）
      // totalW = COLS*CW + (COLS-1)*GAPX + 2*PADX

      var totalW = COLS * CW + (COLS - 1) * GAPX + 2 * PADX;
      var startX = -totalW / 2 + PADX + CW / 2;
      var startY = -CH / 2 - PADX; // 第一行顶部留 padding

      items.forEach(function (item, idx) {
        var col = idx % COLS;
        var row = Math.floor(idx / COLS);
        var node = cc.instantiate(self.ndItemTpl);
        node.active = true;
        node.setContentSize(CW, CH);
        node.setPosition(startX + col * (CW + GAPX), startY - row * (CH + GAPY));
        node.setParent(self.ndItemRoot);

        self._renderItemCard(node, item, data.riskCorrection);
      }); // 调整容器高度，方便 ScrollView 计算（若有）

      var rows = Math.ceil(items.length / COLS);
      var totalH = rows * CH + (rows - 1) * GAPY + 2 * PADX;
      this.ndItemRoot.setContentSize(totalW, totalH);
    }
  };

  _ctor.prototype._findFeaturedItem = function (items) {
    if (!items || !items.length) {
      return null;
    }

    var best = items[0];

    for (var i = 1; i < items.length; i++) {
      if (items[i].price > best.price) {
        best = items[i];
      }
    }

    return best;
  }; // 渲染特色大卡（单独展示区，样式由编辑器决定）


  _ctor.prototype._renderFeaturedCard = function (node, item, riskCorrection) {
    var self = this;
    var meta = PACK_META[item.goodsId] || {
      badge: "Best Value",
      badgeColor: [220, 170, 0]
    };

    var bonus = this._calcBonus(item);

    var badgeText = bonus > 0 ? "+" + bonus + "% Bonus" : meta.badge;

    this._setLabel(node, "labDiamonds", this._formatNum(item.diamonds));

    this._setLabel(node, "labPrice", "PHP " + item.price);

    this._setLabel(node, "labName", item.name || ""); // badge：labBadge 在 ndBadge 子层，_setLabel 只查直接子节点查不到，需手动两步访问


    var ndBadge = node.getChildByName("ndBadge");

    if (ndBadge) {
      ndBadge.active = badgeText.length > 0;

      if (badgeText.length > 0) {
        this._paintBadge(ndBadge, C.badgeBest);

        var bLab = ndBadge.getChildByName("labBadge");

        if (bLab) {
          var bLabComp = bLab.getComponent(cc.Label);

          if (bLabComp) {
            bLabComp.string = badgeText;
          }

          bLab.color = C.white;
        }
      }
    } // 购买按钮


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
  }; // 渲染格子中单个商品卡片


  _ctor.prototype._renderItemCard = function (node, item, riskCorrection) {
    var self = this;
    var meta = PACK_META[item.goodsId] || {
      badge: "",
      badgeColor: [80, 80, 80],
      highlight: false,
      borderColor: null
    };

    var bonus = this._calcBonus(item);

    var isSold = item.goodsId === 2 && riskCorrection === 0;
    var badgeText = bonus > 0 ? "+" + bonus + "% Bonus" : meta.badge; // ── Graphics：卡片背景 + 彩色边框 ────────────────────────

    this._paintCard(node, meta, isSold); // 钻石数（最醒目）


    this._setLabel(node, "labDiamonds", this._formatNum(item.diamonds)); // 价格


    this._setLabel(node, "labPrice", "PHP " + item.price); // 商品名（可选）


    this._setLabel(node, "labName", item.name || ""); // 钻石图标（异步加载，首次慢但后续有缓存）


    this._loadDiamondIcon(node.getChildByName("sprDiamondImg")); // Badge（Graphics 画胶囊 + Label 文字）


    var ndBadge = node.getChildByName("ndBadge");

    if (ndBadge) {
      ndBadge.active = badgeText.length > 0;

      if (badgeText.length > 0) {
        var bColor = new cc.Color(meta.badgeColor[0], meta.badgeColor[1], meta.badgeColor[2], 220);

        this._paintBadge(ndBadge, bColor);

        var badgeLab = ndBadge.getChildByName("labBadge");

        if (badgeLab) {
          var lab = badgeLab.getComponent(cc.Label);

          if (lab) {
            lab.string = badgeText;
            badgeLab.color = C.white;
          }
        }
      }
    } // ndHighlight：有彩色边框时通过 _paintCard 的描边实现，此节点直接隐藏


    var ndHighlight = node.getChildByName("ndHighlight");

    if (ndHighlight) {
      ndHighlight.active = false;
    } // 已售（1st Purchase 已购）蒙层


    var ndSoldOut = node.getChildByName("ndSoldOut");

    if (ndSoldOut) {
      ndSoldOut.active = isSold;

      if (isSold) {
        this._drawRoundRect(ndSoldOut, ndSoldOut.width || 220, ndSoldOut.height || 280, 18, C.soldBg, null);
      }
    } // 购买按钮（Graphics 画金色圆角）


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
  }; // ──────────────────────────────────────────────────────────
  // 购买流程
  // ──────────────────────────────────────────────────────────


  _ctor.prototype._onBuyItem = function (item, riskCorrection) {
    if (this._buying) {
      return;
    }

    if (item.goodsId === 2 && riskCorrection === 0) {
      return;
    }

    var mgr = $z1BPPayMgr.BPPayMgr.getInstance();

    if (!mgr.customerId) {
      return;
    }

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
      } // 失败：doRecharge 内部已有 warn log，此处静默恢复

    });
  };

  _ctor.prototype._onPurchaseSuccess = function (result) {
    var userData = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData();

    if (result.diamonds != null) {
      userData.setDiamondNum(userData.getDiamondNum() + result.diamonds);
    } // 刷新商品页（更新钻石余额 + 1st Purchase 状态）


    this._loadShop();
  }; // 轮播支付提示文案


  _ctor.prototype._startPayTips = function () {
    var self = this;
    var idx = 0;

    this._setPayStatus(PAY_STATUS_TIPS[0]);

    this._tipTimer = setInterval(function () {
      if (!self._buying) {
        self._stopPayTips();

        return;
      }

      idx = (idx + 1) % PAY_STATUS_TIPS.length;

      self._setPayStatus(PAY_STATUS_TIPS[idx]);
    }, 4000);
  };

  _ctor.prototype._stopPayTips = function () {
    if (this._tipTimer) {
      clearInterval(this._tipTimer);
      this._tipTimer = null;
    }
  }; // ──────────────────────────────────────────────────────────
  // 工具
  // ──────────────────────────────────────────────────────────
  // 同步余额显示（优先用服务端值，否则读本地）


  _ctor.prototype._syncBalance = function (serverCoin) {
    if (!this.labDiamondBalance) {
      return;
    }

    var local = $z1KinghtFallPlayerMgr.KinghtFallPlayerMgr.getInstance().getUserData().getDiamondNum();
    this.labDiamondBalance.string = this._formatNum(serverCoin != null ? serverCoin : local);
  }; // 统一状态切换：loading / error / paying / idle


  _ctor.prototype._setState = function (state) {
    if (this.ndLoading) {
      this.ndLoading.active = state === "loading";
    }

    if (this.ndError) {
      this.ndError.active = state === "error";
    }

    if (this.ndPaying) {
      this.ndPaying.active = state === "paying";
    }
  };

  _ctor.prototype._setPayStatus = function (text) {
    if (this.labPayStatus) {
      this.labPayStatus.string = text;
    }
  }; // 计算相对 goodsId=3 基准的 bonus 百分比（返回整数，0 表示不显示）


  _ctor.prototype._calcBonus = function (item) {
    if (!item.price || item.price <= 0) {
      return 0;
    }

    var rate = item.diamonds / item.price;
    var bonus = Math.round((rate / BASE_DIAMONDS_PER_PHP - 1) * 100);
    return bonus > 0 ? bonus : 0;
  }; // 千位数字格式化：1000 → "1,000"


  _ctor.prototype._formatNum = function (n) {
    return ("" + (n || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }; // 在 parent 下查找 childName 节点并设置其 Label 文字


  _ctor.prototype._setLabel = function (parent, childName, text) {
    var child = parent.getChildByName(childName);

    if (!child) {
      return;
    }

    var lab = child.getComponent(cc.Label);

    if (lab) {
      lab.string = text;
    }
  }; // ──────────────────────────────────────────────────────────
  // cc.Graphics 绘制工具（代替图片资源）
  // ──────────────────────────────────────────────────────────
  // 在 node 上用 Graphics 画圆角矩形（自动添加/复用 Graphics 组件）
  // fillColor/strokeColor 传 null 则跳过


  _ctor.prototype._drawRoundRect = function (node, w, h, r, fillColor, strokeColor, strokeWidth) {
    var g = node.getComponent(cc.Graphics) || node.addComponent(cc.Graphics);
    g.clear();
    var x = -w / 2,
        y = -h / 2;

    if (fillColor) {
      g.fillColor = fillColor;
      g.roundRect(x, y, w, h, r);
      g.fill();
    }

    if (strokeColor) {
      g.strokeColor = strokeColor;
      g.lineWidth = strokeWidth || 3;
      g.roundRect(x, y, w, h, r);
      g.stroke();
    }
  }; // 给商品卡片节点画背景 + 彩色边框（isSold 则灰色）


  _ctor.prototype._paintCard = function (node, meta, isSold) {
    var w = node.width || 220;
    var h = node.height || 280;
    var borderColor = isSold ? new cc.Color(80, 80, 80, 120) : meta.borderColor || C.cardBorder;

    this._drawRoundRect(node, w, h, 18, C.cardBg, borderColor, isSold ? 2 : 4);
  }; // 给按钮节点画金色圆角背景


  _ctor.prototype._paintBtn = function (btnNode, active) {
    var w = btnNode.width || 160;
    var h = btnNode.height || 52;
    var fill = active ? C.btnBuy : new cc.Color(80, 70, 100, 200);

    this._drawRoundRect(btnNode, w, h, h / 2, fill, null); // 让按钮文字颜色配合


    var lab = btnNode.getChildByName("labBtnText");

    if (lab) {
      lab.color = active ? C.btnBuyText : new cc.Color(140, 130, 160, 255);
    }
  }; // 给 badge 节点画胶囊形背景


  _ctor.prototype._paintBadge = function (badgeNode, color) {
    var w = badgeNode.width || 110;
    var h = badgeNode.height || 32;

    this._drawRoundRect(badgeNode, w, h, h / 2, color, null);
  }; // 给特色大卡画金色描边背景


  _ctor.prototype._paintFeaturedCard = function (node) {
    var w = node.width || 540;
    var h = node.height || 190;

    this._drawRoundRect(node, w, h, 22, C.featuredBg, C.featuredBorder, 5);
  }; // 给遮罩层画半透明黑色


  _ctor.prototype._paintOverlay = function (node) {
    if (!node) {
      return;
    }

    var w = node.width || 640;
    var h = node.height || 960;

    this._drawRoundRect(node, w, h, 0, C.overlayBg, null);
  }; // 给余额栏画深色胶囊


  _ctor.prototype._paintBalanceBar = function (node) {
    if (!node) {
      return;
    }

    var w = node.width || 200;
    var h = node.height || 48;

    this._drawRoundRect(node, w, h, h / 2, C.balanceBar, C.cardBorder, 1);
  }; // 从 KinghtFallIconGood bundle 加载钻石图标到 Sprite 节点
  // iconName = "wg_ty_zs"（goodsCfg 中钻石的 icon 字段）


  _ctor.prototype._loadDiamondIcon = function (spriteNode) {
    if (!spriteNode) {
      return;
    }

    var bundleName = $z1KinghtFallConfig.KinghtFallBundelName ? $z1KinghtFallConfig.KinghtFallBundelName.IconGood : "KinghtFallIconGood";
    cc.assetManager.loadBundle(bundleName, function (err, bundle) {
      if (err || !bundle) {
        return;
      }

      bundle.load("wg_ty_zs/spriteFrame", cc.SpriteFrame, function (err2, sf) {
        if (err2 || !sf) {
          return;
        }

        var spr = spriteNode.getComponent(cc.Sprite) || spriteNode.addComponent(cc.Sprite);
        spr.spriteFrame = sf;
      });
    });
  }; // 一次性初始化面板级 Graphics（在 start 调用）


  _ctor.prototype._initPanelGraphics = function () {
    var PW = 600,
        PH = 900; // 面板尺寸，与 ndBg 一致

    var TOP_Y = PH / 2; // 面板顶部 y（相对 root 中心）
    // ── 面板背景 ─────────────────────────────────────────────

    var ndBg = this.node.getChildByName("root") && this.node.getChildByName("root").getChildByName("ndBg");

    if (ndBg) {
      ndBg.setPosition(0, 0);
      ndBg.setContentSize(PW, PH);

      this._drawRoundRect(ndBg, PW, PH, 24, C.panelBg, C.cardBorder, 2);
    } // ── 关闭按钮（右上角）────────────────────────────────────


    if (this.btnClose) {
      this.btnClose.setPosition(PW / 2 - 40, TOP_Y - 40);

      this._drawRoundRect(this.btnClose, 56, 56, 28, C.cardBorder, null);

      var labX = this.btnClose.getChildByName("labBtnText") || this.btnClose.addComponent && null;

      if (!this.btnClose.getComponent(cc.Label)) {
        var lc = this.btnClose.addComponent(cc.Label);
        lc.string = "✕";
        lc.fontSize = 32;
        lc.lineHeight = 40;
        this.btnClose.color = C.white;
      }
    } // ── 余额栏（顶部）────────────────────────────────────────


    var ndHeader = this.node.getChildByName("ndHeader");
    var ndBalanceBar = ndHeader && ndHeader.getChildByName("ndBalanceBar");

    if (ndBalanceBar) {
      ndBalanceBar.setPosition(-PW / 2 + 120, TOP_Y - 48);
      ndBalanceBar.setContentSize(200, 48);

      this._paintBalanceBar(ndBalanceBar);
    } // ── ndFeatured 定位（面板上半区）─────────────────────────


    if (this.ndFeatured) {
      this.ndFeatured.setPosition(0, TOP_Y - 160);
      this.ndFeatured.setContentSize(540, 190);

      this._paintFeaturedCard(this.ndFeatured);
    } // ── ndItemRoot 定位（featured 下方）──────────────────────


    if (this.ndItemRoot) {
      this.ndItemRoot.setPosition(0, TOP_Y - 400);
    } // 遮罩层（加载中 / 支付中）


    if (this.ndLoading) {
      this.ndLoading.setPosition(0, 0);
      this.ndLoading.setContentSize(PW, PH);
    }

    this._paintOverlay(this.ndLoading);

    this._paintOverlay(this.ndPaying); // 钻石图标


    if (ndHeader) {
      this._loadDiamondIcon(ndHeader.getChildByName("sprDiamondIcon"));
    }

    if (this.ndFeatured) {
      this._loadDiamondIcon(this.ndFeatured.getChildByName("sprDiamondImg"));
    }
  }; // ── @property 绑定 ────────────────────────────────────────


  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labDiamondBalance", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndFeatured", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndItemRoot", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndItemTpl", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnClose", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndLoading", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndError", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "btnRetry", undefined);
  cc__decorate([ccp_property(cc.Node)], _ctor.prototype, "ndPaying", undefined);
  cc__decorate([ccp_property(cc.Label)], _ctor.prototype, "labPayStatus", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseUI["default"]);

exports["default"] = def_KinghtFallUIBPShop; // ============================================================
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

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxVSUJQU2hvcC5qcyJdLCJuYW1lcyI6WyJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUJhc2VVSSIsInJlcXVpcmUiLCIkejFCUFBheU1nciIsIiR6MUtpbmdodEZhbGxQbGF5ZXJNZ3IiLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiQyIsInBhbmVsQmciLCJDb2xvciIsImhlYWRlckJnIiwiY2FyZEJnIiwiY2FyZEJvcmRlciIsImNhcmRIaWdobGlnaHQiLCJjYXJkUG9wdWxhciIsImZlYXR1cmVkQmciLCJmZWF0dXJlZEJvcmRlciIsImJ0bkJ1eSIsImJ0bkJ1eVByZXNzIiwiYnRuQnV5VGV4dCIsImJhZGdlVHJpYWwiLCJiYWRnZUZpcnN0IiwiYmFkZ2VQb3B1bGFyIiwiYmFkZ2VCb251cyIsImJhZGdlQmVzdCIsInNvbGRCZyIsIm92ZXJsYXlCZyIsIndoaXRlIiwidGV4dERpbSIsImJhbGFuY2VCYXIiLCJCQVNFX0RJQU1PTkRTX1BFUl9QSFAiLCJQQUNLX01FVEEiLCJiYWRnZSIsImJhZGdlQ29sb3IiLCJoaWdobGlnaHQiLCJib3JkZXJDb2xvciIsIl9ta05vZGUiLCJuYW1lIiwieCIsInkiLCJ3IiwiaCIsInBhcmVudCIsIm4iLCJOb2RlIiwic2V0Q29udGVudFNpemUiLCJzZXRQb3NpdGlvbiIsInNldFBhcmVudCIsIl9ta0xhYmVsIiwidGV4dCIsImZvbnRTaXplIiwiY29sb3IiLCJsYWIiLCJhZGRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImxpbmVIZWlnaHQiLCJob3Jpem9udGFsQWxpZ24iLCJIb3Jpem9udGFsQWxpZ24iLCJDRU5URVIiLCJ2ZXJ0aWNhbEFsaWduIiwiVmVydGljYWxBbGlnbiIsIldISVRFIiwiUEFZX1NUQVRVU19USVBTIiwiZGVmX0tpbmdodEZhbGxVSUJQU2hvcCIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImxhYkRpYW1vbmRCYWxhbmNlIiwibmRGZWF0dXJlZCIsIm5kSXRlbVJvb3QiLCJuZEl0ZW1UcGwiLCJidG5DbG9zZSIsIm5kTG9hZGluZyIsIm5kRXJyb3IiLCJidG5SZXRyeSIsIm5kUGF5aW5nIiwibGFiUGF5U3RhdHVzIiwiX3Nob3BEYXRhIiwiX2J1eWluZyIsIl90aXBUaW1lciIsInByb3RvdHlwZSIsInN0YXJ0Iiwic2VsZiIsIl9idWlsZFVJIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJjbG9zZVVJIiwiX2xvYWRTaG9wIiwiU1ciLCJ3aW5TaXplIiwid2lkdGgiLCJTSCIsImhlaWdodCIsIlBXIiwiTWF0aCIsIm1pbiIsIlBIIiwiVE9QIiwicm9vdCIsIm5vZGUiLCJvdmVybGF5IiwiekluZGV4IiwiQmxvY2tJbnB1dEV2ZW50cyIsIm9nIiwiR3JhcGhpY3MiLCJmaWxsQ29sb3IiLCJyZWN0IiwiZmlsbCIsInBhbmVsIiwiX2RyYXdSb3VuZFJlY3QiLCJIRFJfWSIsImJhbEJhciIsIl9wYWludEJhbGFuY2VCYXIiLCJfbG9hZERpYW1vbmRJY29uIiwibGFiQmFsTm9kZSIsIkZFQVRfSCIsIkZFQVRfWSIsImZlYXQiLCJfcGFpbnRGZWF0dXJlZENhcmQiLCJuZEJGIiwiYnRuQkYiLCJGRUFUX0JPVFRPTSIsIlNWX0JPVFRPTSIsInN2SCIsInN2Q1kiLCJzdk5vZGUiLCJzdiIsIlNjcm9sbFZpZXciLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJpbmVydGlhIiwiYnJha2UiLCJlbGFzdGljIiwiYm91bmNlRHVyYXRpb24iLCJjYW5jZWxJbm5lckV2ZW50cyIsInZpZXdOb2RlIiwiTWFzayIsImFuY2hvclkiLCJjb250ZW50IiwidHBsIiwiYWN0aXZlIiwibmRCVCIsImJ0bkJUIiwibmRMIiwiX3BhaW50T3ZlcmxheSIsIm5kRSIsImJ0blIiLCJuZFAiLCJsYWJQU05vZGUiLCJvbkRlc3Ryb3kiLCJjbGVhckludGVydmFsIiwiX3NldFN0YXRlIiwic2hvcERhdGEiLCJjb2luIiwiS2luZ2h0RmFsbFBsYXllck1nciIsImdldEluc3RhbmNlIiwiZ2V0VXNlckRhdGEiLCJnZXREaWFtb25kTnVtIiwicmlza0NvcnJlY3Rpb24iLCJzaG9wSXRlbXMiLCJnb29kc0lkIiwicHJpY2UiLCJkaWFtb25kcyIsIl9yZW5kZXJBbGwiLCJkYXRhIiwiX3N5bmNCYWxhbmNlIiwiaXRlbXMiLCJmZWF0dXJlZEl0ZW0iLCJfZmluZEZlYXR1cmVkSXRlbSIsIl9yZW5kZXJGZWF0dXJlZENhcmQiLCJjaGlsZHJlbiIsInNsaWNlIiwiaSIsImxlbmd0aCIsImRlc3Ryb3kiLCJDT0xTIiwiQ1ciLCJDSCIsIkdBUFgiLCJHQVBZIiwiUEFEWCIsInRvdGFsVyIsInN0YXJ0WCIsInN0YXJ0WSIsImZvckVhY2giLCJpdGVtIiwiaWR4IiwiY29sIiwicm93IiwiZmxvb3IiLCJpbnN0YW50aWF0ZSIsIl9yZW5kZXJJdGVtQ2FyZCIsInJvd3MiLCJjZWlsIiwidG90YWxIIiwiYmVzdCIsIm1ldGEiLCJib251cyIsIl9jYWxjQm9udXMiLCJiYWRnZVRleHQiLCJfc2V0TGFiZWwiLCJfZm9ybWF0TnVtIiwibmRCYWRnZSIsImdldENoaWxkQnlOYW1lIiwiX3BhaW50QmFkZ2UiLCJiTGFiIiwiYkxhYkNvbXAiLCJnZXRDb21wb25lbnQiLCJfcGFpbnRCdG4iLCJvZmYiLCJjYXB0dXJlZEl0ZW0iLCJfb25CdXlJdGVtIiwiaXNTb2xkIiwiX3BhaW50Q2FyZCIsImJDb2xvciIsImJhZGdlTGFiIiwibmRIaWdobGlnaHQiLCJuZFNvbGRPdXQiLCJvcGFjaXR5IiwibWdyIiwiQlBQYXlNZ3IiLCJjdXN0b21lcklkIiwiX3N0YXJ0UGF5VGlwcyIsImdhbWVPcmRlcklkIiwiRGF0ZSIsIm5vdyIsImRvUmVjaGFyZ2UiLCJzdWNjZXNzIiwicmVzdWx0IiwiX3N0b3BQYXlUaXBzIiwiX29uUHVyY2hhc2VTdWNjZXNzIiwidXNlckRhdGEiLCJzZXREaWFtb25kTnVtIiwiX3NldFBheVN0YXR1cyIsInNldEludGVydmFsIiwic2VydmVyQ29pbiIsImxvY2FsIiwic3RhdGUiLCJyYXRlIiwicm91bmQiLCJyZXBsYWNlIiwiY2hpbGROYW1lIiwiY2hpbGQiLCJyIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VXaWR0aCIsImciLCJjbGVhciIsInJvdW5kUmVjdCIsImxpbmVXaWR0aCIsInN0cm9rZSIsImJ0bk5vZGUiLCJiYWRnZU5vZGUiLCJzcHJpdGVOb2RlIiwiYnVuZGxlTmFtZSIsIktpbmdodEZhbGxCdW5kZWxOYW1lIiwiSWNvbkdvb2QiLCJhc3NldE1hbmFnZXIiLCJsb2FkQnVuZGxlIiwiZXJyIiwiYnVuZGxlIiwibG9hZCIsIlNwcml0ZUZyYW1lIiwiZXJyMiIsInNmIiwic3ByIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJfaW5pdFBhbmVsR3JhcGhpY3MiLCJUT1BfWSIsIm5kQmciLCJsYWJYIiwibGMiLCJuZEhlYWRlciIsIm5kQmFsYW5jZUJhciIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQUVDLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUVBLElBQUlDLFNBQVMsR0FBWUMsT0FBTyxDQUFDLFFBQUQsQ0FBaEM7O0FBQ0EsSUFBSUMsV0FBVyxHQUFVRCxPQUFPLENBQUMsVUFBRCxDQUFoQzs7QUFDQSxJQUFJRSxzQkFBc0IsR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBQXBDOztBQUNBLElBQUlHLG1CQUFtQixHQUFNSCxPQUFPLENBQUMsa0JBQUQs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QUNpQixTQUFqQyxFQUE0QyxVQUE1QyxFQUFpRW9NLFNBQWpFLENBQVo7RUFDQWxTLFlBQVksQ0FBQyxDQUFDZ0IsWUFBWSxDQUFDSixFQUFFLENBQUMyQyxJQUFKLENBQWIsQ0FBRCxFQUEyQnNCLEtBQUssQ0FBQ2lCLFNBQWpDLEVBQTRDLFVBQTVDLEVBQWlFb00sU0FBakUsQ0FBWjtFQUNBbFMsWUFBWSxDQUFDLENBQUNnQixZQUFZLENBQUNKLEVBQUUsQ0FBQ3FELEtBQUosQ0FBYixDQUFELEVBQTJCWSxLQUFLLENBQUNpQixTQUFqQyxFQUE0QyxjQUE1QyxFQUFpRW9NLFNBQWpFLENBQVo7RUFFQSxPQUFPbFMsWUFBWSxDQUFDLENBQUNjLFdBQUQsQ0FBRCxFQUFnQitELEtBQWhCLENBQW5CO0FBQ0QsQ0F4bUI0QixDQXdtQjNCdkUsU0FBUyxXQXhtQmtCLENBQTdCOztBQTBtQkFGLE9BQU8sV0FBUCxHQUFrQnVFLHNCQUFsQixFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjY19fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcbnZhciBjY19fZGVjb3JhdGUgPSBfX2RlY29yYXRlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgJHoxQmFzZVVJICAgICAgICAgID0gcmVxdWlyZShcIkJhc2VVSVwiKTtcbnZhciAkejFCUFBheU1nciAgICAgICAgPSByZXF1aXJlKFwiQlBQYXlNZ3JcIik7XG52YXIgJHoxS2luZ2h0RmFsbFBsYXllck1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsUGxheWVyTWdyXCIpO1xudmFyICR6MUtpbmdodEZhbGxDb25maWcgICAgPSByZXF1aXJlKFwiS2luZ2h0RmFsbENvbmZpZ1wiKTtcblxudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzICAgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ICA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG5cbi8vIOKUgOKUgCDosIPoibLmnb/vvIjlhajpg6jnlKjku6PnoIHmuLLmn5PvvIzpm7blm77niYfkvp3otZbvvInilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbnZhciBDID0ge1xuICBwYW5lbEJnOiAgICAgICAgbmV3IGNjLkNvbG9yKCAyOCwgIDIwLCAgNjQsIDI0NSksIC8vIOa3see0q+W6leiJslxuICBoZWFkZXJCZzogICAgICAgbmV3IGNjLkNvbG9yKCAzOCwgIDI4LCAgODgsIDI1NSksIC8vIOeVpeS6rumhtuagj1xuICBjYXJkQmc6ICAgICAgICAgbmV3IGNjLkNvbG9yKCA0NiwgIDMyLCAxMDYsIDI1NSksIC8vIOWNoeeJh+W6leiJslxuICBjYXJkQm9yZGVyOiAgICAgbmV3IGNjLkNvbG9yKCA3NCwgIDUzLCAxMjgsIDIwMCksIC8vIOaZrumAmui+ueahhlxuICBjYXJkSGlnaGxpZ2h0OiAgbmV3IGNjLkNvbG9yKDI1NSwgMjE1LCAgIDAsIDI1NSksIC8vIOmHkeiJsumrmOS6rui+ueahhlxuICBjYXJkUG9wdWxhcjogICAgbmV3IGNjLkNvbG9yKDIyMCwgIDYwLCAgNjAsIDIwMCksIC8vIOe6ouiJsueDremXqOi+ueahhlxuICBmZWF0dXJlZEJnOiAgICAgbmV3IGNjLkNvbG9yKCA2MCwgIDQwLCAxMjAsIDI1NSksIC8vIOeJueiJsuWNoeiDjOaZr1xuICBmZWF0dXJlZEJvcmRlcjogbmV3IGNjLkNvbG9yKDI1NSwgMjAwLCAgNDAsIDI1NSksIC8vIOeJueiJsuWNoemHkeahhlxuICBidG5CdXk6ICAgICAgICAgbmV3IGNjLkNvbG9yKDI0MCwgMTYwLCAgMjAsIDI1NSksIC8vIOi0reS5sOaMiemSrlxuICBidG5CdXlQcmVzczogICAgbmV3IGNjLkNvbG9yKDIwMCwgMTIwLCAgMTAsIDI1NSksIC8vIOaMieS4i+iJslxuICBidG5CdXlUZXh0OiAgICAgbmV3IGNjLkNvbG9yKCA2MCwgIDIwLCAgIDAsIDI1NSksIC8vIOaMiemSruaWh+Wtl1xuICBiYWRnZVRyaWFsOiAgICAgbmV3IGNjLkNvbG9yKCA2MCwgMTgwLCAgODAsIDIyMCksIC8vIFRyaWFsIOe7v1xuICBiYWRnZUZpcnN0OiAgICAgbmV3IGNjLkNvbG9yKDIyMCwgMTMwLCAgMjAsIDIyMCksIC8vIDFzdCBQdXJjaGFzZSDmqZlcbiAgYmFkZ2VQb3B1bGFyOiAgIG5ldyBjYy5Db2xvcigyMTAsICA1MCwgIDUwLCAyMjApLCAvLyBQb3B1bGFyIOe6olxuICBiYWRnZUJvbnVzOiAgICAgbmV3IGNjLkNvbG9yKCA1MCwgMTMwLCAyMjAsIDIyMCksIC8vIEJvbnVzIOiTnVxuICBiYWRnZUJlc3Q6ICAgICAgbmV3IGNjLkNvbG9yKDIwMCwgMTYwLCAgIDAsIDIyMCksIC8vIEJlc3QgVmFsdWUg6YeRXG4gIHNvbGRCZzogICAgICAgICBuZXcgY2MuQ29sb3IoICAwLCAgIDAsICAgMCwgMTYwKSwgLy8gU09MRCDokpnlsYJcbiAgb3ZlcmxheUJnOiAgICAgIG5ldyBjYy5Db2xvciggIDAsICAgMCwgICAwLCAxODApLCAvLyDlhajlsY/pga7nvalcbiAgd2hpdGU6ICAgICAgICAgIG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpLFxuICB0ZXh0RGltOiAgICAgICAgbmV3IGNjLkNvbG9yKDE4MCwgMTYwLCAyMjAsIDI1NSksIC8vIOasoeimgeaWh+Wtl1xuICBiYWxhbmNlQmFyOiAgICAgbmV3IGNjLkNvbG9yKCAyMCwgIDE0LCAgNTAsIDIwMCksIC8vIOS9memineWMuuiDjOaZr1xufTtcblxuLy8g4pSA4pSAIOWQhOaho+S9jSBVSSDpmYTliqDlhYPmlbDmja7vvIjkuI3lvbHlk43mnI3liqHnq6/mlbDmja7vvIzku4XmjqfliLblsZXnpLrvvInilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIGJhc2VSYXRlID0gZ29vZHNJZDMg55qE5Y2V5Lu3ICgyMCBkL1BIUCnvvIzmm7TlpKfljIXmjInmraTnrpcgYm9udXNcbnZhciBCQVNFX0RJQU1PTkRTX1BFUl9QSFAgPSAyMDsgICAvLyBnb29kc0lkPTM6IDQwMC8yMFxudmFyIFBBQ0tfTUVUQSA9IHtcbiAgMTogeyBiYWRnZTogXCJUcmlhbCBQYWNrXCIsICAgIGJhZGdlQ29sb3I6IFsxMDAsIDIwMCwgMTIwXSwgaGlnaGxpZ2h0OiBmYWxzZSwgYm9yZGVyQ29sb3I6IG51bGwgfSxcbiAgMjogeyBiYWRnZTogXCIxc3QgUHVyY2hhc2UhXCIsIGJhZGdlQ29sb3I6IFsyMjAsIDE0MCwgIDIwXSwgaGlnaGxpZ2h0OiB0cnVlLCAgYm9yZGVyQ29sb3I6IEMuY2FyZEhpZ2hsaWdodCB9LFxuICAzOiB7IGJhZGdlOiBcIlwiLCAgICAgICAgICAgICAgYmFkZ2VDb2xvcjogWzgwLCAgIDgwLCAgODBdLCBoaWdobGlnaHQ6IGZhbHNlLCBib3JkZXJDb2xvcjogbnVsbCB9LFxuICA0OiB7IGJhZGdlOiBcIlBvcHVsYXJcIiwgICAgICAgYmFkZ2VDb2xvcjogWzIxMCwgIDYwLCAgNjBdLCBoaWdobGlnaHQ6IGZhbHNlLCBib3JkZXJDb2xvcjogQy5jYXJkUG9wdWxhciB9LFxuICA1OiB7IGJhZGdlOiBcIlBvcHVsYXJcIiwgICAgICAgYmFkZ2VDb2xvcjogWzIxMCwgIDYwLCAgNjBdLCBoaWdobGlnaHQ6IGZhbHNlLCBib3JkZXJDb2xvcjogQy5jYXJkUG9wdWxhciAgIH0sXG4gIDY6IHsgYmFkZ2U6IFwiKzIwJSBCb251c1wiLCAgICBiYWRnZUNvbG9yOiBbIDYwLCAxNDAsIDIyMF0sIGhpZ2hsaWdodDogZmFsc2UsIGJvcmRlckNvbG9yOiBudWxsICAgICAgICAgICAgfSxcbiAgNzogeyBiYWRnZTogXCIrMjUlIEJvbnVzXCIsICAgIGJhZGdlQ29sb3I6IFsxNTAsICA3MCwgMjIwXSwgaGlnaGxpZ2h0OiBmYWxzZSwgYm9yZGVyQ29sb3I6IG51bGwgICAgICAgICAgICB9LFxuICA4OiB7IGJhZGdlOiBcIkJlc3QgVmFsdWVcIiwgICAgYmFkZ2VDb2xvcjogWzIyMCwgMTcwLCAgIDBdLCBoaWdobGlnaHQ6IHRydWUsICBib3JkZXJDb2xvcjogQy5jYXJkSGlnaGxpZ2h0IH0sXG59O1xuXG4vLyDilIDilIAg6IqC54K5L0xhYmVsIOaehOW7uui+heWKqe+8iOaooeWdl+e6p++8jOmBv+WFjemHjeWkjeS7o+egge+8ieKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gX21rTm9kZShuYW1lLCB4LCB5LCB3LCBoLCBwYXJlbnQpIHtcbiAgdmFyIG4gPSBuZXcgY2MuTm9kZShuYW1lKTtcbiAgbi5zZXRDb250ZW50U2l6ZSh3IHx8IDAsIGggfHwgMCk7XG4gIG4uc2V0UG9zaXRpb24oeCB8fCAwLCB5IHx8IDApO1xuICBpZiAocGFyZW50KSB7IG4uc2V0UGFyZW50KHBhcmVudCk7IH1cbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBfbWtMYWJlbChuYW1lLCB0ZXh0LCBmb250U2l6ZSwgY29sb3IsIHgsIHksIHBhcmVudCkge1xuICB2YXIgbiA9IG5ldyBjYy5Ob2RlKG5hbWUpO1xuICB2YXIgbGFiID0gbi5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICBsYWIuc3RyaW5nICAgICAgICA9IHRleHQgfHwgXCJcIjtcbiAgbGFiLmZvbnRTaXplICAgICAgPSBmb250U2l6ZSB8fCAyNDtcbiAgbGFiLmxpbmVIZWlnaHQgICAgPSAoZm9udFNpemUgfHwgMjQpICsgNDtcbiAgbGFiLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XG4gIGxhYi52ZXJ0aWNhbEFsaWduICAgPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcbiAgbi5jb2xvciA9IGNvbG9yIHx8IGNjLkNvbG9yLldISVRFO1xuICBuLnNldFBvc2l0aW9uKHggfHwgMCwgeSB8fCAwKTtcbiAgaWYgKHBhcmVudCkgeyBuLnNldFBhcmVudChwYXJlbnQpOyB9XG4gIHJldHVybiBuO1xufVxuXG4vLyDilIDilIAg5pSv5LuY54q25oCB6L2u5pKt5paH5qGIIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxudmFyIFBBWV9TVEFUVVNfVElQUyA9IFtcbiAgXCJXYWl0aW5nIGZvciBwYXltZW50Li4uXCIsXG4gIFwiVmVyaWZ5aW5nIHBheW1lbnQuLi5cIixcbiAgXCJDb25maXJtaW5nIG9yZGVyLi4uXCIsXG4gIFwiQWxtb3N0IGRvbmUuLi5cIixcbl07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gS2luZ2h0RmFsbFVJQlBTaG9wXG4vL1xuLy8gcHJlZmFiOiBjb21tZXIvS2luZ2h0RmFsbFVJQlBTaG9wXG4vL1xuLy8g57yW6L6R5Zmo6ZyA57uR5a6a55qE6IqC54K577yI6KeB5pys5paH5pyr55qEXCLoioLngrnnu5PmnoTor7TmmI5cIuazqOmHiu+8ie+8mlxuLy8gICBsYWJEaWFtb25kQmFsYW5jZSAg4oCUIOmhtumDqOW9k+WJjemSu+efs+S9meminVxuLy8gICBuZEZlYXR1cmVkICAgICAgICAg4oCUIOeJueiJsuWkp+WNoeiKgueCue+8iOacgOmrmOS7t+WVhuWTge+8jOWPr+mAie+8iVxuLy8gICBuZEl0ZW1Sb290ICAgICAgICAg4oCUIOWVhuWTgeagvOWtkOWuueWZqO+8iOmcgCBMYXlvdXQg57uE5Lu277yMMuWIl++8iVxuLy8gICBuZEl0ZW1UcGwgICAgICAgICAg4oCUIOWVhuWTgeaooeadv+iKgueCue+8iGFjdGl2ZT1mYWxzZe+8iVxuLy8gICBidG5DbG9zZSAgICAgICAgICAg4oCUIOWFs+mXreaMiemSrlxuLy8gICBuZExvYWRpbmcgICAgICAgICAg4oCUIOWKoOi9vemBrue9qVxuLy8gICBuZEVycm9yICAgICAgICAgICAg4oCUIOmUmeivr+iKgueCuVxuLy8gICBidG5SZXRyeSAgICAgICAgICAg4oCUIOmUmeivr+mhtemHjeivleaMiemSrlxuLy8gICBuZFBheWluZyAgICAgICAgICAg4oCUIOaUr+S7mOS4reWFqOWxj+mBrue9qVxuLy8gICBsYWJQYXlTdGF0dXMgICAgICAg4oCUIOaUr+S7mOS4reeKtuaAgeaWh+Wtl1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgZGVmX0tpbmdodEZhbGxVSUJQU2hvcCA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmxhYkRpYW1vbmRCYWxhbmNlID0gbnVsbDsgLy8gY2MuTGFiZWxcbiAgICBlLm5kRmVhdHVyZWQgICAgICAgID0gbnVsbDsgLy8gY2MuTm9kZSAg77yI5Y+v5LiN57uR5a6a77yJXG4gICAgZS5uZEl0ZW1Sb290ICAgICAgICA9IG51bGw7IC8vIGNjLk5vZGVcbiAgICBlLm5kSXRlbVRwbCAgICAgICAgID0gbnVsbDsgLy8gY2MuTm9kZSAg77yI5qih5p2/77yMYWN0aXZlPWZhbHNl77yJXG4gICAgZS5idG5DbG9zZSAgICAgICAgICA9IG51bGw7IC8vIGNjLk5vZGVcbiAgICBlLm5kTG9hZGluZyAgICAgICAgID0gbnVsbDsgLy8gY2MuTm9kZVxuICAgIGUubmRFcnJvciAgICAgICAgICAgPSBudWxsOyAvLyBjYy5Ob2RlXG4gICAgZS5idG5SZXRyeSAgICAgICAgICA9IG51bGw7IC8vIGNjLk5vZGVcbiAgICBlLm5kUGF5aW5nICAgICAgICAgID0gbnVsbDsgLy8gY2MuTm9kZVxuICAgIGUubGFiUGF5U3RhdHVzICAgICAgPSBudWxsOyAvLyBjYy5MYWJlbFxuICAgIC8vIOKUgOKUgCDlhoXpg6jnirbmgIEg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgZS5fc2hvcERhdGEgID0gbnVsbDtcbiAgICBlLl9idXlpbmcgICAgPSBmYWxzZTtcbiAgICBlLl90aXBUaW1lciAgPSBudWxsO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcblxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgLy8g55Sf5ZG95ZGo5pyfXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICBfY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX2J1aWxkVUkoKTsgICAvLyDlhYjlu7roioLngrnvvIzlho3nu5Hkuovku7bjgIHliqDovb3mlbDmja5cbiAgICBpZiAodGhpcy5idG5DbG9zZSkge1xuICAgICAgdGhpcy5idG5DbG9zZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHsgc2VsZi5jbG9zZVVJKCk7IH0sIHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5idG5SZXRyeSkge1xuICAgICAgdGhpcy5idG5SZXRyeS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHsgc2VsZi5fbG9hZFNob3AoKTsgfSwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX2xvYWRTaG9wKCk7XG4gIH07XG5cbiAgLy8g4pSA4pSAIOWFqOS7o+eggeW7uiBVSe+8iHByZWZhYiDlj6rpnIDmoLnoioLngrkgKyDohJrmnKwgKyBXaWRnZXTvvInilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgX2N0b3IucHJvdG90eXBlLl9idWlsZFVJID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBTVyA9IGNjLndpblNpemUud2lkdGggIHx8IDY0MDtcbiAgICB2YXIgU0ggPSBjYy53aW5TaXplLmhlaWdodCB8fCA5NjA7XG4gICAgdmFyIFBXID0gTWF0aC5taW4oU1cgLSAxMjAsIDUwMCk7ICAvLyDkuKTkvqflkITnlZkgNjBweO+8jOmBv+WFjemBruS9j+S+p+i+uSBVSVxuICAgIHZhciBQSCA9IE1hdGgubWluKFNIIC0gNjAsIDg4MCk7XG4gICAgdmFyIFRPUCA9IFBIIC8gMjtcbiAgICB2YXIgcm9vdCA9IHRoaXMubm9kZTtcblxuICAgIC8vIOKRoCDlhajlsY/mmpfoibLpga7nvanvvJrni6znq4vlrZDoioLngrnvvIx6SW5kZXgg5L2O5LqO6Z2i5p2/XG4gICAgLy8gICAg55So54us56uL6IqC54K56ICM6Z2eIHJvb3Qg5pys6Lqr77yM6YG/5YWNIEJsb2NrSW5wdXRFdmVudHMg6K+v5oum5a2Q6IqC54K56Kem5pG4XG4gICAgdmFyIG92ZXJsYXkgPSBfbWtOb2RlKFwiYmdPdmVybGF5XCIsIDAsIDAsIFNXLCBTSCwgcm9vdCk7XG4gICAgb3ZlcmxheS56SW5kZXggPSAwO1xuICAgIG92ZXJsYXkuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgIHZhciBvZyA9IG92ZXJsYXkuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICBvZy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMTYwKTtcbiAgICBvZy5yZWN0KC1TVyAvIDIsIC1TSCAvIDIsIFNXLCBTSCk7XG4gICAgb2cuZmlsbCgpO1xuXG4gICAgLy8g6Z2i5p2/5Li75L2T77yIekluZGV4IOmrmOS6jiBvdmVybGF577yM5q2j5bi45o6l5pS26Kem5pG477yJXG4gICAgdmFyIHBhbmVsID0gX21rTm9kZShcInBhbmVsXCIsIDAsIDAsIFBXLCBQSCwgcm9vdCk7XG4gICAgcGFuZWwuekluZGV4ID0gMTtcbiAgICB0aGlzLl9kcmF3Um91bmRSZWN0KHBhbmVsLCBQVywgUEgsIDI0LCBDLnBhbmVsQmcsIEMuY2FyZEJvcmRlciwgMik7XG5cbiAgICAvLyDilIDilIAg6aG26YOo5qCP77yIaGVhZGVyIOihjOemu+mdouadv+mhtiA1MnB477yM6YG/5YWN6KKrIEZlYXR1cmVkIOWNoemBruS9j++8ieKUgOKUgFxuICAgIHZhciBIRFJfWSA9IFRPUCAtIDUyO1xuICAgIF9ta0xhYmVsKFwibGFiVGl0bGVcIiwgXCJEaWFtb25kIFN0b3JlXCIsIDMwLCBDLndoaXRlLCAtKFBXIC8gNCksIEhEUl9ZLCBwYW5lbCk7XG5cbiAgICAvLyDlhbPpl63mjInpkq7vvJrlj7PkuIrop5LvvIhMYWJlbCDmlL7lrZDoioLngrnvvIzpgb/lhY0gTGFiZWwg57uE5Lu26KaG55uWIGNvbnRlbnRTaXplIOWvvOiHtOinpuaRuOWMuuS4ouWkse+8iVxuICAgIHZhciBidG5DbG9zZSA9IF9ta05vZGUoXCJidG5DbG9zZVwiLCBQVyAvIDIgLSAzMiwgSERSX1ksIDQwLCA0MCwgcGFuZWwpO1xuICAgIHRoaXMuX2RyYXdSb3VuZFJlY3QoYnRuQ2xvc2UsIDQwLCA0MCwgMjAsIEMuY2FyZEJvcmRlciwgbnVsbCk7XG4gICAgX21rTGFiZWwoXCJsYWJYXCIsIFwi4pyVXCIsIDI0LCBDLndoaXRlLCAwLCAwLCBidG5DbG9zZSk7XG4gICAgYnRuQ2xvc2UuekluZGV4ID0gOTk5O1xuICAgIHRoaXMuYnRuQ2xvc2UgPSBidG5DbG9zZTtcblxuICAgIC8vIOS9memineagj++8muWcqOWFs+mXreaMiemSruW3puS+p++8jOS4pOiAheS5i+mXtOeVmSA4cHgg6Ze06ZqZXG4gICAgLy8g5YWz6Zet5oyJ6ZKu5bem6L6557yYID0gUFcvMi0zMi0yMCA9IFBXLzItNTLvvJvkvZnpop3moI/lj7PovrnnvJggPSBQVy8yLTUyLTggPSBQVy8yLTYwXG4gICAgLy8g5L2Z6aKd5qCP5a69IDExMO+8jOS4reW/gyB4ID0gUFcvMi02MC01NSA9IFBXLzItMTE1XG4gICAgdmFyIGJhbEJhciA9IF9ta05vZGUoXCJuZEJhbGFuY2VCYXJcIiwgUFcgLyAyIC0gMTE1LCBIRFJfWSwgMTEwLCAzNiwgcGFuZWwpO1xuICAgIHRoaXMuX3BhaW50QmFsYW5jZUJhcihiYWxCYXIpO1xuICAgIHRoaXMuX2xvYWREaWFtb25kSWNvbihfbWtOb2RlKFwic3ByRGlhbW9uZEljb25cIiwgLTM0LCAwLCAyNCwgMjQsIGJhbEJhcikpO1xuICAgIHZhciBsYWJCYWxOb2RlID0gX21rTm9kZShcImxhYkRpYW1vbmRCYWxhbmNlXCIsIDIwLCAwLCA3NCwgMzIsIGJhbEJhcik7XG4gICAgdGhpcy5sYWJEaWFtb25kQmFsYW5jZSA9IGxhYkJhbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLmxhYkRpYW1vbmRCYWxhbmNlLnN0cmluZyA9IFwiMFwiO1xuICAgIHRoaXMubGFiRGlhbW9uZEJhbGFuY2UuZm9udFNpemUgPSAxOTtcbiAgICBsYWJCYWxOb2RlLmNvbG9yID0gQy53aGl0ZTtcblxuICAgIC8vIOKUgOKUgCBGZWF0dXJlZCDlpKfljaHvvIjpobbpg6ggPSBUT1AtODDvvIzkvY7kuo4gaGVhZGVyIOW6lSBUT1AtNzLvvIzkuI3pga7moIfpopjvvInilIDilIBcbiAgICB2YXIgRkVBVF9IID0gMTYwO1xuICAgIHZhciBGRUFUX1kgPSBUT1AgLSAxNjA7ICAgLy8g5Y2h6aG2ID0gVE9QLTE2MCs4MCA9IFRPUC04MFxuICAgIHZhciBmZWF0ID0gX21rTm9kZShcIm5kRmVhdHVyZWRcIiwgMCwgRkVBVF9ZLCBQVyAtIDIwLCBGRUFUX0gsIHBhbmVsKTtcbiAgICB0aGlzLl9wYWludEZlYXR1cmVkQ2FyZChmZWF0KTtcbiAgICBfbWtMYWJlbChcImxhYk5hbWVcIiwgICAgIFwiXCIsIDE1LCBDLnRleHREaW0sICAwLCAgNTgsIGZlYXQpO1xuICAgIF9ta0xhYmVsKFwibGFiRGlhbW9uZHNcIiwgXCJcIiwgNDQsIEMud2hpdGUsICAgIDAsICAxMiwgZmVhdCk7XG4gICAgX21rTGFiZWwoXCJsYWJQcmljZVwiLCAgICBcIlwiLCAyMiwgQy50ZXh0RGltLCAgMCwgLTI2LCBmZWF0KTtcbiAgICB2YXIgbmRCRiA9IF9ta05vZGUoXCJuZEJhZGdlXCIsIC0oUFcgLyAyIC0gODYpLCA1NCwgMTIwLCAyOCwgZmVhdCk7XG4gICAgX21rTGFiZWwoXCJsYWJCYWRnZVwiLCBcIlwiLCAxMywgQy53aGl0ZSwgMCwgMCwgbmRCRik7XG4gICAgdmFyIGJ0bkJGID0gX21rTm9kZShcImJ0bkJ1eVwiLCBQVyAvIDIgLSAxMDAsIC01MiwgMTQwLCA0NCwgZmVhdCk7XG4gICAgX21rTGFiZWwoXCJsYWJCdG5UZXh0XCIsIFwiQnV5IE5vd1wiLCAyMCwgQy5idG5CdXlUZXh0LCAwLCAwLCBidG5CRik7XG4gICAgX21rTm9kZShcInNwckRpYW1vbmRJbWdcIiwgLShQVyAvIDIgLSA2NiksIDgsIDQwLCA0MCwgZmVhdCk7XG4gICAgdGhpcy5uZEZlYXR1cmVkID0gZmVhdDtcblxuICAgIC8vIOKUgOKUgCDikaIg5Y+v5rua5Yqo5ZWG5ZOB5YiX6KGoIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIHZhciBGRUFUX0JPVFRPTSA9IEZFQVRfWSAtIEZFQVRfSCAvIDIgLSAxMDtcbiAgICB2YXIgU1ZfQk9UVE9NICAgPSAtVE9QICsgMTY7XG4gICAgdmFyIHN2SCAgICAgICAgID0gRkVBVF9CT1RUT00gLSBTVl9CT1RUT007XG4gICAgdmFyIHN2Q1kgICAgICAgID0gKEZFQVRfQk9UVE9NICsgU1ZfQk9UVE9NKSAvIDI7XG5cbiAgICB2YXIgc3ZOb2RlID0gX21rTm9kZShcInN2XCIsIDAsIHN2Q1ksIFBXLCBzdkgsIHBhbmVsKTtcbiAgICB2YXIgc3YgPSBzdk5vZGUuYWRkQ29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgIHN2LnZlcnRpY2FsICAgICAgICAgID0gdHJ1ZTtcbiAgICBzdi5ob3Jpem9udGFsICAgICAgICA9IGZhbHNlO1xuICAgIHN2LmluZXJ0aWEgICAgICAgICAgID0gdHJ1ZTtcbiAgICBzdi5icmFrZSAgICAgICAgICAgICA9IDAuNzU7XG4gICAgc3YuZWxhc3RpYyAgICAgICAgICAgPSB0cnVlO1xuICAgIHN2LmJvdW5jZUR1cmF0aW9uICAgID0gMC4yMztcbiAgICBzdi5jYW5jZWxJbm5lckV2ZW50cyA9IGZhbHNlOyAgLy8g4pGhIOWFgeiuuOWGhemDqOaMiemSruaOpeaUtueCueWHu1xuXG4gICAgdmFyIHZpZXdOb2RlID0gX21rTm9kZShcInZpZXdcIiwgMCwgMCwgUFcsIHN2SCwgc3ZOb2RlKTtcbiAgICB2aWV3Tm9kZS5hZGRDb21wb25lbnQoY2MuTWFzayk7XG5cbiAgICAvLyBjb250ZW50IOmUmueCuemhtuWvuem9kO+8jOS7juS4iuW+gOS4i+aOklxuICAgIHZhciBuZEl0ZW1Sb290ID0gX21rTm9kZShcIm5kSXRlbVJvb3RcIiwgMCwgc3ZIIC8gMiwgUFcsIDAsIHZpZXdOb2RlKTtcbiAgICBuZEl0ZW1Sb290LmFuY2hvclkgPSAxO1xuICAgIHN2LmNvbnRlbnQgPSBuZEl0ZW1Sb290O1xuICAgIHRoaXMubmRJdGVtUm9vdCA9IG5kSXRlbVJvb3Q7XG5cbiAgICAvLyDmqKHmnb/ljaFcbiAgICB2YXIgdHBsID0gX21rTm9kZShcIm5kSXRlbVRwbFwiLCAwLCAwLCAyMTAsIDI3MCwgbmRJdGVtUm9vdCk7XG4gICAgdHBsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIF9ta05vZGUoXCJzcHJEaWFtb25kSW1nXCIsIDAsIDk1LCA0MCwgNDAsIHRwbCk7XG4gICAgX21rTGFiZWwoXCJsYWJEaWFtb25kc1wiLCBcIlwiLCAzNiwgQy53aGl0ZSwgICAgMCwgIDUyLCB0cGwpO1xuICAgIF9ta0xhYmVsKFwibGFiUHJpY2VcIiwgICAgXCJcIiwgMjIsIEMudGV4dERpbSwgIDAsICAgOCwgdHBsKTtcbiAgICBfbWtMYWJlbChcImxhYk5hbWVcIiwgICAgIFwiXCIsIDE0LCBDLnRleHREaW0sICAwLCAtMjIsIHRwbCk7XG4gICAgdmFyIG5kQlQgPSBfbWtOb2RlKFwibmRCYWRnZVwiLCAwLCAxMjIsIDExMCwgMjgsIHRwbCk7XG4gICAgX21rTGFiZWwoXCJsYWJCYWRnZVwiLCBcIlwiLCAxMywgQy53aGl0ZSwgMCwgMCwgbmRCVCk7XG4gICAgdmFyIGJ0bkJUID0gX21rTm9kZShcImJ0bkJ1eVwiLCAwLCAtMTA1LCAxNjAsIDQ0LCB0cGwpO1xuICAgIF9ta0xhYmVsKFwibGFiQnRuVGV4dFwiLCBcIkJ1eSBOb3dcIiwgMjAsIEMuYnRuQnV5VGV4dCwgMCwgMCwgYnRuQlQpO1xuICAgIF9ta05vZGUoXCJuZFNvbGRPdXRcIiwgMCwgMCwgMjIwLCAyODAsIHRwbCkuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5uZEl0ZW1UcGwgPSB0cGw7XG5cbiAgICAvLyDilIDilIAg6YGu572p5bGC77yI6YO95oyC5ZyoIHBhbmVsIOS4iu+8jOimhueblumdouadv+WMuuWfn++8ieKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIHZhciBuZEwgPSBfbWtOb2RlKFwibmRMb2FkaW5nXCIsIDAsIDAsIFBXLCBQSCwgcGFuZWwpO1xuICAgIG5kTC5hY3RpdmUgPSBmYWxzZTsgbmRMLnpJbmRleCA9IDEwO1xuICAgIHRoaXMuX3BhaW50T3ZlcmxheShuZEwpO1xuICAgIF9ta0xhYmVsKFwibGFiTG9hZGluZ1wiLCBcIkxvYWRpbmcuLi5cIiwgMzAsIEMud2hpdGUsIDAsIDAsIG5kTCk7XG4gICAgdGhpcy5uZExvYWRpbmcgPSBuZEw7XG5cbiAgICB2YXIgbmRFID0gX21rTm9kZShcIm5kRXJyb3JcIiwgMCwgMCwgUFcsIFBILCBwYW5lbCk7XG4gICAgbmRFLmFjdGl2ZSA9IGZhbHNlOyBuZEUuekluZGV4ID0gMTA7XG4gICAgdGhpcy5fcGFpbnRPdmVybGF5KG5kRSk7XG4gICAgX21rTGFiZWwoXCJsYWJFcnJNc2dcIiwgXCJGYWlsZWQgdG8gbG9hZCBzaG9wXCIsIDI2LCBDLndoaXRlLCAwLCA2MCwgbmRFKTtcbiAgICB2YXIgYnRuUiA9IF9ta05vZGUoXCJidG5SZXRyeVwiLCAwLCAtMTAsIDIwMCwgNTYsIG5kRSk7XG4gICAgdGhpcy5fZHJhd1JvdW5kUmVjdChidG5SLCAyMDAsIDU2LCAyOCwgQy5idG5CdXksIG51bGwpO1xuICAgIF9ta0xhYmVsKFwibGFiUmV0cnlcIiwgXCJSZXRyeVwiLCAyNiwgQy5idG5CdXlUZXh0LCAwLCAwLCBidG5SKTtcbiAgICB0aGlzLm5kRXJyb3IgID0gbmRFO1xuICAgIHRoaXMuYnRuUmV0cnkgPSBidG5SO1xuXG4gICAgdmFyIG5kUCA9IF9ta05vZGUoXCJuZFBheWluZ1wiLCAwLCAwLCBQVywgUEgsIHBhbmVsKTtcbiAgICBuZFAuYWN0aXZlID0gZmFsc2U7IG5kUC56SW5kZXggPSAxMDtcbiAgICB0aGlzLl9wYWludE92ZXJsYXkobmRQKTtcbiAgICB2YXIgbGFiUFNOb2RlID0gX21rTm9kZShcImxhYlBheVN0YXR1c1wiLCAwLCAwLCBQVyAtIDQwLCA0OCwgbmRQKTtcbiAgICB0aGlzLmxhYlBheVN0YXR1cyA9IGxhYlBTTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMubGFiUGF5U3RhdHVzLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5sYWJQYXlTdGF0dXMuZm9udFNpemUgPSAyNjtcbiAgICBsYWJQU05vZGUuY29sb3IgPSBDLndoaXRlO1xuICAgIHRoaXMubmRQYXlpbmcgPSBuZFA7XG4gIH07XG5cbiAgX2N0b3IucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdGlwVGltZXIpIHsgY2xlYXJJbnRlcnZhbCh0aGlzLl90aXBUaW1lcik7IHRoaXMuX3RpcFRpbWVyID0gbnVsbDsgfVxuICB9O1xuXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAvLyDmlbDmja7liqDovb1cbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gIF9jdG9yLnByb3RvdHlwZS5fbG9hZFNob3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX3NldFN0YXRlKFwibG9hZGluZ1wiKTtcbiAgICB2YXIgc2hvcERhdGEgPSB7XG4gICAgICBjb2luOiAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldERpYW1vbmROdW0oKSxcbiAgICAgIHJpc2tDb3JyZWN0aW9uOiAxLFxuICAgICAgc2hvcEl0ZW1zOiBbXG4gICAgICAgIHsgZ29vZHNJZDogMSwgcHJpY2U6IDEsICAgZGlhbW9uZHM6IDYwLCAgICBuYW1lOiBcIlN0YXJ0ZXJcIiB9LFxuICAgICAgICB7IGdvb2RzSWQ6IDMsIHByaWNlOiAyMCwgIGRpYW1vbmRzOiA0MDAsICAgbmFtZTogXCJQYWNrIDFcIiAgfSxcbiAgICAgICAgeyBnb29kc0lkOiA0LCBwcmljZTogNTAsICBkaWFtb25kczogMTEwMCwgIG5hbWU6IFwiUGFjayAyXCIgIH0sXG4gICAgICAgIHsgZ29vZHNJZDogNiwgcHJpY2U6IDEwMCwgZGlhbW9uZHM6IDI0MDAsICBuYW1lOiBcIlBhY2sgM1wiICB9LFxuICAgICAgICB7IGdvb2RzSWQ6IDcsIHByaWNlOiAyMDAsIGRpYW1vbmRzOiA1MDAwLCAgbmFtZTogXCJQYWNrIDRcIiAgfSxcbiAgICAgICAgeyBnb29kc0lkOiA4LCBwcmljZTogNTAwLCBkaWFtb25kczogMTMwMDAsIG5hbWU6IFwiUGFjayA1XCIgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgc2VsZi5fc2hvcERhdGEgPSBzaG9wRGF0YTtcbiAgICBzZWxmLl9yZW5kZXJBbGwoc2hvcERhdGEpO1xuICAgIHNlbGYuX3NldFN0YXRlKFwiaWRsZVwiKTtcbiAgfTtcblxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgLy8g5riy5p+TXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICBfY3Rvci5wcm90b3R5cGUuX3JlbmRlckFsbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5fc3luY0JhbGFuY2UoZGF0YS5jb2luKTtcblxuICAgIHZhciBpdGVtcyA9IGRhdGEuc2hvcEl0ZW1zIHx8IFtdO1xuXG4gICAgLy8g5om+5Ye65pyA6auY5Lu35ZWG5ZOB5L2c5Li654m56Imy5Y2hXG4gICAgdmFyIGZlYXR1cmVkSXRlbSA9IHRoaXMuX2ZpbmRGZWF0dXJlZEl0ZW0oaXRlbXMpO1xuXG4gICAgLy8g5riy5p+T54m56Imy5aSn5Y2h77yI57yW6L6R5Zmo6Iul5pyq57uR5a6aIG5kRmVhdHVyZWQg5YiZ6Lez6L+H77yJXG4gICAgaWYgKHRoaXMubmRGZWF0dXJlZCAmJiBmZWF0dXJlZEl0ZW0pIHtcbiAgICAgIHRoaXMuX3JlbmRlckZlYXR1cmVkQ2FyZCh0aGlzLm5kRmVhdHVyZWQsIGZlYXR1cmVkSXRlbSwgZGF0YS5yaXNrQ29ycmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8g5riy5p+T5qC85a2Q5ZWG5ZOB5YiX6KGo77yI5omL5YqoIDIg5YiX5a6a5L2N77yM5LiN5L6d6LWWIExheW91dCDnu4Tku7bvvIlcbiAgICBpZiAodGhpcy5uZEl0ZW1Sb290ICYmIHRoaXMubmRJdGVtVHBsKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLm5kSXRlbVJvb3QuY2hpbGRyZW4uc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldICE9PSB0aGlzLm5kSXRlbVRwbCkgeyBjaGlsZHJlbltpXS5kZXN0cm95KCk7IH1cbiAgICAgIH1cbiAgICAgIHZhciBzZWxmICAgPSB0aGlzO1xuICAgICAgdmFyIENPTFMgICA9IDI7XG4gICAgICB2YXIgQ1cgICAgID0gMjEwLCBDSCA9IDI3MDtcbiAgICAgIHZhciBHQVBYICAgPSAxMiwgIEdBUFkgPSAxNDtcbiAgICAgIHZhciBQQURYICAgPSAxMDtcbiAgICAgIC8vIOihjOWIl+S7juW3puS4iuinkuW+gOS4i+mTuu+8jOWOn+eCueWcqCBuZEl0ZW1Sb290IOmUmueCue+8iDAuNSwwLjXvvIlcbiAgICAgIC8vIHRvdGFsVyA9IENPTFMqQ1cgKyAoQ09MUy0xKSpHQVBYICsgMipQQURYXG4gICAgICB2YXIgdG90YWxXID0gQ09MUyAqIENXICsgKENPTFMgLSAxKSAqIEdBUFggKyAyICogUEFEWDtcbiAgICAgIHZhciBzdGFydFggPSAtdG90YWxXIC8gMiArIFBBRFggKyBDVyAvIDI7XG4gICAgICB2YXIgc3RhcnRZID0gLUNIIC8gMiAtIFBBRFg7ICAgICAgICAgIC8vIOesrOS4gOihjOmhtumDqOeVmSBwYWRkaW5nXG4gICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgdmFyIGNvbCAgPSBpZHggJSBDT0xTO1xuICAgICAgICB2YXIgcm93ICA9IE1hdGguZmxvb3IoaWR4IC8gQ09MUyk7XG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUoc2VsZi5uZEl0ZW1UcGwpO1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoQ1csIENIKTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihcbiAgICAgICAgICBzdGFydFggKyBjb2wgKiAoQ1cgKyBHQVBYKSxcbiAgICAgICAgICBzdGFydFkgLSByb3cgKiAoQ0ggKyBHQVBZKVxuICAgICAgICApO1xuICAgICAgICBub2RlLnNldFBhcmVudChzZWxmLm5kSXRlbVJvb3QpO1xuICAgICAgICBzZWxmLl9yZW5kZXJJdGVtQ2FyZChub2RlLCBpdGVtLCBkYXRhLnJpc2tDb3JyZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgLy8g6LCD5pW05a655Zmo6auY5bqm77yM5pa55L6/IFNjcm9sbFZpZXcg6K6h566X77yI6Iul5pyJ77yJXG4gICAgICB2YXIgcm93cyA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyBDT0xTKTtcbiAgICAgIHZhciB0b3RhbEggPSByb3dzICogQ0ggKyAocm93cyAtIDEpICogR0FQWSArIDIgKiBQQURYO1xuICAgICAgdGhpcy5uZEl0ZW1Sb290LnNldENvbnRlbnRTaXplKHRvdGFsVywgdG90YWxIKTtcbiAgICB9XG4gIH07XG5cbiAgX2N0b3IucHJvdG90eXBlLl9maW5kRmVhdHVyZWRJdGVtID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgaWYgKCFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoKSB7IHJldHVybiBudWxsOyB9XG4gICAgdmFyIGJlc3QgPSBpdGVtc1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXRlbXNbaV0ucHJpY2UgPiBiZXN0LnByaWNlKSB7IGJlc3QgPSBpdGVtc1tpXTsgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdDtcbiAgfTtcblxuICAvLyDmuLLmn5PnibnoibLlpKfljaHvvIjljZXni6zlsZXnpLrljLrvvIzmoLflvI/nlLHnvJbovpHlmajlhrPlrprvvIlcbiAgX2N0b3IucHJvdG90eXBlLl9yZW5kZXJGZWF0dXJlZENhcmQgPSBmdW5jdGlvbiAobm9kZSwgaXRlbSwgcmlza0NvcnJlY3Rpb24pIHtcbiAgICB2YXIgc2VsZiAgPSB0aGlzO1xuICAgIHZhciBtZXRhICA9IFBBQ0tfTUVUQVtpdGVtLmdvb2RzSWRdIHx8IHsgYmFkZ2U6IFwiQmVzdCBWYWx1ZVwiLCBiYWRnZUNvbG9yOiBbMjIwLCAxNzAsIDBdIH07XG4gICAgdmFyIGJvbnVzID0gdGhpcy5fY2FsY0JvbnVzKGl0ZW0pO1xuICAgIHZhciBiYWRnZVRleHQgPSBib251cyA+IDAgPyAoXCIrXCIgKyBib251cyArIFwiJSBCb251c1wiKSA6IG1ldGEuYmFkZ2U7XG5cbiAgICB0aGlzLl9zZXRMYWJlbChub2RlLCBcImxhYkRpYW1vbmRzXCIsIHRoaXMuX2Zvcm1hdE51bShpdGVtLmRpYW1vbmRzKSk7XG4gICAgdGhpcy5fc2V0TGFiZWwobm9kZSwgXCJsYWJQcmljZVwiLCAgICBcIlBIUCBcIiArIGl0ZW0ucHJpY2UpO1xuICAgIHRoaXMuX3NldExhYmVsKG5vZGUsIFwibGFiTmFtZVwiLCAgICAgaXRlbS5uYW1lIHx8IFwiXCIpO1xuXG4gICAgLy8gYmFkZ2XvvJpsYWJCYWRnZSDlnKggbmRCYWRnZSDlrZDlsYLvvIxfc2V0TGFiZWwg5Y+q5p+l55u05o6l5a2Q6IqC54K55p+l5LiN5Yiw77yM6ZyA5omL5Yqo5Lik5q2l6K6/6ZeuXG4gICAgdmFyIG5kQmFkZ2UgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibmRCYWRnZVwiKTtcbiAgICBpZiAobmRCYWRnZSkge1xuICAgICAgbmRCYWRnZS5hY3RpdmUgPSBiYWRnZVRleHQubGVuZ3RoID4gMDtcbiAgICAgIGlmIChiYWRnZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9wYWludEJhZGdlKG5kQmFkZ2UsIEMuYmFkZ2VCZXN0KTtcbiAgICAgICAgdmFyIGJMYWIgPSBuZEJhZGdlLmdldENoaWxkQnlOYW1lKFwibGFiQmFkZ2VcIik7XG4gICAgICAgIGlmIChiTGFiKSB7XG4gICAgICAgICAgdmFyIGJMYWJDb21wID0gYkxhYi5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgIGlmIChiTGFiQ29tcCkgeyBiTGFiQ29tcC5zdHJpbmcgPSBiYWRnZVRleHQ7IH1cbiAgICAgICAgICBiTGFiLmNvbG9yID0gQy53aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOi0reS5sOaMiemSrlxuICAgIHZhciBidG5CdXkgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQnV5XCIpO1xuICAgIGlmIChidG5CdXkpIHtcbiAgICAgIHRoaXMuX3BhaW50QnRuKGJ0bkJ1eSwgdHJ1ZSk7XG4gICAgICBidG5CdXkub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAoZnVuY3Rpb24gKGNhcHR1cmVkSXRlbSkge1xuICAgICAgICBidG5CdXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5fb25CdXlJdGVtKGNhcHR1cmVkSXRlbSwgcmlza0NvcnJlY3Rpb24pO1xuICAgICAgICB9LCBzZWxmKTtcbiAgICAgIH0pKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICAvLyDmuLLmn5PmoLzlrZDkuK3ljZXkuKrllYblk4HljaHniYdcbiAgX2N0b3IucHJvdG90eXBlLl9yZW5kZXJJdGVtQ2FyZCA9IGZ1bmN0aW9uIChub2RlLCBpdGVtLCByaXNrQ29ycmVjdGlvbikge1xuICAgIHZhciBzZWxmICAgICAgPSB0aGlzO1xuICAgIHZhciBtZXRhICAgICAgPSBQQUNLX01FVEFbaXRlbS5nb29kc0lkXSB8fCB7IGJhZGdlOiBcIlwiLCBiYWRnZUNvbG9yOiBbODAsIDgwLCA4MF0sIGhpZ2hsaWdodDogZmFsc2UsIGJvcmRlckNvbG9yOiBudWxsIH07XG4gICAgdmFyIGJvbnVzICAgICA9IHRoaXMuX2NhbGNCb251cyhpdGVtKTtcbiAgICB2YXIgaXNTb2xkICAgID0gKGl0ZW0uZ29vZHNJZCA9PT0gMiAmJiByaXNrQ29ycmVjdGlvbiA9PT0gMCk7XG4gICAgdmFyIGJhZGdlVGV4dCA9IGJvbnVzID4gMCA/IChcIitcIiArIGJvbnVzICsgXCIlIEJvbnVzXCIpIDogbWV0YS5iYWRnZTtcblxuICAgIC8vIOKUgOKUgCBHcmFwaGljc++8muWNoeeJh+iDjOaZryArIOW9qeiJsui+ueahhiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICB0aGlzLl9wYWludENhcmQobm9kZSwgbWV0YSwgaXNTb2xkKTtcblxuICAgIC8vIOmSu+efs+aVsO+8iOacgOmGkuebru+8iVxuICAgIHRoaXMuX3NldExhYmVsKG5vZGUsIFwibGFiRGlhbW9uZHNcIiwgdGhpcy5fZm9ybWF0TnVtKGl0ZW0uZGlhbW9uZHMpKTtcbiAgICAvLyDku7fmoLxcbiAgICB0aGlzLl9zZXRMYWJlbChub2RlLCBcImxhYlByaWNlXCIsIFwiUEhQIFwiICsgaXRlbS5wcmljZSk7XG4gICAgLy8g5ZWG5ZOB5ZCN77yI5Y+v6YCJ77yJXG4gICAgdGhpcy5fc2V0TGFiZWwobm9kZSwgXCJsYWJOYW1lXCIsIGl0ZW0ubmFtZSB8fCBcIlwiKTtcbiAgICAvLyDpkrvnn7Plm77moIfvvIjlvILmraXliqDovb3vvIzpppbmrKHmhaLkvYblkI7nu63mnInnvJPlrZjvvIlcbiAgICB0aGlzLl9sb2FkRGlhbW9uZEljb24obm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwckRpYW1vbmRJbWdcIikpO1xuXG4gICAgLy8gQmFkZ2XvvIhHcmFwaGljcyDnlLvog7blm4ogKyBMYWJlbCDmloflrZfvvIlcbiAgICB2YXIgbmRCYWRnZSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuZEJhZGdlXCIpO1xuICAgIGlmIChuZEJhZGdlKSB7XG4gICAgICBuZEJhZGdlLmFjdGl2ZSA9IGJhZGdlVGV4dC5sZW5ndGggPiAwO1xuICAgICAgaWYgKGJhZGdlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBiQ29sb3IgPSBuZXcgY2MuQ29sb3IobWV0YS5iYWRnZUNvbG9yWzBdLCBtZXRhLmJhZGdlQ29sb3JbMV0sIG1ldGEuYmFkZ2VDb2xvclsyXSwgMjIwKTtcbiAgICAgICAgdGhpcy5fcGFpbnRCYWRnZShuZEJhZGdlLCBiQ29sb3IpO1xuICAgICAgICB2YXIgYmFkZ2VMYWIgPSBuZEJhZGdlLmdldENoaWxkQnlOYW1lKFwibGFiQmFkZ2VcIik7XG4gICAgICAgIGlmIChiYWRnZUxhYikge1xuICAgICAgICAgIHZhciBsYWIgPSBiYWRnZUxhYi5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgIGlmIChsYWIpIHsgbGFiLnN0cmluZyA9IGJhZGdlVGV4dDsgYmFkZ2VMYWIuY29sb3IgPSBDLndoaXRlOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZEhpZ2hsaWdodO+8muacieW9qeiJsui+ueahhuaXtumAmui/hyBfcGFpbnRDYXJkIOeahOaPj+i+ueWunueOsO+8jOatpOiKgueCueebtOaOpemakOiXj1xuICAgIHZhciBuZEhpZ2hsaWdodCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuZEhpZ2hsaWdodFwiKTtcbiAgICBpZiAobmRIaWdobGlnaHQpIHsgbmRIaWdobGlnaHQuYWN0aXZlID0gZmFsc2U7IH1cblxuICAgIC8vIOW3suWUru+8iDFzdCBQdXJjaGFzZSDlt7LotK3vvInokpnlsYJcbiAgICB2YXIgbmRTb2xkT3V0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5kU29sZE91dFwiKTtcbiAgICBpZiAobmRTb2xkT3V0KSB7XG4gICAgICBuZFNvbGRPdXQuYWN0aXZlID0gaXNTb2xkO1xuICAgICAgaWYgKGlzU29sZCkgeyB0aGlzLl9kcmF3Um91bmRSZWN0KG5kU29sZE91dCwgbmRTb2xkT3V0LndpZHRoIHx8IDIyMCwgbmRTb2xkT3V0LmhlaWdodCB8fCAyODAsIDE4LCBDLnNvbGRCZywgbnVsbCk7IH1cbiAgICB9XG5cbiAgICAvLyDotK3kubDmjInpkq7vvIhHcmFwaGljcyDnlLvph5HoibLlnIbop5LvvIlcbiAgICB2YXIgYnRuQnV5ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bkJ1eVwiKTtcbiAgICBpZiAoYnRuQnV5KSB7XG4gICAgICBidG5CdXkuYWN0aXZlID0gIWlzU29sZDtcbiAgICAgIHRoaXMuX3BhaW50QnRuKGJ0bkJ1eSwgdHJ1ZSk7XG4gICAgICBidG5CdXkub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICBpZiAoIWlzU29sZCkge1xuICAgICAgICAoZnVuY3Rpb24gKGNhcHR1cmVkSXRlbSkge1xuICAgICAgICAgIGJ0bkJ1eS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuX29uQnV5SXRlbShjYXB0dXJlZEl0ZW0sIHJpc2tDb3JyZWN0aW9uKTtcbiAgICAgICAgICB9LCBzZWxmKTtcbiAgICAgICAgfSkoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZS5vcGFjaXR5ID0gaXNTb2xkID8gMTAwIDogMjU1O1xuICB9O1xuXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAvLyDotK3kubDmtYHnqItcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gIF9jdG9yLnByb3RvdHlwZS5fb25CdXlJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHJpc2tDb3JyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuX2J1eWluZykgeyByZXR1cm47IH1cbiAgICBpZiAoaXRlbS5nb29kc0lkID09PSAyICYmIHJpc2tDb3JyZWN0aW9uID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIG1nciA9ICR6MUJQUGF5TWdyLkJQUGF5TWdyLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCFtZ3IuY3VzdG9tZXJJZCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuX2J1eWluZyA9IHRydWU7XG4gICAgdGhpcy5fc2V0U3RhdGUoXCJwYXlpbmdcIik7XG4gICAgdGhpcy5fc3RhcnRQYXlUaXBzKCk7XG5cbiAgICB2YXIgZ2FtZU9yZGVySWQgPSBEYXRlLm5vdygpICsgXCJfXCIgKyBtZ3IuY3VzdG9tZXJJZDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBtZ3IuZG9SZWNoYXJnZShpdGVtLnByaWNlLCBpdGVtLmdvb2RzSWQsIGdhbWVPcmRlcklkLCBmdW5jdGlvbiAoc3VjY2VzcywgcmVzdWx0KSB7XG4gICAgICBzZWxmLl9idXlpbmcgPSBmYWxzZTtcbiAgICAgIHNlbGYuX3N0b3BQYXlUaXBzKCk7XG4gICAgICBzZWxmLl9zZXRTdGF0ZShcImlkbGVcIik7XG4gICAgICBpZiAoc3VjY2VzcyAmJiByZXN1bHQpIHtcbiAgICAgICAgc2VsZi5fb25QdXJjaGFzZVN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIC8vIOWksei0pe+8mmRvUmVjaGFyZ2Ug5YaF6YOo5bey5pyJIHdhcm4gbG9n77yM5q2k5aSE6Z2Z6buY5oGi5aSNXG4gICAgfSk7XG4gIH07XG5cbiAgX2N0b3IucHJvdG90eXBlLl9vblB1cmNoYXNlU3VjY2VzcyA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICB2YXIgdXNlckRhdGEgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpO1xuICAgIGlmIChyZXN1bHQuZGlhbW9uZHMgIT0gbnVsbCkge1xuICAgICAgdXNlckRhdGEuc2V0RGlhbW9uZE51bSh1c2VyRGF0YS5nZXREaWFtb25kTnVtKCkgKyByZXN1bHQuZGlhbW9uZHMpO1xuICAgIH1cbiAgICAvLyDliLfmlrDllYblk4HpobXvvIjmm7TmlrDpkrvnn7PkvZnpop0gKyAxc3QgUHVyY2hhc2Ug54q25oCB77yJXG4gICAgdGhpcy5fbG9hZFNob3AoKTtcbiAgfTtcblxuICAvLyDova7mkq3mlK/ku5jmj5DnpLrmlofmoYhcbiAgX2N0b3IucHJvdG90eXBlLl9zdGFydFBheVRpcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpZHggID0gMDtcbiAgICB0aGlzLl9zZXRQYXlTdGF0dXMoUEFZX1NUQVRVU19USVBTWzBdKTtcbiAgICB0aGlzLl90aXBUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2VsZi5fYnV5aW5nKSB7IHNlbGYuX3N0b3BQYXlUaXBzKCk7IHJldHVybjsgfVxuICAgICAgaWR4ID0gKGlkeCArIDEpICUgUEFZX1NUQVRVU19USVBTLmxlbmd0aDtcbiAgICAgIHNlbGYuX3NldFBheVN0YXR1cyhQQVlfU1RBVFVTX1RJUFNbaWR4XSk7XG4gICAgfSwgNDAwMCk7XG4gIH07XG5cbiAgX2N0b3IucHJvdG90eXBlLl9zdG9wUGF5VGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdGlwVGltZXIpIHsgY2xlYXJJbnRlcnZhbCh0aGlzLl90aXBUaW1lcik7IHRoaXMuX3RpcFRpbWVyID0gbnVsbDsgfVxuICB9O1xuXG4gIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAvLyDlt6XlhbdcbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbiAgLy8g5ZCM5q2l5L2Z6aKd5pi+56S677yI5LyY5YWI55So5pyN5Yqh56uv5YC877yM5ZCm5YiZ6K+75pys5Zyw77yJXG4gIF9jdG9yLnByb3RvdHlwZS5fc3luY0JhbGFuY2UgPSBmdW5jdGlvbiAoc2VydmVyQ29pbikge1xuICAgIGlmICghdGhpcy5sYWJEaWFtb25kQmFsYW5jZSkgeyByZXR1cm47IH1cbiAgICB2YXIgbG9jYWwgPSAkejFLaW5naHRGYWxsUGxheWVyTWdyLktpbmdodEZhbGxQbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyRGF0YSgpLmdldERpYW1vbmROdW0oKTtcbiAgICB0aGlzLmxhYkRpYW1vbmRCYWxhbmNlLnN0cmluZyA9IHRoaXMuX2Zvcm1hdE51bShzZXJ2ZXJDb2luICE9IG51bGwgPyBzZXJ2ZXJDb2luIDogbG9jYWwpO1xuICB9O1xuXG4gIC8vIOe7n+S4gOeKtuaAgeWIh+aNou+8mmxvYWRpbmcgLyBlcnJvciAvIHBheWluZyAvIGlkbGVcbiAgX2N0b3IucHJvdG90eXBlLl9zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIGlmICh0aGlzLm5kTG9hZGluZykgeyB0aGlzLm5kTG9hZGluZy5hY3RpdmUgPSBzdGF0ZSA9PT0gXCJsb2FkaW5nXCI7IH1cbiAgICBpZiAodGhpcy5uZEVycm9yKSAgIHsgdGhpcy5uZEVycm9yLmFjdGl2ZSAgID0gc3RhdGUgPT09IFwiZXJyb3JcIjsgICB9XG4gICAgaWYgKHRoaXMubmRQYXlpbmcpICB7IHRoaXMubmRQYXlpbmcuYWN0aXZlICA9IHN0YXRlID09PSBcInBheWluZ1wiOyAgfVxuICB9O1xuXG4gIF9jdG9yLnByb3RvdHlwZS5fc2V0UGF5U3RhdHVzID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICBpZiAodGhpcy5sYWJQYXlTdGF0dXMpIHsgdGhpcy5sYWJQYXlTdGF0dXMuc3RyaW5nID0gdGV4dDsgfVxuICB9O1xuXG4gIC8vIOiuoeeul+ebuOWvuSBnb29kc0lkPTMg5Z+65YeG55qEIGJvbnVzIOeZvuWIhuavlO+8iOi/lOWbnuaVtOaVsO+8jDAg6KGo56S65LiN5pi+56S677yJXG4gIF9jdG9yLnByb3RvdHlwZS5fY2FsY0JvbnVzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0ucHJpY2UgfHwgaXRlbS5wcmljZSA8PSAwKSB7IHJldHVybiAwOyB9XG4gICAgdmFyIHJhdGUgID0gaXRlbS5kaWFtb25kcyAvIGl0ZW0ucHJpY2U7XG4gICAgdmFyIGJvbnVzID0gTWF0aC5yb3VuZCgocmF0ZSAvIEJBU0VfRElBTU9ORFNfUEVSX1BIUCAtIDEpICogMTAwKTtcbiAgICByZXR1cm4gYm9udXMgPiAwID8gYm9udXMgOiAwO1xuICB9O1xuXG4gIC8vIOWNg+S9jeaVsOWtl+agvOW8j+WMlu+8mjEwMDAg4oaSIFwiMSwwMDBcIlxuICBfY3Rvci5wcm90b3R5cGUuX2Zvcm1hdE51bSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIChcIlwiICsgKG4gfHwgMCkpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfTtcblxuICAvLyDlnKggcGFyZW50IOS4i+afpeaJviBjaGlsZE5hbWUg6IqC54K55bm26K6+572u5YW2IExhYmVsIOaWh+Wtl1xuICBfY3Rvci5wcm90b3R5cGUuX3NldExhYmVsID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGROYW1lLCB0ZXh0KSB7XG4gICAgdmFyIGNoaWxkID0gcGFyZW50LmdldENoaWxkQnlOYW1lKGNoaWxkTmFtZSk7XG4gICAgaWYgKCFjaGlsZCkgeyByZXR1cm47IH1cbiAgICB2YXIgbGFiID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICBpZiAobGFiKSB7IGxhYi5zdHJpbmcgPSB0ZXh0OyB9XG4gIH07XG5cbiAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gIC8vIGNjLkdyYXBoaWNzIOe7mOWItuW3peWFt++8iOS7o+abv+WbvueJh+i1hOa6kO+8iVxuICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICAvLyDlnKggbm9kZSDkuIrnlKggR3JhcGhpY3Mg55S75ZyG6KeS55+p5b2i77yI6Ieq5Yqo5re75YqgL+WkjeeUqCBHcmFwaGljcyDnu4Tku7bvvIlcbiAgLy8gZmlsbENvbG9yL3N0cm9rZUNvbG9yIOS8oCBudWxsIOWImei3s+i/h1xuICBfY3Rvci5wcm90b3R5cGUuX2RyYXdSb3VuZFJlY3QgPSBmdW5jdGlvbiAobm9kZSwgdywgaCwgciwgZmlsbENvbG9yLCBzdHJva2VDb2xvciwgc3Ryb2tlV2lkdGgpIHtcbiAgICB2YXIgZyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKSB8fCBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgZy5jbGVhcigpO1xuICAgIHZhciB4ID0gLXcgLyAyLCB5ID0gLWggLyAyO1xuICAgIGlmIChmaWxsQ29sb3IpIHtcbiAgICAgIGcuZmlsbENvbG9yID0gZmlsbENvbG9yO1xuICAgICAgZy5yb3VuZFJlY3QoeCwgeSwgdywgaCwgcik7XG4gICAgICBnLmZpbGwoKTtcbiAgICB9XG4gICAgaWYgKHN0cm9rZUNvbG9yKSB7XG4gICAgICBnLnN0cm9rZUNvbG9yID0gc3Ryb2tlQ29sb3I7XG4gICAgICBnLmxpbmVXaWR0aCAgID0gc3Ryb2tlV2lkdGggfHwgMztcbiAgICAgIGcucm91bmRSZWN0KHgsIHksIHcsIGgsIHIpO1xuICAgICAgZy5zdHJva2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g57uZ5ZWG5ZOB5Y2h54mH6IqC54K555S76IOM5pmvICsg5b2p6Imy6L655qGG77yIaXNTb2xkIOWImeeBsOiJsu+8iVxuICBfY3Rvci5wcm90b3R5cGUuX3BhaW50Q2FyZCA9IGZ1bmN0aW9uIChub2RlLCBtZXRhLCBpc1NvbGQpIHtcbiAgICB2YXIgdyA9IG5vZGUud2lkdGggIHx8IDIyMDtcbiAgICB2YXIgaCA9IG5vZGUuaGVpZ2h0IHx8IDI4MDtcbiAgICB2YXIgYm9yZGVyQ29sb3IgPSBpc1NvbGQgPyBuZXcgY2MuQ29sb3IoODAsIDgwLCA4MCwgMTIwKVxuICAgICAgICAgICAgICAgICAgICAgOiAobWV0YS5ib3JkZXJDb2xvciB8fCBDLmNhcmRCb3JkZXIpO1xuICAgIHRoaXMuX2RyYXdSb3VuZFJlY3Qobm9kZSwgdywgaCwgMTgsIEMuY2FyZEJnLCBib3JkZXJDb2xvciwgaXNTb2xkID8gMiA6IDQpO1xuICB9O1xuXG4gIC8vIOe7meaMiemSruiKgueCueeUu+mHkeiJsuWchuinkuiDjOaZr1xuICBfY3Rvci5wcm90b3R5cGUuX3BhaW50QnRuID0gZnVuY3Rpb24gKGJ0bk5vZGUsIGFjdGl2ZSkge1xuICAgIHZhciB3ID0gYnRuTm9kZS53aWR0aCAgfHwgMTYwO1xuICAgIHZhciBoID0gYnRuTm9kZS5oZWlnaHQgfHwgIDUyO1xuICAgIHZhciBmaWxsID0gYWN0aXZlID8gQy5idG5CdXkgOiBuZXcgY2MuQ29sb3IoODAsIDcwLCAxMDAsIDIwMCk7XG4gICAgdGhpcy5fZHJhd1JvdW5kUmVjdChidG5Ob2RlLCB3LCBoLCBoIC8gMiwgZmlsbCwgbnVsbCk7XG4gICAgLy8g6K6p5oyJ6ZKu5paH5a2X6aKc6Imy6YWN5ZCIXG4gICAgdmFyIGxhYiA9IGJ0bk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJCdG5UZXh0XCIpO1xuICAgIGlmIChsYWIpIHsgbGFiLmNvbG9yID0gYWN0aXZlID8gQy5idG5CdXlUZXh0IDogbmV3IGNjLkNvbG9yKDE0MCwgMTMwLCAxNjAsIDI1NSk7IH1cbiAgfTtcblxuICAvLyDnu5kgYmFkZ2Ug6IqC54K555S76IO25ZuK5b2i6IOM5pmvXG4gIF9jdG9yLnByb3RvdHlwZS5fcGFpbnRCYWRnZSA9IGZ1bmN0aW9uIChiYWRnZU5vZGUsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBiYWRnZU5vZGUud2lkdGggIHx8IDExMDtcbiAgICB2YXIgaCA9IGJhZGdlTm9kZS5oZWlnaHQgfHwgIDMyO1xuICAgIHRoaXMuX2RyYXdSb3VuZFJlY3QoYmFkZ2VOb2RlLCB3LCBoLCBoIC8gMiwgY29sb3IsIG51bGwpO1xuICB9O1xuXG4gIC8vIOe7meeJueiJsuWkp+WNoeeUu+mHkeiJsuaPj+i+ueiDjOaZr1xuICBfY3Rvci5wcm90b3R5cGUuX3BhaW50RmVhdHVyZWRDYXJkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgdyA9IG5vZGUud2lkdGggIHx8IDU0MDtcbiAgICB2YXIgaCA9IG5vZGUuaGVpZ2h0IHx8IDE5MDtcbiAgICB0aGlzLl9kcmF3Um91bmRSZWN0KG5vZGUsIHcsIGgsIDIyLCBDLmZlYXR1cmVkQmcsIEMuZmVhdHVyZWRCb3JkZXIsIDUpO1xuICB9O1xuXG4gIC8vIOe7memBrue9qeWxgueUu+WNiumAj+aYjum7keiJslxuICBfY3Rvci5wcm90b3R5cGUuX3BhaW50T3ZlcmxheSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKCFub2RlKSB7IHJldHVybjsgfVxuICAgIHZhciB3ID0gbm9kZS53aWR0aCAgfHwgNjQwO1xuICAgIHZhciBoID0gbm9kZS5oZWlnaHQgfHwgOTYwO1xuICAgIHRoaXMuX2RyYXdSb3VuZFJlY3Qobm9kZSwgdywgaCwgMCwgQy5vdmVybGF5QmcsIG51bGwpO1xuICB9O1xuXG4gIC8vIOe7meS9memineagj+eUu+a3seiJsuiDtuWbilxuICBfY3Rvci5wcm90b3R5cGUuX3BhaW50QmFsYW5jZUJhciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKCFub2RlKSB7IHJldHVybjsgfVxuICAgIHZhciB3ID0gbm9kZS53aWR0aCAgfHwgMjAwO1xuICAgIHZhciBoID0gbm9kZS5oZWlnaHQgfHwgIDQ4O1xuICAgIHRoaXMuX2RyYXdSb3VuZFJlY3Qobm9kZSwgdywgaCwgaCAvIDIsIEMuYmFsYW5jZUJhciwgQy5jYXJkQm9yZGVyLCAxKTtcbiAgfTtcblxuICAvLyDku44gS2luZ2h0RmFsbEljb25Hb29kIGJ1bmRsZSDliqDovb3pkrvnn7Plm77moIfliLAgU3ByaXRlIOiKgueCuVxuICAvLyBpY29uTmFtZSA9IFwid2dfdHlfenNcIu+8iGdvb2RzQ2ZnIOS4remSu+efs+eahCBpY29uIOWtl+aute+8iVxuICBfY3Rvci5wcm90b3R5cGUuX2xvYWREaWFtb25kSWNvbiA9IGZ1bmN0aW9uIChzcHJpdGVOb2RlKSB7XG4gICAgaWYgKCFzcHJpdGVOb2RlKSB7IHJldHVybjsgfVxuICAgIHZhciBidW5kbGVOYW1lID0gJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZVxuICAgICAgICAgICAgICAgICAgID8gJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5JY29uR29vZFxuICAgICAgICAgICAgICAgICAgIDogXCJLaW5naHRGYWxsSWNvbkdvb2RcIjtcbiAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCBmdW5jdGlvbiAoZXJyLCBidW5kbGUpIHtcbiAgICAgIGlmIChlcnIgfHwgIWJ1bmRsZSkgeyByZXR1cm47IH1cbiAgICAgIGJ1bmRsZS5sb2FkKFwid2dfdHlfenMvc3ByaXRlRnJhbWVcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIyLCBzZikge1xuICAgICAgICBpZiAoZXJyMiB8fCAhc2YpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBzcHIgPSBzcHJpdGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpIHx8IHNwcml0ZU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwci5zcHJpdGVGcmFtZSA9IHNmO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8g5LiA5qyh5oCn5Yid5aeL5YyW6Z2i5p2/57qnIEdyYXBoaWNz77yI5ZyoIHN0YXJ0IOiwg+eUqO+8iVxuICBfY3Rvci5wcm90b3R5cGUuX2luaXRQYW5lbEdyYXBoaWNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBQVyA9IDYwMCwgUEggPSA5MDA7ICAgLy8g6Z2i5p2/5bC65a+477yM5LiOIG5kQmcg5LiA6Ie0XG4gICAgdmFyIFRPUF9ZICAgPSAgUEggLyAyOyAgICAvLyDpnaLmnb/pobbpg6ggee+8iOebuOWvuSByb290IOS4reW/g++8iVxuXG4gICAgLy8g4pSA4pSAIOmdouadv+iDjOaZryDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICB2YXIgbmRCZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvb3RcIikgJiZcbiAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvb3RcIikuZ2V0Q2hpbGRCeU5hbWUoXCJuZEJnXCIpO1xuICAgIGlmIChuZEJnKSB7XG4gICAgICBuZEJnLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgbmRCZy5zZXRDb250ZW50U2l6ZShQVywgUEgpO1xuICAgICAgdGhpcy5fZHJhd1JvdW5kUmVjdChuZEJnLCBQVywgUEgsIDI0LCBDLnBhbmVsQmcsIEMuY2FyZEJvcmRlciwgMik7XG4gICAgfVxuXG4gICAgLy8g4pSA4pSAIOWFs+mXreaMiemSru+8iOWPs+S4iuinku+8ieKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIGlmICh0aGlzLmJ0bkNsb3NlKSB7XG4gICAgICB0aGlzLmJ0bkNsb3NlLnNldFBvc2l0aW9uKFBXIC8gMiAtIDQwLCBUT1BfWSAtIDQwKTtcbiAgICAgIHRoaXMuX2RyYXdSb3VuZFJlY3QodGhpcy5idG5DbG9zZSwgNTYsIDU2LCAyOCwgQy5jYXJkQm9yZGVyLCBudWxsKTtcbiAgICAgIHZhciBsYWJYID0gdGhpcy5idG5DbG9zZS5nZXRDaGlsZEJ5TmFtZShcImxhYkJ0blRleHRcIikgfHxcbiAgICAgICAgICAgICAgICAgdGhpcy5idG5DbG9zZS5hZGRDb21wb25lbnQgJiYgbnVsbDtcbiAgICAgIGlmICghdGhpcy5idG5DbG9zZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpKSB7XG4gICAgICAgIHZhciBsYyA9IHRoaXMuYnRuQ2xvc2UuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGMuc3RyaW5nID0gXCLinJVcIjsgbGMuZm9udFNpemUgPSAzMjsgbGMubGluZUhlaWdodCA9IDQwO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmNvbG9yID0gQy53aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDilIDilIAg5L2Z6aKd5qCP77yI6aG26YOo77yJ4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgdmFyIG5kSGVhZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibmRIZWFkZXJcIik7XG4gICAgdmFyIG5kQmFsYW5jZUJhciA9IG5kSGVhZGVyICYmIG5kSGVhZGVyLmdldENoaWxkQnlOYW1lKFwibmRCYWxhbmNlQmFyXCIpO1xuICAgIGlmIChuZEJhbGFuY2VCYXIpIHtcbiAgICAgIG5kQmFsYW5jZUJhci5zZXRQb3NpdGlvbigtUFcgLyAyICsgMTIwLCBUT1BfWSAtIDQ4KTtcbiAgICAgIG5kQmFsYW5jZUJhci5zZXRDb250ZW50U2l6ZSgyMDAsIDQ4KTtcbiAgICAgIHRoaXMuX3BhaW50QmFsYW5jZUJhcihuZEJhbGFuY2VCYXIpO1xuICAgIH1cblxuICAgIC8vIOKUgOKUgCBuZEZlYXR1cmVkIOWumuS9je+8iOmdouadv+S4iuWNiuWMuu+8ieKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIGlmICh0aGlzLm5kRmVhdHVyZWQpIHtcbiAgICAgIHRoaXMubmRGZWF0dXJlZC5zZXRQb3NpdGlvbigwLCBUT1BfWSAtIDE2MCk7XG4gICAgICB0aGlzLm5kRmVhdHVyZWQuc2V0Q29udGVudFNpemUoNTQwLCAxOTApO1xuICAgICAgdGhpcy5fcGFpbnRGZWF0dXJlZENhcmQodGhpcy5uZEZlYXR1cmVkKTtcbiAgICB9XG5cbiAgICAvLyDilIDilIAgbmRJdGVtUm9vdCDlrprkvY3vvIhmZWF0dXJlZCDkuIvmlrnvvInilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICBpZiAodGhpcy5uZEl0ZW1Sb290KSB7XG4gICAgICB0aGlzLm5kSXRlbVJvb3Quc2V0UG9zaXRpb24oMCwgVE9QX1kgLSA0MDApO1xuICAgIH1cblxuICAgIC8vIOmBrue9qeWxgu+8iOWKoOi9veS4rSAvIOaUr+S7mOS4re+8iVxuICAgIGlmICh0aGlzLm5kTG9hZGluZykge1xuICAgICAgdGhpcy5uZExvYWRpbmcuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICB0aGlzLm5kTG9hZGluZy5zZXRDb250ZW50U2l6ZShQVywgUEgpO1xuICAgIH1cbiAgICB0aGlzLl9wYWludE92ZXJsYXkodGhpcy5uZExvYWRpbmcpO1xuICAgIHRoaXMuX3BhaW50T3ZlcmxheSh0aGlzLm5kUGF5aW5nKTtcblxuICAgIC8vIOmSu+efs+Wbvuagh1xuICAgIGlmIChuZEhlYWRlcikgeyB0aGlzLl9sb2FkRGlhbW9uZEljb24obmRIZWFkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJEaWFtb25kSWNvblwiKSk7IH1cbiAgICBpZiAodGhpcy5uZEZlYXR1cmVkKSB7IHRoaXMuX2xvYWREaWFtb25kSWNvbih0aGlzLm5kRmVhdHVyZWQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJEaWFtb25kSW1nXCIpKTsgfVxuICB9O1xuXG4gIC8vIOKUgOKUgCBAcHJvcGVydHkg57uR5a6aIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5MYWJlbCldLCBfY3Rvci5wcm90b3R5cGUsIFwibGFiRGlhbW9uZEJhbGFuY2VcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCAgX2N0b3IucHJvdG90eXBlLCBcIm5kRmVhdHVyZWRcIiwgICAgICAgIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgIF9jdG9yLnByb3RvdHlwZSwgXCJuZEl0ZW1Sb290XCIsICAgICAgICB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sICBfY3Rvci5wcm90b3R5cGUsIFwibmRJdGVtVHBsXCIsICAgICAgICAgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCAgX2N0b3IucHJvdG90eXBlLCBcImJ0bkNsb3NlXCIsICAgICAgICAgIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgIF9jdG9yLnByb3RvdHlwZSwgXCJuZExvYWRpbmdcIiwgICAgICAgICB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5Ob2RlKV0sICBfY3Rvci5wcm90b3R5cGUsIFwibmRFcnJvclwiLCAgICAgICAgICAgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoY2MuTm9kZSldLCAgX2N0b3IucHJvdG90eXBlLCBcImJ0blJldHJ5XCIsICAgICAgICAgIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KGNjLk5vZGUpXSwgIF9jdG9yLnByb3RvdHlwZSwgXCJuZFBheWluZ1wiLCAgICAgICAgICB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShjYy5MYWJlbCldLCBfY3Rvci5wcm90b3R5cGUsIFwibGFiUGF5U3RhdHVzXCIsICAgICAgdW5kZWZpbmVkKTtcblxuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZVVJLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbFVJQlBTaG9wO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOiKgueCuee7k+aehOivtOaYju+8iENvY29zIENyZWF0b3Ig57yW6L6R5Zmo5pCt5bu6IHByZWZhYu+8jOKYhT3nqbroioLngrnljbPlj6/vvIzml6DpnIDlm77niYfvvIlcbi8vXG4vLyBLaW5naHRGYWxsVUlCUFNob3AgIFvmjILovb3mnKzohJrmnKxdXG4vLyAgIOKUnOKUgOKUgCBuZEJnIOKYheKYhSAgICAgICAgICAgIOWUr+S4gOmcgOimgee+juacr+WHuuWbvueahOiDjOaZr++8iDHlvKDvvIzmt7HoibLmuJDlj5jpnaLmnb/vvIlcbi8vICAg4pSCXG4vLyAgIOKUnOKUgOKUgCBuZEhlYWRlclxuLy8gICDilIIgICDilJzilIDilIAgbGFiVGl0bGUgICAgICAgICAgTGFiZWwgXCJEaWFtb25kIFN0b3JlXCLvvIzlrZflj7cgMzjvvIznmb3oibJcbi8vICAg4pSCICAg4pSc4pSA4pSAIG5kQmFsYW5jZUJhciDimIUgICDnqbroioLngrnvvIzohJrmnKzoh6rliqjnlLvmt7HoibLog7blm4rog4zmma9cbi8vICAg4pSCICAg4pSCICAg4pSc4pSA4pSAIHNwckRpYW1vbmRJY29uIFNwcml0Ze+8jOiEmuacrOiHquWKqOWKoOi9vea4uOaIj+WGhemSu+efs+Wbvuagh1xuLy8gICDilIIgICDilIIgICDilJTilIDilIAgbGFiRGlhbW9uZEJhbGFuY2UgTGFiZWwgIOKGkCDohJrmnKznu5Hlrppcbi8vICAg4pSCICAg4pSU4pSA4pSAIGJ0bkNsb3NlIOKYhSAgICAgICDnqbroioLngrnvvIzmlL5cIuKclVwiTGFiZWwg5Y2z5Y+vICDihpAg6ISa5pys57uR5a6aXG4vLyAgIOKUglxuLy8gICDilJzilIDilIAgbmRGZWF0dXJlZCDimIUgICAgICAgICDnqbroioLngrnvvIzohJrmnKzoh6rliqjnlLvph5HmoYblpKfljaHvvIjlj6/pgInvvInihpAg6ISa5pys57uR5a6aXG4vLyAgIOKUgiAgIOKUnOKUgOKUgCBuZEJhZGdlIOKYhSAgICAgICAg56m66IqC54K577yM6ISa5pys6Ieq5Yqo55S76IO25ZuK6IOM5pmvXG4vLyAgIOKUgiAgIOKUgiAgIOKUlOKUgOKUgCBsYWJCYWRnZSAgICAgIExhYmVsIGJhZGdlIOaWh+Wtl1xuLy8gICDilIIgICDilJzilIDilIAgc3ByRGlhbW9uZEltZyAgICAgU3ByaXRl77yM6ISa5pys6Ieq5Yqo5Yqg6L296ZK755+z5Zu+5qCHXG4vLyAgIOKUgiAgIOKUnOKUgOKUgCBsYWJEaWFtb25kcyAgICAgICBMYWJlbCBcIngxMywwMDBcIu+8jOWtl+WPtyA1MlxuLy8gICDilIIgICDilJzilIDilIAgbGFiTmFtZSAgICAgICAgICAgTGFiZWwg5YyF5ZCNXG4vLyAgIOKUgiAgIOKUnOKUgOKUgCBsYWJQcmljZSAgICAgICAgICBMYWJlbCBcIlBIUCA1MDBcIlxuLy8gICDilIIgICDilJTilIDilIAgYnRuQnV5IOKYhSAgICAgICAgIOepuuiKgueCue+8jOiEmuacrOiHquWKqOeUu+mHkeiJsuaMiemSrlxuLy8gICDilIIgICAgICAg4pSU4pSA4pSAIGxhYkJ0blRleHQgICAgTGFiZWwgXCJCdXkgTm93XCJcbi8vICAg4pSCXG4vLyAgIOKUnOKUgOKUgCBuZFNjcm9sbFZpZXcgICAgICAgICAgU2Nyb2xsVmlldyDnu4Tku7bvvIh2ZXJ0aWNhbO+8iVxuLy8gICDilIIgICDilJTilIDilIAgdmlld1xuLy8gICDilIIgICAgICAg4pSU4pSA4pSAIG5kSXRlbVJvb3QgICAgTGF5b3V077yIR3JpZO+8jDLliJfvvInihpAg6ISa5pys57uR5a6aXG4vLyAgIOKUgiAgICAgICAgICAg4pSU4pSA4pSAIG5kSXRlbVRwbCBhY3RpdmU9ZmFsc2Ug4oaQIOiEmuacrOe7keWumu+8iOW7uuiuriAyMjDDlzI4MO+8iVxuLy8gICDilIIgICAgICAgICAgICAgICDilJzilIDilIAgbmRCYWRnZSDimIUgICAg56m66IqC54K577yM6ISa5pys55S75b2p6Imy6IO25ZuKXG4vLyAgIOKUgiAgICAgICAgICAgICAgIOKUgiAgIOKUlOKUgOKUgCBsYWJCYWRnZSBMYWJlbFxuLy8gICDilIIgICAgICAgICAgICAgICDilJzilIDilIAgc3ByRGlhbW9uZEltZyBTcHJpdGXvvIzohJrmnKzoh6rliqjliqDovb1cbi8vICAg4pSCICAgICAgICAgICAgICAg4pSc4pSA4pSAIGxhYkRpYW1vbmRzICBMYWJlbCDpkrvnn7PmlbDvvIjlpKflrZfvvIzlrZflj7cgNDDvvIlcbi8vICAg4pSCICAgICAgICAgICAgICAg4pSc4pSA4pSAIGxhYk5hbWUgICAgICBMYWJlbCDljIXlkI3vvIjlj6/nnIHnlaXvvIlcbi8vICAg4pSCICAgICAgICAgICAgICAg4pSc4pSA4pSAIGxhYlByaWNlICAgICBMYWJlbCBcIlBIUCAxMDBcIu+8iOWtl+WPtyAyNu+8iVxuLy8gICDilIIgICAgICAgICAgICAgICDilJzilIDilIAgYnRuQnV5IOKYhSAgICAg56m66IqC54K577yM6ISa5pys55S76YeR6Imy5oyJ6ZKuXG4vLyAgIOKUgiAgICAgICAgICAgICAgIOKUgiAgIOKUlOKUgOKUgCBsYWJCdG5UZXh0ICBMYWJlbCBcIkJ1eSBOb3dcIlxuLy8gICDilIIgICAgICAgICAgICAgICDilJTilIDilIAgbmRTb2xkT3V0IOKYhSAg56m66IqC54K577yMYWN0aXZlPWZhbHNl77yM6ISa5pys55S75Y2K6YCP5piO6JKZ5bGCXG4vLyAgIOKUglxuLy8gICDilJzilIDilIAgbmRMb2FkaW5nIOKYhSAgICAgICAgICDnqbroioLngrkgYWN0aXZlPWZhbHNl77yM6ISa5pys55S76buR6Imy6YGu572pIOKGkCDohJrmnKznu5Hlrppcbi8vICAg4pSCICAg4pSU4pSA4pSAIGxhYkxvYWRpbmcgICAgICAgIExhYmVsIFwiTG9hZGluZy4uLlwiXG4vLyAgIOKUglxuLy8gICDilJzilIDilIAgbmRFcnJvciDimIUgICAgICAgICAgICDnqbroioLngrkgYWN0aXZlPWZhbHNlIOKGkCDohJrmnKznu5Hlrppcbi8vICAg4pSCICAg4pSc4pSA4pSAIGxhYkVyck1zZyAgICAgICAgIExhYmVsIFwiRmFpbGVkIHRvIGxvYWQgc2hvcFwiXG4vLyAgIOKUgiAgIOKUlOKUgOKUgCBidG5SZXRyeSAgICAgICAgICDph43or5XmjInpkq4g4oaQIOiEmuacrOe7keWumlxuLy8gICDilIIgICAgICAg4pSU4pSA4pSAIGxhYlJldHJ5ICAgICAgTGFiZWwgXCJSZXRyeVwiXG4vLyAgIOKUglxuLy8gICDilJTilIDilIAgbmRQYXlpbmcgICAgICAgICAgICAgIOWFqOWxj+mBrue9qSBhY3RpdmU9ZmFsc2Ug4oaQIOiEmuacrOe7keWumlxuLy8gICAgICAg4pSc4pSA4pSAIG5kU3Bpbm5lciAgICAgICAgIOaXi+i9rOWKqOeUu+iKgueCue+8iOWPr+eUqOW4p+WKqOeUu++8iVxuLy8gICAgICAg4pSU4pSA4pSAIGxhYlBheVN0YXR1cyAgICAgIExhYmVsIOeKtuaAgeaWh+WtlyDihpAg6ISa5pys57uR5a6aXG4vL1xuLy8g4pSA4pSAIEJhZGdlIOmAu+i+kSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIGdvb2RzSWQgIEJhZGdlIOaWh+WtlyAgICAgICAgIOminOiJslxuLy8gICAxICAgICAgXCJUcmlhbCBQYWNrXCIgICAgICAg57u/6ImyICAjNjRDODc4XG4vLyAgIDIgICAgICBcIjFzdCBQdXJjaGFzZSFcIiAgICDmqZnoibIgICNEQzhDMTQgIO+8iOW3sui0reWQjueBsOaYvu+8jG5kU29sZE91dCDmv4DmtLvvvIlcbi8vICAgMyAgICAgICjml6ApICAgICAgICAgICAgICAg4oCUXG4vLyAgIDQvNSAgICBcIlBvcHVsYXJcIiAgICAgICAgICDnuqLoibIgICNEMjNDM0Ncbi8vICAgNiAgICAgIFwiKzIwJSBCb251c1wiICAgICAgIOiTneiJsiAgIzNDOENEQ1xuLy8gICA3ICAgICAgXCIrMjUlIEJvbnVzXCIgICAgICAg57Sr6ImyICAjOTY0NkRDXG4vLyAgIDggICAgICBcIkJlc3QgVmFsdWVcIiAgICAgICDph5HoibIgICNEQ0FBMDAgIO+8iG5kSGlnaGxpZ2h0IOa/gOa0u++8jOmrmOS6ruaPj+i+ue+8iVxuLy9cbi8vIOKUgOKUgCBuZEl0ZW1Sb290IExheW91dCDmjqjojZDorr7nva4g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyAgIFR5cGU6IEdyaWQgIMK3IFN0YXJ0IEF4aXM6IEhvcml6b250YWwgIMK3IENvbnN0cmFpbnQ6IEZpeGVkIENvbHVtbiBDb3VudCAyXG4vLyAgIENlbGwgU2l6ZTogKDIyMCwgMjgwKSAgwrcgU3BhY2luZyBYOiAxMiAgwrcgU3BhY2luZyBZOiAxNlxuLy8gICBQYWRkaW5nOiBUb3AgMTIsIEJvdHRvbSAxMiwgTGVmdCAxMiwgUmlnaHQgMTJcbi8vICAgUmVzaXplIE1vZGU6IENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4iXX0=