
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/TranstanImg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bc64LzzcZE9b4RqZBUBYjc', 'TranstanImg');
// _script/TranstanImg.js

"use strict";

var i;
var cc__extends = __extends;
var cc__decorate = __decorate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var $z1Appcfg = require("Appcfg");

var $z1LanguageMgr = require("LanguageMgr");

var cc__decorator = cc._decorator;
var ccp_ccclass = cc__decorator.ccclass;
var ccp_property = cc__decorator.property;
var ccp_menu = cc__decorator.menu;

var def_TranstanImg = function (t) {
  function _ctor() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.en = null;
    e.jp = null;
    e.fz = null;
    return e;
  }

  cc__extends(_ctor, t);

  _ctor.prototype.start = function () {
    this.en && (this.en.active = false);
    this.jp && (this.jp.active = false);
    this.fz && (this.fz.active = false);
    var t = this.node.getComponent(cc.Sprite);

    if ($z1LanguageMgr.LanguageMgr.getInstance().getCurrentLanguage() == $z1Appcfg.LanguageType.en) {
      this.en.active = true;
      t && (t.spriteFrame = null);
    } else if ($z1LanguageMgr.LanguageMgr.getInstance().getCurrentLanguage() == $z1Appcfg.LanguageType.jp) {
      this.jp.active = true;
      t && (t.spriteFrame = null);
    } else if ($z1LanguageMgr.LanguageMgr.getInstance().getCurrentLanguage() == $z1Appcfg.LanguageType.zh_tw && this.fz && t) {
      this.fz.active = true, t.spriteFrame = null;
    }
  };

  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "English"
  })], _ctor.prototype, "en", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Japanese"
  })], _ctor.prototype, "jp", undefined);
  cc__decorate([ccp_property({
    type: cc.Node,
    tooltip: "Traditional Chinese"
  })], _ctor.prototype, "fz", undefined);
  return cc__decorate([ccp_ccclass, ccp_menu("I18N/TranstanImg")], _ctor);
}(cc.Component);

exports["default"] = def_TranstanImg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1RyYW5zdGFuSW1nLmpzIl0sIm5hbWVzIjpbImkiLCJjY19fZXh0ZW5kcyIsIl9fZXh0ZW5kcyIsImNjX19kZWNvcmF0ZSIsIl9fZGVjb3JhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIiR6MUFwcGNmZyIsInJlcXVpcmUiLCIkejFMYW5ndWFnZU1nciIsImNjX19kZWNvcmF0b3IiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY3BfY2NjbGFzcyIsImNjY2xhc3MiLCJjY3BfcHJvcGVydHkiLCJwcm9wZXJ0eSIsImNjcF9tZW51IiwibWVudSIsImRlZl9UcmFuc3RhbkltZyIsInQiLCJfY3RvciIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImVuIiwianAiLCJmeiIsInByb3RvdHlwZSIsInN0YXJ0IiwiYWN0aXZlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsIkxhbmd1YWdlTWdyIiwiZ2V0SW5zdGFuY2UiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJMYW5ndWFnZVR5cGUiLCJzcHJpdGVGcmFtZSIsInpoX3R3IiwidHlwZSIsIk5vZGUiLCJ0b29sdGlwIiwidW5kZWZpbmVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLFNBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxVQUFuQjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7O0FBR0EsSUFBSUMsU0FBUyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQTVCOztBQUNBLElBQUlFLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcs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Q0FBWjtFQUlBLE9BQU8xQyxZQUFZLENBQUMsQ0FBQ1ksV0FBRCxFQUFjSSxRQUFRLENBQUMsa0JBQUQsQ0FBdEIsQ0FBRCxFQUE4Q0ksS0FBOUMsQ0FBbkI7QUFDRCxDQXJDcUIsQ0FxQ3BCVixFQUFFLENBQUNpQyxTQXJDaUIsQ0FBdEI7O0FBc0NBdkMsT0FBTyxXQUFQLEdBQWtCYyxlQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgY2NfX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG52YXIgY2NfX2RlY29yYXRlID0gX19kZWNvcmF0ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgJHoxQXBwY2ZnID0gcmVxdWlyZShcIkFwcGNmZ1wiKTtcbnZhciAkejFMYW5ndWFnZU1nciA9IHJlcXVpcmUoXCJMYW5ndWFnZU1nclwiKTtcbnZhciBjY19fZGVjb3JhdG9yID0gY2MuX2RlY29yYXRvcjtcbnZhciBjY3BfY2NjbGFzcyA9IGNjX19kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjY3BfcHJvcGVydHkgPSBjY19fZGVjb3JhdG9yLnByb3BlcnR5O1xudmFyIGNjcF9tZW51ID0gY2NfX2RlY29yYXRvci5tZW51O1xudmFyIGRlZl9UcmFuc3RhbkltZyA9IGZ1bmN0aW9uICh0KSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICBlLmVuID0gbnVsbDtcbiAgICBlLmpwID0gbnVsbDtcbiAgICBlLmZ6ID0gbnVsbDtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjY19fZXh0ZW5kcyhfY3RvciwgdCk7XG4gIF9jdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuICYmICh0aGlzLmVuLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLmpwICYmICh0aGlzLmpwLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLmZ6ICYmICh0aGlzLmZ6LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICBpZiAoJHoxTGFuZ3VhZ2VNZ3IuTGFuZ3VhZ2VNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50TGFuZ3VhZ2UoKSA9PSAkejFBcHBjZmcuTGFuZ3VhZ2VUeXBlLmVuKSB7XG4gICAgICB0aGlzLmVuLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0ICYmICh0LnNwcml0ZUZyYW1lID0gbnVsbCk7XG4gICAgfSBlbHNlIGlmICgkejFMYW5ndWFnZU1nci5MYW5ndWFnZU1nci5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRMYW5ndWFnZSgpID09ICR6MUFwcGNmZy5MYW5ndWFnZVR5cGUuanApIHtcbiAgICAgIHRoaXMuanAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHQgJiYgKHQuc3ByaXRlRnJhbWUgPSBudWxsKTtcbiAgICB9IGVsc2UgaWYgKCR6MUxhbmd1YWdlTWdyLkxhbmd1YWdlTWdyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudExhbmd1YWdlKCkgPT0gJHoxQXBwY2ZnLkxhbmd1YWdlVHlwZS56aF90dyAmJiB0aGlzLmZ6ICYmIHQpIHtcbiAgICAgIHRoaXMuZnouYWN0aXZlID0gdHJ1ZSwgdC5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkVuZ2xpc2hcIlxuICB9KV0sIF9jdG9yLnByb3RvdHlwZSwgXCJlblwiLCB1bmRlZmluZWQpO1xuICBjY19fZGVjb3JhdGUoW2NjcF9wcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuTm9kZSxcbiAgICB0b29sdGlwOiBcIkphcGFuZXNlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwianBcIiwgdW5kZWZpbmVkKTtcbiAgY2NfX2RlY29yYXRlKFtjY3BfcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCJUcmFkaXRpb25hbCBDaGluZXNlXCJcbiAgfSldLCBfY3Rvci5wcm90b3R5cGUsIFwiZnpcIiwgdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3MsIGNjcF9tZW51KFwiSTE4Ti9UcmFuc3RhbkltZ1wiKV0sIF9jdG9yKTtcbn0oY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9UcmFuc3RhbkltZzsiXX0=