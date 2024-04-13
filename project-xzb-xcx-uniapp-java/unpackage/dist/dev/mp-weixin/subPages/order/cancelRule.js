"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  _component_NavBar();
}
const _sfc_main = {
  __name: "cancelRule",
  setup(__props) {
    const time = common_vendor.ref();
    const handleToLink = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    common_vendor.onLoad((options) => {
      time.value = options.time;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "规则说明",
          isShowBack: true,
          handleToLink
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-452e4489"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/order/cancelRule.vue"]]);
wx.createPage(MiniProgramPage);
