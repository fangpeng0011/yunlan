<!--首页快速入口-->
<template>
  <view>
    <view class="myMenu">
      <view class="item">
        <view @click="handleAddress">我的地址</view
        ><icon class="nextIcon"></icon>
      </view>
      <view class="item">
        <view @click="handleBill">我的评价</view><icon class="nextIcon"></icon>
      </view>
      <view class="item">
        <view @click="handleCoupon">我的优惠券</view
        ><icon class="nextIcon"></icon>
      </view>
    </view>
  </view>
</template>
<script setup>
// 定义变量
const emit = defineEmits(['handleAddress', 'handleBill']);
// ------定义方法------
// 我的预约
const handleAddress = () => {
  emit('handleAddress');
};
// 我的优惠券
const handleCoupon = () => {
  emit('handleCoupon');
};
// 我的评价
const handleBill = () => {
  emit('handleBill');
};
</script>
