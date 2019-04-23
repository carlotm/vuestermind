import Vue from 'vue';
import Vuex from 'vuex';

import { TOTAL, INIT_TURN, INIT_SECRET, INIT_FEEDBACK, COLORS } from './settings';

Vue.use(Vuex);

export const state = {
    total: TOTAL,
    current: 1,
    currentTurn: INIT_TURN,
    secret: INIT_SECRET,
    colors: COLORS,
    won: false,
    lost: false,
    forceReset: false,
    feedback: INIT_FEEDBACK,
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
};

export const mutations = {
    GENERATE_SECRET(state) {
        let s = new Set();
        while (s.size !== 4) s.add(Math.round(Math.random() * (state.colors.length - 1)));
        state.secret = [...s];
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
    RESET_GAME(state) {
        state.total = 2;
        state.current = 1;
        state.currentTurn = [-1, -1, -1, -1];
        state.secret = [-2, -2, -2, -2];
        state.won = false;
        state.lost = false;
        state.forceReset = !state.forceReset;
        state.feedback = Array.from(' '.repeat(state.total + 1));
    },
    FEEDBACK(state) {
        let fb = '';

        for (let i = 0; i < state.currentTurn.length; i++) {
            const found = state.secret.findIndex(x => x === state.currentTurn[i]);
            if (found === -1) continue;
            fb += found === i ? '1' : '0';
        }

        state.feedback[state.current] = fb;
    },
};

export const actions = {
    generateSecret: context => {
        context.commit('GENERATE_SECRET');
    },
    checkTurn: context => {
        const win = context.state.currentTurn.findIndex((x, i) => {
            return x !== context.state.secret[i];
        });

        context.commit('FEEDBACK');
        context.commit('RESET_TURN');

        if (win === -1) {
            context.commit('WON');
            return;
        }

        if (context.state.current === context.state.total) {
            context.commit('LOST');
            return;
        }

        context.commit('INCREMENT_TURN');
    },
    updateCurrentTurn: (context, payload) => {
        context.commit('UPDATE_CURRENT_TURN', payload);
    },
    startNewGame: context => {
        context.commit('RESET_GAME');
        context.commit('GENERATE_SECRET');
    },
    getFeedback: context => {
        context.commit('FEEDBACK');
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
