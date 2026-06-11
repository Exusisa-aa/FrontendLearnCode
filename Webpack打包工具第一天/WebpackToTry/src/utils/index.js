export const checkPhone = function (phone) {
  if (phone.length === 11) {
    return true
  } else {
    return false
  }
}

export const checkPassword = function (password) {
  if (password.length >= 6) {
    return true
  } else {
    return false
  }
}