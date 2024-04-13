//举报原因
export const reportList = [
  {
    label: "色情低俗信息",
    value: 3
  },
  {
    label: "违禁品信息",
    value: 4
  },
  {
    label: "政治敏感信息",
    value: 5
  },
]
// 时间切换tab数据
export const timeTabData = [
  {
    value: 0,
    label: "上午08:00-12:00",
  },
  {
    value: 1,
    label: "下午12:30-18:00",
  },
];
// 上午时间段
export const timeBaseData = [
  {
    value: 0,
    label: "08:00",
    disabled: false
  },
  {
    value: 1,
    label: "08:30",
    disabled: false
  },
  {
    value: 2,
    label: "09:00",
    disabled: false
  },
  {
    value: 3,
    label: "09:30",
    disabled: false
  },
  {
    value: 4,
    label: "10:00",
    disabled: false
  },
  {
    value: 5,
    label: "10:30",
    disabled: false
  },
  {
    value: 6,
    label: "11:00",
    disabled: false
  },
  {
    value: 7,
    label: "11:30",
    disabled: false
  },
  {
    value: 8,
    label: "12:00",
    disabled: false
  },
  {
    value: 9,
    label: "12:30",
    disabled: false
  },
  {
    value: 10,
    label: "13:00",
    disabled: false
  },
  {
    value: 11,
    label: "13:30",
    disabled: false
  },
  {
    value: 12,
    label: "14:00",
    disabled: false
  },
  {
    value: 13,
    label: "14:30",
    disabled: false
  },
  {
    value: 14,
    label: "15:00",
    disabled: false
  },
  {
    value: 15,
    label: "15:30",
    disabled: false
  },
  {
    value: 16,
    label: "16:00",
    disabled: false
  },
  {
    value: 17,
    label: "16:30",
    disabled: false
  },
  {
    value: 18,
    label: "17:00",
    disabled: false
  },
  {
    value: 19,
    label: "17:30",
    disabled: false
  },
  {
    value: 20,
    label: "18:00",
    disabled: false
  }
];
// 预约tab状态
export const listTabData = [
  {
    value: 0,
    label: "全部",
  },
  {
    value: 1,
    label: "待上门",
  },
  // {
  // 	value: 2,
  // 	label: "已完成",
  // },
  // {
  // 	value: 3,
  // 	label: "已取消",
  // },
  // {
  // 	value: 4,
  // 	label: "已过期",
  // },
]
// 订单tab状态
export const orderTabData = [
  {
    value: 0,
    label: "待支付",
  },
  {
    value: 200,
    label: "待服务",
  },
  {
    value: 300,
    label: "服务中",
  },
  {
    value: 400,
    label: "待评价",
  },
  {
    value: 7,
    label: "全部",
  },
]
// 订单tab状态
export const cancelCauseData = [
  {
    value: 0,
    label: "问题已解决，不需要了",
  },
  {
    value: 1,
    label: "下单地址有误",
  },
  {
    value: 2,
    label: "下单时间错误",
  },
  {
    value: 3,
    label: "商家联系不上",
  },
]

// 支付类型
export const payMethodList = ["微信支付"]
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
export const couponTabData = [
  {
    value: 1,
    label: "疯抢中",
    },
    {
    value: 2,
    label: "即将开始",
    }
]
export const couponListTabData = [
  {
    value: 1,
    label: "未使用",
    },
    {
    value: 2,
    label: "已使用",
    },
    {
    value: 3,
    label: "已过期",
    }
]
//订单状态
export const orderStatus = [
  {
    value: 1,
    label: '待上门'
  },
  {
    value: 2,
    label: '待完工'
  }, {
    value: 3,
    label: '已完成'
  },
  {
    value: 4,
    label: '已关闭'
  },
]