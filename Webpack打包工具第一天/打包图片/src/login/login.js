import { checkPhone, checkCode } from "../utils";

document.querySelector('.btn').addEventListener('click', function () {
  const phone = document.querySelector('.login-form [name="mobile"]')
  const code = document.querySelector('.login-form [name="code"]')
  if (!checkPhone(phone.value)) {
    console.log("手机号为11位数")
    return
  }
  if (!checkCode(code.value)) {
    console.log("验证码为6位数")
    return
  }
  console.log("登陆成功")
})

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../login/login.css'

import '../login/logintry.less'

import img from '../login/assets/logo.png'
const Img = document.createElement('img')
Img.src = img
document.querySelector('.login-wrap').appendChild(Img)

