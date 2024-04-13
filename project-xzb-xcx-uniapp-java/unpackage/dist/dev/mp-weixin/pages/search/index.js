"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_index = require("../api/index.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_net_fail = common_vendor.resolveComponent("net-fail");
  (_component_NavBar + _easycom_uni_icons2 + _component_net_fail)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + List + DeletePopup)();
}
const List = () => "./components/List.js";
const DeletePopup = () => "../../components/Operate/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const deleteRef = common_vendor.ref(null);
    const itemData = common_vendor.ref([]);
    const moreStatus = common_vendor.ref("more");
    const netStatus = common_vendor.ref(true);
    const isHistory = common_vendor.ref(false);
    const loading = common_vendor.ref(false);
    const searchData = common_vendor.ref({
      cityCode: common_vendor.index.getStorageSync("city").cityCode,
      serveTypeId: "",
      keyword: ""
    });
    let pageNum = common_vendor.ref(1);
    const pages = common_vendor.ref(0);
    const showClearIcon = common_vendor.ref(false);
    let capsuleBottom = common_vendor.ref();
    const searchHistoryData = common_vendor.ref([]);
    const errorTipText = common_vendor.ref({
      title: "",
      text: "确定要全部清空吗？"
    });
    common_vendor.onLoad((option) => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 10;
        }
      });
      if (option.name !== void 0 && option.name !== "") {
        searchData.value.keyword = option.name;
        showClearIcon.value = true;
        getNewData();
      }
    });
    common_vendor.onShow((e) => {
      searchHistoryData.value = common_vendor.index.getStorageSync("historyData").slice(0, 10);
    });
    const getNewData = async () => {
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_index.getServeSearch(searchData.value).then((res) => {
        if (res.data.code == 200) {
          const { data } = res.data;
          itemData.value = data;
          common_vendor.index.stopPullDownRefresh();
          netStatus.value = true;
          loading.value = true;
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg,
          duration: 1e3,
          icon: "none"
        });
        netStatus.value = false;
      });
    };
    const handleSearch = () => {
      getNewData();
      isHistory.value = true;
    };
    const handleBlur = (e) => {
      let text = searchData.value.keyword;
      text = text == null ? void 0 : text.replace(/\s*/g, "");
      let arr = [];
      if (text !== "") {
        if (searchHistoryData.value.includes(text)) {
          let i = searchHistoryData.value.indexOf(text);
          searchHistoryData.value.splice(i, 1);
        }
        arr.unshift(text);
        searchHistoryData.value = [...arr, ...searchHistoryData.value];
        searchHistoryData.value = searchHistoryData.value.slice(0, 10);
        common_vendor.index.setStorageSync("historyData", searchHistoryData.value);
      }
    };
    const handleToRefresh = () => {
      searchData.value.pageNum = 1;
      getNewData();
    };
    const onReachBottom = () => {
      if (pageNum.value >= pages.value) {
        moreStatus.value = "noMore";
        return false;
      } else {
        moreStatus.value = "loading";
        setTimeout(() => {
          pageNum.value++;
          getNewData();
        }, 1e3);
      }
    };
    const handleInput = (e) => {
      const nameVal = e.detail.value.split("");
      itemData.value = [];
      isHistory.value = true;
      if (nameVal.length > 0) {
        showClearIcon.value = true;
        getNewData();
      } else {
        isHistory.value = false;
        showClearIcon.value = false;
      }
    };
    const handleClear = () => {
      searchData.value.keyword = "";
      showClearIcon.value = false;
      isHistory.value = false;
      itemData.value = [];
    };
    const clearHistory = () => {
      deleteRef.value.popup.open();
    };
    const subDelete = async () => {
      if (searchHistoryData.value.length > 0) {
        common_vendor.index.removeStorage({
          key: "historyData"
        });
        searchHistoryData.value = [];
        deleteRef.value.popup.close();
      }
    };
    const handleList = (val) => {
      if (val === "cancel") {
        handleClear();
        return;
      }
      if (val.id) {
        common_vendor.index.redirectTo({
          url: `/pages/service/components/airMaintenance?id=${val.id}`
        });
      }
      if (searchData.value.keyword !== "") {
        val = searchData.value.keyword;
      } else {
        searchData.value.keyword = val;
        getNewData();
        isHistory.value = true;
        loading.value = true;
      }
    };
    const handleToLink = () => {
      common_vendor.index.redirectTo({
        url: `/pages/index/index`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "搜索",
          isShowBack: true,
          handleToLink
        }),
        b: netStatus.value
      }, netStatus.value ? common_vendor.e({
        c: common_vendor.p({
          type: "search",
          size: "18"
        }),
        d: common_vendor.o(handleSearch),
        e: common_vendor.o([($event) => searchData.value.keyword = $event.detail.value, handleInput]),
        f: common_vendor.o(handleBlur),
        g: searchData.value.keyword,
        h: showClearIcon.value
      }, showClearIcon.value ? {
        i: common_vendor.o(handleClear),
        j: common_vendor.p({
          type: "clear",
          size: "18"
        })
      } : {}, {
        k: common_vendor.o(($event) => handleList("cancel")),
        l: common_vendor.o(handleClear),
        m: common_vendor.o(onReachBottom),
        n: common_vendor.o(handleList),
        o: common_vendor.o(handleBlur),
        p: common_vendor.p({
          itemData: itemData.value,
          moreStatus: moreStatus.value,
          loading: loading.value,
          isHistory: isHistory.value
        }),
        q: itemData.value.length === 0 && searchHistoryData.value.length > 0 && !isHistory.value
      }, itemData.value.length === 0 && searchHistoryData.value.length > 0 && !isHistory.value ? {
        r: common_vendor.o(clearHistory),
        s: common_vendor.f(searchHistoryData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => handleList(item), index)
          };
        })
      } : {}) : {
        t: common_vendor.p({
          handleToRefresh
        })
      }, {
        v: common_vendor.sr(deleteRef, "2dab939d-6", {
          "k": "deleteRef"
        }),
        w: common_vendor.o(subDelete),
        x: common_vendor.p({
          errorTipText: errorTipText.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dab939d"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/search/index.vue"]]);
wx.createPage(MiniProgramPage);
