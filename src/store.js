import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
    total: 10,
    current: 1,
    colors: ['#2A68CD', '#2ACD76', '#EE9016', '#AC34CF', '#D71834', '#FFF800'],
    secret: new Set(),
    currentTurn: [-1, -1, -1, -1],
    won: false,
    lost: false,
};

export const getters = {
    checkButtonTranslation(state) {
        const y = (state.current - 1) * 100;
        const offset = y / 10; // this works because $aria is 10px in the sass
        return `translate(100%, calc(-${y}% - ${offset}px))`;
    },
    isActive: state => x => x < state.current,
    isCurrentTurnValid(state) {
        const missing = state.currentTurn.filter(x => x === -1);
        if (missing.length > 0) return false;

        return state.currentTurn.length === new Set(state.currentTurn).size;
    },
    secretAsArray: state => [...state.secret],
};

export const mutations = {
    GENERATE_SECRET(state, payload) {
        state.secret = payload;
    },
    RESET_TURN(state) {
        state.won = false;
        state.lost = false;
        state.currentTurn = [-1, -1, -1, -1];
    },
    INCREMENT_TURN(state) {
        state.current++;
    },
    UPDATE_CURRENT_TURN(state, payload) {
        state.currentTurn.splice(payload.index, 1, payload.colorIndex);
    },
    WON(state) {
        state.won = true;
    },
    LOST(state) {
        state.lost = true;
    },
};

export const actions = {
    generateSecret: context => {
        let s = new Set();
        while (s.size !== 4)
            s.add(Math.round(Math.random() * (context.state.colors.length - 1)));
        context.commit('GENERATE_SECRET', s);
    },
    checkTurn: context => {
        const secretArray = [...context.state.secret];
        const win = context.state.currentTurn.findIndex((x, i) => x !== secretArray[i]);

        context.commit('RESET_TURN');
        if (win === -1) context.commit('WON');
        else
            context.commit(
                context.state.current === context.state.total ? 'LOST' : 'INCREMENT_TURN',
            );
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
