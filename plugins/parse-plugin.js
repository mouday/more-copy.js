const path = require('path');
const Plugin = require('./plugin.js');

/**
 * 解析路径参数
 */
class ParsePlugin extends Plugin {
  process_options(options) {
    options.parse = {
      input: path.parse(options.input),
      output: path.parse(options.output),
    };

    return options;
  }
}

module.exports = ParsePlugin;
