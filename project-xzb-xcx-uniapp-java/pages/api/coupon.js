import { request } from '../../utils/request.js';

// 用户端抢券列表分页接口
export const getCouponList = (params) =>
  request({
    url: '/market/consumer/activity/list',
    method: 'get',
    params,
  });
// 抢券接口
export const addCoupon = (params) =>
  request({
    url: '/market/consumer/coupon/seize',
    method: 'post',
    params,
  });
// 我的优惠券列表
export const getMyCouponList = (params) =>
  request({
    url: '/market/consumer/coupon/my',
    method: 'get',
    params,
  });
// 下单页可用优惠券列表
export const getOrderCouponList = (params) =>
  request({
    url: '/orders-manager/consumer/orders/getAvailableCoupons',
    method: 'get',
    params,
  });