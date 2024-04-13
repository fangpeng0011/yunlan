<!--  -->
<template>
  <div class="setting">
    <!-- 引导词 -->
    <div class="guide">
      <img src="../../assets/default/settingBg.png" />
    </div>
    <!-- 具体步骤 -->
    <div class="step">
      <div class="stepOne stepItem">
        <img src="../../assets/default/stepOne.png" />
        <div class="stepBox">
          <div class="stepContent">
            <div class="setpTitle">资质认证</div>
            <div class="setpIntroduce">平台会保护你的个人信息</div>
          </div>
          <div
            class="btn bt"
            :class="
              certificationStatus === 2
                ? 'btn-successGreen'
                : certificationStatus === 1
                ? 'btn-ing'
                : certificationStatus === 3
                ? 'btn-fail'
                : 'btn-red'
            "
            @click="handleServiceAuth"
          >
            {{
              certificationStatus === 2
                ? '已完成'
                : certificationStatus === 1
                ? '认证中'
                : certificationStatus === 3
                ? '认证失败'
                : '去认证'
            }}
          </div>
        </div>
      </div>
      <div class="stepTwo stepItem">
        <img src="../../assets/default/stepTwo.png" />
        <div class="stepBox">
          <div class="stepContent">
            <div class="setpTitle">服务技能设置</div>
            <div class="setpIntroduce">设置完成后，方可为您推荐订单</div>
          </div>
          <div
            class="btn bt"
            :class="serveSkillStatus ? 'btn-successGreen' : ''"
            @click="handleServiceSkill"
          >
            {{ serveSkillStatus ? '已完成' : '去设置' }}
          </div>
        </div>
      </div>
      <div class="stepThree stepItem">
        <img src="../../assets/default/stepThree.png" />
        <div class="stepBox">
          <div class="stepContent">
            <div class="setpTitle">服务范围设置</div>
            <div class="setpIntroduce">设置完成后，方可为您推荐订单</div>
          </div>
          <div
            class="btn bt"
            :class="serveRangeStatus ? 'btn-successGreen' : ''"
            @click="handleServiceRange"
          >
            {{ serveRangeStatus ? '已完成' : '去设置' }}
          </div>
        </div>
      </div>
      <div class="stepFour stepItem">
        <img src="../../assets/default/stepFour.png" />
        <div class="stepBox">
          <div class="stepContent">
            <div class="setpTitle">接单设置</div>
            <div class="setpIntroduce">开启接单后，方可进行接单哦</div>
          </div>
          <t-switch :value="canPickUp" @change="handlePickUpStatus" />
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <button
      class="bt"
      :class="settingsStatus ? 'success' : 'fail'"
      type="submit"
      @click="toIndex"
    >
      进入首页
    </button>
    <serviceSkill
      :visible="visible"
      :serviceData="serviceSkillP.data"
      @handleClose="handleClose"
      @handleSubmit="handleSubmit"
    ></serviceSkill>
    <serviceRange
      :openCity="openCity.data"
      :serviceRangeR="serviceRangeR"
      :visible="rangeVisible"
      @handleClose="handleClose"
      @handleSubmit="handleRange"
    ></serviceRange>
    <Auth
      :visible="authVisible"
      @handleClose="handleClose"
      @handleSubmit="handleAuth"
      :certificationStatus="certificationStatus"
    ></Auth>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import serviceSkill from './components/serviceSkill.vue'
import serviceRange from './components/serviceRange.vue'
import Auth from './components/auth.vue'
import {
  getSettingStatus,
  setPickUpStatus,
  getServiceSkillAll,
  updateServiceSkill,
  getOpenCity,
  setServiceRanges,
  getSettingInfo,
  postAuth
} from '@/api/setting'
import { useUserStore } from '@/store'
import { MessagePlugin } from 'tdesign-vue-next'
const visible = ref(false) // 选择服务技能弹窗
const rangeVisible = ref(false) // 选择服务范围弹窗
const authVisible = ref(false) //资质认证弹窗
const canPickUp = ref(false) //是否开启接单
const settingsStatus = ref(false) //是否配置完成
const serveRangeStatus = ref(false) //是否配置服务范围
const serveSkillStatus = ref(false) //是否配置服务技能
const certificationStatus = ref(0) //是否实名认证
const serviceSkillP = reactive({
  data: []
})
const openCity = reactive({
  data: []
})
const serviceRangeR = reactive({
  intentionScope: '',
  cityCode: '',
  location: ''
})
const router = useRouter()
// tab切换数据
const userStore = useUserStore()
// 生命周期
onMounted(() => {
  getSettingStatusFunc()
  getServiceSkillAllFunc()
  getOpenCityFunc()
  getSettingInfoFunc()
})
const toIndex = () => {
  if (settingsStatus.value) {
    router.push('/dashboard')
  }
}
//获取当前设置的服务范围信息
const getSettingInfoFunc = () => {
  getSettingInfo().then((res) => {
    serviceRangeR.intentionScope = res.data.intentionScope
    serviceRangeR.cityCode = res.data.cityCode
    serviceRangeR.location = res.data.location
  })
}
//获取开通城市列表
const getOpenCityFunc = () => {
  getOpenCity().then((res) => {
    openCity.data = res.data
  })
}
//获取服务技能及其下的服务技能所有数据
const getServiceSkillAllFunc = () => {
  getServiceSkillAll().then((res) => {
    serviceSkillP.data = res.data
  })
}
//修改接单状态
const handlePickUpStatus = () => {
  canPickUp.value = !canPickUp.value
  setPickUpStatus({
    canPickUp: canPickUp.value ? 1 : 0
  })
    .then((res) => {
      getSettingStatusFunc()
      MessagePlugin.success('设置成功')
    })
    .catch((err) => {})
}
//获取设置状态
const getSettingStatusFunc = async () => {
  await getSettingStatus()
    .then((res) => {
      canPickUp.value = res.data.canPickUp
      settingsStatus.value = res.data.settingsStatus
      serveRangeStatus.value = res.data.serveScopeSetted
      serveSkillStatus.value = res.data.serveSkillSetted
      certificationStatus.value = res.data.certificationStatus
      userStore.settingsStatus = res.data.settingsStatus
    })
    .catch((err) => {
      console.log(err)
    })
}
//上传资质认证
const handleAuth = (params) => {
  postAuth(params)
    .then((res) => {
      handleClose()
      getSettingStatusFunc()
    })
    .catch(() => {
      MessagePlugin.error('提交失败')
    })
}
//提交服务范围
const handleRange = (params) => {
  setServiceRanges(params).then((res) => {
    handleClose()
    getSettingStatusFunc()
    MessagePlugin.success('设置成功')
  })
}
//提交服务技能选择
const handleSubmit = (val) => {
  const params = val.map((item) => {
    return {
      serveTypeId: item.serveTypeId,
      serveTypeName: item.serveTypeName,
      serveItemId: item.serveItemId,
      serveItemName: item.serveItemName
    }
  })
  updateServiceSkill(params).then((res) => {
    handleClose()
    getSettingStatusFunc()
    MessagePlugin.success('设置成功')
  })
}
//打开资质认证弹窗
const handleServiceAuth = () => {
  if (certificationStatus.value === 0 || certificationStatus.value === 3) {
    authVisible.value = true
  }
}
//打开服务范围弹窗
const handleServiceRange = () => {
  rangeVisible.value = true
}
//打开服务技能弹窗
const handleServiceSkill = () => {
  visible.value = true
}
// 关闭弹窗
const handleClose = () => {
  visible.value = false
  rangeVisible.value = false
  authVisible.value = false
  getServiceSkillAllFunc()
  getSettingInfoFunc()
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
@import url('./index.less');
</style>
