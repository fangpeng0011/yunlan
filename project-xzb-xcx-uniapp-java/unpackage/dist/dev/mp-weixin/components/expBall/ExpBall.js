"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "ExpBall",
  setup(__props) {
    const t = common_vendor.ref(0);
    const l = common_vendor.ref(0);
    const expTop = common_vendor.ref(300);
    const expLeft = common_vendor.ref(300);
    common_vendor.ref();
    const coupon = common_vendor.ref();
    const show = common_vendor.ref(true);
    const downExp = (e) => {
      e.preventDefault();
      t.value = e.touches[0].clientY - expTop.value;
      l.value = e.touches[0].clientX - expLeft.value;
    };
    const moveExp = (e) => {
      expTop.value = e.touches[0].clientY - t.value;
      expLeft.value = e.touches[0].clientX - l.value;
    };
    const handleClickCoupon = () => {
      coupon.value.open();
      show.value = false;
    };
    const handleToCoupon = () => {
      common_vendor.index.navigateTo({
        url: "/pages/coupon/index"
      });
    };
    const handleClose = () => {
      coupon.value.close();
      show.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: show.value,
        b: `${expTop.value}px`,
        c: `${expLeft.value}px`,
        d: common_vendor.o(downExp),
        e: common_vendor.o(moveExp),
        f: common_vendor.o(handleClickCoupon),
        g: common_vendor.o(handleToCoupon),
        h: common_vendor.o(handleClose),
        i: common_vendor.sr(coupon, "c0c40837-0", {
          "k": "coupon"
        }),
        j: common_vendor.o(handleClose),
        k: common_vendor.p({
          type: "center",
          ["background-color"]: "transparent",
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c0c40837"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/components/expBall/ExpBall.vue"]]);
wx.createComponent(Component);
