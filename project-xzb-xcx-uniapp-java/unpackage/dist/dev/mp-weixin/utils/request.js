"use strict";
const common_vendor = require("../common/vendor.js");
const utils_env = require("./env.js");
function request({
  url = "/api",
  params = {},
  method = "GET"
}) {
  const token = common_vendor.index.getStorageSync("token");
  let header = {
    // 'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": token
  };
  const requestConfig = {
    url: utils_env.baseUrl + url,
    data: params,
    header,
    method
  };
  const requestRes = new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...requestConfig,
      success: (res) => {
        const {
          data
        } = res;
        resolve(res);
        if (data.code == 0 || data.code == 200) {
          resolve(res.data);
        } else if (res.data.code === 605) {
          if (getCurrentPages()[getCurrentPages().length - 1].route !== "pages/login/index") {
            setTimeout(() => {
              common_vendor.index.navigateTo({
                url: `/pages/login/index?isLogin=1&reason=${res.data.msg}`
              });
            }, 2e3);
          }
        }
        {
          resolve(res.data);
          handleError(res, resolve, url);
        }
      },
      fail: (err) => {
        const error = {
          data: {
            msg: err.data
          }
        };
        console.log(err);
        reject(error);
      }
    });
  });
  const handleError = (error, resolve, url2) => {
    var errorCode = error.statusCode;
    if (errorCode == 401) {
      common_vendor.index.removeStorageSync("token");
      common_vendor.index.removeStorageSync("nickName");
      if (!utils_env.notToLoginApiUrl.includes(url2)) {
        common_vendor.index.showToast({
          title: "请先登录",
          icon: "none",
          duration: 1e4,
          success: () => {
            setTimeout(() => {
              common_vendor.index.navigateTo({
                url: "/pages/login/index"
              });
            }, 2e3);
          },
          fail: () => {
          }
        });
      }
    } else if (errorCode == 500) {
      if (common_vendor.index.getStorageSync("token") == "") {
        common_vendor.index.showToast({
          title: "请先登录",
          icon: "none",
          duration: 2e3,
          success: () => {
          },
          fail: () => {
          }
        });
      } else {
        common_vendor.index.showToast({
          title: error.data.error.message + "",
          icon: "none",
          duration: 1e4
        });
      }
    } else {
      resolve(error);
    }
  };
  return requestRes;
}
exports.request = request;
