export interface serviceTypeResult {
  isAsc1: string
  isAsc2: string
  orderBy1: string
  orderBy2: string
  pageNo: number
  pageSize: number
}
export interface serviceTypeStatus {
  id: string
  flag: number
}
export interface serviceTypeAdd {
  img: string
  serveTypeIcon: string
  name: string
  sortNum: number
}
export interface serviceTypeItemList {
  isAsc1: string
  isAsc2: string
  orderBy1: string
  orderBy2: string
  pageNo: number
  pageSize: number
  name: string
  serveTypeId: string
}
export interface serviceItemTypeAdd {
  serveTypeId: string
  img: string
  description: string
  referencePrice: string
  unit: string
  serveItemIcon: string
  detailImg: string
  name: string
  sortNum: string
}
export interface regionTypeAdd {
  cityCode: string
  name: string
  managerName: string
  managerPhone: string
}
export interface regionTypeEdit {
  managerName: string
  managerPhone: string
}
export interface serviceListType {
  isAsc1: string
  isAsc2: string
  orderBy1: string
  orderBy2: string
  pageNo: number
  pageSize: number
  regionId: string
}
