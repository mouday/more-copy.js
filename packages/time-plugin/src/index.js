const dayjs = require('dayjs')

const {
  default_date_format,
  default_time_format,
  default_datetime_format,
} = require('./const.js')

/**
 * 时间插件
 * options:
 *  date_format: 日期格式
 *  time_format: 时间格式
 *  datetime_format: 日期时间格式
 */
class TimePlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(data) {
    let now = dayjs()

    data.time = {
      // now: now,
      date: now.format(this.options.date_format || default_date_format),
      time: now.format(this.options.time_format || default_time_format),
      datetime: now.format(
        this.options.datetime_format || default_datetime_format
      ),
    }
  }
}

module.exports = TimePlugin
