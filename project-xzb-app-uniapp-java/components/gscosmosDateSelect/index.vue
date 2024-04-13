<template>
  <view class="mask" v-if="showCalendar" @click.stop="showCalendar = false">
    <view class="calendar" @tap.stop>
      <view class="content" @tap.stop>
        <view class="title">
          <view class="sure"></view>
          <view class="left">{{
            timeType === 'start' ? '开始时间' : '结束时间'
          }}</view>
          <view class="close" @click="cancel"></view>
        </view>
        <picker-view
          :indicator-style="indicatorStyle"
          :value="selectValue"
          @change="bindChange"
        >
          <picker-view-column>
            <view
              class="item"
              v-for="(item, index) in years"
              :key="index"
              :class="selectValue[0] === index ? 'active' : ''"
              >{{ item }}年</view
            >
          </picker-view-column>
          <picker-view-column>
            <view
              class="item"
              v-for="(item, index) in months"
              :key="index"
              :class="selectValue[1] === index ? 'active' : ''"
              >{{ item }}</view
            >
          </picker-view-column>
          <picker-view-column>
            <view
              class="item"
              v-for="(item, index) in days"
              :key="index"
              :class="selectValue[2] === index ? 'active' : ''"
              >{{ item }}</view
            >
          </picker-view-column>
        </picker-view>
        <view class="pageFoot">
          <button @click="confirmFun" class="confirm">确定</button>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref, watch } from 'vue';
import { calendar } from './calendar';
const showCalendar = ref(false);
const type = ref('solar');
const dateInfo = ref({});
const indicatorStyle = `height: ${Math.round(
  uni.getSystemInfoSync().screenWidth / (750 / 60)
)}px;`;
const years = ref([]);
const months = ref([]);
const days = ref([]);
const minYear = 1900; // Define your minYear here
const maxYear = 2100; // Define your maxYear here

// Define the 'emit' function to handle custom events
const emit = defineEmits(['confirm', 'cancel']);

// Define 'defaultValue', 'defaultType', and 'isSwitch' props here
const props = defineProps({
  showCalendar: {
    type: Boolean,
    default: false,
  },
  defaultValue: {
    type: Array,
    default: () => [100, 0, 0],
  },
  defaultType: {
    type: String,
    default: () => 'solar',
  },
  timeType: {
    type: String,
  },
  isSwitch: {
    type: Boolean,
    default: true,
  },
  minYear: {
    type: Number,
    default: 1900,
  },
  maxYear: {
    type: Number,
    default: 2100,
  },
});
const selectValue = ref(props.defaultValue);
watch(
  () => props.showCalendar,
  (newV, oldV) => {
    showCalendar.value = newV;
    getYear();
    getMonth();
    getDay();
  }
);
// Define the calendar object and its methods here
// Make sure to import the calendar object if it's in a separate file

const getYear = () => {
  years.value = [];
  if (type.value === 'solar') {
    for (let i = minYear; i <= maxYear; i++) {
      years.value.push(i);
    }
    getMonth();
    return years;
  }

  if (type.value === 'lunar') {
    for (let i = minYear; i <= maxYear; i++) {
      years.value.push(calendar.toChinaYear(i));
    }
    return years;
  }
};

const getMonth = () => {
  months.value = [];
  if (type.value === 'solar') {
    for (let i = 1; i <= 12; i++) {
      months.value.push(i + '月');
    }
    return months;
  }

  if (type.value === 'lunar') {
    const year = selectValue.value[0] + minYear;
    const leap_month = calendar.leapMonth(year);

    for (let i = 1; i <= 12; i++) {
      months.value.push(calendar.toChinaMonth(i));
      if (i == leap_month) {
        months.value.push('闰' + calendar.toChinaMonth(i));
      }
    }
    return months;
  }
};

const getDay = () => {
  days.value = [];
  let year = selectValue.value[0] + minYear;
  let month = selectValue.value[1] + 1;
  for (let i = 1; i <= calendar.solarDays(year, month); i++) {
    days.value.push(i + '日');
  }
  return days;
};

const bindChange = async (e) => {
  let val = e.detail.value;
  selectValue.value = await val;
  const year = val[0] + minYear;
  const month = val[1] + 1;
  const day = val[2] + 1;
  setSolarDate(year, month, day);
};

const setSolarDate = (y, m, d) => {
  const dt = calendar.solar2lunar(y, m, d);
  dateInfo.value = {
    type: 'solar',
    Animal: dt.Animal,
    astro: dt.astro,
    ncWeek: dt.ncWeek,
    nWeek: dt.nWeek,
    gzYear: dt.gzYear,
    gzMonth: dt.gzMonth,
    gzDay: dt.gzDay,
    IMonthCn: dt.IMonthCn,
    IDayCn: dt.IDayCn,
    festival: dt.festival,
    year: dt.cYear,
    month: dt.cMonth,
    day: dt.cDay,
    solarDate: dt.date,
    lDay: dt.lDay,
    lMonth: dt.lMonth,
    lYear: dt.lYear,
    lunarDate: `${dt.gzYear}年${dt.IMonthCn}${dt.IDayCn}(${dt.date})`,
    lunarDateNumber: dt.lunarDate,
    Term: dt.Term,
    isTerm: dt.isTerm,
    isLeap: dt.isLeap,
    isToday: dt.isToday,
  };
};

// Watch for changes in selectValue
watch(selectValue, (newV, oldV) => {
  getYear();
  getMonth();
  getDay();
});
const cancel = () => {
  emit('cancel');
};

const confirmFun = () => {
  if (Object.keys(dateInfo.value).length === 0) {
    setSolarDate(
      props.defaultValue[0] + 1900,
      props.defaultValue[1] + 1,
      props.defaultValue[2] + 1
    );
  }
  emit('confirm', dateInfo.value);
};
</script>

<style lang="scss" scope>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 750rpx;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}
.u-mask-zoom {
  transform: scale(1, 1);
}
.calendar {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    // height: 100%;
    background-color: #fff;
    border-top-left-radius: 24rpx;
    border-top-right-radius: 24rpx;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 86rpx;
      border-bottom: 2rpx solid #e6e6e6;
      width: 100%;
      justify-content: center;
      // border: 1rpx solid red;
      background-color: #ffffff;
      border-top-left-radius: 24rpx;
      border-top-right-radius: 24rpx;
      /* #ifdef MP-WEIXIN */
      margin-top: 0;
      /* #endif */
      .left {
        font-family: PingFangSC-SNaNpxibold;
        font-weight: 600;
        font-size: 32rpx;
        color: #191919;
        letter-spacing: 0.36rpx;
      }
      .sure {
        color: #eb344a;
        font-size: 30rpx;
        padding: 0 30rpx;
      }
      .close {
        position: absolute;
        right: 30rpx;
        width: 40rpx;
        height: 40rpx;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAt5JREFUWEftmLmKFlEQhb9xQY1EQSMfY0J3BRHBRJ1IMDIwUwNxBxdcMNBYfALBMTVQFB/ATAwEM0FwCQRFceVgFRRNd9+69/+Twb+hYWa4t/rUqeVUzRxL5JlbIjiZAZ12pGaMzhhNMLAM+GNv4vjoEaWc3rS9lhz1O/pIy9N12AEXPct+bAvwBXgR2Mje9XMOag2wFXgDvM7YKzG6HPgFXAAuA7+B08AtoDYV3NY64D6wG/gA7DHnZU/2e58xoDHET4CdwE9gBXAWuG5gB42HLzoIgXwA7Ai2Tpnj7kg1UF3wy8eB22ZcDujvYvZmgtnI5CKwHfgBrATeGQGvSuEvhV5gPa+uAWcMrBjSW2K2j8nvwCrgE3AQeJqJTAZoBHsFOJ9kdoxJ5eaCgRwNeazCTOXKIbGjwsow61GIOdnHZAqkM5UB6mcFQMVzFTg3wKyKTUUnkN2cjEz6udT3s6GPERhjVuDF+HqrbhXOREzWhj567fLXZdYL7BIwD+wL1d3M5CRAPQ26zAq4O6Ez3nM/AodqCqcvF2pD32VWv0vzxeJF+9kFQIXyFjgMPDOhEPimZxKgURA2mAxuCmAF9B5w1ECqY7QOMhPtTLFPPgS2WfvyGcDTIIpCeqzr0t7KaJ/iiDGBlzwKkCTS87mkYMV0aAE6pjgqnAPAZuu1ykmfDSS/NxKzQdNQ0r2U1W7dyyhYkcmW9pTVboVcTCr8fQrWxGw29Fkm3Zna2aDIbAZoBFmj3UMK1jfPFofvElCfgtYCakGazGu0O8tsccErAfVQ3rXG/Q1YbbuOz5OlKajE7F7gUWl4zu5Mj4Fdlkgt2t3HrPfdE8CdsPY0tSfPz/22H2ldPgk8b9DuuCxq3zoGvASOAO+nsTO5h5oxFfqvpTCNlHBMg43AZ7M5laqXkbhzj+7fxS/+O+A2IsujV0vFNDTWJfGMHqv6B0YN0GmAa7YxA9pM3cDFGaP/LaN/AcVo+ytMR6mZAAAAAElFTkSuQmCC);
      }
    }
    picker-view {
      width: 100%;
      height: 650rpx;
      margin-top: 20rpx;
      :deep(.item) {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333333;
        font-size: 32rpx;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }
      .uni-picker-view-wrapper {
        uni-picker-view-column {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333333;
          font-size: 32rpx;
          font-weight: bold;
          .uni-picker-view-group {
            .uni-picker-view-content {
              text-align: center;
              line-height: 110rpx;
              .item {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #333333;
                font-size: 32rpx;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    .bottom {
      height: 110rpx;
      width: calc(100% - 31rpx);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 31rpx;
      background-color: #ffffff;
      .switch {
        background-color: #e6e6e6;
        width: 180rpx;
        height: 70rpx;
        display: flex;
        flex-direction: row;
        border-radius: 35rpx;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .left {
          position: absolute;
          z-index: 1;
          left: 25%;
          font-size: 28rpx;
          transform: translateX(-50%);
        }
        .right {
          color: #333333;
          font-size: 28rpx;
          position: absolute;
          right: 0;
          transform: translateX(-25%);
          color: #333333;
          z-index: 1;
        }
        .bg {
          background-color: #eb344a;
          color: #333333;
          height: 70rpx;
          border-radius: 40rpx;
          width: 90rpx;
          position: absolute;
          // right: 0;
          top: 0;
          z-index: 0;
        }
        .active {
          color: #ffffff;
        }
        .lunar {
          left: 90rpx;
          animation: switchsolar 500ms;
        }
        @keyframes switchsolar {
          0% {
            left: 0;
          }
          100% {
            left: 90rpx;
          }
        }
        .solar {
          left: 0;
          animation: switchlunar 500ms;
        }
        @keyframes switchlunar {
          0% {
            left: 90rpx;
          }
          100% {
            left: 0;
          }
        }
      }
    }
  }
}
.active {
  color: #f74346 !important;
}
.pageFoot {
  background: #ffffff;
  box-shadow: 0 0 12rpx 0 #0000001a;
  width: 100%;
  padding-top: 30rpx;
  padding-bottom: 30rpx;
}
.confirm {
  width: 408rpx;
  height: 88rpx;
  background: #f74346;
  border-radius: 50rpx;
  color: #fff;
}
</style>
