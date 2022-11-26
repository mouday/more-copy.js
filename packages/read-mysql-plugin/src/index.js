const mysql = require('mysql2/promise')

/**
 * 获取MySQL表字段
 * params: sql, data
 */
class MySQLPlugin {
  constructor(options) {
    this.options = options || {}
  }

  async apply(data) {
    let sql = this.options.sql
    let config = this.options.config

    const connection = await mysql.createConnection(config)

    const [rows, fields] = await connection.query(sql)

    await connection.end()

    data.mysql = {
      rows,
    }
  }
}

module.exports = MySQLPlugin
