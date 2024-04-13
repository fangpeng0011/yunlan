<!-- tab栏切换组件 -->
<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Type from './type'

// 父组件传值
const props = defineProps({
  data: {
    type: Array<Type>,
    default: []
  }
})
// 触发父组件事件
const emit: Function = defineEmits(['changeId'])
// 当前选中id
const currentId = ref(2)
// 点击切换
const changeId = (id) => {
  currentId.value = id
  emit('changeId', id)
}
</script>
<style lang="less" scoped>
// tab栏
.sw-box {
  font-family: PingFangSC-SNaNpxibold;
  font-weight: 400;
  font-size: 16px;
  color: var(--color-bk3);
  .title {
    margin-right: 40px;
    position: relative;
    cursor: pointer;
  }
  .line {
    color: var(--color-main);
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
.value {
  margin-left: 5px;
}
</style>
