const path = require('path')
const fs = require('fs')
const defaultConfig = require('./default.config.js')

/**
 * 读取用户配置
 * @param {Array} configFiles
 * @returns
 */
async function readCustomConfig(configFiles) {
  for (let configFile of configFiles) {
    if (!path.isAbsolute(configFile)) {
      configFile = path.join(process.cwd(), configFile)
    }

    if (fs.existsSync(configFile)) {
      console.log(configFile)
      return require(configFile)
    }
  }
}

/**
 * 处理命令行输入的参数
 * @param {*} options
 * @returns
 */
async function getConfig(options) {
  let customConfig = await readCustomConfig(options.config)

  if (typeof customConfig == 'function') {
    customConfig = customConfig(options)
  }

  if (customConfig) {
    return { ...defaultConfig, ...customConfig }
  } else {
    return defaultConfig
  }
}

module.exports = {
  getConfig,
}
