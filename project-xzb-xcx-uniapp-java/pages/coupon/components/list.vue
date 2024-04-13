<!--优惠券列表组件-->
<template>
  <view>
    <!-- tab切换 -->
    <view class="tabScroll">
      <view class="itemTab box">
        <view class="tabBox" :class="activeIndex === '' ? 'active' : ''">
          <view
            class="tabItem"
            :class="activeIndex === item.value ? 'active' : ''"
            v-for="(item, index) in couponTabData"
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
              <view
                :class="[
                  type !== 1 && activeIndex !== 1 ? 'grey left' : 'left',
                  item.remainNum <= 0 && item.remainNum !== null
                    ? 'reLeft'
                    : '',
                ]"
              >
                <view class="price">
                  <text class="unit" v-if="item.type === 1">￥</text>
                  <text class="money"
                    >{{
                      item.type === 1
                        ? Number(item.discountAmount).toFixed(0)
                        : convertDiscountPercentageToNumber(
                            Number(item.discountRate)
                          ).integer
                    }}
                  </text>
                  <text v-if="item.type === 2">{{
                    convertDiscountPercentageToNumber(Number(item.discountRate))
                      .decimal
                  }}</text>
                  <text class="unit" v-if="item.type === 2">折</text>
                </view>
                <view
                  class="button"
                  :class="item.remainNum > 0 ? '' : 'reButton'"
                  v-if="activeIndex === 1 && type === 1"
                  @click="handleAddCoupon(item.id)"
                  >{{ item.remainNum > 0 ? '立即领取' : '已抢光' }}</view
                >
              </view>
              <view class="right">
                <view class="title">{{ item.name }}</view>
                <view class="time" v-if="item.type === 1">
                  <text v-if="Number(item.amountCondition).toFixed(0) == 0" class="mainColor"
                    >无门槛</text
                  ><text v-else class="mainColor"
                    >满{{ Number(item.amountCondition).toFixed(0) }}元</text
                  >立减{{ Number(item.discountAmount).toFixed(0) }}元
                </view>
                <view class="time" v-if="item.type === 2">
                  <text v-if="Number(item.amountCondition).toFixed(0) == 0" class="mainColor"
                    >无门槛</text
                  ><text v-else class="mainColor"
                    >满{{ Number(item.amountCondition).toFixed(0) }}元</text
                  >立享{{
                    convertDiscountPercentageToNumber(Number(item.discountRate))
                      .integer
                  }}折
                </view>
                <view class="time" v-if="type == 1">
                  {{
                    formatDateTimeToDateString(
                      new Date(item.distributeStartTime.replace(/-/g, '/'))
                    )
                  }}~{{
                    formatDateTimeToDateString(
                      new Date(item.distributeEndTime.replace(/-/g, '/'))
                    )
                  }}
                </view>
                <view class="time" v-else>
                  <text>有效期至：</text>{{ formatDateTimeToDateString(
                    new Date(item.validityTime.replace(/-/g, '/'))
                  ) }}
                </view>
              </view>
              <image
                v-if="type !== 1 && activeIndex == 2"
                src="../../../static/ysy@2x.png"
                mode="scaleToFill"
                class="ysy"
              />
              <image
                v-if="type !== 1 && activeIndex == 3"
                src="../../../static/ygq@2x.png"
                mode="scaleToFill"
                class="ysy"
              />
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
import { ref, watch } from 'vue';
import {
  formatDateTimeToDateString,
  convertDiscountPercentageToNumber,
} from '@/utils/index.js';
import { onReachBottom, onLoad } from '@dcloudio/uni-app';
// 组件
// 无数据
import EmptyPage from '@/components/EmptyPage/index.vue';
// 基础数据

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
  couponTabData: {
    type: Array,
    default: () => [],
  },
  type: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits([
  'setTabIndex',
  'onReachBottom',
  'handleDelete',
  'addCoupons',
]);
const activeIndex = ref(1); //当前tab
const emptyInfo = ref('暂无优惠券');
// const itemData = ref([]); //预约数据
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
    success: () => {
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom + 12;
    },
  });
  let pages = getCurrentPages();
  pagesCount.value = pages.length;
});
watch(
  () => props.itemData,
  (newVal) => {
    // itemData.value = newVal;
    if (newVal.length > 0) {
      emptyInfo.value = '暂无优惠券';
    } else {
      emptyInfo.value = '暂无优惠券';
    }
  }
);
// 切换tab
const changeTab = (index) => {
  // 点击的还是当前数据的时候直接return
  if (activeIndex.value == index) {
    return;
  }
  activeIndex.value = index;
  emit('setTabIndex', index);
};
// 添加优惠券
const handleAddCoupon = (val) => {
  emit('addCoupons', val);
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
.timeList .item {
  padding: 0;
  display: flex;
  background-color: transparent;
  position: relative;
  .ysy {
    position: absolute;
    width: 168rpx;
    height: 128rpx;
    right: -11rpx;
    top: -7.4rpx;
  }
  .grey {
    background-image: url('../../../static/yhjsy@2x.png') !important;
  }
  .left {
    min-width: 234rpx;
    width: 234rpx;
    min-height: 208rpx;
    background-image: url('../../../static/quan@2x.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .price {
      font-family: PingFangSC-SNaNpxibold;
      font-weight: 600;
      color: #ffffff;
      .unit {
        font-size: 40rpx;
      }
      .money {
        font-size: 80rpx;
        white-space: nowrap;
        text {
          font-size: 40rpx;
        }
      }
    }
    .button {
      margin-top: 12rpx;
      width: 140rpx;
      height: 44rpx;
      line-height: 44rpx;
      font-size: 24rpx;
      color: #f64747;
      background-color: #fff;
      border-radius: 40rpx;
      text-align: center;
      font-weight: 500;
    }
    .reButton {
      background: #cda3a3;
      color: #fff;
      cursor: no-drop;
      pointer-events: none;
    }
  }
  .reLeft {
    background-image: url('../../../static/yqgbj@2x.png') !important;
  }
  .right {
    width: 100%;
    background-color: #fff;
    padding-left: 40rpx;
    padding-top: 31rpx;
    border-top-right-radius: 16rpx;
    border: 1px solid #eeeeee;
    border-left: none;
    border-bottom-right-radius: 16rpx;
    .title {
      font-weight: 500;
      font-size: 32rpx;
      color: #19232b;
      margin-bottom: 8rpx;
    }
    .time {
      padding: 0;
      font-size: 24rpx;
      color: #19232b;
      line-height: 56rpx;
      height: 56rpx;
      text {
        color: #80878c;
      }
    }
  }
}
.mainColor {
  color: #19232b !important;
}
</style>
