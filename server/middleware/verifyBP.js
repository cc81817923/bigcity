/**
 * BP 请求验签中间件工厂
 *
 * 基础签名（接口1/2）：
 *   sign = SHA256("customerId={val}&secret={BP_SIGN_KEY}")
 *
 * payCallback 签名（接口3）：
 *   sign = SHA256("customerId={val}&itemId={val}&orderId={val}&secret={BP_SIGN_KEY}")
 *
 * 用法：
 *   verifyBP()              — 仅 customerId
 *   verifyBP(["orderId","itemId"]) — 额外纳入字段
 */
const { verify } = require("../utils/sign");
const config = require("../config");

function verifyBP(extraFields) {
  return function (req, res, next) {
    const body = req.body || {};
    const { customerId, sign } = body;

    if (!customerId || !sign) {
      return res.status(400).json({ code: 400, message: "Missing customerId or sign" });
    }

    const params = { customerId, secret: config.bp.signKey };

    if (extraFields && extraFields.length) {
      extraFields.forEach(function (field) {
        if (body[field] != null) { params[field] = String(body[field]); }
      });
    }

    if (!verify(params, sign)) {
      return res.status(401).json({ code: 401, message: "Invalid signature" });
    }

    req.customerId = customerId;
    next();
  };
}

module.exports = verifyBP;
