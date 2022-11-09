const { pascal, hyphen } = require('naming-style')
const Plugin = require('../plugin.js')

/**
 * Laravel CURD 需要用的参数
 * options
 *  name 名称
 */
class LaravelPlugin extends Plugin {
  process(data) {
    let name = this.options.name

    if(!name){
      throw new Error('LaravelPlugin params: name not give!')
    }

    let laravel = {}

    // 传递了必要的参数
    if (name) {
      let pascal_name = pascal(name)
      let hyphen_name = hyphen(name)

      laravel.service = `${pascal_name}Service`
      laravel.model = `${pascal_name}Model`
      laravel.controller = `${pascal_name}Controller`
      laravel.validate = `${pascal_name}Validate`
      laravel.pascal_name = pascal_name
      laravel.hyphen_name = hyphen_name

      // 方法名
      let api = {
        getList: `get${pascal_name}List`,
        getById: `get${pascal_name}ById`,
        deleteById: `delete${pascal_name}ById`,
        updateById: `update${pascal_name}ById`,
        add: `add${pascal_name}`,
      }

      // // 对外接口名
      // let api = {}
      // for (let [key, val] of Object.entries(methods)) {
      //   api[key] = `/${pascal_name}/${val}`
      // }

      // laravel.methods = methods
      laravel.api = api
    }

    // 挂载到data上
    data.laravel = laravel
  }
}

module.exports = LaravelPlugin
