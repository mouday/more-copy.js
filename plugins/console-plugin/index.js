const Plugin = require("../plugin.js");

/**
 * 日志输出
 */
class ConsolePlugin extends Plugin {
  process(data) {
    console.log("ConsolePlugin:", JSON.stringify(data, null, 2));
  }
}

module.exports = ConsolePlugin;
