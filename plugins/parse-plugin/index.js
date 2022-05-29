const path = require("path");
const Plugin = require("../plugin.js");

/**
 * 解析路径参数
 */
class ParsePlugin extends Plugin {
  process({ input, output, data, content }) {
    data.parse = {
      input: path.parse(input),
      output: path.parse(output),
    };

    return content;
  }
}

module.exports = ParsePlugin;
