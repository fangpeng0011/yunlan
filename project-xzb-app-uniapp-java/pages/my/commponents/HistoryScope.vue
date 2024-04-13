<template>
  <view class="boxBg">
    <view class="headItem">
      <view class="item" @click="handleHistory">
        <text>我的评价</text>
        <text><icon class="nextIcon"></icon></text>
      </view>
      <view class="item" @click="handleAccount">
        <text>账户设置</text>
        <text><icon class="nextIcon"></icon></text>
      </view>
    </view>
  </view>
</template>
<script setup>
import { useStore } from 'vuex';
// ------定义方法------
// 账户设置
const handleAccount = () => {
  uni.navigateTo({
    url: '/pages/account/index',
  });
};
// 我的评价
const handleHistory = () => {
  uni.navigateTo({
    url: '/pages/evaluate/index',
  });
};
</script>
<style src="./../index.scss" lang="scss" scoped></style>
