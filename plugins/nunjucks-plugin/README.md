# NunjucksPlugin

模板渲染

使用示例

```js
// more-copy.config.js

const NunjucksPlugin = require("more-copy/plugins/nunjucks-plugin/index.js");

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [new NunjucksPlugin()],
};
```

## 模板

模板渲染基于 Nunjuck.js，言下之意，支持 Nunjuck.js 的所有模板语法
https://nunjucks.bootcss.com/templating.html
