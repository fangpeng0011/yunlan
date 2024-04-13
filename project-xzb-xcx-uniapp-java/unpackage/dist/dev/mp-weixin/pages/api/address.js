"use strict";
const utils_request = require("../../utils/request.js");
const getCityList = () => utils_request.request({
  url: `/foundations/consumer/region/activeRegionList`,
  method: "get"
});
const getAddress = (params) => utils_request.request({
  url: `/publics/map/regeo`,
  method: "get",
  params
});
const getAddressBook = (params) => utils_request.request({
  url: `/customer/consumer/address-book/page`,
  method: "get",
  params
});
const addAddressBook = (params) => utils_request.request({
  url: `/customer/consumer/address-book`,
  method: "post",
  params
});
const getAddressBookDetail = (id) => utils_request.request({
  url: `/customer/consumer/address-book/${id}`,
  method: "get"
});
const getDefaultAddress = () => utils_request.request({
  url: `/customer/consumer/address-book/defaultAddress`,
  method: "get"
});
const setDefaultAddress = (id, flag) => utils_request.request({
  url: `/customer/consumer/address-book/default?id=${id}&flag=${flag}`,
  method: "put"
});
const deleteAddressBook = (params) => utils_request.request({
  url: `/customer/consumer/address-book/batch`,
  method: "delete",
  params
});
const getAddressBookInfo = (id) => utils_request.request({
  url: `/customer/consumer/address-book/${id}`,
  method: "get"
});
const updateAddressBook = (id, params) => utils_request.request({
  url: `/customer/consumer/address-book/${id}`,
  method: "put",
  params
});
exports.addAddressBook = addAddressBook;
exports.deleteAddressBook = deleteAddressBook;
exports.getAddress = getAddress;
exports.getAddressBook = getAddressBook;
exports.getAddressBookDetail = getAddressBookDetail;
exports.getAddressBookInfo = getAddressBookInfo;
exports.getCityList = getCityList;
exports.getDefaultAddress = getDefaultAddress;
exports.setDefaultAddress = setDefaultAddress;
exports.updateAddressBook = updateAddressBook;
