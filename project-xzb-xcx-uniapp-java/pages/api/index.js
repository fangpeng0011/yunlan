import { request } from "../../utils/request"

// 首页服务图标
export const getHomeService = (params) =>{
  return request({
    url: `/foundations/customer/serve/firstPageServeList`,
    method: 'get',
    params
  })
}
// 首页热门服务
export const getHotServe = (params) => {
  return request({
    url: `/foundations/customer/serve/hotServeList`,
    method: 'get',
    params
  })
}
// 首页服务搜索
export const getServeSearch = (params) => {
  return request({
    url: `/foundations/customer/serve/search`,
    method: 'get',
    params
  })
}
