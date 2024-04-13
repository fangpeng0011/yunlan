// 将时间转化为时分格式
export const formatDateTimeToDateTimeString = (dateTime) => {
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