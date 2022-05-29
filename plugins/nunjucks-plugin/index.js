
const nunjucks = require("nunjucks");
const Plugin = require("../plugin.js");

/**
 * 模板渲染
 */
class NunjucksPlugin extends Plugin {
  process({ input, output, data, content }) {
    return nunjucks.renderString(content, data);
  }
}

module.exports = NunjucksPlugin;
