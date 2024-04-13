<!-- 搜索表单区域 -->
<template>
  <div class="formBox bg-wt">
    <t-form ref="form" :data="formData" :label-width="70">
      <t-row>
        <t-col>
          <t-form-item label="关键词：" name="name" :label-width="56">
            <t-input
              v-model="formData.keyWord"
              class="form-item-content"
              type="search"
              placeholder="请输入关键词"
              clearable
            />
          </t-form-item>
        </t-col>
        <t-col>
          <t-form-item label="服务距离：" name="name">
            <t-select
              v-model="formData.serveDistance"
              class="form-item-content"
              :options="SERVICE_DISTANCE"
              type="search"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
        </t-col>
        <t-col>
        <t-form-item label="预约时间：" name="status">
          <t-date-range-picker
              v-model="formData.updateTime"
              placeholder="日期"
              :presets="presets"
              clearable
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
import { ref } from 'vue'
import { SERVICE_DISTANCE } from '@/constants'
// 表单数据
const formData = ref({
  keyWord: null,
  serveDistance: null,
  updateTime: []
})
// 触发父组件的方法
const emit: Function = defineEmits(['handleSearch'])
// 表单数据
const searchForm = {
  keyWord: null,
  serveDistance: null,
  updateTime: []
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
</script>

<style lang="less" scoped>
.formBox .t-form:not(.t-form-inline) .t-form__item:last-of-type {
  padding-left: 0px !important;
}
</style>
