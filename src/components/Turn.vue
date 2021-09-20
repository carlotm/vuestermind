<template>
    <section class="Turn">
        <Pippolo
            v-for="x in 4"
            v-bind:key="x"
            v-bind:isDisabled="index !== current"
            v-bind:index="x"
        />
    </section>
</template>

<script>
import { mapState } from 'vuex';

import Pippolo from './Pippolo.vue';

export default {
    name: 'Turn',
    props: {
        index: {
            type: Number,
            required: true,
        },
    },
    components: {
        Pippolo,
    },
    computed: {
        ...mapState(['current']),
    },
};
</script>

<style>
.Turn {
    height: var(--peg-radius);
    line-height: var(--peg-radius);
    border-radius: var(--border-radius);
    margin-top: var(--air-s);
    display: flex;
    justify-content: space-between;
    transition: opacity 0.4s ease;
    opacity: 0.1;
}

.Turn.is-active {
    opacity: 1;
}
</style>
