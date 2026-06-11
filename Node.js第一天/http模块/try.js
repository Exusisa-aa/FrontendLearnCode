const http = require('http')
const server = http.createServer()

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  response.end('<h1>成功渲染了一个页面</h1>')
})

server.listen(3000, () => {
  console.log('服务器启动成功')
})