"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "Evaluate",
  props: {
    baseData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.baseData.score),
        b: common_vendor.t(__props.baseData.goodLevelRate)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fadf945b"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/my/commponents/Evaluate.vue"]]);
wx.createComponent(Component);
