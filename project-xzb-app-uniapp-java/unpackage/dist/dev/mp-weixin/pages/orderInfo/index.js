"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
const utils_commonData = require("../../utils/commonData.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  props: {
    tabBars: {
      type: Array,
      default: () => []
    }
  },
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const type = common_vendor.ref("");
    let info = common_vendor.reactive({
      data: {
        serveStatus: 1,
        customerInfo: {
          serveAddress: "北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室",
          contactsName: "柯胜伦",
          contactsPhone: "17788884444"
        },
        ordersInfo: {
          serveCode: "7364734677776",
          serveStartTime: "2026.5.26 12:30"
        },
        refundInfo: {
          refundReason: "未上门服务",
          refundTime: "2026.5.26 12:30",
          refundAmount: "198"
        },
        cancelInfo: {
          cancelReason: "未上门服务",
          cancelTime: "2026.5.26 12:30"
        },
        serveInfo: {
          serveTypeName: "保洁清洗",
          serveItemName: "日常保洁",
          serveNum: "1",
          serveFee: "198",
          serveBeforeIllustrate: "服务开始说明",
          realServeStartTime: "2022-12-03  12:00",
          serveBeforeImgs: [
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
          ],
          //服务开始前照片列表
          serveAfterIllustrate: "服务结束说明",
          realServeEndTime: "2022-12-03  12:00",
          serveAfterImgs: [
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png",
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png"
          ]
          //服务结束照片列表
        }
      }
    });
    common_vendor.ref(users.tabIndex ? users.tabIndex : 0);
    common_vendor.onLoad((options) => {
      console.log(options, "options");
      type.value = options.type;
      getOrderInfoFunc(options.id);
    });
    const previewImage = (url, imgList) => {
      common_vendor.index.previewImage({
        current: url,
        // 当前显示的图片链接
        urls: imgList
        // 需要预览的图片链接列表，一般是一个数组
      });
    };
    const getOrderInfoFunc = (id) => {
      if (type.value === "dispatch") {
        pages_api_order.getDispatchOrderInfo(id).then((res) => {
          info.data = res.data;
          console.log(res.data, "获取派单订单详情");
        });
      } else if (type.value === "history") {
        pages_api_order.getHistoryOrderInfo(id).then((res) => {
          info.data = res.data;
          console.log(res.data, "获取历史订单订单详情");
        });
      } else {
        pages_api_order.getOrderInfo(id).then((res) => {
          info.data = res.data;
          console.log(res.data, "获取订单详情");
        });
      }
    };
    const handleServeRecord = (id, status) => {
      common_vendor.index.navigateTo({
        url: "/pages/serveRecord/index?id=" + id + "&type=info&status" + status
      });
    };
    const handleDelete = (id) => {
      pages_api_order.deleteOrder(id).then((res) => {
        common_vendor.index.showToast({
          title: res.msg || "删除订单成功",
          duration: 1500,
          icon: "none"
        });
        common_vendor.index.navigateBack();
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "删除订单失败",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const handleCancel = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/cancel/index?id=" + id + "&type=info"
      });
    };
    const goBack = () => {
      if (type.value === "info") {
        common_vendor.index.redirectTo({
          url: "/pages/pickup/index"
        });
      } else {
        common_vendor.index.navigateBack();
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "订单详情"
        }),
        c: common_vendor.t(common_vendor.unref(info).data.serveStatus ? common_vendor.unref(utils_commonData.orderStatus).filter((item) => item.value === common_vendor.unref(info).data.serveStatus)[0].label : "派单中"),
        d: common_vendor.unref(info).data.serveStatus === 1 || !common_vendor.unref(info).data.serveStatus
      }, common_vendor.unref(info).data.serveStatus === 1 || !common_vendor.unref(info).data.serveStatus ? {
        e: common_vendor.t(common_vendor.unref(info).data.ordersInfo.serveStartTime ? common_vendor.unref(info).data.ordersInfo.serveStartTime.replace(/:\d{2}$/, "") : "")
      } : {}, {
        f: common_vendor.n([1, 2, 3].includes(common_vendor.unref(info).data.serveStatus) || !common_vendor.unref(info).data.serveStatus ? "successStatus" : "failStatus"),
        g: common_vendor.t(common_vendor.unref(info).data.customerInfo.contactsName),
        h: common_vendor.t(common_vendor.unref(info).data.customerInfo.contactsPhone),
        i: common_vendor.t(common_vendor.unref(info).data.customerInfo.serveAddress),
        j: common_vendor.unref(info).data.serveInfo.serveItemImg || "../../static/new/empty.png",
        k: common_vendor.t(common_vendor.unref(info).data.serveInfo.serveTypeName),
        l: common_vendor.t(common_vendor.unref(info).data.serveInfo.serveItemName),
        m: common_vendor.t(common_vendor.unref(info).data.serveInfo.serveNum),
        n: common_vendor.t((Number(common_vendor.unref(info).data.ordersInfo.ordersAmount) * 0.997 * 0.3).toFixed(2)),
        o: common_vendor.t(common_vendor.unref(info).data.ordersInfo.ordersId),
        p: common_vendor.t(common_vendor.unref(info).data.ordersInfo.serveStartTime ? common_vendor.unref(info).data.ordersInfo.serveStartTime.replace(/:\d{2}$/, "") : ""),
        q: common_vendor.unref(info).data.serveStatus === 4
      }, common_vendor.unref(info).data.serveStatus === 4 ? {
        r: common_vendor.t(common_vendor.unref(info).data.cancelInfo.cancelTime),
        s: common_vendor.t(common_vendor.unref(info).data.cancelInfo.cancelReason)
      } : {}, {
        t: common_vendor.unref(info).data.serveStatus === 4
      }, common_vendor.unref(info).data.serveStatus === 4 ? {
        v: common_vendor.t(common_vendor.unref(info).data.cancelInfo.cancelTime),
        w: common_vendor.t(common_vendor.unref(info).data.cancelInfo.cancelReason)
      } : {}, {
        x: [2, 3].includes(common_vendor.unref(info).data.serveStatus)
      }, [2, 3].includes(common_vendor.unref(info).data.serveStatus) ? common_vendor.e({
        y: (common_vendor.unref(info).data.serveStatus === 2 || common_vendor.unref(info).data.serveStatus === 3) && common_vendor.unref(info).data.serveInfo.realServeStartTime
      }, (common_vendor.unref(info).data.serveStatus === 2 || common_vendor.unref(info).data.serveStatus === 3) && common_vendor.unref(info).data.serveInfo.realServeStartTime ? {
        z: common_vendor.f(common_vendor.unref(info).data.serveInfo.serveBeforeImgs, (item, index, i0) => {
          return {
            a: item,
            b: index,
            c: common_vendor.o(($event) => previewImage(item, common_vendor.unref(info).data.serveInfo.serveBeforeImgs), index)
          };
        }),
        A: common_vendor.t(common_vendor.unref(info).data.serveInfo.serveBeforeIllustrate),
        B: common_vendor.t(common_vendor.unref(info).data.serveInfo.realServeStartTime ? common_vendor.unref(info).data.serveInfo.realServeStartTime.replace(/:\d{2}$/, "") : "")
      } : {}, {
        C: common_vendor.unref(info).data.serveStatus === 3 && common_vendor.unref(info).data.serveInfo.realServeEndTime
      }, common_vendor.unref(info).data.serveStatus === 3 && common_vendor.unref(info).data.serveInfo.realServeEndTime ? {
        D: common_vendor.f(common_vendor.unref(info).data.serveInfo.serveAfterImgs, (item, index, i0) => {
          return {
            a: item,
            b: index,
            c: common_vendor.o(($event) => previewImage(item, common_vendor.unref(info).data.serveInfo.serveAfterImgs), index)
          };
        }),
        E: common_vendor.t(common_vendor.unref(info).data.serveInfo.serveAfterIllustrate),
        F: common_vendor.t(common_vendor.unref(info).data.serveInfo.realServeEndTime ? common_vendor.unref(info).data.serveInfo.realServeEndTime.replace(/:\d{2}$/, "") : "")
      } : {}) : {}, {
        G: [1, 2, 4].includes(common_vendor.unref(info).data.serveStatus)
      }, [1, 2, 4].includes(common_vendor.unref(info).data.serveStatus) ? common_vendor.e({
        H: [1].includes(common_vendor.unref(info).data.serveStatus)
      }, [1].includes(common_vendor.unref(info).data.serveStatus) ? {
        I: common_vendor.o(($event) => handleCancel(common_vendor.unref(info).data.id))
      } : {}, {
        J: [1, 2].includes(common_vendor.unref(info).data.serveStatus)
      }, [1, 2].includes(common_vendor.unref(info).data.serveStatus) ? {
        K: common_vendor.t(common_vendor.unref(info).data.serveStatus === 1 ? "开始服务" : "完成服务"),
        L: common_vendor.o(($event) => handleServeRecord(common_vendor.unref(info).data.id, common_vendor.unref(info).data.serveStatus))
      } : {}, {
        M: [4].includes(common_vendor.unref(info).data.serveStatus)
      }, [4].includes(common_vendor.unref(info).data.serveStatus) ? {
        N: common_vendor.o(($event) => handleDelete(common_vendor.unref(info).data.id))
      } : {}, {
        O: common_vendor.n([4].includes(common_vendor.unref(info).data.serveStatus) ? "end" : "")
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c0232ef0"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/orderInfo/index.vue"]]);
wx.createPage(MiniProgramPage);
