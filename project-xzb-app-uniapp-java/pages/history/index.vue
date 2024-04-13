<!-- 订单页面 -->
<template>
  <view class="historyOrder">
    <gscosmosDateSelect
      :date="startTime"
      :minYear="1900"
      :maxYear="2100"
      timeType="start"
      :defaultValue="[
        new Date(startTime).getFullYear() - 1900,
        new Date(startTime).getMonth(),
        new Date(startTime).getDate() - 1,
      ]"
      @confirm="bindStartDateChange"
      :showCalendar="dateSelecStarttVisiable"
      @cancel="handleClose"
    ></gscosmosDateSelect>
    <gscosmosDateSelect
      :date="endTime"
      :minYear="1900"
      :maxYear="2100"
      timeType="end"
      :defaultValue="[
        new Date(endTime).getFullYear() - 1900,
        new Date(endTime).getMonth(),
        new Date(endTime).getDate() - 1,
      ]"
      @confirm="bindEndDateChange"
      :showCalendar="dateSelecEndtVisiable"
      @cancel="handleClose"
    ></gscosmosDateSelect>
    <!-- nav -->
    <UniNav
      title="历史订单"
      @goBack="goBack"
      rithtText="筛选"
      @handleAll="handletTime"
    ></UniNav>
    <!-- 订单列表 -->
    <scroll-view
      :scroll-y="icCanScroll"
      class="scrollList"
      @scrolltolower="handleLoad"
      :upper-threshold="50"
      ref="scrollView"
      :scroll-top="scrollTop"
    >
      <HomeList
        v-if="homeList.data.length"
        :data="homeList.data"
      ></HomeList>
      <Empty v-else></Empty>
      <!-- 普通弹窗 -->
      <uni-popup ref="popup" background-color="#fff" type="bottom">
        <view class="popup-content">
          <view class="header">
            <view class="tips">选择时间</view>
            <image
              class="close"
              src="../../static/new/btn_nav_close@2x.png"
              @click="popup.close()"
            />
          </view>
          <view class="time">
            <view class="startTime" @click="handleStartTime">{{
              startTime || '开始时间'
            }}</view>
            <view class="zhi">至</view
            ><view class="endTime" @click="handleEndTime">{{
              endTime || '结束时间'
            }}</view>
          </view>
          <view class="footer">
            <view class="reset" @click="handleReset">重置</view>
            <view class="confirm" @click="searchDataByTime">确定</view>
          </view>
        </view>
      </uni-popup>
    </scroll-view>
    <UniFooter :pagePath="'pages/pickup/index'"></UniFooter>
  </view>

  <!-- end -->
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { format } from 'date-fns';

//接口
import { getHistoryOrder } from '@/pages/api/order.js';

// 导入组件
//空数据
import Empty from '@/components/empty/index.vue';
//订单列表
import HomeList from './components/homeList';
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
// 日期选择
import gscosmosDateSelect from '../../components/gscosmosDateSelect';
// ------定义变量------
const emit = defineEmits(''); //子组件向父组件事件传递
const popup = ref('');
const isHaveMore = ref(false);
const icCanScroll = ref(true);
const homeList = reactive({
  data: [],
});
const startTime = ref(format(new Date().getTime() - 15552000000, 'yyyy-MM-dd'));
const endTime = ref(format(new Date() - 86400000, 'yyyy-MM-dd'));
const dateSelecStarttVisiable = ref(false);
const dateSelecEndtVisiable = ref(false);
const scrollTop = ref(0);
const scrollView = ref(null);
// ------生命周期------
onShow(() => {
  getListData();
});
//重置时间
const handleReset = () => {
  startTime.value = '开始时间';
  endTime.value = '结束时间';
};
//按照起始时间查询数据
const searchDataByTime = () => {
  if (startTime.value === '开始时间' || endTime.value === '结束时间') {
    return uni.showToast({
      title: '请选择时间',
      duration: 1000,
      icon: 'none',
    });
  }
  homeList.data = [];
  getListData();
  popup.value.close();
};
//开始时间
const bindStartDateChange = (e) => {
  if (
    new Date(endTime.value).getTime() -
      format(new Date(e.solarDate), 'yyyy-MM-dd').getTime() >
    31536000000
  ) {
    uni.showToast({
      title: '时间间隔不能大于365天',
      duration: 1000,
      icon: 'none',
    });
  } else {
    startTime.value = format(new Date(e.solarDate), 'yyyy-MM-dd');
  }
};
//结束时间
const bindEndDateChange = (e) => {
  if (
    new Date(format(new Date(e.solarDate), 'yyyy-MM-dd')).getTime() -
      new Date(startTime.value).getTime() >
    31536000000
  ) {
    return uni.showToast({
      title: '时间间隔不能大于365天',
      duration: 1000,
      icon: 'none',
    });
  } else {
    endTime.value = format(new Date(e.solarDate), 'yyyy-MM-dd');
  }
};
// 打开开始时间弹窗
const handleStartTime = () => {
  dateSelecStarttVisiable.value = true;
};
const handleEndTime = () => {
  dateSelecEndtVisiable.value = true;
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
const handletTime = () => {
  popup.value.open();
};
//上拉加载
const handleLoad = () => {
  if (isHaveMore.value) {
    getListData(homeList.data[homeList.data.length - 1].sortTime);
  }
};
//获取订单列表数据
const getListData = (time) => {
  const params = {
    minSortTime: startTime.value + ' 00:00:00',
    maxSortTime: endTime.value + ' 23:59:59',
    lastSortTime: time,
  };
  if (!time) delete params.lastSortTime;
  getHistoryOrder(params).then((res) => {
    if (res.data.length === 10) {
      isHaveMore.value = true;
    } else {
      isHaveMore.value = false;
    }
    homeList.data = homeList.data.concat(res.data);
  });
};
// 关闭弹窗
const handleClose = () => {
  dateSelecStarttVisiable.value = false;
  dateSelecEndtVisiable.value = false;
};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
