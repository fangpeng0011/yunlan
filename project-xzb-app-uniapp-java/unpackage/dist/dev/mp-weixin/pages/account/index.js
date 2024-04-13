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
  (UniNav + _easycom_uni_easyinput + _easycom_uni_file_picker + SelectArea)();
}
const SelectArea = () => "./components/selectArea.js";
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("账户设置");
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    let bankIndex = common_vendor.ref(3);
    const selectArea = common_vendor.ref();
    const formData = common_vendor.ref({
      name: "",
      bankName: "",
      province: "",
      city: "",
      district: "",
      branch: "",
      account: "",
      accountCertification: "",
      type: 2
    });
    const bankArray = common_vendor.ref([
      {
        label: "中国工商银行",
        value: 1
      },
      {
        label: "中国建设银行",
        value: 2
      },
      {
        label: "中国邮政储蓄银行",
        value: 3
      },
      {
        label: "中国农业银行",
        value: 4
      },
      {
        label: "北京农商银行",
        value: 5
      },
      {
        label: "招商银行",
        value: 6
      }
    ]);
    common_vendor.onMounted(() => {
      getAccountInfoFunc();
    });
    const handleDelete = () => {
      formData.value.accountCertification = "";
    };
    const getAccountInfoFunc = () => {
      pages_api_setting.getAccountInfo().then((res) => {
        formData.value.name = res.data.name;
        formData.value.bankName = res.data.bankName;
        formData.value.province = res.data.province;
        formData.value.city = res.data.city;
        formData.value.district = res.data.district;
        formData.value.branch = res.data.branch;
        formData.value.account = res.data.account;
        formData.value.accountCertification = res.data.accountCertification;
        console.log(res, "resssssss");
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "账户信息获取失败!",
          duration: 1e3,
          icon: "none"
        });
      });
    };
    const handleSelect = (e) => {
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
          formData.value.accountCertification = JSON.parse(
            uploadFileRes.data
          ).data.url;
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "图片上传失败",
            duration: 1e3,
            icon: "none"
          });
        }
      });
    };
    const handleSubmit = () => {
      if (!formData.value.name) {
        return common_vendor.index.showToast({
          title: "请填写户名",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.bankName) {
        return common_vendor.index.showToast({
          title: "请选择银行",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.province || !formData.value.city || !formData.value.district) {
        return common_vendor.index.showToast({
          title: "请选择开户行",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.branch) {
        return common_vendor.index.showToast({
          title: "请填写网点",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.account) {
        return common_vendor.index.showToast({
          title: "请填写银行账号",
          duration: 1e3,
          icon: "none"
        });
      } else if (!formData.value.accountCertification) {
        return common_vendor.index.showToast({
          title: "请上传开户证明",
          duration: 1e3,
          icon: "none"
        });
      }
      pages_api_setting.postAccount(formData.value).then((res) => {
        console.log(res, "ress");
        if (res.code === 200) {
          common_vendor.index.showToast({
            title: "提交成功!",
            duration: 1e3,
            icon: "none"
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
    const getAreaData = (e) => {
      formData.value.province = e.province.label;
      formData.value.city = e.city.label;
      formData.value.district = e.area.label;
      console.log(e, "省市区");
    };
    const handleBank = (e) => {
      bankIndex.value = e.detail.value;
      formData.value.bankName = bankArray.value[e.detail.value].label;
      console.log(e.detail.value, bankIndex.value, "数组下标");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const handleOpenLocation = () => {
      selectArea.value.handleOpen();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.o(($event) => formData.value.name = $event),
        d: common_vendor.p({
          placeholder: "请输入户名",
          placeholderStyle: {
            fontSize: "16px"
          },
          modelValue: formData.value.name
        }),
        e: common_vendor.t(formData.value.bankName ? formData.value.bankName : "请选择银行"),
        f: common_vendor.n(!formData.value.bankName ? "placeholder" : ""),
        g: common_vendor.unref(bankIndex),
        h: common_vendor.o(handleBank),
        i: bankArray.value,
        j: common_vendor.t(formData.value.province && formData.value.city && formData.value.district ? formData.value.province + "-" + formData.value.city + "-" + formData.value.district : "请选择开户行"),
        k: common_vendor.n(!(formData.value.province && formData.value.city && formData.value.district) ? "placeholder" : ""),
        l: common_vendor.o(handleOpenLocation),
        m: common_vendor.o(($event) => formData.value.branch = $event),
        n: common_vendor.p({
          placeholder: "请输入网点名称",
          placeholderStyle: {
            fontSize: "16px"
          },
          modelValue: formData.value.branch
        }),
        o: common_vendor.o(($event) => formData.value.account = $event),
        p: common_vendor.p({
          placeholder: "请输入银行账号",
          placeholderStyle: {
            fontSize: "16px"
          },
          modelValue: formData.value.account
        }),
        q: formData.value.accountCertification
      }, formData.value.accountCertification ? {
        r: formData.value.accountCertification
      } : {}, {
        s: common_vendor.o(handleSelect),
        t: common_vendor.o(handleDelete),
        v: common_vendor.p({
          limit: "1",
          title: "",
          value: [{
            url: formData.value.accountCertification,
            name: "file.txt",
            extname: "txt"
          }]
        }),
        w: common_vendor.o(handleSubmit),
        x: common_vendor.sr(selectArea, "3c1b446f-5", {
          "k": "selectArea"
        }),
        y: common_vendor.o(getAreaData),
        z: common_vendor.p({
          provinceName: formData.value.province,
          cityName: formData.value.city,
          countyName: formData.value.district
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c1b446f"], ["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/account/index.vue"]]);
wx.createPage(MiniProgramPage);
