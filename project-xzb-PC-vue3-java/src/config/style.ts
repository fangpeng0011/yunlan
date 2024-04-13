export default {
  showApiModal: false, // 是否展示接口测试工具
  showSidebar: true, // 是否显示侧边栏
  isSidebarCompact: false, // 侧边栏是否展开（这里设置没有用，在SideNav组件中再onMounted中会自动将该值设置为false，也就是默认展开侧边栏）
  showBreadcrumb: true, // 是否展示面包屑
  mode: 'light', // 主题模式 light  black
  brandTheme: 'default', // 主题色配置(mode1/mode2/mode3/mode4/mode5)
  layout: 'side', // 整体布局 'side'左右；"top" 上左右；
  style: 'normal', // 侧边栏菜单风格(noSecondMenu无二级导航菜单风格、normal正常风格)
  isUseTabsRouter: false // 是否使用多标签页功能（tab标签方式记录）
}
