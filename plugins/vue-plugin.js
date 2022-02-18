const path = require('path');
const { pascal } = require('naming-style');
const Plugin = require('./plugin.js');

/**
 * Vue需要用得的参数
 * params: name
 */
class VuePlugin extends Plugin {
  process_options(options) {
    console.log(options);
    
    let name = options.params.name;

    let vue = {};

    if (name) {
      let pascal_name = pascal(name);
      vue.api = {
        getList: `/${pascal_name}/get${pascal_name}List`,
        getById: `/${pascal_name}/get${pascal_name}ById`,
        deleteById: `/${pascal_name}/delete${pascal_name}ById`,
        updateById: `/${pascal_name}/update${pascal_name}ById`,
      }
    }

    options.vue = vue;

    return options;
  }
}

module.exports = VuePlugin;
