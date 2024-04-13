"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "BaseInfo",
  props: {
    baseData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.baseData.avatar === ""
      }, __props.baseData.avatar === "" ? {} : {
        b: __props.baseData.avatar || "../../../static/new/empty.png"
      }, {
        c: common_vendor.t(__props.baseData.name || "吴彦祖"),
        d: common_vendor.t(__props.baseData.phone || "177 9987 8876")
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d4d52b02"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/my/commponents/BaseInfo.vue"]]);
wx.createComponent(Component);
