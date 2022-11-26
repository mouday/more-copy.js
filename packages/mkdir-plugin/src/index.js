const fs = require('fs')

/**
 * 自动创建目录
 */
class MkdirPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let dirname = this.options.dirname

    if (dirname) {
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true })
      }
    } else {
      console.warn('MkdirPlugin warn: dirname is empty')
    }
  }
}

module.exports = MkdirPlugin
