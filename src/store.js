import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        nturn: 1,
    },
    getters: {
        checkButtonTranslation(state) {
            const y = (state.nturn - 1) * 100;
            const offset = y / 10; // this works because the $aria is 10px in the sass
            return `translate(100%, calc(-${y}% - ${offset}px))`;
        },
    },
    mutations: {
        INCREMENT_TURN(state) {
            state.nturn++;
        },
    },
    actions: {
        checkTurn: context => {
            context.commit('INCREMENT_TURN');
        },
    },
});
