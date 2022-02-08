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
  const program = new Command();
  program.version(VERSION);

  program.requiredOption('-i, --input <filename>', 'input filename');
  program.requiredOption('-o, --output <filename>', 'output filename');

  program.parse();
  return program.opts();
}

module.exports = {
  getCommandOptions,
};
