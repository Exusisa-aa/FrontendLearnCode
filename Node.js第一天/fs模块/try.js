const fs = require('fs')
fs.writeFile('try.txt', 'hello node.js', error => {
  if (error) {
    console.log(error)
  } else {
    console.log('写入成功')
  }
})
fs.readFile('try.txt', (error, data) => { //data是buffer数据流，16进制的文件内容
  if (error) {
    console.log(error)
  } else {
    console.log(data.toString())//将buffer数据流转换成字符串
  }
})