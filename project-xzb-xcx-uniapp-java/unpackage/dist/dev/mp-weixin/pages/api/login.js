"use strict";
const utils_request = require("../../utils/request.js");
const login = (params) => utils_request.request({
  url: `/customer/open/login/common/user`,
  method: "post",
  params
});
exports.login = login;
