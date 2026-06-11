/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */


const creator = "老李"



function render() {
  axios({
    url: "https://hmajax.itheima.net/api/settings",
    method: "get",
    params: {
      creator: creator
    }
  }).then(result => {
    for (let key in result.data.data) {
      if (key === "avatar") {
        document.querySelector(".prew").src = result.data.data[key]
      } else if (key === "gender") {
        document.querySelectorAll(".gender")[result.data.data[key]].checked = true
      } else {
        document.querySelector(`.${key}`).value = result.data.data[key]
      }
    }
  })
}

render()

document.querySelector(".upload").addEventListener("change", function (e) {
  const fd = new FormData()
  fd.append("avatar", e.target.files[0])
  fd.append("creator", creator)
  axios({
    url: "https://hmajax.itheima.net/api/avatar",
    method: "put",
    data: fd
  }).then(result => {
    document.querySelector(".prew").src = result.data.data.avatar
    localStorage.setItem("avatar", result.data.data.avatar)
  })
})
if (localStorage.getItem("avatar") !== null) {
  document.querySelector(".prew").src = localStorage.getItem("avatar")
}


const myToast = document.querySelector(".my-toast")
const toast = new bootstrap.Toast(myToast)
document.querySelector(".submit").addEventListener("click", function () {
  const form = serialize(document.querySelector(".user-form"), { hash: true, empty: true })
  const { desc, email, gender, nickname } = form
  axios({
    url: "https://hmajax.itheima.net/api/settings",
    method: "put",
    data: {
      desc,
      email,
      gender: +gender,
      nickname,
      creator
    }
  }).then(result => {
    console.log(result);
    for (let key in result.data.data) {
      if (key === "avatar") {
        document.querySelector(".prew").src = result.data.data[key]
      } else if (key === "gender") {
        document.querySelectorAll(".gender")[result.data.data[key]].checked = true
      } else {
        document.querySelector(`.${key}`).value = result.data.data[key]
      }
    }
    if (result.data.message === "保存个人设置成功") {
      toast.show()
    }
  })
})