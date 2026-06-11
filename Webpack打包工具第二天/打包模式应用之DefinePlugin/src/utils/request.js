// axios 公共配置
import axios from 'axios'
// 基地址
axios.defaults.baseURL = 'https://geek.itheima.net/'

//请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})


//响应拦截器
axios.interceptors.response.use(function (response) {
  //状态码为2xx，表示成功，执行该函数返回到then
  return response.data
}, function (error) {
  //状态码非2xx，表示失败，执行该函数返回到catch
  console.dir(error)
  if (error?.response?.status === 401) {
    alert("身份验证失败请重新登录~~")
    localStorage.clear()
    location.href = "../login/index.html"
  }
  return Promise.reject(error)
})

export default axios