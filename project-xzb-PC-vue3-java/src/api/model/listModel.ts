export interface ListResult {
  data: any[]
  list: Array<ListModel>
}
export interface ListModel {
  adminName: string
  amount: string
  contractType: number
  index: number
  name: string
  no: string
  paymentType: number
  status: number
  updateTime: Date
}

export interface CardListResult {
  data: any
  [x: string]: any
  list: Array<CardList>
}
export interface CardList {
  banner: string
  description: string
  index: number
  isSetup: boolean
  name: string
  type: number
}
// 新增和编辑基础列表的数据
export interface addListParams {
  index: number
  description: string
  serviceCallNumber: number
  status: number
  updateTime: Date
}
// 删除基础列表的数据
export interface deleteListParams {
  index: number
}
// 折叠树列表
export interface ListCollapseResult {
  data: any[]
  list: Array<ListCollapseModel>
}
export interface ListCollapseModel {
  index: number
  canUpdate: boolean
  name: string
  maxIndexOnShelf: number
  maxSectionIndexOnShelf: number
  id: string
  sections: [
    {
      index: number
      maxIndexOnShelf: number
      maxSectionIndexOnShelf: number
      name: string
      sort: number
    }
  ]
}

// 穿梭框
export interface ListTransferResult {
  data: any[]
  list: Array<ListTransferModel>
}
export interface ListTransferModel {
  name: string
  id: string
}
// 卡片带排序
export interface ListCardsortResult {
  data: any[]
  list: Array<ListCardsortModel>
}
export interface ListCardsortModel {
  name: string
  id: string
  isShow: boolean
  introduce: string
  num: number
  phone: string
}
