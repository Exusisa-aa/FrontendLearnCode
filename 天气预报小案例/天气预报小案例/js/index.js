//更具代号渲染城市的天气信息
function render(city) {
  //从服务器获取数据
  Axios({//地址 请求方法 参数
    url: "https://hmajax.itheima.net/api/weather",
    method: "get",
    params: {
      city
    }
  }).then(result => {

    console.log(result); //这之中有所有数据，供人在控制台参考

    //成功处理结果
    //localStorage本地化保存json数据
    localStorage.setItem("cityWeather", JSON.stringify(result.data.data))
    //获取对象
    const weatherBox = document.querySelector(".today-weather")
    const week = document.querySelector(".week-wrap")
    //根据名字渲染页面
    for (let key in result.data.data) {
      //图片特殊处理
      if (key === "weatherImg") {
        document.querySelector(".weatherImg").src = result.data.data[key]
        continue
      }

      //今日天气对象
      if (key === "todayWeather") {
        for (let k in result.data.data[key]) {
          //其他数据的名字和dom对象名字一致，直接对应地赋值
          weatherBox.querySelector(`.${k}`).innerHTML = result.data.data[key][k]
        }
        continue
      }
      //周天气对象
      if (key === "dayForecast") {
        //其他数据的名字和dom对象名字一致，直接对应地赋值
        for (let ko in result.data.data[key]) {
          for (let ki in result.data.data[key][ko]) {
            week.querySelectorAll(`.${ki}`)[+ko].innerHTML = result.data.data[key][ko][ki]
            if (ki === "weatherImg") {
              //图片特殊处理
              week.querySelectorAll(`.${ki}`)[+ko].src = result.data.data[key][ko][ki]
            }
          }
        }
        continue
      }
      //其他数据的名字和dom对象名字一致，直接对应地赋值
      document.querySelector(`.${key}`).innerHTML = result.data.data[key]
    }


  }).catch(error => {
    console.log(error.message)
  })
}

//城市的对应代码（默认打开先渲染北京）
render("110100")

//搜索时，从服务器获得搜索结果
document.querySelector(".search-city").addEventListener("input", function () {
  //从服务器返回搜索的结果
  Axios({////地址 请求方法 参数
    url: `https://hmajax.itheima.net/api/weather/city`,
    params: {
      city: this.value
    }
  }).then(result => {
    //成功则向搜索框内插入服务器返回的结果
    document.querySelector(".search-list").innerHTML = result.data.data.map(item => {
      return `<li class="city-item" data-code="${item.code}">${item.name}</li>`
    }).join('')
  }).catch(error => {
    //失败则打印错误信息
    console.log(error.message)
  })
})

//点击搜索结果，根据dataset从服务器返回数据
document.querySelector(".search-box").addEventListener("click", function (e) {
  if (e.target.classList.contains("city-item")) {
    //点击搜索结果，调用渲染数据的方法
    render(e.target.dataset.code)
  }
})