import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: '/', redirect: '/findMusic?word=find&id=1' },
  { path: '/findMusic', component: () => import("@/views/findMusic.vue") },
  { path: '/myMusic', component: () => import("@/views/myMusic.vue") },
  { path: '/myFriend', component: () => import("@/views/myFriend.vue") },
  { path: '/search', component: () => import("@/views/search.vue") },
  { path: '/:pathMatch(.*)*', component: () => import("@/views/notFound.vue") }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'vue-active',
  linkExactActiveClass: 'vue-exact-active',
  routes: routes
})

export default router