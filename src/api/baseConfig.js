import request from "../util/request";

export function createBaseInfo(obj) {
    return request({
        url: '/api/api/user/sign-up.json',
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

export function uploadPic(file) {
    const data = new FormData();
    data.append('file', file);
    return request({
        url: '/api/api/common/upload-file.json',
        method: 'post',
        data: data,
    })
}

