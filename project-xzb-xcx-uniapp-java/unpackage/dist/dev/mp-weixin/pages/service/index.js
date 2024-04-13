"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_service = require("../api/service.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _component_UniFooter = common_vendor.resolveComponent("UniFooter");
  (_component_NavBar + _component_UniFooter)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const serviceTypeData = common_vendor.ref([]);
    const activeId = common_vendor.ref(1);
    const acitiveIdImg = common_vendor.ref("");
    const serviceItemData = common_vendor.ref([]);
    const city = common_vendor.ref({});
    const tabChange = (id) => {
      activeId.value = id;
      getServeListData();
    };
    const handleDetail = (id, title) => {
      common_vendor.index.navigateTo({
        url: `/pages/service/components/airMaintenance?id=${id}&title=${title}`
      });
    };
    const getServeCategoryData = async () => {
      await pages_api_service.getServeCategory({
        regionId: common_vendor.index.getStorageSync("city").id
      }).then((res) => {
        var _a, _b;
        if (res.data.code === 200) {
          serviceTypeData.value = res.data.data;
          activeId.value = (_a = res.data.data[0]) == null ? void 0 : _a.serveTypeId;
          acitiveIdImg.value = (_b = res.data.data[0]) == null ? void 0 : _b.serveTypeImg;
          getServeListData();
        }
      });
    };
    const getServeListData = async () => {
      await pages_api_service.getServeList({
        cityCode: common_vendor.index.getStorageSync("city").cityCode,
        serveTypeId: activeId.value
      }).then((res) => {
        if (res.data.code === 200) {
          serviceItemData.value = res.data.data;
          acitiveIdImg.value = serviceTypeData.value.filter(
            (item) => item.serveTypeId === activeId.value
          )[0].serveTypeImg;
        }
      });
    };
    common_vendor.onLoad(() => {
      city.value = common_vendor.index.getStorageSync("city");
      if (city.value) {
        getServeCategoryData();
        if (common_vendor.index.getStorageSync("activeId")) {
          activeId.value = common_vendor.index.getStorageSync("activeId");
          common_vendor.index.removeStorageSync("activeId");
        }
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "全部服务",
          isShowBack: false
        }),
        b: common_vendor.f(serviceTypeData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.serveTypeName),
            b: index,
            c: common_vendor.n(activeId.value === item.serveTypeId ? "active tagBox" : "tagBox"),
            d: common_vendor.o(($event) => tabChange(item.serveTypeId), index)
          };
        }),
        c: acitiveIdImg.value,
        d: common_vendor.f(serviceItemData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.serveItemName),
            b: index,
            c: common_vendor.o(($event) => handleDetail(item.id, item.serveItemName), index)
          };
        }),
        e: common_vendor.p({
          pagePath: "/pages/service/index"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f6ccea2d"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/service/index.vue"]]);
wx.createPage(MiniProgramPage);
