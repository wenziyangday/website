import axios from "axios";
import {Message} from "element-ui";
import utils from 'util';

const service = axios.create({
    // baseURL: 'https://www.api.newwen.xyz/',
    baseURL: process.env.BABEL_ENV,
    timeout: 500000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
});

//  拦截入参

service.interceptors.request.use(config => {
    //  统一拦截入参
    // console.log(config, 'asdfas');
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});

//  拦截出参

service.interceptors.response.use(res => {
    /*if (res.request.responseURL.indexOf('get') > -1) {
        if (res.data.code === 200) {
            Message.success(res.data.message);
        } else {
            Message.error(res.data.message);
        }
    }*/

    return res.data;
}, error => {
    Message({
        type: 'error',
        duration: 5 * 1000,
        message: error.message
    });
    return Promise.reject(error);
});

export default service;
