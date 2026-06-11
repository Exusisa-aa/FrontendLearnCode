import { checkPhone, checkCode } from "../utils";
import { myAlert } from '../utils/alert.js'
import myAxios from '../utils/request.js'

document.querySelector('.btn').addEventListener('click', function () {
  const phone = document.querySelector('.login-form [name="mobile"]')
  const code = document.querySelector('.login-form [name="code"]')
  if (!checkPhone(phone.value)) {
    myAlert(false, '手机号为11位数')
    console.log("手机号为11位数")
    return
  }
  if (!checkCode(code.value)) {
    myAlert(false, '验证码为6位数')
    console.log("验证码为6位数")
    return
  }
  console.log("登陆成功")
  myAxios({
    url: '/v1_0/authorizations',
    method: 'post',
    data: {
      mobile: phone.value,
      code: code.value
    }
  }).then(result => {
    myAlert(true, "登陆成功")
    console.log(result)
  }).catch(error => {
    myAlert(false, error.response.data.message)
    console.dir(error)
  })
})

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../login/login.css'

import '../login/logintry.less'

import img from '../login/assets/logo.png'
const Img = document.createElement('img')
Img.src = img
document.querySelector('.login-wrap').appendChild(Img)

if (process.env.NODE_ENV === 'production') {
  console.log = function () { }
}
console.log("开发模式显示，生产模式不显示")


