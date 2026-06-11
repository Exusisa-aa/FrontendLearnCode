import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/findMusic/find' },
  { path: '/findMusic/:word?', component: () => import("@/views/findMusic.vue") },
  { path: '/myMusic/:word?', component: () => import("@/views/myMusic.vue") },
  { path: '/myFriend/:word?', component: () => import("@/views/myFriend.vue") },
  { path: '/search/:word?', component: () => import("@/views/search.vue") },
  { path: '/:pathMatch(.*)*', component: () => import("@/views/notFound.vue") }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'vue-active',
  linkExactActiveClass: 'vue-exact-active',
  routes: routes
})

export default router