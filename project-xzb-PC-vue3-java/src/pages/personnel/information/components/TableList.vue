<!-- 基础表格组件 -->
<template>
  <div class="baseList bg-wt min-h">
    <div class="tableBoxs">
      <div class="newBox">
        <button class="bt newBoxbutton" @click="handleBuild()">新建</button>
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
            <NoData :content="'暂无内容哦～'"></NoData>
          </template>
          <!-- 序号 -->
          <template #code="{rowIndex}">
            <span>{{rowIndex + 1}}</span>
          </template>
          <!-- 证明资料 -->
          <template #certificationImgs="{ row }">
            <div class="headPortrait">
              <t-image-viewer :images="row.certificationImgs" v-if="row.certificationImgs.length > 0">
                <template #trigger="{ open }">
                  <div class="tdesign-demo-image-viewer__ui-image">
                    <img
                      alt="test"
                      :src="row.certificationImgs[0]"
                      class="tdesign-demo-image-viewer__ui-image--img"
                    />
                    <div
                      class="tdesign-demo-image-viewer__ui-image--hover"
                      @click="open"
                    >
                      <span><ZoomInIcon size="1.8em" /></span>
                    </div>
                  </div>
                </template>
              </t-image-viewer>
            </div>
          </template>
          <!-- 操作栏 -->
          <template #op="{ row }">
            <a class="btn-dl line btn-split-right" @click="handleClickDelete(row)"
              >删除</a
            >
            <a class="font-bt line" @click="handleClickEdit(row)">编辑</a>
          </template>
          <!-- end -->
        </t-table>
      </t-config-provider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
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
  'handleBuild',
  'handleSortChange',
  'onPageChange',
  'handleClickEdit',
  'handleClickDelete'
])
// 监听器赋值
watch(props, () => {
  data.value = props.listData
  pagination.value = props.pagination
  
  dataLoading.value = false
})
// 排序字段
const sort = ref([
  {
    sortBy: 'createTime'
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
const handleClickEdit = (val) => {
  emit('handleClickEdit', val)
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
const handleClickDelete = (row) => {
  emit('handleClickDelete', row)
}
// 点击新建
const handleBuild = () => {
  emit('handleBuild')
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
