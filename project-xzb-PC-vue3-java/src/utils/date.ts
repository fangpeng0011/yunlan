// 获取常用时间
import dayjs from "dayjs";

export const LAST_7_DAYS = [
  dayjs().subtract(7, "day").format("YYYY-MM-DD"),
  dayjs().subtract(1, "day").format("YYYY-MM-DD"),
];

export const LAST_30_DAYS = [
  dayjs().subtract(30, "day").format("YYYY-MM-DD"),
  dayjs().subtract(1, "day").format("YYYY-MM-DD"),
];
// 将时间转化为时分格式
export const formatDateTimeToDateTimeString = (dateTime) =>{
  // 检查参数是否是有效的日期格式
  if (!(dateTime instanceof Date)) {
    throw new Error('Invalid date format.');
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
