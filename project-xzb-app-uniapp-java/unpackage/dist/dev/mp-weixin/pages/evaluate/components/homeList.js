"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_commonData = require("../../../utils/commonData.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "homeList",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  emits: ["refresh"],
  setup(__props, { emit }) {
    const props = __props;
    const alertDialog = common_vendor.ref(null);
    const store = common_vendor.useStore();
    store.state.user;
    const emojiShow = common_vendor.ref(false);
    const input = common_vendor.ref(null);
    const focus = common_vendor.ref(true);
    const inputValue = common_vendor.ref("");
    common_vendor.onMounted(() => {
    });
    const keyBoardHeight = common_vendor.ref("");
    let list = common_vendor.reactive({
      data: []
    });
    const handleHideKeyBoard = () => {
      if (!emojiShow.value) {
        common_vendor.index.hideKeyboard();
        focus.value = false;
      } else {
        focus.value = true;
      }
      emojiShow.value = !emojiShow.value;
    };
    const handleSubmit = () => {
      console.log("提交了");
      if (!inputValue.value.length) {
        return;
      } else {
        alertDialog.value.close();
      }
    };
    const handleClickEmoji = (item) => {
      inputValue.value = inputValue.value + item;
    };
    const handleBlur = () => {
      console.log(input.value, "----------");
    };
    const handleFocus = () => {
      emojiShow.value = false;
    };
    const handleToInfo = (item) => {
      console.log(item, "进入详情");
      common_vendor.index.navigateTo({
        url: "/pages/orderInfo/index?id=" + item.relationId
      });
    };
    common_vendor.watchEffect(() => {
      list.data = props.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list).data, (item, k0, i0) => {
          var _a, _b;
          return common_vendor.e({
            a: (_a = item.evaluatorInfo) == null ? void 0 : _a.avatar,
            b: common_vendor.t((_b = item.evaluatorInfo) == null ? void 0 : _b.nickName),
            c: "3474e078-0-" + i0,
            d: common_vendor.p({
              readonly: true,
              value: item.totalScore,
              margin: 5,
              color: "#D2DBE7",
              ["active-color"]: "#F74347"
            }),
            e: common_vendor.t(item.totalScore),
            f: common_vendor.t(item.content),
            g: common_vendor.t(item.createTime),
            h: item.pictureArray
          }, item.pictureArray ? {
            i: common_vendor.f(item.pictureArray, (item1, index, i1) => {
              return {
                a: item1,
                b: index
              };
            })
          } : {}, {
            j: item.serveItemImg,
            k: common_vendor.t(item.relationId),
            l: common_vendor.t(item.updateTime),
            m: common_vendor.t(item.serveAddress),
            n: item.id,
            o: common_vendor.o(($event) => handleToInfo(item), item.id)
          });
        }),
        b: focus.value,
        c: common_vendor.o(handleFocus),
        d: common_vendor.o(handleBlur),
        e: inputValue.value,
        f: common_vendor.o(($event) => inputValue.value = $event.detail.value),
        g: `${emojiShow.value ? "../../../static/new/btn_wenzi@2x.png" : "../../../static/new/btn_biaoqing@2x.png"}`,
        h: common_vendor.o(handleHideKeyBoard),
        i: !inputValue.value.length,
        j: common_vendor.n(!inputValue.value.length ? "disabled" : ""),
        k: common_vendor.o(handleSubmit),
        l: `${keyBoardHeight.value}px`,
        m: common_vendor.f(common_vendor.unref(utils_commonData.ImgList), (item, key, i0) => {
          return {
            a: common_vendor.t(item),
            b: key,
            c: common_vendor.o(($event) => handleClickEmoji(item), key)
          };
        }),
        n: `${keyBoardHeight.value}px`,
        o: common_vendor.sr(alertDialog, "3474e078-1", {
          "k": "alertDialog"
        }),
        p: common_vendor.p({
          type: "bottom",
          ["is-mask-click"]: true
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-app-uniapp-java/pages/evaluate/components/homeList.vue"]]);
wx.createComponent(Component);
