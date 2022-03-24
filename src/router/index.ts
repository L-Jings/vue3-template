import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // { path: '/', name: 'Home', component: () => import('views/home/index.vue') },
]
const router = createRouter({
  history: createWebHistory(), // hash 模式则使用 createWebHashHistory()
  routes,
})
export default router
