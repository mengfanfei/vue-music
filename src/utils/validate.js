import { Toast } from 'vant'
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 验证手机号格式是否正确
 * @param {string} str 手机号码
 */
export function phone11(str) {
  if (!(/^1[3456789]\d{9}$/.test(str))) {
    Toast({
      message: '手机号码不合法，请重新输入',
      icon: 'close'
    })
    return false
  } else {
    return true
  }
}