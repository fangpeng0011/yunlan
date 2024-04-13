<!-- 订单页 -->
<template>
  <router-view v-if="url !== '/order/orderList'"></router-view>
  <div v-else class="base-up-wapper bgTable min-h">
    <!-- 搜索表单区域 -->
    <searchFormBox
      :typeSelect="typeSelect"
      @handleSearch="handleSearch"
      @handleReset="handleReset"
    ></searchFormBox>
    <!-- end -->
    <!-- 表格 -->
    <tableList
      :list-data="listData"
      :pagination="pagination"
      :tabData="tabData"
      @changeTab="changeTab"
      @handleClickCancel="handleClickCancel"
      @fetchData="fetchData"
      @onPageChange="onPageChange"
      @handleDetail="handleDetail"
      @handleClickRefund="handleClickRefund"
      @handleSortChange="handleSortChange"
      @handleClickPeople="handleClickPeople"
    ></tableList>
    <!-- end -->
    <!-- 开始/结束服务弹窗 -->
    <DialogForm
      :visible="visible"
      :title="title"
      :label="label"
      :data="DialogFormData"
      @handleConfirm="handleConfirm"
      @handleClose="handleClose"
      @fetchData="fetchData"
    />
    <!-- end -->
    <!-- 订单信息弹窗 -->
    <detailDialog
      :visible="detailDialogVisible"
      :data="detailData"
      @handleClose="handleClose"
      @handleClickCancel="handleClickCancel"
      @handleClickDelete="handleClickDelete"
      @handleClickPeople="handleClickPeople"
      @handleClickRefund="handleClickRefund"
      @fetchData="fetchData"
    />
    <!-- end -->
    <!-- 取消订单弹窗 -->
    <cancelDialog
      :visible="cancelDialogVisible"
      :title="title"
      :label="label"
      :data="cancelDialogData"
      :typeSelect="typeSelectData"
      @handleClose="handleClose"
      @fetchData="fetchData"
      @handleConfirmCancel="handleConfirmCancel"
    />
    <!-- end -->
    <!-- 删除弹窗 -->
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
import { ref, onMounted, watchEffect, reactive } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { useRoute } from 'vue-router'
import {
  servicePersonItemSkill,
  serviceOrderList,
  serviceOrderDetail,
  serviceOrderStart,
  serviceOrderEnd,
  serviceOrderCancel,
  servicePersonItemAllList,
  serviceOrderAssign,
  serviceOrderCount,
  serviceOrderAssignDelete
} from '@/api/service'
import { forEach } from 'lodash'
import Delete from '@/components/Delete/index.vue' // 删除弹层
// 基础统计数据
import DialogForm from './components/DialogForm.vue' // 新增,编辑弹窗.
import detailDialog from './components/detailDialog.vue' // 订单信息弹窗.
import tableList from './components/TableList.vue' // 表格
import searchFormBox from './components/SearchForm.vue' // 搜索框表单
import cancelDialog from './components/cancelDialog.vue' // 取消订单弹窗
const route = useRoute()
const visible = ref(false) // 新增，编辑弹窗
const listData = ref([]) // 列表数据
const label = ref('') // 弹窗label
const dataLoading = ref(false) // 列表数据加载loading
const DialogFormData = ref({}) // 弹窗表单内容
const title = ref('新建') // 弹窗标题
const deleteText = ref('是否确定删除该服务单')
const url = ref('') // 当前路由// 条转过来的携带数据
const typeSelect = ref([]) // 服务类型下拉框数据
const detailData = ref({}) // 订单信息弹窗数据
const detailDialogVisible = ref(false) // 订单信息弹窗
const cancelDialogVisible = ref(false) // 取消订单弹窗
const deleteDialogVisible = ref(false) // 删除订单弹窗
const cancelDialogData = ref({}) // 取消订单弹窗数据
const detailId = ref('') // 订单信息弹窗id
const status = ref() // 订单信息弹窗状态
const serviceId = ref('') // 订单信息弹窗服务id
const people = ref(true) //判断是人员分配还是取消订单
const typeSelectData = ref([]) // 人员下拉框数据
// 分页
const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
const requestData = ref({
  isAsc1: false,
  orderBy1: 'serveStartTime',
  pageNo: 1,
  pageSize: 10,
  maxServeStartTime: null,
  minServeStartTime: null,
  id: null,
  serveItemId: null,
  serveStatus: 0
}) // 请求参数
const resetRequestData = ref({
  isAsc1: false,
  orderBy1: 'serveStartTime',
  pageNo: 1,
  pageSize: 10,
  maxServeStartTime: null,
  minServeStartTime: null,
  id: null,
  serveItemId: null,
  serveStatus: 0
})// 重置请求参数，切换tab时使用，不然会出现请求参数累加的情况
const tabData = reactive({
  noServed: '0',
  serving: '0',
  noAllocation: '0'
}) // tab数据
// 生命周期
onMounted(() => {
  fetchData(requestData.value)
})
// 搜索功能
const handleSearch = (val) => {
  requestData.value.serveItemId = val.serveItemId
  requestData.value.id = val.id
  if (val.updateTime.length > 0) {
    requestData.value.minServeStartTime = val.updateTime[0] + ' 00:00:00'
    requestData.value.maxServeStartTime = val.updateTime[1] + ' 23:59:59'
  } else {
    requestData.value.minServeStartTime = null
    requestData.value.maxServeStartTime = null
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
      MessagePlugin.error(res.msg)
    }
  })
}
// 获取列表数据
const fetchData = async (val) => {
  dataLoading.value = true
  await serviceOrderList(val)
    .then((res) => {
      if (res.code === 200) {
        getTabData()
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
  cancelDialogVisible.value = false // 关闭取消订单弹窗
  deleteDialogVisible.value = false // 关闭删除订单弹窗
}
// 点击取消
const handleClickCancel = (row) => {
  handleClose()
  people.value = false
  serviceId.value = row.id
  status.value = row.serveStatus
  cancelDialogVisible.value = true
  title.value = '请填写取消原因'
  label.value = '取消原因：'
}
// 确定取消订单或分配人员
const handleConfirmCancel = async (val) => {
  if (!people.value) {
    await serviceOrderCancel({
      id: serviceId.value,
      cancelReason: val.selectName
    }).then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('取消成功')
        cancelDialogVisible.value = false
        fetchData(requestData.value)
      } else {
        MessagePlugin.error(res.data.msg)
      }
    })
  } else {
    await serviceOrderAssign({
      id: serviceId.value,
      institutionStaffId: val.selectId
    }).then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('分配成功')
        cancelDialogVisible.value = false
        fetchData(requestData.value)
      } else {
        MessagePlugin.error(res.data.msg)
      }
    })
  }
}
// 排序
const handleSortChange = (val) => {
  forEach(val, (item) => {
    if (item.descending === true) {
      requestData.value.isAsc1 = false
    } else {
      requestData.value.isAsc1 = true
    }
  })
  fetchData(requestData.value)
}
// 打开服务弹窗
const handleClickRefund = (row) => {
  handleClose()
  serviceId.value = row.id
  visible.value = true
  status.value = row.serveStatus
  if (row.serveStatus === 1) {
    title.value = '上传服务前信息'
    label.value = '服务前照片：'
  } else {
    title.value = '上传服务后信息'
    label.value = '服务后照片：'
  }
}
// 确定上传服务前和服务后信息
const handleConfirm = async (val) => {
  const img = val.certificationImgs.map((item) => {
    return item.url
  })
  if (status.value === 1) {
    await serviceOrderStart({
      id: serviceId.value,
      serveBeforeIllustrate: val.description,
      serveBeforeImgs: img
    }).then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('上传成功')
        visible.value = false
        fetchData(requestData.value)
      } else {
        MessagePlugin.error(res.msg)
      }
    })
  } else {
    await serviceOrderEnd({
      id: serviceId.value,
      serveAfterIllustrate: val.description,
      serveAfterImgs: img
    }).then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('上传成功')
        visible.value = false
        fetchData(requestData.value)
      } else {
        MessagePlugin.error(res.msg)
      }
    })
  }
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
  await serviceOrderDetail(detailId.value).then((res) => {
    if (res.code === 200) {
      detailData.value = res.data
      detailDialogVisible.value = true
    } else {
      MessagePlugin.error(res.msg)
    }
  })
}
// 点击分配人员
const handleClickPeople = (row) => {
  handleClose()
  people.value = true
  cancelDialogVisible.value = true
  serviceId.value = row.id
  status.value = row.serveStatus
  title.value = '选择服务人员'
  label.value = '服务人员姓名：'
}
// 获取列表数据
const fetchSimpleListData = async () => {
  await servicePersonItemAllList()
    .then((res) => {
      if (res.code === 200) {
        typeSelectData.value = res.data
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
// 获取订单各状态数量
const getTabData = async () => {
  await serviceOrderCount()
    .then((res) => {
      if (res.code === 200) {
        tabData.noAllocation = res.data.noAllocation
        tabData.noServed = res.data.noServed
        tabData.serving = res.data.serving
      }
    })
    .catch((err) => {
      console.log(err)
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
// 监听，获取初始值，切换到子页面A
watchEffect(() => {
  if (route.path === 'order/orderList') {
    url.value = 'order/orderList'
    fetchSimpleListData()
    getServiceTypeSimpleList()
    fetchData(requestData.value)
  } else {
    url.value = route.path
    fetchSimpleListData()
    getServiceTypeSimpleList()
    fetchData(requestData.value)
  }
})
// 切换tab时请求接口
const changeTab = (val, Asc) => {
  // 重置pagination
  pagination.value = {
    defaultCurrent: 1,
    defaultPageSize: 10,
    total: 0
  }
  requestData.value = JSON.parse(JSON.stringify(resetRequestData.value))
  requestData.value.serveStatus = val
  requestData.value.orderBy1 = Asc
  fetchData(requestData.value)
}
</script>
<style lang="less" scoped>
.min-h {
  min-height: 720px !important;
}
</style>
