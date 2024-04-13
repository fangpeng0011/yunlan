"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "HistoryScope",
  setup(__props) {
    common_vendor.useStore();
    const handleAccount = () => {
      common_vendor.index.navigateTo({
        url: "/pages/account/index"
      });
    };
    const handleHistory = () => {
      common_vendor.index.navigateTo({
        url: "/pages/evaluate/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleHistory),
        b: common_vendor.o(handleAccount)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efd76cc3"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/my/commponents/HistoryScope.vue"]]);
wx.createComponent(Component);
