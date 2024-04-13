import { formatDateTimeToDateTimeString } from '@/utils/date'
import { formatNumber } from '@/utils/index'
// 服务人员列表
export const COLUMNS = [
  {
    title: '序号',
    minWidth: '100px',
    width: 100,
    colKey: 'id',
    cell: (h, { row, rowIndex }) => h('span', rowIndex + 1)
  },
  {
    title: '服务类型',
    minWidth: '180px',
    width: 180,
    colKey: 'serveTypeName'
  },
  {
    title: '服务名称',
    minWidth: '180px',
    width: 180,
    colKey: 'serveItemName'
  },
  {
    title: '服务数量',
    minWidth: '100px',
    width: 100,
    colKey: 'purNum'
  },
  {
    title: '预约时间',
    minWidth: '200px',
    colKey: 'serveStartTime',
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.serveStartTime)))
  },
  {
    title: '服务费用（元）',
    minWidth: '150px',
    colKey: 'ordersAmount',
    cell: (h, { row }) =>
    h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '服务地址',
    minWidth: '288px',
    colKey: 'serveAddress'
  },
  {
    align: 'left',
    fixed: 'right',
    width:100,
    minWidth: '100px',
    colKey: 'op',
    title: '操作'
  }
]
