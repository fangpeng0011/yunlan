<!-- 快捷调试 -->
<template>
  <div class="easeRequest" @click="openApiModal">REQ</div>

  <t-dialog
    :visible="visible"
    close-on-overlay-click
    :on-close="closeModal"
    :footer="null"
    width="60%"
  >
    <t-form
      ref="form"
      :data="requestData"
      reset-type="initial"
      style="max-width: 100%"
    >
      <t-tabs
        v-model="defaultValue"
        theme="card"
        :addable="false"
        :on-change="changeReq"
      >
        <t-tab-panel
          v-for="data in requestData.list"
          :key="data.uuid"
          :value="data.uuid"
          :label="data.label"
          :removable="false"
        >
          <div class="formBox">
            <t-form-item name="type">
              <t-select
                v-model="data.type"
                class="demo-select-base"
                clearable
                filterable
              >
                <t-option
                  v-for="(item, index) in reqTypeList"
                  :key="index"
                  :value="item.label"
                  :label="item.label"
                >
                  {{ item.label }}
                </t-option>
              </t-select>
            </t-form-item>
            <t-form-item name="url">
              <t-input
                v-model="currentReqObj.value.url"
                placeholder="请输入内容"
                @Change="changeUrl"
              ></t-input>
            </t-form-item>
            <t-button @click="sendRequest">Send</t-button>
          </div>

          <t-tabs
            v-model="deafultReqSetting"
            :addable="false"
            :on-change="changeReqSetting"
          >
            <t-tab-panel
              v-for="item in reqSettingList"
              :key="item.key"
              :value="item.key"
              :label="item.value"
            >
              <table border="1px" cellspacing="0" cellpadding="0" class="table">
                <tr>
                  <th></th>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
                <tr
                  v-for="(item2, index2) in currentKeyList[deafultReqSetting]"
                  :key="index2"
                >
                  <td>
                    <t-checkbox :checked="Boolean(item2)"></t-checkbox>
                  </td>
                  <td>
                    <t-input
                      :value="String(item2)"
                      @change="changeKey($event, index2)"
                    />
                  </td>
                  <td>
                    <t-input
                      :value="
                        String(currentValueList[deafultReqSetting][index2])
                      "
                      @change="changeValue($event, index2)"
                    />
                  </td>
                </tr>
              </table>
            </t-tab-panel>
          </t-tabs>
        </t-tab-panel>
      </t-tabs>
      <div
        v-if="JSON.stringify(responseData.value) !== '{}'"
        class="responseData"
      >
        <label>Response</label>
        <div
          v-html="
            formatJson(responseData.value, (err) => {
              MessagePlugin.error(err)
            })
          "
        ></div>
      </div>
    </t-form>
    <t-loading attach="#alice" :loading="loading"></t-loading>
  </t-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'
import { MessagePlugin } from 'tdesign-vue-next'
import { useSettingStore } from '@/store'
import { setObjToUrlParams } from '@/utils/request/utils'
import { getUrlParams, formatJson } from '@/utils/index'

const settingStore = useSettingStore()
const requestData = reactive({
  list: [
    // 默认如果没有接口的话，保证可以显示一个可供使用
    {
      type: 'GET',
      uuid: '',
      url: 'Untitled Request'
    }
  ] as any
}) // 当前页面接口数据
const loading = ref(false) // 加载
const visible = ref(false) // 是否显示
const defaultValue = ref('') // 当前默认展示接口tab
const deafultReqSetting = ref('params') // 当前默认展示接口下配置项
const currentReqObj = reactive({
  // 当前选择的接口
  value: {} as any
})
const responseData = reactive({
  value: {}
})
const currentKeyList = reactive({
  params: [''],
  headers: [''],
  body: ['']
} as any)
const currentValueList = reactive({
  params: [''],
  headers: [''],
  body: ['']
})
const isShowResponseData = ref(false)
// 监听接口配置tabs时触发（重置currentKeyList和currentValueList）和接口tab时触发
watch(
  () => defaultValue.value,
  () => {
    if (!defaultValue.value) return
    // 当前接口的配置信息
    const obj = requestData.list.filter(
      (item) => item.uuid === defaultValue.value
    )[0]
    currentReqObj.value = obj
    // 拿到接口配置项对应具体的对象值
    const flag = requestData.list.filter(
      (item) => item.uuid === defaultValue.value
    )[0] as any
    const keyList = Object.keys(currentKeyList)
    // 给接口下的params和headers以及body赋值
    keyList.forEach((item) => {
      currentKeyList[item] =
        JSON.stringify(flag[item]) === '{}'
          ? ['']
          : Object.keys(flag[item]).concat(['']) // 当存在某一个配置项值为空时也应展示一行默认可以填写
      currentValueList[item] =
        JSON.stringify(flag[item]) === '{}'
          ? ['']
          : Object.values(flag[item]).concat([''])
    })
    responseData.value = flag.res
  }
)

// 点击接口tab默认展示params下的配置项
watch(
  () => defaultValue.value,
  () => {
    deafultReqSetting.value = 'params'
  }
)
// 监听接口队列数据改变
watch(
  () => settingStore.requestList,
  (newValue, oldValue) => {
    initData()
    console.log(
      'settingStore.requestList改变了',
      newValue,
      oldValue,
      settingStore.requestList
    )
  },
  {
    deep: true
  }
)

onMounted(() => {
  // 解决从登录页面跳转到无请求接口的页面时，登录接口没有被捕获
  initData()
})

const initData = () => {
  // 兼容当切换页面settingStore.requestList为空时的情况
  if (!settingStore.requestList.length) {
    requestData.list = [
      {
        type: 'GET',
        uuid: '',
        url: 'Untitled Request'
      }
    ]
    responseData.value = {}
    currentKeyList.params = ['']
    currentKeyList.headers = ['']
    currentKeyList.body = ['']
    currentValueList.params = ['']
    currentValueList.headers = ['']
    currentValueList.body = ['']
    currentReqObj.value = {}
    // 当切换页面且当前页面无接口时，默认选中第一个接口信息并展示
    defaultValue.value = requestData.list[0].uuid
  } else {
    // 监听初始化时给页面赋值接口队列
    requestData.list = settingStore.requestList
    // 监听初始化时默认显示第一个接口的tabs
    defaultValue.value = requestData.list[0].uuid
    responseData.value = requestData.list[0].res
  }
}

const reqTypeList = reactive([
  {
    value: '1',
    label: 'GET'
  },
  {
    value: '2',
    label: 'POST'
  },
  {
    value: '3',
    label: 'PUT'
  },
  {
    value: '4',
    label: 'DELETE'
  },
  {
    value: '5',
    label: 'OPTIONS'
  }
])
const reqSettingList = reactive([
  {
    key: 'params',
    value: 'Params'
  },
  {
    key: 'headers',
    value: 'Headers'
  },
  {
    key: 'body',
    value: 'Body'
  }
])

const changeUrl = (e) => {
  currentReqObj.value.url = e
  const obj = getUrlParams(e)
  // 改变地址栏删除完所有的链接参数后还要确保params下留一行
  currentKeyList.params = Object.keys(obj).length ? Object.keys(obj) : ['']
  currentValueList.params = Object.values(obj)
}

// 监听每一行输入并同步更新至上方baseUrl
const InputchangeUrl = () => {
  if (deafultReqSetting.value === 'params') {
    currentReqObj.value.params = {}
    currentKeyList.params.forEach((item, index1) => {
      if (!item) return
      currentReqObj.value.params = {
        ...currentReqObj.value.params,
        [item]: currentValueList.params[index1]
      }
      currentReqObj.value.url = decodeURIComponent(
        setObjToUrlParams(
          String(currentReqObj.value.url).split('?')[0],
          currentReqObj.value.params
        )
      )
    })
  }
}

// 改变value值
const changeValue = (e, index) => {
  currentValueList[deafultReqSetting.value][index] = e
  // 输入的值不为空并且当前这一行key和value都有值，并且最后一项key和value都不空的情况下才在最后新加一行
  if (
    e &&
    currentKeyList[deafultReqSetting.value][index] &&
    currentValueList[deafultReqSetting.value][index] &&
    currentKeyList[deafultReqSetting.value][
      currentKeyList[deafultReqSetting.value].length - 1
    ] &&
    currentValueList[deafultReqSetting.value][
      currentValueList[deafultReqSetting.value].length - 1
    ]
  ) {
    currentKeyList[deafultReqSetting.value] = currentKeyList[
      deafultReqSetting.value
    ].concat([''])
  }
  InputchangeUrl()
}
// 改变key值
const changeKey = (e, index) => {
  currentKeyList[deafultReqSetting.value][index] = e
  if (
    e &&
    currentKeyList[deafultReqSetting.value][index] &&
    currentValueList[deafultReqSetting.value][index] &&
    currentKeyList[deafultReqSetting.value][
      currentKeyList[deafultReqSetting.value].length - 1
    ] &&
    currentValueList[deafultReqSetting.value][
      currentValueList[deafultReqSetting.value].length - 1
    ]
  ) {
    currentKeyList[deafultReqSetting.value] = currentKeyList[
      deafultReqSetting.value
    ].concat([''])
  }
  InputchangeUrl()
}
// 将currentKeyList和currentValueList的值并入currentReqObj中
const updateCurrentReqObj = () => {
  currentReqObj.value[deafultReqSetting.value] = {}
  currentKeyList[deafultReqSetting.value].forEach((item, index1) => {
    if (!item) return
    currentReqObj.value[deafultReqSetting.value] = {
      ...currentReqObj.value[deafultReqSetting.value],
      [item]: currentValueList[deafultReqSetting.value][index1]
    }
  })
}
// 发送接口
const sendRequest = () => {
  if (!currentReqObj.value.url) {
    return MessagePlugin.error('接口地址不能为空')
  }
  loading.value = true
  updateCurrentReqObj()
  axios({
    method: `${currentReqObj.value.type}`.toLowerCase(),
    baseURL: currentReqObj.value.url,
    headers: currentReqObj.value.headers,
    data: currentReqObj.value.body
  })
    .then((res) => {
      loading.value = false
      isShowResponseData.value = true
      responseData.value = res.data
    })
    .catch(() => {
      MessagePlugin.error('接口请求失败')
      loading.value = false
    })
}
// 改变接口tabs
const changeReq = (value) => {
  defaultValue.value = value
  isShowResponseData.value = false
}
// 改变接口配置tabs
const changeReqSetting = (value) => {
  deafultReqSetting.value = value
}
// 打开弹出框
const openApiModal = () => {
  visible.value = !visible.value
}
// 关闭弹出框
const closeModal = () => {
  visible.value = false
}
</script>
<style scoped lang="less">
:deep(.t-dialog__position.t-dialog--top) {
  padding-top: 5vh;
  .t-dialog {
    max-height: 80vh;
    overflow-y: scroll;
  }
  .t-dialog::-webkit-scrollbar {
    width: 8px;
    background: var(--color-bk10);
    border-radius: 0 12px 12px 12px;
  }
  .t-dialog::-webkit-scrollbar-thumb {
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: #d9d9d9;
  }
}
.easeRequest {
  position: fixed;
  right: 10px;
  top: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--color-main);
  opacity: 0.5;
  z-index: 99999;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.t-form {
  width: 100%;
  display: block !important;
  :deep(.t-form__controls) {
    margin-left: 0px !important;
  }
  .table {
    border-color: #ccc;
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    td {
      padding: 3px 6px;
    }
  }
  .t-tabs {
    .t-tabs__content {
      .formBox {
        padding: 0px;
        display: flex;
        margin-top: 20px;
        .t-button {
          margin-left: 10px;
          :deep(.t-button__text) {
            color: var(--color-white);
          }
        }
        .t-form-item__type,
        .t-form-item__url {
          display: inline-block;
        }
        .t-form-item__url {
          right: 0px !important;
        }
        .t-form-item__type {
          width: 90px;
          :deep(.t-form__controls) {
            width: 90px;
          }
        }
      }
    }
  }
  .responseData {
    label {
      display: block;
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 10px;
    }
  }
}
</style>
