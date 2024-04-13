import { formatDateTimeToDateTimeString } from '@/utils/date'
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
    title: '服务人员姓名',
    minWidth: '170px',
    width: 170,
    sortType: 'all',
    colKey: 'name'
  },
  { title: '服务人员手机', width: 200, minWidth: '200px', colKey: 'phone' },
  { title: '身份证号', width: 250, minWidth: '250px', colKey: 'idCardNo' },
  { title: '证明资料', minWidth: '150px', colKey: 'certificationImgs' },
  {
    title: '创建时间',
    width: 200,
    minWidth: '200px',
    colKey: 'createTime',
    sorter: true,
    sortType: 'all',
    cell: (h, { row }) =>
      h('span', formatDateTimeToDateTimeString(new Date(row.createTime)))
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
