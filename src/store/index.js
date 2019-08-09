import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

    const state={
        showFooter: true,
        changebleNum:0,
        navBarNum:0
    };
    const store = new Vuex.Store({
        state
    });
 
export default store;