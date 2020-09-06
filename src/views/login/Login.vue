<template>
  <div class="login">
    <div class="div-img">
      <img src="../../assets/logo.png" alt />
    </div>
    <el-form ref="form" :model="form" class="long-form" :rules="loginRules">
      <el-form-item prop="username">
        <el-input v-model="form.username" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" show-password prefix-icon="el-icon-goods"></el-input>
      </el-form-item>
      <div class="btns">
        <el-button type="primary" @click="submit">确认</el-button>
        <el-button type="info" @click="reset">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "admin",
        password: "123456",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate(async valid=>{
          if(!valid) return
        // this.$axios.post("login",this.form).then(result=>console.log(result))
        const {data:re} = await this.$axios.post("login",this.form);  
        if(re.meta.status != 200) return this.$message.error(re.meta.msg) 
        sessionStorage.setItem('token',re.data.token)
        this.$router.replace("/home")
      })
    },
    reset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang='less' scoped>
.login {
  width: 450px;
  height: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  .div-img {
    width: 100px;
    height: 90px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: #fff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
.long-form {
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>