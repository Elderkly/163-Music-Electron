import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/HomePage').default
    },
    {
      path: '/Fm',
      name: 'Fm',
      component: require('@/components/FmPage')
    },
    {
      path: '/Seting',
      name: 'Seting',
      component: require('@/components/SetingPage')
    },
  ]
})
