"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_coupon = require("../api/coupon.js");
const utils_commonData = require("../../utils/commonData.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _component_net_fail = common_vendor.resolveComponent("net-fail");
  (_component_NavBar + _component_net_fail)();
}
if (!Math) {
  List();
}
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
    const type = common_vendor.ref(1);
    let params = common_vendor.ref({
      tabType: 1
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
    const getNewData = async () => {
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_coupon.getCouponList(params.value).then((res) => {
        if (res.data.code == 200) {
          const { data } = res.data;
          itemData.value = data;
          pages.value = data.length;
          isSendRequest.value = true;
          moreStatus.value = "noMore";
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
    const addCoupons = async (id) => {
      await pages_api_coupon.addCoupon({
        id
      }).then((res) => {
        if (res.data.code === 200) {
          common_vendor.index.showToast({
            title: "领取成功",
            duration: 1e3,
            icon: "none"
          });
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            duration: 1e3,
            icon: "none"
          });
        }
      });
    };
    common_vendor.onShow(() => {
      isSendRequest.value = false;
      getNewData();
    });
    const setTabIndex = (index) => {
      params.value.tabType = index;
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
          title: "抢券",
          isShowBack: true,
          handleToLink
        }),
        b: netStatus.value
      }, netStatus.value ? {
        c: common_vendor.o(setTabIndex),
        d: common_vendor.o(addCoupons),
        e: common_vendor.o(handleDelete),
        f: common_vendor.o(onReachBottom),
        g: common_vendor.p({
          itemData: itemData.value,
          moreStatus: moreStatus.value,
          loading: loading.value,
          type: type.value,
          couponTabData: common_vendor.unref(utils_commonData.couponTabData)
        })
      } : {
        h: common_vendor.p({
          handleToRefresh
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-59672890"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/coupon/index.vue"]]);
wx.createPage(MiniProgramPage);
