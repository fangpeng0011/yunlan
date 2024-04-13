"use strict";
const utils_request = require("../../utils/request.js");
const getHomeService = (params) => {
  return utils_request.request({
    url: `/foundations/customer/serve/firstPageServeList`,
    method: "get",
    params
  });
};
const getHotServe = (params) => {
  return utils_request.request({
    url: `/foundations/customer/serve/hotServeList`,
    method: "get",
    params
  });
};
const getServeSearch = (params) => {
  return utils_request.request({
    url: `/foundations/customer/serve/search`,
    method: "get",
    params
  });
};
exports.getHomeService = getHomeService;
exports.getHotServe = getHotServe;
exports.getServeSearch = getServeSearch;
