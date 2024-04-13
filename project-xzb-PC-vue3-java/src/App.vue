<template>
  <router-view :class="[mode]" />
  <!--  项目说明浮窗 -->
    <ExpBall></ExpBall>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSettingStore } from '@/store'
import ExpBall from '@/components/expBall/ExpBall.vue'

const route = useRoute()
const store = useSettingStore()
const mode = computed(() => {
  return store.displayMode
})
// 监听路由变化
watch(
  () => route.path,
  (newValue) => {
    const { back } = window.history.state
    // console.log(back, back.indexOf('/login?') === -1, store.requestList, 'back')
    // 兼容重新打开一个浏览器窗口此时back为null的情况
    if (!back) return
    // 其中从登录页跳转之后的api也需要保留
    if (back.indexOf('/login?') === -1) {
      store.clearRequestList()
      // console.log(store.requestList, 'store.requestList')
    }
  }
)
</script>

<style lang="less" scoped>
#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
