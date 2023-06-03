import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home-logado',
    component: function () {
      return import( '@/views/HomeLogado.vue')
    }
  },
  {
    path: '/planos',
    name: 'planos',
    component: function () {
      return import( '@/views/Planos.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import( '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
