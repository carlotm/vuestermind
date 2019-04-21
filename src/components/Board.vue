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

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

#secret {
    @include hlh($h);
    border-radius: $bd;
    background-color: $sand;
    box-shadow: inset 0 0 4px 0 rgba($black, 0.2);
}

#board {
    @include limit-to(242px);
    @include main-shadow;
    background-color: $white;
    border-radius: $bd;
    display: flex;
    flex-direction: column;
    padding: $aria;
}
</style>
