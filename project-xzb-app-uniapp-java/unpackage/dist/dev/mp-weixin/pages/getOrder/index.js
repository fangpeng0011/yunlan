"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const canPickUp = common_vendor.ref(false);
    common_vendor.onShow(() => {
      getSetting();
    });
    const handlePickUpStatus = () => {
      pages_api_setting.setPickUpStatus({
        canPickUp: canPickUp.value ? 0 : 1
      }).then((res) => {
        if (res.code == 200) {
          getSetting();
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "接口调用失败",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const getSetting = () => {
      pages_api_setting.getUserSetting().then((res) => {
        if (res.code == 200) {
          canPickUp.value = res.data.canPickUp;
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "接口调用失败",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "接单设置"
        }),
        c: common_vendor.o(handlePickUpStatus),
        d: canPickUp.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2eafd06a"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/getOrder/index.vue"]]);
wx.createPage(MiniProgramPage);
