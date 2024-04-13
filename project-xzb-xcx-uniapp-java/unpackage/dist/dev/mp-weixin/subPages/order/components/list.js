"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_index = require("../../../utils/index.js");
const utils_commonData = require("../../../utils/commonData.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_load_more + EmptyPage)();
}
const EmptyPage = () => "../../../components/EmptyPage/index.js";
const _sfc_main = {
  __name: "list",
  props: {
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
    history: {
      type: Boolean,
      default: false
    }
  },
  emits: ["setTabIndex", "onReachBottom", "handleDelete"],
  setup(__props, { emit }) {
    const props = __props;
    const store = common_vendor.useStore();
    const users = store.state.user;
    const activeIndex = common_vendor.ref(users.orderStatus === "" ? 7 : users.orderStatus);
    common_vendor.ref("tab0");
    const emptyInfo = common_vendor.ref("暂无订单哦~");
    const contentText = common_vendor.ref({
      //加载状态说明
      contentdown: "上拉加载更多",
      contentrefresh: "努力加载中...",
      contentnomore: "- 没有更多了 -"
    });
    const pagesCount = common_vendor.ref(null);
    let capsuleBottom = common_vendor.ref();
    common_vendor.onLoad(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 12;
        }
      });
      let pages = getCurrentPages();
      pagesCount.value = pages.length;
    });
    const changeTab = (index) => {
      if (activeIndex.value == index) {
        return;
      }
      activeIndex.value = index;
      emit("setTabIndex", index);
    };
    const handlePay = (val) => {
      let cheapPrice = 0;
      cheapPrice = val.price - val.realPayAmount;
      common_vendor.index.navigateTo({
        url: "/pages/pay/index?id=" + val.id + "&price=" + val.price + "&time=" + val.createTime + "&cheapPrice=" + cheapPrice
      });
    };
    const handleDetail = (id) => {
      if (props.history === true) {
        common_vendor.index.navigateTo({
          url: `/subPages/history/details?id=${id}&type=history`
        });
      } else {
        common_vendor.index.navigateTo({
          url: `/subPages/order/details?id=${id}&type=order`
        });
      }
    };
    const handleEvaluation = (val) => {
      common_vendor.index.navigateTo({
        url: `/subPages/order/components/evaluate?id=${val.id}&type=order`
      });
    };
    common_vendor.onReachBottom(() => {
      emit("onReachBottom");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.history !== true
      }, __props.history !== true ? {
        b: common_vendor.f(common_vendor.unref(utils_commonData.orderTabData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(activeIndex.value === item.value ? "active" : ""),
            c: common_vendor.o(($event) => changeTab(item.value), index),
            d: index
          };
        }),
        c: common_vendor.n(activeIndex.value === "" ? "active" : "")
      } : {}, {
        d: common_vendor.f(__props.itemData, (item, index, i0) => {
          var _a;
          return common_vendor.e({
            a: item.serveItemImg,
            b: common_vendor.t(item.serveItemName),
            c: item.ordersStatus === 0
          }, item.ordersStatus === 0 ? {} : {}, {
            d: item.ordersStatus === 100
          }, item.ordersStatus === 100 ? {} : {}, {
            e: item.ordersStatus === 200
          }, item.ordersStatus === 200 ? {} : {}, {
            f: item.ordersStatus === 300
          }, item.ordersStatus === 300 ? {} : {}, {
            g: item.ordersStatus === 400
          }, item.ordersStatus === 400 ? {} : {}, {
            h: item.ordersStatus === 500
          }, item.ordersStatus === 500 ? {} : {}, {
            i: item.ordersStatus === 600
          }, item.ordersStatus === 600 ? {} : {}, {
            j: item.ordersStatus === 700
          }, item.ordersStatus === 700 ? {} : {}, {
            k: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_a = item.serveStartTime) == null ? void 0 : _a.replace(/-/g, "/")))),
            l: common_vendor.o(($event) => handleDetail(item.id), index),
            m: common_vendor.t(item.serveAddress),
            n: item.ordersStatus === 0 || item.ordersStatus === 400
          }, item.ordersStatus === 0 || item.ordersStatus === 400 ? common_vendor.e({
            o: item.ordersStatus === 0
          }, item.ordersStatus === 0 ? {
            p: common_vendor.t(item.realPayAmount)
          } : {}, {
            q: item.ordersStatus === 0
          }, item.ordersStatus === 0 ? {
            r: common_vendor.o(($event) => handlePay(item), index)
          } : {}, {
            s: item.ordersStatus === 400
          }, item.ordersStatus === 400 ? {
            t: common_vendor.o(($event) => handleEvaluation(item), index)
          } : {}) : {}, {
            v: index
          });
        }),
        e: __props.itemData.length > 6
      }, __props.itemData.length > 6 ? {
        f: common_vendor.p({
          status: __props.moreStatus,
          ["content-text"]: contentText.value
        })
      } : {}, {
        g: __props.itemData.length === 0 && __props.loading
      }, __props.itemData.length === 0 && __props.loading ? {
        h: common_vendor.p({
          emptyInfo: emptyInfo.value
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7028db16"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/order/components/list.vue"]]);
wx.createComponent(Component);
