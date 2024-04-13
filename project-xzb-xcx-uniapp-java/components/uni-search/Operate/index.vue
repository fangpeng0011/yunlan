<!--取消-->
<template>
	<uni-popup ref="popup" class="uniPopupBox" mask-background-color="rgba(0,0,0,0.6)">
		<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
			<view class="popupCon">
				<view class="popIcon">
					<icon></icon>
				</view>
				<view class="tip operateText">
					<text>{{errorTipText.text}}</text>
				</view>
			</view>
			<view class="popupFoot">
				<text @click="handleClose">再想想</text>
				<text @click="handleSub">确定</text>
			</view>
		</view>
	</uni-popup>
</template>
<script setup>
import { ref } from 'vue';
// 获取父组件值、方法
const props = defineProps({
	// 选择的时间
	errorTipText: {
		type: Object,
		default: ()=>({})
	}
});
// ------定义变量------
const popup = ref(null);//定义弹层ref
const emit = defineEmits(['@handleSub'])
// ------定义方法------
// 关闭弹层
const handleClose = ()=>{
	popup.value.close()
}
// 确认解绑
const handleSub=()=>{
	emit('handleSub')
}
// 暴露给父组件
defineExpose({
	popup
});
</script>
