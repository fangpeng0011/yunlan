<!-- 账号登录页 -->
<template>
  <view>
    <image src="@/static/new/img_logo@2x.png" class="logo"></image>
    <view class="loginBox">
      <!-- 登录表单 -->
      <view class="loginMain">
        <uni-forms ref="customForm" :rules="customRules" :modelValue="fromInfo">
          <uni-forms-item name="phone">
            <uni-easyinput
              :clearable="false"
              class="item"
              v-model="fromInfo.phone"
              placeholder="请输入手机号"
            />
          </uni-forms-item>
          <uni-forms-item name="veriryCode" class="pwdBox">
            <uni-easyinput
              :clearable="false"
              class="item"
              v-model="fromInfo.veriryCode"
              placeholder="请输入验证码"
            />
            <text class="clearIcon" @click="handlePwd">获取验证码</text>
          </uni-forms-item>
        </uni-forms>
        <!-- 按钮 -->
        <view class="btnBox">
          <button
            class="btn-default"
            :disabled="
              fromInfo.phone.length === 0 || fromInfo.veriryCode.length === 0
            "
            :class="
              fromInfo.phone.length === 0 || fromInfo.veriryCode.length === 0
                ? 'disabled'
                : ''
            "
            type="primary"
            @click="handleSubmit"
          >
            登录
          </button>
        </view>
        <div class="gentleReminder">
          仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！
        </div>
        <!-- end -->
        <!-- 更新请求Url - 教学需求 -->
      </view>
      <!-- end -->
      <!-- 提示窗示例 -->
      <uni-popup ref="alertDialog" type="dialog" :is-mask-click="false">
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
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
// 接口
import { phoneLogins, getsmsCode } from '../api/user.js';
import { getUserSetting } from '../api/setting.js';
// ------定义变量------
const store = useStore(); //vuex获取储存数据
const customForm = ref(); //表单校验
const alertDialog = ref(null);
const reason = ref('');
// 表单数据
let fromInfo = reactive({
  phone: '15066699132', //账号
  veriryCode: '', // 密码
  userType: 2,
});
// 表单校验
const customRules = reactive({
  phone: {
    rules: [
      {
        required: true,
        errorMessage: '请输入手机号',
      },
      {
        validateFunction: function (rule, value, data, callback) {
          const reg = /^1[3-9]\d{9}$/;

          if (!reg.test(value)) {
            callback('手机号输入错误！请重新输入');
          }
          return true;
        },
      },
    ],
  },
  veriryCode: {
    rules: [
      {
        required: true,
        errorMessage: '请输入验证码',
      },
    ],
  },
});
// ------定义方法------
const handleClose = () => {
  alertDialog.value.close();
};
// 登录
const handleSubmit = async () => {
  // 表单校验
  const valid = await customForm.value.validate();
  if (valid) {
    // 登录接口
    // 网络慢的时候添加按钮loading

    uni.showLoading({
      title: 'loading',
      mask: true,
    });


    await phoneLogins(fromInfo)
      .then(async (res) => {
        // 操作成功后清除loading
        uni.hideLoading();
        // clearInterval(t);
        if (res.code === 200) {
          // 存储token
          uni.setStorageSync('token', res.data.token);
          store.commit('user/setToken', res.data.token);
          await getUserSetting().then((res) => {
            if (Boolean(res.data.settingsStatus)) {
              // 跳转到首页
              uni.redirectTo({
                url: '/pages/index/index',
              });
            } else {
              // 跳转到业务配置
              uni.redirectTo({
                url: '/pages/setting/index',
              });
            }
          });
        } else if (res.code === 605) {
          uni.showToast({
            title: res.msg,
            duration: 1000,
            icon: 'none',
          });
        }
      })
      .catch((err) => {
        uni.hideLoading();
        if (err.code === 605) {
          reason.value = err.msg;
          alertDialog.value.open();
        } else {
          uni.showToast({
            title: err.msg || '登录失败',
            duration: 1500,
            icon: 'none',
          });
        }
      });
  }
};
// 获取验证码
const handlePwd = async () => {
  const reg = /^1[3-9]\d{9}$/;
  if (!reg.test(fromInfo.phone)) {
    return uni.showToast({
      title: '手机号输入错误！请重新输入',
      duration: 2000,
      icon: 'none',
    });
  }
  getsmsCode({
    bussinessType: 3,
    phone: fromInfo.phone,
  })
    .then((res) => {
      fromInfo.veriryCode = '123456';
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '获取验证码失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
</script>

<style src="./index.scss" lang="scss"></style>
