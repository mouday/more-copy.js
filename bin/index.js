#!/usr/bin/env node

const {
  getCommandOptions,
  renderTemplate,
  getCustomConfig,
  writeToFile,
} = require('more-copy');

// 读取用户参数
let options = getCommandOptions();

// 获取用户配置
let config = getCustomConfig(options.config);

if (config.plugins) {
  for (let plugin of config.plugins) {
    options = plugin.process_options(options);
  }
}

// 调试模式
if (config.debug) {
  console.log(config);
  console.log(options);
}

// 渲染
let content = renderTemplate(options.input, options);

// 写入到文件
writeToFile(options.output, content);
