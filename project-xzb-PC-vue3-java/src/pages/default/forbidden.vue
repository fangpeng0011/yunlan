<!-- 公共无权限 -->
<template>
  <div class="netWorkAnomaly">
    <img src="@/assets/default/noAuthority@2x.png" />
    <p>您没有权限访问该页面～</p>
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
