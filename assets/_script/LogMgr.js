this && this.__spreadArrays;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogMgr = undefined;

// 打印前对敏感字段脱敏，防止 token/sig/PII 出现在 DevTools
var SENSITIVE_KEYS = [
  "access_token", "token", "user_sig", "userSig",
  "password", "passwd", "mobile", "phone",
  "signature", "sign", "sessionToken",
];
function sanitize(obj) {
  if (!obj || typeof obj !== "object") { return obj; }
  try {
    return JSON.parse(JSON.stringify(obj, function (key, value) {
      return SENSITIVE_KEYS.indexOf(key) !== -1 ? "***" : value;
    }));
  } catch (e) { return "[unserializable]"; }
}

var exp_LogMgr = function () {
  function _ctor() {}
  _ctor.getInstance = function () {
    null == this.instance && (this.instance = new _ctor());
    return this.instance;
  };
  _ctor.prototype.debug = function () {};
  _ctor.prototype.info  = function () {};
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