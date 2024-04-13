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
    const title = common_vendor.ref("实名认证");
    const reason = common_vendor.ref("");
    common_vendor.onMounted(() => {
      pages_api_setting.getAuthFail().then((res) => {
        reason.value = res.data.rejectReason;
      });
    });
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const toAuth = () => {
      common_vendor.index.navigateTo({
        url: "/pages/auth/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.t(reason.value),
        d: common_vendor.o(toAuth)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14a9d75c"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/authFail/index.vue"]]);
wx.createPage(MiniProgramPage);
