<template>
  <!-- 公用底部 -->
  <view class="footBox">
    <view class="uni-tabbar">
      <view
        class="tabbar-item"
        :class="store.state.footStatus === index ? 'active' : ''"
        v-for="(item, index) in tabbar"
        :key="index"
        @tap="changeTab(item, index)"
      >
        <view class="uni-tabbar__bd">
          <view class="uni-tabbar__icon">
            <img
              v-if="store.state.footStatus === index"
              class="item-img"
              :src="item.selectedIconPath"
            />
            <img v-else class="item-img" :src="item.iconPath" />
          </view>
        </view>
        <view class="uni-tabbar__label" v-if="item.text !== ''">{{
          item.text
        }}</view>
      </view>
    </view>
  </view>
  <!-- end -->
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
// 获取父组件值、方法
const props = defineProps({
  pagePath: {
    type: String,
    default: '',
  },
});
// ------定义变量------
const store = useStore(); //vuex获取储存数据
let tabbar = ref([
  {
    pagePath: '/pages/index/index',
    iconPath: 'static/home.png',
    selectedIconPath: 'static/homeActive.png',
    text: '首页',
  },
  {
    pagePath: '/pages/pickup/index',
    iconPath: 'static/collect.png',
    selectedIconPath: 'static/collectActive.png',
    text: '订单',
  },
  {
    pagePath: '/pages/delivery/index',
    iconPath: 'static/delivery.png',
    selectedIconPath: 'static/deliveryActive.png',
    text: '消息',
  },
  {
    pagePath: '/pages/my/index',
    iconPath: 'static/user.png',
    selectedIconPath: 'static/userActive.png',
    text: '我的',
  },
]);
// ------方法------

// 触发tab事件
const changeTab = (item, index) => {
  store.commit('setFootStatus', index);
  if (item.text !== '消息') {
    // 页面跳转
    uni.redirectTo({
      url: item.pagePath,
    });
  } else {
    uni.showToast({
      title: '当前功能非教学版本！',
      duration: 1000,
      icon: 'none',
    });
  }
};
</script>
