# LaravelPlugin

Laravel CURD 需要用的参数

使用示例

```js
// more-copy.config.js

const LaravelPlugin = require('more-copy/plugins/laravel-plugin/index.js')

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new LaravelPlugin({
      name: 'user',
    }),
  ],
}
```

挂载到 data 数据

```json
{
  "laravel": {
    "service": "UserService",
    "model": "UserModel",
    "controller": "UserController",
    "validate": "UserValidate",
    "pascal_name": "User",
    "hyphen_name": "user",
    "methods": {
      "getList": "getUserList",
      "getById": "getUserById",
      "deleteById": "deleteUserById",
      "updateById": "updateUserById",
      "add": "addUser"
    },
    "api": {
      "getList": "/User/getUserList",
      "getById": "/User/getUserById",
      "deleteById": "/User/deleteUserById",
      "updateById": "/User/updateUserById",
      "add": "/User/addUser"
    }
  }
}
```
