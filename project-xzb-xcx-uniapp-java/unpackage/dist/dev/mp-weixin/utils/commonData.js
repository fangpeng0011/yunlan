"use strict";
const reportList = [
  {
    label: "色情低俗信息",
    value: 3
  },
  {
    label: "违禁品信息",
    value: 4
  },
  {
    label: "政治敏感信息",
    value: 5
  }
];
const orderTabData = [
  {
    value: 0,
    label: "待支付"
  },
  {
    value: 200,
    label: "待服务"
  },
  {
    value: 300,
    label: "服务中"
  },
  {
    value: 400,
    label: "待评价"
  },
  {
    value: 7,
    label: "全部"
  }
];
const cancelCauseData = [
  {
    value: 0,
    label: "问题已解决，不需要了"
  },
  {
    value: 1,
    label: "下单地址有误"
  },
  {
    value: 2,
    label: "下单时间错误"
  },
  {
    value: 3,
    label: "商家联系不上"
  }
];
const UNIT = [
  { value: 1, label: "小时" },
  { value: 2, label: "天" },
  { value: 3, label: "次" },
  { value: 4, label: "台" },
  { value: 5, label: "个" },
  { value: 6, label: "㎡" },
  { value: 7, label: "米" }
];
const couponTabData = [
  {
    value: 1,
    label: "疯抢中"
  },
  {
    value: 2,
    label: "即将开始"
  }
];
const couponListTabData = [
  {
    value: 1,
    label: "未使用"
  },
  {
    value: 2,
    label: "已使用"
  },
  {
    value: 3,
    label: "已过期"
  }
];
exports.UNIT = UNIT;
exports.cancelCauseData = cancelCauseData;
exports.couponListTabData = couponListTabData;
exports.couponTabData = couponTabData;
exports.orderTabData = orderTabData;
exports.reportList = reportList;
