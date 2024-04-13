import {
  request
} from "../../utils/request.js"

// 手机号登录
export const phoneLogins = (params) =>
  request({
    url: `/customer/open/login/worker`,
    method: 'post',
    params
  })
// 发送短信验证码
export const getsmsCode = (params) =>
  request({
    url: `/publics/sms-code/send`,
    method: 'post',
    params
  })
// 获取当前用户信息
export const getUserInfo = (params) =>
  request({
    url: `/customer/worker/serve-provider/currentUserInfo`,
    method: 'get',
    params
  })