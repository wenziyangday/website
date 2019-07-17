import request from "../util/request";

export function countColumn(obj) {
    return request({
        url: '/api/wen/countColumn',
        method: 'get',
        params: obj
    })
}

export function columnPost(obj) {
    return request({
        url: '/api/wen/columnPost',
        method: 'post',
        data: obj
    })
}

export function columnGet(obj) {
    return request({
        url: '/api/wen/columnGet',
        method: 'get',
        params: obj
    })
}

export function infoPost(obj) {
    return request({
        url: '/api/wen/infoPost',
        method: 'post',
        data: obj
    })
}

export function infoGet(obj) {
    return request({
        url: '/api/wen/getInfo',
        method: 'get',
        params: obj
    })
}

export function infoCount(obj) {
    return request({
        url: '/api/wen/countInfo',
        method: 'get',
        params: obj
    })
}

export function infoDelete(obj) {
    return request({
        url: '/api/wen/deleteInfo',
        method: 'post',
        data: obj
    })
}

export function infoUpdateState(obj) {
    return request({
        url: '/api/wen/updateState',
        method: 'post',
        data: obj
    })
}
