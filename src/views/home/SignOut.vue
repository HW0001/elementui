<!--  -->
<template>
  <el-dialog title="提示" :visible="true" width="30%" :before-close="handleClose">
    <span>是否退出登录</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="canal">取 消</el-button>
      <el-button type="primary" @click="enter">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "SignOut",
  props: {
    issignout: Boolean,
    default: true,
  },
  data() {
    return {};
  },
  methods: {
    canal() {
      this.$emit("update:issignout", false);
    },
    handleClose() {},
    enter() {
      this.$emit("update:issignout", false);
      sessionStorage.removeItem("token");
      this.$router.replace("/login");
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>