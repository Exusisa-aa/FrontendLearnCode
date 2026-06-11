const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'clock/index.html'), (error, data) => {
  if (error) {
    console.log(error)
  } else {
    fs.writeFile(path.join(__dirname, 'dist/index.html'), data.toString().replace(/[\r\n]/g, ''), error => {
      if (error) {
        console.log(error)
      } else {
        console.log('写入成功')
      }
    })
  }
})

