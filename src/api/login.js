import request from "../util/request";

/**
 *
 * obj = {userName, password}
 *
 * */

export function loginFormByName(obj) {
    return request({
        url: '/api/api/user/sign-in.json',
        method: 'post',
        data: obj
    })
}

