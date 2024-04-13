<!-- 历史订单页 -->
<template>
  <div class="base-up-wapper bgTable min-h">
    <!-- 搜索表单区域 -->
    <searchFormBox
      :history="true"
      :initSearch="initSearch"
      :typeSelect="typeSelect"
      @handleSearch="handleSearch"
      @handleReset="handleReset"
    ></searchFormBox>
    <!-- end -->
    <!-- 表格 -->
    <tableList
      :list-data="listData"
      :pagination="pagination"
      listName="historyList"
      @fetchData="fetchData"
      @onPageChange="onPageChange"
      @handleDetail="handleDetail"
    ></tableList>
    <!-- end -->
    <!-- 订单信息弹窗 -->
    <detailDialog
      :history="true"
      :visible="detailDialogVisible"
      :data="detailData"
      listName="historyList"
      @handleClose="handleClose"
      @handleClickDelete="handleClickDelete"
      @fetchData="fetchData"
    />
    <!-- end -->
    <!-- 删除弹窗 -->
    <Delete
      :title="title"
      :dialog-delete-visible="deleteDialogVisible"
      :delete-text="deleteText"
      @handle-delete="handleDelete"
      @handle-close="handleClose"
    ></Delete>
    <!-- end -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import {
  servicePersonItemSkill,
  serviceOrderAssignHistory,
  serviceOrderAssignHistoryDetail,
  serviceOrderAssignDelete
} from '@/api/service'
import { formatDateTimeToDateString } from '@/utils/date'
import Delete from '@/components/Delete/index.vue' // 删除弹层
import detailDialog from './components/detailDialog.vue' // 订单信息弹窗.
import tableList from './components/TableList.vue' // 表格
import searchFormBox from './components/SearchForm.vue' // 搜索框表单
const visible = ref(false) // 新增，编辑弹窗
const listData = ref([]) // 列表数据
const dataLoading = ref(false) // 列表数据加载loading
const title = ref('新建') // 弹窗标题
const deleteText = ref('是否确定删除该服务单')
const initSearch = ref([
  // new Date(new Date().getFullYear() - 1, 0, 1)转换成年月日格式
  formatDateTimeToDateString(
    new Date(new Date(new Date()).setDate(new Date().getDate() - 181))
  ),
  formatDateTimeToDateString(
    new Date(new Date(new Date()).setDate(new Date().getDate() - 1))
  )
]) // 条转过来的携带数据
const typeSelect = ref([]) // 服务类型下拉框数据
const detailData = ref({}) // 订单信息弹窗数据
const detailDialogVisible = ref(false) // 订单信息弹窗
const deleteDialogVisible = ref(false)
const detailId = ref('') // 订单信息弹窗id
const serviceId = ref('') // 订单信息弹窗服务id
// 分页
const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
const requestData = ref({
  pageNo: 1,
  pageSize: 10,
  maxSortTime: initSearch.value[1] + ' 23:59:59',
  minSortTime: initSearch.value[0] + ' 00:00:00',
  id: null,
  serveItemId: null,
  serveStatus: null
})

// 生命周期
onMounted(() => {
  getServiceTypeSimpleList()
  fetchData(requestData.value)
})
// 搜索功能
const handleSearch = (val) => {
  requestData.value.serveItemId = val.serveItemId
  requestData.value.id = val.id
  requestData.value.serveStatus = val.serveStatus
  if (val.updateTime.length > 0) {
    requestData.value.minSortTime = val.updateTime[0] + ' 00:00:00'
    requestData.value.maxSortTime = val.updateTime[1] + ' 23:59:59'
  } else {
    requestData.value.minSortTime = null
    requestData.value.maxSortTime = null
  }
  fetchData(requestData.value)
}
// 分页

// 重置，清空搜索框
const handleReset = () => {
  // 清空搜索框的全部内容并且重新获取数据
  // 重置页码
  pagination.value.defaultCurrent = 1
  fetchData(requestData.value)
  // 重新渲染table
}
// 获取服务技能下拉框数据
const getServiceTypeSimpleList = async () => {
  await servicePersonItemSkill().then((res) => {
    if (res.code === 200) {
      typeSelect.value = res.data
    } else {
      MessagePlugin.error(res.message)
    }
  })
}
// 获取列表数据
const fetchData = async (val) => {
  dataLoading.value = true
  await serviceOrderAssignHistory(val)
    .then((res) => {
      if (res.code === 200) {
        listData.value = res.data.list
        pagination.value.total = Number(res.data.total)
        dataLoading.value = false
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
// 关闭弹窗
const handleClose = () => {
  visible.value = false // 关闭新增弹窗
  detailDialogVisible.value = false // 关闭订单信息弹窗
  deleteDialogVisible.value = false // 关闭删除订单弹窗
}


// 翻页
const onPageChange = (val) => {
  requestData.value.pageNo = val.defaultCurrent
  requestData.value.pageSize = val.defaultPageSize
  fetchData(requestData.value)
}
// 查看详情
const handleDetail = async (row) => {
  detailId.value = row.id
  await serviceOrderAssignHistoryDetail(detailId.value).then((res) => {
    if (res.code === 200) {
      detailData.value = res.data
      detailDialogVisible.value = true
    } else {
      MessagePlugin.error(res.msg)
    }
  })
}
// 点击删除服务单
const handleClickDelete = (row) => {
  handleClose()
  serviceId.value = row.id
  deleteDialogVisible.value = true
}
// 确认删除服务单
const handleDelete = async () => {
  await serviceOrderAssignDelete(serviceId.value)
    .then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('删除成功')
        handleClose()
        fetchData(requestData.value)
      } else {
        MessagePlugin.error(res.data.msg)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
<style lang="less" scoped>
.min-h {
  min-height: 720px !important;
}
</style>
