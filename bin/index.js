#!/usr/bin/env node

const { getCommandOptions, renderToFile } = require('more-copy');

// 读取用户参数
let options = getCommandOptions();

// 渲染模板
renderToFile(options);
