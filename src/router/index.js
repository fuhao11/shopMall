import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import App from '../App'


Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/discuss',
          name: 'Discuss',
          component: () => import('@/pages/discuss/Discuss')
        },
        {
          path: '/shopCar',
          name: 'ShopCar',
          component: () => import('@/pages/ShopCar/ShopCar')
        },
        {
          path: '/myorder',
          name: 'myorder',
          component: () => import('@/pages/myorder/myorder'),
        },
        {
          path:'/myorder/orderdetail/:id',
          name:'orderDetail',
          component: () => import('@/pages/myorder/detail/orderDetail')
        },
        {
          path: '/bussiness/:id',
          name: 'bussiness',
          component: () => import('@/pages/bussiness/bussiness')
        },
        {
          path: '/wuliu',
          component: () => import('@/pages/wuliu/wuliu')
        },
        {
          path: '/cash',
          component: () => import('@/pages/cash/Cash'),
          children:[{
            path: 'cashdetail',
            component: () => import('@/pages/cash/children/cashDetail')
          },{
            path: 'cashrec',
            component: () => import('@/pages/cash/children/cashRec')
          }]
        },
        {
          path: '/me',
          component: () => import('@/pages/me/me'),
          children:[{
            path:'myAttention',
            component: () => import('@/pages/me/children/myAttention')
          },{
            path:'historyLook',
            component: () => import('@/pages/me/children/historyLook')
          }]
        }
      ]
    },
  ],
  scrollBehavior(to,from,savedPositon){
    return { x: 0, y: 0 }
  }
})
