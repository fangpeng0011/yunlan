"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const pages_api_order = require("../../pages/api/order.js");
const utils_commonData = require("../../utils/commonData.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_component_NavBar + _easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_popup_dialog)();
}
const _sfc_main = {
  __name: "details",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const isSendRequest = common_vendor.ref(false);
    const baseData = common_vendor.ref({
      nursingProjectVo: {},
      elderVo: {}
    });
    const orderId = common_vendor.ref(null);
    const times = common_vendor.ref(null);
    const rocallTime = common_vendor.ref(null);
    const alertDialog = common_vendor.ref(null);
    let capsuleBottom = common_vendor.ref();
    const content = common_vendor.ref("");
    const typeVal = common_vendor.ref(users.backLink);
    const isback = common_vendor.ref(false);
    const noCancelDialog = common_vendor.ref(null);
    const popup = common_vendor.ref(null);
    common_vendor.onLoad((option) => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 10;
        }
      });
      orderId.value = option.id;
    });
    common_vendor.onShow(() => {
      getDetail();
    });
    common_vendor.onUnmounted(() => {
      clearInterval(rocallTime.value);
    });
    const getDetail = async () => {
      await pages_api_order.getOrderDetail(orderId.value).then((res) => {
        if (res.data.code === 200) {
          baseData.value = res.data.data;
          if (isSendRequest.value === false) {
            runTimeBack(baseData.value.createTime);
          }
        }
      });
    };
    const handleCancel = () => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const time = new Date(baseData.value.serveStartTime.replace(/-/g, "/")).getTime() - now;
      if (time < 2 * 60 * 60 * 1e3 && baseData.value.ordersStatus !== 100 && baseData.value.ordersStatus !== 0) {
        content.value = "当前不可自行取消订单， 如需取消需拨打客服热线 400-000-4000";
        noCancelDialog.value.open();
      } else {
        handleNavigate(orderId.value, 4);
      }
    };
    const handleNavigate = (id, num) => {
      common_vendor.index.navigateTo({
        url: `/subPages/order/cancel?id=${id}&type=` + num
      });
    };
    const handlePay = (val) => {
      let cheapPrice = 0;
      cheapPrice = val.price - val.realPayAmount;
      common_vendor.index.navigateTo({
        url: "/pages/pay/index?id=" + val.id + "&time=" + val.createTime + "&price=" + val.price + "&cheapPrice=" + cheapPrice
      });
    };
    const handleRefund = () => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const time = now - new Date(baseData.value.serveActualEndTime.replace(/-/g, "/")).getTime();
      if (time > 15 * 24 * 60 * 1e3) {
        content.value = "抱歉，您的服务项目已超出退款申请时效";
        noCancelDialog.value.open();
      } else {
        alertDialog.value.open();
      }
    };
    const runTimeBack = (val) => {
      const end = Date.parse(val.replace(/-/g, "/"));
      const now = Date.parse(/* @__PURE__ */ new Date());
      const m15 = 15 * 60 * 1e3;
      let msec = m15 - (now - end);
      const time = utils_index.formatDuring(msec);
      times.value = time;
      rocallTime.value = setInterval(() => {
        if (msec > 0) {
          msec -= 1e3;
          times.value = utils_index.formatDuring(msec);
        } else {
          clearInterval(rocallTime.value);
          isSendRequest.value = true;
          if (isSendRequest.value) {
            getDetail();
          }
        }
      }, 1e3);
    };
    const handleToLink = () => {
      isback.value = true;
      if (typeVal.value === "back" || typeVal.value === "detail" || typeVal.value === "goods" || typeVal.value === "home") {
        common_vendor.index.redirectTo({
          url: `/subPages/order/index`
        });
      } else {
        common_vendor.index.navigateBack({
          delta: 1
        });
      }
    };
    const handleToCancelRule = () => {
      let time = "";
      time = utils_index.formatDateTimeToDateTimeString(
        new Date(utils_index.laterTime(baseData.value.serveStartTime.replace(/-/g, "/"), 2, 1))
      );
      common_vendor.index.navigateTo({
        url: `/subPages/order/cancelRule?id=${orderId.value}&type=1&&time=${time}`
      });
    };
    const handleTranslate = () => {
      common_vendor.index.navigateTo({
        url: `/subPages/order/components/evaluate?id=${orderId.value}`
      });
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
    const close = () => {
      popup.value.close();
      noCancelDialog.value.close();
    };
    const handleDelete = () => {
      popup.value.open();
    };
    const confirm = () => {
      popup.value.close();
      pages_api_order.deleteOrder(baseData.value.id).then((res) => {
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "删除成功",
          icon: "success",
          duration: 1e3
        });
      }).catch((err) => {
        console.log(err);
        common_vendor.index.showToast({
          title: "删除失败",
          icon: "none",
          duration: 1e3
        });
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.p({
          title: "订单详情",
          isShowBack: true,
          handleToLink
        }),
        b: baseData.value.ordersStatus === 0
      }, baseData.value.ordersStatus === 0 ? {
        c: common_vendor.t(times.value)
      } : {}, {
        d: baseData.value.ordersStatus === 100
      }, baseData.value.ordersStatus === 100 ? {} : {}, {
        e: baseData.value.ordersStatus === 200
      }, baseData.value.ordersStatus === 200 ? common_vendor.e({
        f: baseData.value.serverName
      }, baseData.value.serverName ? {
        g: common_vendor.t(baseData.value.serverName)
      } : {}) : {}, {
        h: baseData.value.ordersStatus === 300
      }, baseData.value.ordersStatus === 300 ? {} : {}, {
        i: baseData.value.ordersStatus === 400
      }, baseData.value.ordersStatus === 400 ? {} : {}, {
        j: baseData.value.ordersStatus === 500
      }, baseData.value.ordersStatus === 500 ? {} : {}, {
        k: baseData.value.ordersStatus === 600
      }, baseData.value.ordersStatus === 600 ? {
        l: common_vendor.t(baseData.value.cancelReason)
      } : {}, {
        m: baseData.value.ordersStatus === 700
      }, baseData.value.ordersStatus === 700 ? {} : {}, {
        n: baseData.value.serveItemImg,
        o: common_vendor.t(baseData.value.serveTypeName),
        p: common_vendor.t(baseData.value.serveItemName),
        q: common_vendor.t(baseData.value.purNum),
        r: common_vendor.t((_a = common_vendor.unref(utils_commonData.UNIT)[baseData.value.unit - 1]) == null ? void 0 : _a.label),
        s: common_vendor.t(baseData.value.price),
        t: baseData.value.price - baseData.value.realPayAmount > 0
      }, baseData.value.price - baseData.value.realPayAmount > 0 ? {
        v: common_vendor.t((baseData.value.price - baseData.value.realPayAmount).toFixed(2))
      } : {}, {
        w: common_vendor.t(baseData.value.ordersStatus === 0 ? "待付款金额" : "实际支付"),
        x: common_vendor.t(baseData.value.realPayAmount),
        y: common_vendor.n(baseData.value.ordersStatus === 0 ? "font-col" : ""),
        z: baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700
      }, baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700 ? common_vendor.e({
        A: baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700
      }, baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700 ? {} : {}, {
        B: common_vendor.o(handleToCancelRule)
      }) : {}, {
        C: baseData.value.ordersStatus === 0 || baseData.value.ordersStatus === 600 || baseData.value.ordersStatus === 300 || baseData.value.ordersStatus === 200 && baseData.value.payStatus !== 300 || baseData.value.ordersStatus === 100
      }, baseData.value.ordersStatus === 0 || baseData.value.ordersStatus === 600 || baseData.value.ordersStatus === 300 || baseData.value.ordersStatus === 200 && baseData.value.payStatus !== 300 || baseData.value.ordersStatus === 100 ? common_vendor.e({
        D: baseData.value.serverName && baseData.value.ordersStatus === 200 || baseData.value.ordersStatus === 300 || baseData.value.payStatus == 300 || baseData.value.payStatus == 400
      }, baseData.value.serverName && baseData.value.ordersStatus === 200 || baseData.value.ordersStatus === 300 || baseData.value.payStatus == 300 || baseData.value.payStatus == 400 ? {
        E: common_vendor.t(baseData.value.serverName)
      } : {}, {
        F: baseData.value.payStatus == 0 || baseData.value.payStatus == 1 || baseData.value.ordersStatus === 200 || baseData.value.ordersStatus == 300 || baseData.value.ordersStatus == 600
      }, baseData.value.payStatus == 0 || baseData.value.payStatus == 1 || baseData.value.ordersStatus === 200 || baseData.value.ordersStatus == 300 || baseData.value.ordersStatus == 600 ? {
        G: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date(baseData.value.serveStartTime.replace(/-/g, "/"))))
      } : {}, {
        H: common_vendor.t(baseData.value.serveAddress),
        I: common_vendor.t(baseData.value.contactsName),
        J: common_vendor.t(baseData.value.contactsPhone)
      }) : {}, {
        K: baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700
      }, baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700 ? common_vendor.e({
        L: common_vendor.t(baseData.value.cancelTime ? common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_b = baseData.value.cancelTime) == null ? void 0 : _b.replace(/-/g, "/"))) : ""),
        M: common_vendor.t(baseData.value.cancelReason),
        N: baseData.value.ordersStatus === 700
      }, baseData.value.ordersStatus === 700 ? {
        O: common_vendor.t(baseData.value.realPayAmount ? `￥${baseData.value.realPayAmount}` : "")
      } : {}) : {}, {
        P: baseData.value.ordersStatus === 500 || baseData.value.ordersStatus === 400
      }, baseData.value.ordersStatus === 500 || baseData.value.ordersStatus === 400 ? common_vendor.e({
        Q: baseData.value.serverName
      }, baseData.value.serverName ? {
        R: common_vendor.t(baseData.value.serverName)
      } : {}, {
        S: baseData.value.serveActualEndTime
      }, baseData.value.serveActualEndTime ? {
        T: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date(baseData.value.serveActualEndTime.replace(/-/g, "/"))))
      } : {}, {
        U: common_vendor.t(baseData.value.serveAddress),
        V: common_vendor.t(baseData.value.contactsName),
        W: common_vendor.t(baseData.value.contactsPhone)
      }) : {}, {
        X: common_vendor.t(baseData.value.id),
        Y: baseData.value.createTime
      }, baseData.value.createTime ? {
        Z: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date(baseData.value.createTime.replace(/-/g, "/"))))
      } : {}, {
        aa: baseData.value.ordersStatus !== 300
      }, baseData.value.ordersStatus !== 300 ? common_vendor.e({
        ab: baseData.value.ordersStatus === 0 || baseData.value.ordersStatus === 100 || baseData.value.ordersStatus === 200
      }, baseData.value.ordersStatus === 0 || baseData.value.ordersStatus === 100 || baseData.value.ordersStatus === 200 ? {
        ac: common_vendor.o(handleCancel)
      } : {}, {
        ad: baseData.value.ordersStatus === 0
      }, baseData.value.ordersStatus === 0 ? {
        ae: common_vendor.o(($event) => handlePay(baseData.value))
      } : {}, {
        af: baseData.value.ordersStatus === 400
      }, baseData.value.ordersStatus === 400 ? {
        ag: common_vendor.o(handleRefund)
      } : {}, {
        ah: baseData.value.ordersStatus === 400
      }, baseData.value.ordersStatus === 400 ? {
        ai: common_vendor.o(handleTranslate)
      } : {}, {
        aj: baseData.value.ordersStatus === 500
      }, baseData.value.ordersStatus === 500 ? {
        ak: common_vendor.o(handleRefund)
      } : {}, {
        al: baseData.value.ordersStatus === 600 || baseData.value.ordersStatus === 700
      }, baseData.value.ordersStatus === 600 || baseData.value.ordersStatus === 700 ? {
        am: common_vendor.o(handleDelete)
      } : {}) : {}, {
        an: common_vendor.o(makePhoneCall),
        ao: common_vendor.o(handleClose),
        ap: common_vendor.sr(alertDialog, "efbca6f1-1", {
          "k": "alertDialog"
        }),
        aq: common_vendor.p({
          ["mask-background-color"]: "rgba(0,0,0,0.6)",
          type: "bottom",
          ["is-mask-click"]: false
        }),
        ar: common_vendor.t(content.value),
        as: common_vendor.o(close),
        at: common_vendor.o(makePhoneCall),
        av: common_vendor.p({
          mode: "base",
          content: "当前不可自行取消订单，如需取消需拨打客服热线400-000-4000",
          title: " ",
          animation: false,
          ["before-close"]: true,
          confirmText: "联系客服",
          cancelText: "我知道了"
        }),
        aw: common_vendor.sr(noCancelDialog, "efbca6f1-2", {
          "k": "noCancelDialog"
        }),
        ax: common_vendor.p({
          ["is-mask-click"]: false,
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        }),
        ay: common_vendor.o(close),
        az: common_vendor.o(confirm),
        aA: common_vendor.p({
          mode: "base",
          content: "确定删除此条订单？",
          animation: false,
          ["before-close"]: true
        }),
        aB: common_vendor.sr(popup, "efbca6f1-4", {
          "k": "popup"
        }),
        aC: common_vendor.p({
          type: "dialog",
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efbca6f1"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/order/details.vue"]]);
wx.createPage(MiniProgramPage);
