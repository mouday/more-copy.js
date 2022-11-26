# @more-copy/cli

more-copy 命令行

```bash
$ mcp -h
Usage: mcp [options]

Options:
  -V, --version             output the version number
  -c, --config <config...>  config filenames (default: ["more-copy.config.js","more-copy.config.cjs"])
  -m, --mode <mode>         mode name
  -h, --help                display help for command
```

默认的配置文件

```js
// 默认配置文件

module.exports = {
  // 插件之间的流动数据
  data: {},

  // 使用插件，有先后顺序,从上到下依次执行
  plugins: [],
}

```

可接收命令行参数
```js
module.exports = (options)=> {
  return {
    // 插件之间的流动数据
    data: {},

    // 使用插件，有先后顺序,从上到下依次执行
    plugins: [],

  }
}
```