"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "MyMenu",
  emits: ["handleAddress", "handleBill"],
  setup(__props, { emit }) {
    const handleAddress = () => {
      emit("handleAddress");
    };
    const handleCoupon = () => {
      emit("handleCoupon");
    };
    const handleBill = () => {
      emit("handleBill");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleAddress),
        b: common_vendor.o(handleBill),
        c: common_vendor.o(handleCoupon)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/my/components/MyMenu.vue"]]);
wx.createComponent(Component);
