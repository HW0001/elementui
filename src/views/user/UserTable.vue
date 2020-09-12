<!--  -->
<template>
  <div>
    <el-table :data="users" border style="width: 100%">
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="mobile" label="联系电话"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="role_name" label="角色"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="showUpdateDlg(scope.row.id)"></el-button>
          <el-button type="primary" icon="el-icon-delete" @click="showDelDlg(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--删除用户-->
    <el-dialog title="提示" :visible="isdelete" width="30%">
      <span>是否删除该用户</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isdelete=false">取 消</el-button>
        <el-button type="primary" @click="deleteUser">确 定</el-button>
      </span>
    </el-dialog>
  <edit-user v-if="isShowEdit" :id="currentID" :isshowEdit.sync="isShowEdit" @updateInfo="refUserList"></edit-user>
  </div>
</template> 
<script>
import EditUser from "./EditUser"
export default {
  name: "UserTable",
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isdelete: false,
      isShowEdit:false,
      currentID: 0,
    };
  },
  methods: {
    showUpdateDlg(id) {
       this.isShowEdit=true
       this.currentID=id
    },
    showDelDlg(id) {
      this.isdelete = true;
      this.currentID = id;
    },
    async deleteUser() {  
      const { data: result } = await this.$axios.delete(`users/${this.currentID}`);
      this.isdelete = false; 
      if (result.meta.status !== 200) return this.$Message.error("删除失败！");
      else this.$Message.success("删除成功！");
      this.refUserList()
    },
    refUserList(){
      this.$emit("refUserList")
    }
  },
  components:{
    EditUser
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