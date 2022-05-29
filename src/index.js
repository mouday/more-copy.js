// 核心逻辑
const fs = require("fs");

/**
 * @param {*} data any custom data
 * @param {*} config { input, output }
 */
async function moreCopy({ input, output, data = {}, plugins = [] }) {
  // 读取内容
  let content = fs.readFileSync(input, "utf8");

  // 使用插件
  if (plugins) {
    for (let plugin of plugins) {
      content = await plugin.process({ input, output, data, content, plugins });
    }
  }

  // 输出
  fs.writeFileSync(output, content);
}

module.exports = {
  moreCopy,
};
