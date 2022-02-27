import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Perros from '../views/Perros.vue'
import Gatos from '../views/Gatos.vue'
import Loros from '../views/Loros.vue'
import Conejos from '../views/Conejos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path:'/perros',
    name:'Perros',
    component:Perros
  },
  {
    path:'/gatos',
    name:'Gatos',
    component:Gatos
  },
  {
    path:'/loros',
    name:'Loros',
    component:Loros
  },
  {
    path:'/conejos',
    name:'Conejos',
    component:Conejos
  },
]

const router = new VueRouter({
  routes
})

export default router
