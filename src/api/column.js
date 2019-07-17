//  栏目相关

import request from "../util/request";

function fetch(obj) {
    return request({
        url: '/api/api/user/fetch-user-info.json',
        method: 'get',
        params: obj
    })
}

export {
    fetch
}

