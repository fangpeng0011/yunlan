"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "index",
  props: {
    // 是否显示
    hour: {
      type: Number,
      default: 0
    }
  },
  emits: ["@getTime"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const popup = common_vendor.ref();
    let scrollTop = common_vendor.ref(0);
    let scrollTopTime = common_vendor.ref(0);
    let selectedDay = common_vendor.ref(0);
    let selectedDayLabel = common_vendor.ref("");
    let selectedTime = common_vendor.ref();
    let selectedTimeLabel = common_vendor.ref();
    const scrollIntoViewDay = common_vendor.ref("Day0");
    const scrollIntoViewTime = common_vendor.ref("");
    const selectDay = common_vendor.ref([]);
    let todayList = common_vendor.reactive({
      todos: []
    });
    const dateList = common_vendor.reactive(
      // 弹窗中的时间列表,24小时制,每半小时一个选项
      Array.from(
        {
          length: 48
        },
        (v, i) => {
          let hour = Math.floor(i / 2);
          let minute = i % 2 === 0 ? "00" : "30";
          return {
            label: `${hour}:${minute}`,
            value: i
          };
        }
      )
    );
    const getTime = () => {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        let date = /* @__PURE__ */ new Date();
        date.setDate(date.getDate() + i);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        arr.push(`${year}-${month}-${day}`);
      }
      selectDay.value = arr;
      if (!selectedDay.value) {
        selectedDayLabel.value = selectDay.value[0];
      }
    };
    const scroll = (e) => {
      scrollTop.value = e.detail.scrollTop;
    };
    const scrollTime = (e) => {
      scrollTopTime.value = e.detail.scrollTop;
    };
    const handleSelectTime = (index, item) => {
      selectedTime.value = index;
      selectedTimeLabel.value = item;
      popup.value.close("bottom");
      emits("getTime", {
        selectedDay: selectedDay.value,
        selectedDayLabel: selectedDayLabel.value,
        selectedTime: selectedTime.value,
        selectedTimeLabel: selectedTimeLabel.value
      });
    };
    const handleSelectDay = (index, item) => {
      selectedDay.value = index;
      selectedTime.value = 0;
      selectedDayLabel.value = item;
    };
    const handleOpen = () => {
      popup.value.open("bottom");
      scrollIntoViewTime.value = `Time${selectedTime.value}`;
      scrollIntoViewDay.value = `Day${selectedDay.value}`;
      getTime();
    };
    const handleCancel = () => {
      popup.value.close("bottom");
    };
    common_vendor.watch(
      () => selectedDay.value,
      () => {
        selectedTimeLabel.value = selectedDay.value === 0 ? todayList.todos[0].label : dateList[0].label;
        scrollTopTime.value = 0;
      }
    );
    common_vendor.watch(
      () => props.hour,
      () => {
        let hour = props.hour;
        let halfHour = (/* @__PURE__ */ new Date()).getMinutes() > 30 ? 0.5 : 0;
        hour += halfHour;
        todayList.todos = [
          ...todayList.todos.concat(
            dateList.filter((item) => item.value / 2 >= hour + 2)
          )
        ];
        selectedTime.value = todayList.todos[0].value;
        selectedTimeLabel.value = todayList.todos[0].label;
      }
    );
    const handleConfirm = () => {
      popup.value.close("bottom");
      emits("getTime", {
        selectedDay: selectedDay.value,
        selectedDayLabel: selectedDayLabel.value,
        selectedTime: selectedTime.value,
        selectedTimeLabel: selectedTimeLabel.value
      });
    };
    expose({
      handleOpen
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleCancel),
        b: common_vendor.o(handleConfirm),
        c: common_vendor.f(selectDay.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(common_vendor.unref(selectedDay) === index ? "active" : ""),
            c: common_vendor.o(($event) => handleSelectDay(index, item), index),
            d: index,
            e: `Day${index}`
          };
        }),
        d: common_vendor.unref(scrollTop),
        e: common_vendor.o(scroll),
        f: scrollIntoViewDay.value,
        g: common_vendor.f(common_vendor.unref(selectedDay) === 0 ? common_vendor.unref(todayList).todos : dateList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(common_vendor.unref(selectedTime) === item.value ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => handleSelectTime(item.value, item.label), index),
            e: `Time${item.value}`
          };
        }),
        h: common_vendor.unref(scrollTopTime),
        i: common_vendor.o(scrollTime),
        j: scrollIntoViewTime.value,
        k: common_vendor.sr(popup, "0b5be12f-0", {
          "k": "popup"
        }),
        l: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false,
          ["mask-background-color"]: "rgba(0,0,0,0.6)"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0b5be12f"], ["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/components/GetTimePicker/index.vue"]]);
wx.createComponent(Component);
