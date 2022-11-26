# @more-copy

![npm](https://img.shields.io/npm/v/more-copy)
![npm](https://img.shields.io/npm/dw/more-copy)
![node-current](https://img.shields.io/node/v/more-copy)

基于 Node.js 的数据处理的工具

利用 more-copy，可以很容易实现一个类似 VSCode、Pycharm、PHPStrom、Idea...中的代码片段，

它依赖 Node.js，而不依赖任何编辑器，可以用于任何模式代码生成

![](/img/@more-copy:core.png)

- Home: [https://mouday.github.io/more-copy.js/](https://mouday.github.io/more-copy.js/)
- github: [https://github.com/mouday/more-copy.js](https://github.com/mouday/more-copy.js)
- npm: [https://www.npmjs.com/package/more-copy](https://www.npmjs.com/package/more-copy)

简单的处理步骤：

- 输入数据 data
- 插件处理 plugins

## 安装

```bash
# 建议全局安装
npm i @more-copy/cli -g
```

## 命令行

```bash
$ npx mcp -h
Usage: mcp [options]

Options:
  -V, --version             output the version number
  -c, --config <config...>  config filenames (default: ["more-copy.config.js","more-copy.config.cjs"])
  -m, --mode <mode>         mode name
  -h, --help                display help for command
```

## 示例

一个简单的示例

```js
// more-copy.config.js
const ConsolePlugin = require('@more-copy/console-plugin')
const TimePlugin = require('@more-copy/time-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
  },

  // 使用插件，从上往下执行
  // 后面的插件，可以依赖前面插件的输出
  plugins: [new TimePlugin(), new ConsolePlugin()],
}
```

执行命令，运行 `more-copy`

```bash
$ mcp
{
  data: { name: 'Tom' },
  plugins: [
    TimePlugin { options: {} },
    ConsolePlugin { options: {} } ]
}

ConsolePlugin: {
  "name": "Tom",
  "time": {
    "date": "2022-11-08",
    "time": "19:08:40",
    "datetime": "2022-11-08 19:08:40"
  }
}
```

## Plugin 插件

插件三要素：

- 参数：由`new Plugin(options)`传入，可以理解为插件的`配置`
- 依赖：由 data 对象提供，由前面的 Plugin 提供，可以理解为插件的`输入`
- 挂载：可以再全局的 data 对象上绑定数据，用于传递数据给后面的插件使用，可以理解为插件的`输出`

已实现的插件

| 插件名称                                      | 说明                   |
| --------------------------------------------- | ---------------------- |
| [ApiPlugin](packages/api-plugin)              | api 接口生成           |
| [ConsolePlugin](packages/console-plugin)      | 用于输出当前 data 的值 |
| [MkdirPlugin](packages/mkdir-plugin)          | 自动创建目录           |
| [NamingPlugin](packages/naming-plugin)        | 命名转换               |
| [NunjucksPlugin](packages/nunjucks-plugin)    | 模板渲染               |
| [ReadDataPlugin](packages/read-data-plugin)   | 读取 json 文件         |
| [MySQLPlugin](packages/read-mysql-plugin)     | 查询 MySQL 数据        |
| [TablePlugin](packages/table-plugin)          | 获取 MySQL 表字段      |
| [TimePlugin](packages/time-plugin)            | 基于 dayjs 的时间插件  |
| [WriteDataPlugin](packages/write-data-plugin) | 输出 json 文件         |

## 自定义插件

用户可以使用插件来处理输出

插件约定添加 data 对象上的属性，以插件名命名，特殊除外。

例如：

使用 `CustomPlugin` 将会添加属性`data.custom`

custom-plugin.js 用来处理模板入参

```js
// 继承基类
class CustomPlugin {
  apply(data) {
    // 挂载自定义数据
    data.custom = {
      name: 'Tom',
    }
  }
}

module.exports = CustomPlugin
```

## 其他版本：

- [more-copy.js V2.0](README-2.0.md)
- [more-copy.js V3.0](README-3.0.md)
