const fs = require("fs");
const path = require("path");

const Plugin = require("../plugin.js");

/**
 * 自动创建目录
 */
class MkdirPlugin extends Plugin {
  process({ output, content }) {
    let output_dir = path.dirname(output);

    if (output_dir && !fs.existsSync(output_dir)) {
      fs.mkdirSync(output_dir, { recursive: true });
    }

    return content;
  }
}

module.exports = MkdirPlugin;
