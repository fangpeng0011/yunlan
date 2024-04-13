<template>
  <t-form
    ref="form"
    :class="['item-container', `register-${type}`]"
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="onSubmit"
  >
    <template v-if="type == 'phone'">
      <t-form-item name="phone">
        <t-input
          v-model="formData.phone"
          :maxlength="11"
          size="large"
          placeholder="请输入您的手机号"
        >
          <template #prefix-icon>
            <t-icon class="phone" />
          </template>
        </t-input>
      </t-form-item>
    </template>

    <template v-if="type == 'phone'">
      <t-form-item class="verification-code" name="verifyCode">
        <t-input
          v-model="formData.verifyCode"
          size="large"
          placeholder="请输入验证码"
        >
          <template #prefix-icon> <t-icon class="verifyCode" /> </template
        ></t-input>
        <t-button
          variant="outline"
          :disabled="countDown > 0"
          @click="handleCounterFunc"
        >
          {{ countDown == 0 ? '获取验证码' : `${countDown}秒后可重发` }}
        </t-button>
      </t-form-item>
    </template>
    <t-form-item name="password">
      <t-input
        v-model="formData.password"
        size="large"
        :type="showPsw ? 'text' : 'password'"
        clearable
        placeholder="请输入最少8位密码"
      >
        <template #prefix-icon>
          <t-icon class="password" />
        </template>
        <template #suffix-icon>
          <t-icon
            :name="showPsw ? 'browse' : 'browse-off'"
            @click="showPsw = !showPsw"
          />
        </template>
      </t-input>
    </t-form-item>

    <t-form-item>
      <t-button class="bt bt-red" block size="large" type="submit">
        注册
      </t-button>
    </t-form-item>
    <t-form-item class="toRegister">
      <div>
        <span>已有账号？</span>
        <span class="btn" @click="toLogin">去登录</span>
      </div>
    </t-form-item>
    <!-- <div class="switch-container">
      <span
        class="tip"
        @click="switchType(type == 'phone' ? 'email' : 'phone')"
        >{{ type == 'phone' ? '使用邮箱注册' : '使用手机号注册' }}</span
      >
    </div> -->
  </t-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { useCounter } from '@/hooks'
import { validatePhone } from '@/utils/validate'
import { register } from '@/api/user'

const FORM_RULES = {
  phone: [
    { required: true, message: '手机号必填', type: 'error' },
    {
      validator: validatePhone,
      message: '请输入正确格式的账号',
      type: 'error',
      trigger: 'change'
    }
  ],
  password: [
    { required: true, message: '密码必填', type: 'error' },
    {
      min: 8,
      message: '输入密码最少8位',
      type: 'error',
      trigger: 'change'
    }
  ],
  verifyCode: [{ required: true, message: '验证码必填', type: 'error' }]
}

const type = ref('phone')

const form = ref()
const formData = reactive({
  phone: '',
  password: '',
  verifyCode: ''
}) as any
let debounce = ref(false)

const showPsw = ref(false)

const [countDown, handleCounter] = useCounter()

const emit = defineEmits(['handleTo', 'registerSuccess'])
// 注册
const handleCounterFunc = async () => {
  if (!formData.phone) {
    return MessagePlugin.error('手机号不能为空')
  }
  const code = await handleCounter({
    bussinessType: 1,
    phone: formData.phone
  })
  formData.verifyCode = code
}
// 提交注册
const onSubmit = ({ validateResult, firstError, e }) => {
  e.preventDefault()

  if (validateResult === true) {
    if (debounce.value) {
      return MessagePlugin.error('请勿重复点击')
    }
    debounce.value = true
    register(formData).then((res) => {
      // MessagePlugin.success('注册成功')
      //
      setTimeout(() => {
        debounce.value = false
      }, 1000)
      if (res.code === 200) {
        MessagePlugin.success('注册成功')
        formData.phone = ''
        formData.password = ''
        formData.verifyCode = ''
        emit('handleTo', 'login')
      } else {
        MessagePlugin.error(res.data.msg || '注册失败')
      }
    })

    emit('registerSuccess')
  } else {
    MessagePlugin.error(firstError)
  }
}
const toLogin = () => {
  emit('handleTo', 'login')
}
</script>

<style lang="less" scoped>
@import url('../index.less');
</style>
