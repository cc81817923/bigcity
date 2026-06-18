
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/TranstaLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67db1C8o05AUKGTeZFpIrDv', 'TranstaLabel');
// _script/TranstaLabel.js

"use strict";

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

exports["default"] = def_TranstaLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L1RyYW5zdGFMYWJlbC5qcyJdLCJuYW1lcyI6WyJpIiwiY2NfX2V4dGVuZHMiLCJfX2V4dGVuZHMiLCJjY19fZGVjb3JhdGUiLCJfX2RlY29yYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCIkejFMYW5ndWFnZU1nciIsInJlcXVpcmUiLCJjY19fZGVjb3JhdG9yIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NwX2NjY2xhc3MiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJjY3BfbWVudSIsIm1lbnUiLCJkZWZfVHJhbnN0YUxhYmVsIiwidCIsIl9jdG9yIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJMYW5ndWFnZU1nciIsImdldEluc3RhbmNlIiwiVCIsImUiLCJSaWNoVGV4dCIsInJlZnJlc2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsU0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLFVBQW5CO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7RUFDM0NDLEtBQUssRUFBRTtBQURvQyxDQUE3Qzs7QUFHQSxJQUFJQyxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQTVCOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxVQUF2QjtBQUNBLElBQUlDLFdBQVcsR0FBR0gsYUFBYSxDQUFDSSxPQUFoQztBQUNBSixhQUFhLENBQUNLLFFBQWQ7QUFDQSxJQUFJQyxRQUFRLEdBQUdOLGFBQWEsQ0FBQ08sSUFBN0I7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsVUFBVUMsQ0FBVixFQUFhO0VBQ2xDLFNBQVNDLEtBQVQsR0FBaUI7SUFDZixPQUFPLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWQsSUFBMEMsSUFBakQ7RUFDRDs7RUFDRHRCLFdBQVcsQ0FBQ29CLEtBQUQsRUFBUUQsQ0FBUixDQUFYOztFQUNBQyxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLE1BQWhCLEdBQXlCLFlBQVk7SUFDbkMsSUFBSUwsQ0FBQyxHQUFHLEtBQUtNLElBQUwsQ0FBVUMsWUFBVixDQUF1QmYsRUFBRSxDQUFDZ0IsS0FBMUIsQ0FBUjs7SUFDQSxJQUFJUixDQUFKLEVBQU87TUFDTEEsQ0FBQyxDQUFDUyxNQUFGLEdBQVdwQixjQUFjLENBQUNxQixXQUFmLENBQTJCQyxXQUEzQixHQUF5Q0MsQ0FBekMsQ0FBMkNaLENBQUMsQ0FBQ1MsTUFBN0MsQ0FBWDtJQUNELENBRkQsTUFFTztNQUNMLElBQUlJLENBQUMsR0FBRyxLQUFLUCxJQUFMLENBQVVDLFlBQVYsQ0FBdUJmLEVBQUUsQ0FBQ3NCLFFBQTFCLENBQVI7TUFDQUQsQ0FBQyxLQUFLQSxDQUFDLENBQUNKLE1BQUYsR0FBV3BCLGNBQWMsQ0FBQ3FCLFdBQWYsQ0FBMkJDLFdBQTNCLEdBQXlDQyxDQUF6QyxDQUEyQ0MsQ0FBQyxDQUFDSixNQUE3QyxDQUFoQixDQUFEO0lBQ0Q7RUFDRixDQVJEOztFQVNBUixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JXLE9BQWhCLEdBQTBCLFlBQVk7SUFDcEMsSUFBSWYsQ0FBQyxHQUFHLEtBQUtNLElBQUwsQ0FBVUMsWUFBVixDQUF1QmYsRUFBRSxDQUFDZ0IsS0FBMUIsQ0FBUjs7SUFDQSxJQUFJUixDQUFKLEVBQU87TUFDTEEsQ0FBQyxDQUFDUyxNQUFGLEdBQVdwQixjQUFjLENBQUNxQixXQUFmLENBQTJCQyxXQUEzQixHQUF5Q0MsQ0FBekMsQ0FBMkNaLENBQUMsQ0FBQ1MsTUFBN0MsQ0FBWDtJQUNELENBRkQsTUFFTztNQUNMLElBQUlJLENBQUMsR0FBRyxLQUFLUCxJQUFMLENBQVVDLFlBQVYsQ0FBdUJmLEVBQUUsQ0FBQ3NCLFFBQTFCLENBQVI7TUFDQUQsQ0FBQyxLQUFLQSxDQUFDLENBQUNKLE1BQUYsR0FBV3BCLGNBQWMsQ0FBQ3FCLFdBQWYsQ0FBMkJDLFdBQTNCLEdBQXlDQyxDQUF6QyxDQUEyQ0MsQ0FBQyxDQUFDSixNQUE3QyxDQUFoQixDQUFEO0lBQ0Q7RUFDRixDQVJEOztFQVNBLE9BQU8xQixZQUFZLENBQUMsQ0FBQ1csV0FBRCxFQUFjRyxRQUFRLENBQUMsa0JBQUQsQ0FBdEIsQ0FBRCxFQUE4Q0ksS0FBOUMsQ0FBbkI7QUFDRCxDQXhCc0IsQ0F3QnJCVCxFQUFFLENBQUN3QixTQXhCa0IsQ0FBdkI7O0FBeUJBN0IsT0FBTyxXQUFQLEdBQWtCWSxnQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGNjX19leHRlbmRzID0gX19leHRlbmRzO1xudmFyIGNjX19kZWNvcmF0ZSA9IF9fZGVjb3JhdGU7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICR6MUxhbmd1YWdlTWdyID0gcmVxdWlyZShcIkxhbmd1YWdlTWdyXCIpO1xudmFyIGNjX19kZWNvcmF0b3IgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGNjcF9jY2NsYXNzID0gY2NfX2RlY29yYXRvci5jY2NsYXNzO1xuY2NfX2RlY29yYXRvci5wcm9wZXJ0eTtcbnZhciBjY3BfbWVudSA9IGNjX19kZWNvcmF0b3IubWVudTtcbnZhciBkZWZfVHJhbnN0YUxhYmVsID0gZnVuY3Rpb24gKHQpIHtcbiAgZnVuY3Rpb24gX2N0b3IoKSB7XG4gICAgcmV0dXJuIG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgY2NfX2V4dGVuZHMoX2N0b3IsIHQpO1xuICBfY3Rvci5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQuc3RyaW5nID0gJHoxTGFuZ3VhZ2VNZ3IuTGFuZ3VhZ2VNZ3IuZ2V0SW5zdGFuY2UoKS5UKHQuc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICAgIGUgJiYgKGUuc3RyaW5nID0gJHoxTGFuZ3VhZ2VNZ3IuTGFuZ3VhZ2VNZ3IuZ2V0SW5zdGFuY2UoKS5UKGUuc3RyaW5nKSk7XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIGlmICh0KSB7XG4gICAgICB0LnN0cmluZyA9ICR6MUxhbmd1YWdlTWdyLkxhbmd1YWdlTWdyLmdldEluc3RhbmNlKCkuVCh0LnN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCk7XG4gICAgICBlICYmIChlLnN0cmluZyA9ICR6MUxhbmd1YWdlTWdyLkxhbmd1YWdlTWdyLmdldEluc3RhbmNlKCkuVChlLnN0cmluZykpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNjX19kZWNvcmF0ZShbY2NwX2NjY2xhc3MsIGNjcF9tZW51KFwiSTE4Ti9UcmFuc3RMYWJlbFwiKV0sIF9jdG9yKTtcbn0oY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZl9UcmFuc3RhTGFiZWw7Il19