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
  console.log(process.argv);
  const program = new Command();
  program.version(VERSION);

  // program.option('-i, --input <filename>', 'input filename');
  // program.option('-o, --output <filename>', 'output filename');
  // console.log(process.argv.slice(2, -1));
  // console.log(process.argv[process.argv.length - 1]);
  program.parse(process.argv);
  
  if(process.argv.length < 4){
    throw new Error('params not enough');
  }
  let options = program.opts();
  options.input = process.argv.slice(2, -1);
  options.output = process.argv[process.argv.length - 1];
  console.log(options);
  return options;
}

module.exports = {
  getCommandOptions,
};
