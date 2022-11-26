const {
  style,
  camel,
  pascal,
  hyphen,
  constant,
  snake,
  underscore,
  setence,
} = require('naming-style')

/**
 * 命名风格
 */
class NamingPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let name = this.options.name

    let naming = {}

    if (name) {
      naming = {
        name: name,
        pascal: pascal(name),
        constant: constant(name),
        camel: camel(name),
        hyphen: hyphen(name),
        snake: snake(name),
        underscore: underscore(name),
      }
    }

    data.naming = naming
  }
}

module.exports = NamingPlugin
