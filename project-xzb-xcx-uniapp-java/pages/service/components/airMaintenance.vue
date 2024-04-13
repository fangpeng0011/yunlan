<!-- 服务详情 -->
<template>
  <view>
    <view class="airMaintenance">
      <!-- 滚动盒子 -->
      <scroll-view
        class="scroll-view-content"
        scroll-y
        @scroll="onPageScroll"
        :style="scrollBoxHeight"
        lower-threshold="30"
        :scrollTop="scrollTop"
        @scrolltolower="LoadMoreCustomers"
      >
        <!-- 吸顶tab栏 -->
        <view>
          <view class="tabBar" :style="fixedBarStyle">
            <view
              :class="activeId === 1 ? 'tabBar-item active' : 'tabBar-item'"
              @click="changeTab(1)"
              >服务详情</view
            >
            <view
              :class="activeId === 2 ? 'tabBar-item active' : 'tabBar-item'"
              @click="changeTab(2)"
              >用户评价</view
            >
          </view>
        </view>
        <!-- end -->
        <!-- 主内容区域 -->
        <NavBar
          :title="title"
          :isShowBack="true"
          @transferHeight="transferHeight"
        ></NavBar>
        <image :src="detailData?.serveItemImg" mode="widthFix" class="banner" />
        <!-- 头部 -->
        <view class="head">
          <view class="title">
            <view>{{ detailData?.serveItemName }}</view>
            <view class="price" v-if="detailData">
              ￥<text class="num">{{ detailData?.price }}</text
              ><text class="unit">
                /{{ UNIT[detailData?.unit - 1].label }}
              </text>
            </view>
          </view>
          <uni-number-box :min="1" :max="10" v-model="number" />
        </view>
        <!-- end -->
        <!-- 商品介绍详情 -->
        <view class="bg-wt" id="goodsDetail">
          <image
            :src="detailData?.detailImg"
            mode="widthFix"
            ref="myImage"
            class="detailBanner"
          />
        </view>
        <!-- end -->
        <!-- 评价区域 -->
        <view class="body" id="replayDetail">
          <view class="title">用户评价</view>
          <view class="cardsBox" v-for="(item, index) in data" :key="index">
            <view class="headBox">
              <image
                :src="item.evaluatorInfo.avatar"
                mode="scaleToFill"
                class="headSculptureImg"
              />
              <view class="nickName">
                <view class="top">
                  <view class="name">{{
                    item.evaluatorInfo.isAnonymous === 0
                      ? item.evaluatorInfo.nickName
                      : '匿名用户'
                  }}</view>
                  <view class="star">
                    <uni-rate
                      activeColor="#F74145"
                      color="#D8D8D8"
                      allow-half
                      :disabled="true"
                      disabledColor="#F74145"
                      :size="13"
                      :value="item.totalScore"
                      margin="1"
                    ></uni-rate>
                    <text>{{ item.totalScore }}分</text>
                  </view>
                </view>
              </view>
            </view>
            <view class="time">{{
              formatDateTimeToDateTimeString(
                new Date(item.createTime?.replace(/-/g, '/'))
              )
            }}</view>
            <view class="bodyBox">
              <text class="evaluationText"> {{ item.content }}</text>
              <view class="photoList">
                <image
                  v-for="(img, index) in item.pictureArray"
                  :key="index"
                  :src="img"
                  mode="scaleToFill"
                  class="photo"
                  @click="previewImage(img, item.pictureArray)"
                />
              </view>
              <view class="operation">
                <view class="clickLike">
                  <image
                    src="../../../static/dislike.png"
                    @click="handleLike(1, item.id)"
                    v-if="item.isLiked === false"
                  ></image>
                  <image
                    src="../../../static/like.png"
                    @click="handleLike(0, item.id)"
                    v-else
                  ></image>
                  <text class="num">{{ item.statistics.likeNumber }}</text>
                </view>
                <image
                  class="report"
                  src="../../../static/jueb@2x.png"
                  @click="openReport(item.id)"
                ></image>
              </view>
              <!-- <view class="replay">{{ item.replay }}</view> -->
            </view>
          </view>
          <EmptyPage emptyInfo="暂无评价" v-if="data.length <= 0" />
        </view>
        <!-- 占位，留出与底边的分界线 -->
        <view class="devisor"></view>
      </scroll-view>
    </view>
    <view class="pageFoot">
      <button @click="showPopup" class="agree-btn btn">立即预约</button>
    </view>
    <!-- 举报弹出框 -->
    <uni-popup
      mask-background-color="rgba(0,0,0,0.6)"
      ref="report"
      type="bottom"
      class="reservationBox reportBox"
      :safe-area="true"
      background-color="#F0F0F0"
    >
      <view class="header">
        <view class="header-title">我要举报</view>
        <view class="close" @click="handleCancel"></view>
      </view>
      <view class="bodyList">
        <view
          class="item"
          v-for="(item, index) in reportList"
          :key="index"
          @click="handleReport(item.value)"
        >
          {{ item.label }}
        </view>
        <view class="cancelBtn item" @click="handleCancel">取消</view>
      </view>
    </uni-popup>
    <!-- 弹出窗 -->
    <uni-popup
      ref="reservationBox"
      type="bottom"
      class="reservationBox"
      :safe-area="true"
      background-color="#fff"
    >
      <view class="header">
        <view class="header-title">请填写您的预约信息</view>
        <view class="close" @click="handleCancel"></view>
      </view>
      <view class="body" @click="handleToAddress">
        <view class="left">
          <view class="fBox">
            <image
              src="../../../static/dizhi@2x.png"
              mode="widthFix"
              class="icon"
            />
          </view>
          <view class="text" v-if="!addressData.province">请选择服务地址</view>
          <view class="address" v-if="addressData">
            <view class="addressInfo"
              >{{ addressData.province }}{{ addressData.city
              }}{{ addressData.country }}{{ addressData.address }}</view
            >
            <view class="nickname"
              ><test>{{ addressData.name }}</test
              ><test>{{ addressData.phone }}</test></view
            >
          </view>
        </view>
        <view class="right"><icon class="nextIcon"></icon></view>
      </view>
      <view class="body">
        <view class="left">
          <image
            src="../../../static/smsj@2x.png"
            mode="widthFix"
            class="icon"
          />
          <view class="text">请选择上门时间</view>
        </view>
        <view class="right" @click="handleGetTime">
          <view class="value" :class="toDoorTimeLabel ? 'active' : ''">
            {{ toDoorTimeLabel ? toDoorTimeLabel : '请选择' }}
          </view>
          <icon class="nextIcon"></icon>
        </view>
      </view>
      <view class="title">优惠券信息</view>
      <view class="body">
        <view class="left">
          <image
            src="../../../static/yhqtb@2x.png"
            mode="widthFix"
            class="icon"
          />
          <view class="text">优惠券</view>
        </view>
        <view class="right" @click="handleGetCoupon">
          <view
            class="couponValue"
            :class="activeCoupon?.id ? 'active' : ''"
            v-if="couponList.length > 0"
          >
            {{
              activeCoupon.id
                ? `-${activeCoupon.discountAmount}元`
                : `${couponList.length}张可用`
            }}
          </view>
          <view class="couponValue" v-if="couponList.length <= 0">
            暂无可用
          </view>
          <icon class="nextIcon"></icon>
        </view>
      </view>
      <view class="foot">
        <view class="left" v-if="couponList.length > 0"
          >¥{{
            (
              detailData?.price * number -
              (activeCoupon.discountAmount ? activeCoupon.discountAmount : 0)
            ).toFixed(2)
          }}</view
        >
        <view class="left" v-if="couponList.length <= 0"
          >¥{{ detailData?.price * number }}</view
        >
        <view
          :class="canSubmit ? 'right agree-btn btn' : 'right disabled-btn'"
          @click="handleSubmit(detailData?.price * number)"
          >立即预约</view
        >
      </view>
    </uni-popup>
    <!-- 期待上门时间弹窗 -->
    <GetTimePicker
      ref="timePicker"
      @getTime="getTime"
      :hour="hour"
    ></GetTimePicker>
    <!-- end -->
    <!-- 优惠券选择弹窗 -->
    <CouponSelect
      ref="coupons"
      @handleSelectCoupon="handleSelectCoupon"
      :couponList="couponList"
      :activeCoupon="activeCoupon"
    ></CouponSelect>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { getServeById, addOrder } from '../../api/service';
import { getCommentListByObj, likeComment, setReport } from '../../api/order';
import { formatDateTimeToDateTimeString } from '@/utils/index.js';
import { getAddressBookDetail, getDefaultAddress } from '../../api/address';
import { getOrderCouponList } from '../../api/coupon';
import { UNIT, reportList } from '../../../utils/commonData';
import GetTimePicker from '../../../components/GetTimePicker/index.vue';
import CouponSelect from '../../../components/couponSelect/index.vue';
// 无数据
import EmptyPage from '@/components/EmptyPage/index.vue';
const title = ref('全部服务');
const activeId = ref(0); // 当前激活的tab
const opacity = ref(0); // 透明度
const scrollHeight = ref(0); // 滚动高度
const scrollBoxHeight = ref(0); // 滚动距离
const scrollTop = ref(0); //点击tab要切换到的标签位置
const scrollGoods = ref(0); //页面渲染完成之后商品详情所在位置的滚动距离
const scrollReplays = ref(0); //页面渲染完成之后评价所在位置的滚动距离
const NavBarHeight = ref(0); //导航栏高度
const reservationBox = ref({
  animation: true,
}); //底部弹出窗
const reportId = ref(''); //举报id
// 数据
const report = ref(null);
const isSendRequest = ref(true); //是否发送请求
const timePicker = ref(); //期望上门时间组件的引用
const toDoorTimeLabel = ref(''); //期望上门时间
const activeCoupon = ref({}); //当前选中的优惠券
const toDoorTime = ref(''); //期望上门时间
const detailData = ref(); //详情数据
const detailId = ref(); //详情id
const addressData = ref({}); //地址数据
const show = ref(false); //是否显示弹窗
const coupons = ref(); //优惠券选择弹窗
const hour = ref(0); //当前时间
const scrollTopId = ref(''); //滚动到的位置
const isSend = ref(false); //防止重复触发
const canSubmit = computed(() => {
  return addressData.value.id && toDoorTimeLabel.value;
}); //是否可以提交
const requestData = ref({
  pageNo: 1,
  pageSize: 10,
  sortBy: 1,
  targetId: '',
  targetTypeId: 6,
});
const number = ref(1); //数量
const reNum = ref(1); //提交次数
const couponList = ref([]); //优惠券列表

// 图片放大弹层
const previewImage = (url, val) => {
  uni.previewImage({
    current: url,
    urls: val,
    success: (res) => {
      console.log('success', res);
    },
    fail: (err) => {
      console.log('fail', err);
    },
  });
};
// 切换tab
const changeTab = (id) => {
  activeId.value = id;
  if (id === 1) {
    // 到高度为scrollGoods.value减去NavBarHeight.value，再减去41的位置
    scrollTop.value = scrollGoods.value - 41 - parseInt(NavBarHeight.value);
  } else {
    scrollTop.value = scrollReplays.value - 41 - parseInt(NavBarHeight.value);
    scrollTopId.value = 'replayDetail';
  }
};
// 滚动事件
const onPageScroll = (e) => {
  if (
    e.detail.scrollTop <
    scrollGoods.value - 41 - parseInt(NavBarHeight.value)
  ) {
    activeId.value = 0;
  } else if (
    e.detail.scrollTop >
      scrollGoods.value - 41 - parseInt(NavBarHeight.value) &&
    e.detail.scrollTop < scrollReplays.value - 730
  ) {
    activeId.value = 1;
  } else if (e.detail.scrollTop > scrollReplays.value - 730) {
    activeId.value = 2;
  }
  scrollHeight.value = e.detail.scrollTop;
  calculateOpacity();
};
// 控制透明度
const calculateOpacity = () => {
  const threshold = scrollGoods.value; // 设置透明度变化的阈值
  const maxOpacity = 1; // 最大透明度
  if (scrollHeight.value < threshold) {
    opacity.value = scrollHeight.value / threshold;
  } else {
    opacity.value = maxOpacity;
    if (!isSend.value) {
      const query = uni.createSelectorQuery();
      query
        .select('#goodsDetail')
        .boundingClientRect((rect) => {
          scrollReplays.value = scrollGoods.value + rect.height;
        })
        .exec();
      isSend.value = true;
    }
  }
};
// 固定栏样式，根据透明度变化
const fixedBarStyle = computed(() => {
  return {
    opacity: `${opacity.value}`,
    top: `${NavBarHeight.value}`,
  };
});
// 生命周期，监听页面加载
onLoad((option) => {
  uni.getSystemInfo({
    success: (res) => {
      scrollHeight.value = 'height:' + (res.screenHeight - 84) + 'px';
    },
  });
  title.value = option.title;
  detailId.value = option.id;
  if (option.addressId) {
    show.value = true;
    getAddress(option.addressId);
  } else {
    getDefaultAddressData();
  }
  getData(detailId.value);
  const query = uni.createSelectorQuery();
  query
    .select('#goodsDetail')
    .boundingClientRect((rect) => {
      scrollGoods.value = rect.top;
      scrollReplays.value = scrollGoods.value + rect.bottom;
    })
    .exec();
});
onShow(() => {
  const id = uni.getStorageSync('activeAddressId');
  if (id) {
    getAddress(id);
    uni.removeStorageSync('activeAddressId');
  }
  if (reNum.value > 1) {
    reNum.value = 1;
  }
});
// 数据
const data = ref([]);
//弹出举报弹框
const openReport = (id) => {
  reportId.value = id;
  report.value.open();
};
//提交举报
const handleReport = (val) => {
  setReport({
    reason: val,
    bizType: 1,
    targetTypeId: 6,
    bizId: reportId.value,
  }).then((res) => {
    if (res.data.code === 200) {
      uni.showToast({
        title: '举报成功',
        icon: 'success',
        duration: 2000,
      });
      getCommentList();
      report.value.close();
    } else {
      uni.showToast({
        title: res.data.msg,
        icon: 'none',
        duration: 2000,
      });
    }
  });
};
// 获取地址详情
const getAddress = async (val) => {
  await getAddressBookDetail(val).then((res) => {
    addressData.value = res.data.data;
  });
};
// 获取数据
const getData = async (val) => {
  await getServeById(val)
    .then((res) => {
      if (res.data.code === 200) {
        detailData.value = res.data.data;
        if (show.value) {
          // reservationBox.value.animation = false
          showPopup();
        }
        requestData.value.targetId = res.data.data.serveItemId;
        getCommentList();
        title.value = detailData.value.serveItemName;
      } else {
        uni.showToast({
          title: res.data.msg,
          icon: 'none',
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// 获取默认地址
const getDefaultAddressData = async () => {
  await getDefaultAddress().then((res) => {
    if (res.data.code === 200) {
      addressData.value = res.data.data;
    }
  });
};
// 接收传递的当前页面的navBar高度
const transferHeight = (e) => {
  NavBarHeight.value = e;
};
// 底部弹出 Popup
const showPopup = () => {
  getOrderCouponList({
    serveId: detailId.value,
    purNum: number.value,
  }).then((res) => {
    if (res.data.code === 200) {
      couponList.value = res.data.data;
      activeCoupon.value = res.data.data[0];
    }
  });
  reservationBox.value.open();
};
// 关闭按钮
const handleCancel = () => {
  reservationBox.value.close();
  report.value.close();
};
//打开选择期望上门时间弹窗
const handleGetTime = () => {
  hour.value = new Date().getHours();
  timePicker.value.handleOpen();
};
// 进入地址选择页面
const handleToAddress = () => {
  uni.navigateTo({
    url: '/pages/address/index?isFromAddress=true&detailId=' + detailId.value,
  });
};
//获取期望上门时间数据
const getTime = (value) => {
  if (value.selectedTime < 20) {
    value.selectedTimeLabel = '0' + value.selectedTimeLabel;
  }
  toDoorTimeLabel.value =
    value.selectedDayLabel + ' ' + value.selectedTimeLabel;
  toDoorTime.value =
    String(new Date().getFullYear()) +
    '-' +
    String(new Date().getMonth() + 1) +
    '-' +
    (new Date().getDate() +
      value.selectedDay +
      ' ' +
      String(
        (value.selectedTime === 1
          ? new Date().getHours() + 1
          : value.selectedTime) + ':00:00'
      ));
};
// 提交预约
const handleSubmit = async (val) => {
  if (reNum.value > 1) {
    uni.showToast({
      title: '请勿重复提交',
      icon: 'none',
      mask: true,
      duration: 2000,
    });
  } else if (reNum.value === 1) {
    let time = toDoorTimeLabel.value + ':00';
    reNum.value++; //防止重复提交
    await addOrder({
      serveId: detailId.value,
      addressBookId: addressData.value.id,
      serveStartTime: time,
      purNum: number.value,
      couponId: activeCoupon.value ? activeCoupon.value.id : '',
    })
      .then((res) => {
        if (res.data.code === 200) {
          // 获取当前时间
          // 获取优惠金额
          let price = 0;
          if (activeCoupon.value) {
            price = activeCoupon.value.discountAmount
              ? activeCoupon.value.discountAmount
              : 0;
          }
          const date = new Date();
          uni.navigateTo({
            url:
              '/pages/pay/index?id=' +
              res.data.data.id +
              '&price=' +
              val +
              '&time=' +
              date +
              '&cheapPrice=' +
              price,
          });
        } else {
          reNum.value = 1;
          uni.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: true,
            duration: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        uni.showToast({
          title: '请求异常',
          icon: 'none',
          mask: true,
          duration: 2000,
        });
        reNum.value = 1;
      });
  }
};
// 选择优惠券返显
const handleSelectCoupon = (val) => {
  activeCoupon.value = val;
  coupons.value.handleCancel();
};
// 打开优惠券选择弹窗
const handleGetCoupon = () => {
  if (couponList.value.length <= 0) {
    return;
  }
  coupons.value.handleOpen();
};
// 获取评价列表
const getCommentList = () => {
  getCommentListByObj(requestData.value).then((res) => {
    if (res.data.code === 200) {
      data.value.push(...res.data.data);
      if (res.data.data.length < requestData.value.pageSize) {
        isSendRequest.value = false;
      }
    }
  });
};
// 点赞
const handleLike = async (state, val) => {
  await likeComment({
    id: val,
    state: state,
    likeTargetType: 1,
  }).then((res) => {
    if (res.data.code === 200) {
      // 更新列表
      getCommentList();
    }
  });
};
//上拉加载
const LoadMoreCustomers = () => {
  if (isSendRequest.value === false) {
    return;
  }
  requestData.value.pageNo = requestData.value.pageNo + 1;
  getCommentList();
};
</script>
<style src="../../../components/getTimePicker/index.scss" lang="scss"></style>
<style lang="scss" scoped>
@import url('@/styles/theme.scss');
.airMaintenance {
  background-color: #f8f8f8;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .scroll-view-content {
    height: calc(100% - 81px); /* 主内容区域的高度减去底部栏的高度 */
    padding-bottom: 81px; /* 底部栏的高度，确保内容不被底部栏遮挡 */
    :deep(.NavBar) {
      background-color: #fff;
      position: fixed;
      top: 0;
      width: 100%;
    }
    .tabBar {
      // 吸顶
      width: 100%;
      position: fixed;
      top: 136rpx;
      display: flex;
      justify-content: space-around;
      background: #ffffff;
      box-shadow: 0 4rpx 8rpx 0 #f6f6f6;
      z-index: 10;
      .tabBar-item {
        height: 82rpx;
        line-height: 82rpx;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 28rpx;
        color: #151515;
      }
      .active {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 28rpx;
        color: #f74145;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          bottom: -2rpx;
          left: 0;
          width: 100%;
          height: 4rpx;
          background: #f74145;
        }
      }
    }
    .banner {
      width: 100%;
      height: 620rpx;
      margin-top: 178rpx;
    }
    .head {
      padding: 32rpx 29rpx 40rpx 32.3rpx;
      background-color: #fff;
      margin-top: -8rpx;
      margin-bottom: 32rpx;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .title {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 40rpx;
        color: #151515;
        .price {
          margin-top: 11rpx;
          font-weight: 600;
          font-size: 28rpx;
          color: #f74145;
          letter-spacing: 0;
          .num {
            font-size: 44rpx;
          }
          .unit {
            font-size: 26rpx;
          }
        }
      }
      .cardBox {
        margin-top: 22rpx;
        .card {
          width: 220rpx;
          height: 140rpx;
          background: #ffffff;
          border: 2rpx solid #e7eaee;
          border-radius: 12rpx;
          padding: 25.5rpx 15.32rpx;
          box-sizing: border-box;
          .cardTitle {
            color: #151515;
            font-size: 28rpx;
            font-weight: 500;
            height: 40rpx;
            line-height: 40rpx;
            letter-spacing: 0;
            margin-bottom: 17rpx;
            text {
              color: #f74145;
            }
          }
          .cardText {
            font-family: PingFangSC-Regular;
            font-weight: 400;
            font-size: 22rpx;
            height: 32rpx;
            line-height: 32rpx;
            color: #888888;
          }
        }
        .active {
          border: 2rpx solid #f74145;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            width: 34rpx;
            height: 28rpx;
            right: 1rpx;
            bottom: 1rpx;
            display: block;
            background-image: url(@/static/xuanzeze@3x.png);
            background-size: 100% 100%;
          }
        }
      }
    }

    .body {
      padding: 32rpx 32rpx 23rpx;
      background-color: #fff;
      margin-top: 20rpx;
      margin-bottom: 20rpx;
      .title {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 16px;
        color: #151515;
        margin-bottom: 52rpx;
      }
      .cardsBox {
        padding-bottom: 32rpx;
        border-bottom: 2rpx solid #F4F4F4;
        margin-bottom: 27rpx;
        &:last-child{
          border: none;
        }
        .headBox {
          display: flex;
          .headSculptureImg {
            width: 56rpx;
            height: 56rpx;
            border-radius: 50%;
          }
          .nickName {
            width: 100%;
            .top {
              height: 56rpx;
              line-height: 56rpx;
              padding-left: 14.8rpx;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-right: 25rpx;
              // 填充剩余空间
              .name {
                font-family: PingFangSC-Medium;
                font-weight: 500;
                font-size: 26rpx;
                color: #404040;
              }
              .star {
                display: flex;
                align-items: center;
                text {
                  margin-left: 10rpx;
                  font-size: 24rpx;
                  color: #151515;
                }
              }
            }
            .bottom {
              margin-top: 16.6rpx;
              .tag {
                padding: 7rpx 26rpx;
                border-radius: 24rpx;
                height: 48rpx;
                font-family: PingFangSC-Regular;
                font-size: 24rpx;
                color: #f74145;
                background: #ffe3e4;
                text-align: center;
                float: left;
                margin-right: 20rpx;
                box-sizing: border-box;
              }
            }
          }
        }
        .time {
          color: #888888;
          font-size: 22rpx;
          padding-left: 70rpx;
        }
        .bodyBox {
          margin-top: 24rpx;
          .evaluationText {
            font-size: 24rpx;
            color: #404040;
            line-height: 46rpx;
          }
          .photoList {
            margin-top: 29.7rpx;
            margin-bottom: 32.8rpx;
            .photo {
              width: 212rpx;
              height: 212rpx;
              margin-right: 24rpx;
              &:last-child {
                margin-right: 0;
              }
            }
          }
          .operation {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            image {
              width: 28rpx;
              height: 28rpx;
            }
            .clickLike {
              display: flex;
              align-items: center;
              margin-right: 34rpx;
              .num {
                font-size: 24rpx;
              }
              image {
                margin-right: 7rpx;
              }
            }
            .report {
            }
          }
          .replay {
            margin-top: 28rpx;
            padding: 33rpx 24rpx 43rpx 27rpx;
            font-size: 24rpx;
            color: #404040;
            background: #f8f8f8;
            border-radius: 16rpx;
          }
        }
      }
    }
    .devisor {
      // 分割线占位
      height: 1rpx;
    }
    .detailBanner {
      width: 100%;
      // 高为图片原生比例的高度
      // margin-top: 22rpx;
    }
  }
}
.pageFoot {
  position: fixed;
  bottom: 0;
  left: 0;
}
.reportBox {
  :deep(.header-title) {
    margin-left: 270rpx;
  }
  .bodyList {
    padding: 0 22rpx;
    .item {
      width: 100%;
      height: 92rpx;
      line-height: 92rpx;
      text-align: center;
      background-color: white;
      border-radius: 49rpx;
      margin-bottom: 28rpx;
    }
    .cancelBtn {
      margin-top: 92rpx;
    }
  }
}
.reservationBox {
  background-color: #fff;
  :deep(.uni-popup__wrapper) {
    min-height: 510rpx;
    border-radius: 24rpx 24rpx 0 0;
  }
  :deep(.uni-popup) {
    view {
      uni-transition {
        view {
          border-radius: 24rpx 24rpx 0 0;
        }
      }
    }
  }
  .header {
    display: flex;
    height: 44rpx;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 41rpx;
    padding: 41rpx 42rpx 0;
    border-radius: 24rpx 24rpx 0 0;
    .header-title {
      font-size: 32rpx;
      color: #151515;
    }

    .close {
      width: 40rpx;
      height: 40rpx;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('../../../static/guanbi.png');
    }
  }
  .title {
    padding: 52rpx 42rpx 17rpx;
  }
  .body {
    display: flex;
    justify-content: space-between;

    padding: 47rpx 42rpx 43rpx;
    padding-bottom: 43rpx;
    border-bottom: 1px solid #f4f4f4;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fBox {
        height: 100%;
        padding-top: 12rpx;
      }
      .icon {
        width: 36rpx;
        height: 36rpx;
        margin-right: 27rpx;
      }
      .text {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 28rpx;
        color: #151515;
      }
      .address {
        font-size: 30rpx;
        color: #151515;
        font-weight: 500;
        .addressInfo {
          max-width: 570rpx;
        }
        .nickname {
          margin-top: 16rpx;
          test {
            margin-right: 4rpx;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .couponValue {
        color: #151515;
        font-size: 28rpx;
      }
      .active {
        color: #f74145;
      }
      .nextIcon {
        margin-left: 14rpx;
      }
      .value {
        color: #888888;
        font-size: 28rpx;
      }
      .value.active {
        color: #f74145;
      }
    }
  }
  .foot {
    padding: 47rpx 42rpx 35rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .left {
      font-family: PingFangSC-SNaNpxibold;
      font-weight: 600;
      font-size: 46rpx;
      color: #f74145;
      letter-spacing: 0.26px;
    }
    .right {
      height: 88rpx;
      width: 268rpx;
      border-radius: 45rpx;
      font-weight: 400;
      font-size: 15px;
      color: #ffffff;
      // 居中
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
:deep(.emptyBox) {
  padding-top: 80rpx;
}
</style>
