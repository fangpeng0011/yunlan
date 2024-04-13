"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_api_service = require("../../api/service.js");
const pages_api_order = require("../../api/order.js");
const utils_index = require("../../../utils/index.js");
const pages_api_address = require("../../api/address.js");
const pages_api_coupon = require("../../api/coupon.js");
const utils_commonData = require("../../../utils/commonData.js");
require("../../../utils/request.js");
require("../../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _component_test = common_vendor.resolveComponent("test");
  (_component_NavBar + _easycom_uni_number_box2 + _easycom_uni_rate2 + _easycom_uni_popup2 + _component_test)();
}
const _easycom_uni_number_box = () => "../../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_rate + EmptyPage + _easycom_uni_popup + GetTimePicker + CouponSelect)();
}
const GetTimePicker = () => "../../../components/GetTimePicker/index.js";
const CouponSelect = () => "../../../components/couponSelect/index.js";
const EmptyPage = () => "../../../components/EmptyPage/index.js";
const _sfc_main = {
  __name: "airMaintenance",
  setup(__props) {
    const title = common_vendor.ref("全部服务");
    const activeId = common_vendor.ref(0);
    const opacity = common_vendor.ref(0);
    const scrollHeight = common_vendor.ref(0);
    const scrollBoxHeight = common_vendor.ref(0);
    const scrollTop = common_vendor.ref(0);
    const scrollGoods = common_vendor.ref(0);
    const scrollReplays = common_vendor.ref(0);
    const NavBarHeight = common_vendor.ref(0);
    const reservationBox = common_vendor.ref({
      animation: true
    });
    const reportId = common_vendor.ref("");
    const report = common_vendor.ref(null);
    const isSendRequest = common_vendor.ref(true);
    const timePicker = common_vendor.ref();
    const toDoorTimeLabel = common_vendor.ref("");
    const activeCoupon = common_vendor.ref({});
    const toDoorTime = common_vendor.ref("");
    const detailData = common_vendor.ref();
    const detailId = common_vendor.ref();
    const addressData = common_vendor.ref({});
    const show = common_vendor.ref(false);
    const coupons = common_vendor.ref();
    const hour = common_vendor.ref(0);
    const scrollTopId = common_vendor.ref("");
    const isSend = common_vendor.ref(false);
    const canSubmit = common_vendor.computed(() => {
      return addressData.value.id && toDoorTimeLabel.value;
    });
    const requestData = common_vendor.ref({
      pageNo: 1,
      pageSize: 10,
      sortBy: 1,
      targetId: "",
      targetTypeId: 6
    });
    const number = common_vendor.ref(1);
    const reNum = common_vendor.ref(1);
    const couponList = common_vendor.ref([]);
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
    const changeTab = (id) => {
      activeId.value = id;
      if (id === 1) {
        scrollTop.value = scrollGoods.value - 41 - parseInt(NavBarHeight.value);
      } else {
        scrollTop.value = scrollReplays.value - 41 - parseInt(NavBarHeight.value);
        scrollTopId.value = "replayDetail";
      }
    };
    const onPageScroll = (e) => {
      if (e.detail.scrollTop < scrollGoods.value - 41 - parseInt(NavBarHeight.value)) {
        activeId.value = 0;
      } else if (e.detail.scrollTop > scrollGoods.value - 41 - parseInt(NavBarHeight.value) && e.detail.scrollTop < scrollReplays.value - 730) {
        activeId.value = 1;
      } else if (e.detail.scrollTop > scrollReplays.value - 730) {
        activeId.value = 2;
      }
      scrollHeight.value = e.detail.scrollTop;
      calculateOpacity();
    };
    const calculateOpacity = () => {
      const threshold = scrollGoods.value;
      const maxOpacity = 1;
      if (scrollHeight.value < threshold) {
        opacity.value = scrollHeight.value / threshold;
      } else {
        opacity.value = maxOpacity;
        if (!isSend.value) {
          const query = common_vendor.index.createSelectorQuery();
          query.select("#goodsDetail").boundingClientRect((rect) => {
            scrollReplays.value = scrollGoods.value + rect.height;
          }).exec();
          isSend.value = true;
        }
      }
    };
    const fixedBarStyle = common_vendor.computed(() => {
      return {
        opacity: `${opacity.value}`,
        top: `${NavBarHeight.value}`
      };
    });
    common_vendor.onLoad((option) => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          scrollHeight.value = "height:" + (res.screenHeight - 84) + "px";
        }
      });
      title.value = option.title;
      detailId.value = option.id;
      if (option.addressId) {
        show.value = true;
        getAddress(option.addressId);
      } else {
        getDefaultAddressData();
      }
      getData(detailId.value);
      const query = common_vendor.index.createSelectorQuery();
      query.select("#goodsDetail").boundingClientRect((rect) => {
        scrollGoods.value = rect.top;
        scrollReplays.value = scrollGoods.value + rect.bottom;
      }).exec();
    });
    common_vendor.onShow(() => {
      const id = common_vendor.index.getStorageSync("activeAddressId");
      if (id) {
        getAddress(id);
        common_vendor.index.removeStorageSync("activeAddressId");
      }
      if (reNum.value > 1) {
        reNum.value = 1;
      }
    });
    const data = common_vendor.ref([]);
    const openReport = (id) => {
      reportId.value = id;
      report.value.open();
    };
    const handleReport = (val) => {
      pages_api_order.setReport({
        reason: val,
        bizType: 1,
        targetTypeId: 6,
        bizId: reportId.value
      }).then((res) => {
        if (res.data.code === 200) {
          common_vendor.index.showToast({
            title: "举报成功",
            icon: "success",
            duration: 2e3
          });
          getCommentList();
          report.value.close();
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none",
            duration: 2e3
          });
        }
      });
    };
    const getAddress = async (val) => {
      await pages_api_address.getAddressBookDetail(val).then((res) => {
        addressData.value = res.data.data;
      });
    };
    const getData = async (val) => {
      await pages_api_service.getServeById(val).then((res) => {
        if (res.data.code === 200) {
          detailData.value = res.data.data;
          if (show.value) {
            showPopup();
          }
          requestData.value.targetId = res.data.data.serveItemId;
          getCommentList();
          title.value = detailData.value.serveItemName;
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none"
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    const getDefaultAddressData = async () => {
      await pages_api_address.getDefaultAddress().then((res) => {
        if (res.data.code === 200) {
          addressData.value = res.data.data;
        }
      });
    };
    const transferHeight = (e) => {
      NavBarHeight.value = e;
    };
    const showPopup = () => {
      pages_api_coupon.getOrderCouponList({
        serveId: detailId.value,
        purNum: number.value
      }).then((res) => {
        if (res.data.code === 200) {
          couponList.value = res.data.data;
          activeCoupon.value = res.data.data[0];
        }
      });
      reservationBox.value.open();
    };
    const handleCancel = () => {
      reservationBox.value.close();
      report.value.close();
    };
    const handleGetTime = () => {
      hour.value = (/* @__PURE__ */ new Date()).getHours();
      timePicker.value.handleOpen();
    };
    const handleToAddress = () => {
      common_vendor.index.navigateTo({
        url: "/pages/address/index?isFromAddress=true&detailId=" + detailId.value
      });
    };
    const getTime = (value) => {
      if (value.selectedTime < 20) {
        value.selectedTimeLabel = "0" + value.selectedTimeLabel;
      }
      toDoorTimeLabel.value = value.selectedDayLabel + " " + value.selectedTimeLabel;
      toDoorTime.value = String((/* @__PURE__ */ new Date()).getFullYear()) + "-" + String((/* @__PURE__ */ new Date()).getMonth() + 1) + "-" + ((/* @__PURE__ */ new Date()).getDate() + value.selectedDay + " " + String(
        (value.selectedTime === 1 ? (/* @__PURE__ */ new Date()).getHours() + 1 : value.selectedTime) + ":00:00"
      ));
    };
    const handleSubmit = async (val) => {
      if (reNum.value > 1) {
        common_vendor.index.showToast({
          title: "请勿重复提交",
          icon: "none",
          mask: true,
          duration: 2e3
        });
      } else if (reNum.value === 1) {
        let time = toDoorTimeLabel.value + ":00";
        reNum.value++;
        await pages_api_service.addOrder({
          serveId: detailId.value,
          addressBookId: addressData.value.id,
          serveStartTime: time,
          purNum: number.value,
          couponId: activeCoupon.value ? activeCoupon.value.id : ""
        }).then((res) => {
          if (res.data.code === 200) {
            let price = 0;
            if (activeCoupon.value) {
              price = activeCoupon.value.discountAmount ? activeCoupon.value.discountAmount : 0;
            }
            const date = /* @__PURE__ */ new Date();
            common_vendor.index.navigateTo({
              url: "/pages/pay/index?id=" + res.data.data.id + "&price=" + val + "&time=" + date + "&cheapPrice=" + price
            });
          } else {
            reNum.value = 1;
            common_vendor.index.showToast({
              title: res.data.msg,
              icon: "none",
              mask: true,
              duration: 2e3
            });
          }
        }).catch((err) => {
          console.log(err);
          common_vendor.index.showToast({
            title: "请求异常",
            icon: "none",
            mask: true,
            duration: 2e3
          });
          reNum.value = 1;
        });
      }
    };
    const handleSelectCoupon = (val) => {
      activeCoupon.value = val;
      coupons.value.handleCancel();
    };
    const handleGetCoupon = () => {
      if (couponList.value.length <= 0) {
        return;
      }
      coupons.value.handleOpen();
    };
    const getCommentList = () => {
      pages_api_order.getCommentListByObj(requestData.value).then((res) => {
        if (res.data.code === 200) {
          data.value.push(...res.data.data);
          if (res.data.data.length < requestData.value.pageSize) {
            isSendRequest.value = false;
          }
        }
      });
    };
    const handleLike = async (state, val) => {
      await pages_api_order.likeComment({
        id: val,
        state,
        likeTargetType: 1
      }).then((res) => {
        if (res.data.code === 200) {
          getCommentList();
        }
      });
    };
    const LoadMoreCustomers = () => {
      if (isSendRequest.value === false) {
        return;
      }
      requestData.value.pageNo = requestData.value.pageNo + 1;
      getCommentList();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return common_vendor.e({
        a: common_vendor.n(activeId.value === 1 ? "tabBar-item active" : "tabBar-item"),
        b: common_vendor.o(($event) => changeTab(1)),
        c: common_vendor.n(activeId.value === 2 ? "tabBar-item active" : "tabBar-item"),
        d: common_vendor.o(($event) => changeTab(2)),
        e: common_vendor.s(common_vendor.unref(fixedBarStyle)),
        f: common_vendor.o(transferHeight),
        g: common_vendor.p({
          title: title.value,
          isShowBack: true
        }),
        h: (_a = detailData.value) == null ? void 0 : _a.serveItemImg,
        i: common_vendor.t((_b = detailData.value) == null ? void 0 : _b.serveItemName),
        j: detailData.value
      }, detailData.value ? {
        k: common_vendor.t((_c = detailData.value) == null ? void 0 : _c.price),
        l: common_vendor.t(common_vendor.unref(utils_commonData.UNIT)[((_d = detailData.value) == null ? void 0 : _d.unit) - 1].label)
      } : {}, {
        m: common_vendor.o(($event) => number.value = $event),
        n: common_vendor.p({
          min: 1,
          max: 10,
          modelValue: number.value
        }),
        o: (_e = detailData.value) == null ? void 0 : _e.detailImg,
        p: common_vendor.f(data.value, (item, index, i0) => {
          var _a2;
          return common_vendor.e({
            a: item.evaluatorInfo.avatar,
            b: common_vendor.t(item.evaluatorInfo.isAnonymous === 0 ? item.evaluatorInfo.nickName : "匿名用户"),
            c: "ecebff2e-2-" + i0,
            d: common_vendor.p({
              activeColor: "#F74145",
              color: "#D8D8D8",
              ["allow-half"]: true,
              disabled: true,
              disabledColor: "#F74145",
              size: 13,
              value: item.totalScore,
              margin: "1"
            }),
            e: common_vendor.t(item.totalScore),
            f: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_a2 = item.createTime) == null ? void 0 : _a2.replace(/-/g, "/")))),
            g: common_vendor.t(item.content),
            h: common_vendor.f(item.pictureArray, (img, index2, i1) => {
              return {
                a: index2,
                b: img,
                c: common_vendor.o(($event) => previewImage(img, item.pictureArray), index2)
              };
            }),
            i: item.isLiked === false
          }, item.isLiked === false ? {
            j: common_vendor.o(($event) => handleLike(1, item.id), index)
          } : {
            k: common_vendor.o(($event) => handleLike(0, item.id), index)
          }, {
            l: common_vendor.t(item.statistics.likeNumber),
            m: common_vendor.o(($event) => openReport(item.id), index),
            n: index
          });
        }),
        q: data.value.length <= 0
      }, data.value.length <= 0 ? {
        r: common_vendor.p({
          emptyInfo: "暂无评价"
        })
      } : {}, {
        s: common_vendor.o(onPageScroll),
        t: common_vendor.s(scrollBoxHeight.value),
        v: scrollTop.value,
        w: common_vendor.o(LoadMoreCustomers),
        x: common_vendor.o(showPopup),
        y: common_vendor.o(handleCancel),
        z: common_vendor.f(common_vendor.unref(utils_commonData.reportList), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: index,
            c: common_vendor.o(($event) => handleReport(item.value), index)
          };
        }),
        A: common_vendor.o(handleCancel),
        B: common_vendor.sr(report, "ecebff2e-4", {
          "k": "report"
        }),
        C: common_vendor.p({
          ["mask-background-color"]: "rgba(0,0,0,0.6)",
          type: "bottom",
          ["safe-area"]: true,
          ["background-color"]: "#F0F0F0"
        }),
        D: common_vendor.o(handleCancel),
        E: !addressData.value.province
      }, !addressData.value.province ? {} : {}, {
        F: addressData.value
      }, addressData.value ? {
        G: common_vendor.t(addressData.value.province),
        H: common_vendor.t(addressData.value.city),
        I: common_vendor.t(addressData.value.country),
        J: common_vendor.t(addressData.value.address),
        K: common_vendor.t(addressData.value.name),
        L: common_vendor.t(addressData.value.phone)
      } : {}, {
        M: common_vendor.o(handleToAddress),
        N: common_vendor.t(toDoorTimeLabel.value ? toDoorTimeLabel.value : "请选择"),
        O: common_vendor.n(toDoorTimeLabel.value ? "active" : ""),
        P: common_vendor.o(handleGetTime),
        Q: couponList.value.length > 0
      }, couponList.value.length > 0 ? {
        R: common_vendor.t(activeCoupon.value.id ? `-${activeCoupon.value.discountAmount}元` : `${couponList.value.length}张可用`),
        S: common_vendor.n(((_f = activeCoupon.value) == null ? void 0 : _f.id) ? "active" : "")
      } : {}, {
        T: couponList.value.length <= 0
      }, couponList.value.length <= 0 ? {} : {}, {
        U: common_vendor.o(handleGetCoupon),
        V: couponList.value.length > 0
      }, couponList.value.length > 0 ? {
        W: common_vendor.t((((_g = detailData.value) == null ? void 0 : _g.price) * number.value - (activeCoupon.value.discountAmount ? activeCoupon.value.discountAmount : 0)).toFixed(2))
      } : {}, {
        X: couponList.value.length <= 0
      }, couponList.value.length <= 0 ? {
        Y: common_vendor.t(((_h = detailData.value) == null ? void 0 : _h.price) * number.value)
      } : {}, {
        Z: common_vendor.n(common_vendor.unref(canSubmit) ? "right agree-btn btn" : "right disabled-btn"),
        aa: common_vendor.o(($event) => {
          var _a2;
          return handleSubmit(((_a2 = detailData.value) == null ? void 0 : _a2.price) * number.value);
        }),
        ab: common_vendor.sr(reservationBox, "ecebff2e-5", {
          "k": "reservationBox"
        }),
        ac: common_vendor.p({
          type: "bottom",
          ["safe-area"]: true,
          ["background-color"]: "#fff"
        }),
        ad: common_vendor.sr(timePicker, "ecebff2e-8", {
          "k": "timePicker"
        }),
        ae: common_vendor.o(getTime),
        af: common_vendor.p({
          hour: hour.value
        }),
        ag: common_vendor.sr(coupons, "ecebff2e-9", {
          "k": "coupons"
        }),
        ah: common_vendor.o(handleSelectCoupon),
        ai: common_vendor.p({
          couponList: couponList.value,
          activeCoupon: activeCoupon.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ecebff2e"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/pages/service/components/airMaintenance.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
