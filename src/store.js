import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
    total: 10,
    current: 1,
    colors: ['#2A68CD', '#2ACD76', '#EE9016', '#AC34CF', '#D71834', '#FFF800'],
    secret: new Set(),
    currentTurn: [-1, -1, -1, -1],
};

export const getters = {
    checkButtonTranslation(state) {
        const y = (state.current - 1) * 100;
        const offset = y / 10; // this works because the $aria is 10px in the sass
        return `translate(100%, calc(-${y}% - ${offset}px))`;
    },
    isActive: state => x => x < state.current,
};

export const mutations = {
    GENERATE_SECRET(state) {
        let s = new Set();
        while (s.size !== 4) s.add(Math.round(Math.random() * (state.colors.length - 1)));
        state.secret = s;
    },
    INCREMENT_TURN(state) {
        state.currentTurn = [-1, -1, -1, -1];
        state.current++;
    },
    UPDATE_CURRENT_TURN(state, payload) {
        state.currentTurn.splice(payload.index, 1, payload.colorIndex);
    },
};

export const actions = {
    generateSecret: context => {
        context.commit('GENERATE_SECRET');
    },
    checkTurn: context => {
        context.commit('INCREMENT_TURN');
    },
    updateCurrentTurn: (context, payload) => {
        context.commit('UPDATE_CURRENT_TURN', payload);
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
