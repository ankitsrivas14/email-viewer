import Vue from 'vue'
import VueRouter from 'vue-router'
import EmailList from '../views/EmailList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inbox',
    component: EmailList
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: EmailList
  },
  {
    path: '/archive',
    name: 'archive',
    component: EmailList
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
