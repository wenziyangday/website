//  todo 之后考虑下是否引入白名单的概念

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
