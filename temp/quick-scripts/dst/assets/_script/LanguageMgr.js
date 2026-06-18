
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/LanguageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4129gp1IZPuLMnmeyFSgVu', 'LanguageMgr');
// _script/LanguageMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageMgr = undefined;

var $z1DataMgr = require("DataMgr");

var $z1Appcfg = require("Appcfg");

var exp_LanguageMgr = function () {
  function _ctor() {
    this.currentLan = $z1Appcfg.LanguageType.en;
  }

  _ctor.getInstance = function () {
    null == this.instance && (this.instance = new _ctor());
    return this.instance;
  };

  _ctor.prototype.setCurrentLanguage = function (t) {
    this.currentLan = t;
  };

  _ctor.prototype.getCurrentLanguage = function () {
    return this.currentLan;
  };

  _ctor.prototype.getImgstr = function (t) {
    var e = this.currentLan;

    if (e == $z1Appcfg.LanguageType.en) {
      return t + "-y";
    } else {
      if (e == $z1Appcfg.LanguageType.jp) {
        return t + "-r";
      } else {
        if (e == $z1Appcfg.LanguageType.zh_tw) {
          return t + "-f";
        } else {
          return t;
        }
      }
    }
  };

  _ctor.prototype.T = function (t) {
    return $z1DataMgr.DataMgr.getInstance().T(t, this.currentLan);
  };

  return _ctor;
}();

exports.LanguageMgr = exp_LanguageMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0xhbmd1YWdlTWdyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiTGFuZ3VhZ2VNZ3IiLCJ1bmRlZmluZWQiLCIkejFEYXRhTWdyIiwicmVxdWlyZSIsIiR6MUFwcGNmZyIsImV4cF9MYW5ndWFnZU1nciIsIl9jdG9yIiwiY3VycmVudExhbiIsIkxhbmd1YWdlVHlwZSIsImVuIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInQiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJnZXRJbWdzdHIiLCJlIiwianAiLCJ6aF90dyIsIlQiLCJEYXRhTWdyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxXQUFSLEdBQXNCQyxTQUF0Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsZUFBZSxHQUFHLFlBQVk7RUFDaEMsU0FBU0MsS0FBVCxHQUFpQjtJQUNmLEtBQUtDLFVBQUwsR0FBa0JILFNBQVMsQ0FBQ0ksWUFBVixDQUF1QkMsRUFBekM7RUFDRDs7RUFDREgsS0FBSyxDQUFDSSxXQUFOLEdBQW9CLFlBQVk7SUFDOUIsUUFBUSxLQUFLQyxRQUFiLEtBQTBCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBSUwsS0FBSixFQUExQztJQUNBLE9BQU8sS0FBS0ssUUFBWjtFQUNELENBSEQ7O0VBSUFMLEtBQUssQ0FBQ00sU0FBTixDQUFnQkMsa0JBQWhCLEdBQXFDLFVBQVVDLENBQVYsRUFBYTtJQUNoRCxLQUFLUCxVQUFMLEdBQWtCTyxDQUFsQjtFQUNELENBRkQ7O0VBR0FSLEtBQUssQ0FBQ00sU0FBTixDQUFnQkcsa0JBQWhCLEdBQXFDLFlBQVk7SUFDL0MsT0FBTyxLQUFLUixVQUFaO0VBQ0QsQ0FGRDs7RUFHQUQsS0FBSyxDQUFDTSxTQUFOLENBQWdCSSxTQUFoQixHQUE0QixVQUFVRixDQUFWLEVBQWE7SUFDdkMsSUFBSUcsQ0FBQyxHQUFHLEtBQUtWLFVBQWI7O0lBQ0EsSUFBSVUsQ0FBQyxJQUFJYixTQUFTLENBQUNJLFlBQVYsQ0FBdUJDLEVBQWhDLEVBQW9DO01BQ2xDLE9BQU9LLENBQUMsR0FBRyxJQUFYO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsSUFBSUcsQ0FBQyxJQUFJYixTQUFTLENBQUNJLFlBQVYsQ0FBdUJVLEVBQWhDLEVBQW9DO1FBQ2xDLE9BQU9KLENBQUMsR0FBRyxJQUFYO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsSUFBSUcsQ0FBQyxJQUFJYixTQUFTLENBQUNJLFlBQVYsQ0FBdUJXLEtBQWhDLEVBQXVDO1VBQ3JDLE9BQU9MLENBQUMsR0FBRyxJQUFYO1FBQ0QsQ0FGRCxNQUVPO1VBQ0wsT0FBT0EsQ0FBUDtRQUNEO01BQ0Y7SUFDRjtFQUNGLENBZkQ7O0VBZ0JBUixLQUFLLENBQUNNLFNBQU4sQ0FBZ0JRLENBQWhCLEdBQW9CLFVBQVVOLENBQVYsRUFBYTtJQUMvQixPQUFPWixVQUFVLENBQUNtQixPQUFYLENBQW1CWCxXQUFuQixHQUFpQ1UsQ0FBakMsQ0FBbUNOLENBQW5DLEVBQXNDLEtBQUtQLFVBQTNDLENBQVA7RUFDRCxDQUZEOztFQUdBLE9BQU9ELEtBQVA7QUFDRCxDQWxDcUIsRUFBdEI7O0FBbUNBUixPQUFPLENBQUNFLFdBQVIsR0FBc0JLLGVBQXRCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MYW5ndWFnZU1nciA9IHVuZGVmaW5lZDtcbnZhciAkejFEYXRhTWdyID0gcmVxdWlyZShcIkRhdGFNZ3JcIik7XG52YXIgJHoxQXBwY2ZnID0gcmVxdWlyZShcIkFwcGNmZ1wiKTtcbnZhciBleHBfTGFuZ3VhZ2VNZ3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge1xuICAgIHRoaXMuY3VycmVudExhbiA9ICR6MUFwcGNmZy5MYW5ndWFnZVR5cGUuZW47XG4gIH1cbiAgX2N0b3IuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IF9jdG9yKCkpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0aGlzLmN1cnJlbnRMYW4gPSB0O1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW47XG4gIH07XG4gIF9jdG9yLnByb3RvdHlwZS5nZXRJbWdzdHIgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gdGhpcy5jdXJyZW50TGFuO1xuICAgIGlmIChlID09ICR6MUFwcGNmZy5MYW5ndWFnZVR5cGUuZW4pIHtcbiAgICAgIHJldHVybiB0ICsgXCIteVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZSA9PSAkejFBcHBjZmcuTGFuZ3VhZ2VUeXBlLmpwKSB7XG4gICAgICAgIHJldHVybiB0ICsgXCItclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGUgPT0gJHoxQXBwY2ZnLkxhbmd1YWdlVHlwZS56aF90dykge1xuICAgICAgICAgIHJldHVybiB0ICsgXCItZlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuVCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuICR6MURhdGFNZ3IuRGF0YU1nci5nZXRJbnN0YW5jZSgpLlQodCwgdGhpcy5jdXJyZW50TGFuKTtcbiAgfTtcbiAgcmV0dXJuIF9jdG9yO1xufSgpO1xuZXhwb3J0cy5MYW5ndWFnZU1nciA9IGV4cF9MYW5ndWFnZU1ncjsiXX0=