"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_nav_bar + UniNav + common_vendor.unref(HomeFilter) + common_vendor.unref(HomeList) + Empty + UniFooter)();
}
const UniNav = () => "../../components/uni-home-nav/index.js";
const UniFooter = () => "../../components/uni-footer/index.js";
const Empty = () => "../../components/empty/index.js";
const HomeFilter = () => "./components/homeFilter.js";
const HomeList = () => "./components/homeList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const fixTop = common_vendor.ref(false);
    const icCanScroll = common_vendor.ref(true);
    const orderType = common_vendor.ref(0);
    const serveId = common_vendor.ref("");
    let homeFilterList = common_vendor.reactive({
      data: []
    });
    let homeList = common_vendor.reactive({
      data: []
    });
    common_vendor.onMounted(() => {
      getList();
      getHomeFilterList();
    });
    common_vendor.onShow(() => {
      getList();
    });
    common_vendor.onPullDownRefresh(() => {
      getList();
      setTimeout(function() {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
      console.log("refresh");
    });
    const tabChange = (val, id) => {
      orderType.value = val;
      serveId.value = id;
      getList();
    };
    const getList = () => {
      if (!orderType.value) {
        getRobOrderList(serveId.value);
      } else {
        getDispatchList(serveId.value);
      }
    };
    const getDispatchList = (params) => {
      pages_api_order.getDispatchOrder(params).then((res) => {
        homeList.data = res.data.list || [];
        console.log(res, homeList.data, "派单");
      });
    };
    const getRobOrderList = (params) => {
      pages_api_order.getRobOrder(params).then((res) => {
        homeList.data = res.data.ordersSeizes || [];
        console.log(res, homeList.data, "抢单");
      });
    };
    const getHomeFilterList = () => {
      pages_api_order.getHomeFilter().then((res) => {
        homeFilterList.data = res.data;
      });
    };
    const handleCanScroll = (val) => {
      console.log(val, "是否可滑动");
      icCanScroll.value = !val;
    };
    const handleScroll = (e) => {
      if (e.detail.scrollTop > 188) {
        fixTop.value = true;
      } else {
        fixTop.value = false;
      }
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          statusBar: "true",
          backgroundColor: "#F74347"
        }),
        b: common_vendor.o(goBack),
        c: common_vendor.o(handleCanScroll),
        d: common_vendor.o(getList),
        e: common_vendor.o(tabChange),
        f: common_vendor.p({
          homeFilterList: common_vendor.unref(homeFilterList).data,
          fixTop: fixTop.value
        }),
        g: fixTop.value
      }, fixTop.value ? {
        h: common_vendor.o(getList),
        i: common_vendor.o(tabChange),
        j: common_vendor.p({
          homeFilterList: common_vendor.unref(homeFilterList).data
        })
      } : {}, {
        k: common_vendor.unref(homeList).data.length
      }, common_vendor.unref(homeList).data.length ? {
        l: common_vendor.o(getList),
        m: common_vendor.p({
          data: common_vendor.unref(homeList).data,
          type: orderType.value
        })
      } : {}, {
        n: icCanScroll.value,
        o: common_vendor.o(handleScroll),
        p: common_vendor.p({
          pagePath: "pages/index/index"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
