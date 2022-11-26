const nunjucks = require('nunjucks')
const fs = require('fs')

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

    let result = nunjucks.render(input, data)
    
    if (fs.existsSync(output)) {
      console.warn('NunjucksPlugin warn: output file exists', output)
    } else {
      fs.writeFileSync(output, result)
    }
  }
}

module.exports = NunjucksPlugin
