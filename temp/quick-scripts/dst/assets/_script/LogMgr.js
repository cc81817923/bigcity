
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_script/LogMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66888k6K8BMX5FlnhFjgbWs', 'LogMgr');
// _script/LogMgr.js

"use strict";

void 0 && (void 0).__spreadArrays;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogMgr = undefined; // 打印前对敏感字段脱敏，防止 token/sig/PII 出现在 DevTools

var SENSITIVE_KEYS = ["access_token", "token", "user_sig", "userSig", "password", "passwd", "mobile", "phone", "signature", "sign", "sessionToken"];

function sanitize(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  try {
    return JSON.parse(JSON.stringify(obj, function (key, value) {
      return SENSITIVE_KEYS.indexOf(key) !== -1 ? "***" : value;
    }));
  } catch (e) {
    return "[unserializable]";
  }
}

var exp_LogMgr = function () {
  function _ctor() {}

  _ctor.getInstance = function () {
    null == this.instance && (this.instance = new _ctor());
    return this.instance;
  };

  _ctor.prototype.debug = function () {};

  _ctor.prototype.info = function () {};

  _ctor.prototype.error = function (t, e) {
    // 只打印错误类型/消息，脱敏掉可能含敏感字段的对象
    var safeMsg = typeof t === "string" ? t : sanitize(t);
    var safeExtra = e !== undefined ? sanitize(e) : undefined;
    console.error(safeMsg, safeExtra);
  };

  _ctor.instance = null;
  return _ctor;
}();

exports.LogMgr = exp_LogMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc2NyaXB0L0xvZ01nci5qcyJdLCJuYW1lcyI6WyJfX3NwcmVhZEFycmF5cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiTG9nTWdyIiwidW5kZWZpbmVkIiwiU0VOU0lUSVZFX0tFWVMiLCJzYW5pdGl6ZSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImtleSIsImluZGV4T2YiLCJlIiwiZXhwX0xvZ01nciIsIl9jdG9yIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsImRlYnVnIiwiaW5mbyIsImVycm9yIiwidCIsInNhZmVNc2ciLCJzYWZlRXh0cmEiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQVEsU0FBS0EsY0FBYjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0VBQzNDQyxLQUFLLEVBQUU7QUFEb0MsQ0FBN0M7QUFHQUQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCQyxTQUFqQixFQUVBOztBQUNBLElBQUlDLGNBQWMsR0FBRyxDQUNuQixjQURtQixFQUNILE9BREcsRUFDTSxVQUROLEVBQ2tCLFNBRGxCLEVBRW5CLFVBRm1CLEVBRVAsUUFGTyxFQUVHLFFBRkgsRUFFYSxPQUZiLEVBR25CLFdBSG1CLEVBR04sTUFITSxFQUdFLGNBSEYsQ0FBckI7O0FBS0EsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7RUFDckIsSUFBSSxDQUFDQSxHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFlLFFBQTNCLEVBQXFDO0lBQUUsT0FBT0EsR0FBUDtFQUFhOztFQUNwRCxJQUFJO0lBQ0YsT0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxHQUFmLEVBQW9CLFVBQVVJLEdBQVYsRUFBZVQsS0FBZixFQUFzQjtNQUMxRCxPQUFPRyxjQUFjLENBQUNPLE9BQWYsQ0FBdUJELEdBQXZCLE1BQWdDLENBQUMsQ0FBakMsR0FBcUMsS0FBckMsR0FBNkNULEtBQXBEO0lBQ0QsQ0FGaUIsQ0FBWCxDQUFQO0VBR0QsQ0FKRCxDQUlFLE9BQU9XLENBQVAsRUFBVTtJQUFFLE9BQU8sa0JBQVA7RUFBNEI7QUFDM0M7O0FBRUQsSUFBSUMsVUFBVSxHQUFHLFlBQVk7RUFDM0IsU0FBU0MsS0FBVCxHQUFpQixDQUFFOztFQUNuQkEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLFlBQVk7SUFDOUIsUUFBUSxLQUFLQyxRQUFiLEtBQTBCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBSUYsS0FBSixFQUExQztJQUNBLE9BQU8sS0FBS0UsUUFBWjtFQUNELENBSEQ7O0VBSUFGLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsS0FBaEIsR0FBd0IsWUFBWSxDQUFFLENBQXRDOztFQUNBSixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JFLElBQWhCLEdBQXdCLFlBQVksQ0FBRSxDQUF0Qzs7RUFDQUwsS0FBSyxDQUFDRyxTQUFOLENBQWdCRyxLQUFoQixHQUF3QixVQUFVQyxDQUFWLEVBQWFULENBQWIsRUFBZ0I7SUFDdEM7SUFDQSxJQUFJVSxPQUFPLEdBQUcsT0FBT0QsQ0FBUCxLQUFhLFFBQWIsR0FBd0JBLENBQXhCLEdBQTRCaEIsUUFBUSxDQUFDZ0IsQ0FBRCxDQUFsRDtJQUNBLElBQUlFLFNBQVMsR0FBR1gsQ0FBQyxLQUFLVCxTQUFOLEdBQWtCRSxRQUFRLENBQUNPLENBQUQsQ0FBMUIsR0FBZ0NULFNBQWhEO0lBQ0FxQixPQUFPLENBQUNKLEtBQVIsQ0FBY0UsT0FBZCxFQUF1QkMsU0FBdkI7RUFDRCxDQUxEOztFQU1BVCxLQUFLLENBQUNFLFFBQU4sR0FBaUIsSUFBakI7RUFDQSxPQUFPRixLQUFQO0FBQ0QsQ0FoQmdCLEVBQWpCOztBQWlCQWQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCVyxVQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTG9nTWdyID0gdW5kZWZpbmVkO1xuXG4vLyDmiZPljbDliY3lr7nmlY/mhJ/lrZfmrrXohLHmlY/vvIzpmLLmraIgdG9rZW4vc2lnL1BJSSDlh7rnjrDlnKggRGV2VG9vbHNcbnZhciBTRU5TSVRJVkVfS0VZUyA9IFtcbiAgXCJhY2Nlc3NfdG9rZW5cIiwgXCJ0b2tlblwiLCBcInVzZXJfc2lnXCIsIFwidXNlclNpZ1wiLFxuICBcInBhc3N3b3JkXCIsIFwicGFzc3dkXCIsIFwibW9iaWxlXCIsIFwicGhvbmVcIixcbiAgXCJzaWduYXR1cmVcIiwgXCJzaWduXCIsIFwic2Vzc2lvblRva2VuXCIsXG5dO1xuZnVuY3Rpb24gc2FuaXRpemUob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHsgcmV0dXJuIG9iajsgfVxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaiwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBTRU5TSVRJVkVfS0VZUy5pbmRleE9mKGtleSkgIT09IC0xID8gXCIqKipcIiA6IHZhbHVlO1xuICAgIH0pKTtcbiAgfSBjYXRjaCAoZSkgeyByZXR1cm4gXCJbdW5zZXJpYWxpemFibGVdXCI7IH1cbn1cblxudmFyIGV4cF9Mb2dNZ3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9jdG9yKCkge31cbiAgX2N0b3IuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IF9jdG9yKCkpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9O1xuICBfY3Rvci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbiAgX2N0b3IucHJvdG90eXBlLmluZm8gID0gZnVuY3Rpb24gKCkge307XG4gIF9jdG9yLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgLy8g5Y+q5omT5Y2w6ZSZ6K+v57G75Z6LL+a2iOaBr++8jOiEseaVj+aOieWPr+iDveWQq+aVj+aEn+Wtl+auteeahOWvueixoVxuICAgIHZhciBzYWZlTXNnID0gdHlwZW9mIHQgPT09IFwic3RyaW5nXCIgPyB0IDogc2FuaXRpemUodCk7XG4gICAgdmFyIHNhZmVFeHRyYSA9IGUgIT09IHVuZGVmaW5lZCA/IHNhbml0aXplKGUpIDogdW5kZWZpbmVkO1xuICAgIGNvbnNvbGUuZXJyb3Ioc2FmZU1zZywgc2FmZUV4dHJhKTtcbiAgfTtcbiAgX2N0b3IuaW5zdGFuY2UgPSBudWxsO1xuICByZXR1cm4gX2N0b3I7XG59KCk7XG5leHBvcnRzLkxvZ01nciA9IGV4cF9Mb2dNZ3I7Il19