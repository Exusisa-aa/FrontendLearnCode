const usernameJudge = function (username) {
  if (username.length > 8) {
    return false
  } else {
    return true
  }
}

const passwordJudge = function (password) {
  if (password.length > 10) {
    return false
  } else {
    return true
  }
}

export default {
  usernameJudge: usernameJudge,
  passwordJudge: passwordJudge
}