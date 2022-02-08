const mkdirPlugin = require('./plugins/mkdir-plugin.js');
const nowPlugin = require('./plugins/now-plugin.js');
const parsePlugin = require('./plugins/parse-plugin.js');

module.exports = {
  debug: true,
  plugins: [nowPlugin, parsePlugin, mkdirPlugin],
};
