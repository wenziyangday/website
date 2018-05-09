// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import util from './util/util';

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;
Vue.prototype.$util = util;

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
