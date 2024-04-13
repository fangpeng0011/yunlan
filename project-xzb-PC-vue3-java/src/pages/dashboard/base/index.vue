<!-- 首页 -->
<template>
  <div class="container home-wrapper">
    <!-- 顶部 card  -->
    <top-panel class="row-container" />
    <!-- 中部图表  -->
    <middle-chart class="row-container" />
    <!-- 订单信息 -->
    <div class="orderInfo">
      <div class="title">
        <div class="head">订单信息</div>
        <switchBar :data="tableBar" @changeId="changeId"></switchBar>
      </div>
      <tableList
        :list-data="listData"
        :pagination="pagination"
        listName="base"
        :COLUMNS="COLUMNS"
        :sort="sort"
        @handleClickCancel="handleClickCancel"
        @fetchData="fetchData"
        @onPageChange="onPageChange"
        @handleDetail="handleDetail"
        @handleClickRefund="handleClickRefund"
        @handleSortChange="handleSortChange"
        @handleClickPeople="handleClickPeople"
      ></tableList>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import TopPanel from './components/TopPanel.vue' // 顶部卡片
import MiddleChart from './components/MiddleChart.vue' // 中部图表
import { MessagePlugin } from 'tdesign-vue-next'
import {
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
import {
  allocationCOLUMNS,
  doorCOLUMNS,
  successCOLUMNS
} from '@/pages/order/orderList/constants' // 表格头部
// 基础统计数据
import switchBar from '@/components/switchBar/switchBar.vue' // 切换tab
import DialogForm from '@/pages/order/orderList/components/DialogForm.vue' // 新增,编辑弹窗.
import detailDialog from '@/pages/order/orderList/components/detailDialog.vue' // 订单信息弹窗.
import tableList from '@/pages/order/orderList/components/TableList.vue' // 表格
import cancelDialog from '@/pages/order/orderList/components/cancelDialog.vue'
const visible = ref(false) // 新增，编辑弹窗
const listData = ref([]) // 列表数据
const label = ref('') // 弹窗label
const dataLoading = ref(false) // 列表数据加载loading
const DialogFormData = ref({}) // 弹窗表单内容
const title = ref('新建') // 弹窗标题
const detailData = ref({}) // 订单信息弹窗数据
const detailDialogVisible = ref(false) // 订单信息弹窗
const cancelDialogVisible = ref(false) // 取消订单弹窗
const deleteDialogVisible = ref(false) // 删除订单弹窗
const cancelDialogData = ref({}) // 取消订单弹窗数
const detailId = ref('') // 订单信息弹窗id
const status = ref() // 订单信息弹窗状态
const serviceId = ref('') // 订单信息弹窗服务id
const people = ref(true) //判断是人员分配还是取消订单
const typeSelectData = ref([]) // 人员下拉框数据
const COLUMNS = ref()
// 排序
const sort = ref([
  {
    sortBy: 'serveStartTime'
  }
]) // 排序
// 分页
const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
// 请求参数
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
})
// 重置请求参数
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
})
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
  // 取消订单
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
    // 分配人员
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
  // 上传服务前信息
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
    // 上传服务后信息
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
  // 获取订单详情
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
// 获取可用服务人员列表，下拉框数据，以供选择服务人员
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
        tableBar.value[0].value = res.data.noAllocation
        tableBar.value[1].value = res.data.noServed
        tableBar.value[2].value = res.data.serving
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  fetchSimpleListData()
  fetchData(requestData.value)
})
// tab数据
const tableBar = ref([
  {
    name: '待分配',
    id: '0',
    value: null
  },
  {
    name: '待上门',
    id: '1',
    value: null
  },
  {
    name: '待完工',
    id: '2',
    value: null
  }
])
// 切换tab
const changeId = (val: number) => {
  if (val == 0) {
    COLUMNS.value = []
    COLUMNS.value = allocationCOLUMNS
    sort.value = [
      {
        sortBy: 'serveStartTime'
      }
    ]
    changeTab(val, 'serveStartTime')
  } else if (val == 1) {
    COLUMNS.value = []
    COLUMNS.value = doorCOLUMNS
    ;(sort.value = [
      {
        sortBy: 'serveStartTime'
      }
    ]),
      changeTab(val, 'serveStartTime')
  } else if (val == 2) {
    COLUMNS.value = []
    COLUMNS.value = successCOLUMNS
    ;(sort.value = [
      {
        sortBy: 'realServeStartTime'
      }
    ]),
      changeTab(val, 'realServeStartTime')
  }
}
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

<style scoped>
.row-container:not(:last-child) {
  margin-bottom: 16px;
}
:deep() .t-card__body {
  padding-top: 0;
}
:deep(a) {
  cursor: pointer;
}
:deep(a:active) {
  color: #1c55cf;
}
:deep(a:hover) {
  color: rgba(0, 97, 253, 0.8);
}
</style>
<style lang="less" scoped>
.orderInfo {
  background-color: #fff;
  padding: 26px 25px;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;
    font-family: PingFangSC-SNaNpxibold;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-bk1);
    letter-spacing: 0;
    text-align: justify;
    // :deep(.sw-box) {
    //   width: 308px;
    // }
  }
}
:deep(.min-h) {
  min-height: auto;
}
:deep(.tableBoxs) {
  margin: 0;
}
</style>
