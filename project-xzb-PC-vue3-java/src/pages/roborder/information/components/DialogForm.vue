<!-- 新增编辑弹窗 -->
<template>
  <t-dialog
    v-model:visible="formVisible"
    :header="false"
    :width="240"
    :footer="false"
    :closeBtn="false"
    :on-close="onClickCloseBtn"
    :closeOnOverlayClick="false"
  >
    <template #body>
      <div class="title" v-if="!isRob">抢单失败</div>
      <div :class="isRob ? 'title' : 'content'">{{ title }}</div>

      <div class="image" :class="isRob ? 'success' : 'fail'"></div>
      <button
        theme="primary"
        type="submit"
        class="bt btn-submit"
        @click="onClickCloseBtn"
      >
        <span>确定</span>
      </button>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  isRob: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  }
})
// 表单
const isRob = ref(null)
const title = ref('')
// 触发父级事件
const emit: Function = defineEmits(['handleClose', 'fetchData'])
// 弹窗
const formVisible = ref(false)

// 点击取消关闭
const onClickCloseBtn = () => {
  formVisible.value = false
  emit('handleClose')
}
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    formVisible.value = props.visible
    isRob.value = props.isRob
    title.value = props.title
  }
)

defineExpose({
  onClickCloseBtn
})
</script>
<style lang="less" scoped>
.btn-submit {
  margin: 0 auto;
  width: 98px;
  margin-top: 23px;
}
:deep(.t-dialog__header) {
  background-color: white !important;
}
.title {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--color-bk1);
}
.content {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #303030;
}
.t-dialog {
  position: relative;
}
.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 110px;
  height: 110px;
  position: absolute;
  top: -35px;
  left: 65px;
}
.success {
  background-image: url('../../../../assets/default/img_success@2x.png');
}
.fail {
  background-image: url('../../../../assets/default/img_fail@2x.png');
}
</style>
