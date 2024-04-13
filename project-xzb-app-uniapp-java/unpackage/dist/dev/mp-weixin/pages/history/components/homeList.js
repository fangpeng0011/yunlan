"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_commonData = require("../../../utils/commonData.js");
const _sfc_main = {
  __name: "homeList",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  emits: ["refresh"],
  setup(__props, { emit }) {
    const props = __props;
    common_vendor.onMounted(() => {
    });
    common_vendor.ref(true);
    let list = common_vendor.reactive({
      data: [
        {
          serveTypeName: "保洁服务",
          serveItemName: "空调清洗",
          serveStartTime: "2023-7-28 11:48:00",
          serveAddress: "金燕龙",
          serveFee: "666"
        }
      ]
    });
    const handleTime = (val) => {
      return val ? val.replace(/:\d{2}$/, "") : "";
    };
    const handleToInfo = (item) => {
      console.log(item, "进入详情");
      common_vendor.index.navigateTo({
        url: "/pages/orderInfo/index?id=" + item.id + "&type=history"
      });
    };
    const handleCancel = (id) => {
      console.log("fff");
      common_vendor.index.navigateTo({
        url: "/pages/cancel/index?id=" + id + "&type=list"
      });
    };
    const handleServeRecord = (id, status) => {
      common_vendor.index.navigateTo({
        url: "/pages/serveRecord/index?status=" + status + "&id=" + id + "&type=list"
      });
    };
    common_vendor.watchEffect(() => {
      list.data = props.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list).data, (item, k0, i0) => {
          return common_vendor.e({
            a: item.serveItemImg || "../../../static/new/empty.png",
            b: common_vendor.t(item.serveItemName),
            c: common_vendor.t(item.serveStatus === 1 ? "预约时间" : item.serveStatus === 2 ? "服务开始时间" : "服务完成时间"),
            d: common_vendor.t(handleTime(item.serveStatus === 1 ? item.serveStartTime : item.serveStatus === 2 ? item.realServeStartTime : item.realServeEndTime)),
            e: common_vendor.t(common_vendor.unref(utils_commonData.orderStatus).filter((item1) => item1.value === item.serveStatus).length && common_vendor.unref(utils_commonData.orderStatus).filter((item1) => item1.value === item.serveStatus)[0].label),
            f: common_vendor.n([3, 4, 5].includes(item.serveStatus) ? "gray" : ""),
            g: common_vendor.t(item.serveAddress),
            h: [1, 2].includes(item.serveStatus)
          }, [1, 2].includes(item.serveStatus) ? common_vendor.e({
            i: [1].includes(item.serveStatus)
          }, [1].includes(item.serveStatus) ? {
            j: common_vendor.o(($event) => handleCancel(item.id), item.id)
          } : {}, {
            k: [1, 2].includes(item.serveStatus)
          }, [1, 2].includes(item.serveStatus) ? {
            l: common_vendor.t(item.serveStatus === 1 ? "开始服务" : "完成服务"),
            m: common_vendor.o(($event) => handleServeRecord(item.id, item.serveStatus), item.id)
          } : {}) : {}, {
            n: item.id,
            o: common_vendor.o(($event) => handleToInfo(item), item.id)
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/history/components/homeList.vue"]]);
wx.createComponent(Component);
