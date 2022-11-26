# @more-copy/write-data-plugin

输出 json 文件

使用示例

```js
// more-copy.config.js

const WriteDataPlugin = require('@more-copy/write-data-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [new WriteDataPlugin({ filename: './data.json' })],
}
```

输出文件
```json
{
  "name": "Tom",
  "age": 23
}
```
