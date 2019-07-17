let mutations = {
    //  设置token
    SET_TOKEN: (state, token) => {
        state.token = token;
    },

    //  删除token
    REMOVE_TOKEN: (state) => {
        state.token = '';
    },

    //  侧边栏展开 收起
    CHANGE_ON_OFFSIDE: (state) => {
        state.onOffSide = !state.onOffSide;
    },

    //  侧边栏数据
    SET_SIDEBAR: (state, obj) => {
        state.sidebar = obj;
    },

    //  当前路由
    SET_CUR_ROUTE: (state, obj) => {
        state.curRoute = obj;
    }

};
export default mutations;
