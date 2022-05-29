/**
 * 插件基类
 */
class Plugin {
  constructor(options = {}) {
    this.options = options;
  }

  process({ input, output, data, plugins, content }) {
    return content;
  }

  toJSON() {
    return {
      plugin: this.constructor.name,
      options: this.options,
    };
  }
}

module.exports = Plugin;
