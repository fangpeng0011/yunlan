<!-- 服务技能 -->
<template>
  <view class="serviceSkill">
    <!-- nav -->
    <UniNav
      title="选择服务技能"
      @goBack="goBack"
      :rithtText="status === 'read' ? '编辑' : ''"
      @handleAll="handleEdit"
    ></UniNav>
    <view class="servicePage">
      <view class="left">
        <view
          v-for="(item, index) in serviceSkill.data"
          :key="index"
          :class="activeId === item.serveTypeId ? 'active tagBox' : 'tagBox'"
          @click="tabChange(item, index)"
        >
          <view class="tag"
            >{{ item.serveTypeName }}
            <text v-if="item.count" class="selectNum">{{ item.count }}</text>
          </view>
        </view>
      </view>
      <!-- 右边内容区域 -->
      <view class="serviceBox right">
        <view>
          <view class="clean">
            <view
              class="card"
              :class="item.isSelected ? 'active' : ''"
              v-for="(item, index) in rightItem.data"
              :key="index"
              @click="handleSelect(item)"
            >
              {{ item.serveItemName }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="footer" v-show="status === 'edit'">
      <view class="btn-gray btn" @click="handleCancel">取消</view>
      <view class="btn-red btn" @click="handleSubmit">保存</view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { updateServiceSkill, getServiceSkillAll } from '../api/setting.js';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const activeId = ref(null); // 当前选中的id
const activeIndex = ref(0); //左侧当前选中索引

const serviceSkill = reactive({
  data: [],
}); //左侧服类型
const rightItem = reactive({
  data: [],
}); //右侧服务项

const status = ref('read');

onMounted(() => {
  getServiceSkillAllFunc();
});
//获取服务技能及其下的服务技能所有数据
const getServiceSkillAllFunc = () => {
  getServiceSkillAll()
    .then((res) => {
      if (res.code == 200) {
        serviceSkill.data = res.data;
        activeId.value = res.data[0].serveTypeId;
        rightItem.data = serviceSkill.data[0].serveSkillItemResDTOList;
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
};

//点击服务技能项
const handleSelect = (active) => {
  if (status.value === 'read') return;
  (serviceSkill.data[activeIndex.value].serveSkillItemResDTOList =
    serviceSkill.data[activeIndex.value].serveSkillItemResDTOList.map(
      (item) => {
        if (active.serveItemId === item.serveItemId) {
          return Object.assign({}, item, { isSelected: !item.isSelected });
        } else {
          return item;
        }
      }
    )),
    (rightItem.data = [
      ...serviceSkill.data[activeIndex.value].serveSkillItemResDTOList,
    ]);
};
//点击保存
const handleSubmit = () => {
  const selectedList = [];
  const arr = [];
  serviceSkill.data.forEach((item) => {
    item.serveSkillItemResDTOList.forEach((item1) => {
      if (item1.isSelected) {
        selectedList.push({
          serveItemId: item1.serveItemId,
          serveItemName: item1.serveItemName,
          serveTypeId: item.serveTypeId,
          serveTypeName: item.serveTypeName,
        });
        arr.push(item1);
      }
    });
  });
  updateServiceSkill(selectedList)
    .then((res) => {
      if (res.code === 200) {
        status.value = 'read';
        getServiceSkillAllFunc();
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
//点击取消
const handleCancel = () => {
  status.value = 'read';
  getServiceSkillAllFunc();
};
//点击编辑
const handleEdit = () => {
  status.value = 'edit';
};
// 切换侧边栏
const tabChange = (item, index) => {
  activeId.value = item.serveTypeId;
  activeIndex.value = index;
  rightItem.data =
    serviceSkill.data[activeIndex.value].serveSkillItemResDTOList;
};

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
