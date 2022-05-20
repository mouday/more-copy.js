/**
 * 模板渲染
 */
const nunjucks = require('nunjucks');

function renderTemplate(name, data, template='') {
  // console.log(template);
  var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(template));
  return env.render(name, data);
}

module.exports = {
  renderTemplate,
};
