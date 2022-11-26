/**
 * 日志输出
 */
class ConsolePlugin {
  apply(data) {
    console.log("ConsolePlugin:", JSON.stringify(data, null, 2));
  }
}

module.exports = ConsolePlugin;
