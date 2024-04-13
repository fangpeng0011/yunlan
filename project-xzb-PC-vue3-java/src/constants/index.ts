// 合同状态枚举
export const CONTRACT_STATUS = {
  FAIL: 0,
  AUDIT_PENDING: 1,
  EXEC_PENDING: 2,
  EXECUTING: 3,
  FINISH: 4
}

export const CONTRACT_STATUS_OPTIONS = [
  { value: CONTRACT_STATUS.FAIL, label: '审核失败' },
  { value: CONTRACT_STATUS.AUDIT_PENDING, label: '待审核' },
  { value: CONTRACT_STATUS.EXEC_PENDING, label: '待履行' },
  { value: CONTRACT_STATUS.EXECUTING, label: '审核成功' },
  { value: CONTRACT_STATUS.FINISH, label: '已完成' }
]

// 合同类型枚举
export const CONTRACT_TYPES = {
  MAIN: 0,
  SUB: 1,
  SUPPLEMENT: 2
}

export const CONTRACT_TYPE_OPTIONS = [
  { value: CONTRACT_TYPES.MAIN, label: '主合同' },
  { value: CONTRACT_TYPES.SUB, label: '子合同' },
  { value: CONTRACT_TYPES.SUPPLEMENT, label: '补充合同' }
]

// 合同收付类型枚举
export const CONTRACT_PAYMENT_TYPES = {
  PAYMENT: 0,
  RECEIPT: 1
}

// 通知的优先级对应的TAG类型
export const NOTIFICATION_TYPES = {
  low: 'primary',
  middle: 'warning',
  high: 'danger'
}
// 状态
export const STATUS = [
  { value: 0, label: '禁用' },
  { value: 1, label: '启用' }
]
// 单位
export const UNIT = [
  { value: 1, label: '小时' },
  { value: 2, label: '天' },
  { value: 3, label: '次' },
  { value: 4, label: '台' },
  { value: 5, label: '个' },
  { value: 6, label: '㎡' },
  { value: 7, label: '米' }
]
// 冻结时间
export const FREEZE_TIME = [
  { value: 0, label: '3天' },
  { value: 1, label: '7天' },
  { value: 2, label: '30天' },
  { value: 3, label: '360天' },
  { value: 4, label: '永久' }
]
// 取消原因
export const CANCEL_REASON = [
  { value: '0', label: '服务地址有误' },
  { value: '1', label: '看错地址，无法服务' },
  { value: '2', label: '价格太低，不想服务了' },
  { value: '3', label: '临时有事，无法服务' },
  { value: '4', label: '产品维修复杂，无法服务' }
]
// 拒单原因
export const REFUSE_REASON = [
  { value: '0', label: '服务地址有误' },
  { value: '1', label: '看错地址，无法服务' },
  { value: '2', label: '价格太低，不想服务了' },
  { value: '3', label: '临时有事，无法服务' },
  { value: '4', label: '产品维修复杂，无法服务' }
]
// 服务距离
export const SERVICE_DISTANCE = [
  { value: 5, label: '5公里内' },
  { value: 10, label: '10公里内' },
  { value: 20, label: '20公里内' },
  { value: 50, label: '50公里内' },
  { value: 100, label: '100公里内' }
]
