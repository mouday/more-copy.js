const path = require('path');
const { snake } = require('naming-style');
const Plugin = require('./plugin.js');
const { async_query } = require('../utils/mysql-util.js');
const { log } = require('console');

/**
 * 获取MySQL表字段
 * params: config
 * options: {table}
 */
class TablePlugin extends Plugin {
  async process_options(options) {
    let table_name = options.params.table;

    if (table_name) {
      // 配置
      let config = TablePlugin.default_config;

      if (this.params.config) {
        config = { ...config, ...this.params.config };
      }

      // 入参
      let data = { database: config.database, table: table_name };

      const results = await async_query(config, TablePlugin.query_sql, data);

      let columns = results.map((item) => {
        return {
          name: item.COLUMN_NAME,
          type: item.DATA_TYPE,
          comment: item.COLUMN_COMMENT,
        };
      });

      options.table = {
        database: data.database,
        table: data.table,
        columns,
      };
    }

    return options;
  }
}

TablePlugin.default_config = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'data',
};

TablePlugin.query_sql =
  'SELECT * FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :database and TABLE_NAME = :table';

module.exports = TablePlugin;
