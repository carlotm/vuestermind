import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { actions, mutations, getters, state } from '@/store';

describe('Actions', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state,
            mutations,
            actions,
            getters,
        });
    });

    afterEach(() => {
        store.state.current = 1;
        store.state.currentTurn = [-1, -1, -1, -1];
    });

    it('increments the current turn', async () => {
        await store.dispatch('checkTurn');
        expect(store.state.currentTurn).toMatchObject([-1, -1, -1, -1]);
        expect(store.state.current).toEqual(2);
    });

    it('generate a 4 digits code', async () => {
        await store.dispatch('generateSecret');
        expect(store.state.secret.size).toEqual(4);
    });

    it('updates the current turn', async () => {
        await store.dispatch('updateCurrentTurn', {index: 1, colorIndex: 5});
        expect(store.state.currentTurn).toHaveLength(4);
        expect(store.state.currentTurn).toMatchObject([-1, 5, -1, -1]);
        await store.dispatch('updateCurrentTurn', {index: 3, colorIndex: 3});
        expect(store.state.currentTurn).toMatchObject([-1, 5, -1, 3]);
    });

    it('translation CSS property of the check button', async () => {
        expect(store.getters.checkButtonTranslation)
            .toEqual('translate(100%, calc(-0% - 0px))');
        store.state.current = 6;
        expect(store.getters.checkButtonTranslation)
            .toEqual('translate(100%, calc(-500% - 50px))');
        store.state.current = 3;
        expect(store.getters.checkButtonTranslation)
            .toEqual('translate(100%, calc(-200% - 20px))');
    });

    it('check if the turn is active', async () => {
        expect(store.getters.isActive(0)).toEqual(true);
        expect(store.getters.isActive(5)).toEqual(false);
        store.state.current = 6;
        expect(store.getters.isActive(5)).toEqual(true);
        expect(store.getters.isActive(3)).toEqual(true);
        expect(store.getters.isActive(8)).toEqual(false);
    });

    it('check if the turn is valid', async () => {
        await store.dispatch('updateCurrentTurn', {index: 0, colorIndex: 1});
        expect(store.getters.isCurrentTurnValid).toEqual(false);
        await store.dispatch('updateCurrentTurn', {index: 1, colorIndex: 5});
        expect(store.getters.isCurrentTurnValid).toEqual(false);
        await store.dispatch('updateCurrentTurn', {index: 2, colorIndex: 3});
        expect(store.getters.isCurrentTurnValid).toEqual(false);
        await store.dispatch('updateCurrentTurn', {index: 3, colorIndex: 4});
        expect(store.getters.isCurrentTurnValid).toEqual(true);

        // 2 or more pippoli with the same color are not valid
        await store.dispatch('updateCurrentTurn', {index: 3, colorIndex: 3});
        expect(store.getters.isCurrentTurnValid).toEqual(false);
        await store.dispatch('updateCurrentTurn', {index: 0, colorIndex: 3});
        expect(store.getters.isCurrentTurnValid).toEqual(false);
    });
});
