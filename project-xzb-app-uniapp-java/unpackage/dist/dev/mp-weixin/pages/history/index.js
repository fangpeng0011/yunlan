"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (UniNav + common_vendor.unref(HomeList) + Empty + _easycom_uni_popup + UniFooter)();
}
const Empty = () => "../../components/empty/index.js";
const HomeList = () => "./components/homeList.js";
const UniFooter = () => "../../components/uni-footer/index.js";
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    common_vendor.useStore();
    const popup = common_vendor.ref("");
    const isHaveMore = common_vendor.ref(false);
    const icCanScroll = common_vendor.ref(true);
    const homeList = common_vendor.reactive({
      data: []
    });
    const startTime = common_vendor.ref(
      common_vendor.format(common_vendor.startOfYear(common_vendor.subYears(/* @__PURE__ */ new Date(), 1)), "yyyy-MM-dd")
    );
    const endTime = common_vendor.ref(common_vendor.format(common_vendor.endOfYear(common_vendor.subYears(/* @__PURE__ */ new Date(), 1)), "yyyy-MM-dd"));
    const scrollTop = common_vendor.ref(0);
    common_vendor.ref(null);
    common_vendor.onShow(() => {
      getListData();
    });
    const handleReset = () => {
      startTime.value = "开始时间";
      endTime.value = "结束时间";
    };
    const searchDataByTime = () => {
      if (startTime.value === "开始时间" || endTime.value === "结束时间") {
        return common_vendor.index.showToast({
          title: "请选择时间",
          duration: 1e3,
          icon: "none"
        });
      }
      homeList.data = [];
      getListData();
      popup.value.close();
    };
    const bindStartDateChange = (e) => {
      console.log(e, "eeee");
      startTime.value = e.detail.value;
    };
    const bindEndDateChange = (e) => {
      endTime.value = e.detail.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const handletTime = () => {
      popup.value.open();
    };
    const handleLoad = () => {
      if (isHaveMore.value) {
        getListData(homeList.data[homeList.data.length - 1].sortTime);
      }
    };
    const getListData = (time) => {
      const params = {
        minSortTime: startTime.value + " 00:00:00",
        maxSortTime: endTime.value + " 23:59:59",
        lastSortTime: time
      };
      if (!time)
        delete params.lastSortTime;
      pages_api_order.getHistoryOrder(params).then((res) => {
        console.log(res, homeList.data, "66666666666");
        if (res.data.length === 10) {
          isHaveMore.value = true;
        } else {
          isHaveMore.value = false;
        }
        homeList.data = homeList.data.concat(res.data);
      });
    };
    const getRobOrderList = () => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.o(handletTime),
        c: common_vendor.p({
          title: "历史订单",
          rithtText: "筛选"
        }),
        d: homeList.data.length
      }, homeList.data.length ? {
        e: common_vendor.o(getRobOrderList),
        f: common_vendor.p({
          data: homeList.data
        })
      } : {}, {
        g: common_vendor.t(startTime.value || "开始时间"),
        h: startTime.value,
        i: endTime.value,
        j: startTime.value,
        k: common_vendor.o(bindStartDateChange),
        l: common_vendor.t(endTime.value || "结束时间"),
        m: startTime.value,
        n: endTime.value,
        o: endTime.value,
        p: common_vendor.o(bindEndDateChange),
        q: common_vendor.o(handleReset),
        r: common_vendor.o(searchDataByTime),
        s: common_vendor.sr(popup, "b37acf1c-3", {
          "k": "popup"
        }),
        t: common_vendor.o(_ctx.change),
        v: common_vendor.p({
          ["background-color"]: "#fff",
          type: "bottom"
        }),
        w: icCanScroll.value,
        x: common_vendor.o((...args) => _ctx.handleScroll && _ctx.handleScroll(...args)),
        y: common_vendor.o(handleLoad),
        z: scrollTop.value,
        A: common_vendor.p({
          pagePath: "pages/pickup/index"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b37acf1c"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/history/index.vue"]]);
wx.createPage(MiniProgramPage);
