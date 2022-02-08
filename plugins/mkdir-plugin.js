const fs = require('fs');

module.exports = function (options) {
  // 自动创建目录
  if (options.parsed_output.dir && !fs.existsSync(options.parsed_output.dir)) {
    fs.mkdirSync(options.parsed_output.dir, { recursive: true });
  }

  return options;
};
