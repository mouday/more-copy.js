# @more-copy/read-data-plugin

读取json文件

使用示例

```js
// more-copy.config.js

const ReadDataPlugin = require('@more-copy/read-data-plugin')
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [
    new ReadDataPlugin({ filename: './data.json' }),

    new ConsolePlugin(),
  ],
}

```

和data数据合并

data.json

```json
{
  "name": "Jack",
  "school": "pku"
}
```

输出
```json
{
  "name": "Jack",
  "age": 23,
  "school": "pku"
}
```