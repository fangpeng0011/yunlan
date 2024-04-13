<!-- 优惠券弹窗 -->
<template>
  <view class="getCouponPicker">
    <uni-popup
      ref="popup"
      type="bottom"
      :safe-area="false"
      mask-background-color="rgba(0,0,0,0.6)"
    >
      <view class="header">
        <view class="header-title">优惠券</view>
        <view class="close" @click="handleCancel"></view>
      </view>
      <!-- 优惠券 -->
      <scroll-view scroll-y="true" class="body">
        <view class="couponList">
          <view
            class="box boxRadius item"
            v-for="(item, index) in itemData"
            :key="index"
          >
            <view class="left">
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
            </view>
            <view class="right">
              <view class="title">{{ item.name }}</view>
              <view class="select">
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
                  }}{{
                    convertDiscountPercentageToNumber(Number(item.discountRate))
                      .decimal
                  }}折
                </view>
                <view
                  :class="activeId === item.id ? 'active' : 'checkbox'"
                  @click="handleActive(item)"
                ></view>
              </view>
              <view class="time">
                <text>有效期至：</text
                >{{
                  formatDateTimeToDateString(
                    new Date(item.validityTime.replace(/-/g, '/'))
                  )
                }}
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
      <view class="pageFoot">
        <button @click="handleSub" class="agree-btn btn">确定</button>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, watch } from 'vue';
import {
  formatDateTimeToDateString,
  convertDiscountPercentageToNumber,
} from '@/utils/index.js';
const emits = defineEmits(['handleSelectCoupon']);
const popup = ref();
const itemData = ref([]);
const activeId = ref(1);
const activeData = ref({});
const props = defineProps({
  // 是否显示
  activeCoupon: {
    type: Object,
  },
  couponList: {
    type: Array,
  },
});
watch(
  () => props.couponList,
  (val) => {
    itemData.value = val;
  }
);
watch(
  () => props.activeCoupon,
  (val) => {
    activeId.value = val?.id ? val?.id : 1;
  }
);
// 打开弹层
const handleOpen = () => {
  popup.value.open('bottom');
};
// 关闭弹层
const handleCancel = () => {
  popup.value.close('bottom');
};

const handleActive = (val) => {
  if(val.id === activeId.value) {
    activeId.value = 1;
    activeData.value = {};
    return;
  }
  activeId.value = val.id;
  activeData.value = val;
};

// 确定选择优惠券
const handleSub = () => {
  emits('handleSelectCoupon', activeData.value);
};
// 暴漏给父组件
defineExpose({
  handleOpen,
  handleCancel,
});
</script>

<style lang="scss" scoped src="./index.scss"></style>
<style lang="scss">
.getCouponPicker .uni-popup__wrapper {
  max-height: 1062rpx;
  background-color: white !important;
  border-radius: 24rpx 24rpx 0 0;
}
.mainColor {
  color: #19232b !important;
}
</style>
