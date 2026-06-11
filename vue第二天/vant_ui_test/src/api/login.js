import axios from "@/utils/request_beforeLogin.js"

export const loginPicCode = () => {
  return axios.get("http://smart-shop.itheima.net/index.php?s=/api/captcha/image")
}

export const loginMsgCode = (captchaCode, captchaKey, mobile) => {
  return axios.post("http://smart-shop.itheima.net/index.php?s=/api/captcha/sendSmsCaptcha", {
    form: {
      captchaCode: captchaCode,
      captchaKey: captchaKey,
      mobile: mobile
    }
  })
}

export const login = (mobile, smsCode) => {
  return axios.post('http://smart-shop.itheima.net/index.php?s=/api/passport/login', {
    form: {
      isParty: false,
      mobile: mobile,
      partyData: {},
      smsCode: smsCode,
    }
  })
}

