<!--  -->
<template>
  <view class="authFail">
    <!-- 导航 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <image class="bImg" src="../../static/new/img_weitongguo@2x.png"></image>
    <view class="content">提交的认证审核末通过</view>
    <view class="content">原因：{{ reason === 'null' ? '无' : reason }}</view>
    <view class="btn-red" @click="toAuth">重新认证</view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
import { getAuthFail } from '../api/setting.js';
const title = ref('实名认证');
const reason = ref('');
onMounted(() => {
  getAuthFail().then((res) => {
    reason.value = res.data.rejectReason;
  });
});

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
const toAuth = () => {
  uni.navigateTo({
    url: '/pages/auth/index',
  });
};
</script>
<style scoped src="./index.scss"></style>
