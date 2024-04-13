"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_test = common_vendor.resolveComponent("test");
  const _component_UniFooter = common_vendor.resolveComponent("UniFooter");
  (_component_test + _component_UniFooter)();
}
if (!Math) {
  (FastMenu + MyMenu)();
}
const FastMenu = () => "./components/FastMenu.js";
const MyMenu = () => "./components/MyMenu.js";
const _sfc_main = {
  __name: "index",
  setup(__props, { expose }) {
    const store = common_vendor.useStore();
    const nickName = common_vendor.ref(null);
    const token = common_vendor.ref(null);
    let capsuleBottom = common_vendor.ref();
    common_vendor.onShow(() => {
      nickName.value = common_vendor.index.getStorageSync("nickName");
      token.value = common_vendor.index.getStorageSync("token");
    });
    common_vendor.onLoad(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 12;
        }
      });
    });
    const handleClick = () => {
      if (!token.value && !nickName.value) {
        goLogin();
      }
    };
    const handleOrder = (val) => {
      if (val != void 0) {
        store.commit("user/setOrderStatus", val);
      }
      if (!token.value && !nickName.value) {
        goLogin();
      } else {
        store.commit("user/setBackLike", "my");
        common_vendor.index.navigateTo({
          url: "/subPages/order/index"
        });
      }
    };
    const handleAddress = () => {
      if (!token.value && !nickName.value) {
        goLogin();
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/address/index?type=address&isFromAddress=true"
        });
      }
    };
    const handleCoupon = () => {
      if (!token.value && !nickName.value) {
        goLogin();
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/coupon/coupon"
        });
      }
    };
    const handleBill = () => {
      if (!token.value && !nickName.value) {
        goLogin();
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/commit/index"
        });
      }
    };
    const goLogin = () => {
      store.commit("setRouter", "pages/my/index");
      common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    };
    const handlePhone = () => {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400-000-4000"
      });
    };
    expose({});
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(token.value && nickName.value ? nickName.value : "立即登录"),
        b: common_vendor.o(handleClick),
        c: common_vendor.o(($event) => handleOrder("")),
        d: common_vendor.o(handleOrder),
        e: common_vendor.o(handleAddress),
        f: common_vendor.o(handleCoupon),
        g: common_vendor.o(handleBill),
        h: common_vendor.o(handlePhone),
        i: common_vendor.unref(capsuleBottom) + "px",
        j: common_vendor.p({
          pagePath: "/pages/my/index"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
