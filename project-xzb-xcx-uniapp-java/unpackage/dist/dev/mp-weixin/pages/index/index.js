"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_index = require("../api/index.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _component_test = common_vendor.resolveComponent("test");
  const _component_UniFooter = common_vendor.resolveComponent("UniFooter");
  (_component_NavBar + _component_test + _component_UniFooter)();
}
if (!Math) {
  ExpBall();
}
const ExpBall = () => "../../components/expBall/ExpBall.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const nickName = common_vendor.ref("");
    const token = common_vendor.ref("");
    const menuData = common_vendor.ref([]);
    const hotData = common_vendor.ref([]);
    const searchVal = common_vendor.ref("");
    const city = common_vendor.ref({});
    common_vendor.onShow(() => {
      nickName.value = common_vendor.index.getStorageSync("nickName");
      token.value = common_vendor.index.getStorageSync("token");
      if (!token.value && !nickName.value) {
        common_vendor.index.navigateTo({
          url: "/pages/login/index"
        });
      } else {
        setTimeout(() => {
          city.value = common_vendor.index.getStorageSync("city");
          if (city.value) {
            getHomeServiceData();
            getHotServeData();
          }
        }, 200);
      }
    });
    common_vendor.onPullDownRefresh(() => {
      getHomeServiceData();
      getHotServeData();
    });
    const toService = (val, number) => {
      if (number === 1) {
        common_vendor.wx$1.reLaunch({
          url: "/pages/service/index"
        });
        common_vendor.index.setStorageSync("activeId", val);
      } else {
        common_vendor.index.navigateTo({
          url: `/pages/service/components/airMaintenance?id=${val}`
        });
      }
    };
    const toCity = () => {
      common_vendor.index.navigateTo({
        url: "/pages/city/index"
      });
    };
    const getHomeServiceData = async () => {
      await pages_api_index.getHomeService({
        regionId: common_vendor.index.getStorageSync("city").id
      }).then((res) => {
        if (res.data.code === 200) {
          menuData.value = res.data.data;
        }
      });
    };
    const getHotServeData = async () => {
      await pages_api_index.getHotServe({
        regionId: common_vendor.index.getStorageSync("city").id
      }).then((res) => {
        if (res.data.code === 200) {
          hotData.value = res.data.data;
        }
      });
    };
    const handleSearch = () => {
      common_vendor.index.navigateTo({
        url: `/pages/search/index`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "云岚到家",
          isShowBack: false
        }),
        b: common_vendor.t(city.value.name ? city.value.name : "暂无"),
        c: common_vendor.o(($event) => toCity()),
        d: common_vendor.o(handleSearch),
        e: common_vendor.o(handleSearch),
        f: common_vendor.o(handleSearch),
        g: common_vendor.o([($event) => searchVal.value = $event.detail.value, handleSearch]),
        h: searchVal.value,
        i: !city.value.name || menuData.value.length === 0
      }, !city.value.name || menuData.value.length === 0 ? common_vendor.e({
        j: !city.value.name
      }, !city.value.name ? {} : {}, {
        k: common_vendor.o(($event) => toCity())
      }) : {}, {
        l: common_vendor.f(menuData.value, (item, index, i0) => {
          return {
            a: item.serveTypeIcon,
            b: common_vendor.t(item.serveTypeName),
            c: common_vendor.o(($event) => toService(item.serveTypeId, 1), index),
            d: index
          };
        }),
        m: common_vendor.f(menuData.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item.serveResDTOList, (content, key, i1) => {
              return {
                a: content.serveItemIcon,
                b: common_vendor.t(content.serveItemName),
                c: key,
                d: common_vendor.o(($event) => toService(content.id, 2), key)
              };
            }),
            b: index
          };
        }),
        n: hotData.value.length > 0
      }, hotData.value.length > 0 ? {} : {}, {
        o: common_vendor.f(hotData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(
              // (index + 1)/3 取余数
              (index + 1) % 3 === 1 ? "专业、贴心的上门服务" : (index + 1) % 3 === 2 ? "标准定价，售后无忧" : "云岚到家，您的不二选择"
            ),
            b: common_vendor.n((index + 1) % 3 === 1 ? "tag1" : (index + 1) % 3 === 2 ? "tag2" : "tag3"),
            c: item.serveItemImg,
            d: common_vendor.o(($event) => toService(item.id, 2), index),
            e: common_vendor.t(item.serveItemName),
            f: common_vendor.t(item.price),
            g: "1cf27b2a-3-" + i0,
            h: common_vendor.o(($event) => toService(item.id, 2), index),
            i: index
          };
        })
      }, {}, {}, {
        r: common_vendor.p({
          pagePath: "/pages/index/index"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
