<!-- 空页面 -->
<template>
	<view class="emptyBox">
		<image src="../../static/zwnr2x.png" class="emptyImage" mode=""></image>
		<view><text>{{emptyInfo}}</text></view>
	</view>
</template>

<script setup>
	// 获取父组件值、方法
	const props = defineProps({
		emptyInfo:{
			type:String,
			default: '',
		}
	})
</script>


<style lang="scss">
	@import url('@/styles/theme.scss');
	:deep(.emptyBox){
		padding: 144rpx 0 60rpx;
		text-align: center;
		color: var(--neutral-color-main);
		font-size: var(--font-size-13);
	}
	:deep(.emptyImage) {
	  width: 320rpx !important;
	  height: 290rpx !important;
		display: inline-block;
		margin-bottom: 40rpx;
	}
</style>