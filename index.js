/**
 * ref: commander https://mp.weixin.qq.com/s/rUjnie4UtywCAyPodgDi6g
 */
const { getCommandOptions } = require('./utils/command-options.js');
const { renderTemplate } = require('./utils/render.js');
const { getCustomConfig } = require('./utils/custom-config.js');
const { writeToFile } = require('./utils/write-to-file.js');

const MkdirPlugin = require('./plugins/mkdir-plugin.js');
const TimePlugin = require('./plugins/time-plugin.js');
const ParsePlugin = require('./plugins/parse-plugin.js');
const Plugin = require('./plugins/plugin.js');

module.exports = {
  getCommandOptions,
  renderTemplate,
  getCustomConfig,
  writeToFile,

  MkdirPlugin,
  TimePlugin,
  ParsePlugin,
  Plugin
};
