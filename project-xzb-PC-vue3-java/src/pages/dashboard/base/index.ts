import dayjs from 'dayjs'
// import { TChartColor } from '@/config/color'
import { getChartListColor } from '@/utils/color'
import { getRandomArray } from '@/utils/charts'

/** 首页 dashboard 折线图 */
export function constructInitDashboardDataset(type: string) {
  const dateArray: Array<string> = [
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六',
    '周日'
  ]
  const datasetAxis = {
    xAxis: {
      type: 'category',
      show: false,
      data: dateArray
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }

  if (type === 'line') {
    const lineDataset = {
      ...datasetAxis,
      color: ['#fff'],
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type,
          showSymbol: true,
          symbol: 'circle',
          symbolSize: 0,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          lineStyle: {
            width: 2
          }
        }
      ]
    }
    return lineDataset
  }
  const barDataset = {
    ...datasetAxis,
    color: getChartListColor(),
    series: [
      {
        data: [
          100,
          130,
          184,
          218,
          {
            value: 135,
            itemStyle: {
              opacity: 0.2
            }
          },
          {
            value: 118,
            itemStyle: {
              opacity: 0.2
            }
          },
          {
            value: 60,
            itemStyle: {
              opacity: 0.2
            }
          }
        ],
        type,
        barWidth: 9
      }
    ]
  }
  return barDataset
}

/** 柱状图数据源 */
export function constructInitDataset({
  dateTime = [],
  placeholderColor,
  borderColor
}: { dateTime: Array<string> } & any) {
  const divideNum = 10
  const timeArray = []
  const inArray = []
  const outArray = []
  for (let i = 0; i < divideNum; i++) {
    if (dateTime.length > 0) {
      const dateAbsTime: number =
        (new Date(dateTime[1]).getTime() - new Date(dateTime[0]).getTime()) /
        divideNum
      const enhandTime: number =
        new Date(dateTime[0]).getTime() + dateAbsTime * i
      timeArray.push(dayjs(enhandTime).format('YYYY-MM-DD'))
    } else {
      timeArray.push(
        dayjs()
          .subtract(divideNum - i, 'day')
          .format('YYYY-MM-DD')
      )
    }

    inArray.push(getRandomArray().toString())
    outArray.push(getRandomArray().toString())
  }

  const dataset = {
    color: getChartListColor(),
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      axisLabel: {
        color: placeholderColor
      },
      axisLine: {
        lineStyle: {
          color: getChartListColor()[1],
          width: 1
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: placeholderColor
      },
      splitLine: {
        lineStyle: {
          color: borderColor
        }
      }
    },
    grid: {
      top: '5%',
      left: '25px',
      right: 0,
      bottom: '60px'
    },
    legend: {
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 4,
      itemGap: 48,
      textStyle: {
        fontSize: 12,
        color: placeholderColor
      },
      left: 'center',
      bottom: '0',
      orient: 'horizontal',
      data: ['本月', '上月']
    },
    series: [
      {
        name: '本月',
        data: outArray,
        type: 'bar'
      },
      {
        name: '上月',
        data: inArray,
        type: 'bar'
      }
    ]
  }

  return dataset
}

/**
 *  线性图表数据源
 *
 * @export
 * @param {Array<string>} [dateTime=[]]
 * @returns {*}
 */
export function getLineChartDataSet({
  dateTime = [],
  placeholderColor,
  borderColor
}: { dateTime?: Array<string> } & any) {
  const divideNum = 10
  const timeArray = []
  const inArray = []
  const outArray = []
  for (let i = 0; i < divideNum; i++) {
    if (dateTime.length > 0) {
      const dateAbsTime: number =
        (new Date(dateTime[1]).getTime() - new Date(dateTime[0]).getTime()) /
        divideNum
      const enhandTime: number =
        new Date(dateTime[0]).getTime() + dateAbsTime * i
      // console.log('dateAbsTime..', dateAbsTime, enhandTime);
      timeArray.push(dayjs(enhandTime).format('MM-DD'))
    } else {
      timeArray.push(
        dayjs()
          .subtract(divideNum - i, 'day')
          .format('MM-DD')
      )
    }
    inArray.push(getRandomArray(1000).toString())
    outArray.push(getRandomArray(inArray[i]).toString())
  }
  const dataSet = {
    color: getChartListColor(),
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        var data0 =
          '<div style="display:flex;justify-content:space-between;height:14px;line-height:14px;">' +
          '<span style="margin-right:15px">' +
          '日期：' +
          '</span>' +
          '<span style="color:#20232A">' + dayjs().format('YYYY') + '-' +
          params[0].name +
          '</span>' +
          '</div>'
        var data1 =
          '<div style="display:flex;justify-content:space-between;height:14px;line-height:14px;margin-top:5px;">' +
          '<span style="margin-right:15px">' +
          params[0].seriesName +
          '</span>' +
          '<span style="color:#20232A">' +
          params[0].value +
          '笔' +
          '</span>' +
          '</div>'
        var data2 = ''
        if (params.length == 2) {
          data2 =
            '<div style="display:flex;justify-content:space-between;height:14px;line-height:14px;margin-top:5px;">' +
            '<span style="margin-right:15px">' +
            params[1].seriesName +
            '</span>' +
            '<span style="color:#20232A">' +
            params[1].value +
            '笔' +
            '</span>' +
            '</div>'
        } else {
          data2 = ''
        }

        // params 是当前 tooltip 的内容
        // 你可以从 params 中提取数据并自定义 tooltip 显示的内容
        var content =
          '<div style="padding:0px 5px;max-height:52px;font-size:12px;color:#999">' + data0 +
          data1 +
          data2 +
          '</div>'
        return content
      }
    },
    grid: {
      left: '0',
      right: '45px',
      top: '25px',
      bottom: '60px',
      containLabel: true
    },
    legend: {
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 4,
      itemGap: 48,
      left: 'center',
      bottom: '20',
      orient: 'horizontal', // legend 横向布局。
      data: ['有效订单', '订单总数'],
      // 修改图例文字的的内容，在后面加上（个）
      formatter: function (name) {
        return name + '（个）'
      },
      textStyle: {
        fontSize: 12,
        color: '#8C8C8C'
      }
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      // boundaryGap: false,
      // 隐藏坐标轴出现的小竖线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: placeholderColor
      },
      axisLine: {
        lineStyle: {
          width: 1,
          color: '#00000073'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: placeholderColor
      },
      // 显示坐标轴和刻度
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      // 显示坐标轴
      axisLine: {
        show: true,
        lineStyle: {
          color: '#00000073',
          width: 1
        }
      },
      splitLine: {
        lineStyle: {
          color: borderColor
        }
      }
    },
    series: [
      {
        name: '订单总数',
        data: inArray,
        color: '#0398FF',
        symbol: 'circle',
        symbolSize: 6, // 设置拐点的大小
        type: 'line'
      },
      {
        name: '有效订单',
        data: outArray,
        type: 'line',
        symbol: 'circle',
        color: '#F74346',
        symbolSize: 6 // 设置拐点的大小
      },
    ]
  }
  return dataSet
}
