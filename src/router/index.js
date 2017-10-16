import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'


import Index from '@/view/Index'
import Gays from '@/view/Gays'
import Find from '@/view/Find'
import Users from '@/view/Users'
import Chat from '@/view/Chat'

Vue.use(Router)
Vue.use(VueResource)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Gays',
      name: 'Gays',
      component: Gays
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/Chat/:id',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/Find',
        name: 'Find',
        component: Find
    },
    {
        path: '/Users',
        name: 'Users',
        component: Users
    }
  ]
})
