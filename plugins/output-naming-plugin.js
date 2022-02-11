const path = require('path');
const namingStyle = require('naming-style');
const Plugin = require('./plugin.js');

/**
 * 改变输出文件名的命名风格
 * style可选参数:
 * camel     =>  userName,
 * pascal    =>  UserName,
 * hyphen    =>  user-name,
 * constant  =>  USER_NAME,
 * snake     =>  user_name,
 * underscore,
 * setence,
 */
class OutputNamingPlugin extends Plugin {
  process_options(options) {
    let style = this.params.style;

    if (style) {
      // console.log(path.parse(options.output));

      let parsed_output = path.parse(options.output);
      parsed_output.name = namingStyle[style](parsed_output.name);
      let output =
        path.join(parsed_output.dir, parsed_output.name) + parsed_output.ext;
      options.output = output;
    }

    return options;
  }
}

module.exports = OutputNamingPlugin;
