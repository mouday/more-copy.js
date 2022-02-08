const path = require('path');
const Plugin = require('./plugin.js');

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
