const config = require('./config.js')
const mysql = require('mysql2/promise')

/**
 * 获取MySQL表字段
 * config: {host, user, password, database, table}
 * type_mapping: {}
 * table
 *
 * ref: https://www.npmjs.com/package/mysql2
 */
class TablePlugin {
  constructor(options) {
    this.options = options || {}
  }

  /**
   * 数据库配置
   * @returns
   */
  getDatabaseConfig() {
    //
    return Object.assign({}, config.default_config, this.options.config || {})
  }

  /**
   * 类型映射
   * @returns
   */
  getTypeMapping() {
    return Object.assign(
      {},
      config.default_type_mapping,
      this.options.type_mapping || {}
    )
  }

  async apply(data) {
    let table_name = this.options.table

    let type_mapping = this.getTypeMapping()
    let database_config = this.getDatabaseConfig()

    // 表名
    let table = {
      name: table_name,
      comment: '',
      columns: '',
    }

    if (table_name) {
      const connection = await mysql.createConnection(database_config)

      // 表注释
      const [table_results, table_fields] = await connection.query(
        config.query_table_sql,
        [database_config.database, table_name]
      )

      table.comment = table_results[0].TABLE_COMMENT

      // 查列
      const [columns_results, columns_fields] = await connection.query(
        config.query_columns_sql,
        [database_config.database, table_name]
      )

      table.columns = columns_results.map((item) => {
        return {
          name: item.COLUMN_NAME,
          type: type_mapping[item.DATA_TYPE] || item.DATA_TYPE,
          comment: item.COLUMN_COMMENT,
          default: item.COLUMN_DEFAULT,
        }
      })

      await connection.end()
    }

    // 挂载数据
    data.table = table
  }
}

module.exports = TablePlugin
