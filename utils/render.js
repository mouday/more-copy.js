/**
 * 模板渲染
 */
const nunjucks = require('nunjucks');

function renderTemplate(template, data) {
  return nunjucks.render(template, data);
}

module.exports = {
  renderTemplate,
};
