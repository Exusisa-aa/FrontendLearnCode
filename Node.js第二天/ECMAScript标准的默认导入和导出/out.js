const baseURL = 'http://127.0.0.1:8080/api/v1'
const sum = arr => arr.reduce((acc, cur) => acc + cur, 0)

export default {
  url: baseURL,
  sum: sum
}