import Vue from 'vue';
import Router from 'vue-router';
import Home from '../front/home';
import DomeDefault from '../front/homeDefault/homeDefault';
import Tags from '../front/homeDefault/tags';
import Column from '../front/layout/column';
import HomeOne from '../front/homeOne';
import HomeTwo from '../front/homeTwo';
import Detail from '../front/layout/detail';
import Admin from '../admin/admin';
import Default from '../admin/default/default';
import BasicConfig from '../admin/layout/basicConfig';
import AddColumn from '../admin/layout/addColumn';

import Error from '../admin/404/404';
import Login from '../login/login';

import HelloWorld from '../components/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
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
          path: '/tags/:name',
          name: 'tags',
          components: {
            home: Tags
          }
        },
        {
          path: '/column/:name',
          name: 'column',
          components: {
            home: Column
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
          meta: {title: '后端首页', icon: '', show: false},
          components: {
            admin: Default
          }
        },
        {
          path: '/basicConfig',
          name: 'basicConfig',
          meta: {title: '基本设置', icon: ''},
          components: {
            admin: BasicConfig
          }
        },
        {
          path: '/addColumn',
          name: 'addColumn',
          meta: {title: '栏目管理', icon: ''},
          components: {
            admin: AddColumn
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }
  ]
})
