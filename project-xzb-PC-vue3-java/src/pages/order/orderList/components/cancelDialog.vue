<!-- 取消订单弹窗 -->
<template>
  <t-dialog
    v-model:visible="formVisible"
    :header="title"
    :width="628"
    :footer="false"
    :on-close="onClickCloseBtn"
  >
    <template #body>
      <!-- 表单内容 -->
      <t-form
        ref="form"
        :data="formData"
        :rules="rules"
        :label-width="105"
        on-cancel="onClickCloseBtn"
        :reset-type="resetType"
        @submit="onSubmit"
      >
        <t-form-item :label="label" name="selectId">
          <t-select
            placeholder="请选择"
            filterable
            v-model="formData.selectId"
            :options="typeSelectList"
            :scroll="{ type: 'virtual' }"
            class="wt-400"
            @change="(e) => onChange(e)"
            :popup-props="{ bufferSize: '100' }"
          />
        </t-form-item>
        <t-form-item style="float: right">
          <div class="bt bt-grey btn-submit" @click="onClickCloseBtn">
            <span>取消</span>
          </div>
          <button theme="primary" type="submit" class="bt btn-submit">
            <span>确定</span>
          </button>
        </t-form-item>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ValidateResultContext } from 'tdesign-vue-next'
import { CANCEL_REASON } from '@/constants'
import { forEach } from 'lodash'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {
      return {}
    }
  },
  label: {
    type: String,
    default: '退款原因：'
  },
  title: {
    type: String,
    default: '新建产品'
  },
  typeSelect: {
    type: Array<{
      id: string
      name: string
    }>,
    default: () => {
      return []
    }
  },
})
// 重置表单
const resetType = ref('empty')
const formLabel = ref('退款原因：')
const typeSelectList = ref(CANCEL_REASON)
// 表单
const form = ref()
// 触发父级事件
const emit: Function = defineEmits(['handleClose', 'fetchData','handleConfirmCancel'])
// 弹窗
const formVisible = ref(false)
// 表单数据
const formData = ref({
  selectName: null,
  selectId: null,
  value: ''
})
// 弹窗标题
const title = ref()
// 提交表单
const onSubmit = (result: ValidateResultContext<FormData>) => {
  if (result.validateResult === true) {
    emit('handleConfirmCancel', formData.value)
    onClickCloseBtn()
  }
}
// 点击取消关闭
const onClickCloseBtn = () => {
  // 重置表单
  form.value.reset()
  formVisible.value = false
  emit('handleClose')
}
// 选择退款原因
const onChange = (e) => {
  formData.value.selectName = typeSelectList.value.find((item) => item.value === e).label
}
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    if(props.title === '请填写取消原因'){
      typeSelectList.value = CANCEL_REASON
    }else{
      typeSelectList.value = []
      // 将父级传递的typeSelect中的id转换为value，name转换为label，并赋值给typeSelectList
      forEach(props.typeSelect, (item) => {
        typeSelectList.value.push({
          value: item.id,
          label: item.name
        })
      })
    }
    formVisible.value = props.visible
    title.value = props.title
    formLabel.value = props.label
  }
)
// 监听器，监听父级传递的data值，控制表单数据
watch(
  () => props.data,
  (val) => {
    formData.value = JSON.parse(JSON.stringify(val))
  }
)

// 表单校验
const rules = {
  selectId: [
    {
      required: true,
      message: '请选择',
      type: 'error',
      trigger: 'change'
    },
  ]
}
</script>
<style lang="less" scoped>
.btn-submit {
  margin-left: 15.5px;
  width: 60px;
}

.nickname {
  margin-right: 2px;
  z-index: 100;
  color: var(--color-bk4);
}
:deep(.t-textarea__limit) {
  color: var(--color-bk4);
  right: 10px;
}
:deep(.t-form:not(.t-form-inline) .t-form__item:last-of-type) {
  position: relative;
  right: -155px;
}
</style>
