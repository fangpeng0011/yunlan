"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_address_province = require("../../../utils/address/province.js");
const utils_address_city = require("../../../utils/address/city.js");
const utils_address_area = require("../../../utils/address/area.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "selectArea",
  props: {
    provinceName: {
      type: String,
      default: ""
    },
    cityName: {
      type: String,
      default: ""
    },
    countyName: {
      type: String,
      default: ""
    }
  },
  emits: ["@getAreaData"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const popup = common_vendor.ref();
    const province = common_vendor.reactive({
      // data的值是一个数组，为provinceData中的数据
      data: utils_address_province.provinceData
    });
    let selectedProvince = common_vendor.reactive({
      data: {
        label: "北京",
        value: "11"
      }
    });
    const city = common_vendor.reactive({
      data: []
    });
    let selectedCity = common_vendor.reactive({
      data: {
        label: "北京市",
        value: "1101"
      }
    });
    const area = common_vendor.reactive({
      data: []
    });
    let selectedArea = common_vendor.reactive({
      data: {
        label: "东城区",
        value: "110101"
      }
    });
    let areaIndex = common_vendor.reactive({
      data: [0, 0, 0]
    });
    let chooseType = common_vendor.ref("select");
    common_vendor.watch(props, (newValue) => {
      var _a;
      areaIndex.data[0] = (_a = utils_address_province.provinceData) == null ? void 0 : _a.findIndex((item) => {
        return item.label == newValue.provinceName;
      });
      areaIndex.data[1] = utils_address_city.cityData[areaIndex.data[0]].findIndex((item) => {
        return item.label == newValue.cityName;
      });
      areaIndex.data[2] = utils_address_area.areaData[areaIndex.data[0]][areaIndex.data[1]].findIndex(
        (item) => {
          return item.label == newValue.countyName;
        }
      );
      city.data = utils_address_city.cityData[areaIndex.data[0]];
      area.data = utils_address_area.areaData[areaIndex.data[0]][areaIndex.data[1]];
    });
    const getList = () => {
      city.data = utils_address_city.cityData[areaIndex.data[0]];
      area.data = utils_address_area.areaData[areaIndex.data[0]][areaIndex.data[1]];
    };
    const handlePickStart = () => {
      chooseType.value = "select";
    };
    const bindChange = (event) => {
      if (chooseType.value === "click")
        return;
      if (areaIndex.data[0] !== event.detail.value[0]) {
        city.data = utils_address_city.cityData[event.detail.value[0]];
        area.data = utils_address_area.areaData[event.detail.value[0]][event.detail.value[1]];
        selectedProvince.data = province.data[event.detail.value[0]];
        event.detail.value[1] = 0;
        event.detail.value[2] = 0;
        selectedCity.data = city.data[event.detail.value[1]];
        selectedArea.data = area.data[event.detail.value[2]];
      } else if (areaIndex.data[1] !== event.detail.value[1]) {
        area.data = utils_address_area.areaData[event.detail.value[0]][event.detail.value[1]];
        event.detail.value[2] = 0;
        selectedCity.data = city.data[event.detail.value[1]];
        selectedArea.data = area.data[event.detail.value[2]];
      } else {
        selectedArea.data = area.data[event.detail.value[2]];
      }
      areaIndex.data = event.detail.value;
    };
    const handleOpen = () => {
      popup.value.open("bottom");
    };
    const handleCancel = () => {
      popup.value.close("bottom");
    };
    const confirm = () => {
      handleCancel();
      emits("getAreaData", {
        province: selectedProvince.data,
        city: selectedCity.data,
        area: selectedArea.data
      });
    };
    expose({
      handleOpen,
      getList
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleCancel),
        b: common_vendor.f(province.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(index === common_vendor.unref(areaIndex).data[0] ? "activeAddress" : ""),
            c: index
          };
        }),
        c: common_vendor.f(city.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(index === common_vendor.unref(areaIndex).data[1] ? "activeAddress" : ""),
            c: index
          };
        }),
        d: common_vendor.f(area.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(index === common_vendor.unref(areaIndex).data[2] ? "activeAddress" : ""),
            c: index
          };
        }),
        e: common_vendor.unref(areaIndex).data,
        f: common_vendor.o(bindChange),
        g: common_vendor.o(handlePickStart),
        h: common_vendor.o(confirm),
        i: common_vendor.sr(popup, "73210372-0", {
          "k": "popup"
        }),
        j: common_vendor.p({
          type: "bottom",
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-73210372"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/address-info/components/selectArea.vue"]]);
wx.createComponent(Component);
