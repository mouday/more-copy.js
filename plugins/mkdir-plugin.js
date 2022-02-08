const fs = require('fs');
const path = require('path');

const Plugin = require('./plugin.js');

/**
 * 自动创建目录
 */
class MkdirPlugin extends Plugin {
  process_options(options) {
    let output_dir = path.dirname(options.output);

    if (output_dir && !fs.existsSync(output_dir)) {
      fs.mkdirSync(output_dir, { recursive: true });
    }

    return options;
  }
}

module.exports = MkdirPlugin;
