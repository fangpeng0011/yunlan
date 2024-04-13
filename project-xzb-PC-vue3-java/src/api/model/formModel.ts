// 提交分布式表单的数据
export interface FormStep {
  name: string
  type: string
  account: string
  payAccount: string
  amount: string
}
// 密码验证
export interface FormSteppassword {
  password: string
}
