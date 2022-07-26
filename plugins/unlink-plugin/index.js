const fs = require("fs");

const Plugin = require("../plugin.js");

/**
 * 自动删除输出文件
 */
class UnlinkPlugin extends Plugin {
  process({ output, content }) {
    if (fs.existsSync(output)) {
      fs.unlinkSync(output);
    }

    return content;
  }
}

module.exports = UnlinkPlugin;
