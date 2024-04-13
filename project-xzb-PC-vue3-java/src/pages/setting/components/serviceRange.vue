<!-- 服务范围设置 -->
<template>
  <t-dialog
    v-model:visible="formVisible"
    :header="title"
    :width="960"
    :on-close="onClickCloseBtn"
  >
    <template #body>
      <t-row>
        <t-form
          ref="form"
          :data="formData"
          :label-width="90"
          :rules="FORM_RULES"
        >
          <t-col>
            <t-form-item label="城市选择：" name="cityCode">
              <t-select
                v-model="formData.cityCode"
                class="form-item-content"
                :options="typeSelectList"
                placeholder="请选择"
                clearable
              />
            </t-form-item>
          </t-col>
          <t-col>
            <t-form-item label="区域范围：" name="intentionScope">
              <t-input
                v-model="formData.intentionScope"
                class="form-item-content"
                type="search"
                placeholder="请输入区域关键词"
                clearable
              />
            </t-form-item>
          </t-col>
        </t-form>
        <baidu-map
          v-if="isShowMap"
          ref="mapRef"
          class="bm-view"
          :scroll-wheel-zoom="true"
          :center="center"
          :zoom="zoom"
          @ready="ready"
          @dragend="handleDragend"
          @moveend="handleMoveend"
        >
          <div class="center"></div>
          <!-- <bm-marker :position="center" :dragging="false">
            <bm-label
              content="地图中心点"
              :labelStyle="{ color: 'red', fontSize: '24px' }"
              :offset="{ width: -50, height: 30 }"
            />
          </bm-marker> -->
          <bm-local-search
            :keyword="formData.intentionScope"
            :panel="false"
            :map-click="false"
            :autoViewport="true"
          ></bm-local-search>
        </baidu-map>
      </t-row>
    </template>
    <template #footer>
      <div class="bt bt-grey btn-submit" @click="onClickCloseBtn">
        <span>取消</span>
      </div>
      <div type="submit" class="bt btn-submit" @click="handleSubmit">
        <span>保存</span>
      </div>
    </template>
  </t-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { toAMap, toBaiduMap } from '@/utils/index'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  openCity: {
    type: Array,
    default: () => []
  },
  serviceRangeR: {
    type: Object,
    default: {}
  }
})
const FORM_RULES = {
  cityCode: [{ required: true, message: '城市必选' }],
  intentionScope: [{ required: true, message: '区域范围必填' }]
}
const mapRef = ref(null)
let center = reactive({
  lng: 116.404,
  lat: 39.915
})
const isShowMap = ref(false)
const zoom = ref(18)

// 触发父级事件
const emit = defineEmits([
  'handleClose',
  'handleServiceTypeChange',
  'handleSubmit'
])

// 表单数据
const formData = ref({
  cityCode: '',
  intentionScope: '',
  location: ''
})
let typeSelectList = reactive([])
// 弹窗标题
const title = ref('服务范围设置')
// 弹窗
const formVisible = ref(false)

//地图初始化
const ready = ({ BMap, map }) => {
  mapRef.value = map
}
const handleDragend = () => {
  center = mapRef.value.getCenter()
  // 创建地理编码实例
  const geoc = new BMap.Geocoder()
  // 执行逆地理编码
  geoc.getLocation(center, (result) => {
    if (result) {
      formData.value.intentionScope = result.surroundingPois.length
        ? result.surroundingPois[0].title
        : result.address
      // 在控制台输出详细位置信息
    }
  })
}

const handleMoveend = (val) => {
  setTimeout(() => {
    center = mapRef.value.getCenter()
  }, 100)
}
const handleSubmit = () => {
  if (!formData.value.cityCode) {
    return MessagePlugin.error('请选择城市')
  } else if (!formData.value.intentionScope) {
    return MessagePlugin.error('请选择区域')
  }
  // 重置表单
  formVisible.value = false
  isShowMap.value = false
  const params = toAMap(center.lng, center.lat)
  emit('handleSubmit', {
    cityCode: formData.value.cityCode,
    intentionScope: formData.value.intentionScope,
    location: String(params.longitude) + ',' + String(params.latitude),
    cityName: typeSelectList.filter(
      (item) => item.value === formData.value.cityCode
    )[0].label
  })
}
// 点击取消关闭
const onClickCloseBtn = () => {
  // 重置表单
  formVisible.value = false
  isShowMap.value = false
  emit('handleClose')
}
// 监听器，监听父级传递的visible值，控制弹窗显示隐藏
watch(
  () => props.visible,
  () => {
    if (props.visible) {
      isShowMap.value = true
    }
    formVisible.value = props.visible
    formData.value.cityCode = props.serviceRangeR.cityCode
    formData.value.intentionScope = props.serviceRangeR.intentionScope
    formData.value.location = props.serviceRangeR.location
    center.lat = props.serviceRangeR.location
      ? props.serviceRangeR.location.split(',')[1]
      : '39.91175783377955'
    center.lng = props.serviceRangeR.location
      ? props.serviceRangeR.location.split(',')[0]
      : '116.40404711388975'
    typeSelectList = props.openCity.map((item: any) => {
      return { value: item.cityCode, label: item.name }
    })
    if (props.serviceRangeR.location)
      center = toBaiduMap(center.lng, center.lat)
  }
)
</script>
<style scoped lang="less">
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
.bm-view {
  width: 100%;
  height: 400px;
  position: relative;
  .center {
    position: absolute;
    width: 20px;
    height: 39px;
    background-image: url('../../../assets//default/img_weizhi@2x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-100%);
    // margin-bottom: 18px;
  }
}
</style>
