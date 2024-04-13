<!--支付订单-->
<template>
  <view class="pageCon appBox verifyBox">
    <!-- 标题 -->
    <NavBar
      title="支付订单"
      :isShowBack="true"
      :handleToLink="handleToLink"
    ></NavBar>
    <!-- end -->
    <view class="main" v-if="netStatus">
      <view class="headBox">
        <view class="time"
          >支付剩余时间<text>{{ times }}</text></view
        >
        <view class="tag">
          <view>订单总价</view>
          <view>{{ price }}元</view>
        </view>
        <view class="tag" v-if="cheapPrice !== 0">
          <view>优惠金额</view>
          <view class="cheap">-{{ cheapPrice == 0 ? 0 : cheapPrice.toFixed(2) }}元</view>
        </view>
        <view class="tag">
          <view>待付金额</view>
          <view
            ><text class="cheap">{{ (price - cheapPrice).toFixed(2) }}元</text
            ></view
          >
        </view>
      </view>
      <view class="payBox">
        <view class="wxImg">
          <image class="" src="../../static/wechat.png" />
          微信支付
        </view>
        <view class="check">
          <!-- 选择框 -->
          <uni-data-checkbox
            multiple
            :localdata="range"
            v-model="radio1"
            @change="payChange(1)"
          ></uni-data-checkbox>
        </view>
      </view>
      <view class="payBox">
        <view class="wxImg">
          <image class="" src="../../static/zfb@2x.png" />
          支付宝支付
        </view>
        <view class="check">
          <!-- 选择框 -->
          <uni-data-checkbox
            multiple
            :localdata="range"
            v-model="radio2"
            @change="payChange(2)"
          ></uni-data-checkbox>
        </view>
      </view>
      <view class="pageFoot">
        <view>
          还需支付：<text>{{ (price - cheapPrice).toFixed(2)  }}元</text>
        </view>
        <button @click="getTradeImg" class="agree-btn btn">确认支付</button>
      </view>
    </view>
    <uni-popup
      ref="popup"
      :is-mask-click="true"
      mask-background-color="rgba(0,0,0,0.6)"
    >
      <view class="img">
        <image :src="qrCodeImg" mode="scaleToFill" />
      </view>
      <button class="agree-btn btn paySuccess" @click="handleClickPayResult">支付完成</button>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { useStore } from 'vuex';
// 基本数据
// 接口
import { payOrder, getOrderPayResult } from '@/pages/api/order.js';
import {
  formatDuringToTime,
} from '@/utils/index.js';
// ------定义变量------
const store = useStore(); //存储获取数据
const users = store.state.user; //获取存储数据
const rocallTime = ref(''); //倒计时
const times = ref(null);
const netStatus = ref(true); //判断有无网
const radio1 = ref([1]);
const radio2 = ref([0]);
const popup = ref(null);
let capsuleBottom = ref();
const price = ref(0);
const id = ref('');
const qrCodeImg = ref('');
const isback = ref(false); //是否触发了左上角返回按钮
const tradingChannel = ref('WECHAT_PAY');
const historyChanel = ref(''); // 记录上一次的支付方式
const payNum = ref(0); // 请求次数
const rocallStatus = ref(); //定时器
const cheapPrice = ref(0)
const range = ref([
  {
    text: '',
    value: 1,
  },
]);
// ------定义方法------
//胶囊底部距离头部的距离
onLoad((option) => {
  clearInterval(rocallStatus.value);
  id.value = option.id;
  price.value = Number(option.price);
  cheapPrice.value = Number(option.cheapPrice);
  // getTradeStatusTime();
  uni.getSystemInfo({
    success: (res) => {
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom + 10;
    },
  });
  // formData.value = JSON.parse(decodeURIComponent(option.item));
});

// 生成二维码
const getNative = async () => {
  qrCodeImg.value = '';
  await payOrder(
    {
      tradingChannel: tradingChannel.value,
    },
    id.value
  )
    .then((res) => {
      if (res.data.code === 200) {
        if (res.data.data.payStatus === 4) {
          uni.showToast({
            title: '支付成功',
            icon: 'none',
            duration: 2000,
          });
          setTimeout(() => {
            handleClickPay();
          }, 2000);
        } else {
          popup.value.open();
          qrCodeImg.value = res.data.data.qrCode;
          historyChanel.value = tradingChannel.value;
          payNum.value += 1;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// 点击确认支付获取二维码
const getTradeImg = async () => {
  getNative();
};
// 支付完成
const handleClickPayResult = async()=>{
  await getOrderPayResult(id.value).then((res)=>{
    if(res.data.code === 200){
      if(res.data.data.payStatus === 4){
        uni.showToast({
          title: '支付成功',
          icon: 'none',
          duration: 2000,
        });
        setTimeout(() => {
          handleClickPay();
        }, 2000);
      }else{
        uni.showToast({
          title: '支付失败',
          icon: 'none',
          duration: 2000,
        });
      }
    }
  })
}

// ------定义方法------
onShow((e) => {
  let time = getCurrentPages()[getCurrentPages().length - 1].options.time;
  // 获取页面路径参数
  runTimeBack(time?.replace(/-/g, '/'));
});
// 订单倒计时
const runTimeBack = (val) => {
  const end = Date.parse(new Date(val));
  const now = Date.parse(new Date());
  const m15 = 15 * 60 * 1000;
  let msec = m15 - (now - end);
  // 将msec转换成时分秒
  const time = formatDuringToTime(msec);
  times.value = time;
  // 清除所有的定时器
  // 倒计时
  rocallTime.value = setInterval(() => {
    if (msec > 0) {
      msec -= 1000;
      times.value = formatDuringToTime(msec);
    } else {
      clearInterval(rocallTime.value);
      handleToOrder();
    }
  }, 1000);
};
const payChange = (val) => {
  if (val === 1) {
    if (radio1.value.length > 0) {
      radio2.value = [];
      tradingChannel.value = 'WECHAT_PAY';
    }
  } else {
    if (radio2.value.length > 0) {
      radio1.value = [];
      tradingChannel.value = 'ALI_PAY';
    }
  }
};
// 跳转到订单列表页
const handleToOrder = () => {
  clearInterval(rocallStatus.value);
  store.commit('user/setOrderStatus', '');
  store.commit('user/setBackLike', 'pay');
  uni.navigateTo({
    url: '/subPages/order/index',
  });
};
// 列表页返回列表
const handleToLink = () => {
  clearInterval(rocallStatus.value);
  isback.value = true; //是否触发了左上角返回按钮
  store.commit('user/setBackLike', 'back');
  uni.navigateBack({
    delta: 1,
  });
};
// 下单成功后跳转到下单成功页面
const handleClickPay = () => {
  uni.navigateTo({
    url: '/pages/pay/components/paySuccessful',
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.img {
  width: 498rpx;
  height: 498rpx;
  border-radius: 24rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  image {
    width: 460rpx;
    height: 460rpx;
  }
}
.paySuccess{
  margin-top: 40rpx;
}
.cheap{
  color: #F74145;
}
</style>
