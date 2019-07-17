import request from "../util/request";

export function uploadOss(obj) {
    return request({
        url: '/api/wen/createBaseInfo',
        method: 'post',
        data: obj
    })
}

export function fetchBaseInfo(obj) {
    return request({
        url: '/api/wen/fetchBaseInfo',
        method: 'get',
        params: obj
    })
}

