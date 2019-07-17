import util from '../util/util';

let getters = {

    //  侧边栏树
    sideTree: (state) => {
        return util.treeNode('-2', state.sidebar).children;
    },

    //  侧边栏字典
    sideDict: (state) => {
        return util.enumToCN(state.sidebar, '_id', 'columnName');
    },

    //  面包屑字典
    breadcrumbDict: (state) => {
        let id = state.curRoute.name;
        let query = {};
        if (state.curRoute !== {}) {
            query = state.curRoute.query;
            if (query) {
                id = query._id;
            }
        }
        console.log(query);
        // console.log(state.curRoute);
        util.findPIds(id, state.sidebar);
        return util.pIds;
    },


};
export default getters;
