import { formatDateTimeToDateTimeString } from '@/utils/date'
import { formatNumber } from '@/utils/index'
// 服务人员列表
export const COLUMNS = [
  {
    title: '序号',
    align: 'left',
    width: 200,
    minWidth: '200px',
    colKey: 'code'
  },
  {
    title: '订单编号',
    minWidth: '230px',
    sortType: 'all',
    colKey: 'id'
  },
  { title: '服务类型', width: 200, minWidth: '200px', colKey: 'serveTypeName' },
  {
    title: '服务名称',
    minWidth: '200px',
    colKey: 'serveItemName'
  },
  {
    title: '服务费用（元）',
    width: 250,
    minWidth: '250px',
    colKey: 'ordersAmount',
    cell: (h, { row }) => h('span', formatNumber(row.ordersAmount * 0.997 * 0.3))
  },
  {
    title: '预约时间',
    width: 200,
    minWidth: '200px',
    colKey: 'serveStartTime',
    sorter: true,
    sortType: 'all',
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.serveStartTime)))
  },
  {
    title: '服务地址',
    minWidth: '288px',
    colKey: 'serveAddress'
  },
  {
    align: 'left',
    fixed: 'right',
    width: 130,
    minWidth: '130px',
    colKey: 'op',
    title: '操作'
  }
]
