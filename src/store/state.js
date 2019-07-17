import {getToken} from "../util/auth";


let state = {
    //  token 请求头
    token: getToken('my-cookies') || '',

    //  侧边栏控制器
    onOffSide: false,

    // 侧边栏
    sidebar: [],

    //  当前 路由
    curRoute: '',
};

export default state;
