import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'

Vue.use(Router)

const Route = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/HomePage').default
    },
    {
      path: '/Fm',
      name: 'Fm',
      component: require('@/components/FmPage').default
    },
    {
      path: '/Seting',
      name: 'Seting',
      component: require('@/components/SetingPage').default
    },
  ]
})

Route.beforeEach((to, from, next) => {
  /*
  * 每次路由刷新时触发
  * 获取是否是通过顶部导航栏触发的路由刷新
  * 如果是通过顶部导航栏触发的 则重置状态
  *
  *
  * 如果不是顶部导航栏触发的即正常跳转的
  * 判断是否是在最顶层插入的
  * 如果是最顶层插入的 则将路由插入到容器中
  *
  * 如果不是最顶层插入的 则根据index对路由栈进行修改 并将新路由设为顶层
  *
  * A => B => C => D
  *
  * A => B => E => C => D
  *
  * A => B => E
  *
  * */
  const { topNavigationClick, pageIndex, history } = Store.state.Counter
  if (topNavigationClick) {
    Store.commit('SET_PRESS_TYPE',false)
  } else {
    if (pageIndex < history.length) {
      const setHistory = Object.assign([],history)
      setHistory.splice(pageIndex,history.length - pageIndex,to)
      Store.commit('SET_HISTORY',setHistory)
    } else {
      Store.commit('ADD_HISTORY',to)
    }
    Store.commit('SET_PAGEINDEX',Store.state.Counter.history.length)
  }
  next()
})

export default  Route
