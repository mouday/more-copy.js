#!/usr/bin/env node
// 命令行
const fs = require('fs')
const path = require('path')
const { Command } = require('commander')
const { VERSION } = require('./version.js')
// const { mergeConfig } = require("./utils/merge-config.js");
const { moreCopy } = require('./index.js')
const defaultConfig = require('./default.config.js')

// 读取自定义配置
// const default_config_filename = "./more-copy.config.js";
const CUSTOM_CONFIG_FILENAME = './more-copy.config.js'
const CUSTOM_CONFIG_FILENAME_CJS = './more-copy.config.cjs'

/**
 * 获取命令行参数
 * @returns Object
 * ref: commander https://mp.weixin.qq.com/s/rUjnie4UtywCAyPodgDi6g
 */
function getCommandOptions() {
  // console.log(process.argv);
  const program = new Command()

  program.version(VERSION)

  program.name('mcp')
  program.usage('[options]')
  // program.option("-i, --input <input filename>", "input filename");
  // program.option("-o, --output <output filename>", "output filename");
  // program.option("-d, --data <json data or data filename>", "extra data", "{}");
  // program.option(
  //   "-c, --config <config filename>",
  //   "config filename",
  //   default_config_filename
  // );
  // program.option("-f, --force", "overwrite output file");

  program.parse(process.argv)

  let options = program.opts()

  return options
}

// 读取用户配置
async function readCustomConfig() {
  let custom_config_absolute = path.join(process.cwd(), CUSTOM_CONFIG_FILENAME)
  let custom_config_absolute_cjs = path.join(
    process.cwd(),
    CUSTOM_CONFIG_FILENAME_CJS
  )

  let customConfig = null
  if (fs.existsSync(custom_config_absolute)) {
    customConfig = require(custom_config_absolute)
  } else if (fs.existsSync(custom_config_absolute_cjs)) {
    customConfig = require(custom_config_absolute_cjs)
  }
  
  // console.log(customConfig);

  return customConfig
}
/**
 * 处理命令行输入的参数
 * @param {*} options
 * @returns
 */
async function getConfig() {
  // 处理config
  // let config = {};

  let customConfig = await readCustomConfig()

  if (customConfig) {
    return { ...defaultConfig, ...customConfig }
  } else {
    return defaultConfig
  }

  // console.log(config);

  // options.config = mergeConfig(defaultConfig, config);

  // 处理data
  // if (options.data) {
  //   try {
  //     options.data = JSON.parse(options.data);
  //   } catch (e) {
  //     try {
  //       options.data = JSON.parse(fs.readFileSync(options.data, "utf8"));
  //     } catch (e) {
  //       throw e;
  //     }
  //   }
  // }

  return options
}

// 命令行执行入口
;(async () => {
  try {
    let options = getCommandOptions()

    let config = await getConfig()

    // // 收集有效参数
    // let config = {
    //   input: options.input || options.config.input,
    //   output: options.output || options.config.output,
    //   data: options.data || options.config.data,
    //   plugins: options.config.plugins,
    // };

    console.log(config);

    // 参数校验
    // if (!config.input || !config.output) {
    //   throw new Error(`input and output don't empty`);
    // }

    // 检查输入文件
    // if (!fs.existsSync(config.input)) {
    //   throw new Error(`input file not exists: ${config.input}`);
    // }

    // 目标文件已存在抛出异常
    // if (!options.force) {
    //   if (fs.existsSync(config.output)) {
    //     throw new Error(`output file already exists: ${config.output}`);
    //   }
    // }

    // 执行核心逻辑
    await moreCopy(config)
  } catch (e) {
    console.error(e)
    process.exit(-1)
  }
})()
