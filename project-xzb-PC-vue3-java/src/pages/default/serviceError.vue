<!-- 公共服务器出错 -->
<template>
  <div class="serviceError">
    <img src="@/assets/default/500@2x.png" />
    <p>抱歉，服务器出错啦～</p>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.serviceError {
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
