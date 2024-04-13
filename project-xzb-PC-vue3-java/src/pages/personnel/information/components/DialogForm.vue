<!-- 新增编辑弹窗 -->
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
        label-width="110px"
        on-cancel="onClickCloseBtn"
        :reset-type="resetType"
        @submit="onSubmit"
      >
        <t-form-item label="服务人员姓名：" name="name">
          <t-input
            v-model="formData.name"
            class="wt-400"
            placeholder="请输入服务人员姓名"
            clearable
            :onChange="(value)=>WordLimit(5 ,value)"
          />
        </t-form-item>
        <t-form-item label="服务人员手机：" name="phone">
          <t-input
            v-model="formData.phone"
            class="wt-400"
            placeholder="请输入服务人员手机"
            clearable
          />
        </t-form-item>
        <t-form-item label="身份证号：" name="idCardNo">
          <t-input
            v-model="formData.idCardNo"
            class="wt-400"
            placeholder="请输入身份证号"
            clearable
          />
        </t-form-item>
        <t-form-item label="证明资料：" name="certificationImgs">
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
            :formatResponse="(e) =>formatResponse(e)"
            :headers="{
              Authorization: token,
            }"
            :max="3"
            @validate="onValidate"
            @fail="handleFail"
            :allow-upload-duplicate-file="true"
            @success="(e) => handleSuccess(e)"
          >
          </t-upload>
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
import { validateIdCard, validatePhone } from '@/utils/validate'
import { MessagePlugin } from 'tdesign-vue-next'
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
  title: {
    type: String,
    default: '新建产品'
  }
})
// 重置表单
const resetType = ref('empty')
// 图片上传组件
const uploadRef1 = ref(null)
// 表单实例
const form = ref()
// 触发父级事件
const emit: Function = defineEmits(['handleClose', 'fetchData'])
// 弹窗
const formVisible = ref(false)
// 表单数据
const formData = ref<any>({
  name: '',
  phone: '',
  idCardNo: '',
  certificationImgs: []
})
// 弹窗标题
const title = ref()
// 提交表单
const onSubmit = (result: ValidateResultContext<FormData>) => {
  if (result.validateResult === true) {
    emit('handleSubmit', formData.value)
  }
}
// 上述按成功触发
const handleSuccess = (params) => {
  forEach(params.fileList, (item, i) => {
    if (item.url) {
      formData.value.certificationImgs[i].url = item.url
      return
    }
    formData.value.certificationImgs[i].url = item.response.data
  })
}
// 点击取消关闭
const onClickCloseBtn = () => {
  // 重置表单
  form.value.reset()
  // 清除上传失败状态
  uploadRef1.value.cancelUpload()
  formVisible.value = false
  emit('handleClose')
}
const token = localStorage.getItem('xzb')
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    let data = JSON.parse(JSON.stringify(props.data))
    formData.value.name = data.name
    formData.value.phone = data.phone
    formData.value.idCardNo = data.idCardNo
    // formData.value.img中新增对象，url为图片地址，name为图片名称，返显图片
    if (data.certificationImgs) {
      formData.value.certificationImgs = data.certificationImgs.map((item) => {
        return {
          url: item
        }
      })
    } else {
      formData.value.certificationImgs = []
    }
    formVisible.value = props.visible
    title.value = props.title
  }
)

// 字数限制
const WordLimit: Function = (num: number,val) => {
  if (val.length > num) { 
    formData.value.name = val.slice(0, num)
  }
}
// 上传图片失败
const handleFail = (file) => {
  file.file.name=null
  MessagePlugin.error(`文件上传失败`)
}
// 相应数据处理
const formatResponse = (res) => {
  if (res.code === 200) {
    return res.data
  } else {
    return { name:'null',error: '上传失败，请重试' };
  }
}
// 超过大小或者文件格式错误报错提示
const onValidate = (params) => {
  const { files, type } = params
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
// 表单校验
const rules = {
  name: [
    // 名称校验
    {
      required: true,
      message: '请输入服务人员姓名',
      type: 'error',
      trigger: 'blur'
    }
  ],
  phone: [
    // 序号校验
    {
      required: true,
      message: '请输入手机号码',
      type: 'error',
      trigger: 'blur'
    },
    {
      validator: validatePhone,
      trigger: 'blur',
      type: 'error',
      message: '请输入正确格式的手机号码'
    }
  ],
  idCardNo: [
    {
      required: true,
      message: '请输入身份证号码',
      type: 'error',
      trigger: 'blur'
    },
    {
      validator: validateIdCard,
      trigger: 'blur',
      type: 'error',
      message: '请输入正确格式的身份证号码'
    }
  ]
}
// 暴露方法
defineExpose({
  onClickCloseBtn
})
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
.wt-400 {
  width: 405px;
}

:deep(.t-form:not(.t-form-inline) .t-form__item:last-of-type) {
  position: relative;
  right: -155px;
}
:deep(.t-upload__card-item) {
  .t-upload__card-content, .t-upload__card-container {
    margin-right: 20.9px;
    &:last-child{
      margin-right: 0;
    }
  }

  &:last-child {
    .t-upload__card-content {
      margin-right: 0;
    }
  }
}
:deep(.t-upload__card-name) {
  max-width: 120px;
}
</style>
