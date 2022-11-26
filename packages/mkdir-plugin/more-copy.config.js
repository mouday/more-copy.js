// more-copy.config.js

const MkdirPlugin = require('./src/index.js')

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [new MkdirPlugin({dirname: 'log'})],
}
