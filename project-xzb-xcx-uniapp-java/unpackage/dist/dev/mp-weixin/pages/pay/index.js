"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
const utils_index = require("../../utils/index.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_NavBar + _easycom_uni_data_checkbox2 + _easycom_uni_popup2)();
}
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_data_checkbox + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    store.state.user;
    const rocallTime = common_vendor.ref("");
    const times = common_vendor.ref(null);
    const netStatus = common_vendor.ref(true);
    const radio1 = common_vendor.ref([1]);
    const radio2 = common_vendor.ref([0]);
    const popup = common_vendor.ref(null);
    let capsuleBottom = common_vendor.ref();
    const price = common_vendor.ref(0);
    const id = common_vendor.ref("");
    const qrCodeImg = common_vendor.ref("");
    const isback = common_vendor.ref(false);
    const tradingChannel = common_vendor.ref("WECHAT_PAY");
    const historyChanel = common_vendor.ref("");
    const payNum = common_vendor.ref(0);
    const rocallStatus = common_vendor.ref();
    const cheapPrice = common_vendor.ref(0);
    const range = common_vendor.ref([
      {
        text: "",
        value: 1
      }
    ]);
    common_vendor.onLoad((option) => {
      clearInterval(rocallStatus.value);
      id.value = option.id;
      price.value = Number(option.price);
      cheapPrice.value = Number(option.cheapPrice);
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 10;
        }
      });
    });
    const getNative = async () => {
      qrCodeImg.value = "";
      await pages_api_order.payOrder(
        {
          tradingChannel: tradingChannel.value
        },
        id.value
      ).then((res) => {
        if (res.data.code === 200) {
          if (res.data.data.payStatus === 4) {
            common_vendor.index.showToast({
              title: "支付成功",
              icon: "none",
              duration: 2e3
            });
            setTimeout(() => {
              handleClickPay();
            }, 2e3);
          } else {
            popup.value.open();
            qrCodeImg.value = res.data.data.qrCode;
            historyChanel.value = tradingChannel.value;
            payNum.value += 1;
          }
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    const getTradeImg = async () => {
      getNative();
    };
    const handleClickPayResult = async () => {
      await pages_api_order.getOrderPayResult(id.value).then((res) => {
        if (res.data.code === 200) {
          if (res.data.data.payStatus === 4) {
            common_vendor.index.showToast({
              title: "支付成功",
              icon: "none",
              duration: 2e3
            });
            setTimeout(() => {
              handleClickPay();
            }, 2e3);
          } else {
            common_vendor.index.showToast({
              title: "支付失败",
              icon: "none",
              duration: 2e3
            });
          }
        }
      });
    };
    common_vendor.onShow((e) => {
      let time = getCurrentPages()[getCurrentPages().length - 1].options.time;
      runTimeBack(time == null ? void 0 : time.replace(/-/g, "/"));
    });
    const runTimeBack = (val) => {
      const end = Date.parse(new Date(val));
      const now = Date.parse(/* @__PURE__ */ new Date());
      const m15 = 15 * 60 * 1e3;
      let msec = m15 - (now - end);
      const time = utils_index.formatDuringToTime(msec);
      times.value = time;
      rocallTime.value = setInterval(() => {
        if (msec > 0) {
          msec -= 1e3;
          times.value = utils_index.formatDuringToTime(msec);
        } else {
          clearInterval(rocallTime.value);
          handleToOrder();
        }
      }, 1e3);
    };
    const payChange = (val) => {
      if (val === 1) {
        if (radio1.value.length > 0) {
          radio2.value = [];
          tradingChannel.value = "WECHAT_PAY";
        }
      } else {
        if (radio2.value.length > 0) {
          radio1.value = [];
          tradingChannel.value = "ALI_PAY";
        }
      }
    };
    const handleToOrder = () => {
      clearInterval(rocallStatus.value);
      store.commit("user/setOrderStatus", "");
      store.commit("user/setBackLike", "pay");
      common_vendor.index.navigateTo({
        url: "/subPages/order/index"
      });
    };
    const handleToLink = () => {
      clearInterval(rocallStatus.value);
      isback.value = true;
      store.commit("user/setBackLike", "back");
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const handleClickPay = () => {
      common_vendor.index.navigateTo({
        url: "/pages/pay/components/paySuccessful"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "支付订单",
          isShowBack: true,
          handleToLink
        }),
        b: netStatus.value
      }, netStatus.value ? common_vendor.e({
        c: common_vendor.t(times.value),
        d: common_vendor.t(price.value),
        e: cheapPrice.value !== 0
      }, cheapPrice.value !== 0 ? {
        f: common_vendor.t(cheapPrice.value == 0 ? 0 : cheapPrice.value.toFixed(2))
      } : {}, {
        g: common_vendor.t((price.value - cheapPrice.value).toFixed(2)),
        h: common_vendor.o(($event) => payChange(1)),
        i: common_vendor.o(($event) => radio1.value = $event),
        j: common_vendor.p({
          multiple: true,
          localdata: range.value,
          modelValue: radio1.value
        }),
        k: common_vendor.o(($event) => payChange(2)),
        l: common_vendor.o(($event) => radio2.value = $event),
        m: common_vendor.p({
          multiple: true,
          localdata: range.value,
          modelValue: radio2.value
        }),
        n: common_vendor.t((price.value - cheapPrice.value).toFixed(2)),
        o: common_vendor.o(getTradeImg)
      }) : {}, {
        p: qrCodeImg.value,
        q: common_vendor.o(handleClickPayResult),
        r: common_vendor.sr(popup, "d7fd7b38-3", {
          "k": "popup"
        }),
        s: common_vendor.p({
          ["is-mask-click"]: true,
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d7fd7b38"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/pay/index.vue"]]);
wx.createPage(MiniProgramPage);
