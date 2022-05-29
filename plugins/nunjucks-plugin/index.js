/**
 * 模板渲染
 */
const nunjucks = require("nunjucks");
const Plugin = require("../plugin.js");

class NunjucksPlugin extends Plugin {
  process({ input, output, data, content }) {
    return nunjucks.renderString(content, data);
  }
}

module.exports = NunjucksPlugin;
