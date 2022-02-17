const Plugin = require('./plugin.js');

/**
 * 时间插件
 */
class TimePlugin extends Plugin {
  process_options(options) {
    let now = new Date();

    options.time = {
      fullYear: now.getFullYear(),
      month: now.getMonth() + 1,
      format_month: ('0' + (now.getMonth() + 1)).slice(-2),
      date: now.getDate(),
    };

    return options;
  }
}

module.exports = TimePlugin;
