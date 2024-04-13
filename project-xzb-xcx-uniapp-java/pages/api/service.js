import { request } from '../../utils/request';

// 获取服务分类
export const getServeCategory = (params) => {
  return request({
    url: '/foundations/customer/serve/serveTypeList',
    method: 'get',
    params
  })
}
// 查询服务列表
export const getServeList = (params) => {
  return request({
    url: '/foundations/customer/serve/search',
    method: 'get',
    params
  })
}
// 根据id查询服务
export const getServeById = (id) => {
  return request({
    url: `/foundations/customer/serve/${id}`,
    method: 'get',
  })
}
// 预约服务，下单
export const addOrder = (params) => {
  return request({
    url: `/orders-manager/consumer/orders/place`,
    method: 'post',
    params
  })
}

// 查询评价项信息
export const getEvaluate = () => {
  return request({
    url: `/customer/consumer/evaluation/findAllSystemInfo`,
    method: 'get',
  })
}