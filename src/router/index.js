import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = ()=>import("../views/login/Login.vue")
const Home = ()=>import("../views/home/home.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },    
  {
    path:"/login",
    component:Login
  },
  {
    path:"/home",
    component:Home
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to,from,next)=>{  
  if(to.path==="/login") return next()
 const token = sessionStorage.getItem('token') 
 !token && next('/login')
 next()
})

export default router