<!--  -->
<template> 
      <el-menu
        :default-active="this.activeindex"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#409EFF" 
        :router="true"
        :unique-opened="true"
        class="left-menu"
      >
        <el-submenu :index="item.id + ''" v-for="item in menudatalist" :key="item.id">
          <template slot="title">
            <i class="el-icon-d-caret"></i>
            <span slot="title">{{item.authName}}</span>
          </template>
          <el-menu-item
            :index="'/'+childitem.path"
            v-for="childitem in item.children"
            :key="childitem.id">
            <i class="el-icon-menu"></i>
            <span slot="title">{{childitem.authName}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu> 
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      menudatalist: [],
    };
  },
  computed:{
      activeindex(){ 
          return this.$route.path
      }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    async getMenuDateList() {
      const { data: result } = await this.$axios.get("menus");
      if (result.meta.status === 200) this.menudatalist = result.data; 
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getMenuDateList();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
.left-menu{
    width: 200px;
    height: 100%; 
    width: 200px; 
}
</style>