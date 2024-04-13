<!--订单搜索-->
<template>
  <view class="pageCon appBox searchBase">
    <!-- 标题 -->
    <NavBar
      title="搜索"
      :isShowBack="true"
      :handleToLink="handleToLink"
    ></NavBar>
    <!-- end -->
    <view class="main" v-if="netStatus">
      <!-- 搜索 -->
      <view class="searchBox">
        <view class="input-view">
          <uni-icons class="input-uni-icon" type="search" size="18" />
          <input
            confirm-type="search"
            class="nav-bar-input"
            type="text"
            v-model="searchData.keyword"
            placeholder="搜索"
            @confirm="handleSearch"
            @input="handleInput"
            @blur="handleBlur"
          />
          <uni-icons
            v-if="showClearIcon"
            class="input-uni-icon"
            type="clear"
            size="18"
            @click.stop="handleClear"
          />
        </view>
        <view class="font-col cancel" @click.stop="handleList('cancel')"
          >取消</view
        >
      </view>
      <!-- end -->
      <!-- 搜索出的列表 -->
      <List
        :itemData="itemData"
        :moreStatus="moreStatus"
        :loading="loading"
        @handleClear="handleClear"
        @onReachBottom="onReachBottom"
        @handleList="handleList"
        @handleBlur="handleBlur"
        :isHistory="isHistory"
      ></List>
      <!-- end -->
      <!-- 历史记录 -->
      <view
        class="historyBox"
        v-if="
          itemData.length === 0 && searchHistoryData.length > 0 && !isHistory
        "
      >
        <view class="tit">
          <view>历史记录</view
          ><uni-icons class="input-uni-delect" @click="clearHistory" />
        </view>
        <view class="item"
          ><text
            v-for="(item, index) in searchHistoryData"
            :key="index"
            @click.stop="handleList(item)"
            >{{ item }}</text
          ></view
        >
      </view>
      <!-- end -->
    </view>

    <!-- 断网显示的页面 -->
    <net-fail v-else :handleToRefresh="handleToRefresh"></net-fail>
    <!-- end -->
    <!-- 删除历史里路操作提示 -->
    <DeletePopup
      ref="deleteRef"
      @handleSub="subDelete"
      :errorTipText="errorTipText"
    ></DeletePopup>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
// 接口
import { getServeSearch } from '@/pages/api/index.js';
// 列表
import List from './components/List.vue';
// 删除历史记录确认框组件
import DeletePopup from '@/components/Operate/index.vue';
// ------定义变量------
const deleteRef = ref(null); //定义取消弹层ref
const itemData = ref([]); //列表数据
const moreStatus = ref('more'); //加载更多状态 loading  more noMore
const netStatus = ref(true);
const isHistory = ref(false); //用来控制显示历史记录还是无数据
const loading = ref(false); // 是否展示加载更多
const searchData = ref({
  cityCode: uni.getStorageSync('city').cityCode,
  serveTypeId: '',
  keyword: '',
});
let pageNum = ref(1); //存放当前页
const pages = ref(0); // 总页数

const showClearIcon = ref(false); //是否显示清除图标
let capsuleBottom = ref();
const searchHistoryData = ref([]); //历史数据
const errorTipText = ref({
  title: '',
  text: '确定要全部清空吗？',
}); //弹层显示的内容
// ------定义方法------
//胶囊底部距离头部的距离
onLoad((option) => {
  uni.getSystemInfo({
    success: (res) => {
      capsuleBottom.value = uni.getMenuButtonBoundingClientRect().bottom + 10;
    },
  });
  if (option.name !== undefined && option.name !== '') {
    searchData.value.keyword = option.name;
    showClearIcon.value = true;
    getNewData();
  }
});
// ------定义方法------
onShow((e) => {
  searchHistoryData.value = uni.getStorageSync('historyData').slice(0, 10);
});
// 获取列表
const getNewData = async () => {
  moreStatus.value = 'loading';
  loading.value = false;
  // 获取商品列表数据
  await getServeSearch(searchData.value)
    .then((res) => {
      if (res.data.code == 200) {
        const { data } = res.data;
        // 下拉数据合并
        itemData.value = data;
        uni.stopPullDownRefresh();
        netStatus.value = true;
        loading.value = true;
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg,
        duration: 1000,
        icon: 'none',
      });
      netStatus.value = false;
    });
};
// 搜索
const handleSearch = () => {
  getNewData();
  isHistory.value = true; //搜所时候不显示历史记录
};
// 离开搜索框触发
const handleBlur = (e) => {
  // if (!isHistory.value) {
  let text = searchData.value.keyword;
  // 去除空格
  text = text?.replace(/\s*/g, '');
  let arr = [];
  if (text !== '') {
    // 如果数组中包含字符串，有的话就删除之前的，把新搜索的放在数组前面
    if (searchHistoryData.value.includes(text)) {
      // 查找字符串在数组中出现的位置
      let i = searchHistoryData.value.indexOf(text);
      // 删除原来数据
      searchHistoryData.value.splice(i, 1);
    }
    // 把新搜索的字符串添加到数组的前面
    arr.unshift(text);
    searchHistoryData.value = [...arr, ...searchHistoryData.value];
    searchHistoryData.value = searchHistoryData.value.slice(0, 10);
    // 存储数据到缓存
    uni.setStorageSync('historyData', searchHistoryData.value);
  }
  // }
};
// 断网刷新
const handleToRefresh = () => {
  searchData.value.pageNum = 1;
  getNewData();
};
// 上拉更多数据
const onReachBottom = () => {
  if (pageNum.value >= pages.value) {
    moreStatus.value = 'noMore';
    return false;
  } else {
    moreStatus.value = 'loading';
    let times = setTimeout(() => {
      pageNum.value++;
      getNewData();
    }, 1000); //这里延时一秒在加载方法有个loading效果
  }
};
// 搜索框输入内容触发
const handleInput = (e) => {
  // searchData.value.keyword = e.detail.value;
  const nameVal = e.detail.value.split('');
  itemData.value = [];
  isHistory.value = true;
  if (nameVal.length > 0) {
    showClearIcon.value = true;
    getNewData();
  } else {
    isHistory.value = false;
    showClearIcon.value = false;
  }
};
// 清除
const handleClear = () => {
  searchData.value.keyword = '';
  showClearIcon.value = false;
  isHistory.value = false;
  itemData.value = [];
};
// 清除历史记录
const clearHistory = () => {
  deleteRef.value.popup.open();
};
// 确认删除
const subDelete = async () => {
  if (searchHistoryData.value.length > 0) {
    // 清空本地储存的历史数据
    uni.removeStorage({
      key: 'historyData',
    });
    searchHistoryData.value = [];
    deleteRef.value.popup.close();
  }
};
// 进入列表页
const handleList = (val) => {
  // 如果是从搜索页的取消按钮进去的列表页，搜索条件设置为空
  if (val === 'cancel') {
    handleClear()
    return
  }
  if (val.id) {
    uni.redirectTo({
    	url: `/pages/service/components/airMaintenance?id=${val.id}`
    });
  }
  // 手动输入的数据逻辑
  if (searchData.value.keyword !== '') {
    val = searchData.value.keyword;
  } else {
    searchData.value.keyword = val;
    getNewData();
    isHistory.value = true;
    loading.value = true;
  }
};
// 列表页返回列表
const handleToLink = () => {
  uni.redirectTo({
    url: `/pages/index/index`,
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss">
:deep(page) {
  background-color: var(--neutral-color-white) !important;
}
</style>
