"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_order = require("../api/order.js");
const utils_index = require("../../utils/index.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  (_component_NavBar + _easycom_uni_rate2)();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  (_easycom_uni_rate + DeletePopup)();
}
const DeletePopup = () => "../../components/Operate/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const deleteRef = common_vendor.ref(null);
    const errorTipText = common_vendor.ref({
      title: "确定要删除该评价么？",
      text: "确定要删除该评价么？"
    });
    let scrollHeight = common_vendor.ref("");
    const deleteId = common_vendor.ref("");
    const data = common_vendor.ref([]);
    const requestData = common_vendor.reactive({
      pageNo: 0,
      pageSize: 10
    });
    const isSendRequest = common_vendor.ref(true);
    common_vendor.onLoad(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          scrollHeight.value = "height:" + (res.screenHeight - 84) + "px";
        }
      });
      getList();
    });
    const getList = () => {
      if (!isSendRequest.value) {
        return;
      }
      requestData.pageNo = requestData.pageNo + 1;
      pages_api_order.getCommentList(requestData).then((res) => {
        if (res.data.code == 200) {
          data.value.push(...res.data.data);
          if (res.data.data.length < requestData.pageSize) {
            isSendRequest.value = false;
          }
        } else {
          isSendRequest.value = false;
        }
      });
    };
    const LoadMoreCustomers = () => {
      getList();
    };
    const previewImage = (url, val) => {
      common_vendor.index.previewImage({
        current: url,
        urls: val,
        success: (res) => {
          console.log("success", res);
        },
        fail: (err) => {
          console.log("fail", err);
        }
      });
    };
    const subDelete = () => {
      pages_api_order.deleteComment(deleteId.value).then((res) => {
        if (res.data.code == 200) {
          common_vendor.index.showToast({
            title: "删除成功",
            icon: "none",
            duration: 2e3
          });
          deleteRef.value.popup.close();
          data.value = [];
          isSendRequest.value = true;
          requestData.pageNo = 0;
          getList();
        }
      });
    };
    const toOrderInfo = (val) => {
      common_vendor.index.navigateTo({ url: "/subPages/order/details?id=" + val });
    };
    const openDelete = (val) => {
      deleteId.value = val;
      deleteRef.value.popup.open();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "我的评价",
          isShowBack: true
        }),
        b: data.value.length === 0
      }, data.value.length === 0 ? {} : common_vendor.e({
        c: common_vendor.f(data.value, (item, index, i0) => {
          var _a, _b, _c, _d;
          return common_vendor.e({
            a: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_a = item.createTime) == null ? void 0 : _a.replace(/-/g, "/")))),
            b: "20907598-1-" + i0,
            c: common_vendor.p({
              activeColor: "#F74145",
              color: "#D8D8D8",
              ["allow-half"]: true,
              disabled: true,
              disabledColor: "#F74145",
              size: 14,
              value: item.totalScore,
              margin: "1"
            }),
            d: common_vendor.t(item.totalScore),
            e: common_vendor.t(((_b = item.evaluatorInfo) == null ? void 0 : _b.isAnonymous) === 1 ? "已匿名" : ""),
            f: common_vendor.t(item.content),
            g: ((_c = item.pictureArray) == null ? void 0 : _c.length) > 0
          }, ((_d = item.pictureArray) == null ? void 0 : _d.length) > 0 ? {
            h: common_vendor.f(item.pictureArray, (img, index2, i1) => {
              return {
                a: index2,
                b: img,
                c: common_vendor.o(($event) => previewImage(img, item.pictureArray), index2)
              };
            })
          } : {}, {
            i: item.serveItemImg,
            j: common_vendor.t(item.targetName),
            k: common_vendor.t(item.serveAddress),
            l: common_vendor.o(($event) => toOrderInfo(item.relationId), index),
            m: common_vendor.o(($event) => openDelete(item.id), index),
            n: index
          });
        }),
        d: !isSendRequest.value
      }, !isSendRequest.value ? {} : {}, {
        e: common_vendor.s(common_vendor.unref(scrollHeight)),
        f: common_vendor.o(LoadMoreCustomers)
      }), {
        g: common_vendor.sr(deleteRef, "20907598-2", {
          "k": "deleteRef"
        }),
        h: common_vendor.o(subDelete),
        i: common_vendor.p({
          errorTipText: errorTipText.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20907598"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/commit/index.vue"]]);
wx.createPage(MiniProgramPage);
