<template>
    <button id="check" @click="checkTurn" v-bind:disabled="!isCurrentTurnValid"></button>
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
#check {
    height: var(--peg-radius);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-main);
    background-color: var(--fiorentina);
    padding-left: calc(var(--peg-radius) / 2);
    padding-right: calc(var(--peg-radius) / 2);
    color: var(--white);
    font-family: var(--font-main);
    font-size: 24px;
    position: absolute;
    text-transform: uppercase;
    bottom: 0;
    right: calc(var(--air) * -1);
    margin: var(--air-s);
    opacity: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
}

#check:before {
    content: 'check';
}

#check:disabled {
    cursor: not-allowed;
    opacity: 0.2;
}

@media only screen and (max-width: 767px) {
    #check {
        padding-left: calc(var(--peg-radius) / 4);
        padding-right: calc(var(--peg-radius) / 4);
    }

    #check:before {
        content: '✓';
    }
}
</style>
