"use strict";
const utils_request = require("../../utils/request.js");
function getOrderDetail(id) {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/${id}`,
    method: "get"
  });
}
function cancelOrder(value) {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/cancel`,
    method: "put",
    params: value
  });
}
function deleteOrder(id) {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/hide/${id}`,
    method: "put"
  });
}
function payOrder(value, id) {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/pay/${id}`,
    method: "put",
    params: value
  });
}
function getHistoryOrder(params) {
  return utils_request.request({
    url: `/orders-history/consumer/orders/list`,
    method: "get",
    params
  });
}
function getHistoryOrderDetail(id) {
  return utils_request.request({
    url: `/orders-history/consumer/orders/${id}`,
    method: "get"
  });
}
function addComment(value) {
  return utils_request.request({
    url: `/customer/consumer/evaluation`,
    method: "post",
    params: value
  });
}
function getCommentList(params) {
  return utils_request.request({
    url: `/customer/consumer/evaluation/pageByCurrentUser`,
    method: "get",
    params
  });
}
function deleteComment(id) {
  return utils_request.request({
    url: `/customer/consumer/evaluation/${id}`,
    method: "delete"
  });
}
function getCommentListByObj(params) {
  return utils_request.request({
    url: `/customer/consumer/evaluation/pageByTarget`,
    method: "get",
    params
  });
}
function likeComment(value) {
  return utils_request.request({
    url: `/customer/consumer/evaluation/likeOrCancel`,
    method: "post",
    params: value
  });
}
function setReport(value) {
  return utils_request.request({
    url: `/customer/consumer/evaluation/userReport`,
    method: "post",
    params: value
  });
}
function getOrderScroll(params) {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/consumerQueryList`,
    method: "get",
    params
  });
}
function getOrderPayResult(id) {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/pay/${id}/result`,
    method: "get"
  });
}
exports.addComment = addComment;
exports.cancelOrder = cancelOrder;
exports.deleteComment = deleteComment;
exports.deleteOrder = deleteOrder;
exports.getCommentList = getCommentList;
exports.getCommentListByObj = getCommentListByObj;
exports.getHistoryOrder = getHistoryOrder;
exports.getHistoryOrderDetail = getHistoryOrderDetail;
exports.getOrderDetail = getOrderDetail;
exports.getOrderPayResult = getOrderPayResult;
exports.getOrderScroll = getOrderScroll;
exports.likeComment = likeComment;
exports.payOrder = payOrder;
exports.setReport = setReport;
