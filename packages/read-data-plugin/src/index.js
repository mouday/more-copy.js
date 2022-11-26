const fs = require('fs')

/**
 * 读取文件
 * options:
 *  filename
 */
class ReadDataPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let filename = this.options.filename

    let readData = JSON.parse(fs.readFileSync(filename, 'utf8'))

    Object.assign(data, readData);

  }
}

module.exports = ReadDataPlugin
