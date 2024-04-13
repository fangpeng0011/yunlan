// 获取年月时、分
export const taskTimeFormat = (val) => {
  const times = getTimeDate(val)
  return times.date
}
// 获取时、分
export const overTimeFormat = (val) => {
  const times = getTimeDate(val)
  return times.times
}
// 时间格式化
export const getTimeDate = (val) => {
  const date = new Date(val);
  date.setTime(date.getTime() + 3600000)
  //年 getFullYear()：四位数字返回年份
  const year = date.getFullYear(); //getFullYear()代替getYear()
  //月 getMonth()：0 ~ 11
  const month = date.getMonth() + 1;
  //日 getDate()：(1 ~ 31)
  const day = date.getDate();
  //时 getHours()：(0 ~ 23)
  const hour = date.getHours();
  //分 getMinutes()： (0 ~ 59)
  const minute = date.getMinutes();
  //秒 getSeconds()：(0 ~ 59)
  const second = date.getSeconds()
  const time = {
    date: addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute),
    times: addZero(hour) + ':' + addZero(minute),
    veryDayDate: addZero(year) + '-' + addZero(month) + '-' + addZero(day) + ' ' + '00' + ':' + '00' + ':' +
      '00',
  }
  return time
}

// 获取处理当前日期，时分秒以00:00:00显示
export const getTate = (val) => {
  let date = new Date(val);
  const year = date.getFullYear(); //getFullYear()代替getYear()
  //月 getMonth()：0 ~ 11
  const month = date.getMonth() + 1;
  //日 getDate()：(1 ~ 31)
  const day = date.getDate();
  const m = addZero(year) + '-' + addZero(month) + '-' + addZero(day) + ' ' + '00' + ':' + '00' + ':' +
    '00';
  return m
}
// 格式化触发的当前时间
export const getNow = (val) => {
  let date = new Date(val);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return m + "月" + d + '日';
}
// 前一天
export const preDay = (date) => {
  let odata = new Date(new Date(date).getTime() - 24 * 60 * 60 * 1000); //计算当前日期 -1
  return getTate(odata)
}
// 后一天
export const nextDay = (date) => {
  let odata = new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000); //计算当前日期 +1
  return getTate(odata)
}

// 获取近30天数据
export const getDay = () => {
  const times = timeList()
  let arr = []
  times.forEach((val) => {
    const obj = getTate(val)
    arr.push(obj)
  })

  return arr
}
// 获取当前日期、当月第一天，当月最后一天的时间戳，用来判断当前触发的时间是不是30天以内的时间
export const getMonthDay = (val) => {
  const now = timeList()
  // // 当天的时间戳
  const timeNow = Date.parse(val);
  // // 当月第一天时间戳
  const timeStar = Date.parse(now[0]);
  // // 当月最后一天时间戳
  const timeEnd = Date.parse(now[now.length - 1]);
  const times = {
    timeNow: timeNow,
    timeStar: timeStar,
    timeEnd: timeEnd
  }
  return times
}
// 文字字节数限制
export const validateTextLength = (value) => {

  // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
  if (value != undefined) {
    let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g
    let mat = value.match(cnReg)
    let length
    if (mat) {
      length = (mat.length + (value.length - mat.length) * 0.5)
      return length
    } else {
      return value.length * 0.5
    }
  }

}
// 选择近30天时间
export const timeList = () => {
  var thrityMonth = [];
  for (var i = 0; i < 30; i++) {
    thrityMonth.unshift(new Date(new Date().setDate(new Date().getDate() - i)).toLocaleDateString())
  }
  return thrityMonth
}
// 拨打电话
export const call = (val) => {
  uni.makePhoneCall({
    phoneNumber: val,
    success (e) {
      // console(e)
    },
    fail (e) {
      // console(e)
    }
  })
}

//功能只展示不实现的提示
export const handleSecondQi = () => {
  uni.showToast({
    title: "程序员哥哥正在实现中",
    icon: "none",
    duration: 1000,
  });
}

export const handleTimeToStrTime = (time) => {
  const newTime = time.replace(/-/g, '/')
  return (new Date(newTime).getMonth() + 1 + '月') +
    (new Date(newTime).getDate() + '日') + ' ' +
    String(Number(new Date(newTime).getHours()) < 10 ? '0' + Number(new Date(newTime).getHours()) : Number(new Date(newTime).getHours())) + ':' +
    String(Number(new Date(newTime).getMinutes()) < 10 ? '0' + Number(new Date(newTime).getMinutes()) : Number(new Date(newTime).getMinutes()))
}

//时间不足两位在前面补0
export const addZero = (s) => {
  return s < 10 ? ('0' + s) : s;
}
// 获取时间段时分00:00
export const getTime = (val) => {
  let date = new Date(val);
  let h = date.getHours();
  let min = date.getMinutes();
  return addZero(h) + ":" + addZero(min);
}
// 获取yyyy.mm.dd 00:00:00
export const getAllTime = (val) => {
  let date = new Date(val);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  return addZero(y) + "." + addZero(m) + "." + addZero(d) + ' ' + addZero(h) + ":" + addZero(min) + ":" + addZero(sec);
}
//获取当前日期到10后的数据
export const getData = () => {
  const dates = {}
  const years = [];

  const months = [];

  const days = [];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let value = []
  for (let i = year; i <= date.getFullYear() + 10; i++) {
    years.push(i);
  }
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  value = [9999, month - 1, day - 1]

  return dates = {
    value: value,
    years: years,
    months: months,
    days: days
  }
}
// 将时分秒转为时间戳
export const timeToSec = (time) => {
  if (time != null) {
    let s = '';
    let hour = time.split(':')[0];
    let min = time.split(':')[1];
    s = Number(hour) * 60 + Number(min);
    return s;
  }

}
// 获取年月日yyyy-mm-dd
export const getTateTime = (time) => {
  const t = time.replace(/\./g, '/');
  return t
}
// 获取年月日时间戳
export const getTateSec = (time) => {
  const times = getTateTime(time)
  const sec = (new Date(times)).getTime()
  return sec
}

export const getTSec = (time) => {
  const timeVal = time.split(".")
  const date = new Date(time);
  const year = timeVal[0];
  const month = timeVal[1];
  const day = timeVal[2];
  return year + '/' + month + '/' + day
}
// 获取年月日时间戳
export const getDsec = (time) => {
  const times = getTSec(time)
  const sec = (new Date(times)).getTime()
  return sec
}
//tost 弹层提示
export const tostTip = (val) => {
  uni.showToast({
    title: val,
    icon: "none",
    background: '#ffaa00',
    duration: 1500,
    position: "bottom"
  });
}
// 钱数自动补充两位小数
export function decimalsReplenish (value) {
  value = typeof value === 'string' ? Number(value) : value
  if (!value) return '0.00'

  value = value.toFixed(2)
  const intPart = Math.trunc(value) // 获取整数部分
  let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  // 去除，分隔符
  if (intPartFormat.indexOf(',') !== -1) {
    intPartFormat = intPartFormat.split(',').join('')
  }
  let floatPart = '.00' // 预定义小数部分
  const value2Array = value.split('.')
  // =2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString() // 拿到小数部分
    if (floatPart.length === 1) {
      return `${intPartFormat}.${floatPart}0`
    }
    return `${intPartFormat}.${floatPart}`
  }
  return intPartFormat + floatPart
}
let times = null
// 时间区间转化
export const formatDuring = (timestamp) => {
  const hours = Math.floor(timestamp / (1000 * 60 * 60));
  const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timestamp % (1000 * 60)) / 1000);

  let result = "";
  if (hours > 0) {
    result += hours + "小时";
  }
  if (minutes > 0) {
    result += minutes + "分";
  }
  if (seconds > 0) {
    result += seconds + "秒";
  }

  return result;
}
// 时间戳转化为时分秒,用：分割
export const formatDuringToTime = (timestamp) => {
  const hours = Math.floor(timestamp / (1000 * 60 * 60));
  const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timestamp % (1000 * 60)) / 1000);

  let result = "";
  if (hours > 9) {
    result += hours + ":";
  }else if (hours < 10 && hours > 0) {
    result += '0' + hours + ":";
  }
  
  if (minutes > 9) {
    result += minutes + ":";
  }else if (minutes < 10 && minutes > 0) {
    result += '0' + minutes + ":";
  }else{
    result += '00' + ":";
  }

  if (seconds > 9) {
    result += seconds;
  }else if(seconds < 10 && seconds > 0){
    result += '0' + seconds;
  }else{
    result += '00';
  }

  return result;
}

// 将时间转化为时分格式
export const formatDateTimeToDateTimeString = (dateTime) => {
  // 检查参数是否是有效的日期格式
  if (!(dateTime instanceof Date)) {
    dateTime = new Date(dateTime);
  }
  // 获取年、月、日、时、分
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');
  const hour = String(dateTime.getHours()).padStart(2, '0');
  const minute = String(dateTime.getMinutes()).padStart(2, '0');
  // 拼接成年月日时分的字符串格式
  const dateTimeString = `${year}-${month}-${day} ${hour}:${minute}`;
  return dateTimeString;
}
// 时间往前或往后推移n个小时
export const laterTime = (time, hour , flag) => {
  const date = new Date(time);
  if(flag === 1){
    const newDate = new Date(date.getTime() - hour * 60 * 60 * 1000);
    return newDate
  }else{
    const newDate = new Date(date.getTime() + hour * 60 * 60 * 1000);
    return newDate
  }
}
// 将时间转化为时分秒格式
export const formatDateTimeToDateTimeStringSecond = (dateTime) => {
  // 检查参数是否是有效的日期格式
  if (!(dateTime instanceof Date)) {
    dateTime = new Date(dateTime);
  }
  // 获取年、月、日、时、分
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');
  const hour = String(dateTime.getHours()).padStart(2, '0');
  const minute = String(dateTime.getMinutes()).padStart(2, '0');
  const second = String(dateTime.getSeconds()).padStart(2, '0');
  // 拼接成年月日时分的字符串格式
  const dateTimeString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  return dateTimeString;
}
// 将时间转化为年月日格式
export const formatDateTimeToDateString = (dateTime) =>{
  // 检查参数是否是有效的日期格式
  if (!(dateTime instanceof Date)) {
    throw new Error('Invalid date format.');
  }
  // 获取年、月、日
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');
  // 拼接成年月日的字符串格式
  const dateString = `${year}-${month}-${day}`;
  return dateString;
}
// 比例折扣转化 
export const convertDiscountPercentageToNumber = (percentage) => {
  // 数字除10，并将整数部分和小数部分分开，小数部分保留一位小数
  const num = Number(percentage);
  const dividedNum = num / 10;

  // 提取整数部分和小数部分
  const integerPart = Math.floor(dividedNum).toFixed(0).replace(/^\s*|\s*$/g, ''); //去除空格
  const decimalPart = (dividedNum - integerPart).toFixed(1).replace(/(\d+)\.(\d+)/, '.$2');
  return {
    integer: integerPart,
    decimal: decimalPart,
  };
};

