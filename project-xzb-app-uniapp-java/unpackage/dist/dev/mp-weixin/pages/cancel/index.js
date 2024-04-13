"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
const utils_commonData = require("../../utils/commonData.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (UniNav + _easycom_uni_popup + _easycom_uni_popup_dialog)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("取消原因");
    const alertDialog = common_vendor.ref(null);
    const noCancelDialog = common_vendor.ref(null);
    const content = common_vendor.ref("");
    let cancel = common_vendor.ref(null);
    const orderId = common_vendor.ref("");
    const from = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      orderId.value = options.id;
      from.value = options.type;
      title.value = from.value === "dispatch" ? "拒单原因" : "取消原因";
      console.log(options, "取消订单");
    });
    const handleCause = (value) => {
      cancel.value = value;
      console.log(value, "----------");
    };
    const openPhone = () => {
      alertDialog.value.open();
      close();
    };
    const close = () => {
      noCancelDialog.value.close();
    };
    const handleClose = () => {
      alertDialog.value.close();
    };
    const makePhoneCall = () => {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400-000-4000"
        //仅为示例，并非真实的电话号码
      });
    };
    const handleSubmit = () => {
      if (from.value === "dispatch") {
        handleRejectSubmit();
      } else {
        handleCancelSubmit();
      }
    };
    const handleCancelSubmit = async () => {
      if (cancel.value) {
        common_vendor.index.showLoading({
          title: "loading"
        });
        const params = {
          id: orderId.value,
          cancelReason: utils_commonData.cancelData.filter((item) => item.value === cancel.value)[0].label
        };
        await pages_api_order.cancelOrder(params).then((res) => {
          console.log(res, "fuckkkkkk");
          if (res.code === 200) {
            setTimeout(function() {
              common_vendor.index.hideLoading();
            }, 500);
            clearTimeout(times);
            if (from.value === "list") {
              goBack();
            } else {
              common_vendor.index.navigateTo({
                url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
              });
            }
            cancel.value = "";
            orderId.value = "";
            return common_vendor.index.showToast({
              title: "取消成功!",
              duration: 1e3,
              icon: "none"
            });
          } else {
            common_vendor.index.hideLoading();
            return common_vendor.index.showToast({
              title: res.msg || "请求失败",
              duration: 1e3,
              icon: "none"
            });
          }
        }).catch((err) => {
          common_vendor.index.hideLoading();
          if (err.code == 607) {
            noCancelDialog.value.open();
            content.value = err.msg || "取消失败";
          } else {
            common_vendor.index.showToast({
              title: err.msg || "请求失败",
              duration: 1e3,
              icon: "none"
            });
          }
        });
      } else {
        return common_vendor.index.showToast({
          title: "请选择取消原因!",
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const handleRejectSubmit = async () => {
      if (cancel.value) {
        common_vendor.index.showLoading({
          title: "loading"
        });
        const params = {
          id: orderId.value,
          rejectReason: utils_commonData.cancelData.filter((item) => item.value === cancel.value)[0].label
        };
        await pages_api_order.rejectOrder(params).then((res) => {
          console.log(res, "res");
          if (res.code === 200) {
            common_vendor.index.hideLoading();
            if (from.value === "list" || from.value === "dispatch") {
              goBack();
            } else {
              common_vendor.index.navigateTo({
                url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
              });
            }
            cancel.value = "";
            orderId.value = "";
            return common_vendor.index.showToast({
              title: "拒单成功!",
              duration: 1e3,
              icon: "none"
            });
          }
        }).catch((err) => {
          common_vendor.index.hideLoading();
          return common_vendor.index.showToast({
            title: err.msg || "请求失败",
            duration: 1e3,
            icon: "none"
          });
        });
      } else {
        return common_vendor.index.showToast({
          title: "请选择拒绝原因!",
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.f(common_vendor.unref(utils_commonData.cancelData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: item.value === common_vendor.unref(cancel),
            c: common_vendor.o(($event) => handleCause(item.value), index),
            d: index
          };
        }),
        d: common_vendor.o(handleSubmit),
        e: common_vendor.o(makePhoneCall),
        f: common_vendor.o(handleClose),
        g: common_vendor.sr(alertDialog, "35babf6b-1", {
          "k": "alertDialog"
        }),
        h: common_vendor.p({
          type: "bottom",
          ["is-mask-click"]: false
        }),
        i: common_vendor.t(content.value),
        j: common_vendor.o(close),
        k: common_vendor.o(openPhone),
        l: common_vendor.p({
          mode: "base",
          content: "当前不可自行取消订单，如需取消需拨打客服热线400-000-4000",
          title: " ",
          animation: false,
          ["before-close"]: true,
          confirmText: "联系客服",
          cancelText: "我知道了"
        }),
        m: common_vendor.sr(noCancelDialog, "35babf6b-2", {
          "k": "noCancelDialog"
        }),
        n: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-35babf6b"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/cancel/index.vue"]]);
wx.createPage(MiniProgramPage);
