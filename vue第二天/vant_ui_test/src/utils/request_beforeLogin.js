import axios from 'axios'
import { showFailToast, showLoadingToast } from 'vant'
import { ref } from 'vue'
const loading = ref('')// 加载状态

const instance = axios.create({ // 登录页的请求实例
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000,
  headers: {
    platform: 'h5',
  },
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  loading.value = showLoadingToast({
    message: '加载中...',
    forbidClick: true, // 禁止点击
    loadingType: 'spinner',
    duration: 0, // 一直显示加载中
  })// 发送请求时显示加载中
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  loading.value.close()// 返回结果后关闭加载中
  return response.data
}, function (error) {
  // 对响应错误做点什么
  console.error('请求错误:', error)
  // 根据错误状态码进行相应处理
  if (error.response) {
    const { status, data } = error.response
    switch (status) {
      case 400:
        showFailToast(data.message || '请求参数错误')
        break
      case 401:
        showFailToast('未授权，请重新登录')
        // token过期或无效，清除本地token并跳转到登录页
        localStorage.removeItem('token')
        // 这里可以添加跳转到登录页的逻辑
        break
      case 403:
        showFailToast('拒绝访问')
        break
      case 404:
        showFailToast('请求资源不存在')
        break
      case 408:
        showFailToast('请求超时')
        break
      case 500:
        showFailToast('服务器内部错误')
        break
      case 501:
        showFailToast('服务未实现')
        break
      case 502:
        showFailToast('网关错误')
        break
      case 503:
        showFailToast('服务不可用')
        break
      case 504:
        showFailToast('网关超时')
        break
      default:
        showFailToast('未知错误')
    }
  } else if (error.request) {
    // 请求已发出但没有收到响应
    showFailToast('网络连接异常')
  } else {
    // 其他错误
    showFailToast('请求失败')
  }

  return Promise.reject(error)
})

export default instance
