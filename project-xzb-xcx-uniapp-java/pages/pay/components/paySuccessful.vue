<!-- 支付成功页 -->
<template>
  <view class="loginBox">
    <!-- 头部导航栏 -->
    <NavBar title="下单成功" :isShowBack="true" :handleToLink="handleToIndex"></NavBar>
    <view class="logo-box">
      <image src="../../../static/icon-chenggong@3x.png" class="image"></image>
      <view class="title">下单成功</view>
      <view class="tips">服务人员正在疯狂抢单中，请耐心等待～</view>
      <view class="foot">
        <button class="btn" @click="handleToIndex">返回首页</button>
        <button class="agree-btn btn" @click="handleToOrder">查看订单</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore(); //存储获取数据
// 返回首页
const handleToIndex = () => {
  uni.navigateTo({
    url: '/pages/index/index',
  });
};
// 查看订单
const handleToOrder = () => {
  store.commit('user/setOrderStatus', ''); //清空订单状态
  store.commit('user/setBackLike', 'pay');
  uni.navigateTo({
    url: '/subPages/order/index',
  });
};
</script>
<style src="../index.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.loginBox {
  .logo-box {
    padding-left: 91rpx;
    padding-right: 91rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 228rpx;
    image {
      width: 130rpx;
      height: 130rpx;
      margin-bottom: 38rpx;
    }
    .title {
      font-size: 42rpx;
      color: #151515;
      font-weight: 500;
      margin-bottom: 22rpx;
    }
    .tips {
      font-size: 24rpx;
      color: #888;
      margin-bottom: 40rpx;
    }
    .foot {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .btn {
        width: 268rpx;
        border: 1px solid #151515;
        &::after {
          display: none;
          border: none;
        }
      }
      .agree-btn {
        border: none
      }
    }
  }
}

</style>
