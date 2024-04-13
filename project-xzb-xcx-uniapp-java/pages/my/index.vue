<!-- 我的页面 -->
<template>
  <view class="myPage">
    <!-- 标题 -->>
    <!-- end -->
    <view class="main" :style="{ paddingTop: capsuleBottom + 'px' }">
      <view class="head" @click="handleClick">
        <image src="https://yjy-oss-videos.oss-accelerate.aliyuncs.com/tx.png"></image>
        <view class="text">{{
          token && nickName ? nickName : '立即登录'
        }}</view>
      </view>
      <view class="box boxRadius">
        <!-- 我的订单 -->
        <view class="order">
          <view class="lText">我的订单</view>
          <view class="rText" @click="handleOrder('')"
            >查看全部<icon class="nextIcon iconOpacity"></icon>
          </view>
        </view>
        <!-- end -->
        <!-- 快速导航 -->
        <FastMenu @handle-order="handleOrder"></FastMenu>
        <!-- end -->
      </view>
      <!-- 我的导航 -->
      <view class="box boxRadius">
        <MyMenu
          @handleAddress="handleAddress"
          @handleCoupon="handleCoupon"
          @handle-bill="handleBill"
        ></MyMenu>
      </view>
      <view class="phoneMenu">
          <view class="item">
            <view @click="handlePhone"
              ><text>客服电话</text><test>400-000-4000</test></view
            >
          </view>
        </view>
    </view>
    <!-- footer -->
    <UniFooter :pagePath="'/pages/my/index'"></UniFooter>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref } from 'vue';
import {
  onShow,
  onLoad,
} from '@dcloudio/uni-app';
// 接口api
import { useStore } from 'vuex';
// 组件
// 快速入口
import FastMenu from './components/FastMenu.vue';
import MyMenu from './components/MyMenu.vue';

// ------定义变量------
const store = useStore(); //存储获取数据
const nickName = ref(null); //昵称
const token = ref(null); //token
//胶囊底部距离头部的距离
let capsuleBottom = ref();
// ------生命周期------
onShow(() => {
  // 获取nickName
  nickName.value = uni.getStorageSync('nickName');
  // 获取token
  token.value = uni.getStorageSync('token');
});
onLoad(() => {
  uni.getSystemInfo({
    success: (res) => {
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom + 12;
    },
  });
});
// ------定义方法------
// 如果没有登录，进入登录页面
const handleClick = () => {
  if (!token.value && !nickName.value) {
    goLogin();
  }
};
// 订单列表页
const handleOrder = (val) => {
  if (val != undefined) {
    store.commit('user/setOrderStatus', val);
  }
  if (!token.value && !nickName.value) {
    goLogin();
  } else {
    store.commit('user/setBackLike', 'my');
    uni.navigateTo({
      url: '/subPages/order/index',
    });
  }
};
// 我的地址
const handleAddress = () => {
  if (!token.value && !nickName.value) {
    goLogin();
  } else {
    uni.navigateTo({
      url: '/pages/address/index?type=address&isFromAddress=true',
    });
  }
};
// 我的优惠券
const handleCoupon = () => {
  if (!token.value && !nickName.value) {
    goLogin();
  } else {
    uni.navigateTo({
      url: '/pages/coupon/coupon',
    });
  }
};
// 我的评价
const handleBill = () => {
  if (!token.value && !nickName.value) {
    goLogin();
  } else {
    uni.navigateTo({
      url: '/pages/commit/index',
    });
  }
};
// 进入登录页
const goLogin = () => {
  store.commit('setRouter', 'pages/my/index');
  uni.navigateTo({
    url: '/pages/login/index',
  });
};
// 客服电话
const handlePhone = () => {
  uni.makePhoneCall({
    phoneNumber: '400-000-4000',
  });
};
// 暴露给父组件
defineExpose({});
</script>
<style src="./index.scss" lang="scss" scoped></style>
