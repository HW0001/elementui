<!--  -->
<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pagenum"
    :page-sizes="[5, 10, 15,20]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  ></el-pagination>
</template>

<script>
export default {
  name: "UserPagintion",
  props:{
      pagenum:{
          type:Number,
          default:0
      },
       pagesize:{
          type:Number,
          default:0 
      },
       total:{
          type:Number,
          default:0
      }
  },
  data() {
    return {};
  },
  methods:{
      handleSizeChange(num){
          this.$emit("update:pagesize",num) 
          this.$emit("pagechange")
      },
      handleCurrentChange(num){ 
          this.$emit("update:pagenum",num) 
          this.$emit("pagechange")
      }
  }
  ,
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>