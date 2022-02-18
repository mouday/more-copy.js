const mysql = require('mysql');

/**
 * 同步查询
 * @param {Object} config
 * @param {String} sql
 * @param {Object} params
 * @returns {Array}
 */
function async_query(config, sql, params) {
  return new Promise((resolve, reject) => {
    var connection = mysql.createConnection(config);

    connection.config.queryFormat = function (query, values) {
      if (!values) return query;
      return query.replace(
        /\:(\w+)/g,
        function (txt, key) {
          if (values.hasOwnProperty(key)) {
            return this.escape(values[key]);
          }
          return txt;
        }.bind(this),
      );
    };

    connection.connect();

    connection.query(sql, params, function (error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });

    connection.end();
  }).catch(() => {});
}

module.exports = {
  async_query,
};
