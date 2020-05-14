import { instance } from './request'

/**
 * 获取轮播图
 */
export function getBanner() {
  return instance({
    url: '/banner?type=2'
  })
}

/**
 * 首页获取歌单
 * @param {String} cat 歌单分类tag
 * @param {Number} limit 取出歌单数量
 */
export function getPlayList(limit, cat) {
  return instance({
    url: '/top/playlist/highquality',
    method: 'POST',
    data: {
      limit,
      cat
    }
  })
}

/**
 * 获取登录状态
 */
export function loginStatus() {
  return instance({
    url: '/login/status'
  })
}

/**
 * 检测手机号码是否已注册
 * @param {string} phone 手机号码
 */
export function checkPhone(phone) {
  return instance({
    url: '/cellphone/existence/check',
    params: {
      phone
    }
  })
}

/**
 * 发送验证码
 * @param {string} phone 手机号码
 */
export function sendCaptcha(phone) {
  return instance({
    url: '/captcha/sent',
    method: 'POST',
    data: {
      phone
    }
  })
}

/**
 * 验证验证码
 * @param {string} phone 手机号码
 * @param {string} captcha 验证码
 */
export function verifyCaptcha(phone, captcha) {
  return instance({
    url: '/captcha/verify',
    method: 'POST',
    data: {
      phone,
      captcha
    }
  })
}

/**
 * 注册
 * @param {string} phone 手机号码
 * @param {string} password 密码
 * @param {string} nickname 昵称
 * @param {string} captcha 验证码
 */
export function registerPhone(phone, password, nickname, captcha) {
  return instance({
    url: '/register/cellphone',
    params: {
      phone,
      password,
      nickname,
      captcha,
      proxy: 'http://121.196.226.246:84'
    }
  })
}