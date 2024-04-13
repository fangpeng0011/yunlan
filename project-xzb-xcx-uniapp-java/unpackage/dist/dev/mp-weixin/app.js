"use strict";
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/modules/global.js");
require("./store/modules/user.js");
require("./pages/api/user.js");
require("./utils/request.js");
require("./utils/env.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/index.js";
  "./pages/my/index.js";
  "./pages/service/index.js";
  "./pages/message/index.js";
  "./pages/city/index.js";
  "./pages/service/components/airMaintenance.js";
  "./pages/commit/index.js";
  "./pages/address/index.js";
  "./pages/pay/index.js";
  "./pages/pay/components/paySuccessful.js";
  "./pages/search/index.js";
  "./pages/coupon/index.js";
  "./pages/coupon/coupon.js";
  "./components/Foot/index.js";
  "./subPages/order/index.js";
  "./subPages/order/details.js";
  "./subPages/order/cancelRule.js";
  "./subPages/order/cancel.js";
  "./subPages/order/components/evaluate.js";
  "./subPages/address-info/index.js";
  "./subPages/history/index.js";
  "./subPages/history/details.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/App.vue"]]);
const NavBar = () => "./components/Navbar/index.js";
const NetFail = () => "./components/NetFail/index.js";
const UniFooter = () => "./components/Foot/index2.js";
const app = common_vendor.createApp(App);
app.use(store_index.store);
app.mount("#app");
app.component("nav-bar", NavBar);
app.component("net-fail", NetFail);
app.component("uni-footer", UniFooter);
