"use strict";
const utils_request = require("../../utils/request.js");
const getServeCategory = (params) => {
  return utils_request.request({
    url: "/foundations/customer/serve/serveTypeList",
    method: "get",
    params
  });
};
const getServeList = (params) => {
  return utils_request.request({
    url: "/foundations/customer/serve/search",
    method: "get",
    params
  });
};
const getServeById = (id) => {
  return utils_request.request({
    url: `/foundations/customer/serve/${id}`,
    method: "get"
  });
};
const addOrder = (params) => {
  return utils_request.request({
    url: `/orders-manager/consumer/orders/place`,
    method: "post",
    params
  });
};
const getEvaluate = () => {
  return utils_request.request({
    url: `/customer/consumer/evaluation/findAllSystemInfo`,
    method: "get"
  });
};
exports.addOrder = addOrder;
exports.getEvaluate = getEvaluate;
exports.getServeById = getServeById;
exports.getServeCategory = getServeCategory;
exports.getServeList = getServeList;
