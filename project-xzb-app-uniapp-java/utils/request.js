import { baseUrl } from './env'
// 参数： url:请求地址  param：请求参数  method：请求方式 callBack：回调函数
export function request ({ url = "", params = {}, method = "GET" }) {

  // 获取token
  const token = uni.getStorageSync("token");
  let header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: token,
  };
  if (url == '/track/upload') {
    header['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  const requestRes = new Promise((resolve, reject) => {
    console.log(params, baseUrl + url, '进来了么')
    uni.request({
      url: baseUrl + url,
      data: params,
      header: header,
      method: method,
      sslVerify: false
    }).then((res) => {
      console.log(params, url, res, 'header')
      const { data } = res
      if (res.statusCode == 401) {
        uni.showToast({
          title: '您的登录已过期！请重新登录后操作！',
          duration: 2000,
          icon: 'none',
        });
        uni.redirectTo({
          url: '/pages/login/user'
        });
        return false
      }
      //如果账号被冻结则跳转到登录页面，并清除token
      let routes = getCurrentPages()
      if (data.code == 605 && routes[routes.length - 1].route !== 'pages/login/user') {
        // 移除指定 token
        uni.removeStorageSync('token');
        uni.navigateTo({
          url: '/pages/login/user'
        });
      }
      if (data.code == 0 || data.code == 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch((err) => {
      console.log(err, 'errr')
      const error = { data: { msg: err.data } };
      reject(error);
    });
  });
  return requestRes;
}
