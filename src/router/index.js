import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',//你要去这个路由的路径
    name: 'Login',//路由的名称
    component: Login,//路由对应的组件
    hidden: true // 不会被循环遍历出来
  },
  {
    path: '/home',//你要去这个路由的路径
    name: 'Home',//路由的名称
    component: Home//路由对应的组件
  }
]

const router = new VueRouter({
  routes
})

export default router
