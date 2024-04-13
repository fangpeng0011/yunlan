<!-- 我的页面 -->
<template>
  <view>
    <view class="navFrame">
      <!-- 我的基本信息 -->
      <BaseInfo :baseData="baseData"></BaseInfo>
      <!-- end -->
      <!-- 我的评价详情 -->
      <Evaluate :baseData="baseData"></Evaluate>
      <!-- end -->
      <!-- 我的评价 -->
      <HistoryScope></HistoryScope>
      <!-- end -->
    </view>
    <!-- 退出按钮 -->
    <view class="footBtn myFootBtn">
      <view class="btnBox"
        ><button class="btn-default" @click="handleOut">退出登录</button></view
      >
    </view>
    <!-- end -->
    <!-- footer -->
    <UniFooter :pagePath="'pages/my/index'"></UniFooter>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
// 时间处理
import { getUserInfo } from '@/pages/api/user.js';
// 导入组件
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
// 基本信息
import BaseInfo from './commponents/BaseInfo.vue';
// 我的评价、排班时间
import Evaluate from './commponents/Evaluate.vue';
// 历史取派、作业范围
import HistoryScope from './commponents/HistoryScope.vue';
// ------定义变量------
const store = useStore(); //vuex获取储存数据
const baseData = ref(uni.getStorageSync('userInfo')); //获取登录时保存的用户信息

onMounted(() => {
  // 获取用户信息
  getUser();
});
// 获取用户信息
const getUser = async () => {
  await getUserInfo().then((res) => {
    if (res.code === 200) {
      baseData.value = res.data;
      uni.setStorageSync('userInfo', res.data);
    }
  });
};
// 退出
const handleOut = () => {
  // 移除指定 token
  uni.removeStorageSync('token');
  // 清理本地数据缓存
  // 移出当前的tab触发事件index值，再次登录后底部菜单会默认选中首页
  store.commit('setFootStatus', 0);
  uni.redirectTo({
    url: '/pages/login/user',
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
