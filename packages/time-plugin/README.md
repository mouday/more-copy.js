# TimePlugin

基于 dayjs 的时间插件

使用示例

```js
// more-copy.config.js

const TimePlugin = require("@more-copy/time-plugin");

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new TimePlugin({
      datetime_format: "YYYY-MM-DD HH:mm:ss";
      date_format: "YYYY-MM-DD";
      time_format: "HH:mm:ss";
  })],
};
```

挂载到 data 数据

```json
"time": {
    "date": "2022-05-29",
    "time": " 21:45:57",
    "datetime": "2022-05-29 21:45:57"
}
```
