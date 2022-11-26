// more-copy.config.js

const ReadDataPlugin = require('./src/index.js')
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [
    new ReadDataPlugin({ filename: './data.json' }),

    new ConsolePlugin(),
  ],
}
