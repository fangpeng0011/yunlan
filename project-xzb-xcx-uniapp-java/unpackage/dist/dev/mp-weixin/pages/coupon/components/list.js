"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_index = require("../../../utils/index.js");
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
    couponTabData: {
      type: Array,
      default: () => []
    },
    type: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "setTabIndex",
    "onReachBottom",
    "handleDelete",
    "addCoupons"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const activeIndex = common_vendor.ref(1);
    const emptyInfo = common_vendor.ref("暂无优惠券");
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
        success: () => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 12;
        }
      });
      let pages = getCurrentPages();
      pagesCount.value = pages.length;
    });
    common_vendor.watch(
      () => props.itemData,
      (newVal) => {
        if (newVal.length > 0) {
          emptyInfo.value = "暂无优惠券";
        } else {
          emptyInfo.value = "暂无优惠券";
        }
      }
    );
    const changeTab = (index) => {
      if (activeIndex.value == index) {
        return;
      }
      activeIndex.value = index;
      emit("setTabIndex", index);
    };
    const handleAddCoupon = (val) => {
      emit("addCoupons", val);
    };
    common_vendor.onReachBottom(() => {
      emit("onReachBottom");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(__props.couponTabData, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(activeIndex.value === item.value ? "active" : ""),
            c: common_vendor.o(($event) => changeTab(item.value), index),
            d: index
          };
        }),
        b: common_vendor.n(activeIndex.value === "" ? "active" : ""),
        c: common_vendor.f(__props.itemData, (item, index, i0) => {
          return common_vendor.e({
            a: item.type === 1
          }, item.type === 1 ? {} : {}, {
            b: common_vendor.t(item.type === 1 ? Number(item.discountAmount).toFixed(0) : common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).integer),
            c: item.type === 2
          }, item.type === 2 ? {
            d: common_vendor.t(common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).decimal)
          } : {}, {
            e: item.type === 2
          }, item.type === 2 ? {} : {}, activeIndex.value === 1 && __props.type === 1 ? {
            f: common_vendor.t(item.remainNum > 0 ? "立即领取" : "已抢光"),
            g: common_vendor.n(item.remainNum > 0 ? "" : "reButton"),
            h: common_vendor.o(($event) => handleAddCoupon(item.id), index)
          } : {}, {
            i: common_vendor.n(item.remainNum <= 0 && item.remainNum !== null ? "reLeft" : ""),
            j: common_vendor.t(item.name),
            k: item.type === 1
          }, item.type === 1 ? common_vendor.e({
            l: Number(item.amountCondition).toFixed(0) == 0
          }, Number(item.amountCondition).toFixed(0) == 0 ? {} : {
            m: common_vendor.t(Number(item.amountCondition).toFixed(0))
          }, {
            n: common_vendor.t(Number(item.discountAmount).toFixed(0))
          }) : {}, {
            o: item.type === 2
          }, item.type === 2 ? common_vendor.e({
            p: Number(item.amountCondition).toFixed(0) == 0
          }, Number(item.amountCondition).toFixed(0) == 0 ? {} : {
            q: common_vendor.t(Number(item.amountCondition).toFixed(0))
          }, {
            r: common_vendor.t(common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).integer)
          }) : {}, __props.type == 1 ? {
            s: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateString)(new Date(item.distributeStartTime.replace(/-/g, "/")))),
            t: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateString)(new Date(item.distributeEndTime.replace(/-/g, "/"))))
          } : {
            v: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateString)(new Date(item.validityTime.replace(/-/g, "/"))))
          }, __props.type !== 1 && activeIndex.value == 2 ? {} : {}, __props.type !== 1 && activeIndex.value == 3 ? {} : {}, {
            w: index
          });
        }),
        d: activeIndex.value === 1 && __props.type === 1,
        e: common_vendor.n(__props.type !== 1 && activeIndex.value !== 1 ? "grey left" : "left"),
        f: __props.type == 1,
        g: __props.type !== 1 && activeIndex.value == 2,
        h: __props.type !== 1 && activeIndex.value == 3,
        i: __props.itemData.length > 6
      }, __props.itemData.length > 6 ? {
        j: common_vendor.p({
          status: __props.moreStatus,
          ["content-text"]: contentText.value
        })
      } : {}, {
        k: __props.itemData.length === 0 && __props.loading
      }, __props.itemData.length === 0 && __props.loading ? {
        l: common_vendor.p({
          emptyInfo: emptyInfo.value
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c17e8ced"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/coupon/components/list.vue"]]);
wx.createComponent(Component);
