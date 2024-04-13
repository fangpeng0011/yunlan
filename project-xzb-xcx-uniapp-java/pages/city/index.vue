<template>
  <view>
    <NavBar title="选择服务地址" :isShowBack="true"></NavBar>

    <scroll-view
      class="w100"
      scroll-y="true"
      :scroll-into-view="scrollIntoId"
      :style="{ height: scrollHeight }"
      @touchmove.stop.prevent
    >
      <view v-if="disPosition" id="hot">
        <!-- 定位模块 -->
        <view class="position">
          <view class="grey"> 当前城市 </view>
          <view class="position_city">
            <view class="position_city_one" @tap="back_city(position, true)">
              {{ currentCity ? currentCity.name : '定位失败' }}
            </view>
            <view class="WarpWeft" @click="getWarpWeft">
              <image src="../../static/cxdw@2x.png" mode="scaleToFill" />
              <text>{{ po_tips }}</text>
            </view>
          </view>
        </view>
        <!-- 最近模块 -->
        <!-- 热门 -->
        <view class="position" v-if="hotCity.length > 0">
          <view class="hot grey"> 热门城市 </view>
          <view class="position_city position_city_hot">
            <view
              :class="
                activeId === item.cityCode
                  ? 'position_city_tag_active position_city_tag'
                  : 'position_city_tag'
              "
              v-for="(item, index) in hotCity"
              :key="index"
              @tap="activeCity(item)"
            >
              {{ item.cityName }}
            </view>
          </view>
        </view>
      </view>
      <!-- 城市列表 -->
      <view class="position">
        <view class="grey"> 已开通的城市 </view>
        <view
          v-for="(item, index) in list"
          :id="item.id"
          :key="index"
          class="cityList"
        >
          <!-- <view class="letter-header bold">{{ item.idx }}</view> -->
          <view class="contents">
            <view class="city-div" @click="selectCity(item)">
              <text class="city">{{ item.name }}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="placeholder footer"></view>
    </scroll-view>

    <!-- 右侧字母 -->
    <view
      class="letters"
      id="list"
      v-show="false"
      @touchstart="touchStart"
      @touchmove.stop.prevent="touchMove"
      @touchend="touchEnd"
    >
      <view class="fmin" v-for="item in letter" :key="item.idx">{{
        item.idx
      }}</view>
    </view>
    <!-- 确定获取定位 -->
    <Popup
      ref="operate"
      @handleSub="setWarpWeft"
      :errorTipText="errorTipText"
      :title="title"
    ></Popup>
    <!-- end -->
    <!-- 选中之后字母 -->
    <view class="mask" v-if="touchmove">
      <view class="mask-r bold">{{ scrollIntoId }}</view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, watch, getCurrentInstance } from 'vue';
import { getAddress, getCityList } from '../api/address';
import Popup from '@/components/Operate/index.vue';
import { tostTip } from '../../utils';
const customBar = ref('87px'); //导航栏高度
const winHeight = ref(0); //屏幕高度
const itemHeight = ref(0); //每个item的高度
const winOffsetY = ref(0); //滚动条距离顶部的距离
const touchmove = ref(false); //是否滑动
const scrollHeight = ref(''); //滚动高度
const letter = ref([]); //字母
const operate = ref(null); //定义取消弹层ref
const title = ref('开启定位权限'); //弹层标题
const scrollIntoId = ref(''); //滚动到的id
const list = ref([]); //城市列表
const activeId = ref(1); //选中的id
const disPosition = ref(true); //是否显示定位
const errorTipText = ref({
  text: '需要您打开地理位置才能显示当前定位信息',
});
// 当前所在城市
const currentCity = ref({
  cityName: '',
  cityCode: '',
});
const position = ref();
const po_tips = ref('重新定位');
const hotCityList = ref([
  { cityName: '北京', cityCode: '010' },
  { cityName: '上海', cityCode: '021' },
  { cityName: '广州', cityCode: '020' },
  { cityName: '深圳', cityCode: '0755' },
]);
const hotCity = ref([]);
const instance = getCurrentInstance(); //获取当前实例
// 获取元素信息，并用于计算，tab栏和navBar距离顶部的距离
const setList = () => {
  uni
    .createSelectorQuery()
    .in(instance)
    .select('#list')
    .boundingClientRect()
    .exec((ret) => {
      winOffsetY.value = ret[0].top;
      winHeight.value = ret[0].height;
      itemHeight.value = winHeight.value / list.value.length;
    });
};
// touchStart是手指触摸到屏幕触发的事件
const touchStart = (e) => {
  touchmove.value = true;
  let pageY = e.touches[0].pageY;
  let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
  if (list.value[index]) {
    scrollIntoId.value = list.value[index].idx;
  }
};
// touchMove是手指在屏幕上滑动触发的事件
const touchMove = (e) => {
  let pageY = e.touches[0].pageY;
  let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
  if (list.value[index] && list.value[index].idx === scrollIntoId.value) {
    return false;
  }
  if (list.value[index]) {
    scrollIntoId.value = list.value[index].idx;
  }
};
// touchEnd是手指离开屏幕触发的事件
const touchEnd = () => {
  touchmove.value = false;
};

const activeCity = (val) => {
  activeId.value = val.cityCode;
  selectCity(val);
};
onMounted(() => {
  getOpenCityList();
  if (uni.getStorageSync('city')) {
    currentCity.value = uni.getStorageSync('city');
  }
  scrollHeight.value =
    uni.getSystemInfoSync().windowHeight - parseInt(customBar.value) + 'px';
  setList();
});
// 定位
const getWarpWeft = () => {
  po_tips.value = '定位中...';
  // 1. 获取用户授权信息
  wx.getSetting({
    success(res) {
      // 2. 判断用户是否已经授权地理位置
      if (res.authSetting['scope.userLocation']) {
        // 用户已经授权地理位置，直接调用获取地理位置接口
        // 获取定位
        uni.getLocation({
          type: 'gcj02',
          success: function (res) {
            position.value = res;
            getCity(position.value);
            // 延时500毫秒，保证效果，展现出定位中的过程
            setTimeout(() => {
              po_tips.value = '重新定位';
            }, 500);
          },
          fail: function (res) {
            if (res.errMsg.indexOf('wx.onLocationChange') > -1) {
              tostTip('频繁调用会增加电量损耗,请稍后再试');
            } else {
              tostTip('请开启手机的定位相关功能');
            }
            setTimeout(() => {
              po_tips.value = '定位失败';
            }, 500);
            disPosition.value = true;
          },
        });
      } else {
        po_tips.value = '定位失败';
        operate.value.popup.open();
      }
    },
    fail(res) {
      po_tips.value = '定位失败';
    },
  });
};
// 设置定位权限
const setWarpWeft = () => {
  // 打开设置页面
  wx.openSetting({
    success: (res) => {
      if (res.authSetting['scope.userLocation']) {
        getWarpWeft();
      } else {
        disPosition.value = true;
      }
    },
    fail: (fail) => {
      disPosition.value = true;
      po_tips.value = '定位失败';
    },
  });
  operate.value.popup.close();
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
    }
  });
};
// 获取区域配置
const AreaConfig = (val) => {
  const currentCitys = list.value.filter((item) => {
    return item.cityCode == val.cityCode;
  });
  if (currentCitys.length === 0) {
    const cityData = ref(val);
    cityData.value.name = val.province && val.city ? val.city : val.province;
    uni.setStorageSync('city', cityData.value);
    return;
  }
  uni.setStorageSync('city', currentCitys[0]);
  currentCity.value = currentCitys[0];
};
// 获取已开通的城市列表
const getOpenCityList = () => {
  getCityList().then((res) => {
    if (res.data.code === 200) {
      list.value = res.data.data;
      // 对热门城市进行处理,保留已开通的城市
      hotCity.value = hotCityList.value.filter((item) => {
        return list.value.some((city) => {
          return city.cityCode === item.cityCode;
        });
      });
    } else {
      uni.showToast({
        title: res.data.msg,
        icon: 'none',
      });
    }
  });
};
// 选择城市
const selectCity = (city) => {
  if (city.name) {
    currentCity.value.cityName = city.name;
  } else {
    currentCity.value.cityName = city.cityName;
  }
  currentCity.value.cityCode = city.cityCode;
  AreaConfig(currentCity.value);
  uni.navigateBack({
    delta: 1,
  });
};
watch(list, () => {
  setTimeout(() => {
    setList();
  }, 100);
});
</script>

<style scoped src="./index.scss" lang="scss"></style>
