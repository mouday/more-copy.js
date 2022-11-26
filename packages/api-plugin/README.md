# @more-copy/api-plugin

api接口生成

使用示例

```js
// more-copy.config.js

const ApiPlugin = require('@more-copy/api-plugin')
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
```

挂载到 data 数据

```json
{
  "api": {
    "getList": "getUserList",
    "getById": "getUserById",
    "deleteById": "deleteUserById",
    "updateById": "updateUserById"
  }
}
```
