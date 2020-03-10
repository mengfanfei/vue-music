module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [ // npm install babel-plugin-import --save-dev   按需加载插件
      'import',
      { libraryName: 'vant', libraryDirectory: 'es', style: true },
      'vant'
    ]
  ]
}
