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
  __name: "coupon",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const typeVal = common_vendor.ref(users.backLink);
    const type = common_vendor.ref(2);
    const deleteRef = common_vendor.ref(null);
    const itemData = common_vendor.ref([]);
    const moreStatus = common_vendor.ref("more");
    const netStatus = common_vendor.ref(true);
    const loading = common_vendor.ref(false);
    const orderId = common_vendor.ref();
    let params = common_vendor.reactive({
      status: 1,
      lastId: ""
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
      params = {
        ...params
      };
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_coupon.getMyCouponList(params).then((res) => {
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
    common_vendor.onShow(() => {
      isSendRequest.value = false;
      getNewData();
    });
    const setTabIndex = (index) => {
      params.status = index;
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
          params.lastId = itemData.value[itemData.value.length - 1].id;
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
          title: "我的优惠券",
          isShowBack: true,
          handleToLink
        }),
        b: netStatus.value
      }, netStatus.value ? {
        c: common_vendor.o(setTabIndex),
        d: common_vendor.o(handleDelete),
        e: common_vendor.o(onReachBottom),
        f: common_vendor.p({
          itemData: itemData.value,
          moreStatus: moreStatus.value,
          couponTabData: common_vendor.unref(utils_commonData.couponListTabData),
          loading: loading.value,
          type: type.value
        })
      } : {
        g: common_vendor.p({
          handleToRefresh
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-96ba783d"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/coupon/coupon.vue"]]);
wx.createPage(MiniProgramPage);
