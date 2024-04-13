<!-- 评价页面 -->
<template>
  <view class="evaluate">
    <!-- 手机状态栏 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <!-- nav -->
    <!-- 状态筛选 -->
    <UniTab :tabBars="tabBars" @getTabIndex="getTabIndex"></UniTab>
    <!-- 订单列表 -->
    <scroll-view
      :scroll-y="icCanScroll"
      class="scrollList"
      @scroll="handleScroll"
      @scrolltolower="handleLoad"
      :upper-threshold="50"
      ref="scrollView"
      :scroll-top="scrollTop"
    >
      <HomeList
        v-if="homeList.data.length"
        :data="homeList.data"
        @refresh="getRobOrderList"
      ></HomeList>
      <Empty v-else></Empty>
    </scroll-view>
    <UniFooter :pagePath="'pages/pickup/index'"></UniFooter>
  </view>

  <!-- end -->
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { useStore } from 'vuex';

// 基本数据
import { evaluateData } from '@/utils/commonData.js';
//接口
import { getEvaluateList } from '@/pages/api/order.js';

// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
//空数据
import Empty from '@/components/empty/index.vue';
//订单列表
import HomeList from './components/homeList';
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
// tab切换
import UniTab from '@/components/uni-tab/index.vue';
// ------定义变量------
const store = useStore();
const emit = defineEmits(''); //子组件向父组件事件传递
const users = store.state.user;
const title = ref('我的评价');
const requestData = ref({
  pageNo: 1,
  pageSize: 10,
});
const isHaveMore = ref(false);
const tabBars = evaluateData;
const icCanScroll = ref(true);
const homeList = reactive({
  data: [],
});
const scrollTop = ref(0);
const scrollView = ref(null);
// ------生命周期------
onShow(() => {
  getTabIndex(users.tabIndex);
  getEvaluateListFunc();
  getOrderStatusNumFunc();
});
//上拉加载
const handleLoad = () => {
  if (isHaveMore.value) {
    requestData.value.pageNo++;
    getEvaluateListFunc();
  }
};

// ------定义方法------
const getRobOrderList = () => {};
//回到顶部
const scrollToTop = () => {
  scrollTop.value = scrollTop.value === 0 ? 1 : 0;
};
// 获取tab切换当前的index
const getTabIndex = (index) => {
  scrollToTop();
  store.commit('user/setTabIndex', index);
  homeList.data = [];
  if (index === 0) {
    requestData.value = {
      pageNo: 1,
      pageSize: 10,
    };
  } else {
    requestData.value = {
      pageNo: 1,
      pageSize: 10,
      scoreLevel: tabBars[index].value,
    };
  }
  homeList.data = [];
  getEvaluateListFunc();
};
const getEvaluateListFunc = () => {
  getEvaluateList(requestData.value).then((res) => {
    if (res.code === 200) {
      homeList.data = res.data;
      if (res.data.length < requestData.value.pageSize) {
        isHaveMore.value = false;
      } else {
        isHaveMore.value = true;
      }
    }
  });
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
