import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import("../views/login/Login.vue")
const Home = () => import("../views/home/home.vue")
const Users = () => import("../views/user/users")
const Wlecome = () => import("../views/home/wlecome.vue")
const Roles = () => import("../views/juris/Roles/Roles.vue")
const Rights = () => import("../views/juris/Rights/Rights.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [{
      path: "/users",
      component: Users
    },
    {
      path: "/welcome",
      component: Wlecome
    },
    {
      path:"/roles",
      component:Roles
    },
    {
      path:"/rights",
      component:Rights
    }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next()
  const token = sessionStorage.getItem('token')
  !token && next('/login')
  next()
})

export default router
