import Layout from '@/layouts/index.vue'
import orderIcon from '@/assets/test-img/icon_ddgl.svg'
import seizeIcon from '@/assets/test-img/icon_ddgl_nor.svg'
import personnelIcon from '@/assets/test-img/icon_fwry_nor.svg'
import dispatchIcon from '@/assets/test-img/icon_pdgl_nor.svg'

const normalRouter = [
  {
    path: '/roborder',
    name: 'roborder',
    component: Layout,
    redirect: '/roborder/information',
    meta: {
      title: '抢单管理',
      icon: seizeIcon,
      single: true
    },
    children: [
      {
        path: 'information',
        name: 'roborderInformation',
        component: () => import('@/pages/roborder/information/index.vue'),
        meta: {
          title: '抢单管理',
          // 用来修改当出现子菜单在active状态不会激活父元素的active状态
          singles: true
        }
      }
    ]
  },
  // {
  //   path: '/dispatch',
  //   name: 'dispatch',
  //   component: Layout,
  //   redirect: '/dispatch/index',
  //   meta: {
  //     title: '派单管理',
  //     icon: dispatchIcon,
  //     single: true
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'dispatchIndex',
  //       component: () => import('@/pages/dispatch/dispatch/index.vue'),
  //       meta: {
  //         title: '派单管理  ',
  //         // 用来修改当出现子菜单在active状态不会激活父元素的active状态
  //         singles: true
  //       }
  //     }
  //   ]
  // },
  {
    path: '/order',
    name: 'order',
    component: Layout,
    redirect: '/order/orderList',
    meta: {
      title: '订单管理',
      icon: orderIcon,
      single: true
    },
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/pages/order/orderList/index.vue'),
        meta: {
          title: '订单列表',
          // 用来修改当出现子菜单在active状态不会激活父元素的active状态
          singles: true
        },
        children: [
          {
            path: 'historyList',
            name: 'historyList',
            component: () => import('@/pages/order/orderList/historyList.vue'),
            meta: {
              title: '历史订单',
              // 用来修改当出现子菜单在active状态不会激活父元素的active状态
              singles: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/personnel',
    name: 'personnel',
    component: Layout,
    redirect: '/personnel/information',
    meta: {
      title: '服务人员管理',
      icon: personnelIcon,
      single: true
    },
    children: [
      {
        path: 'information',
        name: 'personnelInformation',
        component: () => import('@/pages/personnel/information/index.vue'),
        meta: {
          title: '服务人员管理',
          // 用来修改当出现子菜单在active状态不会激活父元素的active状态
          singles: true
        },
      }
    ]
  }
]

export default normalRouter
