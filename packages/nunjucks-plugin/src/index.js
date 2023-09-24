const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')
const { isFunction } = require('@more-copy/utils/type-util.js')

/**
 * nunjucks模板渲染
 */
class NunjucksPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let input = this.options.input
    let output = this.options.output

    if (isFunction(output)) {
      output = output(data)
    }

    let outputDir = path.parse(output).dir
    // console.log('outputDir', outputDir);

    // 存在不覆盖
    if (fs.existsSync(output)) {
      console.warn('NunjucksPlugin warn: output file exists', output)
    } else {
      let content = fs.readFileSync(input, { encoding: 'utf-8' })

      let result = nunjucks.renderString(content, data)

      // 自动创建输入目录
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      fs.writeFileSync(output, result)
    }
  }
}

module.exports = NunjucksPlugin
