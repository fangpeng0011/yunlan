<!-- 选择省市区弹窗 -->
<template>
  <view class="selectArea">
    <uni-popup ref="popup" type="bottom" mask-background-color="rgba(0,0,0,0.6)">
      <view class="header">
        <view class="line">
          <view class="header-title">选择省市区</view>
          <view class="close" @click="handleCancel"></view>
        </view>
      </view>
      <!-- 省市区三级联动 -->
      <view class="province-city-area">
        <view class="label-box">
          <view class="label">省份</view>
          <view class="label">城市</view>
          <view class="label">区县</view>
        </view>
        <picker-view
          :value="areaIndex.data"
          indicator-class="picker-view-indicator"
          @change="bindChange"
          @pickstart="handlePickStart"
          mask-class="picker-view-mask"
          class="picker-view"
        >
          <picker-view-column>
            <view
              :class="[
                'item',
                index === areaIndex.data[0] ? 'activeAddress' : '',
              ]"
              v-for="(item, index) in province.data"
              :key="index"
              >{{ item.label }}</view
            >
          </picker-view-column>
          <picker-view-column>
            <view
              :class="[
                'item',
                index === areaIndex.data[1] ? 'activeAddress' : '',
              ]"
              v-for="(item, index) in city.data"
              :key="index"
              >{{ item.label }}</view
            >
          </picker-view-column>
          <picker-view-column>
            <view
              :class="[
                'item',
                index === areaIndex.data[2] ? 'activeAddress' : '',
              ]"
              v-for="(item, index) in area.data"
              :key="index"
              >{{ item.label }}</view
            >
          </picker-view-column>
        </picker-view>
      </view>
      <!-- 底部 -->
      <view class="footer">
        <view class="btn" @click="confirm">确定</view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { defineProps, defineEmits, defineExpose } from 'vue';
import { provinceData } from '../../../utils/address/province';
import { cityData } from '../../../utils/address/city.js';
import { areaData } from '../../../utils/address/area.js';
const emits = defineEmits(['@getAreaData']);
const popup = ref();
let props = defineProps({
  provinceName: {
    type: String,
    default: '',
  },
  cityName: {
    type: String,
    default: '',
  },
  countyName: {
    type: String,
    default: '',
  },
});
//省数据
const province = reactive({
  // data的值是一个数组，为provinceData中的数据
  data: provinceData,
});
let selectedProvince = reactive({
  data: {
    label: '北京',
    value: '11',
  },
});
//市数据
const city = reactive({
  data: [],
});
let selectedCity = reactive({
  data: {
    label: '北京市',
    value: '1101',
  },
});
//区域数据
const area = reactive({
  data: [],
});
let selectedArea = reactive({
  data: {
    label: '东城区',
    value: '110101',
  },
});
//记录三级联动每项的index以及默认展示
let areaIndex = reactive({
  data: [0, 0, 0],
});

//区分热门城市点击还是滑动三级组件
let chooseType = ref('select');

// 监听后台获取的详情
watch(props, (newValue) => {
  // 获取符合条件的省市区的index，下标
  areaIndex.data[0] = provinceData?.findIndex((item) => {
    return item.label == newValue.provinceName;
  });
  areaIndex.data[1] = cityData[areaIndex.data[0]].findIndex((item) => {
    return item.label == newValue.cityName;
  });
  areaIndex.data[2] = areaData[areaIndex.data[0]][areaIndex.data[1]].findIndex(
    (item) => {
      return item.label == newValue.countyName;
    }
  );
  city.data = cityData[areaIndex.data[0]];
  area.data = areaData[areaIndex.data[0]][areaIndex.data[1]];
});
const getList = () => {
  city.data = cityData[areaIndex.data[0]];
  area.data = areaData[areaIndex.data[0]][areaIndex.data[1]];
};

//获取省市区

const handlePickStart = () => {
  chooseType.value = 'select';
};

//选择省市区
const bindChange = (event) => {
  if (chooseType.value === 'click') return;
  //二级地址获取
  if (areaIndex.data[0] !== event.detail.value[0]) {
    city.data = cityData[event.detail.value[0]];
    area.data = areaData[event.detail.value[0]][event.detail.value[1]];
    selectedProvince.data = province.data[event.detail.value[0]];
    event.detail.value[1] = 0;
    event.detail.value[2] = 0;
    selectedCity.data = city.data[event.detail.value[1]];
    selectedArea.data = area.data[event.detail.value[2]];
  } else if (areaIndex.data[1] !== event.detail.value[1]) {
    area.data = areaData[event.detail.value[0]][event.detail.value[1]];
    event.detail.value[2] = 0;
    selectedCity.data = city.data[event.detail.value[1]];
    selectedArea.data = area.data[event.detail.value[2]];
  } else {
    selectedArea.data = area.data[event.detail.value[2]];
  }
  areaIndex.data = event.detail.value;
};

// 打开弹层
const handleOpen = () => {
  popup.value.open('bottom');
};
// 关闭弹层
const handleCancel = () => {
  popup.value.close('bottom');
};

//确认选择省市区
const confirm = () => {
  handleCancel();
  emits('getAreaData', {
    province: selectedProvince.data,
    city: selectedCity.data,
    area: selectedArea.data,
  });
};
// 暴漏给父组件
defineExpose({
  handleOpen,
  getList,
});
</script>

<style src="./selectArea.scss" lang="scss" scoped></style>
