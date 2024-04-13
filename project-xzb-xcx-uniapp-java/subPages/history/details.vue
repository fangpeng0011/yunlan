<!-- 历史订单详情 -->
<template>
  <scroll-view class="scroll-view-content" scroll-y>
    <view class="pageCon detailsBox">
      <!-- 标题 -->
      <NavBar
        title="订单详情"
        :isShowBack="true"
        :handleToLink="handleToLink"
      ></NavBar>
      <!-- end -->
      <view>
        <view class="operateTip">
          <!-- 待支付 -->
          <view v-if="baseData.orderInfo?.ordersStatus === 0">
            <view class="tit">订单待支付</view>
            <view>请在{{ times }}内完成支付，超时将取消订单</view>
          </view>
          <!-- end -->
          <!-- 待执行 -->
          <view v-if="baseData.orderInfo?.ordersStatus === 100">
            <view class="tit">订单正在派单中</view>
            <view>服务人员疯狂抢单中，请耐心等待～</view>
          </view>
          <view v-if="baseData.orderInfo?.ordersStatus === 200">
            <view class="tit">订单待服务</view>
            <view v-if="baseData.serverName"
              >{{ baseData.serverName }}将为您竭诚服务</view
            >
          </view>
          <!-- end -->
          <!-- 已完成 -->
          <view v-if="baseData.orderInfo?.ordersStatus === 300">
            <view class="tit">当前订单正在服务中</view>
          </view>
          <!-- end -->  
          <!-- 订单已经关闭 -->
          <view v-if="baseData.orderInfo?.ordersStatus === 400">
            <view class="tit">订单待评价</view>
            <view>订单已完成服务，请对本次服务进行评价</view>
          </view>
          <!-- end -->
          <!-- 已退款 -->
          <view v-if="baseData.orderInfo?.ordersStatus === 500">
            <view class="tit">订单已完成</view>
          </view>
          <view v-if="baseData.orderInfo?.ordersStatus === 600">
            <view class="tit">订单已取消</view>
            <view>取消原因：{{ baseData.cancelInfo.cancelReason }}</view>
          </view>
          <view v-if="baseData.orderInfo?.ordersStatus === 700">
            <view class="tit">订单已关闭</view>
          </view>
          <!-- end -->
        </view>
        <view class="box projectBox">
          <view class="projectInfo">
            <view class="head">
              <image :src="baseData.orderInfo?.serveItemImg"></image>
            </view>
            <view class="rText">
              <view class="tit">{{ baseData.orderInfo?.serveTypeName }}</view>
              <view class="projectFee">
                <text class="hour"
                  >{{ baseData.orderInfo?.serveItemName }} × {{ baseData.orderInfo?.purNum
                  }}{{ UNIT[baseData.orderInfo?.unit - 1]?.label }}</text
                >
              </view>
              <view class="projectFee"> ￥{{ baseData.orderInfo?.realPayAmount }} </view>
            </view>
          </view>
          <view class="foot"
            >{{ baseData.orderInfo?.ordersStatus === 0 ? '待付款金额' : '实际支付'
            }}<text :class="baseData.orderInfo?.ordersStatus === 0 ? 'font-col' : ''"
              >¥{{ baseData.orderInfo?.realPayAmount }}</text
            ></view
          >
        </view>
        <view
          class="cancelReason"
          @click="handleToCancelRule"
          v-if="baseData.payStatus === 300 || baseData.ordersStatus === 700"
        >
          <view
            class="refund"
            v-if="baseData.orderInfo?.payStatus === 300 || baseData.orderInfo?.ordersStatus === 700"
          >
            <text>您的订单已</text>
            <text class="success">退款完成</text>
          </view>
        </view>

        <view class="mt-20 box orderInfo?">
          <view
            class="orderList"
            v-if="
              baseData.orderInfo?.ordersStatus === 0 ||
              baseData.orderInfo?.ordersStatus === 600 ||
              baseData.orderInfo?.ordersStatus === 300 ||
              (baseData.orderInfo?.ordersStatus === 200 && baseData.payStatus !== 300) ||
              baseData.orderInfo?.ordersStatus === 100
            "
          >
            <view
              class="item"
              v-if="
                (baseData.serverName && baseData.orderInfo?.ordersStatus === 200) ||
                baseData.payStatus == 300 ||
                baseData.payStatus == 400
              "
            >
              <text>服务人员</text>
              <view>{{ baseData.serverName }}</view>
            </view>
            <view
              class="item"
              v-if="
                baseData.orderInfo?.payStatus == 0 ||
                baseData.orderInfo?.payStatus == 1 ||
                baseData.orderInfo?.ordersStatus === 200 ||
                baseData.orderInfo?.ordersStatus == 300 ||
                baseData.orderInfo?.ordersStatus == 600
              "
              ><text>预约时间</text>
              <view>{{
                formatDateTimeToDateTimeString(
                  new Date(baseData.orderInfo?.serveStartTime.replace(/-/g, '/'))
                )
              }}</view>
            </view>
            <view class="item"
              ><text>服务地址</text>
              <view>{{ baseData.orderInfo?.serveAddress }}</view>
            </view>
            <view class="item">
              <text>联系人</text>
              <view class="two"
                ><text>{{ baseData.orderInfo?.contactsName }}</text
                ><text>{{ baseData.orderInfo?.contactsPhone }}</text></view
              >
            </view>
          </view>
          <view
            class="orderList"
            v-if="baseData.orderInfo?.payStatus === 300 || baseData.orderInfo?.ordersStatus === 700"
          >
            <view class="item"
              ><text>退款时间</text>
              <view>{{
                baseData.refundInfo?.cancelTime
                  ? formatDateTimeToDateTimeString(
                      new Date(baseData.refundInfo?.cancelTime?.replace(/-/g, '/'))
                    )
                  : ''
              }}</view>
            </view>
            <view class="item"
              ><text>退款原因</text>
              <view>{{ baseData.refundInfo?.cancelReason }}</view>
            </view>
            <view class="item" v-if="baseData.orderInfo?.ordersStatus === 700"
              ><text>退款金额</text>
              <view>{{
                baseData.refundInfo?.realPayAmount ? `￥${baseData.refundInfo?.realPayAmount}` : ''
              }}</view>
            </view>
          </view>
          <!-- 完成，待评价 -->
          <view
            class="orderList"
            v-if="
              baseData.orderInfo?.ordersStatus === 500 || baseData.orderInfo?.ordersStatus === 400
            "
          >
            <view class="item" v-if="baseData.orderInfo?.serverName"
              ><text>服务人员</text>
              <view>{{ baseData.orderInfo?.serverName }}</view>
            </view>
            <view class="item" v-if="baseData.orderInfo?.serveActualEndTime"
              ><text>完成时间</text>
              <view>{{
                formatDateTimeToDateTimeString(
                  new Date(baseData.orderInfo?.serveActualEndTime.replace(/-/g, '/'))
                )
              }}</view>
            </view>
            <view class="item"
              ><text>服务地址</text>
              <view>{{ baseData.orderInfo?.serveAddress }}</view>
            </view>
            <view class="item">
              <text>联系人</text>
              <view class="two"
                ><text>{{ baseData.orderInfo?.contactsName }}</text
                ><text>{{ baseData.orderInfo?.contactsPhone }}</text></view
              >
            </view>
          </view>
          <view class="orderList">
            <view class="item"
              ><text>订单编号</text>
              <view>{{ baseData.orderInfo?.id }}</view>
            </view>
            <view class="item" v-if="baseData.orderInfo?.createTime"
              ><text>下单时间</text>
              <view>{{
                formatDateTimeToDateTimeString(
                  new Date(baseData.orderInfo?.createTime.replace(/-/g, '/'))
                )
              }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 提示窗示例 -->
    <uni-popup
      mask-background-color="rgba(0,0,0,0.6)"
      ref="alertDialog"
      type="bottom"
      :is-mask-click="false"
      class="freeze"
    >
      <button class="phone-button" @click="makePhoneCall">
        呼叫 400-000-4000
      </button>
      <button class="phone-button" @click="handleClose">取消</button>
    </uni-popup>
    <!-- end -->
    <!-- 提示窗提示无法取消 -->
    <uni-popup
      ref="noCancelDialog"
      :is-mask-click="false"
      class="freeze"
      mask-background-color="rgba(0,0,0,0.6)"
    >
      <uni-popup-dialog
        mode="base"
        content="当前不可自行取消订单，如需取消需拨打客服热线400-000-4000"
        title=" "
        :animation="false"
        :before-close="true"
        confirmText="联系客服"
        cancelText="我知道了"
        @close="close"
        @confirm="makePhoneCall"
      >
        <template #default>
          <view class="cancelDialog">
            {{ content }}
          </view>
        </template>
      </uni-popup-dialog>
    </uni-popup>
    <!-- end -->
    <!-- 删除确认对话框 -->
    <uni-popup
      ref="popup"
      type="dialog"
      class="address-popup"
      mask-background-color="rgba(0,0,0,0.6)"
    >
      <uni-popup-dialog
        mode="base"
        content="确定删除此条订单？"
        :animation="false"
        :before-close="true"
        @close="close"
        @confirm="confirm"
      >
      </uni-popup-dialog>
    </uni-popup>
    <!-- end -->
  </scroll-view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import {
  formatDateTimeToDateTimeString,
  laterTime,
} from '@/utils/index.js';
import { deleteOrder,getHistoryOrderDetail } from '@/pages/api/order.js';
import { useStore } from 'vuex';
import { UNIT } from '@/utils/commonData.js';
// 组件
// ------定义变量------
const store = useStore(); //存储获取数据
const users = store.state.user; //获取存储数据
const baseData = ref({
  nursingProjectVo: {},
  elderVo: {},
}); //订单详情数据
const orderId = ref(null); //订单id
const times = ref(null);
const alertDialog = ref(null); //提示窗
//胶囊底部距离头部的距离
let capsuleBottom = ref();
const content = ref('');
const typeVal = ref(users.backLink);
const isback = ref(false); //是否触发了左上角返回按钮
const noCancelDialog = ref(null); //不可取消提示框
const popup = ref(null); //删除确认提示框
// ------定义方法------
onLoad((option) => {
  uni.getSystemInfo({
    success: (res) => {
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom + 10;
    },
  });
  orderId.value = option.id;
});
// 返回后刷新数据
onShow(() => {
  if(getCurrentPages()[getCurrentPages().length - 1].options.type === 'history'){
    getHistoryDetail()
  }
});
// 获取历史订单详情
const getHistoryDetail = async () => {
  await getHistoryOrderDetail(orderId.value).then((res) => {
    if (res.data.code === 200) {
      baseData.value = res.data.data;
    }
  });
};

// 列表页返回历史订单列表
const handleToLink = () => {
  isback.value = true; //是否触发了左上角返回按钮
  if (
    typeVal.value === 'back' ||
    typeVal.value === 'detail' ||
    typeVal.value === 'goods' ||
    typeVal.value === 'home'
  ) {
    uni.redirectTo({
      url: `/subPages/history/index`,
    });
  } else {
    uni.navigateBack({
      delta: 1,
    });
  }
};
const handleToCancelRule = () => {
  let time = '' ;
  time = formatDateTimeToDateTimeString(new Date(laterTime(baseData.value.serveStartTime.replace(/-/g, '/'), 2, 1)))
  uni.navigateTo({
    url: `/subPages/order/cancelRule?id=${orderId.value}&type=1&&time=${time}`,
  });
};
// 关闭
const handleClose = () => {
  alertDialog.value.close();
};
// 拨打电话
const makePhoneCall = () => {
  uni.makePhoneCall({
    phoneNumber: '400-000-4000', //仅为示例，并非真实的电话号码
  });
};
//关闭删除确认提示框
const close = () => {
  popup.value.close();
  noCancelDialog.value.close();
};
// 点击删除
const handleDelete = () => {
  popup.value.open();
};
// 确认删除
const confirm = () => {
  popup.value.close();
  deleteOrder(baseData.value.id)
    .then((res) => {
      // 返回订单列表
      uni.navigateBack({
        delta: 1,
      });
      uni.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 1000,
      });
    })
    .catch((err) => {
      console.log(err);
      uni.showToast({
        title: '删除失败',
        icon: 'none',
        duration: 1000,
      });
    });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.orderInfo .orderList .item .two text {
  font-size: var(--font-size-14);
  color: var(--neutral-color-main);
  margin-right: 35rpx;
  display: inline-block;
  padding-right: 0;
  width: auto;
}
.orderInfo .orderList .item {
  text {
    width: 114rpx;
    min-width: 114rpx;
    display: inline-block;
    font-size: var(--font-size-14);
    color: #888;
    // box-sizing: border-box;
  }
  view {
    width: 563rpx;
  }
}
.projectInfo {
  .head image {
    width: 164rpx;
    height: 122rpx;
    border-radius: 0;
  }
  .rText {
    padding-left: 22rpx;
    .tit {
      margin-top: 4rpx;
      font-weight: 500;
      font-size: 32rpx;
    }
    .projectFee {
      font-size: 28rpx;
      margin-bottom: 8rpx;
      height: auto;
    }
  }
}
.projectBox {
  padding: 33rpx 27rpx 35rpx;
  .foot {
    padding-top: 31.5rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.orderInfo .orderList {
  padding-top: 16rpx;
}
.operateTip {
  font-weight: 400;
  view {
    font-size: 28rpx;
    color: #ffffff;
  }
  .tit {
    font-weight: 500;
    font-size: 36rpx;
    color: #ffffff;
    margin-bottom: 14rpx;
  }
}
.cancelReason {
  margin-top: 32rpx;
  margin-bottom: 32rpx;
  background-color: #fff;
  padding: 30rpx 29rpx 34rpx 27rpx;
  font-size: 28rpx;
  view {
    display: flex;
    .success {
      color: var(--essential-color-red);
    }
    .title {
      width: 114rpx;
      min-width: 114rpx;
      color: var(--neutral-color-main);
      margin-right: 32rpx;
    }
    .content {
      width: 476rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      font-size: 14px;
      color: #888888;
      line-height: 44rpx;
    }
    image {
      width: 20rpx;
      height: 20rpx;
      align-self: center;
      margin-left: auto;
    }
  }
}
.btn {
  width: 152rpx;
  height: 60rpx;
  color: var(--essential-color-red);
  font-size: 28rpx;
  line-height: 60rpx;
  margin-right: 24rpx;
}
.s-btn {
  font-size: 28rpx;
  width: 152rpx;
  height: 60rpx;
  line-height: 60rpx;
  border: 2rpx solid #888888;
  margin-right: 24rpx;
}
.phone-button {
  width: 720rpx;
  height: 112rpx;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 24rpx;
  font-size: 36rpx;
  font-weight: 500;
  margin-bottom: 20rpx;
  color: #f74c50;
  line-height: 112rpx;
  &:last-child {
    color: #151515;
  }
}
:deep(.uni-popup-dialog) {
  font-weight: 400;
  font-size: 32rpx;
  color: #151515;
  letter-spacing: 0.36rpx;
  width: 556rpx;
  .uni-dialog-title {
    display: none;
  }
  .uni-dialog-content {
    padding: 49rpx 83rpx;
  }
  .cancelDialog {
    text-align: center;
  }
}
</style>
