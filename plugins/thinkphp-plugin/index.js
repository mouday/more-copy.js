const path = require("path");
const { pascal, hyphen } = require("naming-style");
const Plugin = require("../plugin.js");

/**
 * ThinkPHP CURD 需要用的参数
 * constructor prefix 表前缀
 *
 * options
 *  prefix 表前缀
 *  name 名称
 *  output 输出路径
 */
class ThinkphpPlugin extends Plugin {
  process(data) {
    let name = this.options.name;
    let output = this.options.output;

    let thinkphp = {};

    // 传递了必要的参数
    if (name) {
      let pascal_name = pascal(name);
      let hyphen_name = hyphen(name);

      // 表前缀
      if (this.options.prefix) {
        thinkphp.table = `${this.options.prefix}${name}`;
      } else {
        thinkphp.table = name;
      }

      thinkphp.service = `${pascal_name}Service`;
      thinkphp.model = `${pascal_name}Model`;
      thinkphp.controller = `${pascal_name}Controller`;
      thinkphp.validate = `${pascal_name}Validate`;
      thinkphp.pascal_name = pascal_name;
      thinkphp.hyphen_name = hyphen_name;
      
      // 命名空间
      thinkphp.namespace = output.replace(/\//g, "\\");

      // 方法名
      thinkphp.methods = {
        getList: `get${pascal_name}List`,
        getById: `get${pascal_name}ById`,
        deleteById: `delete${pascal_name}ById`,
        updateById: `update${pascal_name}ById`,
        add: `add${pascal_name}`,
      };

      // 对外接口名
      let api = {};
      for (let [key, val] of Object.entries(thinkphp.methods)) {
        api[key] = `/${pascal_name}/${val}`;
      }

      thinkphp.api = api;
    }

    // 挂载到data上
    data.thinkphp = thinkphp;
  }
}

module.exports = ThinkphpPlugin;
