<!--  -->
<template> 
    <el-container class="home">
        <!-- 头部-->
      <el-header>
          <div class="home-header">
              <img src="../../assets/img/header.png" alt="">
              <span>电商后台管理项目</span>
          </div>
        <el-button type="info" icon="el-icon-close" size="mini" @click="issignout=!issignout">退出登录</el-button>
        <sign-out  v-if="issignout" :issignout.sync="issignout"></sign-out>
      </el-header>
       <!-- 左边导航及内容区-->
      <el-container>
        <el-aside  width="220px">
            <left-aside></left-aside>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container> 
</template>

<script>
import LeftAside from './left/Aside'
import SignOut from "./SignOut"
export default {
    components:{
        LeftAside,
        SignOut
    },
  data() {
    return {
      issignout:false
    };
  },
  methods: { 
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