<!-- 基础表格组件 -->
<template>
  <div class="baseList bg-wt min-h">
    <div class="tableBoxs">
      <div class="newBox">
        <button class="bt newBoxbutton" @click="handleRefresh()">刷新</button>
      </div>
      <t-config-provider :global-config="globalLocale">
        <t-table
          :data="data"
          :columns="COLUMNS"
          :row-key="rowKey"
          vertical-align="middle"
          :hover="true"
          :pagination="
            pagination.total <= 10 || !pagination.total ? null : pagination
          "
          :disable-data-page="pagination.total <= 10"
          :selected-row-keys="selectedRowKeys"
          :loading="dataLoading"
          :sort="sort"
          showSizeChanger
          :filter-value="filterValue"
          :hide-sort-tips="true"
          :show-sort-column-bg-color="true"
          table-layout="fixed"
          :multiple-sort="true"
          table-content-width="100%"
          @page-change="onPageChange"
          @sort-change="sortChange"
          @select-change="rehandleSelectChange"
        >
          <!-- 空页面 -->
          <template #empty>
            <NoData></NoData>
          </template>
          <!-- 序号 -->
          <template #code="{ rowIndex }">
            <span>{{ rowIndex + 1 }}</span>
          </template>
          <!-- 地址 -->
          <template #serveAddress="{ row }">
            <div class="description">
              <span>{{ row.serveAddress }}</span>
              <span v-if="row.serveAddress.length > 36" class="hover">{{
                row.serveAddress
              }}</span>
            </div>
          </template>
          <!-- end -->
          <!-- 服务费用 -->
          <template #ordersAmount="{ row }">
            <span>{{
              ((row.ordersAmount - row.ordersAmount * 0.003) * 0.7).toFixed(2)
            }}</span>
          </template>
          <!-- end -->
          <!-- 在操作栏添加删除、编辑、查看三种操作 -->
          <template #op="{ row }">
            <a class="btn-dl line btn-split-right" @click="handleRefuse(row)"
              >拒单</a
            >
            <a class="font-bt line" @click="handleReceive(row)">接单</a>
          </template>
          <!-- end -->
        </t-table>
      </t-config-provider>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { CaretDownSmallIcon, ZoomInIcon } from 'tdesign-icons-vue-next'
import { COLUMNS } from '../constants'
import NoData from '@/components/noData/index.vue'
// 接收父组件传递的值
const props = defineProps({
  listData: {
    type: Object,
    default: () => {
      return {}
    }
  },
  pagination: {
    type: Object,
    default: () => {
      return {}
    }
  },
  isActive: {
    type: Number
  }
})
// 发送事件给父组件
const emit = defineEmits([
  'fetchData',
  'handleRefresh',
  'handleSortChange',
  'onPageChange',
  'handleReceive',
  'handleRefuse'
])
// 监听器赋值
watch(props, () => {
  data.value = props.listData
  pagination.value = props.pagination
  dataLoading.value = false
})

// 排序
const sort = ref([
  {
    sortBy: 'serveStartTime'
  }
]) // 排序
const globalLocale = ref({
  table: {
    sortIcon: (h) => h && h(CaretDownSmallIcon)
  }
}) // 排序图标
const data: any = ref([])
// 选中的行
const pagination: any = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
// 索引
const rowKey = 'index' // 行的key
const filterValue = ref({
  status: ''
}) // 过滤
// 加载状态
const dataLoading = ref(true)

// 排序
const sortChange = (val) => {
  sort.value = val
  emit('handleSortChange', val)
}

// 选中的行
const selectedRowKeys = ref([1, 2])
const rehandleSelectChange = (val: number[]) => {
  selectedRowKeys.value = val
}
// 编辑
const handleReceive = (val) => {
  emit('handleReceive', val)
}

// 点击翻页
const onPageChange = (val) => {
  pagination.value.defaultCurrent = val.current
  pagination.value.defaultPageSize = val.pageSize
  emit('onPageChange', {
    defaultCurrent: val.current,
    defaultPageSize: val.pageSize
  })
}
// 点击删除
const handleRefuse = (row) => {
  emit('handleRefuse', row)
}
// 点击刷新
const handleRefresh = () => {
  emit('handleRefresh')
}
</script>
<style lang="less" scoped src="../../index.less"></style>
<style lang="less" scoped>
.baseList {
  :deep(.t-table td) {
    height: 64px !important;
  }
}
.headPortrait {
  display: flex;
  align-items: center;
}
:deep(.t-table__filter-icon) {
  display: none;
}
</style>
