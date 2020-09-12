<!--  -->
<template>
  <el-dialog title="添加用户" :visible="true" width='700px'>
    <el-form :model="user">
      <el-form-item label="用户名称" label-width="120px">
        <el-input v-model="user.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" label-width="120px" >
        <el-input v-model="user.password" show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" label-width="120px">
        <el-input v-model="user.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" label-width="120px">
        <el-input v-model="user.mobile" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="canal">取 消</el-button>
      <el-button type="primary" @click="addUser">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "AddUser",
  props: {
    isShowAddUser: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
    };
  },
  methods: {
    canal() {
      this.$emit("update:isShowAddUser", false);
    },
    async addUser(){
        const {data:result} = await  this.$axios.post("users",this.user) 
        if(result.meta.status!=201)
        {
            this.$emit("update:isShowAddUser", false);
            return this.$Message.error("添加用户失败")
        }
        this.$emit("update:isShowAddUser", false);
        this.$Message({
          message: '添加用户成功',
          type: 'success'
        }) 
        this.$emit("addUserSuccess");
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-input{
    width: 500px;
}
</style>