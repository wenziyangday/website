import Vue from 'vue';
import Router from 'vue-router';
import Home from '../front/home';
import DomeDefault from '../front/homeDefault/homeDefault'
import HomeOne from '../front/homeOne';
import HomeTwo from '../front/homeTwo';
import Detail from '../front/layout/detail';
import Admin from '../admin/admin';
import Default from '../admin/default/default';
import Error from '../admin/404/404';
import Login from '../login/login';
Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/homeDefault',
      children: [
        {
          path: '/homeDefault',
          alias: '/home',
          components: {
            home: DomeDefault
          }
        },
        {
          path: '/homeOne',
          name: 'HomeOne',
          components: {
            home: HomeOne
          }
        },
        {
          path: '/homeTwo',
          name: 'HomeTwo',
          components: {
            home: HomeTwo
          }
        },
        {
          path: '/detail/:id',
          name: 'detail',
          components: {
            home: Detail
          }
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: '/default',
      meta: {
        title: '栏目页',
        requireAuth: true
      },
      children: [
        {
          path: '/default',
          alias: '/admin',
          components: {
            admin: Default
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
