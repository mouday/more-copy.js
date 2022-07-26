# more-copy.js V3.0

![npm](https://img.shields.io/npm/v/more-copy)
![npm](https://img.shields.io/npm/dw/more-copy)
![node-current](https://img.shields.io/node/v/more-copy)

可以使用插件的文件处理工具，类似VSCode中的代码片段，不过他依赖Node.js而不依赖任何编辑器

![](img/more-copy-3.png)

- Home: [https://mouday.github.io/more-copy.js/](https://mouday.github.io/more-copy.js/)
- github: [https://github.com/mouday/more-copy.js](https://github.com/mouday/more-copy.js)
- npm: [https://www.npmjs.com/package/more-copy](https://www.npmjs.com/package/more-copy)

<!-- ![](img/more-copy.png) -->

简单的处理步骤：

- 输入数据 data
- 插件处理 plugins

## 安装

```bash
# 建议全局安装
npm i more-copy -g
```

## 命令行

```bash
$ mcp -h
Usage: mcp [options]

Options:
  -V, --version                            output the version number
  -h, --help                               display help for command
```

## 示例

当前目录配置文件

```js
// more-copy.config.js
const NunjucksPlugin = require("more-copy/plugins/nunjucks-plugin/index.js");
const ReadFilePlugin = require("more-copy/plugins/read-file-plugin/index.js");
const ConsolePlugin = require("more-copy/plugins/console-plugin/index.js");
const TimePlugin = require("more-copy/plugins/time-plugin/index.js");
const WriteFilePlugin = require("more-copy/plugins/write-file-plugin/index.js");

const path = require('path');

let params = process.argv.slice(2);
console.log(params);

let [name, input, output] = params

// 模板目录
const template = 'template';

// 输出目录
const output_dir = `dist/${name}`

function pathResolve(filename){
  return path.join(template, filename);
}

module.exports = {

  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new TimePlugin(),
    new ConsolePlugin(),
    new ReadFilePlugin({
      filename: pathResolve(input)
    }),
    new NunjucksPlugin(),
    new WriteFilePlugin({
      filename: path.join(output_dir, output),
      mkdir: true
    }),
  ],
};

```

模板文件 template/list.vue
```html
<template>
  <div class=""></div>
</template>

<script>
/**
 * created {{time.date}}
 */
export default {
  name: "",

  components: {},

  props: {
  },

  computed: {},

  data() {
    return {};
  },

  methods: {

  },

  created() {},
};
</script>

<style lang="less">

</style>

<style lang="less" scoped>

</style>
```

生成文件

```bash
$ mcp user-list list.vue index.vue
```

生成文件 dist/index.vue
```html
<template>
  <div class=""></div>
</template>

<script>
/**
 * created 2022-07-01
 */
export default {
  name: "",

  components: {},

  props: {
  },

  computed: {},

  data() {
    return {};
  },

  methods: {

  },

  created() {},
};
</script>

<style lang="less">

</style>

<style lang="less" scoped>

</style>
```

我们看到，模板中的参数已经被替换为插件 TimePlugin 所提供的参数了

## Plugin 插件

<!-- | [MkdirPlugin](plugins/mkdir-plugin/README.md)       | 自动创建输出目录 |

| [ParsePlugin](plugins/parse-plugin/README.md) | 解析路径参数         |

| [TablePlugin](plugins/table-plugin/README.md) | 获取MySQL表字段     |
| [ThinkphpPlugin](plugins/thinkphp-plugin/README.md) | ThinkPHP CURD 需要用的参数    |
|  -->

插件三要素：
- 参数：由`new Plugin(options)`传入，可以理解为插件的`配置`
- 挂载：可以再全局的data对象上绑定数据，用于传递数据给后面的插件使用，可以理解为插件的`输出`
- 依赖：由data对象提供，由前面的Plugin提供，可以理解为插件的`输入`

已实现的插件

- [ConsolePlugin](plugins/console-plugin/README.md) 用于输出当前data的值

- [ReadFilePlugin](plugins/read-file-plugin/index.js) 读取文件内容

  - 参数 
    - options.filename 输入文件名
  - 挂载 
    - data.content 文件内容

- [WriteFilePlugin](plugins/write-file-plugin/index.js) 输出文件
  - 参数 
    - options.filename 输出文件名  
    - options.mkdir 是否创建文件夹 默认true
  - 依赖
    - data.content 输出的内容

- [TimePlugin](plugins/time-plugin/README.md) 基于 dayjs 的时间插件 
  - 挂载 
    - data.time 时间对象

- [NunjucksPlugin](plugins/nunjucks-plugin/README.md)
模板渲染

  - 依赖 
    - data.content 和 data

## 自定义插件

用户可以使用插件来处理输出

插件约定添加 data 对象上的属性，以插件名命名，特殊除外。

例如：使用 `ParsePlugin` 将会添加属性`data.parse`

custom-plugin.js 用来处理模板入参，接口和此前版本略有不同

```js
const Plugin = require("more-copy/plugins/plugin.js");

class CustomPlugin extends Plugin {
  /**
   * 插件处理文件内容
   * @param {Object} data  输出的数据，可用于挂载自定义数据
   * @returns {Boolean} 如果返回false则终止后续插件的执行
   */
  process(data) {
    // 挂载自定义数据
    data.custom = {
      name: "Tom",
    };
  }
}

module.exports = CustomPlugin;
```

<!-- ## 更多示例

生成 Vue 编辑页面代码的示例 [test/mysql-demo/README.md](test/mysql-demo/README.md) -->

## 其他版本：

- [more-copy.js V2.0](README-2.0.md)
