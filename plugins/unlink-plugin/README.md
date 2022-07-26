# UnlinkPlugin

自动创建输出目录

使用示例

```js
// more-copy.config.js

const MkdirPlugin = require("more-copy/plugins/mkdir-plugin/index.js");

module.exports = {
  input: "input",

  output: "output",

  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new MkdirPlugin()
  ],
};
```
