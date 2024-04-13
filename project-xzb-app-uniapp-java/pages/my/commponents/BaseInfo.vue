<template>
  <view class="nav-bg mnav-bg">
    <view class="headBg"></view>
    <view class="header">
      <view class="headBox">
        <view class="head"
          ><icon v-if="baseData.avatar === ''"></icon
          ><image
            :src="baseData.avatar || '../../../static/new/toux.png'"
            v-else
          ></image
        ></view>
        <view class="info">
          <view class="tit">
            <view class="name">{{ baseData.name || '吴彦祖' }}</view>
            <view class="isAuth" v-if="certificationStatus === 2">已认证</view>
          </view>
          <view class="account">{{ baseData.phone || '177 9987 8876' }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getUserSetting } from '../../api/setting.js';
// 获取父组件数据
const props = defineProps({
  baseData: {
    type: Object,
    default: () => ({}),
  },
});
const certificationStatus = ref(0); //是否实名认证
onMounted(() => {
  getUserSetting()
    .then((res) => {
      if (res.code == 200) {
        certificationStatus.value = res.data.certificationStatus;
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
});
</script>
<style src="./../index.scss" lang="scss" scoped></style>
