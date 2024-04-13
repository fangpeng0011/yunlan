<!-- 公共网络超时 -->
<template>
  <div class="netWorkAnomaly">
    <img src="@/assets/default/wuwang@2x.png" />
    <p>网络开小差了～</p>
  </div>
</template>

<script setup lang="ts"></script>
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
}
</style>
