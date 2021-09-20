<template>
    <button class="Check" @click="checkTurn" v-bind:disabled="!isCurrentTurnValid" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Check',
    methods: {
        ...mapActions(['checkTurn']),
    },
    computed: {
        ...mapGetters(['isCurrentTurnValid']),
    },
};
</script>

<style>
.Check {
    height: var(--peg-radius);
    padding: 0 var(--air);
    background-color: var(--fiorentina);
    background-color: var(--fiorentina);
    color: var(--white);
    font-size: 24px;
    position: absolute;
    text-transform: uppercase;
    bottom: 0;
    right: calc(var(--air) * -1);
    margin: var(--air-s);
    opacity: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.Check:before {
    content: 'check';
}

.Check:disabled {
    cursor: not-allowed;
    opacity: 0.2;
}

@media only screen and (max-width: 767px) {
    .Check {
        padding-left: calc(var(--peg-radius) / 4);
        padding-right: calc(var(--peg-radius) / 4);
    }

    .Check:before {
        content: '✓';
    }
}
</style>
