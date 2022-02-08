#!/usr/bin/env node

const fs = require('fs');

const {
  getCommandOptions,
  renderTemplate,
  getCustomConfig,
} = require('more-copy');

// 读取用户参数
let options = getCommandOptions();

// 获取用户配置
let config = getCustomConfig();

// 调试模式
if (config.debug) {
  console.log(config);
  console.log(options);
}

// 中间件处理
if (config.plugins) {
  for (let plugin of config.plugins) {
    options = plugin(options);
  }
}

// 调试模式
if (config.debug) {
  console.log(options);
}

// 目标文件已存在抛出异常
if (fs.existsSync(options.output)) {
  throw new Error(`file exists: ${options.output}`);
}

let render_res = renderTemplate(options.input, options);

// 同步的方式写入
fs.writeFileSync(options.output, render_res);

console.log('success');
