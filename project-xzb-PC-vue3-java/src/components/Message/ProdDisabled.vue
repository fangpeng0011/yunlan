<!-- 成功通知弹窗 -->
<template>
  <t-dialog
    v-model:visible="confirmVisible"
    theme="success"
    header="禁用提示"
    :footer="true"
    :cancel-btn="null"
    :close-btn="null"
    :class="props.type !== 'incomplete' ? 'twoLine' : ''"
  >
    <template #body>
      <p v-if="props.type === 'incomplete'">
        程序员小哥哥正在加班搬砖中，敬请期待！
      </p>
      <div v-else>
        <p>该功能错误操作可能会导致系统业务混乱，</p>
        <p class="adjust">暂不开放哦！</p>
      </div>
    </template>
    <template #confirmBtn>
      <div class="bt bt-grey btn-reset" @click="handleClose">知道了</div>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const confirmBody = ref()
const confirmVisible = ref(false)

// 接收父组件传递的值
const props = defineProps({
  confirmVisible: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'incomplete'
  }
})
const emit: Function = defineEmits(['handleClose', 'fetchData']) // 调用父组件的方法
// 监听父组件传递的值
watch(props, () => {
  confirmVisible.value = props.confirmVisible
  confirmBody.value =
    props.type === 'incomplete'
      ? '程序员小哥哥正在加班搬砖中，敬请期待！'
      : '该功能错误操作可能会导致系统业务混乱，暂不开放哦！'
})
const handleClose = () => {
  emit('handleClose')
}
</script>

<style lang="less" scoped>
:deep(.t-dialog) {
  width: 400px;
}
:deep(.t-icon) {
  display: none !important;
}
:deep(.t-dialog__header) {
  height: 52px;
  background-color: #fff;
  // 内容位于底部
  align-items: baseline;
  padding-top: 23px;
  padding-bottom: 0;
}
:deep(.t-dialog__header-content) {
  text-align: center;
  display: block;
}
:deep(.t-dialog__body__icon) {
  padding-top: 22px;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
}
:deep(.t-dialog__close) {
  display: none;
}
:deep(.t-dialog__footer) {
  text-align: center;
  padding-bottom: 30px;
}
:deep(.bt) {
  width: 60px;
  margin: 0 auto;
  color: var(--color-black);
}

:deep(.t-dialog::before) {
  background-image: url('@/assets/xiaohouzi@2x.png');
  background-repeat: no-repeat;
  background-size: 191px 159px;
  background-position: center;
  display: block;
  content: '';
  position: absolute;
  left: 28%;
  top: -64%;
  width: 191px;
  height: 159px;
  z-index: 9999;
}
.twoLine {
  :deep(.t-dialog::before) {
    top: -58%;
  }
}
.adjust {
  padding-left: 10px;
}
</style>
