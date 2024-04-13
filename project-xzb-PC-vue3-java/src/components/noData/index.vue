<!-- 公用空数据页组件 -->
<template>
  <div class="noData">
    <img src="@/assets/default/zwnr@2x.png" />
    <p>{{ content || '暂无内容哦～' }}</p>
  </div>
</template>

<script setup lang="ts">
// 接收父组件传递的值
const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.noData {
  text-align: center;
  img {
    width: 220px;
    height: 200px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  p {
    text-align: center;
    color: var(--color-black);
    margin-bottom: 75px;
  }
}
</style>
