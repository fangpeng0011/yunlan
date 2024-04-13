<!-- 期待上门时间弹窗 -->
<template>
  <view class="getTimePicker">
    <uni-popup
      ref="popup"
      type="bottom"
      :safe-area="false"
      mask-background-color="rgba(0,0,0,0.6)"
    >
      <view class="header">
        <view class="remove" @click="handleCancel">取消</view>
        <view class="confirm" @click="handleConfirm">确认</view>
      </view>
      <!-- 时间选择区域 -->
      <view class="time-select">
        <view class="select-day">
          <scroll-view
            scroll-y
            :scroll-top="scrollTop"
            @scroll="scroll"
            :scroll-into-view="scrollIntoViewDay"
          >
            <view
              :class="selectedDay === index ? 'active' : ''"
              class="select-day-item"
              @click="handleSelectDay(index, item)"
              v-for="(item, index) in selectDay"
              :key="index"
              :id="`Day${index}`"
            >
              {{ item }}
            </view>
          </scroll-view>
        </view>
        <view class="select-time">
          <scroll-view
            scroll-y
            :scroll-top="scrollTopTime"
            @scroll="scrollTime"
            :scroll-into-view="scrollIntoViewTime"
          >
            <view
              :class="selectedTime === item.value ? 'active' : ''"
              class="time-item"
              v-for="(item, index) in selectedDay === 0
                ? todayList.todos
                : dateList"
              :key="index"
              @click="handleSelectTime(item.value, item.label)"
              :id="`Time${item.value}`"
            >
              <view class="time-value">{{ item.label }}</view>
            </view>
          </scroll-view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
const emits = defineEmits(['@getTime']);

const props = defineProps({
  // 是否显示
  hour: {
    type: Number,
    default: 0,
  },
});
const popup = ref();
let scrollTop = ref(0); //顶部位置
let scrollTopTime = ref(0); //顶部位置
let selectedDay = ref(0); //选中的日期的value
let selectedDayLabel = ref(''); //选中的日期的标签名
let selectedTime = ref();
let selectedTimeLabel = ref();
const scrollIntoViewDay = ref('Day0');
const scrollIntoViewTime = ref('');
const selectDay = ref([]);
let todayList = reactive({
  todos: [
  ],
});
// 列表中的时间段
const dateList = reactive(
  // 弹窗中的时间列表,24小时制,每半小时一个选项
  Array.from(
    {
      length: 48,
    },
    (v, i) => {
      let hour = Math.floor(i / 2);
      let minute = i % 2 === 0 ? '00' : '30';
      return {
        label: `${hour}:${minute}`,
        value: i,
      };
    }
  )
);
// 拼接获取近七天的日期
const getTime = () => {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    // 自动补零
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    arr.push(`${year}-${month}-${day}`);
  }
  selectDay.value = arr;
  if (!selectedDay.value) {
    selectedDayLabel.value = selectDay.value[0];
  }
};
// 滚动时触发
const scroll = (e) => {
  scrollTop.value = e.detail.scrollTop;
};
// 滚动时触发
const scrollTime = (e) => {
  scrollTopTime.value = e.detail.scrollTop;
};
//选择具体时间段
const handleSelectTime = (index, item) => {
  selectedTime.value = index;
  selectedTimeLabel.value = item;
  popup.value.close('bottom');
  emits('getTime', {
    selectedDay: selectedDay.value,
    selectedDayLabel: selectedDayLabel.value,
    selectedTime: selectedTime.value,
    selectedTimeLabel: selectedTimeLabel.value,
  });
};
//选择哪天
const handleSelectDay = (index, item) => {
  selectedDay.value = index;
  selectedTime.value = 0;
  selectedDayLabel.value = item;
};
// 打开弹层
const handleOpen = () => {
  popup.value.open('bottom');
  scrollIntoViewTime.value = `Time${selectedTime.value}`;
  scrollIntoViewDay.value = `Day${selectedDay.value}`;
  getTime();
};
// 关闭弹层
const handleCancel = () => {
  popup.value.close('bottom');
};
// 切换日期时,默认选中第一个时间段
watch(
  () => selectedDay.value,
  () => {
    selectedTimeLabel.value =
      selectedDay.value === 0 ? todayList.todos[0].label : dateList[0].label;
    // 时间滚动到顶部
    scrollTopTime.value = 0;
  }
);
// 打开弹层时,默认选中第一个时间段
watch(
  () => props.hour,
  () => {
    let hour = props.hour;
    let halfHour = new Date().getMinutes() > 30 ? 0.5 : 0;
    hour += halfHour;
    todayList.todos = [
      ...todayList.todos.concat(
        dateList.filter((item) => item.value / 2 >= hour + 2)
      ),
    ];
    selectedTime.value = todayList.todos[0].value;
    selectedTimeLabel.value = todayList.todos[0].label;
  }
);
// 确认提交
const handleConfirm = () => {
  popup.value.close('bottom');

  emits('getTime', {
    selectedDay: selectedDay.value,
    selectedDayLabel: selectedDayLabel.value,
    selectedTime: selectedTime.value,
    selectedTimeLabel: selectedTimeLabel.value,
  });
};
// 暴漏给父组件
defineExpose({
  handleOpen,
});
</script>

<style lang="scss" scoped src="./index.scss"></style>
