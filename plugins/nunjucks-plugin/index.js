
const nunjucks = require("nunjucks");
const Plugin = require("../plugin.js");

/**
 * nunjucks模板渲染
 */
class NunjucksPlugin extends Plugin {
  process(data) {
    data.content = nunjucks.renderString(data.content, data);
  }
}

module.exports = NunjucksPlugin;
