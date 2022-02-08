/**
 * 插件基类
 */
class Plugin {
  constructor(params = {}) {
    this.params = params;
  }

  process_options(options) {
    return options;
  }
}

module.exports = Plugin;
