const path = require("path");
const Plugin = require("../plugin.js");

/**
 * 解析路径参数
 */
class ParsePlugin extends Plugin {
  process(data) {
    data.parse = {
      input: path.parse(data.input),
      output: path.parse(data.output),
    };
  }
}

module.exports = ParsePlugin;
