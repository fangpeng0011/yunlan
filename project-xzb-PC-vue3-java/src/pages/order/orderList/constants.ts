import { formatDateTimeToDateTimeString } from '@/utils/date'
import { formatNumber } from '@/utils/index'
// 待分配
export const allocationCOLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    // 1-10，循环
    colKey: 'number'
  },
  {
    title: '订单编号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'id'
  },
  { title: '服务类型', width: 150, minWidth: '150px', colKey: 'serveTypeName' },
  { title: '服务名称', width: 150, minWidth: '150px', colKey: 'serveItemName' },
  {
    title: '服务费用（元）',
    minWidth: '170px',
    sortType: 'all',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
      h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '预约时间',
    minWidth: '250px',
    sortType: 'all',
    colKey: 'serveStartTime',
    sorter: true,
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.serveStartTime)))
  },
  {
    title: '订单状态',
    colKey: 'serveStatus',
    width: 120,
    minWidth: '120px',
    // 添加筛选
    filter: {
      type: 'single',
      list: [
        {
          label: '待分配',
          value: 0
        },
        {
          label: '待上门',
          value: 1
        },
        {
          label: '待完工',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已取消',
          value: 4
        },
        {
          label: '被退单',
          value: 5
        }
      ],
      showConfirmAndReset: true
    },
    cell: (h, { row }) => {
      const statusList = {
        0: {
          label: '待分配'
        },
        1: {
          label: '待上门'
        },
        2: {
          label: '待完工'
        },
        3: {
          label: '已完成'
        },
        4: {
          label: '已取消'
        },
        5: {
          label: '被退单'
        }
      }
      let status = 0
      if (row.serveStatus === 0 || row.serveStatus === 5) {
        status = 1
      } else if (row.serveStatus === 3 || row.serveStatus === 4) {
        status = 2
      } else {
        status = 0
      }
      return h(
        'span',
        {
          class: `status-dot status-dot-${status}`
        },
        statusList[row.serveStatus].label
      )
    }
  },
  {
    align: 'left',
    fixed: 'right',
    width: 220,
    minWidth: '220px',
    colKey: 'op',
    title: '操作'
  }
]
// 待上门
export const doorCOLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'number'
  },
  {
    title: '订单编号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'id'
  },
  { title: '服务类型', width: 150, minWidth: '150px', colKey: 'serveTypeName' },
  { title: '服务名称', width: 150, minWidth: '150px', colKey: 'serveItemName' },
  {
    title: '服务费用（元）',
    minWidth: '170px',
    sortType: 'all',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
    h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '预约时间',
    minWidth: '250px',
    sortType: 'all',
    colKey: 'serveStartTime',
    sorter: true,
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.serveStartTime)))
  },
  {
    title: '订单状态',
    colKey: 'serveStatus',
    width: 120,
    minWidth: '120px',
    // 添加筛选
    filter: {
      type: 'single',
      list: [
        {
          label: '待分配',
          value: 0
        },
        {
          label: '待上门',
          value: 1
        },
        {
          label: '待完工',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已取消',
          value: 4
        },
        {
          label: '被退单',
          value: 5
        }
      ],
      showConfirmAndReset: true
    },
    cell: (h, { row }) => {
      const statusList = {
        0: {
          label: '待分配'
        },
        1: {
          label: '待上门'
        },
        2: {
          label: '待完工'
        },
        3: {
          label: '已完成'
        },
        4: {
          label: '已取消'
        },
        5: {
          label: '被退单'
        }
      }
      let status = 0
      if (row.serveStatus === 0 || row.serveStatus === 5) {
        status = 1
      } else if (row.serveStatus === 3 || row.serveStatus === 4) {
        status = 2
      } else {
        status = 0
      }
      return h(
        'span',
        {
          class: `status-dot status-dot-${status}`
        },
        statusList[row.serveStatus].label
      )
    }
  },
  {
    align: 'left',
    fixed: 'right',
    width: 220,
    minWidth: '220px',
    colKey: 'op',
    title: '操作'
  }
]
// 待完工
export const successCOLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    // 1-10，循环
    colKey: 'number'
  },
  {
    title: '订单编号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'id'
  },
  { title: '服务类型', width: 150, minWidth: '150px', colKey: 'serveTypeName' },
  { title: '服务名称', width: 150, minWidth: '150px', colKey: 'serveItemName' },
  {
    title: '服务费用（元）',
    minWidth: '170px',
    sortType: 'all',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
    h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '服务开始时间',
    minWidth: '250px',
    sortType: 'all',
    colKey: 'realServeStartTime',
    sorter: true,
    cell: (h, { row }) =>
      h(
        'span',
        formatDateTimeToDateTimeString(new Date(row.realServeStartTime))
      )
  },
  {
    title: '订单状态',
    colKey: 'serveStatus',
    width: 120,
    minWidth: '120px',
    // 添加筛选
    filter: {
      type: 'single',
      list: [
        {
          label: '待分配',
          value: 0
        },
        {
          label: '待上门',
          value: 1
        },
        {
          label: '待完工',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已取消',
          value: 4
        },
        {
          label: '被退单',
          value: 5
        }
      ],
      showConfirmAndReset: true
    },
    cell: (h, { row }) => {
      const statusList = {
        0: {
          label: '待分配'
        },
        1: {
          label: '待上门'
        },
        2: {
          label: '待完工'
        },
        3: {
          label: '已完成'
        },
        4: {
          label: '已取消'
        },
        5: {
          label: '被退单'
        }
      }
      let status = 0
      if (row.serveStatus === 0 || row.serveStatus === 5) {
        status = 1
      } else if (row.serveStatus === 3 || row.serveStatus === 4) {
        status = 2
      } else {
        status = 0
      }
      return h(
        'span',
        {
          class: `status-dot status-dot-${status}`
        },
        statusList[row.serveStatus].label
      )
    }
  },
  {
    align: 'left',
    fixed: 'right',
    width: 220,
    minWidth: '220px',
    colKey: 'op',
    title: '操作'
  }
]
// 已完成
export const finishCOLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    // 1-10，循环
    colKey: 'number'
  },
  {
    title: '订单编号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'id'
  },
  { title: '服务类型', width: 150, minWidth: '150px', colKey: 'serveTypeName' },
  { title: '服务名称', width: 150, minWidth: '150px', colKey: 'serveItemName' },
  {
    title: '服务费用（元）',
    minWidth: '170px',
    sortType: 'all',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
    h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '服务完成时间',
    minWidth: '250px',
    sortType: 'all',
    colKey: 'realServeEndTime',
    sorter: true,
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.realServeEndTime)))
  },
  {
    title: '订单状态',
    colKey: 'serveStatus',
    width: 120,
    minWidth: '120px',
    // 添加筛选
    filter: {
      type: 'single',
      list: [
        {
          label: '待分配',
          value: 0
        },
        {
          label: '待上门',
          value: 1
        },
        {
          label: '待完工',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已取消',
          value: 4
        },
        {
          label: '被退单',
          value: 5
        }
      ],
      showConfirmAndReset: true
    },
    cell: (h, { row }) => {
      const statusList = {
        0: {
          label: '待分配'
        },
        1: {
          label: '待上门'
        },
        2: {
          label: '待完工'
        },
        3: {
          label: '已完成'
        },
        4: {
          label: '已取消'
        },
        5: {
          label: '被退单'
        }
      }
      let status = 0
      if (row.serveStatus === 0 || row.serveStatus === 5) {
        status = 1
      } else if (row.serveStatus === 3 || row.serveStatus === 4) {
        status = 2
      } else {
        status = 0
      }
      return h(
        'span',
        {
          class: `status-dot status-dot-${status}`
        },
        statusList[row.serveStatus].label
      )
    }
  },
  {
    align: 'left',
    fixed: 'right',
    width: 220,
    minWidth: '220px',
    colKey: 'op',
    title: '操作'
  }
]
// 全部
export const allCOLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    // 1-10，循环
    colKey: 'number'
  },
  {
    title: '订单编号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'id'
  },
  { title: '服务类型', width: 150, minWidth: '150px', colKey: 'serveTypeName' },
  { title: '服务名称', width: 150, minWidth: '150px', colKey: 'serveItemName' },
  {
    title: '服务费用（元）',
    minWidth: '170px',
    sortType: 'all',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
    h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '预约时间',
    minWidth: '250px',
    sortType: 'all',
    colKey: 'serveStartTime',
    sorter: true,
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.serveStartTime)))
  },
  {
    title: '订单状态',
    colKey: 'serveStatus',
    width: 120,
    minWidth: '120px',
    // 添加筛选
    filter: {
      type: 'single',
      list: [
        {
          label: '待分配',
          value: 0
        },
        {
          label: '待上门',
          value: 1
        },
        {
          label: '待完工',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已取消',
          value: 4
        },
        {
          label: '被退单',
          value: 5
        }
      ],
      showConfirmAndReset: true
    },
    cell: (h, { row }) => {
      const statusList = {
        0: {
          label: '待分配'
        },
        1: {
          label: '待上门'
        },
        2: {
          label: '待完工'
        },
        3: {
          label: '已完成'
        },
        4: {
          label: '已取消'
        },
        5: {
          label: '被退单'
        }
      }
      let status = 0
      if (row.serveStatus === 0 || row.serveStatus === 5) {
        status = 1
      } else if (row.serveStatus === 3 || row.serveStatus === 4) {
        status = 2
      } else {
        status = 0
      }
      return h(
        'span',
        {
          class: `status-dot status-dot-${status}`
        },
        statusList[row.serveStatus].label
      )
    }
  },
  {
    align: 'left',
    fixed: 'right',
    width: 220,
    minWidth: '220px',
    colKey: 'op',
    title: '操作'
  }
]
// 历史订单
export const historyCOLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'number'
  },
  {
    title: '订单编号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'id'
  },
  { title: '服务类型', width: 150, minWidth: '150px', colKey: 'serveTypeName' },
  { title: '服务名称', width: 150, minWidth: '150px', colKey: 'serveItemName' },
  {
    title: '服务费用（元）',
    minWidth: '170px',
    sortType: 'all',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
    h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '预约时间',
    minWidth: '250px',
    colKey: 'serveStartTime',
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.serveStartTime)))
  },
  {
    title: '订单状态',
    colKey: 'serveStatus',
    width: 120,
    minWidth: '120px',
    // 添加筛选
    filter: {
      type: 'single',
      list: [
        {
          label: '待分配',
          value: 0
        },
        {
          label: '待上门',
          value: 1
        },
        {
          label: '待完工',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已取消',
          value: 4
        },
        {
          label: '被退单',
          value: 5
        }
      ],
      showConfirmAndReset: true
    },
    cell: (h, { row }) => {
      const statusList = {
        0: {
          label: '待分配'
        },
        1: {
          label: '待上门'
        },
        2: {
          label: '待完工'
        },
        3: {
          label: '已完成'
        },
        4: {
          label: '已取消'
        },
        5: {
          label: '被退单'
        }
      }
      let status = 0
      if (row.serveStatus === 0 || row.serveStatus === 5) {
        status = 1
      } else if (row.serveStatus === 3 || row.serveStatus === 4) {
        status = 2
      } else {
        status = 0
      }
      return h(
        'span',
        {
          class: `status-dot status-dot-${status}`
        },
        statusList[row.serveStatus].label
      )
    }
  },
  {
    align: 'left',
    fixed: 'right',
    width: 70,
    minWidth: '70px',
    colKey: 'op',
    title: '操作'
  }
]
