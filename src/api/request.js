import axios from 'axios'

const baseUrl = 'http://192.168.200.109:3000/'

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // console.log(config)
  return config
}, err => {
  console.log(err)
})
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})

// 4.
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000
  })

  // 2. axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config)
    // 1. 比如config中的一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时，都希望在界面显示一个请求的图标
    // 3. 某些网络请求（比如登录），必须携带一些特殊信息
    return config
  }, err => {
    // 发送都没法送出去的时候
    console.log(err)
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 发送真正的网络请求
  return instance(config)
}

// 3.
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1. 创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://localhost:3000',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

// 2.
// export function request(config) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }

// 1. 回调函数
// export function request(config, success, failure) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }