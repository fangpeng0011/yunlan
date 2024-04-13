<template>
  <view class="homeFilter" :class="fixTop ? 'fixTop' : ''">
    <view class="leftBox">
      <view class="item" @click="handleClick(0)">抢单大厅</view>
    </view>
    <view class="rightBox" v-if="!status">
      <view class="distance">
        <view class="label">距离筛选</view>
        <view
          class="icon"
          :class="isOpen && type === 'distance' ? 'up' : 'down'"
          @click="handleOpen('distance')"
        ></view>
      </view>
      <view class="serviceType">
        <view class="label">服务类型</view>
        <view
          class="icon"
          :class="isOpen && type === 'serviceType' ? 'up' : 'down'"
          @click="handleOpen('serviceType')"
        ></view
      ></view>
    </view>
    <view class="filterPopup" v-show="isOpen">
      <view class="service">
        <view
          class="serviceItem"
          :class="
            (type === 'distance' ? distanceActive : activeType) === item.id
              ? 'active'
              : ''
          "
          v-for="(item, index) in serviceType.data"
          :key="index"
          @click="handleService(item.id)"
        >
          {{ item.name }}
        </view>
      </view>
      <view class="footer">
        <view class="btn-gray btn" @click="handleReset">重置</view>
        <view class="btn-red btn" @click="handleSubmit">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
const emit = defineEmits(['handleCanScroll', 'getList', 'tabChange']); //子组件向父组件事件传递
// 获取父组件值、方法
const props = defineProps({
  fixTop: {
    type: Boolean,
    default: false,
  },
  homeFilterList: {
    type: Array,
    default: () => [],
  },
});
const type = ref('');
const status = ref(0);
const isOpen = ref(false);
let serviceType = reactive({
  data: [],
});
const activeType = ref(''); //服务类型选中值
const distanceActive = ref(''); //距离筛选选中值
// ------定义方法------
const handleClick = (val) => {
  status.value = val;
  emit('tabChange', status.value, activeType.value);
};
const handleOpen = (val) => {
  isOpen.value = !isOpen.value;
  type.value = val;
  if (val === 'distance') {
    serviceType.data = [
      {
        id: '',
        name: '全部',
      },
      {
        id: 3,
        name: '3公里内',
      },
      {
        id: 5,
        name: '5公里内',
      },
      {
        id: 10,
        name: '10公里内',
      },
      {
        id: 20,
        name: '20公里内',
      },
      {
        id: 50,
        name: '50公里内',
      },
    ];
  } else {
    serviceType.data = [{ id: '', name: '全部' }].concat(props.homeFilterList);
  }
  emit('handleCanScroll', isOpen.value);
};

const handleReset = () => {
  activeType.value = '';
  distanceActive.value = '';
  isOpen.value = false;
  emit('handleCanScroll', isOpen.value);
  emit('tabChange', status.value, activeType.value);
};

const handleService = (val) => {
  if (type.value === 'distance') {
    distanceActive.value = val;
    activeType.value = '';
  } else {
    activeType.value = val;
    distanceActive.value = '';
  }
};
const handleSubmit = () => {
  isOpen.value = false;
  emit('handleCanScroll', isOpen.value);
  emit(
    'tabChange',
    status.value,
    type.value === 'distance' ? distanceActive.value : activeType.value
  );
};
watch(
  () => props.homeFilterList,
  () => {
    serviceType.data = [{ id: '', name: '全部' }].concat(props.homeFilterList);
  }
);
</script>

<style src="../index.scss" lang="scss"></style>
