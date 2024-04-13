<!--搜索列表-->
<template>
  <view>
    <!-- 列表 -->
    <view class="main">
      <!-- 垂直滚动区域  scroll和swiper的高度都要给且是一样的高度-->
      <view v-if="itemData.length > 0">
        <scroll-view scroll-y="true">
          <view class="serachList">
            <view
              v-for="(item, index) in itemData"
              :key="index"
              class="item"
              @click.stop="handleList(item)"
            >
              <uni-icons class="input-uni-icon" type="search" size="12" />{{
                item.serveItemName
              }}</view
            >
          </view>

          <!-- 下拉加载更多Lodding -->
          <view v-if="itemData.length > 6"
            ><uni-load-more :status="moreStatus" :content-text="contentText"
          /></view>
          <!-- end -->
        </scroll-view>
      </view>
      <!-- 无数据显示 -->
      <view v-if="itemData.length === 0 && loading && isHistory">
        <EmptyPage :emptyInfo="emptyInfo" />
      </view>
      <!-- end -->
    </view>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref } from 'vue';
// 组件
// 无数据
import EmptyPage from '@/components/EmptyPage/index.vue';
// 获取父组件值、方法
const props = defineProps({
  // 列表数据
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
  isHistory: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits([
  'handleList',
  'handleBlur',
]);
const emptyInfo = ref('暂无相关内容哦～');
const contentText = ref({
  //加载状态说明
  contentdown: '上拉加载更多',
  contentrefresh: '努力加载中...',
  contentnomore: '- 没有更多了 -',
});
// 进入列表页
const handleList = (val) => {
  emit('handleBlur');
  emit('handleList', val);
};
</script>
<style lang="scss" scoped>
.serachList {
  padding: 0 0 0 30rpx;
  .item {
    padding: 30rpx 0;
    border-bottom: 2rpx solid #e5e4e4;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: var(--neutral-color-main);
    font-family: PingFangSC-Regular;
    letter-spacing: 0.32rpx;
    :deep(uni-icons) {
      color: #cbcbcb !important;
      margin-right: 14rpx;
    }
  }
}
.historyBox {
  padding-top: 60rpx;
  .tit {
    color: var(--neutral-color-placeholder);
    padding: 0 30rpx;
    display: flex;
    align-items: center;
    view {
      flex: 1;
    }
    :deep(.uni-icons) {
      color: var(--neutral-color-placeholder) !important;
    }
    .input-uni-delect {
      display: flex;
      align-items: center;
      :deep(text) {
        // background: url(@/static/delect.png) no-repeat;
        background-size: contain;
        display: inline-block;
        width: 30rpx;
        height: 30rpx;
        margin-right: 14rpx;
      }
    }
  }
  .item {
    padding: 20rpx 24rpx 0;
    text {
      display: inline-block;
      height: 40rpx;
      line-height: 40rpx;
      padding: 14rpx 24rpx;
      background: var(--neutral-color-background);
      border-radius: 2rpx;
      font-size: var(--font-size-14);
      margin: 0 6rpx 6rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 300rpx;
    }
  }
}
</style>
