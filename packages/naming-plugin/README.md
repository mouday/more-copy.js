# @more-copy/naming-plugin

命名转换

使用示例

```js
// more-copy.config.js

const NamingPlugin = require('@more-copy/naming-plugin')
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new NamingPlugin({
      name: 'user_name',
    }),
    new ConsolePlugin(),
  ],
}
```

挂载到 data 数据

```json
{
  "naming": {
    "name": "user_name",
    "pascal": "UserName",
    "constant": "USER_NAME",
    "camel": "userName",
    "hyphen": "user-name",
    "snake": "user_name",
    "underscore": "user_name"
  }
}
```
