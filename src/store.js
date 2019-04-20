import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        total: 10,
        current: 1,
    },
    getters: {
        checkButtonTranslation(state) {
            const y = (state.current - 1) * 100;
            const offset = y / 10; // this works because the $aria is 10px in the sass
            return `translate(100%, calc(-${y}% - ${offset}px))`;
        },
        isActive: state => x => x < state.current,
    },
    mutations: {
        INCREMENT_TURN(state) {
            state.current++;
        },
    },
    actions: {
        checkTurn: context => {
            context.commit('INCREMENT_TURN');
        },
    },
});
