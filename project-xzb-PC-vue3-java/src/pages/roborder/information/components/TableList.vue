<!-- 基础表格组件 -->
<template>
  <div class="baseList bg-wt min-h">
    <div class="tableBoxs">
      <div class="newBox">
        <button
          :disabled="!canFetch"
          class="bt newBoxbutton"
          @click="fetchData()"
        >
          刷新
        </button>
      </div>
      <t-table
        :data="data"
        :columns="COLUMNS"
        :row-key="rowKey"
        vertical-align="middle"
        :hover="true"
        :loading="dataLoading"
        table-layout="fixed"
        table-content-width="100%"
        :pagination="
          pagination.total <= 10 || !pagination.total ? null : pagination
        "
        :disable-data-page="pagination.total <= 10"
      >
        <!-- 空页面 -->
        <template #empty>
          <NoData
            :content="
              userStore.canPickUp ? '' : '当前未开启接单设置，无法进行抢单哦～'
            "
          ></NoData>
        </template>
        <!-- end -->
        <template #serveAddress="{ row }">
            <div class="description">
              <span>{{ row.serveAddress }}</span>
              <span v-if="row.serveAddress.length > 36" class="hover">{{
                row.serveAddress
              }}</span>
            </div>
          </template>
        <!-- 服务费用 -->
        <template #ordersAmount="{ row }">
          <span>{{
            ((row.ordersAmount - row.ordersAmount * 0.003) * 0.3).toFixed(2)
          }}</span>
        </template>
        <!-- end -->
        <!-- 在操作栏添加抢单三种操作 -->
        <template #op="{ row }">
          <a
            class="font-bt line"
            style="padding-left: 0px"
            @click="handleClickRob(row.id)"
            >抢单</a
          >
        </template>
        <!-- end -->
      </t-table>
      <div class="footer" v-if="data.length === 10">
        <button class="bt-grey wt-60" @click="nextPage()">下一页</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListBase'
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { COLUMNS } from '../constants'
import NoData from '@/components/noData/index.vue'
import { useUserStore } from '@/store'
const userStore = useUserStore() //是否开启接单
// 接收父组件传递的值
const props = defineProps({
  listData: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
// 发送事件给父组件
const emit = defineEmits(['fetchData', 'handleClickRob'])
// 监听器赋值
watch(props, () => {
  data.value = props.listData
  dataLoading.value = false
})

const data: any = ref([]) // 列表数据
const canFetch = ref(true)
// 分页器
const pagination: any = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1 // 默认当前页
})
// 选中的行
// 索引
const rowKey = 'id' // 行的key
// 加载状态
const dataLoading = ref(true)
const fetchData = () => {
  canFetch.value = false
  emit('fetchData')
}
//下一页
const nextPage = () => {
  // console.log(data, data.length - 1, '----')
  emit('fetchData', {
    lastRealDistance: data.value[data.value.length - 1]?.realDistance
  })
}
// 编辑
const handleClickRob = (val) => {
  emit('handleClickRob', val)
}
//是否可以点击刷新
const isCanFetch = () => {
  canFetch.value = true
}
defineExpose({
  isCanFetch
})
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
.footer {
  padding: 20px 0;
  .wt-60 {
    width: 88px;
    margin: 0px auto;
  }
}
</style>
