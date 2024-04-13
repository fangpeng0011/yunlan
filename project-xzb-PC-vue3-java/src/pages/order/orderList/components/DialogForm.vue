<!-- 开始，结束服务弹窗 -->
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
        :label-width="100"
        on-cancel="onClickCloseBtn"
        :reset-type="resetType"
        @submit="onSubmit"
      >
      <t-form-item :label="label" name="certificationImgs">
          <t-upload
            ref="uploadRef1"
            action="/api/publics/storage/upload"
            v-model="formData.certificationImgs"
            tips="请上传1-3张jpg/png文件，在5MB以内"
            theme="image"
            multiple
            accept="image/*"
            class="wt-400"
            :sizeLimit="5120"
            :headers="{
              Authorization: token
            }"
            :max="3"
            :formatResponse="(e) =>formatResponse(e)"
            @validate="onValidate"
            @fail="handleFail"
            :allow-upload-duplicate-file="true"
            @success="(e) => handleSuccess(e)"
          >
          </t-upload>
        </t-form-item>
        <t-form-item label="补充说明：" name="description" :label-width="100"
          ><t-textarea
            v-model="formData.description"
            class="wt-400"
            placeholder="请输入"
            :maxlength="50"
          >
          </t-textarea>
        </t-form-item>
        <t-form-item style="float: right">
          <div class="bt bt-grey btn-submit" @click="onClickCloseBtn">
            <span>取消</span>
          </div>
          <button theme="primary" type="submit" class="bt btn-submit">
            <span>保存</span>
          </button>
        </t-form-item>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { MessagePlugin, ValidateResultContext } from 'tdesign-vue-next'
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
  label:{
    type: String,
    default: '开始服务图片：'
  },
  title: {
    type: String,
    default: '新建产品'
  }
})
// 重置表单
const resetType = ref('empty')
const formLabel = ref('退款原因：')
const token = localStorage.getItem('xzb')
// 表单
const form = ref()
// 触发父级事件
const emit: Function = defineEmits(['handleClose', 'fetchData'])
// 弹窗
const formVisible = ref(false)
// 表单数据
const formData = ref({
  description: '',
  certificationImgs:[]
})
// 弹窗标题
const title = ref()
// 提交表单
const onSubmit = (result: ValidateResultContext<FormData>) => {
  if (result.validateResult === true) {
    emit('handleConfirm',formData.value)
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
// 上传成功
const handleSuccess = (params) => {
  forEach(params.fileList, (item, i) => {
    if(item.url){
      formData.value.certificationImgs[i].url = item.url
      return
    }
    formData.value.certificationImgs[i].url = item.response.data.url
  })
}
// 处理响应
// 相应数据处理
const formatResponse = (res) => {
  if (res.code === 200) {
    return res.data
  } else {
    return { name:'null',error: '上传失败，请重试' };
  }
}
// 上传图片失败
const handleFail = (file) => {
  file.file.name=null
  MessagePlugin.error(`文件上传失败`)
}
// 超过大小或者文件格式错误报错提示
const onValidate = (params) => {
  const { files, type } = params
  console.log('onValidate', type, files)
  const messageMap = {
    FILE_OVER_SIZE_LIMIT: files[0].response.error,
    FILES_OVER_LENGTH_LIMIT: '文件数量超出限制，仅上传未超出数量的文件',
    // if you need same name files, setting allowUploadDuplicateFile={true} please
    FILTER_FILE_SAME_NAME: '不允许上传同名文件',
    BEFORE_ALL_FILES_UPLOAD: 'beforeAllFilesUpload 方法拦截了文件',
    CUSTOM_BEFORE_UPLOAD: 'beforeUpload 方法拦截了文件'
  }
  // you can also set Upload.tips and Upload.status to show warning message.
  messageMap[type] && MessagePlugin.warning(messageMap[type])
}
// 点击叉号关闭
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    formVisible.value = props.visible
    title.value = props.title
    formLabel.value = props.label
  }
)
// 监听器，监听父级传递的data值，控制表单数据
watch(
  () => props.data,
  (val) => {
    formData.value = JSON.parse(JSON.stringify(val)) // 深拷贝
  }
)


// 表单校验
const rules = {
  certificationImgs: [
    {
      required: true,
      message: '请上传图片',
      trigger: 'change'
    }
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
:deep(.t-upload__card-item.t-is-background) {
  .t-upload__card-content{
    margin-right: 20.9px;
  }

  &:last-child {
    .t-upload__card-content{
      margin-right: 0;
  }
  }
}
.wt-400 {
  width: 402px;
}
:deep(.t-upload__card-name){
  width: 120px;
}
</style>
