"use strict";
const orderStatus = [
  {
    value: 1,
    label: "待上门"
  },
  {
    value: 2,
    label: "待完工"
  },
  {
    value: 3,
    label: "已完成"
  },
  {
    value: 4,
    label: "已关闭"
  }
];
const DeliveryData = [
  {
    value: 1,
    label: "待上门"
  },
  {
    value: 2,
    label: "待完工"
  },
  {
    value: 3,
    label: "已完成"
  },
  {
    value: "",
    label: "全部"
  }
];
const cancelData = [
  {
    value: 1,
    label: "服务地址有误"
  },
  {
    value: 2,
    label: "看错地址，无法服务"
  },
  {
    value: 3,
    label: "价格太低，不想服务了"
  },
  {
    value: 4,
    label: "临时有事，无法服务"
  },
  {
    value: 5,
    label: "产品维修复杂，无法服务"
  }
];
const evaluateData = [
  {
    value: "",
    label: "全部"
  },
  {
    value: 3,
    label: "好评"
  },
  {
    value: 2,
    label: "中评"
  },
  {
    value: 1,
    label: "差评"
  }
];
const ImgList = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🙂",
  "😉",
  "😍",
  "😙",
  "😘",
  "🤑",
  "😋",
  "😝",
  "🤪",
  "😜",
  "🤐",
  "😑",
  "🙄",
  "😪",
  "😴",
  "🤢",
  "😫",
  "🙁",
  "😮",
  "😥",
  "😱",
  "😨",
  "😤",
  "😈",
  "😠",
  "🤞",
  "😫"
];
exports.DeliveryData = DeliveryData;
exports.ImgList = ImgList;
exports.cancelData = cancelData;
exports.evaluateData = evaluateData;
exports.orderStatus = orderStatus;
