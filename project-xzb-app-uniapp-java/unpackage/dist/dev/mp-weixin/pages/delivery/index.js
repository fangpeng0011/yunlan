"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  UniFooter();
}
const UniFooter = () => "../../components/uni-footer/index.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    common_vendor.ref();
    const list = common_vendor.ref();
    common_vendor.ref();
    common_vendor.ref();
    let tabIndex = common_vendor.ref(0);
    common_vendor.ref(true);
    common_vendor.ref(false);
    common_vendor.reactive(/* @__PURE__ */ new Map());
    common_vendor.onMounted(() => {
      if (users.tabIndex) {
        tabIndex.value = users.tabIndex;
      }
      if (users.tabIndex === 0) {
        list.value.dealPList();
      } else {
        list.value.alreadList();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          pagePath: "pages/delivery/index"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-87751f05"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/delivery/index.vue"]]);
wx.createPage(MiniProgramPage);
