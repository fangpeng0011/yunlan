<!-- 个人中心 -->
<template>
  <div class="bg-wt contentBox">
    <div class="headbox">基本设置</div>
    <div class="bodybox">
      <t-form
        ref="form"
        label-align="top"
        :rules="rules"
        :data="formData"
        @submit="updatepersonalData"
      >
        <div class="leftBox">
          <t-form-item label="账号" name="account">
            <t-input
              v-model="formData.account"
              class="form-item-content"
              placeholder="请输入"
              :style="{ minWidth: '134px' }"
              clearable
            />
          </t-form-item>
          <t-form-item label="昵称" name="nickname">
            <t-input
              v-model="formData.nickname"
              class="form-item-content"
              placeholder="请输入"
              :style="{ minWidth: '134px' }"
              clearable
            />
          </t-form-item>
          <t-form-item label="个人简介" name="description">
            <t-textarea
              v-model="formData.description"
              class="form-item-content"
              placeholder="请输入"
              :style="{ minWidth: '134px' }"
              clearable
            />
          </t-form-item>
          <t-form-item label="所在省市" name="region">
            <t-cascader
              v-model="formData.region"
              class="form-item-content"
              placeholder="请选择"
              :style="{ minWidth: '134px' }"
              clearable
              filterable
              :options="City"
            />
          </t-form-item>
          <t-form-item label="详细地址" name="address">
            <t-input
              v-model="formData.address"
              class="form-item-content"
              placeholder="请输入"
              :style="{ minWidth: '134px' }"
              clearable
            />
          </t-form-item>
          <div class="updateInfo" @click="updatepersonalData(form)">
            <span class="bt">更新信息</span>
          </div>
        </div>
        <div class="rightBox">
          <div class="t-form__label file">头像</div>
          <t-upload
            ref="uploadRef1"
            v-model="file"
            :action="actions"
            :is-batch-upload="true"
            :auto-upload="false"
            :tips="tips"
            placeholder="支持jpg、png、jpeg格式，大小不超过2M"
            theme="image"
            accept="image/*"
            :allow-upload-duplicate-file="true"
            @remove="remove"
          >
          </t-upload>
          <!-- 外部也可点击触发上传功能 -->
          <button class="upbtn" @click="uploadImg">
            <!-- 使用svg图 -->
            <span>
              <svg
                t="1674963121719"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2386"
                width="128"
                height="128"
              >
                <path
                  d="M544 736a32 32 0 0 1-64 0V288a32 32 0 0 1 64 0z"
                  p-id="2387"
                ></path>
                <path
                  d="M800 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0v160zM496 271.36l-152.32 166.4a32 32 0 1 1-47.36-43.52l176-192a32 32 0 0 1 47.36 0l176 192a32 32 0 0 1-47.36 43.52z"
                  p-id="2388"
                ></path>
              </svg>
            </span>
            <!-- 判断头像框内是否有内容，有内容显示重新上传，没有内容显示上传文件 -->
            {{ file[0].url !== files[0].url ? '重新上传' : '上传文件' }}
          </button>
          <t-form-item label="联系电话" name="phone">
            <t-input
              v-model="formData.phone"
              class="form-item-content"
              placeholder="请输入"
              :style="{ minWidth: '134px' }"
              clearable
            />
          </t-form-item>
        </div>
      </t-form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'UserIndex'
}
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 城市选择框数据
import { City } from './city'
// 引入接口
import { getpersonal, updatepersonal } from '@/api/user'
// 引用正则
import { validatePhone } from '@/utils/validate'

const formData = ref({
  account: '',
  nickname: '',
  description: '',
  region: '',
  address: '',
  phone: '',
  headPortrait: ''
})
const form = ref(null) // 表单
const tips = ref('支持jpg、png、jpeg格式，大小不超过2M')
// 显示的图片
const file = ref([
  {
    url: ''
  }
])
// 默认图片
const files = ref([
  {
    url: 'https://yjy-oss-videos.oss-accelerate.aliyuncs.com/grzxhz.jpg'
  }
])
// 监听file的变化,控制提示语，让提示语消失,需求更改，暂时不用，先干掉，后期有需要再加
// watch(file, (newVal, oldVal) => {
//   if (newVal[0] && newVal[0].url !== files.value[0].url) {
//     tips.value = ''
//   } else {
//     tips.value = '支持jpg、png、jpeg格式，大小不超过2M'
//   }
// })
const uploadRef1 = ref() // 上传图片
// 移除图片时将图片设置为默认图片
const remove = () => {
  file.value = files.value
}
// 获取接口数据
const getpersonalData = async () => {
  const res = await getpersonal()
  formData.value = res.data
  file.value[0].url = res.data.headPortrait
}
// 更新信息
const updatepersonalData = (result: any) => {
  if (result.validateResult) {
    updatepersonal(formData.value).then((res) => {})
  }
  uploadRef1.value.uploadFiles()
}
// 上传图片按钮
const uploadImg = () => {
  // 执行triggerUpload方法
  uploadRef1.value.triggerUpload()
}
// 生命周期
onMounted(() => {
  getpersonalData()
})
const actions = '' // 上传的地址
const imageUrl = ref('') // 上传的图片路径
// 校验
const rules = ref({
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  nickname: [
    {
      required: true,
      message: '请输入昵称',
      trigger: 'blur'
    }
  ],
  description: [
    {
      required: true,
      message: '请输入个人简介',
      trigger: 'blur'
    }
  ],
  region: [
    {
      required: true,
      message: '请输入所在省市',
      trigger: 'change'
    }
  ],
  address: [
    {
      required: true,
      message: '请输入详细地址',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入联系电话',
      trigger: 'blur'
    },
    {
      validator: validatePhone,
      message: '请输入正确格式的手机号',
      type: 'error',
      trigger: 'blur'
    }
  ]
})
</script>

<style lang="less" scoped>
.contentBox {
  height: 90vh;
  padding-top: 81px;
  padding-left: 90px;
  padding-right: 90px;
  .headbox {
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 18px;
    color: var(--color-black);
    margin-bottom: 26px;
  }
  .bodybox {
    display: flex;
    .leftBox {
      width: 48%;
      height: 100%;
      background-color: #fff;
      margin-right: 100px;
      .upbutton {
        margin-top: 24px;
      }
    }
    .rightBox {
      width: 48%;
      height: 100%;
      background-color: #fff;
      :deep(.t-button .t-button__text) {
        color: var(--color-bk2);
      }
      .file {
        margin-bottom: 9px;
      }
    }
  }
}
.t-form {
  width: 100%;
  display: flex;
}
.updateInfo {
  width: 88px;
}
// 提示文字
:deep(.t-upload) {
  position: relative;
  .t-upload__tips {
    position: absolute;
    bottom: -66px;
    left: 18.5px;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-bk4);
  }
  .t-upload__card-name {
    display: none;
    position: absolute;
    bottom: -66px;
    left: 18.5px;
    color: var(--color-bk5);
  }
}
:deep(.t-upload__card-content, .t-upload__card-container) {
  width: 144px;
  height: 144px;
  // 圆
  border-radius: 50%;
}
</style>
