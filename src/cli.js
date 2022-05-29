#!/usr/bin/env node
// 命令行
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const { VERSION } = require("./version.js");
const { mergeConfig } = require("./utils/merge-config.js");
const { moreCopy } = require("./index.js");
const defaultConfig = require("./default.config.js");

// 读取自定义配置
const default_config_filename = "./more-copy.config.js";

/**
 * 获取命令行参数
 * @returns Object
 * ref: commander https://mp.weixin.qq.com/s/rUjnie4UtywCAyPodgDi6g
 */
function getCommandOptions() {
  // console.log(process.argv);
  const program = new Command();

  program.version(VERSION);

  program.name("mcp");
  program.usage("[options]");
  program.option("-i, --input <input filename>", "input filename");
  program.option("-o, --output <output filename>", "output filename");
  program.option("-d, --data <json data or data filename>", "extra data", "{}");
  program.option(
    "-c, --config <config filename>",
    "config filename",
    default_config_filename
  );
  program.option("-f, --force", "overwrite output file");

  program.parse(process.argv);

  let options = program.opts();

  return options;
}

/**
 * 处理命令行输入的参数
 * @param {*} options
 * @returns
 */
function handleOptions(options) {
  // 处理config
  let config = {};
  options.config = path.join(process.cwd(), options.config);
  if (fs.existsSync(options.config)) {
    config = require(options.config);
  }

  options.config = mergeConfig(defaultConfig, config);

  // 处理data
  if (options.data) {
    try {
      options.data = JSON.parse(options.data);
    } catch (e) {
      try {
        options.data = JSON.parse(fs.readFileSync(options.data, "utf8"));
      } catch (e) {
        throw e;
      }
    }
  }

  return options;
}

// 命令行执行入口
(async () => {
  try {
    let options = getCommandOptions();

    options = handleOptions(options);

    // 收集有效参数
    let config = {
      input: options.input || options.config.input,
      output: options.output || options.config.output,
      data: options.data || options.config.data,
      plugins: options.config.plugins,
    };

    // 检查输入文件
    if (!fs.existsSync(config.input)) {
      throw new Error(`input file not exists: ${config.input}`);
    }

    // 目标文件已存在抛出异常
    if (!options.force) {
      if (fs.existsSync(config.output)) {
        throw new Error(`output file already exists: ${config.output}`);
      }
    }

    // 执行核心逻辑
    await moreCopy(config);
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
})();
