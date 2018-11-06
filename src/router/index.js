import Vue from 'vue';
import Router from 'vue-router';
import Home from '../front/home.vue';
import DomeDefault from '../front/homeDefault/homeDefault.vue';
import Tags from '../front/homeDefault/tags.vue';
import Column from '../front/layout/column.vue';
import HomeOne from '../front/homeOne.vue';
import HomeTwo from '../front/homeTwo.vue';
import Detail from '../front/layout/detail.vue';
import Admin from '../admin/admin.vue';
import Default from '../admin/default/default.vue';
import BasicConfig from '../admin/layout/basicConfig.vue';
import ColumnManage from '../admin/layout/columnManage.vue';
import AddColumn from '../admin/layout/addColumn.vue';
import AddInfo from '../admin/layout/addInfo.vue';
import BlockFun from '../admin/blockFun/blockFun.vue';
import Login from '../login/login.vue';

import HelloWorld from '../components/HelloWorld.vue';
import CitySwitch from '../components/citySwitch.vue';
import IdPidD from '../components/idPidD.vue';


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
                    path: '/admin',
                    meta: {title: '首页', icon: '', show: false},
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
                    path: '/columnManage',
                    name: 'columnManage',
                    meta: {title: '栏目管理', icon: ''},
                    components: {
                        admin: ColumnManage
                    }
                },
                {
                    path: '/addColumn',
                    name: 'addColumn',
                    meta: {title: '新增栏目', icon: ''},
                    components: {
                        admin: AddColumn
                    }
                },
                {
                    path: '/addInfo',
                    name: 'addInfo',
                    meta: {title: '添加信息', icon: ''},
                    components: {
                        admin: AddInfo
                    }
                },
                {
                    path: '/blockFun',
                    name: 'blockFun',
                    meta: {title: '功能块', icon: ''},
                    components: {
                        admin: BlockFun
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
        },
        {
            path: '/citySwitch',
            name: 'citySwitch',
            component: CitySwitch
        },
        {
            path: '/idPidD',
            name: 'idPidD',
            component: IdPidD
        }
    ]
})
