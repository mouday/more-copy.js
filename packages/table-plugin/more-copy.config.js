// more-copy.config.js

const TablePlugin = require('./src/index.js')
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [
    new TablePlugin({
      table: 'user',
      config: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'data',
      },
    }),
    new ConsolePlugin(),
  ],
}
