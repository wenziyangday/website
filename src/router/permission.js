//  权限文件 todo 1.白名单， 2.404页面跳转

import router from "./index";
import store from "../store/store";

router.beforeEach((to, from, next) => {
    if (store.state.token) {
        //  todo 权限判断
        if (to.path === '/login') {
            next('/admin');
        } else {
            next();
        }
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next('/login');
        }
    }
});

router.afterEach((to, from) => {
});
