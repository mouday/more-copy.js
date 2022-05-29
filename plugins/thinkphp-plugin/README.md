# ThinkphpPlugin

ThinkPHP CURD 需要用的参数

使用示例

```js
// more-copy.config.js

const ThinkphpPlugin = require("more-copy/plugins/thinkphp-plugin/index.js");

module.exports = {
  input: "input",

  output: "output",

  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
     new ThinkphpPlugin({
      prefix: "tb_",
      name: "user",
    }),
  ],
};
```

挂载到 data 数据

```json
"thinkphp": {
    "table": "tb_user",
    "service": "UserService",
    "model": "UserModel",
    "controller": "UserController",
    "validate": "UserValidate",
    "pascal_name": "User",
    "hyphen_name": "user",
    "namespace": "\\output",
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
```
