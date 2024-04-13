"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    pagePath: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const store = common_vendor.useStore();
    const currentPage = common_vendor.ref(store.state.footStatus);
    let tabbar = common_vendor.ref([
      {
        pagePath: "/pages/index/index",
        iconPath: "static/home.png",
        selectedIconPath: "static/homeActive.png",
        text: "首页"
      },
      {
        pagePath: "/pages/pickup/index",
        iconPath: "static/collect.png",
        selectedIconPath: "static/collectActive.png",
        text: "订单"
      },
      // {
      // 	pagePath: '',
      // 	iconPath: 'static/qrcode.png',
      // 	selectedIconPath: 'static/qrcode.png',
      // 	text: ''
      // },
      {
        pagePath: "/pages/delivery/index",
        iconPath: "static/delivery.png",
        selectedIconPath: "static/deliveryActive.png",
        text: "消息"
      },
      {
        pagePath: "/pages/my/index",
        iconPath: "static/user.png",
        selectedIconPath: "static/userActive.png",
        text: "我的"
      }
    ]);
    const changeTab = (item, index) => {
      store.commit("user/setFilterOverTime", null);
      if (item.text !== "") {
        currentPage.value = index;
        store.commit("setFootStatus", index);
        store.commit("user/setDeliveryData", []);
        store.commit("user/setTabIndex", 0);
        store.commit("user/setTaskStatus", 0);
        store.commit("user/setDetailType", 0);
        store.commit("user/setNewType", null);
        common_vendor.index.redirectTo({
          url: item.pagePath,
          success: (e) => {
          },
          fail: () => {
          }
        });
      } else {
        common_vendor.index.showToast({
          title: "程序员哥哥正在实现中",
          duration: 1e3,
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(tabbar), (item, index, i0) => {
          return common_vendor.e(common_vendor.e({
            a: item.pagePath !== ""
          }, item.pagePath !== "" ? common_vendor.e({
            b: currentPage.value === index
          }, currentPage.value === index ? {
            c: item.selectedIconPath
          } : {
            d: item.iconPath
          }) : {
            e: item.iconPath
          }), {
            f: item.text !== ""
          }, item.text !== "" ? {
            g: common_vendor.t(item.text)
          } : {}, {
            h: common_vendor.n(currentPage.value === index ? "active" : ""),
            i: index,
            j: common_vendor.o(($event) => changeTab(item, index), index)
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/components/uni-footer/index.vue"]]);
wx.createComponent(Component);
