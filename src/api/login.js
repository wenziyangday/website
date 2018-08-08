import request from "../util/request";

/**
 *
 * obj = {userName, password}
 *
 * */

export function loginFormByName(obj) {
    return request({
        url: 'api/login',
        method: 'post',
        data: obj
    })
}

