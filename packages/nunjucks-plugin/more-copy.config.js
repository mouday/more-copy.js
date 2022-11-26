// more-copy.config.js

const NunjucksPlugin = require('./src/index.js')
const ConsolePlugin = require('@more-copy/console-plugin')
const MkdirPlugin = require('@more-copy/mkdir-plugin')

module.exports = {
  // 数据
  data: {
    name: 'Tom',
    age: 23,
  },

  // 使用插件，有先后顺序
  plugins: [
 
    new MkdirPlugin({dirname: 'out'}),
    
    new ConsolePlugin(),
    
    new NunjucksPlugin({
      input: 'template/index.html',
      output: 'out/index.html',
    }),
  ],
}
