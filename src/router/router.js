import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import Events from '../views/Event.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/event',
      name: 'event',
      component: Events
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
