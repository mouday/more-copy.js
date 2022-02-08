const { mkdirPlugin, nowPlugin, parsePlugin } = require('more-copy');

module.exports = {
  debug: true,
  plugins: [nowPlugin, parsePlugin, mkdirPlugin],
};
