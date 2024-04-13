<!-- 成功通知弹窗 -->
<template>
  <t-dialog
    v-model:visible="confirmVisible"
    theme="success"
    header="成功通知"
    :body="confirmBody"
    :on-close="onClickCloseBtn"
    :footer="false"
    @confirm="onConfirmDelete"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

const confirmBody = ref('this is a 消息通知')
const confirmVisible = ref(false)

const emit: Function = defineEmits() // 调用父组件的方法
// 接收父组件传递的值
const props = defineProps({
  confirmVisible: {
    type: Boolean,
    default: false
  }
})
// 监听父组件传递的值
watch(props, () => {
  confirmVisible.value = props.confirmVisible
})
const data = ref([])

const pagination = ref({
  defaultPageSize: 10,
  total: 0,
  defaultCurrent: 1
})
const deleteIdx = ref(-1) // 删除的索引
// 确认删除
const onConfirmDelete = () => {
  // 真实业务请发起请求
  data.value.splice(deleteIdx.value, 1)
  pagination.value.total = data.value.length
  const selectedIdx = selectedRowKeys.value.indexOf(deleteIdx.value)
  if (selectedIdx > -1) {
    selectedRowKeys.value.splice(selectedIdx, 1)
  }
  confirmVisible.value = false
  MessagePlugin.success('删除成功')
  emit('handleClose', deleteIdx.value)
  resetIdx()
}
// 关闭弹窗
const onClickCloseBtn = () => {
  emit('handleClose')
}
// 重置删除索引
const resetIdx = () => {
  deleteIdx.value = -1
}

const selectedRowKeys = ref([1, 2])
</script>

<style lang="less" scoped>
:deep(.t-dialog__ctx .t-dialog) {
  width: 400px;
}
:deep(.t-dialog__header) {
  height: 52px;
  background-color: #fff;
  // 内容位于底部
  align-items: baseline;
  padding-top: 20px;
  padding-bottom: 0;
}
:deep(.t-dialog__body__icon) {
  padding-top: 2px;
}
</style>
