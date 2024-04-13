"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_address = require("../api/address.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_nav_bar = common_vendor.resolveComponent("nav-bar");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _component_net_fail = common_vendor.resolveComponent("net-fail");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_nav_bar + _easycom_uni_load_more2 + _component_net_fail + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let scrollHeight = common_vendor.ref("");
    let popup = common_vendor.ref(null);
    let isAllSelect = common_vendor.ref(false);
    let isManage = common_vendor.ref(false);
    const detailId = common_vendor.ref("");
    let deleteIds = common_vendor.reactive({
      data: []
      //删除的地址id集合
    });
    let list = common_vendor.reactive({
      data: []
      //列表数据
    });
    let pageInfo = common_vendor.reactive({
      page: 1,
      pageSize: 10
    });
    let status = common_vendor.ref("more");
    let type = common_vendor.ref("");
    let isFromAddress = common_vendor.ref("");
    let netStatus = common_vendor.ref(true);
    common_vendor.onLoad((options) => {
      type.value = options.type;
      isFromAddress.value = options.isFromAddress;
      detailId.value = options.detailId;
      common_vendor.index.getSystemInfo({
        success: (res) => {
          scrollHeight.value = "height:" + (res.screenHeight - 177) + "px";
        }
      });
    });
    common_vendor.onMounted(() => {
      getList();
    });
    common_vendor.onPullDownRefresh(() => {
      pageInfo.page = 1;
      getList();
    });
    const handleToRefresh = () => {
      pageInfo.page = 1;
      getList();
    };
    const handleSaveToDefaultAddress = (id, isDefault) => {
      if (isManage.value) {
        return;
      }
      let flag = isDefault === 1 ? 0 : 1;
      pages_api_address.setDefaultAddress(id, flag).then((res) => {
        pageInfo.page = 1;
        getList();
        if (res.code === 200) {
          common_vendor.index.showToast({
            title: "修改成功",
            icon: "none",
            duration: 1e3,
            type: "success"
          });
        } else {
          common_vendor.index.showToast({
            title: "修改失败",
            icon: "none",
            duration: 1e3,
            //提示的延迟时间，单位毫秒，默认：1500
            type: "error"
          });
        }
      }).catch(() => {
        common_vendor.index.showToast({
          title: "网络异常",
          duration: 2e3,
          icon: "none"
        });
      });
    };
    const handleToLink = () => {
      if (type.value !== "address") {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/my/index"
        });
      }
    };
    const handleToAddressInfo = (id) => {
      if (type.value === "address") {
        return;
      }
      if (detailId.value === "undefined") {
        return;
      }
      common_vendor.index.setStorageSync("activeAddressId", id);
      if (isFromAddress.value === "true") {
        common_vendor.index.navigateBack({
          delta: 1
        });
        return;
      } else {
        common_vendor.index.navigateBack({
          delta: 2
        });
      }
    };
    const handleDeleteOrAdd = () => {
      if (isManage.value) {
        if (deleteIds.data.length)
          popup.value.open();
      } else {
        type.value = "add";
        common_vendor.index.navigateTo({
          url: "/subPages/address-info/index?isFromAddress=" + isFromAddress.value + "&editOrAdd=add&type=" + type.value + "&detailId=" + detailId.value
        });
      }
    };
    const handleEditAddress = (item) => {
      if (isManage.value) {
        return;
      }
      common_vendor.index.redirectTo({
        url: "/subPages/address-info/index?id=" + item.id + "&isFromAddress=" + isFromAddress.value + "&editOrAdd=edit&type=" + type.value + "&isDefault=" + item.isDefault + "&detailId=" + detailId.value
      });
    };
    const getList = (flag) => {
      status.value = "loading";
      pages_api_address.getAddressBook({
        pageNo: pageInfo.page,
        pageSize: pageInfo.pageSize,
        isAsc1: false,
        isAsc2: false,
        orderBy1: "isDefault",
        orderBy2: "updateTime"
      }).then((res) => {
        if (res.data.code === 200) {
          let arr = res.data.data.list || [];
          status.value = arr.length < 10 ? "no-more" : "more";
          if (flag === "topPull") {
            list.data = list.data.concat(arr);
          } else {
            list.data = arr;
          }
        }
        if (list.data.every((item) => item.selected)) {
          isAllSelect.value = true;
        } else {
          isAllSelect.value = false;
        }
        common_vendor.index.stopPullDownRefresh();
        netStatus.value = true;
      }).catch(() => {
        common_vendor.index.showToast({
          title: "网络异常",
          duration: 2e3,
          icon: "none"
        });
        netStatus.value = true;
      });
    };
    const LoadMoreCustomers = () => {
      pageInfo.page = pageInfo.page + 1;
      if (status.value === "no-more") {
        return;
      }
      getList("topPull");
    };
    const handleEdit = () => {
      isManage.value = !isManage.value;
    };
    const handledDelete = (id) => {
      if (isManage.value) {
        return;
      }
      popup.value.open();
      deleteIds.data.push(id);
    };
    const close = () => {
      popup.value.close();
      deleteIds.data = [];
    };
    const confirm = () => {
      popup.value.close();
      pages_api_address.deleteAddressBook(deleteIds.data).then(() => {
        pageInfo.page = 1;
        pageInfo.pageSize = 10;
        getList();
        common_vendor.index.showToast({
          title: "删除成功",
          icon: "success",
          duration: 1e3
        });
        isManage.value = false;
      }).catch(() => {
        common_vendor.index.showToast({
          title: "网络异常",
          duration: 2e3,
          icon: "none"
        });
      });
    };
    const checkbox = (index, item) => {
      list.data[index].selected = !list.data[index].selected;
      if (list.data.every((item2) => item2.selected)) {
        isAllSelect.value = true;
      } else {
        isAllSelect.value = false;
      }
      deleteIds.data = list.data.filter((item2) => item2.selected).map((item2) => item2.id);
    };
    const selectAll = () => {
      isAllSelect.value = !isAllSelect.value;
      list.data = list.data.map((item) => {
        return Object.assign({}, item, {
          selected: isAllSelect.value
        });
      });
      deleteIds.data = list.data.filter((item) => item.selected).map((item) => item.id);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "我的地址",
          handleToLink,
          isShowBack: true
        }),
        b: common_vendor.unref(netStatus)
      }, common_vendor.unref(netStatus) ? common_vendor.e({
        c: common_vendor.unref(list).data.length > 0
      }, common_vendor.unref(list).data.length > 0 ? {
        d: common_vendor.f(common_vendor.unref(list).data, (item, index, i0) => {
          return common_vendor.e(common_vendor.unref(isManage) ? {
            a: String(index),
            b: item.selected
          } : {}, {
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.phone),
            e: common_vendor.t(item.province ? item.province + item.city + item.county + item.address : "")
          }, common_vendor.unref(type) !== "get" ? {
            f: Boolean(item.isDefault) ? 1 : "",
            g: common_vendor.o(($event) => handleSaveToDefaultAddress(item.id, item.isDefault), index)
          } : {}, {
            h: common_vendor.o(($event) => handleEditAddress(item), index),
            i: common_vendor.o(($event) => handledDelete(item.id), index),
            j: common_vendor.o(($event) => common_vendor.unref(isManage) ? checkbox(index) : handleToAddressInfo(item.id), index),
            k: index
          });
        }),
        e: common_vendor.unref(isManage),
        f: common_vendor.unref(type) !== "get",
        g: common_vendor.n(!common_vendor.unref(isManage) ? "" : "active"),
        h: common_vendor.n(common_vendor.unref(type) === "get" ? "active" : ""),
        i: common_vendor.n(common_vendor.unref(isManage) ? "isChecked" : ""),
        j: common_vendor.n(common_vendor.unref(isManage) ? "isChecked" : ""),
        k: common_vendor.p({
          status: common_vendor.unref(status)
        }),
        l: common_vendor.s(common_vendor.unref(scrollHeight)),
        m: common_vendor.o(LoadMoreCustomers)
      } : {}, {
        n: common_vendor.unref(isManage)
      }, common_vendor.unref(isManage) ? {
        o: common_vendor.unref(isAllSelect),
        p: common_vendor.o(selectAll)
      } : {}, {
        q: common_vendor.unref(list).data.length > 0
      }, common_vendor.unref(list).data.length > 0 ? {
        r: common_vendor.t(common_vendor.unref(isManage) ? "完成" : "管理"),
        s: common_vendor.o(handleEdit)
      } : {}, {
        t: common_vendor.t(common_vendor.unref(isManage) ? "删除" : "新增地址"),
        v: common_vendor.n(common_vendor.unref(isManage) && common_vendor.unref(deleteIds).data.length || !common_vendor.unref(isManage) ? "active" : ""),
        w: common_vendor.o(handleDeleteOrAdd)
      }) : {
        x: common_vendor.p({
          handleToRefresh
        })
      }, {
        y: common_vendor.o(close),
        z: common_vendor.o(confirm),
        A: common_vendor.p({
          mode: "base",
          content: common_vendor.unref(isManage) ? "确定删除所选地址？" : "确定删除此条地址？",
          animation: false,
          ["before-close"]: true
        }),
        B: common_vendor.sr(popup, "c47feaaa-3", {
          "k": "popup"
        }),
        C: common_vendor.p({
          type: "dialog",
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c47feaaa"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/address/index.vue"]]);
wx.createPage(MiniProgramPage);
