"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_address = require("../api/address.js");
const utils_index = require("../../utils/index.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  _component_NavBar();
}
if (!Math) {
  Popup();
}
const Popup = () => "../../components/Operate/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const customBar = common_vendor.ref("87px");
    const winHeight = common_vendor.ref(0);
    const itemHeight = common_vendor.ref(0);
    const winOffsetY = common_vendor.ref(0);
    const touchmove = common_vendor.ref(false);
    const scrollHeight = common_vendor.ref("");
    const letter = common_vendor.ref([]);
    const operate = common_vendor.ref(null);
    const title = common_vendor.ref("开启定位权限");
    const scrollIntoId = common_vendor.ref("");
    const list = common_vendor.ref([]);
    const activeId = common_vendor.ref(1);
    const disPosition = common_vendor.ref(true);
    const errorTipText = common_vendor.ref({
      text: "需要您打开地理位置才能显示当前定位信息"
    });
    const currentCity = common_vendor.ref({
      cityName: "",
      cityCode: ""
    });
    const position = common_vendor.ref();
    const po_tips = common_vendor.ref("重新定位");
    const hotCityList = common_vendor.ref([
      { cityName: "北京", cityCode: "010" },
      { cityName: "上海", cityCode: "021" },
      { cityName: "广州", cityCode: "020" },
      { cityName: "深圳", cityCode: "0755" }
    ]);
    const hotCity = common_vendor.ref([]);
    const instance = common_vendor.getCurrentInstance();
    const setList = () => {
      common_vendor.index.createSelectorQuery().in(instance).select("#list").boundingClientRect().exec((ret) => {
        winOffsetY.value = ret[0].top;
        winHeight.value = ret[0].height;
        itemHeight.value = winHeight.value / list.value.length;
      });
    };
    const touchStart = (e) => {
      touchmove.value = true;
      let pageY = e.touches[0].pageY;
      let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
      if (list.value[index]) {
        scrollIntoId.value = list.value[index].idx;
      }
    };
    const touchMove = (e) => {
      let pageY = e.touches[0].pageY;
      let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
      if (list.value[index] && list.value[index].idx === scrollIntoId.value) {
        return false;
      }
      if (list.value[index]) {
        scrollIntoId.value = list.value[index].idx;
      }
    };
    const touchEnd = () => {
      touchmove.value = false;
    };
    const activeCity = (val) => {
      activeId.value = val.cityCode;
      selectCity(val);
    };
    common_vendor.onMounted(() => {
      getOpenCityList();
      if (common_vendor.index.getStorageSync("city")) {
        currentCity.value = common_vendor.index.getStorageSync("city");
      }
      scrollHeight.value = common_vendor.index.getSystemInfoSync().windowHeight - parseInt(customBar.value) + "px";
      setList();
    });
    const getWarpWeft = () => {
      po_tips.value = "定位中...";
      common_vendor.wx$1.getSetting({
        success(res) {
          if (res.authSetting["scope.userLocation"]) {
            common_vendor.index.getLocation({
              type: "gcj02",
              success: function(res2) {
                position.value = res2;
                getCity(position.value);
                setTimeout(() => {
                  po_tips.value = "重新定位";
                }, 500);
              },
              fail: function(res2) {
                if (res2.errMsg.indexOf("wx.onLocationChange") > -1) {
                  utils_index.tostTip("频繁调用会增加电量损耗,请稍后再试");
                } else {
                  utils_index.tostTip("请开启手机的定位相关功能");
                }
                setTimeout(() => {
                  po_tips.value = "定位失败";
                }, 500);
                disPosition.value = true;
              }
            });
          } else {
            po_tips.value = "定位失败";
            operate.value.popup.open();
          }
        },
        fail(res) {
          po_tips.value = "定位失败";
        }
      });
    };
    const setWarpWeft = () => {
      common_vendor.wx$1.openSetting({
        success: (res) => {
          if (res.authSetting["scope.userLocation"]) {
            getWarpWeft();
          } else {
            disPosition.value = true;
          }
        },
        fail: (fail) => {
          disPosition.value = true;
          po_tips.value = "定位失败";
        }
      });
      operate.value.popup.close();
    };
    const getCity = (position2) => {
      let params = {
        location: position2.longitude + "," + position2.latitude
      };
      pages_api_address.getAddress(params).then((res) => {
        if (res.data.code === 200) {
          currentCity.value = res.data.data;
          AreaConfig(currentCity.value);
        }
      });
    };
    const AreaConfig = (val) => {
      const currentCitys = list.value.filter((item) => {
        return item.cityCode == val.cityCode;
      });
      if (currentCitys.length === 0) {
        const cityData = common_vendor.ref(val);
        cityData.value.name = val.province && val.city ? val.city : val.province;
        common_vendor.index.setStorageSync("city", cityData.value);
        return;
      }
      common_vendor.index.setStorageSync("city", currentCitys[0]);
      currentCity.value = currentCitys[0];
    };
    const getOpenCityList = () => {
      pages_api_address.getCityList().then((res) => {
        if (res.data.code === 200) {
          list.value = res.data.data;
          hotCity.value = hotCityList.value.filter((item) => {
            return list.value.some((city) => {
              return city.cityCode === item.cityCode;
            });
          });
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none"
          });
        }
      });
    };
    const selectCity = (city) => {
      if (city.name) {
        currentCity.value.cityName = city.name;
      } else {
        currentCity.value.cityName = city.cityName;
      }
      currentCity.value.cityCode = city.cityCode;
      AreaConfig(currentCity.value);
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    common_vendor.watch(list, () => {
      setTimeout(() => {
        setList();
      }, 100);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "选择服务地址",
          isShowBack: true
        }),
        b: disPosition.value
      }, disPosition.value ? common_vendor.e({
        c: common_vendor.t(currentCity.value ? currentCity.value.name : "定位失败"),
        d: common_vendor.o(($event) => _ctx.back_city(position.value, true)),
        e: common_vendor.t(po_tips.value),
        f: common_vendor.o(getWarpWeft),
        g: hotCity.value.length > 0
      }, hotCity.value.length > 0 ? {
        h: common_vendor.f(hotCity.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cityName),
            b: common_vendor.n(activeId.value === item.cityCode ? "position_city_tag_active position_city_tag" : "position_city_tag"),
            c: index,
            d: common_vendor.o(($event) => activeCity(item), index)
          };
        })
      } : {}) : {}, {
        i: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => selectCity(item), index),
            c: item.id,
            d: index
          };
        }),
        j: scrollIntoId.value,
        k: scrollHeight.value,
        l: common_vendor.o(() => {
        }),
        m: common_vendor.f(letter.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.idx),
            b: item.idx
          };
        }),
        n: common_vendor.o(touchStart),
        o: common_vendor.o(touchMove),
        p: common_vendor.o(touchEnd),
        q: common_vendor.sr(operate, "5a18b3c9-1", {
          "k": "operate"
        }),
        r: common_vendor.o(setWarpWeft),
        s: common_vendor.p({
          errorTipText: errorTipText.value,
          title: title.value
        }),
        t: touchmove.value
      }, touchmove.value ? {
        v: common_vendor.t(scrollIntoId.value)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a18b3c9"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/city/index.vue"]]);
wx.createPage(MiniProgramPage);
