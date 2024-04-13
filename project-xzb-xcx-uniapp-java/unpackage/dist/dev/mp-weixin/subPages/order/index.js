"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../../pages/api/order.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _component_net_fail = common_vendor.resolveComponent("net-fail");
  (_component_NavBar + _component_net_fail)();
}
if (!Math) {
  (List + DeletePopup)();
}
const DeletePopup = () => "../../components/Operate/index.js";
const List = () => "./components/list.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const typeVal = common_vendor.ref(users.backLink);
    const deleteRef = common_vendor.ref(null);
    const itemData = common_vendor.ref([]);
    const moreStatus = common_vendor.ref("more");
    const netStatus = common_vendor.ref(true);
    const loading = common_vendor.ref(false);
    const orderId = common_vendor.ref();
    const errorTipText = common_vendor.ref({
      title: "",
      text: "您确定要删除订单么？"
    });
    let params = common_vendor.reactive({
      sortBy: "",
      ordersStatus: ""
    });
    const pages = common_vendor.ref(0);
    const isSendRequest = common_vendor.ref(false);
    const isback = common_vendor.ref(false);
    common_vendor.onLoad((options) => {
      if (options.str) {
        typeVal.value = options.str;
        store.commit("user/setOrderType", false);
      }
      typeVal.value = users.backLink;
      store.commit("user/setOrderType", false);
    });
    common_vendor.onUnload(() => {
      const val = users.backLink;
      store.commit("setFootStatus", 0);
      if (!isback.value) {
        if (val === "home") {
          common_vendor.index.reLaunch({
            url: `/pages/index/index`
          });
          store.commit("setFootStatus", 0);
        }
        store.commit("user/setOrderStatus", "");
      }
    });
    common_vendor.onShow(() => {
      params.ordersStatus = users.orderStatus === "" || users.orderStatus === 7 ? "" : users.orderStatus;
      params.sortBy = "";
      isSendRequest.value = false;
      itemData.value = [];
      getNewData();
    });
    const getNewData = async (type) => {
      var _a, _b;
      params = {
        ...params
      };
      params.sortBy = ((_a = itemData.value[itemData.value.length - 1]) == null ? void 0 : _a.sortBy) ? (_b = itemData.value[itemData.value.length - 1]) == null ? void 0 : _b.sortBy : "";
      if (isSendRequest.value) {
        return;
      }
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_order.getOrderScroll(params).then((res) => {
        if (res.data.code == 200) {
          const { data } = res.data;
          const items = data == null ? [] : data;
          moreStatus.value = items.length < 10 ? "no-more" : "more";
          itemData.value = itemData.value ? [...itemData.value, ...items] : items;
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
        common_vendor.index.showToast({
          title: err,
          duration: 1e3,
          icon: "none"
        });
        netStatus.value = false;
      });
    };
    const subDelete = async () => {
      isSendRequest.value = false;
      await orderDelete(orderId.value).then((res) => {
        if (res.code === 200) {
          itemData.value = [];
          getNewData();
          deleteRef.value.popup.close();
          common_vendor.index.showToast({
            title: "删除成功",
            duration: 1e3,
            icon: "none"
          });
        }
      }).catch((err) => {
      });
    };
    const setTabIndex = (index) => {
      store.commit("user/setOrderStatus", index);
      params.ordersStatus = index;
      params.sortBy = "";
      isSendRequest.value = false;
      if (index === 7) {
        params.ordersStatus = "";
      }
      itemData.value = [];
      getNewData();
    };
    const onReachBottom = () => {
      if (pages.value < 10) {
        moreStatus.value = "noMore";
        return false;
      } else {
        moreStatus.value = "loading";
        setTimeout(() => {
          getNewData();
        }, 1e3);
      }
    };
    const handleDelete = (id) => {
      orderId.value = id;
      deleteRef.value.popup.open();
    };
    const handleToLink = () => {
      store.commit("user/setOrderStatus", "");
      isback.value = true;
      if (typeVal.value === "my" || typeVal.value === "pay") {
        store.commit("setFootStatus", 3);
        common_vendor.index.redirectTo({
          url: "/pages/my/index"
        });
      } else {
        store.commit("setFootStatus", 0);
        common_vendor.index.reLaunch({
          url: `/pages/index/index`
        });
      }
    };
    const handleToRefresh = () => {
      getNewData();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "我的订单",
          isShowBack: true,
          handleToLink,
          isHistory: true,
          historyTime: false
        }),
        b: netStatus.value
      }, netStatus.value ? {
        c: common_vendor.o(setTabIndex),
        d: common_vendor.o(handleDelete),
        e: common_vendor.o(onReachBottom),
        f: common_vendor.p({
          itemData: itemData.value,
          moreStatus: moreStatus.value,
          loading: loading.value
        })
      } : {
        g: common_vendor.p({
          handleToRefresh
        })
      }, {
        h: common_vendor.sr(deleteRef, "fb08d78d-3", {
          "k": "deleteRef"
        }),
        i: common_vendor.o(subDelete),
        j: common_vendor.p({
          errorTipText: errorTipText.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fb08d78d"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/order/index.vue"]]);
wx.createPage(MiniProgramPage);
