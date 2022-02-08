/**
 * 参数解析
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
  // program.option('-o, --output <filename>', 'output filename');
  // console.log(process.argv.slice(2, -1));
  // console.log(process.argv[process.argv.length - 1]);
  program.parse(process.argv);
  let options = program.opts();

  // 位置参数
  options.input = process.argv[2];
  options.output = process.argv[3];

  // if (process.argv.length < 4) {
  //   throw new Error('params not enough');
  // }

  // console.log(options);
  return options;
}

module.exports = {
  getCommandOptions,
};
