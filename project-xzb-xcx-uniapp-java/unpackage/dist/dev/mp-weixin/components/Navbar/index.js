"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    title: {
      type: String,
      default: ""
    },
    handleToLink: {
      //用于自定义跳转
      type: Function
    },
    src: {
      type: String,
      default: "../../static/goBack.png"
    },
    isShowBack: {
      type: Boolean
    },
    historyTime: {
      type: Boolean,
      default: false
    },
    isHistory: {
      type: Boolean
    }
  },
  emits: ["transferHeight", "handletTime"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let deviceNavHeight = common_vendor.ref();
    let capsuleTop = common_vendor.ref();
    let capsuleBottom = common_vendor.ref();
    let all = common_vendor.ref();
    const historytime = common_vendor.ref(props.historyTime);
    let capsuleHeight = common_vendor.ref();
    common_vendor.onLoad(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          deviceNavHeight.value = res.statusBarHeight;
          capsuleTop.value = common_vendor.index.getMenuButtonBoundingClientRect().top;
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom;
          all.value = capsuleTop.value + capsuleBottom.value - deviceNavHeight.value + "px";
          capsuleHeight.value = common_vendor.index.getMenuButtonBoundingClientRect().height;
          emits("transferHeight", all.value);
        }
      });
    });
    const handleTo = () => {
      if (props.handleToLink) {
        props.handleToLink();
      } else {
        common_vendor.index.navigateBack();
      }
    };
    const handleToHistory = () => {
      if (props.historyTime === false) {
        common_vendor.index.navigateTo({
          url: "/subPages/history/index"
        });
      } else {
        emits("handletTime");
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: __props.isShowBack
      }, __props.isShowBack ? {
        c: __props.src,
        d: common_vendor.o(handleTo)
      } : {}, {
        e: __props.isHistory && historytime.value !== true
      }, __props.isHistory && historytime.value !== true ? {
        f: common_vendor.o(handleToHistory)
      } : {}, {
        g: __props.isHistory && historytime.value === true
      }, __props.isHistory && historytime.value === true ? {
        h: common_vendor.o(handleToHistory)
      } : {}, {
        i: common_vendor.unref(capsuleTop) + "px",
        j: common_vendor.unref(capsuleHeight) + "px",
        k: common_vendor.unref(all)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4fdf528"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/components/Navbar/index.vue"]]);
wx.createComponent(Component);
