<!-- 地址详情 -->
<template>
  <view>
    <!-- 头部导航栏 -->
    <nav-bar
      :title="title"
      :handleToLink="handleToLink"
      :isShowBack="true"
    ></nav-bar>
    <view class="address-info">
      <!-- 地址信息 -->
      <view class="address-box">
        <view class="title">
          <view class="address-title">联系人信息</view>
        </view>
        <!-- 姓名，电话 -->
        <view class="name-number">
          <input
            placeholder-class="placeholderolor"
            class="uni-input"
            :class="formName !== '' ? 'active' : ''"
            placeholder="真实姓名"
            @input="handleFormName"
            :value="formName"
            maxlength="10"
          />
          <input
            placeholder-class="placeholderolor"
            class="uni-input"
            type="number"
            :class="formPhone !== '' ? 'active' : ''"
            placeholder="电话"
            @input="handleFormPhone"
            :value="formPhone"
          />
        </view>
        <!-- 城市/地区 -->
        <view class="city-area">
          <view
            class="label"
            :class="areaLabel !== '城市/地区' ? 'active' : ''"
            @click="handledSelectArea"
            >{{ areaLabel }}</view
          >
          <view class="icon" @click="handleLocation">
            <view class="locationIcon"></view>
            定位
          </view>
        </view>
        <!-- 详细地址 -->
        <view class="address-detail">
          <input
            placeholder-class="placeholderolor"
            class="uni-input"
            :class="formAddressInfo !== '' ? 'active' : ''"
            placeholder="详细地址（例如：**街**号）"
            :value="formAddressInfo"
            @input="handleFormAddressInfo"
            maxlength="33"
          />
        </view>
        <!-- 底部按钮区域 -->
        <view class="footer">
          <view class="save-address" @click="handleSaveToAddress">
            <view
              class="checkbox"
              :class="{
                active: isFromAddress ? isDefaultAddress : isSaveToAddress,
              }"
            ></view>
            <view class="label"> 设为默认地址</view>
          </view>
          <view
            class="reset-btn"
            @click="reset"
            :class="isReset ? 'active' : ''"
            >清空</view
          >
        </view>
      </view>
      <BtnFooter
        btnText="确定"
        :isActive="isConfirm"
        @confirm="submit"
      ></BtnFooter>
      <!-- 选择省市区弹窗 -->
      <SelectArea
        ref="selectArea"
        @getAreaData="getAreaData"
        :provinceName="provinceName"
        :cityName="cityName"
        :countyName="countyName"
      ></SelectArea>
    </view>
  </view>
</template>

<script setup>
import {
  ref,
  onMounted,
  computed,
} from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import BtnFooter from '@/components/BtnFooter/index.vue';
import SelectArea from './components/selectArea.vue';
import {
  addAddressBook,
  getAddressBookInfo,
  updateAddressBook,
  getAddress,
} from '@/pages/api/address.js';
const formName = ref('');
const formPhone = ref('');
const formAddressInfo = ref('');
let provinceName = ref('');
let cityName = ref('');
let countyName = ref('');
let title = ref(''); //导航栏标题
const isSaveToAddress = ref(false); //是否保存到地址簿
const isDefaultAddress = ref(false); //是否设置为默认地址
const isFromAddress = ref(); //是否来自地址簿
const selectArea = ref();
const type = ref('send'); //寄件人，收件人，地址簿
const editOrAdd = ref();
const id = ref(''); //查询地址详情的id
const detailId = ref(''); //地址簿详情的id
const location = ref(); //定位经纬度
// 信息是否完整
const isConfirm = computed(() => {
  return (
    Boolean(formName.value) &&
    Boolean(formPhone.value) &&
    Boolean(formAddressInfo.value) &&
    areaLabel.value !== '城市/地区'
  );
}); //是否可以提交确定
const isReset = computed(() => {
  return (
    Boolean(formName.value) ||
    Boolean(formPhone.value) ||
    Boolean(formAddressInfo.value) ||
    Boolean(provinceName.value)
  );
});
const areaLabel = ref('城市/地区'); //省市区选择的值
onLoad((options) => {
  if (options.id) {
    getAddressInfo(options.id);
  }
  detailId.value = options.detailId;
  editOrAdd.value = options.editOrAdd;
  id.value = options.id || '';
  type.value = options.type;
  isFromAddress.value = options.isFromAddress;
  title.value = options.editOrAdd !== 'add' ? '编辑地址' : '新增地址';
  isDefaultAddress.value = options.isDefault === '0' ? false : true;
});
onMounted(() => {
  if (editOrAdd.value === 'add') {
    selectArea.value.getList();
  }
});
//查询地址簿详情
const getAddressInfo = async (id) => {
  await getAddressBookInfo(id).then((res) => {
    if (res.data.code === 200) {
      const {
        name,
        phone,
        address,
        city,
        county,
        province,
        isShow,
        isDefault,
      } = res.data.data;
      formName.value = name;
      formPhone.value = phone;
      formAddressInfo.value = address;
      areaLabel.value = province + ' ' + city + ' ' + county;
      provinceName.value = province;
      cityName.value = city;
      countyName.value = county;
      isSaveToAddress.value = isShow;
      isDefaultAddress.value = isDefault;
    }
  });
  selectArea.value.getList();
};

//是否保存到地址簿、是否设置为默认地址
const handleSaveToAddress = () => {
  if (isFromAddress.value) {
    isDefaultAddress.value = !isDefaultAddress.value;
  } else {
    isSaveToAddress.value = !isSaveToAddress.value;
  }
};

//打开选择省市区弹窗
const handledSelectArea = () => {
  selectArea.value.handleOpen();
};
//处理姓名表单输入
const handleFormName = (event) => {
  formName.value = event.detail.value;
};
//处理电话表单输入
const handleFormPhone = (event) => {
  formPhone.value = event.detail.value;
};
//处理详细地址表单输入
const handleFormAddressInfo = (event) => {
  formAddressInfo.value = event.detail.value;
};
//获取省市区组件的值
const getAreaData = (value) => {
  provinceName.value = value.province.label;
  cityName.value = value.city.label;
  countyName.value = value.area.label;
  areaLabel.value =
    value.province.label + ' ' + value.city.label + ' ' + value.area.label;
};
//重置表单
const reset = () => {
  formAddressInfo.value = '';
  formName.value = '';
  formPhone.value = '';
  areaLabel.value = '城市/地区';
};
//返回上一页
const handleToLink = () => {
  if (editOrAdd.value === 'edit') {
    if (isFromAddress.value === 'true') {
      uni.redirectTo({
        url: '/pages/address/index' + '?detailId=' + detailId.value,
      });
    } else {
      uni.redirectTo({
        url: '/pages/address/index?' + '&type=' + type.value,
      });
    }
  } else {
    uni.navigateBack();
  }
};
// 定位
const handleLocation = () => {
  uni.chooseLocation({
    success: async function (res) {
      location.value = res.longitude + ',' + res.latitude
      await getAddress({
        location: res.longitude + ',' + res.latitude,
      }).then((res)=>{
        if(res.data.code === 200){
          const {province,city,district,fullAddress} = res.data.data;
          provinceName.value = province ? province : '';
          cityName.value = city ? city : province;
          countyName.value = district ? district : '';
          areaLabel.value = provinceName.value + ' ' + cityName.value + ' ' + countyName.value;
          formAddressInfo.value = fullAddress;
        }
      });
    },
  });
};
//提交表单
const submit = () => {
  if (!isConfirm.value) {
    uni.showToast({
      title: '请将信息填写完整',
      icon: 'none',
    });
  } else if (!/^1[3456789]\d{9}$/.test(formPhone.value)) {
    uni.showToast({
      title: '请填写正确的手机号码格式',
      icon: 'none',
    });
  } else if (formName.value.length < 2) {
    uni.showToast({
      title: '姓名字数长度为2-10',
      icon: 'none',
    });
  } else {
    if (editOrAdd.value === 'add' && !id.value) {
      let params = {
        name: formName.value,
        phone: formPhone.value,
        address: formAddressInfo.value,
        province: provinceName.value,
        city: cityName.value,
        county: countyName.value,
        isDefault: isDefaultAddress.value ? 1 : 0,
        location: location.value
      };
      addAddressBook(params)
        .then((res) => {
          uni.showToast({
            title: '操作成功',
            icon: 'success',
          });
          if (isFromAddress.value === 'true') {
            uni.redirectTo({
              url: '/pages/address/index' + '?detailId=' + detailId.value,
            });
          } else {
            uni.redirectTo({
              url:
                '/pages/address/index?id=' +
                res.data.id +
                '&type=' +
                type.value + '?detailId=' + detailId.value,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      uni.redirectTo({
        url: '/pages/address/index ' + '?detailId=' + detailId.value,
      });
    } else if (editOrAdd.value === 'edit' && id.value) {
      updateAddressBook(id.value, {
        name: formName.value,
        phone: formPhone.value,
        address: formAddressInfo.value,
        province: provinceName.value,
        city: cityName.value,
        county: countyName.value,
        isDefault: isDefaultAddress.value ? 1 : 0,
      }).then((res) => {
        uni.showToast({
          title: '操作成功',
          icon: 'success',
        });
        if (isFromAddress.value === 'true') {
          uni.navigateTo({
            url: '/pages/address/index?detailId=' + detailId.value,
          });
        } else {
          uni.navigateTo({
            url:
            '/pages/address/index?id=' +
                res.data.id +
                '&type=' +
                type.value + '?detailId=' + detailId.value,
          });
        }
      });
    }
  }
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
<style src="./components/selectArea.scss" lang="scss"></style>
