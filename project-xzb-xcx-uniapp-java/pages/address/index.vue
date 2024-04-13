<!-- 地址页 -->
<template>
  <view>
    <nav-bar
      title="我的地址"
      :handleToLink="handleToLink"
      :isShowBack="true"
    ></nav-bar>
    <view class="address" v-if="netStatus">
      <view class="list-container">
        <scroll-view
          v-if="list.data.length > 0"
          scroll-y
          class="scroll-view"
          :style="scrollHeight"
          lower-threshold="30"
          @scrolltolower="LoadMoreCustomers"
        >
          <view class="cardBox">
            <!-- 列表内容 -->
            <view
              v-for="(item, index) in list.data"
              @click.stop.prevent="
                isManage ? checkbox(index, item) : handleToAddressInfo(item.id)
              "
              :key="index"
              class="address-list"
              :class="isManage ? 'isChecked' : ''"
            >
              <view class="checkbox" v-if="isManage">
                <view class="checkRadio">
                  <radio
                    style="transform: scale(0.77)"
                    color="#F23C24"
                    :value="String(index)"
                    :checked="item.selected"
                  />
                </view>
              </view>
              <view class="address-item" :class="isManage ? 'isChecked' : ''">
                <view class="address-name">{{ item.name }}</view>
                <view class="address-phone">{{ item.phone }}</view>
                <view class="address-address">
                  {{
                    item.province
                      ? item.province + item.city + item.county + item.address
                      : ''
                  }}
                </view>
                <view class="line"></view>
                <view
                  class="address-item-footer"
                  :class="type === 'get' ? 'active' : ''"
                >
                  <view
                    class="save-address"
                    v-if="type !== 'get'"
                    @click.stop="
                      handleSaveToDefaultAddress(item.id, item.isDefault)
                    "
                  >
                    <view
                      class="checkbox"
                      :class="{ active: Boolean(item.isDefault) }"
                    ></view>
                    <view class="label">默认地址</view>
                  </view>
                  <view class="right-box" :class="!isManage ? '' : 'active'">
                    <view
                      class="edit-btn"
                      @click.stop="handleEditAddress(item)"
                    >
                      <icon></icon>
                      <text>编辑</text>
                    </view>
                    <view
                      class="delete-btn"
                      @click.stop="handledDelete(item.id)"
                    >
                      <icon></icon>
                      <text>删除</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <!-- 加载底部 -->
          <uni-load-more :status="status" />
        </scroll-view>
        <!-- 空页面 -->
        <view v-else class="empty-box">
          <image src="../../static/zwnr@2x.png"></image>
          <view>暂无服务地址哦～</view>
        </view>
        <!-- 全选操作栏 -->
        <view class="all-select" v-if="isManage">
          <view class="checkbox" @click="selectAll">
            <view class="checkRadio">
              <radio
                style="transform: scale(0.77)"
                :checked="isAllSelect"
                color="#F23C24"
              />
            </view>
          </view>
          <view>全选</view>
        </view>

        <!-- 底部操作栏 -->
        <view class="address-footer">
          <view
            class="manage-btn"
            v-if="list.data.length > 0"
            @click="handleEdit"
            >{{ isManage ? '完成' : '管理' }}
          </view>
          <view
            class="addAddress-btn"
            :class="
              (isManage && deleteIds.data.length) || !isManage ? 'active' : ''
            "
            @click="handleDeleteOrAdd"
            >{{ isManage ? '删除' : '新增地址' }}</view
          >
        </view>
      </view>
    </view>
    <!-- 断网显示的页面 -->
    <net-fail v-else :handleToRefresh="handleToRefresh"></net-fail>

    <!-- 删除确认对话框 -->
    <uni-popup ref="popup" type="dialog" class="address-popup" mask-background-color="rgba(0,0,0,0.6)">
      <uni-popup-dialog
        mode="base"
        :content="isManage ? '确定删除所选地址？' : '确定删除此条地址？'"
        :animation="false"
        :before-close="true"
        @close="close"
        @confirm="confirm"
      >
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app';
import { getAddressBook, setDefaultAddress, deleteAddressBook } from '../api/address';
let scrollHeight = ref('');
let popup = ref(null);
let isAllSelect = ref(false); //是否全选
let isManage = ref(false); //是否是管理状态
const detailId = ref('');
let deleteIds = reactive({
  data: [], //删除的地址id集合
});
let list = reactive({
  data: [], //列表数据
});
let pageInfo = reactive({
  page: 1,
  pageSize: 10,
});
let status = ref('more'); //加载状态
let type = ref('');
let isFromAddress = ref('');
let netStatus = ref(true);
// 监听页面加载执行
onLoad((options) => {
  type.value = options.type;
  isFromAddress.value = options.isFromAddress;
  detailId.value = options.detailId;
  uni.getSystemInfo({
    success: (res) => {
      scrollHeight.value = 'height:' + (res.screenHeight - 177) + 'px';
    },
  });
});
onMounted(() => {
  getList();
});
// 监听下拉刷新
onPullDownRefresh(() => {
  pageInfo.page = 1;
  getList();
});
// 断网刷新
const handleToRefresh = () => {
  pageInfo.page = 1;
  getList();
};
//设置是否为默认寄件地址
const handleSaveToDefaultAddress = (id, isDefault) => {
  if (isManage.value) {
    return;
  }
  let flag = isDefault === 1 ? 0 : 1;
  // 修改默认地址
  setDefaultAddress(id, flag)
    .then((res) => {
      pageInfo.page = 1;
      getList();
      if (res.code === 200) {
        uni.showToast({
          title: '修改成功',
          icon: 'none',
          duration: 1000,
          type: 'success',
        });
      } else {
        uni.showToast({
          title: '修改失败',
          icon: 'none',
          duration: 1000, //提示的延迟时间，单位毫秒，默认：1500
          type: 'error',
        });
      }
    })
    .catch(() => {
      uni.showToast({
        title: '网络异常',
        duration: 2000,
        icon: 'none',
      });
    });
};
//返回上一级防止是最后一级报错
const handleToLink = () => {
  if (type.value !== 'address') {
    uni.navigateBack();
  } else {
    uni.navigateTo({
      url: '/pages/my/index',
    });
  }
};
//跳转回寄件收件选择地址
const handleToAddressInfo = (id) => {
  if (type.value === 'address') {
    return;
  }
  if (detailId.value === 'undefined') {
    return;
  }
  uni.setStorageSync('activeAddressId', id)
  // 关闭当前页面，跳转回上一级页面
  if(isFromAddress.value === 'true') {
    uni.navigateBack({
      delta: 1,
    });
    return;
  }else{
    uni.navigateBack({
      delta: 2,
    });
  }
};
//批量删除或者新增地址
const handleDeleteOrAdd = () => {
  if (isManage.value) {
    if (deleteIds.data.length) popup.value.open();
  } else {
    type.value = 'add';
    uni.navigateTo({
      url:
        '/subPages/address-info/index?isFromAddress=' +
        isFromAddress.value +
        '&editOrAdd=add&type=' +
        type.value +
        '&detailId=' +
        detailId.value,
    });
  }
};
//编辑地址
const handleEditAddress = (item) => {
  if (isManage.value) {
    return;
  }
  uni.redirectTo({
    url:
      '/subPages/address-info/index?id=' +
      item.id +
      '&isFromAddress=' +
      isFromAddress.value +
      '&editOrAdd=edit' +
      '&type=' +
      type.value +
      '&isDefault=' +
      item.isDefault + '&detailId=' + detailId.value,
  });
};
//获取列表数据
const getList = (flag) => {
  status.value = 'loading';
  getAddressBook({
    pageNo: pageInfo.page,
    pageSize: pageInfo.pageSize,
    isAsc1: false,
    isAsc2: false,
    orderBy1: 'isDefault',
    orderBy2: 'updateTime',
  })
    .then((res) => {
      if (res.data.code === 200) {
        let arr = res.data.data.list || [];
        status.value = arr.length < 10 ? 'no-more' : 'more';
        //用于区分是一次进页面记载数据还是后续上拉加载
        if (flag === 'topPull') {
          list.data = list.data.concat(arr); // 上拉加载时，将新数据添加到原数据后面
        } else {
          list.data = arr;
        }
      }

      // 与搜索框等内容关联全选矿和具体选中状态，如果list.data中所有的selected都为true，即全选，全选文字前的radio框高亮
      if (list.data.every((item) => item.selected)) {
        isAllSelect.value = true;
      } else {
        isAllSelect.value = false;
      }
      uni.stopPullDownRefresh(); //停止当前页面下拉刷新。
      netStatus.value = true;
    })
    .catch(() => {
      uni.showToast({
        title: '网络异常',
        duration: 2000,
        icon: 'none',
      });
      netStatus.value = true;
    });
};
//上拉加载
const LoadMoreCustomers = () => {
  pageInfo.page = pageInfo.page + 1;
  if (status.value === 'no-more') {
    return;
  }
  getList('topPull');
};
//管理地址簿
const handleEdit = () => {
  isManage.value = !isManage.value;
};

//删除
const handledDelete = (id) => {
  if (isManage.value) {
    return;
  }
  popup.value.open();
  deleteIds.data.push(id);
};

//关闭删除确认提示框
const close = () => {
  popup.value.close();
  deleteIds.data = [];
};

//确认删除
const confirm = () => {
  popup.value.close();
  deleteAddressBook(deleteIds.data)
    .then(() => {
      pageInfo.page = 1;
      pageInfo.pageSize = 10;
      getList();
      uni.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 1000,
      });
      isManage.value = false;
    })
    .catch(() => {
      uni.showToast({
        title: '网络异常',
        duration: 2000,
        icon: 'none',
      });
    });
};

//选中，与取消选中（和全选联动）
const checkbox = (index, item) => {
  list.data[index].selected = !list.data[index].selected;
  // 如果list.data中所有的selected都为true，即全选，全选前的radio框高亮
  if (list.data.every((item) => item.selected)) {
    isAllSelect.value = true;
  } else {
    isAllSelect.value = false;
  }
  deleteIds.data = list.data
    .filter((item) => item.selected)
    .map((item) => item.id);
};
//全选或者全不选
const selectAll = () => {
  isAllSelect.value = !isAllSelect.value;
  list.data = list.data.map((item) => {
    return Object.assign({}, item, {
      selected: isAllSelect.value,
    });
  });
  deleteIds.data = list.data
    .filter((item) => item.selected)
    .map((item) => item.id);
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
