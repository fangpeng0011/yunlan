import {
	request
} from "../../utils/request.js"
// 获取订单列表
export function getOrderList(params) {
  return request({
    url: '/orders-manager/consumer/orders/page',
    method: 'get',
    params
  })
}
// 获取订单详情
export function getOrderDetail(id) {
  return request({
    url: `/orders-manager/consumer/orders/${id}`,
    method: 'get',
  })
}
// 取消订单
export function cancelOrder(value) {
  return request({
    url: `/orders-manager/consumer/orders/cancel`,
    method: 'put',
    params: value
  })
}
// 订单删除/隐藏
export function deleteOrder(id) {
  return request({
    url: `/orders-manager/consumer/orders/hide/${id}`,
    method: 'put',
  })
}
// 订单支付
export function payOrder(value ,id) {
  return request({
    url: `/orders-manager/consumer/orders/pay/${id}`,
    method: 'put',
    params: value
  })
}
// 查询交易单
export function getTrade(params) {
  return request({
    url: `/trade/consumer/tradings`,
    method: 'get',
    params
  })
}
// 获取历史订单
export function getHistoryOrder(params) {
  return request({
    url: `/orders-history/consumer/orders/list`,
    method: 'get',
    params
  })
}
// 获取历史订单详情
export function getHistoryOrderDetail(id) {
  return request({
    url: `/orders-history/consumer/orders/${id}`,
    method: 'get',
  })
}
// 发表评价
export function addComment(value) {
  return request({
    url: `/customer/consumer/evaluation`,
    method: 'post',
    params: value
  })
}
// 分页查询当前用户评价列表
export function getCommentList(params) {
  return request({
    url: `/customer/consumer/evaluation/pageByCurrentUser`,
    method: 'get',
    params
  })
}
// 删除评价
export function deleteComment(id) {
  return request({
    url: `/customer/consumer/evaluation/${id}`,
    method: 'delete',
  })
}
// 根据对象属性分页查询评价列表
export function getCommentListByObj(params) {
  return request({
    url: `/customer/consumer/evaluation/pageByTarget`,
    method: 'get',
    params
  })
}
// 点赞或取消点赞接口
export function likeComment(value) {
  return request({
    url: `/customer/consumer/evaluation/likeOrCancel`,
    method: 'post',
    params: value
  })
}
// 查询服务项的评价数
export function getCommentCount(id) {
  return request({
    url: `/customer/consumer/evaluation/countEvaluationByServeItemId?serveItemId=${id}`,
    method: 'get',
  })
}
// 用户举报
export function setReport(value) {
  return request({
    url: `/customer/consumer/evaluation/userReport`,
    method: 'post',
    params: value
  })
}
// 订单滚动分页查询
export function getOrderScroll(params) {
  return request({
    url: `/orders-manager/consumer/orders/consumerQueryList`,
    method: 'get',
    params
  })
}
// 查询订单支付结果
export function getOrderPayResult(id) {
  return request({
    url: `/orders-manager/consumer/orders/pay/${id}/result`,
    method: 'get',
  })
}