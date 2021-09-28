<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="loginContainer">
      <h3 class="loginTitle">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入用户名" auto-complete="false" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" auto-complete="false" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width: 250px;margin-right: 5px">

        </el-input>
        <img :src="captchaUrl" @click="updateCaptcha">

      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" @click="submitLogin" style="width: 100%">登录</el-button>

    </el-form>
  </div>
</template>

<script>


export default {
  name: 'Login',
  data() {
    return {
      captchaUrl: '/oos/captcha?time='+new Date(),
      loginForm: {
        username: 'admin',
        password: '123',
        code: '',
      },
      checked: true,
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur',
        }]
      }
    }
  }
  ,
  methods: {
    updateCaptcha(){
      this.captchaUrl = 'oos/captcha?time='+new Date();
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.postRequest('/oos/login',this.loginForm).then(resp=>{ // eslint-disable-line no-unused-vars
            alert("提交成功")

          })
          // sessionStorage.setItem('isLogin', 'true');
          // this.$store.dispatch("asynUpdateUser", {name: this.form.name})
          // this.$router.push({name: 'Main', params: {name: this.form.name}});
        } else {
          this.$message.error('请输入所有字段！！');
          return false;
        }
      });
    },
  }
}
</script>

<style>
.loginContainer {
  width: 350px;
  margin: 180px auto;
  border: 1px solid #DCDEF6;
  padding: 20px; /*内边距*/
  border-radius: 5px;
  box-shadow: 0 0 30px #DCDEF6;
}

.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}

.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}

.el-form-item__content{
  display: flex;
  align-items: center;
}
</style>
