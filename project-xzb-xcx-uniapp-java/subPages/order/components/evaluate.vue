<!-- 发表评价 -->
<template>
  <view :class="edit ? 'evaluate' : 'bg-wt evaluate appList'">
    <NavBar
      :title="title"
      :isShowBack="true"
      :handleToLink="handleToLink"
    ></NavBar>
    <view class="evaluationBox" v-if="edit">
      <view class="head">
        <view class="title"> 服务评价 </view>
        <!-- 输入框 -->
      </view>
      <!-- 加入星星打分 -->
      <view
        class="head"
        v-for="(item, index) in CommentData.serveItemScoreItems"
        :key="index"
      >
        <view class="title fw-400"> {{ item.itemName }} </view>
        <uni-rate
          activeColor="#F74145"
          color="#ccc"
          :size="21"
          margin="16"
          v-model="item.score"
        ></uni-rate>
        <!-- 输入框 -->
      </view>
      <view class="inputBox">
        <uni-easyinput
          type="textarea"
          v-model="CommentData.serveItemEvaluationContent"
          placeholder="请输入对本次服务的的真实评价…"
          :inputBorder="false"
          :maxlength="
            evaluateConfig?.serveItemEvaluationSystemInfo.evaluationConfig
              .contentWordNum
          "
          :styles="{
            color: '#151515',
          }"
        >
        </uni-easyinput>
        <view class="textNum">
          <!-- 表情 -->
          <Emoji @handleEmoji1="handleEmoji1" :id="1"></Emoji>
          <text
            >{{ CommentData.serveItemEvaluationContent.length }}/{{
              evaluateConfig?.serveItemEvaluationSystemInfo.evaluationConfig
                .contentWordNum
            }}</text
          >
        </view>
      </view>
      <!-- 上传图片 -->
      <view class="uploadPhoto">
        <uni-section type="line">
          <view class="example-body">
            <uni-file-picker
              limit="3"
              ref="upImg"
              v-model="CommentData.serveItemPictureArray"
              @select="uploadImage"
              @success="uploadImage"
              :preview="true"
              :size-type="['compressed']"
              :source-type="['album', 'camera']"
            ></uni-file-picker>
          </view>
        </uni-section>
      </view>
    </view>

    <!-- 师傅评价 -->
    <view class="evaluationBox shifu" v-if="edit">
      <view class="head">
        <view class="title"> 师傅评价 </view>
        <!-- 输入框 -->
      </view>
      <!-- 加入星星打分 -->
      <view
        class="head"
        v-for="(item, index) in CommentData.serveProviderScoreItems"
        :key="index"
      >
        <view class="title fw-400"> {{ item.itemName }} </view>
        <uni-rate
          activeColor="#F74145"
          color="#ccc"
          :size="21"
          margin="16"
          v-model="item.score"
        ></uni-rate>
        <!-- 输入框 -->
      </view>
      <view class="inputBox">
        <uni-easyinput
          type="textarea"
          v-model="CommentData.serveProviderEvaluationContent"
          placeholder="请输入对本次服务的的真实评价…"
          :maxlength="
            evaluateConfig?.serveProviderEvaluationSystemInfo?.evaluationConfig
              .contentWordNum
          "
          :inputBorder="false"
          :styles="{
            color: '#151515',
          }"
        >
        </uni-easyinput>
        <view class="textNum">
          <!-- 表情 -->
          <Emoji @handleEmoji2="handleEmoji2" :id="2"></Emoji>
          <text
            >{{ CommentData.serveProviderEvaluationContent.length }}/{{
              evaluateConfig?.serveItemEvaluationSystemInfo.evaluationConfig
                .contentWordNum
            }}</text
          ></view
        >
      </view>
    </view>
    <view class="anonymous" v-if="edit">
      <uni-section title="匿名" type="line">
        <uni-data-checkbox
          multiple
          :localdata="anonymous"
          @change="changeAnonymous"
        ></uni-data-checkbox>
      </uni-section>
    </view>
    <view class="evaluationBox" v-if="!edit">
      <view class="successBox">
        <image
          src="../../../static/pjcg@2x.png"
          mode="scaleToFill"
          class="successIcon"
        />
        <view class="text"> 评价成功 </view>
        <button @click="toComments" class="agree-btn btn">查看评价</button>
      </view>
    </view>
    <view class="pageFixFoot" v-if="edit">
      <button @click="toSubmit" class="agree-btn btn">确认提交</button>
    </view>
    <!-- 分割线 -->
    <view class="cutLine"></view>
    <!-- 订单列表 -->
    <scroll-view
      scroll-y="true"
      class="evaluateScroll"
      :class="itemData.length > 0 ? '' : 'grey'"
    >
      <view class="orderList" v-if="!edit && itemData.length > 0">
        <view class="title">— 继续评价 —</view>
        <view class="timeList">
          <view
            class="box boxRadius item"
            v-for="(item, index) in itemData"
            :key="index"
          >
            <view class="itemCon">
              <view class="head">
                <image :src="item.serveItemImg"></image>
              </view>
              <view class="rightBox">
                <view class="rText">
                  <view class="itemTit tit"
                    ><text>{{ item.serveItemName }}</text>
                  </view>
                  <view class="info">{{
                    formatDateTimeToDateTimeString(
                      new Date(item.serveStartTime.replace(/-/g, '/'))
                    )
                  }}</view>
                </view>
                <view class="btnBox">
                  <view class="btn" @click.stop="handleDetail(item.id)"
                    >去评价</view
                  ></view
                >
              </view></view
            >
            <view class="address">{{ item.serveAddress }} </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
// 接口
import { getOrderScroll, addComment } from '@/pages/api/order.js';
import { useStore } from 'vuex';
import Emoji from './emoji.vue';
import { onLoad, onReachBottom } from '@dcloudio/uni-app';
import { formatDateTimeToDateTimeString } from '@/utils/index.js';
import { getEvaluate } from '../../../pages/api/service';
const edit = ref(true); //true评价 false评价完成页面
const token = uni.getStorageSync('token');
const title = ref('评价');
const store = useStore();
const evaluateConfig = ref(); //评价配置
const providerScoreList = ref([]); //师傅评分项列表
const serveItemScoreList = ref([]);//服务评分项列表
const isSendRequest = ref(false); // 是否发送请求
const moreStatus = ref('more'); //more loading noMore
const loading = ref(true);
const pages = ref(0);
const netStatus = ref(true);
let params = reactive({
  sortBy: '',
  ordersStatus: 400,
});
const anonymous = ref([
  {
    text: '匿名评价',
    value: '1',
    checked: true,
  },
]);
// 评价数据
const CommentData = ref({
  serveProviderScoreItems: [],
  serveItemScoreItems: [],
  serveItemEvaluationContent: '',
  isAnonymous: 0,
  ordersId: '',
  serveProviderEvaluationContent: '',
  serveItemPictureArray: [],
});

onLoad((option) => {
  getEvaluateInfo();
  CommentData.value.ordersId = option.id;
});
const itemData = ref([]); //预约数据
const upImg = ref(); // 上传图片
// 提交
const toSubmit = () => {
  // 判断CommentData中有没空值有的话提示
  if (
    !CommentData.value.serveItemEvaluationContent ||
    !CommentData.value.serveItemPictureArray.length ||
    !CommentData.value.ordersId
  ) {
    // 判断serveItemScoreItems中的每一项是否有空值如果有空值返回false
    const isNull = CommentData.value.serveItemScoreItems.some((item) => {
      return item.score === null;
    });
    if (isNull) {
      uni.showToast({
        title: '请将信息填写完整',
        icon: 'none',
        duration: 2000,
      });
      return;
    }
  }
  const params = ref({ ...CommentData.value });
  params.value.serveProviderEvaluationContent =
    CommentData.value.serveProviderEvaluationContent === ''
      ? '此用户没有填写评价，系统默认好评'
      : CommentData.value.serveProviderEvaluationContent;
  addComment(params.value).then((res) => {
    if (res.data.code == 200) {
      uni.showToast({
        title: '提交成功',
        icon: 'none',
        duration: 2000,
      });
      title.value = '';
      edit.value = false;
      getNewData();
    } else {
      uni.showToast({
        title: res.data.msg,
        icon: 'none',
        duration: 2000,
      });
    }
  });

  // edit.value = false;
};
// 跳转到评价列表
const toComments = () => {
  uni.navigateTo({
    url: '/pages/commit/index',
  });
};
// 跳转到下一个评价
const handleDetail = (id) => {
  uni.navigateTo({
    url: `/subPages/order/components/evaluate?id=${id}`,
  });
};
// 获取待评价列表
const getNewData = async (type) => {
  params = {
    ...params,
  };
  params.sortBy = itemData.value[itemData.value.length - 1]?.sortBy
    ? itemData.value[itemData.value.length - 1]?.sortBy
    : '';
  if (isSendRequest.value) {
    return;
  }
  moreStatus.value = 'loading';
  loading.value = false;
  await getOrderScroll(params)
    .then((res) => {
      if (res.data.code == 200) {
        const { data } = res.data;
        // items == null 会报错 把他处理掉
        const items = data == null ? [] : data;
        moreStatus.value = items.length < 10 ? 'no-more' : 'more';
        // 从第一页请求 清空之前的数据
        // 下拉数据合并
        itemData.value = itemData.value ? [...itemData.value, ...items] : items;
        // 如果 当前页面的数据已经全部数据了 那么停止拿数据
        pages.value = data.length;
        if (pages.value < 10) {
          isSendRequest.value = true;
          moreStatus.value = 'noMore';
        }
        uni.stopPullDownRefresh();
        netStatus.value = true;
        loading.value = true;
      }
    })
    .catch((err) => {
      // 弹出错误提示
      console.log(err);
      netStatus.value = false;
    });
};
// 上拉加载
onReachBottom(() => {
  if (!edit.value && itemData.value.length > 0) {
    if (pages.value < 10) {
      moreStatus.value = 'noMore';
      return false;
    } else {
      moreStatus.value = 'loading';
      let times = setTimeout(() => {
        getNewData();
      }, 1000); //这里延时一秒在加载方法有个loading效果
    }
  }
});
// 返回
const handleToLink = () => {
  if (edit.value) {
    uni.navigateBack();
  } else {
    uni.redirectTo({
      url: '/subPages/order/index',
    });
  }
};
// 匿名
const changeAnonymous = (e) => {
  CommentData.value.isAnonymous = e.detail.data.length === 0 ? 0 : 1;
};
// 获取评价信息
const getEvaluateInfo = () => {
  getEvaluate().then((res) => {
    if (res.data.code === 200) {
      evaluateConfig.value = res.data.data;
      providerScoreList.value =
        evaluateConfig.value.serveProviderEvaluationSystemInfo.evaluationConfig.scoreConfigList.filter(
          (item) => item.enabled == true
        );
      CommentData.value.serveProviderScoreItems = providerScoreList.value.map(
        (item) => {
          return {
            itemId: item.itemId,
            score: 5,
            itemName: item.itemName,
          };
        }
      );
      serveItemScoreList.value =
        evaluateConfig.value.serveItemEvaluationSystemInfo.evaluationConfig.scoreConfigList.filter(
          (item) => item.enabled == true
        );
      CommentData.value.serveItemScoreItems = serveItemScoreList.value.map(
        (item) => {
          return {
            itemId: item.itemId,
            score: null,
            itemName: item.itemName,
          };
        }
      );
      store.commit('user/setEvaluate', res.data.data);
    }
  });
};
// 上传图片
const uploadImage = (result) => {
  // 获取选择的图片临时文件路径
  const tempFilePaths = result.tempFilePaths;
  // 准备上传图片的数据
  const formData = {
    // 这里可以添加其他需要的表单数据
  };
  for (let i = 0; i < tempFilePaths.length; i++) {
    const uploadTask = uni.uploadFile({
      url: 'https://jzo2o-api-test.itheima.net/publics/storage/upload', // 替换为你的服务器上传接口地址
      filePath: tempFilePaths[i],
      name: 'file', // 与服务器端点的文件字段名称匹配
      formData: formData,
      header: {
        Authorization: `${token}`, // 在这里将 token 添加到头部
      },
      success: (res) => {
        const data = JSON.parse(res.data);
        uni.showToast({
          title: '上传成功！',
          icon: 'none',
          duration: 2000,
          position: 'top',
        });
        CommentData.value.serveItemPictureArray.push(data.data.url);
        // 处理上传成功的响应
        uni.hideLoading();
      },
      fail: (error) => {
        console.error('上传失败', error);
        upImg.value.clearFiles(i);
        // 处理上传失败的情况
        uni.showToast({
          title: '上传失败！',
          icon: 'none',
          duration: 2000,
          position: 'top',
        });
      },
    });
    uploadTask.onProgressUpdate((res) => {
      // 出现进度条
      uni.showLoading({
        title: '上传中',
        mask: true,
      });
    });
  }
};
// handleEmoji'
const handleEmoji1 = (val) => {
  CommentData.value.serveItemEvaluationContent += `${val.id}`;
};
const handleEmoji2 = (val) => {
  CommentData.value.serveProviderEvaluationContent += `${val.id}`;
};
</script>

<style lang="scss" scoped src="../index.scss"></style>
<style lang="scss" scoped>
.address {
  margin-top: 4rpx;
  padding-left: 12rpx;
  padding-right: 12rpx;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  font-size: 28rpx;
  color: #888888;
  letter-spacing: 0.16px;
  margin-bottom: 20rpx;
}
.grey {
  background-color: #f8f8f8;
}
.fw-400{
  font-weight: 400 !important;
}
.rightBox {
  display: flex;
  justify-content: space-between;
  flex: 1;
  .btnBox {
    display: flex;
    align-content: center;
    // 上下居中
    .btn{
      margin: auto;
    }
    
  }
}
.appList .itemCon .tit {
  margin-top: 0;
  padding-bottom: 11rpx;
}
</style>
