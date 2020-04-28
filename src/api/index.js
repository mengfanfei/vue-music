import { instance } from './request'

/**
 * 获取轮播图
 */
export function getBanner() {
  return instance({
    url: '/banner?type=2'
  })
}