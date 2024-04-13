<!-- ；历史订单页面 -->
<template>
  <scroll-view class="scroll-view-content" scroll-y>
    <view class="historyOrder pageCon appList itemListBox orderBox">
      <!-- 订单列表 -->
      <NavBar
        title="历史订单"
        :isShowBack="true"
        :handleToLink="handleToLink"
        :isHistory="true"
        :historyTime="true"
        @handletTime="handletTime"
      ></NavBar>
      <HomeList
        v-if="homeList.data.length"
        :itemData="homeList.data"
        :loading="loading"
        :moreStatus="moreStatus"
        :history="true"
        @handleDelete="handleDelete"
        @onReachBottom="onReachBottom"
      ></HomeList>
      <view v-else class="empty-box">
        <image src="../../static/zwnr@2x.png"></image>
        <view>暂无历史订单哦～</view>
      </view>
      <!-- 历史筛选弹窗，起始时间 -->
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
        ref="gscosmosDateSelect"
        :showCalendar="dateSelecStarttVisiable"
        @cancel="close"
      ></gscosmosDateSelect>
      <!-- 历史筛选弹窗，结束弹窗 -->
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
        ref="gscosmosDateSelect"
        :showCalendar="dateSelecEndtVisiable"
        @cancel="close"
      ></gscosmosDateSelect>
      <!-- 普通弹窗 -->
      <uni-popup ref="popup" background-color="#fff" type="bottom">
        <view class="popup-content">
          <view class="header">
            <view class="tips">选择时间</view>
            <image class="close" src="../../static/new/btn_nav_close@2x.png" />
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
            <view class="btn-grey" @click="handleReset">重置</view>
            <view class="agree-btn btn" @click="searchDataByTime">确定</view>
          </view>
        </view>
      </uni-popup>
    </view>
  </scroll-view>
  <!-- end -->
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { formatDateTimeToDateString } from '@/utils/index.js';

//接口
import { getHistoryOrder } from '@/pages/api/order.js';

//订单列表
import HomeList from '../order/components/list.vue';
// 日期选择
import gscosmosDateSelect from '../../components/gscosmosDateSelect';
// ------定义变量------
const moreStatus = ref('more'); //加载更多状态 loading  more noMore
const emit = defineEmits(''); //子组件向父组件事件传递
const popup = ref(''); //弹窗
const loading = ref(false); // 是否展示加载更多
const isSendRequest = ref(false); // 是否继续发送请求
const dateSelecStarttVisiable = ref(false);
const dateSelecEndtVisiable = ref(false);
const pages = ref(0); // 单页条数
const homeList = reactive({
  data: [],
});
const netStatus = ref(true);
const startTime = ref(
  formatDateTimeToDateString(
    new Date(new Date(new Date()).setDate(new Date().getDate() - 181))
  )
); // 默认开始时间
const endTime = ref(
  formatDateTimeToDateString(
    new Date(new Date(new Date()).setDate(new Date().getDate() - 1))
  )
); // 默认结束时间

const scrollTop = ref(0);
const scrollView = ref(null);
// ------生命周期------
onShow(() => {
  homeList.data = [];
  isSendRequest.value = false; // 是否继续发送请求
  getNewData();
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
  } else if (
    new Date(endTime.value).getTime() - new Date(startTime.value).getTime() <
    0
  ) {
    return uni.showToast({
      title: '开始时间不可大于结束时间',
      duration: 1000,
      icon: 'none',
    });
  }
  homeList.data = [];
  isSendRequest.value = false;
  getNewData();
  popup.value.close();
};
// 打开开始时间弹窗
const handleStartTime = () => {
  dateSelecStarttVisiable.value = true;
};
// 打开结束时间弹窗
const handleEndTime = () => {
  dateSelecEndtVisiable.value = true;
};
//开始时间
const bindStartDateChange = (e) => {
  if (
    new Date(endTime.value).getTime() -
      new Date(formatDateTimeToDateString(new Date(e.solarDate))).getTime() >
    31536000000
  ) {
    uni.showToast({
      title: '时间间隔不能大于365天',
      duration: 1000,
      icon: 'none',
    });
  } else {
    startTime.value = formatDateTimeToDateString(new Date(e.solarDate));
    close();
  }
};
//结束时间
const bindEndDateChange = (e) => {
  if (
    new Date(formatDateTimeToDateString(new Date(e.solarDate))).getTime() -
      new Date(startTime.value).getTime() >
    31536000000
  ) {
    return uni.showToast({
      title: '时间间隔不能大于365天',
      duration: 1000,
      icon: 'none',
    });
  } else {
    endTime.value = formatDateTimeToDateString(new Date(e.solarDate));
    close();
  }
};
// 关闭弹窗
const close = () => {
  dateSelecStarttVisiable.value = false;
  dateSelecEndtVisiable.value = false;
};
//  打开筛选弹窗
const handletTime = () => {
  popup.value.open();
};
// 上拉更多数据
const onReachBottom = () => {
  if (pages.value < 10) {
    moreStatus.value = 'noMore';
    return false;
  } else {
    moreStatus.value = 'loading';
    setTimeout(() => {
      getNewData(homeList.data[homeList.data.length - 1].sortTime);
    }, 1000); //这里延时一秒在加载方法有个loading效果
  }
};
// 获取数据
const getNewData = async (time) => {
  const params = {
    minSortTime: startTime.value + ' 00:00:00',
    maxSortTime: endTime.value + ' 23:59:59',
  };
  if (time) {
    params.lastSortTime = time;
  }
  if (isSendRequest.value) {
    return;
  }
  moreStatus.value = 'loading';
  loading.value = false;
  await getHistoryOrder(params)
    .then((res) => {
      if (res.data.code == 200) {
        const { data } = res.data;
        // items == null 会报错 把他处理掉
        const items = data == null ? [] : data;
        moreStatus.value = items.length < 10 ? 'no-more' : 'more';
        // 从第一页请求 清空之前的数据
        // 下拉数据合并
        homeList.data = homeList.data ? [...homeList.data, ...items] : items;
        // 如果 当前页面的数据已经全部数据了 那么停止拿数据
        pages.value = data.length;
        if (pages.value < 10) {
          isSendRequest.value = true;
          moreStatus.value = 'noMore';
        }
        uni.stopPullDownRefresh();
        netStatus.value = true;
        loading.value = true;
      }
    })
    .catch((err) => {
      // 弹出错误提示
      console.log(err);
    });
};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style src="../../styles/common.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
<style src="../order/index.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.scroll-view-content {
  height: calc(100% - 81px); /* 主内容区域的高度减去底部栏的高度 */
  padding-top: 175rpx; /* 底部栏的高度，确保内容不被底部栏遮挡 */
  :deep(.NavBar) {
    background: #fff !important;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  :deep(.itemTab .tabBox) {
    box-sizing: border-box;
    background: #fff !important;
    position: fixed;
    top: 166rpx;
    width: 100%;
    z-index: 999;
    font-size: 28rpx;
  }
}
.itemListBox {
  :deep(.timeList) {
    .item {
      padding: 35rpx 32rpx 19rpx 28rpx;
    }
    .itemCon {
      .rText {
        .info {
          padding-bottom: 8rpx;
        }
        .tit {
          padding-bottom: 15rpx;
          margin-top: -8rpx;
        }
      }
    }
  }
}
.btn-grey {
  width: 250rpx;
  height: 88rpx;
  background: #ebebeb;
  margin-right: 32rpx;
  border-radius: 44rpx;
  line-height: 88rpx;
  text-align: center;
}
.agree-btn {
  width: 408rpx;
  height: 88rpx;
  background: #f74346;
  border-radius: 50rpx;
  text-align: center;
}
.empty-box {
  padding-top: 300rpx;
  height: 71vh;
  background-color: #fff;
  image {
    width: 320rpx;
    height: 288rpx;
    display: block;
    margin: 0 auto;
  }
  view {
    font-size: 26rpx;
    line-height: 36rpx;
    margin-top: 43rpx;
    text-align: center;
  }
}
</style>
