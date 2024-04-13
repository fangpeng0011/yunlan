import { request } from '@/utils/request'
import type { loginResult, userInfoResult } from '@/api/model/userModel'

// 登录
// 账号登录
export const userLogins = (params) =>
  request.post<loginResult>({
    url: `/customer/open/login/worker`,
    data: params
  })
// 注册
export function register(params) {
  return request.post<any>({
    url: '/customer/open/serve-provider/institution/register',
    data: params
  })
}
//获取验证码
export function getCode(params) {
  return request.post<any>({
    url: '/publics/sms-code/send',
    data: params
  })
}
//修改密码
export function resetPwd(params) {
  return request.post<any>({
    url: '/customer/agency/serve-provider/institution/resetPassword',
    data: params
  })
}

// 获取用户信息
export const getUserInfo = () =>
  request.get<userInfoResult>({
    url: `/users/me`
  })

// 个人中心
export function getpersonal() {
  return request.get<any>({
    url: '/get-personal?test=1&name=2',
    params: {
      c: 3
    }
  })
}
// 修改个人信息
export function updatepersonal(params) {
  return request.post<any>({
    url: '/update-personal',
    data: params
  })
}
// 获取当前用户信息
export function getUser() {
  return request.get<any>({
    url: '/customer/agency/serve-provider/currentUserInfo'
  })
}
