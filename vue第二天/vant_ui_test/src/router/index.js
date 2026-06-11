import { createRouter } from 'vue-router'

const router = createRouter({

})

// import { useUserStore } from '@/stores/user'
// const userStore = useUserStore()
// const userUrl = ['/friends','/me'] 需要登录才能访问的页面
// router.beforeEach((to,from,next) => {
//   if(!userUrl.includes(to.path)){  不需要登录才能访问的页面
//     next() 放行
//     return
//   }else {
//     if(userStore.token){  登录了
//       next()  放行
//       return
//     }else{  未登录
//       next('/login')  跳转到登录页
//     }
//   }
// })

export default router
