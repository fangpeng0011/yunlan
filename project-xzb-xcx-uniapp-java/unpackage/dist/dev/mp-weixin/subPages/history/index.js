"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const pages_api_order = require("../../pages/api/order.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_NavBar + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (HomeList + common_vendor.unref(gscosmosDateSelect) + _easycom_uni_popup)();
}
const HomeList = () => "../order/components/list.js";
const gscosmosDateSelect = () => "../../components/gscosmosDateSelect/index.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    const moreStatus = common_vendor.ref("more");
    const popup = common_vendor.ref("");
    const loading = common_vendor.ref(false);
    const isSendRequest = common_vendor.ref(false);
    const dateSelecStarttVisiable = common_vendor.ref(false);
    const dateSelecEndtVisiable = common_vendor.ref(false);
    const pages = common_vendor.ref(0);
    const homeList = common_vendor.reactive({
      data: []
    });
    const netStatus = common_vendor.ref(true);
    const startTime = common_vendor.ref(
      utils_index.formatDateTimeToDateString(
        new Date(new Date(/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 181))
      )
    );
    const endTime = common_vendor.ref(
      utils_index.formatDateTimeToDateString(
        new Date(new Date(/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 1))
      )
    );
    common_vendor.ref(0);
    common_vendor.ref(null);
    common_vendor.onShow(() => {
      homeList.data = [];
      isSendRequest.value = false;
      getNewData();
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
      } else if (new Date(endTime.value).getTime() - new Date(startTime.value).getTime() < 0) {
        return common_vendor.index.showToast({
          title: "开始时间不可大于结束时间",
          duration: 1e3,
          icon: "none"
        });
      }
      homeList.data = [];
      isSendRequest.value = false;
      getNewData();
      popup.value.close();
    };
    const handleStartTime = () => {
      dateSelecStarttVisiable.value = true;
    };
    const handleEndTime = () => {
      dateSelecEndtVisiable.value = true;
    };
    const bindStartDateChange = (e) => {
      if (new Date(endTime.value).getTime() - new Date(utils_index.formatDateTimeToDateString(new Date(e.solarDate))).getTime() > 31536e6) {
        common_vendor.index.showToast({
          title: "时间间隔不能大于365天",
          duration: 1e3,
          icon: "none"
        });
      } else {
        startTime.value = utils_index.formatDateTimeToDateString(new Date(e.solarDate));
        close();
      }
    };
    const bindEndDateChange = (e) => {
      if (new Date(utils_index.formatDateTimeToDateString(new Date(e.solarDate))).getTime() - new Date(startTime.value).getTime() > 31536e6) {
        return common_vendor.index.showToast({
          title: "时间间隔不能大于365天",
          duration: 1e3,
          icon: "none"
        });
      } else {
        endTime.value = utils_index.formatDateTimeToDateString(new Date(e.solarDate));
        close();
      }
    };
    const close = () => {
      dateSelecStarttVisiable.value = false;
      dateSelecEndtVisiable.value = false;
    };
    const handletTime = () => {
      popup.value.open();
    };
    const onReachBottom = () => {
      if (pages.value < 10) {
        moreStatus.value = "noMore";
        return false;
      } else {
        moreStatus.value = "loading";
        setTimeout(() => {
          getNewData(homeList.data[homeList.data.length - 1].sortTime);
        }, 1e3);
      }
    };
    const getNewData = async (time) => {
      const params = {
        minSortTime: startTime.value + " 00:00:00",
        maxSortTime: endTime.value + " 23:59:59"
      };
      if (time) {
        params.lastSortTime = time;
      }
      if (isSendRequest.value) {
        return;
      }
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_order.getHistoryOrder(params).then((res) => {
        if (res.data.code == 200) {
          const { data } = res.data;
          const items = data == null ? [] : data;
          moreStatus.value = items.length < 10 ? "no-more" : "more";
          homeList.data = homeList.data ? [...homeList.data, ...items] : items;
          pages.value = data.length;
          if (pages.value < 10) {
            isSendRequest.value = true;
            moreStatus.value = "noMore";
          }
          common_vendor.index.stopPullDownRefresh();
          netStatus.value = true;
          loading.value = true;
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handletTime),
        b: common_vendor.p({
          title: "历史订单",
          isShowBack: true,
          handleToLink: _ctx.handleToLink,
          isHistory: true,
          historyTime: true
        }),
        c: homeList.data.length
      }, homeList.data.length ? {
        d: common_vendor.o(_ctx.handleDelete),
        e: common_vendor.o(onReachBottom),
        f: common_vendor.p({
          itemData: homeList.data,
          loading: loading.value,
          moreStatus: moreStatus.value,
          history: true
        })
      } : {}, {
        g: common_vendor.sr(gscosmosDateSelect, "3a5c8335-2", {
          "k": "gscosmosDateSelect"
        }),
        h: common_vendor.o(bindStartDateChange),
        i: common_vendor.o(close),
        j: common_vendor.p({
          date: startTime.value,
          minYear: 1900,
          maxYear: 2100,
          timeType: "start",
          defaultValue: [new Date(startTime.value).getFullYear() - 1900, new Date(startTime.value).getMonth(), new Date(startTime.value).getDate() - 1],
          showCalendar: dateSelecStarttVisiable.value
        }),
        k: common_vendor.sr(gscosmosDateSelect, "3a5c8335-3", {
          "k": "gscosmosDateSelect"
        }),
        l: common_vendor.o(bindEndDateChange),
        m: common_vendor.o(close),
        n: common_vendor.p({
          date: endTime.value,
          minYear: 1900,
          maxYear: 2100,
          timeType: "end",
          defaultValue: [new Date(endTime.value).getFullYear() - 1900, new Date(endTime.value).getMonth(), new Date(endTime.value).getDate() - 1],
          showCalendar: dateSelecEndtVisiable.value
        }),
        o: common_vendor.t(startTime.value || "开始时间"),
        p: common_vendor.o(handleStartTime),
        q: common_vendor.t(endTime.value || "结束时间"),
        r: common_vendor.o(handleEndTime),
        s: common_vendor.o(handleReset),
        t: common_vendor.o(searchDataByTime),
        v: common_vendor.sr(popup, "3a5c8335-4", {
          "k": "popup"
        }),
        w: common_vendor.p({
          ["background-color"]: "#fff",
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3a5c8335"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/history/index.vue"]]);
wx.createPage(MiniProgramPage);
