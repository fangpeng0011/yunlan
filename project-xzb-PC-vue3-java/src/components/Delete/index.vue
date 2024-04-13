<!--删除弹层-->
<template>
  <div class="deleteDialog baseDialog">
    <t-dialog
      v-model:visible="dialogVisible"
      :header="title"
      :footer="false"
      :on-close="handleClose"
      :on-confirm="handleSubmit"
    >
      {{ deleteText }}
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
  dialogDeleteVisible: {
    type: Boolean,
    default: false
  },
  deleteText: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '确认删除'
  }
})
// ------定义变量------
const emit = defineEmits(['handleClose', 'handleDelete']) // 子组件获取父组件事件传值
const dialogVisible = ref<boolean>(false)
watch(
  () => props.dialogDeleteVisible,
  () => {
    dialogVisible.value = props.dialogDeleteVisible
  }
)
// ------定义方法------
// 关闭弹层
const handleClose = () => {
  emit('handleClose')
}
// 提交确定删除
const handleSubmit = () => {
  emit('handleDelete')
}
</script>
