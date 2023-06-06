import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'login-view',
    component: function () {
      return import('@/views/Login.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('@/views/Login.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import('@/views/HomeLogado.vue')
    }
  },
  {
    path: '/cadastro/plano/:cod',
    name: 'cadastro',
    component: function () {
      return import('@/views/Cadastro.vue')
    }
  },
  {
    path: '/planos',
    name: 'planos',
    component: function () {
      return import('@/views/Planos.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'home' && !localStorage.getItem('autenticad')) {
    next({ name: 'login' })
  }
  else {
    next()
  }
})

export default router
