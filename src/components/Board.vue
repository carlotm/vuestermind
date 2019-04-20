<template>
    <section id="board">
        <Secret />
        <Turn
            v-for="turn in total"
            v-bind:class="{ active: isActive(total - turn) }"
            v-bind:key="total - turn"
        />
    </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import Secret from './Secret.vue';
import Turn from './Turn.vue';

export default {
    name: 'Board',
    components: {
        Secret,
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
