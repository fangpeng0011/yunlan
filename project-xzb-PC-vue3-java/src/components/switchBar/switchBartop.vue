<!-- tab栏切换组件 -->
<template>
  <div class="headBox">
    <div class="sw-box">
      <span
        v-for="(item, index) in data"
        :key="index"
        :class="{ title: true, line: currentId == item.id }"
        @click="changeId(item.id)"
        >{{ item.name
        }}<span v-if="item.value" class="value">{{ item.value }}</span></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Type from './type'

// 父组件传值
const props = defineProps({
  data: {
    type: Array as () => Type[],
    default: () => [],
  }
})
// 触发父组件事件
const emit: Function = defineEmits(['changeId'])
// 当前选中id
const currentId = ref(props.data[0].id)
// 点击切换
const changeId = (id) => {
  currentId.value = id
  emit('changeId', id)
}
</script>
<style lang="less" scoped>
.headBox {
  padding-bottom: 9.5px;
  border-bottom: 1px solid #e8e8e8;
  .sw-box {
    font-family: PingFangSC-SNaNpxibold;
    font-weight: 400;
    font-size: 16px;
    color: var(--color-bk3);
    .title {
      color: var(--color-bk2);
      font-size: 14px;
      padding-left: 16px;
      padding-right: 16px;
      display: inline-block;
      //  文字左右居中
      text-align: center;
      cursor: pointer;
      &:hover {
        color: var(--color-main);
      }
    }
    .line {
      color: var(--color-main);
      font-weight: 500;
      position: relative;
      cursor: pointer;
      &::before {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        content: '';
        width: 100%;
        height: 2px;
        border-radius: 4px;
        bottom: -10px;
        background: var(--color-main);
      }
    }
  }
}
.value {
  margin-left: 5px;
}
</style>
