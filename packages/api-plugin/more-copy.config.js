// more-copy.config.js

const ApiPlugin = require('./src/index.js')
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new ApiPlugin({
      name: 'user',
    }),
    new ConsolePlugin(),
  ],
}
