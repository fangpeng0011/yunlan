export interface customListRequest {
  page: number
  pageSize: number
  orderBy1: string
  isAsc1: boolean
  nickName?: string
  phone?: string
}
// 冻结/解冻
export interface customFreezeRequest {
  id: string
  status: number
  accountLockReason?: string
}