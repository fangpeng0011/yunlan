<!-- 头部导航组件 -->
<template>
  <view class="NavBar" :style="{ height: all }">
    <view
      class="title"
      :style="{ paddingTop: capsuleTop + 'px', height: capsuleHeight + 'px' }"
      >{{ title
      }}<view class="back" @click="handleTo" v-if="isShowBack">
        <image :src="src"></image>
      </view>
      <view class="history" @click="handleToHistory" v-if="isHistory && historytime !== true">
        <image src="../../static/time-circle@2x.png"></image>
      </view>
      <view class="history" @click="handleToHistory" v-if="isHistory && historytime === true">
        <image
          src="../../static/shaixuan@2x.png"
        />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
// 获取父组件值、方法
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  handleToLink: {
    //用于自定义跳转
    type: Function,
  },
  src: {
    type: String,
    default: '../../static/goBack.png',
  },
  isShowBack: {
    type: Boolean,
  },
  historyTime: {
    type: Boolean,
    default: false,
  },
  isHistory: {
    type: Boolean,
  },
});
//设备栏高度
let deviceNavHeight = ref();
//胶囊顶部距离头部的距离
let capsuleTop = ref();
//胶囊底部距离头部的距离
let capsuleBottom = ref();
//导航栏高度
let all = ref();
const historytime = ref(props.historyTime);
//胶囊高度
let capsuleHeight = ref();
// 触发父组件方法
const emits = defineEmits(['transferHeight', 'handletTime']);
onLoad(() => {
  uni.getSystemInfo({
    success: (res) => {
      deviceNavHeight.value = res.statusBarHeight;
      capsuleTop.value = uni.getMenuButtonBoundingClientRect().top;
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom;
      all.value =
        capsuleTop.value + capsuleBottom.value - deviceNavHeight.value + 'px';
      capsuleHeight.value = uni.getMenuButtonBoundingClientRect().height;
      emits('transferHeight', all.value);
    },
  });
});
//头部导航跳转
const handleTo = () => {
  if (props.handleToLink) {
    props.handleToLink();
  } else {
    uni.navigateBack();
  }
};
// 前往历史订单
const handleToHistory = () => {
  if (props.historyTime === false) {
    uni.navigateTo({
      url: '/subPages/history/index',
    });
  } else {
    emits('handletTime');
  }
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
