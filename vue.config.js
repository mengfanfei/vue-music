const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-music/' : '/', // 部署应用包时的基本 URL
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            selectorBlackList: ['van'] // 过滤的类名
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader， 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule.include.add(resolve('src/icons'))
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  configureWebpack: {
    resolve: {
      alias: { // 配置别名
        assets: '@/assets',
        api: '@/api',
        components: '@/components',
        utils: '@/utils',
        views: '@/views'
      }
    }
  }
}
