import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartPage.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetailPage.vue')
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: () => import('../views/TransactionPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === "Login" ) {
    next("/")
  } else if (localStorage.access_token && to.name === "Register") {
    next("/")
  } else if (!localStorage.access_token && to.name === "Cart") {
    next("/")
  } else {
    next()
  }
})

export default router
