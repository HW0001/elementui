<!--  -->
<template>
  <div>
    <el-table :data="rights" border style="width: 100%">
      <el-table-column prop="authName" label="权限名称"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column label="权限等级">
        <template slot-scope="scope">
         <el-button :type="btntype[scope.row.level]" plain disabled>第{{btntxt[scope.row.level]}}级</el-button>
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
    :total="allrights.length"
  ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "RightsTable",
  data() {
    return {
      rights: [],
      allrights: [],
      pageinfo:{
          pagesize:10,
          pagenum:1
      },
      btntype:[
          "primary",
          "success",
          "warning"
      ] ,
      btntxt:[
          "一",
          "二",
          "三"
      ]
    };
  },
  methods: {
    async getRightsList() {
      const { data: result } = await this.$axios.get("rights/list");
      if (result.meta.status != 200)
        return this.$Message.error("获取权限列表数据失败！");
      this.allrights = result.data;
      this.getPaginRights()
    },
    getPaginRights(){
        this.rights=[]
        let starindex = (this.pageinfo.pagenum-1) * this.pageinfo.pagesize 
        let endindex = this.pageinfo.pagenum * this.pageinfo.pagesize - 1
        if(endindex>=this.allrights.length)endindex=this.allrights.length-1
        for(let i=starindex ; i<= endindex ; i++)
        {
           this.rights.push(this.allrights[i])
        }
    },
    handleSizeChange(size){
        this.pageinfo.pagesize=size
        this.getPaginRights() 
    },
    handleCurrentChange(pagenum){
        this.pageinfo.pagenum=pagenum
        this.getPaginRights() 
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getRightsList();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>