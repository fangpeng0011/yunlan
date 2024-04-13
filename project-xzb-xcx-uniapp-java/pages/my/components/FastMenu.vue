<!--我的订单相关快速入口-->
<template>
  <view class="fastMenu">
    <view class="item" @click="handleOrder(0)">
      <view class="menuIcon">
        <icon class="payment"></icon>
      </view>
      <view class="item">待支付</view>
    </view>
    <view class="item" @click="handleOrder(200)">
      <view class="menuIcon">
        <icon class="serve"></icon>
      </view>
      <view class="item">待服务</view>
    </view>
    <view class="item" @click="handleOrder(300)">
      <view class="menuIcon">
        <icon class="accomplish"></icon>
      </view>
      <view class="item">服务中</view>
    </view>
    <view class="item" @click="handleOrder(400)">
      <view class="menuIcon">
        <icon class="execute"></icon>
      </view>
      <view class="item">待评价</view>
    </view>
  </view>
</template>
<script setup>
// 定义变量
const emit = defineEmits(['handleOrder']);
// ------定义方法------
const handleOrder = (val) => {
  emit('handleOrder', val);
};
</script>
