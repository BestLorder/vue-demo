<template>
  <mu-container>
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item
        label="用户名"
        help-text="帮助文字"
        prop="username"
        :rules="usernameRules"
      >
        <mu-text-field
          v-model="validateForm.username"
          prop="username"
        ></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field
          type="text"
          v-model="validateForm.password"
          prop="password"
        ></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox
          label="同意用户协议"
          v-model="validateForm.isAgree"
        ></mu-checkbox>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
    <Record ref="mychild" />
  </mu-container>
</template>
<script>
import Record from "../components/Record/Record";
export default {
  components: {
    Record,
  },
  data() {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: "必须填写用户名" },
        { validate: (val) => val.length >= 3, message: "用户名长度大于3" },
      ],
      passwordRules: [
        { validate: (val) => !!val, message: "必须填写密码" },
        {
          validate: (val) => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10",
        },
      ],
      argeeRules: [{ validate: (val) => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false,
      },
      id: "insurance" + new Date().getTime(),
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((result) => {
        console.log("form valid: ", result);
        this.$refs.mychild.submit();
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false,
      };
    },
  },
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
