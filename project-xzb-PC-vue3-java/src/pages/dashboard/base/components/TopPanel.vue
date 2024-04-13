<template>
  <div class="TopPanel">
    <div class="left">
      <div class="left-item">
        <div class="title">总收入</div>
        <div class="left-content">
          <div class="num">
            <img src="../../../../assets/default/leijidingdan@2x.png" />
            <div class="text">12.56</div>
          </div>
          <div class="tips">累计订单金额（万元）</div>
        </div>
      </div>
      <div class="left-item">
        <div class="title">总退款</div>
        <div class="left-content">
          <div class="num">
            <img src="../../../../assets/default/icon-daizhifu@2x.png" />
            <div class="text">12.56</div>
          </div>
          <div class="tips">累计订单金额（万元）</div>
        </div>
      </div>
      <div class="left-item">
        <div class="title">订单总数</div>
        <div class="left-content">
          <div class="num">
            <img src="../../../../assets/default/icon-guanbi@2x.png" />
            <div class="text">12.56</div>
          </div>
          <div class="tips">累计订单金额（万元）</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">基础设置</div>
      <div class="right-content">
        <div class="right-item" @click="handleServiceSkill">
          <img src="../../../../assets/default/btn_top_fwjn.png" />
          <div class="tips">服务技能设置</div>
        </div>
        <div class="right-item" @click="handleServiceRange">
          <img src="../../../../assets/default/btn_top_fwfw.png" />
          <div class="tips">服务范围设置</div>
        </div>
        <div class="right-item" @click="handleAccount">
          <img src="../../../../assets/default/btn_top_zhanghu.png" />
          <div class="tips">账户设置</div>
        </div>
      </div>
    </div>
    <!-- 服务技能弹窗 -->
    <serviceSkill
      :visible="visible"
      :serviceData="serviceSkillP.data"
      @handleClose="handleClose"
      @handleSubmit="handleSubmit"
    ></serviceSkill>
    <!-- end -->
    <!-- 服务范围 -->
    <serviceRange
      :openCity="openCity.data"
      :serviceRangeR="serviceRangeR"
      :visible="rangeVisible"
      @handleClose="handleClose"
      @handleSubmit="handleRange"
    ></serviceRange>
    <!-- end -->
    <!-- 账户设置 -->
    <Account
      :visible="accountVisible"
      @handleClose="handleClose"
      @handleSubmit="handleAccountSubmit"
      :formData="formData"
    ></Account>
    <!-- end -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashboardBase'
}
</script>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import serviceSkill from '@/pages/setting/components/serviceSkill.vue'
import serviceRange from '@/pages/setting/components/serviceRange.vue'
import Account from './Account.vue'
import {
  getServiceSkillAll,
  updateServiceSkill,
  getOpenCity,
  setServiceRanges,
  getSettingInfo,
  postAccount,
  getAccountInfo
} from '@/api/setting'
import { bankList } from '@/utils/commonData'
import { MessagePlugin } from 'tdesign-vue-next'
onMounted(() => {
  getServiceSkillAllFunc()
  getOpenCityFunc()
  getSettingInfoFunc()
  getAccountInfoFunc()
})
const accountVisible = ref(false) //账户设置弹窗
const visible = ref(false) // 选择服务技能弹窗
const rangeVisible = ref(false) // 选择服务范围弹窗
// 服务技能
const serviceSkillP = reactive({
  data: []
})
// 开通城市
const openCity = reactive({
  data: []
})
// 服务范围
const serviceRangeR = reactive({
  intentionScope: '',
  cityCode: '',
  location: ''
})
const formData = ref({} as any)
//获取当前设置的服务范围信息
const getSettingInfoFunc = () => {
  getSettingInfo().then((res) => {
    serviceRangeR.intentionScope = res.data.intentionScope
    serviceRangeR.cityCode = res.data.cityCode
    serviceRangeR.location = res.data.location
  })
}
//获取账户设置信息
const getAccountInfoFunc = () => {
  getAccountInfo().then((res) => {
    formData.value.name = res.data.name
    formData.value.bankName =
      bankList[
        bankList.findIndex((item) => item.label === res.data.bankName)
      ].value
    formData.value.province = res.data.province
    formData.value.city = res.data.city
    formData.value.district = res.data.district
    formData.value.branch = res.data.branch
    formData.value.account = res.data.account
    formData.value.accountCertification = [
      { url: res.data.accountCertification, name: '' }
    ]
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
// 关闭弹窗
const handleClose = () => {
  visible.value = false
  rangeVisible.value = false
  accountVisible.value = false
  getServiceSkillAllFunc()
  getSettingInfoFunc()
  getAccountInfoFunc()
}
//提交账户设置
const handleAccountSubmit = (params) => {
  postAccount(params).then((res) => {
    handleClose()
    MessagePlugin.success('提交成功')
  })
}
//提交服务范围
const handleRange = (params) => {
  setServiceRanges(params).then((res) => {
    handleClose()
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
  // 更新服务技能
  updateServiceSkill(params).then((res) => {
    handleClose()
    MessagePlugin.success('设置成功')
  })
}
//打开服务技能弹窗
const handleServiceSkill = () => {
  visible.value = true
}
//打开服务范围弹窗
const handleServiceRange = () => {
  rangeVisible.value = true
}
//打开账户设置弹窗
const handleAccount = () => {
  accountVisible.value = true
}
</script>

<style lang="less" scoped>
.TopPanel {
  display: flex;
  width: 100%;
  .left,
  .right {
    background-color: white;
    height: 188px;
  }
  .title {
    font-size: 18px;
    color: var(--color-bk1);
    font-weight: bold;
    margin-bottom: 32px;
  }
  .left {
    width: calc((100% - 20px) * 0.629);
    margin-right: 20px;
    padding-top: 30px;
    padding-left: 26px;
    padding-right: 46.5px;
    display: flex;
    justify-content: space-between;
    .left-item {
      .left-content {
        .num {
          display: flex;
          align-items: center;
        }
        .tips {
          font-size: 14px;
          color: #9f9f9f;
          padding-left: 55px;
          padding-top: 10px;
        }
        img {
          width: 36px;
          height: 36px;
          margin-right: 14px;
        }
        .text {
          font-size: 34px;
          color: var(--color-bk1);
          font-weight: bold;
        }
      }
    }
  }
  .right {
    width: calc((100% - 20px) * 0.371);
    padding: 30px;

    .right-content {
      display: flex;
      justify-content: space-between;
    }
    .title {
      margin-bottom: 29px;
    }
    .right-item {
      text-align: center;
      cursor: pointer;
      img {
        width: 35px;
        height: 35px;
      }
      .tips {
        font-size: 14px;
        color: var(--color-bk1);
        margin-top: 12px;
      }
    }
  }
}
</style>
