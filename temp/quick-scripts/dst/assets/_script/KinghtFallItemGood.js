
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/KinghtFallItemGood.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5309aVY1hBM8ofdIaq+0ktG', 'KinghtFallItemGood');
// _script/KinghtFallItemGood.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1BaseCtrl = require("BaseCtrl");

var $z1KinghtFallConfig = require("KinghtFallConfig");

var $z1KinghtFallDataMgr = require("KinghtFallDataMgr");

var $z1KinghtFallModle = require("KinghtFallModle");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;

var def_KinghtFallItemGood = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.sprBg = null;
    e.sprIcon = null;
    e.labNum = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.initView = function (t) {
    var e = this;
    var n = $z1KinghtFallDataMgr.KinghtFallDataMgr.getInstance().getGoodsCfgById(t.id);
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, n.sprBg, function (t) {
      e.sprBg.spriteFrame = t;
    });
    this.loadSpriteFrame($z1KinghtFallConfig.KinghtFallBundelName.IconGood, n.icon, function (t) {
      e.sprIcon.spriteFrame = t;
    });
    this.labNum.string = $z1KinghtFallModle["default"].getInstance().numberFomat(t.num);
  };

  cc__decorate([ccp_property({
    type: cc.Sprite,
    tooltip: "Background"
  })], _ctor.prototype, "sprBg", undefined);
  cc__decorate([ccp_property({
    type: cc.Sprite,
    tooltip: "Icon"
  })], _ctor.prototype, "sprIcon", undefined);
  cc__decorate([ccp_property({
    type: cc.Label,
    tooltip: "Amount"
  })], _ctor.prototype, "labNum", undefined);
  return cc__decorate([ccp_ccclass], _ctor);
}($z1BaseCtrl["default"]);

exports["default"] = def_KinghtFallItemGood;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0tpbmdodEZhbGxJdGVtR29vZC5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFCYXNlQ3RybCIsInJlcXVpcmUiLCIkejFLaW5naHRGYWxsQ29uZmlnIiwiJHoxS2luZ2h0RmFsbERhdGFNZ3IiLCIkejFLaW5naHRGYWxsTW9kbGUiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwiY2NwX3Byb3BlcnR5IiwicHJvcGVydHkiLCJkZWZfS2luZ2h0RmFsbEl0ZW1Hb29kIiwidCIsIl9jdG9yIiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwic3ByQmciLCJzcHJJY29uIiwibGFiTnVtIiwicHJvdG90eXBlIiwiaW5pdFZpZXciLCJuIiwiS2luZ2h0RmFsbERhdGFNZ3IiLCJnZXRJbnN0YW5jZSIsImdldEdvb2RzQ2ZnQnlJZCIsImlkIiwibG9hZFNwcml0ZUZyYW1lIiwiS2luZ2h0RmFsbEJ1bmRlbE5hbWUiLCJJY29uR29vZCIsInNwcml0ZUZyYW1lIiwiaWNvbiIsInN0cmluZyIsIm51bWJlckZvbWF0IiwibnVtIiwidHlwZSIsIlNwcml0ZSIsInRvb2x0aXAiLCJ1bmRlZmluZWQiLCJMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxTQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBR0MsVUFBbkI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztFQUMzQ0MsS0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUdBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FB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YyxzQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUJhc2VDdHJsID0gcmVxdWlyZShcIkJhc2VDdHJsXCIpO1xudmFyICR6MUtpbmdodEZhbGxDb25maWcgPSByZXF1aXJlKFwiS2luZ2h0RmFsbENvbmZpZ1wiKTtcbnZhciAkejFLaW5naHRGYWxsRGF0YU1nciA9IHJlcXVpcmUoXCJLaW5naHRGYWxsRGF0YU1nclwiKTtcbnZhciAkejFLaW5naHRGYWxsTW9kbGUgPSByZXF1aXJlKFwiS2luZ2h0RmFsbE1vZGxlXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xudmFyIGNjcF9wcm9wZXJ0eSA9IGNjX19kZWNvcmF0b3IucHJvcGVydHk7XG52YXIgZGVmX0tpbmdodEZhbGxJdGVtR29vZCA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLnNwckJnID0gbnVsbDtcbiAgICBlLnNwckljb24gPSBudWxsO1xuICAgIGUubGFiTnVtID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5pbml0VmlldyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHZhciBuID0gJHoxS2luZ2h0RmFsbERhdGFNZ3IuS2luZ2h0RmFsbERhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRHb29kc0NmZ0J5SWQodC5pZCk7XG4gICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoJHoxS2luZ2h0RmFsbENvbmZpZy5LaW5naHRGYWxsQnVuZGVsTmFtZS5JY29uR29vZCwgbi5zcHJCZywgZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUuc3ByQmcuc3ByaXRlRnJhbWUgPSB0O1xuICAgIH0pO1xuICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKCR6MUtpbmdodEZhbGxDb25maWcuS2luZ2h0RmFsbEJ1bmRlbE5hbWUuSWNvbkdvb2QsIG4uaWNvbiwgZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUuc3BySWNvbi5zcHJpdGVGcmFtZSA9IHQ7XG4gICAgfSk7XG4gICAgdGhpcy5sYWJOdW0uc3RyaW5nID0gJHoxS2luZ2h0RmFsbE1vZGxlLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5udW1iZXJGb21hdCh0Lm51bSk7XG4gIH07XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5TcHJpdGUsXG4gICAgdG9vbHRpcDogXCJCYWNrZ3JvdW5kXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwic3ByQmdcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLlNwcml0ZSxcbiAgICB0b29sdGlwOiBcIkljb25cIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJzcHJJY29uXCIsIHVuZGVmaW5lZCk7XG4gIGNjX19kZWNvcmF0ZShbY2NwX3Byb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICB0b29sdGlwOiBcIkFtb3VudFwiXG4gIH0pXSwgX2N0b3IucHJvdG90eXBlLCBcImxhYk51bVwiLCB1bmRlZmluZWQpO1xuICByZXR1cm4gY2NfX2RlY29yYXRlKFtjY3BfY2NjbGFzc10sIF9jdG9yKTtcbn0oJHoxQmFzZUN0cmwuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZfS2luZ2h0RmFsbEl0ZW1Hb29kOyJdfQ==