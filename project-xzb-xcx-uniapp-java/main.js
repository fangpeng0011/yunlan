import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/styles/common.scss';
import '@/styles/theme.scss';
import NavBar from '@/components/Navbar/index.vue'
import NetFail from '@/components/NetFail/index.vue'
// 底部导航
import UniFooter from '@/components/Foot/index.vue';
// import Vue from 'vue'

const app = createApp(App)
app.use(store)
app.mount('#app')

app.component('nav-bar', NavBar);
app.component('net-fail', NetFail);
app.component('uni-footer', UniFooter);//底部导航