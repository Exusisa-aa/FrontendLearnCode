const baseURL = 'https://127.0.0.1:8080/api/v1/';
const sum = arr => arr.reduce((a, b) => a + b, 0);

module.exports = {
  url: baseURL,
  sum: sum
}