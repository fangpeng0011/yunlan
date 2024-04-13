import {
	request
} from "../../utils/request.js"

// 手机号登录
export const login = (params) =>
	request({
		url: `/customer/open/login/common/user`,
		method: 'post',
		params
	})
  // 获取手机号
  export const getPhone = (val) =>
  request({
    url: `/customer/consumer/common-user?phoneCode=${val}`,
    method: 'put',
  })
