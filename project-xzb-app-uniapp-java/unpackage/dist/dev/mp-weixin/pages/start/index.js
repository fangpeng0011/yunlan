"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "StarPage",
  setup: (props) => {
    common_vendor.onMounted(() => {
      const times = setTimeout(() => {
        common_vendor.index.redirectTo({
          url: "/pages/login/user"
        });
        clearTimeout(times);
      }, 3e3);
    });
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-255b53b3"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/start/index.vue"]]);
wx.createPage(MiniProgramPage);
