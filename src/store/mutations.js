let mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    REMOVE_TOKEN: (state) => {
        state.token = '';
    },
    CHANGE_ON_OFFSIDE: (state) => {
        state.onOffSide = !state.onOffSide;
    }
};
export default mutations;
