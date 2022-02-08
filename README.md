# more-copy.js

指定文件模板生成到指定的文件目录下

## 安装

```bash
# 建议全局安装
npm i more-copy -g
```

## 使用

```bash
$ mcp [模板路径] [输出路径]

eg:
$ mcp template.js demo.js
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
const { MkdirPlugin, ParsePlugin, TimePlugin } = require('more-copy');

// 使用自定义插件
const CustomPlugin = require('./custom-plugin.js');

module.exports = {
  // 开启调试
  debug: true,
  // 使用插件，有先后顺序
  plugins: [new CustomPlugin()],
};
```

## 自定义插件

custom-plugin.js 用来处理模板入参

```js
const Plugin = require('./plugin.js');

class CustomPlugin extends Plugin {
  process_options(options) {
    options.custom = {
      name: 'Tom',
    };

    return options;
  }
}

module.exports = CustomPlugin;
```
