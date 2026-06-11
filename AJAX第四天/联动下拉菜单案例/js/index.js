/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

function renderProvince() {
  axios({
    url: "https://hmajax.itheima.net/api/province",
    method: "get"
  }).then(result => {
    document.querySelector(".province").innerHTML = "<option value= ''>省份</option>" + result.data.list.map(item => {
      return `
      <option value=${item}>${item}</option>
    `
    }).join("")
  }).catch(error => {
    console.log(error.message)
  })
}
renderProvince()


document.querySelector(".province").addEventListener("change", function () {
  axios({
    url: "https://hmajax.itheima.net/api/city",
    params: {
      pname: document.querySelector(".province").value
    }
  }).then(result => {
    document.querySelector(".city").innerHTML = "<option value= ''>城市</option>" + result.data.list.map(item => {
      return `
        <option value="${item}">${item}</option>
      `
    }).join("")
  }).catch(error => {
    console.log(error.message)
  })


  document.querySelector(".area").innerHTML = "<option value=''>地区</option>"
})



document.querySelector(".city").addEventListener("change", function () {
  axios({
    url: "https://hmajax.itheima.net/api/area",
    params: {
      pname: document.querySelector(".province").value,
      cname: document.querySelector(".city").value
    }
  }).then(result => {
    document.querySelector(".area").innerHTML = "<option value=''>地区</option>" + result.data.list.map(item => {
      return `
        <option value="${item}">${item}</option>
      `
    }).join("")
  }).catch(error => {
    console.log(error.message)
  })
})

document.querySelector(".btn").addEventListener("click", function () {
  const form = serialize(document.querySelector(".info-form"), { hash: true, empty: true })
  axios({
    url: "https://hmajax.itheima.net/api/feedback",
    method: "post",
    data: {
      province: form.province,
      city: form.city,
      area: form.area,
      nickname: form.nickname,
      feedback: form.feedback
    }
  }).then(result => {
    alert(`${result.data.message}`)
    renderProvince()
    document.querySelector(".city").innerHTML = "<option value= ''>城市</option>"
    document.querySelector(".area").innerHTML = "<option value=''>地区</option>"
    document.querySelector(".feedback").value = ""
  }).catch(error => {
    alert(error.response.data.message)
  })
})

