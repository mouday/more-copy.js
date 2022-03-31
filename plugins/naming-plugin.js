const path = require('path');
const Plugin = require('./plugin.js');
const { pascal, hyphen } = require('naming-style');
/**
 * 命名风格
 */
class NamingPlugin extends Plugin {
  process_options(options) {
    let name = options.params.name;

    let naming = {};
    if (name) {
      naming = {
        pascal: pascal(name),
        hyphen: hyphen(name),
      };
    }
    options.naming = naming;

    return options;
  }
}

module.exports = NamingPlugin;
