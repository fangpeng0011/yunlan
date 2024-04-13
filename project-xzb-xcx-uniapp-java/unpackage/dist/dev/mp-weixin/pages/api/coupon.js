"use strict";
const utils_request = require("../../utils/request.js");
const getCouponList = (params) => utils_request.request({
  url: "/market/consumer/activity/list",
  method: "get",
  params
});
const addCoupon = (params) => utils_request.request({
  url: "/market/consumer/coupon/seize",
  method: "post",
  params
});
const getMyCouponList = (params) => utils_request.request({
  url: "/market/consumer/coupon/my",
  method: "get",
  params
});
const getOrderCouponList = (params) => utils_request.request({
  url: "/orders-manager/consumer/orders/getAvailableCoupons",
  method: "get",
  params
});
exports.addCoupon = addCoupon;
exports.getCouponList = getCouponList;
exports.getMyCouponList = getMyCouponList;
exports.getOrderCouponList = getOrderCouponList;
