# ParsePlugin

解析路径参数

使用示例

```js
// more-copy.config.js

const ParsePlugin = require("more-copy/plugins/parse-plugin/index.js");

module.exports = {
  input: "input",

  output: "output",

  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [new ParsePlugin()],
};
```

挂载到 data 数据

```json
"parse": {
  "input": {
    "root": "",
    "dir": "./template",
    "base": "input.txt",
    "ext": ".txt",
    "name": "input"
  },
  "output": {
    "root": "",
    "dir": "./",
    "base": "output.txt",
    "ext": ".txt",
    "name": "output"
  }
}

```
