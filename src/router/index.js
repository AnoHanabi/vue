import Vue from 'vue'
import Router from 'vue-router'
import goodsList from '../views/goodsList'
import cart from '../views/cart'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
