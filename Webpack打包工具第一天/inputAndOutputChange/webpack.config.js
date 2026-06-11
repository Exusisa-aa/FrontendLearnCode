const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/server.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'login/login.js',
    clean: true //清空上次执行结果
  }
}