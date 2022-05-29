# ConsolePlugin

用于日志输出

使用示例

```js
// more-copy.config.js

const ConsolePlugin = require("more-copy/plugins/console-plugin/index.js");

module.exports = {
  input: "input",

  output: "output",

  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new ConsolePlugin({
      input: true,
      output: true,
      data: true,
      plugins: false,
      content: false,
    })
  ],
};
```
