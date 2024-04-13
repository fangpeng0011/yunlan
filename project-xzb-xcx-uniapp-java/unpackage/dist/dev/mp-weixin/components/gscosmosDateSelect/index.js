"use strict";
const common_vendor = require("../../common/vendor.js");
const components_gscosmosDateSelect_calendar = require("./calendar.js");
const _sfc_main = {
  __name: "index",
  props: {
    showCalendar: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: Array,
      default: () => [100, 0, 0]
    },
    defaultType: {
      type: String,
      default: () => "solar"
    },
    timeType: {
      type: String
    },
    isSwitch: {
      type: Boolean,
      default: true
    },
    minYear: {
      type: Number,
      default: 1900
    },
    maxYear: {
      type: Number,
      default: 2100
    }
  },
  emits: ["confirm", "cancel"],
  setup(__props, { emit }) {
    const props = __props;
    const showCalendar = common_vendor.ref(false);
    const type = common_vendor.ref("solar");
    const dateInfo = common_vendor.ref({});
    const indicatorStyle = `height: ${Math.round(
      common_vendor.index.getSystemInfoSync().screenWidth / (750 / 60)
    )}px;`;
    const years = common_vendor.ref([]);
    const months = common_vendor.ref([]);
    const days = common_vendor.ref([]);
    const minYear = 1900;
    const maxYear = 2100;
    const selectValue = common_vendor.ref(props.defaultValue);
    common_vendor.watch(
      () => props.showCalendar,
      (newV, oldV) => {
        showCalendar.value = newV;
        getYear();
        getMonth();
        getDay();
      }
    );
    const getYear = () => {
      years.value = [];
      if (type.value === "solar") {
        for (let i = minYear; i <= maxYear; i++) {
          years.value.push(i);
        }
        getMonth();
        return years;
      }
      if (type.value === "lunar") {
        for (let i = minYear; i <= maxYear; i++) {
          years.value.push(components_gscosmosDateSelect_calendar.calendar.toChinaYear(i));
        }
        return years;
      }
    };
    const getMonth = () => {
      months.value = [];
      if (type.value === "solar") {
        for (let i = 1; i <= 12; i++) {
          months.value.push(i + "月");
        }
        return months;
      }
      if (type.value === "lunar") {
        const year = selectValue.value[0] + minYear;
        const leap_month = components_gscosmosDateSelect_calendar.calendar.leapMonth(year);
        for (let i = 1; i <= 12; i++) {
          months.value.push(components_gscosmosDateSelect_calendar.calendar.toChinaMonth(i));
          if (i == leap_month) {
            months.value.push("闰" + components_gscosmosDateSelect_calendar.calendar.toChinaMonth(i));
          }
        }
        return months;
      }
    };
    const getDay = () => {
      days.value = [];
      let year = selectValue.value[0] + minYear;
      let month = selectValue.value[1] + 1;
      for (let i = 1; i <= components_gscosmosDateSelect_calendar.calendar.solarDays(year, month); i++) {
        days.value.push(i + "日");
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
      const dt = components_gscosmosDateSelect_calendar.calendar.solar2lunar(y, m, d);
      dateInfo.value = {
        type: "solar",
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
        isToday: dt.isToday
      };
    };
    common_vendor.watch(selectValue, (newV, oldV) => {
      getYear();
      getMonth();
      getDay();
    });
    const cancel = () => {
      emit("cancel");
    };
    const confirmFun = () => {
      if (Object.keys(dateInfo.value).length === 0) {
        setSolarDate(props.defaultValue[0] + 1900, props.defaultValue[1] + 1, props.defaultValue[2] + 1);
      }
      emit("confirm", dateInfo.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showCalendar.value
      }, showCalendar.value ? {
        b: common_vendor.t(__props.timeType === "start" ? "开始时间" : "结束时间"),
        c: common_vendor.o(cancel),
        d: common_vendor.f(years.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.n(selectValue.value[0] === index ? "active" : "")
          };
        }),
        e: common_vendor.f(months.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.n(selectValue.value[1] === index ? "active" : "")
          };
        }),
        f: common_vendor.f(days.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.n(selectValue.value[2] === index ? "active" : "")
          };
        }),
        g: indicatorStyle,
        h: selectValue.value,
        i: common_vendor.o(bindChange),
        j: common_vendor.o(confirmFun),
        k: common_vendor.o(() => {
        }),
        l: common_vendor.o(() => {
        }),
        m: common_vendor.o(($event) => showCalendar.value = false)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/项目/小智帮/project-xzb-yonghuduan-uniapp-vue3/components/gscosmosDateSelect/index.vue"]]);
wx.createComponent(Component);
