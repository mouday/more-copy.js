const path = require('path');
const { pascal } = require('naming-style');
const Plugin = require('./plugin.js');

/**
 * ThinkPHP需要用得的参数
 * prefix 表前缀
 */
class ThinkphpPlugin extends Plugin {
  process_options(options) {
    let name = options.params.name;

    let thinkphp = {};

    if (name) {
      let pascal_name = pascal(name);

      if (this.params.prefix) {
        thinkphp.table = `${this.params.prefix}${name}`;
      } else {
        thinkphp.table = name;
      }

      thinkphp.service = `${pascal_name}Service`;
      thinkphp.model = `${pascal_name}Model`;
      thinkphp.controller = `${pascal_name}Controller`;
      thinkphp.pascal_name = pascal_name;
      thinkphp.api = {
        getList: `/${pascal_name}/get${pascal_name}List`,
        getById: `/${pascal_name}/get${pascal_name}ById`,
        deleteById: `/${pascal_name}/delete${pascal_name}ById`,
        updateById: `/${pascal_name}/update${pascal_name}ById`,
        add: `/${pascal_name}/add${pascal_name}`,
      }
    }

    thinkphp.namespace = path.dirname(options.output).replace(/\//g, '\\');

    options.thinkphp = thinkphp;

    return options;
  }
}

module.exports = ThinkphpPlugin;
