<!-- 取消规则，暂时废弃 -->
<template>
  <scroll-view class="scroll-view-content" scroll-y>
    <NavBar
      title="规则说明"
      :isShowBack="true"
      :handleToLink="handleToLink"
    ></NavBar>
    <view class="cardBox">
      <view class="card">
        <view class="title">服务的收款方式</view>
        <view class="content">一口价</view>
        <view class="content mb-15">
          消费者进行一口价支付后，无需再就本次约定服务支付任何费用
          (新增服务需求除外)
        </view>
      </view>
      <view class="card">
        <view class="title">按价目表收费说明</view>
        <view class="content  mb-20"
          >1、带有[服务价目表」，的服务，代表服务项目须按照公示的服务价目表进行收费。不按照价目表收
          费，用户可拒绝支付并向平台举报
        </view>
        <view class="content mb-20">
          2、商家上门后，若产生增项服务，增项服务须按照服务价目表标准进行收费
        </view>
        <view class="content mb-20">
          3、若商家未按照服务价目表收费，或出现其他乱收费情况，您可在线举报或拨打客服电话400-000-4000进行维权
        </view>
      </view>
      <view class="card">
        <view class="title">退款及爽约赔付规则</view>
        <view class="content">未服务随时退 </view>
        <view class="content mb-20">
          1、服务人员未抢单/系统未匹配服务人员时，用户申请取消订单，支持用户全额退款。
          2、平台取消订单，支持用户全额退款
          3、平台已确认接单，距离服务开始时间120分钟之前，用户申请取消订单，支持用户全额退款。
        </view>
        <view class="content"> 收取上门费 </view>
        <view class="content">
          距离服务开始时间120分钟内，由于用户原因导致订单无法服务，需扣除用户支付订单金额总数的5%
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const time = ref()
const handleToLink = () => {
  uni.navigateBack({
    delta: 1,
  });
};
onLoad((options)=> {
  time.value = options.time
})
</script>

<style lang="scss" scoped>
.scroll-view-content {
  background-color: #fff;
  min-height: 100vh;
  .cardBox {
    padding: 9px 16px;
    .card {
      margin-bottom: 40rpx;
      .title {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 32rpx;
        color: #151515;
        margin-bottom: 40rpx;
      }
      .content {
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 30rpx;
        color: #888888;
        letter-spacing: 0.58rpx;
      }
    }
  }
}
.mb-20 {
  margin-bottom: 40rpx;
}
.mb-15 {
  margin-bottom: 30rpx;
}
</style>
