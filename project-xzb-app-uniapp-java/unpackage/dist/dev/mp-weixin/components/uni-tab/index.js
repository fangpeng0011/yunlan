"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  _easycom_uni_badge2();
}
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
if (!Math) {
  _easycom_uni_badge();
}
const _sfc_main = {
  __name: "index",
  props: {
    tabBars: {
      type: Array,
      default: () => []
    },
    statusNum: {
      type: Array,
      default: () => []
    },
    isShowHistory: {
      type: Boolean,
      default: false
    }
  },
  emits: "",
  setup(__props, { expose, emit }) {
    const props = __props;
    const store = common_vendor.useStore();
    const statusNum = common_vendor.reactive({
      data: []
    });
    const users = store.state.user;
    const scrollinto = common_vendor.ref("tab0");
    let tabIndex = common_vendor.ref(users.tabIndex ? users.tabIndex : 0);
    const changeTab = (index) => {
      if (tabIndex.value == index) {
        return;
      }
      tabIndex.value = index;
      emit("getTabIndex", index);
      scrollinto.value = "tab" + index;
    };
    const handleToHistory = () => {
      common_vendor.index.navigateTo({
        url: "/pages/history/index"
      });
    };
    common_vendor.watchEffect(() => {
      statusNum.data = props.statusNum;
    });
    expose({
      changeTab
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isShowHistory
      }, __props.isShowHistory ? {
        b: common_vendor.o(handleToHistory)
      } : {}, {
        c: common_vendor.f(__props.tabBars, (item, index, i0) => {
          return common_vendor.e({
            a: statusNum.data[index] != "0"
          }, statusNum.data[index] != "0" ? {
            b: common_vendor.t(item.label),
            c: common_vendor.n(common_vendor.unref(tabIndex) == index ? "scroll-row-item-act" : ""),
            d: "756e9aca-0-" + i0,
            e: common_vendor.p({
              text: statusNum.data[index],
              absolute: "rightTop",
              offset: [-8, 3],
              size: "small"
            })
          } : {
            f: common_vendor.t(item.label),
            g: common_vendor.n(common_vendor.unref(tabIndex) == index ? "scroll-row-item-act" : "")
          }, {
            h: index,
            i: "tab" + index,
            j: common_vendor.n(common_vendor.unref(tabIndex) == index ? "badge-act" : ""),
            k: common_vendor.o(($event) => changeTab(index), index)
          });
        }),
        d: scrollinto.value
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/components/uni-tab/index.vue"]]);
wx.createComponent(Component);
