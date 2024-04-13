"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = {
  __name: "index",
  props: {
    title: {
      type: String,
      default: ""
    },
    rithtText: {
      type: String,
      default: ""
    },
    isLeftText: {
      type: Boolean
    }
  },
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    users.taskStatus;
    const goBack = () => {
      emit("goBack");
    };
    const handleAll = () => {
      emit("handleAll");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isLeftText
      }, __props.isLeftText ? {
        b: common_vendor.p({
          title: __props.title,
          statusBar: "true",
          fixed: "true"
        })
      } : {
        c: common_vendor.o(goBack),
        d: common_vendor.o(handleAll),
        e: common_vendor.p({
          ["left-icon"]: "back",
          leftIcon: "arrowleft",
          title: __props.title,
          statusBar: "true",
          fixed: "true",
          ["right-text"]: __props.rithtText
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e45a3f8"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/components/uni-nav/index.vue"]]);
wx.createComponent(Component);
