import { defineStore } from 'pinia'
import { TOKEN_NAME } from '@/config/global'
import { store, usePermissionStore } from '@/store'

const InitUserInfo = {
  roles: []
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem(TOKEN_NAME) || 'main_token', // 默认token不走权限
    userInfo: { ...InitUserInfo },
    canPickUp: true,
    settingsStatus: false
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles
    }
  },
  actions: {
    async login(token: string) {
      this.token = token
      localStorage.setItem(TOKEN_NAME, token)
    },
    async setUserInfo(data: any) {
      this.userInfo = data
    },
    async logout() {
      localStorage.removeItem(TOKEN_NAME)
      this.token = ''
      this.userInfo = { ...InitUserInfo }
    },
    async removeToken() {
      this.token = ''
    }
  },
  persist: {
    afterRestore: (ctx) => {
      if (ctx.store.roles && ctx.store.roles.length > 0) {
        const permissionStore = usePermissionStore()
        permissionStore.initRoutes(ctx.store.roles)
      }
    }
  }
})

export function getUserStore() {
  return useUserStore(store)
}
