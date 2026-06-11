const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/login/login.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'login/login.js'
  }
}