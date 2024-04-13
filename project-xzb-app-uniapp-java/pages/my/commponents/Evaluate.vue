<template>
  <view class="boxBg headTop">
    <view class="headItem score">
      <view class="leftBox">
        <view class="scoreContent">{{ baseData.score }}分</view>
        <view class="label">综合评分</view>
      </view>
      <view class="rightBox">
        <view class="scoreContent">{{ baseData.goodLevelRate }}</view>
        <view class="label">好评率</view>
      </view>
    </view>
  </view>
</template>
<script setup>
// 获取父组件数据
const props = defineProps({
  baseData: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style src="./../index.scss" lang="scss" scoped></style>
