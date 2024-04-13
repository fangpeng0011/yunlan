import {
  request
} from "../../utils/request"
// 获取当前开通的城市列表
export const getCityList = () =>
  request({
    url: `/foundations/consumer/region/activeRegionList`,
    method: 'get',
  })
// 根据经纬度获取城市
export const getAddress = (params) =>
  request({
    url: `/publics/map/regeo`,
    method: 'get',
    params
  })
// 地址薄分页查询
export const getAddressBook = (params) =>
  request({
    url: `/customer/consumer/address-book/page`,
    method: 'get',
    params
  })
// 地址薄新增
export const addAddressBook = (params) =>
  request({
    url: `/customer/consumer/address-book`,
    method: 'post',
    params
  })


// 地址簿详情
export const getAddressBookDetail = (id) =>
  request({
    url: `/customer/consumer/address-book/${id}`,
    method: 'get',
  })
// 获取默认地址
export const getDefaultAddress = () =>
  request({
    url: `/customer/consumer/address-book/defaultAddress`,
    method: 'get',
  })
// 地址薄设为默认/取消默认
export const setDefaultAddress = (id, flag) =>
  request({
    url: `/customer/consumer/address-book/default?id=${id}&flag=${flag}`,
    method: 'put',
  })
  // 地址薄批量删除
export const deleteAddressBook = (params) =>
  request({
    url: `/customer/consumer/address-book/batch`,
    method: 'delete',
    params
  })
  // 地址薄详情
export const getAddressBookInfo = (id) =>
  request({
    url: `/customer/consumer/address-book/${id}`,
    method: 'get',
  })
  // 地址薄修改
export const updateAddressBook = (id,params) =>
  request({
    url: `/customer/consumer/address-book/${id}`,
    method: 'put',
    params
  })
  // 根据经纬度查询详细地址
export const getAddressByLocation = (params) =>
  request({
    url: `/address/findDetailByLocation`,
    method: 'get',
    params
  })
  // 获取当前开通的城市列表
// 区域展示相关配置
export const getAreaConfig = (params) => {
  return request({
    url: `/foundations/consumer/region/queryRegionDisplayByCityCode`,
    method: 'get',
    params
  })
}
