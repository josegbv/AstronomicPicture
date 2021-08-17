import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/DayAstro',
    name: 'DayAstro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/RamdonAstro',
    name: 'RamdonAstro',
    component: () => import(/* webpackChunkName: "about" */ '../views/RamdonAstro.vue')
  },
  {
    path: '/MonthAstro',
    name: 'MonthAstro',
    component: () => import(/* webpackChunkName: "about" */ '../views/MonthAstro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
