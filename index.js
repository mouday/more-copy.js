
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
const VuePlugin = require('./plugins/vue-plugin.js');
const MySQLPlugin = require('./plugins/mysql-plugin.js');
const TablePlugin = require('./plugins/table-plugin.js');
const OutputDirnameNamingPlugin = require('./plugins/output-dirname-naming-plugin.js');
const NamingPlugin = require('./plugins/naming-plugin.js');

// 读取自定义配置
const default_config_filename = "./more-copy.config.js";
// const default_config_path = path.join(process.cwd(), config_filename);

async function renderToFile(options) {
  // 获取用户配置
  let config = getCustomConfig(options.config || default_config_filename);

  // 使用插件
  if (config.plugins) {
    for (let plugin of config.plugins) {
      options = await plugin.process_options(options);
    }
  }

  // 调试模式
  if (config.debug) {
    console.log(config);
    console.log(JSON.stringify(options, null, 2));
  }

  // 渲染
  let content = renderTemplate(options.input, options, config.template);

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
  OutputDirnameNamingPlugin,
  ThinkphpPlugin,
  VuePlugin,
  MySQLPlugin,
  TablePlugin,
  NamingPlugin,
};
