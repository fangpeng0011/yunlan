<!-- 设置页面 -->
<template>
  <view class="setting">
    <!-- 手机状态栏 -->
    <uni-nav-bar statusBar="true"></uni-nav-bar>
    <!-- 引导词 -->
    <view class="guide">
      <image src="../../static/new/img_tishi@2x.png"></image>
      <!-- <view class="content">亲，完成以下4步设置，方可接单哦～</view> -->
    </view>
    <!-- 具体步骤 -->
    <view class="step">
      <view class="stepOne stepItem">
        <image src="../../static/new/stepOne.png"></image>
        <view class="stepBox">
          <view class="stepContent">
            <view class="setpTitle">实名认证</view>
            <view class="setpIntroduce">平台会保护你的个人信息</view>
          </view>
          <view
            class="btn"
            @click="handleToAuth"
            :class="
              certificationStatus === 2
                ? 'btn-successGreen'
                : certificationStatus === 1
                ? 'btn-ing'
                : certificationStatus === 3
                ? 'btn-fail'
                : 'btn-red'
            "
            >{{
              certificationStatus === 2
                ? '已完成'
                : certificationStatus === 1
                ? '认证中'
                : certificationStatus === 3
                ? '认证失败'
                : '去认证'
            }}</view
          ></view
        >
      </view>
      <view class="stepTwo stepItem">
        <image src="../../static/new/stepTwo.png"></image>
        <view class="stepBox">
          <view class="stepContent">
            <view class="setpTitle">服务技能设置</view>
            <view class="setpIntroduce">设置完成后，方可为您推荐订单</view>
          </view>
          <view
            class="btn"
            :class="serveSkillStatus ? 'btn-successGreen' : 'btn-red'"
            @click="toServiceSikll"
            >{{ serveSkillStatus ? '已完成' : '去设置' }}</view
          ></view
        >
      </view>
      <view class="stepThree stepItem">
        <image src="../../static/new/stepThree.png"></image>
        <view class="stepBox">
          <view class="stepContent">
            <view class="setpTitle">服务范围设置</view>
            <view class="setpIntroduce">设置完成后，方可为您推荐订单</view>
          </view>
          <view
            class="btn"
            :class="serveRangeStatus ? 'btn-successGreen' : 'btn-red'"
            @click="toServiceRange"
            >{{ serveRangeStatus ? '已完成' : '去设置' }}</view
          ></view
        >
      </view>
      <view class="stepFour stepItem">
        <image src="../../static/new/stepFour.png"></image>
        <view class="stepBox">
          <view class="stepContent">
            <view class="setpTitle">接单设置</view>
            <view class="setpIntroduce">开启接单后，方可进行接单哦</view>
          </view>
          <switch
            color="#F74347"
            style="transform: scale(0.7)"
            @change="handlePickUpStatus"
            :checked="canPickUp"
          ></switch
        ></view>
      </view>
    </view>
    <!-- 底部按钮 -->
    <view
      @click="toIndex"
      class="btn-red footerBtn"
      :class="settingsStatus ? '' : 'notSetting'"
      >进入首页</view
    >
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserSetting, setPickUpStatus } from '../api/setting.js';
import { onShow } from '@dcloudio/uni-app';

const canPickUp = ref(false); //是否开启接单
const settingsStatus = ref(false); //是否配置完成
const serveRangeStatus = ref(false); //是否配置服务范围
const serveSkillStatus = ref(false); //是否配置服务技能
const certificationStatus = ref(false); //是否实名认证

onShow(() => {
  getSetting();
});
onMounted(() => {});
//获取配置信息
const getSetting = () => {
  getUserSetting()
    .then((res) => {
      if (res.code == 200) {
        canPickUp.value = res.data.canPickUp;
        settingsStatus.value = res.data.settingsStatus;
        serveRangeStatus.value = res.data.serveScopeSetted;
        serveSkillStatus.value = res.data.serveSkillSetted;
        certificationStatus.value = res.data.certificationStatus;
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
//修改接单状态
const handlePickUpStatus = () => {
  setPickUpStatus({
    canPickUp: canPickUp.value ? 0 : 1,
  })
    .then((res) => {
      if (res.code == 200) {
        getSetting();
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
//实名认证
const handleToAuth = () => {
  if (certificationStatus.value === 0) {
    uni.navigateTo({
      url: '/pages/auth/index',
    });
  } else if (certificationStatus.value === 3) {
    uni.navigateTo({
      url: '/pages/authFail/index',
    });
  }
};
//设置服务技能
const toServiceSikll = () => {
  uni.navigateTo({
    url: '/pages/serviceSkill/index',
  });
};
//设置服务范围
const toServiceRange = () => {
  uni.navigateTo({
    url: '/pages/serviceRange/index',
  });
};
//进入首页
const toIndex = () => {
  if (!settingsStatus.value) {
    return;
  } else {
    uni.redirectTo({
      url: '/pages/index/index',
    });
  }
};
</script>
<style src="./index.scss" lang="scss"></style>
