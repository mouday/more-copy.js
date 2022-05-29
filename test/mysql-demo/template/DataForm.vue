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
      <el-form-item
        label="{{item.comment or item.name}}"
        prop="{{item.name}}"
      >
        <el-input
          type="text"
          v-model="form.{{item.name}}"
        ></el-input>
      </el-form-item>
      {% endfor %}

      <el-form-item
        label="显示/隐藏"
        prop="status"
      >
        <mo-switch v-model="form.status"></mo-switch>
      </el-form-item>
    </el-form>

    <div class="data-form__footer">
      <el-button @click="$emit('on-cancel')">取 消</el-button>
      <el-button
        type="primary"
        @click="handleSubmit"
      >确 定</el-button>
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

<style lang="less">
</style>

<style lang="less" scoped>
.data-form__footer {
  text-align: center;
}
</style>
