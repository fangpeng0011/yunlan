<!-- 中部订单数统计和今日订单 -->
<template>
  <div class="analysis">
    <div class="leftCard">
      <div class="title">
        <div class="tips">
          订单数统计<span>{{ dayjs().format('YYYY-MM-DD') }}</span>
        </div>
      </div>
      <div
        id="monitorContainer"
        ref="monitorContainer"
        class="dashboard-chart-container"
        :style="{ width: '99.6%', height: '80%' }"
      />
    </div>
    <div class="rightCard">
      <div class="title">
        <div class="today">
          今日订单<span>{{ dayjs().format('YYYY-MM-DD') }}</span>
        </div>
        <div class="order" @click="handleToOrder">订单明细＞</div>
      </div>
      <div class="body">
        <div class="left">
          <div class="card">
            <img src="@/assets/leijidingdan@2x.png" alt="" />
            <div>待分配<span>6</span></div>
          </div>
          <div class="card">
            <img src="../../../../assets/daiwangong.png" alt="" />
            <div>待完工<span>4</span></div>
          </div>
          <div class="card">
            <img src="@/assets/allorder.png" alt="" />
            <div>全部订单<span>21</span></div>
          </div>
        </div>
        <div class="right">
          <div class="card">
            <img src="@/assets/daishangmen.png" alt="" />
            <div>待上门<span>6</span></div>
          </div>
          <div class="card">
            <img src="@/assets/yiwancheng.png" alt="" />
            <div>已完成<span>5</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  onUnmounted,
  nextTick,
  computed,
  onDeactivated
} from 'vue'
import {  useRouter } from 'vue-router'
import dayjs from 'dayjs'
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { useSettingStore } from '@/store'
import { changeChartsTheme } from '@/utils/color'

import { getLineChartDataSet } from '../index'

echarts.use([
  TooltipComponent,// 提示框组件
  LegendComponent,// 图例组件
  GridComponent,// 直角坐标系 grid
  LineChart,// 折线图组件
  CanvasRenderer// 渲染器
])
const router = useRouter()

const store = useSettingStore()
const resizeTime = ref(1) // 缩放比例

const chartColors = computed(() => store.chartColors) // 图表颜色

// monitorChart
let monitorContainer: HTMLElement // 图表容器
let monitorChart: echarts.ECharts // 图表实例
const renderMonitorChart = () => {
  if (!monitorContainer) {
    monitorContainer = document.getElementById('monitorContainer') // 图表容器,如果没有就创建一个
  }
  monitorChart = echarts.init(monitorContainer) // 初始化图表实例
  monitorChart.setOption(getLineChartDataSet({ ...chartColors.value })) // 设置图表数据
}

const renderCharts = () => {
  renderMonitorChart() // 渲染图表
}

// chartSize update,监听图表容器的宽高变化,更新图表
const updateContainer = () => {
  if (
    document.documentElement.clientWidth >= 1366 &&
    document.documentElement.clientWidth < 1920
  ) {
    resizeTime.value = Number(
      (document.documentElement.clientWidth / 2280).toFixed(2)
    )
  } else if (document.documentElement.clientWidth < 1080) {
    resizeTime.value = Number(
      (document.documentElement.clientWidth / 1080).toFixed(2)
    )
  } else {
    // resizeTime.value = 1
    resizeTime.value = Number(
      (document.documentElement.clientWidth / 1920).toFixed(2)
    )
  }
  monitorChart.resize({
    width: monitorContainer.clientWidth,
    height: monitorContainer.clientHeight
  })
}
// 生命周期
onMounted(() => {
  renderCharts()
  // nextTick是在下次 DOM 更新循环结束之后执行延迟回调
  nextTick(() => {
    updateContainer()
  })
  window.addEventListener('resize', updateContainer, false) // 添加resize方法
})
// onUnmounted是在组件卸载之后执行
onUnmounted(() => {
  window.removeEventListener('resize', updateContainer)
})
// onDeactivated是在组件停用之后执行
onDeactivated(() => {
  storeModeWatch()
  storeBrandThemeWatch()
  storeSidebarCompactWatch()
})
// 监听store的变化，改变图表主题
const storeBrandThemeWatch = watch(
  () => store.brandTheme,
  () => {
    changeChartsTheme([monitorChart])
  }
)
// 监听store的变化，改变图标大小
const storeSidebarCompactWatch = watch(
  () => store.isSidebarCompact,
  () => {
    if (store.isSidebarCompact) {
      nextTick(() => {
        updateContainer()
      })
    } else {
      setTimeout(() => {
        updateContainer()
      }, 180)
    }
  }
)
// 监听store的变化，改变图表模式
const storeModeWatch = watch(
  () => store.mode,
  () => {
    ;[monitorChart].forEach((item) => {
      item.dispose()
    })

    renderCharts()
  }
)
// 前往订单页面
const handleToOrder = () => {
  router.push({
    path: '/order'
  })
}

</script>

<style lang="less" scoped>
.dashboard-chart-card {
  padding: 8px;

  :deep(.t-card__header) {
    padding-bottom: 24px;
  }

  :deep(.t-card__title) {
    font-size: 20px;
    font-weight: 500;
  }
}
.analysis {
  display: flex;
  width: 100%;
  .leftCard {
    width: calc((100% - 20px) * 0.629);
    margin-right: 20px;
    padding-top: 20px;
    padding-left: 26px;
    background-color: #fff;
    // padding-right: 46.5px;
    .title {
      font-family: PingFangSC-SNaNpxibold;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 40px;
      color: var(--color-bk1);
      letter-spacing: 0;
      text-align: justify;
      span {
        margin-left: 7px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 14px;
        color: var(--color-bk4);
        letter-spacing: 0;
        line-height: 22px;
      }
    }
  }
  .rightCard {
    width: calc((100% - 20px) * 0.371);
    padding: 20px 0 15.7px 29.5px;
    background-color: #fff;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 52px;
      .today {
        font-family: PingFangSC-SNaNpxibold;
        font-weight: 600;
        font-size: 18px;
        color: var(--color-bk1);
        letter-spacing: 0;
        text-align: justify;
        span {
          margin-left: 7px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          font-size: 14px;
          color: var(--color-bk4);
          letter-spacing: 0;
          line-height: 22px;
        }
      }
      .order {
        font-size: 14px;
        cursor: pointer;
        margin-right: 22.5px;
        &:hover {
          color: var(--color-main);
        }
        &:active {
          color: var(--color-main);
        }
      }
    }
    .body {
      display: flex;
      width: 100%;
      .left,
      .right {
        width: 50%;
        .card {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10.5px;
          }
          div {
            font-family: PingFangSC-Regular;
            font-weight: 400;
            font-size: 16px;
            min-width: 106px;
            color: var(--color-bk1);
            letter-spacing: 0;
            height: 36px;
            line-height: 36px;
            // 文字上下居中
            display: flex;
            align-items: center;
            span {
              margin-left: 11px;
              font-size: 25px;
              color: var(--color-bk1);
              letter-spacing: 0;
              font-weight: 600;
            }
          }
          margin-bottom: 49px;
        }
      }
    }
  }
}
</style>
