<!-- 侧边栏退出栏 -->
<template>
  <div v-if="!settingStore.isSidebarCompact" class="navUserCont">
    <div class="fx fx-sb">
      <div class="header-user-account">
        <div class="baseInfo">
          <img
            class="header-user-avatar"
            name="user-circle"
            src="@/assets/pic-touxiang@2x(1).png"
          />
          <span class="header-user-name">Admin</span>
        </div>
        <span v-if="setting.layout.value === 'side'" class="splitLine"></span>
        <div class="logoutBox btn-hover-active" @click="handleLogout">
          <span class="header-user-logout"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
              class="design-iconfont"
              width="28px"
              height="28px"
              style="vertical-align: sub"
            >
              <g
                stroke="#595959"
                stroke-width="1.3"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M7.5,11.5 L2,11.5 C0.8954305,11.5 1.3527075e-16,10.6045695 0,9.5 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L7.5,0 L7.5,0"
                  transform="translate(7.665307 8.103679)"
                />
                <path
                  d="M3.75 5.75L12.4916992 5.75"
                  transform="translate(7.665307 8.103679)"
                />
                <path
                  transform="rotate(45 4.44580863 18.99846656)"
                  d="M8.3877241 3.60684445L12.4025977 3.60684445 12.4025977 7.78072245"
                />
              </g>
            </svg>
          </span>
          <span v-if="setting.layout.value === 'top'" class="topLogout"
            >退出</span
          >
        </div>
      </div>
      <div class="header-user-list btn-hover-active">
        <span @click="changeCollapsed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29 29"
            class="design-iconfont"
            width="28px"
            height="28px"
            style="vertical-align: sub"
          >
            <g
              fill="#D8D8D8"
              stroke="#191919"
              stroke-width="1.3"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M0.53826904 0.5L12.380188 0.5"
                transform="translate(8.330986 8.548346)"
              />
              <path
                d="M0.53826904 5.38330078L12.380188 5.38330078"
                transform="translate(8.330986 8.548346)"
              />
              <path
                d="M0.53826904 10.2666016L12.380188 10.2666016"
                transform="translate(8.330986 8.548346)"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  </div>
  <div v-if="settingStore.isSidebarCompact" class="put navUserCont">
    <div class="fx fx-sb">
      <!-- <div class="header-user-account">
        <img
          class="header-user-avatar"
          name="user-circle"
          src="@/assets/pic-touxiang@2x(1).png"
        />
      </div> -->
      <div class="header-user-logout btn-hover-active" @click="handleLogout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29 29"
          class="design-iconfont"
          width="28px"
          height="28px"
          style="vertical-align: sub"
        >
          <g
            stroke="#595959"
            stroke-width="1.3"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M7.5,11.5 L2,11.5 C0.8954305,11.5 1.3527075e-16,10.6045695 0,9.5 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L7.5,0 L7.5,0"
              transform="translate(7.665307 8.103679)"
            />
            <path
              d="M3.75 5.75L12.4916992 5.75"
              transform="translate(7.665307 8.103679)"
            />
            <path
              transform="rotate(45 4.44580863 18.99846656)"
              d="M8.3877241 3.60684445L12.4025977 3.60684445 12.4025977 7.78072245"
            />
          </g>
        </svg>
      </div>
      <div class="header-user-list btn-hover-active">
        <span @click="changeCollapsed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29 29"
            class="design-iconfont"
            width="28px"
            height="28px"
            style="vertical-align: sub"
          >
            <g
              fill="#D8D8D8"
              stroke="#191919"
              stroke-width="1.3"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M0.53826904 0.5L12.380188 0.5"
                transform="translate(8.330986 8.548346)"
              />
              <path
                d="M0.53826904 5.38330078L12.380188 5.38330078"
                transform="translate(8.330986 8.548346)"
              />
              <path
                d="M0.53826904 10.2666016L12.380188 10.2666016"
                transform="translate(8.330986 8.548346)"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/store'
import type { MenuRoute } from '@/types/interface'

const props = defineProps({
  theme: {
    type: String,
    default: ''
  },
  layout: {
    type: String,
    default: 'top'
  },
  showLogo: {
    type: Boolean,
    default: true
  },
  menu: {
    type: Array as PropType<MenuRoute[]>,
    default: () => []
  },
  isFixed: {
    type: Boolean,
    default: false
  },
  isCompact: {
    type: Boolean,
    default: false
  },
  maxLevel: {
    type: Number,
    default: 3
  }
})

const router = useRouter()
const settingStore = useSettingStore()
const setting = storeToRefs(settingStore)
// toggleSettingPanel，展示设置面板
const toggleSettingPanel = () => {
  settingStore.updateConfig({
    showSettingPanel: true
  })
}
// 展示面包屑
const showBreadcrumb = ref(false)
// 改变侧边栏收缩状态
const changeCollapsed = () => {
  settingStore.updateConfig({
    isSidebarCompact: !settingStore.isSidebarCompact
  })
  showBreadcrumb.value = !showBreadcrumb.value
}
// 点击退出
const handleLogout = () => {
  router.push({
    path: '/login',
    query: { redirect: encodeURIComponent(router.currentRoute.value.fullPath) }
  })
}
</script>
<style lang="less" scoped></style>
