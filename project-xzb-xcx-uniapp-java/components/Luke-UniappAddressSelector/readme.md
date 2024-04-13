# UniAddressSelector省市区街道三级四级联动（内附demo）

### 概述

1. 支持uniapp（APP、H5、小程序）省市区街道三级四级联动
2. 支持默认地区或已选择地区显示
3. 数据来源可包括高德地图api、公司封装接口返回

### 预览

![](https://raw.githubusercontent.com/LukeLiou/picLuke/master/images/UniAddressSelector_watermark.gif)

### API

#### props

| 属性             | <span style="display:inline-block;width:80px">必填</span> | 说明                                                         | 类型   | <span style="display:inline-block;width:80px">默认值</span> |
| :------- | ------------- | ------------------------------------------------------------ | ------ | ------ |
| areaInfoSelected | 否 | 已选择的地址对象或默认显示地址对象，属性有：provinceObj,cityObjareaObj,streetObj | Object | {} |
| selectAreaLevelLimit | 否 | 指定选择的级别数，如只需要选择省市区，则指定值为3 | Number | 4 |

#### events

| 事件名  |  <span style="display:inline-block;width:200px">说明</span>| 返回值                                                      |
| :------- |--------------------------------------------------------------------------------------------------------------| ------------------------------------------------------------ |
| cancel  | 点击取消按钮时触发 | -                                                            |
| confirm | 点击确认按钮时触发                                   | 选中的省市区街道地址对象,包含如下属性：fullAreaText,provinceCode,,cityCode,areaCode,streetCode,provinceObj,cityObj,areaObj,streetObj |

### 作者想说

欢迎大家留言、评论与star