// more-copy.config.js

const WriteDataPlugin = require('./src/index.js')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [new WriteDataPlugin({ filename: './data.json' })],
}
