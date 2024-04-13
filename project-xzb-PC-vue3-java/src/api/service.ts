import { request } from '@/utils/request'
import type {
  serviceTypeResult,
  serviceTypeStatus,
  serviceTypeAdd,
  serviceTypeItemList,
  serviceItemTypeAdd,
  regionTypeAdd,
  regionTypeEdit,
  serviceListType
} from '@/api/model/serviceModel'


// 新增架构下属服务人员
export function servicePersonItemAdd(value) {
  return request.post({
    url: '/customer/agency/institution-staff',
    data: value
  })
}
// 更新机构下属服务人员
export function servicePersonItemEdit(value , id) {
  return request.put({
    url: '/customer/agency/institution-staff/' + id,
    data: value
  })
}
// 根据id删除
export function servicePersonItemDelete(id) {
  return request.delete({
    url: '/customer/agency/institution-staff/' + id
  })
}
// 查询当前用户的服务技能
export function servicePersonItemSkill() {
  return request.get({
    url: '/customer/agency/serve-skill/queryCurrentUserServeSkillItemList'
  })
}
// 获取服务单列表
export function serviceOrderList(value) {
  return request.get({
    url: '/orders-manager/agency/queryForPage',
    params: value
  })
}
// 获取服务端详情
export function serviceOrderDetail(id) {
  return request.get({
    url: '/orders-manager/agency/' + id
  })
}
// 开始服务
export function serviceOrderStart(value) {
  return request.post({
    url: '/orders-manager/agency/start',
    data: value
  })
}
// 结束服务
export function serviceOrderEnd(value) {
  return request.post({
    url: '/orders-manager/agency/finish',
    data: value
  })
}
// 取消服务
export function serviceOrderCancel(value) {
  return request.post({
    url: '/orders-manager/agency/cancel',
    data: value
  })
}
//  人员分配
export function serviceOrderAssign(value) {
  return request.post({
    url: '/orders-manager/agency/allocation',
    data: value
  })
}

// 机构下属服务人员列表
export function servicePersonItemAllList() {
  return request.get({
    url: '/customer/agency/institution-staff/queryInstitutionStaffList',
  })
}
// 订单各状态数量
export function serviceOrderCount() {
  return request.get({
    url: '/orders-manager/agency/status/num'
  })
}
// // 获取派单列表
// export function serviceOrderAssignList(value) {
//   return request.get({
//     url: '/orders-dispatch/worker/queryForList',
//     params: value
//   })
// }
// 拒单
export function serviceOrderAssignReject(value) {
  return request.post({
    url: '/orders-dispatch/agency/reject',
    data: value
  })
}
// 接单
export function serviceOrderAssignReceive(value) {
  return request.post({
    url: '/orders-dispatch/agency/receive',
    data: value
  })
}
// 分页获取派单数据
export function serviceOrderAssignPage(value) {
  return request.get({
    url: '/orders-dispatch/agency/queryForPage',
    params: value
  })
}
// 获取派单明细信息
export function serviceOrderAssignDetail(id) {
  return request.get({
    url: '/orders-dispatch/agency/' + id
  })
}
// 机构端删除服务
export function serviceOrderAssignDelete(id) {
  return request.delete({
    url: 'orders-manager/agency/serve/' + id
  })
}
// 分页查询机构端历史订单
export function serviceOrderAssignHistory(value) {
  return request.get({
    url: '/orders-history/agency/orders/page',
    params: value
  })
}
// 历史订单详情
export function serviceOrderAssignHistoryDetail(id) {
  return request.get({
    url: '/orders-history/agency/orders/' + id
  })
}