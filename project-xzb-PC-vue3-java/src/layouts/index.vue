<!-- 架构首页 -->
<template>
  <div class="appBox" :class="settingStore.isSidebarCompact ? 'compact' : ''">
    <EaseRequest v-if="settingStore.showApiModal"></EaseRequest>
    <div :class="`${setting.style.value} ${setting.layout.value}`">
      <!-- 左右 -->
      <template v-if="setting.layout.value === 'side'">
        <t-layout key="side" :class="mainLayoutCls">
          <t-aside><layout-side-nav /></t-aside>
          <t-layout>
            <t-content><layout-content-side /></t-content>
          </t-layout>
        </t-layout>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useSettingStore, useTabsRouterStore } from '@/store'

import LayoutContentSide from './components/LayoutContentSide.vue'
import LayoutSideNav from './components/LayoutSideNav.vue'

import { prefix } from '@/config/global'
import EaseRequest from './components/EaseRequest.vue'

const route = useRoute()
const settingStore = useSettingStore()
const tabsRouterStore = useTabsRouterStore()
const setting = storeToRefs(settingStore)
// mainLayoutCls是一个计算属性，用于控制主布局的样式
const mainLayoutCls = computed(() => [
  {
    't-layout--with-sider': settingStore.showSidebar
  }
])
// 添加新路由
const appendNewRoute = () => {
  const {
    path,
    query,
    meta: { title },
    name
  } = route
  tabsRouterStore.appendTabRouterList({
    path,
    query,
    title: title as string,
    name,
    isAlive: true,
    meta: route.meta
  })
}

// 生命周期
onMounted(() => {
  appendNewRoute()
})
// 监听路由变化，添加新路由，滚动到顶部
watch(
  () => route.path,
  () => {
    appendNewRoute()
    document
      .querySelector(`.${prefix}-layout`)
      .scrollTo({ top: 0, behavior: 'smooth' })
  }
)
</script>

<style lang="less" scoped>
.set {
  position: fixed;
  right: 20px;
  top: 17px;
  cursor: pointer;
  color: #000;
  padding: 3px 7px;
  z-index: 1002;
  padding-bottom: 5px;
  .t-icon {
    width: 16px;
    height: 16px;
  }
}
.special {
  top: 12px;
}
</style>
