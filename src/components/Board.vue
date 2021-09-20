<template>
    <section id="board">
        <section id="secret"></section>
        <Turn
            v-for="turn in total"
            v-bind:class="{ active: isActive(total - turn) }"
            v-bind:key="total - turn + 1"
            v-bind:index="total - turn + 1"
        />
    </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import Turn from './Turn.vue';

export default {
    name: 'Board',
    components: {
        Turn,
    },
    computed: {
        ...mapGetters(['isActive']),
        ...mapState(['total']),
    },
};
</script>

<style>
#secret {
    height: var(--peg-radius);
    line-height: var(--peg-radius);
    border-radius: var(--border-radius);
    background-color: var(--sand);
    box-shadow: inset 0 0 4px 0 var(--sand-d);
}

#board {
    max-width: 242px;
    width: 100%;
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-main);
    display: flex;
    flex-direction: column;
    padding: var(--air-s);
}
</style>
