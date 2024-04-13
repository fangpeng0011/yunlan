"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_user = require("../api/user.js");
require("../../utils/request.js");
if (!Math) {
  (BaseInfo + Evaluate + HistoryScope + UniFooter)();
}
const UniFooter = () => "../../components/uni-footer/index.js";
const BaseInfo = () => "./commponents/BaseInfo.js";
const Evaluate = () => "./commponents/Evaluate.js";
const HistoryScope = () => "./commponents/HistoryScope.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const baseData = common_vendor.ref(common_vendor.index.getStorageSync("userInfo"));
    common_vendor.onMounted(() => {
      getUser();
    });
    const getUser = async () => {
      await pages_api_user.getUserInfo().then((res) => {
        if (res.code === 200) {
          console.log(res.data, "用户信息");
          baseData.value = res.data;
          common_vendor.index.setStorageSync("userInfo", res.data);
        }
      });
    };
    const handleOut = () => {
      common_vendor.index.removeStorageSync("token");
      store.commit("setFootStatus", 0);
      common_vendor.index.redirectTo({
        url: "/pages/login/user"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          baseData: baseData.value
        }),
        b: common_vendor.p({
          baseData: baseData.value
        }),
        c: common_vendor.o(handleOut),
        d: common_vendor.p({
          pagePath: "pages/my/index"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
