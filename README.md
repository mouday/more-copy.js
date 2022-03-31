# more-copy.js

指定文件模板生成到指定的文件目录下

- github: [https://github.com/mouday/more-copy.js](https://github.com/mouday/more-copy.js)
- npm: [https://www.npmjs.com/package/more-copy](https://www.npmjs.com/package/more-copy)

## 安装

```bash
# 建议全局安装
npm i more-copy -g
```

## 使用

1、命令行

```bash
$ mcp [模板路径] [输出路径] [-p json字符串] [-c 配置文件路径]

eg:
$ mcp template.js demo.js
```

参数

```
-c 指定配置文件路径 默认为 ./more-copy.config.js
-p 传入参数，接收json格式的字符串
```

2、用户代码

```js
const { renderToFile } = require('more-copy');

renderToFile({ input, output });
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

## 已实现插件

用户可以使用插件来给 options 添加参数

插件约定添加 options 对象上的属性，以插件名命名，特殊除外。

例如：使用 `ParsePlugin` 将会添加属性`options.parse`

```js
// 插件基类，自定义插件推荐继承该基类，并实现其方法
Plugin(options);

// 1、递归创建目标文件夹
MkdirPlugin();

// 2、改变输出文件名的命名风格，支持naming-style的所有风格参数
// eg: {style: 'pascal'}
OutputNamingPlugin({ style });

// 3、解析路径参数
ParsePlugin();

// 4、ThinkPHP需要用得的参数
// 支持额外参数 -p '{"name": "table_name"}'
ThinkphpPlugin({ prefix: '表前缀' });

// 5、时间插件
TimePlugin();

// 6、Vue需要的参数
// 支持额外参数 -p '{"name": "name"}'
VuePlugin();

// 7、从MySQL中查询数据
// -p '{sql, data}'
MySQLPlugin({
  config
});

// 8、从MySQL中查询表数据数据
// -p '{table}'
TablePlugin({
  config
});

// 9、改变输出文件夹的命名风格，支持naming-style的所有风格参数
OutputDirnameNamingPlugin({style})

// 10、输入参数name的命名风格装换
NamingPlugin()
```

## 自定义插件

custom-plugin.js 用来处理模板入参

```js
const Plugin = require('more-copy');

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
