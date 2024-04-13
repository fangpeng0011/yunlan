"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const cityName = common_vendor.ref("请选择");
    const address = common_vendor.ref("请选择");
    const store = common_vendor.useStore();
    const users = store.state.user;
    const location = common_vendor.reactive({
      latitude: "",
      longitude: ""
    });
    const markers = common_vendor.reactive({
      data: {
        id: 1,
        latitude: 0,
        longitude: 0,
        iconPath: "/static/new/img_weizhi@2x.png",
        width: 60,
        height: 60
      }
    });
    const markerTap = () => {
      console.log("111");
    };
    const handleSelectCity = () => {
      common_vendor.index.navigateTo({
        url: "/pages/city/index?address=" + address.value
      });
    };
    const handleChooseRange = () => {
      common_vendor.index.chooseLocation({
        latitude: location.latitude,
        longitude: location.longitude,
        success: function(res) {
          address.value = res.name;
          location.latitude = res.latitude;
          location.longitude = res.longitude;
          markers.data.latitude = res.latitude;
          markers.data.longitude = res.longitude;
          store.commit("user/setLocation", location);
          store.commit("user/setAddress", address.value);
          console.log(res, "选择具体服务范围成功");
        },
        fail: function(err) {
          console.log(err, "选择具体服务范围失败");
        }
      });
    };
    const handleSubmit = () => {
      if (!users.cityCode) {
        return common_vendor.index.showToast({
          title: "请选择服务城市",
          duration: 1500,
          icon: "none"
        });
      } else if (!users.address || users.address === "请选择") {
        return common_vendor.index.showToast({
          title: "请设置意向接单范围",
          duration: 1500,
          icon: "none"
        });
      }
      common_vendor.index.showLoading({
        title: "loading",
        mask: true
      });
      pages_api_setting.setServiceSetting({
        cityCode: users.cityCode,
        location: String(users.location.longitude) + "," + String(users.location.latitude),
        intentionScope: users.address,
        cityName: users.cityName
      }).then((res) => {
        common_vendor.index.showToast({
          title: "保存成功",
          duration: 1500,
          icon: "none",
          success: () => {
            common_vendor.index.hideLoading();
            goBack();
          }
        });
      });
    };
    common_vendor.onShow(() => {
      pages_api_setting.getSettingInfo().then((res) => {
        if (!res.data.cityCode) {
          common_vendor.index.getLocation({
            type: "gcj02",
            geocode: true,
            success: function(res2) {
              location.latitude = res2.latitude;
              location.longitude = res2.longitude;
              markers.data.latitude = res2.latitude;
              markers.data.longitude = res2.longitude;
            },
            fail: (err) => {
              location.latitude = 39.909187;
              location.longitude = 116.397455;
              markers.data.latitude = 39.909187;
              markers.data.longitude = 116.397455;
            }
          });
          cityName.value = users.cityName;
        } else {
          store.commit("user/setCityCode", users.cityCode || res.data.cityCode);
          cityName.value = users.cityName === "请选择" ? res.data.cityName : users.cityName;
          address.value = res.data.intentionScope;
          location.latitude = res.data.location.split(",")[1];
          location.longitude = res.data.location.split(",")[0];
          markers.data.latitude = res.data.location.split(",")[1];
          markers.data.longitude = res.data.location.split(",")[0];
          store.commit("user/setLocation", location);
          store.commit("user/setAddress", address.value);
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "接口调用失败",
          duration: 1500,
          icon: "none"
        });
      });
    });
    common_vendor.onMounted(() => {
    });
    const clearStore = () => {
      store.commit("user/setLocation", {});
      store.commit("user/setAddress", "");
      store.commit("user/setCityCode", "");
      store.commit("user/setCityName", "请选择");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
      clearStore();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "请选择工作地点"
        }),
        c: [markers.data],
        d: location.latitude,
        e: location.longitude,
        f: common_vendor.o(markerTap),
        g: common_vendor.t(cityName.value),
        h: common_vendor.o(handleSelectCity),
        i: common_vendor.o(handleSelectCity),
        j: common_vendor.t(address.value),
        k: common_vendor.o(handleChooseRange),
        l: common_vendor.o(handleChooseRange),
        m: common_vendor.o(handleSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a953d043"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/serviceRange/index.vue"]]);
wx.createPage(MiniProgramPage);
