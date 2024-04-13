"use strict";
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/modules/global.js");
require("./store/modules/user.js");
if (!Math) {
  "./pages/start/index.js";
  "./pages/login/user.js";
  "./pages/index/index.js";
  "./pages/serviceSkill/index.js";
  "./pages/getOrder/index.js";
  "./pages/serviceRange/index.js";
  "./pages/city/index.js";
  "./pages/setting/index.js";
  "./pages/history/index.js";
  "./pages/pickup/index.js";
  "./pages/orderInfo/index.js";
  "./pages/cancel/index.js";
  "./pages/serveRecord/index.js";
  "./pages/delivery/index.js";
  "./pages/my/index.js";
  "./pages/evaluate/index.js";
  "./pages/account/index.js";
  "./pages/auth/index.js";
  "./pages/authFail/index.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const store = common_vendor.useStore();
    const locationData = common_vendor.ref({});
    common_vendor.onShow(() => {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (res) => {
          locationData.value = {
            longitude: res.longitude,
            latitude: res.latitude
          };
          store.commit("user/setlLacation", locationData.value);
        },
        fail: (err) => {
        }
      });
      common_vendor.index.getNetworkType({
        success: function(res) {
        }
      });
    });
    common_vendor.onMounted(() => {
    });
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/App.vue"]]);
const app = common_vendor.createApp(App);
app.use(store_index.store);
app.mount("#app");
