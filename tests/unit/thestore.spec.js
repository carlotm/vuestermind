import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { actions, mutations, state } from '@/store';

describe('Actions', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state,
            mutations,
            actions,
        });
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
});
