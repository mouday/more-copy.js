# MkdirPlugin

自动创建目录

使用示例

```js
// more-copy.config.js

const MkdirPlugin = require("@more-copy/mkdir-plugin");

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new MkdirPlugin({
      dirname: 'log'
    })
  ],
};
```
