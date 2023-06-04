import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: function () {
      return import( '@/views/HomeView.vue')
    }
  },
  {
    path: '/home',
    name: 'home-logado',
    component: function () {
      return import( '@/views/HomeLogado.vue')
    }
  },
  {
    path: '/cadastro/plano/:cod',
    name: 'cadastro',
    component: function () {
      return import( '@/views/Cadastro.vue')
    }
  },
  {
    path: '/planos',
    name: 'planos',
    component: function () {
      return import( '@/views/Planos.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
