"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_api_order = require("../../../pages/api/order.js");
const utils_index = require("../../../utils/index.js");
const pages_api_service = require("../../../pages/api/service.js");
require("../../../utils/request.js");
require("../../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_component_NavBar + _easycom_uni_rate2 + _easycom_uni_easyinput2 + _easycom_uni_file_picker2 + _component_uni_section + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_data_checkbox = () => "../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_easyinput + Emoji + _easycom_uni_file_picker + _easycom_uni_data_checkbox)();
}
const Emoji = () => "./emoji.js";
const _sfc_main = {
  __name: "evaluate",
  setup(__props) {
    const edit = common_vendor.ref(true);
    const token = common_vendor.index.getStorageSync("token");
    const title = common_vendor.ref("评价");
    const store = common_vendor.useStore();
    const evaluateConfig = common_vendor.ref();
    const providerScoreList = common_vendor.ref([]);
    const serveItemScoreList = common_vendor.ref([]);
    const isSendRequest = common_vendor.ref(false);
    const moreStatus = common_vendor.ref("more");
    const loading = common_vendor.ref(true);
    const pages = common_vendor.ref(0);
    const netStatus = common_vendor.ref(true);
    let params = common_vendor.reactive({
      sortBy: "",
      ordersStatus: 400
    });
    const anonymous = common_vendor.ref([
      {
        text: "匿名评价",
        value: "1",
        checked: true
      }
    ]);
    const CommentData = common_vendor.ref({
      serveProviderScoreItems: [],
      serveItemScoreItems: [],
      serveItemEvaluationContent: "",
      isAnonymous: 0,
      ordersId: "",
      serveProviderEvaluationContent: "",
      serveItemPictureArray: []
    });
    common_vendor.onLoad((option) => {
      getEvaluateInfo();
      CommentData.value.ordersId = option.id;
    });
    const itemData = common_vendor.ref([]);
    const upImg = common_vendor.ref();
    const toSubmit = () => {
      if (!CommentData.value.serveItemEvaluationContent || !CommentData.value.serveItemPictureArray.length || !CommentData.value.ordersId) {
        const isNull = CommentData.value.serveItemScoreItems.some((item) => {
          return item.score === null;
        });
        if (isNull) {
          common_vendor.index.showToast({
            title: "请将信息填写完整",
            icon: "none",
            duration: 2e3
          });
          return;
        }
      }
      const params2 = common_vendor.ref({ ...CommentData.value });
      params2.value.serveProviderEvaluationContent = CommentData.value.serveProviderEvaluationContent === "" ? "此用户没有填写评价，系统默认好评" : CommentData.value.serveProviderEvaluationContent;
      pages_api_order.addComment(params2.value).then((res) => {
        if (res.data.code == 200) {
          common_vendor.index.showToast({
            title: "提交成功",
            icon: "none",
            duration: 2e3
          });
          title.value = "";
          edit.value = false;
          getNewData();
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none",
            duration: 2e3
          });
        }
      });
    };
    const toComments = () => {
      common_vendor.index.navigateTo({
        url: "/pages/commit/index"
      });
    };
    const handleDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/subPages/order/components/evaluate?id=${id}`
      });
    };
    const getNewData = async (type) => {
      var _a, _b;
      params = {
        ...params
      };
      params.sortBy = ((_a = itemData.value[itemData.value.length - 1]) == null ? void 0 : _a.sortBy) ? (_b = itemData.value[itemData.value.length - 1]) == null ? void 0 : _b.sortBy : "";
      if (isSendRequest.value) {
        return;
      }
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_order.getOrderScroll(params).then((res) => {
        if (res.data.code == 200) {
          const { data } = res.data;
          const items = data == null ? [] : data;
          moreStatus.value = items.length < 10 ? "no-more" : "more";
          itemData.value = itemData.value ? [...itemData.value, ...items] : items;
          pages.value = data.length;
          if (pages.value < 10) {
            isSendRequest.value = true;
            moreStatus.value = "noMore";
          }
          common_vendor.index.stopPullDownRefresh();
          netStatus.value = true;
          loading.value = true;
        }
      }).catch((err) => {
        console.log(err);
        netStatus.value = false;
      });
    };
    common_vendor.onReachBottom(() => {
      if (!edit.value && itemData.value.length > 0) {
        if (pages.value < 10) {
          moreStatus.value = "noMore";
          return false;
        } else {
          moreStatus.value = "loading";
          setTimeout(() => {
            getNewData();
          }, 1e3);
        }
      }
    });
    const handleToLink = () => {
      if (edit.value) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.redirectTo({
          url: "/subPages/order/index"
        });
      }
    };
    const changeAnonymous = (e) => {
      CommentData.value.isAnonymous = e.detail.data.length === 0 ? 0 : 1;
    };
    const getEvaluateInfo = () => {
      pages_api_service.getEvaluate().then((res) => {
        if (res.data.code === 200) {
          evaluateConfig.value = res.data.data;
          providerScoreList.value = evaluateConfig.value.serveProviderEvaluationSystemInfo.evaluationConfig.scoreConfigList.filter(
            (item) => item.enabled == true
          );
          CommentData.value.serveProviderScoreItems = providerScoreList.value.map(
            (item) => {
              return {
                itemId: item.itemId,
                score: 5,
                itemName: item.itemName
              };
            }
          );
          serveItemScoreList.value = evaluateConfig.value.serveItemEvaluationSystemInfo.evaluationConfig.scoreConfigList.filter(
            (item) => item.enabled == true
          );
          CommentData.value.serveItemScoreItems = serveItemScoreList.value.map(
            (item) => {
              return {
                itemId: item.itemId,
                score: null,
                itemName: item.itemName
              };
            }
          );
          store.commit("user/setEvaluate", res.data.data);
        }
      });
    };
    const uploadImage = (result) => {
      const tempFilePaths = result.tempFilePaths;
      const formData = {
        // 这里可以添加其他需要的表单数据
      };
      for (let i = 0; i < tempFilePaths.length; i++) {
        const uploadTask = common_vendor.index.uploadFile({
          url: "https://jzo2o-api-test.itheima.net/publics/storage/upload",
          // 替换为你的服务器上传接口地址
          filePath: tempFilePaths[i],
          name: "file",
          // 与服务器端点的文件字段名称匹配
          formData,
          header: {
            Authorization: `${token}`
            // 在这里将 token 添加到头部
          },
          success: (res) => {
            const data = JSON.parse(res.data);
            common_vendor.index.showToast({
              title: "上传成功！",
              icon: "none",
              duration: 2e3,
              position: "top"
            });
            CommentData.value.serveItemPictureArray.push(data.data.url);
            common_vendor.index.hideLoading();
          },
          fail: (error) => {
            console.error("上传失败", error);
            upImg.value.clearFiles(i);
            common_vendor.index.showToast({
              title: "上传失败！",
              icon: "none",
              duration: 2e3,
              position: "top"
            });
          }
        });
        uploadTask.onProgressUpdate((res) => {
          common_vendor.index.showLoading({
            title: "上传中",
            mask: true
          });
        });
      }
    };
    const handleEmoji1 = (val) => {
      CommentData.value.serveItemEvaluationContent += `${val.id}`;
    };
    const handleEmoji2 = (val) => {
      CommentData.value.serveProviderEvaluationContent += `${val.id}`;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return common_vendor.e({
        a: common_vendor.p({
          title: title.value,
          isShowBack: true,
          handleToLink
        }),
        b: edit.value
      }, edit.value ? {
        c: common_vendor.f(CommentData.value.serveItemScoreItems, (item, index, i0) => {
          return {
            a: common_vendor.t(item.itemName),
            b: "f5989750-1-" + i0,
            c: common_vendor.o(($event) => item.score = $event, index),
            d: common_vendor.p({
              activeColor: "#F74145",
              color: "#ccc",
              size: 21,
              margin: "16",
              modelValue: item.score
            }),
            e: index
          };
        }),
        d: common_vendor.o(($event) => CommentData.value.serveItemEvaluationContent = $event),
        e: common_vendor.p({
          type: "textarea",
          placeholder: "请输入对本次服务的的真实评价…",
          inputBorder: false,
          maxlength: (_a = evaluateConfig.value) == null ? void 0 : _a.serveItemEvaluationSystemInfo.evaluationConfig.contentWordNum,
          styles: {
            color: "#151515"
          },
          modelValue: CommentData.value.serveItemEvaluationContent
        }),
        f: common_vendor.o(handleEmoji1),
        g: common_vendor.p({
          id: 1
        }),
        h: common_vendor.t(CommentData.value.serveItemEvaluationContent.length),
        i: common_vendor.t((_b = evaluateConfig.value) == null ? void 0 : _b.serveItemEvaluationSystemInfo.evaluationConfig.contentWordNum),
        j: common_vendor.sr(upImg, "f5989750-5,f5989750-4", {
          "k": "upImg"
        }),
        k: common_vendor.o(uploadImage),
        l: common_vendor.o(uploadImage),
        m: common_vendor.o(($event) => CommentData.value.serveItemPictureArray = $event),
        n: common_vendor.p({
          limit: "3",
          preview: true,
          ["size-type"]: ["compressed"],
          ["source-type"]: ["album", "camera"],
          modelValue: CommentData.value.serveItemPictureArray
        }),
        o: common_vendor.p({
          type: "line"
        })
      } : {}, {
        p: edit.value
      }, edit.value ? {
        q: common_vendor.f(CommentData.value.serveProviderScoreItems, (item, index, i0) => {
          return {
            a: common_vendor.t(item.itemName),
            b: "f5989750-6-" + i0,
            c: common_vendor.o(($event) => item.score = $event, index),
            d: common_vendor.p({
              activeColor: "#F74145",
              color: "#ccc",
              size: 21,
              margin: "16",
              modelValue: item.score
            }),
            e: index
          };
        }),
        r: common_vendor.o(($event) => CommentData.value.serveProviderEvaluationContent = $event),
        s: common_vendor.p({
          type: "textarea",
          placeholder: "请输入对本次服务的的真实评价…",
          maxlength: (_d = (_c = evaluateConfig.value) == null ? void 0 : _c.serveProviderEvaluationSystemInfo) == null ? void 0 : _d.evaluationConfig.contentWordNum,
          inputBorder: false,
          styles: {
            color: "#151515"
          },
          modelValue: CommentData.value.serveProviderEvaluationContent
        }),
        t: common_vendor.o(handleEmoji2),
        v: common_vendor.p({
          id: 2
        }),
        w: common_vendor.t(CommentData.value.serveProviderEvaluationContent.length),
        x: common_vendor.t((_e = evaluateConfig.value) == null ? void 0 : _e.serveItemEvaluationSystemInfo.evaluationConfig.contentWordNum)
      } : {}, {
        y: edit.value
      }, edit.value ? {
        z: common_vendor.o(changeAnonymous),
        A: common_vendor.p({
          multiple: true,
          localdata: anonymous.value
        }),
        B: common_vendor.p({
          title: "匿名",
          type: "line"
        })
      } : {}, {
        C: !edit.value
      }, !edit.value ? {
        D: common_vendor.o(toComments)
      } : {}, {
        E: edit.value
      }, edit.value ? {
        F: common_vendor.o(toSubmit)
      } : {}, {
        G: !edit.value && itemData.value.length > 0
      }, !edit.value && itemData.value.length > 0 ? {
        H: common_vendor.f(itemData.value, (item, index, i0) => {
          return {
            a: item.serveItemImg,
            b: common_vendor.t(item.serveItemName),
            c: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date(item.serveStartTime.replace(/-/g, "/")))),
            d: common_vendor.o(($event) => handleDetail(item.id), index),
            e: common_vendor.t(item.serveAddress),
            f: index
          };
        })
      } : {}, {
        I: common_vendor.n(itemData.value.length > 0 ? "" : "grey"),
        J: common_vendor.n(edit.value ? "evaluate" : "bg-wt evaluate appList")
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f5989750"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/order/components/evaluate.vue"]]);
wx.createPage(MiniProgramPage);
