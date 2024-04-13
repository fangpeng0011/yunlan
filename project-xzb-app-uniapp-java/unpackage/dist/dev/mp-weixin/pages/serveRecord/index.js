"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (UniNav + _easycom_uni_file_picker)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("开始服务");
    const remark = common_vendor.ref("");
    const orderId = common_vendor.ref("");
    const fileList = common_vendor.ref([]);
    const from = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      orderId.value = options.id;
      title.value = options.status == 1 ? "开始服务" : "完成服务";
      from.value = options.type;
      console.log(options, "服务记录页面");
    });
    const handleDelete = (e2) => {
      fileList.value = fileList.value.filter(
        (item) => item.uuid !== e2.tempFile.uuid
      );
      console.log(e2.tempFile.uuid, "删除回调");
    };
    const handleSuccess = (e2) => {
      console.log(e2, "上传成功回调");
    };
    const uploadImage = async () => {
      const promises = fileList.value.map((item) => {
        return new Promise((resolve, reject) => {
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
              const imageUrl = JSON.parse(uploadFileRes.data).data.url;
              resolve(imageUrl);
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      });
      try {
        const uploadedImages = await Promise.all(promises);
        return uploadedImages;
      } catch (error) {
        console.error(error);
        common_vendor.index.showToast({
          title: "图片上传失败",
          duration: 1e3,
          icon: "none"
        });
        return [];
      }
    };
    const handleSelect = (e2) => {
      if (fileList.value.length) {
        fileList.value = fileList.value.concat(e2.tempFiles);
      } else {
        fileList.value = e2.tempFiles;
      }
    };
    const handleFail = () => {
      console.log(e, "上传失败");
    };
    const handleSubmit = async () => {
      const uploadedImages = await uploadImage();
      if (!fileList.value.length) {
        return common_vendor.index.showToast({
          title: "请上传图片",
          duration: 2e3,
          icon: "none"
        });
      }
      common_vendor.index.showLoading({
        title: "loading"
      });
      let startParams = {
        id: orderId.value,
        serveBeforeImgs: uploadedImages,
        serveBeforeIllustrate: remark.value
      };
      let finishParams = {
        id: orderId.value,
        serveAfterImgs: uploadedImages,
        serveAfterIllustrate: remark.value
      };
      const sameFunc = () => {
        if (from.value === "list") {
          goBack();
        } else {
          common_vendor.index.navigateTo({
            url: "/pages/orderInfo/index?id=" + orderId.value + "&type=info"
          });
        }
        remark.value = "";
        orderId.value = "";
        fileList.value = [];
      };
      if (title.value === "开始服务") {
        pages_api_order.startServe(startParams).then((res) => {
          common_vendor.index.hideLoading();
          if (res.code === 200) {
            sameFunc();
          } else {
            common_vendor.index.showToast({
              title: "接口提交失败!",
              duration: 1e3,
              icon: "none"
            });
          }
        }).catch((err) => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "接口提交失败!",
            duration: 1e3,
            icon: "none"
          });
        });
      } else {
        pages_api_order.finishServe(finishParams).then((res) => {
          if (res.code === 200) {
            common_vendor.index.hideLoading();
            sameFunc();
          } else {
            common_vendor.index.showToast({
              title: "接口提交失败!",
              duration: 1e3,
              icon: "none"
            });
          }
        });
      }
      console.log(uploadedImages, "上传后的图片链接数组");
    };
    const handleInput = (e2) => {
      remark.value = e2.detail.value;
      console.log(e2.detail.value, "-----");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.t(title.value === "开始服务" ? "前" : "后"),
        d: common_vendor.o(handleSuccess),
        e: common_vendor.o(handleSelect),
        f: common_vendor.o(handleFail),
        g: common_vendor.o(handleDelete),
        h: common_vendor.p({
          limit: "3",
          title: "最多上传3张图片"
        }),
        i: common_vendor.o(handleInput),
        j: remark.value,
        k: common_vendor.t(remark.value.length),
        l: common_vendor.t(50 - remark.value.length),
        m: common_vendor.o(handleSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1ccdec0f"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/serveRecord/index.vue"]]);
wx.createPage(MiniProgramPage);
