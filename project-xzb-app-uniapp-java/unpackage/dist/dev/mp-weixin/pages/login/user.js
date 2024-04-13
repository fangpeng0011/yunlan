"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const pages_api_user = require("../api/user.js");
const pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_popup2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const store = common_vendor.useStore();
    const customForm = common_vendor.ref();
    const alertDialog = common_vendor.ref(null);
    const reason = common_vendor.ref("");
    let fromInfo = common_vendor.reactive({
      phone: "15066699132",
      //账号
      veriryCode: "",
      // 密码
      userType: 2
    });
    const customRules = common_vendor.reactive({
      phone: {
        rules: [
          {
            required: true,
            errorMessage: "请输入手机号"
          },
          {
            validateFunction: function(rule, value, data, callback) {
              const reg = /^1[3-9]\d{9}$/;
              if (!reg.test(value)) {
                callback("手机号输入错误！请重新输入");
              }
              return true;
            }
          }
        ]
      },
      veriryCode: {
        rules: [
          {
            required: true,
            errorMessage: "请输入验证码"
          }
        ]
      }
    });
    common_vendor.onMounted(() => {
    });
    const handleClose = () => {
      alertDialog.value.close();
    };
    const handleSubmit = async () => {
      const valid = await customForm.value.validate();
      if (valid) {
        let times = setTimeout(() => {
          common_vendor.index.showLoading({
            title: "loading",
            mask: true
          });
        }, 500);
        await pages_api_user.phoneLogins(fromInfo).then(async (res) => {
          console.log(res, "登录结果获取");
          setTimeout(function() {
            common_vendor.index.hideLoading();
          }, 500);
          clearTimeout(times);
          if (res.code === 200) {
            common_vendor.index.setStorageSync("token", res.data.token);
            store.commit("user/setToken", res.data.token);
            await pages_api_setting.getUserSetting().then((res2) => {
              console.log(res2, "getUserSetting");
              if (Boolean(res2.data.settingsStatus)) {
                common_vendor.index.redirectTo({
                  url: "/pages/index/index"
                });
              } else {
                common_vendor.index.redirectTo({
                  url: "/pages/setting/index"
                });
              }
            });
          } else if (res.code === 605) {
            common_vendor.index.showToast({
              title: res.msg,
              duration: 1e3,
              icon: "none"
            });
          }
        }).catch((err) => {
          setTimeout(function() {
            common_vendor.index.hideLoading();
          }, 500);
          console.log(err, "err");
          if (err.code === 605) {
            reason.value = err.msg;
            alertDialog.value.open();
          } else {
            common_vendor.index.showToast({
              title: err.msg || "登录失败",
              duration: 1500,
              icon: "none"
            });
          }
        });
      }
    };
    const handlePwd = async () => {
      const reg = /^1[3-9]\d{9}$/;
      if (!reg.test(fromInfo.phone)) {
        return common_vendor.index.showToast({
          title: "手机号输入错误！请重新输入",
          duration: 2e3,
          icon: "none"
        });
      }
      pages_api_user.getsmsCode({
        bussinessType: 3,
        phone: fromInfo.phone
      }).then((res) => {
        fromInfo.veriryCode = "123456";
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "获取验证码失败",
          duration: 1500,
          icon: "none"
        });
      });
    };
    common_vendor.ref(common_vendor.index.getStorageSync("baseUrl"));
    common_vendor.ref(null);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => common_vendor.unref(fromInfo).phone = $event),
        c: common_vendor.p({
          clearable: false,
          placeholder: "请输入手机号",
          modelValue: common_vendor.unref(fromInfo).phone
        }),
        d: common_vendor.p({
          name: "phone"
        }),
        e: common_vendor.o(($event) => common_vendor.unref(fromInfo).veriryCode = $event),
        f: common_vendor.p({
          clearable: false,
          placeholder: "请输入验证码",
          modelValue: common_vendor.unref(fromInfo).veriryCode
        }),
        g: common_vendor.o(handlePwd),
        h: common_vendor.p({
          name: "veriryCode"
        }),
        i: common_vendor.sr(customForm, "7c38de75-0", {
          "k": "customForm"
        }),
        j: common_vendor.p({
          rules: customRules,
          modelValue: common_vendor.unref(fromInfo)
        }),
        k: common_vendor.unref(fromInfo).phone.length === 0 || common_vendor.unref(fromInfo).veriryCode.length === 0,
        l: common_vendor.n(common_vendor.unref(fromInfo).phone.length === 0 || common_vendor.unref(fromInfo).veriryCode.length === 0 ? "disabled" : ""),
        m: common_vendor.o(handleSubmit),
        n: common_vendor.t(reason.value),
        o: common_vendor.o(handleClose),
        p: common_vendor.sr(alertDialog, "7c38de75-5", {
          "k": "alertDialog"
        }),
        q: common_vendor.p({
          type: "dialog",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/login/user.vue"]]);
wx.createPage(MiniProgramPage);
