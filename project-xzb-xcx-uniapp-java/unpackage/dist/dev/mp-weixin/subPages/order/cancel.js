"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_commonData = require("../../utils/commonData.js");
const utils_index = require("../../utils/index.js");
const pages_api_order = require("../../pages/api/order.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  _component_NavBar();
}
const _sfc_main = {
  __name: "cancel",
  setup(__props) {
    common_vendor.useStore();
    const isSendRequest = common_vendor.ref(false);
    const cancelData = common_vendor.ref("");
    const orderId = common_vendor.ref(null);
    const type = common_vendor.ref(null);
    const title = common_vendor.ref("");
    const tradingOrderNo = common_vendor.ref("");
    let capsuleBottom = common_vendor.ref();
    common_vendor.onLoad((option) => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 4;
        }
      });
      orderId.value = option.id;
      tradingOrderNo.value = option.tradingOrderNo;
      type.value = option.type;
      if (type.value === "4") {
        title.value = "取消原因";
      } else {
        title.value = "退款原因";
      }
    });
    const canSubmit = common_vendor.computed(() => {
      if (cancelData.value) {
        return true;
      } else {
        return false;
      }
    });
    const radioChange = (e) => {
      cancelData.value = e.detail.value;
    };
    const handleSubmit = async () => {
      if (!isSendRequest.value) {
        isSendRequest.value = true;
        if (type.value === "4") {
          await pages_api_order.cancelOrder({
            id: orderId.value,
            cancelReason: cancelData.value
          }).then((res) => {
            if (res.data.code === 200) {
              utils_index.tostTip("取消成功");
              setTimeout(() => {
                isSendRequest.value = false;
                common_vendor.index.navigateBack({
                  delta: 1
                });
              }, 1e3);
            } else {
              isSendRequest.value = false;
              utils_index.tostTip(res.data.msg);
            }
          });
        } else {
          parent = {
            ...parent,
            tradingOrderNo: tradingOrderNo.value,
            tradingChannel: cancelData.value
          };
          await orderRefund(parent).then((res) => {
            if (res.code === 200) {
              utils_index.tostTip("提交成功");
              setTimeout(() => {
                isSendRequest.value = false;
              }, 1e3);
              common_vendor.index.navigateTo({
                url: `/subPages/order/index`
              });
            }
          });
        }
      }
    };
    const handleToLink = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: title.value,
          isShowBack: true,
          handleToLink
        }),
        b: common_vendor.f(common_vendor.unref(utils_commonData.cancelCauseData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: item.label,
            c: index
          };
        }),
        c: common_vendor.o(radioChange),
        d: common_vendor.n(common_vendor.unref(canSubmit) ? "agree-btn btn" : "disabled-btn btn"),
        e: common_vendor.o(($event) => handleSubmit()),
        f: common_vendor.unref(capsuleBottom) + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-97264757"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/order/cancel.vue"]]);
wx.createPage(MiniProgramPage);
