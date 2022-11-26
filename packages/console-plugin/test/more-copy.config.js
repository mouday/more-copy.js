// more-copy.config.js

const ConsolePlugin = require('../src/index.js')

module.exports = (options) => {
  console.log(options)

  return {
    // 数据
    data: {
      ...options,
    },

    // 使用插件，有先后顺序
    plugins: [new ConsolePlugin()],
  }
}
