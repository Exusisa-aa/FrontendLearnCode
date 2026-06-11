const http = new require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, '../压缩前端代码小案例/dist/index.html'), (error, data) => {
  if (error) {
    console.log(error)
  } else {
    server.on('request', (request, response) => {
      if (request.url === '/123') {
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end(data.toString())
      } else {
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end('<h1>请求路径资源错误</h1>')
      }
    })
  }
})

server.listen(8080, () => {
  console.log('服务器启动成功')
})