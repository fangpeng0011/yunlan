<!-- 服务技能 -->
<template>
  <view class="serveRecord">
    <!-- nav -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <view class="img card">
      <view class="title"
        >服务{{ title === '开始服务' ? '前' : '后' }}照片<span class="must"
          >*</span
        ></view
      >
      <uni-file-picker
        limit="3"
        title="最多上传3张图片"
        @success="handleSuccess"
        @select="handleSelect"
        @fail="handleFail"
        @delete="handleDelete"
      ></uni-file-picker>
    </view>
    <view class="remark card">
      <view class="title">补充说明</view>
      <textarea
        @input="handleInput"
        :value="remark"
        :maxlength="50"
        placeholder-style="color:#F76260"
        placeholder="请输入对本次服务前的其他说明补充"
      />
      <view class="limit">
        <text class="min">{{ remark.length }}</text
        >/<text class="max">{{ 50 - remark.length }}</text>
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
import { startServe, finishServe } from '../api/order.js';
import { onLoad } from '@dcloudio/uni-app';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const title = ref('开始服务');
const remark = ref(''); //补充说明
const orderId = ref(''); //订单id
const fileList = ref([]); //上传的文件
const from = ref('');

onLoad((options) => {
  orderId.value = options.id;
  title.value = options.status == 1 ? '开始服务' : '完成服务';
  from.value = options.type;
});
const handleDelete = (e) => {
  fileList.value = fileList.value.filter(
    (item) => item.uuid !== e.tempFile.uuid
  );
};
const handleSuccess = (e) => {
  console.log(e, '上传成功回调');
};
const uploadImage = async () => {
  const promises = fileList.value.map((item) => {
    return new Promise((resolve, reject) => {
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
          const imageUrl = JSON.parse(uploadFileRes.data).data.url;
          resolve(imageUrl); // 上传成功后将图片链接传给 Promise 的 resolve
        },
        fail: (err) => {
          reject(err); // 上传失败时将错误信息传给 Promise 的 reject
        },
      });
    });
  });

  // 使用 Promise.all 等待所有图片上传完成
  try {
    const uploadedImages = await Promise.all(promises);
    return uploadedImages;
  } catch (error) {
    console.error(error);
    uni.showToast({
      title: '图片上传失败',
      duration: 1000,
      icon: 'none',
    });
    return []; // 返回一个空数组表示上传失败
  }
};
const handleSelect = (e) => {
  if (fileList.value.length) {
    fileList.value = fileList.value.concat(e.tempFiles);
  } else {
    fileList.value = e.tempFiles;
  }
};
const handleFail = () => {
  console.log(e, '上传失败');
};
const handleSubmit = async () => {
  const uploadedImages = await uploadImage();
  if (!fileList.value.length) {
    return uni.showToast({
      title: '请上传图片',
      duration: 2000,
      icon: 'none',
    });
  }
  // 网络慢的时候添加按钮loading;
  uni.showLoading({
    title: 'loading',
  });

  // 开始服务参数
  let startParams = {
    id: orderId.value,
    serveBeforeImgs: uploadedImages,
    serveBeforeIllustrate: remark.value,
  };
  // 完成服务参数
  let finishParams = {
    id: orderId.value,
    serveAfterImgs: uploadedImages,
    serveAfterIllustrate: remark.value,
  };
  const sameFunc = () => {
    if (from.value === 'list') {
      goBack();
    } else {
      uni.navigateTo({
        url: '/pages/orderInfo/index?id=' + orderId.value + '&type=' + 'info',
      });
    }
    remark.value = '';
    orderId.value = '';
    fileList.value = [];
  };
  if (title.value === '开始服务') {
    startServe(startParams)
      .then((res) => {
        uni.hideLoading();
        if (res.code === 200) {
          // 操作成功后清除loading
          sameFunc();
        } else {
          uni.showToast({
            title: '接口提交失败!',
            duration: 1000,
            icon: 'none',
          });
        }
      })
      .catch((err) => {
        uni.hideLoading();
        uni.showToast({
          title: '接口提交失败!',
          duration: 1000,
          icon: 'none',
        });
      });
  } else {
    finishServe(finishParams)
      .then((res) => {
        // 操作成功后清除loading
        uni.hideLoading();
        if (res.code === 200) {
          sameFunc();
        } else {
          uni.showToast({
            title: '接口提交失败!',
            duration: 1000,
            icon: 'none',
          });
        }
      })
      .catch((err) => {
        uni.hideLoading();
        uni.showToast({
          title: '接口提交失败!',
          duration: 1000,
          icon: 'none',
        });
      });
  }
};
// 输入补充说明
const handleInput = (e) => {
  remark.value = e.detail.value;
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
