import {
  baseUrl,
  notToLoginApiUrl
} from './env'
// 参数： url:请求地址  param：请求参数  method：请求方式 callBack：回调函数
const requestQueue = [];
export function request ({
  url = '/api',
  params = {},
  method = 'GET'
}) {
  // uni.getStorage({
  // 	key: ''
  // })
  // 获取token
  // 请求队列，保存正在进行的请求
  const token = uni.getStorageSync('token')
  let header = {
    // 'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': token
  }
  // 构造请求对象
  const requestConfig = {
    url: baseUrl + url,
    data: params,
    header: header,
    method: method
  };
  // 判断是否有相同的请求正在进行，如果有则返回正在进行的请求
  // const existingRequest = requestQueue.find(
  //   req => JSON.stringify(req.config) === JSON.stringify(requestConfig)
  // );
  // if (existingRequest) {
  //   throw new Warning('请求正在进行中，请勿重复请求！')
  // }

  // // 创建一个延迟函数，用于设置一定时间后从请求队列中移除请求
  // const delayRemove = (requestConfig, delay) => {
  //   setTimeout(() => {
  //     const index = requestQueue.findIndex(req => JSON.stringify(req.config) === JSON.stringify(requestConfig));
  //     if (index !== -1) {
  //       requestQueue.splice(index, 1);
  //     }
  //   }, delay);
  // };
  const requestRes = new Promise((resolve, reject) => {
    uni.request({
      ...requestConfig,
      success: (res) => {
        const {
          data
        } = res
        resolve(res)
        if (data.code == 0 || data.code == 200) {
          resolve(res.data)
        } else if (res.data.code === 605) {
          // 当页面路由不是登录页时，跳转到登录页
          if (getCurrentPages()[getCurrentPages().length - 1].route !== 'pages/login/index') {
                setTimeout(() => {
                  uni.navigateTo({
                    url: `/pages/login/index?isLogin=1&reason=${res.data.msg}`
                  });
                }, 2000)
          }
        } {
          resolve(res.data)
          handleError(res, resolve, url)
        }
      },
      fail: (err) => {
        const error = {
          data: {
            msg: err.data
          }
        }
        console.log(err);
        reject(error)
      }
    })
    // requestQueue.push({ config: requestConfig, promise: requestRes });
    // delayRemove(requestConfig, 1000); // 设置延迟
  })
  const handleError = (error, resolve, url) => {
    var errorCode = error.statusCode;
    if (errorCode == 401) {
      uni.removeStorageSync('token');
      uni.removeStorageSync('nickName')
      if (!notToLoginApiUrl.includes(url)) {
        uni.showToast({
          title: "请先登录",
          icon: "none",
          duration: 10000,
          success: () => {
            setTimeout(() => {
              uni.navigateTo({
                url: '/pages/login/index'
              });
            }, 2000)

          },
          fail: () => {
          }
        });
      }

    } else if (errorCode == 500) {
      if (uni.getStorageSync("token") == "") {
        uni.showToast({
          title: "请先登录",
          icon: "none",
          duration: 2000,
          success: () => {

          },
          fail: () => {

          }
        });
      } else {
        uni.showToast({
          title: error.data.error.message + "",
          icon: "none",
          duration: 10000
        });
      }
    } else {
      resolve(error)
    }
  }
  return requestRes
}
