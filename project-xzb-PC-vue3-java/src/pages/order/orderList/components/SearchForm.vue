<!-- 搜索表单区域 -->
<template>
  <div class="formBox bg-wt">
    <t-form ref="form" :data="formData" :label-width="70">
      <t-row>
        <t-col>
          <t-form-item label="订单编号：" name="name">
            <t-input
              v-model="formData.id"
              class="form-item-content"
              type="search"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
        </t-col>
        <t-col v-if="!history">
          <t-form-item label="服务名称：" name="name">
            <t-select
              placeholder="请选择"
              filterable
              clearable
              v-model="formData.serveItemId"
              :options="typeSelectList"
              :scroll="{ type: 'virtual' }"
              class="wt-400"
              @change="(e) => onChangeServe(e)"
              :popup-props="{ bufferSize: '100' }"
            />
          </t-form-item>
        </t-col>
        <!-- 历史订单页面的searchForm -->
        <t-col v-if="history">
          <t-form-item label="交易完成时间：" name="status" :label-width="96">
            <t-date-range-picker
              v-model="formData.updateTime"
              placeholder="日期"
              :presets="presets"
              :disable-date="{
                after: props.initSearch[1]
              }"
              allow-input
              @change="onCurrencyChange"
              clearable
            />
          </t-form-item>
        </t-col>
        <t-col v-else>
          <t-form-item label="预约时间：" name="status">
            <t-date-range-picker
              v-model="formData.updateTime"
              placeholder="日期"
              :presets="presets"
              clearable
            />
          </t-form-item>
        </t-col>
        <t-col v-if="history">
          <t-form-item label="订单状态：" name="name">
            <t-select
              placeholder="请选择"
              clearable
              v-model="formData.serveStatus"
              :options="[{
                label: '已完成',
                value: '3'
              },{
                label:'已关闭',
                value:'4'
              }
              ]"
              class="wt-400"
              :popup-props="{ bufferSize: '100' }"
            />
          </t-form-item>
        </t-col>
        <t-col class="searchBtn">
          <button class="bt-grey wt-60" @click="handleReset()">重置</button>
          <button class="bt wt-60" @click="handleSearch()">搜索</button>
        </t-col>
      </t-row>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import dayjs from 'dayjs'
const props = defineProps({
  initSearch: {
    type: Array,
    default: () => []
  },
  history: {
    type: Boolean,
    default: false
  },
  typeSelect: {
    type: Array<{
      id: string
      name: string
    }>,
    default: () => {
      return []
    }
  }
})
const typeSelectList = ref([]) // 服务技能下拉列表
// 表单数据
const formData = ref({
  serveItemId: null,
  serveItemName: null,
  id: null,
  updateTime: props.initSearch ? props.initSearch : [],
  serveStatus: null
})
// 触发父组件的方法
const emit: Function = defineEmits(['handleSearch', 'handleReset'])
const onCurrencyChange = (val) => {
  // 如果val为的第一项和第二项之间的时间间隔大于365天，清空时间并提示else{
    if (dayjs(val[1]).diff(dayjs(val[0]), 'day') > 365) {
      // formData.value.updateTime = []
      MessagePlugin.error('时间间隔不能大于365天')
    }
  }
// 表单数据
const searchForm = {
  serveItemId: null,
  serveItemName: null,
  id: null,
  updateTime: props.initSearch ? props.initSearch : [],
  serveStatus: null
}
// 重置表单
const handleReset = () => {
  formData.value = { ...searchForm }
  emit('handleSearch', formData.value)
}
// 搜索表单
const handleSearch = () => {
  emit('handleSearch', formData.value)
}
// 选择服务技能
const onChangeServe = (e) => {
  formData.value.serveItemId = e
  formData.value.serveItemName = typeSelectList.value.find(
    (item) => item.value === e
  ).label
}
// 时间选择器tag
const presets = ref({
  近一周: [
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    new Date()
  ],
  近三天: [
    new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000),
    new Date()
  ],
  近一天: [new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000), new Date()]
})
watchEffect(() => {
  typeSelectList.value = props.typeSelect.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
  })
})
</script>

<style lang="less" scoped></style>
<style lang="less" scoped src="../../index.less"></style>
