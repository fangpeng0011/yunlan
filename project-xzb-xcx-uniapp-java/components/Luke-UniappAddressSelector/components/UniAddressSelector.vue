<!-- 省市区联选组件 -->
<template>
  <view class="page-content">
    <!-- 选择器背景 -->
    <view class="page-mask"></view>
    <!-- 选择器主体 -->
    <view class="page-main" :style="'height:60%'">
      <!-- 操作区域 包含取消和确定 -->
      <view class="main-operate">
        <text class="title-txt" @click.stop="handleCancel">取消</text>
        <text class="title-txt" @click.stop="handleSubmit">确定</text>
      </view>
      <!-- 已选择的地址信息 -->
      <view class="main-select" :class="[selectAreaLevelLimit == 3 ? 'w33_percent' : '']">
        <text
          v-if="showIndex == 0 || provinceObj.areaName"
          :class="showIndex == 0 ? 'select' : ''"
          @click="anewSelect(0)"
          >{{ provinceObj.areaName || "请选择" }}</text
        >
        <text
          v-if="showIndex == 1 || cityObj.areaName"
          :class="showIndex == 1 ? 'select' : ''"
          @click="anewSelect(1)"
          >{{ cityObj.areaName || "请选择" }}</text
        >
        <text
          v-if="showIndex == 2 || areaObj.areaName"
          :class="showIndex == 2 ? 'select' : ''"
          @click="anewSelect(2)"
          >{{ areaObj.areaName || "请选择" }}</text
        >
        <text
          v-if="(showIndex == 3 || streetObj.areaName) && selectAreaLevelLimit == 4"
          :class="showIndex == 3 ? 'select' : ''"
          @click="anewSelect(3)"
          >{{ streetObj.areaName || "请选择" }}</text
        >
      </view>
      <!-- 待选择的地址信息 -->
      <view class="main-list">
        <view v-if="showIndex == 0">
          <view
            class="list-box"
            :class="provinceObj.areaCode == item.areaCode ? 'active' : ''"
            @click="handleSelectAddress(0, item)"
            v-for="item in provinceData"
            :key="item.areaCode"
          >
            <text>{{ item.areaName }}</text>
          </view>
        </view>
        <view v-if="showIndex == 1">
          <view
            class="list-box"
            :class="cityObj.areaCode == item.areaCode ? 'active' : ''"
            @click="handleSelectAddress(1, item)"
            v-for="item in cityData"
            :key="item.areaCode"
          >
            <text>{{ item.areaName }}</text>
          </view>
        </view>
        <view v-if="showIndex == 2">
          <view
            class="list-box"
            :class="areaObj.areaCode == item.areaCode ? 'active' : ''"
            @click="handleSelectAddress(2, item)"
            v-for="item in areaData"
            :key="item.areaCode"
          >
            <text>{{ item.areaName }}</text>
          </view>
        </view>
        <view v-if="showIndex == 3 && selectAreaLevelLimit == 4">
          <view
            class="list-box"
            :class="streetObj.areaCode == item.areaCode ? 'active' : ''"
            @click="handleSelectAddress(3, item)"
            v-for="item in streetsData"
            :key="item.areaCode"
          >
            <text>{{ item.areaName }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "UniAddressSelector",
  props: {
    areaInfoSelected: {
      type: Object,
      default: {
        
      },
    },
    selectAreaLevelLimit:{
      type: Number,
      default: 4,
    }
  },
  data() {
    return {
      showIndex: 0, //地区显示
      provinceObj: {},
      cityObj: {},
      areaObj: {},
      streetObj: {},
      heightCot: 30, //设置屏幕高度 0 ~ 100
      provinceData: "", // 当前展示的省数据
      cityData: [], // 当前展示的市数据
      areaData: [], //当前展示的区数据
      streetsData: [], //当前展示的区数据
    };
  },
  mounted() {
    if (this.areaInfoSelected.fullAreaTextInitial) {
      let { fullAreaTextInitial } = this.areaInfoSelected;
      let _arr = fullAreaTextInitial.split(",");

      this.provinceObj = this.areaInfoSelected.provinceObj;
      this.cityObj = this.areaInfoSelected.cityObj;
      this.areaObj = this.areaInfoSelected.areaObj;
      this.streetObj = this.areaInfoSelected.streetObj;

      if (_arr.length == 1) {
        this.handleGetMap({}, "init");
      }
      if (_arr.length == 2) {
        this.handleGetMap(this.areaInfoSelected.provinceObj, "pro");
      }
      if (_arr.length == 3) {
        this.handleGetMap(this.areaInfoSelected.cityObj, "city");
      }
      if (_arr.length == 4) {
        this.handleGetMap(this.areaInfoSelected.areaObj, "area");
      }
    } else {
      this.handleGetMap({}, "init");
    }
    this.getScreen();
  },
  onShow() {},
  methods: {
    //组件高度自适应
    getScreen() {
      let that = this;
      uni.getSystemInfo({
        success: (res) => {
          that.heightCot = (res.safeArea.height * 2) / 2;
        },
      });
    },
    //取消
    handleCancel() {
      this.$emit("cancel");
    },
    //确定
    handleSubmit() {
      const { provinceObj, cityObj, areaObj, streetObj } = this;
      const arr = [provinceObj, cityObj, areaObj, streetObj];

      let _fullAreaText = [];
      arr.map((item) => {
        if (item.areaCode) {
          _fullAreaText.push(item.areaName);
        }
      });
      if (this.selectAreaLevelLimit == 3) {
        if (_fullAreaText.length !== 3) {
          uni.showToast({
            icon: "none",
            title: "地址需精确到地区",
          });
          return
        }
      } else {
        if (_fullAreaText.length !== this.selectAreaLevelLimit) {
          uni.showToast({
            icon: "none",
            title: "地址需精确到街道",
          });
          return
        }
      }  
      let areaInfoObj = {
        fullAreaTextInitial: _fullAreaText.toString(),
        fullAreaText: _fullAreaText.toString().replace(/,/g, ""),
        provinceCode: provinceObj.areaCode || "",
        cityCode: cityObj.areaCode || "",
        areaCode: areaObj.areaCode || "",
        streetCode: streetObj.areaCode || "",
        provinceObj,
        cityObj,
        areaObj,
        streetObj,
      };
      this.$emit("confirm", areaInfoObj);
    },
    //下拉选择
    anewSelect(num) {
      switch (num) {
        case 0:
          this.showIndex = 0;
          this.cityObj = {};
          this.areaObj = {};
          this.streetObj = {};

          this.cityData = [];
          this.areaData = [];
          this.streetsData = [];
          this.handleGetMap({}, "init");
          break;
        case 1:
          this.showIndex = 1;
          this.streetObj = {};
          this.areaData = [];
          this.streetsData = [];
          if (!this.areaObj.areaCode) return;
          this.areaObj = {};
          this.handleGetMap(this.provinceObj, "pro");
          break;
        case 2:
          this.showIndex = 2;
          this.streetsData = [];
          if (!this.streetObj.areaCode) return;
          this.streetObj = {};
          this.handleGetMap(this.areaObj, "area");
          break;
        case 3:
          break;
      }
    },
    handleGetMap(obj, type) {
      //name选择名称 type类型
      let that = this,
        data = {
          parentArea: 0,
        };

      if (type !== "init") {
        data.parentArea = obj.areaCode;
        uni.showLoading({
          title: "加载中",
          mask: true,
        });
      }
      // 此处$requestGet:我司基于uni.request()封装的get请求方法
      // this.$apiUrl.storeArea:请求路径 每次请求带上parentArea 即可请求下一级区域数据 接口根据自身情况来决定
      this.$requestGet({
        url: this.$apiUrl.storeArea,
        data,
      }).then((resp) => {
        uni.hideLoading();
        if (resp.state == 200) {
          let arr = ["init", "pro", "city", "area"];
          let _obj = {
            init: "provinceData",
            pro: "cityData",
            city: "areaData",
            area: "streetsData",
          };
          this[_obj[type]] = resp.data;
          this.showIndex = arr.indexOf(type);
          // if (type === "init") {
          //   that.provinceData = resp.data;
          //   this.showIndex = 0;
          // } else if (type == "pro") {
          //   that.cityData = resp.data;
          //   this.showIndex = 1;
          // } else if (type == "city") {
          //   that.areaData = resp.data;
          //   this.showIndex = 2;
          // } else if (type == "area") {
          //   that.streetsData = resp.data;
          //   this.showIndex = 3;
          // }
        } else {
          uni.hideLoading();
          uni.showToast({
            icon: "none",
            title: resp.msg,
            position: "center",
            duration: 2000,
          });
        }
      });
    },
    handleSelectAddress(type, obj) {
      switch (type) {
        case 0:
          //选择省
          this.handleGetMap(obj, "pro");
          this.provinceObj = obj;
          this.showIndex = 1;
          this.cityData = [];
          this.areaData = [];
          this.streetsData = [];
          break;
        case 1:
          //选择市
          this.handleGetMap(obj, "city");
          this.cityObj = obj;
          this.showIndex = 2;
          this.areaData = [];
          this.streetsData = [];
          break;
        case 2:
          //选择区
          if (this.selectAreaLevelLimit == 3) {
            this.areaObj = obj;
          } else {
            this.handleGetMap(obj, "area");
            this.areaObj = obj;
            this.showIndex = 3;
            this.streetsData = [];
          }
          break;
        case 3:
          //选择街道
          this.streetObj = obj;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-mask {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.page-main {
  height: 100vh;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  padding: 20rpx;
  border-top: 1rpx solid rgba(0, 0, 0, 0.2);
  border-radius: 16rpx 16rpx 0 0;
  max-height: 60%;
  .main-operate {
    padding: 0 10rpx 10rpx 10rpx;
    display: flex;
    justify-content: space-between;
    .title-txt {
      color: #343434;
      font-size: 30rpx;
      &:nth-child(2) {
        color: #ff4242;
      }
    }
  }
  .main-select {
    display: flex;
    justify-content: flex-start;
    color: #343434;
    font-size: 30rpx;
    height: 100rpx;
    line-height: 100rpx;
    text {
      display: inline-block;
      width: 25%;
      text-align: center;
      overflow: hidden;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-align: center;
    }
    .select {
      color: #ff4242;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 6rpx;
        background: #ff4242;
        position: absolute;
        left: 0;
        bottom: -8rpx;
      }
    }
  }
  .main-list {
    overflow-y: auto;
    color: #343434;
    font-size: 30rpx;
    width: 100%;
    height: 72%;
    overflow: auto;
    .list-box {
      display: flex;
      flex-direction: column;
      height: 100rpx;
      line-height: 100rpx;
      border-bottom: 2rpx solid #dedede;
    }
    .list-box:last-child{
      border-bottom: none;
    }
    .active {
      color: #ff4242;
    }
  }
}
</style>
