"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_setting = require("../api/setting.js");
const pages_city_city = require("./city.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const address = common_vendor.ref("");
    const customBar = common_vendor.ref("87px");
    const winHeight = common_vendor.ref(0);
    const itemHeight = common_vendor.ref(0);
    const winOffsetY = common_vendor.ref(0);
    const touchmove = common_vendor.ref(false);
    const scrollHeight = common_vendor.ref("");
    const letter = common_vendor.ref([]);
    common_vendor.ref("");
    const scrollIntoId = common_vendor.ref("");
    const list = common_vendor.ref([]);
    const activeId = common_vendor.ref(1);
    const disPosition = common_vendor.ref(true);
    const currentCity = common_vendor.ref();
    common_vendor.ref();
    const po_tips = common_vendor.ref("重新定位");
    const hotCity = common_vendor.ref([
      { name: "北京市", cityCode: "010" },
      { name: "上海市", cityCode: "021" },
      { name: "广州市", cityCode: "020" },
      { name: "深圳市", cityCode: "0755" }
    ]);
    const instance = common_vendor.getCurrentInstance();
    const setList = () => {
      common_vendor.index.createSelectorQuery().in(instance).select("#list").boundingClientRect().exec((ret) => {
        winOffsetY.value = ret[0].top;
        winHeight.value = ret[0].height;
        itemHeight.value = winHeight.value / list.value.length;
      });
    };
    common_vendor.onLoad((option) => {
      address.value = option.address;
    });
    const goBack = () => {
      common_vendor.index.navigateBack();
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
      getWarpWeft();
      scrollHeight.value = common_vendor.index.getSystemInfoSync().windowHeight - parseInt(customBar.value) + "px";
      letter.value = pages_city_city.Citys.index;
      list.value = pages_city_city.Citys.list;
      setList();
      pages_api_setting.getOpenCity().then((res) => {
        list.value = res.data;
        console.log(res, "getOpenCity");
        let arr = [];
        hotCity.value.map((item) => {
          list.value.map((item1) => {
            if (item1.cityCode === item.cityCode) {
              arr.push(item);
            }
          });
        });
        hotCity.value = arr;
        console.log(arr, "arr");
      });
    });
    const getWarpWeft = () => {
      po_tips.value = "定位中...";
      common_vendor.index.getLocation({
        type: "gcj02",
        geocode: true,
        success: function(res) {
          currentCity.value = {
            name: res.address.city
          };
          activeId.value = res.address.cityCode;
          setTimeout(() => {
            po_tips.value = "重新定位";
          }, 500);
        },
        fail: function(res) {
          console.log(res);
          setTimeout(() => {
            po_tips.value = "定位失败";
          }, 500);
          disPosition.value = true;
        }
      });
    };
    const selectCity = (city) => {
      console.log(city, "city");
      currentCity.value = city;
      store.commit("user/setCityCode", city.cityCode);
      store.commit("user/setCityName", city.name);
      common_vendor.index.navigateBack();
    };
    common_vendor.watch(list, () => {
      setTimeout(() => {
        setList();
      }, 100);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "选择服务城市"
        }),
        c: disPosition.value
      }, disPosition.value ? common_vendor.e({
        d: common_vendor.t(currentCity.value ? currentCity.value.name : "定位失败"),
        e: common_vendor.t(po_tips.value),
        f: common_vendor.o(getWarpWeft),
        g: hotCity.value.length
      }, hotCity.value.length ? {} : {}, {
        h: hotCity.value.length
      }, hotCity.value.length ? {
        i: common_vendor.f(hotCity.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(activeId.value === item.cityCode ? "position_city_tag_active position_city_tag" : "position_city_tag"),
            c: index,
            d: common_vendor.o(($event) => activeCity(item), index)
          };
        })
      } : {}) : {}, {
        j: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => selectCity(item), index),
            c: item.id,
            d: index
          };
        }),
        k: scrollIntoId.value,
        l: scrollHeight.value,
        m: common_vendor.o(() => {
        }),
        n: common_vendor.f(letter.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.idx),
            b: item.idx
          };
        }),
        o: common_vendor.o(touchStart),
        p: common_vendor.o(touchMove),
        q: common_vendor.o(touchEnd),
        r: common_vendor.t(scrollIntoId.value)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a18b3c9"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/city/index.vue"]]);
wx.createPage(MiniProgramPage);
