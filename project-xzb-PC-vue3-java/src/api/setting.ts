import { request } from '@/utils/request'
//获取配置状态
export const getSettingStatus = () =>
  request.get<any>({
    url: `/customer/agency/serve-settings/status`
  })
//修改接单状态
export const setPickUpStatus = (params) =>
  request.put<any>({
    url: `/customer/agency/serve-settings/pick-up`,
    data: params
  })
//获取服务技能及其下的服务技能所有数据
export const getServiceSkillAll = () =>
  request.get<any>({
    url: `/customer/agency/serve-skill/category`
  })
//修改服务技能
export const updateServiceSkill = (params) =>
  request.post<any>({
    url: `/customer/agency/serve-skill/batchUpsert`,
    data: params
  })
//获取开通城市列表
export const getOpenCity = () =>
  request.get<any>({
    url: `/foundations/agency/region/activeRegionList`
  })
//服务范围设置
export const setServiceRanges = (params) =>
  request.put<any>({
    url: `/customer/agency/serve-settings/serve-scope`,
    data: params
  })
//获取当前设置的服务范围信息
export const getSettingInfo = () =>
  request.get<any>({
    url: `/customer/agency/serve-settings`
  })
//提交实名认证
export const postAuth = (params) =>
  request.post<any>({
    url: `/customer/agency/agency-certification-audit`,
    data: params
  })
//获取实名认证驳回原因
export const getAuthFail = () =>
  request.get<any>({
    url: `/customer/agency/agency-certification-audit/rejectReason`
  })
//提交账户设置
export const postAccount = (params) =>
  request.post<any>({
    url: `/customer/agency/bank-account`,
    data: params
  })
//获取账户设置信息
export const getAccountInfo = () =>
  request.get<any>({
    url: `/customer/agency/bank-account/currentUserBankAccount`
  })
