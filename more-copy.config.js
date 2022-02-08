const { MkdirPlugin, ParsePlugin, TimePlugin } = require('more-copy');

module.exports = {
  // 开启调试
  debug: true,

  // 使用插件，有先后顺序
  plugins: [new TimePlugin(), new ParsePlugin(), new MkdirPlugin()],
};
