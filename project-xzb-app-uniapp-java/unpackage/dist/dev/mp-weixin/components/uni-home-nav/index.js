"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_setting = require("../../pages/api/setting.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const location = common_vendor.ref("");
    const cityCode = common_vendor.ref("");
    const alertDialog = common_vendor.ref(null);
    common_vendor.onShow(() => {
      common_vendor.index.getLocation({
        type: "gcj02",
        geocode: true,
        success: function(res) {
          location.value = res.address.city;
          cityCode.value = res.address.cityCode;
          console.log(res, "获取当前位置成功");
          pages_api_setting.getSettingInfo().then((res1) => {
            if (res1.data.cityCode === cityCode.value) {
              return;
            } else {
              alertDialog.value.open();
            }
            console.log(res1, "获取当前配置的位置信息");
          });
        },
        fail: (err) => {
          location.value = "获取失败";
          console.log(err, "获取当前位置失败");
        }
      });
    });
    const handleToSet = () => {
      alertDialog.value.close();
      common_vendor.index.navigateTo({
        url: "/pages/serviceRange/index"
      });
    };
    const handleNo = () => {
      alertDialog.value.close();
    };
    const handleClick = () => {
      alertDialog.value.open();
    };
    const baseSetting = common_vendor.reactive([
      {
        label: "服务技能",
        url: "../../static/new/btn_top_fwjn@2x.png",
        path: "/pages/serviceSkill/index"
      },
      {
        label: "接单设置",
        url: "../../static/new/btn_top_jdsz@2x.png",
        path: "/pages/getOrder/index"
      },
      {
        label: "服务范围",
        url: "../../static/new/btn_top_fwfw@2x.png",
        path: "/pages/serviceRange/index"
      }
      // {
      //   label: '城市设置',
      //   url: '../../static/new/btn_top_fwjn@2x.png',
      //   path: '',
      // },
    ]);
    const handleLink = (val) => {
      common_vendor.index.navigateTo({
        url: val
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleClick),
        b: common_vendor.t(location.value),
        c: common_vendor.f(baseSetting, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.label),
            c: index,
            d: common_vendor.o(($event) => handleLink(item.path), index)
          };
        }),
        d: common_vendor.t(location.value),
        e: common_vendor.o(handleNo),
        f: common_vendor.o(handleToSet),
        g: common_vendor.sr(alertDialog, "5f714409-0", {
          "k": "alertDialog"
        }),
        h: common_vendor.p({
          type: "dialog",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5f714409"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/components/uni-home-nav/index.vue"]]);
wx.createComponent(Component);
