const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'try.txt'), 'hellow node.js', error => {
  if (error) {
    console.log(error)
  } else {
    console.log('写入成功')
  }
})

fs.readFile(path.join(__dirname, 'try.txt'), (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data.toString())
  }
})