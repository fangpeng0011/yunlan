import { request } from '@/utils/request'
import type { FormStep, FormSteppassword } from '@/api/model/formModel'
// 分布式表单提交
export function addList(params: FormStep) {
  return request.post<FormStep>({
    url: '/form/step',
    data: params
  })
}
// 密码验证
export function validatePassword(params: FormSteppassword) {
  return request.post<FormSteppassword>({
    url: '/validate-password',
    data: params
  })
}
