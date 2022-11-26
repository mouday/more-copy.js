# @more-copy/read-mysql-plugin

查询 MySQL 数据

使用示例

```js
// more-copy.config.js

const MySQLPlugin = require('@more-copy/read-mysql-plugin')
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
```

挂载到 data 数据

```json
{
  "mysql": {
    "rows": [
      {
        "id": 1,
        "name": "费阳",
        "phone": "13777763170",
        "profession": null,
        "age": 27,
        "status": 1,
        "email": "wyao@gmail.com"
      },
      {
        "id": 2,
        "name": "祁海燕",
        "phone": "13400806360",
        "profession": "日式厨师",
        "age": 23,
        "status": 0,
        "email": "jwan@jin.cn"
      }
    ]
  }
}
```
