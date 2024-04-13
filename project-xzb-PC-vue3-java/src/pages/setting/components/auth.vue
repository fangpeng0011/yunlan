<!-- 服务范围设置 -->
<template>
  <t-dialog
    v-model:visible="formVisible"
    :header="title"
    :width="certificationStatus === 0 ? 628 : 480"
    :on-close="onClickCloseBtn"
  >
    <template #body>
      <t-row v-if="certificationStatus === 0">
        <t-form ref="form" :data="formData" label-width="110px" :rules="rules">
          <t-form-item label="企业名称：" name="name">
            <t-input
              v-model="formData.name"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item
            label="统一社会信用代码："
            name="idNumber"
            label-width="150px"
          >
            <t-input
              v-model="formData.idNumber"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item label="法人代表姓名：" name="legalPersonName">
            <t-input
              v-model="formData.legalPersonName"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item label="身份证号：" name="legalPersonIdCardNo">
            <t-input
              v-model="formData.legalPersonIdCardNo"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item label="上传营业执照：" name="businessLicense">
            <t-upload
              ref="uploadRef1"
              action="/api/publics/storage/upload"
              v-model="formData.businessLicense"
              tips="请上传1张jpg/png文件，在5MB以内"
              theme="image"
              accept="image/*"
              class="wt-400"
              :sizeLimit="5120"
              :headers="{
                Authorization: token
              }"
              :max="1"
              @fail="handleFail"
              @success="(e) => handleSuccess(e)"
            >
            </t-upload>
          </t-form-item>
        </t-form>
      </t-row>
      <div v-if="certificationStatus === 3" class="authFail">
        <img src="../../../../src/assets/default/img_weitongguo@2x.png" />
        <div class="content">
          <p>提交的认证审核末通过</p>
          <p>原因：{{ reason }}</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div
        class="bt btn-submit reset"
        v-if="certificationStatus === 3"
        @click="handleResetAuth"
      >
        重新认证
      </div>
      <div
        v-if="certificationStatus === 0"
        class="bt bt-grey btn-submit"
        @click="onClickCloseBtn"
      >
        <span>取消</span>
      </div>
      <div
        v-if="certificationStatus === 0"
        type="submit"
        class="bt btn-submit"
        @click="handleSubmit"
      >
        <span>提交</span>
      </div>
    </template>
  </t-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, watch} from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { getAuthFail } from '@/api/setting'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  certificationStatus: {
    type: Number,
    default: 0
  }
})
const certificationStatus = ref(0)
const token = localStorage.getItem('xzb')
//重新认证
const handleResetAuth = () => {
  certificationStatus.value = 0
}
//图片上传成功
const handleSuccess = (params) => {
  formData.value.businessLicense = [{ url: params.response.data.url, name: '' }]
} 
// 触发父级事件
const emit = defineEmits([
  'handleClose',
  'handleServiceTypeChange',
  'handleSubmit'
])
// 上传图片失败
const handleFail = (file) => {
  MessagePlugin.error(`文件上传失败`)
}
// 表单数据
const formData = ref<any>({
  name: '',
  idNumber: '',
  legalPersonIdCardNo: '',
  legalPersonName: '',
  businessLicense: []
})
// 弹窗标题
const title = ref('资质认证')
//拒绝原因
const reason = ref('')
// 弹窗
const formVisible = ref(false)

const handleSubmit = () => {
  if (!formData.value.name) {
    return MessagePlugin.error('请填写企业名称')
  } else if (!formData.value.idNumber) {
    return MessagePlugin.error('请填写统一社会信用代码：')
  } else if (!formData.value.legalPersonName) {
    return MessagePlugin.error('请填写法人代表姓名：')
  } else if (!formData.value.legalPersonIdCardNo) {
    return MessagePlugin.error('请填写身份证号：')
  } else if (!formData.value.businessLicense.length) {
    return MessagePlugin.error('请上传营业执照：')
  }
  // 重置表单
  formVisible.value = false
  emit('handleSubmit', {
    ...formData.value,
    businessLicense: formData.value.businessLicense[0].url
  })
}
// 表单校验
const rules = {
  name: [
    // 企业名称
    {
      required: true,
      message: '请输入企业名称',
      type: 'error',
      trigger: 'blur'
    }
  ],
  businessLicense: [
    {
      required: true,
      message: '请输入统一社会信用代码',
      type: 'error',
      trigger: 'blur'
    }
  ],
  idNumber: [
    // 统一社会信用代码
    {
      required: true,
      message: '请输入统一社会信用代码',
      type: 'error',
      trigger: 'blur'
    }
  ],
  //法人代表姓名
  legalPersonName: [
    {
      required: true,
      message: '请输入法定代表人姓名',
      type: 'error',
      trigger: 'blur'
    }
  ],
  legalPersonIdCardNo: [
    {
      required: true,
      message: '请输入身份证号码',
      type: 'error',
      trigger: 'blur'
    }
  ]
}
// 点击取消关闭
const onClickCloseBtn = () => {
  // 重置表单
  formVisible.value = false
  emit('handleClose')
}
//获取审核未通过原因
const getAuthFailFunc = () => {
  getAuthFail().then((res) => {
    reason.value = res.data.rejectReason
  })
}
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    formVisible.value = props.visible
    certificationStatus.value = props.certificationStatus
    if (certificationStatus.value === 3) getAuthFailFunc()
  }
)
</script>
<style scoped lang="less">
.authFail {
  display: flex;
  align-items: center;
  img {
    width: 87px;
    height: 87px;
    margin-right: 20px;
  }
}
:deep(.t-form) {
  display: block !important;
}
/* @import url(); 引入css类 */
:deep(.t-dialog__footer) {
  display: flex;
  justify-content: flex-end;
  padding: 0 32px 24px;
}
.reset {
  padding: 6px 8px;
  width: auto !important;
  line-height: 22px;
}
.btn-submit {
  margin-left: 15.5px;
  width: 60px;
}
:deep(.t-form-item__cityCode) {
  margin-bottom: 30px !important;
}
:deep(.t-form-item__intentionScope) {
  margin-bottom: 30px !important;
}
:deep(.t-form) {
  width: 100% !important;
  justify-content: start !important;
  .t-col {
    flex: 2;
  }
  .t-col:first-child {
    margin-right: 30px;
    flex: 1.16;
  }
}
:deep(.t-size-s) {
  color: var(--color-bk1);
}
:deep(.t-upload__tips.t-size-s) {
  color: var(--color-bk4);
}
.wt-400 {
  width: 372px;
}
:deep(.t-dialog__body) {
  padding-left: 74px;
}
:deep(.t-form__item:nth-child(2)) {
  position: relative;
  right: 40px;
}
</style>
