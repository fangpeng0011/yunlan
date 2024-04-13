import { defineStore } from 'pinia'
import keys from 'lodash/keys'
import { LIGHT_CHART_COLORS, DARK_CHART_COLORS } from '@/utils/color'
import STYLE_CONFIG from '@/config/style'
import { store } from '@/store'

const state = {
  ...STYLE_CONFIG,
  showSettingPanel: false,
  colorList: [], // 颜色列表
  chartColors: [],
  requestList: [] // 当前页面下所有的请求接口列表
}
// TState是state的类型
export type TState = typeof state
// 设置主题风格
export const useSettingStore = defineStore('setting', {
  state: () => state,
  getters: {
    showSidebarLogo: (state) => state.layout === 'side', // 侧边栏logo
    showHeaderLogo: (state) => state.layout !== 'side', // 顶部栏logo
    displayMode: (state) => {
      if (state.mode === 'auto') {
        const media = window.matchMedia('(prefers-color-scheme:black)')
        if (media.matches) {
          return 'black'
        }
        return 'light'
      }
      return state.mode
    }
  },
  actions: {
    async changeMode(mode: 'black' | 'light') {
      let theme = mode
      const media = window.matchMedia('(prefers-color-scheme:black)')
      if (media.matches) {
        theme = 'black'
      } else {
        theme = 'light'
      }
      const isDarkMode = theme === 'black'

      document.documentElement.setAttribute(
        'theme-mode',
        isDarkMode ? 'black' : ''
      )
      // 图表颜色
      this.chartColors = isDarkMode ? DARK_CHART_COLORS : LIGHT_CHART_COLORS
    },
    // 改变主题颜色
    changeBrandTheme(brandTheme: string) {
      document.documentElement.setAttribute('theme-color', brandTheme)
    },
    // 添加颜色
    addColor(payload: any) {
      this.colorList = { ...this.colorList, ...payload }
    },
    // 更新配置
    updateConfig(payload: Partial<TState>) {
      // 判断点击的是哪一种配置
      for (const key in payload) {
        if (payload[key] !== undefined) {
          // 将点击的配置赋值给this[key]
          this[key] = payload[key]
        }
        if (key === 'mode') {
          this.changeMode(payload[key])
        }
        if (key === 'brandTheme') {
          this.changeBrandTheme(payload[key])
        }
      }
    },
    // 将当前页面所有请求添加到请求队列
    addRequestList(request) {
      this.requestList.push(request)
    },
    addRequestListRes(index, res) {
      this.requestList[index].res = res
    },
    clearRequestList() {
      this.requestList = []
    }
  },
  persist: {
    paths: [...keys(STYLE_CONFIG), 'colorList', 'chartColors']
  }
})

export function getSettingStore() {
  return useSettingStore(store)
}
