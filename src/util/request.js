import axios from "axios";
import {Message} from "element-ui";
import store from "../store/store";
import {getToken} from "../util/auth";

const service = axios.create({
    baseURL: process.env.BABEL_ENV,
    timeout: 5000
});

//  拦截入参

service.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers['x-token'] = getToken();
    }

    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});

//  拦截出参

service.interceptors.response.use(res => {
    return res;
}, error => {
    console.log(error);
    Message({
        type: 'error',
        duration: 5 * 1000,
        message: error.message
    });
    return Promise.reject(error);
});

export default service;
