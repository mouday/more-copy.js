#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

// 可以有多个输入
for (let input_filename of options.input) {
  // 补全目标文件扩展名
  let output_filename = options.output;
  if (!path.extname(output_filename)) {
    output_filename = output_filename + path.extname(input_filename);
  }

  // 中间件处理
  let data = { ...options, input_filename, output_filename };
  if (config.plugins) {
    for (let plugin of config.plugins) {
      data = plugin(data);
    }
  }

  if (config.debug) {
    console.log(data);
  }

  // 目标文件已存在抛出异常
  if (fs.existsSync(output_filename)) {
    throw new Error(`file exists: ${output_filename}`);
  }

  let render_res = renderTemplate(input_filename, data);
  // 同步的方式写入
  fs.writeFileSync(output_filename, render_res);
}

console.log('success');
