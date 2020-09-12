<!--  -->
<template>
  <el-dialog title="修改用户" :visible="true" width="700px">
    <el-form :model="user">
      <el-form-item label="用户名称" label-width="120px">
        <el-input v-model="user.username" autocomplete="off" :disabled="true"></el-input>
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
      <el-button type="primary" @click="sumInfo">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "EditUser",
  props: {
    id: { type: Number, default: 0 },
    isShowEdit: { type: Boolean, default: true },
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async getUserInfo() {
      const { data: result } = await this.$axios.get(`users/${this.id}`);
      if (result.meta.status != 200) {
        this.canal();
        this.$Message.error("读取账号信息失败！");
      }
      this.user = result.data;
    },
    canal() {
      this.$emit("update:isshowEdit", false);
    },
    async sumInfo() {
      const { data: result } = await this.$axios.put(`users/${this.id}`, {
        email: this.user.email,
        mobile: this.user.mobile,
      });
      this.canal();
      if (result.meta.status != 200) this.$Message.error("更新失败！");
      else {
        this.$Message.success("更新成功！");
        this.$emit("updateInfo")
      }
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getUserInfo();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>