const { pascal } = require('naming-style')

/**
 * api需要用得的参数
 * params: name
 */
class ApiPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let name = this.options.name

    let api = {}

    if (name) {
      let pascal_name = pascal(name)

      api = {
        getList: `get${pascal_name}List`,
        getById: `get${pascal_name}ById`,
        deleteById: `delete${pascal_name}ById`,
        updateById: `update${pascal_name}ById`,
      }
    } else {
      console.warn('ApiPlugin warn: name is empty')
    }

    data.api = api
  }
}

module.exports = ApiPlugin
