<!-- 搜索表单区域 -->
<template>
  <div class="formBox bg-wt">
    <t-form ref="form" :data="formData" :label-width="100">
      <t-row>
        <t-col>
          <t-form-item label="服务人员姓名：" name="name">
            <t-input
              v-model="formData.name"
              class="form-item-content"
              type="search"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
        </t-col>
        <t-col>
          <t-form-item label="手机号：" name="phone" :label-width="56">
            <t-input
              v-model="formData.phone"
              class="form-item-content"
              type="search"
              placeholder="请输入"
              clearable
            /> </t-form-item
        ></t-col>
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
// 表单数据
const formData = ref({
  phone: '',
  status: 1,
  name: ''
})
// 触发父组件的方法
const emit: Function = defineEmits(['handleSearch', 'handleReset'])
// 表单数据
const searchForm = {
  phone: '',
  status: 1,
  name: ''
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
</script>

<style lang="less" scoped></style>
<style lang="less" scoped src="../../index.less"></style>
