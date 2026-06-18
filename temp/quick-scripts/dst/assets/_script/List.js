
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1896anh1MNKtpXpHYMe5dn5', 'List');
// _script/List.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;
var s;
var l;
var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;
var ccp_disallowMultiple = cc__decorator.disallowMultiple;
var ccp_menu = cc__decorator.menu;
var ccp_executionOrder = cc__decorator.executionOrder;
var ccp_requireComponent = cc__decorator.requireComponent;

var $z1ListItem = require("ListItem");

(function (t) {
  t[t.NODE = 1] = "NODE";
  t[t.PREFAB = 2] = "PREFAB";
})(r || (r = {}));

(function (t) {
  t[t.NORMAL = 1] = "NORMAL";
  t[t.ADHERING = 2] = "ADHERING";
  t[t.PAGE = 3] = "PAGE";
})(s || (s = {}));

(function (t) {
  t[t.NONE = 0] = "NONE";
  t[t.SINGLE = 1] = "SINGLE";
  t[t.MULT = 2] = "MULT";
})(l || (l = {}));

var def_List = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.templateType = r.NODE;
    e.tmpNode = null;
    e.tmpPrefab = null;
    e._slideMode = s.NORMAL;
    e.pageDistance = .3;
    e.pageChangeEvent = new cc.Component.EventHandler();
    e._virtual = true;
    e.cyclic = false;
    e.lackCenter = false;
    e.lackSlide = false;
    e._updateRate = 0;
    e.frameByFrameRenderNum = 0;
    e.renderEvent = new cc.Component.EventHandler();
    e.selectedMode = l.NONE;
    e.repeatEventSingle = false;
    e.selectedEvent = new cc.Component.EventHandler();
    e._selectedId = -1;
    e._forceUpdate = false;
    e._updateDone = true;
    e._numItems = 0;
    e._inited = false;
    e._needUpdateWidget = false;
    e._aniDelRuning = false;
    e._doneAfterUpdate = false;
    e.adhering = false;
    e._adheringBarrier = false;
    e.curPageNum = 0;
    return e;
  }

  cc__extends(_ctor, t);
  Object.defineProperty(_ctor.prototype, "slideMode", {
    get: function get() {
      return this._slideMode;
    },
    set: function set(t) {
      this._slideMode = t;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(_ctor.prototype, "virtual", {
    get: function get() {
      return this._virtual;
    },
    set: function set(t) {
      null != t && (this._virtual = t);
      0 != this._numItems && this._onScrolling();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(_ctor.prototype, "updateRate", {
    get: function get() {
      return this._updateRate;
    },
    set: function set(t) {
      t >= 0 && t <= 6 && (this._updateRate = t);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(_ctor.prototype, "selectedId", {
    get: function get() {
      return this._selectedId;
    },
    set: function set(t) {
      var e;
      var n = this;

      switch (n.selectedMode) {
        case l.SINGLE:
          if (!n.repeatEventSingle && t == n._selectedId) {
            return;
          }

          e = n.getItemByListId(t);
          var i = undefined;

          if (n._selectedId >= 0) {
            n._lastSelectedId = n._selectedId;
          } else {
            n._lastSelectedId = null;
          }

          n._selectedId = t;
          e && ((i = e.getComponent($z1ListItem["default"])).selected = true);

          if (n._lastSelectedId >= 0 && n._lastSelectedId != n._selectedId) {
            var a = n.getItemByListId(n._lastSelectedId);
            a && (a.getComponent($z1ListItem["default"]).selected = false);
          }

          n.selectedEvent && cc.Component.EventHandler.emitEvents([n.selectedEvent], e, t % this._actualNumItems, null == n._lastSelectedId ? null : n._lastSelectedId % this._actualNumItems);
          break;

        case l.MULT:
          if (!(e = n.getItemByListId(t))) {
            return;
          }

          i = e.getComponent($z1ListItem["default"]);
          n._selectedId >= 0 && (n._lastSelectedId = n._selectedId);
          n._selectedId = t;
          var o = !i.selected;
          i.selected = o;
          var r = n.multSelected.indexOf(t);

          if (o && r < 0) {
            n.multSelected.push(t);
          } else {
            !o && r >= 0 && n.multSelected.splice(r, 1);
          }

          n.selectedEvent && cc.Component.EventHandler.emitEvents([n.selectedEvent], e, t % this._actualNumItems, null == n._lastSelectedId ? null : n._lastSelectedId % this._actualNumItems, o);
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(_ctor.prototype, "numItems", {
    get: function get() {
      return this._actualNumItems;
    },
    set: function set(t) {
      var e = this;

      if (e.checkInited(false)) {
        if (null == t || t < 0) {
          cc.error("numItems set the wrong::", t);
        } else {
          e._actualNumItems = e._numItems = t;
          e._forceUpdate = true;

          if (e._virtual) {
            e._resizeContent();

            e.cyclic && (e._numItems = e._cyclicNum * e._numItems);

            e._onScrolling();

            e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId);
          } else {
            if (e.cyclic) {
              e._resizeContent();

              e._numItems = e._cyclicNum * e._numItems;
            }

            var n = e.content.getComponent(cc.Layout);
            n && (n.enabled = true);

            e._delRedundantItem();

            e.firstListId = 0;

            if (e.frameByFrameRenderNum > 0) {
              var i = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum;

              for (var a = 0; a < i; a++) {
                e._createOrUpdateItem2(a);
              }

              if (e.frameByFrameRenderNum < e._numItems) {
                e._updateCounter = e.frameByFrameRenderNum;
                e._updateDone = false;
              }
            } else {
              for (a = 0; a < e._numItems; a++) {
                e._createOrUpdateItem2(a);
              }

              e.displayItemNum = e._numItems;
            }
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(_ctor.prototype, "scrollView", {
    get: function get() {
      return this._scrollView;
    },
    enumerable: false,
    configurable: true
  });

  _ctor.prototype.onLoad = function () {
    this._init();
  };

  _ctor.prototype.onDestroy = function () {
    var t = this;
    cc.isValid(t._itemTmp) && t._itemTmp.destroy();
    cc.isValid(t.tmpNode) && t.tmpNode.destroy();
    t._pool && t._pool.clear();
  };

  _ctor.prototype.onEnable = function () {
    this._registerEvent();

    this._init();

    if (this._aniDelRuning) {
      this._aniDelRuning = false;

      if (this._aniDelItem) {
        this._aniDelBeforePos && (this._aniDelItem.position = this._aniDelBeforePos, delete this._aniDelBeforePos), this._aniDelBeforeScale && (this._aniDelItem.scale = this._aniDelBeforeScale, delete this._aniDelBeforeScale), delete this._aniDelItem;
      }

      if (this._aniDelCB) {
        this._aniDelCB(), delete this._aniDelCB;
      }
    }
  };

  _ctor.prototype.onDisable = function () {
    this._unregisterEvent();
  };

  _ctor.prototype._registerEvent = function () {
    var t = this;
    t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
    t.node.on("touch-up", t._onTouchUp, t);
    t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
    t.node.on("scroll-began", t._onScrollBegan, t, true);
    t.node.on("scroll-ended", t._onScrollEnded, t, true);
    t.node.on("scrolling", t._onScrolling, t, true);
    t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
  };

  _ctor.prototype._unregisterEvent = function () {
    var t = this;
    t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
    t.node.off("touch-up", t._onTouchUp, t);
    t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
    t.node.off("scroll-began", t._onScrollBegan, t, true);
    t.node.off("scroll-ended", t._onScrollEnded, t, true);
    t.node.off("scrolling", t._onScrolling, t, true);
    t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
  };

  _ctor.prototype._init = function () {
    var t = this;

    if (!t._inited) {
      t._scrollView = t.node.getComponent(cc.ScrollView);
      t.content = t._scrollView.content;

      if (t.content) {
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type;
        t._resizeMode = t._layout.resizeMode;
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop;
        t._rightGap = t._layout.paddingRight;
        t._bottomGap = t._layout.paddingBottom;
        t._leftGap = t._layout.paddingLeft;
        t._columnGap = t._layout.spacingX;
        t._lineGap = t._layout.spacingY;
        t._colLineNum;
        t._verticalDir = t._layout.verticalDirection;
        t._horizontalDir = t._layout.horizontalDirection;
        t.setTemplateItem(cc.instantiate(t.templateType == r.PREFAB ? t.tmpPrefab : t.tmpNode));

        if (!(t._slideMode != s.ADHERING && t._slideMode != s.PAGE)) {
          t._scrollView.inertia = false;

          t._scrollView._onMouseWheel = function () {};
        }

        t.virtual || (t.lackCenter = false);
        t._lastDisplayData = [];
        t.displayData = [];
        t._pool = new cc.NodePool();
        t._forceUpdate = false;
        t._updateCounter = 0;
        t._updateDone = true;
        t.curPageNum = 0;

        if (t.cyclic) {
          t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);

          t._scrollView._startBounceBackIfNeeded = function () {
            return false;
          };
        }

        switch (t._align) {
          case cc.Layout.Type.HORIZONTAL:
            switch (t._horizontalDir) {
              case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                t._alignCalcType = 1;
                break;

              case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                t._alignCalcType = 2;
            }

            break;

          case cc.Layout.Type.VERTICAL:
            switch (t._verticalDir) {
              case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                t._alignCalcType = 3;
                break;

              case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                t._alignCalcType = 4;
            }

            break;

          case cc.Layout.Type.GRID:
            switch (t._startAxis) {
              case cc.Layout.AxisDirection.HORIZONTAL:
                switch (t._verticalDir) {
                  case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                    t._alignCalcType = 3;
                    break;

                  case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                    t._alignCalcType = 4;
                }

                break;

              case cc.Layout.AxisDirection.VERTICAL:
                switch (t._horizontalDir) {
                  case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    t._alignCalcType = 1;
                    break;

                  case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    t._alignCalcType = 2;
                }

            }

        }

        t.content.removeAllChildren();
        t._inited = true;
      } else {
        cc.error(t.node.name + "'s cc.ScrollView unset content!");
      }
    }
  };

  _ctor.prototype._processAutoScrolling = function (t) {
    this._scrollView._autoScrollAccumulatedTime += 1 * t;
    var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);

    if (this._scrollView._autoScrollAttenuate) {
      var n = e - 1;
      e = n * n * n * n * n + 1;
    }

    var i = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e));

    var a = this._scrollView.getScrollEndedEventTiming();

    var o = Math.abs(e - 1) <= a;

    if (Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
      this._scrollView._dispatchEvent("scroll-ended-with-threshold");

      this._scrollView._isScrollEndedWithThresholdEventFired = true;
    }

    o && (this._scrollView._autoScrolling = false);
    var r = i.sub(this._scrollView.getContentPosition());

    this._scrollView._moveContent(this._scrollView._clampDelta(r), o);

    this._scrollView._dispatchEvent("scrolling");

    if (!this._scrollView._autoScrolling) {
      this._scrollView._isBouncing = false;
      this._scrollView._scrolling = false;

      this._scrollView._dispatchEvent("scroll-ended");
    }
  };

  _ctor.prototype.setTemplateItem = function (t) {
    if (t) {
      var e = this;
      e._itemTmp = t;

      if (e._resizeMode == cc.Layout.ResizeMode.CHILDREN) {
        e._itemSize = e._layout.cellSize;
      } else {
        e._itemSize = cc.size(t.width, t.height);
      }

      var n = t.getComponent($z1ListItem["default"]);
      var i = false;
      n || (i = true);
      i && (e.selectedMode = l.NONE);
      (n = t.getComponent(cc.Widget)) && n.enabled && (e._needUpdateWidget = true);
      e.selectedMode == l.MULT && (e.multSelected = []);

      switch (e._align) {
        case cc.Layout.Type.HORIZONTAL:
          e._colLineNum = 1;
          e._sizeType = false;
          break;

        case cc.Layout.Type.VERTICAL:
          e._colLineNum = 1;
          e._sizeType = true;
          break;

        case cc.Layout.Type.GRID:
          switch (e._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              var a = e.content.width - e._leftGap - e._rightGap;
              e._colLineNum = Math.floor((a + e._columnGap) / (e._itemSize.width + e._columnGap));
              e._sizeType = true;
              break;

            case cc.Layout.AxisDirection.VERTICAL:
              var o = e.content.height - e._topGap - e._bottomGap;
              e._colLineNum = Math.floor((o + e._lineGap) / (e._itemSize.height + e._lineGap));
              e._sizeType = false;
          }

      }
    }
  };

  _ctor.prototype.checkInited = function (t) {
    undefined === t && (t = true);
    return !!this._inited || (t && cc.error("List initialization not completed!"), false);
  };

  _ctor.prototype._resizeContent = function () {
    var t;
    var e = this;

    switch (e._align) {
      case cc.Layout.Type.HORIZONTAL:
        if (e._customSize) {
          var n = e._getFixedSize(null);

          t = e._leftGap + n.val + e._itemSize.width * (e._numItems - n.count) + e._columnGap * (e._numItems - 1) + e._rightGap;
        } else {
          t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
        }

        break;

      case cc.Layout.Type.VERTICAL:
        if (e._customSize) {
          n = e._getFixedSize(null);
          t = e._topGap + n.val + e._itemSize.height * (e._numItems - n.count) + e._lineGap * (e._numItems - 1) + e._bottomGap;
        } else {
          t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
        }

        break;

      case cc.Layout.Type.GRID:
        e.lackCenter && (e.lackCenter = false);

        switch (e._startAxis) {
          case cc.Layout.AxisDirection.HORIZONTAL:
            var i = Math.ceil(e._numItems / e._colLineNum);
            t = e._topGap + e._itemSize.height * i + e._lineGap * (i - 1) + e._bottomGap;
            break;

          case cc.Layout.AxisDirection.VERTICAL:
            var a = Math.ceil(e._numItems / e._colLineNum);
            t = e._leftGap + e._itemSize.width * a + e._columnGap * (a - 1) + e._rightGap;
        }

    }

    var o = e.content.getComponent(cc.Layout);
    o && (o.enabled = false);
    e._allItemSize = t;
    e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap);

    if (e.cyclic) {
      var r = e._sizeType ? e.node.height : e.node.width;
      e._cyclicPos1 = 0;
      r -= e._cyclicPos1;
      e._cyclicNum = Math.ceil(r / e._allItemSizeNoEdge) + 1;
      var s = e._sizeType ? e._lineGap : e._columnGap;
      e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + s;
      e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + s * (e._cyclicNum - 1);
      e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum;
      e._cycilcAllItemSizeNoEdge += s * (e._cyclicNum - 1);
    }

    e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width);
    var l = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0;
    var c = e._lack ? (e._sizeType ? e.node.height : e.node.width) - l : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
    c < 0 && (c = 0);

    if (e._sizeType) {
      e.content.height = c;
    } else {
      e.content.width = c;
    }
  };

  _ctor.prototype._onScrolling = function (t) {
    undefined === t && (t = null);
    null == this.frameCount && (this.frameCount = this._updateRate);

    if (!this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) {
      this.frameCount--;
    } else {
      this.frameCount = this._updateRate;

      if (!this._aniDelRuning) {
        if (this.cyclic) {
          var e = this.content.getPosition();
          e = this._sizeType ? e.y : e.x;
          var n = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
          var i = this._sizeType ? cc.v2(0, n) : cc.v2(n, 0);

          switch (this._alignCalcType) {
            case 1:
              if (e > -this._cyclicPos1) {
                this.content.x = -this._cyclicPos2;
                this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i));
              } else if (e < -this._cyclicPos2) {
                this.content.x = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i));
              }

              break;

            case 2:
              if (e < this._cyclicPos1) {
                this.content.x = this._cyclicPos2;
                this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i));
              } else if (e > this._cyclicPos2) {
                this.content.x = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i));
              }

              break;

            case 3:
              if (e < this._cyclicPos1) {
                this.content.y = this._cyclicPos2;
                this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i));
              } else if (e > this._cyclicPos2) {
                this.content.y = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i));
              }

              break;

            case 4:
              if (e > -this._cyclicPos1) {
                this.content.y = -this._cyclicPos2;
                this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i));
              } else if (e < -this._cyclicPos2) {
                this.content.y = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i));
              }

          }
        }

        var a;
        var o;
        var r;
        var s;

        this._calcViewPos();

        if (this._sizeType) {
          a = this.viewTop;
          r = this.viewBottom;
        } else {
          o = this.viewRight;
          s = this.viewLeft;
        }

        if (this._virtual) {
          this.displayData = [];
          var l = undefined;
          var c = 0;
          var h = this._numItems - 1;

          if (this._customSize) {
            for (var g = false; c <= h && !g; c++) {
              l = this._calcItemPos(c);

              switch (this._align) {
                case cc.Layout.Type.HORIZONTAL:
                  if (l.right >= s && l.left <= o) {
                    this.displayData.push(l);
                  } else {
                    0 != c && this.displayData.length > 0 && (g = true);
                  }

                  break;

                case cc.Layout.Type.VERTICAL:
                  if (l.bottom <= a && l.top >= r) {
                    this.displayData.push(l);
                  } else {
                    0 != c && this.displayData.length > 0 && (g = true);
                  }

                  break;

                case cc.Layout.Type.GRID:
                  switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                      if (l.bottom <= a && l.top >= r) {
                        this.displayData.push(l);
                      } else {
                        0 != c && this.displayData.length > 0 && (g = true);
                      }

                      break;

                    case cc.Layout.AxisDirection.VERTICAL:
                      if (l.right >= s && l.left <= o) {
                        this.displayData.push(l);
                      } else {
                        0 != c && this.displayData.length > 0 && (g = true);
                      }

                  }

              }
            }
          } else {
            var u = this._itemSize.width + this._columnGap;
            var d = this._itemSize.height + this._lineGap;

            switch (this._alignCalcType) {
              case 1:
                c = (s - this._leftGap) / u;
                h = (o - this._leftGap) / u;
                break;

              case 2:
                c = (-o - this._rightGap) / u;
                h = (-s - this._rightGap) / u;
                break;

              case 3:
                c = (-a - this._topGap) / d;
                h = (-r - this._topGap) / d;
                break;

              case 4:
                c = (r - this._bottomGap) / d;
                h = (a - this._bottomGap) / d;
            }

            c = Math.floor(c) * this._colLineNum;
            h = Math.ceil(h) * this._colLineNum;
            c < 0 && (c = 0);

            for (--h >= this._numItems && (h = this._numItems - 1); c <= h; c++) {
              this.displayData.push(this._calcItemPos(c));
            }
          }

          this._delRedundantItem();

          if (this.displayData.length <= 0 || !this._numItems) {
            return void (this._lastDisplayData = []);
          }

          this.firstListId = this.displayData[0].id;
          this.displayItemNum = this.displayData.length;
          var p = this._lastDisplayData.length;
          var f = this.displayItemNum != p;

          if (f) {
            this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function (t, e) {
              return t - e;
            });
            f = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[p - 1];
          }

          if (this._forceUpdate || f) {
            if (this.frameByFrameRenderNum > 0) {
              if (this._numItems > 0) {
                if (this._updateDone) {
                  this._updateCounter = 0;
                } else {
                  this._doneAfterUpdate = true;
                }

                this._updateDone = false;
              } else {
                this._updateCounter = 0;
                this._updateDone = true;
              }
            } else {
              this._lastDisplayData = [];

              for (var m = 0; m < this.displayItemNum; m++) {
                this._createOrUpdateItem(this.displayData[m]);
              }

              this._forceUpdate = false;
            }
          }

          this._calcNearestItem();
        }
      }
    }
  };

  _ctor.prototype._calcViewPos = function () {
    var t = this.content.getPosition();

    switch (this._alignCalcType) {
      case 1:
        this.elasticLeft = t.x > 0 ? t.x : 0;
        this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft;
        this.viewRight = this.viewLeft + this.node.width;
        this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
        this.viewRight += this.elasticRight;
        break;

      case 2:
        this.elasticRight = t.x < 0 ? -t.x : 0;
        this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight;
        this.viewLeft = this.viewRight - this.node.width;
        this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
        this.viewLeft -= this.elasticLeft;
        break;

      case 3:
        this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0;
        this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop;
        this.viewBottom = this.viewTop - this.node.height;
        this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
        this.viewBottom += this.elasticBottom;
        break;

      case 4:
        this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0;
        this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom;
        this.viewTop = this.viewBottom + this.node.height;
        this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
        this.viewTop -= this.elasticTop;
    }
  };

  _ctor.prototype._calcItemPos = function (t) {
    var e;
    var n;
    var i;
    var a;
    var o;
    var r;
    var s;
    var l;

    switch (this._align) {
      case cc.Layout.Type.HORIZONTAL:
        switch (this._horizontalDir) {
          case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            if (this._customSize) {
              var c = this._getFixedSize(t);

              o = this._leftGap + (this._itemSize.width + this._columnGap) * (t - c.count) + (c.val + this._columnGap * c.count);
              e = (h = this._customSize[t]) > 0 ? h : this._itemSize.width;
            } else {
              o = this._leftGap + (this._itemSize.width + this._columnGap) * t;
              e = this._itemSize.width;
            }

            if (this.lackCenter) {
              o -= this._leftGap;
              o += this.content.width / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              left: o,
              right: r = o + e,
              x: o + this._itemTmp.anchorX * e,
              y: this._itemTmp.y
            };

          case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            if (this._customSize) {
              c = this._getFixedSize(t);
              r = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - c.count) - (c.val + this._columnGap * c.count);
              e = (h = this._customSize[t]) > 0 ? h : this._itemSize.width;
            } else {
              r = -this._rightGap - (this._itemSize.width + this._columnGap) * t;
              e = this._itemSize.width;
            }

            if (this.lackCenter) {
              r += this._rightGap;
              r -= this.content.width / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              right: r,
              left: o = r - e,
              x: o + this._itemTmp.anchorX * e,
              y: this._itemTmp.y
            };
        }

        break;

      case cc.Layout.Type.VERTICAL:
        switch (this._verticalDir) {
          case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
            if (this._customSize) {
              c = this._getFixedSize(t);
              i = -this._topGap - (this._itemSize.height + this._lineGap) * (t - c.count) - (c.val + this._lineGap * c.count);
              n = (h = this._customSize[t]) > 0 ? h : this._itemSize.height;
            } else {
              i = -this._topGap - (this._itemSize.height + this._lineGap) * t;
              n = this._itemSize.height;
            }

            if (this.lackCenter) {
              i += this._topGap;
              i -= this.content.height / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              top: i,
              bottom: a = i - n,
              x: this._itemTmp.x,
              y: a + this._itemTmp.anchorY * n
            };

          case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
            var h;

            if (this._customSize) {
              c = this._getFixedSize(t);
              a = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - c.count) + (c.val + this._lineGap * c.count);
              n = (h = this._customSize[t]) > 0 ? h : this._itemSize.height;
            } else {
              a = this._bottomGap + (this._itemSize.height + this._lineGap) * t;
              n = this._itemSize.height;
            }

            if (this.lackCenter) {
              a -= this._bottomGap;
              a += this.content.height / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              top: i = a + n,
              bottom: a,
              x: this._itemTmp.x,
              y: a + this._itemTmp.anchorY * n
            };
        }

      case cc.Layout.Type.GRID:
        var g = Math.floor(t / this._colLineNum);

        switch (this._startAxis) {
          case cc.Layout.AxisDirection.HORIZONTAL:
            switch (this._verticalDir) {
              case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                l = (a = (i = -this._topGap - (this._itemSize.height + this._lineGap) * g) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
                break;

              case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                i = (a = this._bottomGap + (this._itemSize.height + this._lineGap) * g) + this._itemSize.height;
                l = a + this._itemTmp.anchorY * this._itemSize.height;
            }

            s = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap);

            switch (this._horizontalDir) {
              case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                s += this._itemTmp.anchorX * this._itemSize.width;
                s -= this.content.anchorX * this.content.width;
                break;

              case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                s += (1 - this._itemTmp.anchorX) * this._itemSize.width;
                s -= (1 - this.content.anchorX) * this.content.width;
                s *= -1;
            }

            return {
              id: t,
              top: i,
              bottom: a,
              x: s,
              y: l
            };

          case cc.Layout.AxisDirection.VERTICAL:
            switch (this._horizontalDir) {
              case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                r = (o = this._leftGap + (this._itemSize.width + this._columnGap) * g) + this._itemSize.width;
                s = o + this._itemTmp.anchorX * this._itemSize.width;
                s -= this.content.anchorX * this.content.width;
                break;

              case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                s = (o = (r = -this._rightGap - (this._itemSize.width + this._columnGap) * g) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
                s += (1 - this.content.anchorX) * this.content.width;
            }

            l = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap);

            switch (this._verticalDir) {
              case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                l -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
                l += (1 - this.content.anchorY) * this.content.height;
                break;

              case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                l -= this._itemTmp.anchorY * this._itemSize.height;
                l += this.content.anchorY * this.content.height;
                l *= -1;
            }

            return {
              id: t,
              left: o,
              right: r,
              x: s,
              y: l
            };
        }

    }
  };

  _ctor.prototype._calcExistItemPos = function (t) {
    var e = this.getItemByListId(t);

    if (!e) {
      return null;
    }

    var n = {
      id: t,
      x: e.x,
      y: e.y
    };

    if (this._sizeType) {
      n.top = e.y + e.height * (1 - e.anchorY);
      n.bottom = e.y - e.height * e.anchorY;
    } else {
      n.left = e.x - e.width * e.anchorX;
      n.right = e.x + e.width * (1 - e.anchorX);
    }

    return n;
  };

  _ctor.prototype.getItemPos = function (t) {
    if (this._virtual) {
      return this._calcItemPos(t);
    } else {
      if (this.frameByFrameRenderNum) {
        return this._calcItemPos(t);
      } else {
        return this._calcExistItemPos(t);
      }
    }
  };

  _ctor.prototype._getFixedSize = function (t) {
    if (!this._customSize) {
      return null;
    }

    null == t && (t = this._numItems);
    var e = 0;
    var n = 0;

    for (var i in this._customSize) {
      if (parseInt(i) < t) {
        e += this._customSize[i];
        n++;
      }
    }

    return {
      val: e,
      count: n
    };
  };

  _ctor.prototype._onScrollBegan = function () {
    this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
  };

  _ctor.prototype._onScrollEnded = function () {
    var t = this;
    t.curScrollIsTouch = false;

    if (null != t.scrollToListId) {
      var e = t.getItemByListId(t.scrollToListId);
      t.scrollToListId = null;
      e && cc.tween(e).to(.1, {
        scale: 1.06
      }).to(.1, {
        scale: 1
      }).start();
    }

    t._onScrolling();

    if (t._slideMode != s.ADHERING || t.adhering) {
      if (t._slideMode == s.PAGE) {
        if (null != t._beganPos && t.curScrollIsTouch) {
          this._pageAdhere();
        } else {
          t.adhere();
        }
      }
    } else {
      t.adhere();
    }
  };

  _ctor.prototype._onTouchStart = function (t, e) {
    if (!this._scrollView.hasNestedViewGroup(t, e) && (this.curScrollIsTouch = true, t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
      for (var n = t.target; null == n._listId && n.parent;) {
        n = n.parent;
      }

      this._scrollItem = null != n._listId ? n : t.target;
    }
  };

  _ctor.prototype._onTouchUp = function () {
    var t = this;
    t._scrollPos = null;

    if (t._slideMode == s.ADHERING) {
      this.adhering && (this._adheringBarrier = true);
      t.adhere();
    } else if (t._slideMode == s.PAGE) {
      if (null != t._beganPos) {
        this._pageAdhere();
      } else {
        t.adhere();
      }
    }

    this._scrollItem = null;
  };

  _ctor.prototype._onTouchCancelled = function (t, e) {
    var n = this;

    if (!(n._scrollView.hasNestedViewGroup(t, e) || t.simulate)) {
      n._scrollPos = null;

      if (n._slideMode == s.ADHERING) {
        n.adhering && (n._adheringBarrier = true), n.adhere();
      } else {
        n._slideMode == s.PAGE && (null != n._beganPos ? n._pageAdhere() : n.adhere());
      }

      this._scrollItem = null;
    }
  };

  _ctor.prototype._onSizeChanged = function () {
    this.checkInited(false) && this._onScrolling();
  };

  _ctor.prototype._onItemAdaptive = function (t) {
    if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
      this._customSize || (this._customSize = {});
      var e = this._sizeType ? t.height : t.width;

      if (this._customSize[t._listId] != e) {
        this._customSize[t._listId] = e;

        this._resizeContent();

        this.updateAll();

        if (null != this._scrollToListId) {
          this._scrollPos = null, this.unschedule(this._scrollToSo), this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
        }
      }
    }
  };

  _ctor.prototype._pageAdhere = function () {
    var t = this;

    if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
      var e = t._sizeType ? t.viewTop : t.viewLeft;
      var n = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;

      if (Math.abs(t._beganPos - e) > n) {
        switch (t._alignCalcType) {
          case 1:
          case 4:
            if (t._beganPos > e) {
              t.prePage(.5);
            } else {
              t.nextPage(.5);
            }

            break;

          case 2:
          case 3:
            if (t._beganPos < e) {
              t.prePage(.5);
            } else {
              t.nextPage(.5);
            }

        }
      } else {
        t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
      }

      t._beganPos = null;
    }
  };

  _ctor.prototype.adhere = function () {
    var t = this;

    if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
      t.adhering = true;

      t._calcNearestItem();

      var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
      t.scrollTo(t.nearestListId, .7, e);
    }
  };

  _ctor.prototype.update = function () {
    if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) {
      if (this._virtual) {
        var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;

        for (var e = this._updateCounter; e < t; e++) {
          var n = this.displayData[e];
          n && this._createOrUpdateItem(n);
        }

        if (this._updateCounter >= this.displayItemNum - 1) {
          if (this._doneAfterUpdate) {
            this._updateCounter = 0;
            this._updateDone = false;
            this._doneAfterUpdate = false;
          } else {
            this._updateDone = true;

            this._delRedundantItem();

            this._forceUpdate = false;

            this._calcNearestItem();

            this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
          }
        } else {
          this._updateCounter += this.frameByFrameRenderNum;
        }
      } else if (this._updateCounter < this._numItems) {
        t = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;

        for (e = this._updateCounter; e < t; e++) {
          this._createOrUpdateItem2(e);
        }

        this._updateCounter += this.frameByFrameRenderNum;
      } else {
        this._updateDone = true;

        this._calcNearestItem();

        this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
      }
    }
  };

  _ctor.prototype._createOrUpdateItem = function (t) {
    var e = this.getItemByListId(t.id);

    if (e) {
      if (this._forceUpdate && this.renderEvent) {
        e.setPosition(cc.v2(t.x, t.y));

        this._resetItemSize(e);

        this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems);
      }
    } else {
      var n = this._pool.size() > 0;
      e = n ? this._pool.get() : cc.instantiate(this._itemTmp);

      if (!(n && cc.isValid(e))) {
        e = cc.instantiate(this._itemTmp);
        n = false;
      }

      if (e._listId != t.id) {
        e._listId = t.id;
        e.setContentSize(this._itemSize);
      }

      e.setPosition(cc.v2(t.x, t.y));

      this._resetItemSize(e);

      this.content.addChild(e);

      if (n && this._needUpdateWidget) {
        var i = e.getComponent(cc.Widget);
        i && i.updateAlignment();
      }

      e.setSiblingIndex(this.content.childrenCount - 1);
      var a = e.getComponent($z1ListItem["default"]);
      e.listItem = a;

      if (a) {
        a.listId = t.id;
        a.list = this;

        a._registerEvent();
      }

      this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems);
    }

    this._resetItemSize(e);

    this._updateListItem(e.listItem);

    this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
  };

  _ctor.prototype._createOrUpdateItem2 = function (t) {
    var e;
    var n = this.content.children[t];

    if (n) {
      if (this._forceUpdate && this.renderEvent) {
        n._listId = t, e && (e.listId = t), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], n, t % this._actualNumItems);
      }
    } else {
      (n = cc.instantiate(this._itemTmp))._listId = t;
      this.content.addChild(n);
      e = n.getComponent($z1ListItem["default"]);
      n.listItem = e;

      if (e) {
        e.listId = t, e.list = this, e._registerEvent();
      }

      this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], n, t % this._actualNumItems);
    }

    this._updateListItem(e);

    this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
  };

  _ctor.prototype._updateListItem = function (t) {
    if (t && this.selectedMode > l.NONE) {
      var e = t.node;

      switch (this.selectedMode) {
        case l.SINGLE:
          t.selected = this.selectedId == e._listId;
          break;

        case l.MULT:
          t.selected = this.multSelected.indexOf(e._listId) >= 0;
      }
    }
  };

  _ctor.prototype._resetItemSize = function () {};

  _ctor.prototype._updateItemPos = function (t) {
    var e = isNaN(t) ? t : this.getItemByListId(t);
    var n = this.getItemPos(e._listId);
    e.setPosition(n.x, n.y);
  };

  _ctor.prototype.setMultSelected = function (t, e) {
    var n = this;

    if (n.checkInited()) {
      Array.isArray(t) || (t = [t]);

      if (null == e) {
        n.multSelected = t;
      } else {
        var i = undefined;
        var a = undefined;

        if (e) {
          for (var o = t.length - 1; o >= 0; o--) {
            i = t[o];
            (a = n.multSelected.indexOf(i)) < 0 && n.multSelected.push(i);
          }
        } else {
          for (o = t.length - 1; o >= 0; o--) {
            i = t[o];
            (a = n.multSelected.indexOf(i)) >= 0 && n.multSelected.splice(a, 1);
          }
        }
      }

      n._forceUpdate = true;

      n._onScrolling();
    }
  };

  _ctor.prototype.getMultSelected = function () {
    return this.multSelected;
  };

  _ctor.prototype.hasMultSelected = function (t) {
    return this.multSelected && this.multSelected.indexOf(t) >= 0;
  };

  _ctor.prototype.delMultSelected = function () {
    this.multSelected = [];
  };

  _ctor.prototype.updateItem = function (t) {
    if (this.checkInited()) {
      Array.isArray(t) || (t = [t]);
      var e = 0;

      for (var n = t.length; e < n; e++) {
        var i = t[e];
        var a = this.getItemByListId(i);
        a && cc.Component.EventHandler.emitEvents([this.renderEvent], a, i % this._actualNumItems);
      }
    }
  };

  _ctor.prototype.updateAll = function () {
    this.checkInited() && (this.numItems = this.numItems);
  };

  _ctor.prototype.getItemByListId = function (t) {
    if (this.content) {
      for (var e = this.content.childrenCount - 1; e >= 0; e--) {
        var n = this.content.children[e];

        if (n._listId == t) {
          return n;
        }
      }
    }
  };

  _ctor.prototype._getOutsideItem = function () {
    var t;
    var e = [];

    for (var n = this.content.childrenCount - 1; n >= 0; n--) {
      t = this.content.children[n];
      this.displayData.find(function (e) {
        return e.id == t._listId;
      }) || e.push(t);
    }

    return e;
  };

  _ctor.prototype._delRedundantItem = function () {
    if (this._virtual) {
      var t = this._getOutsideItem();

      for (var e = t.length - 1; e >= 0; e--) {
        var n = t[e];

        if (!this._scrollItem || n._listId != this._scrollItem._listId) {
          n.isCached = true;

          this._pool.put(n);

          for (var i = this._lastDisplayData.length - 1; i >= 0; i--) {
            if (this._lastDisplayData[i] == n._listId) {
              this._lastDisplayData.splice(i, 1);

              break;
            }
          }
        }
      }
    } else {
      for (; this.content.childrenCount > this._numItems;) {
        this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
      }
    }
  };

  _ctor.prototype._delSingleItem = function (t) {
    t.removeFromParent();
    t.destroy && t.destroy();
    t = null;
  };

  _ctor.prototype.aniDelItem = function (t, e, n) {
    var i = this;

    if (!i.checkInited() || i.cyclic || !i._virtual) {
      return cc.error("This function is not allowed to be called!");
    }

    if (!e) {
      return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
    }

    if (i._aniDelRuning) {
      return cc.warn("Please wait for the current deletion to finish!");
    }

    var a;
    var o = i.getItemByListId(t);

    if (o) {
      a = o.getComponent($z1ListItem["default"]);
      i._aniDelRuning = true;
      i._aniDelCB = e;
      i._aniDelItem = o;
      i._aniDelBeforePos = o.position;
      i._aniDelBeforeScale = o.scale;
      var r = i.displayData[i.displayData.length - 1].id;
      var s = a.selected;
      a.showAni(n, function () {
        var n;
        var a;
        var c;
        r < i._numItems - 2 && (n = r + 1);

        if (null != n) {
          var h = i._calcItemPos(n);

          i.displayData.push(h);

          if (i._virtual) {
            i._createOrUpdateItem(h);
          } else {
            i._createOrUpdateItem2(n);
          }
        } else {
          i._numItems--;
        }

        if (i.selectedMode == l.SINGLE) {
          if (s) {
            i._selectedId = -1;
          } else {
            i._selectedId - 1 >= 0 && i._selectedId--;
          }
        } else if (i.selectedMode == l.MULT && i.multSelected.length) {
          var g = i.multSelected.indexOf(t);
          g >= 0 && i.multSelected.splice(g, 1);

          for (var u = i.multSelected.length - 1; u >= 0; u--) {
            (f = i.multSelected[u]) >= t && i.multSelected[u]--;
          }
        }

        if (i._customSize) {
          i._customSize[t] && delete i._customSize[t];
          var d = {};
          var p = undefined;

          for (var f in i._customSize) {
            p = i._customSize[f];
            var m = parseInt(f);
            d[m - (m >= t ? 1 : 0)] = p;
          }

          i._customSize = d;
        }

        for (u = null != n ? n : r; u >= t + 1; u--) {
          if (o = i.getItemByListId(u)) {
            var y = i._calcItemPos(u - 1);

            a = cc.tween(o).to(.2333, {
              position: cc.v2(y.x, y.y)
            });

            if (u <= t + 1) {
              c = true;
              a.call(function () {
                i._aniDelRuning = false;
                e(t);
                delete i._aniDelCB;
              });
            }

            a.start();
          }
        }

        if (!c) {
          i._aniDelRuning = false;
          e(t);
          i._aniDelCB = null;
        }
      }, true);
    } else {
      e(t);
    }
  };

  _ctor.prototype.scrollTo = function (t, e, n, i) {
    undefined === e && (e = .5);
    undefined === n && (n = null);
    undefined === i && (i = false);
    var a = this;

    if (a.checkInited(false)) {
      if (null == e) {
        e = .5;
      } else {
        e < 0 && (e = 0);
      }

      if (t < 0) {
        t = 0;
      } else {
        t >= a._numItems && (t = a._numItems - 1);
      }

      !a._virtual && a._layout && a._layout.enabled && a._layout.updateLayout();
      var o;
      var r;
      var s = a.getItemPos(t);

      if (!s) {
        return false;
      }

      switch (a._alignCalcType) {
        case 1:
          o = s.left;
          o -= null != n ? a.node.width * n : a._leftGap;
          s = cc.v2(o, 0);
          break;

        case 2:
          o = s.right - a.node.width;
          o += null != n ? a.node.width * n : a._rightGap;
          s = cc.v2(o + a.content.width, 0);
          break;

        case 3:
          r = s.top;
          r += null != n ? a.node.height * n : a._topGap;
          s = cc.v2(0, -r);
          break;

        case 4:
          r = s.bottom + a.node.height;
          r -= null != n ? a.node.height * n : a._bottomGap;
          s = cc.v2(0, -r + a.content.height);
      }

      var l = a.content.getPosition();
      l = Math.abs(a._sizeType ? l.y : l.x);
      var c = a._sizeType ? s.y : s.x;

      if (Math.abs((null != a._scrollPos ? a._scrollPos : l) - c) > .5) {
        a._scrollView.scrollToOffset(s, e);

        a._scrollToListId = t;
        a._scrollToEndTime = new Date().getTime() / 1e3 + e;
        a._scrollToSo = a.scheduleOnce(function () {
          a._adheringBarrier || (a.adhering = a._adheringBarrier = false);
          a._scrollPos = a._scrollToListId = a._scrollToEndTime = a._scrollToSo = null;

          if (i) {
            var e = a.getItemByListId(t);
            e && cc.tween(e).to(.1, {
              scale: 1.05
            }).to(.1, {
              scale: 1
            }).start();
          }
        }, e + .1);
        e <= 0 && a._onScrolling();
      }
    }
  };

  _ctor.prototype._calcNearestItem = function () {
    var t;
    var e;
    var n;
    var i;
    var a;
    var o;
    var r = this;
    r.nearestListId = null;
    r._virtual && r._calcViewPos();
    n = r.viewTop;
    i = r.viewRight;
    a = r.viewBottom;
    o = r.viewLeft;
    var s = false;

    for (var l = 0; l < r.content.childrenCount && !s; l += r._colLineNum) {
      if (t = r._virtual ? r.displayData[l] : r._calcExistItemPos(l)) {
        e = r._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;

        switch (r._alignCalcType) {
          case 1:
            if (t.right >= o) {
              r.nearestListId = t.id;
              o > e && (r.nearestListId += r._colLineNum);
              s = true;
            }

            break;

          case 2:
            if (t.left <= i) {
              r.nearestListId = t.id;
              i < e && (r.nearestListId += r._colLineNum);
              s = true;
            }

            break;

          case 3:
            if (t.bottom <= n) {
              r.nearestListId = t.id;
              n < e && (r.nearestListId += r._colLineNum);
              s = true;
            }

            break;

          case 4:
            if (t.top >= a) {
              r.nearestListId = t.id;
              a > e && (r.nearestListId += r._colLineNum);
              s = true;
            }

        }
      }
    }

    if ((t = r._virtual ? r.displayData[r.displayItemNum - 1] : r._calcExistItemPos(r._numItems - 1)) && t.id == r._numItems - 1) {
      e = r._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;

      switch (r._alignCalcType) {
        case 1:
          i > e && (r.nearestListId = t.id);
          break;

        case 2:
          o < e && (r.nearestListId = t.id);
          break;

        case 3:
          a < e && (r.nearestListId = t.id);
          break;

        case 4:
          n > e && (r.nearestListId = t.id);
      }
    }
  };

  _ctor.prototype.prePage = function (t) {
    undefined === t && (t = .5);
    this.checkInited() && this.skipPage(this.curPageNum - 1, t);
  };

  _ctor.prototype.nextPage = function (t) {
    undefined === t && (t = .5);
    this.checkInited() && this.skipPage(this.curPageNum + 1, t);
  };

  _ctor.prototype.skipPage = function (t, e) {
    var n = this;

    if (n.checkInited()) {
      if (n._slideMode != s.PAGE) {
        return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
      } else {
        return void (t < 0 || t >= n._numItems || n.curPageNum != t && (n.curPageNum = t, n.pageChangeEvent && cc.Component.EventHandler.emitEvents([n.pageChangeEvent], t), n.scrollTo(t, e)));
      }
    }
  };

  _ctor.prototype.calcCustomSize = function (t) {
    var e = this;

    if (e.checkInited()) {
      if (!e._itemTmp) {
        return cc.error("Unset template item!");
      }

      if (!e.renderEvent) {
        return cc.error("Unset Render-Event!");
      }

      e._customSize = {};
      var n = cc.instantiate(e._itemTmp);
      e.content.addChild(n);

      for (var i = 0; i < t; i++) {
        cc.Component.EventHandler.emitEvents([e.renderEvent], n, i);
        n.height == e._itemSize.height && n.width == e._itemSize.width || (e._customSize[i] = e._sizeType ? n.height : n.width);
      }

      Object.keys(e._customSize).length || (e._customSize = null);
      n.removeFromParent();
      n.destroy && n.destroy();
      return e._customSize;
    }
  };

  cc__decorate([ccp_property({
    type: cc.Enum(r) // tooltip: false

  })], _ctor.prototype, "templateType", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    // tooltip: false,
    visible: function visible() {
      return this.templateType == r.NODE;
    }
  })], _ctor.prototype, "tmpNode", undefined);
  cc__decorate([ccp_property({
    type: cc.Prefab,
    // tooltip: false,
    visible: function visible() {
      return this.templateType == r.PREFAB;
    }
  })], _ctor.prototype, "tmpPrefab", undefined);
  cc__decorate([ccp_property()], _ctor.prototype, "_slideMode", undefined);
  cc__decorate([ccp_property({
    type: cc.Enum(s) // tooltip: false

  })], _ctor.prototype, "slideMode", null);
  cc__decorate([ccp_property({
    type: cc.Float,
    range: [0, 1, .1],
    // tooltip: false,
    slide: true,
    visible: function visible() {
      return this._slideMode == s.PAGE;
    }
  })], _ctor.prototype, "pageDistance", undefined);
  cc__decorate([ccp_property({
    type: cc.Component.EventHandler,
    // tooltip: false,
    visible: function visible() {
      return this._slideMode == s.PAGE;
    }
  })], _ctor.prototype, "pageChangeEvent", undefined);
  cc__decorate([ccp_property()], _ctor.prototype, "_virtual", undefined);
  cc__decorate([ccp_property({
    type: cc.Boolean // tooltip: false

  })], _ctor.prototype, "virtual", null);
  cc__decorate([ccp_property({
    // tooltip: false,
    visible: function visible() {
      var t = this.slideMode == s.NORMAL;
      t || (this.cyclic = false);
      return t;
    }
  })], _ctor.prototype, "cyclic", undefined);
  cc__decorate([ccp_property({
    // tooltip: false,
    visible: function visible() {
      return this.virtual;
    }
  })], _ctor.prototype, "lackCenter", undefined);
  cc__decorate([ccp_property({
    // tooltip: false,
    visible: function visible() {
      var t = this.virtual && !this.lackCenter;
      t || (this.lackSlide = false);
      return t;
    }
  })], _ctor.prototype, "lackSlide", undefined);
  cc__decorate([ccp_property({
    type: cc.Integer
  })], _ctor.prototype, "_updateRate", undefined);
  cc__decorate([ccp_property({
    type: cc.Integer,
    range: [0, 6, 1],
    // tooltip: false,
    slide: true
  })], _ctor.prototype, "updateRate", null);
  cc__decorate([ccp_property({
    type: cc.Integer,
    range: [0, 12, 1],
    // tooltip: false,
    slide: true
  })], _ctor.prototype, "frameByFrameRenderNum", undefined);
  cc__decorate([ccp_property({
    type: cc.Component.EventHandler // tooltip: false

  })], _ctor.prototype, "renderEvent", undefined);
  cc__decorate([ccp_property({
    type: cc.Enum(l) // tooltip: false

  })], _ctor.prototype, "selectedMode", undefined);
  cc__decorate([ccp_property({
    // tooltip: false,
    visible: function visible() {
      return this.selectedMode == l.SINGLE;
    }
  })], _ctor.prototype, "repeatEventSingle", undefined);
  cc__decorate([ccp_property({
    type: cc.Component.EventHandler,
    // tooltip: false,
    visible: function visible() {
      return this.selectedMode > l.NONE;
    }
  })], _ctor.prototype, "selectedEvent", undefined);
  cc__decorate([ccp_property({
    serializable: false
  })], _ctor.prototype, "_numItems", undefined);
  return cc__decorate([ccp_ccclass, ccp_disallowMultiple(), ccp_menu("Custom/List"), ccp_requireComponent(cc.ScrollView), ccp_executionOrder(-5e3)], _ctor);
}(cc.Component);

exports["default"] = def_List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0xpc3QuanMiXSwibmFtZXMiOlsiaSIsImNjX19leHRlbmRzIiwiX19leHRlbmRzIiwiY2NfX2RlY29yYXRlIiwiX19kZWNvcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiciIsInMiLCJsIiwiY2NfX2RlY29yYXRvciIsImNjIiwiX2RlY29yYXRvciIsImNjcF9jY2NsYXNzIiwiY2NjbGFzcyIsImNjcF9wcm9wZXJ0eSIsInByb3BlcnR5IiwiY2NwX2Rpc2FsbG93TXVsdGlwbGUiLCJkaXNhbGxvd011bHRpcGxlIiwiY2NwX21lbnUiLCJtZW51IiwiY2NwX2V4ZWN1dGlvbk9yZGVyIiwiZXhlY3V0aW9uT3JkZXIiLCJjY3BfcmVxdWlyZUNvbXBvbmVudCIsInJlcXVpcmVDb21wb25lbnQiLCIkejFMaXN0SXRlbSIsInJlcXVpcmUiLCJ0IiwiTk9ERSIsIlBSRUZBQiIsIk5PUk1BTCIsIkFESEVSSU5HIiwiUEFHRSIsIk5PTkUiLCJTSU5HTEUiLCJNVUxUIiwiZGVmX0xpc3QiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInRlbXBsYXRlVHlwZSIsInRtcE5vZGUiLCJ0bXBQcmVmYWIiLCJfc2xpZGVNb2RlIiwicGFnZURpc3RhbmNlIiwicGFnZUNoYW5nZUV2ZW50IiwiQ29tcG9uZW50IiwiRXZlbnRIYW5kbGVyIiwiX3ZpcnR1YWwiLCJjeWNsaWMiLCJsYWNrQ2VudGVyIiwibGFja1NsaWRlIiwiX3VwZGF0ZVJhdGUiLCJmcmFtZUJ5RnJhbWVSZW5kZXJOdW0iLCJyZW5kZXJFdmVudCIsInNlbGVjdGVkTW9kZSIsInJlcGVhdEV2ZW50U2luZ2xlIiwic2VsZWN0ZWRFdmVudCIsIl9zZWxlY3RlZElkIiwiX2ZvcmNlVXBkYXRlIiwiX3VwZGF0ZURvbmUiLCJfbnVtSXRlbXMiLCJfaW5pdGVkIiwiX25lZWRVcGRhdGVXaWRnZXQiLCJfYW5pRGVsUnVuaW5nIiwiX2RvbmVBZnRlclVwZGF0ZSIsImFkaGVyaW5nIiwiX2FkaGVyaW5nQmFycmllciIsImN1clBhZ2VOdW0iLCJwcm90b3R5cGUiLCJnZXQiLCJzZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiX29uU2Nyb2xsaW5nIiwibiIsImdldEl0ZW1CeUxpc3RJZCIsInVuZGVmaW5lZCIsIl9sYXN0U2VsZWN0ZWRJZCIsImdldENvbXBvbmVudCIsInNlbGVjdGVkIiwiYSIsImVtaXRFdmVudHMiLCJfYWN0dWFsTnVtSXRlbXMiLCJvIiwibXVsdFNlbGVjdGVkIiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJjaGVja0luaXRlZCIsImVycm9yIiwiX3Jlc2l6ZUNvbnRlbnQiLCJfY3ljbGljTnVtIiwic2xpZGVNb2RlIiwibmVhcmVzdExpc3RJZCIsImNvbnRlbnQiLCJMYXlvdXQiLCJlbmFibGVkIiwiX2RlbFJlZHVuZGFudEl0ZW0iLCJmaXJzdExpc3RJZCIsIl9jcmVhdGVPclVwZGF0ZUl0ZW0yIiwiX3VwZGF0ZUNvdW50ZXIiLCJkaXNwbGF5SXRlbU51bSIsIl9zY3JvbGxWaWV3Iiwib25Mb2FkIiwiX2luaXQiLCJvbkRlc3Ryb3kiLCJpc1ZhbGlkIiwiX2l0ZW1UbXAiLCJkZXN0cm95IiwiX3Bvb2wiLCJjbGVhciIsIm9uRW5hYmxlIiwiX3JlZ2lzdGVyRXZlbnQiLCJfYW5pRGVsSXRlbSIsIl9hbmlEZWxCZWZvcmVQb3MiLCJwb3NpdGlvbiIsIl9hbmlEZWxCZWZvcmVTY2FsZSIsInNjYWxlIiwiX2FuaURlbENCIiwib25EaXNhYmxlIiwiX3VucmVnaXN0ZXJFdmVudCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIl9vblRvdWNoU3RhcnQiLCJfb25Ub3VjaFVwIiwiVE9VQ0hfQ0FOQ0VMIiwiX29uVG91Y2hDYW5jZWxsZWQiLCJfb25TY3JvbGxCZWdhbiIsIl9vblNjcm9sbEVuZGVkIiwiU0laRV9DSEFOR0VEIiwiX29uU2l6ZUNoYW5nZWQiLCJvZmYiLCJTY3JvbGxWaWV3IiwiX2xheW91dCIsIl9hbGlnbiIsInR5cGUiLCJfcmVzaXplTW9kZSIsInJlc2l6ZU1vZGUiLCJfc3RhcnRBeGlzIiwic3RhcnRBeGlzIiwiX3RvcEdhcCIsInBhZGRpbmdUb3AiLCJfcmlnaHRHYXAiLCJwYWRkaW5nUmlnaHQiLCJfYm90dG9tR2FwIiwicGFkZGluZ0JvdHRvbSIsIl9sZWZ0R2FwIiwicGFkZGluZ0xlZnQiLCJfY29sdW1uR2FwIiwic3BhY2luZ1giLCJfbGluZUdhcCIsInNwYWNpbmdZIiwiX2NvbExpbmVOdW0iLCJfdmVydGljYWxEaXIiLCJ2ZXJ0aWNhbERpcmVjdGlvbiIsIl9ob3Jpem9udGFsRGlyIiwiaG9yaXpvbnRhbERpcmVjdGlvbiIsInNldFRlbXBsYXRlSXRlbSIsImluc3RhbnRpYXRlIiwiaW5lcnRpYSIsIl9vbk1vdXNlV2hlZWwiLCJ2aXJ0dWFsIiwiX2xhc3REaXNwbGF5RGF0YSIsImRpc3BsYXlEYXRhIiwiTm9kZVBvb2wiLCJfcHJvY2Vzc0F1dG9TY3JvbGxpbmciLCJiaW5kIiwiX3N0YXJ0Qm91bmNlQmFja0lmTmVlZGVkIiwiVHlwZSIsIkhPUklaT05UQUwiLCJIb3Jpem9udGFsRGlyZWN0aW9uIiwiTEVGVF9UT19SSUdIVCIsIl9hbGlnbkNhbGNUeXBlIiwiUklHSFRfVE9fTEVGVCIsIlZFUlRJQ0FMIiwiVmVydGljYWxEaXJlY3Rpb24iLCJUT1BfVE9fQk9UVE9NIiwiQk9UVE9NX1RPX1RPUCIsIkdSSUQiLCJBeGlzRGlyZWN0aW9uIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJuYW1lIiwiX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUiLCJNYXRoIiwibWluIiwiX2F1dG9TY3JvbGxUb3RhbFRpbWUiLCJfYXV0b1Njcm9sbEF0dGVudWF0ZSIsIl9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiIsImFkZCIsIl9hdXRvU2Nyb2xsVGFyZ2V0RGVsdGEiLCJtdWwiLCJnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nIiwiYWJzIiwiX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCIsIl9kaXNwYXRjaEV2ZW50IiwiX2F1dG9TY3JvbGxpbmciLCJzdWIiLCJnZXRDb250ZW50UG9zaXRpb24iLCJfbW92ZUNvbnRlbnQiLCJfY2xhbXBEZWx0YSIsIl9pc0JvdW5jaW5nIiwiX3Njcm9sbGluZyIsIlJlc2l6ZU1vZGUiLCJDSElMRFJFTiIsIl9pdGVtU2l6ZSIsImNlbGxTaXplIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiV2lkZ2V0IiwiX3NpemVUeXBlIiwiZmxvb3IiLCJfY3VzdG9tU2l6ZSIsIl9nZXRGaXhlZFNpemUiLCJ2YWwiLCJjb3VudCIsImNlaWwiLCJfYWxsSXRlbVNpemUiLCJfYWxsSXRlbVNpemVOb0VkZ2UiLCJfY3ljbGljUG9zMSIsIl9jeWNsaWNQb3MyIiwiX2N5Y2xpY0FsbEl0ZW1TaXplIiwiX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlIiwiX2xhY2siLCJjIiwiZnJhbWVDb3VudCIsImdldFBvc2l0aW9uIiwieSIsIngiLCJ2MiIsImlzQXV0b1Njcm9sbGluZyIsIl9jYWxjVmlld1BvcyIsInZpZXdUb3AiLCJ2aWV3Qm90dG9tIiwidmlld1JpZ2h0Iiwidmlld0xlZnQiLCJoIiwiZyIsIl9jYWxjSXRlbVBvcyIsInJpZ2h0IiwibGVmdCIsImxlbmd0aCIsImJvdHRvbSIsInRvcCIsInUiLCJkIiwiaWQiLCJwIiwiZiIsInNvcnQiLCJtIiwiX2NyZWF0ZU9yVXBkYXRlSXRlbSIsIl9jYWxjTmVhcmVzdEl0ZW0iLCJlbGFzdGljTGVmdCIsImVsYXN0aWNSaWdodCIsImVsYXN0aWNUb3AiLCJlbGFzdGljQm90dG9tIiwiYW5jaG9yWCIsImFuY2hvclkiLCJfY2FsY0V4aXN0SXRlbVBvcyIsImdldEl0ZW1Qb3MiLCJwYXJzZUludCIsIl9iZWdhblBvcyIsImN1clNjcm9sbElzVG91Y2giLCJzY3JvbGxUb0xpc3RJZCIsInR3ZWVuIiwidG8iLCJzdGFydCIsIl9wYWdlQWRoZXJlIiwiYWRoZXJlIiwiaGFzTmVzdGVkVmlld0dyb3VwIiwiZXZlbnRQaGFzZSIsIkV2ZW50IiwiQVRfVEFSR0VUIiwidGFyZ2V0IiwiX2xpc3RJZCIsInBhcmVudCIsIl9zY3JvbGxJdGVtIiwiX3Njcm9sbFBvcyIsInNpbXVsYXRlIiwiX29uSXRlbUFkYXB0aXZlIiwidXBkYXRlQWxsIiwiX3Njcm9sbFRvTGlzdElkIiwidW5zY2hlZHVsZSIsIl9zY3JvbGxUb1NvIiwic2Nyb2xsVG8iLCJtYXgiLCJfc2Nyb2xsVG9FbmRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJwcmVQYWdlIiwibmV4dFBhZ2UiLCJ1cGRhdGUiLCJzZXRQb3NpdGlvbiIsIl9yZXNldEl0ZW1TaXplIiwic2V0Q29udGVudFNpemUiLCJhZGRDaGlsZCIsInVwZGF0ZUFsaWdubWVudCIsInNldFNpYmxpbmdJbmRleCIsImNoaWxkcmVuQ291bnQiLCJsaXN0SXRlbSIsImxpc3RJZCIsImxpc3QiLCJfdXBkYXRlTGlzdEl0ZW0iLCJjaGlsZHJlbiIsInNlbGVjdGVkSWQiLCJfdXBkYXRlSXRlbVBvcyIsImlzTmFOIiwic2V0TXVsdFNlbGVjdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0TXVsdFNlbGVjdGVkIiwiaGFzTXVsdFNlbGVjdGVkIiwiZGVsTXVsdFNlbGVjdGVkIiwidXBkYXRlSXRlbSIsIm51bUl0ZW1zIiwiX2dldE91dHNpZGVJdGVtIiwiZmluZCIsImlzQ2FjaGVkIiwicHV0IiwiX2RlbFNpbmdsZUl0ZW0iLCJyZW1vdmVGcm9tUGFyZW50IiwiYW5pRGVsSXRlbSIsIndhcm4iLCJzaG93QW5pIiwiY2FsbCIsInVwZGF0ZUxheW91dCIsInNjcm9sbFRvT2Zmc2V0Iiwic2NoZWR1bGVPbmNlIiwic2tpcFBhZ2UiLCJjYWxjQ3VzdG9tU2l6ZSIsImtleXMiLCJFbnVtIiwidmlzaWJsZSIsIlByZWZhYiIsIkZsb2F0IiwicmFuZ2UiLCJzbGlkZSIsIkJvb2xlYW4iLCJJbnRlZ2VyIiwic2VyaWFsaXphYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElB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TjNCLENBQVo7RUFPQTdFLFlBQVksQ0FBQyxDQUFDYyxZQUFZLENBQUM7SUFDekIwVSxZQUFZLEVBQUU7RUFEVyxDQUFELENBQWIsQ0FBRCxFQUVQcFQsS0FBSyxDQUFDaUMsU0FGQyxFQUVVLFdBRlYsRUFFdUJRLFNBRnZCLENBQVo7RUFHQSxPQUFPN0UsWUFBWSxDQUFDLENBQUNZLFdBQUQsRUFBY0ksb0JBQW9CLEVBQWxDLEVBQXNDRSxRQUFRLENBQUMsYUFBRCxDQUE5QyxFQUErREksb0JBQW9CLENBQUNaLEVBQUUsQ0FBQzhILFVBQUosQ0FBbkYsRUFBb0dwSCxrQkFBa0IsQ0FBQyxDQUFDLEdBQUYsQ0FBdEgsQ0FBRCxFQUFnSWdCLEtBQWhJLENBQW5CO0FBQ0QsQ0FwL0NjLENBby9DYjFCLEVBQUUsQ0FBQ29DLFNBcC9DVSxDQUFmOztBQXEvQ0ExQyxPQUFPLFdBQVAsR0FBa0IrQixRQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcjtcbnZhciBzO1xudmFyIGw7XG52YXIgY2NfX2RlY29yYXRvciA9IGNjLl9kZWNvcmF0b3I7XG52YXIgY2NwX2NjY2xhc3MgPSBjY19fZGVjb3JhdG9yLmNjY2xhc3M7XG52YXIgY2NwX3Byb3BlcnR5ID0gY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBjY3BfZGlzYWxsb3dNdWx0aXBsZSA9IGNjX19kZWNvcmF0b3IuZGlzYWxsb3dNdWx0aXBsZTtcbnZhciBjY3BfbWVudSA9IGNjX19kZWNvcmF0b3IubWVudTtcbnZhciBjY3BfZXhlY3V0aW9uT3JkZXIgPSBjY19fZGVjb3JhdG9yLmV4ZWN1dGlvbk9yZGVyO1xudmFyIGNjcF9yZXF1aXJlQ29tcG9uZW50ID0gY2NfX2RlY29yYXRvci5yZXF1aXJlQ29tcG9uZW50O1xudmFyICR6MUxpc3RJdGVtID0gcmVxdWlyZShcIkxpc3RJdGVtXCIpO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHRbdC5OT0RFID0gMV0gPSBcIk5PREVcIjtcbiAgdFt0LlBSRUZBQiA9IDJdID0gXCJQUkVGQUJcIjtcbn0pKHIgfHwgKHIgPSB7fSkpO1xuKGZ1bmN0aW9uICh0KSB7XG4gIHRbdC5OT1JNQUwgPSAxXSA9IFwiTk9STUFMXCI7XG4gIHRbdC5BREhFUklORyA9IDJdID0gXCJBREhFUklOR1wiO1xuICB0W3QuUEFHRSA9IDNdID0gXCJQQUdFXCI7XG59KShzIHx8IChzID0ge30pKTtcbihmdW5jdGlvbiAodCkge1xuICB0W3QuTk9ORSA9IDBdID0gXCJOT05FXCI7XG4gIHRbdC5TSU5HTEUgPSAxXSA9IFwiU0lOR0xFXCI7XG4gIHRbdC5NVUxUID0gMl0gPSBcIk1VTFRcIjtcbn0pKGwgfHwgKGwgPSB7fSkpO1xudmFyIGRlZl9MaXN0ID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIGUudGVtcGxhdGVUeXBlID0gci5OT0RFO1xuICAgIGUudG1wTm9kZSA9IG51bGw7XG4gICAgZS50bXBQcmVmYWIgPSBudWxsO1xuICAgIGUuX3NsaWRlTW9kZSA9IHMuTk9STUFMO1xuICAgIGUucGFnZURpc3RhbmNlID0gLjM7XG4gICAgZS5wYWdlQ2hhbmdlRXZlbnQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgIGUuX3ZpcnR1YWwgPSB0cnVlO1xuICAgIGUuY3ljbGljID0gZmFsc2U7XG4gICAgZS5sYWNrQ2VudGVyID0gZmFsc2U7XG4gICAgZS5sYWNrU2xpZGUgPSBmYWxzZTtcbiAgICBlLl91cGRhdGVSYXRlID0gMDtcbiAgICBlLmZyYW1lQnlGcmFtZVJlbmRlck51bSA9IDA7XG4gICAgZS5yZW5kZXJFdmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgZS5zZWxlY3RlZE1vZGUgPSBsLk5PTkU7XG4gICAgZS5yZXBlYXRFdmVudFNpbmdsZSA9IGZhbHNlO1xuICAgIGUuc2VsZWN0ZWRFdmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgZS5fc2VsZWN0ZWRJZCA9IC0xO1xuICAgIGUuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XG4gICAgZS5fdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgZS5fbnVtSXRlbXMgPSAwO1xuICAgIGUuX2luaXRlZCA9IGZhbHNlO1xuICAgIGUuX25lZWRVcGRhdGVXaWRnZXQgPSBmYWxzZTtcbiAgICBlLl9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcbiAgICBlLl9kb25lQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcbiAgICBlLmFkaGVyaW5nID0gZmFsc2U7XG4gICAgZS5fYWRoZXJpbmdCYXJyaWVyID0gZmFsc2U7XG4gICAgZS5jdXJQYWdlTnVtID0gMDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfY3Rvci5wcm90b3R5cGUsIFwic2xpZGVNb2RlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICB0aGlzLl9zbGlkZU1vZGUgPSB0O1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2N0b3IucHJvdG90eXBlLCBcInZpcnR1YWxcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWw7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICBudWxsICE9IHQgJiYgKHRoaXMuX3ZpcnR1YWwgPSB0KTtcbiAgICAgIDAgIT0gdGhpcy5fbnVtSXRlbXMgJiYgdGhpcy5fb25TY3JvbGxpbmcoKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9jdG9yLnByb3RvdHlwZSwgXCJ1cGRhdGVSYXRlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl91cGRhdGVSYXRlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodCkge1xuICAgICAgdCA+PSAwICYmIHQgPD0gNiAmJiAodGhpcy5fdXBkYXRlUmF0ZSA9IHQpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2N0b3IucHJvdG90eXBlLCBcInNlbGVjdGVkSWRcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgZTtcbiAgICAgIHZhciBuID0gdGhpcztcbiAgICAgIHN3aXRjaCAobi5zZWxlY3RlZE1vZGUpIHtcbiAgICAgICAgY2FzZSBsLlNJTkdMRTpcbiAgICAgICAgICBpZiAoIW4ucmVwZWF0RXZlbnRTaW5nbGUgJiYgdCA9PSBuLl9zZWxlY3RlZElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGUgPSBuLmdldEl0ZW1CeUxpc3RJZCh0KTtcbiAgICAgICAgICB2YXIgaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAobi5fc2VsZWN0ZWRJZCA+PSAwKSB7XG4gICAgICAgICAgICBuLl9sYXN0U2VsZWN0ZWRJZCA9IG4uX3NlbGVjdGVkSWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG4uX2xhc3RTZWxlY3RlZElkID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbi5fc2VsZWN0ZWRJZCA9IHQ7XG4gICAgICAgICAgZSAmJiAoKGkgPSBlLmdldENvbXBvbmVudCgkejFMaXN0SXRlbS5kZWZhdWx0KSkuc2VsZWN0ZWQgPSB0cnVlKTtcbiAgICAgICAgICBpZiAobi5fbGFzdFNlbGVjdGVkSWQgPj0gMCAmJiBuLl9sYXN0U2VsZWN0ZWRJZCAhPSBuLl9zZWxlY3RlZElkKSB7XG4gICAgICAgICAgICB2YXIgYSA9IG4uZ2V0SXRlbUJ5TGlzdElkKG4uX2xhc3RTZWxlY3RlZElkKTtcbiAgICAgICAgICAgIGEgJiYgKGEuZ2V0Q29tcG9uZW50KCR6MUxpc3RJdGVtLmRlZmF1bHQpLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuLnNlbGVjdGVkRXZlbnQgJiYgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFtuLnNlbGVjdGVkRXZlbnRdLCBlLCB0ICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMsIG51bGwgPT0gbi5fbGFzdFNlbGVjdGVkSWQgPyBudWxsIDogbi5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbC5NVUxUOlxuICAgICAgICAgIGlmICghKGUgPSBuLmdldEl0ZW1CeUxpc3RJZCh0KSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSA9IGUuZ2V0Q29tcG9uZW50KCR6MUxpc3RJdGVtLmRlZmF1bHQpO1xuICAgICAgICAgIG4uX3NlbGVjdGVkSWQgPj0gMCAmJiAobi5fbGFzdFNlbGVjdGVkSWQgPSBuLl9zZWxlY3RlZElkKTtcbiAgICAgICAgICBuLl9zZWxlY3RlZElkID0gdDtcbiAgICAgICAgICB2YXIgbyA9ICFpLnNlbGVjdGVkO1xuICAgICAgICAgIGkuc2VsZWN0ZWQgPSBvO1xuICAgICAgICAgIHZhciByID0gbi5tdWx0U2VsZWN0ZWQuaW5kZXhPZih0KTtcbiAgICAgICAgICBpZiAobyAmJiByIDwgMCkge1xuICAgICAgICAgICAgbi5tdWx0U2VsZWN0ZWQucHVzaCh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIW8gJiYgciA+PSAwICYmIG4ubXVsdFNlbGVjdGVkLnNwbGljZShyLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbi5zZWxlY3RlZEV2ZW50ICYmIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbbi5zZWxlY3RlZEV2ZW50XSwgZSwgdCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCBudWxsID09IG4uX2xhc3RTZWxlY3RlZElkID8gbnVsbCA6IG4uX2xhc3RTZWxlY3RlZElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMsIG8pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2N0b3IucHJvdG90eXBlLCBcIm51bUl0ZW1zXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY3R1YWxOdW1JdGVtcztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBlID0gdGhpcztcbiAgICAgIGlmIChlLmNoZWNrSW5pdGVkKGZhbHNlKSkge1xuICAgICAgICBpZiAobnVsbCA9PSB0IHx8IHQgPCAwKSB7XG4gICAgICAgICAgY2MuZXJyb3IoXCJudW1JdGVtcyBzZXQgdGhlIHdyb25nOjpcIiwgdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5fYWN0dWFsTnVtSXRlbXMgPSBlLl9udW1JdGVtcyA9IHQ7XG4gICAgICAgICAgZS5fZm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIGlmIChlLl92aXJ0dWFsKSB7XG4gICAgICAgICAgICBlLl9yZXNpemVDb250ZW50KCk7XG4gICAgICAgICAgICBlLmN5Y2xpYyAmJiAoZS5fbnVtSXRlbXMgPSBlLl9jeWNsaWNOdW0gKiBlLl9udW1JdGVtcyk7XG4gICAgICAgICAgICBlLl9vblNjcm9sbGluZygpO1xuICAgICAgICAgICAgZS5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gfHwgZS5zbGlkZU1vZGUgIT0gcy5QQUdFIHx8IChlLmN1clBhZ2VOdW0gPSBlLm5lYXJlc3RMaXN0SWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZS5jeWNsaWMpIHtcbiAgICAgICAgICAgICAgZS5fcmVzaXplQ29udGVudCgpO1xuICAgICAgICAgICAgICBlLl9udW1JdGVtcyA9IGUuX2N5Y2xpY051bSAqIGUuX251bUl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSBlLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICAgICAgICBuICYmIChuLmVuYWJsZWQgPSB0cnVlKTtcbiAgICAgICAgICAgIGUuX2RlbFJlZHVuZGFudEl0ZW0oKTtcbiAgICAgICAgICAgIGUuZmlyc3RMaXN0SWQgPSAwO1xuICAgICAgICAgICAgaWYgKGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gZS5fbnVtSXRlbXMgPyBlLl9udW1JdGVtcyA6IGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGk7IGErKykge1xuICAgICAgICAgICAgICAgIGUuX2NyZWF0ZU9yVXBkYXRlSXRlbTIoYSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDwgZS5fbnVtSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBlLl91cGRhdGVDb3VudGVyID0gZS5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XG4gICAgICAgICAgICAgICAgZS5fdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgZS5fbnVtSXRlbXM7IGErKykge1xuICAgICAgICAgICAgICAgIGUuX2NyZWF0ZU9yVXBkYXRlSXRlbTIoYSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZS5kaXNwbGF5SXRlbU51bSA9IGUuX251bUl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2N0b3IucHJvdG90eXBlLCBcInNjcm9sbFZpZXdcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFZpZXc7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIF9jdG9yLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBjYy5pc1ZhbGlkKHQuX2l0ZW1UbXApICYmIHQuX2l0ZW1UbXAuZGVzdHJveSgpO1xuICAgIGNjLmlzVmFsaWQodC50bXBOb2RlKSAmJiB0LnRtcE5vZGUuZGVzdHJveSgpO1xuICAgIHQuX3Bvb2wgJiYgdC5fcG9vbC5jbGVhcigpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudCgpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKSB7XG4gICAgICB0aGlzLl9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl9hbmlEZWxJdGVtKSB7XG4gICAgICAgIHRoaXMuX2FuaURlbEJlZm9yZVBvcyAmJiAodGhpcy5fYW5pRGVsSXRlbS5wb3NpdGlvbiA9IHRoaXMuX2FuaURlbEJlZm9yZVBvcywgZGVsZXRlIHRoaXMuX2FuaURlbEJlZm9yZVBvcyksIHRoaXMuX2FuaURlbEJlZm9yZVNjYWxlICYmICh0aGlzLl9hbmlEZWxJdGVtLnNjYWxlID0gdGhpcy5fYW5pRGVsQmVmb3JlU2NhbGUsIGRlbGV0ZSB0aGlzLl9hbmlEZWxCZWZvcmVTY2FsZSksIGRlbGV0ZSB0aGlzLl9hbmlEZWxJdGVtO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2FuaURlbENCKSB7XG4gICAgICAgIHRoaXMuX2FuaURlbENCKCksIGRlbGV0ZSB0aGlzLl9hbmlEZWxDQjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fcmVnaXN0ZXJFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xuICAgIHQubm9kZS5vbihcInRvdWNoLXVwXCIsIHQuX29uVG91Y2hVcCwgdCk7XG4gICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XG4gICAgdC5ub2RlLm9uKFwic2Nyb2xsLWJlZ2FuXCIsIHQuX29uU2Nyb2xsQmVnYW4sIHQsIHRydWUpO1xuICAgIHQubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcbiAgICB0Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xuICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX3VucmVnaXN0ZXJFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdC5fb25Ub3VjaFN0YXJ0LCB0LCB0cnVlKTtcbiAgICB0Lm5vZGUub2ZmKFwidG91Y2gtdXBcIiwgdC5fb25Ub3VjaFVwLCB0KTtcbiAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XG4gICAgdC5ub2RlLm9mZihcInNjcm9sbC1iZWdhblwiLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcbiAgICB0Lm5vZGUub2ZmKFwic2Nyb2xsLWVuZGVkXCIsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xuICAgIHQubm9kZS5vZmYoXCJzY3JvbGxpbmdcIiwgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xuICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXQuX2luaXRlZCkge1xuICAgICAgdC5fc2Nyb2xsVmlldyA9IHQubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgICB0LmNvbnRlbnQgPSB0Ll9zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgICBpZiAodC5jb250ZW50KSB7XG4gICAgICAgIHQuX2xheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgdC5fYWxpZ24gPSB0Ll9sYXlvdXQudHlwZTtcbiAgICAgICAgdC5fcmVzaXplTW9kZSA9IHQuX2xheW91dC5yZXNpemVNb2RlO1xuICAgICAgICB0Ll9zdGFydEF4aXMgPSB0Ll9sYXlvdXQuc3RhcnRBeGlzO1xuICAgICAgICB0Ll90b3BHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ1RvcDtcbiAgICAgICAgdC5fcmlnaHRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ1JpZ2h0O1xuICAgICAgICB0Ll9ib3R0b21HYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0JvdHRvbTtcbiAgICAgICAgdC5fbGVmdEdhcCA9IHQuX2xheW91dC5wYWRkaW5nTGVmdDtcbiAgICAgICAgdC5fY29sdW1uR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdYO1xuICAgICAgICB0Ll9saW5lR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdZO1xuICAgICAgICB0Ll9jb2xMaW5lTnVtO1xuICAgICAgICB0Ll92ZXJ0aWNhbERpciA9IHQuX2xheW91dC52ZXJ0aWNhbERpcmVjdGlvbjtcbiAgICAgICAgdC5faG9yaXpvbnRhbERpciA9IHQuX2xheW91dC5ob3Jpem9udGFsRGlyZWN0aW9uO1xuICAgICAgICB0LnNldFRlbXBsYXRlSXRlbShjYy5pbnN0YW50aWF0ZSh0LnRlbXBsYXRlVHlwZSA9PSByLlBSRUZBQiA/IHQudG1wUHJlZmFiIDogdC50bXBOb2RlKSk7XG4gICAgICAgIGlmICghKHQuX3NsaWRlTW9kZSAhPSBzLkFESEVSSU5HICYmIHQuX3NsaWRlTW9kZSAhPSBzLlBBR0UpKSB7XG4gICAgICAgICAgdC5fc2Nyb2xsVmlldy5pbmVydGlhID0gZmFsc2U7XG4gICAgICAgICAgdC5fc2Nyb2xsVmlldy5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIH1cbiAgICAgICAgdC52aXJ0dWFsIHx8ICh0LmxhY2tDZW50ZXIgPSBmYWxzZSk7XG4gICAgICAgIHQuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xuICAgICAgICB0LmRpc3BsYXlEYXRhID0gW107XG4gICAgICAgIHQuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgIHQuX3VwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICB0LmN1clBhZ2VOdW0gPSAwO1xuICAgICAgICBpZiAodC5jeWNsaWMpIHtcbiAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9wcm9jZXNzQXV0b1Njcm9sbGluZyA9IHRoaXMuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nLmJpbmQodCk7XG4gICAgICAgICAgdC5fc2Nyb2xsVmlldy5fc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XG4gICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxuICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XG4gICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDpcbiAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxuICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcbiAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcbiAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcbiAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcbiAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3ZlcnRpY2FsRGlyKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxuICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxuICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHQuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZXJyb3IodC5ub2RlLm5hbWUgKyBcIidzIGNjLlNjcm9sbFZpZXcgdW5zZXQgY29udGVudCFcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lICs9IDEgKiB0O1xuICAgIHZhciBlID0gTWF0aC5taW4oMSwgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEFjY3VtdWxhdGVkVGltZSAvIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxUb3RhbFRpbWUpO1xuICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQXR0ZW51YXRlKSB7XG4gICAgICB2YXIgbiA9IGUgLSAxO1xuICAgICAgZSA9IG4gKiBuICogbiAqIG4gKiBuICsgMTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFRhcmdldERlbHRhLm11bChlKSk7XG4gICAgdmFyIGEgPSB0aGlzLl9zY3JvbGxWaWV3LmdldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmcoKTtcbiAgICB2YXIgbyA9IE1hdGguYWJzKGUgLSAxKSA8PSBhO1xuICAgIGlmIChNYXRoLmFicyhlIC0gMSkgPD0gdGhpcy5fc2Nyb2xsVmlldy5nZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nKCkgJiYgIXRoaXMuX3Njcm9sbFZpZXcuX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCkge1xuICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudChcInNjcm9sbC1lbmRlZC13aXRoLXRocmVzaG9sZFwiKTtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCA9IHRydWU7XG4gICAgfVxuICAgIG8gJiYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxpbmcgPSBmYWxzZSk7XG4gICAgdmFyIHIgPSBpLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Ll9tb3ZlQ29udGVudCh0aGlzLl9zY3JvbGxWaWV3Ll9jbGFtcERlbHRhKHIpLCBvKTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Ll9kaXNwYXRjaEV2ZW50KFwic2Nyb2xsaW5nXCIpO1xuICAgIGlmICghdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbGluZykge1xuICAgICAgdGhpcy5fc2Nyb2xsVmlldy5faXNCb3VuY2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9kaXNwYXRjaEV2ZW50KFwic2Nyb2xsLWVuZGVkXCIpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldFRlbXBsYXRlSXRlbSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBlID0gdGhpcztcbiAgICAgIGUuX2l0ZW1UbXAgPSB0O1xuICAgICAgaWYgKGUuX3Jlc2l6ZU1vZGUgPT0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ0hJTERSRU4pIHtcbiAgICAgICAgZS5faXRlbVNpemUgPSBlLl9sYXlvdXQuY2VsbFNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLl9pdGVtU2l6ZSA9IGNjLnNpemUodC53aWR0aCwgdC5oZWlnaHQpO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSB0LmdldENvbXBvbmVudCgkejFMaXN0SXRlbS5kZWZhdWx0KTtcbiAgICAgIHZhciBpID0gZmFsc2U7XG4gICAgICBuIHx8IChpID0gdHJ1ZSk7XG4gICAgICBpICYmIChlLnNlbGVjdGVkTW9kZSA9IGwuTk9ORSk7XG4gICAgICAobiA9IHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkpICYmIG4uZW5hYmxlZCAmJiAoZS5fbmVlZFVwZGF0ZVdpZGdldCA9IHRydWUpO1xuICAgICAgZS5zZWxlY3RlZE1vZGUgPT0gbC5NVUxUICYmIChlLm11bHRTZWxlY3RlZCA9IFtdKTtcbiAgICAgIHN3aXRjaCAoZS5fYWxpZ24pIHtcbiAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxuICAgICAgICAgIGUuX2NvbExpbmVOdW0gPSAxO1xuICAgICAgICAgIGUuX3NpemVUeXBlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XG4gICAgICAgICAgZS5fY29sTGluZU51bSA9IDE7XG4gICAgICAgICAgZS5fc2l6ZVR5cGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XG4gICAgICAgICAgc3dpdGNoIChlLl9zdGFydEF4aXMpIHtcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgdmFyIGEgPSBlLmNvbnRlbnQud2lkdGggLSBlLl9sZWZ0R2FwIC0gZS5fcmlnaHRHYXA7XG4gICAgICAgICAgICAgIGUuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKChhICsgZS5fY29sdW1uR2FwKSAvIChlLl9pdGVtU2l6ZS53aWR0aCArIGUuX2NvbHVtbkdhcCkpO1xuICAgICAgICAgICAgICBlLl9zaXplVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcbiAgICAgICAgICAgICAgdmFyIG8gPSBlLmNvbnRlbnQuaGVpZ2h0IC0gZS5fdG9wR2FwIC0gZS5fYm90dG9tR2FwO1xuICAgICAgICAgICAgICBlLl9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigobyArIGUuX2xpbmVHYXApIC8gKGUuX2l0ZW1TaXplLmhlaWdodCArIGUuX2xpbmVHYXApKTtcbiAgICAgICAgICAgICAgZS5fc2l6ZVR5cGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuY2hlY2tJbml0ZWQgPSBmdW5jdGlvbiAodCkge1xuICAgIHVuZGVmaW5lZCA9PT0gdCAmJiAodCA9IHRydWUpO1xuICAgIHJldHVybiAhIXRoaXMuX2luaXRlZCB8fCAodCAmJiBjYy5lcnJvcihcIkxpc3QgaW5pdGlhbGl6YXRpb24gbm90IGNvbXBsZXRlZCFcIiksIGZhbHNlKTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9yZXNpemVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlID0gdGhpcztcbiAgICBzd2l0Y2ggKGUuX2FsaWduKSB7XG4gICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XG4gICAgICAgIGlmIChlLl9jdXN0b21TaXplKSB7XG4gICAgICAgICAgdmFyIG4gPSBlLl9nZXRGaXhlZFNpemUobnVsbCk7XG4gICAgICAgICAgdCA9IGUuX2xlZnRHYXAgKyBuLnZhbCArIGUuX2l0ZW1TaXplLndpZHRoICogKGUuX251bUl0ZW1zIC0gbi5jb3VudCkgKyBlLl9jb2x1bW5HYXAgKiAoZS5fbnVtSXRlbXMgLSAxKSArIGUuX3JpZ2h0R2FwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQgPSBlLl9sZWZ0R2FwICsgZS5faXRlbVNpemUud2lkdGggKiBlLl9udW1JdGVtcyArIGUuX2NvbHVtbkdhcCAqIChlLl9udW1JdGVtcyAtIDEpICsgZS5fcmlnaHRHYXA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxuICAgICAgICBpZiAoZS5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgIG4gPSBlLl9nZXRGaXhlZFNpemUobnVsbCk7XG4gICAgICAgICAgdCA9IGUuX3RvcEdhcCArIG4udmFsICsgZS5faXRlbVNpemUuaGVpZ2h0ICogKGUuX251bUl0ZW1zIC0gbi5jb3VudCkgKyBlLl9saW5lR2FwICogKGUuX251bUl0ZW1zIC0gMSkgKyBlLl9ib3R0b21HYXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdCA9IGUuX3RvcEdhcCArIGUuX2l0ZW1TaXplLmhlaWdodCAqIGUuX251bUl0ZW1zICsgZS5fbGluZUdhcCAqIChlLl9udW1JdGVtcyAtIDEpICsgZS5fYm90dG9tR2FwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxuICAgICAgICBlLmxhY2tDZW50ZXIgJiYgKGUubGFja0NlbnRlciA9IGZhbHNlKTtcbiAgICAgICAgc3dpdGNoIChlLl9zdGFydEF4aXMpIHtcbiAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XG4gICAgICAgICAgICB2YXIgaSA9IE1hdGguY2VpbChlLl9udW1JdGVtcyAvIGUuX2NvbExpbmVOdW0pO1xuICAgICAgICAgICAgdCA9IGUuX3RvcEdhcCArIGUuX2l0ZW1TaXplLmhlaWdodCAqIGkgKyBlLl9saW5lR2FwICogKGkgLSAxKSArIGUuX2JvdHRvbUdhcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICB2YXIgYSA9IE1hdGguY2VpbChlLl9udW1JdGVtcyAvIGUuX2NvbExpbmVOdW0pO1xuICAgICAgICAgICAgdCA9IGUuX2xlZnRHYXAgKyBlLl9pdGVtU2l6ZS53aWR0aCAqIGEgKyBlLl9jb2x1bW5HYXAgKiAoYSAtIDEpICsgZS5fcmlnaHRHYXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG8gPSBlLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgbyAmJiAoby5lbmFibGVkID0gZmFsc2UpO1xuICAgIGUuX2FsbEl0ZW1TaXplID0gdDtcbiAgICBlLl9hbGxJdGVtU2l6ZU5vRWRnZSA9IGUuX2FsbEl0ZW1TaXplIC0gKGUuX3NpemVUeXBlID8gZS5fdG9wR2FwICsgZS5fYm90dG9tR2FwIDogZS5fbGVmdEdhcCArIGUuX3JpZ2h0R2FwKTtcbiAgICBpZiAoZS5jeWNsaWMpIHtcbiAgICAgIHZhciByID0gZS5fc2l6ZVR5cGUgPyBlLm5vZGUuaGVpZ2h0IDogZS5ub2RlLndpZHRoO1xuICAgICAgZS5fY3ljbGljUG9zMSA9IDA7XG4gICAgICByIC09IGUuX2N5Y2xpY1BvczE7XG4gICAgICBlLl9jeWNsaWNOdW0gPSBNYXRoLmNlaWwociAvIGUuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XG4gICAgICB2YXIgcyA9IGUuX3NpemVUeXBlID8gZS5fbGluZUdhcCA6IGUuX2NvbHVtbkdhcDtcbiAgICAgIGUuX2N5Y2xpY1BvczIgPSBlLl9jeWNsaWNQb3MxICsgZS5fYWxsSXRlbVNpemVOb0VkZ2UgKyBzO1xuICAgICAgZS5fY3ljbGljQWxsSXRlbVNpemUgPSBlLl9hbGxJdGVtU2l6ZSArIGUuX2FsbEl0ZW1TaXplTm9FZGdlICogKGUuX2N5Y2xpY051bSAtIDEpICsgcyAqIChlLl9jeWNsaWNOdW0gLSAxKTtcbiAgICAgIGUuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlID0gZS5fYWxsSXRlbVNpemVOb0VkZ2UgKiBlLl9jeWNsaWNOdW07XG4gICAgICBlLl9jeWNpbGNBbGxJdGVtU2l6ZU5vRWRnZSArPSBzICogKGUuX2N5Y2xpY051bSAtIDEpO1xuICAgIH1cbiAgICBlLl9sYWNrID0gIWUuY3ljbGljICYmIGUuX2FsbEl0ZW1TaXplIDwgKGUuX3NpemVUeXBlID8gZS5ub2RlLmhlaWdodCA6IGUubm9kZS53aWR0aCk7XG4gICAgdmFyIGwgPSBlLl9sYWNrICYmIGUubGFja0NlbnRlciB8fCAhZS5sYWNrU2xpZGUgPyAuMSA6IDA7XG4gICAgdmFyIGMgPSBlLl9sYWNrID8gKGUuX3NpemVUeXBlID8gZS5ub2RlLmhlaWdodCA6IGUubm9kZS53aWR0aCkgLSBsIDogZS5jeWNsaWMgPyBlLl9jeWNsaWNBbGxJdGVtU2l6ZSA6IGUuX2FsbEl0ZW1TaXplO1xuICAgIGMgPCAwICYmIChjID0gMCk7XG4gICAgaWYgKGUuX3NpemVUeXBlKSB7XG4gICAgICBlLmNvbnRlbnQuaGVpZ2h0ID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgZS5jb250ZW50LndpZHRoID0gYztcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fb25TY3JvbGxpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgIHVuZGVmaW5lZCA9PT0gdCAmJiAodCA9IG51bGwpO1xuICAgIG51bGwgPT0gdGhpcy5mcmFtZUNvdW50ICYmICh0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlKTtcbiAgICBpZiAoIXRoaXMuX2ZvcmNlVXBkYXRlICYmIHQgJiYgXCJzY3JvbGwtZW5kZWRcIiAhPSB0LnR5cGUgJiYgdGhpcy5mcmFtZUNvdW50ID4gMCkge1xuICAgICAgdGhpcy5mcmFtZUNvdW50LS07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XG4gICAgICBpZiAoIXRoaXMuX2FuaURlbFJ1bmluZykge1xuICAgICAgICBpZiAodGhpcy5jeWNsaWMpIHtcbiAgICAgICAgICB2YXIgZSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgIGUgPSB0aGlzLl9zaXplVHlwZSA/IGUueSA6IGUueDtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlICsgKHRoaXMuX3NpemVUeXBlID8gdGhpcy5fbGluZUdhcCA6IHRoaXMuX2NvbHVtbkdhcCk7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLl9zaXplVHlwZSA/IGNjLnYyKDAsIG4pIDogY2MudjIobiwgMCk7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGlmIChlID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MyO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkgJiYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKGkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlIDwgLXRoaXMuX2N5Y2xpY1BvczIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MxLCB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChpKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGlmIChlIDwgdGhpcy5fY3ljbGljUG9zMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gdGhpcy5fY3ljbGljUG9zMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChpKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZSA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczEsIHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkgJiYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKGkpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgaWYgKGUgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MyO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkgJiYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKGkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlID4gdGhpcy5fY3ljbGljUG9zMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMSwgdGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSAmJiAodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5zdWIoaSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpZiAoZSA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihpKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZSA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMSwgdGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSAmJiAodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQoaSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBhO1xuICAgICAgICB2YXIgbztcbiAgICAgICAgdmFyIHI7XG4gICAgICAgIHZhciBzO1xuICAgICAgICB0aGlzLl9jYWxjVmlld1BvcygpO1xuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcbiAgICAgICAgICBhID0gdGhpcy52aWV3VG9wO1xuICAgICAgICAgIHIgPSB0aGlzLnZpZXdCb3R0b207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbyA9IHRoaXMudmlld1JpZ2h0O1xuICAgICAgICAgIHMgPSB0aGlzLnZpZXdMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YSA9IFtdO1xuICAgICAgICAgIHZhciBsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciBjID0gMDtcbiAgICAgICAgICB2YXIgaCA9IHRoaXMuX251bUl0ZW1zIC0gMTtcbiAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgZyA9IGZhbHNlOyBjIDw9IGggJiYgIWc7IGMrKykge1xuICAgICAgICAgICAgICBsID0gdGhpcy5fY2FsY0l0ZW1Qb3MoYyk7XG4gICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XG4gICAgICAgICAgICAgICAgICBpZiAobC5yaWdodCA+PSBzICYmIGwubGVmdCA8PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChsKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIDAgIT0gYyAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDAgJiYgKGcgPSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgICBpZiAobC5ib3R0b20gPD0gYSAmJiBsLnRvcCA+PSByKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChsKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIDAgIT0gYyAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDAgJiYgKGcgPSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobC5ib3R0b20gPD0gYSAmJiBsLnRvcCA+PSByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2gobCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gYyAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDAgJiYgKGcgPSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGwucmlnaHQgPj0gcyAmJiBsLmxlZnQgPD0gbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGwpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwICE9IGMgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwICYmIChnID0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB1ID0gdGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXA7XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXA7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGMgPSAocyAtIHRoaXMuX2xlZnRHYXApIC8gdTtcbiAgICAgICAgICAgICAgICBoID0gKG8gLSB0aGlzLl9sZWZ0R2FwKSAvIHU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjID0gKC1vIC0gdGhpcy5fcmlnaHRHYXApIC8gdTtcbiAgICAgICAgICAgICAgICBoID0gKC1zIC0gdGhpcy5fcmlnaHRHYXApIC8gdTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGMgPSAoLWEgLSB0aGlzLl90b3BHYXApIC8gZDtcbiAgICAgICAgICAgICAgICBoID0gKC1yIC0gdGhpcy5fdG9wR2FwKSAvIGQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjID0gKHIgLSB0aGlzLl9ib3R0b21HYXApIC8gZDtcbiAgICAgICAgICAgICAgICBoID0gKGEgLSB0aGlzLl9ib3R0b21HYXApIC8gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgPSBNYXRoLmZsb29yKGMpICogdGhpcy5fY29sTGluZU51bTtcbiAgICAgICAgICAgIGggPSBNYXRoLmNlaWwoaCkgKiB0aGlzLl9jb2xMaW5lTnVtO1xuICAgICAgICAgICAgYyA8IDAgJiYgKGMgPSAwKTtcbiAgICAgICAgICAgIGZvciAoLS1oID49IHRoaXMuX251bUl0ZW1zICYmIChoID0gdGhpcy5fbnVtSXRlbXMgLSAxKTsgYyA8PSBoOyBjKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKHRoaXMuX2NhbGNJdGVtUG9zKGMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xuICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA8PSAwIHx8ICF0aGlzLl9udW1JdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maXJzdExpc3RJZCA9IHRoaXMuZGlzcGxheURhdGFbMF0uaWQ7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5SXRlbU51bSA9IHRoaXMuZGlzcGxheURhdGEubGVuZ3RoO1xuICAgICAgICAgIHZhciBwID0gdGhpcy5fbGFzdERpc3BsYXlEYXRhLmxlbmd0aDtcbiAgICAgICAgICB2YXIgZiA9IHRoaXMuZGlzcGxheUl0ZW1OdW0gIT0gcDtcbiAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwICYmIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0IC0gZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZiA9IHRoaXMuZmlyc3RMaXN0SWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhWzBdIHx8IHRoaXMuZGlzcGxheURhdGFbdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFdLmlkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVtwIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSB8fCBmKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9udW1JdGVtcyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlRG9uZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XG4gICAgICAgICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgdGhpcy5kaXNwbGF5SXRlbU51bTsgbSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKHRoaXMuZGlzcGxheURhdGFbbV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX2NhbGNWaWV3UG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcy5jb250ZW50LmdldFBvc2l0aW9uKCk7XG4gICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSB0LnggPiAwID8gdC54IDogMDtcbiAgICAgICAgdGhpcy52aWV3TGVmdCA9ICh0LnggPCAwID8gLXQueCA6IDApIC0gdGhpcy5lbGFzdGljTGVmdDtcbiAgICAgICAgdGhpcy52aWV3UmlnaHQgPSB0aGlzLnZpZXdMZWZ0ICsgdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9IHRoaXMudmlld1JpZ2h0ID4gdGhpcy5jb250ZW50LndpZHRoID8gTWF0aC5hYnModGhpcy52aWV3UmlnaHQgLSB0aGlzLmNvbnRlbnQud2lkdGgpIDogMDtcbiAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9IHQueCA8IDAgPyAtdC54IDogMDtcbiAgICAgICAgdGhpcy52aWV3UmlnaHQgPSAodC54ID4gMCA/IC10LnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xuICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gdGhpcy52aWV3UmlnaHQgLSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSB0aGlzLnZpZXdMZWZ0IDwgLXRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld0xlZnQgKyB0aGlzLmNvbnRlbnQud2lkdGgpIDogMDtcbiAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdC55IDwgMCA/IE1hdGguYWJzKHQueSkgOiAwO1xuICAgICAgICB0aGlzLnZpZXdUb3AgPSAodC55ID4gMCA/IC10LnkgOiAwKSArIHRoaXMuZWxhc3RpY1RvcDtcbiAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gdGhpcy52aWV3VG9wIC0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgdGhpcy5lbGFzdGljQm90dG9tID0gdGhpcy52aWV3Qm90dG9tIDwgLXRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdCb3R0b20gKyB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XG4gICAgICAgIHRoaXMudmlld0JvdHRvbSArPSB0aGlzLmVsYXN0aWNCb3R0b207XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLmVsYXN0aWNCb3R0b20gPSB0LnkgPiAwID8gTWF0aC5hYnModC55KSA6IDA7XG4gICAgICAgIHRoaXMudmlld0JvdHRvbSA9ICh0LnkgPCAwID8gLXQueSA6IDApIC0gdGhpcy5lbGFzdGljQm90dG9tO1xuICAgICAgICB0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdCb3R0b20gKyB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSB0aGlzLnZpZXdUb3AgPiB0aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3VG9wIC0gdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xuICAgICAgICB0aGlzLnZpZXdUb3AgLT0gdGhpcy5lbGFzdGljVG9wO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9jYWxjSXRlbVBvcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGU7XG4gICAgdmFyIG47XG4gICAgdmFyIGk7XG4gICAgdmFyIGE7XG4gICAgdmFyIG87XG4gICAgdmFyIHI7XG4gICAgdmFyIHM7XG4gICAgdmFyIGw7XG4gICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xuICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuX2dldEZpeGVkU2l6ZSh0KTtcbiAgICAgICAgICAgICAgbyA9IHRoaXMuX2xlZnRHYXAgKyAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKHQgLSBjLmNvdW50KSArIChjLnZhbCArIHRoaXMuX2NvbHVtbkdhcCAqIGMuY291bnQpO1xuICAgICAgICAgICAgICBlID0gKGggPSB0aGlzLl9jdXN0b21TaXplW3RdKSA+IDAgPyBoIDogdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvID0gdGhpcy5fbGVmdEdhcCArICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiB0O1xuICAgICAgICAgICAgICBlID0gdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XG4gICAgICAgICAgICAgIG8gLT0gdGhpcy5fbGVmdEdhcDtcbiAgICAgICAgICAgICAgbyArPSB0aGlzLmNvbnRlbnQud2lkdGggLyAyIC0gdGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IHQsXG4gICAgICAgICAgICAgIGxlZnQ6IG8sXG4gICAgICAgICAgICAgIHJpZ2h0OiByID0gbyArIGUsXG4gICAgICAgICAgICAgIHg6IG8gKyB0aGlzLl9pdGVtVG1wLmFuY2hvclggKiBlLFxuICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgYyA9IHRoaXMuX2dldEZpeGVkU2l6ZSh0KTtcbiAgICAgICAgICAgICAgciA9IC10aGlzLl9yaWdodEdhcCAtICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAodCAtIGMuY291bnQpIC0gKGMudmFsICsgdGhpcy5fY29sdW1uR2FwICogYy5jb3VudCk7XG4gICAgICAgICAgICAgIGUgPSAoaCA9IHRoaXMuX2N1c3RvbVNpemVbdF0pID4gMCA/IGggOiB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHIgPSAtdGhpcy5fcmlnaHRHYXAgLSAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogdDtcbiAgICAgICAgICAgICAgZSA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xuICAgICAgICAgICAgICByICs9IHRoaXMuX3JpZ2h0R2FwO1xuICAgICAgICAgICAgICByIC09IHRoaXMuY29udGVudC53aWR0aCAvIDIgLSB0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogdCxcbiAgICAgICAgICAgICAgcmlnaHQ6IHIsXG4gICAgICAgICAgICAgIGxlZnQ6IG8gPSByIC0gZSxcbiAgICAgICAgICAgICAgeDogbyArIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIGUsXG4gICAgICAgICAgICAgIHk6IHRoaXMuX2l0ZW1UbXAueVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XG4gICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgYyA9IHRoaXMuX2dldEZpeGVkU2l6ZSh0KTtcbiAgICAgICAgICAgICAgaSA9IC10aGlzLl90b3BHYXAgLSAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAodCAtIGMuY291bnQpIC0gKGMudmFsICsgdGhpcy5fbGluZUdhcCAqIGMuY291bnQpO1xuICAgICAgICAgICAgICBuID0gKGggPSB0aGlzLl9jdXN0b21TaXplW3RdKSA+IDAgPyBoIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaSA9IC10aGlzLl90b3BHYXAgLSAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiB0O1xuICAgICAgICAgICAgICBuID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xuICAgICAgICAgICAgICBpICs9IHRoaXMuX3RvcEdhcDtcbiAgICAgICAgICAgICAgaSAtPSB0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMiAtIHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGlkOiB0LFxuICAgICAgICAgICAgICB0b3A6IGksXG4gICAgICAgICAgICAgIGJvdHRvbTogYSA9IGkgLSBuLFxuICAgICAgICAgICAgICB4OiB0aGlzLl9pdGVtVG1wLngsXG4gICAgICAgICAgICAgIHk6IGEgKyB0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICAgIGMgPSB0aGlzLl9nZXRGaXhlZFNpemUodCk7XG4gICAgICAgICAgICAgIGEgPSB0aGlzLl9ib3R0b21HYXAgKyAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAodCAtIGMuY291bnQpICsgKGMudmFsICsgdGhpcy5fbGluZUdhcCAqIGMuY291bnQpO1xuICAgICAgICAgICAgICBuID0gKGggPSB0aGlzLl9jdXN0b21TaXplW3RdKSA+IDAgPyBoIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYSA9IHRoaXMuX2JvdHRvbUdhcCArICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIHQ7XG4gICAgICAgICAgICAgIG4gPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XG4gICAgICAgICAgICAgIGEgLT0gdGhpcy5fYm90dG9tR2FwO1xuICAgICAgICAgICAgICBhICs9IHRoaXMuY29udGVudC5oZWlnaHQgLyAyIC0gdGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IHQsXG4gICAgICAgICAgICAgIHRvcDogaSA9IGEgKyBuLFxuICAgICAgICAgICAgICBib3R0b206IGEsXG4gICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcbiAgICAgICAgICAgICAgeTogYSArIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIG5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcbiAgICAgICAgdmFyIGcgPSBNYXRoLmZsb29yKHQgLyB0aGlzLl9jb2xMaW5lTnVtKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zdGFydEF4aXMpIHtcbiAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XG4gICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XG4gICAgICAgICAgICAgICAgbCA9IChhID0gKGkgPSAtdGhpcy5fdG9wR2FwIC0gKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogZykgLSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpICsgdGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxuICAgICAgICAgICAgICAgIGkgPSAoYSA9IHRoaXMuX2JvdHRvbUdhcCArICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGcpICsgdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGwgPSBhICsgdGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcyA9IHRoaXMuX2xlZnRHYXAgKyB0ICUgdGhpcy5fY29sTGluZU51bSAqICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxuICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgcyAtPSB0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxuICAgICAgICAgICAgICAgIHMgKz0gKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgcyAtPSAoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aDtcbiAgICAgICAgICAgICAgICBzICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IHQsXG4gICAgICAgICAgICAgIHRvcDogaSxcbiAgICAgICAgICAgICAgYm90dG9tOiBhLFxuICAgICAgICAgICAgICB4OiBzLFxuICAgICAgICAgICAgICB5OiBsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxuICAgICAgICAgICAgICAgIHIgPSAobyA9IHRoaXMuX2xlZnRHYXAgKyAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogZykgKyB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBzID0gbyArIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIHMgLT0gdGhpcy5jb250ZW50LmFuY2hvclggKiB0aGlzLmNvbnRlbnQud2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcbiAgICAgICAgICAgICAgICBzID0gKG8gPSAociA9IC10aGlzLl9yaWdodEdhcCAtICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBnKSAtIHRoaXMuX2l0ZW1TaXplLndpZHRoKSArIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIHMgKz0gKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gLXRoaXMuX3RvcEdhcCAtIHQgJSB0aGlzLl9jb2xMaW5lTnVtICogKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xuICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxuICAgICAgICAgICAgICAgIGwgLT0gKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclkpICogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGwgKz0gKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWSkgKiB0aGlzLmNvbnRlbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxuICAgICAgICAgICAgICAgIGwgLT0gdGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGwgKz0gdGhpcy5jb250ZW50LmFuY2hvclkgKiB0aGlzLmNvbnRlbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGwgKj0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogdCxcbiAgICAgICAgICAgICAgbGVmdDogbyxcbiAgICAgICAgICAgICAgcmlnaHQ6IHIsXG4gICAgICAgICAgICAgIHg6IHMsXG4gICAgICAgICAgICAgIHk6IGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fY2FsY0V4aXN0SXRlbVBvcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZCh0KTtcbiAgICBpZiAoIWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbiA9IHtcbiAgICAgIGlkOiB0LFxuICAgICAgeDogZS54LFxuICAgICAgeTogZS55XG4gICAgfTtcbiAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcbiAgICAgIG4udG9wID0gZS55ICsgZS5oZWlnaHQgKiAoMSAtIGUuYW5jaG9yWSk7XG4gICAgICBuLmJvdHRvbSA9IGUueSAtIGUuaGVpZ2h0ICogZS5hbmNob3JZO1xuICAgIH0gZWxzZSB7XG4gICAgICBuLmxlZnQgPSBlLnggLSBlLndpZHRoICogZS5hbmNob3JYO1xuICAgICAgbi5yaWdodCA9IGUueCArIGUud2lkdGggKiAoMSAtIGUuYW5jaG9yWCk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0SXRlbVBvcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKHQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9nZXRGaXhlZFNpemUgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG51bGwgPT0gdCAmJiAodCA9IHRoaXMuX251bUl0ZW1zKTtcbiAgICB2YXIgZSA9IDA7XG4gICAgdmFyIG4gPSAwO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgaWYgKHBhcnNlSW50KGkpIDwgdCkge1xuICAgICAgICBlICs9IHRoaXMuX2N1c3RvbVNpemVbaV07XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbDogZSxcbiAgICAgIGNvdW50OiBuXG4gICAgfTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9vblNjcm9sbEJlZ2FuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JlZ2FuUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLnZpZXdUb3AgOiB0aGlzLnZpZXdMZWZ0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX29uU2Nyb2xsRW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHQuY3VyU2Nyb2xsSXNUb3VjaCA9IGZhbHNlO1xuICAgIGlmIChudWxsICE9IHQuc2Nyb2xsVG9MaXN0SWQpIHtcbiAgICAgIHZhciBlID0gdC5nZXRJdGVtQnlMaXN0SWQodC5zY3JvbGxUb0xpc3RJZCk7XG4gICAgICB0LnNjcm9sbFRvTGlzdElkID0gbnVsbDtcbiAgICAgIGUgJiYgY2MudHdlZW4oZSkudG8oLjEsIHtcbiAgICAgICAgc2NhbGU6IDEuMDZcbiAgICAgIH0pLnRvKC4xLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgICB0Ll9vblNjcm9sbGluZygpO1xuICAgIGlmICh0Ll9zbGlkZU1vZGUgIT0gcy5BREhFUklORyB8fCB0LmFkaGVyaW5nKSB7XG4gICAgICBpZiAodC5fc2xpZGVNb2RlID09IHMuUEFHRSkge1xuICAgICAgICBpZiAobnVsbCAhPSB0Ll9iZWdhblBvcyAmJiB0LmN1clNjcm9sbElzVG91Y2gpIHtcbiAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC5hZGhlcmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0LmFkaGVyZSgpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIGlmICghdGhpcy5fc2Nyb2xsVmlldy5oYXNOZXN0ZWRWaWV3R3JvdXAodCwgZSkgJiYgKHRoaXMuY3VyU2Nyb2xsSXNUb3VjaCA9IHRydWUsIHQuZXZlbnRQaGFzZSAhPT0gY2MuRXZlbnQuQVRfVEFSR0VUIHx8IHQudGFyZ2V0ICE9PSB0aGlzLm5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBuID0gdC50YXJnZXQ7IG51bGwgPT0gbi5fbGlzdElkICYmIG4ucGFyZW50Oykge1xuICAgICAgICBuID0gbi5wYXJlbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbCAhPSBuLl9saXN0SWQgPyBuIDogdC50YXJnZXQ7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX29uVG91Y2hVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcbiAgICBpZiAodC5fc2xpZGVNb2RlID09IHMuQURIRVJJTkcpIHtcbiAgICAgIHRoaXMuYWRoZXJpbmcgJiYgKHRoaXMuX2FkaGVyaW5nQmFycmllciA9IHRydWUpO1xuICAgICAgdC5hZGhlcmUoKTtcbiAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBzLlBBR0UpIHtcbiAgICAgIGlmIChudWxsICE9IHQuX2JlZ2FuUG9zKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQuYWRoZXJlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX29uVG91Y2hDYW5jZWxsZWQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAoIShuLl9zY3JvbGxWaWV3Lmhhc05lc3RlZFZpZXdHcm91cCh0LCBlKSB8fCB0LnNpbXVsYXRlKSkge1xuICAgICAgbi5fc2Nyb2xsUG9zID0gbnVsbDtcbiAgICAgIGlmIChuLl9zbGlkZU1vZGUgPT0gcy5BREhFUklORykge1xuICAgICAgICBuLmFkaGVyaW5nICYmIChuLl9hZGhlcmluZ0JhcnJpZXIgPSB0cnVlKSwgbi5hZGhlcmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4uX3NsaWRlTW9kZSA9PSBzLlBBR0UgJiYgKG51bGwgIT0gbi5fYmVnYW5Qb3MgPyBuLl9wYWdlQWRoZXJlKCkgOiBuLmFkaGVyZSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9vblNpemVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpICYmIHRoaXMuX29uU2Nyb2xsaW5nKCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fb25JdGVtQWRhcHRpdmUgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICghdGhpcy5fc2l6ZVR5cGUgJiYgdC53aWR0aCAhPSB0aGlzLl9pdGVtU2l6ZS53aWR0aCB8fCB0aGlzLl9zaXplVHlwZSAmJiB0LmhlaWdodCAhPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpIHtcbiAgICAgIHRoaXMuX2N1c3RvbVNpemUgfHwgKHRoaXMuX2N1c3RvbVNpemUgPSB7fSk7XG4gICAgICB2YXIgZSA9IHRoaXMuX3NpemVUeXBlID8gdC5oZWlnaHQgOiB0LndpZHRoO1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemVbdC5fbGlzdElkXSAhPSBlKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbVNpemVbdC5fbGlzdElkXSA9IGU7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZUNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVBbGwoKTtcbiAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fc2Nyb2xsVG9MaXN0SWQpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxQb3MgPSBudWxsLCB0aGlzLnVuc2NoZWR1bGUodGhpcy5fc2Nyb2xsVG9TbyksIHRoaXMuc2Nyb2xsVG8odGhpcy5fc2Nyb2xsVG9MaXN0SWQsIE1hdGgubWF4KDAsIHRoaXMuX3Njcm9sbFRvRW5kVGltZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fcGFnZUFkaGVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHQuY3ljbGljIHx8ICEodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMCkpIHtcbiAgICAgIHZhciBlID0gdC5fc2l6ZVR5cGUgPyB0LnZpZXdUb3AgOiB0LnZpZXdMZWZ0O1xuICAgICAgdmFyIG4gPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAqIHQucGFnZURpc3RhbmNlO1xuICAgICAgaWYgKE1hdGguYWJzKHQuX2JlZ2FuUG9zIC0gZSkgPiBuKSB7XG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPiBlKSB7XG4gICAgICAgICAgICAgIHQucHJlUGFnZSguNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0Lm5leHRQYWdlKC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBlKSB7XG4gICAgICAgICAgICAgIHQucHJlUGFnZSguNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0Lm5leHRQYWdlKC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdC5lbGFzdGljVG9wIDw9IDAgJiYgdC5lbGFzdGljUmlnaHQgPD0gMCAmJiB0LmVsYXN0aWNCb3R0b20gPD0gMCAmJiB0LmVsYXN0aWNMZWZ0IDw9IDAgJiYgdC5hZGhlcmUoKTtcbiAgICAgIH1cbiAgICAgIHQuX2JlZ2FuUG9zID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5hZGhlcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0LmNoZWNrSW5pdGVkKCkgJiYgISh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKSkge1xuICAgICAgdC5hZGhlcmluZyA9IHRydWU7XG4gICAgICB0Ll9jYWxjTmVhcmVzdEl0ZW0oKTtcbiAgICAgIHZhciBlID0gKHQuX3NpemVUeXBlID8gdC5fdG9wR2FwIDogdC5fbGVmdEdhcCkgLyAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcbiAgICAgIHQuc2Nyb2xsVG8odC5uZWFyZXN0TGlzdElkLCAuNywgZSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDw9IDAgfHwgdGhpcy5fdXBkYXRlRG9uZSkpIHtcbiAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gdGhpcy5kaXNwbGF5SXRlbU51bSA/IHRoaXMuZGlzcGxheUl0ZW1OdW0gOiB0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XG4gICAgICAgIGZvciAodmFyIGUgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBlIDwgdDsgZSsrKSB7XG4gICAgICAgICAgdmFyIG4gPSB0aGlzLmRpc3BsYXlEYXRhW2VdO1xuICAgICAgICAgIG4gJiYgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyID49IHRoaXMuZGlzcGxheUl0ZW1OdW0gLSAxKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2RvbmVBZnRlclVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLl9mb3JjZVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLnNsaWRlTW9kZSA9PSBzLlBBR0UgJiYgKHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKz0gdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA8IHRoaXMuX251bUl0ZW1zKSB7XG4gICAgICAgIHQgPSB0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiB0aGlzLl9udW1JdGVtcyA/IHRoaXMuX251bUl0ZW1zIDogdGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgICBmb3IgKGUgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBlIDwgdDsgZSsrKSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtMihlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xuICAgICAgICB0aGlzLnNsaWRlTW9kZSA9PSBzLlBBR0UgJiYgKHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX2NyZWF0ZU9yVXBkYXRlSXRlbSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZCh0LmlkKTtcbiAgICBpZiAoZSkge1xuICAgICAgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgZS5zZXRQb3NpdGlvbihjYy52Mih0LngsIHQueSkpO1xuICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGUpO1xuICAgICAgICB0aGlzLnJlbmRlckV2ZW50ICYmIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGUsIHQuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuID0gdGhpcy5fcG9vbC5zaXplKCkgPiAwO1xuICAgICAgZSA9IG4gPyB0aGlzLl9wb29sLmdldCgpIDogY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XG4gICAgICBpZiAoIShuICYmIGNjLmlzVmFsaWQoZSkpKSB7XG4gICAgICAgIGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcbiAgICAgICAgbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGUuX2xpc3RJZCAhPSB0LmlkKSB7XG4gICAgICAgIGUuX2xpc3RJZCA9IHQuaWQ7XG4gICAgICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5faXRlbVNpemUpO1xuICAgICAgfVxuICAgICAgZS5zZXRQb3NpdGlvbihjYy52Mih0LngsIHQueSkpO1xuICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShlKTtcbiAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChlKTtcbiAgICAgIGlmIChuICYmIHRoaXMuX25lZWRVcGRhdGVXaWRnZXQpIHtcbiAgICAgICAgdmFyIGkgPSBlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpICYmIGkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICB9XG4gICAgICBlLnNldFNpYmxpbmdJbmRleCh0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xuICAgICAgdmFyIGEgPSBlLmdldENvbXBvbmVudCgkejFMaXN0SXRlbS5kZWZhdWx0KTtcbiAgICAgIGUubGlzdEl0ZW0gPSBhO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgYS5saXN0SWQgPSB0LmlkO1xuICAgICAgICBhLmxpc3QgPSB0aGlzO1xuICAgICAgICBhLl9yZWdpc3RlckV2ZW50KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlckV2ZW50ICYmIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGUsIHQuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoZSk7XG4gICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oZS5saXN0SXRlbSk7XG4gICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YodC5pZCkgPCAwICYmIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKHQuaWQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX2NyZWF0ZU9yVXBkYXRlSXRlbTIgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlO1xuICAgIHZhciBuID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW3RdO1xuICAgIGlmIChuKSB7XG4gICAgICBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkge1xuICAgICAgICBuLl9saXN0SWQgPSB0LCBlICYmIChlLmxpc3RJZCA9IHQpLCB0aGlzLnJlbmRlckV2ZW50ICYmIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIG4sIHQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChuID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCkpLl9saXN0SWQgPSB0O1xuICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG4pO1xuICAgICAgZSA9IG4uZ2V0Q29tcG9uZW50KCR6MUxpc3RJdGVtLmRlZmF1bHQpO1xuICAgICAgbi5saXN0SXRlbSA9IGU7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLmxpc3RJZCA9IHQsIGUubGlzdCA9IHRoaXMsIGUuX3JlZ2lzdGVyRXZlbnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyRXZlbnQgJiYgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgbiwgdCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oZSk7XG4gICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YodCkgPCAwICYmIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX3VwZGF0ZUxpc3RJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodCAmJiB0aGlzLnNlbGVjdGVkTW9kZSA+IGwuTk9ORSkge1xuICAgICAgdmFyIGUgPSB0Lm5vZGU7XG4gICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XG4gICAgICAgIGNhc2UgbC5TSU5HTEU6XG4gICAgICAgICAgdC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJZCA9PSBlLl9saXN0SWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbC5NVUxUOlxuICAgICAgICAgIHQuc2VsZWN0ZWQgPSB0aGlzLm11bHRTZWxlY3RlZC5pbmRleE9mKGUuX2xpc3RJZCkgPj0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fcmVzZXRJdGVtU2l6ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICBfY3Rvci5wcm90b3R5cGUuX3VwZGF0ZUl0ZW1Qb3MgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gaXNOYU4odCkgPyB0IDogdGhpcy5nZXRJdGVtQnlMaXN0SWQodCk7XG4gICAgdmFyIG4gPSB0aGlzLmdldEl0ZW1Qb3MoZS5fbGlzdElkKTtcbiAgICBlLnNldFBvc2l0aW9uKG4ueCwgbi55KTtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNldE11bHRTZWxlY3RlZCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmIChuLmNoZWNrSW5pdGVkKCkpIHtcbiAgICAgIEFycmF5LmlzQXJyYXkodCkgfHwgKHQgPSBbdF0pO1xuICAgICAgaWYgKG51bGwgPT0gZSkge1xuICAgICAgICBuLm11bHRTZWxlY3RlZCA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgZm9yICh2YXIgbyA9IHQubGVuZ3RoIC0gMTsgbyA+PSAwOyBvLS0pIHtcbiAgICAgICAgICAgIGkgPSB0W29dO1xuICAgICAgICAgICAgKGEgPSBuLm11bHRTZWxlY3RlZC5pbmRleE9mKGkpKSA8IDAgJiYgbi5tdWx0U2VsZWN0ZWQucHVzaChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChvID0gdC5sZW5ndGggLSAxOyBvID49IDA7IG8tLSkge1xuICAgICAgICAgICAgaSA9IHRbb107XG4gICAgICAgICAgICAoYSA9IG4ubXVsdFNlbGVjdGVkLmluZGV4T2YoaSkpID49IDAgJiYgbi5tdWx0U2VsZWN0ZWQuc3BsaWNlKGEsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbi5fZm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgbi5fb25TY3JvbGxpbmcoKTtcbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRNdWx0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdFNlbGVjdGVkO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuaGFzTXVsdFNlbGVjdGVkID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0U2VsZWN0ZWQgJiYgdGhpcy5tdWx0U2VsZWN0ZWQuaW5kZXhPZih0KSA+PSAwO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZGVsTXVsdFNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubXVsdFNlbGVjdGVkID0gW107XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS51cGRhdGVJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0luaXRlZCgpKSB7XG4gICAgICBBcnJheS5pc0FycmF5KHQpIHx8ICh0ID0gW3RdKTtcbiAgICAgIHZhciBlID0gMDtcbiAgICAgIGZvciAodmFyIG4gPSB0Lmxlbmd0aDsgZSA8IG47IGUrKykge1xuICAgICAgICB2YXIgaSA9IHRbZV07XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQoaSk7XG4gICAgICAgIGEgJiYgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgYSwgaSAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS51cGRhdGVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0luaXRlZCgpICYmICh0aGlzLm51bUl0ZW1zID0gdGhpcy5udW1JdGVtcyk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRJdGVtQnlMaXN0SWQgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IGUgPj0gMDsgZS0tKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW2VdO1xuICAgICAgICBpZiAobi5fbGlzdElkID09IHQpIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLl9nZXRPdXRzaWRlSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgZSA9IFtdO1xuICAgIGZvciAodmFyIG4gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICB0ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW25dO1xuICAgICAgdGhpcy5kaXNwbGF5RGF0YS5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkID09IHQuX2xpc3RJZDtcbiAgICAgIH0pIHx8IGUucHVzaCh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5fZGVsUmVkdW5kYW50SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdmlydHVhbCkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9nZXRPdXRzaWRlSXRlbSgpO1xuICAgICAgZm9yICh2YXIgZSA9IHQubGVuZ3RoIC0gMTsgZSA+PSAwOyBlLS0pIHtcbiAgICAgICAgdmFyIG4gPSB0W2VdO1xuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbEl0ZW0gfHwgbi5fbGlzdElkICE9IHRoaXMuX3Njcm9sbEl0ZW0uX2xpc3RJZCkge1xuICAgICAgICAgIG4uaXNDYWNoZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3Bvb2wucHV0KG4pO1xuICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGFbaV0gPT0gbi5fbGlzdElkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKDsgdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgPiB0aGlzLl9udW1JdGVtczspIHtcbiAgICAgICAgdGhpcy5fZGVsU2luZ2xlSXRlbSh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX2RlbFNpbmdsZUl0ZW0gPSBmdW5jdGlvbiAodCkge1xuICAgIHQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgIHQuZGVzdHJveSAmJiB0LmRlc3Ryb3koKTtcbiAgICB0ID0gbnVsbDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLmFuaURlbEl0ZW0gPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgIHZhciBpID0gdGhpcztcbiAgICBpZiAoIWkuY2hlY2tJbml0ZWQoKSB8fCBpLmN5Y2xpYyB8fCAhaS5fdmlydHVhbCkge1xuICAgICAgcmV0dXJuIGNjLmVycm9yKFwiVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQhXCIpO1xuICAgIH1cbiAgICBpZiAoIWUpIHtcbiAgICAgIHJldHVybiBjYy5lcnJvcihcIkNhbGxGdW5jIGFyZSBub3QgYWxsb3dlZCB0byBiZSBOVUxMLCBZb3UgbmVlZCB0byBkZWxldGUgdGhlIGNvcnJlc3BvbmRpbmcgaW5kZXggaW4gdGhlIGRhdGEgYXJyYXkgaW4gdGhlIENhbGxGdW5jIVwiKTtcbiAgICB9XG4gICAgaWYgKGkuX2FuaURlbFJ1bmluZykge1xuICAgICAgcmV0dXJuIGNjLndhcm4oXCJQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIVwiKTtcbiAgICB9XG4gICAgdmFyIGE7XG4gICAgdmFyIG8gPSBpLmdldEl0ZW1CeUxpc3RJZCh0KTtcbiAgICBpZiAobykge1xuICAgICAgYSA9IG8uZ2V0Q29tcG9uZW50KCR6MUxpc3RJdGVtLmRlZmF1bHQpO1xuICAgICAgaS5fYW5pRGVsUnVuaW5nID0gdHJ1ZTtcbiAgICAgIGkuX2FuaURlbENCID0gZTtcbiAgICAgIGkuX2FuaURlbEl0ZW0gPSBvO1xuICAgICAgaS5fYW5pRGVsQmVmb3JlUG9zID0gby5wb3NpdGlvbjtcbiAgICAgIGkuX2FuaURlbEJlZm9yZVNjYWxlID0gby5zY2FsZTtcbiAgICAgIHZhciByID0gaS5kaXNwbGF5RGF0YVtpLmRpc3BsYXlEYXRhLmxlbmd0aCAtIDFdLmlkO1xuICAgICAgdmFyIHMgPSBhLnNlbGVjdGVkO1xuICAgICAgYS5zaG93QW5pKG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIHZhciBhO1xuICAgICAgICB2YXIgYztcbiAgICAgICAgciA8IGkuX251bUl0ZW1zIC0gMiAmJiAobiA9IHIgKyAxKTtcbiAgICAgICAgaWYgKG51bGwgIT0gbikge1xuICAgICAgICAgIHZhciBoID0gaS5fY2FsY0l0ZW1Qb3Mobik7XG4gICAgICAgICAgaS5kaXNwbGF5RGF0YS5wdXNoKGgpO1xuICAgICAgICAgIGlmIChpLl92aXJ0dWFsKSB7XG4gICAgICAgICAgICBpLl9jcmVhdGVPclVwZGF0ZUl0ZW0oaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkuX251bUl0ZW1zLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkuc2VsZWN0ZWRNb2RlID09IGwuU0lOR0xFKSB7XG4gICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgIGkuX3NlbGVjdGVkSWQgPSAtMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaS5fc2VsZWN0ZWRJZCAtIDEgPj0gMCAmJiBpLl9zZWxlY3RlZElkLS07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGkuc2VsZWN0ZWRNb2RlID09IGwuTVVMVCAmJiBpLm11bHRTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgZyA9IGkubXVsdFNlbGVjdGVkLmluZGV4T2YodCk7XG4gICAgICAgICAgZyA+PSAwICYmIGkubXVsdFNlbGVjdGVkLnNwbGljZShnLCAxKTtcbiAgICAgICAgICBmb3IgKHZhciB1ID0gaS5tdWx0U2VsZWN0ZWQubGVuZ3RoIC0gMTsgdSA+PSAwOyB1LS0pIHtcbiAgICAgICAgICAgIChmID0gaS5tdWx0U2VsZWN0ZWRbdV0pID49IHQgJiYgaS5tdWx0U2VsZWN0ZWRbdV0tLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICBpLl9jdXN0b21TaXplW3RdICYmIGRlbGV0ZSBpLl9jdXN0b21TaXplW3RdO1xuICAgICAgICAgIHZhciBkID0ge307XG4gICAgICAgICAgdmFyIHAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZm9yICh2YXIgZiBpbiBpLl9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICBwID0gaS5fY3VzdG9tU2l6ZVtmXTtcbiAgICAgICAgICAgIHZhciBtID0gcGFyc2VJbnQoZik7XG4gICAgICAgICAgICBkW20gLSAobSA+PSB0ID8gMSA6IDApXSA9IHA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkuX2N1c3RvbVNpemUgPSBkO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodSA9IG51bGwgIT0gbiA/IG4gOiByOyB1ID49IHQgKyAxOyB1LS0pIHtcbiAgICAgICAgICBpZiAobyA9IGkuZ2V0SXRlbUJ5TGlzdElkKHUpKSB7XG4gICAgICAgICAgICB2YXIgeSA9IGkuX2NhbGNJdGVtUG9zKHUgLSAxKTtcbiAgICAgICAgICAgIGEgPSBjYy50d2VlbihvKS50byguMjMzMywge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoeS54LCB5LnkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh1IDw9IHQgKyAxKSB7XG4gICAgICAgICAgICAgIGMgPSB0cnVlO1xuICAgICAgICAgICAgICBhLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGkuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGUodCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGkuX2FuaURlbENCO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEuc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgaS5fYW5pRGVsUnVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgZSh0KTtcbiAgICAgICAgICBpLl9hbmlEZWxDQiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKHQpO1xuICAgIH1cbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gKHQsIGUsIG4sIGkpIHtcbiAgICB1bmRlZmluZWQgPT09IGUgJiYgKGUgPSAuNSk7XG4gICAgdW5kZWZpbmVkID09PSBuICYmIChuID0gbnVsbCk7XG4gICAgdW5kZWZpbmVkID09PSBpICYmIChpID0gZmFsc2UpO1xuICAgIHZhciBhID0gdGhpcztcbiAgICBpZiAoYS5jaGVja0luaXRlZChmYWxzZSkpIHtcbiAgICAgIGlmIChudWxsID09IGUpIHtcbiAgICAgICAgZSA9IC41O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSA8IDAgJiYgKGUgPSAwKTtcbiAgICAgIH1cbiAgICAgIGlmICh0IDwgMCkge1xuICAgICAgICB0ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQgPj0gYS5fbnVtSXRlbXMgJiYgKHQgPSBhLl9udW1JdGVtcyAtIDEpO1xuICAgICAgfVxuICAgICAgIWEuX3ZpcnR1YWwgJiYgYS5fbGF5b3V0ICYmIGEuX2xheW91dC5lbmFibGVkICYmIGEuX2xheW91dC51cGRhdGVMYXlvdXQoKTtcbiAgICAgIHZhciBvO1xuICAgICAgdmFyIHI7XG4gICAgICB2YXIgcyA9IGEuZ2V0SXRlbVBvcyh0KTtcbiAgICAgIGlmICghcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGEuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG8gPSBzLmxlZnQ7XG4gICAgICAgICAgbyAtPSBudWxsICE9IG4gPyBhLm5vZGUud2lkdGggKiBuIDogYS5fbGVmdEdhcDtcbiAgICAgICAgICBzID0gY2MudjIobywgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBvID0gcy5yaWdodCAtIGEubm9kZS53aWR0aDtcbiAgICAgICAgICBvICs9IG51bGwgIT0gbiA/IGEubm9kZS53aWR0aCAqIG4gOiBhLl9yaWdodEdhcDtcbiAgICAgICAgICBzID0gY2MudjIobyArIGEuY29udGVudC53aWR0aCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByID0gcy50b3A7XG4gICAgICAgICAgciArPSBudWxsICE9IG4gPyBhLm5vZGUuaGVpZ2h0ICogbiA6IGEuX3RvcEdhcDtcbiAgICAgICAgICBzID0gY2MudjIoMCwgLXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgciA9IHMuYm90dG9tICsgYS5ub2RlLmhlaWdodDtcbiAgICAgICAgICByIC09IG51bGwgIT0gbiA/IGEubm9kZS5oZWlnaHQgKiBuIDogYS5fYm90dG9tR2FwO1xuICAgICAgICAgIHMgPSBjYy52MigwLCAtciArIGEuY29udGVudC5oZWlnaHQpO1xuICAgICAgfVxuICAgICAgdmFyIGwgPSBhLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcbiAgICAgIGwgPSBNYXRoLmFicyhhLl9zaXplVHlwZSA/IGwueSA6IGwueCk7XG4gICAgICB2YXIgYyA9IGEuX3NpemVUeXBlID8gcy55IDogcy54O1xuICAgICAgaWYgKE1hdGguYWJzKChudWxsICE9IGEuX3Njcm9sbFBvcyA/IGEuX3Njcm9sbFBvcyA6IGwpIC0gYykgPiAuNSkge1xuICAgICAgICBhLl9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHMsIGUpO1xuICAgICAgICBhLl9zY3JvbGxUb0xpc3RJZCA9IHQ7XG4gICAgICAgIGEuX3Njcm9sbFRvRW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzICsgZTtcbiAgICAgICAgYS5fc2Nyb2xsVG9TbyA9IGEuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhLl9hZGhlcmluZ0JhcnJpZXIgfHwgKGEuYWRoZXJpbmcgPSBhLl9hZGhlcmluZ0JhcnJpZXIgPSBmYWxzZSk7XG4gICAgICAgICAgYS5fc2Nyb2xsUG9zID0gYS5fc2Nyb2xsVG9MaXN0SWQgPSBhLl9zY3JvbGxUb0VuZFRpbWUgPSBhLl9zY3JvbGxUb1NvID0gbnVsbDtcbiAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgdmFyIGUgPSBhLmdldEl0ZW1CeUxpc3RJZCh0KTtcbiAgICAgICAgICAgIGUgJiYgY2MudHdlZW4oZSkudG8oLjEsIHtcbiAgICAgICAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgICAgICAgIH0pLnRvKC4xLCB7XG4gICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZSArIC4xKTtcbiAgICAgICAgZSA8PSAwICYmIGEuX29uU2Nyb2xsaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuX2NhbGNOZWFyZXN0SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgZTtcbiAgICB2YXIgbjtcbiAgICB2YXIgaTtcbiAgICB2YXIgYTtcbiAgICB2YXIgbztcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgci5uZWFyZXN0TGlzdElkID0gbnVsbDtcbiAgICByLl92aXJ0dWFsICYmIHIuX2NhbGNWaWV3UG9zKCk7XG4gICAgbiA9IHIudmlld1RvcDtcbiAgICBpID0gci52aWV3UmlnaHQ7XG4gICAgYSA9IHIudmlld0JvdHRvbTtcbiAgICBvID0gci52aWV3TGVmdDtcbiAgICB2YXIgcyA9IGZhbHNlO1xuICAgIGZvciAodmFyIGwgPSAwOyBsIDwgci5jb250ZW50LmNoaWxkcmVuQ291bnQgJiYgIXM7IGwgKz0gci5fY29sTGluZU51bSkge1xuICAgICAgaWYgKHQgPSByLl92aXJ0dWFsID8gci5kaXNwbGF5RGF0YVtsXSA6IHIuX2NhbGNFeGlzdEl0ZW1Qb3MobCkpIHtcbiAgICAgICAgZSA9IHIuX3NpemVUeXBlID8gKHQudG9wICsgdC5ib3R0b20pIC8gMiA6IGUgPSAodC5sZWZ0ICsgdC5yaWdodCkgLyAyO1xuICAgICAgICBzd2l0Y2ggKHIuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpZiAodC5yaWdodCA+PSBvKSB7XG4gICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCA9IHQuaWQ7XG4gICAgICAgICAgICAgIG8gPiBlICYmIChyLm5lYXJlc3RMaXN0SWQgKz0gci5fY29sTGluZU51bSk7XG4gICAgICAgICAgICAgIHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKHQubGVmdCA8PSBpKSB7XG4gICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCA9IHQuaWQ7XG4gICAgICAgICAgICAgIGkgPCBlICYmIChyLm5lYXJlc3RMaXN0SWQgKz0gci5fY29sTGluZU51bSk7XG4gICAgICAgICAgICAgIHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKHQuYm90dG9tIDw9IG4pIHtcbiAgICAgICAgICAgICAgci5uZWFyZXN0TGlzdElkID0gdC5pZDtcbiAgICAgICAgICAgICAgbiA8IGUgJiYgKHIubmVhcmVzdExpc3RJZCArPSByLl9jb2xMaW5lTnVtKTtcbiAgICAgICAgICAgICAgcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAodC50b3AgPj0gYSkge1xuICAgICAgICAgICAgICByLm5lYXJlc3RMaXN0SWQgPSB0LmlkO1xuICAgICAgICAgICAgICBhID4gZSAmJiAoci5uZWFyZXN0TGlzdElkICs9IHIuX2NvbExpbmVOdW0pO1xuICAgICAgICAgICAgICBzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKHQgPSByLl92aXJ0dWFsID8gci5kaXNwbGF5RGF0YVtyLmRpc3BsYXlJdGVtTnVtIC0gMV0gOiByLl9jYWxjRXhpc3RJdGVtUG9zKHIuX251bUl0ZW1zIC0gMSkpICYmIHQuaWQgPT0gci5fbnVtSXRlbXMgLSAxKSB7XG4gICAgICBlID0gci5fc2l6ZVR5cGUgPyAodC50b3AgKyB0LmJvdHRvbSkgLyAyIDogZSA9ICh0LmxlZnQgKyB0LnJpZ2h0KSAvIDI7XG4gICAgICBzd2l0Y2ggKHIuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGkgPiBlICYmIChyLm5lYXJlc3RMaXN0SWQgPSB0LmlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG8gPCBlICYmIChyLm5lYXJlc3RMaXN0SWQgPSB0LmlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGEgPCBlICYmIChyLm5lYXJlc3RMaXN0SWQgPSB0LmlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG4gPiBlICYmIChyLm5lYXJlc3RMaXN0SWQgPSB0LmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5wcmVQYWdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB1bmRlZmluZWQgPT09IHQgJiYgKHQgPSAuNSk7XG4gICAgdGhpcy5jaGVja0luaXRlZCgpICYmIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtIC0gMSwgdCk7XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5uZXh0UGFnZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdW5kZWZpbmVkID09PSB0ICYmICh0ID0gLjUpO1xuICAgIHRoaXMuY2hlY2tJbml0ZWQoKSAmJiB0aGlzLnNraXBQYWdlKHRoaXMuY3VyUGFnZU51bSArIDEsIHQpO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2tpcFBhZ2UgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAobi5jaGVja0luaXRlZCgpKSB7XG4gICAgICBpZiAobi5fc2xpZGVNb2RlICE9IHMuUEFHRSkge1xuICAgICAgICByZXR1cm4gY2MuZXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCwgTXVzdCBTbGlkZU1vZGUgPSBQQUdFIVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2b2lkICh0IDwgMCB8fCB0ID49IG4uX251bUl0ZW1zIHx8IG4uY3VyUGFnZU51bSAhPSB0ICYmIChuLmN1clBhZ2VOdW0gPSB0LCBuLnBhZ2VDaGFuZ2VFdmVudCAmJiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW24ucGFnZUNoYW5nZUV2ZW50XSwgdCksIG4uc2Nyb2xsVG8odCwgZSkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5jYWxjQ3VzdG9tU2l6ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChlLmNoZWNrSW5pdGVkKCkpIHtcbiAgICAgIGlmICghZS5faXRlbVRtcCkge1xuICAgICAgICByZXR1cm4gY2MuZXJyb3IoXCJVbnNldCB0ZW1wbGF0ZSBpdGVtIVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghZS5yZW5kZXJFdmVudCkge1xuICAgICAgICByZXR1cm4gY2MuZXJyb3IoXCJVbnNldCBSZW5kZXItRXZlbnQhXCIpO1xuICAgICAgfVxuICAgICAgZS5fY3VzdG9tU2l6ZSA9IHt9O1xuICAgICAgdmFyIG4gPSBjYy5pbnN0YW50aWF0ZShlLl9pdGVtVG1wKTtcbiAgICAgIGUuY29udGVudC5hZGRDaGlsZChuKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdDsgaSsrKSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbZS5yZW5kZXJFdmVudF0sIG4sIGkpO1xuICAgICAgICBuLmhlaWdodCA9PSBlLl9pdGVtU2l6ZS5oZWlnaHQgJiYgbi53aWR0aCA9PSBlLl9pdGVtU2l6ZS53aWR0aCB8fCAoZS5fY3VzdG9tU2l6ZVtpXSA9IGUuX3NpemVUeXBlID8gbi5oZWlnaHQgOiBuLndpZHRoKTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKGUuX2N1c3RvbVNpemUpLmxlbmd0aCB8fCAoZS5fY3VzdG9tU2l6ZSA9IG51bGwpO1xuICAgICAgbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICBuLmRlc3Ryb3kgJiYgbi5kZXN0cm95KCk7XG4gICAgICByZXR1cm4gZS5fY3VzdG9tU2l6ZTtcbiAgICB9XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5FbnVtKHIpLFxuICAgIC8vIHRvb2x0aXA6IGZhbHNlXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInRlbXBsYXRlVHlwZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICAvLyB0b29sdGlwOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gci5OT0RFO1xuICAgIH1cbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwidG1wTm9kZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuUHJlZmFiLFxuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PSByLlBSRUZBQjtcbiAgICB9XG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInRtcFByZWZhYlwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSgpXSwgX2N0b3IucHJvdG90eXBlLCBcIl9zbGlkZU1vZGVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkVudW0ocyksXG4gICAgLy8gdG9vbHRpcDogZmFsc2VcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwic2xpZGVNb2RlXCIsIG51bGwpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuRmxvYXQsXG4gICAgcmFuZ2U6IFswLCAxLCAuMV0sXG4gICAgLy8gdG9vbHRpcDogZmFsc2UsXG4gICAgc2xpZGU6IHRydWUsXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBzLlBBR0U7XG4gICAgfVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJwYWdlRGlzdGFuY2VcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgLy8gdG9vbHRpcDogZmFsc2UsXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBzLlBBR0U7XG4gICAgfVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJwYWdlQ2hhbmdlRXZlbnRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJfdmlydHVhbFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuQm9vbGVhbixcbiAgICAvLyB0b29sdGlwOiBmYWxzZVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJ2aXJ0dWFsXCIsIG51bGwpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgLy8gdG9vbHRpcDogZmFsc2UsXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSB0aGlzLnNsaWRlTW9kZSA9PSBzLk5PUk1BTDtcbiAgICAgIHQgfHwgKHRoaXMuY3ljbGljID0gZmFsc2UpO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJjeWNsaWNcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpcnR1YWw7XG4gICAgfVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJsYWNrQ2VudGVyXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICAvLyB0b29sdGlwOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudmlydHVhbCAmJiAhdGhpcy5sYWNrQ2VudGVyO1xuICAgICAgdCB8fCAodGhpcy5sYWNrU2xpZGUgPSBmYWxzZSk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImxhY2tTbGlkZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuSW50ZWdlclxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJfdXBkYXRlUmF0ZVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICByYW5nZTogWzAsIDYsIDFdLFxuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHNsaWRlOiB0cnVlXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInVwZGF0ZVJhdGVcIiwgbnVsbCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgIHJhbmdlOiBbMCwgMTIsIDFdLFxuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHNsaWRlOiB0cnVlXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImZyYW1lQnlGcmFtZVJlbmRlck51bVwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAvLyB0b29sdGlwOiBmYWxzZVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJyZW5kZXJFdmVudFwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuRW51bShsKSxcbiAgICAvLyB0b29sdGlwOiBmYWxzZVxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzZWxlY3RlZE1vZGVcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBsLlNJTkdMRTtcbiAgICB9XG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInJlcGVhdEV2ZW50U2luZ2xlXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IGwuTk9ORTtcbiAgICB9XG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcInNlbGVjdGVkRXZlbnRcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiX251bUl0ZW1zXCIsIHVuZGVmaW5lZCk7XG4gIHJldHVybiBjY19fZGVjb3JhdGUoW2NjcF9jY2NsYXNzLCBjY3BfZGlzYWxsb3dNdWx0aXBsZSgpLCBjY3BfbWVudShcIkN1c3RvbS9MaXN0XCIpLCBjY3BfcmVxdWlyZUNvbXBvbmVudChjYy5TY3JvbGxWaWV3KSwgY2NwX2V4ZWN1dGlvbk9yZGVyKC01ZTMpXSwgX2N0b3IpO1xufShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmX0xpc3Q7Il19