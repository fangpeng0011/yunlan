<!--订单列表-->
<template>
  <view>
    <!-- tab切换 -->
    <view class="tabScroll" v-if="history !== true">
      <view class="itemTab box">
        <view class="tabBox" :class="activeIndex === '' ? 'active' : ''">
          <view
            class="tabItem"
            :class="activeIndex === item.value ? 'active' : ''"
            v-for="(item, index) in orderTabData"
            @click="changeTab(item.value)"
            :key="index"
          >
            <view class="bLine"></view>
            {{ item.label }}
          </view>
        </view>
      </view>
    </view>
    <!-- end -->
    <!-- 列表 -->
    <view class="main">
      <!-- 垂直滚动区域  scroll和swiper的高度都要给且是一样的高度-->
      <view>
        <scroll-view scroll-y="true">
          <view class="timeList">
            <view
              class="box boxRadius item"
              v-for="(item, index) in itemData"
              :key="index"
            >
              <view class="itemCon" @click.stop="handleDetail(item.id)">
                <view class="head">
                  <image :src="item.serveItemImg"></image>
                </view>
                <view class="rText">
                  <view class="itemTit tit"
                    ><text>{{ item.serveItemName }}</text
                    ><text v-if="item.ordersStatus === 0" class="font-col"
                      >待支付</text
                    ><text v-if="item.ordersStatus === 100" class="font-col"
                      >派单中</text
                    ><text v-if="item.ordersStatus === 200" class="font-col"
                      >待服务</text
                    ><text v-if="item.ordersStatus === 300" class="font-col"
                      >服务中</text
                    ><text v-if="item.ordersStatus === 400" class="font-col"
                      >待评价</text
                    ><text v-if="item.ordersStatus === 500">已完成</text
                    ><text v-if="item.ordersStatus === 600" class="font-grey"
                      >已取消</text
                    >
                    <text v-if="item.ordersStatus === 700" class="font-grey"
                      >已关闭</text
                    >
                  </view>
                  <view class="info">{{
                    formatDateTimeToDateTimeString(
                      new Date(item.serveStartTime?.replace(/-/g, '/'))
                    )
                  }}</view>
                </view>
              </view>
              <view class="address">{{ item.serveAddress }} </view>
              <view
                class="foot"
                v-if="item.ordersStatus === 0 || item.ordersStatus === 400"
              >
                <view class="amount" v-if="item.ordersStatus === 0"
                  >待支付金额：<text class="font-col"
                    >￥{{ item.realPayAmount }}</text
                  ></view
                >
                <view class="amount" v-else></view>
                <!-- <span class="bt bt-grey inputW" v-if="item.ordersStatus===0" @click="handleCancel(item.id)">取消订单</span> -->
                <view
                  class="btn inputW"
                  v-if="item.ordersStatus === 0"
                  @click="handlePay(item)"
                  >去支付</view
                >
                <view
                  class="btn inputW"
                  v-if="item.ordersStatus === 400"
                  @click="handleEvaluation(item)"
                  >去评价</view
                >
                <!-- <view class="bt bt-grey inputW"
									v-if="(item.ordersStatus===1&&!item.refundRecordVo.refundStatus)||(item.status===1&&item.refundRecordVo.refundStatus===3)"
									@click="handleRefund(item.tradingOrderNo)">退款</view>
								<view class="bt bt-grey inputW" v-if="item.status!==0&&item.status!==1"
									@click="handleDelete(item.id)">删除</view> -->
              </view>
            </view>
          </view>

          <!-- 下拉加载更多Lodding -->
          <view v-if="itemData.length > 6"
            ><uni-load-more :status="moreStatus" :content-text="contentText"
          /></view>
          <!-- end -->
        </scroll-view>
      </view>
      <!-- 无数据显示 -->
      <view v-if="itemData.length === 0 && loading">
        <EmptyPage :emptyInfo="emptyInfo" />
      </view>
      <!-- end -->
    </view>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import {
  getNow,
  getTime,
  decimalsReplenish,
  formatDateTimeToDateTimeString,
} from '@/utils/index.js';
import { onReachBottom, onShow, onLoad } from '@dcloudio/uni-app';
// 组件
// 无数据
import EmptyPage from '@/components/EmptyPage/index.vue';
// 基础数据
import { orderTabData } from '@/utils/commonData.js';
// 获取父组件值、方法
const props = defineProps({
  itemData: {
    type: Array,
    default: () => [],
  },
  moreStatus: {
    type: String,
    default: 'noMore',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  history: {
    type: Boolean,
    default: false,
  },
});
// ------定义变量------
const store = useStore(); //存储获取数据
const users = store.state.user; //获取存储数据
const emit = defineEmits(['setTabIndex', 'onReachBottom', 'handleDelete']);
const activeIndex = ref(users.orderStatus === '' ? 7 : users.orderStatus); //当前tab
const scrollinto = ref('tab0'); //tab切换
const emptyInfo = ref('暂无订单哦~');
const contentText = ref({
  //加载状态说明
  contentdown: '上拉加载更多',
  contentrefresh: '努力加载中...',
  contentnomore: '- 没有更多了 -',
});
const pagesCount = ref(null);
//胶囊底部距离头部的距离
let capsuleBottom = ref();
// ------定义方法------
onLoad(() => {
  uni.getSystemInfo({
    success: (res) => {
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom + 12;
    },
  });
  let pages = getCurrentPages();
  pagesCount.value = pages.length;
});

// 切换tab
const changeTab = (index) => {
  // 点击的还是当前数据的时候直接return
  if (activeIndex.value == index) {
    return;
  }
  activeIndex.value = index;
  emit('setTabIndex', index);
};
// 上拉刷新
function scrolltoupperHandle() {
  emit('setTabIndex', index);
}
// 进入取消页面
const handleCancel = (id) => {
  handleNavigate(id, 4);
};
// 进入退款原因页面
const handleRefund = (id) => {
  handleNavigate(id, 5);
};
// 取消、退款原因页面
const handleNavigate = (id, num) => {
  // store.commit('user/setBackLike', 'cancel');
  uni.navigateTo({
    url: `/subPages/order/cancel?tradingOrderNo=${id}&type=` + num,
  });
};

// 去支付
const handlePay = (val) => {
  let cheapPrice = 0;
  cheapPrice = val.price - val.realPayAmount;
  uni.navigateTo({
    url:
      '/pages/pay/index?id=' +
      val.id +
      '&price=' +
      val.price +
      '&time=' +
      val.createTime +
      '&cheapPrice=' +
      cheapPrice,
  });
};

// 进入订单详情
const handleDetail = (id) => {
  if (props.history === true) {
    uni.navigateTo({
      url: `/subPages/history/details?id=${id}&type=history`,
    });
  } else {
    uni.navigateTo({
      url: `/subPages/order/details?id=${id}&type=order`,
    });
  }
};
const handleEvaluation = (val) => {
  uni.navigateTo({
    url: `/subPages/order/components/evaluate?id=${val.id}&type=order`,
  });
};
// 上下拉取
onReachBottom(() => {
  emit('onReachBottom');
});
</script>
<style lang="scss" scoped>
@import url('@/styles/theme.scss');
.btn {
  width: 156rpx;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  color: var(--essential-color-red);
}
.item {
  &:nth-child(1) {
    margin-top: 16rpx;
  }
}
.address {
  margin-top: 4rpx;
  padding-left: 12rpx;
  padding-right: 12rpx;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  font-size: 28rpx;
  color: #888888;
  letter-spacing: 0.16px;
  margin-bottom: 20rpx;
}
</style>
