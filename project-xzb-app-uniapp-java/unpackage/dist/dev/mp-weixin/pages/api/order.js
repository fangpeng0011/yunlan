"use strict";
const utils_request = require("../../utils/request.js");
const getDispatchOrder = (params) => utils_request.request({
  url: `/orders-dispatch/worker/queryForList?serveTypeId=${params}`,
  method: "get"
});
const rejectOrder = (params) => utils_request.request({
  url: `/orders-dispatch/worker/reject`,
  method: "post",
  params
});
const receiveOrder = (params) => utils_request.request({
  url: `/orders-dispatch/worker/receive`,
  method: "post",
  params
});
const getDispatchOrderInfo = (params) => utils_request.request({
  url: `/orders-dispatch/worker/${params}`,
  method: "get"
});
const getRobOrder = (params) => utils_request.request({
  url: params ? `/orders-seize/worker?${typeof params === "number" ? "serveDistance" : "serveTypeId"}=${params}` : "/orders-seize/worker",
  method: "get"
});
const getHomeFilter = () => utils_request.request({
  url: `/foundations/operation/serve-type/queryServeTypeListByActiveStatus`,
  method: "get"
});
const robOrder = (params) => utils_request.request({
  url: `/orders-seize/worker`,
  method: "post",
  params
});
const getOrder = (params, id) => utils_request.request({
  url: params ? `/orders-manager/worker/queryForList?serveStatus=${params}&sortBy=` + (id ? id : "") : `/orders-manager/worker/queryForList?sortBy=${id ? id : ""}`,
  method: "get"
});
const deleteOrder = (params) => utils_request.request({
  url: `/orders-manager/worker/serve/${params}`,
  method: "delete"
});
const getOrderInfo = (params) => utils_request.request({
  url: `/orders-manager/worker/${params}`,
  method: "get"
});
const cancelOrder = (params) => utils_request.request({
  url: `/orders-manager/worker/cancel`,
  method: "post",
  params
});
const startServe = (params) => utils_request.request({
  url: `/orders-manager/worker/start`,
  method: "post",
  params
});
const finishServe = (params) => utils_request.request({
  url: `/orders-manager/worker/finish`,
  method: "post",
  params
});
const getOrderStatusNum = (params) => utils_request.request({
  url: `/orders-manager/worker/status/num`,
  method: "get"
});
const getHistoryOrder = (params) => utils_request.request({
  url: `/orders-history/worker/orders/list`,
  method: "get",
  params
});
const getHistoryOrderInfo = (params) => utils_request.request({
  url: `/orders-history/worker/orders/${params}`,
  method: "get"
});
const getEvaluateList = (params) => utils_request.request({
  url: `/customer/worker/evaluation/pageByCurrentUserAndScoreLevel`,
  method: "get",
  params
});
exports.cancelOrder = cancelOrder;
exports.deleteOrder = deleteOrder;
exports.finishServe = finishServe;
exports.getDispatchOrder = getDispatchOrder;
exports.getDispatchOrderInfo = getDispatchOrderInfo;
exports.getEvaluateList = getEvaluateList;
exports.getHistoryOrder = getHistoryOrder;
exports.getHistoryOrderInfo = getHistoryOrderInfo;
exports.getHomeFilter = getHomeFilter;
exports.getOrder = getOrder;
exports.getOrderInfo = getOrderInfo;
exports.getOrderStatusNum = getOrderStatusNum;
exports.getRobOrder = getRobOrder;
exports.receiveOrder = receiveOrder;
exports.rejectOrder = rejectOrder;
exports.robOrder = robOrder;
exports.startServe = startServe;
