<!-- 派单页，后废弃-->
<template>
  <div class="base-up-wapper bgTable min-h">
    <!-- 表格 -->
    <tableList
      :list-data="listData"
      :pagination="pagination"
      :isActive="0"
      @handleRefuse="handleRefuse"
      @fetchData="fetchData"
      @handleReceive="handleReceive"
      @onPageChange="onPageChange"
      @handleRefresh="handleRefresh"
      @handleSortChange="handleSortChange"
    ></tableList>
    <!-- end -->
    <!-- 新增，编辑弹窗 -->
    <DialogForm
      :visible="visible"
      :title="title"
      :data="DialogFormData"
      ref="dialogForm"
      @handleClose="handleClose"
      @fetchData="fetchData"
      @handleSubmit="handleSubmit"
    />
    <!-- end -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { serviceOrderAssignPage, serviceOrderAssignReject, serviceOrderAssignReceive } from '@/api/service'
import { forEach } from 'lodash'
import DialogForm from './components/DialogForm.vue' // 新增,编辑弹窗.
import tableList from './components/TableList.vue' // 表格

const visible = ref(false) // 新增，编辑弹窗
const listData = ref([]) // 列表数据
const dataLoading = ref(false) // 列表数据加载loading
const DialogFormData = ref({}) // 弹窗表单内容
const title = ref('新建') // 弹窗标题
const refuseId = ref('') // 拒单的id
const dialogForm = ref(null) // 弹窗组件
// 分页
const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
const requestData = ref({
  isAsc1: false,
  orderBy1: 'sortBy',
  pageNo: 1,
  pageSize: 10
}) // 请求参数
// 生命周期
onMounted(() => {
  fetchData(requestData.value)
})
// 获取列表数据
const fetchData = async (val) => {
  dataLoading.value = true
  await serviceOrderAssignPage(val)
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
}
// 点击拒单
const handleRefuse = (row) => {
  refuseId.value = row.id
  visible.value = true
  title.value = '填写拒单原因'
}
// 提交
const handleSubmit = async (val) => {
  await serviceOrderAssignReject({
    id: refuseId.value,
    rejectReason: val.selectName
  })
    .then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('拒单成功')
        visible.value = false
        fetchData(requestData.value)
      }else{
        MessagePlugin.error(res.data.msg)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
// 接单
const handleReceive = async(row) => {
  await serviceOrderAssignReceive({
    id: row.id
  })
    .then((res) => {
      if (res.code === 200) {
        fetchData(requestData.value)
        MessagePlugin.success('接单成功')
      }else{
        MessagePlugin.error(res.data.msg)
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
// 刷新
const handleRefresh = () => {
  fetchData(requestData.value)
}
// 翻页
const onPageChange = (val) => {
  requestData.value.pageNo = val.defaultCurrent
  requestData.value.pageSize = val.defaultPageSize
  fetchData(requestData.value)
}
watchEffect(() => {
  fetchData(requestData.value)
})
</script>
<style lang="less" scoped></style>
