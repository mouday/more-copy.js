const fs = require("fs");

const Plugin = require("../plugin.js");

/**
 * 读取文件
 * options:
 *  filename
 */
class ReadFilePlugin extends Plugin {
  process(data) {
    // 读取内容
    console.log('ReadFilePlugin:', this.options.filename);
    data.content = fs.readFileSync(this.options.filename, "utf8");
  }
}

module.exports = ReadFilePlugin;
