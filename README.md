# more-copy.js

![npm](https://img.shields.io/npm/v/more-copy)
![npm](https://img.shields.io/npm/dw/more-copy)
![node-current](https://img.shields.io/node/v/more-copy)

可以使用插件的文件拷贝工具

- Home: [https://mouday.github.io/more-copy.js/](https://mouday.github.io/more-copy.js/)

- github: [https://github.com/mouday/more-copy.js](https://github.com/mouday/more-copy.js)
- npm: [https://www.npmjs.com/package/more-copy](https://www.npmjs.com/package/more-copy)

![](img/more-copy.png)

简单的处理步骤：

- 读取文件
- 处理文件
- 输出文件

## 安装

```bash
# 建议全局安装
npm i more-copy -g
```

## 使用

1、命令行

```bash
$ mcp -h
Usage: mcp [options]

Options:
  -V, --version                            output the version number
  -i, --input <input filename>             input filename
  -o, --output <output filename>           output filename
  -d, --data <json data or data filename>  extra data (default: "{}")
  -c, --config <config filename>           config filename (default: "./more-copy.config.js")
  -f, --force                              overwrite output file
  -h, --help                               display help for command
```

示例

```bash
$ mcp --input input.txt --output output.txt
```

2、使用配置文件

当前目录下可以配置

```js
// more-copy.config.js
module.exports = {
  // 输入文件路径, 必填
  input: "./input.txt",

  // 输出文件路径, 必填
  output: "./output.txt",

  // 数据
  data: {},

  // 使用插件，有先后顺序, 从下至下依次执行，类似漏斗
  plugins: [],
};
```

有了配置文件就可以简化命令行输入

```bash
$ mcp
```

## Plugin 插件

| plugin                                              | 描述             |
| --------------------------------------------------- | ---------------- |
| [ConsolePlugin](plugins/console-plugin/README.md)   | 用于日志输出     |
| [MkdirPlugin](plugins/mkdir-plugin/README.md)       | 自动创建输出目录 |
| [NunjucksPlugin](plugins/nunjucks-plugin/README.md) | 模板渲染         |
| [ParsePlugin](plugins/parse-plugin/README.md) | 解析路径参数         |
| [TimePlugin](plugins/time-plugin/README.md) | 基于 dayjs 的时间插件      |
| [TablePlugin](plugins/table-plugin/README.md) | 获取MySQL表字段     |
| [ThinkphpPlugin](plugins/thinkphp-plugin/README.md) | ThinkPHP CURD 需要用的参数    |

## 自定义插件

用户可以使用插件来处理输出

插件约定添加 data 对象上的属性，以插件名命名，特殊除外。

例如：使用 `ParsePlugin` 将会添加属性`data.parse`

custom-plugin.js 用来处理模板入参

```js
const Plugin = require("more-copy/plugins/plugin.js");

class CustomPlugin extends Plugin {
  /**
   * 插件处理文件内容
   * @param {*} input 输入文件的路径
   * @param {*} output 输出文件的路径
   * @param {*} data  输出的数据，可用于挂载自定义数据
   * @param {*} plugins 使用的插件列表
   * @param {*} content 文件内容
   * @returns content 返回文件内容
   */
  process({ input, output, data, plugins, content }) {
    // 挂载自定义数据
    data.custom = {
      name: "Tom",
    };

    return content;
  }
}

module.exports = CustomPlugin;
```

## 更多示例

生成 Vue 编辑页面代码的示例 [test/mysql-demo/README.md](test/mysql-demo/README.md)
