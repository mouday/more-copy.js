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
    // console.log(options);

    let table_name = options.params.table;

    if (table_name) {
      // 配置
      let config = TablePlugin.default_config;

      if (this.params) {
        config = { ...config, ...this.params };
      }

      // console.log(config);

      // 入参
      let data = { database: config.database, table: table_name };
      // console.log(data);
      // console.log(TablePlugin.query_columns_sql);
      // console.log(TablePlugin.query_table_sql,);
      // 查表
      const table_results = await async_query(
        config,
        TablePlugin.query_table_sql,
        data,
      );

      // console.log(table_results);
      

      // 查列
      const columns_results = await async_query(
        config,
        TablePlugin.query_columns_sql,
        data,
      );

      // console.log(columns_results);

      let columns = columns_results.map((item) => {
        return {
          name: item.COLUMN_NAME,
          type: TablePlugin.data_type_mapping[item.DATA_TYPE] || item.DATA_TYPE,
          comment: item.COLUMN_COMMENT,
          default: item.COLUMN_DEFAULT,
        };
      });

      options.table = {
        database: data.database,
        table: data.table,
        table_comment: table_results[0].TABLE_COMMENT,
        columns,
      };
    }

    return options;
  }
}

// 数据库默认配置
TablePlugin.default_config = {
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'data',
};

// 查列
TablePlugin.query_columns_sql =
  'SELECT * FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :database and TABLE_NAME = :table';

// 查表
TablePlugin.query_table_sql =
  'SELECT * FROM information_schema.TABLES WHERE TABLE_SCHEMA = :database and TABLE_NAME = :table';

// 数据库类型映射
TablePlugin.data_type_mapping = {
  varchar: 'string',
};

module.exports = TablePlugin;
