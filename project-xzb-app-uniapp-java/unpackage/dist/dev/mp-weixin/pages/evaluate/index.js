"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_commonData = require("../../utils/commonData.js");
const pages_api_order = require("../api/order.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + UniTab + common_vendor.unref(HomeList) + Empty + UniFooter)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const Empty = () => "../../components/empty/index.js";
const HomeList = () => "./components/homeList.js";
const UniFooter = () => "../../components/uni-footer/index.js";
const UniTab = () => "../../components/uni-tab/index.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const title = common_vendor.ref("我的评价");
    common_vendor.reactive({
      data: []
    });
    const requestData = common_vendor.ref({
      pageNo: 1,
      pageSize: 10
    });
    const isHaveMore = common_vendor.ref(false);
    const tabBars = utils_commonData.evaluateData;
    const icCanScroll = common_vendor.ref(true);
    const homeList = common_vendor.reactive({
      data: []
    });
    const scrollTop = common_vendor.ref(0);
    common_vendor.ref(null);
    common_vendor.onShow(() => {
      getTabIndex(users.tabIndex);
      getEvaluateListFunc();
      getOrderStatusNumFunc();
    });
    const handleLoad = () => {
      console.log("上拉加载");
      if (isHaveMore.value) {
        requestData.value.pageNo++;
        getEvaluateListFunc();
      }
    };
    const getRobOrderList = () => {
    };
    const scrollToTop = () => {
      scrollTop.value = scrollTop.value === 0 ? 1 : 0;
    };
    const getTabIndex = (index) => {
      scrollToTop();
      store.commit("user/setTabIndex", index);
      homeList.data = [];
      if (index === 0) {
        requestData.value = {
          pageNo: 1,
          pageSize: 10
        };
      } else {
        requestData.value = {
          pageNo: 1,
          pageSize: 10,
          scoreLevel: tabBars[index].value
        };
      }
      homeList.data = [];
      getEvaluateListFunc();
    };
    const getEvaluateListFunc = () => {
      pages_api_order.getEvaluateList(requestData.value).then((res) => {
        console.log(res, "获取评价列表");
        if (res.code === 200) {
          homeList.data = res.data;
          if (res.data.length < requestData.value.pageSize) {
            isHaveMore.value = false;
          } else {
            isHaveMore.value = true;
          }
        }
      });
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.o(getTabIndex),
        d: common_vendor.p({
          tabBars: common_vendor.unref(tabBars)
        }),
        e: homeList.data.length
      }, homeList.data.length ? {
        f: common_vendor.o(getRobOrderList),
        g: common_vendor.p({
          data: homeList.data
        })
      } : {}, {
        h: icCanScroll.value,
        i: common_vendor.o((...args) => _ctx.handleScroll && _ctx.handleScroll(...args)),
        j: common_vendor.o(handleLoad),
        k: scrollTop.value,
        l: common_vendor.p({
          pagePath: "pages/pickup/index"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2cd4902b"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/evaluate/index.vue"]]);
wx.createPage(MiniProgramPage);
