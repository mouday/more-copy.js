const fs = require('fs')

/**
 * 输出文件
 * options:
 *  filename 输出文件名
 */
class WriteDataPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let filename = this.options.filename

    if (fs.existsSync(filename)) {
      console.warn('WriteDataPlugin warn: file exists', filename)
    } else {
      fs.writeFileSync(filename, JSON.stringify(data, null, 2))
    }
  }
}

module.exports = WriteDataPlugin
