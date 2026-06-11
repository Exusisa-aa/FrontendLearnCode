//axios方案
function myAxios(config) {
  //返回promise对象
  return new Promise((resolve, reject) => {
    //创建xhr对象
    const xhr = new XMLHttpRequest()
    //判断请求参数
    if (config.params) {
      const paramsObj = new URLSearchParams(config.params)
      const queryString = paramsObj.toString()
      config.url += `?${queryString}`
    }
    //开启请求并赋值url和请求方法
    xhr.open(config.method || 'GET', config.url)
    //返回结果
    xhr.addEventListener('loadend', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        //状态码表示成功，则解析数据
        resolve(JSON.parse(xhr.response))
      } else {
        // 状态码表示失败，则返回错误信息
        reject(new Error(xhr.response))
      }
    })
    //如果是post方法且有data  
    if (config.data) {
      const jsonStr = JSON.stringify(config.data)
      //写入请求头
      xhr.setRequestHeader('Content-Type', 'application/json')
      //发送请求
      xhr.send(jsonStr)
    } else {
      //发送请求
      xhr.send()
    }
  })
}

// 使用 jQuery 重写的自定义请求方法（本案例使用）
function Axios(config) {
  //返回promise对象
  return $.ajax({
    //URL，请求方法，参数，请求头，数据处理，数据类型
    url: config.url,
    method: config.method || 'GET',
    data: config.method === 'post' ? JSON.stringify(config.data) : config.params,
    contentType: config.data ? 'application/json' : undefined,
    processData: config.method !== 'post',
    dataType: 'json'
  }).then(response => {
    //成功返回结果
    return {
      data: response,
      status: 200,
      statusText: 'OK'
    }
  }).catch(jqXHR => {
    //失败返回错误信息
    return Promise.reject({
      response: {
        data: jqXHR.responseJSON,
        status: jqXHR.status,
        statusText: jqXHR.statusText
      }
    })
  })
}