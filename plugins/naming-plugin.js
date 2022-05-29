const path = require("path");
const Plugin = require("./plugin.js");
const { pascal, hyphen } = require("naming-style");

/**
 * 命名风格
 */
class NamingPlugin extends Plugin {
  process({ input, output, data, plugins, content }) {
    let name = data.name;

    let naming = {};

    if (name) {
      naming = {
        pascal: pascal(name),
        hyphen: hyphen(name),
      };
    }

    options.naming = naming;

    return content;
  }
}

module.exports = NamingPlugin;
