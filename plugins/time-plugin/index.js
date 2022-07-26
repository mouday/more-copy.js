const Plugin = require("../plugin.js");
const dayjs = require("dayjs");

const default_datetime_format = "YYYY-MM-DD HH:mm:ss";
const default_date_format = "YYYY-MM-DD";
const default_time_format = "HH:mm:ss";

/**
 * 时间插件
 * options: 
 *  date_format: 日期格式
 *  time_format: 时间格式
 *  datetime_format: 日期时间格式
 */
class TimePlugin extends Plugin {
  process(data) {
    let now = dayjs();

    data.time = {
      now: now,
      date: dayjs().format(
        this.options.date_format || default_date_format
      ),
      time: dayjs().format(
        this.options.time_format || default_time_format
      ),
      datetime: dayjs().format(
        this.options.datetime_format || default_datetime_format
      ),
    };
  }
}

module.exports = TimePlugin;
