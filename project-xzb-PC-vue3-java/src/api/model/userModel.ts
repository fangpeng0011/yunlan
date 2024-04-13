export interface loginResult {
  code: number
  msg: string
  data: string
  requestId: string
}

export interface userInfoResult {
  code: number
  msg: string
  data: {
    icon: string
    id: string
    name: string
    roleName: string
    type: number
    requestId: string
  }
}
