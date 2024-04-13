"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_login = require("../api/login.js");
const pages_api_address = require("../api/address.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (NavBar + _easycom_uni_popup)();
}
const NavBar = () => "../../components/Navbar/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const list = common_vendor.ref([]);
    const router = common_vendor.ref(store.state.router);
    const reason = common_vendor.ref("");
    const popup = common_vendor.ref();
    const currentCity = common_vendor.ref();
    const position = common_vendor.ref();
    const alertDialog = common_vendor.ref(null);
    common_vendor.onLoad((option) => {
      if (option.isLogin == 1) {
        setTimeout(() => {
          reason.value = option.reason;
          alertDialog.value.open();
        }, 200);
      }
    });
    const getWarpWeft = () => {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: function(res) {
          position.value = res;
          getCity(position.value);
        },
        fail: function(res) {
          common_vendor.index.navigateTo({
            url: "/pages/index/index"
          });
        }
      });
    };
    const getCity = (position2) => {
      let params = {
        location: position2.longitude + "," + position2.latitude
      };
      pages_api_address.getAddress(params).then((res) => {
        if (res.data.code === 200) {
          currentCity.value = res.data.data;
          AreaConfig(currentCity.value);
          common_vendor.index.navigateTo({
            url: "/pages/index/index"
          });
        }
      });
    };
    const handleOpen = () => {
      popup.value.open();
    };
    const decryptPhoneNumber = (e) => {
      handleClose();
      console.log(e, "e");
      common_vendor.wx$1.login({
        success(res) {
          common_vendor.index.getUserInfo({
            success(val) {
              pages_api_login.login({
                code: res.code,
                avatar: "https://yjy-oss-videos.oss-accelerate.aliyuncs.com/tx.png",
                nickname: val.userInfo.nickName
              }).then((res2) => {
                if (res2.data.code === 200) {
                  common_vendor.index.setStorageSync("token", res2.data.data.token);
                  common_vendor.index.setStorageSync("nickName", val.userInfo.nickName);
                  getOpenCityList();
                  getWarpWeft();
                  if (router.value) {
                    common_vendor.index.redirectTo({
                      url: "/" + router.value
                    });
                  }
                } else if (res2.data.code === 605) {
                  reason.value = res2.data.msg;
                  alertDialog.value.open();
                }
              });
            }
          });
        }
      });
    };
    const AreaConfig = (val) => {
      const currentCity2 = list.value.filter((item) => {
        return item.cityCode === val.cityCode;
      });
      if (currentCity2.length === 0) {
        let cityData = val;
        cityData.name = val.province && val.city ? val.city : val.province;
        common_vendor.index.setStorageSync("city", cityData);
        return;
      }
      common_vendor.index.setStorageSync("city", currentCity2[0]);
    };
    const getOpenCityList = () => {
      pages_api_address.getCityList().then((res) => {
        if (res.data.code === 200) {
          list.value = res.data.data;
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none"
          });
        }
      });
    };
    const handleClose = () => {
      popup.value.close();
      alertDialog.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "登录",
          isShowBack: false
        }),
        b: common_vendor.o(handleOpen),
        c: common_vendor.o(handleClose),
        d: common_vendor.o(handleClose),
        e: common_vendor.o(decryptPhoneNumber),
        f: common_vendor.sr(popup, "d08ef7d4-1", {
          "k": "popup"
        }),
        g: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false,
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        }),
        h: common_vendor.t(reason.value),
        i: common_vendor.o(handleClose),
        j: common_vendor.sr(alertDialog, "d08ef7d4-2", {
          "k": "alertDialog"
        }),
        k: common_vendor.p({
          type: "dialog",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
