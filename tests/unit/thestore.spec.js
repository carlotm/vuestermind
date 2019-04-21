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

    it('increments the current turn', () => {
        return store.dispatch('checkTurn')
            .then(res => {
                expect(store.state.currentTurn).toEqual(2);
            });
    });

    it('generate a 4 digits code', () => {
        return store.dispatch('generateSecret')
            .then(res => {
                expect(store.state.secret.size).toEqual(4);
            });
    });
});
