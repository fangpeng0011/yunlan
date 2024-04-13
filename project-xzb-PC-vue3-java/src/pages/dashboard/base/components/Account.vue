<!-- 服务范围设置 -->
<template>
  <t-dialog
    v-model:visible="formVisible"
    :header="title"
    :on-close="onClickCloseBtn"
  >
    <template #body>
      <t-row>
        <t-form ref="form" :data="formData" label-width="80px" :rules="rules">
          <t-form-item label="户名：" name="name">
            <t-input
              v-model="formData.name"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item label="开户行：" name="area" label-width="80px">
            <t-select
              v-model="formData.province"
              class="wt-400 province"
              placeholder="请选择省份"
              :options="
                provinceData.map((item) => {
                  return { label: item.label, value: item.code }
                })
              "
              @change="handleSelectProvince"
            />
            <t-select
              v-model="formData.city"
              class="wt-400 city"
              placeholder="请选择市"
              :options="cityList"
              @change="handleSelectCity"
            />
            <t-select
              v-model="formData.district"
              class="wt-400 city"
              placeholder="请选择区"
              :options="areaList"
              @change="handleSelectArea"
            />
          </t-form-item>
          <t-form-item label="银行：" name="bankName" label-width="80px">
            <t-select
              v-model="formData.bankName"
              class="wt-400"
              placeholder="请输入"
              :options="bankList"
              clearable
            />
          </t-form-item>
          <t-form-item label="网点：" name="branch">
            <t-input
              v-model="formData.branch"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item label="银行账号：" name="account">
            <t-input
              v-model="formData.account"
              class="wt-400"
              placeholder="请输入"
              clearable
            />
          </t-form-item>
          <t-form-item label="开户证明：" name="accountCertification">
            <t-upload
              action="/api/publics/storage/upload"
              v-model="formData.accountCertification"
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
    </template>
    <template #footer>
      <div class="bt bt-grey btn-submit" @click="onClickCloseBtn">
        <span>取消</span>
      </div>
      <div type="submit" class="bt btn-submit" @click="handleSubmit">
        <span>提交</span>
      </div>
    </template>
  </t-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, onMounted } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { validateIdCard, validateCodeSocial } from '@/utils/validate'
import { cityData, provinceData, areaData } from '@/utils/commonData'
import { forEach } from 'lodash'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  formData: {
    type: Object,
    default: () => {}
  }
})
const token = localStorage.getItem('xzb')
const bankList = ref([
  { value: '1', label: '中国工商银行' },
  { value: '2', label: '中国建设银行' },
  { value: '3', label: '中国邮政储蓄银行' },
  { value: '4', label: '中国农业银行' },
  { value: '5', label: '北京银行' },
  { value: '6', label: '北京农商银行' },
  { value: '7', label: '招商银行' }
] as any)
const provinceIndex = ref(null)
const cityIndex = ref(null)
const cityList = ref([] as any) //市
const areaList = ref([]) //区
const form = ref(null)
onMounted(() => {})
//选择省份回显市
const handleSelectProvince = (e) => {
  provinceIndex.value = provinceData.findIndex((item) => item.code === e)
  cityList.value = cityData[provinceIndex.value]
  areaList.value = []
  formData.value.city = ''
  formData.value.district = ''
}
//选择市回显区
const handleSelectCity = (e) => {
  cityIndex.value = cityData[provinceIndex.value].findIndex(
    (item) => item.value === e
  )
  formData.value.district = ''
  areaList.value = areaData[provinceIndex.value][cityIndex.value]
}
//选择区
const handleSelectArea = (e) => {}
// 上传图片失败
const handleFail = (file) => {
  console.log(file)
  MessagePlugin.error(`文件上传失败`)
}
//上传成功
const handleSuccess = (params) => {
  formData.value.accountCertification = [
    { url: params.response.data.url, name: '' }
  ]
}
// 触发父级事件
const emit = defineEmits(['handleClose', 'handleSubmit'])

// 表单数据
const formData = ref<any>({
  name: '',
  bankName: '',
  account: '',
  branch: '',
  accountCertification: [],
  province: '',
  city: '',
  district: '',
  type: 1
})
// 弹窗标题
const title = ref('账户设置')
// 弹窗
const formVisible = ref(false)

const handleSubmit = (result) => {
  if (!formData.value.city) {
    return MessagePlugin.error('请选择城市')
  } else if (!formData.value.district) {
    return MessagePlugin.error('请选择区域')
  } else if (!formData.value.province) {
    return MessagePlugin.error('请选择省')
  } else if (!formData.value.name) {
    return MessagePlugin.error('请填写户名')
  } else if (!formData.value.bankName) {
    return MessagePlugin.error('请选择银行')
  } else if (!formData.value.branch) {
    return MessagePlugin.error('请填写网点')
  } else if (!formData.value.account) {
    return MessagePlugin.error('请填写银行账号')
  } else if (!formData.value.accountCertification.length) {
    return MessagePlugin.error('请上传开户证明')
  }
  // 重置表单
  formVisible.value = false
  formData.value.province = provinceData.filter(
    (item) => item.code === formData.value.province
  )[0].label
  formData.value.city = cityList.value.filter(
    (item) => item.value === formData.value.city
  )[0].label
  formData.value.district = areaList.value.filter(
    (item) => item.value === formData.value.district
  )[0].label
  emit('handleSubmit', {
    ...formData.value,
    accountCertification: formData.value.accountCertification[0].url,
    bankName:
      bankList.value[
        bankList.value.findIndex(
          (item) => item.value === formData.value.bankName
        )
      ].label
  })
}
// 表单校验
const rules = {
  name: [
    // 企业名称
    {
      required: true,
      message: '请输入户名',
      type: 'error',
      trigger: 'blur'
    }
    // {
    //   min: 4,
    //   message: '企业名称最少4个字'
    // },
    // {
    //   max: 50,
    //   message: '企业名称最多50个字'
    // },
    // {
    //   validator: (val) => {
    //     const reg = /^[\u4e00-\u9fa5]{4,50}$/
    //     if (reg.test(val)) {
    //       return true
    //     }
    //     return false
    //   },
    //   trigger: 'blur',
    //   type: 'error',
    //   message: '请输入正确格式的企业名称'
    // }
  ],
  bankName: [
    {
      required: true,
      message: '请选择银行',
      type: 'error',
      trigger: 'blur'
    }
  ],
  accountCertification: [
    {
      required: true,
      message: '请上传开户证明',
      type: 'error',
      trigger: 'blur'
    }
  ],
  area: [
    {
      required: true,
      message: '请选择区',
      type: 'error',
      trigger: 'blur'
    }
    // {
    //   validator: validateCodeSocial,
    //   trigger: 'blur',
    //   type: 'error',
    //   message: '请输入正确格式的统一社会信用代码'
    // },
    // {
    //   max: 18,
    //   message: '统一社会信用代码最多18个字'
    // }
  ],
  //法人代表姓名
  branch: [
    {
      required: true,
      message: '请输入网点',
      type: 'error',
      trigger: 'blur'
    }
    // {
    //   validator: (val) => {
    //     const reg = /^[\u4e00-\u9fa5]{2,10}$/
    //     if (reg.test(val)) {
    //       return true
    //     }
    //     return false
    //   },
    //   trigger: 'blur',
    //   type: 'error',
    //   message: '请输入正确格式的法定代表人姓名'
    // },
    // {
    //   max: 10,
    //   message: '法定代表人姓名最多10个字'
    // },
    // {
    //   min: 2,
    //   message: '法定代表人姓名最少10个字'
    // }
  ],
  account: [
    {
      required: true,
      message: '请输入银行账号',
      type: 'error',
      trigger: 'blur'
    }
    // {
    //   validator: validateIdCard,
    //   trigger: 'blur',
    //   type: 'error',
    //   message: '请输入正确格式的身份证号码'
    // }
  ]
}
// 点击取消关闭
const onClickCloseBtn = () => {
  // 重置表单
  form.value.reset()
  formVisible.value = false
  emit('handleClose')
}
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    formVisible.value = props.visible

    if (props.formData.province && props.visible) {
      formData.value = props.formData
      // console.log(
      //   props.formData,
      //   formData.value,
      //   bankList.value.findIndex(
      //     (item) => item.label == formData.value.bankName
      //   ),
      //   'formData.value'
      // )
      // formData.value.bankName =
      //   bankList.value[
      // bankList.value.findIndex(
      //   (item) => item.label === formData.value.bankName
      // )
      //   ].value
      provinceIndex.value = provinceData.findIndex(
        (item) => item.label === formData.value.province
      )
      cityList.value = cityData[provinceIndex.value]

      cityIndex.value = cityList.value.findIndex(
        (item) => item.label === formData.value.city
      )

      areaList.value = areaData[provinceIndex.value][cityIndex.value]
      formData.value.province = provinceData.filter(
        (item) => item.label === formData.value.province
      )[0].code
      formData.value.city = cityList.value.filter(
        (item) => item.label === formData.value.city
      )[0].value
      formData.value.district = areaList.value.filter(
        (item) => item.label === formData.value.district
      )[0].value
    }
  }
)
</script>
<style scoped lang="less">
:deep(.t-dialog) {
  min-width: 628px;
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

:deep(.t-form-item__area) {
  .t-form__controls-content {
    display: flex;
    width: 372px;
    .t-select__wrap {
      flex: 1;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      .t-input__inner {
        max-width: 75px;
      }
    }
  }
}
</style>
