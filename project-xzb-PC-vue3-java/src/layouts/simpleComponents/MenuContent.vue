<!-- 简版布局 -->
<template>
  <div class="menuBox">
    <template v-for="item in list" :key="item.path">
      <!--  简版的直接干掉了所有的子导航 正常应该是 item.children.length === 1 -->
      <template
        v-if="
          !item.children ||
          !item.children.length ||
          item.meta?.singles ||
          item.meta?.single
        "
      >
        <t-menu-item
          v-if="getHref(item)"
          :name="item.path"
          :value="getPath(item)"
          @click="openHref(getHref(item)[0])"
        >
          <template #icon>
            <t-icon v-if="beIcon(item)" :name="item.icon" />
            <component
              :is="beRender(item).render"
              v-else-if="beRender(item).can"
              class="t-icon"
            />
          </template>
          {{ item.title }}
        </t-menu-item>
        <t-menu-item
          v-else
          :name="item.path"
          :value="getPath(item)"
          :to="item.path"
        >
          <template #icon>
            <t-icon v-if="beIcon(item)" :name="item.icon" />
            <component
              :is="beRender(item).render"
              v-else-if="beRender(item).can"
              class="t-icon"
            />
          </template>
          {{ item.title }}
        </t-menu-item>
      </template>
      <t-submenu
        v-else
        :name="item.path"
        :value="item.path"
        :title="item.title"
      >
        <template #icon>
          <t-icon v-if="beIcon(item)" :name="item.icon" />
          <component
            :is="beRender(item).render"
            v-else-if="beRender(item).can"
            class="t-icon"
          />
        </template>
        <menu-content v-if="item.children" :nav-data="item.children" />
      </t-submenu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import isObject from 'lodash/isObject'
import type { MenuRoute } from '@/types/interface'
import { getActive } from '@/router'
import { useSettingStore } from '@/store'

const props = defineProps({
  navData: {
    type: Array as PropType<MenuRoute[]>,
    default: () => []
  }
})

const settingStore = useSettingStore()
// 选择
const active = computed(() => getActive())
// 菜单列表
const list = computed(() => {
  const { navData } = props
  return getMenuList(navData)
})
// getMenuList是一个递归函数，用于将路由转换为菜单列表
const getMenuList = (list: MenuRoute[], basePath?: string): MenuRoute[] => {
  if (!list) {
    return []
  }
  // 如果meta中有orderNo则按照从小到大排序
  list.sort((a, b) => {
    return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0)
  })
  return list
    .map((item) => {
      const path =
        basePath && !item.path.includes(basePath)
          ? `${basePath}/${item.path}`
          : item.path
      return {
        path,
        title: item.meta?.title,
        icon: item.meta?.icon || '',
        children: getMenuList(item.children, path),
        meta: item.meta,
        redirect: item.redirect
      }
    })
    .filter((item) => item.meta && item.meta.hidden !== true)
}
// getHref是一个函数，用于判断是否是外链
const getHref = (item: MenuRoute) => {
  const { frameSrc, frameBlank } = item.meta
  if (frameSrc && frameBlank) {
    return frameSrc.match(/(http|https):\/\/([\w.]+\/?)\S*/)
  }
  return null
}
// getPath是一个函数，用于判断当前路由是否为激活状态
const getPath = (item) => {
  if (active.value.startsWith(item.path)) {
    return active.value
  }
  return item.meta?.single ? item.redirect : item.path
}
// beIcon是一个函数，用于判断是否是内置图标
const beIcon = (item: MenuRoute) => {
  return item.icon && typeof item.icon === 'string'
}

const beRender = (item: MenuRoute) => {
  if (isObject(item.icon) && typeof item.icon.render === 'function') {
    return {
      can: true,
      render: item.icon.render
    }
  }
  return {
    can: false,
    render: null
  }
}
// openHref是一个函数，用于打开外链
const openHref = (url: string) => {
  window.open(url)
}
</script>
