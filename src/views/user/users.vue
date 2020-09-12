<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-input
          style="width:300px"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="query"
          @input="getUserList"
        ></el-input>
        <el-button type="primary"  @click="isShowAddUser=true">添加用户</el-button>
        <add-user @addUserSuccess="conputedPageAndRefUser" v-if="isShowAddUser" :isShowAddUser.sync="isShowAddUser"></add-user>
      </div>
      <div>
        <user-table :users="users" @refUserList="conputedPageAndRefUser"/>
        <user-pagintion
          @pagechange="conputedPageAndRefUser"
          :pagenum.sync="queryinfo.pagenum"
          :pagesize.sync="queryinfo.pagesize"
          :total.sync="queryinfo.total"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import UserTable from "./UserTable";
import UserPagintion from "./UserPagintion";
import AddUser from "./AddUser";

export default {
  name: "Users",
  data() {
    return {
      query: "",
      queryinfo: {
        pagenum: 1,
        pagesize: 10,
        total: 0,
      },
      users: [],
      isShowAddUser:false
    };
  },
  components: {
    UserTable,
    UserPagintion,
    AddUser,
  },
  methods: {
    async getUserList() {
      const { data: result } = await this.$axios.get("users", {
        params: {
          query: this.query,
          pagenum: this.queryinfo.pagenum,
          pagesize: this.queryinfo.pagesize,
        },
      });
      if (result.meta.status !== 200) return this.$Message("获取数据失败！");

      this.queryinfo.total = result.data.total;
      this.users = result.data.users;
    },
   async conputedPageAndRefUser(){ 
      if(this.users.length === 1 && this.queryinfo.pagenum>1)
      this.queryinfo.pagenum-- 
      this.getUserList()
    } 
  },
  created() {
    this.getUserList();
  },
};
</script>

<style lang="less" scoped>
.el-button {
  margin-left: 30px;
}
</style>>  
 