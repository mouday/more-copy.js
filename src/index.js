// 核心逻辑
// const fs = require("fs");

/**
 * @param {Object} data any custom data
 * @param {Array} plugins
 */
async function moreCopy({ data, plugins = [] }) {
  // // 读取内容
  // let content = fs.readFileSync(input, "utf8");

  // 使用插件
  let result = null;

  for (let plugin of plugins) {
    result = await plugin.process(data);

    // 如果返回值是false，则中断处理
    if (result === false) {
      break;
    }
  }

  // 输出
  // fs.writeFileSync(output, content);
}

module.exports = {
  moreCopy,
};
