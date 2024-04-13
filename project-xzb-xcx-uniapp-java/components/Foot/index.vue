<template>
	<!-- 公用底部tabbar，自定义 -->
	<view class="footBox">
		<view class="uni-tabbar">
			<view class="tabbar-item" :class="activePage === item.pagePath ? 'active' : ''" v-for="(item, index) in tabbar"
				:key="index" @tap="changeTab(item, index)">
				<view v-if="true" class="uni-tabbar__bd">
					<view class="uni-tabbar__icon" v-if="item.pagePath !== ''">
						<image v-if="activePage === item.pagePath" class="item-img" :src="item.selectedIconPath" />
						<image v-else class="item-img" :src="item.iconPath" />
					</view>
					<view v-else class="qrCode">
						<image :src="item.iconPath" />
					</view>
				</view>
				<view class="uni-tabbar__label" v-if="item.text !== ''">{{ item.text }}</view>
			</view>
		</view>
	</view>
	<!-- end -->
</template>

<script setup>
	import {
		ref,
    computed,
	} from 'vue';
	import {
		useStore
	} from 'vuex';
	// 获取父组件值、方法
	const props = defineProps({
		pagePath: {
			type: String,
			required: true
		}
	});
  const  activePage = computed(() => {
    return props.pagePath
  })
	const store = useStore();
	const currentPage = ref(store.state.footStatus);
	// 底部列表配置   
	const tabbar = ref([{
			"pagePath": "/pages/index/index",
			"text": "首页",
			"iconPath": "/static/sy.png",
			"selectedIconPath": "/static/sy1.png"
		},
		{
			"pagePath": "/pages/service/index",
			"text": "全部服务",
			"iconPath": "/static/fw.png",
			"selectedIconPath": "/static/qb1.png"
		},
		{
			"pagePath": "/pages/message/index",
			"text": "消息",
			"iconPath": "/static/x x.png",
			"selectedIconPath": "/static/xx1.png"
		},
		{
			"pagePath": "/pages/my/index",
			"text": "我的",
			"iconPath": "/static/wd.png",
			"selectedIconPath": "/static/wd2.png"
		}
	]);
	// 切换事件
	const changeTab = (item, index) => {
		let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		let curRoute = routes[routes.length - 1].route //获取当前页面路由
		if (item.text !== '') {
			currentPage.value = index;
			store.commit('setFootStatus', index) //设置当前底部导航状态
			const token = uni.getStorageSync('token')
			store.commit('user/setAppointmentType', null); //清除从首页进入的预约当前状态
			if (!token && index === 1) {
				if(curRoute==='pages/my/index'){
					store.commit('setFootStatus', 3)
				}else if(curRoute==='pages/index/index'){
					store.commit('setFootStatus', 0)
				}else if(curRoute==='pages/service/index'){
					store.commit('setFootStatus', 2)
				}
				store.commit('setRouter',curRoute)
				uni.redirectTo({
					url: '/pages/login/index'
				});
			} else {
        //  点击消息时
        if(item.pagePath==='/pages/message/index'){
          uni.showToast({
            title: '当前功能非教学版本！',
            icon:'none'
          });
        }else{
          uni.redirectTo({
					url: item.pagePath
				});
        }
				
			}

		}
	};
</script>