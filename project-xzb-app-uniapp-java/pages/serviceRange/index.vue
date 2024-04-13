<!-- 服务技能 -->
<template>
  <view class="serviceRange">
    <!-- nav -->
    <UniNav title="请选择工作地点" @goBack="goBack"></UniNav>
    <map
      class="map"
      :markers="[markers.data]"
      :latitude="location.latitude"
      :longitude="location.longitude"
    >
    </map>
    <cover-view class="address">
      <cover-view class="city">
        <cover-view class="label">服务城市</cover-view>
        <cover-view class="content">
          <cover-view class="cityName" @click="handleSelectCity">{{
            cityName
          }}</cover-view>
          <cover-image
            @click="handleSelectCity"
            class="icon"
            src="../../static/new/icon_more@2x.png"
          ></cover-image>
        </cover-view>
      </cover-view>
      <cover-view class="range">
        <cover-view class="label">意向接单范围</cover-view>
        <cover-view class="content">
          <cover-view class="rangeName" @click="handleChooseRange">{{
            address
          }}</cover-view>
          <cover-image
            @click="handleChooseRange"
            class="icon"
            src="../../static/new/icon_more@2x.png"
          ></cover-image>
        </cover-view>
      </cover-view>
      <cover-view class="btn-red">
        <cover-view class="text" @click="handleSubmit">保存</cover-view>
      </cover-view>
    </cover-view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { onShow } from '@dcloudio/uni-app';
import { getSettingInfo, setServiceSetting } from '../api/setting.js';
import { data } from '../../utils/h5Data.js';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const cityName = ref('请选择');
const address = ref('请选择');
const store = useStore(); //vuex获取、储存数据
const users = store.state.user;

const location = reactive({
  latitude: '',
  longitude: '',
});
const markers = reactive({
  data: {
    id: 1,
    latitude: 0,
    longitude: 0,
    iconPath: '/static/new/img_weizhi@2x.png',
    width: 60,
    height: 60,
  },
});
//选择服务城市
const handleSelectCity = () => {
  uni.navigateTo({
    url: '/pages/city/index?address=' + address.value,
  });
};
//选择具体服务范围
const handleChooseRange = () => {
  uni.chooseLocation({
    latitude: location.latitude,
    longitude: location.longitude,
    success: function (res) {
      address.value = res.name;
      location.latitude = res.latitude;
      location.longitude = res.longitude;
      markers.data.latitude = res.latitude;
      markers.data.longitude = res.longitude;
      store.commit('user/setLocation', location);
      store.commit('user/setAddress', address.value);
    },
    fail: function (err) {
      console.log(err, '选择具体服务范围失败');
    },
  });
};
const handleSubmit = () => {
  if (!users.cityCode) {
    return uni.showToast({
      title: '请选择服务城市',
      duration: 1500,
      icon: 'none',
    });
  } else if (!users.address || users.address === '请选择') {
    return uni.showToast({
      title: '请设置意向接单范围',
      duration: 1500,
      icon: 'none',
    });
  }
  uni.showLoading({
    title: 'loading',
    mask: true,
  });
  setServiceSetting({
    cityCode: users.cityCode,
    location:
      String(process.env.VUE_APP_PLATFORM === 'h5' ? users.loacation.longitude : users.location.longitude) +
      ',' +
      String(process.env.VUE_APP_PLATFORM === 'h5' ? users.loacation.latitude : users.location.latitude),
    intentionScope: users.address,
    cityName: users.cityName,
  }).then(() => {
    uni.showToast({
      title: '保存成功',
      duration: 1500,
      icon: 'none',
      success: () => {
        uni.hideLoading();
        goBack();
      },
    });
  });
};
onShow(() => {
  getSettingInfo()
    .then((res) => {
      console.log(process.env.VUE_APP_PLATFORM,'process.env.VUE_APP_PLATFORM')
      //没有设置位置则获取当前位置
      if (!res.data.cityCode) {
        if (process.env.VUE_APP_PLATFORM === 'h5') {
          location.latitude = data.latitude;
          location.longitude = data.longitude;
          markers.data.latitude = data.latitude;
          markers.data.longitude = data.longitude;
          cityName.value = data.city
          address.value = data.address

          store.commit('user/setCityCode', data.cityCode);
          store.commit('user/setCityName', data.city);
          store.commit('user/setAddress', data.address);
          store.commit('user/setLocation', location);
        } else {
          uni.getLocation({
            type: 'gcj02',
            geocode: true,
            success: function (res) {
              location.latitude = res.latitude;
              location.longitude = res.longitude;
              markers.data.latitude = res.latitude;
              markers.data.longitude = res.longitude;
            },
            fail: (err) => {
              location.latitude = 39.909187;
              location.longitude = 116.397455;
              markers.data.latitude = 39.909187;
              markers.data.longitude = 116.397455;
            },
          });
          cityName.value = users.cityName;
        }
      } else {
        store.commit('user/setCityCode', users.cityCode || res.data.cityCode);
        store.commit(
          'user/setCityName',
          users.cityName === '请选择' ? res.data.cityName : users.cityName
        );
        //有位置信息则进行赋值
        cityName.value =
          users.cityName === '请选择' ? res.data.cityName : users.cityName;
        address.value = users.address || res.data.intentionScope;
        address.value = address.value === '请选择' ? res.data.intentionScope : address.value;
        location.latitude = res.data.location.split(',')[1];
        location.longitude = res.data.location.split(',')[0];
        markers.data.latitude = res.data.location.split(',')[1];
        markers.data.longitude = res.data.location.split(',')[0];
        store.commit('user/setLocation', location);
        store.commit('user/setAddress', address.value);
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
});
onMounted(() => {});
const clearStore = () => {
  store.commit('user/setLocation', {});
  store.commit('user/setAddress', '');
  store.commit('user/setCityCode', '');
  store.commit('user/setCityName', '请选择');
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
  // clearStore();
};

</script>
<style src="./index.scss" lang="scss" scoped></style>
