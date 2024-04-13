// 用户信息模块(局部模块)
export default {
  namespaced: true, // 开启命名空间
  state () {
    return {
      location: {},//服务范围坐标
      address: '请选择',//服务范围详细地址
      cityCode: '',//服务范围城市编码
      cityName: '请选择',//服务范围城市名称
      tabIndex: 0, //储存当前触发的tab值
      keyBoardHeight: 0,//记录键盘高度
      canPickUp: true,//是否开启接单
      first: true,//是否第一次进入
      userBase: {}, // 用户信息
      pages: 0,//总页数
      page: 1, //当前页码
      token: '', //token
      taskId: '', //任务id
      detailsData: {},//任务详情
      taskType: 1, //当前进入的是取件详情还是派件详情  1取件，2派件
      taskStatus: 0,//已取件\已取消\去派件\已签收状态
      detailType: 0,//历史订单或者已经取件的详情页

      orderTime: null,//时间筛选值
      filterOverTime: null,//超时值
      deliveryData: [],//待取件数据储存
      cancelData: [],//已取件数据储存
      isDelivery: false,//是否跳转派件页面
      isSearch: false,//是否从搜索页进的详情页
    }
  },
  mutations: {
    setKeyServiceType (state, provider) {
      state.serviceType = provider;
    },
    setKeyDistance (state, provider) {
      state.distance = provider;
    },
    setKeyCanPickUp (state, provider) {
      state.canPickUp = provider;
    },
    setKeyBoardHeight (state, provider) {
      state.keyBoardHeight = provider;
    },
    // 定义mutations，用于同步修改状态
    setLocation (state, provider) {
      state.location = provider
    },
    setAddress (state, provider) {
      state.address = provider
    },
    setCityCode (state, provider) {
      state.cityCode = provider
    },
    setCityName (state, provider) {
      state.cityName = provider
    },
    setFirst (state, provider) {
      state.first = provider
    },
    // 设置token
    setToken (state, provider) {
      state.token = provider;
    },
    // 设置用户信息
    setUserInfo (state, provider) {
      state.userBase = provider;
    },
    // 设置经纬度
    setlLacation (state, provider) {
      state.loacation = provider;
    },
    // 设置当前页数
    setPage (state, provider) {
      state.page = provider;
    },

    // 设置总页数
    setPages (state, provider) {
      state.pages = provider;
    },
    // 设置时间筛选值
    setOrderTime (state, provider) {
      state.orderTime = provider;
    },
    // 设置超时筛选值
    setFilterOverTime (state, provider) {
      state.filterOverTime = provider;
    },
    // 设置待取件数据储存
    setDeliveryData (state, provider) {
      state.deliveryData = provider;
    },
    // 设置取消数据储存
    setCancelData (state, provider) {
      state.cancelData = provider;
    },
    // 设置任务id，方便其他页面用
    setTaskId (state, provider) {
      state.taskId = provider;
    },
    // 
    setTaskType (state, provider) {
      state.taskType = provider;
    },
    // 设置消息触发的当前tab值
    setTabIndex (state, provider) {
      state.tabIndex = provider;
    },
    // 设置已取件\已取消\去派件\已签收状态
    setTaskStatus (state, provider) {
      state.taskStatus = provider;
    },
    // 设置任务详情
    setDetailsData (state, provider) {
      state.detailsData = provider;
    },
    // 历史订单或者已经取件的详情页
    setDetailType (state, provider) {
      state.detailType = provider;
    },
    setIsDelivery (state, provider) {
      state.isDelivery = provider;
    },
    // 设置是否由搜索页进的详情页，方便详情页返回
    setIsSearch (state, provider) {
      state.isSearch = provider;
    },
  },
  actions: {

  },
  getters: {

  }
}
