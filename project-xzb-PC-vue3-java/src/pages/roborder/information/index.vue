<!-- 抢单页 -->
<template>
  <div class="base-up-wapper bgTable min-h">
    <!-- 搜索表单区域 -->
    <searchFormBox @handleSearch="handleSearch"></searchFormBox>
    <!-- end -->
    <!-- 表格 -->
    <tableList
      ref="table"
      :list-data="listData"
      @handleClickRob="handleClickRob"
      @fetchData="fetchData"
    ></tableList>
    <!-- end -->
    <!-- 抢单成功/失败弹窗 -->
    <DialogForm
      :visible="visible"
      :isRob="isRob"
      :title="title"
      @handleClose="handleClose"
      @fetchData="fetchData"
    />
    <!-- end -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import searchFormBox from './components/SearchForm.vue' // 搜索框表单
import { getRobOrderList, robOrder } from '@/api/detail'
import tableList from './components/TableList.vue' // 表格
import DialogForm from './components/DialogForm.vue' // 抢单结果弹窗

const title = ref('') // 条转过来的携带数据
const listData = ref([]) // 列表数据
const dataLoading = ref(false) // 列表数据加载loading
const isRob = ref(true) //是否抢单成功
const visible = ref(false) // 抢单结果弹窗
const table = ref(null) // 表格实例
// 请求参数
const requestData = ref({
  keyWord: '',
  maxServeStartTime: '',
  minServeStartTime: '',
  serveDistance: ''
})
// 生命周期
onMounted(() => {
  fetchData(requestData.value)
})
//抢单
const handleClickRob = (val) => {
  robOrder({ id: val }).then((res) => {
    if (res.code === 200) {
      isRob.value = true
      title.value = '抢单成功'
      visible.value = true
    } else if (res.data.code === 608) {
      isRob.value = false
      title.value = res.data.msg
      visible.value = true
    } else {
      MessagePlugin.error(res.data.msg || '抢单失败')
    }
  })
}
// 获取列表数据
const fetchData = async (val) => {
  dataLoading.value = true
  await getRobOrderList({ ...requestData.value, ...val })
    .then((res) => {
      if (res.code === 200) {
        listData.value = res.data.ordersSeizes || []
        dataLoading.value = false
        table.value.isCanFetch()
      }
    })
    .catch((err) => {
      table.value.isCanFetch()
      console.log(err)
    })
}
// 关闭弹窗
const handleClose = () => {
  visible.value = false // 关闭抢单结果弹窗
  fetchData(requestData.value)
}
// 搜索功能
const handleSearch = (val) => {
  requestData.value.keyWord = val.keyWord
  requestData.value.serveDistance = val.serveDistance
  if (val.updateTime.length > 0) {
    requestData.value.minServeStartTime = val.updateTime[0] + ' 00:00:00'
    requestData.value.maxServeStartTime = val.updateTime[1] + ' 23:59:59'
  } else {
    requestData.value.minServeStartTime = null
    requestData.value.maxServeStartTime = null
  }
  fetchData(requestData.value)
}
</script>
<style lang="less" scoped></style>
