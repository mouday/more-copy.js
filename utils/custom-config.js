const path = require("path");

function getCustomConfig(config_path) {
  let config = require(path.join(process.cwd(), config_path));
  return config;
}

module.exports = {
  getCustomConfig,
};
