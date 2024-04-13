<!-- 服务技能 -->
<template>
  <view class="serviceSkill">
    <!-- nav -->
    <UniNav title="接单设置" @goBack="goBack"></UniNav>
    <view class="switchBox">
      <text>开启接单</text>
      <switch
        color="#F74347"
        style="transform: scale(0.7)"
        @change="handlePickUpStatus"
        :checked="canPickUp"
      ></switch>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { getUserSetting, setPickUpStatus } from '../api/setting.js';
import { onShow } from '@dcloudio/uni-app';

// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const canPickUp = ref(false); //是否开启接单
onShow(() => {
  getSetting();
});
//修改接单状态
const handlePickUpStatus = () => {
  setPickUpStatus({
    canPickUp: canPickUp.value ? 0 : 1,
  })
    .then((res) => {
      if (res.code == 200) {
        getSetting();
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
//获取配置信息
const getSetting = () => {
  getUserSetting()
    .then((res) => {
      if (res.code == 200) {
        canPickUp.value = res.data.canPickUp;
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
