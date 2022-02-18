const path = require('path');
const { snake } = require('naming-style');
const Plugin = require('./plugin.js');
const { async_query } = require('../utils/mysql-util.js');
const { log } = require('console');

/**
 * 获取MySQL表字段
 * params: sql, data
 */
class MySQLPlugin extends Plugin {
  async process_options(options) {
    // let name = options.params.name;

    const results = await async_query(
      this.params.config,
      options.sql,
      options.data,
    );

    options.mysql = {
      results,
    };

    return options;
  }
}

module.exports = MySQLPlugin;
