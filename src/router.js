import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name: 'home',
      component:Home,
      children:[
        {
          path:'list',
          name:'list',
          component:()=>import('./views/List.vue')
        },
        {
          path:'user',
          name:'user',
          component:()=>import('./views/User.vue')
        },
        {
          path: '/info',
          name: 'info',
          component: () => import('./views/Info.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/Add.vue')
    }
  ]
})
