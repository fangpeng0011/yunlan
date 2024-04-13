<!-- 全部服务列表 -->
<template>
  <view class="bg-wt service">
    <NavBar title="全部服务" :isShowBack="false"></NavBar>
    <view class="servicePage">
      <view class="left">
        <view
          v-for="(item, index) in serviceTypeData"
          :key="index"
          :class="activeId === item.serveTypeId ? 'active tagBox' : 'tagBox'"
          @click="tabChange(item.serveTypeId)"
        >
          <view class="tag">{{ item.serveTypeName }}</view>
        </view>
      </view>
      <!-- 右边内容区域 -->
      <view class="serviceBox right">
        <view>
          <image :src="acitiveIdImg" mode="scaleToFill" class="cleanImg" />
          <view class="clean">
            <view
              class="card"
              v-for="(item, index) in serviceItemData"
              :key="index"
              @click="handleDetail(item.id, item.serveItemName)"
            >
              {{ item.serveItemName }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- footer -->
    <UniFooter :pagePath="'/pages/service/index'"></UniFooter>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getServeCategory, getServeList } from '../api/service.js';

const serviceTypeData = ref([]); // 服务类型数据
const activeId = ref(1); // 当前选中的id
const acitiveIdImg = ref(''); // 当前选中图片的地址
const serviceItemData = ref([]); // 服务项目数据
const city = ref({}); //城市
// 切换侧边栏
const tabChange = (id) => {
  activeId.value = id;
  getServeListData();
};

const handleDetail = (id, title) => {
  uni.navigateTo({
    url: `/pages/service/components/airMaintenance?id=${id}&title=${title}`,
  });
};
// 获取服务分类数据
const getServeCategoryData = async () => {
  await getServeCategory({
    regionId: uni.getStorageSync('city').id,
  }).then((res) => {
    if (res.data.code === 200) {
      serviceTypeData.value = res.data.data;
      activeId.value = res.data.data[0]?.serveTypeId;
      acitiveIdImg.value = res.data.data[0]?.serveTypeImg;
      getServeListData();
    }
  });
};
// 获取服务项目数据
const getServeListData = async () => {
  // 打印当前选中的id的类型
  await getServeList({
    cityCode: uni.getStorageSync('city').cityCode,
    serveTypeId: activeId.value,
  }).then((res) => {
    if (res.data.code === 200) {
      serviceItemData.value = res.data.data;
      acitiveIdImg.value = serviceTypeData.value.filter(
        (item) => item.serveTypeId === activeId.value
      )[0].serveTypeImg;
    }
  });
};
onLoad(() => {
  city.value = uni.getStorageSync('city');
  if (city.value) {
    getServeCategoryData();
    if (uni.getStorageSync('activeId')) {
      activeId.value = uni.getStorageSync('activeId');
      // 清除缓存
      uni.removeStorageSync('activeId');
    }
  }
});

</script>

<style lang="scss" scoped>
@import url('@/styles/theme.scss');
.service {
  min-height: 100vh;

  .servicePage {
    display: flex;
    min-height: 89.4vh;
    padding-top: 22rpx;

    .left {
      width: 164rpx;
      font-size: 28rpx;
      flex-shrink: 0;
      background: #f8f8f8;

      .active {
        font-family: PingFangSC-Medium;
        font-weight: 700 !important;
        font-size: 16px !important;
        color: #f74145 !important;
        background-color: #fff !important;
        position: relative;

        .tag {
          color: #f74145 !important;
          &:after {
            content: '';
            position: absolute;
            width: 4rpx;
            height: 40rpx;
            left: 0;
            background: #f74145;
          }
        }
      }

      .tagBox {
        height: 112rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 14px;
        color: #151515;
        text-align: center;
        line-height: 112rpx;
        display: flex;
        justify-content: center;
        align-items: center;

        // &:first-child {
        //   height: 78rpx;
        //   line-height: 78rpx;
        //   display: block;
        // }

        .tag {
          height: 44rpx;
          line-height: 41rpx;
        }
      }
    }

    .serviceBox {
      padding-left: 28rpx;
      padding-right: 26rpx;

      .cleanImg {
        width: 532rpx;
        height: 200rpx;
        margin-bottom: 32rpx;
      }

      .clean {
        display: flex;
        flex-wrap: wrap;
        // 第二行和第一行对齐，不留空白
        align-content: flex-start;

        .card {
          width: 164rpx;
          box-sizing: border-box;
          text-align: center;
          padding: 14rpx 10rpx;
          background: #f4f4f4;
          margin-bottom: 20rpx;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          margin-right: 20rpx;
          font-size: 29rpx;
          color: #151515;

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
