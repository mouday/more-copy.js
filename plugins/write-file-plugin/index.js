const fs = require('fs')
const path = require('path')

const Plugin = require('../plugin.js')

/**
 * 输出文件
 * options:
 *  filename 输出文件名
 *  mkdir 是否创建文件夹 默认true
 *  overwrite 是否覆盖已存在文件 默认false
 */
class WriteFilePlugin extends Plugin {
  constructor({ filename, mkdir = true, overwrite = false }) {
    super()
    this.options.mkdir = mkdir
    this.options.filename = filename
    this.options.overwrite = overwrite
  }

  process({ content }) {
    // 创建文件夹
    let mkdir = this.options.mkdir
    if (mkdir) {
      let dirname = path.dirname(this.options.filename)

      if (dirname && !fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true })
      }
    }

    // 输出
    console.log('WriteFilePlugin:', this.options.filename)

    // 检查文件是否存在
    if (!this.options.overwrite && fs.existsSync(this.options.filename)) {
      console.log('WriteFilePlugin: file exists', this.options.filename)
      return false
    }

    fs.writeFileSync(this.options.filename, content)
  }
}

module.exports = WriteFilePlugin
