<!-- 侧边栏主页面 -->
<template>
  <l-side-nav
    v-if="settingStore.showSidebar"
    :show-logo="settingStore.showSidebarLogo"
    :menu="sideMenu"
    :theme="settingStore.displayMode"
    :is-compact="settingStore.isSidebarCompact"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePermissionStore, useSettingStore } from '@/store'
import LSideNav from '../simpleComponents/SideNav.vue' // 侧边栏

const permissionStore = usePermissionStore()
const settingStore = useSettingStore()
const { routers: menuRouters } = storeToRefs(permissionStore)
// sideMenu是侧边栏的菜单路由
const sideMenu = computed(() => {
  const newMenuRouters = menuRouters.value
  return newMenuRouters
})
</script>
