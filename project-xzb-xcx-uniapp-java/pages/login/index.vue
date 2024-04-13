<!-- 手机短信登录页 -->
<template>
  <view class="loginBox">
    <!-- 头部导航栏 -->
    <NavBar title="登录" :isShowBack="false"></NavBar>
    <view class="logo-box">
      <image src="../../static/logo.png"></image>
    </view>

    <view class="open-dialog" @click="handleOpen">快速登录</view>

    <!-- 服务条款及隐私政策弹窗 -->
    <uni-popup
      ref="popup"
      type="bottom"
      :safe-area="false"
      class="servicePop"
      mask-background-color="rgba(0,0,0,0.6)"
    >
      <view class="header">
        <view class="title">服务条款及隐私政策</view>
        <image src="../../static/guanbi.png" @click="handleClose"></image>
      </view>
      <view class="content">
        <view>
          在您注册成为云岚到家会员的过程中您需要通过点击同意的形式在线签署<text>《云岚到家服务条款》</text>、<text>《云岚到家隐私政策》</text>请您务必仔细阅读充分理解条款内容后再点击同意尤其是以粗体并下划线标识的条款因为这些条款可能会明确您应履行的义务或对您的权利有所限制。
        </view>
        <view class="tips">
          请您注意：如果您不同意上述服务条款隐私政策或其中任何约定请您停止注册
        </view>
      </view>
      <view class="footer">
        <button class="cancel-btn btn" @click="handleClose">不同意</button>
        <button class="agree-btn btn" @click="decryptPhoneNumber">同意</button>
      </view>
    </uni-popup>
    <!-- 冻结提示 -->
    <!-- 提示窗示例 -->
    <uni-popup
      ref="alertDialog"
      type="dialog"
      :is-mask-click="false"
      class="freeze"
    >
      <view class="dialog">
        <view class="content">该手机号已被冻结</view>
        <view class="reason">
          <text>冻结原因：</text>
          <text>{{ reason }}</text>
        </view>
        <view class="phoneLabel">如需解冻请拨打客服电话：</view>
        <view class="phone">400-000-4000</view>
        <view class="footer" @click="handleClose">知道了</view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { useStore } from 'vuex';
import { login } from '../api/login';
import NavBar from '@/components/Navbar/index.vue';
import { getAddress, getCityList } from '../api/address';
// ------定义变量------
const store = useStore(); //vuex获取储存数据
const list = ref([]); //城市列表
const router = ref(store.state.router);
const reason = ref('');
const popup = ref();
const currentCity = ref();
const position = ref();
const alertDialog = ref(null);

onLoad((option) => {
  if (option.isLogin == 1) {
    setTimeout(() => {
      reason.value = option.reason;
      alertDialog.value.open();
    }, 200);
  }
});
const getWarpWeft = () => {
  // 获取定位
  uni.getLocation({
    type: 'gcj02',
    success: function (res) {
      position.value = res;
      getCity(position.value);
    },
    fail: function (res) {
      uni.navigateTo({
        url: '/pages/index/index',
      });
    },
  });
};
// 根据定位经纬度获取城市
const getCity = (position) => {
  let params = {
    location: position.longitude + ',' + position.latitude,
  };
  getAddress(params).then((res) => {
    if (res.data.code === 200) {
      currentCity.value = res.data.data;
      AreaConfig(currentCity.value);
      uni.navigateTo({
        url: '/pages/index/index',
      });
    }
  });
};

const handleOpen = () => {
  popup.value.open();
};
const decryptPhoneNumber = (e) => {
  handleClose();
  console.log(e, 'e');
  wx.login({
    success(res) {
      //允许授
      uni.getUserInfo({
        success(val) {
          login({
            code: res.code,
            avatar: 'https://yjy-oss-videos.oss-accelerate.aliyuncs.com/tx.png',
            nickname: val.userInfo.nickName,
          }).then((res) => {
            if (res.data.code === 200) {
              //将token存到缓存中，后续在统一请求头上加上token（短令牌）
              uni.setStorageSync('token', res.data.data.token);
              // 存储昵称
              uni.setStorageSync('nickName', val.userInfo.nickName);
              getOpenCityList();
              getWarpWeft();
              if (router.value) {
                uni.redirectTo({
                  url: '/' + router.value,
                });
              }
            } else if (res.data.code === 605) {
              reason.value = res.data.msg;
              alertDialog.value.open();
            }
          });
        },
      });
    },
  });
};
// 获取区域配置
const AreaConfig = (val) => {
  const currentCity = list.value.filter((item) => {
    return item.cityCode === val.cityCode;
  });
  if (currentCity.length === 0) {
    let cityData = val;
    cityData.name = val.province && val.city ? val.city : val.province;
    uni.setStorageSync('city', cityData);
    return;
  }
  uni.setStorageSync('city', currentCity[0]);
};
// 获取已开通的城市列表
const getOpenCityList = () => {
  getCityList().then((res) => {
    if (res.data.code === 200) {
      list.value = res.data.data;
    } else {
      uni.showToast({
        title: res.data.msg,
        icon: 'none',
      });
    }
  });
};
// 返回上一级
const handleClose = () => {
  popup.value.close();
  alertDialog.value.close();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
