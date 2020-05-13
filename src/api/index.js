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