# TablePlugin

获取MySQL表字段

使用示例

```js
// more-copy.config.js

const TablePlugin = require("more-copy/plugins/table-plugin/index.js");

module.exports = {
  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new TablePlugin({
      table: "tb_user",
      // 类型映射
      type_mapping: {},

      // 数据库配置
      config: {
        host: "127.0.0.1",
        user: "root",
        password: "123456",
        database: "data",
      },
    }),
  ],
};
```

挂载到 data 数据

```json
"table": {
    "name": "tb_user",
    "comment": "",
    "columns": [
      {
        "name": "age",
        "type": "int",
        "comment": "年龄",
        "default": null
      },
      {
        "name": "email",
        "type": "varchar",
        "comment": "邮箱",
        "default": null
      },
      {
        "name": "id",
        "type": "int",
        "comment": "主键",
        "default": null
      },
      {
        "name": "name",
        "type": "varchar",
        "comment": "姓名",
        "default": null
      },
      {
        "name": "phone",
        "type": "varchar",
        "comment": "手机号",
        "default": null
      },
      {
        "name": "profession",
        "type": "varchar",
        "comment": "专业",
        "default": null
      },
      {
        "name": "status",
        "type": "int",
        "comment": "状态",
        "default": null
      }
    ]
  },
```
