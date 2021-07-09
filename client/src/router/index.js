import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterComplaint from '../views/RegisterComplaint';
import CreateAccount from '../views/CreateAccount';
import Admin from '../views/Admin';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register-complaint',
    name: 'register-complaint',
    component: RegisterComplaint,
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: CreateAccount,
    
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin ,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
