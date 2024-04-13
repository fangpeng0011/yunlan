"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_easyinput2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (UniNav + _easycom_uni_easyinput + _easycom_uni_file_picker)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("实名认证");
    const formData = common_vendor.ref({
      certificationMaterial: "",
      idCardNo: "",
      backImg: "",
      frontImg: "",
      name: ""
    });
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const handleSelect = (e, type) => {
      const item = e.tempFiles[0];
      common_vendor.index.uploadFile({
        url: "https://jzo2o-api-test.itheima.net/publics/storage/upload",
        files: [
          {
            name: "file",
            uri: item.url,
            file: item
          }
        ],
        header: {
          Authorization: common_vendor.index.getStorageSync("token")
        },
        success: (uploadFileRes) => {
          formData.value[type] = JSON.parse(uploadFileRes.data).data.url;
          console.log(JSON.parse(uploadFileRes.data).data.url, "-----");
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "图片上传失败",
            duration: 1e3,
            icon: "none"
          });
        }
      });
      console.log(e, type, "eeeeeeeee");
    };
    const handleSubmit = () => {
      console.log(formData.value, "formData.value");
      if (!formData.value.name) {
        return common_vendor.index.showToast({
          title: "请填写真实姓名",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.idCardNo) {
        return common_vendor.index.showToast({
          title: "请填写身份证号",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.frontImg) {
        return common_vendor.index.showToast({
          title: "请上传人像面照片",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.backImg) {
        return common_vendor.index.showToast({
          title: "请上传国徽面照片",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.certificationMaterial) {
        return common_vendor.index.showToast({
          title: "请上传证明资料",
          duration: 1e3,
          icon: "none"
        });
      }
      pages_api_setting.postAuth(formData.value).then((res) => {
        console.log(res, "ress");
        if (res.code === 200) {
          common_vendor.index.navigateTo({
            url: "/pages/setting/index"
          });
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "提交失败!",
          duration: 1e3,
          icon: "none"
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.o(($event) => formData.value.name = $event),
        d: common_vendor.p({
          placeholder: "请输入",
          placeholderStyle: {
            fontSize: "16px"
          },
          modelValue: formData.value.name
        }),
        e: common_vendor.o(($event) => formData.value.idCardNo = $event),
        f: common_vendor.p({
          placeholder: "请输入",
          placeholderStyle: {
            fontSize: "16px"
          },
          modelValue: formData.value.idCardNo
        }),
        g: common_vendor.o((e) => handleSelect(e, "frontImg")),
        h: common_vendor.o(_ctx.handleDelete),
        i: common_vendor.p({
          limit: "1",
          title: ""
        }),
        j: common_vendor.o((e) => handleSelect(e, "backImg")),
        k: common_vendor.o(_ctx.handleDelete),
        l: common_vendor.p({
          limit: "1",
          title: ""
        }),
        m: common_vendor.o((e) => handleSelect(e, "certificationMaterial")),
        n: common_vendor.o(_ctx.handleDelete),
        o: common_vendor.p({
          limit: "1",
          title: ""
        }),
        p: common_vendor.o(handleSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f748249"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/auth/index.vue"]]);
wx.createPage(MiniProgramPage);
