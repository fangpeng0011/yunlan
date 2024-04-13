"use strict";
const common_vendor = require("../common/vendor.js");
function request({ url = "", params = {}, method = "GET" }) {
  let baseUrl = "http://localhost:11500";
  const token = common_vendor.index.getStorageSync("token");
  let header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: token
  };
  if (url == "/track/upload") {
    header["Content-Type"] = "application/x-www-form-urlencoded";
  }
  const requestRes = new Promise((resolve, reject) => {
    console.log(params, baseUrl + url, "进来了么");
    common_vendor.index.request({
      url: baseUrl + url,
      data: params,
      header,
      method,
      sslVerify: false
    }).then((res) => {
      console.log(params, url, res, "header");
      const { data } = res;
      if (res.statusCode == 401) {
        common_vendor.index.showToast({
          title: "您的登录已过期！请重新登录后操作！",
          duration: 2e3,
          icon: "none"
        });
        common_vendor.index.redirectTo({
          url: "/pages/login/user"
        });
        return false;
      }
      let routes = getCurrentPages();
      if (data.code == 605 && routes[routes.length - 1].route !== "pages/login/user") {
        common_vendor.index.removeStorageSync("token");
        common_vendor.index.navigateTo({
          url: "/pages/login/user"
        });
      }
      if (data.code == 0 || data.code == 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch((err) => {
      console.log(err, "errr");
      const error = { data: { msg: err.data } };
      reject(error);
    });
  });
  return requestRes;
}
exports.request = request;
