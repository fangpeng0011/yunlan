"use strict";
const common_vendor = require("../common/vendor.js");
const tostTip = (val) => {
  common_vendor.index.showToast({
    title: val,
    icon: "none",
    background: "#ffaa00",
    duration: 1500,
    position: "bottom"
  });
};
const formatDuring = (timestamp) => {
  const hours = Math.floor(timestamp / (1e3 * 60 * 60));
  const minutes = Math.floor(timestamp % (1e3 * 60 * 60) / (1e3 * 60));
  const seconds = Math.floor(timestamp % (1e3 * 60) / 1e3);
  let result = "";
  if (hours > 0) {
    result += hours + "小时";
  }
  if (minutes > 0) {
    result += minutes + "分";
  }
  if (seconds > 0) {
    result += seconds + "秒";
  }
  return result;
};
const formatDuringToTime = (timestamp) => {
  const hours = Math.floor(timestamp / (1e3 * 60 * 60));
  const minutes = Math.floor(timestamp % (1e3 * 60 * 60) / (1e3 * 60));
  const seconds = Math.floor(timestamp % (1e3 * 60) / 1e3);
  let result = "";
  if (hours > 9) {
    result += hours + ":";
  } else if (hours < 10 && hours > 0) {
    result += "0" + hours + ":";
  }
  if (minutes > 9) {
    result += minutes + ":";
  } else if (minutes < 10 && minutes > 0) {
    result += "0" + minutes + ":";
  } else {
    result += "00:";
  }
  if (seconds > 9) {
    result += seconds;
  } else if (seconds < 10 && seconds > 0) {
    result += "0" + seconds;
  } else {
    result += "00";
  }
  return result;
};
const formatDateTimeToDateTimeString = (dateTime) => {
  if (!(dateTime instanceof Date)) {
    dateTime = new Date(dateTime);
  }
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hour = String(dateTime.getHours()).padStart(2, "0");
  const minute = String(dateTime.getMinutes()).padStart(2, "0");
  const dateTimeString = `${year}-${month}-${day} ${hour}:${minute}`;
  return dateTimeString;
};
const laterTime = (time, hour, flag) => {
  const date = new Date(time);
  if (flag === 1) {
    const newDate = new Date(date.getTime() - hour * 60 * 60 * 1e3);
    return newDate;
  } else {
    const newDate = new Date(date.getTime() + hour * 60 * 60 * 1e3);
    return newDate;
  }
};
const formatDateTimeToDateString = (dateTime) => {
  if (!(dateTime instanceof Date)) {
    throw new Error("Invalid date format.");
  }
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateTime.getDate()).padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;
  return dateString;
};
const convertDiscountPercentageToNumber = (percentage) => {
  const num = Number(percentage);
  const dividedNum = num / 10;
  const integerPart = Math.floor(dividedNum).toFixed(0).replace(/^\s*|\s*$/g, "");
  const decimalPart = (dividedNum - integerPart).toFixed(1).replace(/(\d+)\.(\d+)/, ".$2");
  return {
    integer: integerPart,
    decimal: decimalPart
  };
};
exports.convertDiscountPercentageToNumber = convertDiscountPercentageToNumber;
exports.formatDateTimeToDateString = formatDateTimeToDateString;
exports.formatDateTimeToDateTimeString = formatDateTimeToDateTimeString;
exports.formatDuring = formatDuring;
exports.formatDuringToTime = formatDuringToTime;
exports.laterTime = laterTime;
exports.tostTip = tostTip;
