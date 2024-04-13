"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more + EmptyPage)();
}
const EmptyPage = () => "../../../components/EmptyPage/index.js";
const _sfc_main = {
  __name: "List",
  props: {
    // 列表数据
    itemData: {
      type: Array,
      default: () => []
    },
    moreStatus: {
      type: String,
      default: "noMore"
    },
    loading: {
      type: Boolean,
      default: false
    },
    isHistory: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "handleList",
    "handleBlur"
  ],
  setup(__props, { emit }) {
    const emptyInfo = common_vendor.ref("暂无相关内容哦～");
    const contentText = common_vendor.ref({
      //加载状态说明
      contentdown: "上拉加载更多",
      contentrefresh: "努力加载中...",
      contentnomore: "- 没有更多了 -"
    });
    const handleList = (val) => {
      emit("handleBlur");
      emit("handleList", val);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.itemData.length > 0
      }, __props.itemData.length > 0 ? common_vendor.e({
        b: common_vendor.f(__props.itemData, (item, index, i0) => {
          return {
            a: "33a7a5e4-0-" + i0,
            b: common_vendor.t(item.serveItemName),
            c: index,
            d: common_vendor.o(($event) => handleList(item), index)
          };
        }),
        c: common_vendor.p({
          type: "search",
          size: "12"
        }),
        d: __props.itemData.length > 6
      }, __props.itemData.length > 6 ? {
        e: common_vendor.p({
          status: __props.moreStatus,
          ["content-text"]: contentText.value
        })
      } : {}) : {}, {
        f: __props.itemData.length === 0 && __props.loading && __props.isHistory
      }, __props.itemData.length === 0 && __props.loading && __props.isHistory ? {
        g: common_vendor.p({
          emptyInfo: emptyInfo.value
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-33a7a5e4"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/search/components/List.vue"]]);
wx.createComponent(Component);
