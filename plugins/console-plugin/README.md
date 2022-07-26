# ConsolePlugin

用于输出当前data的值

使用示例

```js
// more-copy.config.js

const ConsolePlugin = require("more-copy/plugins/console-plugin/index.js");

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new ConsolePlugin()
  ],
};
```
