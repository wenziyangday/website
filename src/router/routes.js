//  路由文件
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/front/home.vue'),
        redirect: '/home',
        children: [
            {
                path: '/homeDefault',
                alias: '/home',
                components: {
                    home: () => import('@/front/homeDefault/homeDefault.vue')
                }
            },
            {
                path: '/homeOne',
                name: 'HomeOne',
                components: {
                    home: () => import('@/front/homeOne.vue')
                }
            },
            {
                path: '/homeTwo',
                name: 'HomeTwo',
                components: {
                    home: () => import('@/front/homeTwo.vue')
                }
            },
            {
                path: '/tags/:name',
                name: 'tags',
                components: {
                    home: () => import('@/front/homeDefault/tags.vue')
                }
            },
            {
                path: '/column/:name',
                name: 'column',
                components: {
                    home: () => import('@/front/layout/column.vue')
                }
            },
            {
                path: '/detail/:id',
                name: 'detail',
                components: {
                    home: () => import('@/front/layout/detail.vue')
                }
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/admin/admin.vue'),
        redirect: '/default',
        meta: {
            title: '栏目页',
            requireAuth: true
        },
        children: [
            {
                path: '/admin',
                meta: {title: '首页', icon: 'icon-shouye'},
                components: {
                    admin: () => import('@/admin/default/default.vue')
                }
            },
            {
                path: '/basicConfig',
                name: 'basicConfig',
                meta: {title: '基本设置', icon: 'icon-jichushezhi'},
                components: {
                    admin: () => import('@/admin/layout/basicConfig.vue')
                }
            },
            {
                path: '/columnManage',
                name: 'columnManage',
                meta: {title: '栏目管理', icon: 'icon-lanmuguanli'},
                components: {
                    admin: () => import('@/admin/layout/columnManage.vue')
                }
            },
            {
                path: '/goodsManage',
                name: 'goodsManage',
                meta: {title: '商品管理', icon: 'icon-shangpinguanli'},
                components: {
                    admin: () => import('@/admin/layout/goodsManage.vue')
                }
            },
            {
                path: '/adsManage',
                name: 'adsManage',
                meta: {title: '广告管理', icon: 'icon-guanggaoguanli'},
                components: {
                    admin: () => import('@/admin/layout/adsManage.vue')
                }
            },
            {
                path: '/ordersManage',
                name: 'ordersManage',
                meta: {title: '订单管理', icon: 'icon-dingdanguanli'},
                components: {
                    admin: () => import('@/admin/layout/ordersManage.vue')
                }
            },
            {
                path: '/supportFun',
                name: 'supportFun',
                meta: {title: '辅助功能', icon: 'icon-fuzhugongneng'},
                components: {
                    admin: () => import('@/admin/layout/supportFun.vue')
                }
            },
            {
                path: '/adjustColumn',
                name: 'adjustColumn',
                meta: {title: '栏目调整', icon: ''},
                components: {
                    admin: () => import('@/admin/layout/adjustColumn.vue')
                }
            },
            {
                path: '/tagsManage',
                name: 'tagsManage',
                meta: {title: '标签管理', icon: ''},
                components: {
                    admin: () => import('@/admin/layout/adjustColumn.vue')
                }
            },
            {
                path: '/rightsManage',
                name: 'rightsManage',
                meta: {title: '权限管理', icon: 'icon-quanxianguanli'},
                components: {
                    admin: () => import('@/admin/layout/rightsManage.vue')
                }
            },
            {
                path: '/addColumn',
                name: 'addColumn',
                meta: {title: '新增栏目', icon: ''},
                components: {
                    admin: () => import('@/admin/layout/addColumn.vue')
                }
            },
            {
                path: '/addInfo',
                name: 'addInfo',
                meta: {title: '添加信息', icon: ''},
                components: {
                    admin: () => import('@/admin/layout/addInfo.vue')
                }
            },
            {
                path: '/addGood',
                name: 'addGood',
                meta: {title: '添加商品', icon: ''},
                components: {
                    admin: () => import('@/admin/layout/addGood.vue')
                }
            },
            {
                path: '/blockFun',
                name: 'blockFun',
                meta: {title: '功能模块', icon: 'icon-gongneng'},
                components: {
                    admin: () => import('@/admin/blockFun/blockFun.vue')
                }
            }, {
                path: '/message',
                name: 'message',
                meta: {title: '留言信息', icon: 'icon-gongneng'},
                components: {
                    admin: () => import('@/admin/layout/message.vue')
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/login/login.vue')
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/citySwitch',
        name: 'citySwitch',
        component: () => import('@/components/citySwitch.vue')
    },
    {
        path: '/idPidD',
        name: 'idPidD',
        component: () => import('@/components/idPidD.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/admin/404/404.vue')
    },
];

export default routes;
