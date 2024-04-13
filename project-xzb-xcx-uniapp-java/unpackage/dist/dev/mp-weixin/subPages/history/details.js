"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const pages_api_order = require("../../pages/api/order.js");
const utils_commonData = require("../../utils/commonData.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_component_NavBar + _easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_popup_dialog)();
}
const _sfc_main = {
  __name: "details",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const baseData = common_vendor.ref({
      nursingProjectVo: {},
      elderVo: {}
    });
    const orderId = common_vendor.ref(null);
    const times = common_vendor.ref(null);
    const alertDialog = common_vendor.ref(null);
    let capsuleBottom = common_vendor.ref();
    const content = common_vendor.ref("");
    const typeVal = common_vendor.ref(users.backLink);
    const isback = common_vendor.ref(false);
    const noCancelDialog = common_vendor.ref(null);
    const popup = common_vendor.ref(null);
    common_vendor.onLoad((option) => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 10;
        }
      });
      orderId.value = option.id;
    });
    common_vendor.onShow(() => {
      if (getCurrentPages()[getCurrentPages().length - 1].options.type === "history") {
        getHistoryDetail();
      }
    });
    const getHistoryDetail = async () => {
      await pages_api_order.getHistoryOrderDetail(orderId.value).then((res) => {
        if (res.data.code === 200) {
          baseData.value = res.data.data;
        }
      });
    };
    const handleToLink = () => {
      isback.value = true;
      if (typeVal.value === "back" || typeVal.value === "detail" || typeVal.value === "goods" || typeVal.value === "home") {
        common_vendor.index.redirectTo({
          url: `/subPages/history/index`
        });
      } else {
        common_vendor.index.navigateBack({
          delta: 1
        });
      }
    };
    const handleToCancelRule = () => {
      let time = "";
      time = utils_index.formatDateTimeToDateTimeString(new Date(utils_index.laterTime(baseData.value.serveStartTime.replace(/-/g, "/"), 2, 1)));
      common_vendor.index.navigateTo({
        url: `/subPages/order/cancelRule?id=${orderId.value}&type=1&&time=${time}`
      });
    };
    const handleClose = () => {
      alertDialog.value.close();
    };
    const makePhoneCall = () => {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400-000-4000"
        //仅为示例，并非真实的电话号码
      });
    };
    const close = () => {
      popup.value.close();
      noCancelDialog.value.close();
    };
    const confirm = () => {
      popup.value.close();
      pages_api_order.deleteOrder(baseData.value.id).then((res) => {
        common_vendor.index.navigateBack({
          delta: 1
        });
        common_vendor.index.showToast({
          title: "删除成功",
          icon: "success",
          duration: 1e3
        });
      }).catch((err) => {
        console.log(err);
        common_vendor.index.showToast({
          title: "删除失败",
          icon: "none",
          duration: 1e3
        });
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea;
      return common_vendor.e({
        a: common_vendor.p({
          title: "订单详情",
          isShowBack: true,
          handleToLink
        }),
        b: ((_a = baseData.value.orderInfo) == null ? void 0 : _a.ordersStatus) === 0
      }, ((_b = baseData.value.orderInfo) == null ? void 0 : _b.ordersStatus) === 0 ? {
        c: common_vendor.t(times.value)
      } : {}, {
        d: ((_c = baseData.value.orderInfo) == null ? void 0 : _c.ordersStatus) === 100
      }, ((_d = baseData.value.orderInfo) == null ? void 0 : _d.ordersStatus) === 100 ? {} : {}, {
        e: ((_e = baseData.value.orderInfo) == null ? void 0 : _e.ordersStatus) === 200
      }, ((_f = baseData.value.orderInfo) == null ? void 0 : _f.ordersStatus) === 200 ? common_vendor.e({
        f: baseData.value.serverName
      }, baseData.value.serverName ? {
        g: common_vendor.t(baseData.value.serverName)
      } : {}) : {}, {
        h: ((_g = baseData.value.orderInfo) == null ? void 0 : _g.ordersStatus) === 300
      }, ((_h = baseData.value.orderInfo) == null ? void 0 : _h.ordersStatus) === 300 ? {} : {}, {
        i: ((_i = baseData.value.orderInfo) == null ? void 0 : _i.ordersStatus) === 400
      }, ((_j = baseData.value.orderInfo) == null ? void 0 : _j.ordersStatus) === 400 ? {} : {}, {
        j: ((_k = baseData.value.orderInfo) == null ? void 0 : _k.ordersStatus) === 500
      }, ((_l = baseData.value.orderInfo) == null ? void 0 : _l.ordersStatus) === 500 ? {} : {}, {
        k: ((_m = baseData.value.orderInfo) == null ? void 0 : _m.ordersStatus) === 600
      }, ((_n = baseData.value.orderInfo) == null ? void 0 : _n.ordersStatus) === 600 ? {
        l: common_vendor.t(baseData.value.cancelInfo.cancelReason)
      } : {}, {
        m: ((_o = baseData.value.orderInfo) == null ? void 0 : _o.ordersStatus) === 700
      }, ((_p = baseData.value.orderInfo) == null ? void 0 : _p.ordersStatus) === 700 ? {} : {}, {
        n: (_q = baseData.value.orderInfo) == null ? void 0 : _q.serveItemImg,
        o: common_vendor.t((_r = baseData.value.orderInfo) == null ? void 0 : _r.serveTypeName),
        p: common_vendor.t((_s = baseData.value.orderInfo) == null ? void 0 : _s.serveItemName),
        q: common_vendor.t((_t = baseData.value.orderInfo) == null ? void 0 : _t.purNum),
        r: common_vendor.t((_v = common_vendor.unref(utils_commonData.UNIT)[((_u = baseData.value.orderInfo) == null ? void 0 : _u.unit) - 1]) == null ? void 0 : _v.label),
        s: common_vendor.t((_w = baseData.value.orderInfo) == null ? void 0 : _w.realPayAmount),
        t: common_vendor.t(((_x = baseData.value.orderInfo) == null ? void 0 : _x.ordersStatus) === 0 ? "待付款金额" : "实际支付"),
        v: common_vendor.t((_y = baseData.value.orderInfo) == null ? void 0 : _y.realPayAmount),
        w: common_vendor.n(((_z = baseData.value.orderInfo) == null ? void 0 : _z.ordersStatus) === 0 ? "font-col" : ""),
        x: baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700
      }, baseData.value.payStatus === 300 || baseData.value.ordersStatus === 700 ? common_vendor.e({
        y: ((_A = baseData.value.orderInfo) == null ? void 0 : _A.payStatus) === 300 || ((_B = baseData.value.orderInfo) == null ? void 0 : _B.ordersStatus) === 700
      }, ((_C = baseData.value.orderInfo) == null ? void 0 : _C.payStatus) === 300 || ((_D = baseData.value.orderInfo) == null ? void 0 : _D.ordersStatus) === 700 ? {} : {}, {
        z: common_vendor.o(handleToCancelRule)
      }) : {}, {
        A: ((_E = baseData.value.orderInfo) == null ? void 0 : _E.ordersStatus) === 0 || ((_F = baseData.value.orderInfo) == null ? void 0 : _F.ordersStatus) === 600 || ((_G = baseData.value.orderInfo) == null ? void 0 : _G.ordersStatus) === 300 || ((_H = baseData.value.orderInfo) == null ? void 0 : _H.ordersStatus) === 200 && baseData.value.payStatus !== 300 || ((_I = baseData.value.orderInfo) == null ? void 0 : _I.ordersStatus) === 100
      }, ((_J = baseData.value.orderInfo) == null ? void 0 : _J.ordersStatus) === 0 || ((_K = baseData.value.orderInfo) == null ? void 0 : _K.ordersStatus) === 600 || ((_L = baseData.value.orderInfo) == null ? void 0 : _L.ordersStatus) === 300 || ((_M = baseData.value.orderInfo) == null ? void 0 : _M.ordersStatus) === 200 && baseData.value.payStatus !== 300 || ((_N = baseData.value.orderInfo) == null ? void 0 : _N.ordersStatus) === 100 ? common_vendor.e({
        B: baseData.value.serverName && ((_O = baseData.value.orderInfo) == null ? void 0 : _O.ordersStatus) === 200 || baseData.value.payStatus == 300 || baseData.value.payStatus == 400
      }, baseData.value.serverName && ((_P = baseData.value.orderInfo) == null ? void 0 : _P.ordersStatus) === 200 || baseData.value.payStatus == 300 || baseData.value.payStatus == 400 ? {
        C: common_vendor.t(baseData.value.serverName)
      } : {}, {
        D: ((_Q = baseData.value.orderInfo) == null ? void 0 : _Q.payStatus) == 0 || ((_R = baseData.value.orderInfo) == null ? void 0 : _R.payStatus) == 1 || ((_S = baseData.value.orderInfo) == null ? void 0 : _S.ordersStatus) === 200 || ((_T = baseData.value.orderInfo) == null ? void 0 : _T.ordersStatus) == 300 || ((_U = baseData.value.orderInfo) == null ? void 0 : _U.ordersStatus) == 600
      }, ((_V = baseData.value.orderInfo) == null ? void 0 : _V.payStatus) == 0 || ((_W = baseData.value.orderInfo) == null ? void 0 : _W.payStatus) == 1 || ((_X = baseData.value.orderInfo) == null ? void 0 : _X.ordersStatus) === 200 || ((_Y = baseData.value.orderInfo) == null ? void 0 : _Y.ordersStatus) == 300 || ((_Z = baseData.value.orderInfo) == null ? void 0 : _Z.ordersStatus) == 600 ? {
        E: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((__ = baseData.value.orderInfo) == null ? void 0 : __.serveStartTime.replace(/-/g, "/"))))
      } : {}, {
        F: common_vendor.t((_$ = baseData.value.orderInfo) == null ? void 0 : _$.serveAddress),
        G: common_vendor.t((_aa = baseData.value.orderInfo) == null ? void 0 : _aa.contactsName),
        H: common_vendor.t((_ba = baseData.value.orderInfo) == null ? void 0 : _ba.contactsPhone)
      }) : {}, {
        I: ((_ca = baseData.value.orderInfo) == null ? void 0 : _ca.payStatus) === 300 || ((_da = baseData.value.orderInfo) == null ? void 0 : _da.ordersStatus) === 700
      }, ((_ea = baseData.value.orderInfo) == null ? void 0 : _ea.payStatus) === 300 || ((_fa = baseData.value.orderInfo) == null ? void 0 : _fa.ordersStatus) === 700 ? common_vendor.e({
        J: common_vendor.t(((_ga = baseData.value.refundInfo) == null ? void 0 : _ga.cancelTime) ? common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_ia = (_ha = baseData.value.refundInfo) == null ? void 0 : _ha.cancelTime) == null ? void 0 : _ia.replace(/-/g, "/"))) : ""),
        K: common_vendor.t((_ja = baseData.value.refundInfo) == null ? void 0 : _ja.cancelReason),
        L: ((_ka = baseData.value.orderInfo) == null ? void 0 : _ka.ordersStatus) === 700
      }, ((_la = baseData.value.orderInfo) == null ? void 0 : _la.ordersStatus) === 700 ? {
        M: common_vendor.t(((_ma = baseData.value.refundInfo) == null ? void 0 : _ma.realPayAmount) ? `￥${(_na = baseData.value.refundInfo) == null ? void 0 : _na.realPayAmount}` : "")
      } : {}) : {}, {
        N: ((_oa = baseData.value.orderInfo) == null ? void 0 : _oa.ordersStatus) === 500 || ((_pa = baseData.value.orderInfo) == null ? void 0 : _pa.ordersStatus) === 400
      }, ((_qa = baseData.value.orderInfo) == null ? void 0 : _qa.ordersStatus) === 500 || ((_ra = baseData.value.orderInfo) == null ? void 0 : _ra.ordersStatus) === 400 ? common_vendor.e({
        O: (_sa = baseData.value.orderInfo) == null ? void 0 : _sa.serverName
      }, ((_ta = baseData.value.orderInfo) == null ? void 0 : _ta.serverName) ? {
        P: common_vendor.t((_ua = baseData.value.orderInfo) == null ? void 0 : _ua.serverName)
      } : {}, {
        Q: (_va = baseData.value.orderInfo) == null ? void 0 : _va.serveActualEndTime
      }, ((_wa = baseData.value.orderInfo) == null ? void 0 : _wa.serveActualEndTime) ? {
        R: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_xa = baseData.value.orderInfo) == null ? void 0 : _xa.serveActualEndTime.replace(/-/g, "/"))))
      } : {}, {
        S: common_vendor.t((_ya = baseData.value.orderInfo) == null ? void 0 : _ya.serveAddress),
        T: common_vendor.t((_za = baseData.value.orderInfo) == null ? void 0 : _za.contactsName),
        U: common_vendor.t((_Aa = baseData.value.orderInfo) == null ? void 0 : _Aa.contactsPhone)
      }) : {}, {
        V: common_vendor.t((_Ba = baseData.value.orderInfo) == null ? void 0 : _Ba.id),
        W: (_Ca = baseData.value.orderInfo) == null ? void 0 : _Ca.createTime
      }, ((_Da = baseData.value.orderInfo) == null ? void 0 : _Da.createTime) ? {
        X: common_vendor.t(common_vendor.unref(utils_index.formatDateTimeToDateTimeString)(new Date((_Ea = baseData.value.orderInfo) == null ? void 0 : _Ea.createTime.replace(/-/g, "/"))))
      } : {}, {
        Y: common_vendor.o(makePhoneCall),
        Z: common_vendor.o(handleClose),
        aa: common_vendor.sr(alertDialog, "461d8fd4-1", {
          "k": "alertDialog"
        }),
        ab: common_vendor.p({
          ["mask-background-color"]: "rgba(0,0,0,0.6)",
          type: "bottom",
          ["is-mask-click"]: false
        }),
        ac: common_vendor.t(content.value),
        ad: common_vendor.o(close),
        ae: common_vendor.o(makePhoneCall),
        af: common_vendor.p({
          mode: "base",
          content: "当前不可自行取消订单，如需取消需拨打客服热线400-000-4000",
          title: " ",
          animation: false,
          ["before-close"]: true,
          confirmText: "联系客服",
          cancelText: "我知道了"
        }),
        ag: common_vendor.sr(noCancelDialog, "461d8fd4-2", {
          "k": "noCancelDialog"
        }),
        ah: common_vendor.p({
          ["is-mask-click"]: false,
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        }),
        ai: common_vendor.o(close),
        aj: common_vendor.o(confirm),
        ak: common_vendor.p({
          mode: "base",
          content: "确定删除此条订单？",
          animation: false,
          ["before-close"]: true
        }),
        al: common_vendor.sr(popup, "461d8fd4-4", {
          "k": "popup"
        }),
        am: common_vendor.p({
          type: "dialog",
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-461d8fd4"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/subPages/history/details.vue"]]);
wx.createPage(MiniProgramPage);
