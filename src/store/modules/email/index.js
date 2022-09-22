import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import initialState from './initialState';

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state: initialState()
}