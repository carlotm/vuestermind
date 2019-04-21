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

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

#check {
    @media only screen and (max-width: 767px) {
        padding-left: $h / 4;
        padding-right: $h / 4;
    }
    @include hlh($h);
    @include button-reset;
    @include main-shadow;
    border-radius: $bd;
    background-color: $fiorentina;
    padding-left: $h / 2;
    padding-right: $h / 2;
    color: $white;
    font-family: $main-font;
    font-size: 24px;
    position: absolute;
    text-transform: uppercase;
    bottom: 0;
    right: -$aria * 2;
    margin: $aria;
    opacity: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;

    &:before {
        @media only screen and (max-width: 767px) {
            content: '✓';
        }
        content: 'check';
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.2;
    }
}
</style>
