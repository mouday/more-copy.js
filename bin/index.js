#!/usr/bin/env node

const { getCommandOptions, renderToFile } = require('more-copy');

// 捕获全局Promise异常
process.on('unhandledRejection', (error) => {
  console.log(error);
});

// 读取用户参数
let options = getCommandOptions();

// 渲染模板

renderToFile(options);
