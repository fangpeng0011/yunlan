"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "FastMenu",
  emits: ["handleOrder"],
  setup(__props, { emit }) {
    const handleOrder = (val) => {
      emit("handleOrder", val);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => handleOrder(0)),
        b: common_vendor.o(($event) => handleOrder(200)),
        c: common_vendor.o(($event) => handleOrder(300)),
        d: common_vendor.o(($event) => handleOrder(400))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/my/components/FastMenu.vue"]]);
wx.createComponent(Component);
