"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_api_order = require("../../api/order.js");
require("../../../index.scss_vue_type_style_index_0_src_true_lang.js");
require("../../../utils/request.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "homeList",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    type: {
      type: Number
    }
  },
  emits: ["refresh"],
  setup(__props, { emit }) {
    const props = __props;
    const isRob = common_vendor.ref(true);
    let list = common_vendor.reactive({
      data: []
    });
    const orderType = common_vendor.ref(null);
    const alertDialog = common_vendor.ref(null);
    const msg = common_vendor.ref("");
    const handleToInfo = (item) => {
      console.log(item, "进入详情");
    };
    const handleRejectOrder = (id) => {
      console.log("点击了拒单");
      common_vendor.index.navigateTo({
        url: "/pages/cancel/index?id=" + id + "&type=dispatch"
      });
    };
    const handleReceiveOrder = (id) => {
      pages_api_order.receiveOrder({
        id
      }).then((res) => {
        console.log(res, "接单");
        if (res.code === 200) {
          common_vendor.index.showToast({
            title: "接单成功!",
            duration: 1e3,
            icon: "none"
          });
          emit("refresh");
        } else {
          common_vendor.index.showToast({
            title: "接单失败!",
            duration: 1e3,
            icon: "none"
          });
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "接单失败!",
          duration: 1e3,
          icon: "none"
        });
        console.log(err, "接单失败");
      });
    };
    const handleClose = () => {
      alertDialog.value.close();
      emit("refresh");
    };
    const handleTime = (val) => {
      return val ? val.replace(/:\d{2}$/, "") : "";
    };
    const handleRob = (id) => {
      pages_api_order.robOrder({
        id
      }).then((res) => {
        console.log(res, "抢单");
        if (res.code === 200) {
          isRob.value = true;
        } else {
          isRob.value = false;
        }
        alertDialog.value.open();
      }).catch((err) => {
        if (err.code === 608) {
          isRob.value = false;
          msg.value = err.msg;
          alertDialog.value.open();
        } else {
          common_vendor.index.showToast({
            title: err.msg || "接单失败!",
            duration: 1e3,
            icon: "none"
          });
        }
        console.log(err, "errrrr");
      });
    };
    common_vendor.watchEffect(() => {
      list.data = props.data;
      orderType.value = props.type;
      console.log(list.data, props, "++++++++++++++");
    });
    common_vendor.watch(
      () => props.type,
      () => {
        console.log(props.type, "=================");
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list).data, (item, index, i0) => {
          return common_vendor.e({
            a: item.serveItemImg,
            b: common_vendor.t(item.serveItemName),
            c: common_vendor.t(handleTime(item.serveStartTime)),
            d: common_vendor.t(item.serveAddress),
            e: common_vendor.t((Number(item.ordersAmount) * 0.997 * 0.3).toFixed(2))
          }, !orderType.value ? {
            f: common_vendor.o(($event) => handleRob(item.id), index)
          } : {
            g: common_vendor.o(($event) => handleRejectOrder(item.id), index),
            h: common_vendor.o(($event) => handleReceiveOrder(item.id), index)
          }, {
            i: index,
            j: common_vendor.o(($event) => handleToInfo(item), index)
          });
        }),
        b: !orderType.value,
        c: common_vendor.n(isRob.value ? "success" : "fail"),
        d: common_vendor.t(isRob.value ? "抢单成功" : msg.value ? msg.value : "很遗憾，抢单失败"),
        e: common_vendor.o(handleClose),
        f: common_vendor.sr(alertDialog, "350329b6-0", {
          "k": "alertDialog"
        }),
        g: common_vendor.p({
          type: "dialog",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/index/components/homeList.vue"]]);
wx.createComponent(Component);
