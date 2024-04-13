<!--  -->
<template>
  <view class="auth">
    <!-- 导航 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <!-- 姓名 -->
    <view class="name">
      <text class="label">真实姓名</text>
      <uni-easyinput
        v-model="formData.name"
        placeholder="请输入"
        :placeholderStyle="{ fontSize: '16px' }"
      ></uni-easyinput>
    </view>
    <!-- 身份证号 -->
    <view class="idCard">
      <text class="label">身份证号</text>
      <uni-easyinput
        v-model="formData.idCardNo"
        placeholder="请输入"
        :placeholderStyle="{ fontSize: '16px' }"
      ></uni-easyinput>
    </view>
    <!-- 身份证正面 -->
    <view class="idCardPhoto">
      <view class="label">上传身份证正反面（仅用于云岚到家系统认证）</view>
      <view class="content">
        <view class="photoItem">
          <uni-file-picker
            limit="1"
            title=""
            @select="(e) => handleSelect(e, 'frontImg')"
            @delete="handleDelete('frontImg')"
          ></uni-file-picker>
          <view class="photoLabel">人像面照片</view>
        </view>
        <view class="photoItem">
          <image class="forImg" src="../../static/new/ren@2x.png"></image>
          <view class="photoLabel">示例图</view>
        </view>
      </view>
      <!-- 身份证反面 -->
      <view class="countryPhoto">
        <view class="content">
          <view class="photoItem">
            <uni-file-picker
              limit="1"
              title=""
              @select="(e) => handleSelect(e, 'backImg')"
              @delete="handleDelete('backImg')"
            ></uni-file-picker>
            <view class="photoLabel">国徽面照片 </view>
          </view>
          <view class="photoItem">
            <image class="forImg" src="../../static/new/ren@2x.png"></image>
            <view class="photoLabel">示例图</view>
          </view>
        </view>
      </view>
    </view>

    <view class="data">
      <view class="label">上传证明资料</view>
      <view class="content">
        <view class="photoItem">
          <uni-file-picker
            limit="1"
            title=""
            @select="(e) => handleSelect(e, 'certificationMaterial')"
            @delete="handleDelete('certificationMaterial')"
          ></uni-file-picker>
          <view class="photoLabel">资料上传 </view>
        </view>
      </view>
    </view>
    <!-- 底部按钮 -->
    <view class="footer">
      <view class="btn-red" @click="handleSubmit">确认提交</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { baseUrl } from '../../utils/env';
// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
import { postAuth } from '../api/setting.js';
const title = ref('实名认证');
const flag = ref(true);
const formData = ref({
  certificationMaterial: '',
  idCardNo: '',
  backImg: '',
  frontImg: '',
  name: '',
});
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
const handleDelete = (type) => {
  formData.value[type] = '';
};
//上传图片
const handleSelect = (e, type) => {
  const item = e.tempFiles[0];
  uni.uploadFile({
    url: `${baseUrl}` + '/publics/storage/upload',
    files: [
      {
        name: 'file',
        uri: item.url,
        file: item,
      },
    ],
    header: {
      Authorization: uni.getStorageSync('token'),
    },
    success: (uploadFileRes) => {
      formData.value[type] = JSON.parse(uploadFileRes.data).data.url;
    },
    fail: () => {
      uni.showToast({
        title: '图片上传失败',
        duration: 1000,
        icon: 'none',
      });
    },
  });
};
//提交实名认证
const handleSubmit = () => {
  if (!formData.value.name) {
    return uni.showToast({
      title: '请填写真实姓名',
      duration: 1000,
      icon: 'none',
    });
  } else if (!formData.value.idCardNo) {
    return uni.showToast({
      title: '请填写身份证号',
      duration: 1000,
      icon: 'none',
    });
  } else if (!formData.value.frontImg) {
    return uni.showToast({
      title: '请上传人像面照片',
      duration: 1000,
      icon: 'none',
    });
  } else if (!formData.value.backImg) {
    return uni.showToast({
      title: '请上传国徽面照片',
      duration: 1000,
      icon: 'none',
    });
  } else if (!formData.value.certificationMaterial) {
    return uni.showToast({
      title: '请上传证明资料',
      duration: 1000,
      icon: 'none',
    });
  }

  if (!flag.value) return;
  flag.value = false;
  postAuth(formData.value)
    .then((res) => {
      setTimeout(() => {
        flag.value = true;
      }, 1000);

      if (res.code === 200) {
        uni.navigateTo({
          url: '/pages/setting/index',
        });
      }
    })
    .catch((err) => {
      setTimeout(() => {
        flag.value = true;
      }, 1000);
      uni.showToast({
        title: err.msg || '提交失败!',
        duration: 1000,
        icon: 'none',
      });
    });
};
</script>
<style scoped src="./index.scss"></style>
