# more-copy

指定文件模板生成到指定的文件目录下

支持文件或文件夹

## 安装

```bash
# 建议全局安装
npm i more-copy -g
```

## 使用

参数

```
-i --input  输入文件路径
-o --output 输出文件路径
```

```bash
$ mcp -i template.js -o demo.js
```

## 模板

模板渲染基于 Nunjuck.js，言下之意，支持 Nunjuck.js 的所有模板语法
https://nunjucks.bootcss.com/templating.html

## 命令行

通常情况下，一个项目的文件生成路径是固定的，可以结合 package.json 或者 make 简化命令行

## 配置

当前目录下可以配置 more-copy.config.js

```js
// 插件示例
const { mkdirPlugin, nowPlugin, parsePlugin } = require('more-copy');

// 使用自定义插件
const customPlugin = require('./custom-plugin.js');

module.exports = {
  // 开启调试
  debug: true,
  // 使用插件，有先后顺序
  plugins: [nowPlugin, parsePlugin, mkdirPlugin, customPlugin],
};
```

## 自定义插件

custom-plugin.js

```js
module.exports = function (options) {
  // 做一些操作后，返回options
  return options;
};
```
