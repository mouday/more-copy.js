# @more-copy/nunjucks-plugin

模板渲染

使用示例

```js
// more-copy.config.js

const NunjucksPlugin = require("@more-copy/nunjucks-plugin");
const ConsolePlugin = require('@more-copy/console-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [
    new ConsolePlugin(),
    
    new NunjucksPlugin({
      input: 'template/index.html',
      output: 'out/index.html',
    }),
  ],
}

```

## 模板

template/index.html

```
this is {{name}}, {{age}} years old.
```

out/index.html
```
this is Tom, 23 years old.
```

模板渲染基于 Nunjuck.js，言下之意，支持 Nunjuck.js 的所有模板语法
https://nunjucks.bootcss.com/templating.html
