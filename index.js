/**
 * ref: commander https://mp.weixin.qq.com/s/rUjnie4UtywCAyPodgDi6g
 */
const { getCommandOptions } = require('./utils/command-options.js');
const { renderTemplate } = require('./utils/render.js');
const { getCustomConfig } = require('./utils/custom-config.js');

const mkdirPlugin = require('./plugins/mkdir-plugin.js');
const nowPlugin = require('./plugins/now-plugin.js');
const parsePlugin = require('./plugins/parse-plugin.js');

module.exports = {
  getCommandOptions,
  renderTemplate,
  getCustomConfig,

  mkdirPlugin,
  nowPlugin,
  parsePlugin
};
