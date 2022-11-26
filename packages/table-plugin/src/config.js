module.exports = {
  // 查表
  query_table_sql:
    'SELECT * FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? and TABLE_NAME = ?',

  // 查列
  query_columns_sql:
    'SELECT * FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = ? and TABLE_NAME = ?',

  // 数据库默认配置
  default_config: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'data',
  },

  // 数据库类型映射
  default_type_mapping: {
    // varchar: 'string',
  },
}
