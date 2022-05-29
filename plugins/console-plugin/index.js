const Plugin = require("../plugin.js");

/**
 * 日志输出
 */
class ConsolePlugin extends Plugin {
  constructor(
    options = {
      input: true,
      output: true,
      data: true,
      plugins: false,
      content: false,
    }
  ) {
    super(options);
  }

  process({ input, output, data, plugins, content }) {
    if (this.options.input) {
      console.log("input:", input);
    }

    if (this.options.output) {
      console.log("output:", output);
    }

    if (this.options.data) {
      console.log("data:", JSON.stringify(data, null, 2));
    }

    if (this.options.plugins) {
      console.log("plugins:", plugins);
    }

    if (this.options.content) {
      console.log("content:", content);
    }

    return content;
  }
}

module.exports = ConsolePlugin;
