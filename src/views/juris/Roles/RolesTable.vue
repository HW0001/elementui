<!--  -->
<template>
  <div>
    <el-table :data="roles" border style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-row v-for="(item,index) in scope.row.children" :key="index" class="first-row" >
            <el-col :span="6">
              <el-tag closable>{{item.authName}}</el-tag>
              <i class="el-icon-caret-right"></i>
            </el-col>
            <el-col :span="18">
              <el-row v-for="secondtag in item.children" :key="secondtag.id">
                <el-col  :span="6">
                  <el-tag closable>{{secondtag.authName}}</el-tag>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <el-col :span="18"> 
                    <el-col :span="24">
                      <el-tag v-for="threeitem in secondtag.children" :key="threeitem.id" closable>{{threeitem.authName}}</el-tag> 
                    </el-col> 
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column prop="roleName" label="角色名字"></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
      <el-table-column label="权限等级">
        <template slot-scope="scope">
          <el-button>{{scope.row}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageinfo.pagenum"
      :page-sizes="[5, 10, 15,20]"
      :page-size="pageinfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="allRoles.length"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "RolesTable",
  data() {
    return {
      roles: [],
      allRoles: [],
      pageinfo: {
        pagesize: 10,
        pagenum: 1,
      },
    };
  },
  methods: {
    async getRolesList() {
      const { data: result } = await this.$axios.get("roles"); 
      if (result.meta.status != 200)
        return this.$Message.error("获取权限列表数据失败！");
      this.allRoles = result.data;
      this.getPaginRoles();
    },
    getPaginRoles() {
      this.roles = [];
      let starindex = (this.pageinfo.pagenum - 1) * this.pageinfo.pagesize;
      let endindex = this.pageinfo.pagenum * this.pageinfo.pagesize - 1;
      if (endindex >= this.allRoles.length) endindex = this.allRoles.length - 1;
      for (let i = starindex; i <= endindex; i++) {
        this.roles.push(this.allRoles[i]);
      }
    },
    handleSizeChange(size) {
      this.pageinfo.pagesize = size;
      this.getPaginRoles();
    },
    handleCurrentChange(pagenum) {
      this.pageinfo.pagenum = pagenum;
      this.getPaginRoles();
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getRolesList();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */ 
 .el-tag{
   margin-left: 10px;
 }
</style>