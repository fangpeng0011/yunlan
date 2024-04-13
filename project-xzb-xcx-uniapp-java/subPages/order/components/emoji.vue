<!-- 表情小弹窗 -->
<template>
  <view class="emoji-wrapper">
    <view class="emoji-button" @click.stop="togglePickerVisibility">
      <image
        :src="Icon"
        class="button-icon"
        :class="{ inactive: !pickerVisible }"
      ></image>
      <!-- <text class="button-text"></text> -->
    </view>

    <view class="emoji-picker left" v-if="pickerVisible">
      <view
        v-for="(item, key) in ImgList"
        :key="key"
        class="emoji-picker-item"
        @click="handleClickEmoji(item)"
      >
        <image :src="item.src" class="emoji-icon"></image
      ></view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { ImgList, Icon } from './emoji.js';
const pickerVisible = ref(false);
// 获取父组件值、方法
const props = defineProps({
  pickerVisible: {
    type: Boolean,
    default: '',
  },
  id: {
    type: Number,
  },
});
const emit = defineEmits(['handleEmoji1','handleEmoji2']);
//点击表情打开表情下拉
const togglePickerVisibility = () => {
  pickerVisible.value = !pickerVisible.value;
};
// 点击表情
const handleClickEmoji = (src) => {
  if(props.id === 1){
    emit('handleEmoji1', src);
  }else{
    emit('handleEmoji2', src);
  }
  pickerVisible.value = false;
};
</script>
<style lang="scss" scoped>
.emoji-picker {
  display: flex;
  flex-wrap: wrap;
  width: 600rpx;
}
.emoji-picker-item {
  margin: 4px;
  cursor: pointer;
  .emoji-icon {
    width: 34rpx;
    height: 34rpx;
    user-select: none;
  }
}
.emoji-wrapper {
  position: relative;
  display: flex;
  z-index: 999;
}
.emoji-button {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  margin-right: 10px;
  display: flex;
  align-items: center;
  .button-icon {
    width: 34rpx;
    height: 34rpx;
    &.inactive {
      filter: grayscale(100%);
    }
  }
  .button-text {
    vertical-align: super;
    color: #151515;
  }
}
.emoji-picker {
  background: #fff;
  box-shadow: #ccc 2rpx 2rpx 14rpx;
  border-radius: 10rpx;
  padding: 20rpx;
  display: flex;
  position: absolute;
  top: 40rpx;
  &.left {
    right: -60rpx;
  }
  &.middle {
    left: 50%;
    transform: translateX(-50%);
  }
}
.upload-btn {
  font-size: 28rpx;
  cursor: pointer;
  &:hover {
    color: #027fff;
  }
}
</style>
