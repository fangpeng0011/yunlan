<template>
  <scroll-view
    scroll-x="true"
    class="tabScroll"
    :scroll-into-view="scrollinto"
    :scroll-with-animation="true"
  >
    <view class="history" v-if="isShowHistory">
      <view class="title">订单</view>
      <view class="toHistory" @click="handleToHistory">历史订单</view>
    </view>
    <view class="order">
      <view
        v-for="(item, index) in tabBars"
        :key="index"
        :id="'tab' + index"
        class="scroll-row-item"
        :class="tabIndex == index ? 'badge-act' : ''"
        @click="changeTab(index)"
      >
        <uni-badge
          v-if="statusNum.data[index] != '0'"
          class="uni-badge-left-margin"
          :text="statusNum.data[index]"
          absolute="rightTop"
          :offset="[-8, 3]"
          size="small"
        >
          <view :class="tabIndex == index ? 'scroll-row-item-act' : ''">
            <text class="line"></text>
            {{ item.label }}
          </view></uni-badge
        >
        <view v-else :class="tabIndex == index ? 'scroll-row-item-act' : ''">
          <text class="line"></text>
          {{ item.label }}
        </view>
      </view></view
    >
  </scroll-view>
</template>
<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import { useStore } from 'vuex';
// 获取父组件数据
const props = defineProps({
  tabBars: {
    type: Array,
    default: () => [],
  },
  statusNum: {
    type: Array,
    default: () => [],
  },
  isShowHistory: {
    type: Boolean,
    default: false,
  },
});
// ------定义变量------
const store = useStore();
const statusNum = reactive({
  data: [],
});
const users = store.state.user;
const emit = defineEmits(''); //子组件向父组件事件传递
const scrollinto = ref('tab0'); //tab切换
let tabIndex = ref(users.tabIndex ? users.tabIndex : 0); //当前tab
// ------定义方法------
// tab选项卡切换轮播
const changeTab = (index) => {
  // 点击的还是当前数据的时候直接return
  if (tabIndex.value == index) {
    return;
  }
  tabIndex.value = index;
  emit('getTabIndex', index);
  // 滑动
  scrollinto.value = 'tab' + index;
};
const handleToHistory = () => {
  uni.navigateTo({
    url: '/pages/history/index',
  });
};
watchEffect(() => {
  statusNum.data = props.statusNum;
});
//把数据、方法暴漏给父组件
defineExpose({
  changeTab,
});
</script>
