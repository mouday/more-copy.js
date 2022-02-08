const path = require('path');

// 读取自定义配置
const config_filename = 'mo-copy.config.js';
const config_path = path.join(process.cwd(), config_filename);

function getCustomConfig() {
  let config = {};

  try {
    config = require(config_path);
  } catch (e) {
    // do nothing
  }
  return config;
}

module.exports = {
  getCustomConfig,
};
