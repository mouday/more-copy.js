const { getCommandOptions } = require('./utils/command-options.js');
const { renderTemplate } = require('./utils/render.js');
const { getCustomConfig } = require('./utils/custom-config.js');
const { writeToFile } = require('./utils/write-to-file.js');

const Plugin = require('./plugins/plugin.js');
const MkdirPlugin = require('./plugins/mkdir-plugin.js');
const TimePlugin = require('./plugins/time-plugin.js');
const ParsePlugin = require('./plugins/parse-plugin.js');
const OutputNamingPlugin = require('./plugins/output-naming-plugin.js');
const ThinkphpPlugin = require('./plugins/thinkphp-plugin.js');

function renderToFile(options) {
  // 获取用户配置
  let config = getCustomConfig(options.config);

  if (config.plugins) {
    for (let plugin of config.plugins) {
      options = plugin.process_options(options);
    }
  }

  // 调试模式
  if (config.debug) {
    console.log(config);
    console.log(options);
  }

  // 渲染
  let content = renderTemplate(options.input, options);

  // 写入到文件
  writeToFile(options.output, content);
}

module.exports = {
  renderToFile,

  getCommandOptions,
  renderTemplate,
  getCustomConfig,
  writeToFile,

  Plugin,
  MkdirPlugin,
  TimePlugin,
  ParsePlugin,
  OutputNamingPlugin,
  ThinkphpPlugin,
};
