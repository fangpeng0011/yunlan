<!-- 服务人员管理 -->
<template>
  <router-view v-if="url !== '/personnel/information'"></router-view>
  <div v-else class="base-up-wapper bgTable min-h">
    <!-- 搜索表单区域 -->
    <searchFormBox
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
      :isActive="0"
      @handleClickDelete="handleClickDelete"
      @handleBuild="handleBuild"
      @handleClickEdit="handleClickEdit"
      @fetchData="fetchData"
      @onPageChange="onPageChange"
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
    <!-- 删除弹窗 -->
    <Delete
      :title="title"
      :dialog-delete-visible="dialogDeleteVisible"
      :delete-text="deleteText"
      @handle-delete="handleDelete"
      @handle-close="handleClose"
    ></Delete>
    <!-- end -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { useRoute } from 'vue-router'
import {
  servicePersonItemAdd,
  servicePersonItemDelete,
  servicePersonItemEdit
} from '@/api/service'
import { getPersonnelDetailList } from '@/api/detail'
import { forEach } from 'lodash'
import DialogForm from './components/DialogForm.vue' // 新增,编辑弹窗.
import tableList from './components/TableList.vue' // 表格
import Delete from '@/components/Delete/index.vue' // 删除弹层
import searchFormBox from './components/SearchForm.vue' // 搜索框表单

const route = useRoute()
const visible = ref(false) // 新增，编辑弹窗
const listData = ref([]) // 列表数据
const dataLoading = ref(false) // 列表数据加载loading
const DialogFormData = ref({}) // 弹窗表单内容
const title = ref('新建') // 弹窗标题
const deleteId= ref('') // 删除的id
const dialogDeleteVisible = ref(false) // 控制删除弹层显示隐藏
const deleteText = ref('确认删除该服务人员的信息吗？（一经删除无法恢复）') // 删除的内容
const url = ref('') // 当前路由
const initSearch = ref() // 条转过来的携带数据
const typeSelect = ref([]) // 服务类型下拉框数据
const editId = ref('') // 编辑的id
const dialogForm = ref(null) // 弹窗组件
const isEdit = ref(false) // 是否是编辑
// 分页
const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
// 请求参数
const requestData = ref({
  isAsc1: false,
  orderBy1: 'createTime',
  pageNo: 1,
  pageSize: 10,
  name: '',
  phone: ''
}) // 请求参数
// 生命周期
onMounted(() => {
  fetchData(requestData.value)
})
// 搜索功能
const handleSearch = (val) => {
  requestData.value.name = val.name
  requestData.value.phone = val.phone
  fetchData(requestData.value)
}

// 重置，清空搜索框
const handleReset = () => {
  // 清空搜索框的全部内容并且重新获取数据
  // 重置页码
  pagination.value.defaultCurrent = 1
  fetchData(requestData.value)
  // 重新渲染table
}
// 获取列表数据
const fetchData = async (val) => {
  dataLoading.value = true
  await getPersonnelDetailList(val)
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
  dialogDeleteVisible.value = false // 关闭删除弹层
}
// 点击删除
const handleClickDelete = (row) => {
  deleteId.value = row.id
  dialogDeleteVisible.value = true
  title.value = '确认删除'
}
// 确认删除
const handleDelete = async () => {
  await servicePersonItemDelete(deleteId.value).then((res) => {
    if (res.code === 200) {
      dialogDeleteVisible.value = false
      MessagePlugin.success('删除成功')
      fetchData(requestData.value)
    } else {
      MessagePlugin.error(res.data.msg)
    }
  })
}
// 点击新建
const handleBuild = () => {
  isEdit.value = false
  visible.value = true
  title.value = '新建服务人员'
  DialogFormData.value = {}
}
// 新增和编辑
const handleSubmit = async (val) => {
  const url = val.certificationImgs.map((item) => {
    return item.url
  })
  // 编辑
  if (isEdit.value) {
    // 编辑个人信息
    await servicePersonItemEdit({
      idCardNo: val.idCardNo,
      phone: val.phone,
      name: val.name,
      certificationImgs: url
    },editId.value).then((res) => {
      if (res.data.code === 200) {
        MessagePlugin.success('编辑成功')
        fetchData(requestData.value)
        dialogForm.value.onClickCloseBtn()
      } else {
        MessagePlugin.error(res.msg)
      }
    })
  } else {
    // 新增个人信息
    await servicePersonItemAdd({
      idCardNo: val.idCardNo,
      phone: val.phone,
      name: val.name,
      certificationImgs: url
    }).then((res) => {
      if (res.code === 200) {
        MessagePlugin.success('新增成功')
        fetchData(requestData.value)
        dialogForm.value.onClickCloseBtn()
      } else {
        MessagePlugin.error(res.msg)
      }
    })
  }
}
// 点击编辑
const handleClickEdit = (row) => {
  isEdit.value = true
  editId.value = row.id
  // 编辑弹窗
  visible.value = true
  title.value = '编辑服务人员'
  DialogFormData.value = row
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
// 翻页
const onPageChange = (val) => {
  requestData.value.pageNo = val.defaultCurrent
  requestData.value.pageSize = val.defaultPageSize
  fetchData(requestData.value)
}
watchEffect(() => {
  if (route.path === 'personnel/information') {
    url.value = 'personnel/information'
    fetchData(requestData.value)
  } else {
    url.value = route.path
    fetchData(requestData.value)
  }
})
</script>
<style lang="less" scoped></style>
