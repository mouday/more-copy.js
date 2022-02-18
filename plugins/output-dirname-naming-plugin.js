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
class OutputDirnameNamingPlugin extends Plugin {
  process_options(options) {
    let style = this.params.style;

    if (style) {
      let parsed_output = path.parse(options.output);
      parsed_output.dir =  parsed_output.dir.split(path.sep).map(x=>namingStyle[style](x)).join(path.sep);
      options.output = path.join(parsed_output.dir, parsed_output.base);
    }

    return options;
  }
}

module.exports = OutputDirnameNamingPlugin;
