const path = require("path");
const { snake } = require("naming-style");
const Plugin = require("../plugin.js");
const { async_query } = require("../../src/utils/mysql-util.js");

/**
 * 获取MySQL表字段
 * TODO: 支持文件获取字段列表
 * params: config
 * options: {table}
 */
class TablePlugin extends Plugin {
  async process({ input, output, data, plugins, content }) {
    // console.log(options);

    let table = this.options.table;

    if (table) {
      // 配置
      let config = this.options.config || TablePlugin.default_config;

      // console.log(config);

      // 入参
      let params = { database: config.database, table: table };

      // 查表
      const table_results = await async_query(
        config,
        TablePlugin.query_table_sql,
        params
      );

      // console.log(table_results);

      // 查列
      const columns_results = await async_query(
        config,
        TablePlugin.query_columns_sql,
        params
      );

      // console.log(columns_results);

      let columns = columns_results.map((item) => {
        return {
          name: item.COLUMN_NAME,
          type: item.DATA_TYPE,
          comment: item.COLUMN_COMMENT,
          default: item.COLUMN_DEFAULT,
        };
      });

      data.table = {
        name: params.table,
        comment: table_results[0].TABLE_COMMENT,
        columns,
      };
    }

    return content;
  }
}

// 数据库默认配置
TablePlugin.default_config = {
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "data",
};

// 查列
TablePlugin.query_columns_sql =
  "SELECT * FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :database and TABLE_NAME = :table";

// 查表
TablePlugin.query_table_sql =
  "SELECT * FROM information_schema.TABLES WHERE TABLE_SCHEMA = :database and TABLE_NAME = :table";

// 数据库类型映射
TablePlugin.data_type_mapping = {
  varchar: "string",
};

module.exports = TablePlugin;
