import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        total: 10,
        currentTurn: 1,
        colors: ['#2A68CD', '#2ACD76', '#EE9016', '#AC34CF', '#D71834', '#FFF800'],
    },
    getters: {
        checkButtonTranslation(state) {
            const y = (state.currentTurn - 1) * 100;
            const offset = y / 10; // this works because the $aria is 10px in the sass
            return `translate(100%, calc(-${y}% - ${offset}px))`;
        },
        isActive: state => x => x < state.currentTurn,
    },
    mutations: {
        INCREMENT_TURN(state) {
            state.currentTurn++;
        },
    },
    actions: {
        checkTurn: context => {
            context.commit('INCREMENT_TURN');
        },
    },
});
