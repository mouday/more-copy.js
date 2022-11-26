#!/usr/bin/env node

/**
 * 命令行
 */
const { moreCopy } = require('@more-copy/core')
const { getCommandOptions } = require('./cli-args.js')
const { getConfig } = require('./config.js')

// 命令行执行入口
;(async () => {
  try {
    // 命令行参数
    let options = getCommandOptions(process.argv)
    console.log(options)

    // 获取配置内容
    let config = await getConfig(options)

    console.log(config)

    // 执行核心逻辑
    await moreCopy(config)
  } catch (e) {
    console.error(e)
    process.exit(-1)
  }
})()
