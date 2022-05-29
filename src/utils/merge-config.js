/**
 * 合并配置对象
 * @param  {...any} configs
 * @returns
 */
function mergeConfig(...configs) {
  result_config = {};

  for (let config of configs) {
    if (config) {
      result_config = Object.assign(result_config, config);
    }
  }

  return result_config;
}

module.exports = {
  mergeConfig,
};
