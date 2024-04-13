<!--查看图片弹层-->
<template>
  <div class="picBox">
    <t-dialog v-model:visible="dialogPicVisible" :on-close="handleClose">
      <div class="close" @click="handleClose"></div>
      <div class="pic"><img :src="pic" /></div>
    </t-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
// 获取父组件值、方法
const props = defineProps({
  // 弹层隐藏显示
  dialogPicVisible: {
    type: Boolean,
    default: false
  },
  // 要放大的图片
  pic: {
    type: String,
    default: ''
  }
})
const dialogPicVisible = ref(props.dialogPicVisible)
// 监听器
watch(props, () => {
  dialogPicVisible.value = props.dialogPicVisible
})
// ------定义变量------
const emit: Function = defineEmits() // 子组件获取父组件事件传值
// ------定义方法------
const handleClose = () => {
  emit('handleMagnifyClose')
}
</script>
