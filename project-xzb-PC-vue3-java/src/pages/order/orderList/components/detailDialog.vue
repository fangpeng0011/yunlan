<!-- 详情弹窗 -->
<template>
  <t-dialog
    v-model:visible="formVisible"
    header="订单信息"
    :width="777"
    :footer="false"
    :on-close="onClickCloseBtn"
  >
    <template #body v-if="formData">
      <div class="status pd" :class="formData.serveStatus == 5 ? 'grey' : ''">
        <span class="tag" v-if="formData.serveStatus === 0">待分配</span>
        <span class="tag" v-if="formData.serveStatus === 1">待上门</span>
        <span class="tag" v-if="formData.serveStatus === 2">待完工</span>
        <span class="tag" v-if="formData.serveStatus === 3">已完成</span>
        <span class="tag" v-if="formData.serveStatus === 4">已取消</span>
        <span class="tag" v-if="formData.serveStatus === 5">被退单</span>
        <span class="content" v-if="formData.serveStatus === 1"
          >请在
          {{
            formatDateTimeToDateTimeString(
              new Date(formData.ordersInfo.serveStartTime)
            )
          }}
          前上门服务</span
        >
      </div>
      <div class="body scollHeight" :class="isShowShadow ? 'shadow' : ''">
        <!-- 客户信息 -->
        <div class="card">
          <div class="leftBox">客户信息</div>
          <div class="rightBox">
            <div class="lineBox">
              <div class="left">
                <span class="label">客户姓名</span>
                <span class="item">{{
                  formData.customerInfo.contactsName
                }}</span>
              </div>
              <div class="right">
                <span class="label">客户电话</span>
                <span class="item">{{
                  formData.customerInfo.contactsPhone
                }}</span>
              </div>
            </div>
            <div class="lineBox">
              <div class="address">
                <div class="label">服务地址</div>
                <div class="item">{{
                  formData.customerInfo.serveAddress
                }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- end -->
        <!-- 服务信息 -->
        <div class="card">
          <div class="leftBox">服务信息</div>
          <div class="rightBox">
            <div class="lineBox">
              <div class="left">
                <span class="label">服务类型</span>
                <span class="item">{{ formData.serveInfo.serveTypeName }}</span>
              </div>
              <div class="right">
                <span class="label">服务名称</span>
                <span class="item">{{ formData.serveInfo.serveItemName }}</span>
              </div>
            </div>
            <div class="lineBox">
              <div class="left">
                <span class="label">服务数量</span>
                <span class="item"
                  >{{ formData.serveInfo.serveNum
                  }}{{ UNIT[formData.serveInfo.unit - 1].label }}</span
                >
              </div>
              <div class="right">
                <span class="label">服务费用</span>
                <span class="item"
                  >￥{{
                    formatNumber(formData.ordersInfo.ordersAmount * 0.997 * 0.3)
                  }}</span
                >
              </div>
            </div>
            <div
              class="lineBox"
              v-if="formData.serveStatus !== 0 && formData.serveStatus !== 5"
            >
              <div class="left">
                <span class="label">服务人员</span>
                <span class="item">{{
                  formData.serveInfo.institutionStaffName
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end -->
        <!-- 退款信息 -->
        <div class="card" v-if="formData.serveStatus === 4">
          <div class="leftBox">取消信息</div>
          <div class="rightBox">
            <div class="lineBox">
              <div class="left">
                <span class="label">取消时间</span>
                <span class="item">{{
                  formatDateTimeToDateTimeString(
                    new Date(formData.cancelInfo.cancelTime)
                  )
                }}</span>
              </div>
              <div class="right">
                <span class="label">取消原因</span>
                <span class="item">{{ formData.cancelInfo.cancelReason }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end  -->
        <!-- 订单信息 -->
        <div class="card">
          <div class="leftBox">订单信息</div>
          <div class="rightBox">
            <div class="lineBox">
              <div class="left">
                <span class="label">订单编号</span>
                <span class="item">{{ formData.id }}</span>
              </div>
              <div class="right">
                <span class="label">预约时间</span>
                <span class="item">{{
                  formatDateTimeToDateTimeString(
                    new Date(formData.ordersInfo.serveStartTime)
                  )
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 服务记录 -->
        <div
          class="card"
          v-if="formData.serveStatus === 3 || formData.serveStatus === 2"
        >
          <div class="leftBox">服务记录</div>
          <div class="rightBox">
            <div class="lineBox">
              <div class="serviceBox">
                <div class="label">服务前照片</div>
                <div class="itemBox">
                  <div class="imgBox mb-10">
                    <t-image-viewer
                      :images="formData.serveInfo.serveBeforeImgs"
                      v-for="(item, index) in formData.serveInfo
                        .serveBeforeImgs"
                      :key="index"
                      :default-index="index"
                    >
                      <template #trigger="{ open }">
                        <div class="tdesign-demo-image-viewer__ui-image">
                          <img
                            alt="test"
                            :src="item"
                            class="tdesign-demo-image-viewer__ui-image--img"
                          />
                          <div
                            class="tdesign-demo-image-viewer__ui-image--hover"
                            @click="open"
                          >
                            <span><ZoomInIcon size="1.8em" /> </span>
                          </div>
                        </div>
                      </template>
                    </t-image-viewer>
                  </div>
                  <div class="item mb-5">
                    补充说明：{{ formData.serveInfo.serveBeforeIllustrate }}
                  </div>
                  <div class="time">
                    {{
                      formatDateTimeToDateTimeString(
                        new Date(formData.serveInfo.realServeStartTime)
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="lineBox" v-if="formData.serveStatus === 3">
              <div class="serviceBox">
                <div class="label">服务后照片</div>
                <div class="itemBox">
                  <div class="imgBox mb-10">
                    <t-image-viewer
                      :images="formData.serveInfo.serveAfterImgs"
                      v-for="(item, index) in formData.serveInfo.serveAfterImgs"
                      :key="index"
                      :default-index="index"
                    >
                      <template #trigger="{ open }">
                        <div class="tdesign-demo-image-viewer__ui-image">
                          <img
                            alt="test"
                            :src="item"
                            class="tdesign-demo-image-viewer__ui-image--img"
                          />
                          <div
                            class="tdesign-demo-image-viewer__ui-image--hover"
                            @click="open"
                          >
                            <span><ZoomInIcon size="1.8em" /> </span>
                          </div>
                        </div>
                      </template>
                    </t-image-viewer>
                  </div>
                  <div class="item mb-5">
                    补充说明：{{ formData.serveInfo.serveAfterIllustrate }}
                  </div>
                  <div class="time mb-10">
                    {{
                      formatDateTimeToDateTimeString(
                        new Date(formData.serveInfo.realServeEndTime)
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end -->
      </div>
      <div class="footBox" v-if="formData.serveStatus !== 3 && listName !== 'historyList'">
        <div
          class="bt bt-grey btn-submit"
          @click="handleCancel(formData)"
          v-if="formData.serveStatus === 0 || formData.serveStatus === 1"
        >
          <span>取消任务</span>
        </div>
        <div
          class="bt btn-submit"
          @click="handleClickPeople(formData)"
          v-if="formData.serveStatus === 0"
        >
          <span>人员分配</span>
        </div>
        <div
          class="bt btn-submit"
          @click="handleClickRefund(formData)"
          v-if="formData.serveStatus === 1 || formData.serveStatus === 2"
        >
          <span>{{
            formData.serveStatus === 1 ? '开始服务' : '完成服务'
          }}</span>
        </div>
        <div
          class="bt btn-submit"
          @click="handleClickDelete(formData)"
          v-if="formData.serveStatus === 4 || formData.serveStatus === 5"
        >
          <span>删除任务</span>
        </div>
      </div>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { ZoomInIcon } from 'tdesign-icons-vue-next'
import { formatDateTimeToDateTimeString } from '@/utils/date'
import { UNIT } from '@/constants'
import { formatNumber } from '@/utils/index'
const isShowShadow = ref(false) // 是否出现滚动条
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
  listName: {
    type: String,
    default: 'order'
  },
  history: {
    type: Boolean,
    default: false
  }
})

// 计算标签确定是否出阴影, 用于判断是否出现滚动条
const ShowShadow = computed(() => {
  // 获取所有类名为 "card" 的元素和类名为 "body" 的元素
  const bodyElement = document.querySelector('.body')
  const cardElements = document.querySelectorAll('.card')

  // 获取类名为 "body" 的元素的最大高度（通过计算得到）
  if (bodyElement && cardElements.length) {
    const bodyMaxHeight = parseInt(
      window.getComputedStyle(bodyElement).maxHeight
    )
    let cardHeight = 0
    // 遍历所有类名为 "card" 的元素，判断它们的高度是否大于类名为 "body" 的元素的最大高度
    cardElements.forEach((cardElement) => {
      cardHeight += cardElement.clientHeight
    })
    return cardHeight > bodyMaxHeight
  }
})

// 表单
const formData = ref()
// 触发父级事件
const emit: Function = defineEmits([
  'handleClose',
  'fetchData',
  'handleClickCancel',
  'handleClickPeople',
  'handleClickRefund',
  'handleClickDelete'
])
// 弹窗
const formVisible = ref(false)
// 点击取消关闭
const onClickCloseBtn = () => {
  formVisible.value = false
  emit('handleClose')
}
// 取消任务
const handleCancel = (val) => {
  emit('handleClickCancel', val)
}
// 人员分配
const handleClickPeople = (val) => {
  emit('handleClickPeople', val)
}
// 开始服务和完成服务
const handleClickRefund = (val) => {
  emit('handleClickRefund', val)
}
// 点击删除
const handleClickDelete =(val) =>{
  emit('handleClickDelete',val)
}
// 点击叉号关闭
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    formVisible.value = props.visible
    formData.value = props.data
    isShowShadow.value = ShowShadow.value
  }
)
</script>
<style lang="less" scoped>
:deep(.t-dialog) {
  border: none;
  .t-dialog__body {
    padding: 0;
    .pd {
      padding: 12px 32px;
    }
    .status {
      height: 49px;
      background-image: linear-gradient(269deg, #f75e43 22%, #f74346 72%);
      .tag {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.21px;
        margin-right: 10px;
      }
      .content {
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0.16px;
      }
    }
    .shadow {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 10px;
        pointer-events: none;
        bottom: 72px;
        background: linear-gradient(to top, #6361601a, transparent);
      }
    }
    .body {
      padding: 0 32px;
      padding-right: 22px;
      margin-right: 10px;
      margin-top: 20px;
      margin-bottom: 20px;
      max-height: 454px;
      overflow-y: scroll;
      scroll-behavior: smooth; // 平滑滚动
      // 滚动条不占位置
      &::-webkit-scrollbar {
        width: 4px;
        // 滚动条左移10px
        margin-left: -10px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent; /* 设置滚动条轨道背景色 */
      }
      &::-webkit-scrollbar-thumb {
        width: 4px;
        background-color: #d8d8d8; /* 设置滚动条滑块颜色 */
        border-radius: 2px; /* 设置滚动条滑块的圆角 */
        &:hover {
          background-color: #555; /* 设置滑块的背景色 */
        }
      }
      .card {
        padding: 20px 0;
        background: #ffffff;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        .leftBox {
          width: 57px;
          height: 20px;
          font-family: PingFangSC-SNaNpxibold;
          font-weight: 600;
          font-size: 14px;
          color: #191919;
          letter-spacing: 0.16px;
          margin-right: 48px;
          flex-shrink: 0;
        }
        .rightBox {
          width: 100%;
          .lineBox {
            width: 100%;
            display: flex;
            margin-bottom: 11px;
            .address{
              display: flex;
              .label{
                min-width: 70px;
              }
            }
            &:last-child {
              margin-bottom: 0;
            }
            .left,
            .right {
              width: 50%;
            }
            .serviceBox {
              display: flex;
              width: 100%;
              .itemBox {
                .imgBox {
                  display: flex;
                }
                .time {
                  font-size: 14px;
                  color: #999999;
                }
              }
            }
            .label {
              width: 70px;
              display: inline-block;
              height: 20px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              font-size: 14px;
              color: #595959;
              letter-spacing: 0;
              text-align: justify;
              margin-right: 20px;
            }
            .item {
              font-family: PingFangSC-Regular;
              font-weight: 400;
              font-size: 14px;
              color: #191919;
              letter-spacing: 0.16px;
            }
          }
        }
      }
    }
    .scollHeight {
      max-height: 379px;
    }
    .footBox {
      padding: 20px 32px;
      display: flex;
      justify-content: flex-end;
      .bt {
        width: 80px;
        height: 32px;
        margin-right: 15.5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
:deep(.tdesign-demo-image-viewer__ui-image) {
  width: 78.7px;
  height: 78.7px;
  max-width: 78.7px;
  max-height: 78.7px;
  margin-right: 10.5px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-5 {
  margin-bottom: 5px;
}
:deep(.t-form:not(.t-form-inline) .t-form__item:last-of-type) {
  position: relative;
  right: -155px;
}
.grey {
  background-image: linear-gradient(
    269deg,
    #d6d6d6 22%,
    #ebebeb 72%
  ) !important;
}
</style>
