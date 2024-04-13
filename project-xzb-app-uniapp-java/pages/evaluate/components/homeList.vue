<!-- 列表 -->
<template>
  <view class="homeList">
    <view class="card" v-for="item in list.data" :key="item.id">
      <view class="evaluate">
        <view class="header">
          <view class="left">
            <image :src="item.evaluatorInfo?.avatar"></image>
            <text class="nickName">{{ item.evaluatorInfo?.nickName }}</text>
          </view>
          <view class="right">
            <!-- 设置星星间隔 -->
            <uni-rate
              readonly
              :value="item.totalScore"
              :margin="5"
              :size="15"
              color="#D2DBE7"
              active-color="#F74347"
            />
            <text>{{ item.totalScore }}分</text>
          </view>
        </view>
        <view class="content">{{ item.content }}</view>
        <view class="time">
          <text>{{
            formatDateTimeToDateTimeString(
              new Date(item.createTime.replace(/-/g, '/'))
            )
          }}</text>
        </view>
        <view class="img" v-if="item.pictureArray">
          <image
            :src="item1"
            :key="index"
            v-for="(item1, index) in item.pictureArray"
          ></image>
        </view>
        <view class="order">
          <view class="left">
            <image :src="item.serveItemImg"></image>
          </view>
          <view class="right">
            <view class="num">
              <text>订单编号 </text>
              <text>{{ item.relationId }}</text>
            </view>
            <view class="time">
              <text>预约时间 </text>
              <text>{{
                formatDateTimeToDateTimeString(
                  new Date(item.updateTime.replace(/-/g, '/'))
                )
              }}</text>
            </view>
            <view class="address">{{ item.serveAddress }}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 加载底部 -->
    <!-- 输入弹出框 -->
    <uni-popup ref="alertDialog" type="bottom" is-mask-click>
      <view class="content" :style="{ bottom: `${keyBoardHeight}px` }">
        <textarea
          ref="input"
          class="uni-input"
          :adjust-position="false"
          :focus="focus"
          @focus="handleFocus"
          placeholder="请输入你的回复（80字以内）"
          v-model="inputValue"
          auto-height
          placeholder-class="placeholder"
        />
        <view class="right">
          <image
            :src="`${
              emojiShow
                ? '../../../static/new/btn_wenzi@2x.png'
                : '../../../static/new/btn_biaoqing@2x.png'
            }`"
            @click.stop="handleHideKeyBoard"
          ></image>
          <button
            class="submitBtn"
            :disabled="!inputValue.length"
            :class="!inputValue.length ? 'disabled' : ''"
            @touchend.prevent="handleSubmit"
          >
            提交
          </button>
        </view>
      </view>
      <view class="emoji-picker" :style="{ height: `${keyBoardHeight}px` }">
        <view
          v-for="(item, key) in ImgList"
          :key="key"
          class="emoji-picker-item"
          @click="handleClickEmoji(item)"
        >
          {{ item }}
        </view>
      </view>
    </uni-popup>
    <view class="footer">- 已 经 到 底 了 -</view>
  </view>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue';
import { formatDateTimeToDateTimeString } from '../../utils';
// 基本数据(订单状态)
import { ImgList } from '@/utils/commonData.js';
const emit = defineEmits(['refresh']); //子组件向父组件事件传递
const alertDialog = ref(null);
const emojiShow = ref(false);
const input = ref(null);
const focus = ref(true);
const inputValue = ref('');
// 获取父组件值、方法
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const keyBoardHeight = ref('');

let list = reactive({
  data: [],
});
//弹出或者收起键盘
const handleHideKeyBoard = () => {
  if (!emojiShow.value) {
    uni.hideKeyboard();
    focus.value = false;
  } else {
    focus.value = true;
  }
  emojiShow.value = !emojiShow.value;
};
//提交
const handleSubmit = () => {
  if (!inputValue.value.length) {
    return;
  } else {
    alertDialog.value.close();
  }
};
//选择表情
const handleClickEmoji = (item) => {
  inputValue.value = inputValue.value + item;
};
//弹出键盘
const handleFocus = () => {
  emojiShow.value = false;
};

watchEffect(() => {
  list.data = props.data;
});
</script>
<style src="../index.scss" lang="scss"></style>
