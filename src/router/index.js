/*
路由配置
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import From from '../pages/From/From.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/from',
      component:From,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/from'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
