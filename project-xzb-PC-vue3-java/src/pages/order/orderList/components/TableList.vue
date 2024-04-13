<!-- 订单表格 -->
<template>
  <div class="baseList bg-wt min-h">
    <div class="tableBoxs">
      <div class="newBox" v-if="listName !== 'historyList' && listName !== 'base'">
        <!-- tab -->
        <switchBar :data="tableBar" @changeId="changeId"></switchBar>
        <button class="bt-grey newBoxbutton" @click="handleToHistory">
          查看历史订单
        </button>
        <!-- end -->
      </div>
      <t-config-provider :global-config="globalLocale">
        <t-table
          :data="listData"
          :columns="COLUMNS"
          :row-key="rowKey"
          vertical-align="middle"
          :hover="true"
          :pagination="
            pagination.total <= 10 || !pagination.total ? null : pagination
          "
          :disable-data-page="pagination.total <= 10"
          :loading="dataLoading"
          :sort="sort"
          showSizeChanger
          :hide-sort-tips="true"
          :show-sort-column-bg-color="true"
          table-layout="fixed"
          :multiple-sort="true"
          table-content-width="100%"
          @page-change="onPageChange"
          @sort-change="sortChange"
        >
          <!-- 空页面 -->
          <template #empty>
            <NoData :content="'暂无内容哦～'"></NoData>
          </template>
          <!-- 序号 -->
          <template #number="{ rowIndex }">
            <div class="index">
              <span>{{ rowIndex + 1 }}</span>
            </div>
          </template>
          <!-- end -->
          <!-- 服务费用 -->
          <template #ordersAmount="{ row }">
            <span>{{
              formatNumber((row.ordersAmount - row.ordersAmount * 0.003) * 0.3)
            }}</span>
          </template>
          <!-- end -->
          <!-- 在操作栏添加删除、编辑、查看三种操作 -->
          <template #op="{ row }">
            <a
              v-if="listName !== 'historyList'"
              :class="
                row.serveStatus >= 2
                  ? 'text-forbidden btn-dl btn-split-right'
                  : 'btn-dl btn-split-right'
              "
              @click="handleClickCancel(row)"
              >取消订单</a
            >
            <a
              v-if="row.serveStatus === 0 && listName !== 'historyList'"
              class="font-bt line"
              @click="handleClickPeople(row)"
              >人员分配</a
            >
            <a
              v-if="row.serveStatus !== 0 && listName !== 'historyList'"
              :class="row.serveStatus >= 3 ? 'text-forbidden' : ''"
              class="font-bt line"
              @click="handleClickRefund(row)"
            >
              {{ row.serveStatus === 1 ? '开始服务' : '完成服务' }}
            </a>
            <a
              class="font-bt"
              :class="listName !== 'historyList' ? 'btn-split-left' : ''"
              @click="handleDetail(row)"
              >查看</a
            >
          </template>
          <!-- end -->
        </t-table>
      </t-config-provider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { CaretDownSmallIcon } from 'tdesign-icons-vue-next'
import {
  allocationCOLUMNS,
  doorCOLUMNS,
  successCOLUMNS,
  finishCOLUMNS,
  allCOLUMNS,
  historyCOLUMNS
} from '../constants'
import NoData from '@/components/noData/index.vue'
import switchBar from '@/components/switchBar/switchBar.vue'
import router from '@/router'
import { formatNumber } from '@/utils/index' // 格式化金额
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
  tabData: {
    type: Object,
    default: () => {
      return {}
    }
  },
  listName: {
    type: String,
    default: 'order'
  },
  COLUMNS: {
    type: Array<{
      title: string
      align?: string
      width: number
      minWidth: string
      colKey: string
      sortType?: unknown
      cell?: unknown
      filter?: unknown
      fixed?: unknown
    }>
  },
  sort: {
    type: Array<{
      sortBy: string
    }>
  }
})
// 发送事件给父组件
const emit = defineEmits([
  'fetchData',
  'handleBuild',
  'handleClickCancel',
  'handleSortChange',
  'onPageChange',
  'handleClickRefund',
  'handleDetail',
  'changeTab',
  'handleClickPeople'
])
// 监听器赋值
watch(props, () => {
  // 首页引用的表格
  if (props.listName === 'base') {  
    COLUMNS.value = props.COLUMNS ? props.COLUMNS : allocationCOLUMNS
    sort.value = props.sort
  }
  tableBar.value[0].value = props.tabData.noAllocation
  tableBar.value[1].value = props.tabData.noServed
  tableBar.value[2].value = props.tabData.serving
  data.value = props.listData
  pagination.value = props.pagination
  dataLoading.value = false
})
// 行key
const rowKey = ref('id') // 行key
// 表头
const COLUMNS = ref(
  props.listName === 'historyList' ? historyCOLUMNS : allocationCOLUMNS
)
// 排序
const sort = ref([
  {
    sortBy: 'serveStartTime'
  }
]) // 排序,图标
const globalLocale = ref({
  table: {
    sortIcon: (h) => h && h(CaretDownSmallIcon)
  }
}) // 排序图标
const data: any = ref([])
// 分页器
const pagination: any = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
// 加载状态
const dataLoading = ref(false)

// 排序
const sortChange = (val) => {
  sort.value = val
  emit('handleSortChange', val)
}

// 点击退款
const handleClickRefund = (val) => {
  emit('handleClickRefund', val)
}

// 查看详情
const handleDetail = (val) => {
  emit('handleDetail', val)
}
// 点击取消
const handleClickCancel = (row: { rowIndex: any }) => {
  emit('handleClickCancel', row)
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

// tab切换
const changeId = (val: number) => {
  if (val == 0) {
    COLUMNS.value = []
    COLUMNS.value = allocationCOLUMNS
    sort.value = [
      {
        sortBy: 'serveStartTime'
      }
    ]
    emit('changeTab', val, 'serveStartTime')
  } else if (val == 1) {
    COLUMNS.value = []
    COLUMNS.value = doorCOLUMNS
    sort.value = [
      {
        sortBy: 'serveStartTime'
      }
    ]
    emit('changeTab', val, 'serveStartTime')
  } else if (val == 2) {
    COLUMNS.value = []
    COLUMNS.value = successCOLUMNS
    sort.value = [
      {
        sortBy: 'realServeStartTime'
      }
    ]
    emit('changeTab', val, 'realServeStartTime')
  } else if (val == 3) {
    COLUMNS.value = []
    COLUMNS.value = finishCOLUMNS
    sort.value = [
      {
        sortBy: 'realServeEndTime'
      }
    ]
    emit('changeTab', val, 'realServeEndTime')
  } else {
    COLUMNS.value = []
    COLUMNS.value = allCOLUMNS
    sort.value = [
      {
        sortBy: 'serveStartTime'
      }
    ]
    emit('changeTab', val, 'serveStartTime')
  }
}
// 前往历史订单页
const handleToHistory = () => {
  // 前往历史订单页
  router.push('/order/orderList/historyList')
}
// tab数据
const tableBar = ref([
  {
    name: '待分配',
    id: '0',
    value: props.tabData.noAllocation
  },
  {
    name: '待上门',
    id: '1',
    value: props.tabData.noServed
  },
  {
    name: '待完工',
    id: '2',
    value: props.tabData.serving
  },
  {
    name: '已完成',
    id: '3',
    value: undefined
  },
  {
    name: '全部',
    id: null,
    value: undefined
  }
])
// 点击人员分配
const handleClickPeople = (row) => {
  emit('handleClickPeople', row)
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
.bgTable .baseList .newBox .newBoxbutton {
  width: 115px;
  height: 36px;
}
.btn-split-right{
  padding-right: 7.5px;
}
.btn-split-left{
  padding-left: 7.5px;
}
.line{
  padding: 0 7.5px;
}
</style>
