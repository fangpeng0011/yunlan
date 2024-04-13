<!--我的优惠券列表-->
<template>
  <scroll-view class="scroll-view-content" scroll-y>
    <view class="pageCon appList itemListBox orderBox">
      <!-- 标题 -->
      <NavBar
        title="我的优惠券"
        :isShowBack="true"
        :handleToLink="handleToLink"
      ></NavBar>
      <!-- end -->
      <view v-if="netStatus">
        <List
          :itemData="itemData"
          @setTabIndex="setTabIndex"
          :moreStatus="moreStatus"
          :couponTabData="couponListTabData"
          :loading="loading"
          :type="type"
          @handleDelete="handleDelete"
          @onReachBottom="onReachBottom"
        ></List>
      </view>
      <!-- 断网显示的页面 -->
      <net-fail v-else :handleToRefresh="handleToRefresh"></net-fail>
    </view>
  </scroll-view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onShow, onLoad } from '@dcloudio/uni-app';
import { useStore } from 'vuex';
// 接口
import { getMyCouponList } from '@/pages/api/coupon.js';
import { couponListTabData } from '@/utils/commonData.js';
// 组件
// 列表
import List from './components/list.vue';
// ------定义变量------
const store = useStore(); //存储获取数据
const users = store.state.user; //获取存储数据
const typeVal = ref(users.backLink);
const type = ref(2);
const deleteRef = ref(null); //定义取消弹层ref
const itemData = ref([]); //预约数据
const moreStatus = ref('more'); //加载更多状态 loading  more noMore
const netStatus = ref(true); // 是否断网
const loading = ref(false); // 是否展示加载更多
const orderId = ref(); //预约id

let params = reactive({
  status: 1,
  lastId:'',
});
const pages = ref(0); // 单页条数
const isSendRequest = ref(false); // 是否继续发送请求
const isback = ref(false); //是否触发了左上角返回按钮
// ------定义方法------
onLoad((options) => {
  if (options.str) {
    typeVal.value = options.str;
    store.commit('user/setOrderType', false);
  }
  typeVal.value = users.backLink;
  store.commit('user/setOrderType', false);
});

const getNewData = async () => {
  params = {
    ...params,
  };
  moreStatus.value = 'loading';
  loading.value = false;
  await getMyCouponList(params)
    .then((res) => {
      if (res.data.code == 200) {
        const { data } = res.data;
        const items = data == null ? [] : data;
        moreStatus.value = items.length < 10 ? 'no-more' : 'more';
        // 从第一页请求 清空之前的数据
        // 下拉数据合并
        itemData.value = itemData.value ? [...itemData.value, ...items] : items;
        // 如果 当前页面的数据已经全部数据了 那么停止拿数据
        pages.value = data.length;
        if (pages.value < 10) {
          isSendRequest.value = true;
          moreStatus.value = 'noMore';
        }
        uni.stopPullDownRefresh();
        netStatus.value = true;
        loading.value = true;
      }
    })
    .catch((err) => {
      // 弹出错误提示
      console.log(err);
      uni.showToast({
        title: err,
        duration: 1000,
        icon: 'none',
      });
      netStatus.value = false;
    });
};
onShow(() => {
  isSendRequest.value = false;
  getNewData();
});

// tab触发切换
const setTabIndex = (index) => {
  params.status = index
  itemData.value = []
  getNewData();
};
// 上拉更多数据
const onReachBottom = () => {
  if (pages.value < 10) {
    moreStatus.value = 'noMore';
    return false;
  } else {
    moreStatus.value = 'loading';
    let times = setTimeout(() => {
      params.lastId = itemData.value[itemData.value.length - 1].id
      getNewData();
    }, 1000); //这里延时一秒在加载方法有个loading效果
  }
};
//删除
const handleDelete = (id) => {
  orderId.value = id;
  deleteRef.value.popup.open();
};
// 列表页返回
const handleToLink = () => {
  // 返回的时候需要把订单列表页的当前状态设置为0
  store.commit('user/setOrderStatus', '');
  // 如果是从首页进来的绑定页面，返回到首页，否则返回到绑定列表页
  isback.value = true; //是否触发了左上角返回按钮
  if (typeVal.value === 'my' || typeVal.value === 'pay') {
    store.commit('setFootStatus', 3);
    uni.redirectTo({
      url: '/pages/my/index',
    });
  } else {
    store.commit('setFootStatus', 0);
    uni.reLaunch({
      url: `/pages/index/index`,
    });
    // }
  }
};
const handleToRefresh = () => {
  getNewData();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.scroll-view-content {
  height: calc(100% - 81px); /* 主内容区域的高度减去底部栏的高度 */
  padding-top: 259rpx; /* 底部栏的高度，确保内容不被底部栏遮挡 */
  :deep(.NavBar) {
    background: #fff !important;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  :deep(.itemTab .tabBox) {
    box-sizing: border-box;
    background: #fff !important;
    position: fixed;
    top: 166rpx;
    width: 100%;
    z-index: 999;
    font-size: 28rpx;
    justify-content: space-evenly;
  }
}
</style>
