import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sidebarOnOff: true
};
const getters = {
  sidebarOnOff: state => !state.sidebarOnOff
};
const mutations = {

  //  控制侧边开关
  SET_SIDEBAR_ON_OFF: (state, sidebarOnOff) => {
    state.sidebarOnOff = sidebarOnOff;
  }

};
const actions = {};


export default new Vuex.Store({
  state, getters, mutations, actions
});
