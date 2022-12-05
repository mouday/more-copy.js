const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

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
    let outputDir = path.parse(output).dir
    // console.log('outputDir', outputDir);

    // 存在不覆盖
    if (fs.existsSync(output)) {
      console.warn('NunjucksPlugin warn: output file exists', output)
    } else {
      let result = nunjucks.render(input, data)

      // 自动创建输入目录
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      fs.writeFileSync(output, result)
    }
  }
}

module.exports = NunjucksPlugin
