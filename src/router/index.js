import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      component: () => import('@/pages/myorder/myorder')
    },
    {
      path: '/bussiness/:id',
      name: 'bussiness',
      component: () => import('@/pages/bussiness/bussiness')
    }
  ]
})
