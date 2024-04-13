<!-- 公共404 -->
<template>
  <div class="netWorkAnomaly">
    <img src="@/assets/default/404@2x.png" />
    <p>页面好像走丢了，再试一次！</p>
    <button class="bt newBoxbutton" @click="toHome()">返回首页</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function toHome() {
  router.push({
    path: '/dashboard/base',
    query: { redirect: encodeURIComponent(router.currentRoute.value.fullPath) }
  })
}
</script>
<style lang="less" scoped>
.netWorkAnomaly {
  text-align: center;
  img {
    width: 220px;
    height: 200px;
    margin-top: 206px;
    margin-bottom: 30px;
  }
  p {
    text-align: center;
    color: var(--color-black);
  }
  .newBoxbutton {
    display: inline-block;
    width: 88px;
    margin-top: 40px;
  }
}
</style>
