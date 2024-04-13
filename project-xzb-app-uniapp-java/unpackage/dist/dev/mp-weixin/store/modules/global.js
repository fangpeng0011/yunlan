"use strict";
const global = {
  // 注意：全局模块中不需要开启命名空间
  state: {
    footStatus: 0,
    // 公用footer的激活状态码
    orderActive: 0
    //记录订单页面顶部激活的订单状态
  },
  mutations: {
    // 公用footer的激活码
    setFootStatus(state, provider) {
      state.footStatus = provider;
    },
    setOrderActive(state, provider) {
      state.footStatus = provider;
    }
  },
  actions: {},
  getters: {}
};
exports.global = global;
