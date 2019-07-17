// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';
import axios from 'axios';

//  element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//  icon图标
import './font/iconfont.css';
import 'animate.css';

//  图表工具
import echarts from 'echarts';
import 'echarts-wordcloud/dist/echarts-wordcloud.min';
import 'echarts/theme/macarons';

//  富文本编辑器
import VueKindEditor from 'vue-kindeditor';
import 'kindeditor/kindeditor-all-min.js';
import 'kindeditor/themes/default/default.css';

//  工具方法
import util from './util/util';

//  接口调用
import * as api from './api/index';

//  枚举类
import enums from './util/enumClass';

//  权限文件
import './router/permission';


Vue.use(ElementUI);
Vue.use(VueKindEditor);


//  全局函数使用
Vue.prototype.$echarts = echarts;
Vue.prototype.$util = util;
Vue.prototype.$api = api;
Vue.prototype.$enums = enums;

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
