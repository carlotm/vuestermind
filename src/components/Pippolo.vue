<template>
    <button
        class="pippolo"
        @click="loopColor"
        v-bind:style="{ backgroundColor: colors[colorIndex] }"
        v-bind:disabled="isDisabled"
    ></button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Pippolo',
    props: {
        isDisabled: {
            type: Boolean,
            default: true,
        },
        index: {
            type: Number,
        },
        color: {
            type: Number,
            default: -1,
        },
    },
    data: () => {
        return {
            colorIndex: -1,
        };
    },
    computed: {
        ...mapState(['colors', 'forceReset']),
    },
    methods: {
        ...mapActions(['updateCurrentTurn']),
        loopColor() {
            this.colorIndex =
                this.colorIndex === this.colors.length - 1 ? 0 : ++this.colorIndex;
            this.updateCurrentTurn({
                index: this.index - 1,
                colorIndex: this.colorIndex,
            });
        },
    },
    watch: {
        forceReset() {
            this.colorIndex = -1;
        },
    },
    mounted() {
        if (this.color > -1) this.colorIndex = this.color;
    },
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

.pippolo {
    @include size($h, $h);
    @include button-reset;
    border: 0;
    border-radius: $h;
    background-color: $sand;
    box-shadow: inset 0 0 4px 0 rgba($black, 0.2);

    &:disabled {
        cursor: not-allowed;
    }
}
</style>
