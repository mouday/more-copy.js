const NunjucksPlugin = require("more-copy/plugins/nunjucks-plugin/index.js");
const ConsolePlugin = require("more-copy/plugins/console-plugin/index.js");
const TimePlugin = require("more-copy/plugins/time-plugin/index.js");
const ParsePlugin = require("more-copy/plugins/parse-plugin/index.js");
const TablePlugin = require("more-copy/plugins/table-plugin/index.js");
const ThinkphpPlugin = require("more-copy/plugins/thinkphp-plugin/index.js");
const MkdirPlugin = require("more-copy/plugins/mkdir-plugin/index.js");

console.log(process.argv);

module.exports = {
  input: "./template/DataForm.vue",

  output: "./dist/user-edit/DataForm.vue",

  // 数据
  data: {},

  // 使用插件，有先后顺序
  plugins: [
    new ParsePlugin(),
    new TimePlugin(),
    new TablePlugin({
      table: "tb_user",
      config: {
        host: "127.0.0.1",
        user: "root",
        password: "123456",
        database: "data",
      },
    }),
    new ThinkphpPlugin({
      prefix: "tb_",
      name: "user",
    }),
    new MkdirPlugin(),
    new ConsolePlugin(),
    new NunjucksPlugin(),
  ],
};
