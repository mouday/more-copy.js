const { Command } = require('commander')
const { VERSION } = require('./version.js')
const { DEFAULT_CONFIG_FILENAMES } = require('./const.js')

/**
 * 获取命令行参数
 * @returns Object
 * ref: commander https://mp.weixin.qq.com/s/rUjnie4UtywCAyPodgDi6g
 */
function getCommandOptions(args) {
  const program = new Command()

  program.version(VERSION)

  program.name('mcp')
  program.usage('[options]')

  // 配置文件路径
  program.option(
    '-c, --config <config...>',
    'config filenames',
    DEFAULT_CONFIG_FILENAMES
  )

  // 模式
  program.option('-m, --mode <mode>', 'mode name', undefined)

  // 自定义变长参数
  // program.option('-p, --params <params...>', 'other custom params', []);

  program.parse(args)

  let opts = program.opts()

  return {
    args: program.args,
    ...opts,
  }
}

module.exports = {
  getCommandOptions,
}
