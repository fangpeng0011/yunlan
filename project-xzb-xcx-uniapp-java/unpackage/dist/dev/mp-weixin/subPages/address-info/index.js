"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_address = require("../../pages/api/address.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_nav_bar = common_vendor.resolveComponent("nav-bar");
  _component_nav_bar();
}
if (!Math) {
  (BtnFooter + SelectArea)();
}
const BtnFooter = () => "../../components/BtnFooter/index.js";
const SelectArea = () => "./components/selectArea.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const formName = common_vendor.ref("");
    const formPhone = common_vendor.ref("");
    const formAddressInfo = common_vendor.ref("");
    let provinceName = common_vendor.ref("");
    let cityName = common_vendor.ref("");
    let countyName = common_vendor.ref("");
    let title = common_vendor.ref("");
    const isSaveToAddress = common_vendor.ref(false);
    const isDefaultAddress = common_vendor.ref(false);
    const isFromAddress = common_vendor.ref();
    const selectArea = common_vendor.ref();
    const type = common_vendor.ref("send");
    const editOrAdd = common_vendor.ref();
    const id = common_vendor.ref("");
    const detailId = common_vendor.ref("");
    const location = common_vendor.ref();
    const isConfirm = common_vendor.computed(() => {
      return Boolean(formName.value) && Boolean(formPhone.value) && Boolean(formAddressInfo.value) && areaLabel.value !== "城市/地区";
    });
    const isReset = common_vendor.computed(() => {
      return Boolean(formName.value) || Boolean(formPhone.value) || Boolean(formAddressInfo.value) || Boolean(provinceName.value);
    });
    const areaLabel = common_vendor.ref("城市/地区");
    common_vendor.onLoad((options) => {
      if (options.id) {
        getAddressInfo(options.id);
      }
      detailId.value = options.detailId;
      editOrAdd.value = options.editOrAdd;
      id.value = options.id || "";
      type.value = options.type;
      isFromAddress.value = options.isFromAddress;
      title.value = options.editOrAdd !== "add" ? "编辑地址" : "新增地址";
      isDefaultAddress.value = options.isDefault === "0" ? false : true;
    });
    common_vendor.onMounted(() => {
      if (editOrAdd.value === "add") {
        selectArea.value.getList();
      }
    });
    const getAddressInfo = async (id2) => {
      await pages_api_address.getAddressBookInfo(id2).then((res) => {
        if (res.data.code === 200) {
          const {
            name,
            phone,
            address,
            city,
            county,
            province,
            isShow,
            isDefault
          } = res.data.data;
          formName.value = name;
          formPhone.value = phone;
          formAddressInfo.value = address;
          areaLabel.value = province + " " + city + " " + county;
          provinceName.value = province;
          cityName.value = city;
          countyName.value = county;
          isSaveToAddress.value = isShow;
          isDefaultAddress.value = isDefault;
        }
      });
      selectArea.value.getList();
    };
    const handleSaveToAddress = () => {
      if (isFromAddress.value) {
        isDefaultAddress.value = !isDefaultAddress.value;
      } else {
        isSaveToAddress.value = !isSaveToAddress.value;
      }
    };
    const handledSelectArea = () => {
      selectArea.value.handleOpen();
    };
    const handleFormName = (event) => {
      formName.value = event.detail.value;
    };
    const handleFormPhone = (event) => {
      formPhone.value = event.detail.value;
    };
    const handleFormAddressInfo = (event) => {
      formAddressInfo.value = event.detail.value;
    };
    const getAreaData = (value) => {
      provinceName.value = value.province.label;
      cityName.value = value.city.label;
      countyName.value = value.area.label;
      areaLabel.value = value.province.label + " " + value.city.label + " " + value.area.label;
    };
    const reset = () => {
      formAddressInfo.value = "";
      formName.value = "";
      formPhone.value = "";
      areaLabel.value = "城市/地区";
    };
    const handleToLink = () => {
      if (editOrAdd.value === "edit") {
        if (isFromAddress.value === "true") {
          common_vendor.index.redirectTo({
            url: "/pages/address/index?detailId=" + detailId.value
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/address/index?&type=" + type.value
          });
        }
      } else {
        common_vendor.index.navigateBack();
      }
    };
    const handleLocation = () => {
      common_vendor.index.chooseLocation({
        success: async function(res) {
          location.value = res.longitude + "," + res.latitude;
          await pages_api_address.getAddress({
            location: res.longitude + "," + res.latitude
          }).then((res2) => {
            if (res2.data.code === 200) {
              const { province, city, district, fullAddress } = res2.data.data;
              provinceName.value = province ? province : "";
              cityName.value = city ? city : province;
              countyName.value = district ? district : "";
              areaLabel.value = provinceName.value + " " + cityName.value + " " + countyName.value;
              formAddressInfo.value = fullAddress;
            }
          });
        }
      });
    };
    const submit = () => {
      if (!isConfirm.value) {
        common_vendor.index.showToast({
          title: "请将信息填写完整",
          icon: "none"
        });
      } else if (!/^1[3456789]\d{9}$/.test(formPhone.value)) {
        common_vendor.index.showToast({
          title: "请填写正确的手机号码格式",
          icon: "none"
        });
      } else if (formName.value.length < 2) {
        common_vendor.index.showToast({
          title: "姓名字数长度为2-10",
          icon: "none"
        });
      } else {
        if (editOrAdd.value === "add" && !id.value) {
          let params = {
            name: formName.value,
            phone: formPhone.value,
            address: formAddressInfo.value,
            province: provinceName.value,
            city: cityName.value,
            county: countyName.value,
            isDefault: isDefaultAddress.value ? 1 : 0,
            location: location.value
          };
          pages_api_address.addAddressBook(params).then((res) => {
            common_vendor.index.showToast({
              title: "操作成功",
              icon: "success"
            });
            if (isFromAddress.value === "true") {
              common_vendor.index.redirectTo({
                url: "/pages/address/index?detailId=" + detailId.value
              });
            } else {
              common_vendor.index.redirectTo({
                url: "/pages/address/index?id=" + res.data.id + "&type=" + type.value + "?detailId=" + detailId.value
              });
            }
          }).catch((err) => {
            console.log(err);
          });
          common_vendor.index.redirectTo({
            url: "/pages/address/index ?detailId=" + detailId.value
          });
        } else if (editOrAdd.value === "edit" && id.value) {
          pages_api_address.updateAddressBook(id.value, {
            name: formName.value,
            phone: formPhone.value,
            address: formAddressInfo.value,
            province: provinceName.value,
            city: cityName.value,
            county: countyName.value,
            isDefault: isDefaultAddress.value ? 1 : 0
          }).then((res) => {
            common_vendor.index.showToast({
              title: "操作成功",
              icon: "success"
            });
            if (isFromAddress.value === "true") {
              common_vendor.index.navigateTo({
                url: "/pages/address/index?detailId=" + detailId.value
              });
            } else {
              common_vendor.index.navigateTo({
                url: "/pages/address/index?id=" + res.data.id + "&type=" + type.value + "?detailId=" + detailId.value
              });
            }
          });
        }
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: common_vendor.unref(title),
          handleToLink,
          isShowBack: true
        }),
        b: common_vendor.n(formName.value !== "" ? "active" : ""),
        c: common_vendor.o(handleFormName),
        d: formName.value,
        e: common_vendor.n(formPhone.value !== "" ? "active" : ""),
        f: common_vendor.o(handleFormPhone),
        g: formPhone.value,
        h: common_vendor.t(areaLabel.value),
        i: common_vendor.n(areaLabel.value !== "城市/地区" ? "active" : ""),
        j: common_vendor.o(handledSelectArea),
        k: common_vendor.o(handleLocation),
        l: common_vendor.n(formAddressInfo.value !== "" ? "active" : ""),
        m: formAddressInfo.value,
        n: common_vendor.o(handleFormAddressInfo),
        o: (isFromAddress.value ? isDefaultAddress.value : isSaveToAddress.value) ? 1 : "",
        p: common_vendor.o(handleSaveToAddress),
        q: common_vendor.o(reset),
        r: common_vendor.n(common_vendor.unref(isReset) ? "active" : ""),
        s: common_vendor.o(submit),
        t: common_vendor.p({
          btnText: "确定",
          isActive: common_vendor.unref(isConfirm)
        }),
        v: common_vendor.sr(selectArea, "b08e797b-2", {
          "k": "selectArea"
        }),
        w: common_vendor.o(getAreaData),
        x: common_vendor.p({
          provinceName: common_vendor.unref(provinceName),
          cityName: common_vendor.unref(cityName),
          countyName: common_vendor.unref(countyName)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b08e797b"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/address-info/index.vue"]]);
wx.createPage(MiniProgramPage);
