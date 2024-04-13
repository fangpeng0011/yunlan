<!-- 列表 -->
<template>
  <view class="homeList">
    <view
      class="card"
      v-for="item in list.data"
      :key="item.id"
      @click="handleToInfo(item)"
    >
      <view class="card-content">
        <image
          class="leftCardContent"
          :src="item.serveItemImg || '../../../static/new/empty.png'"
        ></image>
        <view class="rightCardContent">
          <view class="title">
            {{ item.serveItemName }}
          </view>
          <view class="serviceTime">
            <text>{{
              item.serveStatus === 1
                ? '预约时间'
                : item.serveStatus === 2
                ? '服务开始时间'
                : '服务完成时间'
            }}</text>
            <text class="content">{{
              handleTime(
                item.serveStatus === 1
                  ? item.serveStartTime
                  : item.serveStatus === 2
                  ? item.realServeStartTime
                  : item.realServeEndTime
              )
            }}</text>
          </view>
        </view>
        <view
          class="orderStatus"
          :class="[3, 4, 5].includes(item.serveStatus) ? 'gray' : ''"
          >{{
            orderStatus.filter((item1) => item1.value === item.serveStatus)
              .length &&
            orderStatus.filter((item1) => item1.value === item.serveStatus)[0]
              .label
          }}</view
        >
      </view>
      <view class="serviceAddress">
        <view class="address">
          <view class="addressContent">{{ item.serveAddress }}</view>
        </view>
      </view>
      <view class="cardFooter" v-if="[1, 2].includes(item.serveStatus)">
        <view
          v-if="[1, 2].includes(item.serveStatus)"
          class="robBtn btn-red"
          @click.stop="handleServeRecord(item.id, item.serveStatus)"
          >{{ item.serveStatus === 1 ? '开始服务' : '完成服务' }}</view
        >
      </view>
    </view>
    <view class="footer">- 已 经 到 底 了 -</view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted, watch, watchEffect } from 'vue';
// 基本数据(订单状态)
import { orderStatus } from '@/utils/commonData.js';
const emit = defineEmits(['refresh']); //子组件向父组件事件传递
// 获取父组件值、方法
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {});
const isRob = ref(true);
let list = reactive({
  data: [
    {
      serveTypeName: '保洁服务',
      serveItemName: '空调清洗',
      serveStartTime: '2023-7-28 11:48:00',
      serveAddress: '金燕龙',
      serveFee: '666',
    },
  ],
});
const handleTime = (val) => {
  return val ? val.replace(/:\d{2}$/, '') : '';
};

const handleToInfo = (item) => {
  uni.navigateTo({
    url: '/pages/orderInfo/index?id=' + item.id,
  });
};
const handleServeRecord = (id, status) => {
  uni.navigateTo({
    url:
      '/pages/serveRecord/index?status=' +
      status +
      '&id=' +
      id +
      '&type=' +
      'list',
  });
};
watchEffect(() => {
  list.data = props.data;
});
</script>
<style src="../index.scss" lang="scss"></style>
