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
            required: true,
        },
    },
    data: () => {
        return {
            colorIndex: -1,
        };
    },
    computed: {
        ...mapState(['colors']),
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

    &:disabled {
        cursor: not-allowed;
    }
}
</style>
