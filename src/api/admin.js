import request from "../util/request";


export function columnPost(obj) {
    return request({
        url: '/api/api/columnPost',
        method: 'post',
        data: obj
    })
}


export function columnGet(obj) {
    return request({
        url: '/api/api/columnGet',
        method: 'get',
        params: obj
    })
}

