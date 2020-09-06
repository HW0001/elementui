<!--  -->
<template> 
    <el-container class="home">
        <!-- 头部-->
      <el-header>
          <div class="home-header">
              <img src="../../assets/img/header.png" alt="">
              <span>电商后台管理项目</span>
          </div>
        <el-button type="warning" @click="signout">退出登录</el-button>
      </el-header>
       <!-- 左边导航及内容区-->
      <el-container>
        <el-aside>
            <left-aside></left-aside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container> 
</template>

<script>
import LeftAside from './left/Aside'
export default {
    components:{
        LeftAside
    },
  data() {
    return {};
  },
  methods: {
    signout() {
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
<style lang='less' scoped>
/* @import url(); 引入css类 */
.home{
    height: 100%;
    background-color: fff;
}
.el-header{
    display: flex;
    justify-content: space-between; 
    align-items: center;
    img{
        height: 50px;
    }
    span{
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
    }
   .home-header{
       display: flex;
       align-items: center;
   }  
}
</style>