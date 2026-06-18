/**
 * SHA256 签名 / 验签
 *
 * 签名字段（ASCII 升序排列）：
 *   customerId, secret
 *
 * 拼接格式：
 *   customerId={val}&secret={val}
 *
 * 签名算法：SHA256(拼接串) → 小写 hex
 */
const crypto = require("crypto");

function buildSignStr(params) {
  return Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
}

function sign(params) {
  const str = buildSignStr(params);
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}

function verify(params, expectSign) {
  return sign(params) === expectSign;
}

module.exports = { sign, verify, buildSignStr };
