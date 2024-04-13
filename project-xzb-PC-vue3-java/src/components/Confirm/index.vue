<!--确认弹层-->
<template>
  <div class="confirmDialog baseDialog">
    <t-dialog
      v-model:visible="dialogVisible"
      :header="title"
      :footer="false"
      :on-close="handleClose"
      :on-confirm="handleSubmit"
    >
      {{ confirmText }}
      <div class="dialog-footer">
        <button
          theme="primary"
          type="submit"
          class="bt-grey wt-60"
          @click="handleClose"
        >
          <span>取消</span>
        </button>
        <button
          theme="primary"
          type="submit"
          class="bt wt-60"
          @click="handleSubmit"
        >
          <span>确定</span>
        </button>
      </div>
    </t-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
// 获取父组件值、方法
const props = defineProps({
  // 弹层隐藏显示
  dialogConfirmVisible: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: ''
  },
  // 标题
  title: {
    type: String,
    default: ''
  }
})
// ------定义变量------
const emit = defineEmits(['handleClose', 'handleConfirm']) // 子组件获取父组件事件传值
const dialogVisible = ref(false)
watch(
  () => props.dialogConfirmVisible,
  () => {
    dialogVisible.value = props.dialogConfirmVisible
  }
)
// ------定义方法------
// 关闭弹层
const handleClose = () => {
  emit('handleClose')
}
// 提交确定删除
const handleSubmit = () => {
  emit('handleConfirm')
}
</script>
