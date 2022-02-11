/**
 * 参数解析
 * ref: commander https://mp.weixin.qq.com/s/rUjnie4UtywCAyPodgDi6g
 */

const { Command } = require('commander');
const { VERSION } = require('../version.js');

/**
 * 获取命令行参数
 * @returns Object
 */
function getCommandOptions() {
  // console.log(process.argv);
  const program = new Command();
  program.version(VERSION);

  program.usage('source target [options]');

  program.option('-c, --config <config filename>', 'config filename');
  program.option('-p, --params <params>', 'extra params');
  // console.log(process.argv.slice(2, -1));
  // console.log(process.argv[process.argv.length - 1]);
  program.parse(process.argv);
  let options = program.opts();

  // 位置参数
  options.input = process.argv[2];
  options.output = process.argv[3];

  // 额外参数
  try {
    options.params = JSON.parse(options.params);
  } catch (e) {}

  return options;
}

module.exports = {
  getCommandOptions,
};
