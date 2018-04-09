import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sidebarOnOff: true
};
const getters = {
  sidebarOnOff: state => !state.sidebarOnOff
};
const mutations = {};
const actions = {};


export default new Vuex.Store({
  state, getters, mutations, actions
});
