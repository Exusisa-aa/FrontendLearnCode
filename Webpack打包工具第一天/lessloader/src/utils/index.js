export const checkPhone = function (phone) {
  if (phone.length === 11) {
    return true
  } else {
    return false
  }
}

export const checkCode = function (code) {
  if (code.length === 6) {
    return true
  } else {
    return false
  }
}