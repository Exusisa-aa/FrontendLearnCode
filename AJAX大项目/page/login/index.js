/**
 * 目标1：验证码登录
 * 1.1 在 utils/request.js 配置 axios 请求基地址
 * 1.2 收集手机号和验证码数据
 * 1.3 基于 axios 调用验证码登录接口
 * 1.4 使用 Bootstrap 的 Alert 警告框反馈结果给用户
 */
document.querySelector('.btn').addEventListener('click', function () {
  const data = serialize(document.querySelector('.login-form'), { hash: true, empty: true })
  const mobile = data.mobile
  const code = data.code
  axios({
    url: '/v1_0/authorizations',
    method: 'post',
    data: {
      mobile,
      code
    }
  }).then(result => {
    myAlert(true, "登陆成功")
    console.log(result)

    //若登录成功则保存token到本地并跳转
    localStorage.setItem('token', result.data.token)
    setTimeout(() => {
      location.href = '../content/index.html'
    }, 1500)
  }).catch(error => {
    myAlert(false, error.response.data.message)
    console.dir(error)
  })
})

