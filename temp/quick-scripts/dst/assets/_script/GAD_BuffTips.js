
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/GAD_BuffTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50c99Gr1HZCbrHnKCh7mPDw', 'GAD_BuffTips');
// _script/GAD_BuffTips.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseCtrl = require("BaseCtrl");

var $z1PoolMgr = require("PoolMgr");

var $z1GAD_DataMgr = require("GAD_DataMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_GAD_BuffTips = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buffImgs = [];
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {};

  _ctor.prototype.getImg = function (t) {
    for (var e = 0; e < this.buffImgs.length; e++) {
      if (this.buffImgs[e].name == t) {
        return this.buffImgs[e];
      }
    }

    return null;
  };

  _ctor.prototype.show = function (t) {
    var e = this;
    var n = $z1GAD_DataMgr["default"].getInstance().getBuffTypeCfg(t);
    this.node.getComponent(cc.Sprite).spriteFrame = this.getImg(n.buffImage);
    this.node.opacity = 0;
    this.node.active = true;
    this.node.runAction(cc.sequence(cc.fadeIn(.2), cc.delayTime(1), cc.fadeOut(.2), cc.callFunc(function () {
      e.node.active = false;
      $z1PoolMgr.PoolMgr.getInstance().freeNode("pbt_buff_img", e.node);
    })));
  };

  cc__decorate([ccp_property([cc.SpriteFrame])], _ctor.prototype, "buffImgs", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_GAD_BuffTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0dBRF9CdWZmVGlwcy5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFCYXNlQ3RybCIsInJlcXVpcmUiLCIkejFQb29sTWdyIiwiJHoxR0FEX0RhdGFNZ3IiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJkZWZfR0FEX0J1ZmZUaXBzIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnVmZkltZ3MiLCJwcm90b3R5cGUiLCJzdGFydCIsImdldEltZyIsImxlbmd0aCIsIm5hbWUiLCJzaG93IiwibiIsImdldEluc3RhbmNlIiwiZ2V0QnVmZlR5cGVDZmciLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJidWZmSW1hZ2UiLCJvcGFjaXR5IiwiYWN0aXZlIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJmYWRlSW4iLCJkZWxheVRpbWUiLCJmYWRlT3V0IiwiY2FsbEZ1bmMiLCJQb29sTWdyIiwiZnJlZU5vZGUiLCJTcHJpdGVGcmFtZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxP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InZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VDdHJsID0gcmVxdWlyZShcIkJhc2VDdHJsXCIpO1xudmFyICR6MVBvb2xNZ3IgPSByZXF1aXJlKFwiUG9vbE1nclwiKTtcbnZhciAkejFHQURfRGF0YU1nciA9IHJlcXVpcmUoXCJHQURfRGF0YU1nclwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGRlZl9HQURfQnVmZlRpcHMgPSBmdW5jdGlvbiAodCkge1xuICBmdW5jdGlvbiBfY3RvcigpIHtcbiAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgZS5idWZmSW1ncyA9IFtdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNjX19leHRlbmRzKF9jdG9yLCB0KTtcbiAgX2N0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRJbWcgPSBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5idWZmSW1ncy5sZW5ndGg7IGUrKykge1xuICAgICAgaWYgKHRoaXMuYnVmZkltZ3NbZV0ubmFtZSA9PSB0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZJbWdzW2VdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgX2N0b3IucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB2YXIgbiA9ICR6MUdBRF9EYXRhTWdyLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5nZXRCdWZmVHlwZUNmZyh0KTtcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmdldEltZyhuLmJ1ZmZJbWFnZSk7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKC4yKSwgY2MuZGVsYXlUaW1lKDEpLCBjYy5mYWRlT3V0KC4yKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgJHoxUG9vbE1nci5Qb29sTWdyLmdldEluc3RhbmNlKCkuZnJlZU5vZGUoXCJwYnRfYnVmZl9pbWdcIiwgZS5ub2RlKTtcbiAgICB9KSkpO1xuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKV0sIF9jdG9yLnByb3RvdHlwZSwgXCJidWZmSW1nc1wiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZUN0cmwuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfR0FEX0J1ZmZUaXBzOyJdfQ==