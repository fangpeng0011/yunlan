"use strict";
const utils_request = require("../../utils/request.js");
const getUserSetting = (params) => utils_request.request({
  url: `/customer/worker/serve-settings/status`,
  method: "get",
  params
});
const setPickUpStatus = (params) => utils_request.request({
  url: `/customer/worker/serve-settings/pick-up`,
  method: "put",
  params
});
const getServiceSkillAll = (params) => utils_request.request({
  url: `/customer/worker/serve-skill/category`,
  method: "get",
  params
});
const updateServiceSkill = (params) => utils_request.request({
  url: `/customer/worker/serve-skill/batchUpsert`,
  method: "post",
  params
});
const getSettingInfo = (params) => utils_request.request({
  url: `/customer/worker/serve-settings`,
  method: "get",
  params
});
const getOpenCity = (params) => utils_request.request({
  url: `/foundations/worker/region/activeRegionList`,
  method: "get",
  params
});
const setServiceSetting = (params) => utils_request.request({
  url: `/customer/worker/serve-settings/serve-scope`,
  method: "put",
  params
});
const postAuth = (params) => utils_request.request({
  url: `/customer/worker/worker-certification-audit`,
  method: "post",
  params
});
const getAuthFail = () => utils_request.request({
  url: `/customer/worker/worker-certification-audit/rejectReason`,
  method: "get"
});
const postAccount = (params) => utils_request.request({
  url: `/customer/worker/bank-account`,
  method: "post",
  params
});
const getAccountInfo = () => utils_request.request({
  url: `/customer/worker/bank-account/currentUserBankAccount`,
  method: "get"
});
exports.getAccountInfo = getAccountInfo;
exports.getAuthFail = getAuthFail;
exports.getOpenCity = getOpenCity;
exports.getServiceSkillAll = getServiceSkillAll;
exports.getSettingInfo = getSettingInfo;
exports.getUserSetting = getUserSetting;
exports.postAccount = postAccount;
exports.postAuth = postAuth;
exports.setPickUpStatus = setPickUpStatus;
exports.setServiceSetting = setServiceSetting;
exports.updateServiceSkill = updateServiceSkill;
