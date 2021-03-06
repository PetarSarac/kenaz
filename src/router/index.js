import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render(c) {return c('router-view')}
    },
    children: 
    [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: 'categories/:category',
        name: 'categories',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
      },
      {
        path: 'single-news',
        name: 'single-news',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/SingleNews.vue')
      },
      /*{ Add it later
        path :'*',
        redirect: `/${i18n.locale}`,
        component: Home
      }*/
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
