// more-copy.config.js

const MySQLPlugin = require('./src/index.js')
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new MySQLPlugin({
      sql: 'select * from tb_user limit 10',
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
