const fs = require("fs");
const path = require("path");

const Plugin = require("../plugin.js");

/**
 * 输出文件
 * options:
 *  filename 输出文件名
 *  mkdir 是否创建文件夹 默认true
 */
class WriteFilePlugin extends Plugin {
  constructor({ filename, mkdir = true }) {
    super();
    this.options.mkdir = mkdir;
    this.options.filename = filename;
  }

  process({ content }) {
    // 创建文件夹
    let mkdir = this.options.mkdir;
    if (mkdir) {
      let dirname = path.dirname(this.options.filename);

      if (dirname && !fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
      }
    }

    // 输出
    console.log("WriteFilePlugin:", this.options.filename);

    fs.writeFileSync(this.options.filename, content);
  }
}

module.exports = WriteFilePlugin;
