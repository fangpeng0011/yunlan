"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "index",
  props: {
    // 是否显示
    activeCoupon: {
      type: Object
    },
    couponList: {
      type: Array
    }
  },
  emits: ["handleSelectCoupon"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const popup = common_vendor.ref();
    const itemData = common_vendor.ref([]);
    const activeId = common_vendor.ref(1);
    const activeData = common_vendor.ref({});
    common_vendor.watch(
      () => props.couponList,
      (val) => {
        itemData.value = val;
      }
    );
    common_vendor.watch(
      () => props.activeCoupon,
      (val) => {
        activeId.value = (val == null ? void 0 : val.id) ? val == null ? void 0 : val.id : 1;
      }
    );
    const handleOpen = () => {
      popup.value.open("bottom");
    };
    const handleCancel = () => {
      popup.value.close("bottom");
    };
    const handleActive = (val) => {
      if (val.id === activeId.value) {
        activeId.value = 1;
        activeData.value = {};
        return;
      }
      activeId.value = val.id;
      activeData.value = val;
    };
    const handleSub = () => {
      emits("handleSelectCoupon", activeData.value);
    };
    expose({
      handleOpen,
      handleCancel
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleCancel),
        b: common_vendor.f(itemData.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.type === 1
          }, item.type === 1 ? {} : {}, {
            b: common_vendor.t(item.type === 1 ? Number(item.discountAmount).toFixed(0) : common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).integer),
            c: item.type === 2
          }, item.type === 2 ? {
            d: common_vendor.t(common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).decimal)
          } : {}, {
            e: item.type === 2
          }, item.type === 2 ? {} : {}, {
            f: common_vendor.t(item.name),
            g: item.type === 1
          }, item.type === 1 ? common_vendor.e({
            h: Number(item.amountCondition).toFixed(0) == 0
          }, Number(item.amountCondition).toFixed(0) == 0 ? {} : {
            i: common_vendor.t(Number(item.amountCondition).toFixed(0))
          }, {
            j: common_vendor.t(Number(item.discountAmount).toFixed(0))
          }) : {}, {
            k: item.type === 2
          }, item.type === 2 ? common_vendor.e({
            l: Number(item.amountCondition).toFixed(0) == 0
          }, Number(item.amountCondition).toFixed(0) == 0 ? {} : {
            m: common_vendor.t(Number(item.amountCondition).toFixed(0))
          }, {
            n: common_vendor.t(common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).integer),
            o: common_vendor.t(common_vendor.unref(utils_index.convertDiscountPercentageToNumber)(Number(item.discountRate)).decimal)
          }) : {}, {
            p: common_vendor.n(activeId.value === item.id ? "active" : "checkbox"),
            q: common_vendor.o(($event) => handleActive(item), index),
            r: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateString)(new Date(item.validityTime.replace(/-/g, "/")))),
            s: index
          });
        }),
        c: common_vendor.o(handleSub),
        d: common_vendor.sr(popup, "e0e8622a-0", {
          "k": "popup"
        }),
        e: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false,
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e0e8622a"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/components/couponSelect/index.vue"]]);
wx.createComponent(Component);
