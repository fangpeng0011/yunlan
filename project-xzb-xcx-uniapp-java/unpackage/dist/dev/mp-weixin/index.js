"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    pagePath: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activePage = common_vendor.computed(() => {
      return props.pagePath;
    });
    const store = common_vendor.useStore();
    const currentPage = common_vendor.ref(store.state.footStatus);
    const tabbar = common_vendor.ref([
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/static/sy.png",
        "selectedIconPath": "/static/sy1.png"
      },
      {
        "pagePath": "/pages/service/index",
        "text": "全部服务",
        "iconPath": "/static/fw.png",
        "selectedIconPath": "/static/qb1.png"
      },
      {
        "pagePath": "/pages/message/index",
        "text": "消息",
        "iconPath": "/static/x x.png",
        "selectedIconPath": "/static/xx1.png"
      },
      {
        "pagePath": "/pages/my/index",
        "text": "我的",
        "iconPath": "/static/wd.png",
        "selectedIconPath": "/static/wd2.png"
      }
    ]);
    const changeTab = (item, index) => {
      let routes = getCurrentPages();
      let curRoute = routes[routes.length - 1].route;
      if (item.text !== "") {
        currentPage.value = index;
        store.commit("setFootStatus", index);
        const token = common_vendor.index.getStorageSync("token");
        store.commit("user/setAppointmentType", null);
        if (!token && index === 1) {
          if (curRoute === "pages/my/index") {
            store.commit("setFootStatus", 3);
          } else if (curRoute === "pages/index/index") {
            store.commit("setFootStatus", 0);
          } else if (curRoute === "pages/service/index") {
            store.commit("setFootStatus", 2);
          }
          store.commit("setRouter", curRoute);
          common_vendor.index.redirectTo({
            url: "/pages/login/index"
          });
        } else {
          if (item.pagePath === "/pages/message/index") {
            common_vendor.index.showToast({
              title: "当前功能非教学版本！",
              icon: "none"
            });
          } else {
            common_vendor.index.redirectTo({
              url: item.pagePath
            });
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabbar.value, (item, index, i0) => {
          return common_vendor.e(common_vendor.e({
            a: item.pagePath !== ""
          }, item.pagePath !== "" ? common_vendor.e({
            b: common_vendor.unref(activePage) === item.pagePath
          }, common_vendor.unref(activePage) === item.pagePath ? {
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
            h: common_vendor.n(common_vendor.unref(activePage) === item.pagePath ? "active" : ""),
            i: index,
            j: common_vendor.o(($event) => changeTab(item, index), index)
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/components/Foot/index.vue"]]);
exports.Component = Component;
