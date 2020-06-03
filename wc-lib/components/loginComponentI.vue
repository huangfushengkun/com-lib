<template>
  <section class="login-item-container">
    <h1>{{ conf.title }}</h1>
    <div class="login-item-content">
      <!-- <img src="../assets/images/logIn_bg.087b95b.png" width="100%" />     -->
      <el-form :model="source" ref="loginForm" :rules="conf.rules">
        <el-form-item prop="account">
          <!-- <img src="../assets/images/user.png"/> -->
          <el-select
            :placeholder="conf.placeholder[0]"
            v-model="source.account"
          >
            <el-option
              v-for="(item, key) in conf.role"
              :key="key"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="checkPass">
          <!-- <img src="../assets/images/pwd.png"/> -->
          <el-input
            type="password"
            auto-complete="off"
            :placeholder="conf.placeholder[1]"
            v-model="source.checkPass"
          >
          </el-input>
        </el-form-item>
        <el-button type="primary" :loading="loading" @click="fLoginBtnClick"
          >登录</el-button
        >
      </el-form>
    </div>
  </section>
</template>
<script>
export default {
  name: "loginComponentI",
  data() {
    return {
      loading: false
    };
  },
  props: ["conf", "source", "loginBtnClick"],
  methods: {
    fLoginBtnClick: function() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          this.loginBtnClick();
        }
      });
    }
  }
};
</script>
<style lang="scss">
.login-item-container {
  .el-input__inner {
    background-color: transparent;
    border: none;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    color: #326b97;
  }
  .el-input {
    background-color: #0c3161;
    color: #326b97;
    width: 350px;
    border: 1px solid #0d568b;
    padding-left: 32px;
    box-sizing: border-box;
    border-radius: 4px;
  }
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: rgba(1, 143, 252, 0.3);
}
.el-select-dropdown__item.selected {
  color: #409eff;
  font-weight: 700;
}
.el-select-dropdown__item {
  color: #66ccff;
}
.el-select-dropdown {
  position: absolute;
  border: 1px solid #0b2342;
  border-radius: 4px;
  background-color: #0c3059;
  color: #66ccff;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: #0c3059;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #0b2342;
}
</style>
<style lang="scss" scoped>
.login-item-container {
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #68cdff;
    letter-spacing: 0.5rem;
    text-align: center;
    margin-bottom: 30px;
  }
  .login-item-content {
    position: relative;
  }
  .el-form {
    width: 350px;
    position: absolute;
    margin: auto;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
  .el-form-item {
    margin-top: 40px;
  }
  .el-form-item__content {
    img {
      position: absolute;
      z-index: 2;
      left: 16px;
      top: 0px;
      bottom: 0px;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
  .el-select {
    width: 100%;
  }
  .el-button--primary {
    background: #3578a7;
    color: #66cefe;
    border: 1px solid #0d568b;
    width: 100%;
    letter-spacing: 0.5rem;
    padding: 12px 0px;
    margin-top: 20px;
  }
}
</style>
