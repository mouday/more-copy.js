/**
 * 插件基类
 */
class Plugin {
  constructor(options = {}) {
    this.options = options;
  }

  /**
   * 插件处理文件内容
   * @param {*} input 输入文件的路径
   * @param {*} output 输出文件的路径
   * @param {*} data  输出的数据，可用于挂载自定义数据
   * @param {*} plugins 使用的插件列表
   * @param {*} content 文件内容
   * @returns content 返回文件内容
   */
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
