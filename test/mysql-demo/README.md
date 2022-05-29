# 从数据库取数据生成 Vue 编辑页面

```js
// more-copy.config.js
const NunjucksPlugin = require("more-copy/plugins/nunjucks-plugin/index.js");
const ConsolePlugin = require("more-copy/plugins/console-plugin/index.js");
const TimePlugin = require("more-copy/plugins/time-plugin/index.js");
const ParsePlugin = require("more-copy/plugins/parse-plugin/index.js");
const TablePlugin = require("more-copy/plugins/table-plugin/index.js");
const ThinkphpPlugin = require("more-copy/plugins/thinkphp-plugin/thinkphp-plugin.js");
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
```

```html
<!-- template/DataForm.vue -->
<template>
  <div class="data-form__wrap">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="90px"
      class="data-form"
    >
      {% for item in table.columns %}
      <!-- {{item.comment or item.name}} -->
      <el-form-item label="{{item.comment or item.name}}" prop="{{item.name}}">
        <el-input type="text" v-model="form.{{item.name}}"></el-input>
      </el-form-item>
      {% endfor %}

      <el-form-item label="显示/隐藏" prop="status">
        <mo-switch v-model="form.status"></mo-switch>
      </el-form-item>
    </el-form>

    <div class="data-form__footer">
      <el-button @click="$emit('on-cancel')">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',

    props: {
      row: { type: Object, default: null },
    },

    components: {},

    data() {
      return {
        form: {
          {% for item in table.columns %}
          {{item.name}}: '{{item.default | safe }}', // {{item.comment or item.name }}
          {% endfor %}
        },

        rules: {
          {% for item in table.columns %}
          {{item.name}}: [
            {
              message: '{{item.comment or item.name}}不能为空',
              required: true,
              trigger: 'blur',
            },
          ],
          {% endfor %}
        },
      };
    },

    computed: {},

    methods: {
      getData() {
        if (this.row) {
          for (let key of Object.keys(this.form)) {
            this.form[key] = this.row[key];
          }
        }
      },

      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.confirmSubmit();
          } else {
            return false;
          }
        });
      },

      async confirmSubmit() {
        let res;

        if (this.form.id) {
          res = await this.$http.post(
            '{{thinkphp.api.updateById}}',
            this.form);

        } else {
          res = await this.$http.post(
            '{{thinkphp.api.add}}',
             this.form);
        }

        if (res.code == 0) {
          this.$msg.success('操作成功');
          this.$emit('on-success');
        } else {
          this.$msg.error(res.msg);
        }
      },
    },

    created() {
      this.getData();
    },
  };
</script>

<style lang="less"></style>

<style lang="less" scoped>
  .data-form__footer {
    text-align: center;
  }
</style>
```

执行命令，生成页面

```bash
$ mcp
```

```html
<!-- dist/user-edit/DataForm.vue -->
<template>
  <div class="data-form__wrap">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="90px"
      class="data-form"
    >
      <!-- 年龄 -->
      <el-form-item label="年龄" prop="age">
        <el-input type="text" v-model="form.age"></el-input>
      </el-form-item>

      <!-- 邮箱 -->
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" v-model="form.email"></el-input>
      </el-form-item>

      <!-- 主键 -->
      <el-form-item label="主键" prop="id">
        <el-input type="text" v-model="form.id"></el-input>
      </el-form-item>

      <!-- 姓名 -->
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="form.name"></el-input>
      </el-form-item>

      <!-- 手机号 -->
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="form.phone"></el-input>
      </el-form-item>

      <!-- 专业 -->
      <el-form-item label="专业" prop="profession">
        <el-input type="text" v-model="form.profession"></el-input>
      </el-form-item>

      <!-- 状态 -->
      <el-form-item label="状态" prop="status">
        <el-input type="text" v-model="form.status"></el-input>
      </el-form-item>

      <el-form-item label="显示/隐藏" prop="status">
        <mo-switch v-model="form.status"></mo-switch>
      </el-form-item>
    </el-form>

    <div class="data-form__footer">
      <el-button @click="$emit('on-cancel')">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",

    props: {
      row: { type: Object, default: null },
    },

    components: {},

    data() {
      return {
        form: {
          age: "", // 年龄

          email: "", // 邮箱

          id: "", // 主键

          name: "", // 姓名

          phone: "", // 手机号

          profession: "", // 专业

          status: "", // 状态
        },

        rules: {
          age: [
            {
              message: "年龄不能为空",
              required: true,
              trigger: "blur",
            },
          ],

          email: [
            {
              message: "邮箱不能为空",
              required: true,
              trigger: "blur",
            },
          ],

          id: [
            {
              message: "主键不能为空",
              required: true,
              trigger: "blur",
            },
          ],

          name: [
            {
              message: "姓名不能为空",
              required: true,
              trigger: "blur",
            },
          ],

          phone: [
            {
              message: "手机号不能为空",
              required: true,
              trigger: "blur",
            },
          ],

          profession: [
            {
              message: "专业不能为空",
              required: true,
              trigger: "blur",
            },
          ],

          status: [
            {
              message: "状态不能为空",
              required: true,
              trigger: "blur",
            },
          ],
        },
      };
    },

    computed: {},

    methods: {
      getData() {
        if (this.row) {
          for (let key of Object.keys(this.form)) {
            this.form[key] = this.row[key];
          }
        }
      },

      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.confirmSubmit();
          } else {
            return false;
          }
        });
      },

      async confirmSubmit() {
        let res;

        if (this.form.id) {
          res = await this.$http.post("/User/updateUserById", this.form);
        } else {
          res = await this.$http.post("/User/addUser", this.form);
        }

        if (res.code == 0) {
          this.$msg.success("操作成功");
          this.$emit("on-success");
        } else {
          this.$msg.error(res.msg);
        }
      },
    },

    created() {
      this.getData();
    },
  };
</script>

<style lang="less"></style>

<style lang="less" scoped>
  .data-form__footer {
    text-align: center;
  }
</style>
```
